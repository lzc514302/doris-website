"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68104],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},171904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const i={title:"Query Detail Action",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/fe/query-detail-action",id:"version-3.0/admin-manual/fe/query-detail-action",title:"Query Detail Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/fe/query-detail-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/query-detail-action",permalink:"/zh-CN/docs/3.0/admin-manual/fe/query-detail-action",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Query Detail Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Profile Action",permalink:"/zh-CN/docs/3.0/admin-manual/fe/profile-action"},next:{title:"Query Schema Action",permalink:"/zh-CN/docs/3.0/admin-manual/fe/query-schema-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/query_detail")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u65f6\u95f4\u70b9\u4e4b\u540e\u7684\u6240\u6709\u67e5\u8be2\u7684\u4fe1\u606f"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"event_time")),(0,a.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u65f6\u95f4\u70b9\uff08Unix \u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u6beb\u79d2\uff09\uff0c\u83b7\u53d6\u8be5\u65f6\u95f4\u70b9\u4e4b\u540e\u7684\u67e5\u8be2\u4fe1\u606f\u3002\n"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a\u65f6\u95f4\u70b9\u4e4b\u540e\u7684\u67e5\u8be2\u8be6\u60c5\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/query_detail?event_time=1596462079958\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);