"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27577],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},673704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const l={title:"\u67e5\u8be2 tablet \u4fe1\u606f",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/be/tablet-info",id:"version-3.0/admin-manual/be/tablet-info",title:"\u67e5\u8be2 tablet \u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/be/tablet-info.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/tablet-info",permalink:"/zh-CN/docs/3.0/admin-manual/be/tablet-info",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u67e5\u8be2 tablet \u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8fc1\u79fb tablet",permalink:"/zh-CN/docs/3.0/admin-manual/be/tablet-migration"},next:{title:"Checksum",permalink:"/zh-CN/docs/3.0/admin-manual/be/checksum"}},s={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /tablets_json?limit={int}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u83b7\u53d6\u7279\u5b9a BE \u8282\u70b9\u4e0a\u6307\u5b9a\u6570\u91cf\u7684 tablet \u7684 tablet id \u548c schema hash \u4fe1\u606f"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"limit"),"\n\u8fd4\u56de\u7684 tablet \u6570\u91cf\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4 1000 \u4e2a\uff0c\u53ef\u586b",(0,a.yg)("inlineCode",{parentName:"li"},"all"),"\u8fd4\u56de\u5168\u90e8 tablet\u3002")),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```json\n{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n```\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"```shell\ncurl http://127.0.0.1:8040/api/tablets_json?limit=123\n\n```\n")))}m.isMDXComponent=!0}}]);