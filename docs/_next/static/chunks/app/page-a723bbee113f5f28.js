(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9215:function(e,t,s){Promise.resolve().then(s.bind(s,4581))},4581:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ea}});var n,i,l,c,o=s(7437),r=s(504);function a(e){let{icon:t,hint:s,onClick:n}=e;return(0,o.jsx)("button",{className:"icon",onClick:n,title:s,children:(0,o.jsx)(r.G,{icon:t})})}var u=s(2759);class d{async load(e){let t=await new Promise(t=>{let s=new FileReader;s.addEventListener("load",e=>{var s;t(null===(s=e.target)||void 0===s?void 0:s.result)}),s.readAsText(e)});if(!t)throw Error("Cannot read file ".concat(e.name));return t}async save(e,t){let s=document.createElement("a"),n=URL.createObjectURL(new Blob([e],{type:this.mimeType}));s.href=n,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)}constructor(e,t){this.extension=e,this.mimeType=t}}let h=[new d("csv","text/csv")];(n=l||(l={})).Text="text",n.Table="table";class f{contains(e,t){for(let s=0;s<this.excluded.length;s+=2)if(this.excluded[s]===e&&this.excluded[s+1]===t)return!1;return this.inRange(e,t)}expand(e,t){this.endRow=e,this.endCell=t}exclude(e,t,s,n){if("number"==typeof e&&"number"==typeof t&&void 0===s&&void 0===n)this.contains(e,t)&&this.excluded.push(e,t);else{let i="object"==typeof e,l=i?e.minRow:e,c=i?e.maxRow:null!=s?s:e,o=i?e.minCell:t,r=i?e.maxCell:null!=n?n:t;for(let e=l;e<=c;e++)for(let t=o;t<=r;t++)this.exclude(e,t)}}insert(e,t,s,n){let i=this.minRow,l=this.maxRow,c=this.minCell,o=this.maxCell,r=!1;if(0!==s){s<0&&i>=e&&i<e-s?i=e:i>=e&&(i+=s),l>=e&&(l+=s);for(let t=0;t<this.excluded.length;t+=2){let n=this.excluded[t];s<0&&n>=e&&n<e-s?n=-1:n>=e&&(n+=s),this.excluded[t]=n}i>l&&(l=i,r=!0)}if(0!==n){n<0&&c>=t&&c<t-n?c=t:c>=t&&(c+=n),o>=t&&(o+=n);for(let e=1;e<this.excluded.length;e+=2){let s=this.excluded[e];n<0&&s>=t&&s<t-n?s=-1:s>=t&&(s+=n),this.excluded[e]=s}c>o&&(o=c,r=!0)}let a=this.startRow<=this.endRow;this.startRow=a?i:l,this.endRow=a?l:i;let u=this.startCell<=this.endCell;this.startCell=u?c:o,this.endCell=u?o:c;let d=[...this.excluded];this.excluded=[];for(let e=0;e<d.length;e+=2)this.exclude(d[e],d[e+1]);r&&this.exclude(i,c,l,o)}isEmpty(){return this.excluded.length>=(1+Math.abs(this.startRow-this.endRow))*(1+Math.abs(this.startCell-this.endCell))*2}isStart(e,t){return this.startRow===e&&this.startCell===t}inRange(e,t){return(this.startRow<=this.endRow?e>=this.startRow&&e<=this.endRow:e<=this.startRow&&e>=this.endRow)&&(this.startCell<=this.endCell?t>=this.startCell&&t<=this.endCell:t<=this.startCell&&t>=this.endCell)}get minRow(){return Math.min(this.startRow,this.endRow)}get maxRow(){return Math.max(this.startRow,this.endRow)}get minCell(){return Math.min(this.startCell,this.endCell)}get maxCell(){return Math.max(this.startCell,this.endCell)}constructor(e,t,s,n){this.startRow=e,this.startCell=t,this.endRow=s,this.endCell=n,this.excluded=[]}}class m{contains(e,t){var s,n;return!(null===(s=this.draftExcluded)||void 0===s?void 0:s.contains(e,t))&&((null===(n=this.draftIncluded)||void 0===n?void 0:n.contains(e,t))||this.ranges.some(s=>s.contains(e,t)))}isFocus(e,t){return this.focus[0]===e&&this.focus[1]===t}setFocus(e,t){this.focus[0]=e,this.focus[1]=t}hasFocus(){return this.focus[0]>=0&&this.focus[1]>=0}get focusRow(){return this.focus[0]}get focusCell(){return this.focus[1]}clearFocus(){this.focus[0]=-1,this.focus[1]=-1}clearSelection(){this.ranges=[],this.draftIncluded=void 0,this.draftExcluded=void 0,this.draftInserted=void 0}isEmpty(){return this.ranges.every(e=>e.isEmpty())}selectRange(e,t,s,n,i){if(i)this.draftIncluded=new f(e,t,s,n);else{let i=new f(e,t,s,n);this.ranges.push(i),this.combineRanges(i)}}expandRange(e,t,s,n,i){var l;let c=null!==(l=this.ranges.pop())&&void 0!==l?l:new f(e,t,s,n);c.expand(s,n),i&&this.clearSelection(),this.ranges.push(c),this.combineRanges(c)}removeRange(e,t){this.ranges=this.ranges.filter(s=>!s.isStart(e,t))}excludeRange(e,t,s,n,i){if(i)this.draftExcluded=new f(e,t,s,n);else{let i=new f(e,t,s,n);this.ranges.forEach(e=>e.exclude(i)),this.clearRanges()}}commitDraft(e,t){if(this.draftIncluded&&(this.ranges.push(this.draftIncluded),this.combineRanges(this.draftIncluded),this.draftIncluded=void 0),this.draftExcluded&&(this.ranges.forEach(e=>e.exclude(this.draftExcluded)),this.clearRanges(),this.draftExcluded=void 0),this.draftInserted){let[s,n,i,l]=this.draftInserted,[c,o]=this.focus;s>=0&&(i<0&&c>=s&&c<s-i?c=Math.min(s,e-1):c>=s&&(c+=i)),n>=0&&(l<0&&o>=n&&o<n-l?o=Math.min(n,t-1):o>=n&&(o+=l)),this.focus[0]=c,this.focus[1]=o,this.ranges.forEach(e=>e.insert(s,n,i,l)),this.clearRanges(),this.draftInserted=void 0}}insertRow(e,t){this.draftInserted=[e,-1,null!=t?t:1,0]}insertColumn(e,t){this.draftInserted=[-1,e,0,null!=t?t:1]}combineRanges(e){this.ranges.forEach(t=>{t!==e&&t.exclude(e)}),this.clearRanges()}clearRanges(){this.ranges=this.ranges.filter(e=>!e.isEmpty())}getBounds(){let e=[-1,-1,-1,-1];for(let t of this.ranges)(-1===e[0]||e[0]>t.minRow)&&(e[0]=t.minRow),(-1===e[1]||e[1]>t.minCell)&&(e[1]=t.minCell),(-1===e[2]||e[2]<t.maxRow)&&(e[2]=t.maxRow),(-1===e[3]||e[3]<t.maxCell)&&(e[3]=t.maxCell);return e}*[Symbol.iterator](){let[e,t,s,n]=this.getBounds(),i=!1;if(e>=0&&t>=0){let l=[-1,-1];for(let c=e;c<=s;c++)for(let e=t;e<=n;e++)this.contains(c,e)&&(l[0]=c,l[1]=e,i=!0,yield l)}!i&&this.hasFocus()&&(yield[this.focusRow,this.focusCell])}copyCells(e){var t,s,n,i,l,c;let o=[],r=-1,a=-1,u=-1;for(let[s,n]of this)r<0&&(r=s),a<0&&(a=n),n>u&&(u=n),(null===(t=e[s])||void 0===t?void 0:t[n])!==void 0&&(void 0===o[s-r]&&(o[s-r]=[]),o[s-r][n-a]=e[s][n]);for(let e=0;e<o.length;e++){null!==(n=o[s=e])&&void 0!==n||(o[s]=[]);for(let t=0;t<=u-a;t++)null!==(c=(i=o[e])[l=t])&&void 0!==c||(i[l]="")}return o}pasteCells(e,t,s,n){var i,l,c,o,r,a,u;let d=-1;for(let c=0;c<t.length;c++){null!==(l=e[i=c+s])&&void 0!==l||(e[i]=[]);for(let i=0;i<t[c].length;i++)""!==t[c][i]&&void 0!==t[c][i]&&(e[c+s][i+n]=t[c][i],d<i&&(d=i))}for(let t=0;t<e.length;t++){null!==(o=e[c=t])&&void 0!==o||(e[c]=[]);for(let s=0;s<=n+d;s++)null!==(u=(r=e[t])[a=s])&&void 0!==u||(r[a]="")}}clearCells(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(let[n,i]of this){var s;(null===(s=e[n])||void 0===s?void 0:s[i])!==void 0&&(e[n][i]=t)}}clear(){this.clearSelection(),this.clearFocus()}constructor(){this.ranges=[],this.focus=[-1,-1]}}function v(e,t){let s=e.file.tableSelection;switch(t.action){case"update":return{...e,file:t.file};case"setFocus":s.setFocus(t.rowIndex,t.cellIndex);break;case"clearFocus":s.clearFocus();break;case"clearSelection":s.clearSelection();break;case"selectRange":t.clear&&s.clearSelection(),t.replace&&s.removeRange(t.range[0],t.range[1]),t.range.length>2?s.selectRange(...t.range,t.draft):s.selectRange(...t.range,...t.range,t.draft);break;case"expandRange":t.range.length>2?s.expandRange(...t.range,t.clear):s.expandRange(...t.range,...t.range,t.clear);break;case"excludeRange":t.range.length>2?s.excludeRange(...t.range,t.draft):s.excludeRange(...t.range,...t.range,t.draft);break;case"commitDraft":s.commitDraft(...t.size);break;case"insertRow":s.insertRow(t.rowIndex,t.rows);break;case"insertColumn":s.insertColumn(t.columnIndex,t.columns)}return{...e}}let x=0;class w{async load(){this.file&&(this.textContent=await this.loader.load(this.file))}async save(){await this.loader.save(this.textContent,this.filename)}constructor(e){var t;if(this.file=e,this.id=++x,this.textContent="",this.selected=!1,this.editMode=l.Table,this.tableSelection=new m,this.filename=null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"untitled.csv",this.extension=this.filename.replace(/^.*\.(\w+)$/,"$1").toLowerCase(),this.loader=h.filter(e=>e.extension===this.extension)[0],!this.loader)throw Error("Unknown file extension ".concat(this.filename))}}function g(e){let{onOpen:t}=e;return(0,o.jsx)(a,{icon:u.cC_,onClick:function(){let e=document.createElement("input");e.type="file",e.multiple=!0,e.accept=h.map(e=>".".concat(e.extension,",").concat(e.mimeType)).join(","),e.onchange=async()=>{if(e.files)for(let s=0;s<e.files.length;s++){let n=new w(e.files.item(s));await n.load(),null==t||t(n)}},e.click()},hint:"Open File"})}var R=s(7188);function p(e){var t;let{item:s,onSelect:n,onRemove:i}=e,l="tab ".concat(s.selected?"selected":""," ").concat(s.editable?"editable":"");return(0,o.jsxs)("li",{className:l,children:[(0,o.jsxs)("button",{className:"label",title:null!==(t=s.hint)&&void 0!==t?t:s.name,onClick:()=>{s.selected||null==n||n()},children:[s.icon&&(0,o.jsx)("span",{className:"icon",children:(0,o.jsx)(r.G,{icon:s.icon})}),s.name&&(0,o.jsx)("span",{className:"name",children:s.name})]}),s.removable&&(0,o.jsx)(a,{icon:u.g82,hint:"Close",onClick:i})]})}function y(e){let{items:t,onRename:s,onSelect:n,onRemove:i}=e;return(0,o.jsx)("ul",{className:"tabs",children:t.map(e=>(0,o.jsx)(p,{item:e,onSelect:()=>null==n?void 0:n(e),onRemove:()=>null==i?void 0:i(e)},e.key))})}class b{get key(){return"".concat(this.file.id)}get selected(){return this.file.selected}get link(){return"/".concat(this.name)}constructor(e){this.file=e,this.name=this.file.filename,this.removable=!0,this.editable=!0}}class S{get selected(){return this.file.editMode===this.editMode}constructor(e,t,s,n){this.file=e,this.editMode=t,this.icon=s,this.hint=n,this.key=this.editMode,this.editable=!1,this.removable=!1}}function C(e){let{file:t}=e;async function s(){await t.save()}return(0,o.jsx)(a,{icon:u.kwI,onClick:s,hint:"Save File"})}function I(e){let{onOpen:t}=e;async function s(){let e=new w;await e.load(),null==t||t(e)}return(0,o.jsx)(a,{icon:u.gMD,onClick:s,hint:"New File"})}function E(e){let{filesReducer:[t,s]}=e,n=t.files,i=t.selectedFile;function c(e){s({file:e,type:"add"})}return(0,o.jsxs)("nav",{children:[(0,o.jsx)(g,{onOpen:c}),(0,o.jsx)(I,{onOpen:c}),i&&(0,o.jsx)(C,{file:i}),(0,o.jsx)(y,{items:n.map(e=>new b(e)),onSelect:e=>s({file:e.file,type:"select"}),onRemove:e=>s({file:e.file,type:"remove"})}),i&&(0,o.jsx)(y,{items:[new S(i,l.Text,R.nfZ,"Text"),new S(i,l.Table,u.DaQ,"Table")],onSelect:e=>{i.editMode=e.editMode,s({file:t.selectedFile,type:"update"})}})]})}var D=s(2265);function F(e,t){let s=e.files;switch(t.type){case"add":s.forEach(e=>e.selected=!1);let n=s.filter(e=>e.id===t.file.id)[0];n?n.selected=!0:(t.file.selected=!0,s.push(t.file));break;case"select":s.forEach(e=>e.selected=!1),t.file.selected=!0;break;case"remove":let i=s.indexOf(t.file);i>=0&&(s.splice(i,1),t.file.selected&&(i<s.length?s[i].selected=!0:i-1>=0&&(s[i-1].selected=!0)))}return{files:s,selectedFile:s.filter(e=>e.selected)[0]}}function k(e){let{file:t}=e,[s,n]=(0,D.useState)(t.textContent);return s!==t.textContent&&n(t.textContent),(0,o.jsx)("textarea",{className:"text-editor",value:s,onChange:e=>{t.textContent=e.target.value,t.tableSelection.clear(),n(e.target.value)},onScroll:e=>{}})}function j(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.map(e=>"string"==typeof e?e:"object"==typeof e?Object.keys(e).filter(t=>e[t]).join(" "):"").join(" ")}function K(e){var t,s;return[e.length,null!==(s=null===(t=e[0])||void 0===t?void 0:t.length)&&void 0!==s?s:0]}function M(e){var t;let{csvState:s,rowIndex:n,cellIndex:i,onEdit:l,onMenu:r,selectionReducer:a,cellEditState:[u,d],mouseDownState:[h,f],keyDownRepeater:m,menuBuilder:v}=e,[x]=s,[w,g]=a,[R,p]=(0,D.useState)(""),[y,b]=(0,D.useState)(!1),[S,C]=(0,D.useState)(),I=(0,D.useRef)(null),E=w.file.tableSelection;(0,D.useEffect)(()=>{if(E.isFocus(n,i)&&!k()){var e;null===(e=I.current)||void 0===e||e.focus()}});let F=null===(t=x[n])||void 0===t?void 0:t[i];function k(){return u[0]===n&&u[1]===i}return R!==F&&p(F),k()&&!y&&(b(!0),function(){var e,t;let s=document.createElement("textarea"),n=()=>s.scrollHeight+2;null===(e=I.current)||void 0===e||e.append(s),null===(t=I.current)||void 0===t||t.classList.add("editing"),s.value=R,s.style.height="".concat(n(),"px"),s.focus(),s.addEventListener("blur",()=>{var e;s.value!==R&&(p(s.value),null==l||l(s.value)),s.remove(),null===(e=I.current)||void 0===e||e.classList.remove("editing"),b(!1),d([-1,-1])}),s.addEventListener("input",()=>{let e=n();s.offsetHeight<e&&(s.style.height="".concat(n(),"px"))}),C(s)}()),(0,o.jsx)("td",{ref:I,tabIndex:n*x[0].length+i,className:j({selected:E.contains(n,i),focused:E.isFocus(n,i)}),onDoubleClick:function(){k()||d([n,i])},onContextMenu:function(e){!k()&&r&&r(e)},onMouseDown:function(e){if(!k()){if(f([n,i,!!e.ctrlKey&&E.contains(n,i)]),0!==e.button)g({action:"setFocus",rowIndex:n,cellIndex:i});else if(e.shiftKey){let t=E.focusRow,s=E.focusCell;E.hasFocus()||(t=n,s=i,g({action:"setFocus",rowIndex:n,cellIndex:i})),e.ctrlKey&&!E.contains(t,s)?g({action:"excludeRange",range:[t,s,n,i]}):g({action:"selectRange",range:[t,s,n,i],clear:!e.ctrlKey,replace:!0})}else g({action:"setFocus",rowIndex:n,cellIndex:i}),e.ctrlKey&&E.contains(n,i)?g({action:"excludeRange",range:[n,i]}):e.ctrlKey?g({action:"selectRange",range:[n,i]}):g({action:"clearSelection"});document.activeElement instanceof HTMLElement&&document.activeElement.blur()}},onMouseUp:function(e){k()||(g({action:"commitDraft",size:K(x)}),f([-1,-1]))},onMouseEnter:function(e){!k()&&h[0]>=0&&h[1]>=0&&(h[2]?g({action:"excludeRange",range:[h[0],h[1],n,i],draft:!0}):g({action:"selectRange",range:[E.focusRow,E.focusCell,n,i],draft:!0,replace:!0}))},onKeyDown:function(e){var t,s,n;let i;if(!E.hasFocus())return;let l=e.key;if(!m.isKeyDown(l,l===c.Enter)){e.preventDefault();return}let o=E.focusRow,r=E.focusCell,a=u[0]>=0&&u[1]>=0;l===c.Escape&&a?(e.preventDefault(),S&&(S.value=R),null===(t=I.current)||void 0===t||t.focus()):l!==c.F2||a?l!==c.Enter||e.ctrlKey||e.shiftKey?a||(l!==c.Escape||E.isEmpty()?i=v.keyAction(e,o,r):(e.preventDefault(),g({action:"clearSelection"}))):(e.preventDefault(),a)?null===(s=I.current)||void 0===s||s.focus():d([o,r]):(e.preventDefault(),d([o,r])),i?(e.preventDefault(),i.disabled||null===(n=i.select)||void 0===n||n.call(i)):function(e){let t=E.focusRow,s=E.focusCell,n=e.key,i=x.length-1,l=x[t].length-1,o={[c.ArrowUp]:-1,[c.ArrowDown]:1,[c.Tab]:e.shiftKey?0===s?-1:0:s===l?1:0,[c.Home]:e.ctrlKey?-t:0,[c.End]:e.ctrlKey?i-t:0}[n],r={[c.ArrowLeft]:-1,[c.ArrowRight]:1,[c.Tab]:e.shiftKey?0===s?l:-1:s===l?-l:1,[c.Home]:-s,[c.End]:l-s}[n],a=[c.ArrowUp,c.ArrowDown,c.ArrowLeft,c.ArrowRight];if((void 0!==o||void 0!==r)&&e.preventDefault(),0!==o||0!==r){let c=t+(null!=o?o:0),u=s+(null!=r?r:0);if(c>=0&&c<=i&&u>=0&&u<=l){if(g({action:"setFocus",rowIndex:c,cellIndex:u}),0>a.indexOf(n))return;e.shiftKey?g({action:E.contains(t,s)?"expandRange":"selectRange",range:[t,s,c,u],clear:!e.ctrlKey}):e.ctrlKey&&E.contains(t,s)&&E.contains(c,u)?g({action:"excludeRange",range:[t,s]}):e.ctrlKey&&g({action:"selectRange",range:[t,s,c,u]})}}}(e)},children:(0,o.jsx)("span",{children:R})})}(i=c||(c={})).F1="F1",i.F2="F2",i.F3="F3",i.F4="F4",i.F5="F5",i.F6="F6",i.F7="F7",i.F8="F8",i.F9="F9",i.F10="F10",i.F11="F11",i.F12="F12",i.Escape="Escape",i.Enter="Enter",i.Tab="Tab",i.Insert="Insert",i.Delete="Delete",i.Home="Home",i.End="End",i.ArrowUp="ArrowUp",i.ArrowDown="ArrowDown",i.ArrowLeft="ArrowLeft",i.ArrowRight="ArrowRight",i.A="A",i.B="B",i.C="C",i.D="D",i.E="E",i.F="F",i.G="G",i.H="H",i.I="I",i.J="J",i.K="K",i.L="L",i.M="M",i.N="N",i.O="O",i.P="P",i.Q="Q",i.R="R",i.S="S",i.T="T",i.U="U",i.V="V",i.W="W",i.X="X",i.Y="Y",i.Z="Z",i.a="a",i.b="b",i.c="c",i.d="d",i.e="e",i.f="f",i.g="g",i.h="h",i.i="i",i.j="j",i.k="k",i.l="l",i.m="m",i.n="n",i.o="o",i.p="p",i.q="q",i.r="r",i.s="s",i.t="t",i.u="u",i.v="v",i.w="w",i.x="x",i.y="y",i.z="z";var A=s(7026),T=s(7982);async function N(e){return new Promise((t,s)=>(0,A.Qc)(e,{relaxColumnCount:!0,relaxQuotes:!0},(e,s)=>{if(e)console.error(e),t([[""]]);else{let e=s.reduce((e,t)=>Math.max(t.length,e),0);s.forEach(t=>{for(;t.length<e;)t.push("")}),0===s.length?s=[[""]]:0===s[0].length&&s[0].push(""),t(s)}}))}async function L(e){return new Promise((t,s)=>(0,T.Pz)(e,{eof:!1},(e,s)=>{e?(console.error(e),t("")):t(s)}))}function H(e){let{csv:t,cellIndex:s,selectionReducer:[n,i],onMenu:l}=e;return(0,o.jsx)("th",{onMouseDown:function(e){if(0!==e.button)return;let l=n.file.tableSelection,c=n.file.tableSelection.focusCell;l.hasFocus()||(i({action:"setFocus",rowIndex:0,cellIndex:s}),c=s),e.shiftKey?i({action:"selectRange",range:[0,c,t.length-1,s],clear:!e.ctrlKey}):(i({action:"setFocus",rowIndex:0,cellIndex:s}),i({action:"selectRange",range:[0,s,t.length-1,s],clear:!e.ctrlKey}))},onContextMenu:l,children:function(e){let t=String.fromCharCode(65+e%26);for(;e>=26;)t=String.fromCharCode(65+(e=Math.floor(e/26)-1)%26)+t;return t}(s)})}function U(e){let{csv:t,rowIndex:s,selectionReducer:[n,i],onMenu:l}=e;return(0,o.jsx)("th",{onMouseDown:function(e){if(0!==e.button)return;let l=n.file.tableSelection,c=n.file.tableSelection.focusRow;l.hasFocus()||(i({action:"setFocus",rowIndex:s,cellIndex:0}),c=s),e.shiftKey?i({action:"selectRange",range:[c,0,s,t[s].length-1],clear:!e.ctrlKey}):(i({action:"setFocus",rowIndex:s,cellIndex:0}),i({action:"selectRange",range:[s,0,s,t[s].length-1],clear:!e.ctrlKey}))},onContextMenu:l,children:s+1})}function O(e){let{csv:t,selectionReducer:[,s]}=e;return(0,o.jsx)("th",{onClick:function(e){e.preventDefault(),s({action:"selectRange",range:[0,0,t.length-1,t[0].length-1],clear:!0})}})}function q(e){let[t]=(0,D.useState)(new z);return t}class z{isKeyDown(e){var t;let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date().getTime(),i="number"==typeof this.interval?this.interval:null!==(t=this.interval[e])&&void 0!==t?t:Number.POSITIVE_INFINITY;return(void 0===this.keyDownTimestamp[e]||!s&&n-this.keyDownTimestamp[e]>i)&&(this.keyDownTimestamp[e]=n,!0)}constructor(e=60){this.interval=e,this.keyDownTimestamp={},window.addEventListener("keyup",e=>{delete this.keyDownTimestamp[e.key]})}}function P(e){let{items:t,x:s,y:n,remove:i,viewportWidth:l,viewportHeight:a,keyAction:d}=e,h=(0,D.useRef)(null),f=q();function m(e){var t;(null===(t=h.current)||void 0===t?void 0:t.contains(e.target))||null==i||i()}function v(e,t){var s,n,l,o,r,a,u,m,v,x,g,R,p,y,b,S,C,I,E,D;let F=e.key;if(!f.isKeyDown(F)){e.preventDefault();return}if(F===c.Escape)e.preventDefault(),null==i||i();else if(F===c.Home||F===c.End){e.preventDefault();let t=[...null!==(u=null!==(a=null===(o=h.current)||void 0===o?void 0:null===(l=o.querySelector("li:focus"))||void 0===l?void 0:null===(n=l.parentElement)||void 0===n?void 0:n.children)&&void 0!==a?a:null===(r=h.current)||void 0===r?void 0:r.querySelectorAll(".root-menu > li"))&&void 0!==u?u:[]].filter(e=>e.tabIndex>=0);t.length>0&&t[F===c.Home?0:t.length-1].focus()}else if(F===c.ArrowDown||F===c.ArrowUp||F===c.Tab){e.preventDefault();let t=null===(m=h.current)||void 0===m?void 0:m.querySelector("li:focus");if(t){let s=F===c.ArrowUp||e.shiftKey&&F===c.Tab?"previousElementSibling":"nextElementSibling",n=!1;for(let e=t[s];e;e=e[s])if(e.tabIndex>=0){n=!0,e.focus();break}if(!n&&F===c.Tab){let s=[...null!==(g=null===(v=t.parentElement)||void 0===v?void 0:v.children)&&void 0!==g?g:[]].filter(e=>e.tabIndex>=0);null===(x=s[e.shiftKey?s.length-1:0])||void 0===x||x.focus()}}else{let t=null===(R=h.current)||void 0===R?void 0:R.querySelectorAll(".root-menu > li[tabindex]"),s=F===c.ArrowUp||e.shiftKey&&F===c.Tab?(null!==(y=null==t?void 0:t.length)&&void 0!==y?y:1)-1:0;null==t||null===(p=t.item(s))||void 0===p||p.focus()}}else if(F===c.ArrowRight||F===c.Enter&&(null==t?void 0:null===(s=t.items)||void 0===s?void 0:s.length)){e.preventDefault();let t=null===(b=h.current)||void 0===b?void 0:b.querySelectorAll("li:focus > ul > li[tabindex]");if(null==t?void 0:t.length){let e=t.item(0);null===(C=e.parentElement)||void 0===C||null===(S=C.closest("li"))||void 0===S||S.classList.add("expanded"),e.focus()}}else if(F===c.ArrowLeft){e.preventDefault();let t=null===(D=h.current)||void 0===D?void 0:null===(E=D.querySelector("li:focus"))||void 0===E?void 0:null===(I=E.parentElement)||void 0===I?void 0:I.closest("li");null==t||t.classList.remove("expanded"),null==t||t.focus()}else if(F===c.Enter&&t)e.preventDefault(),w(t);else if(d){let t=d(e);t&&(e.preventDefault(),t.disabled||w(t))}}function x(){var e,t;null===(e=h.current)||void 0===e||e.focus(),null===(t=h.current)||void 0===t||t.querySelectorAll("li.expanded").forEach(e=>e.classList.remove("expanded"))}function w(e){var t;null==i||i(),null===(t=e.select)||void 0===t||t.call(e)}return(0,D.useEffect)(()=>(window.addEventListener("mousedown",m,!1),()=>{window.removeEventListener("mousedown",m,!1)})),(0,D.useEffect)(()=>{let e=h.current;if(e){e.style.left="0",e.style.top="0",e.querySelectorAll("ul").forEach(e=>{e.style.display="block",e.style.left="100%",e.style.right="auto",e.style.top="0",e.style.bottom="auto"});let t=e.scrollWidth,i=e.scrollHeight,c=e.offsetWidth,o=e.offsetHeight;e.querySelectorAll("ul").forEach(e=>{e.style.display="",e.style.left="",e.style.right="",e.style.top="",e.style.bottom=""}),e.style.left="".concat(s>l-c?s-c:s,"px"),e.style.top="".concat(n>a-o?n-o:n,"px"),e.classList.toggle("menu-right",s>l-t),e.classList.toggle("menu-bottom",n>a-i),e.focus()}}),(0,o.jsx)("nav",{className:"menu",ref:h,tabIndex:0,style:{display:t.length>0?"block":"none"},onContextMenu:e=>e.preventDefault(),onKeyDown:v,children:function e(t,s){return(0,o.jsx)("ul",{className:j({"root-menu":s}),children:t.map((t,s)=>t.separator?(0,o.jsx)("li",{className:"separator"},s):(0,o.jsxs)("li",{tabIndex:t.disabled?-1:s,className:j(t.className,{disabled:t.disabled}),onClick:e=>w(t),onKeyDown:e=>v(e,t),onMouseOver:x,children:[(0,o.jsx)("span",{className:"icon",children:t.icon&&(0,o.jsx)(r.G,{icon:t.icon})}),(0,o.jsx)("span",{className:"name",children:t.name}),(0,o.jsx)("span",{className:"keys",children:t.keys}),t.items&&(0,o.jsx)("span",{className:"expand",children:(0,o.jsx)(r.G,{icon:u.I4f})}),t.items&&e(t.items)]},s))})}(t,!0)})}class B{select(){this.cellEditState[1]([this.rowIndex,this.cellIndex])}constructor(e,t,s){this.cellEditState=e,this.rowIndex=t,this.cellIndex=s,this.name="Edit",this.icon=u.TzT,this.keys="F2, Enter"}}class W{get disabled(){let e=this.selectionReducer[0].file.tableSelection;return!e.contains(this.rowIndex,this.cellIndex)&&!e.isFocus(this.rowIndex,this.cellIndex)}constructor(e,t,s,n){this.csvState=e,this.selectionReducer=t,this.rowIndex=s,this.cellIndex=n}}class _ extends W{select(){let[e,t]=this.csvState,[s]=this.selectionReducer;s.file.tableSelection.clearCells(e),t([...e])}constructor(...e){super(...e),this.name="Clear",this.icon=R.Vui,this.keys="Delete"}}class V extends W{async select(){let[e,t]=this.csvState,[s]=this.selectionReducer,n=s.file.tableSelection.copyCells(e);t([...e]),await navigator.clipboard.writeText(await L(n))}constructor(...e){super(...e),this.name="Copy",this.icon=R.kZ_,this.keys="Ctrl + C"}}class Z extends V{async select(){await super.select(),new _(this.csvState,this.selectionReducer,this.rowIndex,this.cellIndex).select()}constructor(...e){super(...e),this.name="Cut",this.icon=u.DCV,this.keys="Ctrl + X"}}class G extends W{async select(){let[e]=this.selectionReducer,t=await navigator.clipboard.readText();if(t){let[s,n]=this.csvState,i=await N(t);e.file.tableSelection.pasteCells(s,i,this.rowIndex,this.cellIndex),n([...s])}}get disabled(){return!1}constructor(...e){super(...e),this.name="Paste",this.icon=R.O4,this.keys="Ctrl + V"}}class Q{select(){let[e,t]=this.csvState,s=this.rowIndex+(this.above?0:1),n=e[0].map(()=>"");e.splice(s,0,n),t([...e]);let[,i]=this.selectionReducer;i({action:"insertRow",rowIndex:s}),i({action:"commitDraft",size:K(e)})}constructor(e,t,s,n){this.csvState=e,this.selectionReducer=t,this.rowIndex=s,this.above=n,this.name="Insert Row ".concat(this.above?"Above":"Below"),this.icon=u.ZhI,this.className="rotate".concat(this.above?"-90":"90"),this.keys="".concat(this.above?"Ctrl + ":"","Insert")}}class X{select(){let[e,t]=this.csvState,s=this.columnIndex+(this.before?0:1);for(let t of e)t.splice(s,0,"");t([...e]);let[,n]=this.selectionReducer;n({action:"insertColumn",columnIndex:s}),n({action:"commitDraft",size:K(e)})}constructor(e,t,s,n){this.csvState=e,this.selectionReducer=t,this.columnIndex=s,this.before=n,this.name="Insert Column ".concat(this.before?"Before":"After"),this.icon=u.ZhI,this.className="rotate".concat(this.before?"180":"0"),this.keys="".concat(this.before?"Ctrl + ":"","Shift + Insert")}}class Y{select(){let[e,t]=this.csvState,s=this.rowIndex,n=e[s].slice();e.splice(s,0,n),t([...e]);let[,i]=this.selectionReducer;i({action:"insertRow",rowIndex:s+1}),i({action:"commitDraft",size:K(e)})}constructor(e,t,s){this.csvState=e,this.selectionReducer=t,this.rowIndex=s,this.name="Clone Row",this.icon=R.WM4,this.keys="Ctrl + D"}}class J{select(){let[e,t]=this.csvState,s=this.columnIndex;for(let t of e)t.splice(s,0,t[s]);t([...e]);let[,n]=this.selectionReducer;n({action:"insertColumn",columnIndex:s+1}),n({action:"commitDraft",size:K(e)})}constructor(e,t,s){this.csvState=e,this.selectionReducer=t,this.columnIndex=s,this.name="Clone Column",this.icon=R.WM4,this.keys="Ctrl + Shift + D"}}class ${select(){let[e,t]=this.csvState,s=this.rowIndex+(this.up?-1:1),n=e[this.rowIndex];e[this.rowIndex]=e[s],e[s]=n,t([...e])}get disabled(){let[e]=this.csvState;return this.up&&0===this.rowIndex||!this.up&&this.rowIndex>=e.length-1}constructor(e,t,s,n){this.csvState=e,this.selectionReducer=t,this.rowIndex=s,this.up=n,this.name="Move Row ".concat(this.up?"Up":"Down"),this.icon=this.up?u.FPD:u.r5q}}class ee{select(){let[e,t]=this.csvState,s=this.columnIndex+(this.left?-1:1);for(let t of e){let e=t[this.columnIndex];t[this.columnIndex]=t[s],t[s]=e}t([...e])}get disabled(){let[e]=this.csvState;return this.left&&0===this.columnIndex||!this.left&&this.columnIndex>=e[0].length-1}constructor(e,t,s,n){this.csvState=e,this.selectionReducer=t,this.columnIndex=s,this.left=n,this.name="Move Column ".concat(this.left?"Left":"Right"),this.icon=this.left?u.acZ:u.eFW}}class et{select(){let[e,t]=this.csvState;e.splice(this.rowIndex,1),t([...e]);let[,s]=this.selectionReducer;s({action:"insertRow",rowIndex:this.rowIndex,rows:-1}),s({action:"commitDraft",size:K(e)})}get disabled(){let[e]=this.csvState;return e.length<2}constructor(e,t,s){this.csvState=e,this.selectionReducer=t,this.rowIndex=s,this.name="Delete Row",this.icon=R.Vui,this.keys="Ctrl + Delete"}}class es{select(){let[e,t]=this.csvState;for(let t of e)t.splice(this.columnIndex,1);t([...e]);let[,s]=this.selectionReducer;s({action:"insertColumn",columnIndex:this.columnIndex,columns:-1}),s({action:"commitDraft",size:K(e)})}get disabled(){let[e]=this.csvState;return e[0].length<2}constructor(e,t,s){this.csvState=e,this.selectionReducer=t,this.columnIndex=s,this.name="Delete Column",this.icon=R.Vui,this.keys="Ctrl + Shift + Delete"}}class en{constructor(){this.separator=!0}}class ei{constructor(e){this.items=e,this.name="Row",this.icon=u.u7T}}class el{constructor(e){this.items=e,this.name="Column",this.icon=u.rWw}}class ec{getRowItems(e){return[new Y(this.csvState,this.selectionReducer,e),new Q(this.csvState,this.selectionReducer,e,!0),new Q(this.csvState,this.selectionReducer,e,!1),new en,new $(this.csvState,this.selectionReducer,e,!0),new $(this.csvState,this.selectionReducer,e,!1),new en,new et(this.csvState,this.selectionReducer,e)]}getColumnItems(e){return[new J(this.csvState,this.selectionReducer,e),new X(this.csvState,this.selectionReducer,e,!0),new X(this.csvState,this.selectionReducer,e,!1),new en,new ee(this.csvState,this.selectionReducer,e,!0),new ee(this.csvState,this.selectionReducer,e,!1),new en,new es(this.csvState,this.selectionReducer,e)]}buildMenu(e,t){return e>=0&&t>=0?[new B(this.cellEditState,e,t),new en,new Z(this.csvState,this.selectionReducer,e,t),new V(this.csvState,this.selectionReducer,e,t),new G(this.csvState,this.selectionReducer,e,t),new _(this.csvState,this.selectionReducer,e,t),new en,new ei(this.getRowItems(e)),new el(this.getColumnItems(t))]:e>=0?this.getRowItems(e):t>=0?this.getColumnItems(t):[]}keyAction(e,t,s){let n=e.key;if(n===c.Delete&&e.ctrlKey&&e.shiftKey)return new es(this.csvState,this.selectionReducer,s);if(n===c.Delete&&e.ctrlKey)return new et(this.csvState,this.selectionReducer,t);if(n===c.Delete)return new _(this.csvState,this.selectionReducer,t,s);if(n===c.c&&e.ctrlKey)return new V(this.csvState,this.selectionReducer,t,s);if(n===c.x&&e.ctrlKey)return new Z(this.csvState,this.selectionReducer,t,s);if(n===c.v&&e.ctrlKey)return new G(this.csvState,this.selectionReducer,t,s);if(n===c.D&&e.ctrlKey&&e.shiftKey)return new J(this.csvState,this.selectionReducer,s);else if(n===c.d&&e.ctrlKey)return new Y(this.csvState,this.selectionReducer,t);else if(n===c.Insert&&e.shiftKey)return new X(this.csvState,this.selectionReducer,s,e.ctrlKey);else if(n===c.Insert)return new Q(this.csvState,this.selectionReducer,t,e.ctrlKey)}constructor(e,t,s){this.csvState=e,this.cellEditState=t,this.selectionReducer=s}}function eo(e){let{file:t}=e,[s,n]=(0,D.useState)(-1),i=(0,D.useState)([]),[l,c]=i,r=(0,D.useState)([-1,-1]),[a,u]=r,d=(0,D.useState)([-1,-1]),h=q(),f=(0,D.useReducer)(v,{file:t}),[m,x]=f,[w,g]=(0,D.useState)(),R=(0,D.useRef)(null),p=new ec(i,d,f);function y(){u([-1,-1])}async function b(e,t,s){l[e][t]=s,c([...l])}function S(e,t,s){var n,i;if(e.preventDefault(),!R.current)return;let l=R.current.querySelector("table.content").getBoundingClientRect(),c=R.current.querySelector("table.columns").offsetHeight,o=R.current.offsetHeight;g({items:p.buildMenu(t,s),x:e.clientX-(null!==(n=l.x)&&void 0!==n?n:0),y:e.clientY-(null!==(i=l.y)&&void 0!==i?i:0)+c,viewportWidth:l.width,viewportHeight:o,remove:()=>g(void 0),keyAction:e=>{let t=m.file.tableSelection;if(t.hasFocus())return p.keyAction(e,t.focusRow,t.focusCell)}})}return(0,D.useEffect)(()=>(a&&window.addEventListener("mouseup",y,!1),()=>{window.removeEventListener("mouseup",y,!1)})),(0,D.useEffect)(()=>{m.file.tableSelection.hasFocus()||x({action:"setFocus",rowIndex:0,cellIndex:0})}),(0,D.useEffect)(()=>{L(l).then(e=>t.textContent=e)},[l,t]),f[0].file!==t&&(u([-1,-1]),f[1]({file:t,action:"update"})),s!==t.id&&(n(t.id),N(t.textContent).then(e=>c(e))),(0,o.jsxs)("div",{className:"table-editor",ref:R,children:[l.length>0&&(0,o.jsx)("table",{className:"columns",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)(O,{csv:l,selectionReducer:f}),l[0].map((e,t)=>(0,o.jsx)(H,{cellIndex:t,csv:l,selectionReducer:f,onMenu:e=>S(e,-1,t)},t))]})})}),(0,o.jsx)("table",{className:"content",children:(0,o.jsx)("tbody",{children:l.map((e,t)=>(0,o.jsxs)("tr",{style:{zIndex:l.length-t},children:[(0,o.jsx)(U,{rowIndex:t,csv:l,selectionReducer:f,onMenu:e=>S(e,t,-1)}),e.map((e,s)=>(0,o.jsx)(M,{csvState:i,rowIndex:t,cellIndex:s,selectionReducer:f,mouseDownState:r,cellEditState:d,keyDownRepeater:h,menuBuilder:p,onEdit:e=>b(t,s,e),onMenu:e=>S(e,t,s)},s))]},t))})}),w&&(0,o.jsx)(P,{...w})]})}function er(e){let{file:t}=e;return(0,o.jsxs)("article",{children:[t.editMode===l.Text&&(0,o.jsx)(k,{file:t}),t.editMode===l.Table&&(0,o.jsx)(eo,{file:t})]})}function ea(){let e=(0,D.useReducer)(F,{files:[]}),[t,s]=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("header",{children:(0,o.jsx)(E,{filesReducer:e})}),(0,o.jsx)("main",{children:t.selectedFile&&(0,o.jsx)(er,{file:t.selectedFile})})]})}}},function(e){e.O(0,[676,878,971,938,744],function(){return e(e.s=9215)}),_N_E=e.O()}]);