import{A as Cn,a as Sn,r as Le}from"./index-C3JNUt0X.js";import"./search-worker-entry-CVNgimpE.js";const y=[],Ke=[1];for(let e=0;e<32;++e){y[e]=[];for(let r=0;r<32;++r)y[e][r]=0}for(let e=0;e<32;++e){y[e][0]=y[e][e]=1,Ke[e+1]=Ke[e]*(e+1);for(let r=1;r<e;++r)y[e][r]=y[e-1][r-1]+y[e-1][r]}function w(e,...r){const n=r.length,l=e[r[n-1]];for(let o=n;o>0;o--)e[r[o]]=e[r[o-1]];return e[r[0]]=l,w}function xn(e,r,n,l){n=(n||8)-1;let o=1985229328,p=0;l??=0,l<0&&(r<<=1);for(let u=0;u<n;++u){const g=Ke[n-u];let d=~~(r/g);p^=d,r%=g,d<<=2,e[u]=o>>d&7;const v=(1<<d)-1;o=(o&v)+(o>>4&~v)}return l<0&&p&1?(e[n]=e[n-1],e[n-1]=o&7):e[n]=o&7,e}function _(e,r){const n=new Array(e);if(r!==void 0)for(let l=0;l<e;l++)n[l]=new Array(r);return n}let b;const ce={},An={},R1=0,$e=30,D1=21,zn=22,Ln=23,O1=24,Fn=25,jn=34,Bn=26,ie=40;function Mn(e){return new ce[e]}function F(e,r,n,...l){let o=ce[e];o&&!o.___clazz$?b=o.prototype:(!o&&(o=ce[e]=function(){}),b=o.prototype=r<0?{}:Mn(r),b.castableTypeMap$=n);for(const p of l)p.prototype=b;o.___clazz$&&(b.___clazz$=o.___clazz$,o.___clazz$=null)}function W(e){const r={};for(let n=0,l=e.length;n<l;++n)r[e[n]]=1;return r}F(1,-1,An);b.value=null;function U1(){}function En(e,r){const n=P1(0,r);return N1(e.___clazz$,e.castableTypeMap$,e.queryId$,n),n}function P1(e,r){return new Array(r)}function se(e,r,n,l,o){const p=P1(o,l);return N1(e,r,n,p),p}function N1(e,r,n,l){return V1(),Qn(l,Ye,Ze),l.___clazz$=e,l.castableTypeMap$=r,l.queryId$=n,l}function Fe(e,r,n){return e[r]=n}F(73,1,{},U1);b.queryId$=0;let v1=!1;function V1(){v1||(v1=!0,Ye=[],Ze=[],Tn(new U1,Ye,Ze))}function Tn(e,r,n){let l=0,o;for(const p in e)(o=e[p])&&(r[l]=p,n[l]=o,++l)}function Qn(e,r,n){V1();for(let l=0,o=r.length;l<o;++l)e[r[l]]=n[l]}let Ye,Ze;function Rn(e,r){return e.castableTypeMap$&&!!e.castableTypeMap$[r]}function Dn(e,r){return e!==null&&Rn(e,r)}let k1=!1;function On(){if(k1)return!1;k1=!0,Ne=_(15582,36),Ve=_(15582),D=_(15582),i=_(48,48),Q=_(48,36),$=_(48),r1=_(48)}function e1(e){e.ct=_(24)}function w1(e,r){let n,l;if(Dn(r,D1)){for(n=r,l=0;l<24;++l)if(e.ct[l]!==n.ct[l])return!1;return!0}return!1}function je(e){let r,n,l;for(n=0,l=8,r=23;r>=0;--r)e.ct[r]===1&&(n+=y[r][l--]);return n}function ye(e){let r,n;if(re!==null)return re[je(e)];for(n=0;n<48;++n){if(r=Hn(je(e)),r!==-1)return r*64+n;k(e,0),n%2===1&&k(e,1),n%8===7&&k(e,2),n%16===15&&k(e,3)}}function T(e,r){const n=r%3;switch(r=~~(r/3),r){case 0:{f(e.ct,0,1,2,3,n);break}case 1:{f(e.ct,16,17,18,19,n);break}case 2:{f(e.ct,8,9,10,11,n);break}case 3:{f(e.ct,4,5,6,7,n);break}case 4:{f(e.ct,20,21,22,23,n);break}case 5:{f(e.ct,12,13,14,15,n);break}case 6:{f(e.ct,0,1,2,3,n),f(e.ct,8,20,12,16,n),f(e.ct,9,21,13,17,n);break}case 7:{f(e.ct,16,17,18,19,n),f(e.ct,1,15,5,9,n),f(e.ct,2,12,6,10,n);break}case 8:{f(e.ct,8,9,10,11,n),f(e.ct,2,19,4,21,n),f(e.ct,3,16,5,22,n);break}case 9:{f(e.ct,4,5,6,7,n),f(e.ct,10,18,14,22,n),f(e.ct,11,19,15,23,n);break}case 10:{f(e.ct,20,21,22,23,n),f(e.ct,0,8,4,14,n),f(e.ct,3,11,7,13,n);break}case 11:f(e.ct,12,13,14,15,n),f(e.ct,1,20,7,18,n),f(e.ct,0,23,6,17,n)}}function k(e,r){switch(r){case 0:{T(e,19),T(e,28);break}case 1:{T(e,21),T(e,32);break}case 2:{f(e.ct,0,3,1,2,1),f(e.ct,8,11,9,10,1),f(e.ct,4,7,5,6,1),f(e.ct,12,15,13,14,1),f(e.ct,16,19,21,22,1),f(e.ct,17,18,20,23,1);break}case 3:T(e,18),T(e,29),T(e,24),T(e,35)}}function y1(e,r){let n;for(n=0;n<r;++n)k(e,0),n%2===1&&k(e,1),n%8===7&&k(e,2),n%16===15&&k(e,3)}function n1(e,r){let n,l;for(l=8,n=23;n>=0;--n)e.ct[n]=0,r>=y[n][l]&&(r-=y[n][l--],e.ct[n]=1)}function Ce(e,r){let n;for(n=0;n<24;++n)e.ct[n]=r.ct[n]}function be(){let e;for(e1(this),e=0;e<8;++e)this.ct[e]=1;for(e=8;e<24;++e)this.ct[e]=0}function Se(e,r){let n;for(e1(this),n=0;n<24;++n)this.ct[n]=~~(e.ct[n]/2)===r?1:0}function ge(e){let r;for(e1(this),r=0;r<24;++r)this.ct[r]=e[r]}function Un(){let e,r;const n=new be,l=new be;for(e=0;e<15582;++e)for(n1(l,Ve[e]),r=0;r<36;++r)Ce(n,l),T(n,r),Ne[e][r]=ye(n)}function Pn(){let e,r,n,l,o,p,u,g;for(Ge(D),D[0]=0,r=0,n=1;n!==15582;)for(p=r>4,g=p?-1:r,e=p?r:-1,++r,l=0;l<15582;++l)if(D[l]===g){for(u=0;u<27;++u)if(o=~~Ne[l][u]>>>6,D[o]===e)if(++n,p){D[l]=r;break}else D[o]=r}}function Nn(e){let r,n,l;const o=new ge(e.ct);for(l=0;l<48;++l){for(r=!0,n=0;n<24;++n)if(o.ct[n]!==~~(n/4)){r=!1;break}if(r)return l;k(o,0),l%2===1&&k(o,1),l%8===7&&k(o,2),l%16===15&&k(o,3)}return-1}function Vn(){let e,r,n;const l=new be;for(e=0;e<24;++e)l.ct[e]=e;const o=new ge(l.ct),p=new ge(l.ct),u=new ge(l.ct);for(e=0;e<48;++e){for(r=0;r<48;++r){for(n=0;n<48;++n)w1(l,o)&&(i[e][r]=n,n===0&&($[e]=r)),k(o,0),n%2===1&&k(o,1),n%8===7&&k(o,2),n%16===15&&k(o,3);k(l,0),r%2===1&&k(l,1),r%8===7&&k(l,2),r%16===15&&k(l,3)}k(l,0),e%2===1&&k(l,1),e%8===7&&k(l,2),e%16===15&&k(l,3)}for(e=0;e<48;++e)for(Ce(l,p),y1(l,$[e]),r=0;r<36;++r)for(Ce(o,l),T(o,r),y1(o,e),n=0;n<36;++n)if(Ce(u,p),T(u,n),w1(u,o)){Q[e][r]=n;break}for(n1(l,0),e=0;e<48;++e)r1[$[e]]=je(l),k(l,0),e%2===1&&k(l,1),e%8===7&&k(l,2),e%16===15&&k(l,3)}function qn(){let e,r,n,l;const o=new be,p=_(22984);for(r=0;r<22984;r++)p[r]=0;for(e=0,r=0;r<735471;++r)if(!(p[~~r>>>5]&1<<(r&31))){for(n1(o,r),l=0;l<48;++l)n=je(o),p[~~n>>>5]|=1<<(n&31),re!==null&&(re[n]=e<<6|$[l]),k(o,0),l%2===1&&k(o,1),l%8===7&&k(o,2),l%16===15&&k(o,3);Ve[e++]=r}}function Hn(e){const r=jr(Ve,e);return r>=0?r:-1}F(153,1,W([D1]),be,Se,ge);let D,Ne,r1,re=null,Ve,$,Q,i,C1=!1;function Xn(){C1||(C1=!0,Te=_(70,28),Ee=_(6435,28),G1=_(70,16),H1=_(6435,16),z=_(450450),X1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0])}function Be(e){let r,n,l;for(n=0,l=8,r=14;r>=0;--r)e.ct[r]!==e.ct[15]&&(n+=y[r][l--]);return n}function Me(e){let r,n,l;for(n=0,l=4,r=6;r>=0;--r)e.rl[r]!==e.rl[7]&&(n+=y[r][l--]);return n*2+e.parity}function t(e,r){e.parity^=X1[r];const n=r%3;switch(r=~~(r/3),r){case 0:{f(e.ct,0,1,2,3,n);break}case 1:{f(e.rl,0,1,2,3,n);break}case 2:{f(e.ct,8,9,10,11,n);break}case 3:{f(e.ct,4,5,6,7,n);break}case 4:{f(e.rl,4,5,6,7,n);break}case 5:{f(e.ct,12,13,14,15,n);break}case 6:{f(e.ct,0,1,2,3,n),f(e.rl,0,5,4,1,n),f(e.ct,8,9,12,13,n);break}case 7:{f(e.rl,0,1,2,3,n),f(e.ct,1,15,5,9,n),f(e.ct,2,12,6,10,n);break}case 8:{f(e.ct,8,9,10,11,n),f(e.rl,0,3,6,5,n),f(e.ct,3,2,5,4,n);break}case 9:{f(e.ct,4,5,6,7,n),f(e.rl,3,2,7,6,n),f(e.ct,11,10,15,14,n);break}case 10:{f(e.rl,4,5,6,7,n),f(e.ct,0,8,4,14,n),f(e.ct,3,11,7,13,n);break}case 11:f(e.ct,12,13,14,15,n),f(e.rl,1,4,7,2,n),f(e.ct,1,0,7,6,n)}}function Z(e,r){switch(r){case 0:{t(e,19),t(e,28);break}case 1:{t(e,21),t(e,32);break}case 2:f(e.ct,0,3,1,2,1),f(e.ct,8,11,9,10,1),f(e.ct,4,7,5,6,1),f(e.ct,12,15,13,14,1),f(e.rl,0,3,5,6,1),f(e.rl,1,2,4,7,1)}}function q1(e,r,n){let l;for(l=0;l<16;++l)e.ct[l]=~~(r.ct[l]/2);for(l=0;l<8;++l)e.rl[l]=r.ct[l+16];e.parity=n}function S1(e,r){let n,l;for(l=8,e.ct[15]=0,n=14;n>=0;--n)r>=y[n][l]?(r-=y[n][l--],e.ct[n]=1):e.ct[n]=0}function x1(e,r){let n,l;for(e.parity=r&1,r>>>=1,l=4,e.rl[7]=0,n=6;n>=0;--n)r>=y[n][l]?(r-=y[n][l--],e.rl[n]=1):e.rl[n]=0}function l1(){this.rl=_(8),this.ct=_(16)}function Gn(){let e,r,n,l,o,p,u,g,d,v;const c=new l1;for(o=0;o<70;++o)for(g=0;g<28;++g)x1(c,o),t(c,J[g]),Te[o][g]=Me(c);for(o=0;o<70;++o)for(x1(c,o),u=0;u<16;++u)G1[o][u]=Me(c),Z(c,0),u%2===1&&Z(c,1),u%8===7&&Z(c,2);for(o=0;o<6435;++o)for(S1(c,o),u=0;u<16;++u)H1[o][u]=Be(c)&65535,Z(c,0),u%2===1&&Z(c,1),u%8===7&&Z(c,2);for(o=0;o<6435;++o)for(g=0;g<28;++g)S1(c,o),t(c,J[g]),Ee[o][g]=Be(c)&65535;for(Ge(z),z[0]=z[18]=z[28]=z[46]=z[54]=z[56]=0,n=0,l=6;l!==450450;){const m=n>6,S=m?-1:n,L=m?n:-1;for(++n,o=0;o<450450;++o)if(z[o]===S){for(e=~~(o/70),d=o%70,g=0;g<23;++g)if(r=Ee[e][g],v=Te[d][g],p=r*70+v,z[p]===L)if(++l,m){z[o]=n;break}else z[p]=n}}}F(154,1,{},l1);b.parity=0;let Ee,z,H1,X1,Te,G1,A1=!1;function Wn(){A1||(A1=!0,_e=_(29400,20),I1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],H=_(29400),u1=[0,9,14,23,27,28,41,42,46,55,60,69],p1=_(70))}function o1(e){let r,n,l,o;for(n=0,o=4,r=6;r>=0;--r)e.ud[r]!==e.ud[7]&&(n+=y[r][o--]);for(n*=35,o=4,r=6;r>=0;--r)e.fb[r]!==e.fb[7]&&(n+=y[r][o--]);n*=12;const p=e.fb[7]^e.ud[7];for(l=0,o=4,r=7;r>=0;--r)e.rl[r]!==p&&(l+=y[r][o--]);return e.parity+2*(n+p1[l])}function In(e,r){switch(e.parity^=I1[r],r){case 0:case 1:case 2:{f(e.ud,0,1,2,3,r%3);break}case 3:{f(e.rl,0,1,2,3,1);break}case 4:case 5:case 6:{f(e.fb,0,1,2,3,(r-1)%3);break}case 7:case 8:case 9:{f(e.ud,4,5,6,7,(r-1)%3);break}case 10:{f(e.rl,4,5,6,7,1);break}case 11:case 12:case 13:{f(e.fb,4,5,6,7,(r+1)%3);break}case 14:{f(e.ud,0,1,2,3,1),f(e.rl,0,5,4,1,1),f(e.fb,0,5,4,1,1);break}case 15:{f(e.rl,0,1,2,3,1),f(e.fb,1,4,7,2,1),f(e.ud,1,6,5,2,1);break}case 16:{f(e.fb,0,1,2,3,1),f(e.ud,3,2,5,4,1),f(e.rl,0,3,6,5,1);break}case 17:{f(e.ud,4,5,6,7,1),f(e.rl,3,2,7,6,1),f(e.fb,3,2,7,6,1);break}case 18:{f(e.rl,4,5,6,7,1),f(e.fb,0,3,6,5,1),f(e.ud,0,3,4,7,1);break}case 19:f(e.fb,4,5,6,7,1),f(e.ud,0,7,6,1,1),f(e.rl,1,4,7,2,1)}}function W1(e,r,n){let l;const o=(r.ct[0]>r.ct[8]?1:0)^(r.ct[8]>r.ct[16]?1:0)^(r.ct[0]>r.ct[16]?1:0)?1:0;for(l=0;l<8;++l)e.ud[l]=r.ct[l]&1^1,e.fb[l]=r.ct[l+8]&1^1,e.rl[l]=r.ct[l+16]&1^1^o;e.parity=o^n}function Jn(e,r){let n,l,o,p;for(e.parity=r&1,r>>>=1,o=u1[r%12],r=~~(r/12),p=4,n=7;n>=0;--n)e.rl[n]=0,o>=y[n][p]&&(o-=y[n][p--],e.rl[n]=1);for(l=r%35,r=~~(r/35),p=4,e.fb[7]=0,n=6;n>=0;--n)l>=y[n][p]?(l-=y[n][p--],e.fb[n]=1):e.fb[n]=0;for(p=4,e.ud[7]=0,n=6;n>=0;--n)r>=y[n][p]?(r-=y[n][p--],e.ud[n]=1):e.ud[n]=0}function f1(){this.ud=_(8),this.rl=_(8),this.fb=_(8)}function Kn(){let e,r,n,l;for(n=0;n<12;++n)p1[u1[n]]=n;const o=new f1;for(n=0;n<29400;++n)for(l=0;l<20;++l)Jn(o,n),In(o,l),_e[n][l]=o1(o)&65535;for(Ge(H),H[0]=0,e=0,r=1;r!==29400;){for(n=0;n<29400;++n)if(H[n]===e)for(l=0;l<17;++l)H[_e[n][l]]===-1&&(H[_e[n][l]]=e+1,++r);++e}}F(155,1,{},f1);b.parity=0;let _e,I1,H,u1,p1;function Yn(e,r){let n;for(n=0;n<24;++n)e.ct[n]=r.ct[n]}function Zn(e,r){const n=r%3;switch(r=~~(r/3),r){case 0:{f(e.ct,0,1,2,3,n);break}case 1:{f(e.ct,16,17,18,19,n);break}case 2:{f(e.ct,8,9,10,11,n);break}case 3:{f(e.ct,4,5,6,7,n);break}case 4:{f(e.ct,20,21,22,23,n);break}case 5:{f(e.ct,12,13,14,15,n);break}case 6:{f(e.ct,0,1,2,3,n),f(e.ct,8,20,12,16,n),f(e.ct,9,21,13,17,n);break}case 7:{f(e.ct,16,17,18,19,n),f(e.ct,1,15,5,9,n),f(e.ct,2,12,6,10,n);break}case 8:{f(e.ct,8,9,10,11,n),f(e.ct,2,19,4,21,n),f(e.ct,3,16,5,22,n);break}case 9:{f(e.ct,4,5,6,7,n),f(e.ct,10,18,14,22,n),f(e.ct,11,19,15,23,n);break}case 10:{f(e.ct,20,21,22,23,n),f(e.ct,0,8,4,14,n),f(e.ct,3,11,7,13,n);break}case 11:f(e.ct,12,13,14,15,n),f(e.ct,1,20,7,18,n),f(e.ct,0,23,6,17,n)}}function g1(){let e;for(this.ct=_(24),e=0;e<24;++e)this.ct[e]=~~(e/4)}function J1(){let e,r,n;for(g1.call(this),e=0;e<23;++e)n=e+Le(24-e),this.ct[n]!==this.ct[e]&&(r=this.ct[e],this.ct[e]=this.ct[n],this.ct[n]=r)}F(156,1,{},g1,J1);let z1=!1;function an(){z1||(z1=!0,M=_(18),$n())}function K1(e){e.cp=[0,1,2,3,4,5,6,7],e.co=[0,0,0,0,0,0,0,0]}function Y1(e,r){let n;for(n=0;n<8;++n)e.cp[n]=r.cp[n],e.co[n]=r.co[n]}function hn(e,r){!e.temps&&(e.temps=new qe),Z1(e,M[r],e.temps),Y1(e,e.temps)}function tn(e,r){let n,l;for(l=0,n=6;n>=0;--n)l+=e.co[n]=r%3,r=~~(r/3);e.co[7]=(15-l)%3}function Z1(e,r,n){let l,o,p,u;for(l=0;l<8;++l)n.cp[l]=e.cp[r.cp[l]],p=e.co[r.cp[l]],u=r.co[l],o=p,o=o+(p<3?u:6-u),o=o%3,(p>=3?1:0)^(u>=3?1:0)&&(o=o+3),n.co[l]=o}function qe(){K1(this)}function q(e,r){K1(this),xn(this.cp,e),tn(this,r)}function a1(){q.call(this,Le(40320),Le(2187))}function $n(){let e,r;for(M[0]=new q(15120,0),M[3]=new q(21021,1494),M[6]=new q(8064,1236),M[9]=new q(9,0),M[12]=new q(1230,412),M[15]=new q(224,137),e=0;e<18;e+=3)for(r=0;r<2;++r)M[e+r+1]=new qe,Z1(M[e+r],M[e],M[e+r+1])}F(157,1,W([zn]),qe,q,a1);b.temps=null;let M,L1=!1;function sn(){L1||(L1=!0,R=_(1937880),He=_(1538),De=_(1538),ue=_(11880),s1=[0,1,6,3,4,5,2,7],d1=_(160,12),c1=_(160,12),_1=[1,1,1,3,12,60,360,2520,20160,181440,1814400,19958400,239500800],ae=[0,2,4,6,1,3,7,5,8,9,10,11])}function a(e,r,n,l,o){const p=e.edgeo[o];e.edgeo[o]=e.edge[l],e.edge[l]=e.edgeo[n],e.edgeo[n]=e.edge[r],e.edge[r]=p}function le(e,r){let n,l,o,p,u;for(e.isStd||$1(e),l=0,u=1985229328,p=47768,n=0;n<r;++n)o=e.edge[n]<<2,l*=12-n,o>=32?(l+=p>>o-32&15,p-=4368<<o-32):(l+=u>>o&15,p-=4369,u-=286331152<<o);return l}function h1(e){let r;const n=le(e,4);r=ue[n];const l=r&7;r>>=3,Re(e,l);const o=le(e,10)%20160;return r*20160+o}function Qe(e,r){switch(e.isStd=!1,r){case 0:{w(e.edge,0,4,1,5),w(e.edgeo,0,4,1,5);break}case 1:{C(e.edge,0,4,1,5),C(e.edgeo,0,4,1,5);break}case 2:{w(e.edge,0,5,1,4),w(e.edgeo,0,5,1,4);break}case 3:{C(e.edge,5,10,6,11),C(e.edgeo,5,10,6,11);break}case 4:{w(e.edge,0,11,3,8),w(e.edgeo,0,11,3,8);break}case 5:{C(e.edge,0,11,3,8),C(e.edgeo,0,11,3,8);break}case 6:{w(e.edge,0,8,3,11),w(e.edgeo,0,8,3,11);break}case 7:{w(e.edge,2,7,3,6),w(e.edgeo,2,7,3,6);break}case 8:{C(e.edge,2,7,3,6),C(e.edgeo,2,7,3,6);break}case 9:{w(e.edge,2,6,3,7),w(e.edgeo,2,6,3,7);break}case 10:{C(e.edge,4,8,7,9),C(e.edgeo,4,8,7,9);break}case 11:{w(e.edge,1,9,2,10),w(e.edgeo,1,9,2,10);break}case 12:{C(e.edge,1,9,2,10),C(e.edgeo,1,9,2,10);break}case 13:{w(e.edge,1,10,2,9),w(e.edgeo,1,10,2,9);break}case 14:{C(e.edge,0,4,1,5),C(e.edgeo,0,4,1,5),w(e.edge,9,11),w(e.edgeo,8,10);break}case 15:{C(e.edge,5,10,6,11),C(e.edgeo,5,10,6,11),w(e.edge,1,3),w(e.edgeo,0,2);break}case 16:{C(e.edge,0,11,3,8),C(e.edgeo,0,11,3,8),w(e.edge,5,7),w(e.edgeo,4,6);break}case 17:{C(e.edge,2,7,3,6),C(e.edgeo,2,7,3,6),w(e.edge,8,10),w(e.edgeo,9,11);break}case 18:{C(e.edge,4,8,7,9),C(e.edgeo,4,8,7,9),w(e.edge,0,2),w(e.edgeo,1,3);break}case 19:C(e.edge,1,9,2,10),C(e.edgeo,1,9,2,10),w(e.edge,4,6),w(e.edgeo,5,7)}}function s(e,r){switch(e.isStd=!1,r){case 0:{Qe(e,14),Qe(e,17);break}case 1:{a(e,11,5,10,6),a(e,5,10,6,11),a(e,1,2,3,0),a(e,4,9,7,8),a(e,8,4,9,7),a(e,0,1,2,3);break}case 2:B(e,4,5),B(e,5,4),B(e,11,8),B(e,8,11),B(e,7,6),B(e,6,7),B(e,9,10),B(e,10,9),B(e,1,1),B(e,0,0),B(e,3,3),B(e,2,2)}}function Re(e,r){for(;r>=2;)r-=2,s(e,1),s(e,2);r!==0&&s(e,0)}function ke(e,r){let n,l,o,p,u,g;for(u=1985229328,g=47768,o=0,n=0;n<11;++n)if(l=_1[11-n],p=~~(r/l),r=r%l,o^=p,p<<=2,p>=32){p=p-32,e.edge[n]=g>>p&15;const d=(1<<p)-1;g=(g&d)+(g>>4&~d)}else{e.edge[n]=u>>p&15;const d=(1<<p)-1;u=(u&d)+(u>>>4&~d)+(g<<28),g=g>>4}for(o&1?(e.edge[11]=e.edge[10],e.edge[10]=u):e.edge[11]=u,n=0;n<12;++n)e.edgeo[n]=n;e.isStd=!0}function F1(e,r){let n;for(n=0;n<12;++n)e.edge[n]=r.edge[n],e.edgeo[n]=r.edgeo[n];e.isStd=r.isStd}function t1(e,r){let n,l,o,p;for(e.temp===null&&(e.temp=_(12)),n=0;n<12;++n)e.temp[n]=n,e.edge[n]=r.ep[ae[n]+12]%12;for(l=1,n=0;n<12;++n)for(;e.edge[n]!==n;)p=e.edge[n],e.edge[n]=e.edge[p],e.edge[p]=p,o=e.temp[n],e.temp[n]=e.temp[p],e.temp[p]=o,l^=1;for(n=0;n<12;++n)e.edge[n]=e.temp[r.ep[ae[n]]%12];return l}function $1(e){let r;for(e.temp===null&&(e.temp=_(12)),r=0;r<12;++r)e.temp[e.edgeo[r]]=r;for(r=0;r<12;++r)e.edge[r]=e.temp[e.edge[r]],e.edgeo[r]=r;e.isStd=!0}function C(e,r,n,l,o){let p;p=e[r],e[r]=e[l],e[l]=p,p=e[n],e[n]=e[o],e[o]=p}function B(e,r,n){const l=e.edge[r];e.edge[r]=e.edgeo[n],e.edgeo[n]=l}function U(){this.edge=_(12),this.edgeo=_(12)}function er(){let e,r,n,l,o,p,u,g,d,v,c,m,S,L,x,O,j,E,K,A,P,Y;const N=new U,V=new U,We=new U;for(Ge(R),g=0,we=1,Ie(R,0,0);we!==31006080&&(x=g>9,u=g%3,p=(g+1)%3,v=x?3:u,e=x?u:3,!(g>=9));){for(m=0;m<31006080;m+=16)if(Y=R[~~m>>4],!(!x&&Y===-1)){for(c=m,d=m+16;c<d;++c,Y>>=2)if((Y&3)===v){for(K=~~(c/20160),r=He[K],l=c%20160,ke(N,r*20160+l),j=0;j<17;++j)if(n=oe(N.edge,j<<3,4),A=ue[n],P=A&7,A>>=3,o=oe(N.edge,j<<3|P,10)%20160,S=A*20160+o,me(R,S)===e){if(Ie(R,x?c:S,p),++we,x)break;if(E=De[A],E!==1)for(F1(V,N),Qe(V,j),Re(V,P),O=1;(E=~~E>>1&65535)!==0;++O)(E&1)===1&&(F1(We,V),Re(We,O),L=A*20160+le(We,10)%20160,me(R,L)===e&&(Ie(R,L,p),++we))}}}++g}}function me(e,r){return e[r>>4]>>((r&15)<<1)&3}function oe(e,r,n){let l,o,p,u,g;const d=c1[r],v=d1[r];for(o=0,g=1985229328,u=47768,l=0;l<n;++l)p=d[e[v[l]]]<<2,o*=12-l,p>=32?(o+=u>>p-32&15,u-=4368<<p-32):(o+=g>>p&15,u-=4369,g-=286331152<<p);return o}function i1(e){let r,n,l,o,p,u,g,d,v,c,m;const S=new U;if(u=0,p=me(R,e),p===3)return 10;for(;e!==0;)for(p===0?p=2:--p,v=~~(e/20160),r=He[v],l=e%20160,ke(S,r*20160+l),d=0;d<17;++d)if(n=oe(S.edge,d<<3,4),c=ue[n],m=c&7,c>>=3,o=oe(S.edge,d<<3|m,10)%20160,g=c*20160+o,me(R,g)===p){++u,e=g;break}return u}function nr(e,r){const n=me(R,e);return n===3?10:(1227133513<<n>>r&3)+r-1}function rr(){let e,r,n;const l=new U;for(r=0;r<20;++r)for(n=0;n<8;++n){for(ke(l,0),Qe(l,r),Re(l,n),e=0;e<12;++e)d1[r<<3|n][e]=l.edge[e];for($1(l),e=0;e<12;++e)c1[r<<3|n][e]=l.temp[e]}}function lr(){let e,r,n,l;const o=new U,p=_(1485);for(r=0;r<1485;r++)p[r]=0;for(e=0,r=0;r<11880;++r)if(!(p[~~r>>>3]&1<<(r&7))){for(ke(o,r*_1[8]),l=0;l<8;++l)n=le(o,4),n===r&&(De[e]=(De[e]|1<<l)&65535),p[~~n>>3]=p[~~n>>3]|1<<(n&7),ue[n]=e<<3|s1[l],s(o,0),l%2===1&&(s(o,1),s(o,2));He[e++]=r}}function Ie(e,r,n){e[r>>4]^=(3^n)<<((r&15)<<1)}F(158,1,W([Ln]),U);b.isStd=!0;b.temp=null;let ae,we=0,R,_1,d1,c1,ue,He,s1,De;function or(e){let r,n,l;for(r=0,l=!1,n=0;n<12;++n)r|=1<<e.ep[n],l=l!==e.ep[n]>=12;return r&=~~r>>12,r===0&&!l}function fr(e,r){let n;for(n=0;n<24;++n)e.ep[n]=r.ep[n]}function ur(e,r){const n=r%3;switch(r=~~(r/3),r){case 0:{f(e.ep,0,1,2,3,n),f(e.ep,12,13,14,15,n);break}case 1:{f(e.ep,11,15,10,19,n),f(e.ep,23,3,22,7,n);break}case 2:{f(e.ep,0,11,6,8,n),f(e.ep,12,23,18,20,n);break}case 3:{f(e.ep,4,5,6,7,n),f(e.ep,16,17,18,19,n);break}case 4:{f(e.ep,1,20,5,21,n),f(e.ep,13,8,17,9,n);break}case 5:{f(e.ep,2,9,4,10,n),f(e.ep,14,21,16,22,n);break}case 6:{f(e.ep,0,1,2,3,n),f(e.ep,12,13,14,15,n),f(e.ep,9,22,11,20,n);break}case 7:{f(e.ep,11,15,10,19,n),f(e.ep,23,3,22,7,n),f(e.ep,2,16,6,12,n);break}case 8:{f(e.ep,0,11,6,8,n),f(e.ep,12,23,18,20,n),f(e.ep,3,19,5,13,n);break}case 9:{f(e.ep,4,5,6,7,n),f(e.ep,16,17,18,19,n),f(e.ep,8,23,10,21,n);break}case 10:{f(e.ep,1,20,5,21,n),f(e.ep,13,8,17,9,n),f(e.ep,14,0,18,4,n);break}case 11:f(e.ep,2,9,4,10,n),f(e.ep,14,21,16,22,n),f(e.ep,7,15,1,17,n)}}function b1(){let e;for(this.ep=_(24),e=0;e<24;++e)this.ep[e]=e}function en(){let e,r,n;for(b1.call(this),e=0;e<23;++e)n=e+Le(24-e),n!==e&&(r=this.ep[e],this.ep[e]=this.ep[n],this.ep[n]=r)}F(159,1,{},b1,en);let j1=!1;function pr(){j1||(j1=!0,he=[35,1,34,2,4,6,22,5,19])}function nn(e){e.moveBuffer=_(60)}function gr(e,r){return e.value-r.value}function fe(e,r){let n;for(fr(e.edge,r.edge),Yn(e.center,r.center),Y1(e.corner,r.corner),e.value=r.value,e.add1=r.add1,e.length1=r.length1,e.length2=r.length2,e.length3=r.length3,e.sym=r.sym,n=0;n<60;++n)e.moveBuffer[n]=r.moveBuffer[n];e.moveLength=r.moveLength,e.edgeAvail=r.edgeAvail,e.centerAvail=r.centerAvail,e.cornerAvail=r.cornerAvail}function X(e){for(;e.centerAvail<e.moveLength;)Zn(e.center,e.moveBuffer[e.centerAvail++]);return e.center}function rn(e){for(;e.cornerAvail<e.moveLength;)hn(e.corner,e.moveBuffer[e.cornerAvail++]%18);return e.corner}function ve(e){for(;e.edgeAvail<e.moveLength;)ur(e.edge,e.moveBuffer[e.edgeAvail++]);return e.edge}function _r(e){let r,n,l,o,p,u;const g=new Array(e.moveLength-(e.add1?2:0));for(n=0,r=0;r<e.length1;++r)g[n++]=e.moveBuffer[r];for(u=e.sym,r=e.length1+(e.add1?2:0);r<e.moveLength;++r)Q[u][e.moveBuffer[r]]>=27?(g[n++]=Q[u][e.moveBuffer[r]]-9,o=he[Q[u][e.moveBuffer[r]]-27],u=i[u][o]):g[n++]=Q[u][e.moveBuffer[r]];const d=i[$[u]][Nn(X(e))];for(p="",u=d,r=n-1;r>=0;--r)l=g[r],l=~~(l/3)*3+(2-l%3),Q[u][l]>=27?(p=`${p}${te[Q[u][l]-9]} `,o=he[Q[u][l]-27],u=i[u][o]):p=`${p}${te[Q[u][l]]} `;return p}function I(e,r){e.moveBuffer[e.moveLength++]=r}function Oe(){nn(this),this.edge=new b1,this.center=new g1,this.corner=new qe}function Xe(e){Oe.call(this),fe(this,e)}function ln(){nn(this),this.edge=new en,this.center=new J1,this.corner=new a1}F(160,1,W([O1,jn]),Oe,Xe,ln);b.compareTo$=function(r){return gr(this,r)};b.add1=!1;b.center=null;b.centerAvail=0;b.corner=null;b.cornerAvail=0;b.edge=null;b.edgeAvail=0;b.length1=0;b.length2=0;b.length3=0;b.moveLength=0;b.sym=0;b.value=0;let he;function dr(e,r){return r.value-e.value}function Ue(e,r){return dr(e,r)}function on(){}F(161,1,{},on);b.compare=function(r,n){return Ue(r,n)};let B1=!1;function cr(){if(B1)return;B1=!0;let e,r;for(te=["U  ","U2 ","U' ","R  ","R2 ","R' ","F  ","F2 ","F' ","D  ","D2 ","D' ","L  ","L2 ","L' ","B  ","B2 ","B' ","Uw ","Uw2","Uw'","Rw ","Rw2","Rw'","Fw ","Fw2","Fw'","Dw ","Dw2","Dw'","Lw ","Lw2","Lw'","Bw ","Bw2","Bw'"],J=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,22,23,25,28,30,31,32,34,36],pe=[0,1,2,4,6,7,8,9,10,11,13,15,16,17,19,22,25,28,31,34,36],M1=_(37),E1=_(37),h=_(37,36),xe=_(29,28),Ae=_(21,20),Je=_(36),de=_(28),ee=_(20),e=0;e<29;++e)M1[J[e]]=e;for(e=0;e<21;++e)E1[pe[e]]=e;for(e=0;e<36;++e){for(r=0;r<36;++r)h[e][r]=~~(e/3)===~~(r/3)||~~(e/3)%3===~~(r/3)%3&&e>r;h[36][e]=!1}for(e=0;e<29;++e)for(r=0;r<28;++r)xe[e][r]=h[J[e]][J[r]];for(e=0;e<21;++e)for(r=0;r<20;++r)Ae[e][r]=h[pe[e]][pe[r]];for(e=0;e<36;++e)for(Je[e]=36,r=e;r<36;++r)if(!h[e][r]){Je[e]=r-1;break}for(e=0;e<28;++e)for(de[e]=28,r=e;r<28;++r)if(!xe[e][r]){de[e]=r-1;break}for(e=0;e<20;++e)for(ee[e]=20,r=e;r<20;++r)if(!Ae[e][r]){ee[e]=r-1;break}}let h,xe,Ae,J,te,pe,Je,de,ee,M1,E1;function br(e){let r,n,l,o,p,u,g,d,v,c,m,S;e.solution="";const L=ye(new Se(X(e.c),0)),x=ye(new Se(X(e.c),1)),O=ye(new Se(X(e.c),2)),j=D[~~L>>6],E=D[~~x>>6],K=D[~~O>>6];for(e.p1SolsCnt=0,e.arr2idx=0,xr(e.p1sols.heap),e.length1=(j<E?j:E)<K?j<E?j:E:K;e.length1<100&&!(K<=e.length1&&ze(e,~~O>>>6,O&63,e.length1,-1,0)||j<=e.length1&&ze(e,~~L>>>6,L&63,e.length1,-1,0)||E<=e.length1&&ze(e,~~x>>>6,x&63,e.length1,-1,0));++e.length1);const A=Rr(e.p1sols,se(Or,W([Fn,$e,ie]),O1,0,0));A.sort(function(N,V){return N.value-V.value}),r=9;do{e:for(d=A[0].value;d<100;++d)for(u=0;u<A.length&&!(A[u].value>d);++u)if(!(d-A[u].length1>r)&&(fe(e.c1,A[u]),q1(e.ct2,X(e.c1),Pe(ve(e.c1).ep)),m=Be(e.ct2),S=Me(e.ct2),e.length1=A[u].length1,e.length2=d-A[u].length1,fn(e,m,S,e.length2,28,0)))break e;++r}while(d===100);e.arr2.sort(function(N,V){return N.value-V.value}),g=0,n=13;do{e:for(v=e.arr2[0].value;v<100;++v)for(u=0;u<Math.min(e.arr2idx,100)&&!(e.arr2[u].value>v);++u)if(!(v-e.arr2[u].length1-e.arr2[u].length2>n)&&(p=t1(e.e12,ve(e.arr2[u])),W1(e.ct3,X(e.arr2[u]),p^Pe(rn(e.arr2[u]).cp)),l=o1(e.ct3),o=le(e.e12,10),c=i1(h1(e.e12)),c<=v-e.arr2[u].length1-e.arr2[u].length2&&un(e,o,l,c,v-e.arr2[u].length1-e.arr2[u].length2,20,0))){g=u;break e}++n}while(v===100);const P=new Xe(e.arr2[g]);e.length1=P.length1,e.length2=P.length2;const Y=v-e.length1-e.length2;for(u=0;u<Y;++u)I(P,pe[e.move3[u]]);e.solution=_r(P)}function mr(e,r){let n,l;for(fe(e.c1,e.c),n=0;n<e.length1;++n)I(e.c1,e.move1[n]);switch(r1[r]){case 0:{I(e.c1,24),I(e.c1,35),e.move1[e.length1]=24,e.move1[e.length1+1]=35,e.add1=!0,r=19;break}case 12869:{I(e.c1,18),I(e.c1,29),e.move1[e.length1]=18,e.move1[e.length1+1]=29,e.add1=!0,r=34;break}case 735470:e.add1=!1,r=0}q1(e.ct2,X(e.c1),Pe(ve(e.c1).ep));const o=Be(e.ct2),p=Me(e.ct2),u=z[o*70+p];return e.c1.value=u+e.length1,e.c1.length1=e.length1,e.c1.add1=e.add1,e.c1.sym=r,++e.p1SolsCnt,e.p1sols.heap.size<500?l=new Xe(e.c1):(l=Tr(e.p1sols),l.value>e.c1.value&&fe(l,e.c1)),yr(e.p1sols,l),e.p1SolsCnt===1e4}function vr(e){let r;for(fe(e.c2,e.c1),r=0;r<e.length2;++r)I(e.c2,e.move2[r]);if(!or(ve(e.c2)))return!1;const n=t1(e.e12,ve(e.c2));W1(e.ct3,X(e.c2),n^Pe(rn(e.c2).cp));const l=o1(e.ct3);le(e.e12,10);const o=i1(h1(e.e12));return e.arr2[e.arr2idx]?fe(e.arr2[e.arr2idx],e.c2):e.arr2[e.arr2idx]=new Xe(e.c2),e.arr2[e.arr2idx].value=e.length1+e.length2+Math.max(o,H[l]),e.arr2[e.arr2idx].length2=e.length2,++e.arr2idx,e.arr2idx===e.arr2.length}function kr(e){return gn(),e.c=new ln,br(e),e.solution}function ze(e,r,n,l,o,p){let u,g,d,v,c,m;if(r===0)return l===0&&mr(e,n);for(u=0;u<27;u+=3)if(!(u===o||u===o-9||u===o-18))for(v=0;v<3;++v){if(d=u+v,g=Ne[r][Q[n][d]],c=D[~~g>>>6],c>=l){if(c>l)break;continue}if(m=i[n][g&63],g>>>=6,e.move1[p]=d,ze(e,g,m,l-1,u,p+1))return!0}return!1}function fn(e,r,n,l,o,p){let u,g,d,v;if(r===0&&z[n]===0)return l===0&&vr(e);for(g=0;g<23;++g){if(xe[o][g]){g=de[g];continue}if(u=Ee[r][g],v=Te[n][g],d=z[u*70+v],d>=l){d>l&&(g=de[g]);continue}if(e.move2[p]=J[g],fn(e,u,v,l-1,g,p+1))return!0}return!1}function un(e,r,n,l,o,p,u){let g,d,v,c,m,S,L,x,O;if(o===0)return r===0&&n===0;for(ke(e.tempe[u],r),m=0;m<17;++m){if(Ae[p][m]){m=ee[m];continue}if(v=_e[n][m],S=H[v],S>=o){S>o&&m<14&&(m=ee[m]);continue}if(c=oe(e.tempe[u].edge,m<<3,10),g=~~(c/20160),x=ue[g],O=x&7,x>>=3,d=oe(e.tempe[u].edge,m<<3|O,10)%20160,L=nr(x*20160+d,l),L>=o){L>o&&m<14&&(m=ee[m]);continue}if(un(e,c,v,L,o-1,m,u+1))return e.move3[u]=m,!0}return!1}function pn(){let e;for(this.p1sols=new vn(new on),this.move1=_(15),this.move2=_(20),this.move3=_(20),this.c1=new Oe,this.c2=new Oe,this.ct2=new l1,this.ct3=new f1,this.e12=new U,this.tempe=_(20),this.arr2=_(100),e=0;e<20;++e)this.tempe[e]=new U}function gn(){T1||(Vn(),re=_(735471),qn(),Un(),re=null,Pn(),Gn(),Kn(),rr(),lr(),er(),T1=!0)}F(163,1,W([Bn]),pn);b.add1=!1;b.arr2idx=0;b.c=null;b.length1=0;b.length2=0;b.p1SolsCnt=0;b.solution="";let T1=!1;function Pe(e){let r,n,l,o;for(o=0,r=0,l=e.length;r<l;++r)for(n=r;n<l;++n)e[r]>e[n]&&(o^=1);return o}function f(e,r,n,l,o,p){let u;switch(p){case 0:{u=e[o],e[o]=e[l],e[l]=e[n],e[n]=e[r],e[r]=u;return}case 1:{u=e[r],e[r]=e[l],e[l]=u,u=e[n],e[n]=e[o],e[o]=u;return}case 2:{u=e[r],e[r]=e[n],e[n]=e[l],e[l]=e[o],e[o]=u;return}}}function _n(){}function dn(e,r,n,l){const o=new _n;return o.typeName=e+r,bn(n!==0?-n:0)&&mn(n!==0?-n:0,o),o.modifiers=4,o.superclass=m1,o.componentType=l,o}function cn(e,r,n,l){const o=new _n;return o.typeName=e+r,bn(n)&&mn(n,o),o.superclass=l,o}function wr(e){const r=ce[e.seedId];return e=null,r}function bn(e){return typeof e=="number"&&e>0}function mn(e,r){let n;if(r.seedId=e,e===2)n=String.prototype;else if(e>0){let l=wr(r);if(l)n=l.prototype;else{l=ce[e]=function(){},l.___clazz$=r;return}}else return;n.___clazz$=r}b.val$outerIter=null;function yr(e,r){if(Er(e,r))return!0}function Cr(e){e.array=se(kn,W([$e,ie]),R1,0,0)}function Sr(e,r){return Fe(e.array,e.size++,r),!0}function xr(e){e.array=se(kn,W([$e,ie]),R1,0,0),e.size=0}function G(e,r){return e.array[r]}function Ar(e,r){const n=e.array[r];return Fr(e.array,r,1),--e.size,n}function ne(e,r,n){const l=e.array[r];return Fe(e.array,r,n),l}function zr(e,r){let n;for(r.length<e.size&&(r=En(r,e.size)),n=0;n<e.size;++n)Fe(r,n,e.array[n]);return r.length>e.size&&Fe(r,e.size,null),r}function Lr(){Cr(this),this.array.length=500}function Fr(e,r,n){e.splice(r,n)}b.size=0;function jr(e,r){let n,l,o,p;for(l=0,n=e.length-1;l<=n;)if(o=l+(~~(n-l)>>1),p=e[o],p<r)l=o+1;else if(p>r)n=o-1;else return o;return-l-1}function Ge(e){Br(e,e.length)}function Br(e,r){let n;for(n=0;n<r;++n)e[n]=-1}function Mr(e,r){let n,l,o,p;const u=e.heap.size,g=G(e.heap,r);for(;r*2+1<u&&(n=(l=2*r+1,o=l+1,p=l,o<u&&Ue(G(e.heap,o),G(e.heap,l))<0&&(p=o),p),!(Ue(g,G(e.heap,n))<0));)ne(e.heap,r,G(e.heap,n)),r=n;ne(e.heap,r,g)}function Er(e,r){let n,l;for(l=e.heap.size,Sr(e.heap,r);l>0;){if(n=l,l=~~((l-1)/2),Ue(G(e.heap,l),r)<=0)return ne(e.heap,n,r),!0;ne(e.heap,n,G(e.heap,l))}return ne(e.heap,l,r),!0}function Tr(e){if(e.heap.size===0)return null;const r=G(e.heap,0);return Qr(e),r}function Qr(e){const r=Ar(e.heap,e.heap.size-1);0<e.heap.size&&(ne(e.heap,0,r),Mr(e,0))}function Rr(e,r){return zr(e.heap,r)}function vn(e){this.heap=new Lr,this.cmp=e}F(239,1,{},vn);b.cmp=null;b.heap=null;const m1=cn("java.lang.","Object",1,null),kn=dn("[Ljava.lang.","Object;",356,m1),Dr=cn("cs.threephase.","FullCube",160,m1),Or=dn("[Lcs.threephase.","FullCube;",381,Dr);let wn,Q1=!1;function yn(){Q1||(Q1=!0,cr(),On(),Xn(),Wn(),sn(),an(),pr(),wn=new pn)}function Nr(){yn(),gn()}async function Vr(){yn();const e=Cn.fromString(kr(wn));return(await Sn()).concat(e)}export{Nr as initialize,Vr as random444Scramble};
