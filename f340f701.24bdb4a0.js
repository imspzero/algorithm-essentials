(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{308:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),i=(n(0),n(323)),c=n(327),s=n(328),o={title:"Valid Parentheses"},l={unversionedId:"stack-and-queue/stack/valid-parentheses",id:"stack-and-queue/stack/valid-parentheses",isDocsHomePage:!1,title:"Valid Parentheses",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/valid-parentheses.md",slug:"/stack-and-queue/stack/valid-parentheses",permalink:"/stack-and-queue/stack/valid-parentheses",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/stack-and-queue/stack/valid-parentheses.md",version:"current",sidebar:"someSidebar",previous:{title:"Min Stack",permalink:"/stack-and-queue/stack/min-stack"},next:{title:"Longest Valid Parentheses",permalink:"/stack-and-queue/stack/longest-valid-parentheses"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a string containing just the characters ",Object(i.b)("inlineCode",{parentName:"p"},"'('"),", ",Object(i.b)("inlineCode",{parentName:"p"},"')'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'{'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'}'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'['")," and ",Object(i.b)("inlineCode",{parentName:"p"},"']'"),", determine if the input string is valid."),Object(i.b)("p",null,"The brackets must close in the correct order, ",Object(i.b)("inlineCode",{parentName:"p"},'"()"')," and ",Object(i.b)("inlineCode",{parentName:"p"},'"()[]{}"')," are all valid but ",Object(i.b)("inlineCode",{parentName:"p"},'"(]"')," and ",Object(i.b)("inlineCode",{parentName:"p"},'"([)]"')," are not."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u65e0"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Valid Parentheses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public boolean isValid(String s) {\n        final String left = "([{";\n        final String right = ")]}";\n        Stack<Character> stk = new Stack<>();\n\n        for (int i = 0; i < s.length(); ++i) {\n            final char c = s.charAt(i);\n            if (left.indexOf(c) != -1) {\n                stk.push (c);\n            } else {\n                if (!stk.isEmpty() &&\n                        stk.peek() == left.charAt(right.indexOf(c)))\n                    stk.pop ();\n                else\n                    return false;\n            }\n        }\n        return stk.empty();\n    }\n}\n'))),Object(i.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'// Valid Parentheses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool isValid (string const& s) {\n        string left = "([{";\n        string right = ")]}";\n        stack<char> stk;\n\n        for (auto c : s) {\n            if (left.find(c) != string::npos) {\n                stk.push (c);\n            } else {\n                if (stk.empty () || stk.top () != left[right.find (c)])\n                    return false;\n                else\n                    stk.pop ();\n            }\n        }\n        return stk.empty();\n    }\n};\n')))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dfs/generate-parentheses"}),"Generate Parentheses")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/stack-and-queue/stack/longest-valid-parentheses"}),"Longest Valid Parentheses"))))}b.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},325:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},326:function(e,t,n){"use strict";var a=n(0),r=n(325);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},327:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(326),c=n(324),s=n(49),o=n.n(s);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[m,O]=Object(a.useState)(s),[h,v]=Object(a.useState)(!1);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=b&&f(b,e)},y=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},k=()=>{v(!1)};return Object(a.useEffect)((()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",k)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":m===e}),style:h?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),g(e)},onFocus:()=>j(e),onClick:()=>{j(e),v(!1)},onPointerDown:()=>v(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},328:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);