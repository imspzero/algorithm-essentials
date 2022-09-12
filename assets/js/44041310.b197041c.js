"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const l={title:"Reverse Linked List"},o=void 0,a={unversionedId:"linked-list/reverse-linked-list",id:"linked-list/reverse-linked-list",title:"Reverse Linked List",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/reverse-linked-list.md",sourceDirName:"linked-list",slug:"/linked-list/reverse-linked-list",permalink:"/linked-list/reverse-linked-list",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linked-list/reverse-linked-list.md",tags:[],version:"current",frontMatter:{title:"Reverse Linked List"},sidebar:"someSidebar",previous:{title:"Remove Nth Node From End of List",permalink:"/linked-list/remove-nth-node-from-end-of-list"},next:{title:"Odd Even Linked List",permalink:"/linked-list/odd-even-linked-list"}},s={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1 \u8fed\u4ee3",id:"\u89e3\u6cd5-1-\u8fed\u4ee3",level:3},{value:"\u89e3\u6cd5 2 \u9012\u5f52",id:"\u89e3\u6cd5-2-\u9012\u5f52",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Reverse a singly linked list."),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u7528\u53cc\u6307\u9488 ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"q"),"\uff0c\u4e0d\u65ad\u524d\u8fdb\u3002"),(0,i.kt)("h3",{id:"\u89e3\u6cd5-1-\u8fed\u4ee3"},"\u89e3\u6cd5 1 \u8fed\u4ee3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Reverse Linked List\n// Time Complexity: O(n), Space Complexity: O(1)\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode p = null;\n        ListNode q = head;\n        while (q != null) {\n            ListNode tmp = q.next;\n            q.next = p;\n            p = q;\n            q = tmp;\n        }\n        return p;\n    }\n}\n")),(0,i.kt)("h3",{id:"\u89e3\u6cd5-2-\u9012\u5f52"},"\u89e3\u6cd5 2 \u9012\u5f52"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Reverse Linked List\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public ListNode reverseList(ListNode head) {\n        if (head == null || head.next == null) return head;\n        ListNode newHead = reverseList(head.next);\n        head.next.next = head;\n        head.next = null;\n        return newHead;\n    }\n}\n")))}c.isMDXComponent=!0}}]);