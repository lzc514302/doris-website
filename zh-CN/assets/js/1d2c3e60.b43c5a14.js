"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[406399],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),g=r,d=m["".concat(o,".").concat(g)]||m[g]||c[g]||l;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},198058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(58168),r=(t(296540),t(15680));const l={title:"\u8fc1\u79fb tablet",language:"zh-CN"},i=void 0,s={unversionedId:"admin-manual/be/tablet-migration",id:"version-3.0/admin-manual/be/tablet-migration",title:"\u8fc1\u79fb tablet",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/be/tablet-migration.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/tablet-migration",permalink:"/zh-CN/docs/3.0/admin-manual/be/tablet-migration",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u8fc1\u79fb tablet",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2 tablet \u5206\u5e03",permalink:"/zh-CN/docs/3.0/admin-manual/be/tablet-distribution"},next:{title:"\u67e5\u8be2 tablet \u4fe1\u606f",permalink:"/zh-CN/docs/3.0/admin-manual/be/tablet-info"}},o={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u63d0\u4ea4\u7ed3\u679c",id:"\u63d0\u4ea4\u7ed3\u679c",level:3},{value:"\u6267\u884c\u72b6\u6001",id:"\u6267\u884c\u72b6\u6001",level:3},{value:"Examples",id:"examples",level:2}],p={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/tablet_migration?goal={enum}&tablet_id={int}&schema_hash={int}&disk={string}")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u5728 BE \u8282\u70b9\u4e0a\u8fc1\u79fb\u5355\u4e2a tablet \u5230\u6307\u5b9a\u78c1\u76d8"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"goal")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"run"),"\uff1a\u63d0\u4ea4\u8fc1\u79fb\u4efb\u52a1"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"status"),"\uff1a\u67e5\u8be2\u4efb\u52a1\u7684\u6267\u884c\u72b6\u6001"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"tablet_id"),"\n\u9700\u8981\u8fc1\u79fb\u7684 tablet \u7684 id")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"schema_hash"),"\nschema hash")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"disk"),"\n\u76ee\u6807\u78c1\u76d8\u3002    "))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("h3",{id:"\u63d0\u4ea4\u7ed3\u679c"},"\u63d0\u4ea4\u7ed3\u679c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task is successfully submitted."\n    }\n')),(0,r.yg)("p",null,"\u6216"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Fail",\n        msg: "Migration task submission failed"\n    }\n')),(0,r.yg)("h3",{id:"\u6267\u884c\u72b6\u6001"},"\u6267\u884c\u72b6\u6001"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task is running",\n        dest_disk: "xxxxxx"\n    }\n')),(0,r.yg)("p",null,"\u6216"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task has finished successfully",\n        dest_disk: "xxxxxx"\n    }\n')),(0,r.yg)("p",null,"\u6216"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task failed.",\n        dest_disk: "xxxxxx"\n    }\n')),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'```shell\ncurl "http://127.0.0.1:8040/api/tablet_migration?goal=run&tablet_id=123&schema_hash=333&disk=/disk1"\n\n```\n')))}c.isMDXComponent=!0}}]);