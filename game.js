/* Missão Dinheiro Pocket — lógica do jogo. Usa CARDS e EXTRA de cartas.js. */
document.documentElement.lang="pt-BR";
/* Imagens em assets/personagens/ (quadradas 192×192). */
const ASSETS={"Caio":"assets/personagens/caio-idle.webp","Mel":"assets/personagens/mel-idle.webp","Leticia":"assets/personagens/leticia-idle.webp","Vinicius":"assets/personagens/vinicius-idle.webp","Bia":"assets/personagens/bia-idle.webp","Tiko":"assets/personagens/tiko-idle.webp","logo":"assets/personagens/logo-main.webp"};
const POSE={"Caio":{"think":"assets/personagens/caio-think.webp","cheer":"assets/personagens/caio-cheer.webp"},"Mel":{"think":"assets/personagens/mel-think.webp","cheer":"assets/personagens/mel-cheer.webp"},"Leticia":{"think":"assets/personagens/leticia-think.webp","cheer":"assets/personagens/leticia-cheer.webp"},"Vinicius":{"think":"assets/personagens/vinicius-think.webp","cheer":"assets/personagens/vinicius-cheer.webp"},"Bia":{"think":"assets/personagens/bia-idle.webp","cheer":"assets/personagens/bia-cheer.webp"},"Tiko":{"think":"assets/personagens/tiko-think.webp","cheer":"assets/personagens/tiko-cheer.webp"}};
const NAMES={Leticia:'Letícia'};
const KEY_SAVE='mdp-pocket-v3-save',KEY_TUT='mdp-pocket-v3-tut';
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
let S=null,R=null,ph='setup',view={},DB=null,UID=null,CANEDIT=false,CONN='ok',TUTI=0;
function album(t){const a=store.get('mdp-album')||[];if(a.indexOf(t)<0){a.push(t);store.set('mdp-album',a)}}
function albumN(){return (store.get('mdp-album')||[]).length}
function persist(){if(S&&['clues','falseq','reveal','scene','sceneRes','bot'].includes(ph))store.set(KEY_SAVE,{S,R,ph})}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[...Array(n+1).keys()];for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function hasTok(n,words,t){if(t.includes(' '))return n.includes(t);return words.some(w=>w.startsWith(t)||(t.length>=5&&w.length>=t.length&&lev(w.slice(0,t.length),t)<=1))}
function evalGuess(c,g){const n=norm(g);if(!n)return null;const words=n.split(' ');const x=EXTRA[c.title]||{};
 for(const m of c.correct.map(norm)){if(n===m||n.includes(m))return'ok'}
 for(const set of (x.sets||[])){if(set.every(t=>hasTok(n,words,t)))return'ok'}
 for(const m of c.near.map(norm)){if(n===m||n.includes(m))return'near'}
 return'bad'}
function isBot(t){return S.mode==='solo'&&t===1}
function team(){return S.round%2}
function card(){return CARDS[S.deck[S.round]]}
function newGame(mode,names,rule,helps,faixa,len){const pool=CARDS.map((c,i)=>i).filter(i=>faixa==='todas'||!CARDS[i].faixa||CARDS[i].faixa===faixa);S={mode,names,rule,helps,faixa,len,life:[{dica:0,opc:0,falsa:0},{dica:0,opc:0,falsa:0}],deck:shuffle(pool).slice(0,len),round:0,score:[0,0],log:[],t0:Date.now()};startRound()}
function startRound(){
 R={k:1,shown:1,blocked:false,nextBlocked:false,elim:false,correctAt:0,disc:0,bonus:0,fakePick:null,choice:null,msg:null,msgKind:'',showKey:false,adults:0,guesses:0,nears:0,lifeUsed:false,lifeKind:'',hint:null,options:null,fakeKnown:false};
 if(isBot(team())){const c=card();const r=Math.random();const k=r<.12?0:r<.3?2:r<.55?3:r<.75?4:r<.9?5:6;
  const q=Math.random();const idx=[...c.pts.keys()].sort((a,b)=>c.pts[b]-c.pts[a]);const ch=q<.45?idx[0]:q<.8?idx[1]:idx[2];
  R.bot={k,disc:k?7-k:0,bonus:k&&Math.random()<.5?2:0,choice:ch,sp:c.pts[ch]};ph='bot'}
 else ph='clues';
 render()}
function setMsg(t,k){R.msg=t;R.msgKind=k||''}
function advance(){
 if(R.k>=6){ph='reveal';R.shown=6;return}
 R.k++;R.shown=R.k;R.blocked=R.nextBlocked;R.nextBlocked=false}
function guess(res){
 const c=card(),x=EXTRA[c.title]||{};R.options=null;
 if(res==='ok'){album(c.title);R.correctAt=R.k;R.disc=R.lifeUsed?Math.ceil((7-R.k)/2):7-R.k;R.shown=6;ph='falseq';
  if(R.fakeKnown){R.fakePick=-1;R.bonus=0}
  setMsg('Acertou na pista '+R.k+'! Era "'+c.title+'". Vale '+R.disc+' ponto'+(R.disc>1?'s':'')+(R.lifeUsed?' (metade, porque usaram uma ajuda)':'')+'.','good');return}
 R.guesses++;
 if(res==='near'){R.nears++;setMsg('Quase! '+(x.nudge||'')+' Não vale ponto, mas ninguém sai da carta.','');advance();return}
 if(res==='bad'){
  if(S.rule==='A'){R.elim=true;R.shown=R.k;ph='reveal';setMsg('Palpite errado. Nesta carta, a equipe não pode mais responder.','bad');return}
  R.nextBlocked=true;setMsg('Palpite errado. Na próxima pista, a equipe não pode dar palpite.','bad');advance();return}
 setMsg('','');advance()}
function onGuess(res){guess(res);render()}
function onType(){const inp=$('g');const g=inp.value.trim();if(!g)return;const c=card();const r=evalGuess(c,g);inp.value='';guess(r);render()}
function onAdult(){guess('ok');R.adults++;render()}
function pass(){if(R.blocked&&R.k>=6){advance()}else guess('pass');render()}
function toggleKey(){R.showKey=!R.showKey;render()}
function pickFake(i){if(R.fakePick!==null)return;R.fakePick=i;const c=card();R.bonus=i===c.fake?2:0;render()}
function toScene(){ph='scene';render()}
function pickOpt(i){R.choice=i;render()}
function useLife(k){
 if(!S.helps||R.lifeUsed||S.life[team()][k])return;const c=card(),x=EXTRA[c.title]||{};const t=team();
 if(k==='dica'){S.life[t].dica=1;R.lifeUsed=true;R.lifeKind='dica';R.hint=(x.tipo||'')+' Começa com a letra "'+c.title[0].toUpperCase()+'".'}
 else if(k==='opc'){if(R.blocked)return;S.life[t].opc=1;R.lifeUsed=true;R.lifeKind='opcoes';R.options=shuffle([c.title,...shuffle(CARDS.filter(y=>y.title!==c.title).map(y=>y.title)).slice(0,3)])}
 else if(k==='falsa'){if(c.fake>R.k){setMsg('A pista falsa ainda não apareceu. Esta ajuda não foi gasta; tente depois.','');render();return}
  S.life[t].falsa=1;R.lifeUsed=true;R.lifeKind='pista_falsa';R.fakeKnown=true;setMsg('Marcamos a pista falsa. Nesta carta não há bônus de +2.','')}
 render()}
function pickOption(i){const c=card();const o=R.options&&R.options[i];if(o===undefined)return;guess(o===c.title?'ok':'bad');render()}
function confirmScene(){if(R.choice===null)return;const c=card();R.sp=c.pts[R.choice];const t=team();const tot=R.disc+R.bonus+R.sp;S.score[t]+=tot;
 S.log.push({round:S.round,t,title:c.title,k:R.correctAt,elim:R.elim,bonus:R.bonus,sp:R.sp,ch:R.choice,tot,adults:R.adults,guesses:R.guesses,nears:R.nears,life:R.lifeKind});ph='sceneRes';render()}
function botDone(){const c=card(),b=R.bot;const tot=b.disc+b.bonus+b.sp;S.score[1]+=tot;
 S.log.push({round:S.round,t:1,title:c.title,k:b.k,elim:false,bonus:b.bonus,sp:b.sp,ch:b.choice,tot,bot:true});next()}
function next(){if(S.round>=S.len-1){S.t1=Date.now();ph='final';store.del(KEY_SAVE);render();return}S.round++;startRound()}
function resumeGame(){const d=store.get(KEY_SAVE);if(d){S=d.S;R=d.R;ph=d.ph;render()}}
function quit(){if(!view.confirmQuit){view.confirmQuit=true;render();return}view.confirmQuit=false;store.del(KEY_SAVE);ph='setup';render()}
function cancelQuit(){view.confirmQuit=false;render()}

/* ---------- conexão com o banco de testes ---------- */
async function init(){CONN='ok'}
function updConn(){const c=$('conn');if(c){c.className='msg good';c.textContent='Pronto para jogar. No final, você poderá enviar suas percepções por WhatsApp.'}}

/* ---------- telas ---------- */
const logo=()=>`<h1 class="sr">Missão Dinheiro: Pistas</h1><div class="top"><img src="${ASSETS.logo}" alt="Missão Dinheiro Club"><span style="font-weight:900;color:var(--teal);letter-spacing:.06em">PISTAS</span></div>`;
function scoreboard(){return `<div class="score">${[0,1].map(t=>`<div class="chip t${t} ${(ph!=='final'&&team()===t)?'on':''}"><small>${esc(S.names[t])}</small><b>${S.score[t]}</b></div>`).join('')}</div>`}
function topbar(){return `<div class="top"><span style="font-weight:800">Carta ${S.round+1} de ${S.len}</span>${view.confirmQuit?`<span class="row" style="flex:0 0 auto"><button class="ghost btn-y top-b" onclick="quit()">Sair do jogo</button><button class="ghost btn-g top-b" onclick="cancelQuit()">Voltar</button></span>`:`<button class="ghost btn-g top-b" onclick="quit()">Encerrar</button>`}</div>`}
function who(){const t=team();if(S.mode==='solo')return `<div class="who"><b>${esc(S.names[t])}</b> responde. O jogo lê as pistas.</div>`;
 return `<div class="who"><b>${esc(S.names[t])}</b> responde. <b>${esc(S.names[1-t])}</b> lê as pistas e segura a tela do gabarito.</div>`}
function banner(c,revealed){return `<div class="banner"><div class="num">${S.round+1}</div><div class="t"><small>${revealed?'O conceito era':'Descubra o conceito'}</small><h2>${revealed?esc(c.title):'O que é?'}</h2></div><img src="${(POSE[c.char]&&POSE[c.char][revealed?'cheer':'think'])||ASSETS[c.char]}" alt="Personagem ${esc(NAMES[c.char]||c.char)}"></div>`}
function clueList(c,mode){let h='<div class="clues">';
 for(let i=1;i<=6;i++){
  if(i>R.shown){h+=`<div class="clue lock"><div class="n">${i}</div><p>Pista ainda fechada</p></div>`;continue}
  const isFake=((ph==='falseq'&&R.fakePick!==null)||ph==='scene'||ph==='sceneRes'||(ph==='reveal'&&R.correctAt)||R.fakeKnown)&&i===c.fake;
  const pickable=mode==='pick'&&R.fakePick===null;
  const cls=['clue',pickable?'pick':'',R.fakePick===i?'sel':'',isFake?'fake':''].join(' ');
  const tag=isFake?'<div class="tag">Pista falsa</div>':'';
  if(pickable)h+=`<button class="${cls}" onclick="pickFake(${i})"><div class="n">${i}</div><p>${esc(c.p[i-1])}</p></button>`;
  else h+=`<div class="${cls}"><div class="n">${i}</div><div style="min-width:0"><p>${esc(c.p[i-1])}</p>${tag}</div></div>`}
 return h+'</div>'}
function msgBox(){return R.msg?`<div role="status" class="msg ${R.msgKind}">${esc(R.msg)}</div>`:''}
function keyBox(c){if(S.mode==='solo')return '';
 return R.showKey?`<div class="keybox"><div><b>Só quem lê olha esta tela.</b></div><div><b>Aceitar:</b> ${esc(c.correct.join('; '))}. Também vale qualquer resposta que diga o mesmo com outras palavras.</div><div><b>Quase (dica, sem ponto):</b> ${esc(c.near.join('; '))}. ${esc((EXTRA[c.title]||{}).nudge||'')}</div><div><b>Pista falsa:</b> nº ${c.fake}</div><button class="keybtn" onclick="toggleKey()">Esconder gabarito</button></div>`
 :`<button class="keybtn" onclick="toggleKey()">Gabarito (só o leitor)</button>`}
function lifeBar(){if(!S.helps||isBot(team()))return '';
 const t=team(),L=S.life[t],lock=R.lifeUsed;
 const b=(k,label,sub)=>`<button class="life ${L[k]?'used':''}" ${(L[k]||lock||(k==='opc'&&R.blocked))?'disabled':''} onclick="useLife('${k}')"><b>${label}</b><small>${L[k]?'já usada':sub}</small></button>`;
 return `<div class="lab">Ajudas: uma de cada por partida, uma por carta. Usar ajuda vale metade dos pontos da descoberta</div><div class="lifes">${b('dica','Dica','tipo da resposta')}${b('opc','Opções','4 respostas')}${b('falsa','Pista falsa','mostra qual é')}</div>${R.hint?`<div role="status" class="msg">${esc(R.hint)}</div>`:''}${R.options?`<div class="stack">${R.options.map((o,i)=>`<button class="opt B" onclick="pickOption(${i})"><div class="l">${'ABCD'[i]}</div><span class="x">${esc(o)}</span></button>`).join('')}</div>`:''}`}
function viewClues(c){
 const solo=S.mode==='solo';
 let ctl;
 if(R.blocked){ctl=`<div role="status" class="msg">Esta pista: sem palpite. Leiam a próxima.</div><button class="btn-y full" onclick="pass()">${R.k>=6?'Fim das pistas':'Ler próxima pista'}</button>`}
 else if(solo){ctl=`<div class="in"><input id="g" type="text" placeholder="Escreva o palpite" autocomplete="off" onkeydown="if(event.key==='Enter')onType()"><button class="btn-y" onclick="onType()">Palpitar</button></div>
 <div class="row"><button class="btn-g" style="color:var(--ink);border-color:var(--line)" onclick="pass()">${R.k>=6?'Desistir da carta':'Sem palpite, próxima pista'}</button></div>
 <div class="row"><button class="keybtn" style="background:#EEF3FA;color:var(--ink)" onclick="onAdult()">Adulto: conta como acerto</button></div>`}
 else{ctl=`<div class="lab">Palpite da pista ${R.k} (um por pista)</div>
 <div class="row"><button class="btn-t" onclick="onGuess('ok')">Acertou</button><button class="btn-y" onclick="onGuess('near')">Quase</button><button style="background:#FBE0E5" onclick="onGuess('bad')">Errou</button></div>
 <button class="btn-g full" style="color:var(--ink);border-color:var(--line)" onclick="pass()">${R.k>=6?'Ninguém acertou':'Sem palpite, próxima pista'}</button>`}
 return `${who()}<div class="card">${banner(c,false)}<div class="body"><div class="lab">Pistas · ${R.k} de 6</div>${clueList(c)}${msgBox()}<hr class="hr">${ctl}${lifeBar()}${keyBox(c)}<p class="hint">Acertar na pista 1 vale 6 pontos, na pista 6 vale 1.</p></div></div>`}
function viewFalse(c){const done=R.fakePick!==null;
 const dmsg=R.fakePick===-1?'A ajuda já mostrou a pista falsa, então não há bônus nesta carta.':(R.bonus?'Isso! A pista falsa estava aí. +2 pontos.':'Não foi essa. A pista falsa era a número '+c.fake+'.');
 return `<div class="card">${banner(c,true)}<div class="body">${msgBox()}<div class="lab">Qual pista é a falsa?</div><p class="small"><b>${R.fakePick===null?'Toque na pista que não combina com o conceito. Acertar vale +2.':''}</b></p>${clueList(c,'pick')}
 ${done?`<div role="status" class="msg ${R.bonus?'good':'bad'}">${dmsg}</div><button class="btn-y full" onclick="toScene()">Ir para Cena e Escolha</button>`:''}</div></div>`}
function viewReveal(c){return `<div class="card">${banner(c,true)}<div class="body">${msgBox()}<div role="status" class="msg"><b>${R.elim?'O leitor encerra as pistas.':'Acabaram as pistas.'}</b> A resposta era <b>${esc(c.title)}</b>. Sem pontos de descoberta nesta carta, mas a equipe continua para a cena.</div>${clueList(c)}<button class="btn-y full" onclick="toScene()">Ir para Cena e Escolha</button></div></div>`}
function viewScene(c,res){
 const L='ABC';
 const best=Math.max(...c.pts),worst=Math.min(...c.pts);
 let opts=c.opts.map((o,i)=>{const cls=['opt',L[i],R.choice===i?'sel':'',res&&c.pts[i]===best?'best':'',res&&c.pts[i]===worst?'worst':''].join(' ');
  const inner=`<div class="l">${L[i]}</div><span class="x">${esc(o)}${res?`<span class="why">${esc(c.why[i])}</span>`:''}</span>${res?`<span class="pts">${c.pts[i]>0?'+':''}${c.pts[i]}</span>`:''}`;
  return res?`<div class="${cls}">${inner}</div>`:`<button class="${cls}" onclick="pickOpt(${i})">${inner}</button>`}).join('');
 let foot='';
 if(!res)foot=`<p class="hint">${S.mode==='solo'?'Escolham sem ver os pontos.':'A equipe escolhe sem ver os pontos. O leitor mostra o resultado depois.'}</p><button class="btn-y full" ${R.choice===null?'disabled':''} onclick="confirmScene()">Confirmar escolha</button>`;
 else{const tot=R.disc+R.bonus+R.sp;foot=`<div role="status" class="msg"><b>Leitor explica:</b> ${esc(c.why[R.choice])}</div><div class="sum"><div><span>Descoberta</span><span>+${R.disc}</span></div><div><span>Pista falsa</span><span>+${R.bonus}</span></div><div><span>Cena e escolha</span><span>${R.sp>0?'+':''}${R.sp}</span></div><div class="tot"><span>Total da carta</span><span>${tot>0?'+':''}${tot}</span></div></div><button class="btn-y full" onclick="next()">${S.round>=S.len-1?'Ver resultado':'Próxima carta'}</button>`}
 return `<div class="card">${banner(c,true)}<div class="body"><div class="lab">Cena e escolha</div><p style="font-weight:600">${esc(c.scene)}</p><p><b>O que vocês fariam?</b></p><div class="stack">${opts}</div>${foot}</div></div>`}
function viewBot(c){const b=R.bot,L='ABC';
 return `<div class="who"><b>${esc(S.names[1])}</b> joga esta carta (jogo simulado, só para teste).</div><div class="card">${banner(c,true)}<div class="body"><div class="lab">Vez do jogo</div>
 <p>${b.k?`Descobriu o conceito na pista ${b.k}: <b>+${b.disc}</b>.`:'Não descobriu o conceito: <b>0</b>.'}</p><p>${b.k?(b.bonus?'Acertou a pista falsa: <b>+2</b>.':'Errou a pista falsa: <b>0</b>.'):'Sem pista falsa nesta carta.'}</p>
 <p>Escolheu <b>${L[b.choice]}</b>: ${esc(c.opts[b.choice])} (<b>${b.sp>0?'+':''}${b.sp}</b>)</p><div role="status" class="msg">${esc(c.why[b.choice])}</div>
 <p class="hint">O resultado do jogo é sorteado e não mede o conhecimento de ninguém. Esta carta serve para vocês lerem e conversarem.</p>
 <details class="small"><summary style="font-weight:800;cursor:pointer;min-height:32px">Ver as 6 pistas</summary><div style="margin-top:8px">${(()=>{const o=R.shown;R.shown=6;const h=clueList(c);R.shown=o;return h})()}</div></details>
 <button class="btn-y full" onclick="botDone()">${S.round>=S.len-1?'Ver resultado':'Minha vez'}</button></div></div>`}
const TUT=[
['Como se joga','Duas equipes, ou você contra o jogo. As pistas aparecem uma de cada vez. Dê um palpite por pista: acertar cedo vale mais (6, 5, 4, 3, 2 ou 1 ponto).'],
['Quase certo?','Se o palpite for parecido, o jogo dá uma dica e você tenta de novo na pista seguinte. Se errar, na Regra B você só perde o palpite da próxima pista.'],
['Pista falsa','Depois de acertar, descubra qual das 6 pistas era falsa. Acertar vale mais 2 pontos.'],
['Cena e escolha','Escolha A, B ou C. A pontuação (−1, +1 ou +2) só aparece depois. O placar pode ficar negativo, e tudo bem.'],
['Ajudas','Com as ajudas ligadas, cada equipe usa uma vez cada: Dica (o tipo da resposta), Opções (4 respostas para escolher) e Pista falsa (mostra qual é). Só uma ajuda por carta. Usar uma ajuda tem preço: os pontos da descoberta nessa carta valem metade (arredondado para cima).']];
function openTut(){TUTI=0;ph='tut';render()}
function tutNav(d){TUTI+=d;if(TUTI>=TUT.length){store.set(KEY_TUT,1);ph='setup';render();return}if(TUTI<0)TUTI=0;render()}
function viewTut(){const t=TUT[TUTI];
 return `${logo()}<div class="card"><div class="banner"><div class="num">${TUTI+1}</div><div class="t"><small>Como jogar · ${TUTI+1} de ${TUT.length}</small><h2>${esc(t[0])}</h2></div></div><div class="body"><p style="font-size:19px">${esc(t[1])}</p><div class="row">${TUTI>0?'<button class="btn-g" style="color:var(--ink);border-color:var(--line)" onclick="tutNav(-1)">Voltar</button>':''}<button class="btn-y" onclick="tutNav(1)">${TUTI>=TUT.length-1?'Entendi, vamos jogar':'Próximo'}</button></div><button class="keybtn" style="background:#EEF3FA;color:var(--ink)" onclick="store.set(KEY_TUT,1);ph='setup';render()">Pular</button></div></div>`}
function viewSetup(){const saved=store.get(KEY_SAVE);
 return `${logo()}<div class="card setup"><div class="body">
 <h2 style="font-size:24px">Missão Dinheiro: Pistas</h2><p class="hint">Versão experimental, 5 a 11 anos. Partida de 4 ou 6 cartas, de 10 a 20 minutos.</p><p class="hint" id="album"></p>
 <div id="conn" class="msg">Conectando…</div>
 <div><label>Como vão jogar?</label><div class="seg mode"><label><input type="radio" name="mode" value="duo" checked onchange="setupChange()"><span><b>Equipe contra equipe</b><small>Uma tela, passando de mão em mão</small></span></label><label><input type="radio" name="mode" value="solo" onchange="setupChange()"><span><b>Uma pessoa contra o jogo</b><small>Robô das Pistas, jogo simulado</small></span></label></div></div>
 <div class="row"><div><label for="n0" id="l0">Nome da equipe 1</label><input id="n0" type="text" maxlength="20" value="Equipe 1"></div><div><label for="n1" id="l1">Nome da equipe 2</label><input id="n1" type="text" maxlength="20" value="Equipe 2"></div></div>
 <div><label>Faixa de idade</label><div class="seg"><label><input type="radio" name="faixa" value="5–7"><span><b>5 a 7 anos</b><br><small>Palavras mais simples</small></span></label><label><input type="radio" name="faixa" value="8–11"><span><b>8 a 11 anos</b><br><small>Conceitos como juros e crédito</small></span></label><label><input type="radio" name="faixa" value="todas" checked><span><b>Todas</b><br><small>Mistura as duas</small></span></label></div></div>
 <div><label>Tamanho da partida</label><div class="seg"><label><input type="radio" name="len" value="4"><span><b>Curta</b><br><small>4 cartas, cerca de 10 min</small></span></label><label><input type="radio" name="len" value="6" checked><span><b>Normal</b><br><small>6 cartas, cerca de 15 a 20 min</small></span></label></div></div>
 <div><label>Se errar um palpite</label><div class="seg"><label><input type="radio" name="rule" value="B" checked><span><b>Regra B</b><br><small>Perde só o palpite da próxima pista</small></span></label><label><input type="radio" name="rule" value="A"><span><b>Regra A</b><br><small>Sai da carta</small></span></label></div></div>
 <div><label>Ajudas estilo Show do Milhão</label><div class="seg"><label><input type="radio" name="helps" value="on" checked><span><b>Ligadas</b><br><small>Dica, Opções e Pista falsa</small></span></label><label><input type="radio" name="helps" value="off"><span><b>Desligadas</b><br><small>Jogo sem ajudas</small></span></label></div></div>
 <button id="startbtn" class="btn-y full" onclick="start()">Começar</button>
 <button class="btn-g full" style="color:var(--ink);border-color:var(--line)" onclick="openTut()">Como se joga</button>
 ${saved?`<button class="btn-g full" style="color:var(--ink);border-color:var(--line)" onclick="resumeGame()">Continuar jogo interrompido</button>`:''}
 <div id="adm"></div>
 </div></div>`}
function setupChange(){const m=document.querySelector('input[name=mode]:checked').value;
 $('l0').textContent=m==='solo'?'Nome do jogador':'Nome da equipe 1';$('n0').value=m==='solo'?'Você':'Equipe 1';$('n1').value=m==='solo'?'Robô das Pistas':'Equipe 2';$('n1').disabled=m==='solo'}
function start(){if(CONN!=='ok')return;const m=document.querySelector('input[name=mode]:checked').value;const r=document.querySelector('input[name=rule]:checked').value;const h=document.querySelector('input[name=helps]:checked').value==='on';
 const n0=($('n0').value.trim()||(m==='solo'?'Você':'Equipe 1')),n1=m==='solo'?'Robô das Pistas':($('n1').value.trim()||'Equipe 2');
 const fx=document.querySelector('input[name=faixa]:checked').value,ln=+document.querySelector('input[name=len]:checked').value;view={};newGame(m,[n0,n1],r,h,fx,ln)}
function viewFinal(){const [a,b]=S.score;const w=a===b?'Empate: vitória dividida!':(a>b?S.names[0]:S.names[1])+' venceu!';
 const mins=Math.max(1,Math.round(((S.t1||Date.now())-S.t0)/60000));
 return `${logo()}<div class="card"><div class="banner"><div class="num">★</div><div class="t"><small>Fim da partida</small><h2>${esc(w)}</h2></div></div><div class="body">
 <p class="hint" style="color:var(--ink)">Conceitos descobertos até agora: ${albumN()} de ${CARDS.length}.</p><div class="score"><div class="chip"><small>${esc(S.names[0])}</small><b>${a}</b></div><div class="chip t1"><small>${esc(S.names[1])}</small><b>${b}</b></div></div>
 <p class="small">Partida de ${mins} min. Pontos negativos podem acontecer: a escolha também ensina.</p>
 <div class="lab">Cartas jogadas</div><div class="log">${S.log.map(l=>`<div><span>${l.round+1}. ${esc(l.title)} (${esc(S.names[l.t])})</span><span>${l.tot>0?'+':''}${l.tot}</span></div>`).join('')}</div>
 <button class="btn-y full" onclick="ph='fb';render()">Contar o que acharam</button><button class="btn-g full" style="color:var(--ink);border-color:var(--line)" onclick="ph='setup';render()">Jogar de novo</button></div></div>`}
function seg(name,opts){return `<div class="seg">${opts.map(o=>`<label><input type="radio" name="${name}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join('')}</div>`}
function viewFb(){const played=[...new Set(S.log.filter(l=>!l.bot).map(l=>l.title))];
 return `${logo()}<div class="card fb"><div class="banner"><div class="num">?</div><div class="t"><small>Percepções do teste</small><h2>O que acharam?</h2></div></div><div class="body">
 <p class="hint">Um adulto pode preencher junto com as crianças. Use só o primeiro nome.</p>
 <div class="row"><div><label for="f_who">Quem jogou</label><input id="f_who" type="text" placeholder="Ex.: Caio e Mel"></div><div><label for="f_age">Idades</label><input id="f_age" type="text" placeholder="Ex.: 8 e 10"></div></div>
 <div><label>Foi divertido?</label>${seg('fun',['Muito','Mais ou menos','Pouco','Nada'])}</div>
 <div><label>As regras</label>${seg('rules',['Entenderam sozinhos','Precisaram de ajuda','Não entenderam'])}</div>
 <div><label>Teve palavras difíceis?</label>${seg('vocab',['Muitas','Algumas','Nenhuma'])}</div>
 <div><label>A pista falsa</label>${seg('fake',['Divertida','Confusa','Ignoraram'])}</div>
 <div><label>Cena e escolha (A, B, C)</label>${seg('scene',['Fez sentido','Confusa','Pontos injustos'])}</div>
 <div><label>As ajudas (Dica, Opções, Pista falsa)</label>${seg('help',['Ajudaram','Atrapalharam','Não usamos','Estavam desligadas'])}</div>
 <div><label>A dica quando o palpite estava perto</label>${seg('nudge',['Ajudou','Não ajudou','Não aconteceu'])}</div>
 <div><label>O ritmo da partida</label>${seg('pace',['Rápido demais','Bom','Demorou'])}</div>
 <div><label for="f_hard">Carta mais difícil</label><select id="f_hard"><option value="">Nenhuma</option>${played.map(t=>`<option>${esc(t)}</option>`).join('')}</select></div>
 <div><label for="f_fav">Carta preferida</label><select id="f_fav"><option value="">Nenhuma</option>${played.map(t=>`<option>${esc(t)}</option>`).join('')}</select></div>
 <div><label>Querem jogar de novo?</label>${seg('again',['Sim','Talvez','Não'])}</div>
 <div><label for="f_note">O que disseram ou fizeram que chamou atenção?</label><textarea id="f_note" placeholder="Frases das crianças, dúvidas, momentos de empolgação ou tédio"></textarea></div>
 <button id="savebtn" class="btn-y full" onclick="saveFb()">Ver resumo para enviar</button></div></div>`}
async function saveFb(){const g=n=>{const e=document.querySelector(`input[name=${n}]:checked`);return e?e.value:''};
 const d={ver:'v3',date:new Date().toISOString(),mode:S.mode,rule:S.rule,helps:!!S.helps,names:S.names,score:S.score,min:Math.max(1,Math.round(((S.t1||Date.now())-S.t0)/60000)),log:S.log,
  who:$('f_who').value,age:$('f_age').value,fun:g('fun'),rules:g('rules'),vocab:g('vocab'),fake:g('fake'),scene:g('scene'),help:g('help'),nudge:g('nudge'),pace:g('pace'),hard:$('f_hard').value,fav:$('f_fav').value,again:g('again'),note:$('f_note').value};
 const btn=$('savebtn');btn.disabled=true;
 view.saved=d;view.saveErr='aberto';
 ph='saved';render()}
function reportText(all){return all.map((d,i)=>{const dt=new Date(d.date).toLocaleString('pt-BR');
 return `PARTIDA ${i+1} - ${dt}\nJogaram: ${d.who||'-'} (${d.age||'-'} anos)\nModo: ${d.mode==='solo'?'1 pessoa contra o jogo':'equipe contra equipe'} | Regra ${d.rule} | Ajudas ${d.helps?'ligadas':'desligadas'} | ${d.min} min\nPlacar: ${d.names[0]} ${d.score[0]} x ${d.score[1]} ${d.names[1]}\nDiversão: ${d.fun||'-'} | Regras: ${d.rules||'-'} | Palavras difíceis: ${d.vocab||'-'} | Pista falsa: ${d.fake||'-'}\nCena e escolha: ${d.scene||'-'} | Ajudas: ${d.help||'-'} | Dica no quase: ${d.nudge||'-'} | Ritmo: ${d.pace||'-'} | Jogar de novo: ${d.again||'-'}\nMais difícil: ${d.hard||'-'} | Preferida: ${d.fav||'-'}\nCartas: ${d.log.map(l=>`${l.title} [${l.tot>0?'+':''}${l.tot}${l.k?', pista '+l.k:', sem acerto'}${l.bonus?', falsa ok':''}${l.life?', ajuda '+l.life:''}]`).join('; ')}\nObservações: ${d.note||'-'}`}).join('\n\n----\n\n')}
function viewSaved(){const t=reportText([view.saved]);const url='https://wa.me/5521981133669?text='+encodeURIComponent('Feedback Missão Dinheiro: Pistas\n\n'+t);
 return `${logo()}<div class="card"><div class="banner"><div class="num">✓</div><div class="t"><small>Obrigado!</small><h2>Envie suas percepções</h2></div></div><div class="body"><p class="small">Toque no botão para abrir o WhatsApp com o resumo já escrito e é só enviar. Se não abrir, use "Copiar resumo" e cole na conversa.</p><a class="btn-t full" style="display:block;text-align:center;text-decoration:none" href="${url}" target="_blank" rel="noopener">Enviar pelo WhatsApp</a><textarea class="out" id="out" readonly aria-label="Resumo do teste para copiar">${esc(t)}</textarea><button class="btn-t full" onclick="copyOut()">Copiar resumo</button><div id="cp" class="hint"></div><button class="btn-y full" onclick="ph='setup';render()">Voltar ao início</button></div></div>`}
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
 else{const c=card();h=logo()+topbar()+scoreboard();
  if(ph==='clues')h+=viewClues(c);else if(ph==='falseq')h+=viewFalse(c);else if(ph==='reveal')h+=viewReveal(c);
  else if(ph==='scene')h+=viewScene(c,false);else if(ph==='sceneRes')h+=viewScene(c,true);else if(ph==='bot')h+=viewBot(c);
  persist()}
 app.innerHTML=h;
 if(ph==='setup'){setupChange();updConn();const al=$('album');if(al)al.textContent='Conceitos que você já descobriu: '+albumN()+' de '+CARDS.length+'.'}
 window.scrollTo(0,0)}
ph=store.get(KEY_TUT)?'setup':'tut';
render();
init();
