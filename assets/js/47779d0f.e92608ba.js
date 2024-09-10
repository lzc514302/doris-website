"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[472819],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(296540),r(15680));const a={title:"Logout Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/fe/logout-action",id:"version-3.0/admin-manual/fe/logout-action",title:"Logout Action",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/fe/logout-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/logout-action",permalink:"/docs/3.0/admin-manual/fe/logout-action",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Logout Action",language:"en"},sidebar:"docs",previous:{title:"Login Action",permalink:"/docs/3.0/admin-manual/fe/login-action"},next:{title:"Query Profile Action",permalink:"/docs/3.0/admin-manual/fe/query-profile-action-controller"}},u={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3}],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"logout-action"},"Logout Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"POST /rest/v1/logout\n")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Logout Action is used to log out of the current login."),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h3",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0\n}\n')))}d.isMDXComponent=!0}}]);