import{r as B}from"./index-C3JNUt0X.js";import"./search-worker-entry-CVNgimpE.js";function Y(r,e){r.ul=e.ul,r.ur=e.ur,r.dl=e.dl,r.dr=e.dr,r.ml=e.ml}function H(r,e){var a;e<<=2,e>24?(e=48-e,a=r.ul,r.ul=(~~r.ul>>e|r.ur<<24-e)&16777215,r.ur=(~~r.ur>>e|a<<24-e)&16777215):e>0?(a=r.ul,r.ul=(r.ul<<e|~~r.ur>>24-e)&16777215,r.ur=(r.ur<<e|~~a>>24-e)&16777215):e===0?(a=r.ur,r.ur=r.dl,r.dl=a,r.ml=1-r.ml):e>=-24?(e=-e,a=r.dl,r.dl=(r.dl<<e|~~r.dr>>24-e)&16777215,r.dr=(r.dr<<e|~~a>>24-e)&16777215):e<-24&&(e=48+e,a=r.dl,r.dl=(~~r.dl>>e|r.dr<<24-e)&16777215,r.dr=(~~r.dr>>e|a<<24-e)&16777215)}function Z(r){var e,a,u,t,f;for(u=0,r.arr[0]=g(r,0),t=1;t<24;++t)g(r,t)!==r.arr[u]&&(r.arr[++u]=g(r,t));for(f=0,e=0;e<16;++e)for(a=e+1;a<16;++a)r.arr[e]>r.arr[a]&&(f^=1);return f}function x(r){var e,a,u,t;return t=r.ur&1118481,t|=~~t>>3,t|=~~t>>6,t=t&15|~~t>>12&48,u=r.ul&1118481,u|=~~u>>3,u|=~~u>>6,u=u&15|~~u>>12&48,a=r.dr&1118481,a|=~~a>>3,a|=~~a>>6,a=a&15|~~a>>12&48,e=r.dl&1118481,e|=~~e>>3,e|=~~e>>6,e=e&15|~~e>>12&48,M(Z(r)<<24|u<<18|t<<12|e<<6|a)}function b(r,e){var a,u;for(a=0;a<8;++a)r.prm[a]=~~(~~g(r,a*3+1)>>1<<24)>>24;for(e.cornperm=I(r.prm),e.topEdgeFirst=g(r,0)===g(r,1),a=e.topEdgeFirst?2:0,u=0;u<4;a+=3,++u)r.prm[u]=~~(~~g(r,a)>>1<<24)>>24;for(e.botEdgeFirst=g(r,12)===g(r,13),a=e.botEdgeFirst?14:12;u<8;a+=3,++u)r.prm[u]=~~(~~g(r,a)>>1<<24)>>24;e.edgeperm=I(r.prm),e.ml=r.ml}function g(r,e){var a;return e<6?a=~~r.ul>>(5-e<<2):e<12?a=~~r.ur>>(11-e<<2):e<18?a=~~r.dl>>(17-e<<2):a=~~r.dr>>(23-e<<2),~~((a&15)<<24)>>24}function E(r,e,a){e<6?(r.ul&=~(15<<(5-e<<2)),r.ul|=a<<(5-e<<2)):e<12?(r.ur&=~(15<<(11-e<<2)),r.ur|=a<<(11-e<<2)):e<18?(r.dl&=~(15<<(17-e<<2)),r.dl|=a<<(17-e<<2)):(r.dr&=~(15<<(23-e<<2)),r.dr|=a<<(23-e<<2))}function D(){this.arr=[],this.prm=[]}function j(){var r,e,a,u,t,f,n,i,v;for(r=new D,a=F[B(3678)],t=324508639,u=38177486,n=f=8,e=0;e<24;e++)a>>e&1?(i=B(n)<<2,E(r,23-e,t>>i&15),E(r,22-e,t>>i&15),v=(1<<i)-1,t=(t&v)+(t>>4&~v),--n,++e):(i=B(f)<<2,E(r,23-e,u>>i&15),v=(1<<i)-1,u=(u&v)+(u>>4&~v),--f);return r.ml=B(2),r}function rr(){}let p=D.prototype=rr.prototype;p.dl=10062778;p.dr=14536702;p.ml=0;p.ul=70195;p.ur=4544119;function er(r){var e,a,u,t,f,n;for(Y(r.Search_d,r.Search_c),u=0;u<r.Search_length1;++u)H(r.Search_d,r.Search_move[u]);for(b(r.Search_d,r.Search_sq),a=r.Search_sq.edgeperm,e=r.Search_sq.cornperm,f=r.Search_sq.ml,n=Math.max(S[r.Search_sq.edgeperm<<1|f],S[r.Search_sq.cornperm<<1|f]),u=n;u<r.Search_maxlen2;++u)if(R(r,a,e,r.Search_sq.topEdgeFirst,r.Search_sq.botEdgeFirst,f,u,r.Search_length1,0)){for(t=0;t<u;++t)H(r.Search_d,r.Search_move[r.Search_length1+t]);return r.Search_sol_string=ar(r,u+r.Search_length1),!0}return!1}function ar(r,e){for(var a="",u=0,t=0,f=e-1;f>=0;f--){var n=r.Search_move[f];n>0?(n=12-n,u=n>6?n-12:n):n<0?(n=12+n,t=n>6?n-12:n):(u===0&&t===0?a+=" / ":a+=`(${u}, ${t}) / `,u=t=0)}return(u!==0||t!==0)&&(a+=`(${u}, ${t})`),a}function G(r,e,a,u,t,f){var n,i,v;if(a===0&&u<4)return u===0&&er(r);if(f!==0&&(v=z[e],i=s[v],i<u&&(r.Search_move[t]=0,G(r,v,i,u-1,t+1,0))))return!0;if(v=e,f<=0){for(n=0;n+=$[v],v=~~n>>4,n&=15,!(n>=12||(i=s[v],i>u));)if(i<u&&(r.Search_move[t]=n,G(r,v,i,u-1,t+1,1)))return!0}if(v=e,f<=1){for(n=0;n+=k[v],v=~~n>>4,n&=15,!(n>=6||(i=s[v],i>u));)if(i<u&&(r.Search_move[t]=-n,G(r,v,i,u-1,t+1,2)))return!0}return!1}function R(r,e,a,u,t,f,n,i,v){var h,l,c,_,o,m,d;if(n===0&&!u&&t||v!==0&&u===t&&(c=T[e],l=T[a],S[c<<1|1-f]<n&&S[l<<1|1-f]<n&&(r.Search_move[i]=0,R(r,c,l,u,t,1-f,n-1,i+1,0))))return!0;if(v<=0)for(d=!u,c=d?y[e]:e,l=d?a:y[a],_=d?1:2,o=S[c<<1|f],m=S[l<<1|f];_<12&&o<=n&&o<=n;){if(o<n&&m<n&&(r.Search_move[i]=_,R(r,c,l,d,t,f,n-1,i+1,1)))return!0;d=!d,d?(c=y[c],o=S[c<<1|f],_+=1):(l=y[l],m=S[l<<1|f],_+=2)}if(v<=1)for(h=!t,c=h?w[e]:e,l=h?a:w[a],_=h?1:2,o=S[c<<1|f],m=S[l<<1|f];_<(n>3?6:12)&&o<=n&&o<=n;){if(o<n&&m<n&&(r.Search_move[i]=-_,R(r,c,l,u,h,f,n-1,i+1,2)))return!0;h=!h,h?(c=w[c],o=S[c<<1|f],_+=1):(l=w[l],m=S[l<<1|f],_+=2)}return!1}function tr(r,e){var a;for(r.Search_c=e,a=x(e),r.Search_length1=s[a];r.Search_length1<100&&(r.Search_maxlen2=Math.min(31-r.Search_length1,17),!G(r,a,s[a],r.Search_length1,0,-1));++r.Search_length1);return r.Search_sol_string}function N(){this.Search_move=[],this.Search_d=new D,this.Search_sq=new Q}function nr(){}p=N.prototype=nr.prototype;p.Search_c=null;p.Search_length1=0;p.Search_maxlen2=0;p.Search_sol_string=null;let J=!1;function ur(){J||(J=!0,P=[0,3,6,12,15,24,27,30,48,51,54,60,63],F=[],s=[],$=[],k=[],z=[],cr())}function ir(r){var e,a;e=0,a=0;do r.bottom&2048?(e+=2,r.bottom=r.bottom<<2^12291):(e+=1,r.bottom=r.bottom<<1),a=1-a;while(C(r.bottom&63)&1);return!(C(r.bottom)&2)&&(r.Shape_parity^=a),e}function V(r){var e;return e=X(F,r.top<<12|r.bottom)<<1|r.Shape_parity,e}function L(r,e){r.Shape_parity=e&1,r.top=F[~~e>>1],r.bottom=r.top&4095,r.top>>=12}function fr(r){var e,a;e=0,a=0;do r.top&2048?(e+=2,r.top=r.top<<2^12291):(e+=1,r.top=r.top<<1),a=1-a;while(C(r.top&63)&1);return!(C(r.top)&2)&&(r.Shape_parity^=a),e}function O(){}function M(r){var e;return e=X(F,r&16777215)<<1|~~r>>24,e}function cr(){var r,e,a,u,t,f,n,i,v,h,l,c,_,o,m,d;for(r=0,n=0;n<28561;++n)f=P[n%13],a=P[~~(n/13)%13],c=P[~~(~~(n/13)/13)%13],l=P[~~(~~(~~(n/13)/13)/13)],_=l<<18|c<<12|a<<6|f,C(_)===16&&(F[r++]=_);for(h=new O,n=0;n<7356;++n)L(h,n),$[n]=fr(h),$[n]|=V(h)<<4,L(h,n),k[n]=ir(h),k[n]|=V(h)<<4,L(h,n),d=h.top&63,o=C(d),m=C(h.bottom&4032),h.Shape_parity^=1&~~(o&m)>>1,h.top=h.top&4032|~~h.bottom>>6&63,h.bottom=h.bottom&63|d<<6,z[n]=V(h);for(n=0;n<7536;++n)s[n]=-1;for(s[M(14378715)]=0,s[M(31157686)]=0,s[M(23967451)]=0,s[M(7191990)]=0,u=4,t=0,e=-1;u!==t;)for(t=u,++e,n=0;n<7536;++n)if(s[n]===e){v=0,i=n;do i=$[i],v+=i&15,i>>=4,s[i]===-1&&(++u,s[i]=e+1);while(v!==12);v=0,i=n;do i=k[i],v+=i&15,i>>=4,s[i]===-1&&(++u,s[i]=e+1);while(v!==12);i=z[n],s[i]===-1&&(++u,s[i]=e+1)}}function vr(){}p=O.prototype=vr.prototype;p.bottom=0;p.Shape_parity=0;p.top=0;var k,F,s,$,z,P;let K=!1;function hr(){if(!K){K=!0,S=[],T=[],y=[],w=[],W=[1,1,2,6,24,120,720,5040],q=[];for(var r=0;r<12;++r)q[r]=[];lr()}}function Q(){}function I(r){var e,a,u,t;for(a=0,t=1985229328,e=0;e<7;++e)u=r[e]<<2,a=(8-e)*a+(~~t>>u&7),t-=286331152<<u;return a&65535}function lr(){var r,e,a,u,t,f,n,i,v,h,l,c,_;for(t=0;t<12;++t)for(q[t][0]=1,q[t][t]=1,v=1;v<t;++v)q[t][v]=q[t-1][v-1]+q[t-1][v];for(c=[],t=0;t<40320;++t)U(c,t),_=c[2],c[2]=c[4],c[4]=_,_=c[3],c[3]=c[5],c[5]=_,T[t]=I(c),U(c,t),_=c[0],c[0]=c[1],c[1]=c[2],c[2]=c[3],c[3]=_,y[t]=I(c),U(c,t),_=c[4],c[4]=c[5],c[5]=c[6],c[6]=c[7],c[7]=_,w[t]=I(c);for(t=0;t<80640;++t)S[t]=-1;for(S[0]=0,e=0,a=1;a<80640;){i=e>=11,u=i?-1:e,r=i?e:-1,++e;r:for(t=0;t<80640;++t)if(S[t]===u){if(f=~~t>>1,l=t&1,n=T[f]<<1|1-l,S[n]===r&&(++a,S[i?t:n]=~~(e<<24)>>24,i))continue r;for(n=f,h=0;h<4;++h)if(n=y[n],S[n<<1|l]===r&&(++a,S[i?t:n<<1|l]=~~(e<<24)>>24,i))continue r;for(h=0;h<4;++h)if(n=w[n],S[n<<1|l]===r&&(++a,S[i?t:n<<1|l]=~~(e<<24)>>24,i))continue r}}}function U(r,e){var a,u,t,f,n;for(n=1985229328,a=0;a<7;++a)t=W[7-a],f=~~(e/t),e-=f*t,f<<=2,r[a]=~~((~~n>>f&7)<<24)>>24,u=(1<<f)-1,n=(n&u)+(~~n>>4&~u);r[7]=~~(n<<24)>>24}function _r(){}p=Q.prototype=_r.prototype;p.botEdgeFirst=!1;p.cornperm=0;p.edgeperm=0;p.ml=0;p.topEdgeFirst=!1;var w,q,S,y,T,W;function C(r){return r-=~~r>>1&1431655765,r=(~~r>>2&858993459)+(r&858993459),r=(~~r>>4)+r&252645135,r+=~~r>>8,r+=~~r>>16,r&63}function X(r,e){var a,u,t,f;for(u=0,a=r.length-1;u<=a;)if(t=u+(~~(a-u)>>1),f=r[t],f<e)u=t+1;else if(f>e)a=t-1;else return t;return-u-1}var A=!1,Sr=function(r,e,a){A||(ur(),hr()),A=!0},pr=function(){return A||Sr(),j()},sr=function(r){var e=new N;return tr(e,r)},or=function(){var r=pr(),e=sr(r);return{pattern:r,scramble_string:e}};function mr(){return or().scramble_string}export{mr as getRandomSquare1ScrambleString};
