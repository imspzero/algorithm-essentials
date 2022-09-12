"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5967],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>u});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),N=i(t),u=s,k=N["".concat(l,".").concat(u)]||N[u]||c[u]||m;return t?n.createElement(k,p(p({ref:e},o),{},{components:t})):n.createElement(k,p({ref:e},o))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=N;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5162:(a,e,t)=>{t.d(e,{Z:()=>p});var n=t(7294),s=t(6010);const m="tabItem_Ymn6";function p(a){let{children:e,hidden:t,className:p}=a;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(m,p),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>u});var n=t(7462),s=t(7294),m=t(6010),p=t(2389),r=t(7392),l=t(7094),i=t(2466);const o="tabList__CuJ",c="tabItem_LNqP";function N(a){var e,t;const{lazy:p,block:N,defaultValue:u,values:k,groupId:h,className:g}=a,d=s.Children.map(a.children,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:d.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),v=(0,r.l)(y,((a,e)=>a.value===e.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((a=>a.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===u?u:null!=(e=null!=u?u:null==(t=d.find((a=>a.props.default)))?void 0:t.props.value)?e:d[0].props.value;if(null!==w&&!y.some((a=>a.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((a=>a.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:f}=(0,l.U)(),[x,O]=(0,s.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=h){const a=b[h];null!=a&&a!==x&&y.some((e=>e.value===a))&&O(a)}const M=a=>{const e=a.currentTarget,t=T.indexOf(e),n=y[t].value;n!==x&&(S(e),O(n),null!=h&&f(h,String(n)))},C=a=>{var e;let t=null;switch(a.key){case"ArrowRight":{var n;const e=T.indexOf(a.currentTarget)+1;t=null!=(n=T[e])?n:T[0];break}case"ArrowLeft":{var s;const e=T.indexOf(a.currentTarget)-1;t=null!=(s=T[e])?s:T[T.length-1];break}}null==(e=t)||e.focus()};return s.createElement("div",{className:(0,m.Z)("tabs-container",o)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":N},g)},y.map((a=>{let{value:e,label:t,attributes:p}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:a=>T.push(a),onKeyDown:C,onFocus:M,onClick:M},p,{className:(0,m.Z)("tabs__item",c,null==p?void 0:p.className,{"tabs__item--active":x===e})}),null!=t?t:e)}))),p?(0,s.cloneElement)(d.filter((a=>a.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},d.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==x})))))}function u(a){const e=(0,p.Z)();return s.createElement(N,(0,n.Z)({key:String(e)},a))}},2160:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),m=t(5488),p=t(5162);const r={title:"2Sum"},l=void 0,i={unversionedId:"array/2sum",id:"array/2sum",title:"2Sum",description:"\u63cf\u8ff0",source:"@site/docs/array/2sum.md",sourceDirName:"array",slug:"/array/2sum",permalink:"/array/2sum",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/array/2sum.md",tags:[],version:"current",frontMatter:{title:"2Sum"},sidebar:"someSidebar",previous:{title:"Longest Consecutive Sequence",permalink:"/array/longest-consecutive-sequence"},next:{title:"4Sum II",permalink:"/array/4sum-ii"}},o={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"HashMap + \u4e24\u6b21\u904d\u5386",id:"hashmap--\u4e24\u6b21\u904d\u5386",level:4},{value:"HashMap + \u5355\u6b21\u904d\u5386",id:"hashmap--\u5355\u6b21\u904d\u5386",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],N={toc:c};function u(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.kt)("p",null,"Given an array of integers, find two numbers such that they add up to a specific target number."),(0,s.kt)("p",null,"The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[2,7,11,15]",", target = 9"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Output"),": ","[0,1]")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[3,2,4]",", target = 6"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Output"),": ","[1,2]")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[3,3]",", target = 6"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Output"),": ","[0,1]")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"2 <= nums.length <= ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"5"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"5"))))))))))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"9"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-10^9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9"))))))))))))," <= nums","[i]"," <= ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"9"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9"))))))))))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"9"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-10^9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9"))))))))))))," <= target <= ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"9"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9"))))))))))))),(0,s.kt)("li",{parentName:"ul"},"Only one valid answer exists.")),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"\u65b9\u6cd5 1\uff1a\u66b4\u529b\uff0c\u590d\u6742\u5ea6",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u4f1a\u8d85\u65f6"),(0,s.kt)("p",null,"\u65b9\u6cd5 2\uff1ahash\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\uff0c\u590d\u6742\u5ea6",(0,s.kt)("inlineCode",{parentName:"p"},"O(n)"),"."),(0,s.kt)("p",null,"\u65b9\u6cd5 3\uff1a\u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\uff0c\u6392\u5e8f",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n\\log n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u5de6\u53f3\u5939\u903c",(0,s.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u6700\u7ec8",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n\\log n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002\u4f46\u662f\u6ce8\u610f\uff0c\u8fd9\u9898\u9700\u8981\u8fd4\u56de\u7684\u662f\u4e0b\u6807\uff0c\u800c\u4e0d\u662f\u6570\u5b57\u672c\u8eab\uff0c\u56e0\u6b64\u8fd9\u4e2a\u65b9\u6cd5\u884c\u4e0d\u901a\u3002"),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)("h4",{id:"hashmap--\u4e24\u6b21\u904d\u5386"},"HashMap + \u4e24\u6b21\u904d\u5386"),(0,s.kt)(m.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Two Sum\n# \u65b9\u6cd52\uff1aHashMap + \u4e24\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n# Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        m = {num: i for i, num in enumerate(nums)}\n\n        for i, num in enumerate(nums):\n            complement = m.get(target - num)\n            if complement is not None and complement > i:\n                return [i, complement]\n\n        return None\n"))),(0,s.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u4e24\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> m = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            m.put(nums[i], i);\n        }\n        for (int i = 0; i < nums.length; i++) {\n            final Integer complement = m.get(target-nums[i]);\n            if (complement != null && complement > i) {\n                return new int[]{i, complement};\n            }\n        }\n        return null;\n    }\n};\n"))),(0,s.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u4e24\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < nums.size(); i++) {\n            m[nums[i]] = i;\n        }\n        for (int i = 0; i < nums.size(); i++) {\n            auto complement = m.find(target - nums[i]);\n            if (complement != m.end() && complement->second > i) {\n                return {i, complement->second};\n            }\n        }\n        return {-1, -1};\n    }\n};\n")))),(0,s.kt)("h4",{id:"hashmap--\u5355\u6b21\u904d\u5386"},"HashMap + \u5355\u6b21\u904d\u5386"),(0,s.kt)("p",null,"\u4e0a\u9762\u7684\u65b9\u6cd5\u53ef\u4ee5\u4f18\u5316\u4e00\u4e0b\uff0c\u53ea\u9700\u8981\u4e00\u6b21\u904d\u5386\u3002"),(0,s.kt)(m.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Two Sum\n# \u65b9\u6cd52\uff1aHashMap + \u5355\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n# Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        m = {}\n        for i, num in enumerate(nums):\n            complement = m.get(target - num)\n            if complement is not None:\n                return [i, complement]\n            m[num] = i\n        return None\n"))),(0,s.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u5355\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> m = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            final Integer complement = m.get(target-nums[i]);\n            if (complement != null) {\n                return new int[]{i, complement};\n            }\n            m.put(nums[i], i);\n        }\n        return new int[]{-1, -1};\n    }\n};\n"))),(0,s.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u5355\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < nums.size(); i++) {\n            auto complement = m.find(target - nums[i]);\n            if (complement != m.end()) {\n                return {i, complement->second};\n            }\n            m[nums[i]] = i;\n        }\n        return {-1, -1};\n    }\n};\n")))),(0,s.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/2sum-ii"},"2Sum II")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/3sum"},"3Sum")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/3sum-closest"},"3Sum Closest")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/4sum"},"4Sum")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/4sum-ii"},"4Sum II"))))}u.isMDXComponent=!0}}]);