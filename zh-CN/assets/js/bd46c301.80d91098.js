"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[313604],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),y=l,g=s["".concat(p,".").concat(y)]||s[y]||m[y]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},766502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(58168),l=(t(296540),t(15680));const r={title:"\u89e6\u53d1 Compaction",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/be/compaction-run",id:"version-3.0/admin-manual/be/compaction-run",title:"\u89e6\u53d1 Compaction",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/be/compaction-run.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/compaction-run",permalink:"/zh-CN/docs/3.0/admin-manual/be/compaction-run",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u89e6\u53d1 Compaction",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u770b Compaction \u72b6\u6001",permalink:"/zh-CN/docs/3.0/admin-manual/be/compaction-status"},next:{title:"\u67e5\u8be2\u5143\u4fe1\u606f",permalink:"/zh-CN/docs/3.0/admin-manual/be/meta"}},p={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u89e6\u53d1 Compaction",id:"\u89e6\u53d1-compaction",level:3},{value:"\u67e5\u8be2\u72b6\u6001",id:"\u67e5\u8be2\u72b6\u6001",level:3},{value:"Examples",id:"examples",level:3}],c={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(s,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"request"},"Request"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?tablet_id={int}&compact_type={enum}"),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?table_id={int}&compact_type=full")," \u6ce8\u610f\uff0ctable_id=xxx \u53ea\u6709\u5728 compact_type=full \u65f6\u6307\u5b9a\u624d\u4f1a\u751f\u6548\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"GET /api/compaction/run_status?tablet_id={int}")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"\u7528\u4e8e\u624b\u52a8\u89e6\u53d1 Compaction \u4ee5\u53ca\u72b6\u6001\u67e5\u8be2\u3002"),(0,l.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"tablet_id")),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"tablet \u7684 id"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"table_id")),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"table \u7684 id\u3002\u6ce8\u610f\uff0ctable_id=xxx \u53ea\u6709\u5728 compact_type=full \u65f6\u6307\u5b9a\u624d\u4f1a\u751f\u6548\uff0c\u5e76\u4e14 tablet_id \u548c table_id \u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\uff0c\u4e0d\u80fd\u591f\u540c\u65f6\u6307\u5b9a\uff0c\u6307\u5b9a table_id \u540e\u4f1a\u81ea\u52a8\u5bf9\u6b64 table \u4e0b\u6240\u6709 tablet \u6267\u884c full_compaction\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"compact_type")),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u53d6\u503c\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"base"),"\u6216",(0,l.yg)("inlineCode",{parentName:"li"},"cumulative"),"\u6216",(0,l.yg)("inlineCode",{parentName:"li"},"full"),"\u3002full_compaction \u7684\u4f7f\u7528\u573a\u666f\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"li",href:"../data-admin/reparing-data.md"},"\u6570\u636e\u6062\u590d"),"\u3002")))),(0,l.yg)("h2",{id:"request-body"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h2",{id:"response"},"Response"),(0,l.yg)("h3",{id:"\u89e6\u53d1-compaction"},"\u89e6\u53d1 Compaction"),(0,l.yg)("p",null,"\u82e5 tablet \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de JSON \u683c\u5f0f\u7684\u9519\u8bef\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,l.yg)("p",null,"\u82e5 compaction \u6267\u884c\u4efb\u52a1\u89e6\u53d1\u5931\u8d25\u65f6\uff0c\u8fd4\u56de JSON \u683c\u5f0f\u7684\u9519\u8bef\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')),(0,l.yg)("p",null,"\u82e5 compaction \u6267\u884c\u89e6\u53d1\u6210\u529f\u65f6\uff0c\u5219\u8fd4\u56de JSON \u683c\u5f0f\u7684\u7ed3\u679c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')),(0,l.yg)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"status\uff1a\u89e6\u53d1\u4efb\u52a1\u72b6\u6001\uff0c\u5f53\u6210\u529f\u89e6\u53d1\u65f6\u4e3a Success\uff1b\u5f53\u56e0\u67d0\u4e9b\u539f\u56e0\uff08\u6bd4\u5982\uff0c\u6ca1\u6709\u83b7\u53d6\u5230\u5408\u9002\u7684\u7248\u672c\uff09\u65f6\uff0c\u8fd4\u56de Fail\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"msg\uff1a\u7ed9\u51fa\u5177\u4f53\u7684\u6210\u529f\u6216\u5931\u8d25\u7684\u4fe1\u606f\u3002"))),(0,l.yg)("h3",{id:"\u67e5\u8be2\u72b6\u6001"},"\u67e5\u8be2\u72b6\u6001"),(0,l.yg)("p",null,"\u82e5 tablet \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,l.yg)("p",null,"\u82e5 tablet \u5b58\u5728\u5e76\u4e14 tablet \u4e0d\u5728\u6b63\u5728\u6267\u884c compaction\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n')),(0,l.yg)("p",null,"\u82e5 tablet \u5b58\u5728\u5e76\u4e14 tablet \u6b63\u5728\u6267\u884c compaction\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n')),(0,l.yg)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"run_status\uff1a\u83b7\u53d6\u5f53\u524d\u624b\u52a8 compaction \u4efb\u52a1\u6267\u884c\u72b6\u6001")),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=cumulative"\n')))}m.isMDXComponent=!0}}]);