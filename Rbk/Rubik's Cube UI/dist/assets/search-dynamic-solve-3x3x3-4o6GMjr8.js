var P={3:1},N=4194303,rr=1048575,jn=524288,U=65535,D={11:1,3:1},A={17:1,3:1},Re=14540032,Hr=286331153,L={10:1,3:1},_,me={};function en(){}function In(r){function e(){}return e.prototype=r||{},new e}function Dn(r){return r instanceof Array?r[0]:null}function Jr(r,e,n){var o=me,v=Fn,u=Dn,f=o[r],l=u(f);f&&!l?_=f:(_=o[r]=e?v(e):{},_.castableTypeMap$=n,_.constructor=_,!e&&(_.typeMarker$=en));for(let a=3;a<arguments.length;++a)arguments[a].prototype=_;l&&(_.___clazz$=l)}function Fn(r){var e=me;return In(e[r])}function An(){}Jr(1,null,{},An);function re(r){return r<<24>>24}function Ne(){this.typeName=null,this.simpleName=null,this.packageName=null,this.compoundName=null,this.canonicalName=null,this.typeId=null,this.arrayLiterals=null}function Be(r,e){var n;return n=new Ne,n.packageName=r,n.compoundName=e,n}function ur(r,e,n){var o;return o=Be(r,e),cn(n,o),o}function En(r,e){var n;return n=Be(r,e),n.modifiers=2,n}function Ce(r,e){var n;return n=Be("",r),n.typeId=e,n.modifiers=1,n}function nn(r,e){var n=r.arrayLiterals=r.arrayLiterals||[];return n[e]||(n[e]=r.createClassLiteralForArray(e))}function Un(r){if(r.isPrimitive())return null;var e=r.typeId,n=me[e];return n}function cn(r,e){if(r){e.typeId=r;var n=Un(e);if(!n){me[r]=[e];return}n.___clazz$=e}}Jr(79,1,{},Ne);_.createClassLiteralForArray=function(e){var n;return n=new Ne,n.modifiers=4,e>1?n.componentType=nn(this,e-1):n.componentType=this,n};_.isPrimitive=function(){return(this.modifiers&1)!==0};function M(r,e){return nn(r,e)}function d(r,e,n,o,v,u){var f;return f=vn(v,o),b(M(r,u),e,n,v,f),f}function R(r,e,n,o,v,u){return on(r,e,n,o,v,0,u)}function on(r,e,n,o,v,u,f){var l,a,p,m,C;if(m=v[u],p=u===f-1,l=p?o:0,C=vn(l,m),b(M(r,f-u),e[u],n[u],l,C),!p)for(++u,a=0;a<m;++a)C[a]=on(r,e,n,o,v,u,f);return C}function b(r,e,n,o,v){return v.___clazz$=r,v.castableTypeMap$=e,v.typeMarker$=en,v.__elementTypeId$=n,v.__elementTypeCategory$=o,v}function vn(r,e){var n=new Array(e),o;switch(r){case 6:{o={l:0,m:0,h:0};break}case 7:{o=0;break}case 8:{o=!1;break}default:return n}for(var v=0;v<e;++v)n[v]=o;return n}function qe(r){var e,n,o;return e=r&N,n=r>>22&N,o=r<0?rr:0,Rn(e,n,o)}function Rn(r,e,n){return{l:r,m:e,h:n}}function Nn(r,e){var n,o,v;return n=r.l+e.l,o=r.m+e.m+(n>>22),v=r.h+e.h+(o>>22),{l:n&N,m:o&N,h:v&rr}}function J(r,e){return{l:r.l&e.l,m:r.m&e.m,h:r.h&e.h}}function ze(r){var e,n;return r>-129&&r<128?(e=r+128,hr==null&&(hr=d(C1,P,293,256,0,1)),n=hr[e],!n&&(n=hr[e]=qe(r)),n):qe(r)}function un(r,e){var n,o;return n=r.h>>19,o=e.h>>19,n===0?o!==0||r.h>e.h||r.h===e.h&&r.m>e.m||r.h===e.h&&r.m===e.m&&r.l>=e.l:!(o===0||r.h<e.h||r.h===e.h&&r.m<e.m||r.h===e.h&&r.m===e.m&&r.l<e.l)}function Pe(r,e){return r.l!==e.l||r.m!==e.m||r.h!==e.h}function ie(r,e){return{l:r.l|e.l,m:r.m|e.m,h:r.h|e.h}}function ee(r,e){var n,o,v;return e&=63,e<22?(n=r.l<<e,o=r.m<<e|r.l>>22-e,v=r.h<<e|r.m>>22-e):e<44?(n=0,o=r.l<<e-22,v=r.m<<e-22|r.l>>44-e):(n=0,o=0,v=r.l<<e-44),{l:n&N,m:o&N,h:v&rr}}function pr(r,e){var n,o,v,u,f;return e&=63,n=r.h,o=(n&jn)!==0,o&&(n|=-1048576),e<22?(f=n>>e,u=r.m>>e|n<<22-e,v=r.l>>e|r.m<<22-e):e<44?(f=o?rr:0,u=n>>e-22,v=r.m>>e-22|n<<44-e):(f=o?rr:0,u=o?N:0,v=n>>e-44),{l:v&N,m:u&N,h:f&rr}}function fn(r,e){var n,o,v;return n=r.l-e.l,o=r.m-e.m+(n>>22),v=r.h-e.h+(o>>22),{l:n&N,m:o&N,h:v&rr}}function mr(r){return r.l|r.m<<22}var hr;function Bn(r){this.string=r}function er(r,e){return r>e?r:e}function He(r,e){return r<e?r:e}function zn(r,e){return r.indexOf(e)}function Hn(r){return Tn(r,0,r.length)}function Tn(r,e,n){for(var o="",v=e;v<n;){var u=Math.min(v+1e4,n);o+=String.fromCharCode.apply(null,r.slice(v,u)),v=u}return o}function xn(r){return String.fromCharCode(r&U)}var Vn=ur("java.lang","String",2);function Ke(r){return r.string+=" ",r}function Ze(r,e){return r.string+=e,r}function On(){Bn.call(this,"")}function ne(r,e){var n;if(r===e)return!0;if(r.length!==e.length)return!1;for(n=0;n<r.length;++n)if(r[n]!==e[n])return!1;return!0}let Qe=!1;function Cr(){Qe||(Qe=!0,s=R(F,[P,D],[11,0],7,[495,18],2),Ir=R(F,[P,D],[11,0],7,[324,18],2),Er=R(F,[P,D],[11,0],7,[336,18],2),nr=R(F,[P,D],[11,0],7,[495,8],2),de=d(E,A,0,20048,7,1),_e=d(E,A,0,20791,7,1),ir=d(E,A,0,82945,7,1),Lr=R(F,[P,D],[11,0],7,[2768,10],2),kr=R(F,[P,D],[11,0],7,[2768,10],2),jr=R(F,[P,D],[11,0],7,[24,10],2),Wr=R(F,[P,D],[11,0],7,[24,16],2),gr=R(F,[P,D],[11,0],7,[140,16],2),ge=d(E,A,0,8305,7,1),Pr=d(E,A,0,48441,7,1))}function Gn(r,e,n){return r.slice_0=s[e.slice_0][n],r.flip=Er[e.flip][(w(),dr)[n<<3|e.fsym]],r.fsym=r.flip&7^e.fsym,r.flip>>=3,r.twist=Ir[e.twist][dr[n<<3|e.tsym]],r.tsym=r.twist&7^e.tsym,r.twist>>=3,r.prun=er(er(H(de,r.twist*495+nr[r.slice_0][r.tsym]),H(_e,r.flip*495+nr[r.slice_0][r.fsym])),H(ir,r.twist<<11|vr[r.flip<<3|r.fsym^r.tsym])),r.prun}function Xn(r,e,n){return n=(w(),Or)[3][n],r.flipc=Er[e.flipc>>3][dr[n<<3|e.flipc&7]]^e.flipc&7,r.twistc=Ir[e.twistc>>3][dr[n<<3|e.twistc&7]]^e.twistc&7,H(ir,r.twistc>>3<<11|vr[r.flipc^r.twistc&7])}function ln(r,e,n){var o;return r.twist=(w(),Xr)[ve(e)],r.flip=_r[oe(e)],r.tsym=r.twist&7,r.twist=r.twist>>3,r.prun=H(ir,r.twist<<11|vr[r.flip^r.tsym]),r.prun>n||(r.fsym=r.flip&7,r.flip=r.flip>>3,r.slice_0=494-Fr(e.ea,8,!0),r.prun=er(r.prun,er(H(de,r.twist*495+nr[r.slice_0][r.tsym]),H(_e,r.flip*495+nr[r.slice_0][r.fsym]))),r.prun>n)?!1:(o=new i,Yr(e,1,o),qr(e,1,o),r.twistc=Xr[ve(o)],r.flipc=_r[oe(o)],r.prun=er(r.prun,H(ir,r.twistc>>3<<11|vr[r.flipc^r.twistc&7])),r.prun<=n)}function xr(){Cr()}function H(r,e){return Cr(),r[e>>3]>>(e<<2)&15}function an(r){Cr(),!(tr===2||tr===1&&!r)&&(tr===0&&(e1(),Jn(),Yn(),Kn(),Wn(),w(),De(2048,Ge,_r,te=d(F,D,0,336,7,1),0),De(2187,Je,Xr,ke=d(F,D,0,324,7,1),1),qn(),Zn(),Qn()),Tr(ge,jr,Wr,Lr,(w(),Fe),584244),Tr(Pr,Ie,gr,kr,Fe,514084),Tr(de,s,nr,Ir,ke,431619),Tr(_e,s,nr,Er,te,431619),Tr(ir,null,null,Ir,ke,103939),tr=1)}function Jn(){var r,e,n,o;for(r=new i,e=new i,n=0;n<2768;n++)for(sn(r,(w(),Sr)[n]),o=0;o<10;o++)or(r,j[(c(),X)[o]],e),Lr[n][o]=fe(Q[x(e.ca,8,!1)])&U}function Wn(){var r,e,n,o,v;for(r=new i,e=new i,Ie=R(F,[P,D],[11,0],7,[140,10],2),n=0;n<140;n++){for(Pn(r.ca,n%70,0,!1),v=0;v<10;v++)or(r,(w(),j)[(c(),X)[v]],e),Ie[n][v]=Fr(e.ca,0,!1)+70*(165>>v&1^~~(n/70))&U;for(o=0;o<16;o++)Yr(r,(w(),T)[0][o],e),gr[n][o]=Fr(e.ca,0,!1)+70*~~(n/70)&U}}function Yn(){var r,e,n,o;for(r=new i,e=new i,n=0;n<2768;n++)for(Cn(r,(w(),Sr)[n]),o=0;o<10;o++)O(r,j[(c(),X)[o]],e),kr[n][o]=Q[x(e.ea,8,!0)]}function qn(){var r,e,n,o;for(r=new i,e=new i,n=0;n<336;n++)for(Ve(r,(w(),Ge)[n]),o=0;o<18;o++)O(r,j[o],e),Er[n][o]=_r[oe(e)]}function Kn(){var r,e,n,o,v;for(r=new i,e=new i,n=0;n<24;n++){for(wr(r.ea,n,12,!0),v=0;v<10;v++)O(r,(w(),j)[(c(),X)[v]],e),jr[n][v]=x(e.ea,12,!0)%24&U;for(o=0;o<16;o++)qr(r,(w(),T)[0][o],e),Wr[n][o]=x(e.ea,12,!0)%24&U}}function Tr(r,e,n,o,v,u,f){var l,a,p,m,C,k,g,I,S,Mr,br,V,W,B,Ur,Kr,z,cr,Rr,fr,Zr,Nr,h,We,Me,be,Br,ye,Se,Ye,Le,lr,yr,zr,Qr;if(V=u&15,Mr=(u>>4&1)===1?Re:0,p=(u>>5&1)===1,l=u>>8&15,m=u>>16&15,S=m,br=(1<<V)-1,a=e===null,g=a?2048:e.length,I=g*o.length,k=p?10:18,C=k===10?66:599186,B=(r[I>>3]>>(I<<2)&15)-1,B===-1){for(z=0;z<~~(I/8)+1;z++)r[z]=Hr;r[0]^=1,B=0}for(;B<S;){for(We=(B+1)*Hr^-1,cr=0;cr<r.length;cr++)zr=r[cr]^We,zr&=zr>>1,r[cr]+=zr&zr>>2&Hr;for(Zr=B>l,Se=Zr?B+2:B,ye=Se*Hr,W=Zr?B:B+2,++B,Qr=B^B+1,yr=0,z=0;z<I;++z,yr>>=4){if(!(z&7)&&(yr=r[z>>3],!((yr^ye)-Hr&~(yr^ye)&-2004318072))){z+=7;continue}if((yr&15)===Se)for(be=z%g,Ye=~~(z/g),Ur=0,Kr=0,a&&(Ur=(w(),_r)[be],Kr=Ur&7,Ur>>=3),h=0;h<k;h++){if(lr=o[Ye][h],a?Br=(w(),vr)[Er[Ur][dr[h<<3|Kr]]^Kr^lr&br]:Br=n[e[be][h]][lr&br],lr>>=V,Rr=lr*g+Br,Me=r[Rr>>3]>>(Rr<<2)&15,Me!==W){Me<B-1&&(h+=C>>h&3);continue}if(Zr){r[z>>3]^=Qr<<(z<<2);break}for(r[Rr>>3]^=Qr<<(Rr<<2),Nr=1,Le=v[lr];(Le>>=1)!==0;Nr++)(Le&1)===1&&(fr=lr*g,a?fr+=(w(),vr)[_r[Br]^Nr]:fr+=n[Br][Nr^Mr>>(Nr<<1)&3],(r[fr>>3]>>(fr<<2)&15)===W&&(r[fr>>3]^=Qr<<(fr<<2)))}}}}function Zn(){var r,e,n,o;for(r=new i,e=new i,n=0;n<324;n++)for(Oe(r,(w(),Je)[n]),o=0;o<18;o++)or(r,j[o],e),Ir[n][o]=Xr[ve(e)]}function Qn(){var r,e,n,o,v,u,f,l;for(r=new i,e=new i,o=0;o<495;o++){for(Pn(r.ea,494-o,8,!0),u=0;u<18;u+=3)O(r,(w(),j)[u],e),s[o][u]=494-Fr(e.ea,8,!0)&U;for(v=0;v<16;v+=2)qr(r,(w(),T)[0][v],e),nr[o][v>>1]=494-Fr(e.ea,8,!0)&U}for(n=0;n<495;n++)for(v=0;v<18;v+=3)for(l=s[n][v],f=1;f<3;f++)l=s[l][v],s[n][v+f]=l&U}Jr(31,1,{31:1},xr);_.flip=0;_.flipc=0;_.fsym=0;_.prun=0;_.slice_0=0;_.tsym=0;_.twist=0;_.twistc=0;var gr,Ie,Lr,Pr,kr,Er,ge,Wr,jr,ir,Ir,nr,_e,s,de,tr=0,sr=ur("org.cubing.min2phase.client","CoordCube",31);let he=!1;function w(){he||(he=!0,K=d(Gr,P,7,16,0,1),j=d(Gr,P,7,18,0,1),we=d(g1,P,0,18,6,1),dn=d(E,A,0,48,7,1),Z=R(E,[P,A],[17,0],7,[16,16],2),T=R(E,[P,A],[17,0],7,[16,16],2),Or=R(E,[P,A],[17,0],7,[16,18],2),dr=d(E,A,0,144,7,1),$=R(E,[P,A],[17,0],7,[16,18],2),Ge=d(F,D,0,336,7,1),Je=d(F,D,0,324,7,1),Sr=d(F,D,0,2768,7,1),Dr=d(y,L,0,2768,7,1),Xe=d(F,D,0,2768,7,1),le=d(y,L,0,24,7,1),_r=d(F,D,0,2048,7,1),Xr=d(F,D,0,2187,7,1),Q=d(F,D,0,40320,7,1),vr=d(F,D,0,2688,7,1),Ae=new G(2531,1373,67026819,1367),Ee=new G(2089,1906,322752913,2040),ae=b(M(y,2),P,10,0,[b(M(y,1),L,0,7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),b(M(y,1),L,0,7,[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14]),b(M(y,1),L,0,7,[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11]),b(M(y,1),L,0,7,[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15]),b(M(y,1),L,0,7,[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12]),b(M(y,1),L,0,7,[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9])]),r1(),n1())}function Te(r){r.ca=b(M(y,1),L,0,7,[0,1,2,3,4,5,6,7]),r.ea=b(M(y,1),L,0,7,[0,2,4,6,8,10,12,14,16,18,20,22])}function pn(r){!r.temps&&(r.temps=new i),or(Ee,r,r.temps),or(r.temps,Ae,r),O(Ee,r,r.temps),O(r.temps,Ae,r)}function xe(r,e){var n,o;for(o=0;o<8;o++)r.ca[o]=e.ca[o];for(n=0;n<12;n++)r.ea[n]=e.ea[n]}function hn(r){return fe(Q[x(r.ca,8,!1)])}function tn(r){return Q[x(r.ea,8,!0)]}function oe(r){var e,n;for(n=0,e=0;e<11;e++)n=n<<1|r.ea[e]&1;return n}function ve(r){var e,n;for(n=0,e=0;e<7;e++)n+=(n<<1)+(r.ca[e]>>3);return n}function ue(r){var e,n;for(!r.temps&&(r.temps=new i),n=0;n<12;n++)r.temps.ea[r.ea[n]>>1]=(n<<1|r.ea[n]&1)<<24>>24;for(e=0;e<8;e++)r.temps.ca[r.ca[e]&7]=(e|32>>(r.ca[e]>>3)&24)<<24>>24;xe(r,r.temps)}function mn(r){var e,n,o,v,u,f,l;for(e=new gn(r),v=new i,n=fe(Q[x(e.ca,8,!1)])>>4,f={l:0,m:0,h:0},l=0;l<6;l++){if(o=fe(Q[x(e.ca,8,!1)])>>4,n===o)for(u=0;u<16;u++)Yr(e,T[0][u],v),ne(v.ca,r.ca)&&(qr(e,T[0][u],v),ne(v.ea,r.ea)&&(f=ie(f,ee({l:1,m:0,h:0},(l<<4|u)<48?l<<4|u:48))));pn(e),l%3===2&&ue(e)}return f}function sn(r,e){wr(r.ca,e,8,!1)}function Cn(r,e){wr(r.ea,e,8,!0)}function Ve(r,e){var n,o,v;for(o=0,n=10;n>=0;--n,e>>=1)o^=v=e&1,r.ea[n]=(r.ea[n]&-2|v)<<24>>24;r.ea[11]=(r.ea[11]&-2|o)<<24>>24}function Oe(r,e){var n,o,v;for(o=15,n=6;n>=0;--n,e=~~(e/3))o-=v=e%3,r.ca[n]=(r.ca[n]&7|v<<3)<<24>>24;r.ca[7]=(r.ca[7]&7|o%3<<3)<<24>>24}function $n(r){var e,n,o,v,u;for(u=0,v=0,o=0;o<12;o++)v|=1<<(r.ea[o]>>1),u^=r.ea[o]&1;if(v!==4095)return-2;if(u!==0)return-3;for(n=0,u=0,e=0;e<8;e++)n|=1<<(r.ca[e]&7),u+=r.ca[e]>>3;return n!==255?-4:u%3!==0?-5:Ue(x(r.ea,12,!0),12)^Ue(x(r.ca,8,!1),8)?-6:0}function Yr(r,e,n){w();var o,v,u,f,l,a;for(a=K[T[0][e]],l=K[e],o=0;o<8;o++)u=a.ca[r.ca[l.ca[o]&7]&7]>>3,f=r.ca[l.ca[o]&7]>>3,v=u<3?f:(3-f)%3,n.ca[o]=(a.ca[r.ca[l.ca[o]&7]&7]&7|v<<3)<<24>>24}function or(r,e,n){w();var o,v,u;for(o=0;o<8;o++)v=r.ca[e.ca[o]&7]>>3,u=e.ca[o]>>3,n.ca[o]=(r.ca[e.ca[o]&7]&7|(v+u)%3<<3)<<24>>24}function $r(r,e,n){var o,v,u,f;for(o=0;o<8;o++)u=r.ca[e.ca[o]&7]>>3,f=e.ca[o]>>3,v=u+(u<3?f:6-f),v=v%3+(u<3==f<3?0:3),n.ca[o]=(r.ca[e.ca[o]&7]&7|v<<3)<<24>>24}function i(){w(),Te(this)}function G(r,e,n,o){Te(this),wr(this.ca,r,8,!1),Oe(this,e),wr(this.ea,n,12,!0),Ve(this,o)}function gn(r){Te(this),xe(this,r)}function fe(r){return w(),r^Re>>((r&15)<<1)&3}function qr(r,e,n){w();var o,v,u;for(u=K[T[0][e]],v=K[e],o=0;o<12;o++)n.ea[o]=(u.ea[r.ea[v.ea[o]>>1]>>1]^r.ea[v.ea[o]>>1]&1^v.ea[o]&1)<<24>>24}function O(r,e,n){w();var o;for(o=0;o<12;o++)n.ea[o]=(r.ea[e.ea[o]>>1]^e.ea[o]&1)<<24>>24}function t(r,e,n){w();var o;return o=Xe[r],n&&(o=o^Re>>((o&15)<<1)&3),o&65520|Z[o&15][e]}function _n(){return w(),0}function r1(){var r,e;for(j[0]=new G(15120,0,119750400,0),j[3]=new G(21021,1494,323403417,0),j[6]=new G(8064,1236,29441808,550),j[9]=new G(9,0,5880,0),j[12]=new G(1230,412,2949660,0),j[15]=new G(224,137,328552,137),r=0;r<18;r+=3)for(e=0;e<2;e++)j[r+e+1]=new i,O(j[r+e],j[r],j[r+e+1]),or(j[r+e],j[r],j[r+e+1])}function e1(){w();var r,e,n;for(De(40320,Sr,Q,Fe=d(F,D,0,2768,7,1),2),r=new i,n=0;n<2768;n++)Cn(r,Sr[n]),Dr[n]=Fr(r.ea,0,!0)+Ue(Sr[n],8)*70<<24>>24,ue(r),Xe[n]=Q[x(r.ea,8,!0)];for(e=0;e<24;e++)wr(r.ea,e,12,!0),ue(r),le[e]=x(r.ea,12,!0)%24<<24>>24}function n1(){var r,e,n,o,v,u,f,l,a,p,m,C,k,g,I,S;for(r=new i,e=new i,n=new G(28783,0,259268407,0),S=new G(15138,0,119765538,7),C=new G(5167,0,83473207,0),v=0;v<8;v++)C.ca[v]=re(C.ca[v]|24);for(u=0;u<16;u++)K[u]=new gn(r),$r(r,S,e),O(r,S,e),I=e,e=r,r=I,u%4===3&&($r(I,C,e),O(I,C,e),I=e,e=r,r=I),u%8===7&&($r(I,n,e),O(I,n,e),I=e,e=r,r=I);for(f=0;f<16;f++)for(a=0;a<16;a++)for($r(K[f],K[a],r),m=0;m<16;m++)if(ne(K[m].ca,r.ca)){Z[f][a]=m,T[m][a]=f;break}for(p=0;p<18;p++)for(g=0;g<16;g++){for(Yr(j[p],T[0][g],r),k=0;k<18;k++)if(ne(j[k].ca,r.ca)){Or[g][p]=k,$[g][(c(),Ar)[p]]=Ar[k];break}g%2===0&&(dr[p<<3|g>>1]=Or[g][p])}for(o=0;o<18;o++)for(we[o]=mn(j[o]),l=o,g=0;g<48;g++)Or[g%16][l]<o&&(dn[g]|=1<<o),g%16===15&&(l=ae[2][l])}function De(r,e,n,o,v){w();var u,f,l,a,p,m,C,k,g;for(u=new i,l=new i,f=0,p=0,g=v>=2?1:2,m=v!==1,a=0;a<r;a++)if(n[a]===0){switch(v){case 0:{Ve(u,a);break}case 1:{Oe(u,a);break}case 2:wr(u.ea,a,8,!0)}for(C=0;C<16;C+=g){switch(m?qr(u,C,l):Yr(u,C,l),v){case 0:{p=oe(l);break}case 1:{p=ve(l);break}case 2:p=x(l.ea,8,!0)}v===0&&(vr[f<<3|C>>1]=p&U),p===a&&(o[f]=(o[f]|1<<~~(C/g))&U),k=~~((f<<4|C)/g),n[p]=k&U}e[f++]=a&U}return f}var K,Q,Sr,_r,Ge,vr,le,Dr,Xe,dr,Or,$,Z,T,te,Fe,ke,Xr,Je,dn,j,we,Ae,Ee,ae,Gr=ur("org.cubing.min2phase.client","CubieCube",7);function o1(r,e,n,o,v,u,f,l){var a,p,m,C,k;if(C=er(H((Cr(),Pr),(f>>4)*140+gr[(w(),Dr)[l>>4]&255][T[f&15][l&15]]),er(H(Pr,o*140+gr[Dr[e]&255][T[v][n]]),H(ge,e*24+Wr[u][n]))),C>r.maxDep2)return C-r.maxDep2;for(a=r.maxDep2;a>=C&&(k=bn(r,o,v,e,n,u,a,r.depth1,10),!(k<0));a--){for(a-=k,r.solLen=0,r.solution=new kn,m1(r.solution,r.verbose,r.urfIdx,r.depth1),m=0;m<r.depth1+a;m++)$e(r.solution,r.move[m]);for(p=r.preMoveLen-1;p>=0;p--)$e(r.solution,r.preMoves[p]);r.solLen=r.solution.length_0}return a!==r.maxDep2?(r.maxDep2=He(Sn,r.solLen-r.length1-1),un(r.probe,r.probeMin)?0:1):1}function v1(r){var e,n,o,v,u,f,l,a,p,m,C,k,g,I,S;if(r.isRec=!1,un(r.probe,r.solution?r.probeMin:r.probeMax))return 0;for(r.probe=Nn(r.probe,{l:1,m:0,h:0}),o=r.valid1;o<r.depth1;o++)or(r.phase1Cubie[o],(w(),j)[r.move[o]],r.phase1Cubie[o+1]),O(r.phase1Cubie[o],j[r.move[o]],r.phase1Cubie[o+1]);for(r.valid1=r.depth1,l=hn(r.phase1Cubie[r.depth1]),a=l&15,l>>=4,p=tn(r.phase1Cubie[r.depth1]),m=p&15,p>>=4,C=x(r.phase1Cubie[r.depth1].ea,12,!0)%24,n=t(p,m,!1),e=t(l,a,!0),v=r.depth1===0?-1:r.move[r.depth1-1],u=r.preMoveLen===0?-1:r.preMoves[r.preMoveLen-1],S=0,I=(r.preMoveLen===0?1:2)*(r.depth1===0?1:2),k=0,g=(1<<I)-1;k<I;k++){if(g>>k&1){if(g&=~(1<<k),S=o1(r,l,a,p,m,C,n,e),S===0||S>2)break;S===2&&(g&=4<<k)}if(g===0)break;!(k&1)&&r.depth1>0?(f=(c(),Ar)[~~(v/3)*3+1],r.move[r.depth1-1]=X[f]*2-r.move[r.depth1-1],C=(Cr(),jr)[C][f],l=Lr[l][(w(),$)[a][f]],a=Z[l&15][a],l>>=4,p=kr[p][$[m][f]],m=Z[p&15][m],p>>=4,e=t(l,a,!0),n=t(p,m,!1)):r.preMoveLen>0&&(f=(c(),Ar)[~~(u/3)*3+1],r.preMoves[r.preMoveLen-1]=X[f]*2-r.preMoves[r.preMoveLen-1],C=(w(),le)[(Cr(),jr)[le[C]][f]],l=Lr[e>>4][$[e&15][f]],e=l&-16|Z[l&15][e&15],l=t(e>>4,e&15,!0),a=l&15,l>>=4,p=kr[n>>4][$[n&15][f]],n=p&-16|Z[p&15][n&15],p=t(n>>4,n&15,!1),m=p&15,p>>=4)}return r.depth1>0&&(r.move[r.depth1-1]=v),r.preMoveLen>0&&(r.preMoves[r.preMoveLen-1]=u),S===0?0:2}function u1(r){var e;for(r.conjMask=0,r.selfSym=mn(r.cc),r.conjMask|=Pe(J(pr(r.selfSym,16),{l:U,m:0,h:0}),{l:0,m:0,h:0})?18:0,r.conjMask|=Pe(J(pr(r.selfSym,32),{l:U,m:0,h:0}),{l:0,m:0,h:0})?36:0,r.conjMask|=Pe(J(pr(r.selfSym,48),{l:U,m:0,h:0}),{l:0,m:0,h:0})?56:0,r.selfSym=J(r.selfSym,{l:N,m:N,h:15}),r.maxPreMoves=r.conjMask>7?0:20,e=0;e<6;e++)xe(r.urfCubieCube[e],r.cc),ln(r.urfCoordCube[e],r.urfCubieCube[e],20),pn(r.cc),e%3===2&&ue(r.cc)}function wn(r,e,n,o,v){var u,f,l,a,p,m;if(e.prun===0&&o<5)return r.allowShorter||o===0?(r.depth1-=o,p=v1(r),r.depth1+=o,p):1;for(m=_n(ze(n)),u=0;u<18;u+=3)if(!(u===v||u===v-9)){for(l=0;l<3;l++)if(f=u+l,!(r.isRec&&f!==r.move[r.depth1-o]||m!==0&&m&1<<f)){if(a=Gn(r.nodeUD[o],e,f),a>o)break;if(a===o)continue;if(a=Xn(r.nodeUD[o],e,f),a>o)break;if(a===o)continue;if(r.move[r.depth1-o]=f,r.valid1=He(r.valid1,r.depth1-o),p=wn(r,r.nodeUD[o],n&mr((w(),we)[f]),o-1,u),p===0)return 0;if(p>=2)break}}return 1}function Mn(r,e,n,o,v){var u,f,l;if(r.preMoveLen=r.maxPreMoves-e,(r.isRec?r.depth1===r.length1-r.preMoveLen:r.preMoveLen===0||!(225207>>n&1))&&(r.depth1=r.length1-r.preMoveLen,r.phase1Cubie[0]=o,r.allowShorter=r.depth1===je&&r.preMoveLen!==0,ln(r.nodeUD[r.depth1+1],o,r.depth1)&&wn(r,r.nodeUD[r.depth1+1],v,r.depth1,-1)===0))return 0;if(e===0||r.preMoveLen+je>=r.length1)return 1;for(l=_n(ze(v)),(e===1||r.preMoveLen+1+je>=r.length1)&&(l|=225207),n=~~(n/3)*3,u=0;u<18;u++){if(u===n||u===n-9||u===n+9){u+=2;continue}if(!(r.isRec&&u!==r.preMoves[r.maxPreMoves-e]||l&1<<u)&&(or((w(),j)[u],o,r.preMoveCubes[e]),O(j[u],o,r.preMoveCubes[e]),r.preMoves[r.maxPreMoves-e]=u,f=Mn(r,e-1,u,r.preMoveCubes[e],v&mr(we[u])),f===0))return 0}return 1}function bn(r,e,n,o,v,u,f,l,a){var p,m,C,k,g,I,S,Mr,br,V,W;if(e===0&&o===0&&u===0)return f;for(br=(c(),Vr)[a],S=0;S<10;S++){if(br>>S&1){S+=66>>S&3;continue}if(Mr=(Cr(),jr)[u][S],m=Lr[o][(w(),$)[v][S]],C=Z[m&15][v],m>>=4,g=kr[e][$[n][S]],I=Z[g&15][n],g>>=4,k=t(g,I,!1),p=t(m,C,!0),V=H(Pr,(k>>4)*140+gr[Dr[p>>4]&255][T[k&15][p&15]]),V>f+1)return f-V+1;if(V>=f){S+=66>>S&3&f-V;continue}if(V=er(H(ge,m*24+Wr[Mr][C]),H(Pr,g*140+gr[Dr[m]&255][T[I][C]])),V>=f){S+=66>>S&3&f-V;continue}if(W=bn(r,g,I,m,C,Mr,f-1,l+1,S),W>=0)return r.move[l]=X[S],W;if(W<-2)break;W<-1&&(S+=66>>S&3)}return-1}function f1(r){for(r.length1=r.isRec?r.length1:0;r.length1<r.solLen;r.length1++)for(r.maxDep2=He(Sn,r.solLen-r.length1-1),r.urfIdx=r.isRec?r.urfIdx:0;r.urfIdx<6;r.urfIdx++)if(!(r.conjMask&1<<r.urfIdx)&&Mn(r,r.maxPreMoves,-30,r.urfCubieCube[r.urfIdx],mr(J(r.selfSym,{l:U,m:0,h:0})))===0)return r.solution?rn(r.solution):"Error 8";return r.solution?rn(r.solution):"Error 7"}function l1(r,e){var n;return n=a1(r,e),n!==0?`Error ${n<0?-n:n}`:(r.solLen=22,r.probe={l:0,m:0,h:0},r.probeMax={l:3531008,m:23,h:0},r.probeMin={l:0,m:0,h:0},r.verbose=0,r.solution=null,r.isRec=!1,an(!1),u1(r),f1(r))}function a1(r,e){var n,o,v,u;for(o=0,v=d(y,L,0,54,7,1),n=Hn(b(M(F,1),D,0,7,[e.charCodeAt(4),e.charCodeAt(13),e.charCodeAt(22),e.charCodeAt(31),e.charCodeAt(40),e.charCodeAt(49)])),u=0;u<54;u++){if(v[u]=zn(n,xn(e.charCodeAt(u)))<<24>>24,v[u]===-1)return-1;o+=1<<(v[u]<<2)}return o!==10066329?-1:(p1(v,r.cc),$n(r.cc))}function yn(){var r,e,n;for(this.move=d(E,A,0,31,7,1),this.nodeUD=d(sr,P,31,21,0,1),this.nodeRL=d(sr,P,31,21,0,1),this.nodeFB=d(sr,P,31,21,0,1),this.cc=new i,this.urfCubieCube=d(Gr,P,7,6,0,1),this.urfCoordCube=d(sr,P,31,6,0,1),this.phase1Cubie=d(Gr,P,7,21,0,1),this.preMoveCubes=d(Gr,P,7,21,0,1),this.preMoves=d(E,A,0,20,7,1),e=0;e<21;e++)this.nodeUD[e]=new xr,this.nodeRL[e]=new xr,this.nodeFB[e]=new xr,this.phase1Cubie[e]=new i;for(n=0;n<6;n++)this.urfCubieCube[n]=new i,this.urfCoordCube[n]=new xr;for(r=0;r<20;r++)this.preMoveCubes[r+1]=new i}Jr(72,1,{},yn);_.allowShorter=!1;_.conjMask=0;_.depth1=0;_.isRec=!1;_.length1=0;_.maxDep2=0;_.maxPreMoves=0;_.preMoveLen=0;_.probe={l:0,m:0,h:0};_.probeMax={l:0,m:0,h:0};_.probeMin={l:0,m:0,h:0};_.selfSym={l:0,m:0,h:0};_.solLen=0;_.urfIdx=0;_.valid1=0;_.verbose=0;var Sn=12,je=7;let se=!1;function c(){if(!se){se=!0;var r,e,n,o,v,u;for(ar=b(M(y,2),P,10,0,[b(M(y,1),L,0,7,[8,9,20]),b(M(y,1),L,0,7,[6,18,38]),b(M(y,1),L,0,7,[0,36,47]),b(M(y,1),L,0,7,[2,45,11]),b(M(y,1),L,0,7,[29,26,15]),b(M(y,1),L,0,7,[27,44,24]),b(M(y,1),L,0,7,[33,53,42]),b(M(y,1),L,0,7,[35,17,51])]),Y=b(M(y,2),P,10,0,[b(M(y,1),L,0,7,[5,10]),b(M(y,1),L,0,7,[7,19]),b(M(y,1),L,0,7,[3,37]),b(M(y,1),L,0,7,[1,46]),b(M(y,1),L,0,7,[32,16]),b(M(y,1),L,0,7,[28,25]),b(M(y,1),L,0,7,[30,43]),b(M(y,1),L,0,7,[34,52]),b(M(y,1),L,0,7,[23,12]),b(M(y,1),L,0,7,[21,41]),b(M(y,1),L,0,7,[50,39]),b(M(y,1),L,0,7,[48,14])]),q=R(E,[P,A],[17,0],7,[13,13],2),ce=b(M(Vn,1),P,2,4,["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"]),X=b(M(E,1),A,0,7,[0,1,2,4,7,9,10,11,13,16,3,5,6,8,12,14,15,17]),Ar=d(E,A,0,18,7,1),Vr=d(E,A,0,11,7,1),e=0;e<18;e++)Ar[X[e]]=e;for(n=0;n<10;n++)for(o=~~(X[n]/3),Vr[n]=0,v=0;v<10;v++)u=~~(X[v]/3),Vr[n]|=(o===u||o%3===u%3&&o>=u?1:0)<<v;for(Vr[10]=0,r=0;r<13;r++)for(q[r][0]=q[r][r]=1,v=1;v<r;v++)q[r][v]=q[r-1][v-1]+q[r-1][v]}}function Fr(r,e,n){c();var o,v,u,f,l;for(o=r.length-1,u=0,l=4,v=o;v>=0;v--)f=Ln(r[v],n),(f&12)===e&&(u+=q[v][l--]);return u}function Ue(r,e){c();var n,o;for(o=0,n=e-2;n>=0;n--)o^=r%(e-n),r=~~(r/(e-n));return o&1}function x(r,e,n){c();var o,v,u,f;for(v=0,f={l:1323536,m:2777561,h:1043915},o=0;o<e-1;o++)u=Ln(r[o],n)<<2,v=(e-o)*v+mr(J(pr(f,u),{l:15,m:0,h:0})),f=fn(f,ee({l:1118480,m:279620,h:69905},u));return v}function Ln(r,e){return e?r>>1:r&7}function Pn(r,e,n,o){c();var v,u,f,l;for(v=r.length-1,l=4,u=v,f=v;f>=0;f--)e>=q[f][l]?(e-=q[f][l--],r[f]=pe(r[f],l|n,o)):((u&12)===n&&(u-=4),r[f]=pe(r[f],u--,o))}function wr(r,e,n,o){c();var v,u,f,l,a,p;for(p={l:1323536,m:2777561,h:1043915},v={l:0,m:0,h:0},l=2;l<=n;l++)v=ie(ee(v,4),ze(e%l)),e=~~(e/l);for(u=0;u<n-1;u++)a=(mr(v)&15)<<2,v=pr(v,4),r[u]=pe(r[u],mr(J(pr(p,a),{l:15,m:0,h:0})),o),f=fn(ee({l:1,m:0,h:0},a),{l:1,m:0,h:0}),p=ie(J(p,f),J(pr(p,4),{l:~f.l&N,m:~f.m&N,h:~f.h&rr}));r[n-1]=pe(r[n-1],mr(J(p,{l:15,m:0,h:0})),o)}function pe(r,e,n){return(n?e<<1|r&1:e|r&-8)<<24>>24}function p1(r,e){c();var n,o,v,u,f,l,a,p;for(u=0;u<8;u++)e.ca[u]=0;for(f=0;f<12;f++)e.ea[f]=0;for(l=0;l<8;l++){for(p=0;p<3&&!(r[ar[l][p]]===0||r[ar[l][p]]===3);p++);for(n=r[ar[l][(p+1)%3]],o=r[ar[l][(p+2)%3]],a=0;a<8;a++)if(n===~~(ar[a][1]/9)&&o===~~(ar[a][2]/9)){e.ca[l]=re(p%3<<3|a);break}}for(v=0;v<12;v++)for(a=0;a<12;a++){if(r[Y[v][0]]===~~(Y[a][0]/9)&&r[Y[v][1]]===~~(Y[a][1]/9)){e.ea[v]=re(a<<1);break}if(r[Y[v][0]]===~~(Y[a][1]/9)&&r[Y[v][1]]===~~(Y[a][0]/9)){e.ea[v]=re(a<<1|1);break}}}var q,Vr,ar,Y,ce,Ar,X;function $e(r,e){var n,o,v;if(r.length_0===0){r.moves[r.length_0++]=e;return}if(n=~~(e/3),o=~~(r.moves[r.length_0-1]/3),n===o){v=(e%3+r.moves[r.length_0-1]%3+1)%4,v===3?--r.length_0:r.moves[r.length_0-1]=n*3+v;return}if(r.length_0>1&&n%3===o%3&&n===~~(r.moves[r.length_0-2]/3)){v=(e%3+r.moves[r.length_0-2]%3+1)%4,v===3?(r.moves[r.length_0-2]=r.moves[r.length_0-1],--r.length_0):r.moves[r.length_0-2]=n*3+v;return}r.moves[r.length_0++]=e}function m1(r,e,n,o){r.verbose=e,r.urfIdx=n,r.depth1=o}function rn(r){var e,n,o;if(n=new On,o=r.verbose&2?(r.urfIdx+3)%6:r.urfIdx,o<3)for(e=0;e<r.length_0;e++)r.verbose&1&&e===r.depth1&&(n.string+=".  "),Ke(Ze(n,(c(),ce)[(w(),ae)[o][r.moves[e]]]));else for(e=r.length_0-1;e>=0;e--)Ke(Ze(n,(c(),ce)[(w(),ae)[o][r.moves[e]]])),r.verbose&1&&e===r.depth1&&(n.string+=".  ");return n.string}function kn(){this.moves=d(E,A,0,31,7,1)}Jr(150,1,{},kn);_.depth1=0;_.length_0=0;_.urfIdx=0;_.verbose=0;var E=Ce("int","I");ur("com.google.gwt.lang","CollapsedPropertyHolder",252);ur("com.google.gwt.lang","JavaClassHierarchySetupUtil",254);const C1=ur("com.google.gwt.lang","LongLibBase/LongEmul",null);ur("com.google.gwt.lang","ModuleUtils",257);var y=Ce("byte","B"),g1=Ce("long","J"),F=Ce("char","C");ur("com.google.gwt.user.client.rpc","XsrfToken",null),En("java.util","Map/Entry");const _1=function(){an(!1)},d1=function(r){return l1(new yn,r)};export{_1 as initialize,d1 as solvePattern};
