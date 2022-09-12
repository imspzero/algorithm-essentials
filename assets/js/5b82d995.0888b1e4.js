"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7447],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),l=t(6010),i=t(2389),o=t(7392),s=t(7094),u=t(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t;const{lazy:i,block:d,defaultValue:m,values:v,groupId:f,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),y=(0,o.l)(k,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(n=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:x}=(0,s.U)(),[O,w]=(0,a.useState)(N),L=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==O&&k.some((n=>n.value===e))&&w(e)}const E=e=>{const n=e.currentTarget,t=L.indexOf(n),r=k[t].value;r!==O&&(T(n),w(r),null!=f&&x(f,String(r)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=L.indexOf(e.currentTarget)+1;t=null!=(r=L[n])?r:L[0];break}case"ArrowLeft":{var a;const n=L.indexOf(e.currentTarget)-1;t=null!=(a=L[n])?a:L[L.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},k.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>L.push(e),onKeyDown:I,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function m(e){const n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},7669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),l=t(5488),i=t(5162);const o={title:"Reverse Linked List II"},s=void 0,u={unversionedId:"linked-list/reverse-linked-list-ii",id:"linked-list/reverse-linked-list-ii",title:"Reverse Linked List II",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/reverse-linked-list-ii.md",sourceDirName:"linked-list",slug:"/linked-list/reverse-linked-list-ii",permalink:"/linked-list/reverse-linked-list-ii",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linked-list/reverse-linked-list-ii.md",tags:[],version:"current",frontMatter:{title:"Reverse Linked List II"},sidebar:"someSidebar",previous:{title:"Add Two Numbers II",permalink:"/linked-list/add-two-numbers-ii"},next:{title:"Partition List",permalink:"/linked-list/partition-list"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Reverse a linked list from position ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),". Do it in-place and in one-pass."),(0,a.kt)("p",null,"For example:\nGiven ",(0,a.kt)("inlineCode",{parentName:"p"},"1->2->3->4->5->nullptr"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," = 2 and ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," = 4,"),(0,a.kt)("p",null,"return ",(0,a.kt)("inlineCode",{parentName:"p"},"1->4->3->2->5->nullptr"),"."),(0,a.kt)("p",null,"Note:\nGiven ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," satisfy the following condition:\n$",(0,a.kt)("span",{parentName:"p",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 22: \u2026 m \\leq n \\leq $\u0332",style:{color:"#cc0000"}},"1 \\leq m \\leq n \\leq $"))," length of list."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u8fd9\u9898\u975e\u5e38\u7e41\u7410\uff0c\u6709\u5f88\u591a\u8fb9\u754c\u68c0\u67e5\uff0c15 \u5206\u949f\u5185\u505a\u5230 bug free \u5f88\u6709\u96be\u5ea6\uff01"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Reverse Linked List II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode reverseBetween(ListNode head, int m, int n) {\n        ListNode dummy = new ListNode(-1);\n        dummy.next = head;\n\n        ListNode prev = dummy;\n        for (int i = 0; i < m-1; ++i)\n            prev = prev.next;\n        ListNode head2 = prev;\n\n        prev = head2.next;\n        ListNode cur = prev.next;\n        for (int i = m; i < n; ++i) {\n            prev.next = cur.next;\n            cur.next = head2.next;\n            head2.next = cur;  // \u5934\u63d2\u6cd5\n            cur = prev.next;\n        }\n\n        return dummy.next;\n    }\n};\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Reverse Linked List II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *reverseBetween(ListNode *head, int m, int n) {\n        ListNode dummy(-1);\n        dummy.next = head;\n\n        ListNode *prev = &dummy;\n        for (int i = 0; i < m-1; ++i)\n            prev = prev->next;\n        ListNode* const head2 = prev;\n\n        prev = head2->next;\n        ListNode *cur = prev->next;\n        for (int i = m; i < n; ++i) {\n            prev->next = cur->next;\n            cur->next = head2->next;\n            head2->next = cur;  // \u5934\u63d2\u6cd5\n            cur = prev->next;\n        }\n\n        return dummy.next;\n    }\n};\n")))))}m.isMDXComponent=!0}}]);