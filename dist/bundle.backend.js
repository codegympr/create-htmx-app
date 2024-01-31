(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var n=e.n(t);const o=require("path");var r=e.n(o);const s=require("url"),a=r().dirname((0,s.fileURLToPath)("file:///C:/Users/codeg/Desktop/create-htmx-app/src/index.ts")),c=n()();c.use(n().static(r().join("dist"))),c.get("/components/:componentName",((e,t)=>{const n=e.params.componentName;t.sendFile(r().join(a,"components",`${n}`))})),c.get("/about",((e,t)=>{t.sendFile(r().join(a,"components","about.html"))})),c.get("/contact",((e,t)=>{t.send("Contact page content")})),c.get("/home",((e,t)=>{t.send("Home page content")})),c.get("/refresh",((e,t)=>{t.send("Refreshed content")})),c.listen(3e3,(()=>{console.log("Server running at http://localhost:3000")}))})();