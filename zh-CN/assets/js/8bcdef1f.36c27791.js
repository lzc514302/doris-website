"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[875e3],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>j});var o=t(296540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},y=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,l=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=c(t),y=r,j=p["".concat(l,".").concat(y)]||p[y]||d[y]||s;return t?o.createElement(j,a(a({ref:e},u),{},{components:t})):o.createElement(j,a({ref:e},u))}));function j(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,a=new Array(s);a[0]=y;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[p]="string"==typeof n?n:r,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},185514:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(58168),r=(t(296540),t(15680));const s={title:"JSON_CONTAINS",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json-contains",id:"version-2.1/sql-manual/sql-functions/json-functions/json-contains",title:"JSON_CONTAINS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/json-functions/json-contains.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-contains",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-contains",draft:!1,tags:[],version:"2.1",frontMatter:{title:"JSON_CONTAINS",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_VALID",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-valid"},next:{title:"JSON_LENGTH",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-length"}},l={},c=[{value:"json_contains",id:"json_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(n){let{components:e,...t}=n;return(0,r.yg)(p,(0,o.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"json_contains"},"json_contains"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BOOLEAN json_contains(JSON json_str, JSON candidate)")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BOOLEAN json_contains(JSON json_str, JSON candidate, VARCHAR json_path)")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BOOLEAN json_contains(VARCHAR json_str, VARCHAR candidate, VARCHAR json_path)")),(0,r.yg)("p",null,"\u901a\u8fc7\u8fd4\u56de 1 \u6216 0 \u6765\u6307\u793a\u7ed9\u5b9a\u7684 candidate JSON \u6587\u6863\u662f\u5426\u5305\u542b\u5728 json_str JSON json_path \u8def\u5f84\u4e0b\u7684\u6587\u6863\u4e2d"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SET @j = '{\"a\": 1, \"b\": 2, \"c\": {\"d\": 4}}';\nmysql> SET @j2 = '1';\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.a');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.a') |\n+-------------------------------+\n|                             1 |\n+-------------------------------+\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.b');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.b') |\n+-------------------------------+\n|                             0 |\n+-------------------------------+\n\nmysql> SET @j2 = '{\"d\": 4}';\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.a');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.a') |\n+-------------------------------+\n|                             0 |\n+-------------------------------+\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.c');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.c') |\n+-------------------------------+\n|                             1 |\n+-------------------------------+\n\nmysql> SELECT json_contains('[1, 2, {\"x\": 3}]', '1');\n+----------------------------------------+\n| json_contains('[1, 2, {\"x\": 3}]', '1') |\n+----------------------------------------+\n|                                      1 |\n+----------------------------------------+\n1 row in set (0.04 sec)\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"json,json_contains"))}d.isMDXComponent=!0}}]);