"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[397628],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},560198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const i={title:"CURRENT_TIMESTAMP",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/current-timestamp",id:"version-3.0/sql-manual/sql-functions/date-time-functions/current-timestamp",title:"CURRENT_TIMESTAMP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/current-timestamp.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/current-timestamp",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/current-timestamp",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CURRENT_TIMESTAMP",language:"zh-CN"},sidebar:"docs",previous:{title:"CURTIME,CURRENT_TIME",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/curtime"},next:{title:"LOCALTIME,LOCALTIMESTAMP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/localtime"}},c={},s=[{value:"current_timestamp",id:"current_timestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"current_timestamp"},"current_timestamp"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME CURRENT_TIMESTAMP()")),(0,a.yg)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5Datetime\u7c7b\u578b\u8fd4\u56de"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select current_timestamp();\n+---------------------+\n| current_timestamp() |\n+---------------------+\n| 2019-05-27 15:59:33 |\n+---------------------+\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIMEV2 CURRENT_TIMESTAMP(INT precision)")),(0,a.yg)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5DatetimeV2\u7c7b\u578b\u8fd4\u56de\nprecision\u4ee3\u8868\u4e86\u7528\u6237\u60f3\u8981\u7684\u79d2\u7cbe\u5ea6\uff0c\u5f53\u524d\u7cbe\u5ea6\u6700\u591a\u652f\u6301\u5230\u5fae\u79d2\uff0c\u5373precision\u53d6\u503c\u8303\u56f4\u4e3a","[0, 6]","\u3002"),(0,a.yg)("h3",{id:"example-1"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select current_timestamp(3);\n+-------------------------+\n| current_timestamp(3)    |\n+-------------------------+\n| 2022-09-06 16:18:00.922 |\n+-------------------------+\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5f53\u524d\u53ea\u6709DatetimeV2\u6570\u636e\u7c7b\u578b\u53ef\u652f\u6301\u79d2\u7cbe\u5ea6"),(0,a.yg)("li",{parentName:"ol"},"\u53d7\u9650\u4e8eJDK\u5b9e\u73b0\uff0c\u5982\u679c\u7528\u6237\u4f7f\u7528JDK8\u6784\u5efaFE\uff0c\u5219\u7cbe\u5ea6\u6700\u591a\u652f\u6301\u5230\u6beb\u79d2\uff08\u5c0f\u6570\u70b9\u540e\u4e09\u4f4d\uff09\uff0c\u66f4\u5927\u7684\u7cbe\u5ea6\u4f4d\u5c06\u5168\u90e8\u586b\u51450\u3002\u5982\u679c\u7528\u6237\u6709\u66f4\u9ad8\u7cbe\u5ea6\u9700\u6c42\uff0c\u8bf7\u4f7f\u7528JDK11\u3002")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CURRENT_TIMESTAMP,CURRENT,TIMESTAMP\n")))}m.isMDXComponent=!0}}]);