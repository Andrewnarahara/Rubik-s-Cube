var Ph=Object.defineProperty;var Nl=i=>{throw TypeError(i)};var Dh=(i,t,e)=>t in i?Ph(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var pe=(i,t,e)=>Dh(i,typeof t!="symbol"?t+"":t,e),Ea=(i,t,e)=>t.has(i)||Nl("Cannot "+e);var O=(i,t,e)=>(Ea(i,t,"read from private field"),e?e.call(i):t.get(i)),te=(i,t,e)=>t.has(i)?Nl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Zt=(i,t,e,n)=>(Ea(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),nn=(i,t,e)=>(Ea(i,t,"access private method"),e);var Ta=(i,t,e,n)=>({set _(r){Zt(i,t,r,e)},get _(){return O(i,t,n)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="170",pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lh=0,Ol=1,Ih=2,au=1,Uh=2,On=3,ui=0,qe=1,zn=2,li=0,mr=1,Fl=2,Bl=3,zl=4,Nh=5,wi=100,Oh=101,Fh=102,Bh=103,zh=104,kh=200,Gh=201,Vh=202,Hh=203,lo=204,co=205,Wh=206,Xh=207,qh=208,Yh=209,Kh=210,Zh=211,$h=212,Jh=213,Qh=214,uo=0,ho=1,fo=2,Tr=3,po=4,mo=5,go=6,_o=7,ou=0,jh=1,tf=2,ci=0,ef=1,nf=2,rf=3,sf=4,af=5,of=6,lf=7,lu=300,wr=301,br=302,vo=303,xo=304,ma=306,So=1e3,Pi=1001,Mo=1002,Sn=1003,cf=1004,ds=1005,bn=1006,wa=1007,Di=1008,Wn=1009,cu=1010,uu=1011,ts=1012,ul=1013,zi=1014,kn=1015,os=1016,hl=1017,fl=1018,Ar=1020,hu=35902,fu=1021,du=1022,vn=1023,pu=1024,mu=1025,gr=1026,Rr=1027,gu=1028,dl=1029,_u=1030,pl=1031,ml=1033,Hs=33776,Ws=33777,Xs=33778,qs=33779,yo=35840,Eo=35841,To=35842,wo=35843,bo=36196,Ao=37492,Ro=37496,Co=37808,Po=37809,Do=37810,Lo=37811,Io=37812,Uo=37813,No=37814,Oo=37815,Fo=37816,Bo=37817,zo=37818,ko=37819,Go=37820,Vo=37821,Ys=36492,Ho=36494,Wo=36495,vu=36283,Xo=36284,qo=36285,Yo=36286,uf=3200,hf=3201,ff=0,df=1,si="",sn="srgb",Dr="srgb-linear",ga="linear",ee="srgb",Yi=7680,kl=519,pf=512,mf=513,gf=514,xu=515,_f=516,vf=517,xf=518,Sf=519,Gl=35044,Vl="300 es",Gn=2e3,$s=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const _r=Math.PI/180,es=180/Math.PI;function Lr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function gl(i,t){return(i%t+t)%t}function Mf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function yf(i,t,e){return i!==t?(e-i)/(t-i):0}function Yr(i,t,e){return(1-e)*i+e*t}function Ef(i,t,e,n){return Yr(i,t,1-Math.exp(-e*n))}function Tf(i,t=1){return t-Math.abs(gl(i,t*2)-t)}function wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Af(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rf(i,t){return i+Math.random()*(t-i)}function Cf(i){return i*(.5-Math.random())}function Pf(i){i!==void 0&&(Hl=i);let t=Hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Df(i){return i*_r}function Lf(i){return i*es}function If(i){return(i&i-1)===0&&i!==0}function Uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Of(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),d=s((t-n)/2),h=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ff={DEG2RAD:_r,RAD2DEG:es,generateUUID:Lr,clamp:Ie,euclideanModulo:gl,mapLinear:Mf,inverseLerp:yf,lerp:Yr,damp:Ef,pingpong:Tf,smoothstep:wf,smootherstep:bf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:Pf,degToRad:Df,radToDeg:Lf,isPowerOfTwo:If,ceilPowerOfTwo:Uf,floorPowerOfTwo:Nf,setQuaternionFromProperEuler:Of,normalize:Ue,denormalize:ur};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,r,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],v=r[0],p=r[3],f=r[6],w=r[1],T=r[4],M=r[7],k=r[2],b=r[5],A=r[8];return s[0]=a*v+o*w+l*k,s[3]=a*p+o*T+l*b,s[6]=a*f+o*M+l*A,s[1]=c*v+u*w+d*k,s[4]=c*p+u*T+d*b,s[7]=c*f+u*M+d*A,s[2]=h*v+m*w+g*k,s[5]=h*p+m*T+g*b,s[8]=h*f+m*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=e*d+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(r*c-u*n)*v,t[2]=(o*n-r*a)*v,t[3]=h*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Ot;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){const i=Js("canvas");return i.style.display="block",i}const Wl={};function Hr(i){i in Wl||(Wl[i]=!0,console.warn(i))}function zf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function kf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xl=[.64,.33,.3,.6,.15,.06],ql=[.2126,.7152,.0722],Yl=[.3127,.329],Kl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Dr]:{primaries:Xl,whitePoint:Yl,transfer:ga,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:ql,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Xl,whitePoint:Yl,transfer:ee,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:ql,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let Ki;class Vf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=Js("canvas")),Ki.width=t.width,Ki.height=t.height;const n=Ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class Mu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Aa(r[a].image)):s.push(Aa(r[a]))}else s=Aa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;class Oe extends Wi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Pi,r=Pi,s=bn,a=Di,o=vn,l=Wn,c=Oe.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Lr(),this.name="",this.source=new Mu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case So:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case So:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=lu;Oe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,r=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(m+1)/2,k=(f+1)/2,b=(u+h)/4,A=(d+v)/4,N=(g+p)/4;return T>M&&T>k?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=b/n,s=A/n):M>k?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=N/r):k<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),n=A/s,r=N/s),this.set(n,r,s,e),this}let w=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Oe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yu extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==h||c!==m||u!==g){let p=1-o;const f=l*h+c*m+u*g+d*v,w=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const k=Math.sqrt(T),b=Math.atan2(k,f*w);p=Math.sin(p*b)/k,o=Math.sin(o*b)/k}const M=o*w;if(l=l*p+h*M,c=c*p+m*M,u=u*p+g*M,d=d*p+v*M,p===1-o){const k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*d+l*m-c*h,t[e+1]=l*g+u*h+c*d-o*m,t[e+2]=c*g+u*m+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new I,$l=new Gi;class ls{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),ms.subVectors(this.max,Or),Zi.subVectors(t.a,Or),$i.subVectors(t.b,Or),Ji.subVectors(t.c,Or),$n.subVectors($i,Zi),Jn.subVectors(Ji,$i),pi.subVectors(Zi,Ji);let e=[0,-$n.z,$n.y,0,-Jn.z,Jn.y,0,-pi.z,pi.y,$n.z,0,-$n.x,Jn.z,0,-Jn.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-Jn.y,Jn.x,0,-pi.y,pi.x,0];return!Ca(e,Zi,$i,Ji,ms)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Zi,$i,Ji,ms))?!1:(gs.crossVectors($n,Jn),e=[gs.x,gs.y,gs.z],Ca(e,Zi,$i,Ji,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,ps=new ls,Zi=new I,$i=new I,Ji=new I,$n=new I,Jn=new I,pi=new I,Or=new I,ms=new I,gs=new I,mi=new I;function Ca(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mi.fromArray(i,s);const o=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yf=new ls,Fr=new I,Pa=new I;class _a{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Fr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(Pa)),this.expandByPoint(Fr.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new I,Da=new I,_s=new I,Qn=new I,La=new I,vs=new I,Ia=new I;class va{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Da.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Da);const s=t.distanceTo(e)*.5,a=-this.direction.dot(_s),o=Qn.dot(this.direction),l=-Qn.dot(_s),c=Qn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Da).addScaledVector(_s,h),m}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,r,s){La.subVectors(e,t),vs.subVectors(n,t),Ia.crossVectors(La,vs);let a=this.direction.dot(Ia),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const l=o*this.direction.dot(vs.crossVectors(Qn,vs));if(l<0)return null;const c=o*this.direction.dot(La.cross(Qn));if(c<0||l+c>a)return null;const u=-o*Qn.dot(Ia);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,r,s,a,o,l,c,u,d,h,m,g,v,p){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,d,h,m,g,v,p)}set(t,e,n,r,s,a,o,l,c,u,d,h,m,g,v,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=a*u,m=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*d,g=c*u,v=c*d;e[0]=h+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*d,g=c*u,v=c*d;e[0]=h-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=g*c-m,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-h*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kf,t,Zf)}lookAt(t,e,n){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),jn.crossVectors(n,Ze),jn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),jn.crossVectors(n,Ze)),jn.normalize(),xs.crossVectors(Ze,jn),r[0]=jn.x,r[4]=xs.x,r[8]=Ze.x,r[1]=jn.y,r[5]=xs.y,r[9]=Ze.y,r[2]=jn.z,r[6]=xs.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],w=n[3],T=n[7],M=n[11],k=n[15],b=r[0],A=r[4],N=r[8],y=r[12],S=r[1],R=r[5],K=r[9],G=r[13],q=r[2],j=r[6],W=r[10],nt=r[14],H=r[3],ot=r[7],dt=r[11],wt=r[15];return s[0]=a*b+o*S+l*q+c*H,s[4]=a*A+o*R+l*j+c*ot,s[8]=a*N+o*K+l*W+c*dt,s[12]=a*y+o*G+l*nt+c*wt,s[1]=u*b+d*S+h*q+m*H,s[5]=u*A+d*R+h*j+m*ot,s[9]=u*N+d*K+h*W+m*dt,s[13]=u*y+d*G+h*nt+m*wt,s[2]=g*b+v*S+p*q+f*H,s[6]=g*A+v*R+p*j+f*ot,s[10]=g*N+v*K+p*W+f*dt,s[14]=g*y+v*G+p*nt+f*wt,s[3]=w*b+T*S+M*q+k*H,s[7]=w*A+T*R+M*j+k*ot,s[11]=w*N+T*K+M*W+k*dt,s[15]=w*y+T*G+M*nt+k*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15];return g*(+s*l*d-r*c*d-s*o*h+n*c*h+r*o*m-n*l*m)+v*(+e*l*m-e*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+e*c*d-e*o*m-s*a*d+n*a*m+s*o*u-n*c*u)+f*(-r*o*u-e*l*d+e*o*h+r*a*d-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],w=d*p*c-v*h*c+v*l*m-o*p*m-d*l*f+o*h*f,T=g*h*c-u*p*c-g*l*m+a*p*m+u*l*f-a*h*f,M=u*v*c-g*d*c+g*o*m-a*v*m-u*o*f+a*d*f,k=g*d*l-u*v*l-g*o*h+a*v*h+u*o*p-a*d*p,b=e*w+n*T+r*M+s*k;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=w*A,t[1]=(v*h*s-d*p*s-v*r*m+n*p*m+d*r*f-n*h*f)*A,t[2]=(o*p*s-v*l*s+v*r*c-n*p*c-o*r*f+n*l*f)*A,t[3]=(d*l*s-o*h*s-d*r*c+n*h*c+o*r*m-n*l*m)*A,t[4]=T*A,t[5]=(u*p*s-g*h*s+g*r*m-e*p*m-u*r*f+e*h*f)*A,t[6]=(g*l*s-a*p*s-g*r*c+e*p*c+a*r*f-e*l*f)*A,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*m+e*l*m)*A,t[8]=M*A,t[9]=(g*d*s-u*v*s-g*n*m+e*v*m+u*n*f-e*d*f)*A,t[10]=(a*v*s-g*o*s+g*n*c-e*v*c-a*n*f+e*o*f)*A,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*m-e*o*m)*A,t[12]=k*A,t[13]=(u*v*r-g*d*r+g*n*h-e*v*h-u*n*p+e*d*p)*A,t[14]=(g*o*r-a*v*r-g*n*l+e*v*l+a*n*p-e*o*p)*A,t[15]=(a*d*r-u*o*r+u*n*l-e*d*l-a*n*h+e*o*h)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,g=s*d,v=a*u,p=a*d,f=o*d,w=l*c,T=l*u,M=l*d,k=n.x,b=n.y,A=n.z;return r[0]=(1-(v+f))*k,r[1]=(m+M)*k,r[2]=(g-T)*k,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(h+f))*b,r[6]=(p+w)*b,r[7]=0,r[8]=(g+T)*A,r[9]=(p-w)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const c=1/s,u=1/a,d=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Gn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),h=(n+r)/(n-r);let m,g;if(o===Gn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===$s)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Gn){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(a-s),h=(e+t)*c,m=(n+r)*u;let g,v;if(o===Gn)g=(a+s)*d,v=-2*d;else if(o===$s)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new I,hn=new ge,Kf=new I(0,0,0),Zf=new I(1,1,1),jn=new I,xs=new I,Ze=new I,Jl=new ge,Ql=new Gi;class Xn{constructor(t=0,e=0,n=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $f=0;const jl=new I,ji=new Gi,In=new ge,Ss=new I,Br=new I,Jf=new I,Qf=new Gi,tc=new I(1,0,0),ec=new I(0,1,0),nc=new I(0,0,1),ic={type:"added"},jf={type:"removed"},tr={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Ye extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new I,e=new Xn,n=new Gi,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ot}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Br,Ss,this.up):In.lookAt(Ss,Br,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(In),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jf),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,Jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ye.DEFAULT_UP=new I(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new I,Un=new I,Na=new I,Nn=new I,er=new I,nr=new I,rc=new I,Oa=new I,Fa=new I,Ba=new I,za=new xe,ka=new xe,Ga=new xe;class an{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),fn.subVectors(t,e),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){fn.subVectors(r,e),Un.subVectors(n,e),Na.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Un),l=fn.dot(Na),c=Un.dot(Un),u=Un.dot(Na),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return za.setScalar(0),ka.setScalar(0),Ga.setScalar(0),za.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(za,s.x),a.addScaledVector(ka,s.y),a.addScaledVector(Ga,s.z),a}static isFrontFacing(t,e,n,r){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;er.subVectors(r,n),nr.subVectors(s,n),Oa.subVectors(t,n);const l=er.dot(Oa),c=nr.dot(Oa);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,r);const u=er.dot(Fa),d=nr.dot(Fa);if(u>=0&&d<=u)return e.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(er,a);Ba.subVectors(t,s);const m=er.dot(Ba),g=nr.dot(Ba);if(g>=0&&m<=g)return e.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(nr,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return rc.subVectors(s,r),o=(d-u)/(d-u+(m-g)),e.copy(r).addScaledVector(rc,o);const f=1/(p+v+h);return a=v*f,o=h*f,e.copy(n).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=gl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Va(a,s,t+1/3),this.g=Va(a,s,t),this.b=Va(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Yt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ie(Le.r*255,0,255))*65536+Math.round(Ie(Le.g*255,0,255))*256+Math.round(Ie(Le.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,r=Le.g,s=Le.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=sn){Yt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,r=Le.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Ms);const n=Yr(ti.h,Ms.h,e),r=Yr(ti.s,Ms.s,e),s=Yr(ti.l,Ms.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new jt;jt.NAMES=Eu;let td=0;class cs extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Lr(),this.name="",this.blending=mr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class He extends cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new I,ys=new zt;class An{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class Tu extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Rn extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ed=0;const rn=new ge,Ha=new Ye,ir=new I,$e=new ls,zr=new ls,Te=new I;class qn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?wu:Tu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rn(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors($e.min,zr.min),$e.expandByPoint(Te),Te.addVectors($e.max,zr.max),$e.expandByPoint(Te)):($e.expandByPoint(zr.min),$e.expandByPoint(zr.max))}$e.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Te.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(t,c),Te.add(ir)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new I,l[N]=new I;const c=new I,u=new I,d=new I,h=new zt,m=new zt,g=new zt,v=new I,p=new I;function f(N,y,S){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,S),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[N].add(v),o[y].add(v),o[S].add(v),l[N].add(p),l[y].add(p),l[S].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,y=w.length;N<y;++N){const S=w[N],R=S.start,K=S.count;for(let G=R,q=R+K;G<q;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const T=new I,M=new I,k=new I,b=new I;function A(N){k.fromBufferAttribute(r,N),b.copy(k);const y=o[N];T.copy(y),T.sub(k.multiplyScalar(k.dot(y))).normalize(),M.crossVectors(b,y);const R=M.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,R)}for(let N=0,y=w.length;N<y;++N){const S=w[N],R=S.start,K=S.count;for(let G=R,q=R+K;G<q;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new An(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new ge,gi=new va,Es=new _a,ac=new I,Ts=new I,ws=new I,bs=new I,Wa=new I,As=new I,oc=new I,Rs=new I;class xn extends Ye{constructor(t=new qn,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){As.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Wa.fromBufferAttribute(d,t),a?As.addScaledVector(Wa,u):As.addScaledVector(Wa.sub(e),u))}e.add(As)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(Es.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Es,ac)===null||gi.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(sc.copy(s).invert(),gi.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=a[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,k=T;M<k;M+=3){const b=o.getX(M),A=o.getX(M+1),N=o.getX(M+2);r=Cs(this,f,t,n,c,u,d,b,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const w=o.getX(p),T=o.getX(p+1),M=o.getX(p+2);r=Cs(this,a,t,n,c,u,d,w,T,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=a[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,k=T;M<k;M+=3){const b=M,A=M+1,N=M+2;r=Cs(this,f,t,n,c,u,d,b,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const w=p,T=p+1,M=p+2;r=Cs(this,a,t,n,c,u,d,w,T,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function nd(i,t,e,n,r,s,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ui,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:i}}function Cs(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Ts),i.getVertexPosition(l,ws),i.getVertexPosition(c,bs);const u=nd(i,t,e,n,Ts,ws,bs,oc);if(u){const d=new I;an.getBarycoord(oc,Ts,ws,bs,d),r&&(u.uv=an.getInterpolatedAttribute(r,o,l,c,d,new zt)),s&&(u.uv1=an.getInterpolatedAttribute(s,o,l,c,d,new zt)),a&&(u.normal=an.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};an.getNormal(Ts,ws,bs,h.normal),u.face=h,u.barycoord=d}return u}class Xi extends qn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(d,2));function g(v,p,f,w,T,M,k,b,A,N,y){const S=M/A,R=k/N,K=M/2,G=k/2,q=b/2,j=A+1,W=N+1;let nt=0,H=0;const ot=new I;for(let dt=0;dt<W;dt++){const wt=dt*R-G;for(let kt=0;kt<j;kt++){const re=kt*S-K;ot[v]=re*w,ot[p]=wt*T,ot[f]=q,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[p]=0,ot[f]=b>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(kt/A),d.push(1-dt/N),nt+=1}}for(let dt=0;dt<N;dt++)for(let wt=0;wt<A;wt++){const kt=h+wt+j*dt,re=h+wt+j*(dt+1),Y=h+(wt+1)+j*(dt+1),it=h+(wt+1)+j*dt;l.push(kt,re,it),l.push(re,Y,it),H+=6}o.addGroup(m,H,y),m+=H,h+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Cr(i[e]);for(const r in n)t[r]=n[r]}return t}function id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const rd={clone:Cr,merge:Ne};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Au extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new I,lc=new zt,cc=new zt;class Je extends Au{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class od extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Je(rr,sr,t,e);r.layers=this.layers,this.add(r);const s=new Je(rr,sr,t,e);s.layers=this.layers,this.add(s);const a=new Je(rr,sr,t,e);a.layers=this.layers,this.add(a);const o=new Je(rr,sr,t,e);o.layers=this.layers,this.add(o);const l=new Je(rr,sr,t,e);l.layers=this.layers,this.add(l);const c=new Je(rr,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends Oe{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:wr,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ru(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xi(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:li});s.uniforms.tEquirect.value=e;const a=new xn(r,s),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=bn),new od(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Xa=new I,cd=new I,ud=new Ot;class ii{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Xa.subVectors(n,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),r=this.coplanarPoint(Xa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new _a,Ps=new I;class Cu{constructor(t=new ii,e=new ii,n=new ii,r=new ii,s=new ii,a=new ii){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],w=r[13],T=r[14],M=r[15];if(n[0].setComponents(l-s,h-c,p-m,M-f).normalize(),n[1].setComponents(l+s,h+c,p+m,M+f).normalize(),n[2].setComponents(l+a,h+u,p+g,M+w).normalize(),n[3].setComponents(l-a,h-u,p-g,M-w).normalize(),n[4].setComponents(l-o,h-d,p-v,M-T).normalize(),e===Gn)n[5].setComponents(l+o,h+d,p+v,M+T).normalize();else if(e===$s)n[5].setComponents(o,d,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ps.x=r.normal.x>0?t.max.x:t.min.x,Ps.y=r.normal.y>0?t.max.y:t.min.y,Ps.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function hd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class xa extends qn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=t/o,h=e/l,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){const w=f*h-a;for(let T=0;T<c;T++){const M=T*d-s;g.push(M,-w,0),v.push(0,0,1),p.push(T/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const T=w+c*f,M=w+c*(f+1),k=w+1+c*(f+1),b=w+1+c*f;m.push(T,M,b),m.push(M,k,b)}this.setIndex(m),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
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
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,bd=`#ifdef USE_BUMPMAP
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,hp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Bm=`#define TOON
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
}`,zm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Vm=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:fd,alphahash_pars_fragment:dd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:xd,batching_pars_vertex:Sd,batching_vertex:Md,begin_vertex:yd,beginnormal_vertex:Ed,bsdfs:Td,iridescence_fragment:wd,bumpmap_pars_fragment:bd,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Dd,color_pars_fragment:Ld,color_pars_vertex:Id,color_vertex:Ud,common:Nd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Bd,displacementmap_vertex:zd,emissivemap_fragment:kd,emissivemap_pars_fragment:Gd,colorspace_fragment:Vd,colorspace_pars_fragment:Hd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:qd,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:rp,envmap_vertex:Kd,fog_vertex:Zd,fog_pars_vertex:$d,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:ap,lights_phong_fragment:op,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:up,lights_fragment_begin:hp,lights_fragment_maps:fp,lights_fragment_end:dp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:vp,map_pars_fragment:xp,map_particle_fragment:Sp,map_particle_pars_fragment:Mp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:Tp,morphcolor_vertex:wp,morphnormal_vertex:bp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Dp,normal_pars_vertex:Lp,normal_vertex:Ip,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Bp,opaque_fragment:zp,packing:kp,premultiplied_alpha_fragment:Gp,project_vertex:Vp,dithering_fragment:Hp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Kp,shadowmap_vertex:Zp,shadowmask_pars_fragment:$p,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:jp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:rm,transmission_fragment:sm,transmission_pars_fragment:am,uv_pars_fragment:om,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:um,background_vert:hm,background_frag:fm,backgroundCube_vert:dm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:vm,distanceRGBA_vert:xm,distanceRGBA_frag:Sm,equirect_vert:Mm,equirect_frag:ym,linedashed_vert:Em,linedashed_frag:Tm,meshbasic_vert:wm,meshbasic_frag:bm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Dm,meshnormal_frag:Lm,meshphong_vert:Im,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Om,meshtoon_vert:Fm,meshtoon_frag:Bm,points_vert:zm,points_frag:km,shadow_vert:Gm,shadow_frag:Vm,sprite_vert:Hm,sprite_frag:Wm},st={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},wn={basic:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new jt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ne([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ne([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ne([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new jt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ne([st.points,st.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ne([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ne([st.common,st.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ne([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ne([st.sprite,st.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ne([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ne([st.lights,st.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};wn.physical={uniforms:Ne([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ds={r:0,b:0,g:0},vi=new Xn,Xm=new ge;function qm(i,t,e,n,r,s,a){const o=new jt(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function g(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?e:t).get(T)),T}function v(w){let T=!1;const M=g(w);M===null?f(o,l):M&&M.isColor&&(f(M,1),T=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===ma)?(u===void 0&&(u=new xn(new Xi(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Cr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(T.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(vi)),u.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ee,(d!==M||h!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xn(new xa(2,2),new hi({name:"BackgroundMaterial",uniforms:Cr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,T){w.getRGB(Ds,bu(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:v,addToRenderList:p}}function Ym(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(S,R,K,G,q){let j=!1;const W=d(G,K,R);s!==W&&(s=W,c(s.object)),j=m(S,G,K,q),j&&g(S,G,K,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(S,R,K,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,R,K){const G=K.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let j=q[R.id];j===void 0&&(j={},q[R.id]=j);let W=j[G];return W===void 0&&(W=h(l()),j[G]=W),W}function h(S){const R=[],K=[],G=[];for(let q=0;q<e;q++)R[q]=0,K[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:K,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,R,K,G){const q=s.attributes,j=R.attributes;let W=0;const nt=K.getAttributes();for(const H in nt)if(nt[H].location>=0){const dt=q[H];let wt=j[H];if(wt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),dt===void 0||dt.attribute!==wt||wt&&dt.data!==wt.data)return!0;W++}return s.attributesNum!==W||s.index!==G}function g(S,R,K,G){const q={},j=R.attributes;let W=0;const nt=K.getAttributes();for(const H in nt)if(nt[H].location>=0){let dt=j[H];dt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));const wt={};wt.attribute=dt,dt&&dt.data&&(wt.data=dt.data),q[H]=wt,W++}s.attributes=q,s.attributesNum=W,s.index=G}function v(){const S=s.newAttributes;for(let R=0,K=S.length;R<K;R++)S[R]=0}function p(S){f(S,0)}function f(S,R){const K=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;K[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),q[S]!==R&&(i.vertexAttribDivisor(S,R),q[S]=R)}function w(){const S=s.newAttributes,R=s.enabledAttributes;for(let K=0,G=R.length;K<G;K++)R[K]!==S[K]&&(i.disableVertexAttribArray(K),R[K]=0)}function T(S,R,K,G,q,j,W){W===!0?i.vertexAttribIPointer(S,R,K,q,j):i.vertexAttribPointer(S,R,K,G,q,j)}function M(S,R,K,G){v();const q=G.attributes,j=K.getAttributes(),W=R.defaultAttributeValues;for(const nt in j){const H=j[nt];if(H.location>=0){let ot=q[nt];if(ot===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const dt=ot.normalized,wt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const re=kt.buffer,Y=kt.type,it=kt.bytesPerElement,Mt=Y===i.INT||Y===i.UNSIGNED_INT||ot.gpuType===ul;if(ot.isInterleavedBufferAttribute){const lt=ot.data,Pt=lt.stride,It=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<H.locationSize;Gt++)f(H.location+Gt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<H.locationSize;Gt++)p(H.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Gt=0;Gt<H.locationSize;Gt++)T(H.location+Gt,wt/H.locationSize,Y,dt,Pt*it,(It+wt/H.locationSize*Gt)*it,Mt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)f(H.location+lt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let lt=0;lt<H.locationSize;lt++)T(H.location+lt,wt/H.locationSize,Y,dt,wt*it,wt/H.locationSize*lt*it,Mt)}}else if(W!==void 0){const dt=W[nt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}w()}function k(){N();for(const S in n){const R=n[S];for(const K in R){const G=R[K];for(const q in G)u(G[q].object),delete G[q];delete R[K]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const K in R){const G=R[K];for(const q in G)u(G[q].object),delete G[q];delete R[K]}delete n[S.id]}function A(S){for(const R in n){const K=n[R];if(K[S.id]===void 0)continue;const G=K[S.id];for(const q in G)u(G[q].object),delete G[q];delete K[S.id]}}function N(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:k,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Km(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,n,1)}function l(c,u,d,h){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!N)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:k,maxSamples:b}}function $m(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ii,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||r;return r=h,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const w=s?0:n,T=w*4;let M=f.clippingState||null;l.value=M,M=u(g,h,T,m);for(let k=0;k!==T;++k)M[k]=e[k];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,M=m;T!==v;++T,M+=4)a.copy(d[T]).applyMatrix4(w,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Jm(i){let t=new WeakMap;function e(a,o){return o===vo?a.mapping=wr:o===xo&&(a.mapping=br),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vo||o===xo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ld(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Qm extends Au{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const dr=4,uc=[.125,.215,.35,.446,.526,.582],bi=20,qa=new Qm,hc=new jt;let Ya=null,Ka=0,Za=0,$a=!1;const Mi=(1+Math.sqrt(5))/2,ar=1/Mi,fc=[new I(-Mi,ar,0),new I(Mi,ar,0),new I(-ar,0,Mi),new I(ar,0,Mi),new I(0,Mi,-ar),new I(0,Mi,ar),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,Ka,Za),this._renderer.xr.enabled=$a,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:os,format:vn,colorSpace:Dr,depthBuffer:!1},r=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(s)),this._blurMaterial=tg(s,t,e)}return r}_compileMaterial(t){const e=new xn(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,r){const o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(hc),u.toneMapping=ci,u.autoClear=!1;const m=new He({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new xn(new Xi,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(hc),v=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const T=this._cubeSize;Ls(r,w*T,f>2?T:0,T,T),u.setRenderTarget(r),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===wr||t.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new xn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fc[(r-s-1)%fc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*bi-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):bi;p>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);const f=[];let w=0;for(let A=0;A<bi;++A){const N=A/v,y=Math.exp(-N*N/2);f.push(y),A===0?w+=y:A<p&&(w+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-n;const M=this._sizeLods[r],k=3*M*(r>T-dr?r-T+dr:0),b=4*(this._cubeSize-M);Ls(e,k,b,3*M,2*M),l.setRenderTarget(e),l.render(d,qa)}}function jm(i){const t=[],e=[],n=[];let r=i;const s=i-dr+1+uc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-dr?l=uc[a-i+dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,f=1,w=new Float32Array(v*g*m),T=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,N=b>2?0:-1,y=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];w.set(y,v*g*b),T.set(h,p*g*b);const S=[b,b,b,b,b,b];M.set(S,f*g*b)}const k=new qn;k.setAttribute("position",new An(w,v)),k.setAttribute("uv",new An(T,p)),k.setAttribute("faceIndex",new An(M,f)),t.push(k),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){const n=new ki(i,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function tg(i,t,e){const n=new Float32Array(bi),r=new I(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function mc(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function gc(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function eg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vo||l===xo,u=l===wr||l===br;if(c||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new dc(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new dc(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ng(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ig(i,t,e,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let T=0,M=w.length;T<M;T+=3){const k=w[T+0],b=w[T+1],A=w[T+2];h.push(k,b,b,A,A,k)}}else if(g!==void 0){const w=g.array;v=g.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const k=T+0,b=T+1,A=T+2;h.push(k,b,b,A,A,k)}}else return;const p=new(Su(h)?wu:Tu)(h,1);p.version=v;const f=s.get(d);f&&t.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function rg(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*a),e.update(m,n,1)}function c(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,h*a,g),e.update(m,n,g))}function u(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function d(h,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/a,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*v[w];e.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ag(i,t,e){const n=new WeakMap,r=new xe;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let M=o.attributes.position.count*T,k=1;M>t.maxTextureSize&&(k=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*k*4*d),A=new yu(b,M,k,d);A.type=kn,A.needsUpdate=!0;const N=T*4;for(let S=0;S<d;S++){const R=p[S],K=f[S],G=w[S],q=M*k*4*S;for(let j=0;j<R.count;j++){const W=j*N;m===!0&&(r.fromBufferAttribute(R,j),b[q+W+0]=r.x,b[q+W+1]=r.y,b[q+W+2]=r.z,b[q+W+3]=0),g===!0&&(r.fromBufferAttribute(K,j),b[q+W+4]=r.x,b[q+W+5]=r.y,b[q+W+6]=r.z,b[q+W+7]=0),v===!0&&(r.fromBufferAttribute(G,j),b[q+W+8]=r.x,b[q+W+9]=r.y,b[q+W+10]=r.z,b[q+W+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new zt(M,k)},n.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function og(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Du extends Oe{constructor(t,e,n,r,s,a,o,l,c,u=gr){if(u!==gr&&u!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gr&&(n=zi),n===void 0&&u===Rr&&(n=Ar),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lu=new Oe,_c=new Du(1,1),Iu=new yu,Uu=new qf,Nu=new Ru,vc=[],xc=[],Sc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function Ir(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=vc[r];if(s===void 0&&(s=new Float32Array(r),vc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sa(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),Ee(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),Ee(e,n)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),Ee(e,n)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Eg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=xu,s=_c):s=Lu,e.setTexture2D(t||s,r)}function Tg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Uu,r)}function wg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Nu,r)}function bg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Iu,r)}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return hg;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return xg;case 36294:return Sg;case 36295:return Mg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return bg}}function Rg(i,t){i.uniform1fv(this.addr,t)}function Cg(i,t){const e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function Pg(i,t){const e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){const e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function Lg(i,t){const e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ig(i,t){const e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ug(i,t){const e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ng(i,t){i.uniform1iv(this.addr,t)}function Og(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Bg(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function kg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function Vg(i,t){i.uniform4uiv(this.addr,t)}function Hg(i,t,e){const n=this.cache,r=t.length,s=Sa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Lu,s[a])}function Wg(i,t,e){const n=this.cache,r=t.length,s=Sa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Uu,s[a])}function Xg(i,t,e){const n=this.cache,r=t.length,s=Sa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Nu,s[a])}function qg(i,t,e){const n=this.cache,r=t.length,s=Sa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Iu,s[a])}function Yg(i){switch(i){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Dg;case 35674:return Lg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Og;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}class Kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class Zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}}class $g{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function Ec(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){const n=i.name,r=n.length;for(Ja.lastIndex=0;;){const s=Ja.exec(n),a=Ja.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ec(e,c===void 0?new Kg(o,i,t):new Zg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new $g(o),Ec(e,d)),e=d}}}class Ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Jg(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qg=37297;let jg=0;function t_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wc=new Ot;function e_(i){Yt._getMatrix(wc,Yt.workingColorSpace,i);const t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(t),a)}else return r}function n_(i,t){const e=e_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i_(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case rf:e="Cineon";break;case sf:e="ACESFilmic";break;case of:e="AgX";break;case lf:e="Neutral";break;case af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new I;function r_(){Yt.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function a_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wr(i){return i!==""}function Ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(l_,u_)}const c_=new Map;function u_(i,t){let e=Bt[t];if(e===void 0){const n=c_.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ko(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(h_,f_)}function f_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wr:case br:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function g_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function __(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=d_(e),c=p_(e),u=m_(e),d=g_(e),h=__(e),m=s_(e),g=a_(s),v=r.createProgram();let p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),f.length>0&&(f+=`
`)):(p=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),f=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ci?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=Ko(a),a=Ac(a,e),a=Rc(a,e),o=Ko(o),o=Ac(o,e),o=Rc(o,e),a=Cc(a),o=Cc(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=w+p+a,M=w+f+o,k=Tc(r,r.VERTEX_SHADER,T),b=Tc(r,r.FRAGMENT_SHADER,M);r.attachShader(v,k),r.attachShader(v,b),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(k).trim(),q=r.getShaderInfoLog(b).trim();let j=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,k,b);else{const nt=bc(r,k,"vertex"),H=bc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+K+`
`+nt+`
`+H)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(G===""||q==="")&&(W=!1);W&&(R.diagnostics={runnable:j,programLog:K,vertexShader:{log:G,prefix:p},fragmentShader:{log:q,prefix:f}})}r.deleteShader(k),r.deleteShader(b),N=new Ks(r,v),y=o_(r,v)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Qg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=b,this}let x_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M_(t),e.set(t,n)),n}}class M_{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}}function y_(i,t,e,n,r,s,a){const o=new _l,l=new S_,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,R,K,G){const q=K.fog,j=G.geometry,W=y.isMeshStandardMaterial?K.environment:null,nt=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=nt&&nt.mapping===ma?nt.image.height:null,ot=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const dt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=dt!==void 0?dt.length:0;let kt=0;j.morphAttributes.position!==void 0&&(kt=1),j.morphAttributes.normal!==void 0&&(kt=2),j.morphAttributes.color!==void 0&&(kt=3);let re,Y,it,Mt;if(ot){const Qt=wn[ot];re=Qt.vertexShader,Y=Qt.fragmentShader}else re=y.vertexShader,Y=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),Mt=l.getFragmentShaderID(y);const lt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),It=G.isInstancedMesh===!0,Gt=G.isBatchedMesh===!0,de=!!y.map,Xt=!!y.matcap,_e=!!nt,U=!!y.aoMap,tn=!!y.lightMap,Vt=!!y.bumpMap,Ht=!!y.normalMap,Rt=!!y.displacementMap,oe=!!y.emissiveMap,bt=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,F=y.clearcoat>0,$=y.dispersion>0,Q=y.iridescence>0,X=y.sheen>0,yt=y.transmission>0,ct=_&&!!y.anisotropyMap,pt=F&&!!y.clearcoatMap,qt=F&&!!y.clearcoatNormalMap,tt=F&&!!y.clearcoatRoughnessMap,mt=Q&&!!y.iridescenceMap,Ct=Q&&!!y.iridescenceThicknessMap,Dt=X&&!!y.sheenColorMap,gt=X&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,Ft=!!y.specularColorMap,se=!!y.specularIntensityMap,C=yt&&!!y.transmissionMap,at=yt&&!!y.thicknessMap,V=!!y.gradientMap,J=!!y.alphaMap,ft=y.alphaTest>0,ut=!!y.alphaHash,Ut=!!y.extensions;let me=ci;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(me=i.toneMapping);const Pe={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:Y,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Gt,batchingColor:Gt&&G._colorsTexture!==null,instancing:It,instancingColor:It&&G.instanceColor!==null,instancingMorph:It&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Dr,alphaToCoverage:!!y.alphaToCoverage,map:de,matcap:Xt,envMap:_e,envMapMode:_e&&nt.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:tn,bumpMap:Vt,normalMap:Ht,displacementMap:h&&Rt,emissiveMap:oe,normalMapObjectSpace:Ht&&y.normalMapType===df,normalMapTangentSpace:Ht&&y.normalMapType===ff,metalnessMap:bt,roughnessMap:E,anisotropy:_,anisotropyMap:ct,clearcoat:F,clearcoatMap:pt,clearcoatNormalMap:qt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:X,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Ft,specularIntensityMap:se,transmission:yt,transmissionMap:C,thicknessMap:at,gradientMap:V,opaque:y.transparent===!1&&y.blending===mr&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:y.combine,mapUv:de&&v(y.map.channel),aoMapUv:U&&v(y.aoMap.channel),lightMapUv:tn&&v(y.lightMap.channel),bumpMapUv:Vt&&v(y.bumpMap.channel),normalMapUv:Ht&&v(y.normalMap.channel),displacementMapUv:Rt&&v(y.displacementMap.channel),emissiveMapUv:oe&&v(y.emissiveMap.channel),metalnessMapUv:bt&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:ct&&v(y.anisotropyMap.channel),clearcoatMapUv:pt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(y.sheenRoughnessMap.channel),specularMapUv:Wt&&v(y.specularMap.channel),specularColorMapUv:Ft&&v(y.specularColorMap.channel),specularIntensityMapUv:se&&v(y.specularIntensityMap.channel),transmissionMapUv:C&&v(y.transmissionMap.channel),thicknessMapUv:at&&v(y.thicknessMap.channel),alphaMapUv:J&&v(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ht||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(de||J),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(w(S,y),T(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function w(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function T(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=g[y.type];let R;if(S){const K=wn[S];R=rd.clone(K.uniforms)}else R=y.uniforms;return R}function k(y,S){let R;for(let K=0,G=u.length;K<G;K++){const q=u[K];if(q.cacheKey===S){R=q,++R.usedTimes;break}}return R===void 0&&(R=new v_(i,S,y,s),u.push(R)),R}function b(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:k,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:N}}function E_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function T_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,h,m,g,v,p){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=p),t++,f}function o(d,h,m,g,v,p){const f=a(d,h,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(d,h,m,g,v,p){const f=a(d,h,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(d,h){e.length>1&&e.sort(d||T_),n.length>1&&n.sort(h||Dc),r.length>1&&r.sort(h||Dc)}function u(){for(let d=t,h=i.length;d<h;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function w_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Lc,i.set(n,[a])):r>=s.length?(a=new Lc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function b_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new jt};break;case"SpotLight":e={position:new I,direction:new I,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function A_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let R_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i){const t=new b_,e=A_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new ge,a=new ge;function o(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,w=0,T=0,M=0,k=0,b=0,A=0;c.sort(C_);for(let y=0,S=c.length;y<S;y++){const R=c[y],K=R.color,G=R.intensity,q=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=K.r*G,d+=K.g*G,h+=K.b*G;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],G);A++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const nt=R.shadow,H=e.get(R);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=R.shadow.matrix,w++}n.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(K).multiplyScalar(G),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[v]=W;const nt=R.shadow;if(R.map&&(n.spotLightMap[k]=R.map,k++,nt.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[v]=nt.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=j,M++}v++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(K).multiplyScalar(G),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=W,p++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const nt=R.shadow,H=e.get(R);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,H.shadowCameraNear=nt.camera.near,H.shadowCameraFar=nt.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(G),W.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[f]=W,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==p||N.hemiLength!==f||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==M||N.numSpotMaps!==k||N.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+k-b,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=p,N.hemiLength=f,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=M,N.numSpotMaps=k,N.numLightProbes=A,n.version=R_++)}function l(c,u){let d=0,h=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const T=c[f];if(T.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(T.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Ic(i){const t=new P_(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function D_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ic(i),t.set(r,[o])):s>=a.length?(o=new Ic(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class L_ extends cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I_ extends cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`;function O_(i,t,e){let n=new Cu;const r=new zt,s=new zt,a=new xe,o=new L_({depthPacking:hf}),l=new I_,c={},u=e.maxTextureSize,d={[ui]:qe,[qe]:ui,[zn]:zn},h=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new qn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let f=this.type;this.render=function(b,A,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),K=i.state;K.setBlending(li),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const G=f!==On&&this.type===On,q=f===On&&this.type!==On;for(let j=0,W=b.length;j<W;j++){const nt=b[j],H=nt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ot=H.getFrameExtents();if(r.multiply(ot),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,H.mapSize.y=s.y)),H.map===null||G===!0||q===!0){const wt=this.type!==On?{minFilter:Sn,magFilter:Sn}:{};H.map!==null&&H.map.dispose(),H.map=new ki(r.x,r.y,wt),H.map.texture.name=nt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const dt=H.getViewportCount();for(let wt=0;wt<dt;wt++){const kt=H.getViewport(wt);a.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),K.viewport(a),H.updateMatrices(nt,wt),n=H.getFrustum(),M(A,N,H.camera,nt,this.type)}H.isPointLightShadow!==!0&&this.type===On&&w(H,N),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,S,R)};function w(b,A){const N=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ki(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,N,h,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,N,m,v,null)}function T(b,A,N,y){let S=null;const R=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)S=R;else if(S=N.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const K=S.uuid,G=A.uuid;let q=c[K];q===void 0&&(q={},c[K]=q);let j=q[G];j===void 0&&(j=S.clone(),q[G]=j,A.addEventListener("dispose",k)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,y===On?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=i.properties.get(S);K.light=N}return S}function M(b,A,N,y,S){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===On)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const G=t.update(b),q=b.material;if(Array.isArray(q)){const j=G.groups;for(let W=0,nt=j.length;W<nt;W++){const H=j[W],ot=q[H.materialIndex];if(ot&&ot.visible){const dt=T(b,ot,y,S);b.onBeforeShadow(i,b,A,N,G,dt,H),i.renderBufferDirect(N,null,G,dt,b,H),b.onAfterShadow(i,b,A,N,G,dt,H)}}}else if(q.visible){const j=T(b,q,y,S);b.onBeforeShadow(i,b,A,N,G,j,null),i.renderBufferDirect(N,null,G,j,b,null),b.onAfterShadow(i,b,A,N,G,j,null)}}const K=b.children;for(let G=0,q=K.length;G<q;G++)M(K[G],A,N,y,S)}function k(b){b.target.removeEventListener("dispose",k);for(const N in c){const y=c[N],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const F_={[uo]:ho,[fo]:go,[po]:_o,[Tr]:mo,[ho]:uo,[go]:fo,[_o]:po,[mo]:Tr};function B_(i,t){function e(){let C=!1;const at=new xe;let V=null;const J=new xe(0,0,0,0);return{setMask:function(ft){V!==ft&&!C&&(i.colorMask(ft,ft,ft,ft),V=ft)},setLocked:function(ft){C=ft},setClear:function(ft,ut,Ut,me,Pe){Pe===!0&&(ft*=me,ut*=me,Ut*=me),at.set(ft,ut,Ut,me),J.equals(at)===!1&&(i.clearColor(ft,ut,Ut,me),J.copy(at))},reset:function(){C=!1,V=null,J.set(-1,0,0,0)}}}function n(){let C=!1,at=!1,V=null,J=null,ft=null;return{setReversed:function(ut){if(at!==ut){const Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const me=ft;ft=null,this.setClear(me)}at=ut},getReversed:function(){return at},setTest:function(ut){ut?lt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ut){V!==ut&&!C&&(i.depthMask(ut),V=ut)},setFunc:function(ut){if(at&&(ut=F_[ut]),J!==ut){switch(ut){case uo:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case _o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ut}},setLocked:function(ut){C=ut},setClear:function(ut){ft!==ut&&(at&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){C=!1,V=null,J=null,ft=null,at=!1}}}function r(){let C=!1,at=null,V=null,J=null,ft=null,ut=null,Ut=null,me=null,Pe=null;return{setTest:function(Qt){C||(Qt?lt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!C&&(i.stencilMask(Qt),at=Qt)},setFunc:function(Qt,ln,Cn){(V!==Qt||J!==ln||ft!==Cn)&&(i.stencilFunc(Qt,ln,Cn),V=Qt,J=ln,ft=Cn)},setOp:function(Qt,ln,Cn){(ut!==Qt||Ut!==ln||me!==Cn)&&(i.stencilOp(Qt,ln,Cn),ut=Qt,Ut=ln,me=Cn)},setLocked:function(Qt){C=Qt},setClear:function(Qt){Pe!==Qt&&(i.clearStencil(Qt),Pe=Qt)},reset:function(){C=!1,at=null,V=null,J=null,ft=null,ut=null,Ut=null,me=null,Pe=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,T=null,M=null,k=null,b=null,A=new jt(0,0,0),N=0,y=!1,S=null,R=null,K=null,G=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=nt>=1):H.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=nt>=2);let ot=null,dt={};const wt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),re=new xe().fromArray(wt),Y=new xe().fromArray(kt);function it(C,at,V,J){const ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(C,ut),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<V;Ut++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(at+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}const Mt={};Mt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Tr),Vt(!1),Ht(Ol),lt(i.CULL_FACE),U(li);function lt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Pt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function It(C,at){return d[C]!==at?(i.bindFramebuffer(C,at),d[C]=at,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Gt(C,at){let V=m,J=!1;if(C){V=h.get(at),V===void 0&&(V=[],h.set(at,V));const ft=C.textures;if(V.length!==ft.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ut=ft.length;ut<Ut;ut++)V[ut]=i.COLOR_ATTACHMENT0+ut;V.length=ft.length,J=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,J=!0);J&&i.drawBuffers(V)}function de(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const Xt={[wi]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};Xt[Bh]=i.MIN,Xt[zh]=i.MAX;const _e={[kh]:i.ZERO,[Gh]:i.ONE,[Vh]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[Kh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Jh]:i.CONSTANT_ALPHA,[Qh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(C,at,V,J,ft,ut,Ut,me,Pe,Qt){if(C===li){v===!0&&(Pt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),C!==Nh){if(C!==p||Qt!==y){if((f!==wi||M!==wi)&&(i.blendEquation(i.FUNC_ADD),f=wi,M=wi),Qt)switch(C){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,T=null,k=null,b=null,A.set(0,0,0),N=0,p=C,y=Qt}return}ft=ft||at,ut=ut||V,Ut=Ut||J,(at!==f||ft!==M)&&(i.blendEquationSeparate(Xt[at],Xt[ft]),f=at,M=ft),(V!==w||J!==T||ut!==k||Ut!==b)&&(i.blendFuncSeparate(_e[V],_e[J],_e[ut],_e[Ut]),w=V,T=J,k=ut,b=Ut),(me.equals(A)===!1||Pe!==N)&&(i.blendColor(me.r,me.g,me.b,Pe),A.copy(me),N=Pe),p=C,y=!1}function tn(C,at){C.side===zn?Pt(i.CULL_FACE):lt(i.CULL_FACE);let V=C.side===qe;at&&(V=!V),Vt(V),C.blending===mr&&C.transparent===!1?U(li):U(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const J=C.stencilWrite;o.setTest(J),J&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(C){S!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),S=C)}function Ht(C){C!==Lh?(lt(i.CULL_FACE),C!==R&&(C===Ol?i.cullFace(i.BACK):C===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),R=C}function Rt(C){C!==K&&(W&&i.lineWidth(C),K=C)}function oe(C,at,V){C?(lt(i.POLYGON_OFFSET_FILL),(G!==at||q!==V)&&(i.polygonOffset(at,V),G=at,q=V)):Pt(i.POLYGON_OFFSET_FILL)}function bt(C){C?lt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function E(C){C===void 0&&(C=i.TEXTURE0+j-1),ot!==C&&(i.activeTexture(C),ot=C)}function _(C,at,V){V===void 0&&(ot===null?V=i.TEXTURE0+j-1:V=ot);let J=dt[V];J===void 0&&(J={type:void 0,texture:void 0},dt[V]=J),(J.type!==C||J.texture!==at)&&(ot!==V&&(i.activeTexture(V),ot=V),i.bindTexture(C,at||Mt[C]),J.type=C,J.texture=at)}function F(){const C=dt[ot];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(C){re.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function gt(C){Y.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Y.copy(C))}function Wt(C,at){let V=c.get(at);V===void 0&&(V=new WeakMap,c.set(at,V));let J=V.get(C);J===void 0&&(J=i.getUniformBlockIndex(at,C.name),V.set(C,J))}function Ft(C,at){const J=c.get(at).get(C);l.get(at)!==J&&(i.uniformBlockBinding(at,J,C.__bindingPointIndex),l.set(at,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,dt={},d={},h=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,T=null,M=null,k=null,b=null,A=new jt(0,0,0),N=0,y=!1,S=null,R=null,K=null,G=null,q=null,re.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:Pt,bindFramebuffer:It,drawBuffers:Gt,useProgram:de,setBlending:U,setMaterial:tn,setFlipSided:Vt,setCullFace:Ht,setLineWidth:Rt,setPolygonOffset:oe,setScissorTest:bt,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ft,texStorage2D:qt,texStorage3D:tt,texSubImage2D:X,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Dt,viewport:gt,reset:se}}function Uc(i,t,e,n){const r=z_(n);switch(e){case fu:return i*t;case pu:return i*t;case mu:return i*t*2;case gu:return i*t/r.components*r.byteLength;case dl:return i*t/r.components*r.byteLength;case _u:return i*t*2/r.components*r.byteLength;case pl:return i*t*2/r.components*r.byteLength;case du:return i*t*3/r.components*r.byteLength;case vn:return i*t*4/r.components*r.byteLength;case ml:return i*t*4/r.components*r.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:case wo:return Math.max(i,16)*Math.max(t,8)/4;case yo:case To:return Math.max(i,8)*Math.max(t,8)/2;case bo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ys:case Ho:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vu:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z_(i){switch(i){case Wn:case cu:return{byteLength:1,components:1};case ts:case uu:case os:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case zi:case ul:case kn:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function k_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Js("canvas")}function v(E,_,F){let $=1;const Q=bt(E);if((Q.width>F||Q.height>F)&&($=F/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor($*Q.width),yt=Math.floor($*Q.height);d===void 0&&(d=g(X,yt));const ct=_?g(X,yt):d;return ct.width=X,ct.height=yt,ct.getContext("2d").drawImage(E,0,0,X,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+yt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,F,$,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){const yt=Q?ga:Yt.getTransfer($);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=yt===ee?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(E,_){let F;return E?_===null||_===zi||_===Ar?F=i.DEPTH24_STENCIL8:_===kn?F=i.DEPTH32F_STENCIL8:_===ts&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===Ar?F=i.DEPTH_COMPONENT24:_===kn?F=i.DEPTH_COMPONENT32F:_===ts&&(F=i.DEPTH_COMPONENT16),F}function k(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Sn&&E.minFilter!==bn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function b(E){const _=E.target;_.removeEventListener("dispose",b),N(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),S(_)}function N(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,$=h.get(F);if($){const Q=$[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(E),Object.keys($).length===0&&h.delete(F)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,$=h.get(F);delete $[_.__cacheKey],a.memory.textures--}function S(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Q=0;Q<_.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let $=0,Q=F.length;$<Q;$++){const X=n.get(F[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(E)}let R=0;function K(){R=0}function G(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function j(E,_){const F=n.get(E);if(E.isVideoTexture&&Rt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function W(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function nt(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function H(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){it(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ot={[So]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},dt={[Sn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},wt={[pf]:i.NEVER,[Sf]:i.ALWAYS,[mf]:i.LESS,[xu]:i.LEQUAL,[gf]:i.EQUAL,[xf]:i.GEQUAL,[_f]:i.GREATER,[vf]:i.NOTEQUAL};function kt(E,_){if(_.type===kn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===bn||_.magFilter===wa||_.magFilter===ds||_.magFilter===Di||_.minFilter===bn||_.minFilter===wa||_.minFilter===ds||_.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ot[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ot[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ot[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,dt[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,wt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Sn||_.minFilter!==ds&&_.minFilter!==Di||_.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function re(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",b));const $=_.source;let Q=h.get($);Q===void 0&&(Q={},h.set($,Q));const X=q(_);if(X!==E.__cacheKey){Q[X]===void 0&&(Q[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[X].usedTimes++;const yt=Q[E.__cacheKey];yt!==void 0&&(Q[E.__cacheKey].usedTimes--,yt.usedTimes===0&&y(_)),E.__cacheKey=X,E.__webglTexture=Q[X].texture}return F}function Y(E,_,F){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Q=re(E,_),X=_.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+F);const yt=n.get(X);if(X.version!==yt.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);const ct=Yt.getPrimaries(Yt.workingColorSpace),pt=_.colorSpace===si?null:Yt.getPrimaries(_.colorSpace),qt=_.colorSpace===si||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=v(_.image,!1,r.maxTextureSize);tt=oe(_,tt);const mt=s.convert(_.format,_.colorSpace),Ct=s.convert(_.type);let Dt=T(_.internalFormat,mt,Ct,_.colorSpace,_.isVideoTexture);kt($,_);let gt;const Wt=_.mipmaps,Ft=_.isVideoTexture!==!0,se=yt.__version===void 0||Q===!0,C=X.dataReady,at=k(_,tt);if(_.isDepthTexture)Dt=M(_.format===Rr,_.type),se&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Dt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,tt.width,tt.height,0,mt,Ct,null));else if(_.isDataTexture)if(Wt.length>0){Ft&&se&&e.texStorage2D(i.TEXTURE_2D,at,Dt,Wt[0].width,Wt[0].height);for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],Ft?C&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,V,Dt,gt.width,gt.height,0,mt,Ct,gt.data);_.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(i.TEXTURE_2D,at,Dt,tt.width,tt.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Ct,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,tt.width,tt.height,0,mt,Ct,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Dt,Wt[0].width,Wt[0].height,tt.depth);for(let V=0,J=Wt.length;V<J;V++)if(gt=Wt[V],_.format!==vn)if(mt!==null)if(Ft){if(C)if(_.layerUpdates.size>0){const ft=Uc(gt.width,gt.height,_.format,_.type);for(const ut of _.layerUpdates){const Ut=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ut,gt.width,gt.height,1,mt,Ut)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Dt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,tt.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Dt,gt.width,gt.height,tt.depth,0,mt,Ct,gt.data)}else{Ft&&se&&e.texStorage2D(i.TEXTURE_2D,at,Dt,Wt[0].width,Wt[0].height);for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],_.format!==vn?mt!==null?Ft?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?C&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,V,Dt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(_.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Dt,tt.width,tt.height,tt.depth),C)if(_.layerUpdates.size>0){const V=Uc(tt.width,tt.height,_.format,_.type);for(const J of _.layerUpdates){const ft=tt.data.subarray(J*V/tt.data.BYTES_PER_ELEMENT,(J+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,mt,Ct,ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(_.isData3DTexture)Ft?(se&&e.texStorage3D(i.TEXTURE_3D,at,Dt,tt.width,tt.height,tt.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(_.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(i.TEXTURE_2D,at,Dt,tt.width,tt.height);else{let V=tt.width,J=tt.height;for(let ft=0;ft<at;ft++)e.texImage2D(i.TEXTURE_2D,ft,Dt,V,J,0,mt,Ct,null),V>>=1,J>>=1}}else if(Wt.length>0){if(Ft&&se){const V=bt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,at,Dt,V.width,V.height)}for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],Ft?C&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,V,Dt,mt,Ct,gt);_.generateMipmaps=!1}else if(Ft){if(se){const V=bt(tt);e.texStorage2D(i.TEXTURE_2D,at,Dt,V.width,V.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,tt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,mt,Ct,tt);p(_)&&f($),yt.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function it(E,_,F){if(_.image.length!==6)return;const $=re(E,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const X=n.get(Q);if(Q.version!==X.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const yt=Yt.getPrimaries(Yt.workingColorSpace),ct=_.colorSpace===si?null:Yt.getPrimaries(_.colorSpace),pt=_.colorSpace===si||yt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!qt&&!tt?mt[J]=v(_.image[J],!0,r.maxCubemapSize):mt[J]=tt?_.image[J].image:_.image[J],mt[J]=oe(_,mt[J]);const Ct=mt[0],Dt=s.convert(_.format,_.colorSpace),gt=s.convert(_.type),Wt=T(_.internalFormat,Dt,gt,_.colorSpace),Ft=_.isVideoTexture!==!0,se=X.__version===void 0||$===!0,C=Q.dataReady;let at=k(_,Ct);kt(i.TEXTURE_CUBE_MAP,_);let V;if(qt){Ft&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,Ct.width,Ct.height);for(let J=0;J<6;J++){V=mt[J].mipmaps;for(let ft=0;ft<V.length;ft++){const ut=V[ft];_.format!==vn?Dt!==null?Ft?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,gt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Wt,ut.width,ut.height,0,Dt,gt,ut.data)}}}else{if(V=_.mipmaps,Ft&&se){V.length>0&&at++;const J=bt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Dt,gt,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,mt[J].width,mt[J].height,0,Dt,gt,mt[J].data);for(let ft=0;ft<V.length;ft++){const Ut=V[ft].image[J].image;Ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ut.width,Ut.height,Dt,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Wt,Ut.width,Ut.height,0,Dt,gt,Ut.data)}}else{Ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,gt,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Dt,gt,mt[J]);for(let ft=0;ft<V.length;ft++){const ut=V[ft];Ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Dt,gt,ut.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Wt,Dt,gt,ut.image[J])}}}p(_)&&f(i.TEXTURE_CUBE_MAP),X.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Mt(E,_,F,$,Q,X){const yt=s.convert(F.format,F.colorSpace),ct=s.convert(F.type),pt=T(F.internalFormat,yt,ct,F.colorSpace),qt=n.get(_),tt=n.get(F);if(tt.__renderTarget=_,!qt.__hasExternalTextures){const mt=Math.max(1,_.width>>X),Ct=Math.max(1,_.height>>X);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,X,pt,mt,Ct,_.depth,0,yt,ct,null):e.texImage2D(Q,X,pt,mt,Ct,0,yt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ht(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,tt.__webglTexture,0,Vt(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,tt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,Q=$&&$.isDepthTexture?$.type:null,X=M(_.stencilBuffer,Q),yt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Vt(_);Ht(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,E)}else{const $=_.textures;for(let Q=0;Q<$.length;Q++){const X=$[Q],yt=s.convert(X.format,X.colorSpace),ct=s.convert(X.type),pt=T(X.internalFormat,yt,ct,X.colorSpace),qt=Vt(_);F&&Ht(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,pt,_.width,_.height):Ht(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,pt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Q=$.__webglTexture,X=Vt(_);if(_.depthTexture.format===gr)Ht(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Rr)Ht(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function It(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),lt(_.__webglDepthbuffer[$],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),lt(_.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(E,_,F){const $=n.get(E);_!==void 0&&Mt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&It(E)}function de(E){const _=E.texture,F=n.get(E),$=n.get(_);E.addEventListener("dispose",A);const Q=E.textures,X=E.isWebGLCubeRenderTarget===!0,yt=Q.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let pt=0;pt<_.mipmaps.length;pt++)F.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else F.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)F.__webglFramebuffer[ct]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ct=0,pt=Q.length;ct<pt;ct++){const qt=n.get(Q[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ht(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const pt=Q[ct];F.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const qt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),mt=T(pt.internalFormat,qt,tt,pt.colorSpace,E.isXRRenderTarget===!0),Ct=Vt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),kt(i.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)Mt(F.__webglFramebuffer[ct][pt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else Mt(F.__webglFramebuffer[ct],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ct=0,pt=Q.length;ct<pt;ct++){const qt=Q[ct],tt=n.get(qt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),kt(i.TEXTURE_2D,qt),Mt(F.__webglFramebuffer,E,qt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),p(qt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),kt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)Mt(F.__webglFramebuffer[pt],E,_,i.COLOR_ATTACHMENT0,ct,pt);else Mt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ct,0);p(_)&&f(ct),e.unbindTexture()}E.depthBuffer&&It(E)}function Xt(E){const _=E.textures;for(let F=0,$=_.length;F<$;F++){const Q=_[F];if(p(Q)){const X=w(E),yt=n.get(Q).__webglTexture;e.bindTexture(X,yt),f(X),e.unbindTexture()}}}const _e=[],U=[];function tn(E){if(E.samples>0){if(Ht(E)===!1){const _=E.textures,F=E.width,$=E.height;let Q=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(E),ct=_.length>1;if(ct)for(let pt=0;pt<_.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<_.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const qt=n.get(_[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,Q,i.NEAREST),l===!0&&(_e.length=0,U.length=0,_e.push(i.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(_e.push(X),U.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<_.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const qt=n.get(_[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Vt(E){return Math.min(r.maxSamples,E.samples)}function Ht(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Rt(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function oe(E,_){const F=E.colorSpace,$=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Dr&&F!==si&&(Yt.getTransfer(F)===ee?($!==vn||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ht}function G_(i,t){function e(n,r=si){let s;const a=Yt.getTransfer(r);if(n===Wn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===uu)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===du)return i.RGB;if(n===vn)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===gr)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===gu)return i.RED;if(n===dl)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===Xs||n===qs)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===Eo||n===To||n===wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Ao||n===Ro)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bo||n===Ao)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Po||n===Do||n===Lo||n===Io||n===Uo||n===No||n===Oo||n===Fo||n===Bo||n===zo||n===ko||n===Go||n===Vo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Co)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===Ho||n===Wo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ys)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===Xo||n===qo||n===Yo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ys)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class V_ extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Us extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Oe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hi({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xn(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends Wi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const v=new q_,p=e.getContextAttributes();let f=null,w=null;const T=[],M=[],k=new zt;let b=null;const A=new Je;A.viewport=new xe;const N=new Je;N.viewport=new xe;const y=[A,N],S=new V_;let R=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=T[Y];return it===void 0&&(it=new Qa,T[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=T[Y];return it===void 0&&(it=new Qa,T[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=T[Y];return it===void 0&&(it=new Qa,T[Y]=it),it.getHandSpace()};function G(Y){const it=M.indexOf(Y.inputSource);if(it===-1)return;const Mt=T[it];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<T.length;Y++){const it=M[Y];it!==null&&(M[Y]=null,T[Y].disconnect(it))}R=null,K=null,v.reset(),t.setRenderTarget(f),m=null,h=null,d=null,r=null,w=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(k),r.renderState.layers===void 0){const it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new ki(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,Mt=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?Rr:gr,Mt=p.stencil?Ar:zi);const Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(Pt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),w=new ki(h.textureWidth,h.textureHeight,{format:vn,type:Wn,depthTexture:new Du(h.textureWidth,h.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(Y){for(let it=0;it<Y.removed.length;it++){const Mt=Y.removed[it],lt=M.indexOf(Mt);lt>=0&&(M[lt]=null,T[lt].disconnect(Mt))}for(let it=0;it<Y.added.length;it++){const Mt=Y.added[it];let lt=M.indexOf(Mt);if(lt===-1){for(let It=0;It<T.length;It++)if(It>=M.length){M.push(Mt),lt=It;break}else if(M[It]===null){M[It]=Mt,lt=It;break}if(lt===-1)break}const Pt=T[lt];Pt&&Pt.connect(Mt)}}const W=new I,nt=new I;function H(Y,it,Mt){W.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(Mt.matrixWorld);const lt=W.distanceTo(nt),Pt=it.projectionMatrix.elements,It=Mt.projectionMatrix.elements,Gt=Pt[14]/(Pt[10]-1),de=Pt[14]/(Pt[10]+1),Xt=(Pt[9]+1)/Pt[5],_e=(Pt[9]-1)/Pt[5],U=(Pt[8]-1)/Pt[0],tn=(It[8]+1)/It[0],Vt=Gt*U,Ht=Gt*tn,Rt=lt/(-U+tn),oe=Rt*-U;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const bt=Gt+Rt,E=de+Rt,_=Vt-oe,F=Ht+(lt-oe),$=Xt*de/E*bt,Q=_e*de/E*bt;Y.projectionMatrix.makePerspective(_,F,$,Q,bt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let it=Y.near,Mt=Y.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),S.near=N.near=A.near=it,S.far=N.far=A.far=Mt,(R!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,K=S.far),A.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,S.layers.mask=A.layers.mask|N.layers.mask;const lt=Y.parent,Pt=S.cameras;ot(S,lt);for(let It=0;It<Pt.length;It++)ot(Pt[It],lt);Pt.length===2?H(S,A,N):S.projectionMatrix.copy(A.projectionMatrix),dt(Y,S,lt)};function dt(Y,it,Mt){Mt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let wt=null;function kt(Y,it){if(u=it.getViewerPose(c||a),g=it,u!==null){const Mt=u.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let lt=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let It=0;It<Mt.length;It++){const Gt=Mt[It];let de=null;if(m!==null)de=m.getViewport(Gt);else{const _e=d.getViewSubImage(h,Gt);de=_e.viewport,It===0&&(t.setRenderTargetTextures(w,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(w))}let Xt=y[It];Xt===void 0&&(Xt=new Je,Xt.layers.enable(It),Xt.viewport=new xe,y[It]=Xt),Xt.matrix.fromArray(Gt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Gt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),It===0&&(S.matrix.copy(Xt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(Xt)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const It=d.getDepthInformation(Mt[0]);It&&It.isValid&&It.texture&&v.init(t,It,r.renderState)}}for(let Mt=0;Mt<T.length;Mt++){const lt=M[Mt],Pt=T[Mt];lt!==null&&Pt!==void 0&&Pt.update(lt,it,c||a)}wt&&wt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const re=new Pu;re.setAnimationLoop(kt),this.setAnimationLoop=function(Y){wt=Y},this.dispose=function(){}}}const xi=new Xn,K_=new ge;function Z_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,bu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,w,T,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,w,T):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===qe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===qe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=t.get(f),T=w.envMap,M=w.envMapRotation;T&&(p.envMap.value=T,xi.copy(M),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(xi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=T*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const M=T.program;n.uniformBlockBinding(w,M)}function c(w,T){let M=r[w.id];M===void 0&&(g(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",p));const k=T.program;n.updateUBOMapping(w,k);const b=t.render.frame;s[w.id]!==b&&(h(w),s[w.id]=b)}function u(w){const T=d();w.__bindingPointIndex=T;const M=i.createBuffer(),k=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,k,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const T=r[w.id],M=w.uniforms,k=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let b=0,A=M.length;b<A;b++){const N=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,S=N.length;y<S;y++){const R=N[y];if(m(R,b,y,k)===!0){const K=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let j=0;j<G.length;j++){const W=G[j],nt=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,K+q,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,q),q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,T,M,k){const b=w.value,A=T+"_"+M;if(k[A]===void 0)return typeof b=="number"||typeof b=="boolean"?k[A]=b:k[A]=b.clone(),!0;{const N=k[A];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return k[A]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function g(w){const T=w.uniforms;let M=0;const k=16;for(let A=0,N=T.length;A<N;A++){const y=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,R=y.length;S<R;S++){const K=y[S],G=Array.isArray(K.value)?K.value:[K.value];for(let q=0,j=G.length;q<j;q++){const W=G[q],nt=v(W),H=M%k,ot=H%nt.boundary,dt=H+ot;M+=ot,dt!==0&&k-dt<nt.storage&&(M+=k-dt),K.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=nt.storage}}}const b=M%k;return b>0&&(M+=k-b),w.__size=M,w.__cache={},this}function v(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function p(w){const T=w.target;T.removeEventListener("dispose",p);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Ou{constructor(t={}){const{canvas:e=Bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,f=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=ci,this.toneMappingExposure=1;const M=this;let k=!1,b=0,A=0,N=null,y=-1,S=null;const R=new xe,K=new xe;let G=null;const q=new jt(0);let j=0,W=e.width,nt=e.height,H=1,ot=null,dt=null;const wt=new xe(0,0,W,nt),kt=new xe(0,0,W,nt);let re=!1;const Y=new Cu;let it=!1,Mt=!1;const lt=new ge,Pt=new ge,It=new I,Gt=new xe,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function _e(){return N===null?H:1}let U=n;function tn(x,D){return e.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const D="webgl2";if(U=tn(D,x),U===null)throw tn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Vt,Ht,Rt,oe,bt,E,_,F,$,Q,X,yt,ct,pt,qt,tt,mt,Ct,Dt,gt,Wt,Ft,se,C;function at(){Vt=new ng(U),Vt.init(),Ft=new G_(U,Vt),Ht=new Zm(U,Vt,t,Ft),Rt=new B_(U,Vt),Ht.reverseDepthBuffer&&h&&Rt.buffers.depth.setReversed(!0),oe=new sg(U),bt=new E_,E=new k_(U,Vt,Rt,bt,Ht,Ft,oe),_=new Jm(M),F=new eg(M),$=new hd(U),se=new Ym(U,$),Q=new ig(U,$,oe,se),X=new og(U,Q,$,oe),Dt=new ag(U,Ht,E),tt=new $m(bt),yt=new y_(M,_,F,Vt,Ht,se,tt),ct=new Z_(M,bt),pt=new w_,qt=new D_(Vt),Ct=new qm(M,_,F,Rt,X,m,l),mt=new O_(M,X,Ht),C=new $_(U,oe,Ht,Rt),gt=new Km(U,Vt,oe),Wt=new rg(U,Vt,oe),oe.programs=yt.programs,M.capabilities=Ht,M.extensions=Vt,M.properties=bt,M.renderLists=pt,M.shadowMap=mt,M.state=Rt,M.info=oe}at();const V=new Y_(M,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Vt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Vt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(W,nt,!1))},this.getSize=function(x){return x.set(W,nt)},this.setSize=function(x,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,nt=D,e.width=Math.floor(x*H),e.height=Math.floor(D*H),B===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(W*H,nt*H).floor()},this.setDrawingBufferSize=function(x,D,B){W=x,nt=D,H=B,e.width=Math.floor(x*B),e.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(wt)},this.setViewport=function(x,D,B,z){x.isVector4?wt.set(x.x,x.y,x.z,x.w):wt.set(x,D,B,z),Rt.viewport(R.copy(wt).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(kt)},this.setScissor=function(x,D,B,z){x.isVector4?kt.set(x.x,x.y,x.z,x.w):kt.set(x,D,B,z),Rt.scissor(K.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(x){Rt.setScissorTest(re=x)},this.setOpaqueSort=function(x){ot=x},this.setTransparentSort=function(x){dt=x},this.getClearColor=function(x){return x.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(x=!0,D=!0,B=!0){let z=0;if(x){let L=!1;if(N!==null){const et=N.texture.format;L=et===ml||et===pl||et===dl}if(L){const et=N.texture.type,ht=et===Wn||et===zi||et===ts||et===Ar||et===hl||et===fl,vt=Ct.getClearColor(),xt=Ct.getClearAlpha(),Lt=vt.r,Nt=vt.g,St=vt.b;ht?(g[0]=Lt,g[1]=Nt,g[2]=St,g[3]=xt,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Lt,v[1]=Nt,v[2]=St,v[3]=xt,U.clearBufferiv(U.COLOR,0,v))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),qt.dispose(),bt.dispose(),_.dispose(),F.dispose(),X.dispose(),se.dispose(),C.dispose(),yt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Al),V.removeEventListener("sessionend",Rl),di.stop()};function J(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const x=oe.autoReset,D=mt.enabled,B=mt.autoUpdate,z=mt.needsUpdate,L=mt.type;at(),oe.autoReset=x,mt.enabled=D,mt.autoUpdate=B,mt.needsUpdate=z,mt.type=L}function ut(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ut(x){const D=x.target;D.removeEventListener("dispose",Ut),me(D)}function me(x){Pe(x),bt.remove(x)}function Pe(x){const D=bt.get(x).programs;D!==void 0&&(D.forEach(function(B){yt.releaseProgram(B)}),x.isShaderMaterial&&yt.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,z,L,et){D===null&&(D=de);const ht=L.isMesh&&L.matrixWorld.determinant()<0,vt=Ah(x,D,B,z,L);Rt.setMaterial(z,ht);let xt=B.index,Lt=1;if(z.wireframe===!0){if(xt=Q.getWireframeAttribute(B),xt===void 0)return;Lt=2}const Nt=B.drawRange,St=B.attributes.position;let Kt=Nt.start*Lt,ae=(Nt.start+Nt.count)*Lt;et!==null&&(Kt=Math.max(Kt,et.start*Lt),ae=Math.min(ae,(et.start+et.count)*Lt)),xt!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,xt.count)):St!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,St.count));const le=ae-Kt;if(le<0||le===1/0)return;se.setup(L,z,vt,B,xt);let Be,$t=gt;if(xt!==null&&(Be=$.get(xt),$t=Wt,$t.setIndex(Be)),L.isMesh)z.wireframe===!0?(Rt.setLineWidth(z.wireframeLinewidth*_e()),$t.setMode(U.LINES)):$t.setMode(U.TRIANGLES);else if(L.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*_e()),L.isLineSegments?$t.setMode(U.LINES):L.isLineLoop?$t.setMode(U.LINE_LOOP):$t.setMode(U.LINE_STRIP)}else L.isPoints?$t.setMode(U.POINTS):L.isSprite&&$t.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)$t.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))$t.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Et=L._multiDrawStarts,Pn=L._multiDrawCounts,Jt=L._multiDrawCount,cn=xt?$.get(xt).bytesPerElement:1,qi=bt.get(z).currentProgram.getUniforms();for(let Ke=0;Ke<Jt;Ke++)qi.setValue(U,"_gl_DrawID",Ke),$t.render(Et[Ke]/cn,Pn[Ke])}else if(L.isInstancedMesh)$t.renderInstances(Kt,le,L.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Pn=Math.min(B.instanceCount,Et);$t.renderInstances(Kt,le,Pn)}else $t.render(Kt,le)};function Qt(x,D,B){x.transparent===!0&&x.side===zn&&x.forceSinglePass===!1?(x.side=qe,x.needsUpdate=!0,fs(x,D,B),x.side=ui,x.needsUpdate=!0,fs(x,D,B),x.side=zn):fs(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),f=qt.get(B),f.init(D),T.push(f),B.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),x!==B&&x.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();const z=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const et=L.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const vt=et[ht];Qt(vt,B,L),z.add(vt)}else Qt(et,B,L),z.add(et)}),T.pop(),f=null,z},this.compileAsync=function(x,D,B=null){const z=this.compile(x,D,B);return new Promise(L=>{function et(){if(z.forEach(function(ht){bt.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){L(x);return}setTimeout(et,10)}Vt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ln=null;function Cn(x){ln&&ln(x)}function Al(){di.stop()}function Rl(){di.start()}const di=new Pu;di.setAnimationLoop(Cn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(x){ln=x,V.setAnimationLoop(x),x===null?di.stop():di.start()},V.addEventListener("sessionstart",Al),V.addEventListener("sessionend",Rl),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,D,N),f=qt.get(x,T.length),f.init(D),T.push(f),Pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,Mt),p=pt.get(x,w.length),p.init(),w.push(p),V.enabled===!0&&V.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&ya(et,D,-1/0,M.sortObjects)}ya(x,D,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(ot,dt),Xt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xt&&Ct.addToRenderList(p,x),this.info.render.frame++,it===!0&&tt.beginShadows();const B=f.state.shadowsArray;mt.render(B,x,D),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,L=p.transmissive;if(f.setupLights(),D.isArrayCamera){const et=D.cameras;if(L.length>0)for(let ht=0,vt=et.length;ht<vt;ht++){const xt=et[ht];Pl(z,L,x,xt)}Xt&&Ct.render(x);for(let ht=0,vt=et.length;ht<vt;ht++){const xt=et[ht];Cl(p,x,xt,xt.viewport)}}else L.length>0&&Pl(z,L,x,D),Xt&&Ct.render(x),Cl(p,x,D);N!==null&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(M,x,D),se.resetDefaultState(),y=-1,S=null,T.pop(),T.length>0?(f=T[T.length-1],it===!0&&tt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function ya(x,D,B,z){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){z&&Gt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Pt);const ht=X.update(x),vt=x.material;vt.visible&&p.push(x,ht,vt,B,Gt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){const ht=X.update(x),vt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Gt.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Gt.copy(ht.boundingSphere.center)),Gt.applyMatrix4(x.matrixWorld).applyMatrix4(Pt)),Array.isArray(vt)){const xt=ht.groups;for(let Lt=0,Nt=xt.length;Lt<Nt;Lt++){const St=xt[Lt],Kt=vt[St.materialIndex];Kt&&Kt.visible&&p.push(x,ht,Kt,B,Gt.z,St)}}else vt.visible&&p.push(x,ht,vt,B,Gt.z,null)}}const et=x.children;for(let ht=0,vt=et.length;ht<vt;ht++)ya(et[ht],D,B,z)}function Cl(x,D,B,z){const L=x.opaque,et=x.transmissive,ht=x.transparent;f.setupLightsView(B),it===!0&&tt.setGlobalState(M.clippingPlanes,B),z&&Rt.viewport(R.copy(z)),L.length>0&&hs(L,D,B),et.length>0&&hs(et,D,B),ht.length>0&&hs(ht,D,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Pl(x,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ki(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?os:Wn,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],ht=z.viewport||R;et.setSize(ht.z,ht.w);const vt=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(q),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),Xt&&Ct.render(B);const xt=M.toneMapping;M.toneMapping=ci;const Lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),it===!0&&tt.setGlobalState(M.clippingPlanes,z),hs(x,B,z),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let St=0,Kt=D.length;St<Kt;St++){const ae=D[St],le=ae.object,Be=ae.geometry,$t=ae.material,Et=ae.group;if($t.side===zn&&le.layers.test(z.layers)){const Pn=$t.side;$t.side=qe,$t.needsUpdate=!0,Dl(le,B,z,Be,$t,Et),$t.side=Pn,$t.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}M.setRenderTarget(vt),M.setClearColor(q,j),Lt!==void 0&&(z.viewport=Lt),M.toneMapping=xt}function hs(x,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let L=0,et=x.length;L<et;L++){const ht=x[L],vt=ht.object,xt=ht.geometry,Lt=z===null?ht.material:z,Nt=ht.group;vt.layers.test(B.layers)&&Dl(vt,D,B,xt,Lt,Nt)}}function Dl(x,D,B,z,L,et){x.onBeforeRender(M,D,B,z,L,et),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(M,D,B,z,x,et),L.transparent===!0&&L.side===zn&&L.forceSinglePass===!1?(L.side=qe,L.needsUpdate=!0,M.renderBufferDirect(B,D,z,L,x,et),L.side=ui,L.needsUpdate=!0,M.renderBufferDirect(B,D,z,L,x,et),L.side=zn):M.renderBufferDirect(B,D,z,L,x,et),x.onAfterRender(M,D,B,z,L,et)}function fs(x,D,B){D.isScene!==!0&&(D=de);const z=bt.get(x),L=f.state.lights,et=f.state.shadowsArray,ht=L.state.version,vt=yt.getParameters(x,L.state,et,D,B),xt=yt.getProgramCacheKey(vt);let Lt=z.programs;z.environment=x.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(x.isMeshStandardMaterial?F:_).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Lt===void 0&&(x.addEventListener("dispose",Ut),Lt=new Map,z.programs=Lt);let Nt=Lt.get(xt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===ht)return Il(x,vt),Nt}else vt.uniforms=yt.getUniforms(x),x.onBeforeCompile(vt,M),Nt=yt.acquireProgram(vt,xt),Lt.set(xt,Nt),z.uniforms=vt.uniforms;const St=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(St.clippingPlanes=tt.uniform),Il(x,vt),z.needsLights=Ch(x),z.lightsStateVersion=ht,z.needsLights&&(St.ambientLightColor.value=L.state.ambient,St.lightProbe.value=L.state.probe,St.directionalLights.value=L.state.directional,St.directionalLightShadows.value=L.state.directionalShadow,St.spotLights.value=L.state.spot,St.spotLightShadows.value=L.state.spotShadow,St.rectAreaLights.value=L.state.rectArea,St.ltc_1.value=L.state.rectAreaLTC1,St.ltc_2.value=L.state.rectAreaLTC2,St.pointLights.value=L.state.point,St.pointLightShadows.value=L.state.pointShadow,St.hemisphereLights.value=L.state.hemi,St.directionalShadowMap.value=L.state.directionalShadowMap,St.directionalShadowMatrix.value=L.state.directionalShadowMatrix,St.spotShadowMap.value=L.state.spotShadowMap,St.spotLightMatrix.value=L.state.spotLightMatrix,St.spotLightMap.value=L.state.spotLightMap,St.pointShadowMap.value=L.state.pointShadowMap,St.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function Ll(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Ks.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Il(x,D){const B=bt.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Ah(x,D,B,z,L){D.isScene!==!0&&(D=de),E.resetTextureUnits();const et=D.fog,ht=z.isMeshStandardMaterial?D.environment:null,vt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Dr,xt=(z.isMeshStandardMaterial?F:_).get(z.envMap||ht),Lt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color;let le=ci;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(le=M.toneMapping);const Be=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Be!==void 0?Be.length:0,Et=bt.get(z),Pn=f.state.lights;if(it===!0&&(Mt===!0||x!==S)){const en=x===S&&z.id===y;tt.setState(z,x,en)}let Jt=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Pn.state.version||Et.outputColorSpace!==vt||L.isBatchedMesh&&Et.batching===!1||!L.isBatchedMesh&&Et.batching===!0||L.isBatchedMesh&&Et.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Et.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Et.instancing===!1||!L.isInstancedMesh&&Et.instancing===!0||L.isSkinnedMesh&&Et.skinning===!1||!L.isSkinnedMesh&&Et.skinning===!0||L.isInstancedMesh&&Et.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Et.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Et.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Et.instancingMorph===!1&&L.morphTexture!==null||Et.envMap!==xt||z.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Nt||Et.morphTargets!==St||Et.morphNormals!==Kt||Et.morphColors!==ae||Et.toneMapping!==le||Et.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,Et.__version=z.version);let cn=Et.currentProgram;Jt===!0&&(cn=fs(z,D,L));let qi=!1,Ke=!1,Ur=!1;const ce=cn.getUniforms(),yn=Et.uniforms;if(Rt.useProgram(cn.program)&&(qi=!0,Ke=!0,Ur=!0),z.id!==y&&(y=z.id,Ke=!0),qi||S!==x){Rt.buffers.depth.getReversed()?(lt.copy(x.projectionMatrix),kf(lt),Gf(lt),ce.setValue(U,"projectionMatrix",lt)):ce.setValue(U,"projectionMatrix",x.projectionMatrix),ce.setValue(U,"viewMatrix",x.matrixWorldInverse);const Kn=ce.map.cameraPosition;Kn!==void 0&&Kn.setValue(U,It.setFromMatrixPosition(x.matrixWorld)),Ht.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Ke=!0,Ur=!0)}if(L.isSkinnedMesh){ce.setOptional(U,L,"bindMatrix"),ce.setOptional(U,L,"bindMatrixInverse");const en=L.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ce.setValue(U,"boneTexture",en.boneTexture,E))}L.isBatchedMesh&&(ce.setOptional(U,L,"batchingTexture"),ce.setValue(U,"batchingTexture",L._matricesTexture,E),ce.setOptional(U,L,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",L._indirectTexture,E),ce.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",L._colorsTexture,E));const Nr=B.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&Dt.update(L,B,cn),(Ke||Et.receiveShadow!==L.receiveShadow)&&(Et.receiveShadow=L.receiveShadow,ce.setValue(U,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(yn.envMap.value=xt,yn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Ke&&(ce.setValue(U,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&Rh(yn,Ur),et&&z.fog===!0&&ct.refreshFogUniforms(yn,et),ct.refreshMaterialUniforms(yn,z,H,nt,f.state.transmissionRenderTarget[x.id]),Ks.upload(U,Ll(Et),yn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ks.upload(U,Ll(Et),yn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(U,"center",L.center),ce.setValue(U,"modelViewMatrix",L.modelViewMatrix),ce.setValue(U,"normalMatrix",L.normalMatrix),ce.setValue(U,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const en=z.uniformsGroups;for(let Kn=0,Zn=en.length;Kn<Zn;Kn++){const Ul=en[Kn];C.update(Ul,cn),C.bind(Ul,cn)}}return cn}function Rh(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Ch(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,D,B){bt.get(x.texture).__webglTexture=D,bt.get(x.depthTexture).__webglTexture=B;const z=bt.get(x);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const B=bt.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,B=0){N=x,b=D,A=B;let z=!0,L=null,et=!1,ht=!1;if(x){const xt=bt.get(x);if(xt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(xt.__hasExternalTextures)E.rebindTextures(x,bt.get(x.texture).__webglTexture,bt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const St=x.depthTexture;if(xt.__boundDepthTexture!==St){if(St!==null&&bt.has(St)&&(x.width!==St.image.width||x.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Lt=x.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);const Nt=bt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?L=Nt[D][B]:L=Nt[D],et=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?L=bt.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?L=Nt[B]:L=Nt,R.copy(x.viewport),K.copy(x.scissor),G=x.scissorTest}else R.copy(wt).multiplyScalar(H).floor(),K.copy(kt).multiplyScalar(H).floor(),G=re;if(Rt.bindFramebuffer(U.FRAMEBUFFER,L)&&z&&Rt.drawBuffers(x,L),Rt.viewport(R),Rt.scissor(K),Rt.setScissorTest(G),et){const xt=bt.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,B)}else if(ht){const xt=bt.get(x.texture),Lt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Lt)}y=-1},this.readRenderTargetPixels=function(x,D,B,z,L,et,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){Rt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const xt=x.texture,Lt=xt.format,Nt=xt.type;if(!Ht.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-z&&B>=0&&B<=x.height-L&&U.readPixels(D,B,z,L,Ft.convert(Lt),Ft.convert(Nt),et)}finally{const xt=N!==null?bt.get(N).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,z,L,et,ht){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){const xt=x.texture,Lt=xt.format,Nt=xt.type;if(!Ht.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-z&&B>=0&&B<=x.height-L){Rt.bindFramebuffer(U.FRAMEBUFFER,vt);const St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),U.readPixels(D,B,z,L,Ft.convert(Lt),Ft.convert(Nt),0);const Kt=N!==null?bt.get(N).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,Kt);const ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zf(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(St),U.deleteSync(ae),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,B=0){x.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const z=Math.pow(2,-B),L=Math.floor(x.image.width*z),et=Math.floor(x.image.height*z),ht=D!==null?D.x:0,vt=D!==null?D.y:0;E.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ht,vt,L,et),Rt.unbindTexture()},this.copyTextureToTexture=function(x,D,B=null,z=null,L=0){x.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,x=arguments[1],D=arguments[2],L=arguments[3]||0,B=null);let et,ht,vt,xt,Lt,Nt,St,Kt,ae;const le=x.isCompressedTexture?x.mipmaps[L]:x.image;B!==null?(et=B.max.x-B.min.x,ht=B.max.y-B.min.y,vt=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,Lt=B.min.y,Nt=B.isBox3?B.min.z:0):(et=le.width,ht=le.height,vt=le.depth||1,xt=0,Lt=0,Nt=0),z!==null?(St=z.x,Kt=z.y,ae=z.z):(St=0,Kt=0,ae=0);const Be=Ft.convert(D.format),$t=Ft.convert(D.type);let Et;D.isData3DTexture?(E.setTexture3D(D,0),Et=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),Et=U.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Pn=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=U.getParameter(U.UNPACK_SKIP_PIXELS),qi=U.getParameter(U.UNPACK_SKIP_ROWS),Ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt);const Ur=x.isDataArrayTexture||x.isData3DTexture,ce=D.isDataArrayTexture||D.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const yn=bt.get(x),Nr=bt.get(D),en=bt.get(yn.__renderTarget),Kn=bt.get(Nr.__renderTarget);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,en.__webglFramebuffer),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Zn=0;Zn<vt;Zn++)Ur&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(x).__webglTexture,L,Nt+Zn),x.isDepthTexture?(ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(D).__webglTexture,L,ae+Zn),U.blitFramebuffer(xt,Lt,et,ht,St,Kt,et,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):ce?U.copyTexSubImage3D(Et,L,St,Kt,ae+Zn,xt,Lt,et,ht):U.copyTexSubImage2D(Et,L,St,Kt,ae+Zn,xt,Lt,et,ht);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ce?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(Et,L,St,Kt,ae,et,ht,vt,Be,$t,le.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,L,St,Kt,ae,et,ht,vt,Be,le.data):U.texSubImage3D(Et,L,St,Kt,ae,et,ht,vt,Be,$t,le):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,St,Kt,et,ht,Be,$t,le.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,St,Kt,le.width,le.height,Be,le.data):U.texSubImage2D(U.TEXTURE_2D,L,St,Kt,et,ht,Be,$t,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,qi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke),L===0&&D.generateMipmaps&&U.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(x,D,B=null,z=null,L=0){return x.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,x=arguments[2],D=arguments[3],L=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,B,z,L)},this.initRenderTarget=function(x){bt.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),Rt.unbindTexture()},this.resetState=function(){b=0,A=0,N=null,Rt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Fu extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xl extends cs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qs=new I,js=new I,Nc=new ge,kr=new va,Ns=new _a,ja=new I,Oc=new I;class J_ extends Ye{constructor(t=new qn,e=new xl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Qs.fromBufferAttribute(e,r-1),js.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Qs.distanceTo(js);t.setAttribute("lineDistance",new Rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;Nc.copy(r).invert(),kr.copy(t.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const f=u.getX(v),w=u.getX(v+1),T=Os(this,t,kr,l,f,w);T&&e.push(T)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(m),f=Os(this,t,kr,l,v,p);f&&e.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const f=Os(this,t,kr,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Os(this,t,kr,l,g-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Os(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Qs.fromBufferAttribute(a,r),js.fromBufferAttribute(a,s),e.distanceSqToSegment(Qs,js,ja,Oc)>n)return;ja.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ja);if(!(l<t.near||l>t.far))return{distance:l,point:Oc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Fc=new I,Bc=new I;class Bu extends J_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Fc.fromBufferAttribute(e,r),Bc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fc.distanceTo(Bc);t.setAttribute("lineDistance",new Rn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Fs=new I,Bs=new I,to=new I,zs=new an;class zu extends qn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(_r*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:f}=zs;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),zs.getNormal(to),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){const T=(w+1)%3,M=d[w],k=d[T],b=zs[u[w]],A=zs[u[T]],N=`${M}_${k}`,y=`${k}_${M}`;y in h&&h[y]?(to.dot(h[y].normal)<=s&&(m.push(b.x,b.y,b.z),m.push(A.x,A.y,A.z)),h[y]=null):N in h||(h[N]={index0:c[w],index1:c[T],normal:to.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:p}=h[g];Fs.fromBufferAttribute(o,v),Bs.fromBufferAttribute(o,p),m.push(Fs.x,Fs.y,Fs.z),m.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new Rn(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const zc=new ge;class Q_{constructor(t,e,n=0,r=1/0){this.ray=new va(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(t,e=!0,n=[]){return Zo(t,this,n,e),n.sort(kc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Zo(t[r],this,n,e);return n.sort(kc),n}}function kc(i,t){return i.distance-t.distance}function Zo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Zo(s[a],t,e,!0)}}class Gc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class j_ extends Wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);class ku{is(t){return this instanceof t}as(t){return this instanceof t?this:null}}class fi extends ku{constructor(){super()}get log(){return console.log.bind(console,this,this.toString())}}var ue=(i=>(i[i.Forwards=1]="Forwards",i[i.Backwards=-1]="Backwards",i))(ue||{});function t0(i,t=!0){if(!t)return i;switch(i){case 1:return-1;case-1:return 1}}function e0(i,t){return t===-1?Array.from(i).reverse():i}function n0(i){return Array.from(i).reverse()}const $o=2147483647,Jo="2^31 - 1",i0=-2147483648;var Ii,Ui;const sa=class sa extends fi{constructor(e,n){super();te(this,Ii);te(this,Ui);Zt(this,Ii,ns(e)),Zt(this,Ui,ns(n))}get A(){return O(this,Ii)}get B(){return O(this,Ui)}isIdentical(e){const n=e.as(sa);return!!(n!=null&&n.A.isIdentical(this.A)&&(n!=null&&n.B.isIdentical(this.B)))}invert(){return new sa(O(this,Ui),O(this,Ii))}*experimentalExpand(e=ue.Forwards,n){n??(n=1/0),n===0?yield e===ue.Forwards?this:this.invert():e===ue.Forwards?(yield*this.A.experimentalExpand(ue.Forwards,n-1),yield*this.B.experimentalExpand(ue.Forwards,n-1),yield*this.A.experimentalExpand(ue.Backwards,n-1),yield*this.B.experimentalExpand(ue.Backwards,n-1)):(yield*this.B.experimentalExpand(ue.Forwards,n-1),yield*this.A.experimentalExpand(ue.Forwards,n-1),yield*this.B.experimentalExpand(ue.Backwards,n-1),yield*this.A.experimentalExpand(ue.Backwards,n-1))}toString(e){return`[${O(this,Ii).toString(e)}, ${O(this,Ui).toString(e)}]`}};Ii=new WeakMap,Ui=new WeakMap;let We=sa;var Sr,Mr;const aa=class aa extends fi{constructor(e,n){super();te(this,Sr);te(this,Mr);Zt(this,Sr,ns(e)),Zt(this,Mr,ns(n))}get A(){return O(this,Sr)}get B(){return O(this,Mr)}isIdentical(e){const n=e.as(aa);return!!(n!=null&&n.A.isIdentical(this.A)&&(n!=null&&n.B.isIdentical(this.B)))}invert(){return new aa(O(this,Sr),O(this,Mr).invert())}*experimentalExpand(e,n){n??(n=1/0),n===0?yield e===ue.Forwards?this:this.invert():(yield*this.A.experimentalExpand(ue.Forwards,n-1),yield*this.B.experimentalExpand(e,n-1),yield*this.A.experimentalExpand(ue.Backwards,n-1))}toString(e){return`[${this.A.toString(e)}: ${this.B.toString(e)}]`}};Sr=new WeakMap,Mr=new WeakMap;let Xe=aa;var ai;const bl=class bl extends fi{constructor(e){super();te(this,ai);if(e.includes(`
`)||e.includes("\r"))throw new Error("LineComment cannot contain newline");Zt(this,ai,e)}get text(){return O(this,ai)}isIdentical(e){const n=e;return e.is(bl)&&O(this,ai)===O(n,ai)}invert(){return this}*experimentalExpand(e=ue.Forwards,n=1/0){yield this}toString(e){return`//${O(this,ai)}`}};ai=new WeakMap;let Vi=bl;class Hn extends fi{toString(t){return`
`}isIdentical(t){return t.is(Hn)}invert(){return this}*experimentalExpand(t=ue.Forwards,e=1/0){yield this}}class Fe extends fi{constructor(){super(...arguments);pe(this,"experimentalNISSGrouping")}toString(e){return"."}isIdentical(e){return e.is(Fe)}invert(){return this}*experimentalExpand(e=ue.Forwards,n=1/0){yield this}}var Ni;class r0{constructor(){te(this,Ni,[])}push(t){O(this,Ni).push(t)}experimentalPushAlg(t){for(const e of t.childAlgNodes())this.push(e)}experimentalNumAlgNodes(){return O(this,Ni).length}toAlg(){return new Tt(O(this,Ni))}reset(){Zt(this,Ni,[])}}Ni=new WeakMap;function ks(i,t){return i?parseInt(i):t}const Vc=/^(\d+)?('?)/,s0=/^[_\dA-Za-z]/,a0=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)/,o0=/^[^\n]*/,l0=/^(-?\d+), ?/,c0=/^(-?\d+)\)/;function Gu(i){return new Sl().parseAlg(i)}function u0(i){return new Sl().parseMove(i)}function h0(i){return new Sl().parseQuantumMove(i)}const Kr=Symbol("startCharIndex"),Zr=Symbol("endCharIndex");function we(i,t,e){const n=i;return n[Kr]=t,n[Zr]=e,n}function f0(i,t){return Kr in i&&(t[Kr]=i[Kr]),Zr in i&&(t[Zr]=i[Zr]),t}var ke,At,yr;class Sl{constructor(){te(this,ke,"");te(this,At,0);te(this,yr,[])}parseAlg(t){Zt(this,ke,t),Zt(this,At,0);const e=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();const n=Array.from(e.childAlgNodes());if(O(this,yr).length>0)for(const o of O(this,yr).reverse())n.push(o);const r=new Tt(n),{[Kr]:s,[Zr]:a}=e;return we(r,s,a),r}parseMove(t){Zt(this,ke,t),Zt(this,At,0);const e=this.parseMoveImpl();return this.mustBeAtEndOfInput(),e}parseQuantumMove(t){Zt(this,ke,t),Zt(this,At,0);const e=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),e}mustBeAtEndOfInput(){if(O(this,At)!==O(this,ke).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let e=O(this,At),n=O(this,At);const r=new r0;let s=!1;const a=o=>{if(s)throw new Error(`Unexpected character at index ${o}. Are you missing a space?`)};t:for(;O(this,At)<O(this,ke).length;){const o=O(this,At);if(t.includes(O(this,ke)[O(this,At)]))return we(r.toAlg(),e,n);if(this.tryConsumeNext(" ")){s=!1,r.experimentalNumAlgNodes()===0&&(e=O(this,At));continue t}else if(s0.test(O(this,ke)[O(this,At)])){a(o);const l=this.parseMoveImpl();r.push(l),s=!0,n=O(this,At);continue t}else if(this.tryConsumeNext("(")){a(o);const l=this.tryRegex(l0);if(l){const c=l[1],u=O(this,At),d=this.parseRegex(c0),h=we(new P(new Mn("U_SQ_"),parseInt(c)),o+1,o+1+c.length),m=we(new P(new Mn("D_SQ_"),parseInt(d[1])),u,O(this,At)-1),g=we(new Tt([h,m]),o+1,O(this,At)-1);r.push(we(new Qe(g),o,O(this,At))),s=!0,n=O(this,At);continue t}else{const c=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");const u=this.parseAmount();r.push(we(new Qe(c,u),o,O(this,At))),s=!0,n=O(this,At);continue t}}else if(this.tryConsumeNext("^")){this.mustConsumeNext("(");const l=this.parseAlgWithStopping([")"]);this.popNext();const c=new Qe(l,-1),u=new Fe;c.experimentalNISSPlaceholder=u,u.experimentalNISSGrouping=c,O(this,yr).push(c),r.push(u)}else if(this.tryConsumeNext("[")){a(o);const l=this.parseAlgWithStopping([",",":"]),c=this.popNext(),u=this.parseAlgWithStopping(["]"]);this.mustConsumeNext("]");let d;switch(c){case":":{d=we(new Xe(l,u),o,O(this,At)),s=!0,n=O(this,At);break}case",":{d=we(new We(l,u),o,O(this,At)),s=!0,n=O(this,At);break}default:throw new Error("unexpected parsing error")}const h=O(this,At),m=this.parseAmount();if(m===1)r.push(d);else{const g=we(new Tt([d]),o,h),v=we(new Qe(g,m),o,O(this,At));r.push(v)}s=!0,n=O(this,At);continue t}else if(this.tryConsumeNext(`
`)){r.push(we(new Hn,o,O(this,At))),s=!1,n=O(this,At);continue t}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){a(o);const[l]=this.parseRegex(o0);r.push(we(new Vi(l),o,O(this,At))),s=!1,n=O(this,At);continue t}else{r.push(we(new P("_SLASH_"),o,O(this,At))),s=!0,n=O(this,At);continue t}else if(this.tryConsumeNext(".")){a(o),r.push(we(new Fe,o,O(this,At))),s=!0,n=O(this,At);continue t}else throw new Error(`Unexpected character: ${this.popNext()}`)}if(O(this,At)!==O(this,ke).length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return we(r.toAlg(),e,n)}parseQuantumMoveImpl(){const[,,,t,e,n]=this.parseRegex(a0);return new Mn(n,ks(e,void 0),ks(t,void 0))}parseMoveImpl(){const t=O(this,At);if(this.tryConsumeNext("/"))return we(new P("_SLASH_"),t,O(this,At));let e=this.parseQuantumMoveImpl(),[n,r]=this.parseAmountAndTrackEmptyAbsAmount();const s=this.parseMoveSuffix();if(s){if(n<0)throw new Error("uh-oh");if((s==="++"||s==="--")&&n!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((s==="++"||s==="--")&&!r)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((s==="+"||s==="-")&&r)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");s.startsWith("+")&&(e=e.modified({family:`${e.family}_${s==="+"?"PLUS":"PLUSPLUS"}_`})),s.startsWith("-")&&(e=e.modified({family:`${e.family}_${s==="-"?"PLUS":"PLUSPLUS"}_`}),n*=-1)}return we(new P(e,n),t,O(this,At))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){const t=O(this,At),[,e,n]=this.parseRegex(Vc);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount can only start with 0 if it's exactly the digit 0.`);return[ks(e,1)*(n==="'"?-1:1),!e]}parseAmount(){const t=O(this,At),[,e,n]=this.parseRegex(Vc);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount number can only start with 0 if it's exactly the digit 0.`);return ks(e,1)*(n==="'"?-1:1)}parseRegex(t){const e=t.exec(this.remaining());if(e===null)throw new Error("internal parsing error");return Zt(this,At,O(this,At)+e[0].length),e}tryRegex(t){const e=t.exec(this.remaining());return e===null?null:(Zt(this,At,O(this,At)+e[0].length),e)}remaining(){return O(this,ke).slice(O(this,At))}popNext(){const t=O(this,ke)[O(this,At)];return Ta(this,At)._++,t}tryConsumeNext(t){return O(this,ke)[O(this,At)]===t?(Ta(this,At)._++,!0):!1}mustConsumeNext(t){const e=this.popNext();if(e!==t)throw new Error(`expected \`${t}\` while parsing, encountered ${e}`);return e}}ke=new WeakMap,At=new WeakMap,yr=new WeakMap;const Hc=new Set;function Vu(i){Hc.has(i)||(console.warn(i),Hc.add(i))}class Qo{constructor(t,e=1){pe(this,"quantum");pe(this,"amount");if(this.quantum=t,this.amount=e,!Number.isInteger(this.amount)||this.amount<i0||this.amount>$o)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${Jo}.`)}suffix(){let t="";const e=Math.abs(this.amount);return e!==1&&(t+=e),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,e){const n=Math.abs(this.amount),r=t0(t,this.amount<0);for(let s=0;s<n;s++)yield*this.quantum.experimentalExpand(r,e)}}var Bn,Re,Ce;const oa=class oa extends ku{constructor(e,n,r){super();te(this,Bn);te(this,Re);te(this,Ce);if(Zt(this,Bn,e),Zt(this,Re,n??null),Zt(this,Ce,r??null),Object.freeze(this),O(this,Re)!==null&&(!Number.isInteger(O(this,Re))||O(this,Re)<1||O(this,Re)>$o))throw new Error(`QuantumMove inner layer must be a positive integer below ${Jo}.`);if(O(this,Ce)!==null&&(!Number.isInteger(O(this,Ce))||O(this,Ce)<1||O(this,Ce)>$o))throw new Error(`QuantumMove outer layer must be a positive integer below ${Jo}.`);if(O(this,Ce)!==null&&O(this,Re)!==null&&O(this,Re)<=O(this,Ce))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(O(this,Ce)!==null&&O(this,Re)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(e){return h0(e)}modified(e){return new oa(e.family??O(this,Bn),e.innerLayer??O(this,Re),e.outerLayer??O(this,Ce))}isIdentical(e){const n=e;return e.is(oa)&&O(this,Bn)===O(n,Bn)&&O(this,Re)===O(n,Re)&&O(this,Ce)===O(n,Ce)}get family(){return O(this,Bn)}get outerLayer(){return O(this,Ce)}get innerLayer(){return O(this,Re)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(e){let n=O(this,Bn);return O(this,Re)!==null&&(n=String(O(this,Re))+n,O(this,Ce)!==null&&(n=`${String(O(this,Ce))}-${n}`)),n}};Bn=new WeakMap,Re=new WeakMap,Ce=new WeakMap;let Mn=oa;var Ae,la,ss,jo;const Ri=class Ri extends fi{constructor(...e){super();te(this,ss);te(this,Ae);te(this,la);if(typeof e[0]=="string")if(e[1]??null){Zt(this,Ae,new Qo(Mn.fromString(e[0]),e[1]));return}else return Ri.fromString(e[0]);Zt(this,Ae,new Qo(e[0],e[1]))}isIdentical(e){const n=e.as(Ri);return!!n&&O(this,Ae).isIdentical(O(n,Ae))}invert(){return f0(this,new Ri(O(this,Ae).quantum,nn(this,ss,jo).call(this)?this.amount:-this.amount))}*experimentalExpand(e=ue.Forwards){e===ue.Forwards?yield this:yield this.modified({amount:-this.amount})}get quantum(){return O(this,Ae).quantum}modified(e){return new Ri(O(this,Ae).quantum.modified(e),e.amount??this.amount)}static fromString(e){return u0(e)}get amount(){return O(this,Ae).amount}get type(){return Vu("deprecated: type"),"blockMove"}get family(){return O(this,Ae).quantum.family??void 0}get outerLayer(){return O(this,Ae).quantum.outerLayer??void 0}get innerLayer(){return O(this,Ae).quantum.innerLayer??void 0}toString(e){if((e==null?void 0:e.notation)!=="LGN"){if(nn(this,ss,jo).call(this))return"/";if(this.family.endsWith("_PLUS_"))return O(this,Ae).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){const n=Math.abs(this.amount);return O(this,Ae).quantum.toString().slice(0,-10)+(n===1?"":n)+(this.amount<0?"--":"++")}}return O(this,Ae).quantum.toString(e)+O(this,Ae).suffix()}};Ae=new WeakMap,la=new WeakMap,ss=new WeakSet,jo=function(){return this.isIdentical(O(this,la)??Zt(this,la,new Ri("_SLASH_")))};let P=Ri;class d0{constructor(){pe(this,"quantumU_SQ_",null);pe(this,"quantumD_SQ_",null)}format(t,e){if((e==null?void 0:e.notation)==="LGN"||t.amount!==1)return null;const n=this.tuple(t);return n?`(${n.map(r=>r.amount).join(", ")})`:null}tuple(t){var n,r;if(t.amount!==1)return null;this.quantumU_SQ_||(this.quantumU_SQ_=new Mn("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new Mn("D_SQ_"));const e=t.alg;if(e.experimentalNumChildAlgNodes()===2){const[s,a]=e.childAlgNodes();if((n=s.as(P))!=null&&n.quantum.isIdentical(this.quantumU_SQ_)&&((r=a.as(P))!=null&&r.quantum.isIdentical(this.quantumD_SQ_)))return[s,a]}return null}}const eo=new d0;var Ge,ca,Hu;const jr=class jr extends fi{constructor(e,n){super();te(this,ca);te(this,Ge);pe(this,"experimentalNISSPlaceholder");const r=ns(e);Zt(this,Ge,new Qo(r,n))}isIdentical(e){const n=e;return e.is(jr)&&O(this,Ge).isIdentical(O(n,Ge))}get alg(){return O(this,Ge).quantum}get amount(){return O(this,Ge).amount}get experimentalRepetitionSuffix(){return O(this,Ge).suffix()}invert(){const e=eo.tuple(this);if(e){const[n,r]=e;return new jr(new Tt([n.invert(),r.invert()]))}return new jr(O(this,Ge).quantum,-O(this,Ge).amount)}*experimentalExpand(e=ue.Forwards,n){n??(n=1/0),n===0?yield e===ue.Forwards?this:this.invert():yield*O(this,Ge).experimentalExpand(e,n-1)}static fromString(){throw new Error("unimplemented")}toString(e){return eo.format(this,e)??`${nn(this,ca,Hu).call(this,e)}${O(this,Ge).suffix()}`}experimentalAsSquare1Tuple(){return eo.tuple(this)}};Ge=new WeakMap,ca=new WeakSet,Hu=function(e){const n=O(this,Ge).quantum.toString(e),r=this.alg.childAlgNodes(),{value:s}=r.next();return r.next().done&&(s!=null&&s.is(We)||s!=null&&s.is(Xe))?n:`(${n})`};let Qe=jr;function Fn(i,t){return i instanceof t}function p0(i){return Fn(i,Qe)||Fn(i,Vi)||Fn(i,We)||Fn(i,Xe)||Fn(i,P)||Fn(i,Hn)||Fn(i,Fe)}function Wu(i,t,e){if(t.is(Qe))return i.traverseGrouping(t,e);if(t.is(P))return i.traverseMove(t,e);if(t.is(We))return i.traverseCommutator(t,e);if(t.is(Xe))return i.traverseConjugate(t,e);if(t.is(Fe))return i.traversePause(t,e);if(t.is(Hn))return i.traverseNewline(t,e);if(t.is(Vi))return i.traverseLineComment(t,e);throw new Error("unknown AlgNode")}function Xu(i){if(i.is(Qe)||i.is(P)||i.is(We)||i.is(Xe)||i.is(Fe)||i.is(Hn)||i.is(Vi))return i;throw new Error("internal error: expected AlgNode")}class Ml{traverseAlgNode(t,e){return Wu(this,t,e)}traverseIntoAlgNode(t,e){return Xu(this.traverseAlgNode(t,e))}}class Fx extends Ml{traverseAlgNode(t){return Wu(this,t,void 0)}traverseIntoAlgNode(t){return Xu(this.traverseAlgNode(t))}}function qu(i,t){const e=new i(...t??[]);return e.traverseAlg.bind(e)}const m0="any-direction";class Yu{constructor(t={}){this.config=t}cancelQuantum(){const{cancel:t}=this.config;return t===!0?m0:t===!1?"none":(t==null?void 0:t.directional)??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){const{cancel:t}=this.config;return t===!0||t===!1?"canonical-centered":t!=null&&t.puzzleSpecificModWrap?t==null?void 0:t.puzzleSpecificModWrap:(t==null?void 0:t.directional)==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){var t;return((t=this.config.puzzleLoader)==null?void 0:t.puzzleSpecificSimplifyOptions)??this.config.puzzleSpecificSimplifyOptions}}function g0(i,t){return i*Math.sign(t.amount)>=0}function _0(i,t,e=0){return((i-e)%t+t)%t+e}function v0(i,t,e){var l;const n=new Yu(e),r=Array.from(i.childAlgNodes());let s=[t];function a(){return new Tt([...r,...s])}function o(c){var g;if(n.cancelPuzzleSpecificModWrap()==="none")return c;const u=(g=n.puzzleSpecificSimplifyOptions())==null?void 0:g.quantumMoveOrder;if(!u)return c;const d=u(t.quantum);let h;switch(n.cancelPuzzleSpecificModWrap()){case"gravity":{h=-Math.floor((d-(c.amount<0?0:1))/2);break}case"canonical-centered":{h=-Math.floor((d-1)/2);break}case"canonical-positive":{h=0;break}case"preserve-sign":{h=c.amount<0?1-d:0;break}default:throw new Error("Unknown mod wrap")}const m=_0(c.amount,d,h);return c.modified({amount:m})}if(n.cancelAny()){let c;const u=(l=n.puzzleSpecificSimplifyOptions())==null?void 0:l.axis;if(u)c=v=>u.areQuantumMovesSameAxis(t.quantum,v.quantum);else{const v=t.quantum.toString();c=p=>p.quantum.toString()===v}const d=n.cancelQuantum()==="same-direction",h=new Map;h.set(t.quantum.toString(),Math.sign(t.amount));let m;for(m=r.length-1;m>=0;m--){const v=r[m].as(P);if(!v||!c(v))break;const p=v.quantum.toString();if(d){const f=h.get(p);if(f&&!g0(f,v))break;h.set(p,Math.sign(v.amount))}}const g=[...r.splice(m+1),t];if(u)s=u.simplifySameAxisMoves(g,n.cancelPuzzleSpecificModWrap()!=="none");else{const v=g.reduce((p,f)=>p+f.amount,0);if(h.size!==1)throw new Error("Internal error: multiple quantums when one was expected");s=[new P(t.quantum,v)]}}return s=s.map(c=>o(c)).filter(c=>c.amount!==0),a()}function x0(i,t,e){const n=t.as(P);return n?v0(i,n,e):new Tt([...i.childAlgNodes(),t])}var ua,je,tl,Xr,el;class S0 extends Ml{constructor(){super(...arguments);te(this,je);te(this,ua)}*traverseAlg(e,n){if(n.depth===0){yield*e.childAlgNodes();return}let r=[];const s=nn(this,je,Xr).call(this,n);for(const a of e.childAlgNodes())for(const o of this.traverseAlgNode(a,s))r=Array.from(x0(new Tt(r),o,s).childAlgNodes());for(const a of r)yield a}*traverseGrouping(e,n){if(n.depth===0){yield e;return}if(e.amount===0)return;const r=new Qe(this.traverseAlg(e.alg,nn(this,je,Xr).call(this,n)),e.amount);if(r.alg.experimentalIsEmpty())return;const s=nn(this,je,tl).call(this).get(e);s&&(r.experimentalNISSPlaceholder=s,s.experimentalNISSGrouping=r),yield r}*traverseMove(e,n){yield e}*traverseCommutator(e,n){if(n.depth===0){yield e;return}const r=nn(this,je,Xr).call(this,n),s=new We(this.traverseAlg(e.A,r),this.traverseAlg(e.B,r));s.A.experimentalIsEmpty()||s.B.experimentalIsEmpty()||s.A.isIdentical(s.B)||s.A.isIdentical(s.B.invert())||nn(this,je,el).call(this,s.A,s.B,n)||(yield s)}*traverseConjugate(e,n){if(n.depth===0){yield e;return}const r=nn(this,je,Xr).call(this,n),s=new Xe(this.traverseAlg(e.A,r),this.traverseAlg(e.B,r));if(!s.B.experimentalIsEmpty()){if(s.A.experimentalIsEmpty()||s.A.isIdentical(s.B)||s.A.isIdentical(s.B.invert())||nn(this,je,el).call(this,s.A,s.B,n)){yield*e.B.childAlgNodes();return}yield s}}*traversePause(e,n){if(e.experimentalNISSGrouping){const r=new Fe;nn(this,je,tl).call(this).set(e.experimentalNISSGrouping,r),yield r}else yield e}*traverseNewline(e,n){yield e}*traverseLineComment(e,n){yield e}}ua=new WeakMap,je=new WeakSet,tl=function(){return O(this,ua)??Zt(this,ua,new Map)},Xr=function(e){return{...e,depth:e.depth?e.depth-1:null}},el=function(e,n,r){var s,a,o,l;if(e.experimentalNumChildAlgNodes()===1&&n.experimentalNumChildAlgNodes()===1){const c=(s=Array.from(e.childAlgNodes())[0])==null?void 0:s.as(P),u=(a=Array.from(n.childAlgNodes())[0])==null?void 0:a.as(P);if(!(c&&u))return!1;if(u.quantum.isIdentical(c.quantum)||(l=(o=new Yu(r).puzzleSpecificSimplifyOptions())==null?void 0:o.axis)!=null&&l.areQuantumMovesSameAxis(c.quantum,u.quantum))return!0}return!1};const M0=qu(S0);function Wc(i){if(!i)return[];if(Fn(i,Tt))return i.childAlgNodes();if(typeof i=="string")return Gu(i).childAlgNodes();const t=i;if(typeof t[Symbol.iterator]=="function")return t;throw new Error("Invalid AlgNode")}function ns(i){return Fn(i,Tt)?i:new Tt(i)}var Ve;const Ci=class Ci extends fi{constructor(e){super();te(this,Ve);Zt(this,Ve,Array.from(Wc(e)));for(const n of O(this,Ve))if(!p0(n))throw new Error("An alg can only contain alg nodes.")}isIdentical(e){const n=e;if(!e.is(Ci))return!1;const r=Array.from(O(this,Ve)),s=Array.from(O(n,Ve));if(r.length!==s.length)return!1;for(let a=0;a<r.length;a++)if(!r[a].isIdentical(s[a]))return!1;return!0}invert(){return new Ci(n0(Array.from(O(this,Ve)).map(e=>e.invert())))}*experimentalExpand(e=ue.Forwards,n){n??(n=1/0);for(const r of e0(O(this,Ve),e))yield*r.experimentalExpand(e,n)}expand(e){return new Ci(this.experimentalExpand(ue.Forwards,(e==null?void 0:e.depth)??1/0))}*experimentalLeafMoves(){for(const e of this.experimentalExpand())e.is(P)&&(yield e)}concat(e){return new Ci(Array.from(O(this,Ve)).concat(Array.from(Wc(e))))}experimentalIsEmpty(){for(const e of O(this,Ve))return!1;return!0}static fromString(e){return Gu(e)}units(){return this.childAlgNodes()}*childAlgNodes(){for(const e of O(this,Ve))yield e}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(O(this,Ve)).length}get type(){return Vu("deprecated: type"),"sequence"}toString(e){var s,a;let n="",r=null;for(const o of O(this,Ve)){r&&(n+=y0(r,o));const l=(s=o.as(Fe))==null?void 0:s.experimentalNISSGrouping;if(l){if(l.amount!==-1)throw new Error("Invalid NISS Grouping amount!");n+=`^(${l.alg.toString(e)})`}else(a=o.as(Qe))!=null&&a.experimentalNISSPlaceholder||(n+=o.toString(e));r=o}return n}experimentalSimplify(e){return new Ci(M0(this,e??{}))}simplify(e){return this.experimentalSimplify(e)}};Ve=new WeakMap;let Tt=Ci;function y0(i,t){var e;return i.is(Hn)||t.is(Hn)||(e=t.as(Qe))!=null&&e.experimentalNISSPlaceholder?"":i.is(Vi)&&!t.is(Hn)?`
`:" "}new Tt([new P("R",1),new P("U",1),new P("R",-1),new P("U",1),new P("R",1),new P("U",-2),new P("R",-1)]),new Tt([new P("R",1),new P("U",2),new P("R",-1),new P("U",-1),new P("R",1),new P("U",-1),new P("R",-1)]),new Tt([new We(new Tt([new P("R",1),new P("U",1),new P("R",-2)]),new Tt([new Xe(new Tt([new P("R",1)]),new Tt([new P("U",1)]))]))]),new Tt([new P("R",1),new P("U",-1),new P("L",-1),new P("U",1),new P("R",-1),new P("U",-1),new P("L",1),new P("U",1)]),new Tt([new P("x",-1),new We(new Tt([new Xe(new Tt([new P("R",1)]),new Tt([new P("U",-1)]))]),new Tt([new P("D",1)])),new We(new Tt([new Xe(new Tt([new P("R",1)]),new Tt([new P("U",1)]))]),new Tt([new P("D",1)])),new P("x",1)]),new Tt([new Xe(new Tt([new P("F",1)]),new Tt([new We(new Tt([new P("U",1)]),new Tt([new P("R",1)]))]))]),new Tt([new Xe(new Tt([new P("R",2)]),new Tt([new We(new Tt([new P("F",2)]),new Tt([new P("R",-1),new P("B",-1),new P("R",1)]))]))]),new Tt([new P("F",1),new P("U",1),new P("R",1),new P("U",-1),new P("R",-1),new P("F",-1)]),new Tt([new P("R",1),new P("U",1),new P("R",-1),new P("U",-1),new P("R",-1),new P("F",1),new P("R",2),new P("U",-1),new P("R",-1),new P("U",-1),new P("R",1),new P("U",1),new P("R",-1),new P("F",-1)]),new Tt([new Xe(new Tt([new P("F",1)]),new Tt([new Qe(new Tt([new We(new Tt([new P("R",1)]),new Tt([new P("U",1)]))]),3)]))]),new Tt([new Fe,new Fe,new Fe]);var Ku=2**53,E0=2097152,T0=11,no=new Uint32Array(2);function w0(){globalThis.crypto.getRandomValues(no);const i=no[0],t=no[1];return Math.floor(i*E0)+(t>>T0)}function b0(i){if(typeof i!="number"||i<0||Math.floor(i)!==i)throw new Error("randomUIntBelow() not called with a positive integer value.");if(i>Ku)throw new Error(`Called randomUIntBelow() with max === ${i}, which is larger than JavaScript can handle with integer precision.`)}function Zu(i){b0(i);for(var t,e,n;;)if(t=w0(),e=Math.floor(t/i),n=e*i,n<=Ku-i)return t-n}function Bx(i){return i[Zu(i.length)]}const $u=["U","R","D","L","ALL"],A0=["UR","DR","DL","UL"].concat($u);function Ju(){let i=0;function t(){const r=Zu(12);return r!==0&&i++,r<=6?`${r}+`:`${12-r}-`}const e=[];function n(r){for(const s of r)e.push(`${s}${t()}`)}return n(A0),e.push("y2"),n($u),i<2?Ju():e.join(" ")}async function R0(i){var e;const t=(e=globalThis.process)==null?void 0:e.getBuiltinModule;return t?t(i):import(i)}function C0(i){const t=new WeakMap;return{postMessage:i.postMessage.bind(i),addEventListener:(e,n)=>{const r=s=>{"handleEvent"in n?n.handleEvent({data:s}):n({data:s})};i.on("message",r),t.set(n,r)},removeEventListener:(e,n)=>{const r=t.get(n);r&&(i.off("message",r),t.delete(n))},nodeWorker:i,terminate:()=>{i.terminate()}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qu=Symbol("Comlink.proxy"),P0=Symbol("Comlink.endpoint"),D0=Symbol("Comlink.releaseProxy"),io=Symbol("Comlink.finalizer"),Zs=Symbol("Comlink.thrown"),ju=i=>typeof i=="object"&&i!==null||typeof i=="function",L0={canHandle:i=>ju(i)&&i[Qu],serialize(i){const{port1:t,port2:e}=new MessageChannel;return eh(i,t),[e,[e]]},deserialize(i){return i.start(),ih(i)}},I0={canHandle:i=>ju(i)&&Zs in i,serialize({value:i}){let t;return i instanceof Error?t={isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:t={isError:!1,value:i},[t,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}},th=new Map([["proxy",L0],["throw",I0]]);function U0(i,t){for(const e of i)if(t===e||e==="*"||e instanceof RegExp&&e.test(t))return!0;return!1}function eh(i,t=globalThis,e=["*"]){t.addEventListener("message",function n(r){if(!r||!r.data)return;if(!U0(e,r.origin)){console.warn(`Invalid origin '${r.origin}' for comlink proxy`);return}const{id:s,type:a,path:o}=Object.assign({path:[]},r.data),l=(r.data.argumentList||[]).map(Ai);let c;try{const u=o.slice(0,-1).reduce((h,m)=>h[m],i),d=o.reduce((h,m)=>h[m],i);switch(a){case"GET":c=d;break;case"SET":u[o.slice(-1)[0]]=Ai(r.data.value),c=!0;break;case"APPLY":c=d.apply(u,l);break;case"CONSTRUCT":{const h=new d(...l);c=k0(h)}break;case"ENDPOINT":{const{port1:h,port2:m}=new MessageChannel;eh(i,m),c=z0(h,[h])}break;case"RELEASE":c=void 0;break;default:return}}catch(u){c={value:u,[Zs]:0}}Promise.resolve(c).catch(u=>({value:u,[Zs]:0})).then(u=>{const[d,h]=na(u);t.postMessage(Object.assign(Object.assign({},d),{id:s}),h),a==="RELEASE"&&(t.removeEventListener("message",n),nh(t),io in i&&typeof i[io]=="function"&&i[io]())}).catch(u=>{const[d,h]=na({value:new TypeError("Unserializable return value"),[Zs]:0});t.postMessage(Object.assign(Object.assign({},d),{id:s}),h)})}),t.start&&t.start()}function N0(i){return i.constructor.name==="MessagePort"}function nh(i){N0(i)&&i.close()}function ih(i,t){const e=new Map;return i.addEventListener("message",function(r){const{data:s}=r;if(!s||!s.id)return;const a=e.get(s.id);if(a)try{a(s)}finally{e.delete(s.id)}}),nl(i,e,[],t)}function Gs(i){if(i)throw new Error("Proxy has been released and is not useable")}function rh(i){return hr(i,new Map,{type:"RELEASE"}).then(()=>{nh(i)})}const ta=new WeakMap,ea="FinalizationRegistry"in globalThis&&new FinalizationRegistry(i=>{const t=(ta.get(i)||0)-1;ta.set(i,t),t===0&&rh(i)});function O0(i,t){const e=(ta.get(t)||0)+1;ta.set(t,e),ea&&ea.register(i,t,i)}function F0(i){ea&&ea.unregister(i)}function nl(i,t,e=[],n=function(){}){let r=!1;const s=new Proxy(n,{get(a,o){if(Gs(r),o===D0)return()=>{F0(s),rh(i),t.clear(),r=!0};if(o==="then"){if(e.length===0)return{then:()=>s};const l=hr(i,t,{type:"GET",path:e.map(c=>c.toString())}).then(Ai);return l.then.bind(l)}return nl(i,t,[...e,o])},set(a,o,l){Gs(r);const[c,u]=na(l);return hr(i,t,{type:"SET",path:[...e,o].map(d=>d.toString()),value:c},u).then(Ai)},apply(a,o,l){Gs(r);const c=e[e.length-1];if(c===P0)return hr(i,t,{type:"ENDPOINT"}).then(Ai);if(c==="bind")return nl(i,t,e.slice(0,-1));const[u,d]=Xc(l);return hr(i,t,{type:"APPLY",path:e.map(h=>h.toString()),argumentList:u},d).then(Ai)},construct(a,o){Gs(r);const[l,c]=Xc(o);return hr(i,t,{type:"CONSTRUCT",path:e.map(u=>u.toString()),argumentList:l},c).then(Ai)}});return O0(s,i),s}function B0(i){return Array.prototype.concat.apply([],i)}function Xc(i){const t=i.map(na);return[t.map(e=>e[0]),B0(t.map(e=>e[1]))]}const sh=new WeakMap;function z0(i,t){return sh.set(i,t),i}function k0(i){return Object.assign(i,{[Qu]:!0})}function na(i){for(const[t,e]of th)if(e.canHandle(i)){const[n,r]=e.serialize(i);return[{type:"HANDLER",name:t,value:n},r]}return[{type:"RAW",value:i},sh.get(i)||[]]}function Ai(i){switch(i.type){case"HANDLER":return th.get(i.name).deserialize(i.value);case"RAW":return i.value}}function hr(i,t,e,n){return new Promise(r=>{const s=G0();t.set(s,r),i.start&&i.start(),i.postMessage(Object.assign({id:s},e),n)})}function G0(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const V0=typeof globalThis.Worker>"u"&&typeof globalThis.WorkerNavigator>"u";async function H0(i,t){const{Worker:e}=await R0("node:worker_threads"),n=new e(i,t);return n.unref(),C0(n)}async function W0(i,t){let e;return V0?H0(i):(e=new globalThis.Worker(i,{type:t?t.type:void 0}),e)}const X0="modulepreload",q0=function(i){return"/"+i},qc={},ie=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(l=>{if(l=q0(l),l in qc)return;qc[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":X0,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},Y0={expose:!0};async function K0(){return import.meta.resolve("./search-worker-entry.js")}function Z0(){return new URL("data:text/javascript;base64,aW1wb3J0IHsgbm9kZUVuZHBvaW50UG9ydCB9IGZyb20gIi4uLy4uL3ZlbmRvci9hcGFjaGUvY29tbGluay1ldmVyeXdoZXJlL2luc2lkZS9pbmRleCI7DQppbXBvcnQgeyBleHBvc2VBUEkgfSBmcm9tICIuL3dvcmtlci1ndWFyZCI7DQoNCmlmIChleHBvc2VBUEkuZXhwb3NlKSB7DQogIChhc3luYyAoKSA9PiB7DQogICAgYXdhaXQgaW1wb3J0KCIuLi9pbnNpZGUiKTsNCg0KICAgIC8vIFdvcmthcm91bmQgZm9yIGBub2RlYA0KICAgIGNvbnN0IG1lc3NhZ2VQb3J0ID0gZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZQ0KICAgICAgPyBnbG9iYWxUaGlzDQogICAgICA6IGF3YWl0IG5vZGVFbmRwb2ludFBvcnQoKTsNCiAgICBtZXNzYWdlUG9ydC5wb3N0TWVzc2FnZSgiY29tbGluay1leHBvc2VkIik7IC8vIFRPRE86IHJlbW92ZSB0aGlzDQogIH0pKCk7DQp9DQoNCi8vIFdvcmthcm91bmQgZm9yIGBlc2J1aWxkYDogaHR0cHM6Ly9naXRodWIuY29tL2V2YW53L2VzYnVpbGQvaXNzdWVzLzMxMiNpc3N1ZWNvbW1lbnQtMTA5MjE5NTc3OA0KZXhwb3J0IGNvbnN0IFdPUktFUl9FTlRSWV9GSUxFX1VSTCA9IGltcG9ydC5tZXRhLnVybDsNCg==",import.meta.url)}async function $0(){return Y0.expose=!1,(await ie(async()=>{const{WORKER_ENTRY_FILE_URL:i}=await import("./search-worker-entry-WJE2XYDw.js").then(t=>t.s);return{WORKER_ENTRY_FILE_URL:i}},[])).WORKER_ENTRY_FILE_URL}function J0(){return new Worker(new URL("/assets/search-worker-entry-CiiqNvj2.js",import.meta.url),{type:"module"})}function Q0(i){var t;try{const e=(t=globalThis.location)==null?void 0:t.origin,n=i.origin;return!!e&&!!n&&e!==n}catch{return!1}}async function ro(i){const t=new URL(i,import.meta.url),e=Q0(t);try{return Yc(t,e)}catch{return Yc(t,!e)}}async function Yc(i,t){return new Promise(async(e,n)=>{var r;try{i||n(new Error("Could not get worker entry file URL."));let s=i;if(t){const c=`import ${JSON.stringify(i.toString())};`,u=new Blob([c],{type:"text/javascript"});s=new URL(URL.createObjectURL(u))}const a=await W0(s,{type:"module"});(r=a.unref)==null||r.call(a);const o=c=>{n(c)},l=c=>{c==="comlink-exposed"?e(ah(a)):n(new Error(`wrong module instantiation message ${c}`))};a.nodeWorker?a.nodeWorker.once("message",l):(a.addEventListener("error",o,{once:!0}),a.addEventListener("message",c=>l(c.data),{once:!0}))}catch(s){n(s)}})}async function j0(){return new Promise(async(i,t)=>{try{const e=J0(),n=s=>{t(s)},r=s=>{s==="comlink-exposed"?i(ah(e)):t(new Error(`wrong module instantiation message ${s}`))};e.addEventListener("error",n,{once:!0}),e.addEventListener("message",s=>r(s.data),{once:!0})}catch(e){t(e)}})}function ah(i){const t=ih(i),e=i.terminate.bind(i);return{insideAPI:t,outsideAPI:{terminate:e}}}async function tv(){const i=ev(),{insideAPI:t}=await i;return t.setDebugMeasurePerf(il.logPerf),t.setScramblePrefetchLevel(il.scramblePrefetchLevel),i}async function ev(){var e;((e=globalThis.location)==null?void 0:e.protocol)==="file:"&&console.warn("This current web page is loaded from the local filesystem (a URL that starts with `file://`). In this situation, `cubing.js` may be unable to generate scrambles or perform searches in some browsers. See: https://js.cubing.net/cubing/scramble/#file-server-required");function i(n){return`Module worker instantiation${n?` ${n}`:""} failed`}const t=[[async()=>ro(await K0()),"using `import.meta.resolve(…)",null],[j0,"using inline `new URL(…, import.meta.url)`","may"],[async()=>ro(Z0()),"using `new URL(…, import.meta.url)`","will"],[async()=>ro(await $0()),"using the `esbuild` workaround","will"]];for(const[n,r,s]of t)try{const a=await n();return s&&il.showWorkerInstantiationWarnings&&console.warn(`Module worker instantiation required ${r}. \`cubing.js\` ${s} not support this fallback in the future.`),a}catch{console.warn(`${i(r)}, falling back.`)}throw new Error(`${i()}. There are no more fallbacks available.`)}let nv;function iv(){return nv??(nv=tv())}async function rv(i){switch(i){case"clock":return Tt.fromString(await Ju())}const e=await sv(i);return Tt.fromString(e)}async function sv(i){return(await iv()).insideAPI.randomScrambleStringForEvent(i)}const il={logPerf:!0,scramblePrefetchLevel:"auto",disableStringWorker:!1,forceNewWorkerForEveryScramble:!1,showWorkerInstantiationWarnings:!0};function rl(i,t,e){const n={};for(const r of i.orbits){const s=t[r.orbitName],a=e[r.orbitName];if(ia(r.numOrientations,a))n[r.orbitName]=s;else if(ia(r.numOrientations,s))n[r.orbitName]=a;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let l=0;l<r.numPieces;l++)o[l]=s.permutation[a.permutation[l]];n[r.orbitName]={permutation:o,orientationDelta:s.orientationDelta}}else{const l=new Array(r.numPieces);for(let c=0;c<r.numPieces;c++)l[c]=(s.orientationDelta[a.permutation[c]]+a.orientationDelta[c])%r.numOrientations,o[c]=s.permutation[a.permutation[c]];n[r.orbitName]={permutation:o,orientationDelta:l}}}}return n}function Kc(i,t,e){const n={};for(const r of i.orbits){const s=t[r.orbitName],a=e[r.orbitName];if(ia(r.numOrientations,a))n[r.orbitName]=s;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let c=0;c<r.numPieces;c++)o[c]=s.pieces[a.permutation[c]];const l={pieces:o,orientation:s.orientation};n[r.orbitName]=l}else{const l=new Array(r.numPieces),c=s.orientationMod?new Array(r.numPieces):void 0;for(let d=0;d<r.numPieces;d++){const h=a.permutation[d];let m=r.numOrientations;if(s.orientationMod){const g=s.orientationMod[h];c[d]=g,m=g||r.numOrientations}l[d]=(s.orientation[h]+a.orientationDelta[d])%m,o[d]=s.pieces[h]}const u={pieces:o,orientation:l};c&&(u.orientationMod=c),n[r.orbitName]=u}}}return n}const Zc=new Map;function av(i){const t=Zc.get(i);if(t)return t;const e=new Array(i),n=new Array(i);for(let s=0;s<i;s++)e[s]=s,n[s]=0;const r={permutation:e,orientationDelta:n};return Zc.set(i,r),r}function ov(i){const t={};for(const e of i.orbits)t[e.orbitName]=av(e.numPieces);return t}function lv(i,t){function e(r,s){var c;const a=r.toString(),o=i.definition.moves[a];if(o)return Pr(i,o,s);const l=(c=i.definition.derivedMoves)==null?void 0:c[a];if(l)return Pr(i,i.algToTransformation(l).transformationData,s)}const n=e(t.quantum,t.amount)??e(t,1)??e(t.invert,-1);if(n)return n;throw new Error(`Invalid move for KPuzzle (${i.name()}): ${t}`)}class Fi{constructor(t,e){this.kpuzzle=t,this.patternData=e}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),patternData:this.patternData}}static fromTransformation(t){const e=Kc(t.kpuzzle.definition,t.kpuzzle.definition.defaultPattern,t.transformationData);return new Fi(t.kpuzzle,e)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(t.isIdentityTransformation())return new Fi(this.kpuzzle,this.patternData);const e=Kc(this.kpuzzle.definition,this.patternData,t.transformationData);return new Fi(this.kpuzzle,e)}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}isIdentical(t){return fv(this.kpuzzle,this.patternData,t.patternData)}experimentalToTransformation(){if(!this.kpuzzle.canConvertDefaultPatternToUniqueTransformation())return null;const t={};for(const[e,n]of Object.entries(this.patternData)){const r={permutation:n.pieces,orientationDelta:n.orientation};t[e]=r}return new oi(this.kpuzzle,t)}experimentalIsSolved(t){if(!this.kpuzzle.definition.experimentalIsPatternSolved)throw new Error("`KPattern.experimentalIsPatternSolved()` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsPatternSolved(this,t)}}var Oi;const ri=class ri{constructor(t,e){te(this,Oi);this.kpuzzle=t,this.transformationData=e}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new ri(this.kpuzzle,oh(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return O(this,Oi)??Zt(this,Oi,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(t){const e=new ri(t,ov(t.definition));return Zt(e,Oi,!0),e}isIdentical(t){return uv(this.kpuzzle,this.transformationData,t.transformationData)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(this.kpuzzle!==t.kpuzzle)throw new Error(`Tried to apply a transformation for a KPuzzle (${t.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);return O(this,Oi)?new ri(this.kpuzzle,t.transformationData):O(t,Oi)?new ri(this.kpuzzle,this.transformationData):new ri(this.kpuzzle,rl(this.kpuzzle.definition,this.transformationData,t.transformationData))}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}toKPattern(){return Fi.fromTransformation(this)}repetitionOrder(){return mv(this.kpuzzle.definition,this)}selfMultiply(t){return new ri(this.kpuzzle,Pr(this.kpuzzle,this.transformationData,t))}};Oi=new WeakMap;let oi=ri;function ia(i,t){t.permutation||console.log(t);const{permutation:e}=t,n=e.length;for(let r=0;r<n;r++)if(e[r]!==r)return!1;if(i>1){const{orientationDelta:r}=t;for(let s=0;s<n;s++)if(r[s]!==0)return!1}return!0}function cv(i,t,e,n={}){for(let r=0;r<i.numPieces;r++)if(!(n!=null&&n.ignorePieceOrientations)&&t.orientationDelta[r]!==e.orientationDelta[r]||!(n!=null&&n.ignorePiecePermutation)&&t.permutation[r]!==e.permutation[r])return!1;return!0}function uv(i,t,e){for(const n of i.definition.orbits)if(!cv(n,t[n.orbitName],e[n.orbitName]))return!1;return!0}function hv(i,t,e,n={}){var r,s;for(let a=0;a<i.numPieces;a++)if(!(n!=null&&n.ignorePieceOrientations)&&(t.orientation[a]!==e.orientation[a]||(((r=t.orientationMod)==null?void 0:r[a])??0)!==(((s=e.orientationMod)==null?void 0:s[a])??0))||!(n!=null&&n.ignorePieceIndices)&&t.pieces[a]!==e.pieces[a])return!1;return!0}function fv(i,t,e){for(const n of i.definition.orbits)if(!hv(n,t[n.orbitName],e[n.orbitName]))return!1;return!0}function oh(i,t){const e={};for(const n of i.definition.orbits){const r=t[n.orbitName];if(ia(n.numOrientations,r))e[n.orbitName]=r;else if(n.numOrientations===1){const s=new Array(n.numPieces);for(let a=0;a<n.numPieces;a++)s[r.permutation[a]]=a;e[n.orbitName]={permutation:s,orientationDelta:r.orientationDelta}}else{const s=new Array(n.numPieces),a=new Array(n.numPieces);for(let o=0;o<n.numPieces;o++){const l=r.permutation[o];s[l]=o,a[l]=(n.numOrientations-r.orientationDelta[o]+n.numOrientations)%n.numOrientations}e[n.orbitName]={permutation:s,orientationDelta:a}}}return e}function Pr(i,t,e){if(e===1)return t;if(e<0)return Pr(i,oh(i,t),-e);if(e===0){const{transformationData:s}=i.identityTransformation();return s}let n=t;e!==2&&(n=Pr(i,t,Math.floor(e/2)));const r=rl(i.definition,n,n);return e%2===0?r:rl(i.definition,t,r)}class dv extends Ml{traverseAlg(t,e){let n=null;for(const r of t.childAlgNodes())n?n=n.applyTransformation(this.traverseAlgNode(r,e)):n=this.traverseAlgNode(r,e);return n??e.identityTransformation()}traverseGrouping(t,e){const n=this.traverseAlg(t.alg,e);return new oi(e,Pr(e,n.transformationData,t.amount))}traverseMove(t,e){return e.moveToTransformation(t)}traverseCommutator(t,e){const n=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return n.applyTransformation(r).applyTransformation(n.invert()).applyTransformation(r.invert())}traverseConjugate(t,e){const n=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return n.applyTransformation(r).applyTransformation(n.invert())}traversePause(t,e){return e.identityTransformation()}traverseNewline(t,e){return e.identityTransformation()}traverseLineComment(t,e){return e.identityTransformation()}}const pv=qu(dv);function sl(i,t){return t?sl(t,i%t):i}function mv(i,t){let e=1;for(const n of i.orbits){const r=t.transformationData[n.orbitName],s=new Array(n.numPieces);for(let a=0;a<n.numPieces;a++)if(!s[a]){let o=a,l=0,c=0;for(;s[o]=!0,l=l+r.orientationDelta[o],c=c+1,o=r.permutation[o],o!==a;);l!==0&&(c=c*n.numOrientations/sl(n.numOrientations,Math.abs(l))),e=e*c/sl(e,c)}}return e}var as,Er,ha;class Yn{constructor(t,e){pe(this,"experimentalPGNotation");te(this,as);te(this,Er,new Map);te(this,ha);this.definition=t,this.experimentalPGNotation=e==null?void 0:e.experimentalPGNotation}lookupOrbitDefinition(t){return O(this,as)||Zt(this,as,(()=>{const e={};for(const n of this.definition.orbits)e[n.orbitName]=n;return e})()),O(this,as)[t]}name(){return this.definition.name}identityTransformation(){return oi.experimentalConstructIdentity(this)}moveToTransformation(t){typeof t=="string"&&(t=new P(t));const e=t.toString(),n=O(this,Er).get(e);if(n)return new oi(this,n);if(this.experimentalPGNotation){const s=this.experimentalPGNotation.lookupMove(t);if(!s)throw new Error(`could not map to internal move: ${t}`);return O(this,Er).set(e,s),new oi(this,s)}const r=lv(this,t);return O(this,Er).set(e,r),new oi(this,r)}algToTransformation(t){return typeof t=="string"&&(t=new Tt(t)),pv(t,this)}toTransformation(t){var e,n;return typeof t=="string"?this.algToTransformation(t):(e=t==null?void 0:t.is)!=null&&e.call(t,Tt)?this.algToTransformation(t):(n=t==null?void 0:t.is)!=null&&n.call(t,P)?this.moveToTransformation(t):t}defaultPattern(){return new Fi(this,this.definition.defaultPattern)}canConvertDefaultPatternToUniqueTransformation(){return O(this,ha)??Zt(this,ha,(()=>{for(const t of this.definition.orbits){const e=new Array(t.numPieces).fill(!1);for(const n of this.definition.defaultPattern[t.orbitName].pieces)e[n]=!0;for(const n of e)if(!n)return!1}return!0})())}}as=new WeakMap,Er=new WeakMap,ha=new WeakMap;class xr extends Promise{constructor(t){super(e=>{e()}),this._executor=t}static from(t){return new xr(e=>{e(t())})}static resolve(t){return new xr(e=>{e(t)})}static reject(t){return new xr((e,n)=>{n(t)})}then(t,e){return this._promise=this._promise||new Promise(this._executor),this._promise.then(t,e)}catch(t){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(t)}}function lh(i){return new xr(t=>{t(i())})}var Z=(i=>(i.Regular="Regular",i.Dim="Dim",i.Ignored="Ignored",i.OrientationStickers="OrientationStickers",i.Invisible="Invisible",i.Ignoriented="Ignoriented",i.IgnoreNonPrimary="IgnoreNonPrimary",i.PermuteNonPrimary="PermuteNonPrimary",i.OrientationWithoutPermutation="OrientationWithoutPermutation",i.ExperimentalOrientationWithoutPermutation2="ExperimentalOrientationWithoutPermutation2",i.Mystery="Mystery",i))(Z||{});class yi{constructor(t,e){pe(this,"stickerings",new Map);for(const n of t.definition.orbits)this.stickerings.set(n.orbitName,new Array(n.numPieces).fill(e))}}const En="regular",ve="ignored",or="oriented",gv="experimentalOriented2",Gr="invisible",Si="dim",Vr="mystery",_v={Regular:{facelets:[En,En,En,En,En]},Ignored:{facelets:[ve,ve,ve,ve,ve]},OrientationStickers:{facelets:[or,or,or,or,or]},IgnoreNonPrimary:{facelets:[En,ve,ve,ve,ve]},Invisible:{facelets:[Gr,Gr,Gr,Gr,Gr]},PermuteNonPrimary:{facelets:[Si,En,En,En,En]},Dim:{facelets:[Si,Si,Si,Si,Si]},Ignoriented:{facelets:[Si,ve,ve,ve,ve]},OrientationWithoutPermutation:{facelets:[or,ve,ve,ve,ve]},ExperimentalOrientationWithoutPermutation2:{facelets:[gv,ve,ve,ve,ve]},Mystery:{facelets:[Vr,Vr,Vr,Vr,Vr]}};function vv(i){return _v[i]}class ch extends yi{constructor(t){super(t,"Regular")}set(t,e){for(const[n,r]of this.stickerings.entries())for(let s=0;s<r.length;s++)t.stickerings.get(n)[s]&&(r[s]=e);return this}toStickeringMask(){const t={orbits:{}};for(const[e,n]of this.stickerings.entries()){const r=[],s={pieces:r};t.orbits[e]=s;for(const a of n)r.push(vv(a))}return t}}class uh{constructor(t){this.kpuzzle=t}and(t){const e=new yi(this.kpuzzle,!1);for(const n of this.kpuzzle.definition.orbits)t:for(let r=0;r<n.numPieces;r++){e.stickerings.get(n.orbitName)[r]=!0;for(const s of t)if(!s.stickerings.get(n.orbitName)[r]){e.stickerings.get(n.orbitName)[r]=!1;continue t}}return e}or(t){const e=new yi(this.kpuzzle,!1);for(const n of this.kpuzzle.definition.orbits)t:for(let r=0;r<n.numPieces;r++){e.stickerings.get(n.orbitName)[r]=!1;for(const s of t)if(s.stickerings.get(n.orbitName)[r]){e.stickerings.get(n.orbitName)[r]=!0;continue t}}return e}not(t){const e=new yi(this.kpuzzle,!1);for(const n of this.kpuzzle.definition.orbits)for(let r=0;r<n.numPieces;r++)e.stickerings.get(n.orbitName)[r]=!t.stickerings.get(n.orbitName)[r];return e}all(){return this.and(this.moves([]))}move(t){const e=this.kpuzzle.moveToTransformation(t),n=new yi(this.kpuzzle,!1);for(const r of this.kpuzzle.definition.orbits)for(let s=0;s<r.numPieces;s++)(e.transformationData[r.orbitName].permutation[s]!==s||e.transformationData[r.orbitName].orientationDelta[s]!==0)&&(n.stickerings.get(r.orbitName)[s]=!0);return n}moves(t){return t.map(e=>this.move(e))}orbits(t){const e=new yi(this.kpuzzle,!1);for(const n of t)e.stickerings.get(n).fill(!0);return e}orbitPrefix(t){const e=new yi(this.kpuzzle,!1);for(const n of this.kpuzzle.definition.orbits)n.orbitName.startsWith(t)&&e.stickerings.get(n.orbitName).fill(!0);return e}}const $c="Last Layer",Jc="Last Slot",dn={"3x3x3":$c,megaminx:$c},ni={"3x3x3":Jc,megaminx:Jc},xv={full:{groups:{"3x3x3":"Stickering",megaminx:"Stickering"}},OLL:{groups:dn},PLL:{groups:dn},LL:{groups:dn},EOLL:{groups:dn},COLL:{groups:dn},OCLL:{groups:dn},CPLL:{groups:dn},CLL:{groups:dn},EPLL:{groups:dn},ELL:{groups:dn},ZBLL:{groups:dn},LS:{groups:ni},LSOLL:{groups:ni},LSOCLL:{groups:ni},ELS:{groups:ni},CLS:{groups:ni},ZBLS:{groups:ni},VLS:{groups:ni},WVLS:{groups:ni},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},FirstBlock:{groups:{"3x3x3":"Roux"}},SecondBlock:{groups:{"3x3x3":"Roux"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},EODF:{groups:{"3x3x3":"Nautilus"}},G1:{groups:{"3x3x3":"FMC"}},L2C:{groups:{"4x4x4":"Reduction","5x5x5":"Reduction","6x6x6":"Reduction"}},PBL:{groups:{"2x2x2":"Ortega"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}};async function is(i,t){return(await Sv(i,t)).toStickeringMask()}async function Sv(i,t){const e=await i.kpuzzle(),n=new ch(e),r=new uh(e),s=()=>r.move("U"),a=()=>r.or(r.moves(["U","D"])),o=()=>r.or(r.moves(["L","R"])),l=()=>r.not(o()),c=()=>r.not(s()),u=()=>r.orbitPrefix("CENTER"),d=N=>r.and([r.move(N),u()]),h=()=>r.orbitPrefix("EDGE"),m=N=>r.and([r.and(r.moves(N)),h()]),g=()=>r.or([r.orbitPrefix("CORNER"),r.orbitPrefix("C4RNER"),r.orbitPrefix("C5RNER")]),v=()=>r.or([l(),r.and([s(),h()])]),p=()=>r.and([s(),u()]),f=()=>r.and([r.and(r.moves(["F","R"])),h()]),w=()=>r.and([r.and(r.moves(["F","R"])),g(),r.not(s())]),T=()=>r.or([w(),f()]);function M(){n.set(c(),Z.Dim)}function k(){n.set(s(),Z.PermuteNonPrimary),n.set(p(),Z.Dim)}function b(){n.set(s(),Z.IgnoreNonPrimary),n.set(p(),Z.Regular)}function A(){n.set(s(),Z.Ignoriented),n.set(p(),Z.Dim)}switch(t){case"full":break;case"PLL":{M(),k();break}case"CLS":{M(),n.set(w(),Z.Regular),n.set(s(),Z.Ignoriented),n.set(r.and([s(),u()]),Z.Dim),n.set(r.and([s(),g()]),Z.IgnoreNonPrimary);break}case"OLL":{M(),b();break}case"EOLL":{M(),b(),n.set(r.and([s(),g()]),Z.Ignored);break}case"COLL":{M(),n.set(r.and([s(),h()]),Z.Ignoriented),n.set(r.and([s(),u()]),Z.Dim),n.set(r.and([s(),g()]),Z.Regular);break}case"OCLL":{M(),A(),n.set(r.and([s(),g()]),Z.IgnoreNonPrimary);break}case"CPLL":{M(),n.set(r.and([g(),s()]),Z.PermuteNonPrimary),n.set(r.and([r.not(g()),s()]),Z.Dim);break}case"CLL":{M(),n.set(r.not(r.and([g(),s()])),Z.Dim);break}case"EPLL":{M(),n.set(s(),Z.Dim),n.set(r.and([s(),h()]),Z.PermuteNonPrimary);break}case"ELL":{M(),n.set(s(),Z.Dim),n.set(r.and([s(),h()]),Z.Regular);break}case"ELS":{M(),b(),n.set(r.and([s(),g()]),Z.Ignored),n.set(f(),Z.Regular),n.set(w(),Z.Ignored);break}case"LL":{M();break}case"F2L":{n.set(s(),Z.Ignored);break}case"ZBLL":{M(),n.set(s(),Z.PermuteNonPrimary),n.set(p(),Z.Dim),n.set(r.and([s(),g()]),Z.Regular);break}case"ZBLS":{M(),n.set(T(),Z.Regular),b(),n.set(r.and([s(),g()]),Z.Ignored);break}case"VLS":{M(),n.set(T(),Z.Regular),b();break}case"WVLS":{M(),n.set(T(),Z.Regular),n.set(r.and([s(),h()]),Z.Ignoriented),n.set(r.and([s(),u()]),Z.Dim),n.set(r.and([s(),g()]),Z.IgnoreNonPrimary);break}case"LS":{M(),n.set(T(),Z.Regular),n.set(s(),Z.Ignored),n.set(p(),Z.Dim);break}case"LSOLL":{M(),b(),n.set(T(),Z.Regular);break}case"LSOCLL":{M(),A(),n.set(r.and([s(),g()]),Z.IgnoreNonPrimary),n.set(T(),Z.Regular);break}case"EO":{n.set(g(),Z.Ignored),n.set(h(),Z.OrientationWithoutPermutation);break}case"EOline":{n.set(g(),Z.Ignored),n.set(h(),Z.OrientationWithoutPermutation),n.set(r.and(r.moves(["D","M"])),Z.Regular);break}case"EOcross":{n.set(h(),Z.OrientationWithoutPermutation),n.set(r.move("D"),Z.Regular),n.set(g(),Z.Ignored);break}case"CMLL":{n.set(c(),Z.Dim),n.set(v(),Z.Ignored),n.set(r.and([s(),g()]),Z.Regular);break}case"L10P":{n.set(r.not(v()),Z.Dim),n.set(r.and([g(),s()]),Z.Regular);break}case"L6E":{n.set(r.not(v()),Z.Dim);break}case"L6EO":{n.set(r.not(v()),Z.Dim),n.set(v(),Z.ExperimentalOrientationWithoutPermutation2),n.set(r.and([u(),a()]),Z.ExperimentalOrientationWithoutPermutation2),n.set(r.and([r.move("M"),r.move("E")]),Z.Ignored);break}case"Daisy":{n.set(r.all(),Z.Ignored),n.set(u(),Z.Dim),n.set(r.and([r.move("D"),u()]),Z.Regular),n.set(r.and([r.move("U"),h()]),Z.IgnoreNonPrimary);break}case"Cross":{n.set(r.all(),Z.Ignored),n.set(u(),Z.Dim),n.set(r.and([r.move("D"),u()]),Z.Regular),n.set(r.and([r.move("D"),h()]),Z.Regular);break}case"2x2x2":{n.set(r.or(r.moves(["U","F","R"])),Z.Ignored),n.set(r.and([r.or(r.moves(["U","F","R"])),u()]),Z.Dim);break}case"2x2x3":{n.set(r.all(),Z.Dim),n.set(r.or(r.moves(["U","F","R"])),Z.Ignored),n.set(r.and([r.or(r.moves(["U","F","R"])),u()]),Z.Dim),n.set(r.and([r.move("F"),r.not(r.or(r.moves(["U","R"])))]),Z.Regular);break}case"G1":{n.set(r.all(),Z.ExperimentalOrientationWithoutPermutation2),n.set(r.or(r.moves(["E"])),Z.OrientationWithoutPermutation),n.set(r.and(r.moves(["E","S"])),Z.Ignored);break}case"L2C":{n.set(r.or(r.moves(["L","R","B","D"])),Z.Dim),n.set(r.not(u()),Z.Ignored);break}case"PBL":{n.set(r.all(),Z.Ignored),n.set(r.or(r.moves(["U","D"])),Z.PermuteNonPrimary);break}case"FirstBlock":{n.set(r.not(r.and([r.and(r.moves(["L"])),r.not(s())])),Z.Ignored),n.set(d("R"),Z.Dim);break}case"SecondBlock":{n.set(r.not(r.and([r.and(r.moves(["L"])),r.not(s())])),Z.Ignored),n.set(r.and([r.and(r.moves(["L"])),r.not(s())]),Z.Dim),n.set(r.and([r.and(r.moves(["R"])),r.not(s())]),Z.Regular);break}case"EODF":{M(),n.set(r.or([w(),r.and([s(),g()])]),Z.Ignored),n.set(r.or([r.and([s(),h()]),f()]),Z.OrientationWithoutPermutation),n.set(m(["D","F"]),Z.Regular),n.set(d("F"),Z.Regular);break}case"Void Cube":{n.set(u(),Z.Invisible);break}case"picture":case"invisible":{n.set(r.all(),Z.Invisible);break}case"centers-only":{n.set(r.not(u()),Z.Ignored);break}default:console.warn(`Unsupported stickering for ${i.id}: ${t}. Setting all pieces to dim.`),n.set(r.and(r.moves([])),Z.Dim)}return n}async function Ma(i,t){const e=[],n=[];for(const[r,s]of Object.entries(xv))s.groups&&(i in s.groups?e.push(r):t!=null&&t.use3x3x3Fallbacks&&"3x3x3"in s.groups&&n.push(r));return e.concat(n)}function he(i){let t=null;return()=>t??(t=i())}async function yl(i){return(await ie(()=>import("./index-DH1clr_m.js"),[])).getPuzzleGeometryByName(i,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function hh(i,t){const e=await i,n=e.getKPuzzleDefinition(!0);n.name=t;const r=await ie(()=>import("./index-DH1clr_m.js"),[]),s=new r.ExperimentalPGNotation(e,e.getOrbitsDef(!0));return new Yn(s.remapKPuzzleDefinition(n),{experimentalPGNotation:s})}var fa,da,pa;class Bi{constructor(t){pe(this,"pgId");pe(this,"id");pe(this,"fullName");pe(this,"inventedBy");pe(this,"inventionYear");te(this,fa);te(this,da);te(this,pa);pe(this,"puzzleSpecificSimplifyOptionsPromise",Mv(this.kpuzzle.bind(this)));this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear}pg(){return O(this,fa)??Zt(this,fa,yl(this.pgId??this.id))}kpuzzle(){return O(this,da)??Zt(this,da,hh(this.pg(),this.id))}svg(){return O(this,pa)??Zt(this,pa,(async()=>(await this.pg()).generatesvg())())}}fa=new WeakMap,da=new WeakMap,pa=new WeakMap;class qr extends Bi{constructor(){super(...arguments);pe(this,"stickerings",()=>Ma(this.id,{use3x3x3Fallbacks:!0}))}stickeringMask(e){return is(this,e)}}function Mv(i){return new xr(async t=>{const e=await i();t({quantumMoveOrder:n=>e.moveToTransformation(new P(n)).repetitionOrder()})})}const fh={id:"2x2x2",fullName:"2×2×2 Cube",kpuzzle:he(async()=>new Yn((await ie(async()=>{const{cube2x2x2JSON:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{cube2x2x2JSON:i}},[])).cube2x2x2JSON)),svg:async()=>(await ie(async()=>{const{cube2x2x2SVG:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{cube2x2x2SVG:i}},[])).cube2x2x2SVG,llSVG:he(async()=>(await ie(async()=>{const{cube2x2x2LLSVG:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{cube2x2x2LLSVG:i}},[])).cube2x2x2LLSVG),pg:he(async()=>yl("2x2x2")),stickeringMask:i=>is(fh,i),stickerings:()=>Ma("2x2x2",{use3x3x3Fallbacks:!0})},dh={name:"3x3x3",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3},{orbitName:"CENTERS",numPieces:6,numOrientations:4}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0],orientationMod:[1,1,1,1,1,1]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientationDelta:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientationDelta:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientationDelta:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientationDelta:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientationDelta:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientationDelta:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientationDelta:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientationDelta:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,1]}}},derivedMoves:{Uw:"u",Lw:"l",Fw:"f",Rw:"r",Bw:"b",Dw:"d",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'","2U":"u U'","2L":"l L'","2F":"f F'","2R":"r R'","2B":"b B'","2D":"d D'"}};function ph(i){const t=i.patternData.CENTERS.pieces[0],e=i.patternData.CENTERS.pieces[5],n=i.patternData.CENTERS.pieces[1];let r=n;return t<n&&r--,e<n&&r--,[t,r]}const Qc=new Array(6).fill(0).map(()=>new Array(6));function yv(){{const i=["","z","x","z'","x'","x2"].map(e=>Tt.fromString(e)),t=new Tt("y");for(const e of i){let n=gh.algToTransformation(e);for(let r=0;r<4;r++){n=n.applyAlg(t);const[s,a]=ph(n.toKPattern());Qc[s][a]=n.invert()}}}return Qc}function Ev(i){const[t,e]=ph(i),n=yv()[t][e];return i.applyTransformation(n)}function Tv(i,t){var e;return t.ignorePuzzleOrientation&&(i=Ev(i)),t.ignoreCenterOrientation&&(i=new Fi(i.kpuzzle,{EDGES:i.patternData.EDGES,CORNERS:i.patternData.CORNERS,CENTERS:{pieces:i.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!((e=i.experimentalToTransformation())!=null&&e.isIdentityTransformation())}new Array(24);async function mh(i,t){return(await ie(()=>import("./index-DH1clr_m.js"),[])).getPuzzleGeometryByDesc(i,{allMoves:!0,orientCenters:!0,addRotations:!0,...t})}async function wv(i,t){const e=mh(i,t);return hh(e,`description: ${i}`)}const gh=new Yn(dh);dh.experimentalIsPatternSolved=Tv;const bv={KeyI:new P("R"),KeyK:new P("R'"),KeyW:new P("B"),KeyO:new P("B'"),KeyS:new P("D"),KeyL:new P("D'"),KeyD:new P("L"),KeyE:new P("L'"),KeyJ:new P("U"),KeyF:new P("U'"),KeyH:new P("F"),KeyG:new P("F'"),KeyC:new P("l"),KeyR:new P("l'"),KeyU:new P("r"),KeyM:new P("r'"),KeyX:new P("d"),Comma:new P("d'"),KeyT:new P("x"),KeyY:new P("x"),KeyV:new P("x'"),KeyN:new P("x'"),Semicolon:new P("y"),KeyA:new P("y'"),KeyP:new P("z"),KeyQ:new P("z'"),KeyZ:new P("M'"),KeyB:new P("M"),Period:new P("M'"),Backquote:new Fe};function be(i,t,e,n){const r=[];for(const s of i){const a=P.fromString(s),{family:o,amount:l}=a;if(![-1,1].includes(l))throw new Error("Invalid config move");r.push({family:o,direction:l,type:t,from:e,to:n})}return r}const Hi={"x axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...be(["R"],0,0,3),...be(["L'"],1,0,3),...be(["r","Rw"],2,0,2),...be(["l'","Lw'"],3,0,2),...be(["M'"],4,1,2),...be(["x","Uv","Dv'"],5,0,3)]},"y axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...be(["U"],0,0,3),...be(["D'"],1,0,3),...be(["u","Uw"],2,0,2),...be(["d'","Dw'"],3,0,2),...be(["E'"],4,1,2),...be(["y","Uv","Dv'"],5,0,3)]},"z axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...be(["F"],0,0,3),...be(["B'"],1,0,3),...be(["f","Fw"],2,0,3),...be(["b'","Bw'"],3,0,3),...be(["S"],4,1,2),...be(["z","Fv","Bv'"],5,0,3)]}},rs={};for(const[i,t]of Object.entries(Hi))for(const e of t.moveSourceInfos)rs[e.family]={axis:i,moveSourceInfo:e};const _h={};var su;for(const i of Object.keys(Hi)){const t={};_h[i]=t;for(const e of Hi[i].moveSourceInfos)(t[su=e.type]??(t[su]=[])).push(e)}const vh={};for(const i of Object.keys(Hi)){const t=new Map;vh[i]=t;for(const e of Hi[i].moveSourceInfos)t.get(e.from)||t.set(e.from,e)}function jc(i,t){var n;const e=(n=_h[i][t])==null?void 0:n[0];if(!e)throw new Error(`Could not find a reference move (axis: ${i}, move source type: ${t})`);return e}const Av=(i,t)=>rs[i.family].axis===rs[t.family].axis;function Rv(i,t,e,n){if(t+1===e){const h=vh[i].get(t);if(h)return new P(new Mn(h.family),n*h.direction)}const r=Hi[i],{sliceDiameter:s}=r;if(t===0&&e===s){const h=jc(i,5);return new P(new Mn(h.family),n*h.direction)}const a=t+e>s;a&&([t,e]=[s-e,s-t]);let o=t+1,l=e;const c=o===l;c&&(l=null),o===1&&(o=null),c&&o===1&&(l=null),!c&&l===2&&(l=null);const d=jc(i,c?a?1:0:a?3:2);return new P(new Mn(d.family,l,o),n*d.direction)}function Cv(i,t=!0){if(i.length===0)return[];const e=rs[i[0].family].axis,n=Hi[e],{sliceDiameter:r}=n,s=new Map;let a=null;function o(h,m){let g=(s.get(h)??0)+m;t&&(g=g%4+5%4-1),g===0?s.delete(h):s.set(h,g)}let l=0;for(const h of Array.from(i).reverse()){l++;const{moveSourceInfo:m}=rs[h.family],g=h.amount*m.direction;switch(m.type){case 0:{const v=(h.innerLayer??1)-1;o(v,g),o(v+1,-g);break}case 1:{const v=r-(h.innerLayer??1);o(v,g),o(v+1,-g);break}case 2:{o((h.outerLayer??1)-1,g),o(h.innerLayer??2,-g);break}case 3:{o(r-(h.innerLayer??2),g),o(r-((h.outerLayer??1)-1),-g);break}case 4:{o(m.from,g),o(m.to,-g);break}case 5:{o(0,g),o(r,-g);break}}[0,2].includes(s.size)&&(a={suffixLength:l,sliceDeltas:new Map(s)})}if(s.size===0)return[];if(!a)return i;let[c,u]=a.sliceDeltas.keys();c>u&&([c,u]=[u,c]);const d=a.sliceDeltas.get(c);return[...i.slice(0,-a.suffixLength),...d!==0?[Rv(e,c,u,d)]:[]]}const Pv={quantumMoveOrder:()=>4,axis:{areQuantumMovesSameAxis:Av,simplifySameAxisMoves:Cv}},xh={id:"3x3x3",fullName:"3×3×3 Cube",inventedBy:["Ernő Rubik"],inventionYear:1974,kpuzzle:he(async()=>gh),svg:he(async()=>(await ie(async()=>{const{cube3x3x3SVG:i}=await import("./puzzles-dynamic-3x3x3-BW0FSrXs.js");return{cube3x3x3SVG:i}},[])).cube3x3x3SVG),llSVG:he(async()=>(await ie(async()=>{const{cube3x3x3LLSVG:i}=await import("./puzzles-dynamic-3x3x3-BW0FSrXs.js");return{cube3x3x3LLSVG:i}},[])).cube3x3x3LLSVG),llFaceSVG:he(async()=>(await ie(async()=>{const{cube3x3x3LLFaceSVG:i}=await import("./puzzles-dynamic-3x3x3-BW0FSrXs.js");return{cube3x3x3LLFaceSVG:i}},[])).cube3x3x3LLFaceSVG),pg:he(async()=>yl("3x3x3")),stickeringMask:i=>is(xh,i),stickerings:()=>Ma("3x3x3"),puzzleSpecificSimplifyOptions:Pv,keyMapping:async()=>bv},Sh=new qr({id:"4x4x4",fullName:"4×4×4 Cube"});Sh.llSVG=he(async()=>(await ie(async()=>{const{cube4x4x4LLSVG:i}=await import("./puzzles-dynamic-4x4x4-CsNOCKFJ.js");return{cube4x4x4LLSVG:i}},[])).cube4x4x4LLSVG);const Dv={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{clockJSON:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{clockJSON:i}},[])).clockJSON)),svg:he(async()=>(await ie(async()=>{const{clockSVG:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{clockSVG:i}},[])).clockSVG)};async function Lv(i,t){const e=await i.kpuzzle(),n=new ch(e),r=new uh(e),s=()=>r.and([r.move("U"),r.not(r.or(r.moves(["F","BL","BR"])))]),a=()=>r.and([r.move("U"),r.not(r.move("F"))]),o=()=>r.or([a(),r.and([r.move("F"),r.not(r.or(r.moves(["U","BL","BR"])))])]),l=()=>r.not(r.or([r.and([r.move("U"),r.move("F")]),r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])])),c=()=>r.not(r.or([r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])]));switch(t){case"full":break;case"experimental-fto-fc":{n.set(r.not(s()),Z.Ignored);break}case"experimental-fto-f2t":{n.set(r.not(a()),Z.Ignored),n.set(s(),Z.Dim);break}case"experimental-fto-sc":{n.set(r.not(o()),Z.Ignored),n.set(a(),Z.Dim);break}case"experimental-fto-l2c":{n.set(r.not(l()),Z.Ignored),n.set(o(),Z.Dim);break}case"experimental-fto-lbt":{n.set(r.not(c()),Z.Ignored),n.set(l(),Z.Dim);break}case"experimental-fto-l3t":{n.set(c(),Z.Dim);break}default:console.warn(`Unsupported stickering for ${i.id}: ${t}. Setting all pieces to dim.`),n.set(r.and(r.moves([])),Z.Dim)}return n.toStickeringMask()}async function Iv(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}const Uv={KeyI:new P("R"),KeyK:new P("R'"),KeyW:new P("B"),KeyO:new P("B'"),KeyS:new P("D"),KeyL:new P("D'"),KeyD:new P("L"),KeyE:new P("L'"),KeyJ:new P("U"),KeyF:new P("U'"),KeyH:new P("F"),KeyG:new P("F'"),KeyN:new P("Rv'"),KeyC:new P("l"),KeyR:new P("l'"),KeyU:new P("r"),KeyM:new P("r'"),KeyX:new P("d"),Comma:new P("d'"),KeyT:new P("Lv'"),KeyY:new P("Rv"),KeyV:new P("Lv"),Semicolon:new P("Uv"),KeyA:new P("Uv'"),KeyP:new P("BR'"),KeyQ:new P("BL"),KeyZ:new P("BL'"),KeyB:new P("T"),Period:new P("BR"),Backquote:new Fe};class Nv extends Bi{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});pe(this,"stickerings",Iv);pe(this,"svg",he(async()=>(await ie(async()=>{const{ftoSVG:e}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{ftoSVG:e}},[])).ftoSVG));pe(this,"keyMapping",async()=>Uv)}stickeringMask(e){return Lv(this,e)}}const Ov=new Nv,tu="d f 0.56",Fv={id:"kilominx",fullName:"Kilominx",kpuzzle:he(()=>wv(tu,{includeCenterOrbits:!1,includeEdgeOrbits:!1})),pg:()=>mh(tu,{includeCenterOrbits:!1,includeEdgeOrbits:!1}),svg:he(async()=>(await ie(async()=>{const{kilominxSVG:i}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{kilominxSVG:i}},[])).kilominxSVG)},Bv={id:"loopover",fullName:"Loopover",inventedBy:["Cary Huang"],inventionYear:2018,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{loopoverJSON:i}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{loopoverJSON:i}},[])).loopoverJSON)),svg:async()=>(await ie(async()=>{const{loopoverSVG:i}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{loopoverSVG:i}},[])).loopoverSVG};async function zv(i,t){return(await Mh()).includes(t)?is(i,t):(console.warn(`Unsupported stickering for ${i.id}: ${t}. Setting all pieces to dim.`),is(i,"full"))}const kv=lh(()=>Ma("megaminx"));function Mh(){return kv}const Gv={KeyI:new P("R"),KeyK:new P("R'"),KeyW:new P("B"),KeyO:new P("B'"),KeyS:new P("FR"),KeyL:new P("FR'"),KeyD:new P("L"),KeyE:new P("L'"),KeyJ:new P("U"),KeyF:new P("U'"),KeyH:new P("F"),KeyG:new P("F'"),KeyC:new P("Lw"),KeyR:new P("Lw'"),KeyU:new P("Rw"),KeyM:new P("Rw'"),KeyX:new P("d"),Comma:new P("d'"),KeyT:new P("Rv"),KeyY:new P("Rv"),KeyV:new P("Rv'"),KeyN:new P("Rv'"),Semicolon:new P("y"),KeyA:new P("y'"),KeyP:new P("z"),KeyQ:new P("z'"),KeyZ:new P("2L'"),KeyB:new P("2R"),Period:new P("2R'"),Backquote:new Fe};class Vv extends Bi{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});pe(this,"stickerings",Mh);pe(this,"llSVG",he(async()=>(await ie(async()=>{const{megaminxLLSVG:e}=await import("./puzzles-dynamic-megaminx-pDLrtc2V.js");return{megaminxLLSVG:e}},[])).megaminxLLSVG));pe(this,"keyMapping",async()=>Gv)}stickeringMask(e){return zv(this,e)}}const Hv=new Vv,Wv={id:"melindas2x2x2x2",fullName:"Melinda's 2×2×2×2",inventedBy:["Melinda Green"],kpuzzle:he(async()=>new Yn((await ie(async()=>{const{melindas2x2x2x2OrbitJSON:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{melindas2x2x2x2OrbitJSON:i}},[])).melindas2x2x2x2OrbitJSON)),svg:he(async()=>(await ie(async()=>{const{melindas2x2x2x2OrbitSVG:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{melindas2x2x2x2OrbitSVG:i}},[])).melindas2x2x2x2OrbitSVG)};class Xv extends Bi{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});pe(this,"svg",he(async()=>(await ie(async()=>{const{pyraminxSVG:e}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{pyraminxSVG:e}},[])).pyraminxSVG))}}const qv=new Xv,Yv={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{rediCubeJSON:i}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{rediCubeJSON:i}},[])).rediCubeJSON)),svg:async()=>(await ie(async()=>{const{rediCubeSVG:i}=await import("./puzzles-dynamic-unofficial-AafI5of3.js");return{rediCubeSVG:i}},[])).rediCubeSVG},Kv={id:"square1",fullName:"Square-1",inventedBy:["Karel Hršel","Vojtech Kopský"],inventionYear:1990,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{sq1HyperOrbitJSON:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{sq1HyperOrbitJSON:i}},[])).sq1HyperOrbitJSON)),svg:he(async()=>(await ie(async()=>{const{sq1HyperOrbitSVG:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{sq1HyperOrbitSVG:i}},[])).sq1HyperOrbitSVG)},Zv={id:"tri_quad",fullName:"TriQuad",inventedBy:["Bram Cohen","Carl Hoff"],inventionYear:2018,kpuzzle:he(async()=>new Yn((await ie(async()=>{const{triQuadJSON:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{triQuadJSON:i}},[])).triQuadJSON)),svg:he(async()=>(await ie(async()=>{const{triQuadSVG:i}=await import("./puzzles-dynamic-side-events-er4iZI0M.js");return{triQuadSVG:i}},[])).triQuadSVG)},zx={"3x3x3":xh,"2x2x2":fh,"4x4x4":Sh,"5x5x5":new qr({id:"5x5x5",fullName:"5×5×5 Cube"}),"6x6x6":new qr({id:"6x6x6",fullName:"6×6×6 Cube"}),"7x7x7":new qr({id:"7x7x7",fullName:"7×7×7 Cube"}),"40x40x40":new qr({id:"40x40x40",fullName:"40×40×40 Cube"}),clock:Dv,megaminx:Hv,pyraminx:qv,skewb:new Bi({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:Kv,fto:Ov,gigaminx:new Bi({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Bi({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:Fv,redi_cube:Yv,melindas2x2x2x2:Wv,loopover:Bv,tri_quad:Zv},kx=lh(()=>ie(()=>import("./search-dynamic-solve-3x3x3-4o6GMjr8.js"),[]));class us{constructor(t,e){var n=document.createElement("canvas");n.width=t,n.height=e,this.canvas=n;var r=n.getContext("2d");this.context=r;var s=new Oe(n);this.texture=s}}us.prototype.clear=function(i){return i!==void 0?(this.context.fillStyle=i,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)):this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.texture.needsUpdate=!0,this};us.prototype.drawText=function(i,t,e,n,r){if(r!==void 0&&(this.context.font=r),t==null){var s=this.context.measureText(i);t=(this.canvas.width-s.width)/2}return this.context.fillStyle=n,this.context.fillText(i,t,e),this.texture.needsUpdate=!0,this};us.prototype.drawTextCooked=function(i){var t=this.context,e=this.canvas;i=i||{};var n=i.text,r={margin:i.margin!==void 0?i.margin:.1,lineHeight:i.lineHeight!==void 0?i.lineHeight:.1,align:i.align!==void 0?i.align:"left",fillStyle:i.fillStyle!==void 0?i.fillStyle:"black",font:i.font!==void 0?i.font:"bold "+.2*512+"px Arial"};console.assert(typeof n=="string"),t.save(),t.fillStyle=r.fillStyle,t.font=r.font;for(var s=(r.lineHeight+r.margin)*e.height;n.length>0;){var a=c(n);n=n.substr(a.length);var o=t.measureText(a);if(r.align==="left")var l=r.margin*e.width;else if(r.align==="right")var l=(1-r.margin)*e.width-o.width;else if(r.align==="center")var l=(e.width-o.width)/2;else console.assert(!1);this.context.fillText(a,l,s),s+=r.lineHeight*e.height}return t.restore(),this.texture.needsUpdate=!0,this;function c(u){for(var d="",h=(1-r.margin*2)*e.width;d.length!==u.length;){var m=t.measureText(d);if(m.width>h)break;d+=u.substr(d.length,1)}return d}};us.prototype.drawImage=function(){return this.context.drawImage.apply(this.context,arguments),this.texture.needsUpdate=!0,this};const eu={type:"change"},El={type:"start"},yh={type:"end"},Vs=new va,nu=new ii,$v=Math.cos(70*Ff.DEG2RAD),Me=new I,ze=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},so=1e-6;class Eh extends j_{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Gi,this._lastTargetPosition=new I,this._quat=new Gi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gc,this._sphericalDelta=new Gc,this._scale=1,this._panOffset=new I,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new I,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qv.bind(this),this._onPointerDown=Jv.bind(this),this._onPointerUp=jv.bind(this),this._onContextMenu=ax.bind(this),this._onMouseWheel=nx.bind(this),this._onKeyDown=ix.bind(this),this._onTouchStart=rx.bind(this),this._onTouchMove=sx.bind(this),this._onMouseDown=tx.bind(this),this._onMouseMove=ex.bind(this),this._interceptControlDown=ox.bind(this),this._interceptControlUp=lx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eu),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=ze:n>Math.PI&&(n-=ze),r<-Math.PI?r+=ze:r>Math.PI&&(r-=ze),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Me.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Vs.origin.copy(this.object.position),Vs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vs.direction))<$v?this.object.lookAt(this.target):(nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vs.intersectPlane(nu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>so||8*(1-this._lastQuaternion.dot(this.object.quaternion))>so||this._lastTargetPosition.distanceToSquared(this.target)>so?(this.dispatchEvent(eu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ze/60*this.autoRotateSpeed*t:ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Me.copy(r).sub(this.target);let s=Me.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Qv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yh),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case pr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case pr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(El)}function ex(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function nx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yh))}function ix(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function rx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(El)}function sx(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function ax(i){this.enabled!==!1&&i.preventDefault()}function ox(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cx=.6,ux=.6,hx=.1,fx=39752,dx=18093,px=11997748,mx=16734208,gx=16777215,_x=16766208,Th=0,wh="#F5F5F5",vx="#99a5ab",al=["Right","Left","Top","Bottom","Front","Rear"];var iu=[];new I(-1,0,0);new I(1,0,0);new I(0,1,0);new I(0,-1,0);new I(0,0,1);new I(0,0,-1);var Tn=-1,gn=[],ol,pn,Ei,ra,mn,Ti,_n,lr,Tl=!1;const _t=4,$r=wx();var Jr=$r;const wl=2.5;var Li=Jr/wl,rt=[],ao=[],Qr,ru=new Q_,ll=new zt;xx();Ex();Mx();Tx();var oo=document.getElementById("navigationCanvasContainer");function xx(){for(var i=0;i<_t;i++){rt.push([]);for(var t=0;t<_t;t++){rt[i].push([]);for(var e=0;e<_t;e++){rt[i][t].push(Sx());//!!!!!!!!!!Inner objects need to be made blank?
}}}}function Sx(){var i=[new He({color:fx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:dx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:px,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:mx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:gx,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),new He({color:_x,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})],t=new Xi(1,1,1),e=new xn(t,i),n=new zu(e.geometry),r=new xl({color:Th}),s=new Bu(n,r);return e.add(s),e}function Mx(){var i=new Xi(1,1,1);yx();var t=[new He({map:gn[0].texture}),new He({map:gn[1].texture}),new He({map:gn[2].texture}),new He({map:gn[3].texture}),new He({map:gn[4].texture}),new He({map:gn[5].texture})];Qr=new xn(i,t);var e=new zu(Qr.geometry),n=new xl({color:Th}),r=new Bu(e,n);Qr.add(r)}function yx(){for(var i=0;i<6;i++){var t=new us(512,512);t.context.font="bold 130px arial",t.texture.needsUpdate=!0,t.clear(wh).drawText(al[i].toString(),void 0,300,"black"),gn.push(t)}}function Ex(){var i=window.innerWidth*cx,t=window.innerHeight*ux,e=i/t;pn=new Je(45,e,.1,1e3),pn.position.z=Jr,Ei=new Ou,Ei.setClearColor(13619151,1),Ei.setSize(i,t),Ei.setAnimationLoop(bx),document.getElementById("cubeCanvasContainer").appendChild(Ei.domElement),_n=new Eh(pn,Ei.domElement),_n.enablePan=!1,_n.target.set(0,0,0),_n.update(),_n.addEventListener("change",()=>{Jr=pn.position.length(),Li=Jr/wl,mn.position.set(pn.position.x/Li,pn.position.y/Li,pn.position.z/Li),mn.rotation.copy(pn.rotation)}),ol=new Fu;for(var n=0;n<_t;n++)for(var r=0;r<_t;r++)for(var s=0;s<_t;s++)ol.add(rt[n][r][s]),rt[n][r][s].position.set(n-(_t-1)/2,r-(_t-1)/2,s-(_t-1)/2)}function Tx(){var i=window.innerWidth*hx,t=i,e=i/t;mn=new Je(45,e,.1,1e3),mn.position.z=wl,Ti=new Ou,Ti.setClearColor(13619151,1),Ti.setSize(i,t),Ti.setAnimationLoop(Rx),document.getElementById("navigationCanvasContainer").appendChild(Ti.domElement),lr=new Eh(mn,Ti.domElement),lr.enablePan=!1,lr.enableZoom=!1,lr.target.set(0,0,0),lr.update(),lr.addEventListener("change",()=>{pn.position.set(mn.position.x*Li,mn.position.y*Li,mn.position.z*Li),pn.rotation.copy(mn.rotation)}),ra=new Fu,ra.add(Qr),Qr.position.set(0,0,0)}function wx(){return _t+5}function bx(){Ax()}function Ax(){Ei.render(ol,pn)}function Rx(){Cx()}function Cx(){Ti.render(ra,mn)}const Px={L:()=>leftCW(),"L'":()=>leftCCW(),L2:function(){leftCW(),leftCW()},R:()=>rightCW(),"R'":()=>rightCCW(),R2:function(){rightCW(),rightCW()},U:()=>upCW(),"U'":()=>upCW(),U2:function(){upCW(),upCW()},D:()=>downCW(),"D'":()=>downCCW(),D2:function(){downCW(),downCW()},F:()=>frontCW(),"F'":()=>frontCCW(),F2:function(){frontCW(),frontCW()},B:()=>backCW(),"B'":()=>backCCW(),B2:function(){backCW(),backCW()}};window.leftCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.x==-(_t-1)/2){const r=new I(1,0,0);rt[i][t][e].rotateOnWorldAxis(r,Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.y,-Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};window.leftCCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.x==-(_t-1)/2){const r=new I(1,0,0);rt[i][t][e].rotateOnWorldAxis(r,-Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.y,Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};window.rightCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.x==(_t-1)/2){const r=new I(1,0,0);rt[i][t][e].rotateOnWorldAxis(r,-Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.y,Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};window.rightCCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.x==(_t-1)/2){const r=new I(1,0,0);rt[i][t][e].rotateOnWorldAxis(r,Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.y,-Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};window.upCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.y==(_t-1)/2){const r=new I(0,1,0);rt[i][t][e].rotateOnWorldAxis(r,-Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.x,-Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.x=fe(n[1])}};window.upCCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.y==(_t-1)/2){const r=new I(0,1,0);rt[i][t][e].rotateOnWorldAxis(r,Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.x,Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.x=fe(n[1])}};window.downCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.y==-(_t-1)/2){const r=new I(0,1,0);rt[i][t][e].rotateOnWorldAxis(r,Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.x,Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.x=fe(n[1])}};window.downCCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.y==-(_t-1)/2){const r=new I(0,1,0);rt[i][t][e].rotateOnWorldAxis(r,-Math.PI/2);var n=on(rt[i][t][e].position.z,rt[i][t][e].position.x,-Math.PI/2);rt[i][t][e].position.z=fe(n[0]),rt[i][t][e].position.x=fe(n[1])}};window.frontCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.z==(_t-1)/2){const r=new I(0,0,1);rt[i][t][e].rotateOnWorldAxis(r,-Math.PI/2);var n=on(rt[i][t][e].position.x,rt[i][t][e].position.y,-Math.PI/2);rt[i][t][e].position.x=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};window.frontCCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.z==(_t-1)/2){const r=new I(0,0,1);rt[i][t][e].rotateOnWorldAxis(r,Math.PI/2);var n=on(rt[i][t][e].position.x,rt[i][t][e].position.y,Math.PI/2);rt[i][t][e].position.x=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};window.backCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.z==-(_t-1)/2){const r=new I(0,0,1);rt[i][t][e].rotateOnWorldAxis(r,Math.PI/2);var n=on(rt[i][t][e].position.x,rt[i][t][e].position.y,Math.PI/2);rt[i][t][e].position.x=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};window.backCCW=function(){for(var i=0;i<_t;i++)for(var t=0;t<_t;t++)for(var e=0;e<_t;e++)if(rt[i][t][e].position.z==-(_t-1)/2){const r=new I(0,0,1);rt[i][t][e].rotateOnWorldAxis(r,-Math.PI/2);var n=on(rt[i][t][e].position.x,rt[i][t][e].position.y,-Math.PI/2);rt[i][t][e].position.x=fe(n[0]),rt[i][t][e].position.y=fe(n[1])}};function on(i,t,e){var n=Math.sqrt(i*i+t*t),r=Math.atan2(t,i);return r+=e,[Math.cos(r)*n,Math.sin(r)*n]}function fe(i){return Math.round(i*2)/2}window.scrambleCube=async function(){for(var i=await rv("333"),t=Dx(i.toString()),e=0;e<t.length;e++)Px[t[e]]()};function Dx(i){return i.split(" ")}window.isometricCamera=function(){_n.object.position.set($r,$r,$r),_n.update()};window.frontCamera=function(){_n.object.position.set(0,0,$r),_n.update()};const Lx={0:()=>cr(1,0,0),1:()=>cr(-1,0,0),2:()=>cr(0,1,0),3:()=>cr(0,-1,0),4:()=>cr(0,0,1),5:()=>cr(0,0,-1)};window.navCanvasMouseDown=function(i){Tl=!1};window.mouseLocation=function(i){Tl=!0;var t=oo.getBoundingClientRect();ll.x=(i.clientX-t.left)/oo.getBoundingClientRect().width*2-1,ll.y=-((i.clientY-t.top)/oo.getBoundingClientRect().height)*2+1,bh()};window.navCanvasMouseUp=function(i){Tl||(bh(),Lx[Tn](),_n.update())};function bh(){Tn!=-1&&(gn[Tn].texture.needsUpdate=!0,gn[Tn].clear(wh).drawText(al[Tn].toString(),void 0,300,"black")),Tn=-1,ru.setFromCamera(ll,mn);const i=ru.intersectObjects(ra.children);if(i.length>0){const t=i.filter(e=>e.object.type==="Mesh");t.length>0&&(Tn=Math.round((t[0].faceIndex-.5)/2),gn[Tn].texture.needsUpdate=!0,gn[Tn].clear(vx).drawText(al[Tn].toString(),void 0,300,"black"))}}function Ix(i,t,e,n){var r=Math.sqrt(i*i+t*t+e*e);return new I(i*(n/r),t*(n/r),e*(n/r))}function cr(i,t,e){const n=Ix(i,t,e,Jr);_n.object.position.set(n.x,n.y,n.z)}window.solveCubeAndrewMethod=function(){Ux(),alert("This function is not ready yet")};function Ux(){for(var i=0;i<_t;i++){ao.push([]);for(var t=0;t<_t;t++){ao[i].push([]);for(var e=0;e<_t;e++)ao[i][t].push([])}}Nx()}function Nx(){{for(var i=0;i<6;i++)iu.push(-1);alert(iu.length)}}window.solveCubeCFOPMethod=function(){alert("This function is not ready yet")};window.testJS=function(){document.getElementById("test").innerHTML="changed"};export{r0 as A,Fi as K,P as M,Mn as Q,Fx as T,ie as _,Y0 as a,Tt as b,lh as c,kx as d,eh as e,qu as f,R0 as g,fh as h,Yn as i,Zu as j,C0 as n,zx as p,Bx as r};
