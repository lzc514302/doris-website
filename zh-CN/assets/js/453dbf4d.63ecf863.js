"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[645435],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},352400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"Get Small File Action",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/fe/get-small-file",id:"version-2.1/admin-manual/fe/get-small-file",title:"Get Small File Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/fe/get-small-file.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/get-small-file",permalink:"/zh-CN/docs/admin-manual/fe/get-small-file",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Get Small File Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Get FE log file",permalink:"/zh-CN/docs/admin-manual/fe/get-log-file-action"},next:{title:"Get WAL size",permalink:"/zh-CN/docs/admin-manual/fe/get-wal-size-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/get_small_file")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u901a\u8fc7\u6587\u4ef6 id\uff0c\u4e0b\u8f7d\u5728\u6587\u4ef6\u7ba1\u7406\u5668\u4e2d\u7684\u6587\u4ef6\u3002    "),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"token")),(0,a.yg)("p",{parentName:"li"},"  \u96c6\u7fa4\u7684 token\u3002\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION")," \u6587\u4ef6\u4e2d\u67e5\u770b\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"file_id")),(0,a.yg)("p",{parentName:"li"},"  \u6587\u4ef6\u7ba1\u7406\u5668\u4e2d\u663e\u793a\u7684\u6587\u4ef6 id\u3002\u6587\u4ef6 id \u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW FILE")," \u547d\u4ee4\u67e5\u770b\u3002"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")),(0,a.yg)("p",null,"\u5982\u6709\u9519\u8bef\uff0c\u5219\u8fd4\u56de\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "File not found or is not content",\n    "code": 1,\n    "data": null,\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u6307\u5b9a id \u7684\u6587\u4ef6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"GET /api/get_small_file?token=98e8c0a6-3a41-48b8-a72b-0432e42a7fe5&file_id=11002\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")))))}m.isMDXComponent=!0}}]);