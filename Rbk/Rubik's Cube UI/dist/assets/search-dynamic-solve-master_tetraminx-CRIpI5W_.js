import{j as w}from"./index-CtCTNQwx.js";function I(e){if(e<2)return e;let t=1;for(let n=2;n<=e;n++)t*=n;return t}function x(e){let t=Array(e);for(let n=0;n<e;n++)t[n]=n;return t}function X(e){e=e.slice();let t=e.length,n=I(t-1),r=0;for(;t>1;){t--;let o=e[0];r+=o*n;for(let i=0;i<t;i++){let l=e[i+1];e[i]=l-(l>o)}n/=t}return r}function j(e,t){let n=[],r=I(t-1)/2,o=0;for(let i=0;i<t-1;i++)n[i]=e/r|0,e%=r,r/=t-1-i;n[t-1]=0;for(let i=t-2;i>=0;i--)for(let l=i+1;l<t;l++)n[l]>=n[i]?n[l]++:o^=1;return o===1&&([n[t-2],n[t-1]]=[n[t-1],n[t-2]]),n}function V(e){return X(e)>>1}(()=>{let e=new Int8Array(49152),t=new Int8Array(4096*12);for(let o=0;o<4096;o++)for(let i=0,l=0;i<12;i++)o>>>i&1&&(e[i<<12|o]=l,t[l<<12|o]=i,l++);function n(o){let i=4095,l=19958400,f=0;for(let a=0;a<10;a++){let c=o[a];f+=e[i|c<<12]*l,i&=~(1<<c),l/=11-a}return f}function r(o,i){let l=4095,f=19958400,a=0;for(let c=0;c<10;c++){let _=o/f|0;o-=_*f,a^=_&1;let p=t[l|_<<12];i[c]=p,l&=~(1<<p),f/=11-c}return i[10]=t[l|a<<12],i[11]=t[l|(a^1)<<12],i}return[n,r]})();function v(e,t){let n=[];for(let r=0;r<t.length;r++)n[r]=e[t[r]];return n}function N(e){let t=[];for(let n=0;n<e.length;n++)t[e[n]]=n;return t}function $(e,t){let n=[];for(let r=0;r<t;r++)n[r]=r;for(let r=0;r<e.length;r++)n[e[r]]=e[(r+1)%e.length];return n}function d(e,t){return e.length===0?x(t):e.map(n=>$(n,t)).reduce(v)}function Y(e,t){let n=Array(4);for(let l=0;l<4;l++)n[l]=(e.co[l]+t.co[l])%3;let r=v(e.mp,t.mp),o=v(e.wp,t.wp),i=v(e.cp,t.cp);return{co:n,mp:r,wp:o,cp:i}}x(12),x(12);let Z={co:[2,0,0,0],mp:x(12),wp:$([1,9,11],12),cp:[0,1,2,3]},ee={co:[0,2,0,0],mp:x(12),wp:$([0,7,2],12),cp:[0,1,2,3]},te={co:[0,0,2,0],mp:x(12),wp:$([3,6,10],12),cp:[0,1,2,3]},ne={co:[0,0,0,2],mp:x(12),wp:$([4,8,5],12),cp:[0,1,2,3]},re={co:[2,0,0,0],mp:d([[1,9,11],[7,3,5]],12),wp:d([[1,9,11],[7,3,5]],12),cp:[0,2,3,1]},le={co:[0,2,0,0],mp:d([[0,7,2],[6,1,8]],12),wp:d([[0,7,2],[6,1,8]],12),cp:[3,1,0,2]},oe={co:[0,0,2,0],mp:d([[3,6,10],[9,0,4]],12),wp:d([[3,6,10],[9,0,4]],12),cp:[1,3,2,0]},ie={co:[0,0,0,2],mp:d([[4,8,5],[10,2,11]],12),wp:d([[4,8,5],[10,2,11]],12),cp:[2,0,1,3]},M=[re,le,oe,ie,Z,ee,te,ne],fe=["u","l","r","b","U","L","R","B"];const y=8,b=4;function C(e,t){return e>=4&&t>=4?!0:e<4&&t<4?e===t:(e^t)===4}function pe(e){let t=["0","","'"];return e.map(([r,o])=>fe[r]+t[o]).join(" ")}function ae(){let e=Array(4);for(let o=0;o<4;o++)e[o]=w(3);let t=j(w(I(6)/2),6);for(let o=0,i=0;o<6;o++){let l=o===5?i:w(2);i^=l,t[o]+=l*6,t[o+6]=(t[o]+6)%12}let n=j(w(I(12)/2),12),r=j(w(I(4)/2),4);return{co:e,mp:t,wp:n,cp:r}}function ue(){return _e(ae())}function ce(e=!0,t=!1){let n=pe(ue());if(!e)return n;let r=["u","l","r","b"],o=["0","","'"];if(!t){for(let p=0;p<4;p++){let u=w(3);u!==0&&(n+=` ${r[p]}${o[u]}`)}return n.trim()}let i=[],l=[],f=[];for(let p=0;p<4;p++)i[p]=w(3),l[p]=w(3),f[p]=(i[p]-l[p]+3)%3;let a=p=>p.filter(u=>u!==0).length;for(;!(a(l)>=1&&a(f)>=1&&a(l)+a(f)>=4);)for(let p=0;p<4;p++)l[p]=w(3),f[p]=(i[p]-l[p]+3)%3;let c=l.map((p,u)=>p!==0?`${r[u]}${o[p]} `:"").join(""),_=f.map((p,u)=>p!==0?` ${r[u]}${o[p]}`:"").join("");return c+n+_}function _e(e){let t=se(e),n=[P(),T()],r=[ge(),ve()],o=he(t),i,l=new Set,f=performance.now();for(let a=0;a<22;a++){let{value:c,done:_}=o.next(),p=e;for(let[S,k]of c)for(let A=0;A<k;A++)p=Y(p,M[S]);let u=JSON.stringify(p);if(l.has(u))continue;l.add(u);let m=we(p),O=i?i.length-c.length-1:999999,g=xe(m,n,r,O).next().value;if(g!==void 0&&((i===void 0||i.length>c.length+g.length)&&(i=c.concat(g)),performance.now()-f>300))break}return i}function me(e){return e[3^e.indexOf(3)]}function se(e){let t=v(N(e.mp),e.wp),n=(e.co.reduce((r,o)=>r+o)-me(e.cp)+3)%3;return[0,1,2,3,4,5].map(r=>r+6*t.indexOf(r)+72*t.indexOf(r+6)+864*n)}let D=[],U=[];for(let e=0;e<y;e++){let t=M[e];t.mp,D[e]=N(t.mp),t.wp,U[e]=N(t.wp)}let E=[0,0,0,0,2,2,2,2],R=[[14,-1,-1,11,11,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,4,3,-1,-1,0],[13,-1,-1,11,10,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,3,1,-1,-1,6]],L=new Int8Array(55);for(let e=0;e<25;e++)L[e]=R[0][e],L[e+30]=R[1][e];let h=new Int8Array(6*12*12*3);for(let e=0;e<6;e++)for(let t=0;t<12;t++)for(let n=0;n<12;n++){let r=e+6*t+72*n,o=2;t===e?o++:t===(e+6)%12&&o--,n===(e+6)%12?o++:n===e&&o--,h[r]=o,h[r+6*12*12]=h[r+2*6*12*12]=o+5}function*he(e){let t=0,n=J(),r=de();for(;;)yield*F(...e,n,r,t,-1),t++}function*F(e,t,n,r,o,i,l,f,a,c){let _=y,p=h[e]+h[t]+h[n]+h[r]+h[o]+h[i],u=Math.max(f[e%864+t*864],f[n%864+t*864],f[o%864+t*864],f[e%864+r*864],f[n%864+r*864],f[o%864+r*864],f[e%864+i*864],f[n%864+i*864],f[o%864+i*864],f[e%864+n*864],f[e%864+o*864],f[n%864+o*864],f[t%864+r*864],f[t%864+i*864],f[r%864+i*864],L[p]);if(!(u>a)){if(a===0){yield[];return}if(!(u===0&&a===1))for(let m=0;m<_;m++){if(m===c||m<c&&C(m,c))continue;let O=e,g=t,S=n,k=r,A=o,q=i;for(let B=1;B<=2;B++){O=l[O][m],g=l[g][m],S=l[S][m],k=l[k][m],A=l[A][m],q=l[q][m];let K=F(O,g,S,k,A,q,l,f,a-1,m);for(;;){let{value:Q,done:W}=K.next();if(W)break;yield[[m,B]].concat(Q)}}}}}function we(e){let t=e.mp,n=V(t.slice(0,6).map(l=>l%6)),r=t.slice(0,5).map((l,f)=>(l>=6)*2**f).reduce((l,f)=>l+f),o=e.co.map((l,f)=>l*3**f).reduce((l,f)=>l+f),i=e.cp.indexOf(0);return[n+360*i,r+32*o]}let s={};function H(){if(s.phase1pm)return s.phase1pm;let e=Array(6*12*12).fill().map(()=>Array(y).fill(-1));for(let t=0;t<6;t++)for(let n=0;n<12;n++)for(let r=0;r<12;r++){if(n===r)continue;let o=t+6*n+72*r;for(let i=0;i<y;i++){let l=D[i][t],f=U[i][n],a=U[i][r];l<6?e[o][i]=l+6*f+72*a:e[o][i]=l-6+6*a+72*f}}return s.phase1pm=e}function J(){if(s.phase1pcm)return s.phase1pcm;let e=H(),t=Array(e.length*3).fill().map(()=>Array(y).fill(-1));for(let n=0;n<e.length;n++)for(let r=0;r<y;r++){let o=e[n][r];t[n][r]=o+6*12*12*E[r],t[n+6*12*12][r]=o+6*12*12*((E[r]+1)%3),t[n+2*6*12*12][r]=o+6*12*12*((E[r]+2)%3)}return s.phase1pcm=t}function de(){if(s.phase1p2cp)return s.phase1p2cp;let e=H(),t=J(),n=new Int8Array((6*12*12)**2*3);n.fill(-1);let r=[0,1,2,3,4,5].map(i=>i+6*i+72*(i+6));for(let i=0;i<6;i++)for(let l=0;l<6;l++)i!==l&&(n[r[i]+864*r[l]]=0);let o=0;for(;;){let i=!1;for(let l=0;l<n.length;l++){if(n[l]!==o)continue;let f=l%864,a=Math.floor(l/864);for(let c=0;c<y;c++){let _=f,p=a;for(let u=1;u<=2;u++){_=e[_][c],p=t[p][c];let m=_+864*p;n[m]===-1&&(i=!0,n[m]=o+1)}}}if(!i)break;o++}return s.phase1p2cp=n}function P(){if(s.phase2pm)return s.phase2pm;let e=Array(1440).fill().map(()=>Array(b));for(let t=0;t<360;t++){let n=j(t,6);for(let r=0;r<6;r++)n[r+6]=n[r]+6;for(let r=0;r<b;r++){let o=v(n,M[r].mp),i=V(o.slice(0,6).map(l=>l%6));for(let l=0;l<4;l++){let f=M[r].cp[l];e[t+360*f][r]=i+360*l}}}return s.phase2pm=e}function T(){if(s.phase2om)return s.phase2om;let e=Array(32*81).fill().map(()=>Array(b));for(let t=0;t<32;t++){let n=[0,1,2,3,4].map(o=>t>>o&1);n[5]=n.reduce((o,i)=>o^i);let r=[];for(let o=0;o<6;o++)r[o]=o+6*n[o],r[o+6]=o+6*(n[o]^1);for(let o=0;o<81;o++){let i=[0,1,2,3].map(l=>Math.floor(o/3**l)%3);for(let l=0;l<b;l++){let a=v(r,M[l].mp).slice(0,5).map(u=>+(u>=6)),c=0;for(let u=0;u<5;u++)c+=a[u]<<u;let _=i.map((u,m)=>(u+M[l].co[m])%3),p=0;for(let u=0;u<4;u++)p+=_[u]*3**u;e[t+32*o][l]=c+32*p}}}return s.phase2om=e}function ge(){return s.phase2pp?s.phase2pp:s.phase2pp=z(P(),[0])}function ve(){return s.phase2op?s.phase2op:s.phase2op=z(T(),[0])}function z(e,t){let n=e.length,r=e[0].length,o=Array(n).fill(-1),i=t.slice(),l=[],f=0;for(;i.length>0;){l.length=0;for(let a of i)if(o[a]===-1){o[a]=f;for(let c=0;c<r;c++){let _=e[a][c];for(;_!==a;)l.push(_),_=e[_][c]}}[i,l]=[l,i],f+=1}return o}function*xe(e,t,n,r){let o=e.length,i=0;for(let l=0;l<o;l++)i=Math.max(i,n[l][e[l]]);for(;i<=r;)yield*G(e,t,n,i,-1),i++}function*G(e,t,n,r,o){let i=e.length,l=t[0][0].length,f=0;for(let a=0;a<i;a++)f=Math.max(f,n[a][e[a]]);if(!(f>r)){if(r===0){yield[];return}if(!(f===0&&r===1))for(let a=0;a<l;a++){if(a===o||a<o&&C(a,o))continue;let c=e.slice();for(let p=0;p<i;p++)c[p]=t[p][e[p]][a];let _=1;for(;e.some((p,u)=>e[u]!==c[u]);){let p=G(c,t,n,r-1,a);for(;;){let{value:u,done:m}=p.next();if(m)break;yield[[a,_]].concat(u)}for(let u=0;u<i;u++)c[u]=t[u][c[u]][a];_++}}}}async function Ae(){return ce(!1)}export{Ae as randomMasterTetraminxScrambleString};