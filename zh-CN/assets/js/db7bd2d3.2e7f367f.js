"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[604111],{15680:(e,a,r)=>{r.d(a,{xA:()=>d,yg:()=>b});var n=r(296540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function m(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?m(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},m=Object.keys(e);for(n=0;n<m.length;n++)r=m[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)r=m[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),o=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},d=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,m=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),y=o(r),u=t,b=y["".concat(i,".").concat(u)]||y[u]||s[u]||m;return r?n.createElement(b,l(l({ref:a},d),{},{components:r})):n.createElement(b,l({ref:a},d))}));function b(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var m=r.length,l=new Array(m);l[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[y]="string"==typeof e?e:t,l[1]=c;for(var o=2;o<m;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},332410:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>m,metadata:()=>c,toc:()=>o});var n=r(58168),t=(r(296540),r(15680));const m={title:"\u67e5\u8be2\u62a5\u9519 Memory Tracker Limit Exceeded",language:"zh-CN"},l=void 0,c={unversionedId:"admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",id:"version-2.1/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",title:"\u67e5\u8be2\u62a5\u9519 Memory Tracker Limit Exceeded",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u67e5\u8be2\u62a5\u9519 Memory Tracker Limit Exceeded",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2\u62a5\u9519 Process Memory Not Enough",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded"},next:{title:"OOM Killer Crash \u5206\u6790",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/oom-crash-analysis"}},i={},o=[{value:"\u9519\u8bef\u4fe1\u606f\u89e3\u6790",id:"\u9519\u8bef\u4fe1\u606f\u89e3\u6790",level:2},{value:"\u5355\u6b21\u6267\u884c\u5185\u5b58\u9650\u5236\u548c\u5185\u5b58\u8d85\u53d1",id:"\u5355\u6b21\u6267\u884c\u5185\u5b58\u9650\u5236\u548c\u5185\u5b58\u8d85\u53d1",level:2},{value:"\u67e5\u8be2\u5185\u5b58\u5206\u6790",id:"\u67e5\u8be2\u5185\u5b58\u5206\u6790",level:2}],d={toc:o},y="wrapper";function s(e){let{components:a,...r}=e;return(0,t.yg)(y,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u5f53\u67e5\u8be2\u6216\u5bfc\u5165\u7684\u62a5\u9519\u4fe1\u606f\u4e2d\u51fa\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"MEM_LIMIT_EXCEEDED")," \u4e14\u5305\u542b ",(0,t.yg)("inlineCode",{parentName:"p"},"memory tracker limit exceeded")," \u65f6\uff0c\u8bf4\u660e\u4efb\u52a1\u8d85\u8fc7\u5355\u6b21\u6267\u884c\u5185\u5b58\u9650\u5236\u3002"),(0,t.yg)("h2",{id:"\u9519\u8bef\u4fe1\u606f\u89e3\u6790"},"\u9519\u8bef\u4fe1\u606f\u89e3\u6790"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED]PreCatch error code:11, [E11] Allocator mem tracker check failed, [MEM_LIMIT_EXCEEDED]failed alloc size 1.03 MB, memory tracker limit exceeded, tracker label:Query#Id=f78208b15e064527-a84c5c0b04c04fcf, type:query, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB. backend 10.16.10.8, process memory used 2.65 GB. exec node:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>, can `set exec_mem_limit=8G` to change limit, details see be.INFO.\n")),(0,t.yg)("p",null,"\u9519\u8bef\u4fe1\u606f\u5206\u4e3a\u4e24\u90e8\u5206\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"failed alloc size 1.03 MB, memory tracker limit exceeded, tracker label:Query#Id=f78208b15e064527-a84c5c0b04c04fcf, type:query, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB"),"\uff1a\u5f53\u524d\u6b63\u5728\u6267\u884c Query ",(0,t.yg)("inlineCode",{parentName:"p"},"f78208b15e064527-a84c5c0b04c04fcf")," \u5728\u5c1d\u8bd5\u7533\u8bf7 1.03 MB \u5185\u5b58\u7684\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u67e5\u8be2\u8d85\u8fc7\u5355\u6b21\u6267\u884c\u7684\u5185\u5b58\u4e0a\u9650\uff0c\u67e5\u8be2\u5185\u5b58\u4e0a\u9650\u662f 100 MB\uff08Session Variables \u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit"),"\uff09\uff0c\u5f53\u524d\u5df2\u7ecf\u4f7f\u7528 99.25 MB\uff0c\u5185\u5b58\u5cf0\u503c\u662f 99.29 MB\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"backend 10.16.10.8, process memory used 2.65 GB. exec node:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>, can set exec_mem_limit=8G to change limit, details see be.INFO."),"\uff1a\u672c\u6b21\u5185\u5b58\u7533\u8bf7\u7684\u4f4d\u7f6e\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"VHASH_JOIN_NODE (id=4)"),"\uff0c\u5e76\u63d0\u793a\u53ef\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"set exec_mem_limit")," \u6765\u8c03\u9ad8\u5355\u6b21\u67e5\u8be2\u7684\u5185\u5b58\u4e0a\u9650\u3002"))),(0,t.yg)("h2",{id:"\u5355\u6b21\u6267\u884c\u5185\u5b58\u9650\u5236\u548c\u5185\u5b58\u8d85\u53d1"},"\u5355\u6b21\u6267\u884c\u5185\u5b58\u9650\u5236\u548c\u5185\u5b58\u8d85\u53d1"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"show variables;")," \u53ef\u4ee5\u67e5\u770b Doris Session Veriable\uff0c\u5176\u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," \u662f\u5355\u6b21\u67e5\u8be2\u548c\u5bfc\u5165\u7684\u6267\u884c\u5185\u5b58\u9650\u5236\uff0c\u4f46\u4ece Doris 1.2 \u5f00\u59cb\u652f\u6301\u67e5\u8be2\u5185\u5b58\u8d85\u53d1 (overcommit)\uff0c\u65e8\u5728\u5141\u8bb8\u67e5\u8be2\u8bbe\u7f6e\u66f4\u7075\u6d3b\u7684\u5185\u5b58\u9650\u5236\uff0c\u5185\u5b58\u5145\u8db3\u65f6\u5373\u4f7f\u67e5\u8be2\u5185\u5b58\u8d85\u8fc7\u4e0a\u9650\u4e5f\u4e0d\u4f1a\u88ab Cancel\uff0c\u6240\u4ee5\u901a\u5e38\u7528\u6237\u65e0\u9700\u5173\u6ce8\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u3002\u76f4\u5230\u5185\u5b58\u4e0d\u8db3\u65f6\uff0c\u67e5\u8be2\u4f1a\u5728\u5c1d\u8bd5\u5206\u914d\u65b0\u5185\u5b58\u65f6\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff0c\u6b64\u65f6\u4f1a\u57fa\u4e8e\u4e00\u5b9a\u89c4\u5219\u4f18\u5148 Cancel ",(0,t.yg)("inlineCode",{parentName:"p"},"mem_used")," \u4e0e ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," \u6bd4\u503c\u5927\u7684 Query\u3002\u5982\u679c\u7b49\u5f85\u8fc7\u7a0b\u4e2d\u5185\u5b58\u91ca\u653e\u7684\u5927\u5c0f\u6ee1\u8db3\u9700\u6c42\uff0c\u67e5\u8be2\u5c06\u7ee7\u7eed\u6267\u884c\uff0c\u5426\u5219\u5c06\u629b\u51fa\u5f02\u5e38\u5e76\u7ec8\u6b62\u67e5\u8be2\u3002"),(0,t.yg)("p",null,"\u5982\u679c\u5e0c\u671b\u5173\u95ed\u67e5\u8be2\u5185\u5b58\u8d85\u53d1\uff0c\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/config/be-config"},"BE \u914d\u7f6e\u9879"),"\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/be.conf")," \u4e2d\u589e\u52a0 ",(0,t.yg)("inlineCode",{parentName:"p"},"enable_query_memory_overcommit=false"),"\uff0c\u6b64\u65f6\u5355\u6b21\u67e5\u8be2\u548c\u5bfc\u5165\u7684\u5185\u5b58\u8d85\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," \u5373\u4f1a\u88ab Cancel\u3002\u5982\u679c\u4f60\u5e0c\u671b\u907f\u514d\u5927\u67e5\u8be2\u5bf9\u96c6\u7fa4\u7a33\u5b9a\u6027\u9020\u6210\u7684\u8d1f\u9762\u5f71\u54cd\uff0c\u6216\u8005\u5e0c\u671b\u51c6\u786e\u63a7\u5236\u96c6\u7fa4\u4e0a\u7684\u4efb\u52a1\u6267\u884c\u6765\u4fdd\u8bc1\u8db3\u591f\u7684\u7a33\u5b9a\u6027\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u5173\u95ed\u67e5\u8be2\u5185\u5b58\u8d85\u53d1\u3002"),(0,t.yg)("h2",{id:"\u67e5\u8be2\u5185\u5b58\u5206\u6790"},"\u67e5\u8be2\u5185\u5b58\u5206\u6790"),(0,t.yg)("p",null,"\u5982\u679c\u9700\u8981\u5206\u6790\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/query-memory-analysis"},"\u67e5\u8be2\u5185\u5b58\u5206\u6790"),"\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"set enable_profile=true")," \u5f00\u542f Query Profile \u540e\uff0c\u5728\u4efb\u52a1\u8d85\u8fc7\u5355\u6b21\u6267\u884c\u7684\u5185\u5b58\u4e0a\u9650\u65f6\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO")," \u5c06\u6253\u5370\u67e5\u8be2\u6b63\u5728\u7533\u8bf7\u5185\u5b58\u7684\u8c03\u7528\u6808\uff0c\u5e76\u53ef\u4ee5\u770b\u5230\u67e5\u8be2\u6bcf\u4e2a\u7b97\u5b50\u5f53\u524d\u4f7f\u7528\u7684\u5185\u5b58\u548c\u5cf0\u503c\uff0c\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis"},"\u5185\u5b58\u65e5\u5fd7\u5206\u6790")," \u5206\u6790 ",(0,t.yg)("inlineCode",{parentName:"p"},"Process Memory Summary")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary"),"\uff0c\u5e2e\u52a9\u786e\u8ba4\u5f53\u524d\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u662f\u5426\u7b26\u5408\u9884\u671f\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"Allocator mem tracker check failed, [MEM_LIMIT_EXCEEDED]failed alloc size 32.00 MB, memory tracker limit exceeded, tracker label:Query#I\nd=41363cb6ba734ad5-bc8720bdf9b3090d, type:query, limit 100.00 MB, peak used 75.32 MB, current used 72.62 MB. backend 10.16.10.8, process memory used 2.33 GB. exec node:<>, can `set exec_mem_limit=8G`\n to change limit, details see be.INFO.\nProcess Memory Summary:\n    os physical memory 375.81 GB. process memory used 2.33 GB(= 2.60 GB[vm/rss] - 280.53 MB[tc/jemalloc_cache] + 0[reserved] + 0B[waiting_refresh]), limit 338.23 GB, soft limit 304.41 GB. sys availab\nle memory 337.33 GB(= 337.33 GB[proc/available] - 0[reserved] - 0B[waiting_refresh]), low water mark 6.40 GB, warning water mark 12.80 GB.\nMemory Tracker Summary:    MemTrackerLimiter Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Type=query, Limit=100.00 MB(104857600 B), Used=72.62 MB(76146688 B), Peak=75.32 MB(78981248 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=122.00 B(122 B), Peak=122.00 B(122 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=384.00 B(384 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=384.00 B(384 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=21.73 MB(22790276 B), Peak=21.73 MB(22790276 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=2.23 MB(2342912 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=2.23 MB(2342912 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=24.03 MB(25201284 B), Peak=24.03 MB(25201284 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=1.08 MB(1130496 B), Peak=7.17 MB(7520256 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=1.08 MB(1130496 B), Peak=7.17 MB(7520256 B)\n")))}s.isMDXComponent=!0}}]);