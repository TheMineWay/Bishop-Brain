if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/home-Dr6BNMoG.css",revision:null},{url:"assets/home.page-DurTPmWk.js",revision:null},{url:"assets/index-if41zjh9.js",revision:null},{url:"assets/index-Jp2VlaoA.css",revision:null},{url:"index.html",revision:"ce2d795d78db455d5c8379b4f6aab4ec"},{url:"registerSW.js",revision:"644a9410d2ab23d581f0589e2aa2befb"},{url:"manifest.webmanifest",revision:"c65d848cccff11505a98fca570ac7798"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
