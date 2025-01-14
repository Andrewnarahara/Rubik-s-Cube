var zh=Object.defineProperty;var zl=n=>{throw TypeError(n)};var kh=(n,t,e)=>t in n?zh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var pe=(n,t,e)=>kh(n,typeof t!="symbol"?t+"":t,e),wa=(n,t,e)=>t.has(n)||zl("Cannot "+e);var O=(n,t,e)=>(wa(n,t,"read from private field"),e?e.call(n):t.get(n)),te=(n,t,e)=>t.has(n)?zl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Zt=(n,t,e,i)=>(wa(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),nn=(n,t,e)=>(wa(n,t,"access private method"),e);var Ta=(n,t,e,i)=>({set _(r){Zt(n,t,r,e)},get _(){return O(n,t,i)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="170",pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,kl=1,Vh=2,cu=1,Hh=2,On=3,ui=0,qe=1,zn=2,li=0,mr=1,Gl=2,Vl=3,Hl=4,Wh=5,Ti=100,Xh=101,qh=102,Yh=103,Kh=104,Zh=200,$h=201,Jh=202,Qh=203,uo=204,ho=205,jh=206,tf=207,ef=208,nf=209,rf=210,sf=211,af=212,of=213,lf=214,fo=0,po=1,mo=2,Tr=3,go=4,_o=5,vo=6,xo=7,uu=0,cf=1,uf=2,ci=0,hf=1,ff=2,df=3,pf=4,mf=5,gf=6,_f=7,hu=300,br=301,Ar=302,So=303,Mo=304,ga=306,yo=1e3,Pi=1001,Eo=1002,Sn=1003,vf=1004,ps=1005,bn=1006,ba=1007,Di=1008,Wn=1009,fu=1010,du=1011,es=1012,pl=1013,zi=1014,kn=1015,ls=1016,ml=1017,gl=1018,Rr=1020,pu=35902,mu=1021,gu=1022,vn=1023,_u=1024,vu=1025,gr=1026,Cr=1027,xu=1028,_l=1029,Su=1030,vl=1031,xl=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,wo=35840,To=35841,bo=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Do=37808,Lo=37809,Io=37810,Uo=37811,No=37812,Oo=37813,Fo=37814,Bo=37815,zo=37816,ko=37817,Go=37818,Vo=37819,Ho=37820,Wo=37821,Ks=36492,Xo=36494,qo=36495,Mu=36283,Yo=36284,Ko=36285,Zo=36286,xf=3200,Sf=3201,Mf=0,yf=1,si="",sn="srgb",Lr="srgb-linear",_a="linear",ee="srgb",Yi=7680,Wl=519,Ef=512,wf=513,Tf=514,yu=515,bf=516,Af=517,Rf=518,Cf=519,Xl=35044,ql="300 es",Gn=2e3,Js=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const _r=Math.PI/180,ns=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function Sl(n,t){return(n%t+t)%t}function Pf(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Df(n,t,e){return n!==t?(e-n)/(t-n):0}function Kr(n,t,e){return(1-e)*n+e*t}function Lf(n,t,e,i){return Kr(n,t,1-Math.exp(-e*i))}function If(n,t=1){return t-Math.abs(Sl(n,t*2)-t)}function Uf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Nf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Of(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ff(n,t){return n+Math.random()*(t-n)}function Bf(n){return n*(.5-Math.random())}function zf(n){n!==void 0&&(Yl=n);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(n){return n*_r}function Gf(n){return n*ns}function Vf(n){return(n&n-1)===0&&n!==0}function Hf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xf(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),d=s((t-i)/2),h=a((t-i)/2),m=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ur(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qf={DEG2RAD:_r,RAD2DEG:ns,generateUUID:Ir,clamp:Ie,euclideanModulo:Sl,mapLinear:Pf,inverseLerp:Df,lerp:Kr,damp:Lf,pingpong:If,smoothstep:Uf,smootherstep:Nf,randInt:Of,randFloat:Ff,randFloatSpread:Bf,seededRandom:zf,degToRad:kf,radToDeg:Gf,isPowerOfTwo:Vf,ceilPowerOfTwo:Hf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:Ue,denormalize:ur};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,r,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],f=r[6],T=r[1],w=r[4],M=r[7],k=r[2],b=r[5],A=r[8];return s[0]=a*v+o*T+l*k,s[3]=a*p+o*w+l*b,s[6]=a*f+o*M+l*A,s[1]=c*v+u*T+d*k,s[4]=c*p+u*w+d*b,s[7]=c*f+u*M+d*A,s[2]=h*v+m*T+g*k,s[5]=h*p+m*w+g*b,s[8]=h*f+m*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=e*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(r*c-u*i)*v,t[2]=(o*i-r*a)*v,t[3]=h*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Ot;function Eu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yf(){const n=Qs("canvas");return n.style.display="block",n}const Kl={};function Wr(n){n in Kl||(Kl[n]=!0,console.warn(n))}function Kf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Zf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $f(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=Vn(n.r),n.g=Vn(n.g),n.b=Vn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=vr(n.r),n.g=vr(n.g),n.b=vr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===si?_a:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Zl=[.64,.33,.3,.6,.15,.06],$l=[.2126,.7152,.0722],Jl=[.3127,.329],Ql=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Lr]:{primaries:Zl,whitePoint:Jl,transfer:_a,toXYZ:Ql,fromXYZ:jl,luminanceCoefficients:$l,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Zl,whitePoint:Jl,transfer:ee,toXYZ:Ql,fromXYZ:jl,luminanceCoefficients:$l,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let Ki;class Jf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=Qs("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qf=0;class wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ir(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ra(r[a].image)):s.push(Ra(r[a]))}else s=Ra(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jf=0;class Oe extends Wi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=Pi,r=Pi,s=bn,a=Di,o=vn,l=Wn,c=Oe.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ir(),this.name="",this.source=new wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=hu;Oe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,r=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(m+1)/2,k=(f+1)/2,b=(u+h)/4,A=(d+v)/4,N=(g+p)/4;return w>M&&w>k?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=b/i,s=A/i):M>k?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=N/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=A/s,r=N/s),this.set(i,r,s,e),this}let T=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class td extends Wi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Oe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends td{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Tu extends Oe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends Oe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==h||c!==m||u!==g){let p=1-o;const f=l*h+c*m+u*g+d*v,T=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const k=Math.sqrt(w),b=Math.atan2(k,f*T);p=Math.sin(p*b)/k,o=Math.sin(o*b)/k}const M=o*T;if(l=l*p+h*M,c=c*p+m*M,u=u*p+g*M,d=d*p+v*M,p===1-o){const k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*d+l*m-c*h,t[e+1]=l*g+u*h+c*d-o*m,t[e+2]=c*g+u*m+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),d=2*(s*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new P,tc=new Gi;class cs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),gs.subVectors(this.max,Fr),Zi.subVectors(t.a,Fr),$i.subVectors(t.b,Fr),Ji.subVectors(t.c,Fr),$n.subVectors($i,Zi),Jn.subVectors(Ji,$i),pi.subVectors(Zi,Ji);let e=[0,-$n.z,$n.y,0,-Jn.z,Jn.y,0,-pi.z,pi.y,$n.z,0,-$n.x,Jn.z,0,-Jn.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-Jn.y,Jn.x,0,-pi.y,pi.x,0];return!Pa(e,Zi,$i,Ji,gs)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Zi,$i,Ji,gs))?!1:(_s.crossVectors($n,Jn),e=[_s.x,_s.y,_s.z],Pa(e,Zi,$i,Ji,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new P,new P,new P,new P,new P,new P,new P,new P],un=new P,ms=new cs,Zi=new P,$i=new P,Ji=new P,$n=new P,Jn=new P,pi=new P,Fr=new P,gs=new P,_s=new P,mi=new P;function Pa(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){mi.fromArray(n,s);const o=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const nd=new cs,Br=new P,Da=new P;class va{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);const e=Br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Da)),this.expandByPoint(Br.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new P,La=new P,vs=new P,Qn=new P,Ia=new P,xs=new P,Ua=new P;class xa{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){La.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(La);const s=t.distanceTo(e)*.5,a=-this.direction.dot(vs),o=Qn.dot(this.direction),l=-Qn.dot(vs),c=Qn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(La).addScaledVector(vs,h),m}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,r,s){Ia.subVectors(e,t),xs.subVectors(i,t),Ua.crossVectors(Ia,xs);let a=this.direction.dot(Ua),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const l=o*this.direction.dot(xs.crossVectors(Qn,xs));if(l<0)return null;const c=o*this.direction.dot(Ia.cross(Qn));if(c<0||l+c>a)return null;const u=-o*Qn.dot(Ua);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,i,r,s,a,o,l,c,u,d,h,m,g,v,p){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,d,h,m,g,v,p)}set(t,e,i,r,s,a,o,l,c,u,d,h,m,g,v,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=a*u,m=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*d,g=c*u,v=c*d;e[0]=h+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*d,g=c*u,v=c*d;e[0]=h-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=g*c-m,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-h*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,rd)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),jn.crossVectors(i,Ze),jn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),jn.crossVectors(i,Ze)),jn.normalize(),Ss.crossVectors(Ze,jn),r[0]=jn.x,r[4]=Ss.x,r[8]=Ze.x,r[1]=jn.y,r[5]=Ss.y,r[9]=Ze.y,r[2]=jn.z,r[6]=Ss.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],T=i[3],w=i[7],M=i[11],k=i[15],b=r[0],A=r[4],N=r[8],y=r[12],S=r[1],R=r[5],K=r[9],G=r[13],q=r[2],j=r[6],W=r[10],nt=r[14],H=r[3],ot=r[7],dt=r[11],Tt=r[15];return s[0]=a*b+o*S+l*q+c*H,s[4]=a*A+o*R+l*j+c*ot,s[8]=a*N+o*K+l*W+c*dt,s[12]=a*y+o*G+l*nt+c*Tt,s[1]=u*b+d*S+h*q+m*H,s[5]=u*A+d*R+h*j+m*ot,s[9]=u*N+d*K+h*W+m*dt,s[13]=u*y+d*G+h*nt+m*Tt,s[2]=g*b+v*S+p*q+f*H,s[6]=g*A+v*R+p*j+f*ot,s[10]=g*N+v*K+p*W+f*dt,s[14]=g*y+v*G+p*nt+f*Tt,s[3]=T*b+w*S+M*q+k*H,s[7]=T*A+w*R+M*j+k*ot,s[11]=T*N+w*K+M*W+k*dt,s[15]=T*y+w*G+M*nt+k*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15];return g*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*m-i*l*m)+v*(+e*l*m-e*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+e*c*d-e*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-e*l*d+e*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],T=d*p*c-v*h*c+v*l*m-o*p*m-d*l*f+o*h*f,w=g*h*c-u*p*c-g*l*m+a*p*m+u*l*f-a*h*f,M=u*v*c-g*d*c+g*o*m-a*v*m-u*o*f+a*d*f,k=g*d*l-u*v*l-g*o*h+a*v*h+u*o*p-a*d*p,b=e*T+i*w+r*M+s*k;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=T*A,t[1]=(v*h*s-d*p*s-v*r*m+i*p*m+d*r*f-i*h*f)*A,t[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*f+i*l*f)*A,t[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*m-i*l*m)*A,t[4]=w*A,t[5]=(u*p*s-g*h*s+g*r*m-e*p*m-u*r*f+e*h*f)*A,t[6]=(g*l*s-a*p*s-g*r*c+e*p*c+a*r*f-e*l*f)*A,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*m+e*l*m)*A,t[8]=M*A,t[9]=(g*d*s-u*v*s-g*i*m+e*v*m+u*i*f-e*d*f)*A,t[10]=(a*v*s-g*o*s+g*i*c-e*v*c-a*i*f+e*o*f)*A,t[11]=(u*o*s-a*d*s-u*i*c+e*d*c+a*i*m-e*o*m)*A,t[12]=k*A,t[13]=(u*v*r-g*d*r+g*i*h-e*v*h-u*i*p+e*d*p)*A,t[14]=(g*o*r-a*v*r-g*i*l+e*v*l+a*i*p-e*o*p)*A,t[15]=(a*d*r-u*o*r+u*i*l-e*d*l-a*i*h+e*o*h)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,g=s*d,v=a*u,p=a*d,f=o*d,T=l*c,w=l*u,M=l*d,k=i.x,b=i.y,A=i.z;return r[0]=(1-(v+f))*k,r[1]=(m+M)*k,r[2]=(g-w)*k,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(h+f))*b,r[6]=(p+T)*b,r[7]=0,r[8]=(g+w)*A,r[9]=(p-T)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const c=1/s,u=1/a,d=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Gn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),h=(i+r)/(i-r);let m,g;if(o===Gn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Js)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Gn){const l=this.elements,c=1/(e-t),u=1/(i-r),d=1/(a-s),h=(e+t)*c,m=(i+r)*u;let g,v;if(o===Gn)g=(a+s)*d,v=-2*d;else if(o===Js)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Qi=new P,hn=new ge,id=new P(0,0,0),rd=new P(1,1,1),jn=new P,Ss=new P,Ze=new P,ec=new ge,nc=new Gi;class Xn{constructor(t=0,e=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ec,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sd=0;const ic=new P,ji=new Gi,In=new ge,Ms=new P,zr=new P,ad=new P,od=new Gi,rc=new P(1,0,0),sc=new P(0,1,0),ac=new P(0,0,1),oc={type:"added"},ld={type:"removed"},tr={type:"childadded",child:null},Na={type:"childremoved",child:null};class Ye extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new P,e=new Xn,i=new Gi,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ot}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return ic.copy(t).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ms.copy(t):Ms.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(zr,Ms,this.up):In.lookAt(Ms,zr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(In),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ld),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ye.DEFAULT_UP=new P(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new P,Un=new P,Oa=new P,Nn=new P,er=new P,nr=new P,lc=new P,Fa=new P,Ba=new P,za=new P,ka=new xe,Ga=new xe,Va=new xe;class an{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),fn.subVectors(t,e),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){fn.subVectors(r,e),Un.subVectors(i,e),Oa.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Un),l=fn.dot(Oa),c=Un.dot(Un),u=Un.dot(Oa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ka.setScalar(0),Ga.setScalar(0),Va.setScalar(0),ka.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,i),Va.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ka,s.x),a.addScaledVector(Ga,s.y),a.addScaledVector(Va,s.z),a}static isFrontFacing(t,e,i,r){return fn.subVectors(i,e),Un.subVectors(t,e),fn.cross(Un).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;er.subVectors(r,i),nr.subVectors(s,i),Fa.subVectors(t,i);const l=er.dot(Fa),c=nr.dot(Fa);if(l<=0&&c<=0)return e.copy(i);Ba.subVectors(t,r);const u=er.dot(Ba),d=nr.dot(Ba);if(u>=0&&d<=u)return e.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(er,a);za.subVectors(t,s);const m=er.dot(za),g=nr.dot(za);if(g>=0&&m<=g)return e.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(nr,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return lc.subVectors(s,r),o=(d-u)/(d-u+(m-g)),e.copy(r).addScaledVector(lc,o);const f=1/(p+v+h);return a=v*f,o=h*f,e.copy(i).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Ha(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=Sl(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ha(a,s,t+1/3),this.g=Ha(a,s,t),this.b=Ha(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const i=bu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Yt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ie(Le.r*255,0,255))*65536+Math.round(Ie(Le.g*255,0,255))*256+Math.round(Ie(Le.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Le.copy(this),e);const i=Le.r,r=Le.g,s=Le.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=sn){Yt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,r=Le.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(ys);const i=Kr(ti.h,ys.h,e),r=Kr(ti.s,ys.s,e),s=Kr(ti.l,ys.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new jt;jt.NAMES=bu;let cd=0;class us extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ir(),this.name="",this.blending=mr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=ho,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uo&&(i.blendSrc=this.blendSrc),this.blendDst!==ho&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class He extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new P,Es=new zt;class An{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ur(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class Au extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ru extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Rn extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ud=0;const rn=new ge,Wa=new Ye,ir=new P,$e=new cs,kr=new cs,we=new P;class qn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?Ru:Au)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rn(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors($e.min,kr.min),$e.expandByPoint(we),we.addVectors($e.max,kr.max),$e.expandByPoint(we)):($e.expandByPoint(kr.min),$e.expandByPoint(kr.max))}$e.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)we.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(t,c),we.add(ir)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new P,l[N]=new P;const c=new P,u=new P,d=new P,h=new zt,m=new zt,g=new zt,v=new P,p=new P;function f(N,y,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[N].add(v),o[y].add(v),o[S].add(v),l[N].add(p),l[y].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,y=T.length;N<y;++N){const S=T[N],R=S.start,K=S.count;for(let G=R,q=R+K;G<q;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new P,M=new P,k=new P,b=new P;function A(N){k.fromBufferAttribute(r,N),b.copy(k);const y=o[N];w.copy(y),w.sub(k.multiplyScalar(k.dot(y))).normalize(),M.crossVectors(b,y);const R=M.dot(l[N])<0?-1:1;a.setXYZW(N,w.x,w.y,w.z,R)}for(let N=0,y=T.length;N<y;++N){const S=T[N],R=S.start,K=S.count;for(let G=R,q=R+K;G<q;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new An(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=t(h,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new ge,gi=new xa,ws=new va,uc=new P,Ts=new P,bs=new P,As=new P,Xa=new P,Rs=new P,hc=new P,Cs=new P;class xn extends Ye{constructor(t=new qn,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Xa.fromBufferAttribute(d,t),a?Rs.addScaledVector(Xa,u):Rs.addScaledVector(Xa.sub(e),u))}e.add(Rs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(ws.containsPoint(gi.origin)===!1&&(gi.intersectSphere(ws,uc)===null||gi.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(cc.copy(s).invert(),gi.copy(t.ray).applyMatrix4(cc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,k=w;M<k;M+=3){const b=o.getX(M),A=o.getX(M+1),N=o.getX(M+2);r=Ps(this,f,t,i,c,u,d,b,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const T=o.getX(p),w=o.getX(p+1),M=o.getX(p+2);r=Ps(this,a,t,i,c,u,d,T,w,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,k=w;M<k;M+=3){const b=M,A=M+1,N=M+2;r=Ps(this,f,t,i,c,u,d,b,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const T=p,w=p+1,M=p+2;r=Ps(this,a,t,i,c,u,d,T,w,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function hd(n,t,e,i,r,s,a,o){let l;if(t.side===qe?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===ui,o),l===null)return null;Cs.copy(o),Cs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cs);return c<e.near||c>e.far?null:{distance:c,point:Cs.clone(),object:n}}function Ps(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Ts),n.getVertexPosition(l,bs),n.getVertexPosition(c,As);const u=hd(n,t,e,i,Ts,bs,As,hc);if(u){const d=new P;an.getBarycoord(hc,Ts,bs,As,d),r&&(u.uv=an.getInterpolatedAttribute(r,o,l,c,d,new zt)),s&&(u.uv1=an.getInterpolatedAttribute(s,o,l,c,d,new zt)),a&&(u.normal=an.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};an.getNormal(Ts,bs,As,h.normal),u.face=h,u.barycoord=d}return u}class Xi extends qn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(d,2));function g(v,p,f,T,w,M,k,b,A,N,y){const S=M/A,R=k/N,K=M/2,G=k/2,q=b/2,j=A+1,W=N+1;let nt=0,H=0;const ot=new P;for(let dt=0;dt<W;dt++){const Tt=dt*R-G;for(let kt=0;kt<j;kt++){const re=kt*S-K;ot[v]=re*T,ot[p]=Tt*w,ot[f]=q,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[p]=0,ot[f]=b>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(kt/A),d.push(1-dt/N),nt+=1}}for(let dt=0;dt<N;dt++)for(let Tt=0;Tt<A;Tt++){const kt=h+Tt+j*dt,re=h+Tt+j*(dt+1),Y=h+(Tt+1)+j*(dt+1),it=h+(Tt+1)+j*dt;l.push(kt,re,it),l.push(re,Y,it),H+=6}o.addGroup(m,H,y),m+=H,h+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ne(n){const t={};for(let e=0;e<n.length;e++){const i=Pr(n[e]);for(const r in i)t[r]=i[r]}return t}function fd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Cu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const dd={clone:Pr,merge:Ne};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Pu extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new P,fc=new zt,dc=new zt;class Je extends Pu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,fc,dc),e.subVectors(dc,fc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class gd extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Je(rr,sr,t,e);r.layers=this.layers,this.add(r);const s=new Je(rr,sr,t,e);s.layers=this.layers,this.add(s);const a=new Je(rr,sr,t,e);a.layers=this.layers,this.add(a);const o=new Je(rr,sr,t,e);o.layers=this.layers,this.add(o);const l=new Je(rr,sr,t,e);l.layers=this.layers,this.add(l);const c=new Je(rr,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Du extends Oe{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:br,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _d extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Du(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:li});s.uniforms.tEquirect.value=e;const a=new xn(r,s),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=bn),new gd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const qa=new P,vd=new P,xd=new Ot;class ii{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=qa.subVectors(i,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(qa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xd.getNormalMatrix(t),r=this.coplanarPoint(qa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new va,Ds=new P;class Lu{constructor(t=new ii,e=new ii,i=new ii,r=new ii,s=new ii,a=new ii){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],T=r[13],w=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-f).normalize(),i[1].setComponents(l+s,h+c,p+m,M+f).normalize(),i[2].setComponents(l+a,h+u,p+g,M+T).normalize(),i[3].setComponents(l-a,h-u,p-g,M-T).normalize(),i[4].setComponents(l-o,h-d,p-v,M-w).normalize(),e===Gn)i[5].setComponents(l+o,h+d,p+v,M+w).normalize();else if(e===Js)i[5].setComponents(o,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ds.x=r.normal.x>0?t.max.x:t.min.x,Ds.y=r.normal.y>0?t.max.y:t.min.y,Ds.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iu(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Sd(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Sa extends qn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=t/o,h=e/l,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){const T=f*h-a;for(let w=0;w<c;w++){const M=w*d-s;g.push(M,-T,0),v.push(0,0,1),p.push(w/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const w=T+c*f,M=T+c*(f+1),k=T+1+c*(f+1),b=T+1+c*f;m.push(w,M,b),m.push(M,k,b)}this.setIndex(m),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Md,alphahash_pars_fragment:yd,alphamap_fragment:Ed,alphamap_pars_fragment:wd,alphatest_fragment:Td,alphatest_pars_fragment:bd,aomap_fragment:Ad,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Pd,begin_vertex:Dd,beginnormal_vertex:Ld,bsdfs:Id,iridescence_fragment:Ud,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:zd,color_fragment:kd,color_pars_fragment:Gd,color_pars_vertex:Vd,color_vertex:Hd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Yd,displacementmap_vertex:Kd,emissivemap_fragment:Zd,emissivemap_pars_fragment:$d,colorspace_fragment:Jd,colorspace_pars_fragment:Qd,envmap_fragment:jd,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:dp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:up,lights_lambert_pars_fragment:hp,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:Sp,lights_fragment_maps:Mp,lights_fragment_end:yp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:bp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Ip,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Op,morphtarget_vertex:Fp,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:kp,normal_pars_vertex:Gp,normal_vertex:Vp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:Kp,packing:Zp,premultiplied_alpha_fragment:$p,project_vertex:Jp,dithering_fragment:Qp,dithering_pars_fragment:jp,roughnessmap_fragment:tm,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:um,specularmap_pars_fragment:hm,tonemapping_fragment:fm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:xm,background_vert:Sm,background_frag:Mm,backgroundCube_vert:ym,backgroundCube_frag:Em,cube_vert:wm,cube_frag:Tm,depth_vert:bm,depth_frag:Am,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Dm,linedashed_vert:Lm,linedashed_frag:Im,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Om,meshlambert_frag:Fm,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:km,meshnormal_frag:Gm,meshphong_vert:Vm,meshphong_frag:Hm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:Ym,points_vert:Km,points_frag:Zm,shadow_vert:$m,shadow_frag:Jm,sprite_vert:Qm,sprite_frag:jm},st={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Tn={basic:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new jt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ne([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ne([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new jt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ne([st.points,st.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ne([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ne([st.common,st.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ne([st.sprite,st.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ne([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ne([st.lights,st.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Tn.physical={uniforms:Ne([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ls={r:0,b:0,g:0},vi=new Xn,tg=new ge;function eg(n,t,e,i,r,s,a){const o=new jt(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function v(T){let w=!1;const M=g(T);M===null?f(o,l):M&&M.isColor&&(f(M,1),w=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,w){const M=g(w);M&&(M.isCubeTexture||M.mapping===ga)?(u===void 0&&(u=new xn(new Xi(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Pr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(w.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(vi)),u.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ee,(d!==M||h!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xn(new Sa(2,2),new hi({name:"BackgroundMaterial",uniforms:Pr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,w){T.getRGB(Ls,Cu(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),l=w,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:v,addToRenderList:p}}function ng(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,R,K,G,q){let j=!1;const W=d(G,K,R);s!==W&&(s=W,c(s.object)),j=m(S,G,K,q),j&&g(S,G,K,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(S,R,K,G),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,R,K){const G=K.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let j=q[R.id];j===void 0&&(j={},q[R.id]=j);let W=j[G];return W===void 0&&(W=h(l()),j[G]=W),W}function h(S){const R=[],K=[],G=[];for(let q=0;q<e;q++)R[q]=0,K[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:K,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,R,K,G){const q=s.attributes,j=R.attributes;let W=0;const nt=K.getAttributes();for(const H in nt)if(nt[H].location>=0){const dt=q[H];let Tt=j[H];if(Tt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor)),dt===void 0||dt.attribute!==Tt||Tt&&dt.data!==Tt.data)return!0;W++}return s.attributesNum!==W||s.index!==G}function g(S,R,K,G){const q={},j=R.attributes;let W=0;const nt=K.getAttributes();for(const H in nt)if(nt[H].location>=0){let dt=j[H];dt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));const Tt={};Tt.attribute=dt,dt&&dt.data&&(Tt.data=dt.data),q[H]=Tt,W++}s.attributes=q,s.attributesNum=W,s.index=G}function v(){const S=s.newAttributes;for(let R=0,K=S.length;R<K;R++)S[R]=0}function p(S){f(S,0)}function f(S,R){const K=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;K[S]=1,G[S]===0&&(n.enableVertexAttribArray(S),G[S]=1),q[S]!==R&&(n.vertexAttribDivisor(S,R),q[S]=R)}function T(){const S=s.newAttributes,R=s.enabledAttributes;for(let K=0,G=R.length;K<G;K++)R[K]!==S[K]&&(n.disableVertexAttribArray(K),R[K]=0)}function w(S,R,K,G,q,j,W){W===!0?n.vertexAttribIPointer(S,R,K,q,j):n.vertexAttribPointer(S,R,K,G,q,j)}function M(S,R,K,G){v();const q=G.attributes,j=K.getAttributes(),W=R.defaultAttributeValues;for(const nt in j){const H=j[nt];if(H.location>=0){let ot=q[nt];if(ot===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const dt=ot.normalized,Tt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const re=kt.buffer,Y=kt.type,it=kt.bytesPerElement,Mt=Y===n.INT||Y===n.UNSIGNED_INT||ot.gpuType===pl;if(ot.isInterleavedBufferAttribute){const lt=ot.data,Pt=lt.stride,It=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<H.locationSize;Gt++)f(H.location+Gt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<H.locationSize;Gt++)p(H.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Gt=0;Gt<H.locationSize;Gt++)w(H.location+Gt,Tt/H.locationSize,Y,dt,Pt*it,(It+Tt/H.locationSize*Gt)*it,Mt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)f(H.location+lt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let lt=0;lt<H.locationSize;lt++)w(H.location+lt,Tt/H.locationSize,Y,dt,Tt*it,Tt/H.locationSize*lt*it,Mt)}}else if(W!==void 0){const dt=W[nt];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(H.location,dt);break;case 3:n.vertexAttrib3fv(H.location,dt);break;case 4:n.vertexAttrib4fv(H.location,dt);break;default:n.vertexAttrib1fv(H.location,dt)}}}}T()}function k(){N();for(const S in i){const R=i[S];for(const K in R){const G=R[K];for(const q in G)u(G[q].object),delete G[q];delete R[K]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const K in R){const G=R[K];for(const q in G)u(G[q].object),delete G[q];delete R[K]}delete i[S.id]}function A(S){for(const R in i){const K=i[R];if(K[S.id]===void 0)continue;const G=K[S.id];for(const q in G)u(G[q].object),delete G[q];delete K[S.id]}}function N(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:k,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function ig(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,i,1)}function l(c,u,d,h){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==vn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:k,maxSamples:b}}function sg(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ii,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,w=T*4;let M=f.clippingState||null;l.value=M,M=u(g,h,w,m);for(let k=0;k!==w;++k)M[k]=e[k];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,M=m;w!==v;++w,M+=4)a.copy(d[w]).applyMatrix4(T,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function ag(n){let t=new WeakMap;function e(a,o){return o===So?a.mapping=br:o===Mo&&(a.mapping=Ar),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===So||o===Mo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _d(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class og extends Pu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const dr=4,pc=[.125,.215,.35,.446,.526,.582],bi=20,Ya=new og,mc=new jt;let Ka=null,Za=0,$a=0,Ja=!1;const Mi=(1+Math.sqrt(5))/2,ar=1/Mi,gc=[new P(-Mi,ar,0),new P(Mi,ar,0),new P(-ar,0,Mi),new P(ar,0,Mi),new P(0,Mi,-ar),new P(0,Mi,ar),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,Za,$a),this._renderer.xr.enabled=Ja,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===br||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ls,format:vn,colorSpace:Lr,depthBuffer:!1},r=vc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(s)),this._blurMaterial=cg(s,t,e)}return r}_compileMaterial(t){const e=new xn(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,i,r){const o=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(mc),u.toneMapping=ci,u.autoClear=!1;const m=new He({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new xn(new Xi,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(mc),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const w=this._cubeSize;Is(r,T*w,f>2?w:0,w,w),u.setRenderTarget(r),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===br||t.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new xn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ya)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gc[(r-s-1)%gc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*bi-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):bi;p>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);const f=[];let T=0;for(let A=0;A<bi;++A){const N=A/v,y=Math.exp(-N*N/2);f.push(y),A===0?T+=y:A<p&&(T+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const M=this._sizeLods[r],k=3*M*(r>w-dr?r-w+dr:0),b=4*(this._cubeSize-M);Is(e,k,b,3*M,2*M),l.setRenderTarget(e),l.render(d,Ya)}}function lg(n){const t=[],e=[],i=[];let r=n;const s=n-dr+1+pc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-dr?l=pc[a-n+dr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,f=1,T=new Float32Array(v*g*m),w=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,N=b>2?0:-1,y=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];T.set(y,v*g*b),w.set(h,p*g*b);const S=[b,b,b,b,b,b];M.set(S,f*g*b)}const k=new qn;k.setAttribute("position",new An(T,v)),k.setAttribute("uv",new An(w,p)),k.setAttribute("faceIndex",new An(M,f)),t.push(k),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vc(n,t,e){const i=new ki(n,t,e);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function cg(n,t,e){const i=new Float32Array(bi),r=new P(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function xc(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Sc(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===So||l===Mo,u=l===br||l===Ar;if(c||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new _c(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new _c(n)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function hg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fg(n,t,e,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let w=0,M=T.length;w<M;w+=3){const k=T[w+0],b=T[w+1],A=T[w+2];h.push(k,b,b,A,A,k)}}else if(g!==void 0){const T=g.array;v=g.version;for(let w=0,M=T.length/3-1;w<M;w+=3){const k=w+0,b=w+1,A=w+2;h.push(k,b,b,A,A,k)}}else return;const p=new(Eu(h)?Ru:Au)(h,1);p.version=v;const f=s.get(d);f&&t.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function dg(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*a),e.update(m,i,1)}function c(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*a,g),e.update(m,i,g))}function u(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,i,1)}function d(h,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/a,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=m[T]*v[T];e.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function mg(n,t,e){const i=new WeakMap,r=new xe;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let y=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;m===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let M=o.attributes.position.count*w,k=1;M>t.maxTextureSize&&(k=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*k*4*d),A=new Tu(b,M,k,d);A.type=kn,A.needsUpdate=!0;const N=w*4;for(let S=0;S<d;S++){const R=p[S],K=f[S],G=T[S],q=M*k*4*S;for(let j=0;j<R.count;j++){const W=j*N;m===!0&&(r.fromBufferAttribute(R,j),b[q+W+0]=r.x,b[q+W+1]=r.y,b[q+W+2]=r.z,b[q+W+3]=0),g===!0&&(r.fromBufferAttribute(K,j),b[q+W+4]=r.x,b[q+W+5]=r.y,b[q+W+6]=r.z,b[q+W+7]=0),v===!0&&(r.fromBufferAttribute(G,j),b[q+W+8]=r.x,b[q+W+9]=r.y,b[q+W+10]=r.z,b[q+W+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new zt(M,k)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function gg(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Uu extends Oe{constructor(t,e,i,r,s,a,o,l,c,u=gr){if(u!==gr&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gr&&(i=zi),i===void 0&&u===Cr&&(i=Rr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nu=new Oe,Mc=new Uu(1,1),Ou=new Tu,Fu=new ed,Bu=new Du,yc=[],Ec=[],wc=new Float32Array(16),Tc=new Float32Array(9),bc=new Float32Array(4);function Ur(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=yc[r];if(s===void 0&&(s=new Float32Array(r),yc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ma(n,t){let e=Ec[t];e===void 0&&(e=new Int32Array(t),Ec[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _g(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Mg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;bc.set(i),n.uniformMatrix2fv(this.addr,!1,bc),Ee(e,i)}}function yg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;Tc.set(i),n.uniformMatrix3fv(this.addr,!1,Tc),Ee(e,i)}}function Eg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;wc.set(i),n.uniformMatrix4fv(this.addr,!1,wc),Ee(e,i)}}function wg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Rg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function Lg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mc.compareFunction=yu,s=Mc):s=Nu,e.setTexture2D(t||s,r)}function Ig(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fu,r)}function Ug(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Bu,r)}function Ng(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ou,r)}function Og(n){switch(n){case 5126:return _g;case 35664:return vg;case 35665:return xg;case 35666:return Sg;case 35674:return Mg;case 35675:return yg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return bg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}function Fg(n,t){n.uniform1fv(this.addr,t)}function Bg(n,t){const e=Ur(t,this.size,2);n.uniform2fv(this.addr,e)}function zg(n,t){const e=Ur(t,this.size,3);n.uniform3fv(this.addr,e)}function kg(n,t){const e=Ur(t,this.size,4);n.uniform4fv(this.addr,e)}function Gg(n,t){const e=Ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Vg(n,t){const e=Ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Hg(n,t){const e=Ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wg(n,t){n.uniform1iv(this.addr,t)}function Xg(n,t){n.uniform2iv(this.addr,t)}function qg(n,t){n.uniform3iv(this.addr,t)}function Yg(n,t){n.uniform4iv(this.addr,t)}function Kg(n,t){n.uniform1uiv(this.addr,t)}function Zg(n,t){n.uniform2uiv(this.addr,t)}function $g(n,t){n.uniform3uiv(this.addr,t)}function Jg(n,t){n.uniform4uiv(this.addr,t)}function Qg(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Nu,s[a])}function jg(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Fu,s[a])}function t_(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Bu,s[a])}function e_(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Ou,s[a])}function n_(n){switch(n){case 5126:return Fg;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Kg;case 36294:return Zg;case 36295:return $g;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}class i_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}}class r_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}}class s_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Ac(n,t){n.seq.push(t),n.map[t.id]=t}function a_(n,t,e){const i=n.name,r=i.length;for(Qa.lastIndex=0;;){const s=Qa.exec(i),a=Qa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ac(e,c===void 0?new i_(o,n,t):new r_(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new s_(o),Ac(e,d)),e=d}}}class Zs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);a_(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Rc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const o_=37297;let l_=0;function c_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Cc=new Ot;function u_(n){Yt._getMatrix(Cc,Yt.workingColorSpace,n);const t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case _a:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Pc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+c_(n.getShaderSource(t),a)}else return r}function h_(n,t){const e=u_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function f_(n,t){let e;switch(t){case hf:e="Linear";break;case ff:e="Reinhard";break;case df:e="Cineon";break;case pf:e="ACESFilmic";break;case gf:e="AgX";break;case _f:e="Neutral";break;case mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Us=new P;function d_(){Yt.getLuminanceCoefficients(Us);const n=Us.x.toFixed(4),t=Us.y.toFixed(4),e=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function m_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function g_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Xr(n){return n!==""}function Dc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(__,x_)}const v_=new Map;function x_(n,t){let e=Bt[t];if(e===void 0){const i=v_.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}const S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(n){return n.replace(S_,M_)}function M_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function y_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function E_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Ar:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function T_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case cf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function b_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function A_(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=y_(e),c=E_(e),u=w_(e),d=T_(e),h=b_(e),m=p_(e),g=m_(s),v=r.createProgram();let p,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ci?f_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,h_("linearToOutputTexel",e.outputColorSpace),d_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),a=$o(a),a=Dc(a,e),a=Lc(a,e),o=$o(o),o=Dc(o,e),o=Lc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=T+p+a,M=T+f+o,k=Rc(r,r.VERTEX_SHADER,w),b=Rc(r,r.FRAGMENT_SHADER,M);r.attachShader(v,k),r.attachShader(v,b),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(R){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(k).trim(),q=r.getShaderInfoLog(b).trim();let j=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,k,b);else{const nt=Pc(r,k,"vertex"),H=Pc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+K+`
`+nt+`
`+H)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(G===""||q==="")&&(W=!1);W&&(R.diagnostics={runnable:j,programLog:K,vertexShader:{log:G,prefix:p},fragmentShader:{log:q,prefix:f}})}r.deleteShader(k),r.deleteShader(b),N=new Zs(r,v),y=g_(r,v)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,o_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=b,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new P_(t),e.set(t,i)),i}}class P_{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}}function D_(n,t,e,i,r,s,a){const o=new Ml,l=new C_,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,R,K,G){const q=K.fog,j=G.geometry,W=y.isMeshStandardMaterial?K.environment:null,nt=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=nt&&nt.mapping===ga?nt.image.height:null,ot=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const dt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=dt!==void 0?dt.length:0;let kt=0;j.morphAttributes.position!==void 0&&(kt=1),j.morphAttributes.normal!==void 0&&(kt=2),j.morphAttributes.color!==void 0&&(kt=3);let re,Y,it,Mt;if(ot){const Qt=Tn[ot];re=Qt.vertexShader,Y=Qt.fragmentShader}else re=y.vertexShader,Y=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),Mt=l.getFragmentShaderID(y);const lt=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),It=G.isInstancedMesh===!0,Gt=G.isBatchedMesh===!0,de=!!y.map,Xt=!!y.matcap,_e=!!nt,U=!!y.aoMap,tn=!!y.lightMap,Vt=!!y.bumpMap,Ht=!!y.normalMap,Rt=!!y.displacementMap,oe=!!y.emissiveMap,bt=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,F=y.clearcoat>0,$=y.dispersion>0,Q=y.iridescence>0,X=y.sheen>0,yt=y.transmission>0,ct=_&&!!y.anisotropyMap,pt=F&&!!y.clearcoatMap,qt=F&&!!y.clearcoatNormalMap,tt=F&&!!y.clearcoatRoughnessMap,mt=Q&&!!y.iridescenceMap,Ct=Q&&!!y.iridescenceThicknessMap,Dt=X&&!!y.sheenColorMap,gt=X&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,Ft=!!y.specularColorMap,se=!!y.specularIntensityMap,C=yt&&!!y.transmissionMap,at=yt&&!!y.thicknessMap,V=!!y.gradientMap,J=!!y.alphaMap,ft=y.alphaTest>0,ut=!!y.alphaHash,Ut=!!y.extensions;let me=ci;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(me=n.toneMapping);const Pe={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:Y,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Gt,batchingColor:Gt&&G._colorsTexture!==null,instancing:It,instancingColor:It&&G.instanceColor!==null,instancingMorph:It&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Lr,alphaToCoverage:!!y.alphaToCoverage,map:de,matcap:Xt,envMap:_e,envMapMode:_e&&nt.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:tn,bumpMap:Vt,normalMap:Ht,displacementMap:h&&Rt,emissiveMap:oe,normalMapObjectSpace:Ht&&y.normalMapType===yf,normalMapTangentSpace:Ht&&y.normalMapType===Mf,metalnessMap:bt,roughnessMap:E,anisotropy:_,anisotropyMap:ct,clearcoat:F,clearcoatMap:pt,clearcoatNormalMap:qt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:X,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Ft,specularIntensityMap:se,transmission:yt,transmissionMap:C,thicknessMap:at,gradientMap:V,opaque:y.transparent===!1&&y.blending===mr&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:y.combine,mapUv:de&&v(y.map.channel),aoMapUv:U&&v(y.aoMap.channel),lightMapUv:tn&&v(y.lightMap.channel),bumpMapUv:Vt&&v(y.bumpMap.channel),normalMapUv:Ht&&v(y.normalMap.channel),displacementMapUv:Rt&&v(y.displacementMap.channel),emissiveMapUv:oe&&v(y.emissiveMap.channel),metalnessMapUv:bt&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:ct&&v(y.anisotropyMap.channel),clearcoatMapUv:pt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(y.sheenRoughnessMap.channel),specularMapUv:Wt&&v(y.specularMap.channel),specularColorMapUv:Ft&&v(y.specularColorMap.channel),specularIntensityMapUv:se&&v(y.specularIntensityMap.channel),transmissionMapUv:C&&v(y.transmissionMap.channel),thicknessMapUv:at&&v(y.thicknessMap.channel),alphaMapUv:J&&v(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ht||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(de||J),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(T(S,y),w(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function w(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=g[y.type];let R;if(S){const K=Tn[S];R=dd.clone(K.uniforms)}else R=y.uniforms;return R}function k(y,S){let R;for(let K=0,G=u.length;K<G;K++){const q=u[K];if(q.cacheKey===S){R=q,++R.usedTimes;break}}return R===void 0&&(R=new A_(n,S,y,s),u.push(R)),R}function b(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:k,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:N}}function L_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function I_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Oc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d,h,m,g,v,p){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=p),t++,f}function o(d,h,m,g,v,p){const f=a(d,h,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(d,h,m,g,v,p){const f=a(d,h,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(d,h){e.length>1&&e.sort(d||I_),i.length>1&&i.sort(h||Nc),r.length>1&&r.sort(h||Nc)}function u(){for(let d=t,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function U_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Oc,n.set(i,[a])):r>=s.length?(a=new Oc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function N_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new jt};break;case"SpotLight":e={position:new P,direction:new P,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function O_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let F_=0;function B_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function z_(n){const t=new N_,e=O_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new ge,a=new ge;function o(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,T=0,w=0,M=0,k=0,b=0,A=0;c.sort(B_);for(let y=0,S=c.length;y<S;y++){const R=c[y],K=R.color,G=R.intensity,q=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=K.r*G,d+=K.g*G,h+=K.b*G;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],G);A++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const nt=R.shadow,H=e.get(R);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=R.shadow.matrix,T++}i.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(K).multiplyScalar(G),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;const nt=R.shadow;if(R.map&&(i.spotLightMap[k]=R.map,k++,nt.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[v]=nt.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=j,M++}v++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(K).multiplyScalar(G),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=W,p++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const nt=R.shadow,H=e.get(R);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,H.shadowCameraNear=nt.camera.near,H.shadowCameraFar=nt.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(G),W.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[f]=W,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==p||N.hemiLength!==f||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==M||N.numSpotMaps!==k||N.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+k-b,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=p,N.hemiLength=f,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=M,N.numSpotMaps=k,N.numLightProbes=A,i.version=F_++)}function l(c,u){let d=0,h=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const w=c[f];if(w.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(w.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(w.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function Fc(n){const t=new z_(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function k_(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Fc(n),t.set(r,[o])):s>=a.length?(o=new Fc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class G_ extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V_ extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X_(n,t,e){let i=new Lu;const r=new zt,s=new zt,a=new xe,o=new G_({depthPacking:Sf}),l=new V_,c={},u=e.maxTextureSize,d={[ui]:qe,[qe]:ui,[zn]:zn},h=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:H_,fragmentShader:W_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new qn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let f=this.type;this.render=function(b,A,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),K=n.state;K.setBlending(li),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const G=f!==On&&this.type===On,q=f===On&&this.type!==On;for(let j=0,W=b.length;j<W;j++){const nt=b[j],H=nt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ot=H.getFrameExtents();if(r.multiply(ot),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,H.mapSize.y=s.y)),H.map===null||G===!0||q===!0){const Tt=this.type!==On?{minFilter:Sn,magFilter:Sn}:{};H.map!==null&&H.map.dispose(),H.map=new ki(r.x,r.y,Tt),H.map.texture.name=nt.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const dt=H.getViewportCount();for(let Tt=0;Tt<dt;Tt++){const kt=H.getViewport(Tt);a.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),K.viewport(a),H.updateMatrices(nt,Tt),i=H.getFrustum(),M(A,N,H.camera,nt,this.type)}H.isPointLightShadow!==!0&&this.type===On&&T(H,N),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(y,S,R)};function T(b,A){const N=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ki(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,N,h,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,N,m,v,null)}function w(b,A,N,y){let S=null;const R=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)S=R;else if(S=N.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const K=S.uuid,G=A.uuid;let q=c[K];q===void 0&&(q={},c[K]=q);let j=q[G];j===void 0&&(j=S.clone(),q[G]=j,A.addEventListener("dispose",k)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,y===On?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=N}return S}function M(b,A,N,y,S){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===On)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const G=t.update(b),q=b.material;if(Array.isArray(q)){const j=G.groups;for(let W=0,nt=j.length;W<nt;W++){const H=j[W],ot=q[H.materialIndex];if(ot&&ot.visible){const dt=w(b,ot,y,S);b.onBeforeShadow(n,b,A,N,G,dt,H),n.renderBufferDirect(N,null,G,dt,b,H),b.onAfterShadow(n,b,A,N,G,dt,H)}}}else if(q.visible){const j=w(b,q,y,S);b.onBeforeShadow(n,b,A,N,G,j,null),n.renderBufferDirect(N,null,G,j,b,null),b.onAfterShadow(n,b,A,N,G,j,null)}}const K=b.children;for(let G=0,q=K.length;G<q;G++)M(K[G],A,N,y,S)}function k(b){b.target.removeEventListener("dispose",k);for(const N in c){const y=c[N],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const q_={[fo]:po,[mo]:vo,[go]:xo,[Tr]:_o,[po]:fo,[vo]:mo,[xo]:go,[_o]:Tr};function Y_(n,t){function e(){let C=!1;const at=new xe;let V=null;const J=new xe(0,0,0,0);return{setMask:function(ft){V!==ft&&!C&&(n.colorMask(ft,ft,ft,ft),V=ft)},setLocked:function(ft){C=ft},setClear:function(ft,ut,Ut,me,Pe){Pe===!0&&(ft*=me,ut*=me,Ut*=me),at.set(ft,ut,Ut,me),J.equals(at)===!1&&(n.clearColor(ft,ut,Ut,me),J.copy(at))},reset:function(){C=!1,V=null,J.set(-1,0,0,0)}}}function i(){let C=!1,at=!1,V=null,J=null,ft=null;return{setReversed:function(ut){if(at!==ut){const Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const me=ft;ft=null,this.setClear(me)}at=ut},getReversed:function(){return at},setTest:function(ut){ut?lt(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(ut){V!==ut&&!C&&(n.depthMask(ut),V=ut)},setFunc:function(ut){if(at&&(ut=q_[ut]),J!==ut){switch(ut){case fo:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case go:n.depthFunc(n.EQUAL);break;case _o:n.depthFunc(n.GEQUAL);break;case vo:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ut}},setLocked:function(ut){C=ut},setClear:function(ut){ft!==ut&&(at&&(ut=1-ut),n.clearDepth(ut),ft=ut)},reset:function(){C=!1,V=null,J=null,ft=null,at=!1}}}function r(){let C=!1,at=null,V=null,J=null,ft=null,ut=null,Ut=null,me=null,Pe=null;return{setTest:function(Qt){C||(Qt?lt(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!C&&(n.stencilMask(Qt),at=Qt)},setFunc:function(Qt,ln,Cn){(V!==Qt||J!==ln||ft!==Cn)&&(n.stencilFunc(Qt,ln,Cn),V=Qt,J=ln,ft=Cn)},setOp:function(Qt,ln,Cn){(ut!==Qt||Ut!==ln||me!==Cn)&&(n.stencilOp(Qt,ln,Cn),ut=Qt,Ut=ln,me=Cn)},setLocked:function(Qt){C=Qt},setClear:function(Qt){Pe!==Qt&&(n.clearStencil(Qt),Pe=Qt)},reset:function(){C=!1,at=null,V=null,J=null,ft=null,ut=null,Ut=null,me=null,Pe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,m=[],g=null,v=!1,p=null,f=null,T=null,w=null,M=null,k=null,b=null,A=new jt(0,0,0),N=0,y=!1,S=null,R=null,K=null,G=null,q=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=nt>=1):H.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=nt>=2);let ot=null,dt={};const Tt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),re=new xe().fromArray(Tt),Y=new xe().fromArray(kt);function it(C,at,V,J){const ft=new Uint8Array(4),ut=n.createTexture();n.bindTexture(C,ut),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<V;Ut++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(at+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ut}const Mt={};Mt[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(n.DEPTH_TEST),a.setFunc(Tr),Vt(!1),Ht(kl),lt(n.CULL_FACE),U(li);function lt(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function Pt(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function It(C,at){return d[C]!==at?(n.bindFramebuffer(C,at),d[C]=at,C===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=at),C===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=at),!0):!1}function Gt(C,at){let V=m,J=!1;if(C){V=h.get(at),V===void 0&&(V=[],h.set(at,V));const ft=C.textures;if(V.length!==ft.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Ut=ft.length;ut<Ut;ut++)V[ut]=n.COLOR_ATTACHMENT0+ut;V.length=ft.length,J=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,J=!0);J&&n.drawBuffers(V)}function de(C){return g!==C?(n.useProgram(C),g=C,!0):!1}const Xt={[Ti]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};Xt[Yh]=n.MIN,Xt[Kh]=n.MAX;const _e={[Zh]:n.ZERO,[$h]:n.ONE,[Jh]:n.SRC_COLOR,[uo]:n.SRC_ALPHA,[rf]:n.SRC_ALPHA_SATURATE,[ef]:n.DST_COLOR,[jh]:n.DST_ALPHA,[Qh]:n.ONE_MINUS_SRC_COLOR,[ho]:n.ONE_MINUS_SRC_ALPHA,[nf]:n.ONE_MINUS_DST_COLOR,[tf]:n.ONE_MINUS_DST_ALPHA,[sf]:n.CONSTANT_COLOR,[af]:n.ONE_MINUS_CONSTANT_COLOR,[of]:n.CONSTANT_ALPHA,[lf]:n.ONE_MINUS_CONSTANT_ALPHA};function U(C,at,V,J,ft,ut,Ut,me,Pe,Qt){if(C===li){v===!0&&(Pt(n.BLEND),v=!1);return}if(v===!1&&(lt(n.BLEND),v=!0),C!==Wh){if(C!==p||Qt!==y){if((f!==Ti||M!==Ti)&&(n.blendEquation(n.FUNC_ADD),f=Ti,M=Ti),Qt)switch(C){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,w=null,k=null,b=null,A.set(0,0,0),N=0,p=C,y=Qt}return}ft=ft||at,ut=ut||V,Ut=Ut||J,(at!==f||ft!==M)&&(n.blendEquationSeparate(Xt[at],Xt[ft]),f=at,M=ft),(V!==T||J!==w||ut!==k||Ut!==b)&&(n.blendFuncSeparate(_e[V],_e[J],_e[ut],_e[Ut]),T=V,w=J,k=ut,b=Ut),(me.equals(A)===!1||Pe!==N)&&(n.blendColor(me.r,me.g,me.b,Pe),A.copy(me),N=Pe),p=C,y=!1}function tn(C,at){C.side===zn?Pt(n.CULL_FACE):lt(n.CULL_FACE);let V=C.side===qe;at&&(V=!V),Vt(V),C.blending===mr&&C.transparent===!1?U(li):U(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const J=C.stencilWrite;o.setTest(J),J&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(C){S!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),S=C)}function Ht(C){C!==Gh?(lt(n.CULL_FACE),C!==R&&(C===kl?n.cullFace(n.BACK):C===Vh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),R=C}function Rt(C){C!==K&&(W&&n.lineWidth(C),K=C)}function oe(C,at,V){C?(lt(n.POLYGON_OFFSET_FILL),(G!==at||q!==V)&&(n.polygonOffset(at,V),G=at,q=V)):Pt(n.POLYGON_OFFSET_FILL)}function bt(C){C?lt(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function E(C){C===void 0&&(C=n.TEXTURE0+j-1),ot!==C&&(n.activeTexture(C),ot=C)}function _(C,at,V){V===void 0&&(ot===null?V=n.TEXTURE0+j-1:V=ot);let J=dt[V];J===void 0&&(J={type:void 0,texture:void 0},dt[V]=J),(J.type!==C||J.texture!==at)&&(ot!==V&&(n.activeTexture(V),ot=V),n.bindTexture(C,at||Mt[C]),J.type=C,J.texture=at)}function F(){const C=dt[ot];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(C){re.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function gt(C){Y.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Y.copy(C))}function Wt(C,at){let V=c.get(at);V===void 0&&(V=new WeakMap,c.set(at,V));let J=V.get(C);J===void 0&&(J=n.getUniformBlockIndex(at,C.name),V.set(C,J))}function Ft(C,at){const J=c.get(at).get(C);l.get(at)!==J&&(n.uniformBlockBinding(at,J,C.__bindingPointIndex),l.set(at,J))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ot=null,dt={},d={},h=new WeakMap,m=[],g=null,v=!1,p=null,f=null,T=null,w=null,M=null,k=null,b=null,A=new jt(0,0,0),N=0,y=!1,S=null,R=null,K=null,G=null,q=null,re.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:Pt,bindFramebuffer:It,drawBuffers:Gt,useProgram:de,setBlending:U,setMaterial:tn,setFlipSided:Vt,setCullFace:Ht,setLineWidth:Rt,setPolygonOffset:oe,setScissorTest:bt,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ft,texStorage2D:qt,texStorage3D:tt,texSubImage2D:X,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Dt,viewport:gt,reset:se}}function Bc(n,t,e,i){const r=K_(i);switch(e){case mu:return n*t;case _u:return n*t;case vu:return n*t*2;case xu:return n*t/r.components*r.byteLength;case _l:return n*t/r.components*r.byteLength;case Su:return n*t*2/r.components*r.byteLength;case vl:return n*t*2/r.components*r.byteLength;case gu:return n*t*3/r.components*r.byteLength;case vn:return n*t*4/r.components*r.byteLength;case xl:return n*t*4/r.components*r.byteLength;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case To:case Ao:return Math.max(n,16)*Math.max(t,8)/4;case wo:case bo:return Math.max(n,8)*Math.max(t,8)/2;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ks:case Xo:case qo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mu:case Yo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ko:case Zo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(n){switch(n){case Wn:case fu:return{byteLength:1,components:1};case es:case du:case ls:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case zi:case pl:case kn:return{byteLength:4,components:1};case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Z_(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Qs("canvas")}function v(E,_,F){let $=1;const Q=bt(E);if((Q.width>F||Q.height>F)&&($=F/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor($*Q.width),yt=Math.floor($*Q.height);d===void 0&&(d=g(X,yt));const ct=_?g(X,yt):d;return ct.width=X,ct.height=yt,ct.getContext("2d").drawImage(E,0,0,X,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+yt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,_,F,$,Q=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=_;if(_===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),_===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),_===n.RGBA){const yt=Q?_a:Yt.getTransfer($);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=yt===ee?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(E,_){let F;return E?_===null||_===zi||_===Rr?F=n.DEPTH24_STENCIL8:_===kn?F=n.DEPTH32F_STENCIL8:_===es&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===Rr?F=n.DEPTH_COMPONENT24:_===kn?F=n.DEPTH_COMPONENT32F:_===es&&(F=n.DEPTH_COMPONENT16),F}function k(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Sn&&E.minFilter!==bn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function b(E){const _=E.target;_.removeEventListener("dispose",b),N(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),S(_)}function N(E){const _=i.get(E);if(_.__webglInit===void 0)return;const F=E.source,$=h.get(F);if($){const Q=$[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(E),Object.keys($).length===0&&h.delete(F)}i.remove(E)}function y(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const F=E.source,$=h.get(F);delete $[_.__cacheKey],a.memory.textures--}function S(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Q=0;Q<_.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let $=0,Q=F.length;$<Q;$++){const X=i.get(F[$]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(F[$])}i.remove(E)}let R=0;function K(){R=0}function G(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function j(E,_){const F=i.get(E);if(E.isVideoTexture&&Rt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,_);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function W(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function nt(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function H(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){it(F,E,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const ot={[yo]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},dt={[Sn]:n.NEAREST,[vf]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},Tt={[Ef]:n.NEVER,[Cf]:n.ALWAYS,[wf]:n.LESS,[yu]:n.LEQUAL,[Tf]:n.EQUAL,[Rf]:n.GEQUAL,[bf]:n.GREATER,[Af]:n.NOTEQUAL};function kt(E,_){if(_.type===kn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===bn||_.magFilter===ba||_.magFilter===ps||_.magFilter===Di||_.minFilter===bn||_.minFilter===ba||_.minFilter===ps||_.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ot[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ot[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ot[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,dt[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Sn||_.minFilter!==ps&&_.minFilter!==Di||_.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function re(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",b));const $=_.source;let Q=h.get($);Q===void 0&&(Q={},h.set($,Q));const X=q(_);if(X!==E.__cacheKey){Q[X]===void 0&&(Q[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[X].usedTimes++;const yt=Q[E.__cacheKey];yt!==void 0&&(Q[E.__cacheKey].usedTimes--,yt.usedTimes===0&&y(_)),E.__cacheKey=X,E.__webglTexture=Q[X].texture}return F}function Y(E,_,F){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const Q=re(E,_),X=_.source;e.bindTexture($,E.__webglTexture,n.TEXTURE0+F);const yt=i.get(X);if(X.version!==yt.__version||Q===!0){e.activeTexture(n.TEXTURE0+F);const ct=Yt.getPrimaries(Yt.workingColorSpace),pt=_.colorSpace===si?null:Yt.getPrimaries(_.colorSpace),qt=_.colorSpace===si||ct===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=v(_.image,!1,r.maxTextureSize);tt=oe(_,tt);const mt=s.convert(_.format,_.colorSpace),Ct=s.convert(_.type);let Dt=w(_.internalFormat,mt,Ct,_.colorSpace,_.isVideoTexture);kt($,_);let gt;const Wt=_.mipmaps,Ft=_.isVideoTexture!==!0,se=yt.__version===void 0||Q===!0,C=X.dataReady,at=k(_,tt);if(_.isDepthTexture)Dt=M(_.format===Cr,_.type),se&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,Dt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Dt,tt.width,tt.height,0,mt,Ct,null));else if(_.isDataTexture)if(Wt.length>0){Ft&&se&&e.texStorage2D(n.TEXTURE_2D,at,Dt,Wt[0].width,Wt[0].height);for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],Ft?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,V,Dt,gt.width,gt.height,0,mt,Ct,gt.data);_.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(n.TEXTURE_2D,at,Dt,tt.width,tt.height),C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Ct,tt.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,tt.width,tt.height,0,mt,Ct,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Dt,Wt[0].width,Wt[0].height,tt.depth);for(let V=0,J=Wt.length;V<J;V++)if(gt=Wt[V],_.format!==vn)if(mt!==null)if(Ft){if(C)if(_.layerUpdates.size>0){const ft=Bc(gt.width,gt.height,_.format,_.type);for(const ut of _.layerUpdates){const Ut=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ut,gt.width,gt.height,1,mt,Ut)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Dt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?C&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,tt.depth,mt,Ct,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,Dt,gt.width,gt.height,tt.depth,0,mt,Ct,gt.data)}else{Ft&&se&&e.texStorage2D(n.TEXTURE_2D,at,Dt,Wt[0].width,Wt[0].height);for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],_.format!==vn?mt!==null?Ft?C&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,V,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,V,Dt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(_.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Dt,tt.width,tt.height,tt.depth),C)if(_.layerUpdates.size>0){const V=Bc(tt.width,tt.height,_.format,_.type);for(const J of _.layerUpdates){const ft=tt.data.subarray(J*V/tt.data.BYTES_PER_ELEMENT,(J+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,mt,Ct,ft)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(_.isData3DTexture)Ft?(se&&e.texStorage3D(n.TEXTURE_3D,at,Dt,tt.width,tt.height,tt.depth),C&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(_.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(n.TEXTURE_2D,at,Dt,tt.width,tt.height);else{let V=tt.width,J=tt.height;for(let ft=0;ft<at;ft++)e.texImage2D(n.TEXTURE_2D,ft,Dt,V,J,0,mt,Ct,null),V>>=1,J>>=1}}else if(Wt.length>0){if(Ft&&se){const V=bt(Wt[0]);e.texStorage2D(n.TEXTURE_2D,at,Dt,V.width,V.height)}for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],Ft?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,mt,Ct,gt):e.texImage2D(n.TEXTURE_2D,V,Dt,mt,Ct,gt);_.generateMipmaps=!1}else if(Ft){if(se){const V=bt(tt);e.texStorage2D(n.TEXTURE_2D,at,Dt,V.width,V.height)}C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ct,tt)}else e.texImage2D(n.TEXTURE_2D,0,Dt,mt,Ct,tt);p(_)&&f($),yt.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function it(E,_,F){if(_.image.length!==6)return;const $=re(E,_),Q=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const X=i.get(Q);if(Q.version!==X.__version||$===!0){e.activeTexture(n.TEXTURE0+F);const yt=Yt.getPrimaries(Yt.workingColorSpace),ct=_.colorSpace===si?null:Yt.getPrimaries(_.colorSpace),pt=_.colorSpace===si||yt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!qt&&!tt?mt[J]=v(_.image[J],!0,r.maxCubemapSize):mt[J]=tt?_.image[J].image:_.image[J],mt[J]=oe(_,mt[J]);const Ct=mt[0],Dt=s.convert(_.format,_.colorSpace),gt=s.convert(_.type),Wt=w(_.internalFormat,Dt,gt,_.colorSpace),Ft=_.isVideoTexture!==!0,se=X.__version===void 0||$===!0,C=Q.dataReady;let at=k(_,Ct);kt(n.TEXTURE_CUBE_MAP,_);let V;if(qt){Ft&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Wt,Ct.width,Ct.height);for(let J=0;J<6;J++){V=mt[J].mipmaps;for(let ft=0;ft<V.length;ft++){const ut=V[ft];_.format!==vn?Dt!==null?Ft?C&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,gt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Wt,ut.width,ut.height,0,Dt,gt,ut.data)}}}else{if(V=_.mipmaps,Ft&&se){V.length>0&&at++;const J=bt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Ft?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Dt,gt,mt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,mt[J].width,mt[J].height,0,Dt,gt,mt[J].data);for(let ft=0;ft<V.length;ft++){const Ut=V[ft].image[J].image;Ft?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ut.width,Ut.height,Dt,gt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Wt,Ut.width,Ut.height,0,Dt,gt,Ut.data)}}else{Ft?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,gt,mt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Dt,gt,mt[J]);for(let ft=0;ft<V.length;ft++){const ut=V[ft];Ft?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Dt,gt,ut.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Wt,Dt,gt,ut.image[J])}}}p(_)&&f(n.TEXTURE_CUBE_MAP),X.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Mt(E,_,F,$,Q,X){const yt=s.convert(F.format,F.colorSpace),ct=s.convert(F.type),pt=w(F.internalFormat,yt,ct,F.colorSpace),qt=i.get(_),tt=i.get(F);if(tt.__renderTarget=_,!qt.__hasExternalTextures){const mt=Math.max(1,_.width>>X),Ct=Math.max(1,_.height>>X);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,X,pt,mt,Ct,_.depth,0,yt,ct,null):e.texImage2D(Q,X,pt,mt,Ct,0,yt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),Ht(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,tt.__webglTexture,0,Vt(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,tt.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(E,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,Q=$&&$.isDepthTexture?$.type:null,X=M(_.stencilBuffer,Q),yt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=Vt(_);Ht(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,X,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,E)}else{const $=_.textures;for(let Q=0;Q<$.length;Q++){const X=$[Q],yt=s.convert(X.format,X.colorSpace),ct=s.convert(X.type),pt=w(X.internalFormat,yt,ct,X.colorSpace),qt=Vt(_);F&&Ht(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,pt,_.width,_.height):Ht(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt,pt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Q=$.__webglTexture,X=Vt(_);if(_.depthTexture.format===gr)Ht(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Cr)Ht(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function It(E){const _=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),lt(_.__webglDepthbuffer[$],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),lt(_.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(E,_,F){const $=i.get(E);_!==void 0&&Mt($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&It(E)}function de(E){const _=E.texture,F=i.get(E),$=i.get(_);E.addEventListener("dispose",A);const Q=E.textures,X=E.isWebGLCubeRenderTarget===!0,yt=Q.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let pt=0;pt<_.mipmaps.length;pt++)F.__webglFramebuffer[ct][pt]=n.createFramebuffer()}else F.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)F.__webglFramebuffer[ct]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ct=0,pt=Q.length;ct<pt;ct++){const qt=i.get(Q[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ht(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const pt=Q[ct];F.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const qt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),mt=w(pt.internalFormat,qt,tt,pt.colorSpace,E.isXRRenderTarget===!0),Ct=Vt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,mt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),kt(n.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)Mt(F.__webglFramebuffer[ct][pt],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else Mt(F.__webglFramebuffer[ct],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ct=0,pt=Q.length;ct<pt;ct++){const qt=Q[ct],tt=i.get(qt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),kt(n.TEXTURE_2D,qt),Mt(F.__webglFramebuffer,E,qt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),p(qt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),kt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)Mt(F.__webglFramebuffer[pt],E,_,n.COLOR_ATTACHMENT0,ct,pt);else Mt(F.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ct,0);p(_)&&f(ct),e.unbindTexture()}E.depthBuffer&&It(E)}function Xt(E){const _=E.textures;for(let F=0,$=_.length;F<$;F++){const Q=_[F];if(p(Q)){const X=T(E),yt=i.get(Q).__webglTexture;e.bindTexture(X,yt),f(X),e.unbindTexture()}}}const _e=[],U=[];function tn(E){if(E.samples>0){if(Ht(E)===!1){const _=E.textures,F=E.width,$=E.height;let Q=n.COLOR_BUFFER_BIT;const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(E),ct=_.length>1;if(ct)for(let pt=0;pt<_.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<_.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const qt=i.get(_[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,Q,n.NEAREST),l===!0&&(_e.length=0,U.length=0,_e.push(n.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(_e.push(X),U.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<_.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const qt=i.get(_[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Vt(E){return Math.min(r.maxSamples,E.samples)}function Ht(E){const _=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Rt(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function oe(E,_){const F=E.colorSpace,$=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Lr&&F!==si&&(Yt.getTransfer(F)===ee?($!==vn||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ht}function $_(n,t){function e(i,r=si){let s;const a=Yt.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fu)return n.BYTE;if(i===du)return n.SHORT;if(i===es)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===mu)return n.ALPHA;if(i===gu)return n.RGB;if(i===vn)return n.RGBA;if(i===_u)return n.LUMINANCE;if(i===vu)return n.LUMINANCE_ALPHA;if(i===gr)return n.DEPTH_COMPONENT;if(i===Cr)return n.DEPTH_STENCIL;if(i===xu)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===Su)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===Ws||i===Xs||i===qs||i===Ys)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wo||i===To||i===bo||i===Ao)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Po)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ro||i===Co)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Po)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Do||i===Lo||i===Io||i===Uo||i===No||i===Oo||i===Fo||i===Bo||i===zo||i===ko||i===Go||i===Vo||i===Ho||i===Wo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Do)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Io)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===No)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ko)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Go)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ho)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ks||i===Xo||i===qo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ks)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mu||i===Yo||i===Ko||i===Zo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ks)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class J_ extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ns extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q_={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Oe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new hi({vertexShader:j_,fragmentShader:t0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xn(new Sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n0 extends Wi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const v=new e0,p=e.getContextAttributes();let f=null,T=null;const w=[],M=[],k=new zt;let b=null;const A=new Je;A.viewport=new xe;const N=new Je;N.viewport=new xe;const y=[A,N],S=new J_;let R=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=w[Y];return it===void 0&&(it=new ja,w[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=w[Y];return it===void 0&&(it=new ja,w[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=w[Y];return it===void 0&&(it=new ja,w[Y]=it),it.getHandSpace()};function G(Y){const it=M.indexOf(Y.inputSource);if(it===-1)return;const Mt=w[it];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<w.length;Y++){const it=M[Y];it!==null&&(M[Y]=null,w[Y].disconnect(it))}R=null,K=null,v.reset(),t.setRenderTarget(f),m=null,h=null,d=null,r=null,T=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(k),r.renderState.layers===void 0){const it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ki(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,Mt=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?Cr:gr,Mt=p.stencil?Rr:zi);const Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(Pt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new ki(h.textureWidth,h.textureHeight,{format:vn,type:Wn,depthTexture:new Uu(h.textureWidth,h.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(Y){for(let it=0;it<Y.removed.length;it++){const Mt=Y.removed[it],lt=M.indexOf(Mt);lt>=0&&(M[lt]=null,w[lt].disconnect(Mt))}for(let it=0;it<Y.added.length;it++){const Mt=Y.added[it];let lt=M.indexOf(Mt);if(lt===-1){for(let It=0;It<w.length;It++)if(It>=M.length){M.push(Mt),lt=It;break}else if(M[It]===null){M[It]=Mt,lt=It;break}if(lt===-1)break}const Pt=w[lt];Pt&&Pt.connect(Mt)}}const W=new P,nt=new P;function H(Y,it,Mt){W.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(Mt.matrixWorld);const lt=W.distanceTo(nt),Pt=it.projectionMatrix.elements,It=Mt.projectionMatrix.elements,Gt=Pt[14]/(Pt[10]-1),de=Pt[14]/(Pt[10]+1),Xt=(Pt[9]+1)/Pt[5],_e=(Pt[9]-1)/Pt[5],U=(Pt[8]-1)/Pt[0],tn=(It[8]+1)/It[0],Vt=Gt*U,Ht=Gt*tn,Rt=lt/(-U+tn),oe=Rt*-U;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const bt=Gt+Rt,E=de+Rt,_=Vt-oe,F=Ht+(lt-oe),$=Xt*de/E*bt,Q=_e*de/E*bt;Y.projectionMatrix.makePerspective(_,F,$,Q,bt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let it=Y.near,Mt=Y.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),S.near=N.near=A.near=it,S.far=N.far=A.far=Mt,(R!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,K=S.far),A.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,S.layers.mask=A.layers.mask|N.layers.mask;const lt=Y.parent,Pt=S.cameras;ot(S,lt);for(let It=0;It<Pt.length;It++)ot(Pt[It],lt);Pt.length===2?H(S,A,N):S.projectionMatrix.copy(A.projectionMatrix),dt(Y,S,lt)};function dt(Y,it,Mt){Mt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Tt=null;function kt(Y,it){if(u=it.getViewerPose(c||a),g=it,u!==null){const Mt=u.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let lt=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let It=0;It<Mt.length;It++){const Gt=Mt[It];let de=null;if(m!==null)de=m.getViewport(Gt);else{const _e=d.getViewSubImage(h,Gt);de=_e.viewport,It===0&&(t.setRenderTargetTextures(T,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(T))}let Xt=y[It];Xt===void 0&&(Xt=new Je,Xt.layers.enable(It),Xt.viewport=new xe,y[It]=Xt),Xt.matrix.fromArray(Gt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Gt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),It===0&&(S.matrix.copy(Xt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(Xt)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const It=d.getDepthInformation(Mt[0]);It&&It.isValid&&It.texture&&v.init(t,It,r.renderState)}}for(let Mt=0;Mt<w.length;Mt++){const lt=M[Mt],Pt=w[Mt];lt!==null&&Pt!==void 0&&Pt.update(lt,it,c||a)}Tt&&Tt(Y,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}const re=new Iu;re.setAnimationLoop(kt),this.setAnimationLoop=function(Y){Tt=Y},this.dispose=function(){}}}const xi=new Xn,i0=new ge;function r0(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Cu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,T,w,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,T,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===qe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===qe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=t.get(f),w=T.envMap,M=T.envMapRotation;w&&(p.envMap.value=w,xi.copy(M),xi.x*=-1,xi.y*=-1,xi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(xi)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=w*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const T=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function s0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const M=w.program;i.uniformBlockBinding(T,M)}function c(T,w){let M=r[T.id];M===void 0&&(g(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",p));const k=w.program;i.updateUBOMapping(T,k);const b=t.render.frame;s[T.id]!==b&&(h(T),s[T.id]=b)}function u(T){const w=d();T.__bindingPointIndex=w;const M=n.createBuffer(),k=T.__size,b=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,k,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=r[T.id],M=T.uniforms,k=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let b=0,A=M.length;b<A;b++){const N=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,S=N.length;y<S;y++){const R=N[y];if(m(R,b,y,k)===!0){const K=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let j=0;j<G.length;j++){const W=G[j],nt=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,K+q,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,q),q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,w,M,k){const b=T.value,A=w+"_"+M;if(k[A]===void 0)return typeof b=="number"||typeof b=="boolean"?k[A]=b:k[A]=b.clone(),!0;{const N=k[A];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return k[A]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function g(T){const w=T.uniforms;let M=0;const k=16;for(let A=0,N=w.length;A<N;A++){const y=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,R=y.length;S<R;S++){const K=y[S],G=Array.isArray(K.value)?K.value:[K.value];for(let q=0,j=G.length;q<j;q++){const W=G[q],nt=v(W),H=M%k,ot=H%nt.boundary,dt=H+ot;M+=ot,dt!==0&&k-dt<nt.storage&&(M+=k-dt),K.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=nt.storage}}}const b=M%k;return b>0&&(M+=k-b),T.__size=M,T.__cache={},this}function v(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function p(T){const w=T.target;w.removeEventListener("dispose",p);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class zu{constructor(t={}){const{canvas:e=Yf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,f=null;const T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=ci,this.toneMappingExposure=1;const M=this;let k=!1,b=0,A=0,N=null,y=-1,S=null;const R=new xe,K=new xe;let G=null;const q=new jt(0);let j=0,W=e.width,nt=e.height,H=1,ot=null,dt=null;const Tt=new xe(0,0,W,nt),kt=new xe(0,0,W,nt);let re=!1;const Y=new Lu;let it=!1,Mt=!1;const lt=new ge,Pt=new ge,It=new P,Gt=new xe,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function _e(){return N===null?H:1}let U=i;function tn(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const L="webgl2";if(U=tn(L,x),U===null)throw tn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Vt,Ht,Rt,oe,bt,E,_,F,$,Q,X,yt,ct,pt,qt,tt,mt,Ct,Dt,gt,Wt,Ft,se,C;function at(){Vt=new hg(U),Vt.init(),Ft=new $_(U,Vt),Ht=new rg(U,Vt,t,Ft),Rt=new Y_(U,Vt),Ht.reverseDepthBuffer&&h&&Rt.buffers.depth.setReversed(!0),oe=new pg(U),bt=new L_,E=new Z_(U,Vt,Rt,bt,Ht,Ft,oe),_=new ag(M),F=new ug(M),$=new Sd(U),se=new ng(U,$),Q=new fg(U,$,oe,se),X=new gg(U,Q,$,oe),Dt=new mg(U,Ht,E),tt=new sg(bt),yt=new D_(M,_,F,Vt,Ht,se,tt),ct=new r0(M,bt),pt=new U_,qt=new k_(Vt),Ct=new eg(M,_,F,Rt,X,m,l),mt=new X_(M,X,Ht),C=new s0(U,oe,Ht,Rt),gt=new ig(U,Vt,oe),Wt=new dg(U,Vt,oe),oe.programs=yt.programs,M.capabilities=Ht,M.extensions=Vt,M.properties=bt,M.renderLists=pt,M.shadowMap=mt,M.state=Rt,M.info=oe}at();const V=new n0(M,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Vt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Vt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(W,nt,!1))},this.getSize=function(x){return x.set(W,nt)},this.setSize=function(x,L,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,nt=L,e.width=Math.floor(x*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(W*H,nt*H).floor()},this.setDrawingBufferSize=function(x,L,B){W=x,nt=L,H=B,e.width=Math.floor(x*B),e.height=Math.floor(L*B),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Tt)},this.setViewport=function(x,L,B,z){x.isVector4?Tt.set(x.x,x.y,x.z,x.w):Tt.set(x,L,B,z),Rt.viewport(R.copy(Tt).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(kt)},this.setScissor=function(x,L,B,z){x.isVector4?kt.set(x.x,x.y,x.z,x.w):kt.set(x,L,B,z),Rt.scissor(K.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(x){Rt.setScissorTest(re=x)},this.setOpaqueSort=function(x){ot=x},this.setTransparentSort=function(x){dt=x},this.getClearColor=function(x){return x.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(x=!0,L=!0,B=!0){let z=0;if(x){let I=!1;if(N!==null){const et=N.texture.format;I=et===xl||et===vl||et===_l}if(I){const et=N.texture.type,ht=et===Wn||et===zi||et===es||et===Rr||et===ml||et===gl,vt=Ct.getClearColor(),xt=Ct.getClearAlpha(),Lt=vt.r,Nt=vt.g,St=vt.b;ht?(g[0]=Lt,g[1]=Nt,g[2]=St,g[3]=xt,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Lt,v[1]=Nt,v[2]=St,v[3]=xt,U.clearBufferiv(U.COLOR,0,v))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),qt.dispose(),bt.dispose(),_.dispose(),F.dispose(),X.dispose(),se.dispose(),C.dispose(),yt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Dl),V.removeEventListener("sessionend",Ll),di.stop()};function J(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const x=oe.autoReset,L=mt.enabled,B=mt.autoUpdate,z=mt.needsUpdate,I=mt.type;at(),oe.autoReset=x,mt.enabled=L,mt.autoUpdate=B,mt.needsUpdate=z,mt.type=I}function ut(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ut(x){const L=x.target;L.removeEventListener("dispose",Ut),me(L)}function me(x){Pe(x),bt.remove(x)}function Pe(x){const L=bt.get(x).programs;L!==void 0&&(L.forEach(function(B){yt.releaseProgram(B)}),x.isShaderMaterial&&yt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,B,z,I,et){L===null&&(L=de);const ht=I.isMesh&&I.matrixWorld.determinant()<0,vt=Oh(x,L,B,z,I);Rt.setMaterial(z,ht);let xt=B.index,Lt=1;if(z.wireframe===!0){if(xt=Q.getWireframeAttribute(B),xt===void 0)return;Lt=2}const Nt=B.drawRange,St=B.attributes.position;let Kt=Nt.start*Lt,ae=(Nt.start+Nt.count)*Lt;et!==null&&(Kt=Math.max(Kt,et.start*Lt),ae=Math.min(ae,(et.start+et.count)*Lt)),xt!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,xt.count)):St!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,St.count));const le=ae-Kt;if(le<0||le===1/0)return;se.setup(I,z,vt,B,xt);let Be,$t=gt;if(xt!==null&&(Be=$.get(xt),$t=Wt,$t.setIndex(Be)),I.isMesh)z.wireframe===!0?(Rt.setLineWidth(z.wireframeLinewidth*_e()),$t.setMode(U.LINES)):$t.setMode(U.TRIANGLES);else if(I.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*_e()),I.isLineSegments?$t.setMode(U.LINES):I.isLineLoop?$t.setMode(U.LINE_LOOP):$t.setMode(U.LINE_STRIP)}else I.isPoints?$t.setMode(U.POINTS):I.isSprite&&$t.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)$t.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))$t.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Et=I._multiDrawStarts,Pn=I._multiDrawCounts,Jt=I._multiDrawCount,cn=xt?$.get(xt).bytesPerElement:1,qi=bt.get(z).currentProgram.getUniforms();for(let Ke=0;Ke<Jt;Ke++)qi.setValue(U,"_gl_DrawID",Ke),$t.render(Et[Ke]/cn,Pn[Ke])}else if(I.isInstancedMesh)$t.renderInstances(Kt,le,I.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Pn=Math.min(B.instanceCount,Et);$t.renderInstances(Kt,le,Pn)}else $t.render(Kt,le)};function Qt(x,L,B){x.transparent===!0&&x.side===zn&&x.forceSinglePass===!1?(x.side=qe,x.needsUpdate=!0,ds(x,L,B),x.side=ui,x.needsUpdate=!0,ds(x,L,B),x.side=zn):ds(x,L,B)}this.compile=function(x,L,B=null){B===null&&(B=x),f=qt.get(B),f.init(L),w.push(f),B.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),x!==B&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const z=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const et=I.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const vt=et[ht];Qt(vt,B,I),z.add(vt)}else Qt(et,B,I),z.add(et)}),w.pop(),f=null,z},this.compileAsync=function(x,L,B=null){const z=this.compile(x,L,B);return new Promise(I=>{function et(){if(z.forEach(function(ht){bt.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){I(x);return}setTimeout(et,10)}Vt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ln=null;function Cn(x){ln&&ln(x)}function Dl(){di.stop()}function Ll(){di.start()}const di=new Iu;di.setAnimationLoop(Cn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(x){ln=x,V.setAnimationLoop(x),x===null?di.stop():di.start()},V.addEventListener("sessionstart",Dl),V.addEventListener("sessionend",Ll),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,L,N),f=qt.get(x,w.length),f.init(L),w.push(f),Pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,Mt),p=pt.get(x,T.length),p.init(),T.push(p),V.enabled===!0&&V.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&Ea(et,L,-1/0,M.sortObjects)}Ea(x,L,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(ot,dt),Xt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xt&&Ct.addToRenderList(p,x),this.info.render.frame++,it===!0&&tt.beginShadows();const B=f.state.shadowsArray;mt.render(B,x,L),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,I=p.transmissive;if(f.setupLights(),L.isArrayCamera){const et=L.cameras;if(I.length>0)for(let ht=0,vt=et.length;ht<vt;ht++){const xt=et[ht];Ul(z,I,x,xt)}Xt&&Ct.render(x);for(let ht=0,vt=et.length;ht<vt;ht++){const xt=et[ht];Il(p,x,xt,xt.viewport)}}else I.length>0&&Ul(z,I,x,L),Xt&&Ct.render(x),Il(p,x,L);N!==null&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(M,x,L),se.resetDefaultState(),y=-1,S=null,w.pop(),w.length>0?(f=w[w.length-1],it===!0&&tt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Ea(x,L,B,z){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){z&&Gt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Pt);const ht=X.update(x),vt=x.material;vt.visible&&p.push(x,ht,vt,B,Gt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){const ht=X.update(x),vt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Gt.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Gt.copy(ht.boundingSphere.center)),Gt.applyMatrix4(x.matrixWorld).applyMatrix4(Pt)),Array.isArray(vt)){const xt=ht.groups;for(let Lt=0,Nt=xt.length;Lt<Nt;Lt++){const St=xt[Lt],Kt=vt[St.materialIndex];Kt&&Kt.visible&&p.push(x,ht,Kt,B,Gt.z,St)}}else vt.visible&&p.push(x,ht,vt,B,Gt.z,null)}}const et=x.children;for(let ht=0,vt=et.length;ht<vt;ht++)Ea(et[ht],L,B,z)}function Il(x,L,B,z){const I=x.opaque,et=x.transmissive,ht=x.transparent;f.setupLightsView(B),it===!0&&tt.setGlobalState(M.clippingPlanes,B),z&&Rt.viewport(R.copy(z)),I.length>0&&fs(I,L,B),et.length>0&&fs(et,L,B),ht.length>0&&fs(ht,L,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Ul(x,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ki(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?ls:Wn,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],ht=z.viewport||R;et.setSize(ht.z,ht.w);const vt=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(q),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),Xt&&Ct.render(B);const xt=M.toneMapping;M.toneMapping=ci;const Lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),it===!0&&tt.setGlobalState(M.clippingPlanes,z),fs(x,B,z),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let St=0,Kt=L.length;St<Kt;St++){const ae=L[St],le=ae.object,Be=ae.geometry,$t=ae.material,Et=ae.group;if($t.side===zn&&le.layers.test(z.layers)){const Pn=$t.side;$t.side=qe,$t.needsUpdate=!0,Nl(le,B,z,Be,$t,Et),$t.side=Pn,$t.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}M.setRenderTarget(vt),M.setClearColor(q,j),Lt!==void 0&&(z.viewport=Lt),M.toneMapping=xt}function fs(x,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let I=0,et=x.length;I<et;I++){const ht=x[I],vt=ht.object,xt=ht.geometry,Lt=z===null?ht.material:z,Nt=ht.group;vt.layers.test(B.layers)&&Nl(vt,L,B,xt,Lt,Nt)}}function Nl(x,L,B,z,I,et){x.onBeforeRender(M,L,B,z,I,et),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,L,B,z,x,et),I.transparent===!0&&I.side===zn&&I.forceSinglePass===!1?(I.side=qe,I.needsUpdate=!0,M.renderBufferDirect(B,L,z,I,x,et),I.side=ui,I.needsUpdate=!0,M.renderBufferDirect(B,L,z,I,x,et),I.side=zn):M.renderBufferDirect(B,L,z,I,x,et),x.onAfterRender(M,L,B,z,I,et)}function ds(x,L,B){L.isScene!==!0&&(L=de);const z=bt.get(x),I=f.state.lights,et=f.state.shadowsArray,ht=I.state.version,vt=yt.getParameters(x,I.state,et,L,B),xt=yt.getProgramCacheKey(vt);let Lt=z.programs;z.environment=x.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(x.isMeshStandardMaterial?F:_).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Lt===void 0&&(x.addEventListener("dispose",Ut),Lt=new Map,z.programs=Lt);let Nt=Lt.get(xt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===ht)return Fl(x,vt),Nt}else vt.uniforms=yt.getUniforms(x),x.onBeforeCompile(vt,M),Nt=yt.acquireProgram(vt,xt),Lt.set(xt,Nt),z.uniforms=vt.uniforms;const St=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(St.clippingPlanes=tt.uniform),Fl(x,vt),z.needsLights=Bh(x),z.lightsStateVersion=ht,z.needsLights&&(St.ambientLightColor.value=I.state.ambient,St.lightProbe.value=I.state.probe,St.directionalLights.value=I.state.directional,St.directionalLightShadows.value=I.state.directionalShadow,St.spotLights.value=I.state.spot,St.spotLightShadows.value=I.state.spotShadow,St.rectAreaLights.value=I.state.rectArea,St.ltc_1.value=I.state.rectAreaLTC1,St.ltc_2.value=I.state.rectAreaLTC2,St.pointLights.value=I.state.point,St.pointLightShadows.value=I.state.pointShadow,St.hemisphereLights.value=I.state.hemi,St.directionalShadowMap.value=I.state.directionalShadowMap,St.directionalShadowMatrix.value=I.state.directionalShadowMatrix,St.spotShadowMap.value=I.state.spotShadowMap,St.spotLightMatrix.value=I.state.spotLightMatrix,St.spotLightMap.value=I.state.spotLightMap,St.pointShadowMap.value=I.state.pointShadowMap,St.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function Ol(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=Zs.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Fl(x,L){const B=bt.get(x);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Oh(x,L,B,z,I){L.isScene!==!0&&(L=de),E.resetTextureUnits();const et=L.fog,ht=z.isMeshStandardMaterial?L.environment:null,vt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Lr,xt=(z.isMeshStandardMaterial?F:_).get(z.envMap||ht),Lt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color;let le=ci;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(le=M.toneMapping);const Be=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Be!==void 0?Be.length:0,Et=bt.get(z),Pn=f.state.lights;if(it===!0&&(Mt===!0||x!==S)){const en=x===S&&z.id===y;tt.setState(z,x,en)}let Jt=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Pn.state.version||Et.outputColorSpace!==vt||I.isBatchedMesh&&Et.batching===!1||!I.isBatchedMesh&&Et.batching===!0||I.isBatchedMesh&&Et.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Et.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Et.instancing===!1||!I.isInstancedMesh&&Et.instancing===!0||I.isSkinnedMesh&&Et.skinning===!1||!I.isSkinnedMesh&&Et.skinning===!0||I.isInstancedMesh&&Et.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Et.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Et.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Et.instancingMorph===!1&&I.morphTexture!==null||Et.envMap!==xt||z.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Nt||Et.morphTargets!==St||Et.morphNormals!==Kt||Et.morphColors!==ae||Et.toneMapping!==le||Et.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,Et.__version=z.version);let cn=Et.currentProgram;Jt===!0&&(cn=ds(z,L,I));let qi=!1,Ke=!1,Nr=!1;const ce=cn.getUniforms(),yn=Et.uniforms;if(Rt.useProgram(cn.program)&&(qi=!0,Ke=!0,Nr=!0),z.id!==y&&(y=z.id,Ke=!0),qi||S!==x){Rt.buffers.depth.getReversed()?(lt.copy(x.projectionMatrix),Zf(lt),$f(lt),ce.setValue(U,"projectionMatrix",lt)):ce.setValue(U,"projectionMatrix",x.projectionMatrix),ce.setValue(U,"viewMatrix",x.matrixWorldInverse);const Kn=ce.map.cameraPosition;Kn!==void 0&&Kn.setValue(U,It.setFromMatrixPosition(x.matrixWorld)),Ht.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Ke=!0,Nr=!0)}if(I.isSkinnedMesh){ce.setOptional(U,I,"bindMatrix"),ce.setOptional(U,I,"bindMatrixInverse");const en=I.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ce.setValue(U,"boneTexture",en.boneTexture,E))}I.isBatchedMesh&&(ce.setOptional(U,I,"batchingTexture"),ce.setValue(U,"batchingTexture",I._matricesTexture,E),ce.setOptional(U,I,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",I._indirectTexture,E),ce.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",I._colorsTexture,E));const Or=B.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&Dt.update(I,B,cn),(Ke||Et.receiveShadow!==I.receiveShadow)&&(Et.receiveShadow=I.receiveShadow,ce.setValue(U,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(yn.envMap.value=xt,yn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(yn.envMapIntensity.value=L.environmentIntensity),Ke&&(ce.setValue(U,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&Fh(yn,Nr),et&&z.fog===!0&&ct.refreshFogUniforms(yn,et),ct.refreshMaterialUniforms(yn,z,H,nt,f.state.transmissionRenderTarget[x.id]),Zs.upload(U,Ol(Et),yn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zs.upload(U,Ol(Et),yn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(U,"center",I.center),ce.setValue(U,"modelViewMatrix",I.modelViewMatrix),ce.setValue(U,"normalMatrix",I.normalMatrix),ce.setValue(U,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const en=z.uniformsGroups;for(let Kn=0,Zn=en.length;Kn<Zn;Kn++){const Bl=en[Kn];C.update(Bl,cn),C.bind(Bl,cn)}}return cn}function Fh(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Bh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,L,B){bt.get(x.texture).__webglTexture=L,bt.get(x.depthTexture).__webglTexture=B;const z=bt.get(x);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const B=bt.get(x);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,B=0){N=x,b=L,A=B;let z=!0,I=null,et=!1,ht=!1;if(x){const xt=bt.get(x);if(xt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(xt.__hasExternalTextures)E.rebindTextures(x,bt.get(x.texture).__webglTexture,bt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const St=x.depthTexture;if(xt.__boundDepthTexture!==St){if(St!==null&&bt.has(St)&&(x.width!==St.image.width||x.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Lt=x.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);const Nt=bt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[L])?I=Nt[L][B]:I=Nt[L],et=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?I=bt.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?I=Nt[B]:I=Nt,R.copy(x.viewport),K.copy(x.scissor),G=x.scissorTest}else R.copy(Tt).multiplyScalar(H).floor(),K.copy(kt).multiplyScalar(H).floor(),G=re;if(Rt.bindFramebuffer(U.FRAMEBUFFER,I)&&z&&Rt.drawBuffers(x,I),Rt.viewport(R),Rt.scissor(K),Rt.setScissorTest(G),et){const xt=bt.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,B)}else if(ht){const xt=bt.get(x.texture),Lt=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Lt)}y=-1},this.readRenderTargetPixels=function(x,L,B,z,I,et,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){Rt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const xt=x.texture,Lt=xt.format,Nt=xt.type;if(!Ht.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-z&&B>=0&&B<=x.height-I&&U.readPixels(L,B,z,I,Ft.convert(Lt),Ft.convert(Nt),et)}finally{const xt=N!==null?bt.get(N).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(x,L,B,z,I,et,ht){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){const xt=x.texture,Lt=xt.format,Nt=xt.type;if(!Ht.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-z&&B>=0&&B<=x.height-I){Rt.bindFramebuffer(U.FRAMEBUFFER,vt);const St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),U.readPixels(L,B,z,I,Ft.convert(Lt),Ft.convert(Nt),0);const Kt=N!==null?bt.get(N).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,Kt);const ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kf(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(St),U.deleteSync(ae),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,B=0){x.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const z=Math.pow(2,-B),I=Math.floor(x.image.width*z),et=Math.floor(x.image.height*z),ht=L!==null?L.x:0,vt=L!==null?L.y:0;E.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ht,vt,I,et),Rt.unbindTexture()},this.copyTextureToTexture=function(x,L,B=null,z=null,I=0){x.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,x=arguments[1],L=arguments[2],I=arguments[3]||0,B=null);let et,ht,vt,xt,Lt,Nt,St,Kt,ae;const le=x.isCompressedTexture?x.mipmaps[I]:x.image;B!==null?(et=B.max.x-B.min.x,ht=B.max.y-B.min.y,vt=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,Lt=B.min.y,Nt=B.isBox3?B.min.z:0):(et=le.width,ht=le.height,vt=le.depth||1,xt=0,Lt=0,Nt=0),z!==null?(St=z.x,Kt=z.y,ae=z.z):(St=0,Kt=0,ae=0);const Be=Ft.convert(L.format),$t=Ft.convert(L.type);let Et;L.isData3DTexture?(E.setTexture3D(L,0),Et=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),Et=U.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Pn=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=U.getParameter(U.UNPACK_SKIP_PIXELS),qi=U.getParameter(U.UNPACK_SKIP_ROWS),Ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt);const Nr=x.isDataArrayTexture||x.isData3DTexture,ce=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const yn=bt.get(x),Or=bt.get(L),en=bt.get(yn.__renderTarget),Kn=bt.get(Or.__renderTarget);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,en.__webglFramebuffer),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Zn=0;Zn<vt;Zn++)Nr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(x).__webglTexture,I,Nt+Zn),x.isDepthTexture?(ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(L).__webglTexture,I,ae+Zn),U.blitFramebuffer(xt,Lt,et,ht,St,Kt,et,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):ce?U.copyTexSubImage3D(Et,I,St,Kt,ae+Zn,xt,Lt,et,ht):U.copyTexSubImage2D(Et,I,St,Kt,ae+Zn,xt,Lt,et,ht);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ce?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(Et,I,St,Kt,ae,et,ht,vt,Be,$t,le.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,I,St,Kt,ae,et,ht,vt,Be,le.data):U.texSubImage3D(Et,I,St,Kt,ae,et,ht,vt,Be,$t,le):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,St,Kt,et,ht,Be,$t,le.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,St,Kt,le.width,le.height,Be,le.data):U.texSubImage2D(U.TEXTURE_2D,I,St,Kt,et,ht,Be,$t,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,qi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke),I===0&&L.generateMipmaps&&U.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,B=null,z=null,I=0){return x.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,x=arguments[2],L=arguments[3],I=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,B,z,I)},this.initRenderTarget=function(x){bt.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),Rt.unbindTexture()},this.resetState=function(){b=0,A=0,N=null,Rt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class ku extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class El extends us{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const js=new P,ta=new P,zc=new ge,Gr=new xa,Os=new va,to=new P,kc=new P;class a0 extends Ye{constructor(t=new qn,e=new El){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)js.fromBufferAttribute(e,r-1),ta.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=js.distanceTo(ta);t.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,t.ray.intersectsSphere(Os)===!1)return;zc.copy(r).invert(),Gr.copy(t.ray).applyMatrix4(zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const f=u.getX(v),T=u.getX(v+1),w=Fs(this,t,Gr,l,f,T);w&&e.push(w)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(m),f=Fs(this,t,Gr,l,v,p);f&&e.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const f=Fs(this,t,Gr,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Fs(this,t,Gr,l,g-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fs(n,t,e,i,r,s){const a=n.geometry.attributes.position;if(js.fromBufferAttribute(a,r),ta.fromBufferAttribute(a,s),e.distanceSqToSegment(js,ta,to,kc)>i)return;to.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(to);if(!(l<t.near||l>t.far))return{distance:l,point:kc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Gc=new P,Vc=new P;class Gu extends a0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Gc.fromBufferAttribute(e,r),Vc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Bs=new P,zs=new P,eo=new P,ks=new an;class Vu extends qn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(_r*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:f}=ks;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),ks.getNormal(eo),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){const w=(T+1)%3,M=d[T],k=d[w],b=ks[u[T]],A=ks[u[w]],N=`${M}_${k}`,y=`${k}_${M}`;y in h&&h[y]?(eo.dot(h[y].normal)<=s&&(m.push(b.x,b.y,b.z),m.push(A.x,A.y,A.z)),h[y]=null):N in h||(h[N]={index0:c[T],index1:c[w],normal:eo.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:p}=h[g];Bs.fromBufferAttribute(o,v),zs.fromBufferAttribute(o,p),m.push(Bs.x,Bs.y,Bs.z),m.push(zs.x,zs.y,zs.z)}this.setAttribute("position",new Rn(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const Hc=new ge;class o0{constructor(t,e,i=0,r=1/0){this.ray=new xa(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hc),this}intersectObject(t,e=!0,i=[]){return Jo(t,this,i,e),i.sort(Wc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Jo(t[r],this,i,e);return i.sort(Wc),i}}function Wc(n,t){return n.distance-t.distance}function Jo(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Jo(s[a],t,e,!0)}}class Xc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class l0 extends Wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);class Hu{is(t){return this instanceof t}as(t){return this instanceof t?this:null}}class fi extends Hu{constructor(){super()}get log(){return console.log.bind(console,this,this.toString())}}var ue=(n=>(n[n.Forwards=1]="Forwards",n[n.Backwards=-1]="Backwards",n))(ue||{});function c0(n,t=!0){if(!t)return n;switch(n){case 1:return-1;case-1:return 1}}function u0(n,t){return t===-1?Array.from(n).reverse():n}function h0(n){return Array.from(n).reverse()}const Qo=2147483647,jo="2^31 - 1",f0=-2147483648;var Ii,Ui;const aa=class aa extends fi{constructor(e,i){super();te(this,Ii);te(this,Ui);Zt(this,Ii,is(e)),Zt(this,Ui,is(i))}get A(){return O(this,Ii)}get B(){return O(this,Ui)}isIdentical(e){const i=e.as(aa);return!!(i!=null&&i.A.isIdentical(this.A)&&(i!=null&&i.B.isIdentical(this.B)))}invert(){return new aa(O(this,Ui),O(this,Ii))}*experimentalExpand(e=ue.Forwards,i){i??(i=1/0),i===0?yield e===ue.Forwards?this:this.invert():e===ue.Forwards?(yield*this.A.experimentalExpand(ue.Forwards,i-1),yield*this.B.experimentalExpand(ue.Forwards,i-1),yield*this.A.experimentalExpand(ue.Backwards,i-1),yield*this.B.experimentalExpand(ue.Backwards,i-1)):(yield*this.B.experimentalExpand(ue.Forwards,i-1),yield*this.A.experimentalExpand(ue.Forwards,i-1),yield*this.B.experimentalExpand(ue.Backwards,i-1),yield*this.A.experimentalExpand(ue.Backwards,i-1))}toString(e){return`[${O(this,Ii).toString(e)}, ${O(this,Ui).toString(e)}]`}};Ii=new WeakMap,Ui=new WeakMap;let We=aa;var Mr,yr;const oa=class oa extends fi{constructor(e,i){super();te(this,Mr);te(this,yr);Zt(this,Mr,is(e)),Zt(this,yr,is(i))}get A(){return O(this,Mr)}get B(){return O(this,yr)}isIdentical(e){const i=e.as(oa);return!!(i!=null&&i.A.isIdentical(this.A)&&(i!=null&&i.B.isIdentical(this.B)))}invert(){return new oa(O(this,Mr),O(this,yr).invert())}*experimentalExpand(e,i){i??(i=1/0),i===0?yield e===ue.Forwards?this:this.invert():(yield*this.A.experimentalExpand(ue.Forwards,i-1),yield*this.B.experimentalExpand(e,i-1),yield*this.A.experimentalExpand(ue.Backwards,i-1))}toString(e){return`[${this.A.toString(e)}: ${this.B.toString(e)}]`}};Mr=new WeakMap,yr=new WeakMap;let Xe=oa;var ai;const Pl=class Pl extends fi{constructor(e){super();te(this,ai);if(e.includes(`
`)||e.includes("\r"))throw new Error("LineComment cannot contain newline");Zt(this,ai,e)}get text(){return O(this,ai)}isIdentical(e){const i=e;return e.is(Pl)&&O(this,ai)===O(i,ai)}invert(){return this}*experimentalExpand(e=ue.Forwards,i=1/0){yield this}toString(e){return`//${O(this,ai)}`}};ai=new WeakMap;let Vi=Pl;class Hn extends fi{toString(t){return`
`}isIdentical(t){return t.is(Hn)}invert(){return this}*experimentalExpand(t=ue.Forwards,e=1/0){yield this}}class Fe extends fi{constructor(){super(...arguments);pe(this,"experimentalNISSGrouping")}toString(e){return"."}isIdentical(e){return e.is(Fe)}invert(){return this}*experimentalExpand(e=ue.Forwards,i=1/0){yield this}}var Ni;class d0{constructor(){te(this,Ni,[])}push(t){O(this,Ni).push(t)}experimentalPushAlg(t){for(const e of t.childAlgNodes())this.push(e)}experimentalNumAlgNodes(){return O(this,Ni).length}toAlg(){return new wt(O(this,Ni))}reset(){Zt(this,Ni,[])}}Ni=new WeakMap;function Gs(n,t){return n?parseInt(n):t}const qc=/^(\d+)?('?)/,p0=/^[_\dA-Za-z]/,m0=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)/,g0=/^[^\n]*/,_0=/^(-?\d+), ?/,v0=/^(-?\d+)\)/;function Wu(n){return new wl().parseAlg(n)}function x0(n){return new wl().parseMove(n)}function S0(n){return new wl().parseQuantumMove(n)}const Zr=Symbol("startCharIndex"),$r=Symbol("endCharIndex");function Te(n,t,e){const i=n;return i[Zr]=t,i[$r]=e,i}function M0(n,t){return Zr in n&&(t[Zr]=n[Zr]),$r in n&&(t[$r]=n[$r]),t}var ke,At,Er;class wl{constructor(){te(this,ke,"");te(this,At,0);te(this,Er,[])}parseAlg(t){Zt(this,ke,t),Zt(this,At,0);const e=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();const i=Array.from(e.childAlgNodes());if(O(this,Er).length>0)for(const o of O(this,Er).reverse())i.push(o);const r=new wt(i),{[Zr]:s,[$r]:a}=e;return Te(r,s,a),r}parseMove(t){Zt(this,ke,t),Zt(this,At,0);const e=this.parseMoveImpl();return this.mustBeAtEndOfInput(),e}parseQuantumMove(t){Zt(this,ke,t),Zt(this,At,0);const e=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),e}mustBeAtEndOfInput(){if(O(this,At)!==O(this,ke).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let e=O(this,At),i=O(this,At);const r=new d0;let s=!1;const a=o=>{if(s)throw new Error(`Unexpected character at index ${o}. Are you missing a space?`)};t:for(;O(this,At)<O(this,ke).length;){const o=O(this,At);if(t.includes(O(this,ke)[O(this,At)]))return Te(r.toAlg(),e,i);if(this.tryConsumeNext(" ")){s=!1,r.experimentalNumAlgNodes()===0&&(e=O(this,At));continue t}else if(p0.test(O(this,ke)[O(this,At)])){a(o);const l=this.parseMoveImpl();r.push(l),s=!0,i=O(this,At);continue t}else if(this.tryConsumeNext("(")){a(o);const l=this.tryRegex(_0);if(l){const c=l[1],u=O(this,At),d=this.parseRegex(v0),h=Te(new D(new Mn("U_SQ_"),parseInt(c)),o+1,o+1+c.length),m=Te(new D(new Mn("D_SQ_"),parseInt(d[1])),u,O(this,At)-1),g=Te(new wt([h,m]),o+1,O(this,At)-1);r.push(Te(new Qe(g),o,O(this,At))),s=!0,i=O(this,At);continue t}else{const c=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");const u=this.parseAmount();r.push(Te(new Qe(c,u),o,O(this,At))),s=!0,i=O(this,At);continue t}}else if(this.tryConsumeNext("^")){this.mustConsumeNext("(");const l=this.parseAlgWithStopping([")"]);this.popNext();const c=new Qe(l,-1),u=new Fe;c.experimentalNISSPlaceholder=u,u.experimentalNISSGrouping=c,O(this,Er).push(c),r.push(u)}else if(this.tryConsumeNext("[")){a(o);const l=this.parseAlgWithStopping([",",":"]),c=this.popNext(),u=this.parseAlgWithStopping(["]"]);this.mustConsumeNext("]");let d;switch(c){case":":{d=Te(new Xe(l,u),o,O(this,At)),s=!0,i=O(this,At);break}case",":{d=Te(new We(l,u),o,O(this,At)),s=!0,i=O(this,At);break}default:throw new Error("unexpected parsing error")}const h=O(this,At),m=this.parseAmount();if(m===1)r.push(d);else{const g=Te(new wt([d]),o,h),v=Te(new Qe(g,m),o,O(this,At));r.push(v)}s=!0,i=O(this,At);continue t}else if(this.tryConsumeNext(`
`)){r.push(Te(new Hn,o,O(this,At))),s=!1,i=O(this,At);continue t}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){a(o);const[l]=this.parseRegex(g0);r.push(Te(new Vi(l),o,O(this,At))),s=!1,i=O(this,At);continue t}else{r.push(Te(new D("_SLASH_"),o,O(this,At))),s=!0,i=O(this,At);continue t}else if(this.tryConsumeNext(".")){a(o),r.push(Te(new Fe,o,O(this,At))),s=!0,i=O(this,At);continue t}else throw new Error(`Unexpected character: ${this.popNext()}`)}if(O(this,At)!==O(this,ke).length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return Te(r.toAlg(),e,i)}parseQuantumMoveImpl(){const[,,,t,e,i]=this.parseRegex(m0);return new Mn(i,Gs(e,void 0),Gs(t,void 0))}parseMoveImpl(){const t=O(this,At);if(this.tryConsumeNext("/"))return Te(new D("_SLASH_"),t,O(this,At));let e=this.parseQuantumMoveImpl(),[i,r]=this.parseAmountAndTrackEmptyAbsAmount();const s=this.parseMoveSuffix();if(s){if(i<0)throw new Error("uh-oh");if((s==="++"||s==="--")&&i!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((s==="++"||s==="--")&&!r)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((s==="+"||s==="-")&&r)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");s.startsWith("+")&&(e=e.modified({family:`${e.family}_${s==="+"?"PLUS":"PLUSPLUS"}_`})),s.startsWith("-")&&(e=e.modified({family:`${e.family}_${s==="-"?"PLUS":"PLUSPLUS"}_`}),i*=-1)}return Te(new D(e,i),t,O(this,At))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){const t=O(this,At),[,e,i]=this.parseRegex(qc);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount can only start with 0 if it's exactly the digit 0.`);return[Gs(e,1)*(i==="'"?-1:1),!e]}parseAmount(){const t=O(this,At),[,e,i]=this.parseRegex(qc);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount number can only start with 0 if it's exactly the digit 0.`);return Gs(e,1)*(i==="'"?-1:1)}parseRegex(t){const e=t.exec(this.remaining());if(e===null)throw new Error("internal parsing error");return Zt(this,At,O(this,At)+e[0].length),e}tryRegex(t){const e=t.exec(this.remaining());return e===null?null:(Zt(this,At,O(this,At)+e[0].length),e)}remaining(){return O(this,ke).slice(O(this,At))}popNext(){const t=O(this,ke)[O(this,At)];return Ta(this,At)._++,t}tryConsumeNext(t){return O(this,ke)[O(this,At)]===t?(Ta(this,At)._++,!0):!1}mustConsumeNext(t){const e=this.popNext();if(e!==t)throw new Error(`expected \`${t}\` while parsing, encountered ${e}`);return e}}ke=new WeakMap,At=new WeakMap,Er=new WeakMap;const Yc=new Set;function Xu(n){Yc.has(n)||(console.warn(n),Yc.add(n))}class tl{constructor(t,e=1){pe(this,"quantum");pe(this,"amount");if(this.quantum=t,this.amount=e,!Number.isInteger(this.amount)||this.amount<f0||this.amount>Qo)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${jo}.`)}suffix(){let t="";const e=Math.abs(this.amount);return e!==1&&(t+=e),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,e){const i=Math.abs(this.amount),r=c0(t,this.amount<0);for(let s=0;s<i;s++)yield*this.quantum.experimentalExpand(r,e)}}var Bn,Re,Ce;const la=class la extends Hu{constructor(e,i,r){super();te(this,Bn);te(this,Re);te(this,Ce);if(Zt(this,Bn,e),Zt(this,Re,i??null),Zt(this,Ce,r??null),Object.freeze(this),O(this,Re)!==null&&(!Number.isInteger(O(this,Re))||O(this,Re)<1||O(this,Re)>Qo))throw new Error(`QuantumMove inner layer must be a positive integer below ${jo}.`);if(O(this,Ce)!==null&&(!Number.isInteger(O(this,Ce))||O(this,Ce)<1||O(this,Ce)>Qo))throw new Error(`QuantumMove outer layer must be a positive integer below ${jo}.`);if(O(this,Ce)!==null&&O(this,Re)!==null&&O(this,Re)<=O(this,Ce))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(O(this,Ce)!==null&&O(this,Re)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(e){return S0(e)}modified(e){return new la(e.family??O(this,Bn),e.innerLayer??O(this,Re),e.outerLayer??O(this,Ce))}isIdentical(e){const i=e;return e.is(la)&&O(this,Bn)===O(i,Bn)&&O(this,Re)===O(i,Re)&&O(this,Ce)===O(i,Ce)}get family(){return O(this,Bn)}get outerLayer(){return O(this,Ce)}get innerLayer(){return O(this,Re)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(e){let i=O(this,Bn);return O(this,Re)!==null&&(i=String(O(this,Re))+i,O(this,Ce)!==null&&(i=`${String(O(this,Ce))}-${i}`)),i}};Bn=new WeakMap,Re=new WeakMap,Ce=new WeakMap;let Mn=la;var Ae,ca,as,el;const Ri=class Ri extends fi{constructor(...e){super();te(this,as);te(this,Ae);te(this,ca);if(typeof e[0]=="string")if(e[1]??null){Zt(this,Ae,new tl(Mn.fromString(e[0]),e[1]));return}else return Ri.fromString(e[0]);Zt(this,Ae,new tl(e[0],e[1]))}isIdentical(e){const i=e.as(Ri);return!!i&&O(this,Ae).isIdentical(O(i,Ae))}invert(){return M0(this,new Ri(O(this,Ae).quantum,nn(this,as,el).call(this)?this.amount:-this.amount))}*experimentalExpand(e=ue.Forwards){e===ue.Forwards?yield this:yield this.modified({amount:-this.amount})}get quantum(){return O(this,Ae).quantum}modified(e){return new Ri(O(this,Ae).quantum.modified(e),e.amount??this.amount)}static fromString(e){return x0(e)}get amount(){return O(this,Ae).amount}get type(){return Xu("deprecated: type"),"blockMove"}get family(){return O(this,Ae).quantum.family??void 0}get outerLayer(){return O(this,Ae).quantum.outerLayer??void 0}get innerLayer(){return O(this,Ae).quantum.innerLayer??void 0}toString(e){if((e==null?void 0:e.notation)!=="LGN"){if(nn(this,as,el).call(this))return"/";if(this.family.endsWith("_PLUS_"))return O(this,Ae).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){const i=Math.abs(this.amount);return O(this,Ae).quantum.toString().slice(0,-10)+(i===1?"":i)+(this.amount<0?"--":"++")}}return O(this,Ae).quantum.toString(e)+O(this,Ae).suffix()}};Ae=new WeakMap,ca=new WeakMap,as=new WeakSet,el=function(){return this.isIdentical(O(this,ca)??Zt(this,ca,new Ri("_SLASH_")))};let D=Ri;class y0{constructor(){pe(this,"quantumU_SQ_",null);pe(this,"quantumD_SQ_",null)}format(t,e){if((e==null?void 0:e.notation)==="LGN"||t.amount!==1)return null;const i=this.tuple(t);return i?`(${i.map(r=>r.amount).join(", ")})`:null}tuple(t){var i,r;if(t.amount!==1)return null;this.quantumU_SQ_||(this.quantumU_SQ_=new Mn("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new Mn("D_SQ_"));const e=t.alg;if(e.experimentalNumChildAlgNodes()===2){const[s,a]=e.childAlgNodes();if((i=s.as(D))!=null&&i.quantum.isIdentical(this.quantumU_SQ_)&&((r=a.as(D))!=null&&r.quantum.isIdentical(this.quantumD_SQ_)))return[s,a]}return null}}const no=new y0;var Ge,ua,qu;const ts=class ts extends fi{constructor(e,i){super();te(this,ua);te(this,Ge);pe(this,"experimentalNISSPlaceholder");const r=is(e);Zt(this,Ge,new tl(r,i))}isIdentical(e){const i=e;return e.is(ts)&&O(this,Ge).isIdentical(O(i,Ge))}get alg(){return O(this,Ge).quantum}get amount(){return O(this,Ge).amount}get experimentalRepetitionSuffix(){return O(this,Ge).suffix()}invert(){const e=no.tuple(this);if(e){const[i,r]=e;return new ts(new wt([i.invert(),r.invert()]))}return new ts(O(this,Ge).quantum,-O(this,Ge).amount)}*experimentalExpand(e=ue.Forwards,i){i??(i=1/0),i===0?yield e===ue.Forwards?this:this.invert():yield*O(this,Ge).experimentalExpand(e,i-1)}static fromString(){throw new Error("unimplemented")}toString(e){return no.format(this,e)??`${nn(this,ua,qu).call(this,e)}${O(this,Ge).suffix()}`}experimentalAsSquare1Tuple(){return no.tuple(this)}};Ge=new WeakMap,ua=new WeakSet,qu=function(e){const i=O(this,Ge).quantum.toString(e),r=this.alg.childAlgNodes(),{value:s}=r.next();return r.next().done&&(s!=null&&s.is(We)||s!=null&&s.is(Xe))?i:`(${i})`};let Qe=ts;function Fn(n,t){return n instanceof t}function E0(n){return Fn(n,Qe)||Fn(n,Vi)||Fn(n,We)||Fn(n,Xe)||Fn(n,D)||Fn(n,Hn)||Fn(n,Fe)}function Yu(n,t,e){if(t.is(Qe))return n.traverseGrouping(t,e);if(t.is(D))return n.traverseMove(t,e);if(t.is(We))return n.traverseCommutator(t,e);if(t.is(Xe))return n.traverseConjugate(t,e);if(t.is(Fe))return n.traversePause(t,e);if(t.is(Hn))return n.traverseNewline(t,e);if(t.is(Vi))return n.traverseLineComment(t,e);throw new Error("unknown AlgNode")}function Ku(n){if(n.is(Qe)||n.is(D)||n.is(We)||n.is(Xe)||n.is(Fe)||n.is(Hn)||n.is(Vi))return n;throw new Error("internal error: expected AlgNode")}class Tl{traverseAlgNode(t,e){return Yu(this,t,e)}traverseIntoAlgNode(t,e){return Ku(this.traverseAlgNode(t,e))}}class Kx extends Tl{traverseAlgNode(t){return Yu(this,t,void 0)}traverseIntoAlgNode(t){return Ku(this.traverseAlgNode(t))}}function Zu(n,t){const e=new n(...t??[]);return e.traverseAlg.bind(e)}const w0="any-direction";class $u{constructor(t={}){this.config=t}cancelQuantum(){const{cancel:t}=this.config;return t===!0?w0:t===!1?"none":(t==null?void 0:t.directional)??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){const{cancel:t}=this.config;return t===!0||t===!1?"canonical-centered":t!=null&&t.puzzleSpecificModWrap?t==null?void 0:t.puzzleSpecificModWrap:(t==null?void 0:t.directional)==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){var t;return((t=this.config.puzzleLoader)==null?void 0:t.puzzleSpecificSimplifyOptions)??this.config.puzzleSpecificSimplifyOptions}}function T0(n,t){return n*Math.sign(t.amount)>=0}function b0(n,t,e=0){return((n-e)%t+t)%t+e}function A0(n,t,e){var l;const i=new $u(e),r=Array.from(n.childAlgNodes());let s=[t];function a(){return new wt([...r,...s])}function o(c){var g;if(i.cancelPuzzleSpecificModWrap()==="none")return c;const u=(g=i.puzzleSpecificSimplifyOptions())==null?void 0:g.quantumMoveOrder;if(!u)return c;const d=u(t.quantum);let h;switch(i.cancelPuzzleSpecificModWrap()){case"gravity":{h=-Math.floor((d-(c.amount<0?0:1))/2);break}case"canonical-centered":{h=-Math.floor((d-1)/2);break}case"canonical-positive":{h=0;break}case"preserve-sign":{h=c.amount<0?1-d:0;break}default:throw new Error("Unknown mod wrap")}const m=b0(c.amount,d,h);return c.modified({amount:m})}if(i.cancelAny()){let c;const u=(l=i.puzzleSpecificSimplifyOptions())==null?void 0:l.axis;if(u)c=v=>u.areQuantumMovesSameAxis(t.quantum,v.quantum);else{const v=t.quantum.toString();c=p=>p.quantum.toString()===v}const d=i.cancelQuantum()==="same-direction",h=new Map;h.set(t.quantum.toString(),Math.sign(t.amount));let m;for(m=r.length-1;m>=0;m--){const v=r[m].as(D);if(!v||!c(v))break;const p=v.quantum.toString();if(d){const f=h.get(p);if(f&&!T0(f,v))break;h.set(p,Math.sign(v.amount))}}const g=[...r.splice(m+1),t];if(u)s=u.simplifySameAxisMoves(g,i.cancelPuzzleSpecificModWrap()!=="none");else{const v=g.reduce((p,f)=>p+f.amount,0);if(h.size!==1)throw new Error("Internal error: multiple quantums when one was expected");s=[new D(t.quantum,v)]}}return s=s.map(c=>o(c)).filter(c=>c.amount!==0),a()}function R0(n,t,e){const i=t.as(D);return i?A0(n,i,e):new wt([...n.childAlgNodes(),t])}var ha,je,nl,qr,il;class C0 extends Tl{constructor(){super(...arguments);te(this,je);te(this,ha)}*traverseAlg(e,i){if(i.depth===0){yield*e.childAlgNodes();return}let r=[];const s=nn(this,je,qr).call(this,i);for(const a of e.childAlgNodes())for(const o of this.traverseAlgNode(a,s))r=Array.from(R0(new wt(r),o,s).childAlgNodes());for(const a of r)yield a}*traverseGrouping(e,i){if(i.depth===0){yield e;return}if(e.amount===0)return;const r=new Qe(this.traverseAlg(e.alg,nn(this,je,qr).call(this,i)),e.amount);if(r.alg.experimentalIsEmpty())return;const s=nn(this,je,nl).call(this).get(e);s&&(r.experimentalNISSPlaceholder=s,s.experimentalNISSGrouping=r),yield r}*traverseMove(e,i){yield e}*traverseCommutator(e,i){if(i.depth===0){yield e;return}const r=nn(this,je,qr).call(this,i),s=new We(this.traverseAlg(e.A,r),this.traverseAlg(e.B,r));s.A.experimentalIsEmpty()||s.B.experimentalIsEmpty()||s.A.isIdentical(s.B)||s.A.isIdentical(s.B.invert())||nn(this,je,il).call(this,s.A,s.B,i)||(yield s)}*traverseConjugate(e,i){if(i.depth===0){yield e;return}const r=nn(this,je,qr).call(this,i),s=new Xe(this.traverseAlg(e.A,r),this.traverseAlg(e.B,r));if(!s.B.experimentalIsEmpty()){if(s.A.experimentalIsEmpty()||s.A.isIdentical(s.B)||s.A.isIdentical(s.B.invert())||nn(this,je,il).call(this,s.A,s.B,i)){yield*e.B.childAlgNodes();return}yield s}}*traversePause(e,i){if(e.experimentalNISSGrouping){const r=new Fe;nn(this,je,nl).call(this).set(e.experimentalNISSGrouping,r),yield r}else yield e}*traverseNewline(e,i){yield e}*traverseLineComment(e,i){yield e}}ha=new WeakMap,je=new WeakSet,nl=function(){return O(this,ha)??Zt(this,ha,new Map)},qr=function(e){return{...e,depth:e.depth?e.depth-1:null}},il=function(e,i,r){var s,a,o,l;if(e.experimentalNumChildAlgNodes()===1&&i.experimentalNumChildAlgNodes()===1){const c=(s=Array.from(e.childAlgNodes())[0])==null?void 0:s.as(D),u=(a=Array.from(i.childAlgNodes())[0])==null?void 0:a.as(D);if(!(c&&u))return!1;if(u.quantum.isIdentical(c.quantum)||(l=(o=new $u(r).puzzleSpecificSimplifyOptions())==null?void 0:o.axis)!=null&&l.areQuantumMovesSameAxis(c.quantum,u.quantum))return!0}return!1};const P0=Zu(C0);function Kc(n){if(!n)return[];if(Fn(n,wt))return n.childAlgNodes();if(typeof n=="string")return Wu(n).childAlgNodes();const t=n;if(typeof t[Symbol.iterator]=="function")return t;throw new Error("Invalid AlgNode")}function is(n){return Fn(n,wt)?n:new wt(n)}var Ve;const Ci=class Ci extends fi{constructor(e){super();te(this,Ve);Zt(this,Ve,Array.from(Kc(e)));for(const i of O(this,Ve))if(!E0(i))throw new Error("An alg can only contain alg nodes.")}isIdentical(e){const i=e;if(!e.is(Ci))return!1;const r=Array.from(O(this,Ve)),s=Array.from(O(i,Ve));if(r.length!==s.length)return!1;for(let a=0;a<r.length;a++)if(!r[a].isIdentical(s[a]))return!1;return!0}invert(){return new Ci(h0(Array.from(O(this,Ve)).map(e=>e.invert())))}*experimentalExpand(e=ue.Forwards,i){i??(i=1/0);for(const r of u0(O(this,Ve),e))yield*r.experimentalExpand(e,i)}expand(e){return new Ci(this.experimentalExpand(ue.Forwards,(e==null?void 0:e.depth)??1/0))}*experimentalLeafMoves(){for(const e of this.experimentalExpand())e.is(D)&&(yield e)}concat(e){return new Ci(Array.from(O(this,Ve)).concat(Array.from(Kc(e))))}experimentalIsEmpty(){for(const e of O(this,Ve))return!1;return!0}static fromString(e){return Wu(e)}units(){return this.childAlgNodes()}*childAlgNodes(){for(const e of O(this,Ve))yield e}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(O(this,Ve)).length}get type(){return Xu("deprecated: type"),"sequence"}toString(e){var s,a;let i="",r=null;for(const o of O(this,Ve)){r&&(i+=D0(r,o));const l=(s=o.as(Fe))==null?void 0:s.experimentalNISSGrouping;if(l){if(l.amount!==-1)throw new Error("Invalid NISS Grouping amount!");i+=`^(${l.alg.toString(e)})`}else(a=o.as(Qe))!=null&&a.experimentalNISSPlaceholder||(i+=o.toString(e));r=o}return i}experimentalSimplify(e){return new Ci(P0(this,e??{}))}simplify(e){return this.experimentalSimplify(e)}};Ve=new WeakMap;let wt=Ci;function D0(n,t){var e;return n.is(Hn)||t.is(Hn)||(e=t.as(Qe))!=null&&e.experimentalNISSPlaceholder?"":n.is(Vi)&&!t.is(Hn)?`
`:" "}new wt([new D("R",1),new D("U",1),new D("R",-1),new D("U",1),new D("R",1),new D("U",-2),new D("R",-1)]),new wt([new D("R",1),new D("U",2),new D("R",-1),new D("U",-1),new D("R",1),new D("U",-1),new D("R",-1)]),new wt([new We(new wt([new D("R",1),new D("U",1),new D("R",-2)]),new wt([new Xe(new wt([new D("R",1)]),new wt([new D("U",1)]))]))]),new wt([new D("R",1),new D("U",-1),new D("L",-1),new D("U",1),new D("R",-1),new D("U",-1),new D("L",1),new D("U",1)]),new wt([new D("x",-1),new We(new wt([new Xe(new wt([new D("R",1)]),new wt([new D("U",-1)]))]),new wt([new D("D",1)])),new We(new wt([new Xe(new wt([new D("R",1)]),new wt([new D("U",1)]))]),new wt([new D("D",1)])),new D("x",1)]),new wt([new Xe(new wt([new D("F",1)]),new wt([new We(new wt([new D("U",1)]),new wt([new D("R",1)]))]))]),new wt([new Xe(new wt([new D("R",2)]),new wt([new We(new wt([new D("F",2)]),new wt([new D("R",-1),new D("B",-1),new D("R",1)]))]))]),new wt([new D("F",1),new D("U",1),new D("R",1),new D("U",-1),new D("R",-1),new D("F",-1)]),new wt([new D("R",1),new D("U",1),new D("R",-1),new D("U",-1),new D("R",-1),new D("F",1),new D("R",2),new D("U",-1),new D("R",-1),new D("U",-1),new D("R",1),new D("U",1),new D("R",-1),new D("F",-1)]),new wt([new Xe(new wt([new D("F",1)]),new wt([new Qe(new wt([new We(new wt([new D("R",1)]),new wt([new D("U",1)]))]),3)]))]),new wt([new Fe,new Fe,new Fe]);var Ju=2**53,L0=2097152,I0=11,io=new Uint32Array(2);function U0(){globalThis.crypto.getRandomValues(io);const n=io[0],t=io[1];return Math.floor(n*L0)+(t>>I0)}function N0(n){if(typeof n!="number"||n<0||Math.floor(n)!==n)throw new Error("randomUIntBelow() not called with a positive integer value.");if(n>Ju)throw new Error(`Called randomUIntBelow() with max === ${n}, which is larger than JavaScript can handle with integer precision.`)}function Qu(n){N0(n);for(var t,e,i;;)if(t=U0(),e=Math.floor(t/n),i=e*n,i<=Ju-n)return t-i}function Zx(n){return n[Qu(n.length)]}const ju=["U","R","D","L","ALL"],O0=["UR","DR","DL","UL"].concat(ju);function th(){let n=0;function t(){const r=Qu(12);return r!==0&&n++,r<=6?`${r}+`:`${12-r}-`}const e=[];function i(r){for(const s of r)e.push(`${s}${t()}`)}return i(O0),e.push("y2"),i(ju),n<2?th():e.join(" ")}async function F0(n){var e;const t=(e=globalThis.process)==null?void 0:e.getBuiltinModule;return t?t(n):import(n)}function B0(n){const t=new WeakMap;return{postMessage:n.postMessage.bind(n),addEventListener:(e,i)=>{const r=s=>{"handleEvent"in i?i.handleEvent({data:s}):i({data:s})};n.on("message",r),t.set(i,r)},removeEventListener:(e,i)=>{const r=t.get(i);r&&(n.off("message",r),t.delete(i))},nodeWorker:n,terminate:()=>{n.terminate()}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const eh=Symbol("Comlink.proxy"),z0=Symbol("Comlink.endpoint"),k0=Symbol("Comlink.releaseProxy"),ro=Symbol("Comlink.finalizer"),$s=Symbol("Comlink.thrown"),nh=n=>typeof n=="object"&&n!==null||typeof n=="function",G0={canHandle:n=>nh(n)&&n[eh],serialize(n){const{port1:t,port2:e}=new MessageChannel;return rh(n,t),[e,[e]]},deserialize(n){return n.start(),ah(n)}},V0={canHandle:n=>nh(n)&&$s in n,serialize({value:n}){let t;return n instanceof Error?t={isError:!0,value:{message:n.message,name:n.name,stack:n.stack}}:t={isError:!1,value:n},[t,[]]},deserialize(n){throw n.isError?Object.assign(new Error(n.value.message),n.value):n.value}},ih=new Map([["proxy",G0],["throw",V0]]);function H0(n,t){for(const e of n)if(t===e||e==="*"||e instanceof RegExp&&e.test(t))return!0;return!1}function rh(n,t=globalThis,e=["*"]){t.addEventListener("message",function i(r){if(!r||!r.data)return;if(!H0(e,r.origin)){console.warn(`Invalid origin '${r.origin}' for comlink proxy`);return}const{id:s,type:a,path:o}=Object.assign({path:[]},r.data),l=(r.data.argumentList||[]).map(Ai);let c;try{const u=o.slice(0,-1).reduce((h,m)=>h[m],n),d=o.reduce((h,m)=>h[m],n);switch(a){case"GET":c=d;break;case"SET":u[o.slice(-1)[0]]=Ai(r.data.value),c=!0;break;case"APPLY":c=d.apply(u,l);break;case"CONSTRUCT":{const h=new d(...l);c=Z0(h)}break;case"ENDPOINT":{const{port1:h,port2:m}=new MessageChannel;rh(n,m),c=K0(h,[h])}break;case"RELEASE":c=void 0;break;default:return}}catch(u){c={value:u,[$s]:0}}Promise.resolve(c).catch(u=>({value:u,[$s]:0})).then(u=>{const[d,h]=ia(u);t.postMessage(Object.assign(Object.assign({},d),{id:s}),h),a==="RELEASE"&&(t.removeEventListener("message",i),sh(t),ro in n&&typeof n[ro]=="function"&&n[ro]())}).catch(u=>{const[d,h]=ia({value:new TypeError("Unserializable return value"),[$s]:0});t.postMessage(Object.assign(Object.assign({},d),{id:s}),h)})}),t.start&&t.start()}function W0(n){return n.constructor.name==="MessagePort"}function sh(n){W0(n)&&n.close()}function ah(n,t){const e=new Map;return n.addEventListener("message",function(r){const{data:s}=r;if(!s||!s.id)return;const a=e.get(s.id);if(a)try{a(s)}finally{e.delete(s.id)}}),rl(n,e,[],t)}function Vs(n){if(n)throw new Error("Proxy has been released and is not useable")}function oh(n){return hr(n,new Map,{type:"RELEASE"}).then(()=>{sh(n)})}const ea=new WeakMap,na="FinalizationRegistry"in globalThis&&new FinalizationRegistry(n=>{const t=(ea.get(n)||0)-1;ea.set(n,t),t===0&&oh(n)});function X0(n,t){const e=(ea.get(t)||0)+1;ea.set(t,e),na&&na.register(n,t,n)}function q0(n){na&&na.unregister(n)}function rl(n,t,e=[],i=function(){}){let r=!1;const s=new Proxy(i,{get(a,o){if(Vs(r),o===k0)return()=>{q0(s),oh(n),t.clear(),r=!0};if(o==="then"){if(e.length===0)return{then:()=>s};const l=hr(n,t,{type:"GET",path:e.map(c=>c.toString())}).then(Ai);return l.then.bind(l)}return rl(n,t,[...e,o])},set(a,o,l){Vs(r);const[c,u]=ia(l);return hr(n,t,{type:"SET",path:[...e,o].map(d=>d.toString()),value:c},u).then(Ai)},apply(a,o,l){Vs(r);const c=e[e.length-1];if(c===z0)return hr(n,t,{type:"ENDPOINT"}).then(Ai);if(c==="bind")return rl(n,t,e.slice(0,-1));const[u,d]=Zc(l);return hr(n,t,{type:"APPLY",path:e.map(h=>h.toString()),argumentList:u},d).then(Ai)},construct(a,o){Vs(r);const[l,c]=Zc(o);return hr(n,t,{type:"CONSTRUCT",path:e.map(u=>u.toString()),argumentList:l},c).then(Ai)}});return X0(s,n),s}function Y0(n){return Array.prototype.concat.apply([],n)}function Zc(n){const t=n.map(ia);return[t.map(e=>e[0]),Y0(t.map(e=>e[1]))]}const lh=new WeakMap;function K0(n,t){return lh.set(n,t),n}function Z0(n){return Object.assign(n,{[eh]:!0})}function ia(n){for(const[t,e]of ih)if(e.canHandle(n)){const[i,r]=e.serialize(n);return[{type:"HANDLER",name:t,value:i},r]}return[{type:"RAW",value:n},lh.get(n)||[]]}function Ai(n){switch(n.type){case"HANDLER":return ih.get(n.name).deserialize(n.value);case"RAW":return n.value}}function hr(n,t,e,i){return new Promise(r=>{const s=$0();t.set(s,r),n.start&&n.start(),n.postMessage(Object.assign({id:s},e),i)})}function $0(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const J0=typeof globalThis.Worker>"u"&&typeof globalThis.WorkerNavigator>"u";async function Q0(n,t){const{Worker:e}=await F0("node:worker_threads"),i=new e(n,t);return i.unref(),B0(i)}async function j0(n,t){let e;return J0?Q0(n):(e=new globalThis.Worker(n,{type:t?t.type:void 0}),e)}const tv="modulepreload",ev=function(n){return"/"+n},$c={},ie=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(l=>{if(l=ev(l),l in $c)return;$c[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":tv,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},nv={expose:!0};async function iv(){return import.meta.resolve("./search-worker-entry.js")}function rv(){return new URL("data:text/javascript;base64,aW1wb3J0IHsgbm9kZUVuZHBvaW50UG9ydCB9IGZyb20gIi4uLy4uL3ZlbmRvci9hcGFjaGUvY29tbGluay1ldmVyeXdoZXJlL2luc2lkZS9pbmRleCI7DQppbXBvcnQgeyBleHBvc2VBUEkgfSBmcm9tICIuL3dvcmtlci1ndWFyZCI7DQoNCmlmIChleHBvc2VBUEkuZXhwb3NlKSB7DQogIChhc3luYyAoKSA9PiB7DQogICAgYXdhaXQgaW1wb3J0KCIuLi9pbnNpZGUiKTsNCg0KICAgIC8vIFdvcmthcm91bmQgZm9yIGBub2RlYA0KICAgIGNvbnN0IG1lc3NhZ2VQb3J0ID0gZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZQ0KICAgICAgPyBnbG9iYWxUaGlzDQogICAgICA6IGF3YWl0IG5vZGVFbmRwb2ludFBvcnQoKTsNCiAgICBtZXNzYWdlUG9ydC5wb3N0TWVzc2FnZSgiY29tbGluay1leHBvc2VkIik7IC8vIFRPRE86IHJlbW92ZSB0aGlzDQogIH0pKCk7DQp9DQoNCi8vIFdvcmthcm91bmQgZm9yIGBlc2J1aWxkYDogaHR0cHM6Ly9naXRodWIuY29tL2V2YW53L2VzYnVpbGQvaXNzdWVzLzMxMiNpc3N1ZWNvbW1lbnQtMTA5MjE5NTc3OA0KZXhwb3J0IGNvbnN0IFdPUktFUl9FTlRSWV9GSUxFX1VSTCA9IGltcG9ydC5tZXRhLnVybDsNCg==",import.meta.url)}async function sv(){return nv.expose=!1,(await ie(async()=>{const{WORKER_ENTRY_FILE_URL:n}=await import("./search-worker-entry-Bkad1JKl.js").then(t=>t.s);return{WORKER_ENTRY_FILE_URL:n}},[])).WORKER_ENTRY_FILE_URL}function av(){return new Worker(new URL("/assets/search-worker-entry-CiiqNvj2.js",import.meta.url),{type:"module"})}function ov(n){var t;try{const e=(t=globalThis.location)==null?void 0:t.origin,i=n.origin;return!!e&&!!i&&e!==i}catch{return!1}}async function so(n){const t=new URL(n,import.meta.url),e=ov(t);try{return Jc(t,e)}catch{return Jc(t,!e)}}async function Jc(n,t){return new Promise(async(e,i)=>{var r;try{n||i(new Error("Could not get worker entry file URL."));let s=n;if(t){const c=`import ${JSON.stringify(n.toString())};`,u=new Blob([c],{type:"text/javascript"});s=new URL(URL.createObjectURL(u))}const a=await j0(s,{type:"module"});(r=a.unref)==null||r.call(a);const o=c=>{i(c)},l=c=>{c==="comlink-exposed"?e(ch(a)):i(new Error(`wrong module instantiation message ${c}`))};a.nodeWorker?a.nodeWorker.once("message",l):(a.addEventListener("error",o,{once:!0}),a.addEventListener("message",c=>l(c.data),{once:!0}))}catch(s){i(s)}})}async function lv(){return new Promise(async(n,t)=>{try{const e=av(),i=s=>{t(s)},r=s=>{s==="comlink-exposed"?n(ch(e)):t(new Error(`wrong module instantiation message ${s}`))};e.addEventListener("error",i,{once:!0}),e.addEventListener("message",s=>r(s.data),{once:!0})}catch(e){t(e)}})}function ch(n){const t=ah(n),e=n.terminate.bind(n);return{insideAPI:t,outsideAPI:{terminate:e}}}async function cv(){const n=uv(),{insideAPI:t}=await n;return t.setDebugMeasurePerf(sl.logPerf),t.setScramblePrefetchLevel(sl.scramblePrefetchLevel),n}async function uv(){var e;((e=globalThis.location)==null?void 0:e.protocol)==="file:"&&console.warn("This current web page is loaded from the local filesystem (a URL that starts with `file://`). In this situation, `cubing.js` may be unable to generate scrambles or perform searches in some browsers. See: https://js.cubing.net/cubing/scramble/#file-server-required");function n(i){return`Module worker instantiation${i?` ${i}`:""} failed`}const t=[[async()=>so(await iv()),"using `import.meta.resolve(…)",null],[lv,"using inline `new URL(…, import.meta.url)`","may"],[async()=>so(rv()),"using `new URL(…, import.meta.url)`","will"],[async()=>so(await sv()),"using the `esbuild` workaround","will"]];for(const[i,r,s]of t)try{const a=await i();return s&&sl.showWorkerInstantiationWarnings&&console.warn(`Module worker instantiation required ${r}. \`cubing.js\` ${s} not support this fallback in the future.`),a}catch{console.warn(`${n(r)}, falling back.`)}throw new Error(`${n()}. There are no more fallbacks available.`)}let hv;function fv(){return hv??(hv=cv())}async function dv(n){switch(n){case"clock":return wt.fromString(await th())}const e=await pv(n);return wt.fromString(e)}async function pv(n){return(await fv()).insideAPI.randomScrambleStringForEvent(n)}const sl={logPerf:!0,scramblePrefetchLevel:"auto",disableStringWorker:!1,forceNewWorkerForEveryScramble:!1,showWorkerInstantiationWarnings:!0};function al(n,t,e){const i={};for(const r of n.orbits){const s=t[r.orbitName],a=e[r.orbitName];if(ra(r.numOrientations,a))i[r.orbitName]=s;else if(ra(r.numOrientations,s))i[r.orbitName]=a;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let l=0;l<r.numPieces;l++)o[l]=s.permutation[a.permutation[l]];i[r.orbitName]={permutation:o,orientationDelta:s.orientationDelta}}else{const l=new Array(r.numPieces);for(let c=0;c<r.numPieces;c++)l[c]=(s.orientationDelta[a.permutation[c]]+a.orientationDelta[c])%r.numOrientations,o[c]=s.permutation[a.permutation[c]];i[r.orbitName]={permutation:o,orientationDelta:l}}}}return i}function Qc(n,t,e){const i={};for(const r of n.orbits){const s=t[r.orbitName],a=e[r.orbitName];if(ra(r.numOrientations,a))i[r.orbitName]=s;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let c=0;c<r.numPieces;c++)o[c]=s.pieces[a.permutation[c]];const l={pieces:o,orientation:s.orientation};i[r.orbitName]=l}else{const l=new Array(r.numPieces),c=s.orientationMod?new Array(r.numPieces):void 0;for(let d=0;d<r.numPieces;d++){const h=a.permutation[d];let m=r.numOrientations;if(s.orientationMod){const g=s.orientationMod[h];c[d]=g,m=g||r.numOrientations}l[d]=(s.orientation[h]+a.orientationDelta[d])%m,o[d]=s.pieces[h]}const u={pieces:o,orientation:l};c&&(u.orientationMod=c),i[r.orbitName]=u}}}return i}const jc=new Map;function mv(n){const t=jc.get(n);if(t)return t;const e=new Array(n),i=new Array(n);for(let s=0;s<n;s++)e[s]=s,i[s]=0;const r={permutation:e,orientationDelta:i};return jc.set(n,r),r}function gv(n){const t={};for(const e of n.orbits)t[e.orbitName]=mv(e.numPieces);return t}function _v(n,t){function e(r,s){var c;const a=r.toString(),o=n.definition.moves[a];if(o)return Dr(n,o,s);const l=(c=n.definition.derivedMoves)==null?void 0:c[a];if(l)return Dr(n,n.algToTransformation(l).transformationData,s)}const i=e(t.quantum,t.amount)??e(t,1)??e(t.invert,-1);if(i)return i;throw new Error(`Invalid move for KPuzzle (${n.name()}): ${t}`)}class Fi{constructor(t,e){this.kpuzzle=t,this.patternData=e}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),patternData:this.patternData}}static fromTransformation(t){const e=Qc(t.kpuzzle.definition,t.kpuzzle.definition.defaultPattern,t.transformationData);return new Fi(t.kpuzzle,e)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(t.isIdentityTransformation())return new Fi(this.kpuzzle,this.patternData);const e=Qc(this.kpuzzle.definition,this.patternData,t.transformationData);return new Fi(this.kpuzzle,e)}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}isIdentical(t){return Mv(this.kpuzzle,this.patternData,t.patternData)}experimentalToTransformation(){if(!this.kpuzzle.canConvertDefaultPatternToUniqueTransformation())return null;const t={};for(const[e,i]of Object.entries(this.patternData)){const r={permutation:i.pieces,orientationDelta:i.orientation};t[e]=r}return new oi(this.kpuzzle,t)}experimentalIsSolved(t){if(!this.kpuzzle.definition.experimentalIsPatternSolved)throw new Error("`KPattern.experimentalIsPatternSolved()` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsPatternSolved(this,t)}}var Oi;const ri=class ri{constructor(t,e){te(this,Oi);this.kpuzzle=t,this.transformationData=e}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new ri(this.kpuzzle,uh(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return O(this,Oi)??Zt(this,Oi,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(t){const e=new ri(t,gv(t.definition));return Zt(e,Oi,!0),e}isIdentical(t){return xv(this.kpuzzle,this.transformationData,t.transformationData)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(this.kpuzzle!==t.kpuzzle)throw new Error(`Tried to apply a transformation for a KPuzzle (${t.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);return O(this,Oi)?new ri(this.kpuzzle,t.transformationData):O(t,Oi)?new ri(this.kpuzzle,this.transformationData):new ri(this.kpuzzle,al(this.kpuzzle.definition,this.transformationData,t.transformationData))}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}toKPattern(){return Fi.fromTransformation(this)}repetitionOrder(){return wv(this.kpuzzle.definition,this)}selfMultiply(t){return new ri(this.kpuzzle,Dr(this.kpuzzle,this.transformationData,t))}};Oi=new WeakMap;let oi=ri;function ra(n,t){t.permutation||console.log(t);const{permutation:e}=t,i=e.length;for(let r=0;r<i;r++)if(e[r]!==r)return!1;if(n>1){const{orientationDelta:r}=t;for(let s=0;s<i;s++)if(r[s]!==0)return!1}return!0}function vv(n,t,e,i={}){for(let r=0;r<n.numPieces;r++)if(!(i!=null&&i.ignorePieceOrientations)&&t.orientationDelta[r]!==e.orientationDelta[r]||!(i!=null&&i.ignorePiecePermutation)&&t.permutation[r]!==e.permutation[r])return!1;return!0}function xv(n,t,e){for(const i of n.definition.orbits)if(!vv(i,t[i.orbitName],e[i.orbitName]))return!1;return!0}function Sv(n,t,e,i={}){var r,s;for(let a=0;a<n.numPieces;a++)if(!(i!=null&&i.ignorePieceOrientations)&&(t.orientation[a]!==e.orientation[a]||(((r=t.orientationMod)==null?void 0:r[a])??0)!==(((s=e.orientationMod)==null?void 0:s[a])??0))||!(i!=null&&i.ignorePieceIndices)&&t.pieces[a]!==e.pieces[a])return!1;return!0}function Mv(n,t,e){for(const i of n.definition.orbits)if(!Sv(i,t[i.orbitName],e[i.orbitName]))return!1;return!0}function uh(n,t){const e={};for(const i of n.definition.orbits){const r=t[i.orbitName];if(ra(i.numOrientations,r))e[i.orbitName]=r;else if(i.numOrientations===1){const s=new Array(i.numPieces);for(let a=0;a<i.numPieces;a++)s[r.permutation[a]]=a;e[i.orbitName]={permutation:s,orientationDelta:r.orientationDelta}}else{const s=new Array(i.numPieces),a=new Array(i.numPieces);for(let o=0;o<i.numPieces;o++){const l=r.permutation[o];s[l]=o,a[l]=(i.numOrientations-r.orientationDelta[o]+i.numOrientations)%i.numOrientations}e[i.orbitName]={permutation:s,orientationDelta:a}}}return e}function Dr(n,t,e){if(e===1)return t;if(e<0)return Dr(n,uh(n,t),-e);if(e===0){const{transformationData:s}=n.identityTransformation();return s}let i=t;e!==2&&(i=Dr(n,t,Math.floor(e/2)));const r=al(n.definition,i,i);return e%2===0?r:al(n.definition,t,r)}class yv extends Tl{traverseAlg(t,e){let i=null;for(const r of t.childAlgNodes())i?i=i.applyTransformation(this.traverseAlgNode(r,e)):i=this.traverseAlgNode(r,e);return i??e.identityTransformation()}traverseGrouping(t,e){const i=this.traverseAlg(t.alg,e);return new oi(e,Dr(e,i.transformationData,t.amount))}traverseMove(t,e){return e.moveToTransformation(t)}traverseCommutator(t,e){const i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return i.applyTransformation(r).applyTransformation(i.invert()).applyTransformation(r.invert())}traverseConjugate(t,e){const i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return i.applyTransformation(r).applyTransformation(i.invert())}traversePause(t,e){return e.identityTransformation()}traverseNewline(t,e){return e.identityTransformation()}traverseLineComment(t,e){return e.identityTransformation()}}const Ev=Zu(yv);function ol(n,t){return t?ol(t,n%t):n}function wv(n,t){let e=1;for(const i of n.orbits){const r=t.transformationData[i.orbitName],s=new Array(i.numPieces);for(let a=0;a<i.numPieces;a++)if(!s[a]){let o=a,l=0,c=0;for(;s[o]=!0,l=l+r.orientationDelta[o],c=c+1,o=r.permutation[o],o!==a;);l!==0&&(c=c*i.numOrientations/ol(i.numOrientations,Math.abs(l))),e=e*c/ol(e,c)}}return e}var os,wr,fa;class Yn{constructor(t,e){pe(this,"experimentalPGNotation");te(this,os);te(this,wr,new Map);te(this,fa);this.definition=t,this.experimentalPGNotation=e==null?void 0:e.experimentalPGNotation}lookupOrbitDefinition(t){return O(this,os)||Zt(this,os,(()=>{const e={};for(const i of this.definition.orbits)e[i.orbitName]=i;return e})()),O(this,os)[t]}name(){return this.definition.name}identityTransformation(){return oi.experimentalConstructIdentity(this)}moveToTransformation(t){typeof t=="string"&&(t=new D(t));const e=t.toString(),i=O(this,wr).get(e);if(i)return new oi(this,i);if(this.experimentalPGNotation){const s=this.experimentalPGNotation.lookupMove(t);if(!s)throw new Error(`could not map to internal move: ${t}`);return O(this,wr).set(e,s),new oi(this,s)}const r=_v(this,t);return O(this,wr).set(e,r),new oi(this,r)}algToTransformation(t){return typeof t=="string"&&(t=new wt(t)),Ev(t,this)}toTransformation(t){var e,i;return typeof t=="string"?this.algToTransformation(t):(e=t==null?void 0:t.is)!=null&&e.call(t,wt)?this.algToTransformation(t):(i=t==null?void 0:t.is)!=null&&i.call(t,D)?this.moveToTransformation(t):t}defaultPattern(){return new Fi(this,this.definition.defaultPattern)}canConvertDefaultPatternToUniqueTransformation(){return O(this,fa)??Zt(this,fa,(()=>{for(const t of this.definition.orbits){const e=new Array(t.numPieces).fill(!1);for(const i of this.definition.defaultPattern[t.orbitName].pieces)e[i]=!0;for(const i of e)if(!i)return!1}return!0})())}}os=new WeakMap,wr=new WeakMap,fa=new WeakMap;class xr extends Promise{constructor(t){super(e=>{e()}),this._executor=t}static from(t){return new xr(e=>{e(t())})}static resolve(t){return new xr(e=>{e(t)})}static reject(t){return new xr((e,i)=>{i(t)})}then(t,e){return this._promise=this._promise||new Promise(this._executor),this._promise.then(t,e)}catch(t){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(t)}}function hh(n){return new xr(t=>{t(n())})}var Z=(n=>(n.Regular="Regular",n.Dim="Dim",n.Ignored="Ignored",n.OrientationStickers="OrientationStickers",n.Invisible="Invisible",n.Ignoriented="Ignoriented",n.IgnoreNonPrimary="IgnoreNonPrimary",n.PermuteNonPrimary="PermuteNonPrimary",n.OrientationWithoutPermutation="OrientationWithoutPermutation",n.ExperimentalOrientationWithoutPermutation2="ExperimentalOrientationWithoutPermutation2",n.Mystery="Mystery",n))(Z||{});class yi{constructor(t,e){pe(this,"stickerings",new Map);for(const i of t.definition.orbits)this.stickerings.set(i.orbitName,new Array(i.numPieces).fill(e))}}const En="regular",ve="ignored",or="oriented",Tv="experimentalOriented2",Vr="invisible",Si="dim",Hr="mystery",bv={Regular:{facelets:[En,En,En,En,En]},Ignored:{facelets:[ve,ve,ve,ve,ve]},OrientationStickers:{facelets:[or,or,or,or,or]},IgnoreNonPrimary:{facelets:[En,ve,ve,ve,ve]},Invisible:{facelets:[Vr,Vr,Vr,Vr,Vr]},PermuteNonPrimary:{facelets:[Si,En,En,En,En]},Dim:{facelets:[Si,Si,Si,Si,Si]},Ignoriented:{facelets:[Si,ve,ve,ve,ve]},OrientationWithoutPermutation:{facelets:[or,ve,ve,ve,ve]},ExperimentalOrientationWithoutPermutation2:{facelets:[Tv,ve,ve,ve,ve]},Mystery:{facelets:[Hr,Hr,Hr,Hr,Hr]}};function Av(n){return bv[n]}class fh extends yi{constructor(t){super(t,"Regular")}set(t,e){for(const[i,r]of this.stickerings.entries())for(let s=0;s<r.length;s++)t.stickerings.get(i)[s]&&(r[s]=e);return this}toStickeringMask(){const t={orbits:{}};for(const[e,i]of this.stickerings.entries()){const r=[],s={pieces:r};t.orbits[e]=s;for(const a of i)r.push(Av(a))}return t}}class dh{constructor(t){this.kpuzzle=t}and(t){const e=new yi(this.kpuzzle,!1);for(const i of this.kpuzzle.definition.orbits)t:for(let r=0;r<i.numPieces;r++){e.stickerings.get(i.orbitName)[r]=!0;for(const s of t)if(!s.stickerings.get(i.orbitName)[r]){e.stickerings.get(i.orbitName)[r]=!1;continue t}}return e}or(t){const e=new yi(this.kpuzzle,!1);for(const i of this.kpuzzle.definition.orbits)t:for(let r=0;r<i.numPieces;r++){e.stickerings.get(i.orbitName)[r]=!1;for(const s of t)if(s.stickerings.get(i.orbitName)[r]){e.stickerings.get(i.orbitName)[r]=!0;continue t}}return e}not(t){const e=new yi(this.kpuzzle,!1);for(const i of this.kpuzzle.definition.orbits)for(let r=0;r<i.numPieces;r++)e.stickerings.get(i.orbitName)[r]=!t.stickerings.get(i.orbitName)[r];return e}all(){return this.and(this.moves([]))}move(t){const e=this.kpuzzle.moveToTransformation(t),i=new yi(this.kpuzzle,!1);for(const r of this.kpuzzle.definition.orbits)for(let s=0;s<r.numPieces;s++)(e.transformationData[r.orbitName].permutation[s]!==s||e.transformationData[r.orbitName].orientationDelta[s]!==0)&&(i.stickerings.get(r.orbitName)[s]=!0);return i}moves(t){return t.map(e=>this.move(e))}orbits(t){const e=new yi(this.kpuzzle,!1);for(const i of t)e.stickerings.get(i).fill(!0);return e}orbitPrefix(t){const e=new yi(this.kpuzzle,!1);for(const i of this.kpuzzle.definition.orbits)i.orbitName.startsWith(t)&&e.stickerings.get(i.orbitName).fill(!0);return e}}const tu="Last Layer",eu="Last Slot",dn={"3x3x3":tu,megaminx:tu},ni={"3x3x3":eu,megaminx:eu},Rv={full:{groups:{"3x3x3":"Stickering",megaminx:"Stickering"}},OLL:{groups:dn},PLL:{groups:dn},LL:{groups:dn},EOLL:{groups:dn},COLL:{groups:dn},OCLL:{groups:dn},CPLL:{groups:dn},CLL:{groups:dn},EPLL:{groups:dn},ELL:{groups:dn},ZBLL:{groups:dn},LS:{groups:ni},LSOLL:{groups:ni},LSOCLL:{groups:ni},ELS:{groups:ni},CLS:{groups:ni},ZBLS:{groups:ni},VLS:{groups:ni},WVLS:{groups:ni},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},FirstBlock:{groups:{"3x3x3":"Roux"}},SecondBlock:{groups:{"3x3x3":"Roux"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},EODF:{groups:{"3x3x3":"Nautilus"}},G1:{groups:{"3x3x3":"FMC"}},L2C:{groups:{"4x4x4":"Reduction","5x5x5":"Reduction","6x6x6":"Reduction"}},PBL:{groups:{"2x2x2":"Ortega"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}};async function rs(n,t){return(await Cv(n,t)).toStickeringMask()}async function Cv(n,t){const e=await n.kpuzzle(),i=new fh(e),r=new dh(e),s=()=>r.move("U"),a=()=>r.or(r.moves(["U","D"])),o=()=>r.or(r.moves(["L","R"])),l=()=>r.not(o()),c=()=>r.not(s()),u=()=>r.orbitPrefix("CENTER"),d=N=>r.and([r.move(N),u()]),h=()=>r.orbitPrefix("EDGE"),m=N=>r.and([r.and(r.moves(N)),h()]),g=()=>r.or([r.orbitPrefix("CORNER"),r.orbitPrefix("C4RNER"),r.orbitPrefix("C5RNER")]),v=()=>r.or([l(),r.and([s(),h()])]),p=()=>r.and([s(),u()]),f=()=>r.and([r.and(r.moves(["F","R"])),h()]),T=()=>r.and([r.and(r.moves(["F","R"])),g(),r.not(s())]),w=()=>r.or([T(),f()]);function M(){i.set(c(),Z.Dim)}function k(){i.set(s(),Z.PermuteNonPrimary),i.set(p(),Z.Dim)}function b(){i.set(s(),Z.IgnoreNonPrimary),i.set(p(),Z.Regular)}function A(){i.set(s(),Z.Ignoriented),i.set(p(),Z.Dim)}switch(t){case"full":break;case"PLL":{M(),k();break}case"CLS":{M(),i.set(T(),Z.Regular),i.set(s(),Z.Ignoriented),i.set(r.and([s(),u()]),Z.Dim),i.set(r.and([s(),g()]),Z.IgnoreNonPrimary);break}case"OLL":{M(),b();break}case"EOLL":{M(),b(),i.set(r.and([s(),g()]),Z.Ignored);break}case"COLL":{M(),i.set(r.and([s(),h()]),Z.Ignoriented),i.set(r.and([s(),u()]),Z.Dim),i.set(r.and([s(),g()]),Z.Regular);break}case"OCLL":{M(),A(),i.set(r.and([s(),g()]),Z.IgnoreNonPrimary);break}case"CPLL":{M(),i.set(r.and([g(),s()]),Z.PermuteNonPrimary),i.set(r.and([r.not(g()),s()]),Z.Dim);break}case"CLL":{M(),i.set(r.not(r.and([g(),s()])),Z.Dim);break}case"EPLL":{M(),i.set(s(),Z.Dim),i.set(r.and([s(),h()]),Z.PermuteNonPrimary);break}case"ELL":{M(),i.set(s(),Z.Dim),i.set(r.and([s(),h()]),Z.Regular);break}case"ELS":{M(),b(),i.set(r.and([s(),g()]),Z.Ignored),i.set(f(),Z.Regular),i.set(T(),Z.Ignored);break}case"LL":{M();break}case"F2L":{i.set(s(),Z.Ignored);break}case"ZBLL":{M(),i.set(s(),Z.PermuteNonPrimary),i.set(p(),Z.Dim),i.set(r.and([s(),g()]),Z.Regular);break}case"ZBLS":{M(),i.set(w(),Z.Regular),b(),i.set(r.and([s(),g()]),Z.Ignored);break}case"VLS":{M(),i.set(w(),Z.Regular),b();break}case"WVLS":{M(),i.set(w(),Z.Regular),i.set(r.and([s(),h()]),Z.Ignoriented),i.set(r.and([s(),u()]),Z.Dim),i.set(r.and([s(),g()]),Z.IgnoreNonPrimary);break}case"LS":{M(),i.set(w(),Z.Regular),i.set(s(),Z.Ignored),i.set(p(),Z.Dim);break}case"LSOLL":{M(),b(),i.set(w(),Z.Regular);break}case"LSOCLL":{M(),A(),i.set(r.and([s(),g()]),Z.IgnoreNonPrimary),i.set(w(),Z.Regular);break}case"EO":{i.set(g(),Z.Ignored),i.set(h(),Z.OrientationWithoutPermutation);break}case"EOline":{i.set(g(),Z.Ignored),i.set(h(),Z.OrientationWithoutPermutation),i.set(r.and(r.moves(["D","M"])),Z.Regular);break}case"EOcross":{i.set(h(),Z.OrientationWithoutPermutation),i.set(r.move("D"),Z.Regular),i.set(g(),Z.Ignored);break}case"CMLL":{i.set(c(),Z.Dim),i.set(v(),Z.Ignored),i.set(r.and([s(),g()]),Z.Regular);break}case"L10P":{i.set(r.not(v()),Z.Dim),i.set(r.and([g(),s()]),Z.Regular);break}case"L6E":{i.set(r.not(v()),Z.Dim);break}case"L6EO":{i.set(r.not(v()),Z.Dim),i.set(v(),Z.ExperimentalOrientationWithoutPermutation2),i.set(r.and([u(),a()]),Z.ExperimentalOrientationWithoutPermutation2),i.set(r.and([r.move("M"),r.move("E")]),Z.Ignored);break}case"Daisy":{i.set(r.all(),Z.Ignored),i.set(u(),Z.Dim),i.set(r.and([r.move("D"),u()]),Z.Regular),i.set(r.and([r.move("U"),h()]),Z.IgnoreNonPrimary);break}case"Cross":{i.set(r.all(),Z.Ignored),i.set(u(),Z.Dim),i.set(r.and([r.move("D"),u()]),Z.Regular),i.set(r.and([r.move("D"),h()]),Z.Regular);break}case"2x2x2":{i.set(r.or(r.moves(["U","F","R"])),Z.Ignored),i.set(r.and([r.or(r.moves(["U","F","R"])),u()]),Z.Dim);break}case"2x2x3":{i.set(r.all(),Z.Dim),i.set(r.or(r.moves(["U","F","R"])),Z.Ignored),i.set(r.and([r.or(r.moves(["U","F","R"])),u()]),Z.Dim),i.set(r.and([r.move("F"),r.not(r.or(r.moves(["U","R"])))]),Z.Regular);break}case"G1":{i.set(r.all(),Z.ExperimentalOrientationWithoutPermutation2),i.set(r.or(r.moves(["E"])),Z.OrientationWithoutPermutation),i.set(r.and(r.moves(["E","S"])),Z.Ignored);break}case"L2C":{i.set(r.or(r.moves(["L","R","B","D"])),Z.Dim),i.set(r.not(u()),Z.Ignored);break}case"PBL":{i.set(r.all(),Z.Ignored),i.set(r.or(r.moves(["U","D"])),Z.PermuteNonPrimary);break}case"FirstBlock":{i.set(r.not(r.and([r.and(r.moves(["L"])),r.not(s())])),Z.Ignored),i.set(d("R"),Z.Dim);break}case"SecondBlock":{i.set(r.not(r.and([r.and(r.moves(["L"])),r.not(s())])),Z.Ignored),i.set(r.and([r.and(r.moves(["L"])),r.not(s())]),Z.Dim),i.set(r.and([r.and(r.moves(["R"])),r.not(s())]),Z.Regular);break}case"EODF":{M(),i.set(r.or([T(),r.and([s(),g()])]),Z.Ignored),i.set(r.or([r.and([s(),h()]),f()]),Z.OrientationWithoutPermutation),i.set(m(["D","F"]),Z.Regular),i.set(d("F"),Z.Regular);break}case"Void Cube":{i.set(u(),Z.Invisible);break}case"picture":case"invisible":{i.set(r.all(),Z.Invisible);break}case"centers-only":{i.set(r.not(u()),Z.Ignored);break}default:console.warn(`Unsupported stickering for ${n.id}: ${t}. Setting all pieces to dim.`),i.set(r.and(r.moves([])),Z.Dim)}return i}async function ya(n,t){const e=[],i=[];for(const[r,s]of Object.entries(Rv))s.groups&&(n in s.groups?e.push(r):t!=null&&t.use3x3x3Fallbacks&&"3x3x3"in s.groups&&i.push(r));return e.concat(i)}function he(n){let t=null;return()=>t??(t=n())}async function bl(n){return(await ie(()=>import("./index-BkmziPBo.js"),[])).getPuzzleGeometryByName(n,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function ph(n,t){const e=await n,i=e.getKPuzzleDefinition(!0);i.name=t;const r=await ie(()=>import("./index-BkmziPBo.js"),[]),s=new r.ExperimentalPGNotation(e,e.getOrbitsDef(!0));return new Yn(s.remapKPuzzleDefinition(i),{experimentalPGNotation:s})}var da,pa,ma;class Bi{constructor(t){pe(this,"pgId");pe(this,"id");pe(this,"fullName");pe(this,"inventedBy");pe(this,"inventionYear");te(this,da);te(this,pa);te(this,ma);pe(this,"puzzleSpecificSimplifyOptionsPromise",Pv(this.kpuzzle.bind(this)));this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear}pg(){return O(this,da)??Zt(this,da,bl(this.pgId??this.id))}kpuzzle(){return O(this,pa)??Zt(this,pa,ph(this.pg(),this.id))}svg(){return O(this,ma)??Zt(this,ma,(async()=>(await this.pg()).generatesvg())())}}da=new WeakMap,pa=new WeakMap,ma=new WeakMap;class Yr extends Bi{constructor(){super(...arguments);pe(this,"stickerings",()=>ya(this.id,{use3x3x3Fallbacks:!0}))}stickeringMask(e){return rs(this,e)}}function Pv(n){return new xr(async t=>{const e=await n();t({quantumMoveOrder:i=>e.moveToTransformation(new D(i)).repetitionOrder()})})}const mh={id:"2x2x2",fullName:"2×2×2 Cube",kpuzzle:he(async()=>new Yn((await ie(async()=>{const{cube2x2x2JSON:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{cube2x2x2JSON:n}},[])).cube2x2x2JSON)),svg:async()=>(await ie(async()=>{const{cube2x2x2SVG:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{cube2x2x2SVG:n}},[])).cube2x2x2SVG,llSVG:he(async()=>(await ie(async()=>{const{cube2x2x2LLSVG:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{cube2x2x2LLSVG:n}},[])).cube2x2x2LLSVG),pg:he(async()=>bl("2x2x2")),stickeringMask:n=>rs(mh,n),stickerings:()=>ya("2x2x2",{use3x3x3Fallbacks:!0})},gh={name:"3x3x3",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3},{orbitName:"CENTERS",numPieces:6,numOrientations:4}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0],orientationMod:[1,1,1,1,1,1]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientationDelta:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientationDelta:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientationDelta:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientationDelta:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientationDelta:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientationDelta:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientationDelta:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientationDelta:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,1]}}},derivedMoves:{Uw:"u",Lw:"l",Fw:"f",Rw:"r",Bw:"b",Dw:"d",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'","2U":"u U'","2L":"l L'","2F":"f F'","2R":"r R'","2B":"b B'","2D":"d D'"}};function _h(n){const t=n.patternData.CENTERS.pieces[0],e=n.patternData.CENTERS.pieces[5],i=n.patternData.CENTERS.pieces[1];let r=i;return t<i&&r--,e<i&&r--,[t,r]}const nu=new Array(6).fill(0).map(()=>new Array(6));function Dv(){{const n=["","z","x","z'","x'","x2"].map(e=>wt.fromString(e)),t=new wt("y");for(const e of n){let i=xh.algToTransformation(e);for(let r=0;r<4;r++){i=i.applyAlg(t);const[s,a]=_h(i.toKPattern());nu[s][a]=i.invert()}}}return nu}function Lv(n){const[t,e]=_h(n),i=Dv()[t][e];return n.applyTransformation(i)}function Iv(n,t){var e;return t.ignorePuzzleOrientation&&(n=Lv(n)),t.ignoreCenterOrientation&&(n=new Fi(n.kpuzzle,{EDGES:n.patternData.EDGES,CORNERS:n.patternData.CORNERS,CENTERS:{pieces:n.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!((e=n.experimentalToTransformation())!=null&&e.isIdentityTransformation())}new Array(24);async function vh(n,t){return(await ie(()=>import("./index-BkmziPBo.js"),[])).getPuzzleGeometryByDesc(n,{allMoves:!0,orientCenters:!0,addRotations:!0,...t})}async function Uv(n,t){const e=vh(n,t);return ph(e,`description: ${n}`)}const xh=new Yn(gh);gh.experimentalIsPatternSolved=Iv;const Nv={KeyI:new D("R"),KeyK:new D("R'"),KeyW:new D("B"),KeyO:new D("B'"),KeyS:new D("D"),KeyL:new D("D'"),KeyD:new D("L"),KeyE:new D("L'"),KeyJ:new D("U"),KeyF:new D("U'"),KeyH:new D("F"),KeyG:new D("F'"),KeyC:new D("l"),KeyR:new D("l'"),KeyU:new D("r"),KeyM:new D("r'"),KeyX:new D("d"),Comma:new D("d'"),KeyT:new D("x"),KeyY:new D("x"),KeyV:new D("x'"),KeyN:new D("x'"),Semicolon:new D("y"),KeyA:new D("y'"),KeyP:new D("z"),KeyQ:new D("z'"),KeyZ:new D("M'"),KeyB:new D("M"),Period:new D("M'"),Backquote:new Fe};function be(n,t,e,i){const r=[];for(const s of n){const a=D.fromString(s),{family:o,amount:l}=a;if(![-1,1].includes(l))throw new Error("Invalid config move");r.push({family:o,direction:l,type:t,from:e,to:i})}return r}const Hi={"x axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...be(["R"],0,0,3),...be(["L'"],1,0,3),...be(["r","Rw"],2,0,2),...be(["l'","Lw'"],3,0,2),...be(["M'"],4,1,2),...be(["x","Uv","Dv'"],5,0,3)]},"y axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...be(["U"],0,0,3),...be(["D'"],1,0,3),...be(["u","Uw"],2,0,2),...be(["d'","Dw'"],3,0,2),...be(["E'"],4,1,2),...be(["y","Uv","Dv'"],5,0,3)]},"z axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...be(["F"],0,0,3),...be(["B'"],1,0,3),...be(["f","Fw"],2,0,3),...be(["b'","Bw'"],3,0,3),...be(["S"],4,1,2),...be(["z","Fv","Bv'"],5,0,3)]}},ss={};for(const[n,t]of Object.entries(Hi))for(const e of t.moveSourceInfos)ss[e.family]={axis:n,moveSourceInfo:e};const Sh={};var lu;for(const n of Object.keys(Hi)){const t={};Sh[n]=t;for(const e of Hi[n].moveSourceInfos)(t[lu=e.type]??(t[lu]=[])).push(e)}const Mh={};for(const n of Object.keys(Hi)){const t=new Map;Mh[n]=t;for(const e of Hi[n].moveSourceInfos)t.get(e.from)||t.set(e.from,e)}function iu(n,t){var i;const e=(i=Sh[n][t])==null?void 0:i[0];if(!e)throw new Error(`Could not find a reference move (axis: ${n}, move source type: ${t})`);return e}const Ov=(n,t)=>ss[n.family].axis===ss[t.family].axis;function Fv(n,t,e,i){if(t+1===e){const h=Mh[n].get(t);if(h)return new D(new Mn(h.family),i*h.direction)}const r=Hi[n],{sliceDiameter:s}=r;if(t===0&&e===s){const h=iu(n,5);return new D(new Mn(h.family),i*h.direction)}const a=t+e>s;a&&([t,e]=[s-e,s-t]);let o=t+1,l=e;const c=o===l;c&&(l=null),o===1&&(o=null),c&&o===1&&(l=null),!c&&l===2&&(l=null);const d=iu(n,c?a?1:0:a?3:2);return new D(new Mn(d.family,l,o),i*d.direction)}function Bv(n,t=!0){if(n.length===0)return[];const e=ss[n[0].family].axis,i=Hi[e],{sliceDiameter:r}=i,s=new Map;let a=null;function o(h,m){let g=(s.get(h)??0)+m;t&&(g=g%4+5%4-1),g===0?s.delete(h):s.set(h,g)}let l=0;for(const h of Array.from(n).reverse()){l++;const{moveSourceInfo:m}=ss[h.family],g=h.amount*m.direction;switch(m.type){case 0:{const v=(h.innerLayer??1)-1;o(v,g),o(v+1,-g);break}case 1:{const v=r-(h.innerLayer??1);o(v,g),o(v+1,-g);break}case 2:{o((h.outerLayer??1)-1,g),o(h.innerLayer??2,-g);break}case 3:{o(r-(h.innerLayer??2),g),o(r-((h.outerLayer??1)-1),-g);break}case 4:{o(m.from,g),o(m.to,-g);break}case 5:{o(0,g),o(r,-g);break}}[0,2].includes(s.size)&&(a={suffixLength:l,sliceDeltas:new Map(s)})}if(s.size===0)return[];if(!a)return n;let[c,u]=a.sliceDeltas.keys();c>u&&([c,u]=[u,c]);const d=a.sliceDeltas.get(c);return[...n.slice(0,-a.suffixLength),...d!==0?[Fv(e,c,u,d)]:[]]}const zv={quantumMoveOrder:()=>4,axis:{areQuantumMovesSameAxis:Ov,simplifySameAxisMoves:Bv}},yh={id:"3x3x3",fullName:"3×3×3 Cube",inventedBy:["Ernő Rubik"],inventionYear:1974,kpuzzle:he(async()=>xh),svg:he(async()=>(await ie(async()=>{const{cube3x3x3SVG:n}=await import("./puzzles-dynamic-3x3x3-BW0FSrXs.js");return{cube3x3x3SVG:n}},[])).cube3x3x3SVG),llSVG:he(async()=>(await ie(async()=>{const{cube3x3x3LLSVG:n}=await import("./puzzles-dynamic-3x3x3-BW0FSrXs.js");return{cube3x3x3LLSVG:n}},[])).cube3x3x3LLSVG),llFaceSVG:he(async()=>(await ie(async()=>{const{cube3x3x3LLFaceSVG:n}=await import("./puzzles-dynamic-3x3x3-BW0FSrXs.js");return{cube3x3x3LLFaceSVG:n}},[])).cube3x3x3LLFaceSVG),pg:he(async()=>bl("3x3x3")),stickeringMask:n=>rs(yh,n),stickerings:()=>ya("3x3x3"),puzzleSpecificSimplifyOptions:zv,keyMapping:async()=>Nv},Eh=new Yr({id:"4x4x4",fullName:"4×4×4 Cube"});Eh.llSVG=he(async()=>(await ie(async()=>{const{cube4x4x4LLSVG:n}=await import("./puzzles-dynamic-4x4x4-CsNOCKFJ.js");return{cube4x4x4LLSVG:n}},[])).cube4x4x4LLSVG);const kv={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{clockJSON:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{clockJSON:n}},[])).clockJSON)),svg:he(async()=>(await ie(async()=>{const{clockSVG:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{clockSVG:n}},[])).clockSVG)};async function Gv(n,t){const e=await n.kpuzzle(),i=new fh(e),r=new dh(e),s=()=>r.and([r.move("U"),r.not(r.or(r.moves(["F","BL","BR"])))]),a=()=>r.and([r.move("U"),r.not(r.move("F"))]),o=()=>r.or([a(),r.and([r.move("F"),r.not(r.or(r.moves(["U","BL","BR"])))])]),l=()=>r.not(r.or([r.and([r.move("U"),r.move("F")]),r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])])),c=()=>r.not(r.or([r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])]));switch(t){case"full":break;case"experimental-fto-fc":{i.set(r.not(s()),Z.Ignored);break}case"experimental-fto-f2t":{i.set(r.not(a()),Z.Ignored),i.set(s(),Z.Dim);break}case"experimental-fto-sc":{i.set(r.not(o()),Z.Ignored),i.set(a(),Z.Dim);break}case"experimental-fto-l2c":{i.set(r.not(l()),Z.Ignored),i.set(o(),Z.Dim);break}case"experimental-fto-lbt":{i.set(r.not(c()),Z.Ignored),i.set(l(),Z.Dim);break}case"experimental-fto-l3t":{i.set(c(),Z.Dim);break}default:console.warn(`Unsupported stickering for ${n.id}: ${t}. Setting all pieces to dim.`),i.set(r.and(r.moves([])),Z.Dim)}return i.toStickeringMask()}async function Vv(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}const Hv={KeyI:new D("R"),KeyK:new D("R'"),KeyW:new D("B"),KeyO:new D("B'"),KeyS:new D("D"),KeyL:new D("D'"),KeyD:new D("L"),KeyE:new D("L'"),KeyJ:new D("U"),KeyF:new D("U'"),KeyH:new D("F"),KeyG:new D("F'"),KeyN:new D("Rv'"),KeyC:new D("l"),KeyR:new D("l'"),KeyU:new D("r"),KeyM:new D("r'"),KeyX:new D("d"),Comma:new D("d'"),KeyT:new D("Lv'"),KeyY:new D("Rv"),KeyV:new D("Lv"),Semicolon:new D("Uv"),KeyA:new D("Uv'"),KeyP:new D("BR'"),KeyQ:new D("BL"),KeyZ:new D("BL'"),KeyB:new D("T"),Period:new D("BR"),Backquote:new Fe};class Wv extends Bi{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});pe(this,"stickerings",Vv);pe(this,"svg",he(async()=>(await ie(async()=>{const{ftoSVG:e}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{ftoSVG:e}},[])).ftoSVG));pe(this,"keyMapping",async()=>Hv)}stickeringMask(e){return Gv(this,e)}}const Xv=new Wv,ru="d f 0.56",qv={id:"kilominx",fullName:"Kilominx",kpuzzle:he(()=>Uv(ru,{includeCenterOrbits:!1,includeEdgeOrbits:!1})),pg:()=>vh(ru,{includeCenterOrbits:!1,includeEdgeOrbits:!1}),svg:he(async()=>(await ie(async()=>{const{kilominxSVG:n}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{kilominxSVG:n}},[])).kilominxSVG)},Yv={id:"loopover",fullName:"Loopover",inventedBy:["Cary Huang"],inventionYear:2018,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{loopoverJSON:n}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{loopoverJSON:n}},[])).loopoverJSON)),svg:async()=>(await ie(async()=>{const{loopoverSVG:n}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{loopoverSVG:n}},[])).loopoverSVG};async function Kv(n,t){return(await wh()).includes(t)?rs(n,t):(console.warn(`Unsupported stickering for ${n.id}: ${t}. Setting all pieces to dim.`),rs(n,"full"))}const Zv=hh(()=>ya("megaminx"));function wh(){return Zv}const $v={KeyI:new D("R"),KeyK:new D("R'"),KeyW:new D("B"),KeyO:new D("B'"),KeyS:new D("FR"),KeyL:new D("FR'"),KeyD:new D("L"),KeyE:new D("L'"),KeyJ:new D("U"),KeyF:new D("U'"),KeyH:new D("F"),KeyG:new D("F'"),KeyC:new D("Lw"),KeyR:new D("Lw'"),KeyU:new D("Rw"),KeyM:new D("Rw'"),KeyX:new D("d"),Comma:new D("d'"),KeyT:new D("Rv"),KeyY:new D("Rv"),KeyV:new D("Rv'"),KeyN:new D("Rv'"),Semicolon:new D("y"),KeyA:new D("y'"),KeyP:new D("z"),KeyQ:new D("z'"),KeyZ:new D("2L'"),KeyB:new D("2R"),Period:new D("2R'"),Backquote:new Fe};class Jv extends Bi{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});pe(this,"stickerings",wh);pe(this,"llSVG",he(async()=>(await ie(async()=>{const{megaminxLLSVG:e}=await import("./puzzles-dynamic-megaminx-pDLrtc2V.js");return{megaminxLLSVG:e}},[])).megaminxLLSVG));pe(this,"keyMapping",async()=>$v)}stickeringMask(e){return Kv(this,e)}}const Qv=new Jv,jv={id:"melindas2x2x2x2",fullName:"Melinda's 2×2×2×2",inventedBy:["Melinda Green"],kpuzzle:he(async()=>new Yn((await ie(async()=>{const{melindas2x2x2x2OrbitJSON:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{melindas2x2x2x2OrbitJSON:n}},[])).melindas2x2x2x2OrbitJSON)),svg:he(async()=>(await ie(async()=>{const{melindas2x2x2x2OrbitSVG:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{melindas2x2x2x2OrbitSVG:n}},[])).melindas2x2x2x2OrbitSVG)};class tx extends Bi{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});pe(this,"svg",he(async()=>(await ie(async()=>{const{pyraminxSVG:e}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{pyraminxSVG:e}},[])).pyraminxSVG))}}const ex=new tx,nx={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{rediCubeJSON:n}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{rediCubeJSON:n}},[])).rediCubeJSON)),svg:async()=>(await ie(async()=>{const{rediCubeSVG:n}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{rediCubeSVG:n}},[])).rediCubeSVG},ix={id:"square1",fullName:"Square-1",inventedBy:["Karel Hršel","Vojtech Kopský"],inventionYear:1990,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{sq1HyperOrbitJSON:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{sq1HyperOrbitJSON:n}},[])).sq1HyperOrbitJSON)),svg:he(async()=>(await ie(async()=>{const{sq1HyperOrbitSVG:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{sq1HyperOrbitSVG:n}},[])).sq1HyperOrbitSVG)},rx={id:"tri_quad",fullName:"TriQuad",inventedBy:["Bram Cohen","Carl Hoff"],inventionYear:2018,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{triQuadJSON:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{triQuadJSON:n}},[])).triQuadJSON)),svg:he(async()=>(await ie(async()=>{const{triQuadSVG:n}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{triQuadSVG:n}},[])).triQuadSVG)},$x={"3x3x3":yh,"2x2x2":mh,"4x4x4":Eh,"5x5x5":new Yr({id:"5x5x5",fullName:"5×5×5 Cube"}),"6x6x6":new Yr({id:"6x6x6",fullName:"6×6×6 Cube"}),"7x7x7":new Yr({id:"7x7x7",fullName:"7×7×7 Cube"}),"40x40x40":new Yr({id:"40x40x40",fullName:"40×40×40 Cube"}),clock:kv,megaminx:Qv,pyraminx:ex,skewb:new Bi({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:ix,fto:Xv,gigaminx:new Bi({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Bi({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:qv,redi_cube:nx,melindas2x2x2x2:jv,loopover:Yv,tri_quad:rx},Jx=hh(()=>ie(()=>import("./search-dynamic-solve-3x3x3-4o6GMjr8.js"),[]));class hs{constructor(t,e){var i=document.createElement("canvas");i.width=t,i.height=e,this.canvas=i;var r=i.getContext("2d");this.context=r;var s=new Oe(i);this.texture=s}}hs.prototype.clear=function(n){return n!==void 0?(this.context.fillStyle=n,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)):this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.texture.needsUpdate=!0,this};hs.prototype.drawText=function(n,t,e,i,r){if(r!==void 0&&(this.context.font=r),t==null){var s=this.context.measureText(n);t=(this.canvas.width-s.width)/2}return this.context.fillStyle=i,this.context.fillText(n,t,e),this.texture.needsUpdate=!0,this};hs.prototype.drawTextCooked=function(n){var t=this.context,e=this.canvas;n=n||{};var i=n.text,r={margin:n.margin!==void 0?n.margin:.1,lineHeight:n.lineHeight!==void 0?n.lineHeight:.1,align:n.align!==void 0?n.align:"left",fillStyle:n.fillStyle!==void 0?n.fillStyle:"black",font:n.font!==void 0?n.font:"bold "+.2*512+"px Arial"};console.assert(typeof i=="string"),t.save(),t.fillStyle=r.fillStyle,t.font=r.font;for(var s=(r.lineHeight+r.margin)*e.height;i.length>0;){var a=c(i);i=i.substr(a.length);var o=t.measureText(a);if(r.align==="left")var l=r.margin*e.width;else if(r.align==="right")var l=(1-r.margin)*e.width-o.width;else if(r.align==="center")var l=(e.width-o.width)/2;else console.assert(!1);this.context.fillText(a,l,s),s+=r.lineHeight*e.height}return t.restore(),this.texture.needsUpdate=!0,this;function c(u){for(var d="",h=(1-r.margin*2)*e.width;d.length!==u.length;){var m=t.measureText(d);if(m.width>h)break;d+=u.substr(d.length,1)}return d}};hs.prototype.drawImage=function(){return this.context.drawImage.apply(this.context,arguments),this.texture.needsUpdate=!0,this};const su={type:"change"},Al={type:"start"},Th={type:"end"},Hs=new xa,au=new ii,sx=Math.cos(70*qf.DEG2RAD),Me=new P,ze=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ao=1e-6;class bh extends l0{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Gi,this._lastTargetPosition=new P,this._quat=new Gi().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xc,this._sphericalDelta=new Xc,this._scale=1,this._panOffset=new P,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new P,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ox.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=lx.bind(this),this._onContextMenu=mx.bind(this),this._onMouseWheel=hx.bind(this),this._onKeyDown=fx.bind(this),this._onTouchStart=dx.bind(this),this._onTouchMove=px.bind(this),this._onMouseDown=cx.bind(this),this._onMouseMove=ux.bind(this),this._interceptControlDown=gx.bind(this),this._interceptControlUp=_x.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(su),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ze:i>Math.PI&&(i-=ze),r<-Math.PI?r+=ze:r>Math.PI&&(r-=ze),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Me.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hs.origin.copy(this.object.position),Hs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hs.direction))<sx?this.object.lookAt(this.target):(au.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hs.intersectPlane(au,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ao||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ao||this._lastTargetPosition.distanceToSquared(this.target)>ao?(this.dispatchEvent(su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ze/60*this.autoRotateSpeed*t:ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Me.copy(r).sub(this.target);let s=Me.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ax(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ox(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function lx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Th),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Al)}function ux(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(Al),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Th))}function fx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function dx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Al)}function px(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function mx(n){this.enabled!==!1&&n.preventDefault()}function gx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _x(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vx=.6,xx=.6,Sx=.1,Mx=39752,yx=18093,Ex=11997748,wx=16734208,Tx=16777215,bx=16766208,Ah=0,Rh="#F5F5F5",Ax="#99a5ab",ll=["Right","Left","Top","Bottom","Front","Rear"];var Sr=[];const Ch=new P(-1,0,0),Ph=new P(1,0,0),Dh=new P(0,1,0),Lh=new P(0,-1,0),Ih=new P(0,0,1),Uh=new P(0,0,-1);var wn=-1,gn=[],cl,pn,Ei,sa,mn,wi,_n,lr,Rl=!1;const _t=4,Jr=Ux();var Qr=Jr;const Cl=2.5;var Li=Qr/Cl,rt=[],oo=[],jr,ou=new o0,ul=new zt;Rx();Lx();Px();Ix();var lo=document.getElementById("navigationCanvasContainer");function Rx(){for(var n=0;n<_t;n++){rt.push([]);for(var t=0;t<_t;t++){rt[n].push([]);for(var e=0;e<_t;e++){rt[n][t].push(Cx());//!!!!!!!!!!Inner objects need to be made blank?
}}}}function Cx(){var n=[new He({color:Mx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:yx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:Ex,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:wx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:Tx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:bx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})],t=new Xi(1,1,1),e=new xn(t,n),i=new Vu(e.geometry),r=new El({color:Ah}),s=new Gu(i,r);return e.add(s),e}function Px(){var n=new Xi(1,1,1);Dx();var t=[new He({map:gn[0].texture}),new He({map:gn[1].texture}),new He({map:gn[2].texture}),new He({map:gn[3].texture}),new He({map:gn[4].texture}),new He({map:gn[5].texture})];jr=new xn(n,t);var e=new Vu(jr.geometry),i=new El({color:Ah}),r=new Gu(e,i);jr.add(r)}function Dx(){for(var n=0;n<6;n++){var t=new hs(512,512);t.context.font="bold 130px arial",t.texture.needsUpdate=!0,t.clear(Rh).drawText(ll[n].toString(),void 0,300,"black"),gn.push(t)}}function Lx(){var n=window.innerWidth*vx,t=window.innerHeight*xx,e=n/t;pn=new Je(45,e,.1,1e3),pn.position.z=Qr,Ei=new zu,Ei.setClearColor(13619151,1),Ei.setSize(n,t),Ei.setAnimationLoop(Nx),document.getElementById("cubeCanvasContainer").appendChild(Ei.domElement),_n=new bh(pn,Ei.domElement),_n.enablePan=!1,_n.target.set(0,0,0),_n.update(),_n.addEventListener("change",()=>{Qr=pn.position.length(),Li=Qr/Cl,mn.position.set(pn.position.x/Li,pn.position.y/Li,pn.position.z/Li),mn.rotation.copy(pn.rotation)}),cl=new ku;for(var i=0;i<_t;i++)for(var r=0;r<_t;r++)for(var s=0;s<_t;s++)cl.add(rt[i][r][s]),rt[i][r][s].position.set(i-(_t-1)/2,r-(_t-1)/2,s-(_t-1)/2)}function Ix(){var n=window.innerWidth*Sx,t=n,e=n/t;mn=new Je(45,e,.1,1e3),mn.position.z=Cl,wi=new zu,wi.setClearColor(13619151,1),wi.setSize(n,t),wi.setAnimationLoop(Fx),document.getElementById("navigationCanvasContainer").appendChild(wi.domElement),lr=new bh(mn,wi.domElement),lr.enablePan=!1,lr.enableZoom=!1,lr.target.set(0,0,0),lr.update(),lr.addEventListener("change",()=>{pn.position.set(mn.position.x*Li,mn.position.y*Li,mn.position.z*Li),pn.rotation.copy(mn.rotation)}),sa=new ku,sa.add(jr),jr.position.set(0,0,0)}function Ux(){return _t+5}function Nx(){Ox()}function Ox(){Ei.render(cl,pn)}function Fx(){Bx()}function Bx(){wi.render(sa,mn)}const zx={L:()=>leftCW(),"L'":()=>leftCCW(),L2:function(){leftCW(),leftCW()},R:()=>rightCW(),"R'":()=>rightCCW(),R2:function(){rightCW(),rightCW()},U:()=>upCW(),"U'":()=>upCW(),U2:function(){upCW(),upCW()},D:()=>downCW(),"D'":()=>downCCW(),D2:function(){downCW(),downCW()},F:()=>frontCW(),"F'":()=>frontCCW(),F2:function(){frontCW(),frontCW()},B:()=>backCW(),"B'":()=>backCCW(),B2:function(){backCW(),backCW()}};window.leftCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.x==-(_t-1)/2){const r=new P(1,0,0);rt[n][t][e].rotateOnWorldAxis(r,Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.y,-Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};window.leftCCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.x==-(_t-1)/2){const r=new P(1,0,0);rt[n][t][e].rotateOnWorldAxis(r,-Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.y,Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};window.rightCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.x==(_t-1)/2){const r=new P(1,0,0);rt[n][t][e].rotateOnWorldAxis(r,-Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.y,Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};window.rightCCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.x==(_t-1)/2){const r=new P(1,0,0);rt[n][t][e].rotateOnWorldAxis(r,Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.y,-Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};window.upCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.y==(_t-1)/2){const r=new P(0,1,0);rt[n][t][e].rotateOnWorldAxis(r,-Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.x,-Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.x=fe(i[1])}};window.upCCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.y==(_t-1)/2){const r=new P(0,1,0);rt[n][t][e].rotateOnWorldAxis(r,Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.x,Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.x=fe(i[1])}};window.downCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.y==-(_t-1)/2){const r=new P(0,1,0);rt[n][t][e].rotateOnWorldAxis(r,Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.x,Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.x=fe(i[1])}};window.downCCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.y==-(_t-1)/2){const r=new P(0,1,0);rt[n][t][e].rotateOnWorldAxis(r,-Math.PI/2);var i=on(rt[n][t][e].position.z,rt[n][t][e].position.x,-Math.PI/2);rt[n][t][e].position.z=fe(i[0]),rt[n][t][e].position.x=fe(i[1])}};window.frontCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.z==(_t-1)/2){const r=new P(0,0,1);rt[n][t][e].rotateOnWorldAxis(r,-Math.PI/2);var i=on(rt[n][t][e].position.x,rt[n][t][e].position.y,-Math.PI/2);rt[n][t][e].position.x=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};window.frontCCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.z==(_t-1)/2){const r=new P(0,0,1);rt[n][t][e].rotateOnWorldAxis(r,Math.PI/2);var i=on(rt[n][t][e].position.x,rt[n][t][e].position.y,Math.PI/2);rt[n][t][e].position.x=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};window.backCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.z==-(_t-1)/2){const r=new P(0,0,1);rt[n][t][e].rotateOnWorldAxis(r,Math.PI/2);var i=on(rt[n][t][e].position.x,rt[n][t][e].position.y,Math.PI/2);rt[n][t][e].position.x=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};window.backCCW=function(){for(var n=0;n<_t;n++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[n][t][e].position.z==-(_t-1)/2){const r=new P(0,0,1);rt[n][t][e].rotateOnWorldAxis(r,-Math.PI/2);var i=on(rt[n][t][e].position.x,rt[n][t][e].position.y,-Math.PI/2);rt[n][t][e].position.x=fe(i[0]),rt[n][t][e].position.y=fe(i[1])}};function on(n,t,e){var i=Math.sqrt(n*n+t*t),r=Math.atan2(t,n);return r+=e,[Math.cos(r)*i,Math.sin(r)*i]}function fe(n){return Math.round(n*2)/2}window.scrambleCube=async function(){for(var n=await dv("333"),t=kx(n.toString()),e=0;e<t.length;e++)zx[t[e]]()};function kx(n){return n.split(" ")}window.isometricCamera=function(){_n.object.position.set(Jr,Jr,Jr),_n.update()};window.frontCamera=function(){_n.object.position.set(0,0,Jr),_n.update()};const Gx={0:()=>cr(1,0,0),1:()=>cr(-1,0,0),2:()=>cr(0,1,0),3:()=>cr(0,-1,0),4:()=>cr(0,0,1),5:()=>cr(0,0,-1)};window.navCanvasMouseDown=function(n){Rl=!1};window.mouseLocation=function(n){Rl=!0;var t=lo.getBoundingClientRect();ul.x=(n.clientX-t.left)/lo.getBoundingClientRect().width*2-1,ul.y=-((n.clientY-t.top)/lo.getBoundingClientRect().height)*2+1,Nh()};window.navCanvasMouseUp=function(n){Rl||(Nh(),Gx[wn](),_n.update())};function Nh(){wn!=-1&&(gn[wn].texture.needsUpdate=!0,gn[wn].clear(Rh).drawText(ll[wn].toString(),void 0,300,"black")),wn=-1,ou.setFromCamera(ul,mn);const n=ou.intersectObjects(sa.children);if(n.length>0){const t=n.filter(e=>e.object.type==="Mesh");t.length>0&&(wn=Math.round((t[0].faceIndex-.5)/2),gn[wn].texture.needsUpdate=!0,gn[wn].clear(Ax).drawText(ll[wn].toString(),void 0,300,"black"))}}function Vx(n,t,e,i){var r=Math.sqrt(n*n+t*t+e*e);return new P(n*(i/r),t*(i/r),e*(i/r))}function cr(n,t,e){const i=Vx(n,t,e,Qr);_n.object.position.set(i.x,i.y,i.z)}window.solveCubeAndrewMethod=function(){Hx(),alert("This function is not ready yet")};function Hx(){for(var n=0;n<_t;n++){oo.push([]);for(var t=0;t<_t;t++){oo[n].push([]);for(var e=0;e<_t;e++)oo[n][t].push([])}}Wx()}function Wx(){Sr=[];{for(var n=0;n<6;n++)Sr.push(-1);Xx()}alert(Sr)}function Xx(){var n=hl([0,0,0]),t=fl([0,0,0],n);Sr[co(t[0][1])]=rt[0][0][0].material[t[0][0]].color.getHex(),Sr[co(t[1][1])]=rt[0][0][0].material[t[1][0]].color.getHex(),Sr[co(t[2][1])]=rt[0][0][0].material[t[2][0]].color.getHex(),qx([0,0,0],[0,0,_t-1])}function hl(n){const t=_t-1;var e=[];return n[0]==0?e.push(Ch):n[0]==t&&e.push(Ph),n[1]==0?e.push(Lh):n[1]==t&&e.push(Dh),n[2]==0?e.push(Uh):n[2]==t&&e.push(Ih),e}function fl(n,t){for(var e=rt[n[0]][n[1]][n[2]].matrixWorld.elements,i=0;i<11;i++)(i+1)%4!=0&&(e[i]=Math.round(e[i]));const r=[new P(e[0],e[1],e[2]),new P(-1*e[0],-1*e[1],-1*e[2]),new P(e[4],e[5],e[6]),new P(-1*e[4],-1*e[5],-1*e[6]),new P(e[8],e[9],e[10]),new P(-1*e[8],-1*e[9],-1*e[10])];for(var s=[],i=0;i<r.length;i++)for(var a=0;a<t.length;a++)if(r[i].equals(t[a])){s.push([i,t[a]]);break}return s}function co(n){switch(n){case Ph:return 0;case Ch:return 1;case Dh:return 2;case Lh:return 3;case Ih:return 4;case Uh:return 5;default:return alert("Error: Invalid direction: ("+n.x+", "+n.y+", "+n.z+")"),-1}}function qx(n,t){var e=[];const i=hl(n),r=hl(t);return fl(n,i),fl(t,r),alert(i.length+", "+r.length),e}window.solveCubeCFOPMethod=function(){alert("This function is not ready yet")};window.testJS=function(){document.getElementById("test").innerHTML="changed"};export{d0 as A,Fi as K,D as M,Mn as Q,Kx as T,ie as _,nv as a,wt as b,hh as c,Jx as d,rh as e,Zu as f,F0 as g,mh as h,Yn as i,Qu as j,B0 as n,$x as p,Zx as r};
