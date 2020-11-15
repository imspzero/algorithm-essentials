(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(323)),i=n(327),c=n(328),l={title:"Intersection of Two Arrays"},s={unversionedId:"linear-list/array/intersection-of-two-arrays",id:"linear-list/array/intersection-of-two-arrays",isDocsHomePage:!1,title:"Intersection of Two Arrays",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/intersection-of-two-arrays.md",slug:"/linear-list/array/intersection-of-two-arrays",permalink:"/linear-list/array/intersection-of-two-arrays",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/intersection-of-two-arrays.md",version:"current",sidebar:"someSidebar",previous:{title:"Meeting Rooms",permalink:"/linear-list/array/meeting-rooms"},next:{title:"Intersection of Two Arrays II",permalink:"/linear-list/array/intersection-of-two-arrays-ii"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given two arrays, write a function to compute their intersection."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 1"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Input"),": nums1 = ","[1,2,2,1]",", nums2 = ","[2,2]",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Output"),": ","[2]")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 2"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Input"),": nums1 = ","[4,9,5]",", nums2 = ","[9,4,9,8,4]",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Output"),": ","[9,4]")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each element in the result must be unique."),Object(o.b)("li",{parentName:"ul"},"The result can be in any order.")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u601d\u8def\u4e00\uff0c\u53ef\u4ee5\u628a\u4e24\u4e2a\u6570\u7ec4\u6392\u5e8f\uff0c\u7136\u540e\u7528\u4e24\u4e2a\u6307\u9488\uff0c\u540c\u65f6\u904d\u5386\u4e24\u4e2a\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(nlogn+mlogm)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(logm + logn) \u5230 O(m+n) \u4e4b\u95f4\uff0c\u53d6\u51b3\u4e8e\u6392\u5e8f\u7b97\u6cd5\u3002"),Object(o.b)("p",null,"\u601d\u8def\u4e8c\uff0c\u5efa\u4e24\u4e2a HashSet, \u7136\u540e\u96c6\u5408\u6c42\u4ea4\u96c6\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(m + n))\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(m + n)\u3002"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Intersection of Two Arrays\n// Two HashSet\n// Time Complexity: O(m+n), Space Complexity: O(m+n)\nclass Solution {\n  public int[] intersection(int[] nums1, int[] nums2) {\n    Set<Integer> set1 = new HashSet<Integer>();\n    for (int n : nums1) set1.add(n);\n    Set<Integer> set2 = new HashSet<Integer>();\n    for (int n : nums2) set2.add(n);\n\n    set1.retainAll(set2);\n\n    int [] result = new int[set1.size()];\n    int i = 0;\n    for (int s : set1) result[i++] = s;\n    return result;\n  }\n}\n"))),Object(o.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// TODO\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/linear-list/array/intersection-of-two-arrays-ii"}),"Intersection of Two Arrays II"))))}p.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},325:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},326:function(e,t,n){"use strict";var r=n(0),a=n(325);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},327:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(326),i=n(324),c=n(49),l=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:b,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[O,d]=Object(r.useState)(c),[y,j]=Object(r.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&d(e)}const v=e=>{d(e),null!=p&&f(p,e)},g=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},h=()=>{j(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",h)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),style:y?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),w(e)},onFocus:()=>v(e),onClick:()=>{v(e),j(!1)},onPointerDown:()=>j(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===O))[0]))}},328:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);