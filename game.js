/* Missão Dinheiro Pocket — lógica do jogo. Usa CARDS e EXTRA de cartas.js. */
document.documentElement.lang="pt-BR";
/* Imagens em assets/personagens/ (quadradas 192×192). */
const ASSETS={"Caio":"assets/personagens/caio-idle.webp","Mel":"assets/personagens/mel-idle.webp","Leticia":"assets/personagens/leticia-idle.webp","Vinicius":"assets/personagens/vinicius-idle.webp","Bia":"assets/personagens/bia-idle.webp","Tiko":"assets/personagens/tiko-idle.webp","logo":"assets/personagens/logo-main.webp"};
const POSE={"Caio":{"think":"assets/personagens/caio-think.webp","cheer":"assets/personagens/caio-cheer.webp"},"Mel":{"think":"assets/personagens/mel-think.webp","cheer":"assets/personagens/mel-cheer.webp"},"Leticia":{"think":"assets/personagens/leticia-think.webp","cheer":"assets/personagens/leticia-cheer.webp"},"Vinicius":{"think":"assets/personagens/vinicius-think.webp","cheer":"assets/personagens/vinicius-cheer.webp"},"Bia":{"think":"assets/personagens/bia-idle.webp","cheer":"assets/personagens/bia-cheer.webp"},"Tiko":{"think":"assets/personagens/tiko-think.webp","cheer":"assets/personagens/tiko-cheer.webp"}};
const NAMES={Leticia:'Letícia'};
const KEY_SAVE='mdp-pocket-v3-save',KEY_TUT='mdp-pocket-v3-tut';
/* Chaves autorizadas em 14/11/2026 (ver CLAUDE.md) */
const KEY_CHAR='mdp-pocket-char',KEY_SOM='mdp-pocket-som',KEY_CONQ='mdp-pocket-conquistas',KEY_FB='mdp-pocket-fb';
/* Versão que vai no resumo do feedback, para saber de qual jogo veio cada resposta */
const VERSAO_JOGO='2026-11-15 (revisão das cartas; opções da cena sorteadas)';
const PERSONAGENS=['Caio','Mel','Leticia','Vinicius','Bia','Tiko'];
/* Faixas: a chave '8–11' continua (álbum salvo depende dela), mas aparece como 8 a 12 anos. '13+' = jovens e adultos. */
const FAIXAS=['5–7','8–11','13+'];
const FAIXA_TXT={'5–7':'5 a 7 anos','8–11':'8 a 12 anos','13+':'13 anos ou mais'};
/* Conceitos que só entram depois da base: Juros, Parcelamento e Cartão pedem Empréstimo ou Poupança antes */
const PRE={'Juros':['Empréstimo','Poupança'],'Parcelamento':['Empréstimo','Poupança'],'Cartão de crédito':['Empréstimo','Poupança']};
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
let S=null,R=null,ph='setup',view={},DB=null,UID=null,CANEDIT=false,CONN='ok',TUTI=0;
function albumList(){return store.get('mdp-album')||[]}
/* Guarda o conceito no álbum; se a faixa ficar completa nesta partida, marca para celebrar no fim */
function album(t){const a=albumList();if(a.indexOf(t)<0){a.push(t);store.set('mdp-album',a);
 const c=CARDS.find(x=>x.title===t);if(c&&S){const tot=CARDS.filter(x=>x.faixa===c.faixa),tem=tot.filter(x=>a.includes(x.title));if(tem.length===tot.length){S.completou=S.completou||[];if(!S.completou.includes(c.faixa))S.completou.push(c.faixa)}}}}
function albumN(){return albumList().length}
function albumFaixa(f){const a=albumList(),tot=CARDS.filter(c=>c.faixa===f);return {tem:tot.filter(c=>a.includes(c.title)).length,tot:tot.length}}
function persist(){if(S&&['clues','falseq','reveal','scene','sceneRes','bot'].includes(ph))store.set(KEY_SAVE,{S,R,ph})}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[...Array(n+1).keys()];for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function hasTok(n,words,t){if(t.includes(' '))return n.includes(t);return words.some(w=>w.startsWith(t)||(t.length>=5&&w.length>=t.length&&lev(w.slice(0,t.length),t)<=1))}
function evalGuess(c,g){const n=norm(g);if(!n)return null;const words=n.split(' ');const x=EXTRA[c.title]||{};
 for(const m of c.correct.map(norm)){if(n===m||n.includes(m))return'ok'}
 for(const set of (x.sets||[])){if(set.every(t=>hasTok(n,words,t)))return'ok'}
 for(const m of c.near.map(norm)){if(n===m||n.includes(m))return'near'}
 return'bad'}
/* Modo solo: a criança joga todas as cartas; o Robô das Pistas é colega (comenta a escolha na cena), não adversário. */
function isBot(t){return false}
function team(){return S.mode==='solo'?0:S.round%2}
function card(){return CARDS[S.deck[S.round]]}
/* Sorteio: primeiro conceitos ainda não descobertos (álbum), depois os já vistos;
   Juros/Parcelamento/Cartão só entram depois da base (no álbum ou antes na partida). */
function montarBaralho(pool,len){const a=albumList();
 const novos=shuffle(pool.filter(i=>!a.includes(CARDS[i].title))),vistos=shuffle(pool.filter(i=>a.includes(CARDS[i].title)));
 const deck=[],esperando=[];
 const pode=i=>{const p=PRE[CARDS[i].title];return !p||p.some(t=>a.includes(t)||deck.some(j=>CARDS[j].title===t))};
 for(const i of [...novos,...vistos]){if(deck.length>=len)break;if(pode(i)){deck.push(i);for(let k=esperando.length-1;k>=0;k--)if(deck.length<len&&pode(esperando[k]))deck.push(esperando.splice(k,1)[0])}else esperando.push(i)}
 while(deck.length<len&&esperando.length)deck.push(esperando.shift());
 return deck}
function newGame(mode,names,rule,helps,faixa,len,ch,cena){const pool=CARDS.map((c,i)=>i).filter(i=>faixa==='todas'||!CARDS[i].faixa||CARDS[i].faixa===faixa);
 S={mode,names,rule,helps,faixa,len,char:ch||null,cena:cena!==false,life:[{dica:0,opc:0,falsa:0},{dica:0,opc:0,falsa:0}],deck:montarBaralho(pool,len),round:0,score:[0,0],log:[],t0:Date.now()};startRound()}
function startRound(){
 R={k:1,shown:1,blocked:false,nextBlocked:false,elim:false,correctAt:0,disc:0,bonus:0,fakePick:null,choice:null,msg:null,msgKind:'',showKey:false,adults:0,guesses:0,nears:0,lifeUsed:false,lifeKind:'',hint:null,options:null,fakeKnown:false,ord:shuffle([0,1,2])};
 /* Modo solo: o Robô das Pistas escolhe a opção dele na cena (mais vezes a melhor) para comentar depois; não pontua */
 if(S.mode==='solo'){const c=card(),idx=[...c.pts.keys()].sort((a,b)=>c.pts[b]-c.pts[a]),q=Math.random();R.robo=q<.6?idx[0]:q<.9?idx[1]:idx[2]}
 if(isBot(team())){const c=card();const r=Math.random();const k=r<.12?0:r<.3?2:r<.55?3:r<.75?4:r<.9?5:6;
  const q=Math.random();const idx=[...c.pts.keys()].sort((a,b)=>c.pts[b]-c.pts[a]);const ch=q<.45?idx[0]:q<.8?idx[1]:idx[2];
  R.bot={k,disc:k?7-k:0,bonus:k&&Math.random()<.5?2:0,choice:ch,sp:c.pts[ch]};ph='bot'}
 else ph='clues';
 render()}
function setMsg(t,k){R.msg=t;R.msgKind=k||''}
/* Som curto gerado pelo navegador (sem arquivos). Começa desligado; a escolha fica em mdp-pocket-som. Nunca há som de erro. */
let AC=null;
function somLigado(){return !!store.get(KEY_SOM)}
function som(tipo){if(!somLigado())return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();
 const N={pista:[[880,.06,.08]],acerto:[[523,.12,.15],[659,.18,.15]],quase:[[440,.12,.06],[440,.12,.06]],mais2:[[659,.08,.13],[784,.08,.13],[988,.16,.13]],fim:[[523,.1,.14],[659,.1,.14],[784,.1,.14],[1047,.28,.14]]}[tipo];if(!N)return;
 let t=AC.currentTime;for(const[f,d,v]of N){const o=AC.createOscillator(),g=AC.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.02);t+=d*.9}}catch(e){}}
/* Fecha o painel de configurações e volta a tela para o título dele */
function fechaCfg(){const d=$('cfg');if(!d)return;d.open=false;const s=d.querySelector('summary');s.scrollIntoView({block:'nearest'});s.focus({preventScroll:true})}
function setSom(v){store.set(KEY_SOM,!!v);if(v)som('pista');if(ph==='setup'){atualizaSom()}else render()}
function toggleSom(){setSom(!somLigado())}
/* Na tela inicial, atualiza só os controles de som (redesenhar apagaria as escolhas já feitas) */
function atualizaSom(){const on=somLigado();document.querySelectorAll('.som').forEach(b=>{b.setAttribute('aria-pressed',on);b.setAttribute('aria-label','Som '+(on?'ligado':'desligado'));b.querySelector('span').textContent=on?'🔊':'🔇'});
 const r=document.querySelector(`input[name=somcfg][value=${on?'on':'off'}]`);if(r)r.checked=true}
/* Recomeçar o álbum: pede confirmação no próprio botão, depois apaga álbum e conquistas deste aparelho */
function zeraAlbum(b){if(!b.dataset.conf){b.dataset.conf=1;b.textContent='Toque de novo para apagar o álbum';b.classList.add('alerta');return}
 store.del('mdp-album');store.del(KEY_CONQ);delete b.dataset.conf;b.classList.remove('alerta');b.textContent='Álbum recomeçado';b.disabled=true;
 const a=$('album');if(a)a.textContent='0 de '+CARDS.length;anuncia('Álbum e conquistas apagados neste aparelho.')}
const botaoSom=()=>`<button class="ghost btn-g top-b som" aria-pressed="${somLigado()}" aria-label="Som ${somLigado()?'ligado':'desligado'}" onclick="toggleSom()"><span aria-hidden="true">${somLigado()?'🔊':'🔇'}</span></button>`;
function advance(semSom){
 if(R.k>=6){ph='reveal';R.shown=6;return}
 R.k++;R.shown=R.k;R.blocked=R.nextBlocked;R.nextBlocked=false;if(!semSom)som('pista')}
function guess(res){
 const c=card(),x=EXTRA[c.title]||{};R.options=null;
 if(res==='ok'){album(c.title);som('acerto');R.correctAt=R.k;R.disc=R.lifeUsed?Math.ceil((7-R.k)/2):7-R.k;R.shown=6;ph='falseq';
  if(R.fakeKnown){R.fakePick=-1;R.bonus=0}
  setMsg('Acertou na pista '+R.k+'! Era "'+c.title+'". Vale '+R.disc+' ponto'+(R.disc>1?'s':'')+(R.lifeUsed?' (metade, porque usaram uma ajuda)':'')+'.','good');return}
 R.guesses++;
 if(res==='near'){R.nears++;setMsg('Quase! '+(x.nudge||'')+' Não vale ponto, mas ninguém sai da carta.','');som('quase');advance(true);return}
 if(res==='bad'){
  if(S.rule==='A'){R.elim=true;R.shown=R.k;ph='reveal';setMsg('Palpite errado. Nesta carta, a equipe não pode mais responder.','bad');return}
  R.nextBlocked=true;setMsg('Palpite errado. Na próxima pista, a equipe não pode dar palpite.','bad');advance();return}
 setMsg('','');advance()}
function onGuess(res){guess(res);render()}
function onType(){const inp=$('g');const g=inp.value.trim();if(!g)return;const c=card();const r=evalGuess(c,g);inp.value='';guess(r);render()}
function onAdult(){guess('ok');R.adults++;render()}
function pass(){if(R.blocked&&R.k>=6){advance()}else guess('pass');render()}
function toggleKey(){R.showKey=!R.showKey;render()}
function pickFake(i){if(R.fakePick!==null)return;R.fakePick=i;const c=card();R.bonus=i===c.fake?2:0;if(R.bonus)som('mais2');render()}
function toScene(){ph='scene';render()}
/* Sem cena: fecha a carta só com descoberta e pista falsa e vai para a próxima */
function fecharSemCena(){const c=card(),t=team();R.sp=0;R.choice=null;const tot=R.disc+R.bonus;S.score[t]+=tot;
 S.log.push({round:S.round,t,title:c.title,k:R.correctAt,elim:R.elim,bonus:R.bonus,sp:0,ch:null,tot,adults:R.adults,guesses:R.guesses,nears:R.nears,life:R.lifeKind,semCena:true});next()}
const botaoCena=()=>S.cena===false?`<button class="btn-y full" onclick="fecharSemCena()">${S.round>=S.len-1?'Ver resultado':'Próxima carta'}</button>`:'<button class="btn-y full" onclick="toScene()">Ir para Cena e Escolha</button>';
function pickOpt(i){R.choice=i;render()}
function useLife(k){
 if(!S.helps||R.lifeUsed||S.life[team()][k])return;const c=card(),x=EXTRA[c.title]||{};const t=team();
 if(k==='dica'){S.life[t].dica=1;R.lifeUsed=true;R.lifeKind='dica';R.hint=(x.tipo||'')+' Começa com a letra "'+c.title[0].toUpperCase()+'".'}
 else if(k==='opc'){if(R.blocked)return;S.life[t].opc=1;R.lifeUsed=true;R.lifeKind='opcoes';R.options=shuffle([c.title,...shuffle(CARDS.filter(y=>y.title!==c.title&&(!c.faixa||y.faixa===c.faixa)).map(y=>y.title)).slice(0,3)])}
 else if(k==='falsa'){if(c.fake>R.k){setMsg('A pista falsa ainda não apareceu. Esta ajuda não foi gasta; tente depois.','');render();return}
  S.life[t].falsa=1;R.lifeUsed=true;R.lifeKind='pista_falsa';R.fakeKnown=true;setMsg('Marcamos a pista falsa. Nesta carta não há bônus de +2.','')}
 render()}
function pickOption(i){const c=card();const o=R.options&&R.options[i];if(o===undefined)return;guess(o===c.title?'ok':'bad');render()}
function confirmScene(){if(R.choice===null)return;const c=card();R.sp=c.pts[R.choice];const t=team();const tot=R.disc+R.bonus+R.sp;S.score[t]+=tot;
 S.log.push({round:S.round,t,title:c.title,k:R.correctAt,elim:R.elim,bonus:R.bonus,sp:R.sp,ch:R.choice,tot,adults:R.adults,guesses:R.guesses,nears:R.nears,life:R.lifeKind});ph='sceneRes';render()}
function botDone(){const c=card(),b=R.bot;const tot=b.disc+b.bonus+b.sp;S.score[1]+=tot;
 S.log.push({round:S.round,t:1,title:c.title,k:b.k,elim:false,bonus:b.bonus,sp:b.sp,ch:b.choice,tot,bot:true});next()}
function next(){if(S.round>=S.len-1){S.t1=Date.now();ph='final';store.del(KEY_SAVE);registrarConquistas();som('fim');render();return}S.round++;startRound()}
/* Conquistas de atitude (nunca por volume de partidas nem rapidez), calculadas pelo registro da partida */
const CONQ=[['detetive','🔍','Detetive','achou a pista falsa',l=>l.bonus===2],['escolha','🧭','Boa escolha','escolheu a melhor opção na cena',l=>l.sp===2],
 ['sozinho','💪','Por conta própria','descobriu sem usar ajuda',l=>l.k&&!l.life],['persistente','🌱','Não desistiu','acertou depois de um "Quase"',l=>l.k&&l.nears>0]];
function conquistas(t){const L=S.log.filter(l=>l.t===t&&!l.bot);return CONQ.map(([id,ic,nome,txt,f])=>({id,ic,nome,txt,n:L.filter(f).length})).filter(c=>c.n>0)}
function registrarConquistas(){if(S.conqOk)return;S.conqOk=true;const tot=store.get(KEY_CONQ)||{};
 const eq=S.mode==='solo'?[0]:[0,1];eq.forEach(t=>conquistas(t).forEach(c=>{tot[c.id]=(tot[c.id]||0)+c.n}));store.set(KEY_CONQ,tot)}
function resumeGame(){const d=store.get(KEY_SAVE);if(d){S=d.S;R=d.R;ph=d.ph;render()}}
function quit(){if(!view.confirmQuit){view.confirmQuit=true;render();return}view.confirmQuit=false;store.del(KEY_SAVE);ph='setup';render()}
function cancelQuit(){view.confirmQuit=false;render()}

/* ---------- conexão com o banco de testes ---------- */
async function init(){CONN='ok'}
function updConn(){const c=$('conn');if(c){c.className='msg good';c.textContent='Pronto para jogar. No final, você poderá enviar suas percepções por WhatsApp.'}}

/* ---------- telas ---------- */
const logo=()=>`<h1 class="sr">Missão Dinheiro: Pistas</h1><div class="top"><img src="${ASSETS.logo}" alt="Missão Dinheiro Club"><span style="font-weight:900;color:var(--teal);letter-spacing:.06em">PISTAS</span></div>`;
/* Modo solo: um placar só, com o personagem escolhido. Equipes: dois placares. */
function scoreboard(){if(S.mode==='solo'){const ch=S.char;return `<div class="score solo"><div class="chip t0 on">${ch?`<img class="av" src="${ASSETS[ch]}" alt="">`:''}<div><small>${esc(S.names[0])}${ch?' · '+esc(NAMES[ch]||ch):''}</small><b>${S.score[0]}</b></div></div></div>`}
 return `<div class="score">${[0,1].map(t=>`<div class="chip t${t} ${(ph!=='final'&&team()===t)?'on':''}"><small>${esc(S.names[t])}</small><b>${S.score[t]}</b></div>`).join('')}</div>`}
/* Topo da partida numa linha só: logo, progresso (texto + marcas) e Encerrar */
function topbar(){const dots=Array.from({length:S.len},(_,i)=>`<i class="${i<S.round?'done':i===S.round?'now':''}"></i>`).join('');
 return `<h1 class="sr">Missão Dinheiro: Pistas</h1><div class="top game-top"><img src="${ASSETS.logo}" alt="Missão Dinheiro Club"><span class="prog"><b>Carta ${S.round+1} de ${S.len}</b><span class="dots" aria-hidden="true">${dots}</span></span>${view.confirmQuit?`<span class="row" style="flex:0 0 auto"><button class="ghost btn-y top-b" onclick="quit()">Sair do jogo</button><button class="ghost btn-g top-b" onclick="cancelQuit()">Voltar</button></span>`:`<span class="row" style="flex:0 0 auto;gap:6px">${botaoSom()}<button class="ghost btn-g top-b" onclick="quit()">Encerrar</button></span>`}</div>`}
function who(){const t=team();if(S.mode==='solo')return `<div class="who"><b>${esc(S.names[t])}</b>, é sua vez! O <b>Robô das Pistas</b> joga junto e dá a opinião dele na cena.</div>`;
 return `<div class="who"><b>${esc(S.names[t])}</b> responde. <b>${esc(S.names[1-t])}</b> lê as pistas e segura a tela do gabarito.</div>`}
/* Cor de cada tema (faixa sob o banner e fundo do ícone). Cartas sem tema usam o amarelo da marca. */
const TEMA={'Poupar e guardar':'poupar','Consumo e escolhas':'consumo','Dinheiro digital e segurança':'digital','Trabalho e ganhar dinheiro':'trabalho','Ajudar e compartilhar':'ajudar'};
/* Durante as pistas o ícone NÃO aparece (ele entregaria a resposta): mostra "?" e o nome do tema.
   O ícone só aparece quando o conceito é revelado. pose: 'cheer' (acertou) ou 'think' (ninguém acertou). */
function banner(c,revealed,pose){const p=pose||(revealed?'cheer':'think');
 return `<div class="banner tema-${TEMA[c.tema]||'base'}"><div class="num ic" aria-hidden="true">${revealed?(c.icon||'★'):'?'}</div><div class="t"><small>${revealed?'O conceito era':'Descubra o conceito'}${c.tema?' · '+esc(c.tema):''}</small><h2 tabindex="-1">${revealed?esc(c.title):'O que é?'}</h2></div><img src="${(POSE[c.char]&&POSE[c.char][p])||ASSETS[c.char]}" alt="Personagem ${esc(NAMES[c.char]||c.char)}"></div>`}
function clueList(c,mode){let h='<div class="clues">';
 for(let i=1;i<=6;i++){
  /* Pistas fechadas numa linha só, para os botões de palpite ficarem perto da pista nova */
  if(i>R.shown){const n=7-i;h+=`<div class="clue lock"><div class="n" aria-hidden="true">🔒</div><p>Mais ${n} pista${n>1?'s':''} fechada${n>1?'s':''}</p></div>`;break}
  const isFake=((ph==='falseq'&&R.fakePick!==null)||ph==='scene'||ph==='sceneRes'||(ph==='reveal'&&R.correctAt)||R.fakeKnown)&&i===c.fake;
  const pickable=mode==='pick'&&R.fakePick===null;
  const cls=['clue',pickable?'pick':'',R.fakePick===i?'sel':'',isFake?'fake':''].join(' ');
  const tag=isFake?'<div class="tag">Pista falsa</div>'+(ph==='falseq'&&R.bonus===2?'<span class="mais2" aria-hidden="true">+2</span>':''):'';
  if(pickable)h+=`<button class="${cls}" onclick="pickFake(${i})"><div class="n">${i}</div><p>${esc(c.p[i-1])}</p></button>`;
  else h+=`<div class="${cls}"><div class="n">${i}</div><div style="min-width:0"><p>${esc(c.p[i-1])}</p>${tag}</div></div>`}
 return h+'</div>'}
function msgBox(){return R.msg?`<div class="msg ${R.msgKind}">${esc(R.msg)}</div>`:''}
function keyBox(c){if(S.mode==='solo')return '';
 return R.showKey?`<div class="keybox"><div><b>Só quem lê olha esta tela.</b></div><div><b>Aceitar:</b> ${esc(c.correct.join('; '))}. Também vale qualquer resposta que diga o mesmo com outras palavras.</div><div><b>Quase (dica, sem ponto):</b> ${esc(c.near.join('; '))}. ${esc((EXTRA[c.title]||{}).nudge||'')}</div><div><b>Pista falsa:</b> nº ${c.fake}</div><button class="keybtn" onclick="toggleKey()">Esconder gabarito</button></div>`
 :`<button class="keybtn" onclick="toggleKey()">Gabarito (só o leitor)</button>`}
function lifeBar(){if(!S.helps||isBot(team()))return '';
 const t=team(),L=S.life[t],lock=R.lifeUsed;
 const b=(k,label,sub)=>`<button class="life ${L[k]?'used':''}" ${(L[k]||lock||(k==='opc'&&R.blocked))?'disabled':''} onclick="useLife('${k}')"><b>${label}</b><small>${L[k]?'já usada':sub}</small></button>`;
 return `<div class="lab">Ajudas: uma de cada por partida, uma por carta. Usar ajuda vale metade dos pontos da descoberta</div><div class="lifes">${b('dica','Dica','tipo da resposta')}${b('opc','Opções','4 respostas')}${b('falsa','Pista falsa','mostra qual é')}</div>${R.hint?`<div class="msg hint-ajuda">${esc(R.hint)}</div>`:''}${R.options?`<div class="stack" role="group" aria-label="Opções de resposta">${R.options.map((o,i)=>`<button class="opt B opt-ajuda" onclick="pickOption(${i})"><div class="l" aria-hidden="true">${'ABCD'[i]}</div><span class="x">${esc(o)}</span></button>`).join('')}</div>`:''}`}
function viewClues(c){
 const solo=S.mode==='solo';
 let ctl;
 if(R.blocked){ctl=`<div class="msg">Esta pista: sem palpite. Leiam a próxima.</div><button class="btn-y full" onclick="pass()">${R.k>=6?'Fim das pistas':'Ler próxima pista'}</button>`}
 else if(solo){ctl=`<div class="in"><label for="g" class="sr">Seu palpite</label><input id="g" type="text" placeholder="Escreva o palpite" autocomplete="off" onkeydown="if(event.key==='Enter')onType()"><button class="btn-y" onclick="onType()">Palpitar</button></div>
 <div class="row"><button class="btn-g" style="color:var(--ink);border-color:var(--line)" onclick="pass()">${R.k>=6?'Desistir da carta':'Sem palpite, próxima pista'}</button></div>
 <div class="row"><button class="keybtn" style="background:#EEF3FA;color:var(--ink)" onclick="onAdult()">Adulto: conta como acerto</button></div>`}
 else{ctl=`<div class="lab">Palpite da pista ${R.k} (um por pista)</div>
 <div class="ans-row"><button class="ans btn-t" onclick="onGuess('ok')"><span class="ic" aria-hidden="true">✓</span>Acertou</button><button class="ans btn-y" onclick="onGuess('near')"><span class="ic" aria-hidden="true">≈</span>Quase</button><button class="ans btn-r" onclick="onGuess('bad')"><span class="ic" aria-hidden="true">✗</span>Errou</button></div>
 <button class="btn-g full" style="color:var(--ink);border-color:var(--line)" onclick="pass()">${R.k>=6?'Ninguém acertou':'Sem palpite, próxima pista'}</button>`}
 return `${who()}<div class="card">${banner(c,false)}<div class="body"><div class="lab">Pistas · ${R.k} de 6</div>${clueList(c)}${msgBox()}<hr class="hr">${ctl}${lifeBar()}${keyBox(c)}<p class="hint">Acertar na pista 1 vale 6 pontos, na pista 6 vale 1.</p></div></div>`}
function viewFalse(c){const done=R.fakePick!==null;
 const dmsg=R.fakePick===-1?'A ajuda já mostrou a pista falsa, então não há bônus nesta carta.':(R.bonus?'Isso! A pista falsa estava aí. +2 pontos.':'Não foi essa. A pista falsa era a número '+c.fake+'.');
 return `<div class="card">${banner(c,true)}<div class="body">${msgBox()}<div class="lab">Qual pista é a falsa?</div><p class="small"><b>${R.fakePick===null?'Toque na pista que não combina com o conceito. Acertar vale +2.':''}</b></p>${clueList(c,'pick')}
 ${done?`<div class="msg ${R.bonus?'good':'bad'}">${dmsg}</div>${botaoCena()}`:''}</div></div>`}
function viewReveal(c){return `<div class="card">${banner(c,true,'think')}<div class="body">${msgBox()}<div class="msg"><b>${R.elim?'O leitor encerra as pistas.':'Acabaram as pistas.'}</b> A resposta era <b>${esc(c.title)}</b>. Sem pontos de descoberta nesta carta${S.cena===false?'.':', mas a equipe continua para a cena.'}</div>${clueList(c)}${botaoCena()}</div></div>`}
function viewScene(c,res){
 const L='ABC';
 /* Ordem das opções sorteada a cada carta (R.ord): a letra mostrada é a posição na tela; os pontos seguem a opção */
 const ord=R.ord||[0,1,2],LL=i=>L[ord.indexOf(i)];
 const best=Math.max(...c.pts),worst=Math.min(...c.pts);
 const um=i=>{const cls=['opt',LL(i),R.choice===i?'sel':'',res&&c.pts[i]===best?'best':'',res&&c.pts[i]===worst?'worst':''].join(' ');
  /* No resultado, o porquê vem antes e o número aparece por último (classe .late) */
  const inner=`<div class="l" aria-hidden="true">${LL(i)}</div><span class="x">${esc(c.opts[i])}${res?`<span class="why">${esc(c.why[i])}</span>`:''}</span>${res?(c.pts[i]<0?`<span class="pts neg late">${c.pts[i]}<small>pense de novo</small></span>`:`<span class="pts late">${c.pts[i]>0?'+':''}${c.pts[i]}</span>`):''}`;
  return res?`<div class="${cls}">${inner}</div>`:`<button class="${cls}" aria-pressed="${R.choice===i}" onclick="pickOpt(${i})">${inner}</button>`};
 /* Resultado: primeiro a opção escolhida, depois as outras */
 let opts=res?`<div class="lab">${S.mode==='solo'?'Você escolheu':'Vocês escolheram'}</div>${um(R.choice)}<div class="lab">As outras opções</div>${ord.filter(i=>i!==R.choice).map(um).join('')}`:ord.map(um).join('');
 let foot='';
 if(!res)foot=`<p class="hint">${S.mode==='solo'?'Escolha sem ver os pontos.':'A equipe escolhe sem ver os pontos. O leitor mostra o resultado depois.'}</p><button class="btn-y full" ${R.choice===null?'disabled':''} onclick="confirmScene()">Confirmar escolha</button>`;
 else{const tot=R.disc+R.bonus+R.sp;
  const robo=S.mode==='solo'&&R.robo!==undefined?`<div class="msg robo"><span aria-hidden="true">🤖</span> <b>Robô das Pistas:</b> ${R.robo===R.choice?'eu escolheria a mesma coisa!':'eu escolheria a <b>'+LL(R.robo)+'</b>.'} ${esc(c.why[R.robo])}</div>`:'';
  foot=`<div class="msg"><b>${S.mode==='solo'?'Por quê':'Leitor explica'}:</b> ${esc(c.why[R.choice])}</div>${robo}<div class="sum"><div><span>Descoberta</span><span>+${R.disc}</span></div><div><span>Pista falsa</span><span>+${R.bonus}</span></div><div><span>Cena e escolha</span><span>${R.sp>0?'+':''}${R.sp}</span></div><div class="tot"><span>Total da carta</span><span>${tot>0?'+':''}${tot}</span></div></div><button class="btn-y full" onclick="next()">${S.round>=S.len-1?'Ver resultado':'Próxima carta'}</button>`}
 return `<div class="card">${banner(c,true)}<div class="body"><div class="lab">Cena e escolha</div><p style="font-weight:600">${esc(c.scene)}</p><p><b>O que vocês fariam?</b></p><div class="stack">${opts}</div>${foot}</div></div>`}
function viewBot(c){const b=R.bot,L='ABC';
 return `<div class="who"><b>${esc(S.names[1])}</b> joga esta carta (jogo simulado, só para teste).</div><div class="card">${banner(c,true)}<div class="body"><div class="lab">Vez do jogo</div>
 <p>${b.k?`Descobriu o conceito na pista ${b.k}: <b>+${b.disc}</b>.`:'Não descobriu o conceito: <b>0</b>.'}</p><p>${b.k?(b.bonus?'Acertou a pista falsa: <b>+2</b>.':'Errou a pista falsa: <b>0</b>.'):'Sem pista falsa nesta carta.'}</p>
 <p>Escolheu <b>${L[(R.ord||[0,1,2]).indexOf(b.choice)]}</b>: ${esc(c.opts[b.choice])} (<b>${b.sp>0?'+':''}${b.sp}</b>)</p><div class="msg">${esc(c.why[b.choice])}</div>
 <p class="hint">O resultado do jogo é sorteado e não mede o conhecimento de ninguém. Esta carta serve para vocês lerem e conversarem.</p>
 <details class="small"><summary style="font-weight:800;cursor:pointer;min-height:44px;display:flex;align-items:center">Ver as 6 pistas</summary><div style="margin-top:8px">${(()=>{const o=R.shown;R.shown=6;const h=clueList(c);R.shown=o;return h})()}</div></details>
 <button class="btn-y full" onclick="botDone()">${S.round>=S.len-1?'Ver resultado':'Minha vez'}</button></div></div>`}
const TUT=[
['Como se joga','Duas equipes, ou uma pessoa sozinha com o Robô das Pistas de colega. As pistas aparecem uma de cada vez. Dê um palpite por pista: acertar cedo vale mais (6, 5, 4, 3, 2 ou 1 ponto).'],
['Quase certo?','Se o palpite for parecido, o jogo dá uma dica e você tenta de novo na pista seguinte. Se errar, na Regra B você só perde o palpite da próxima pista.'],
['Pista falsa','Depois de acertar, descubra qual das 6 pistas era falsa. Acertar vale mais 2 pontos.'],
['Cena e escolha','Escolha A, B ou C. A pontuação (−1, +1 ou +2) só aparece depois. O placar pode ficar negativo, e tudo bem. Quer uma partida mais rápida? Desligue a cena em Configurações.'],
['Ajudas','Com as ajudas ligadas, cada equipe usa uma vez cada: Dica (o tipo da resposta), Opções (4 respostas para escolher) e Pista falsa (mostra qual é). Só uma ajuda por carta. Usar uma ajuda tem preço: os pontos da descoberta nessa carta valem metade (arredondado para cima).']];
function openTut(){TUTI=0;ph='tut';render()}
function tutNav(d){TUTI+=d;if(TUTI>=TUT.length){store.set(KEY_TUT,1);ph='setup';render();return}if(TUTI<0)TUTI=0;render()}
function viewTut(){const t=TUT[TUTI];
 return `${logo()}<div class="card"><div class="banner"><div class="num" aria-hidden="true">${TUTI+1}</div><div class="t"><small>Como jogar · ${TUTI+1} de ${TUT.length}</small><h2 tabindex="-1">${esc(t[0])}</h2></div></div><div class="body"><p style="font-size:19px">${esc(t[1])}</p><div class="row">${TUTI>0?'<button class="btn-g" style="color:var(--ink);border-color:var(--line)" onclick="tutNav(-1)">Voltar</button>':''}<button class="btn-y" onclick="tutNav(1)">${TUTI>=TUT.length-1?'Entendi, vamos jogar':'Próximo'}</button></div><button class="keybtn" style="background:#EEF3FA;color:var(--ink)" onclick="store.set(KEY_TUT,1);ph='setup';render()">Pular</button></div></div>`}
/* Tela inicial (redesenho 14/11/2026): a carta misteriosa é a protagonista; o resto é discreto, direto sobre o azul.
   Tamanho, regra A/B e ajudas ficam em "Opções do adulto" (recolhido), com os padrões de sempre. */
let SETUP_VISTA=false;
function viewSetup(){const saved=store.get(KEY_SAVE),alb=FAIXAS.map(albumFaixa),entra=!SETUP_VISTA;SETUP_VISTA=true;
 return `<h1 class="sr">Missão Dinheiro: Pistas</h1><div class="top"><img src="${ASSETS.logo}" alt="Missão Dinheiro Club">${botaoSom()}</div>
 <section class="abertura">
  <div class="mesa${entra?' entra':''}" aria-hidden="true">
   <div class="carta tras"></div>
   <div class="carta frente"><div class="moldura"><span class="interrog">?</span><span class="nome">Missão Dinheiro</span><span class="selo">Pistas</span></div></div>
   <img class="espia esq" src="${POSE.Tiko.think}" alt=""><img class="espia dir" src="${POSE.Mel.cheer}" alt="">
  </div>
  <h2 tabindex="-1" class="sr">Missão Dinheiro: Pistas</h2>
  <p class="chamada">Seis pistas, uma delas é falsa. Descubra o conceito e decida o que fazer com o dinheiro.</p>
  <button class="albumbtn" onclick="ph='album';render()"><span aria-hidden="true">📒</span> Meu álbum <small id="album">${alb.reduce((s,x)=>s+x.tem,0)} de ${alb.reduce((s,x)=>s+x.tot,0)}</small></button>
 </section>
 ${saved?`<button class="btn-t full" onclick="resumeGame()">Continuar jogo interrompido</button>`:''}
 <div class="card setup"><div class="body">
 <div><label>Quem vai jogar?</label><div role="radiogroup" aria-label="Quem vai jogar?" class="seg mode"><label><input type="radio" name="mode" value="duo" checked onchange="setupChange()"><span><span class="faces" aria-hidden="true"><img src="${ASSETS.Caio}" alt=""><img src="${ASSETS.Bia}" alt=""></span><b>Equipes</b><small>Um celular passando de mão em mão</small></span></label><label><input type="radio" name="mode" value="solo" onchange="setupChange()"><span><span class="faces" aria-hidden="true"><img src="${ASSETS.Leticia}" alt=""><i>🤖</i></span><b>Sozinho</b><small>Com o Robô das Pistas de colega</small></span></label></div></div>
 <div class="row nomes"><div><label for="n0" id="l0" class="sr">Equipe 1</label><input id="n0" type="text" maxlength="20" value="Equipe 1" placeholder="Nome da equipe 1"></div><div id="w1"><label for="n1" id="l1" class="sr">Equipe 2</label><input id="n1" type="text" maxlength="20" value="Equipe 2" placeholder="Nome da equipe 2"></div></div>
 <div id="charbox" hidden><label id="lb_char">Escolha seu personagem</label><div role="radiogroup" aria-labelledby="lb_char" class="seg chars">${PERSONAGENS.map(p=>`<label><input type="radio" name="char" value="${p}" ${store.get(KEY_CHAR)===p?'checked':''}><span><img src="${ASSETS[p]}" alt=""><b>${esc(NAMES[p]||p)}</b></span></label>`).join('')}</div></div>
 <div><label id="lb_faixa">Idade de quem vai jogar</label><div role="radiogroup" aria-labelledby="lb_faixa" class="seg faixas"><label><input type="radio" name="faixa" value="5–7" onchange="$('fxmsg').textContent=''"><span>5 a 7 anos</span></label><label><input type="radio" name="faixa" value="8–11" onchange="$('fxmsg').textContent=''"><span>8 a 12 anos</span></label><label><input type="radio" name="faixa" value="13+" onchange="$('fxmsg').textContent=''"><span>13 anos ou mais</span></label><label><input type="radio" name="faixa" value="todas" onchange="$('fxmsg').textContent=''"><span>Todas</span></label></div><p id="fxmsg" class="fxmsg" role="alert"></p></div>
 <button id="startbtn" class="btn-y full big-start" onclick="start()">Começar</button>
 <details class="adulto" id="cfg"><summary><span class="cfg-t">Configurações <small>tamanho, erro, ajudas, cena, som, álbum</small></span><span class="cfg-acao" aria-hidden="true"><span class="abrir">Abrir ▾</span><span class="fechar">Fechar ▴</span></span></summary><div class="stack">
 <div><label>Tamanho da partida</label><div role="radiogroup" aria-label="Tamanho da partida" class="seg"><label><input type="radio" name="len" value="4"><span><b>Curta</b><br><small>4 cartas, cerca de 10 min</small></span></label><label><input type="radio" name="len" value="6" checked><span><b>Normal</b><br><small>6 cartas, cerca de 15 a 20 min</small></span></label></div></div>
 <div><label>Se errar um palpite</label><div role="radiogroup" aria-label="Se errar um palpite" class="seg"><label><input type="radio" name="rule" value="B" checked><span><b>Regra B</b><br><small>Perde só o palpite da próxima pista</small></span></label><label><input type="radio" name="rule" value="A"><span><b>Regra A</b><br><small>Sai da carta</small></span></label></div></div>
 <div><label>Ajudas estilo Show do Milhão</label><div role="radiogroup" aria-label="Ajudas estilo Show do Milhão" class="seg"><label><input type="radio" name="helps" value="on" checked><span><b>Ligadas</b><br><small>Dica, Opções e Pista falsa</small></span></label><label><input type="radio" name="helps" value="off"><span><b>Desligadas</b><br><small>Jogo sem ajudas</small></span></label></div></div>
 <div><label>Cena e escolha</label><div role="radiogroup" aria-label="Cena e escolha" class="seg"><label><input type="radio" name="cena" value="on" checked><span><b>Com cena</b><br><small>Escolher A, B ou C no fim de cada carta (+2, +1 ou −1)</small></span></label><label><input type="radio" name="cena" value="off"><span><b>Sem cena</b><br><small>Partida mais rápida: conta descoberta e pista falsa</small></span></label></div></div>
 <div><label>Som</label><div role="radiogroup" aria-label="Som" class="seg"><label><input type="radio" name="somcfg" value="on" ${somLigado()?'checked':''} onchange="setSom(true)"><span><b>Ligado</b></span></label><label><input type="radio" name="somcfg" value="off" ${somLigado()?'':'checked'} onchange="setSom(false)"><span><b>Desligado</b></span></label></div></div>
 <div><label>Álbum deste aparelho</label><button type="button" id="zeraAlb" class="btn-g full zera" onclick="zeraAlbum(this)">Recomeçar o álbum</button><p class="hint-cfg">Apaga os conceitos descobertos e as conquistas guardados neste celular. Útil quando outra criança vai jogar.</p></div>
 <button type="button" class="btn-g full fechar-cfg" onclick="fechaCfg()">Fechar configurações</button>
 </div></details>
 <button class="linkbtn" onclick="openTut()">Como se joga?</button>
 </div></div>`}
function setupChange(){const m=document.querySelector('input[name=mode]:checked').value,solo=m==='solo';
 $('l0').textContent=solo?'Seu nome':'Equipe 1';$('n0').placeholder=solo?'Seu nome':'Nome da equipe 1';$('n0').value=solo?'Você':'Equipe 1';$('n1').value=solo?'Robô das Pistas':'Equipe 2';$('w1').hidden=solo;$('charbox').hidden=!solo}
/* A faixa de idade não vem marcada: o adulto precisa escolher antes de começar */
function start(){if(CONN!=='ok')return;const m=document.querySelector('input[name=mode]:checked').value;const r=document.querySelector('input[name=rule]:checked').value;const h=document.querySelector('input[name=helps]:checked').value==='on';
 const fxEl=document.querySelector('input[name=faixa]:checked');if(!fxEl){$('fxmsg').textContent='Escolham a faixa de idade antes de começar.';const f=document.querySelector('input[name=faixa]');f.closest('div').scrollIntoView({block:'center'});f.focus();return}
 const chEl=document.querySelector('input[name=char]:checked'),ch=m==='solo'&&chEl?chEl.value:null;if(ch)store.set(KEY_CHAR,ch);
 const n0=($('n0').value.trim()||(m==='solo'?'Você':'Equipe 1')),n1=m==='solo'?'Robô das Pistas':($('n1').value.trim()||'Equipe 2');
 const ln=+document.querySelector('input[name=len]:checked').value,cena=document.querySelector('input[name=cena]:checked').value==='on';view={};newGame(m,[n0,n1],r,h,fxEl.value,ln,ch,cena)}
/* Destaques de uma equipe/jogador: melhor descoberta, pistas falsas, boas escolhas e conquistas da partida */
function destaques(t){const L=S.log.filter(l=>l.t===t&&!l.bot),ac=L.filter(l=>l.k);const melhor=ac.sort((x,y)=>x.k-y.k)[0];
 const cq=conquistas(t);
 return `<ul class="dest">${melhor?`<li><span aria-hidden="true">⭐</span> Melhor descoberta: <b>${esc(melhor.title)}</b> na pista ${melhor.k}</li>`:`<li><span aria-hidden="true">🤔</span> Nenhum conceito descoberto desta vez — as pistas ficam para a próxima!</li>`}
 ${cq.map(c=>`<li><span aria-hidden="true">${c.ic}</span> <b>${c.nome}</b>: ${c.txt}${c.n>1?` (${c.n}×)`:''}</li>`).join('')}</ul>`}
function viewFinal(){const [a,b]=S.score,solo=S.mode==='solo';
 const w=solo?'Partida concluída!':a===b?'Empate: vitória dividida!':(a>b?S.names[0]:S.names[1])+' venceu!';
 const mins=Math.max(1,Math.round(((S.t1||Date.now())-S.t0)/60000));
 const ch=solo&&S.char,img=ch&&POSE[ch]?`<img class="fimchar" src="${POSE[ch].cheer}" alt="${esc(NAMES[ch]||ch)} comemorando">`:'';
 const comp=(S.completou||[]).map(f=>`<div class="msg good"><span aria-hidden="true">🎉</span> <b>Álbum completo: ${FAIXA_TXT[f]}!</b> Vocês descobriram todos os conceitos desta faixa.${f==='5–7'?' Que tal experimentar a faixa <b>8 a 12 anos</b>?':f==='8–11'?' Que tal experimentar a faixa <b>13 anos ou mais</b>?':''}</div>`).join('');
 const blocos=solo?`<div class="fimbox">${img}<div><div class="lab">${esc(S.names[0])}</div><b class="big">${a}</b> pontos${destaques(0)}</div></div>`
  :`<div class="fim2">${[0,1].map(t=>`<div class="fimbox ${a===b||S.score[t]===Math.max(a,b)?'top':''}"><div class="lab">${esc(S.names[t])}</div><b class="big">${S.score[t]}</b>${destaques(t)}</div>`).join('')}</div>`;
 const tot=store.get(KEY_CONQ)||{},acum=CONQ.filter(([id])=>tot[id]).map(([id,ic,nome])=>`<span class="cq"><span aria-hidden="true">${ic}</span> ${nome} ×${tot[id]}</span>`).join('');
 return `${logo()}<div class="card fim"><div class="confete" aria-hidden="true">${'<i></i>'.repeat(14)}</div><div class="banner"><div class="num" aria-hidden="true">★</div><div class="t"><small>Fim da partida</small><h2 tabindex="-1">${esc(w)}</h2></div></div><div class="body">
 ${comp}${blocos}
 <p class="small">Partida de ${mins} min. Pontos negativos podem acontecer: a escolha também ensina.</p>
 ${acum?`<div class="lab">Conquistas neste aparelho</div><div class="cqs">${acum}</div>`:''}
 <div class="lab">Cartas jogadas</div><div class="log">${S.log.map(l=>`<div><span>${l.round+1}. ${esc(l.title)}${solo?'':' ('+esc(S.names[l.t])+')'}</span><span>${l.tot>0?'+':''}${l.tot}</span></div>`).join('')}</div>
 <button class="btn-y full" onclick="ph='fb';render()">Contar o que acharam</button>
 ${view.sairSemFb?`<div class="msg" role="alert">Vocês ainda não contaram o que acharam. Isso ajuda muito a melhorar o jogo! <div class="row" style="margin-top:8px"><button class="btn-y" onclick="view.sairSemFb=false;ph='fb';render()">Contar agora</button><button class="btn-g" style="color:var(--ink);border-color:var(--line)" onclick="view={};ph='setup';render()">Sair mesmo assim</button></div></div>`
  :`<button class="btn-g full" style="color:var(--ink);border-color:var(--line)" onclick="jogarDeNovo()">Jogar de novo</button>`}</div></div>`}
/* Aviso antes de sair sem mandar o feedback (só uma vez) */
function jogarDeNovo(){if(!view.fbEnviado&&!view.sairSemFb){view.sairSemFb=true;render();return}view={};ph='setup';render()}
/* Álbum: conceitos descobertos neste aparelho, por faixa, com "?" nos que faltam */
function viewAlbum(){const a=albumList();
 return `${logo()}<div class="card"><div class="banner"><div class="num" aria-hidden="true">📒</div><div class="t"><small>Neste aparelho</small><h2 tabindex="-1">Álbum de conceitos</h2></div></div><div class="body">
 ${FAIXAS.map(f=>{const L=CARDS.filter(c=>c.faixa===f),n=L.filter(c=>a.includes(c.title)).length;
  return `<div class="lab">${FAIXA_TXT[f]} · ${n} de ${L.length}${n===L.length?' · completo! 🎉':''}</div><div class="alb">${L.map(c=>a.includes(c.title)?`<div class="ac t-${TEMA[c.tema]||'base'}"><span aria-hidden="true">${c.icon}</span><small>${esc(c.title)}</small></div>`:`<div class="ac falta"><span aria-hidden="true">?</span><small>Ainda não descoberto</small></div>`).join('')}</div>`}).join('')}
 <button class="btn-y full" onclick="ph='setup';render()">Voltar</button></div></div>`}
function seg(name,opts){return `<div class="seg" role="radiogroup" aria-labelledby="lb_${name}">${opts.map(o=>`<label><input type="radio" name="${name}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join('')}</div>`}
function viewFb(){const played=[...new Set(S.log.filter(l=>!l.bot).map(l=>l.title))];
 return `${logo()}<div class="card fb" oninput="salvaFb()" onchange="salvaFb()"><div class="banner"><div class="num" aria-hidden="true">?</div><div class="t"><small>Percepções do teste</small><h2 tabindex="-1">O que acharam?</h2></div></div><div class="body">
 <p class="hint">Um adulto pode preencher junto com as crianças. Use só o primeiro nome.</p>
 <div class="row"><div><label for="f_who">Quem jogou</label><input id="f_who" type="text" placeholder="Ex.: Caio e Mel"></div><div><label for="f_age">Idades</label><input id="f_age" type="text" placeholder="Ex.: 8 e 10"></div></div>
 <div><label id="lb_fun">Foi divertido?</label>${seg('fun',['Muito','Mais ou menos','Pouco','Nada'])}</div>
 <div><label id="lb_rules">As regras</label>${seg('rules',['Entenderam sozinhos','Precisaram de ajuda','Não entenderam'])}</div>
 <div><label id="lb_vocab">Teve palavras difíceis?</label>${seg('vocab',['Muitas','Algumas','Nenhuma'])}</div>
 <div><label id="lb_fake">A pista falsa</label>${seg('fake',['Divertida','Confusa','Ignoraram'])}</div>
 <div><label id="lb_scene">Cena e escolha (A, B, C)</label>${seg('scene',['Fez sentido','Confusa','Pontos injustos'])}</div>
 <div><label id="lb_why">Na cena, a criança explicou por que escolheu?</label>${seg('why',['Sozinha','Com ajuda','Não explicou'])}</div>
 <div><label id="lb_help">As ajudas (Dica, Opções, Pista falsa)</label>${seg('help',['Ajudaram','Atrapalharam','Não usamos','Estavam desligadas'])}</div>
 <div><label id="lb_nudge">A dica quando o palpite estava perto</label>${seg('nudge',['Ajudou','Não ajudou','Não aconteceu'])}</div>
 <div><label id="lb_pace">O ritmo da partida</label>${seg('pace',['Rápido demais','Bom','Demorou'])}</div>
 <div><label for="f_hard">Carta mais difícil</label><select id="f_hard"><option value="">Nenhuma</option>${played.map(t=>`<option>${esc(t)}</option>`).join('')}</select></div>
 <div><label for="f_fav">Carta preferida</label><select id="f_fav"><option value="">Nenhuma</option>${played.map(t=>`<option>${esc(t)}</option>`).join('')}</select></div>
 <div><label id="lb_again">Querem jogar de novo?</label>${seg('again',['Sim','Talvez','Não'])}</div>
 <div><label for="f_note">O que disseram ou fizeram que chamou atenção?</label><textarea id="f_note" placeholder="Frases das crianças, dúvidas, momentos de empolgação ou tédio"></textarea></div>
 <button id="savebtn" class="btn-y full" onclick="saveFb()">Ver resumo para enviar</button></div></div>`}
/* Rascunho do feedback (mdp-pocket-fb): salvo a cada mudança, restaurado ao reabrir, apagado ao gerar o resumo */
const FB_TXT=['f_who','f_age','f_hard','f_fav','f_note'],FB_RAD=['fun','rules','vocab','fake','scene','why','help','nudge','pace','again'];
function salvaFb(){const d={};FB_TXT.forEach(id=>{const e=$(id);if(e)d[id]=e.value});FB_RAD.forEach(n=>{const e=document.querySelector(`input[name=${n}]:checked`);if(e)d[n]=e.value});store.set(KEY_FB,d)}
function restauraFb(){const d=store.get(KEY_FB);if(!d)return;FB_TXT.forEach(id=>{const e=$(id);if(e&&d[id]!=null)e.value=d[id]});FB_RAD.forEach(n=>{if(d[n]){const e=[...document.querySelectorAll(`input[name=${n}]`)].find(x=>x.value===d[n]);if(e)e.checked=true}})}
async function saveFb(){const g=n=>{const e=document.querySelector(`input[name=${n}]:checked`);return e?e.value:''};
 const d={ver:VERSAO_JOGO,cena:S.cena!==false,date:new Date().toISOString(),mode:S.mode,faixa:S.faixa,char:S.char,why:g('why'),rule:S.rule,helps:!!S.helps,names:S.names,score:S.score,min:Math.max(1,Math.round(((S.t1||Date.now())-S.t0)/60000)),log:S.log,
  who:$('f_who').value,age:$('f_age').value,fun:g('fun'),rules:g('rules'),vocab:g('vocab'),fake:g('fake'),scene:g('scene'),help:g('help'),nudge:g('nudge'),pace:g('pace'),hard:$('f_hard').value,fav:$('f_fav').value,again:g('again'),note:$('f_note').value};
 const btn=$('savebtn');btn.disabled=true;
 view.saved=d;view.saveErr='aberto';view.fbEnviado=true;store.del(KEY_FB);
 ph='saved';render()}
function reportText(all){return all.map((d,i)=>{const dt=new Date(d.date).toLocaleString('pt-BR');
 return `PARTIDA ${i+1} - ${dt}\nJogaram: ${d.who||'-'} (${d.age||'-'} anos)\nVersão do jogo: ${d.ver||'-'}
Modo: ${d.mode==='solo'?'1 pessoa (com o Robô das Pistas)'+(d.char?', personagem '+(NAMES[d.char]||d.char):''):'equipe contra equipe'} | Faixa: ${FAIXA_TXT[d.faixa]||'todas'} | Cena ${d.cena===false?'desligada':'ligada'} | Regra ${d.rule} | Ajudas ${d.helps?'ligadas':'desligadas'} | ${d.min} min\nPlacar: ${d.mode==='solo'?d.names[0]+' '+d.score[0]:d.names[0]+' '+d.score[0]+' x '+d.score[1]+' '+d.names[1]}\nDiversão: ${d.fun||'-'} | Regras: ${d.rules||'-'} | Palavras difíceis: ${d.vocab||'-'} | Pista falsa: ${d.fake||'-'}\nCena e escolha: ${d.scene||'-'} | Explicou a escolha: ${d.why||'-'} | Ajudas: ${d.help||'-'} | Dica no quase: ${d.nudge||'-'} | Ritmo: ${d.pace||'-'} | Jogar de novo: ${d.again||'-'}\nMais difícil: ${d.hard||'-'} | Preferida: ${d.fav||'-'}\nCartas: ${d.log.map(l=>`${l.title} [${l.tot>0?'+':''}${l.tot}${l.k?', pista '+l.k:', sem acerto'}${l.bonus?', falsa ok':''}${l.life?', ajuda '+l.life:''}]`).join('; ')}\nObservações: ${d.note||'-'}`}).join('\n\n----\n\n')}
function viewSaved(){const t=reportText([view.saved]);const url='https://wa.me/5521981133669?text='+encodeURIComponent('Feedback Missão Dinheiro: Pistas\n\n'+t);
 return `${logo()}<div class="card"><div class="banner"><div class="num" aria-hidden="true">✓</div><div class="t"><small>Obrigado!</small><h2 tabindex="-1">Envie suas percepções</h2></div></div><div class="body"><p class="small">Toque no botão para abrir o WhatsApp com o resumo já escrito e é só enviar. Se não abrir, use "Copiar resumo" e cole na conversa.</p><a class="btn-t full" style="display:block;text-align:center;text-decoration:none" href="${url}" target="_blank" rel="noopener">Enviar pelo WhatsApp</a><textarea class="out" id="out" readonly aria-label="Resumo do teste para copiar">${esc(t)}</textarea><button class="btn-t full" onclick="copyOut()">Copiar resumo</button><div id="cp" class="hint"></div><button class="btn-y full" onclick="ph='setup';render()">Voltar ao início</button></div></div>`}
function copyOut(){const el=$('out');const t=el.value;const done=()=>{$('cp').textContent='Copiado.'};
 const fb=()=>{el.focus();el.select();$('cp').textContent='Texto selecionado. Use Copiar do aparelho.'};
 try{navigator.clipboard.writeText(t).then(done,fb)}catch(e){fb()}}
async function showResults(){const el=$('rep');el.innerHTML='<p class="hint">Carregando…</p>';
 try{const snap=await DB.collection('sessions').get();const games=[];snap.docs.forEach(dc=>{((dc.data()||{}).games||[]).forEach(g=>games.push(g))});
  games.sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  const tally=f=>{const m={};games.forEach(g=>{const v=g[f]||'sem resposta';m[v]=(m[v]||0)+1});return Object.entries(m).map(([k,v])=>`${esc(k)} ×${v}`).join(' · ')||'-'};
  const lifes={};games.forEach(g=>(g.log||[]).forEach(l=>{if(l.life)lifes[l.life]=(lifes[l.life]||0)+1}));
  const L=[['Diversão','fun'],['Regras','rules'],['Palavras difíceis','vocab'],['Pista falsa','fake'],['Cena e escolha','scene'],['Ajudas','help'],['Dica no quase','nudge'],['Ritmo','pace'],['Jogar de novo','again'],['Carta mais difícil','hard'],['Carta preferida','fav']];
  el.innerHTML=`<div class="stack" style="margin-top:10px"><p><b>${games.length}</b> partida(s) salvas.</p>${L.map(([n,f])=>`<p class="small"><b>${n}:</b> ${tally(f)}</p>`).join('')}<p class="small"><b>Ajudas usadas:</b> ${Object.entries(lifes).map(([k,v])=>`${esc(k)} ×${v}`).join(' · ')||'nenhuma'}</p><div class="log">${games.map(g=>`<div><span>${esc(new Date(g.date).toLocaleDateString('pt-BR'))} · ${esc(g.who||'-')} (${esc(g.age||'-')}) · ${esc(g.mode==='solo'?'solo':'equipes')} · ${g.helps?'com ajudas':'sem ajudas'}${g.note?'<br>'+esc(g.note):''}</span><span>${g.score[0]}x${g.score[1]}</span></div>`).join('')}</div></div>`}
 catch(e){el.innerHTML='<p class="hint">Não foi possível carregar os resultados agora.</p>'}}
function render(){
 const app=$('app');let h='';
 if(ph==='setup')h=viewSetup();
 else if(ph==='tut')h=viewTut();
 else if(ph==='final')h=viewFinal();
 else if(ph==='fb')h=viewFb();
 else if(ph==='saved')h=viewSaved();
 else if(ph==='album')h=viewAlbum();
 else{const c=card();h=topbar()+scoreboard();
  if(ph==='clues')h+=viewClues(c);else if(ph==='falseq')h+=viewFalse(c);else if(ph==='reveal')h+=viewReveal(c);
  else if(ph==='scene')h+=viewScene(c,false);else if(ph==='sceneRes')h+=viewScene(c,true);else if(ph==='bot')h+=viewBot(c);
  persist()}
 app.innerHTML=h;
 if(ph==='setup'){setupChange();updConn();const al=$('album');}
 if(ph==='fb')restauraFb();
 motion()}
/* Movimento, rolagem, foco e anúncios depois de cada render.
   - Tela nova: a carta entra, a página volta ao topo, o foco vai para o título e o leitor de tela ouve o título.
   - Mesma tela: destaca e mostra o que mudou (rolagem instantânea, 'nearest' para não pular à toa),
     devolve o foco ao controle certo e anuncia a mensagem na região #live (fixa, fora de #app).
   "scene" e "sceneRes" contam como a mesma tela: confirmar a escolha não volta ao topo. */
let LAST={key:null,ph:null,k:0,fake:null,msg:null,hint:null,opts:false,quit:false,score:null};
function anuncia(t){const l=$('live');if(!l||!t)return;l.textContent='';setTimeout(()=>{l.textContent=t},60)}
function motion(){
 const app=$('app'),fase=ph==='sceneRes'?'scene':ph,key=fase+'|'+(S&&S.round)+'|'+(ph==='tut'?TUTI:''),same=key===LAST.key;
 const q=s=>app.querySelector(s),show=(el,b)=>{if(el)el.scrollIntoView({block:b||'nearest'})},foca=el=>{if(el)el.focus({preventScroll:true})};
 const msgTxt=()=>{const m=[...app.querySelectorAll('.body .msg')].pop();return m?m.textContent:''};
 if(!same){const cd=q('.card');if(cd)cd.classList.add('enter');window.scrollTo(0,0);
  if(LAST.ph==='clues'&&ph==='falseq'){const im=q('.banner img');if(im)im.classList.add('pop')}
  const t=q('h2');foca(t);anuncia([t&&t.textContent,R&&ph!=='setup'&&ph!=='tut'&&ph!=='final'?R.msg:''].filter(Boolean).join('. '))}
 else if(ph==='sceneRes'&&LAST.ph==='scene'){const sel=q('.opt.sel');show(sel,'start');foca(q('.body > button.btn-y'));
  const tot=R.disc+R.bonus+R.sp;anuncia(`Cena: ${R.sp>0?'+':''}${R.sp}. ${msgTxt()} Total da carta: ${tot>0?'+':''}${tot}. Placar: ${S.names[0]} ${S.score[0]}, ${S.names[1]} ${S.score[1]}.`)}
 else if(ph==='clues'&&R&&R.k>LAST.k){const cl=app.querySelectorAll('.clues .clue')[R.k-1];
  const ctl=q('.ans-row')||q('.in')||q('.body > button.btn-y');show(ctl);if(cl){cl.classList.add('new');show(cl)}
  foca($('g')||q('.ans-row button')||q('.body > button.btn-y'));
  anuncia([R.msg,cl&&('Pista '+R.k+': '+cl.querySelector('p').textContent)].filter(Boolean).join(' '))}
 else if(R&&R.options&&!LAST.opts){const o=q('.opt-ajuda');show(app.querySelector('.opt-ajuda:last-child'));foca(o);anuncia('Escolham uma das 4 opções.')}
 else if(R&&R.hint&&R.hint!==LAST.hint){const h=q('.hint-ajuda');show(h);anuncia(R.hint);foca($('g')||q('.ans-row button'))}
 else if(ph==='falseq'&&R&&R.fakePick!==null&&LAST.fake===null){const b=q('.body > button:last-of-type');show(b);foca(b);anuncia(msgTxt())}
 else if(R&&R.msg&&R.msg!==LAST.msg){show(q('.body .msg'));anuncia(R.msg)}
 else if(view.confirmQuit&&!LAST.quit){foca([...app.querySelectorAll('.top-b')].find(b=>/Sair/.test(b.textContent)))}
 else if(ph==='scene'&&R&&R.choice!==null){foca(q('.opt.sel'))}
 /* Placar contando até o valor novo (o número final já está no HTML; com menos movimento, fica direto) */
 if(S&&LAST.score&&['clues','falseq','reveal','scene','sceneRes'].includes(LAST.ph)&&ph!=='setup'){const chips=app.querySelectorAll('.score .chip b');S.score.forEach((v,t)=>{const de=LAST.score[t],b=chips[t];if(!b||de===v)return;const chip=b.closest('.chip');chip.classList.add('bump');
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;const t0=performance.now(),dur=450;
  const passo=n=>{const p=Math.min(1,(n-t0)/dur);b.textContent=Math.round(de+(v-de)*p);if(p<1)requestAnimationFrame(passo)};requestAnimationFrame(passo)})}
 LAST={score:S?S.score.slice():null,key,ph,k:R?R.k:0,fake:R?R.fakePick:null,msg:R?R.msg:null,hint:R?R.hint:null,opts:!!(R&&R.options),quit:!!view.confirmQuit}}
/* Pré-carrega as poses (pensando/comemorando) para o "pop" do acerto não falhar no site */
Object.values(POSE).forEach(p=>Object.values(p).forEach(src=>{const i=new Image();i.src=src}));
ph=store.get(KEY_TUT)?'setup':'tut';
render();
init();
