(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9215:function(e,t,n){Promise.resolve().then(n.bind(n,8522))},8522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var s,l,i=n(7437),o=n(504);function c(e){let{icon:t,hint:n,onClick:s}=e;return(0,i.jsx)("button",{className:"icon",onClick:s,title:n,children:(0,i.jsx)(o.G,{icon:t})})}var r=n(2759);class a{async load(e){let t=await new Promise(t=>{let n=new FileReader;n.addEventListener("load",e=>{var n;t(null===(n=e.target)||void 0===n?void 0:n.result)}),n.readAsText(e)});if(!t)throw Error("Cannot read file ".concat(e.name));return t}async save(e,t){let n=document.createElement("a"),s=URL.createObjectURL(new Blob([e],{type:this.mimeType}));n.href=s,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(s)}constructor(e,t){this.extension=e,this.mimeType=t}}let d=[new a("csv","text/csv")];(s=l||(l={})).Text="text",s.Table="table";class h{contains(e,t){for(let n=0;n<this.excluded.length;n+=2)if(this.excluded[n]===e&&this.excluded[n+1]===t)return!1;return this.inRange(e,t)}exclude(e,t){if("number"==typeof e&&"number"==typeof t)this.contains(e,t)&&this.excluded.push(e,t);else if("object"==typeof e){let t=Math.min(e.startRow,e.endRow),n=Math.max(e.startRow,e.endRow),s=Math.min(e.startCell,e.endCell),l=Math.max(e.startCell,e.endCell);for(let e=t;e<=n;e++)for(let t=s;t<=l;t++)this.exclude(e,t)}}expand(e,t){this.endRow=e,this.endCell=t,this.excluded=[]}isEmpty(){return this.excluded.length>=(1+Math.abs(this.startRow-this.endRow))*(1+Math.abs(this.startCell-this.endCell))*2}isStart(e,t){return this.startRow===e&&this.startCell===t}shiftDown(e){e++,this.startRow=e,this.endRow=e;for(let t=0;t<this.excluded.length;t+=2)this.excluded[t]=e}shiftRight(e){e++,this.startCell=e,this.endCell=e;for(let t=1;t<this.excluded.length;t+=2)this.excluded[t]=e}inRange(e,t){return(this.startRow<=this.endRow?e>=this.startRow&&e<=this.endRow:e<=this.startRow&&e>=this.endRow)&&(this.startCell<=this.endCell?t>=this.startCell&&t<=this.endCell:t<=this.startCell&&t>=this.endCell)}constructor(e,t,n,s){this.startRow=e,this.startCell=t,this.endRow=n,this.endCell=s,this.excluded=[]}}class u{contains(e,t){return this.ranges.some(n=>n.contains(e,t))}isFocused(e,t){return 0!==this.ranges.length&&this.ranges[this.ranges.length-1].isStart(e,t)}toggleSelection(e,t,n){if(64&n)this.ranges.forEach(t=>t.shiftDown(e));else if(32&n)this.ranges.forEach(e=>e.shiftRight(t));else if(16&n)this.ranges=[new h(0,0,e,t)];else if(8&n&&4&n){if(0===this.ranges.length)this.ranges.push(new h(e,t,e,t));else{let n=this.ranges[this.ranges.length-1];n.expand(e,t),this.swallowRanges(n)}}else if(8&n)0===this.ranges.length?this.ranges.push(new h(e,t,e,t)):(this.ranges[this.ranges.length-1].expand(e,t),this.ranges=this.ranges.slice(-1));else if(4&n){if(1&n){let n=new h(e,t,e,t);this.ranges.push(n),this.swallowRanges(n)}else this.ranges.forEach(n=>n.exclude(e,t)),this.clearRanges()}else this.ranges=[new h(e,t,e,t)]}swallowRanges(e){this.ranges.forEach(t=>{t!==e&&t.exclude(e)}),this.clearRanges()}clearRanges(){this.ranges=this.ranges.filter(e=>!e.isEmpty())}constructor(){this.ranges=[]}}function f(e,t){return"update"===t.mode?{...e,file:t.file}:(e.file.cellSelection.toggleSelection(t.rowIndex,t.cellIndex,t.mode),{...e})}let x=0;class m{async load(){this.file&&(this.textContent=await this.loader.load(this.file))}async save(){await this.loader.save(this.textContent,this.filename)}constructor(e){var t;if(this.file=e,this.id=++x,this.textContent="",this.selected=!1,this.editMode=l.Table,this.cellSelection=new u,this.filename=null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"untitled.csv",this.extension=this.filename.replace(/^.*\.(\w+)$/,"$1").toLowerCase(),this.loader=d.filter(e=>e.extension===this.extension)[0],!this.loader)throw Error("Unknown file extension ".concat(this.filename))}}function v(e){let{onOpen:t}=e;return(0,i.jsx)(c,{icon:r.cC_,onClick:function(){let e=document.createElement("input");e.type="file",e.multiple=!0,e.accept=d.map(e=>".".concat(e.extension,",").concat(e.mimeType)).join(","),e.onchange=async()=>{if(e.files)for(let n=0;n<e.files.length;n++){let s=new m(e.files.item(n));await s.load(),null==t||t(s)}},e.click()},hint:"Open File"})}var w=n(7188);function g(e){var t;let{item:n,onSelect:s,onRemove:l}=e,a="tab ".concat(n.selected?"selected":""," ").concat(n.editable?"editable":"");return(0,i.jsxs)("li",{className:a,children:[(0,i.jsxs)("button",{className:"label",title:null!==(t=n.hint)&&void 0!==t?t:n.name,onClick:()=>{n.selected||null==s||s()},children:[n.icon&&(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)(o.G,{icon:n.icon})}),n.name&&(0,i.jsx)("span",{className:"name",children:n.name})]}),n.removable&&(0,i.jsx)(c,{icon:r.g82,hint:"Close",onClick:l})]})}function p(e){let{items:t,onRename:n,onSelect:s,onRemove:l}=e;return(0,i.jsx)("ul",{className:"tabs",children:t.map(e=>(0,i.jsx)(g,{item:e,onSelect:()=>null==s?void 0:s(e),onRemove:()=>null==l?void 0:l(e)},e.key))})}class b{get key(){return"".concat(this.file.id)}get selected(){return this.file.selected}get link(){return"/".concat(this.name)}constructor(e){this.file=e,this.name=this.file.filename,this.removable=!0,this.editable=!0}}class j{get selected(){return this.file.editMode===this.editMode}constructor(e,t,n,s){this.file=e,this.editMode=t,this.icon=n,this.hint=s,this.key=this.editMode,this.editable=!1,this.removable=!1}}function C(e){let{file:t}=e;async function n(){await t.save()}return(0,i.jsx)(c,{icon:r.kwI,onClick:n,hint:"Save File"})}function y(e){let{onOpen:t}=e;async function n(){let e=new m;await e.load(),null==t||t(e)}return(0,i.jsx)(c,{icon:r.gMD,onClick:n,hint:"New File"})}function R(e){let{filesReducer:t}=e,[n,s]=t,o=n.files,c=n.selectedFile;function a(e){s({file:e,type:"add"})}return(0,i.jsxs)("nav",{children:[(0,i.jsx)(v,{onOpen:a}),(0,i.jsx)(y,{onOpen:a}),c&&(0,i.jsx)(C,{file:c}),(0,i.jsx)(p,{items:o.map(e=>new b(e)),onSelect:e=>s({file:e.file,type:"select"}),onRemove:e=>s({file:e.file,type:"remove"})}),c&&(0,i.jsx)(p,{items:[new j(c,l.Text,w.nfZ,"Text"),new j(c,l.Table,r.u7T,"Table")],onSelect:e=>{c.editMode=e.editMode,s({file:n.selectedFile,type:"update"})}})]})}var E=n(2265);function I(e,t){let n=e.files;switch(t.type){case"add":n.forEach(e=>e.selected=!1);let s=n.filter(e=>e.id===t.file.id)[0];s?s.selected=!0:(t.file.selected=!0,n.push(t.file));break;case"select":n.forEach(e=>e.selected=!1),t.file.selected=!0;break;case"remove":let l=n.indexOf(t.file);l>=0&&(n.splice(l,1),t.file.selected&&(l<n.length?n[l].selected=!0:l-1>=0&&(n[l-1].selected=!0)))}return{files:n,selectedFile:n.filter(e=>e.selected)[0]}}function M(e){let{file:t}=e,[n,s]=(0,E.useState)(t.textContent);return n!==t.textContent&&s(t.textContent),(0,i.jsx)("textarea",{className:"text-editor",value:n,onChange:e=>{t.textContent=e.target.value,s(e.target.value)},onScroll:e=>{}})}function k(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(e=>"string"==typeof e?e:"object"==typeof e?Object.keys(e).filter(t=>e[t]).join(" "):"").join(" ")}function S(e){var t;let{csv:n,rowIndex:s,cellIndex:l,selectionReducer:o,cellEdit:c,onEdit:r,onMenu:a,mouseDown:d}=e,[h,u]=(0,E.useState)(""),[f,x]=(0,E.useState)(!1),[m,v]=(0,E.useState)(!1),w=(0,E.useRef)(null),g=o[0].file.cellSelection,p=null===(t=n[s])||void 0===t?void 0:t[l];function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.preventDefault(),o[1]({rowIndex:s,cellIndex:l,mode:(e.ctrlKey?4:0)|(e.shiftKey?8:0)|(g.contains(s,l)?2:1)|t})}function j(){return c.get()[0]===s&&c.get()[1]===l}function C(e){!j()&&d.get()&&!f&&(x(!0),b(e,8))}return h!==p&&u(p),!d.get()&&f&&x(!1),j()&&!m&&(v(!0),function(){var e,t;let n=document.createElement("textarea"),s=()=>n.scrollHeight+2;null===(e=w.current)||void 0===e||e.append(n),null===(t=w.current)||void 0===t||t.classList.add("editing"),n.value=h,n.style.height="".concat(s(),"px"),n.focus(),n.addEventListener("blur",()=>{var e;n.value!==h&&(u(n.value),null==r||r(n.value)),n.remove(),null===(e=w.current)||void 0===e||e.classList.remove("editing"),v(!1),c.set([-1,-1])}),n.addEventListener("input",()=>{let e=s();n.offsetHeight<e&&(n.style.height="".concat(s(),"px"))})}()),(0,i.jsx)("td",{ref:w,className:k({selected:g.contains(s,l),focused:g.isFocused(s,l)}),onDoubleClick:function(){j()||c.set([s,l])},onContextMenu:function(e){!j()&&a&&a(e)},onMouseDown:function(e){!j()&&(d.set(!0),x(!0),b(e),document.activeElement instanceof HTMLElement&&document.activeElement.blur())},onMouseUp:function(e){j()||(d.set(!1),C(e))},onMouseEnter:C,onMouseLeave:function(e){j()||x(!1)},children:(0,i.jsx)("span",{children:h})})}function N(e){let t=(0,E.useState)(e);return{get:()=>t[0],set(e){t[1](e)}}}var T=n(7026),L=n(7982);async function D(e){return new Promise((t,n)=>(0,T.Qc)(e,{relaxColumnCount:!0,relaxQuotes:!0},(e,n)=>{if(e)console.error(e),t([[""]]);else{let e=n.reduce((e,t)=>Math.max(t.length,e),0);n.forEach(t=>{for(;t.length<e;)t.push("")}),0===n.length?n=[[""]]:0===n[0].length&&n[0].push(""),t(n)}}))}async function F(e,t){return new Promise((n,s)=>(0,L.Pz)(e,(e,s)=>{e?(console.error(e),n("")):(t.textContent=s,n(s))}))}function O(e){let{csv:t,cellIndex:n,selectionReducer:s,onMenu:l}=e;return(0,i.jsx)("th",{onMouseDown:function(e){s[1]({rowIndex:0,cellIndex:n,mode:1|(e.shiftKey?8:0)|(e.ctrlKey?4:0)}),s[1]({rowIndex:t.length,cellIndex:n,mode:9|(e.ctrlKey?4:0)})},onContextMenu:l,children:n>=0?n+1:""})}function K(e){let{csv:t,rowIndex:n,selectionReducer:s,onMenu:l}=e;return(0,i.jsx)("th",{onMouseDown:function(e){var l,i;s[1]({rowIndex:n,cellIndex:0,mode:1|(e.shiftKey?8:0)|(e.ctrlKey?4:0)}),s[1]({rowIndex:n,cellIndex:null!==(i=null===(l=t[0])||void 0===l?void 0:l.length)&&void 0!==i?i:0,mode:9|(e.ctrlKey?4:0)})},onContextMenu:l,children:n+1})}function H(e){let{csv:t,selectionReducer:n}=e;return(0,i.jsx)("th",{onClick:function(e){var s,l;e.preventDefault(),n[1]({rowIndex:t.length,cellIndex:null!==(l=null===(s=t[0])||void 0===s?void 0:s.length)&&void 0!==l?l:0,mode:16})}})}function _(e){let{items:t,x:n,y:s,remove:l,viewportWidth:c,viewportHeight:r}=e,a=(0,E.useRef)(null);function d(e){var t;(null===(t=a.current)||void 0===t?void 0:t.contains(e.target))||null==l||l()}return(0,E.useEffect)(()=>(window.addEventListener("mousedown",d,!1),()=>{window.removeEventListener("mousedown",d,!1)})),(0,E.useEffect)(()=>{if(a.current){a.current.style.left="0",a.current.style.top="0";let e=a.current.offsetWidth,t=a.current.offsetHeight;a.current.style.left="".concat(n<c-e?n:n-e,"px"),a.current.style.top="".concat(s<r-t?s:s-t,"px")}}),(0,i.jsx)("nav",{className:"menu",ref:a,style:{display:t.length>0?"block":"none"},onContextMenu:e=>e.preventDefault(),children:(0,i.jsx)("ul",{children:t.map((e,t)=>(0,i.jsxs)("li",{onClick:()=>{var t;null==l||l(),null===(t=e.select)||void 0===t||t.call(e)},className:k(e.className,{disabled:e.disabled}),children:[(0,i.jsx)("span",{className:"icon",children:e.icon&&(0,i.jsx)(o.G,{icon:e.icon})}),(0,i.jsx)("span",{className:"name",children:e.name})]},t))})})}class U{select(){this.cellEdit.set([this.rowIndex,this.cellIndex])}constructor(e,t,n){this.cellEdit=e,this.rowIndex=t,this.cellIndex=n,this.name="Edit Cell",this.icon=r.TzT}}class P{select(){let e=this.rowIndex+(this.above?0:1),t=this.csv[0].map(()=>"");this.setCSV([...this.csv.slice(0,e),t,...this.csv.slice(e)]),this.above&&this.selectionReducer[1]({mode:64,rowIndex:this.rowIndex,cellIndex:-1})}constructor(e,t,n,s,l){this.csv=e,this.setCSV=t,this.selectionReducer=n,this.rowIndex=s,this.above=l,this.name="Insert Row ".concat(this.above?"Above":"Below"),this.icon=r.ZhI,this.className="insert-row-".concat(this.above?"above":"below")}}class A{select(){let e=this.columnIndex+(this.before?0:1);for(let t of this.csv)t.splice(e,0,"");this.setCSV([...this.csv]),this.before&&this.selectionReducer[1]({mode:32,rowIndex:-1,cellIndex:this.columnIndex})}constructor(e,t,n,s,l){this.csv=e,this.setCSV=t,this.selectionReducer=n,this.columnIndex=s,this.before=l,this.name="Insert Column ".concat(this.before?"Before":"After"),this.icon=r.ZhI,this.className="insert-column-".concat(this.before?"before":"after")}}function B(e){let{file:t}=e,[n,s]=(0,E.useState)(-1),[l,o]=(0,E.useState)([]),c=N(!1),r=N([-1,-1]),a=(0,E.useReducer)(f,{file:t}),[d,h]=(0,E.useState)(),u=(0,E.useRef)(null);function x(e){o(e),F(e,t)}function m(){c.set(!1)}function v(e,t,n){var s,i;if(e.preventDefault(),!u.current)return;let o=[];t>=0&&n>=0&&o.push(new U(r,t,n)),t>=0&&o.push(new P(l,x,a,t,!0),new P(l,x,a,t,!1)),n>=0&&o.push(new A(l,x,a,n,!0),new A(l,x,a,n,!1));let c=u.current.querySelector("table.content").getBoundingClientRect(),d=u.current.querySelector("table.columns").offsetHeight,f=u.current.offsetHeight;h({items:o,x:e.clientX-(null!==(s=c.x)&&void 0!==s?s:0),y:e.clientY-(null!==(i=c.y)&&void 0!==i?i:0)+d,viewportWidth:c.width,viewportHeight:f,remove:()=>h(void 0)})}return(0,E.useEffect)(()=>(c.get()&&window.addEventListener("mouseup",m,!1),()=>{window.removeEventListener("mouseup",m,!1)}),[c]),a[0].file!==t&&(c.set(!1),a[1]({file:t,mode:"update"})),n!==t.id&&(s(t.id),D(t.textContent).then(e=>o(e))),(0,i.jsxs)("div",{className:"table-editor",ref:u,children:[l.length>0&&(0,i.jsx)("table",{className:"columns",children:(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(H,{csv:l,selectionReducer:a}),l[0].map((e,t)=>(0,i.jsx)(O,{cellIndex:t,csv:l,selectionReducer:a,onMenu:e=>v(e,-1,t)},t))]})})}),(0,i.jsx)("table",{className:"content",children:(0,i.jsx)("tbody",{children:l.map((e,n)=>(0,i.jsxs)("tr",{style:{zIndex:l.length-n},children:[(0,i.jsx)(K,{rowIndex:n,csv:l,selectionReducer:a,onMenu:e=>v(e,n,-1)}),e.map((e,s)=>(0,i.jsx)(S,{csv:l,rowIndex:n,cellIndex:s,selectionReducer:a,mouseDown:c,cellEdit:r,onEdit:e=>{l[n][s]=e,F(l,t)},onMenu:e=>v(e,n,s)},s))]},n))})}),d&&(0,i.jsx)(_,{...d})]})}function V(e){let{file:t}=e;return(0,i.jsxs)("article",{children:[t.editMode===l.Text&&(0,i.jsx)(M,{file:t}),t.editMode===l.Table&&(0,i.jsx)(B,{file:t})]})}function z(){let e=(0,E.useReducer)(I,{files:[]}),[t,n]=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsx)(R,{filesReducer:e})}),(0,i.jsx)("main",{children:t.selectedFile&&(0,i.jsx)(V,{file:t.selectedFile})})]})}}},function(e){e.O(0,[676,878,971,938,744],function(){return e(e.s=9215)}),_N_E=e.O()}]);