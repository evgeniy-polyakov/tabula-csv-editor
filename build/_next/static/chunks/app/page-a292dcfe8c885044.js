(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9215:function(e,t,n){Promise.resolve().then(n.bind(n,1603))},1603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var l,i,s=n(7437),c=n(504);function a(e){let{icon:t,hint:n,onClick:l}=e;return(0,s.jsx)("button",{className:"icon",onClick:l,title:n,children:(0,s.jsx)(c.G,{icon:t})})}var o=n(2759);class r{async load(e){let t=await new Promise(t=>{let n=new FileReader;n.addEventListener("load",e=>{var n;t(null===(n=e.target)||void 0===n?void 0:n.result)}),n.readAsText(e)});if(!t)throw Error("Cannot read file ".concat(e.name));return t}async save(e,t){let n=document.createElement("a"),l=URL.createObjectURL(new Blob([e],{type:this.mimeType}));n.href=l,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(l)}constructor(e,t){this.extension=e,this.mimeType=t}}let d=[new r("csv","text/csv")];(l=i||(i={})).Text="text",l.Table="table";let u=0;class h{async load(){this.file&&(this.textContent=await this.loader.load(this.file))}async save(){await this.loader.save(this.textContent,this.filename)}constructor(e){var t;if(this.file=e,this.id=++u,this.textContent="",this.selected=!1,this.editMode=i.Table,this.filename=null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"untitled.csv",this.extension=this.filename.replace(/^.*\.(\w+)$/,"$1").toLowerCase(),this.loader=d.filter(e=>e.extension===this.extension)[0],!this.loader)throw Error("Unknown file extension ".concat(this.filename))}}function f(e){let{onOpen:t}=e;return(0,s.jsx)(a,{icon:o.cC_,onClick:function(){let e=document.createElement("input");e.type="file",e.multiple=!0,e.accept=d.map(e=>".".concat(e.extension,",").concat(e.mimeType)).join(","),e.onchange=async()=>{if(e.files)for(let n=0;n<e.files.length;n++){let l=new h(e.files.item(n));await l.load(),null==t||t(l)}},e.click()},hint:"Open File"})}var x=n(7188);function m(e){var t;let{item:n,onSelect:l,onRemove:i}=e,r="tab ".concat(n.selected?"selected":""," ").concat(n.editable?"editable":"");return(0,s.jsxs)("li",{className:r,children:[(0,s.jsxs)("button",{className:"label",title:null!==(t=n.hint)&&void 0!==t?t:n.name,onClick:()=>{n.selected||null==l||l()},children:[n.icon&&(0,s.jsx)("span",{className:"icon",children:(0,s.jsx)(c.G,{icon:n.icon})}),n.name&&(0,s.jsx)("span",{className:"name",children:n.name})]}),n.removable&&(0,s.jsx)(a,{icon:o.g82,hint:"Close",onClick:i})]})}function v(e){let{items:t,onRename:n,onSelect:l,onRemove:i}=e;return(0,s.jsx)("ul",{className:"tabs",children:t.map(e=>(0,s.jsx)(m,{item:e,onSelect:()=>null==l?void 0:l(e),onRemove:()=>null==i?void 0:i(e)},e.key))})}class j{get key(){return"".concat(this.file.id)}get selected(){return this.file.selected}get link(){return"/".concat(this.name)}constructor(e){this.file=e,this.name=this.file.filename,this.removable=!0,this.editable=!0}}class p{get selected(){return this.file.editMode===this.editMode}constructor(e,t,n,l){this.file=e,this.editMode=t,this.icon=n,this.hint=l,this.key=this.editMode,this.editable=!1,this.removable=!1}}function b(e){let{file:t}=e;async function n(){await t.save()}return(0,s.jsx)(a,{icon:o.kwI,onClick:n,hint:"Save File"})}function C(e){let{onOpen:t}=e;async function n(){let e=new h;await e.load(),null==t||t(e)}return(0,s.jsx)(a,{icon:o.gMD,onClick:n,hint:"New File"})}function w(e){let{filesReducer:t}=e,[n,l]=t,c=n.files,a=n.selectedFile;function r(e){l({file:e,type:"add"})}return(0,s.jsxs)("nav",{children:[(0,s.jsx)(f,{onOpen:r}),(0,s.jsx)(C,{onOpen:r}),a&&(0,s.jsx)(b,{file:a}),(0,s.jsx)(v,{items:c.map(e=>new j(e)),onSelect:e=>l({file:e.file,type:"select"}),onRemove:e=>l({file:e.file,type:"remove"})}),a&&(0,s.jsx)(v,{items:[new p(a,i.Text,x.nfZ,"Text"),new p(a,i.Table,o.u7T,"Table")],onSelect:e=>{a.editMode=e.editMode,l({file:n.selectedFile,type:"update"})}})]})}var y=n(2265);function k(e,t){let n=e.files;switch(t.type){case"add":n.forEach(e=>e.selected=!1);let l=n.filter(e=>e.id===t.file.id)[0];l?l.selected=!0:(t.file.selected=!0,n.push(t.file));break;case"select":n.forEach(e=>e.selected=!1),t.file.selected=!0;break;case"remove":let i=n.indexOf(t.file);i>=0&&(n.splice(i,1),t.file.selected&&(i<n.length?n[i].selected=!0:i-1>=0&&(n[i-1].selected=!0)))}return{files:n,selectedFile:n.filter(e=>e.selected)[0]}}function g(e){let{file:t}=e,[n,l]=(0,y.useState)(t.textContent);return n!==t.textContent&&l(t.textContent),(0,s.jsx)("textarea",{className:"text-editor",value:n,onChange:e=>{t.textContent=e.target.value,l(e.target.value)},onScroll:e=>{}})}var E=n(4578),T=n(9029);function N(e){let{row:t,index:n,onEdit:l}=e,[i,c]=(0,y.useState)(""),a=(0,y.useRef)(null);return i!==t[n]&&c(t[n]),(0,s.jsx)("td",{ref:a,onDoubleClick:function(){var e;let t=document.createElement("textarea");null===(e=a.current)||void 0===e||e.append(t),t.value=i,t.style.height="".concat(t.scrollHeight+2,"px"),t.focus(),t.addEventListener("blur",()=>{t.value!==i&&(c(t.value),null==l||l(t.value)),t.remove()})},children:(0,s.jsx)("span",{children:i})})}function M(e){let{file:t}=e,[n,l]=(0,y.useState)(""),[i,c]=(0,y.useState)([]),a=0;return n!==t.textContent&&(l(t.textContent),(0,E.Qc)(t.textContent,{relaxColumnCount:!0,relaxQuotes:!0},(e,t)=>{e?(a=0,c([]),console.error(e)):(a=t.reduce((e,t)=>Math.max(t.length,e),0),t.forEach(e=>{for(;e.length<a;)e.push("")}),c(t))})),(0,s.jsx)("div",{className:"table-editor",children:(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:i.map((e,n)=>(0,s.jsx)("tr",{style:{zIndex:i.length-n},children:e.map((n,l)=>(0,s.jsx)(N,{row:e,index:l,onEdit:n=>{e[l]=n,(0,T.Pz)(i,(e,n)=>{e?console.error(e):t.textContent=n})}},l))},n))})})})}function F(e){let{file:t}=e;return(0,s.jsxs)("article",{children:[t.editMode===i.Text&&(0,s.jsx)(g,{file:t}),t.editMode===i.Table&&(0,s.jsx)(M,{file:t})]})}function R(){let e=(0,y.useReducer)(k,{files:[]}),[t,n]=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{children:(0,s.jsx)(w,{filesReducer:e})}),(0,s.jsx)("main",{children:t.selectedFile&&(0,s.jsx)(F,{file:t.selectedFile})})]})}}},function(e){e.O(0,[773,301,676,732,971,938,744],function(){return e(e.s=9215)}),_N_E=e.O()}]);