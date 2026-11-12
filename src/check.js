// Vérifie chaque signal hors navigateur : durée, valeurs non finies, textes manquants dans les 13 langues, et les pics du spectre (à comparer aux fréquences de la norme).
// Usage : node check.js CHEMIN/index.html [id,id…]
const fs=require('fs'); const html=fs.readFileSync(process.argv[2],'utf8');
let js=html.slice(html.indexOf('<script>')+8,html.lastIndexOf('</script>'));
js=js.replace('let start=MODES.find','globalThis.T={G,MODES,I18N};let start=MODES.find');
const ctx2d=new Proxy({},{get:(t,k)=>k==='getImageData'?((x,y,w,h)=>({data:new Uint8ClampedArray(w*h*4).map((_,i)=>(i%4===0&&(i>>2)%5<2)?255:0)})):k==='createImageData'?((w,h)=>({data:new Uint8ClampedArray(w*h*4)})):k==='createLinearGradient'?(()=>({addColorStop(){}})):()=>{}});
const el=()=>({getContext:()=>ctx2d,addEventListener(){},setAttribute(){},appendChild(){},querySelector:()=>el(),querySelectorAll:()=>[],width:600,height:300,style:{},dataset:{},classList:{toggle(){}},firstChild:{addEventListener(){}},getBoundingClientRect:()=>({}),value:15,checked:true,options:[]});
globalThis.document={getElementById:()=>el(),createElement:()=>el(),querySelectorAll:()=>[],querySelector:()=>el(),documentElement:{classList:{toggle(){}}}};
globalThis.localStorage={getItem:()=>null,setItem(){}}; globalThis.sessionStorage=globalThis.localStorage;
globalThis.location={hash:'#fr',hostname:'localhost'}; globalThis.history={replaceState(){}}; globalThis.navigator={language:'fr'};
globalThis.window={addEventListener(){}}; globalThis.requestAnimationFrame=()=>{}; globalThis.fetch=()=>Promise.resolve({ok:false});
eval(js);
const {G,MODES,I18N}=globalThis.T, SR=12000, N=4096;
function fft(re,im){ const n=re.length; for(let i=1,j=0;i<n;i++){ let b=n>>1; for(;j&b;b>>=1) j^=b; j^=b; if(i<j){ [re[i],re[j]]=[re[j],re[i]]; [im[i],im[j]]=[im[j],im[i]]; } }
  for(let s=2;s<=n;s<<=1){ const a=-2*Math.PI/s; for(let k=0;k<n;k+=s) for(let j=0;j<s/2;j++){ const wr=Math.cos(a*j), wi=Math.sin(a*j), p=k+j, q=p+s/2, tr=re[q]*wr-im[q]*wi, ti=re[q]*wi+im[q]*wr; re[q]=re[p]-tr; im[q]=im[p]-ti; re[p]+=tr; im[p]+=ti; } } }
function psd(x){ const acc=new Float64Array(N/2); let c=0; for(let o=0;o+N<=x.length;o+=N/2){ const re=new Float64Array(N), im=new Float64Array(N); for(let i=0;i<N;i++) re[i]=x[o+i]*(0.5-0.5*Math.cos(2*Math.PI*i/N)); fft(re,im); for(let i=0;i<N/2;i++) acc[i]+=re[i]*re[i]+im[i]*im[i]; c++; } return acc; }
function peaks(p,k){ const out=[]; const used=new Uint8Array(p.length); for(let n=0;n<k;n++){ let m=-1,mi=-1; for(let i=2;i<p.length-2;i++) if(!used[i]&&p[i]>m&&p[i]>=p[i-1]&&p[i]>=p[i+1]){ m=p[i]; mi=i; } if(mi<0) break; out.push([Math.round(mi*SR/N),m]); for(let i=Math.max(0,mi-8);i<Math.min(p.length,mi+9);i++) used[i]=1; } const top=out[0]?out[0][1]:1; return out.filter(o=>o[1]>top*0.02).map(o=>o[0]).sort((a,b)=>a-b); }
const only=process.argv[3]; let bad=0;
for(const m of MODES){ if(only&&!only.split(',').includes(m.id)) continue; let x; try{ x=Float64Array.from(G[m.id]()); }catch(e){ console.log(m.id,'ERREUR',e.message); bad++; continue; }
  let pk=0, nan=0; for(const v of x){ if(!isFinite(v)) nan++; pk=Math.max(pk,Math.abs(v)); }
  const fr=I18N.fr.modes[m.id]||{}; const langs=Object.keys(I18N).filter(l=>!(I18N[l].modes[m.id]&&I18N[l].modes[m.id].t&&I18N[l].modes[m.id].h&&I18N[l].modes[m.id].l));
  if(nan||langs.length||!fr.nm) bad++;
  console.log(m.id.padEnd(10),(x.length/SR).toFixed(1).padStart(5)+'s','pk',pk.toFixed(2),nan?'NaN:'+nan:'', langs.length?'MANQUE:'+langs.join(','):'', 'span',m.span.join('-').padEnd(10),'pics',peaks(psd(x),8).join(' ')); }
console.log(MODES.length,'signaux,',bad,'problèmes');
