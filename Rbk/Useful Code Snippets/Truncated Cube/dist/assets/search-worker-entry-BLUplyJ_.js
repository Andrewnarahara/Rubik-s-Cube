const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C5YeBecR.js","assets/index-BsZm_AG-.js","assets/index-BxKBzkJb.css"])))=>i.map(i=>d[i]);
import{g as a,n,e as o,a as r,_ as i}from"./index-BsZm_AG-.js";const l=typeof globalThis.Worker>"u"&&typeof globalThis.WorkerNavigator>"u";async function t(){const{parentPort:e}=await a("node:worker_threads");return n(e)}function _(e){l?(async()=>o(e,await t()))():o(e)}r.expose&&(async()=>(await i(()=>import("./index-C5YeBecR.js").then(s=>s.i),__vite__mapDeps([0,1,2])),(globalThis.postMessage?globalThis:await t()).postMessage("comlink-exposed")))();const d=import.meta.url,c=Object.freeze(Object.defineProperty({__proto__:null,WORKER_ENTRY_FILE_URL:d},Symbol.toStringTag,{value:"Module"}));export{_ as e,c as s};
