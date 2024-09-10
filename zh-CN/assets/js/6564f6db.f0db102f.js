"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[445808],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=u(r),d=a,f=y["".concat(l,".").concat(d)]||y[d]||s[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[y]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},766605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(58168),a=(r(296540),r(15680));const o={title:"\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09",language:"zh-CN"},c=void 0,i={unversionedId:"query/query-data/cte",id:"version-2.1/query/query-data/cte",title:"\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query/query-data/cte.md",sourceDirName:"query/query-data",slug:"/query/query-data/cte",permalink:"/zh-CN/docs/query/query-data/cte",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5b50\u67e5\u8be2",permalink:"/zh-CN/docs/query/query-data/subquery"},next:{title:"\u5217\u8f6c\u884c (Lateral View)",permalink:"/zh-CN/docs/query/query-data/lateral-view"}},l={},u=[],p={toc:u},y="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08Common Table Expression\uff09\u5b9a\u4e49\u4e00\u4e2a\u4e34\u65f6\u7ed3\u679c\u96c6\uff0c\u60a8\u53ef\u4ee5\u5728 SQL \u8bed\u53e5\u7684\u8303\u56f4\u5185\u591a\u6b21\u5f15\u7528\u3002CTE \u4e3b\u8981\u7528\u4e8e SELECT \u8bed\u53e5\u4e2d\u3002"),(0,a.yg)("p",null,"\u8981\u6307\u5b9a\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff0c\u8bf7\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"WITH")," \u5177\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u9017\u53f7\u5206\u9694\u5b50\u53e5\u7684\u5b50\u53e5\u3002\u6bcf\u4e2a\u5b50\u6761\u6b3e\u90fd\u63d0\u4f9b\u4e00\u4e2a\u5b50\u67e5\u8be2\uff0c\u7528\u4e8e\u751f\u6210\u7ed3\u679c\u96c6\uff0c\u5e76\u5c06\u540d\u79f0\u4e0e\u5b50\u67e5\u8be2\u76f8\u5173\u8054\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u540d\u4e3a\u7684 CTE ",(0,a.yg)("inlineCode",{parentName:"p"},"cte1")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"cte2")," \u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"WITH")," \u5b50\u53e5\uff0c\u5e76\u4e14\u662f\u6307\u5728\u5b83\u4eec\u7684\u9876\u5c42 ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT")," \u4e0b\u9762\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"WITH")," \u5b50\u53e5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"WITH\n  cte1 AS\uff08SELECT a\uff0cb FROM table1\uff09\uff0c\n  cte2 AS\uff08SELECT c\uff0cd FROM table2\uff09\nSELECT b\uff0cd FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n")),(0,a.yg)("p",null,"\u5728\u5305\u542b\u8be5 ",(0,a.yg)("inlineCode",{parentName:"p"},"WITH"),"\u5b50\u53e5 \u7684\u8bed\u53e5\u4e2d\uff0c\u53ef\u4ee5\u5f15\u7528\u6bcf\u4e2a CTE \u540d\u79f0\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684 CTE \u7ed3\u679c\u96c6\u3002"),(0,a.yg)("p",null,"CTE \u540d\u79f0\u53ef\u4ee5\u5728\u5176\u4ed6 CTE \u4e2d\u5f15\u7528\uff0c\u4ece\u800c\u53ef\u4ee5\u57fa\u4e8e\u5176\u4ed6 CTE \u5b9a\u4e49 CTE\u3002"))}s.isMDXComponent=!0}}]);