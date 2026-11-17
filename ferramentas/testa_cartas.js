// Teste das cartas: esquema, respostas aceitas, "quase", conflitos entre cartas e as 18+18+0 cartas do kit.
// Uso (na raiz do repositório): node ferramentas/testa_cartas.js   (DESDE=n mostra só os conflitos que envolvem cartas a partir da posição n)
const fs=require('fs');const src=fs.readFileSync('cartas.js','utf8');
eval(src.replace(/^const /gm,'var '));
const g=fs.readFileSync('game.js','utf8').split('\n');
eval(g.find(l=>l.startsWith('const norm=')).replace('const','var'));
const ini=g.findIndex(l=>l.startsWith('function lev('));
eval(g.slice(ini,ini+7).join('\n'));
JSON.parse(src.slice(src.indexOf('const CARDS = ')+14,src.indexOf('\n];')+2));
const TEMAS=['Poupar e guardar','Consumo e escolhas','Dinheiro digital e segurança','Trabalho e ganhar dinheiro','Ajudar e compartilhar'];
let err=0;const T=new Set();
CARDS.forEach((c,i)=>{const e=[];if(T.has(c.title))e.push('título repetido');T.add(c.title);
 if(c.p.length!==6)e.push('p≠6');if(!(c.fake>=1&&c.fake<=6))e.push('fake');if(c.opts.length!==3||c.why.length!==3)e.push('opts/why');
 if([...c.pts].sort().join()!=='-1,1,2')e.push('pts '+c.pts);if(!['5–7','8–12','13+'].includes(c.faixa))e.push('faixa');
 if(!TEMAS.includes(c.tema))e.push('tema');
 const IDADE={'5–7':[5],'8–12':[8,11],'13+':[13]};if(!(IDADE[c.faixa]||[]).includes(c.idade))e.push('idade '+c.idade);if(c.kit&&c.idade>8)e.push('kit com idade '+c.idade);
 for(const k of c.correct)if(evalGuess(c,k)!=='ok')e.push('correct não aceita: '+k);
 if(evalGuess(c,c.title)!=='ok')e.push('título não aceito');for(const k of ['tipo','nudge'])if(EXTRA[c.title]&&evalGuess(c,EXTRA[c.title][k])==='ok')e.push(k+' entrega a resposta');
 for(const k of c.near)if(evalGuess(c,k)==='ok')e.push('near vira acerto: '+k);
 if(e.length){err++;console.log(i+1,c.title,e)}});
console.log('total',CARDS.length,'| erros de esquema',err);
const novos=CARDS.slice(Number(process.env.DESDE||32));
const testes=JSON.parse(process.argv[2]||'{}');
for(const c of novos)for(const k of (testes[c.title]||[]))console.log(c.title,'|',k,'→',evalGuess(c,k));
for(const c of CARDS)for(const d of CARDS)if(c!==d&&(novos.includes(c)||novos.includes(d))&&evalGuess(c,d.title)==='ok')console.log('CONFLITO:',c.title,'aceita a resposta',d.title);
console.log(['5–7','8–12','13+'].map(f=>f+': '+CARDS.filter(c=>c.faixa===f).length).join(' | '));
// Baralho que cada faixa da tela recebe (Matriz por idade v1.2: 8–12 com idade 11 só entra em "13 anos ou mais" e "Todas")
{const fj=c=>c.faixa==='8–12'&&c.idade>=11?'13+':c.faixa;console.log('baralho na tela:',['5–7','8–12','13+'].map(f=>f+': '+CARDS.filter(c=>fj(c)===f).length).join(' | '),'| 11+:',CARDS.filter(c=>c.idade===11).map(c=>c.title).join(', '))}
console.log(TEMAS.map(t=>t+': '+CARDS.filter(c=>c.tema===t).length).join(' | '));
console.log('sem EXTRA:',novos.filter(c=>!EXTRA[c.title]).map(c=>c.title));
// Kit impresso: 18 + 18 + 0 cartas com kit:true (regra de 16/11/2026)
{const k=['5–7','8–12','13+'].map(f=>CARDS.filter(c=>c.kit&&c.faixa===f).length);const ok=k[0]===18&&k[1]===18&&k[2]===0;console.log('kit:true por faixa',k.join(' / '),ok?'OK':'ERRO: o kit deve ter 18 / 18 / 0');if(!ok)process.exitCode=1}
