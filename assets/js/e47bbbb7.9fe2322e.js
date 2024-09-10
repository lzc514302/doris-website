"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[338630],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},704807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const a={title:"Cluster Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/fe/cluster-action",id:"version-3.0/admin-manual/fe/cluster-action",title:"Cluster Action",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/fe/cluster-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/cluster-action",permalink:"/docs/3.0/admin-manual/fe/cluster-action",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Cluster Action",language:"en"},sidebar:"docs",previous:{title:"Meta Action",permalink:"/docs/3.0/admin-manual/fe/meta-action"},next:{title:"Node Action",permalink:"/docs/3.0/admin-manual/fe/node-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Cluster Connection Information",id:"cluster-connection-information",level:2},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cluster-action"},"Cluster Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/cluster/cluster_info/conn_info")),(0,o.yg)("h2",{id:"cluster-connection-information"},"Cluster Connection Information"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/cluster/cluster_info/conn_info")),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("p",null,"Used to get cluster http, mysql connection information."),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h3",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "fe_host:http_ip"\n        ],\n        "mysql": [\n            "fe_host:query_ip"\n        ]\n    },\n    "count": 0\n}\n')),(0,o.yg)("h3",{id:"examples"},"Examples"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/cluster/cluster_info/conn_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "127.0.0.1:8030"\n        ],\n        "mysql": [\n            "127.0.0.1:9030"\n        ]\n    },\n    "count": 0\n}\n')))}m.isMDXComponent=!0}}]);