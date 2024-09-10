"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[499289],{15680:(e,a,l)=>{l.d(a,{xA:()=>m,yg:()=>N});var n=l(296540);function t(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function i(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?i(Object(l),!0).forEach((function(a){t(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function r(e,a){if(null==e)return{};var l,n,t=function(e,a){if(null==e)return{};var l,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var g=n.createContext({}),y=function(e){var a=n.useContext(g),l=a;return e&&(l="function"==typeof e?e(a):p(p({},a),e)),l},m=function(e){var a=y(e.components);return n.createElement(g.Provider,{value:a},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var l=e.components,t=e.mdxType,i=e.originalType,g=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),o=y(l),c=t,N=o["".concat(g,".").concat(c)]||o[c]||u[c]||i;return l?n.createElement(N,p(p({ref:a},m),{},{components:l})):n.createElement(N,p({ref:a},m))}));function N(e,a){var l=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=l.length,p=new Array(i);p[0]=c;var r={};for(var g in a)hasOwnProperty.call(a,g)&&(r[g]=a[g]);r.originalType=e,r[o]="string"==typeof e?e:t,p[1]=r;for(var y=2;y<i;y++)p[y]=l[y];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},135635:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>g,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>y});var n=l(58168),t=(l(296540),l(15680));const i={title:"\u5143\u6570\u636e\u7f13\u5b58",language:"zh-CN"},p=void 0,r={unversionedId:"lakehouse/metacache",id:"version-3.0/lakehouse/metacache",title:"\u5143\u6570\u636e\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/metacache.md",sourceDirName:"lakehouse",slug:"/lakehouse/metacache",permalink:"/zh-CN/docs/3.0/lakehouse/metacache",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u5143\u6570\u636e\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u7f13\u5b58",permalink:"/zh-CN/docs/3.0/lakehouse/filecache"},next:{title:"\u5f39\u6027\u8ba1\u7b97\u8282\u70b9",permalink:"/zh-CN/docs/3.0/lakehouse/compute-node"}},g={},y=[{value:"\u7f13\u5b58\u7b56\u7565\u8bf4\u660e",id:"\u7f13\u5b58\u7b56\u7565\u8bf4\u660e",level:2},{value:"\u7f13\u5b58\u7c7b\u578b",id:"\u7f13\u5b58\u7c7b\u578b",level:2},{value:"\u5e93\u3001\u8868\u540d\u79f0\u5217\u8868",id:"\u5e93\u8868\u540d\u79f0\u5217\u8868",level:3},{value:"\u5e93\u3001\u8868\u5bf9\u8c61",id:"\u5e93\u8868\u5bf9\u8c61",level:3},{value:"\u8868 Schema",id:"\u8868-schema",level:3},{value:"Hive Metastore \u8868\u5206\u533a\u5217\u8868",id:"hive-metastore-\u8868\u5206\u533a\u5217\u8868",level:3},{value:"Hive Metastore \u8868\u5206\u533a\u5c5e\u6027",id:"hive-metastore-\u8868\u5206\u533a\u5c5e\u6027",level:3},{value:"Hive Metastore \u8868\u5206\u533a\u6587\u4ef6\u5217\u8868",id:"hive-metastore-\u8868\u5206\u533a\u6587\u4ef6\u5217\u8868",level:3},{value:"Hudi \u8868\u5206\u533a",id:"hudi-\u8868\u5206\u533a",level:3},{value:"Iceberg \u8868\u4fe1\u606f",id:"iceberg-\u8868\u4fe1\u606f",level:3},{value:"Iceberg \u8868 Snapshot",id:"iceberg-\u8868-snapshot",level:3},{value:"\u7f13\u5b58\u5237\u65b0",id:"\u7f13\u5b58\u5237\u65b0",level:2},{value:"\u624b\u52a8\u5237\u65b0",id:"\u624b\u52a8\u5237\u65b0",level:3},{value:"\u5b9a\u65f6\u5237\u65b0",id:"\u5b9a\u65f6\u5237\u65b0",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u9ed8\u8ba4\u884c\u4e3a",id:"\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u5173\u95ed Hive Catalog \u5143\u6570\u636e\u7f13\u5b58",id:"\u5173\u95ed-hive-catalog-\u5143\u6570\u636e\u7f13\u5b58",level:3},{value:"\u7248\u672c\u884c\u4e3a\u53d8\u66f4",id:"\u7248\u672c\u884c\u4e3a\u53d8\u66f4",level:2}],m={toc:y},o="wrapper";function u(e){let{components:a,...l}=e;return(0,t.yg)(o,(0,n.A)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u4e3a\u4e86\u63d0\u5347\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u6027\u80fd\uff0cApache Doris \u4f1a\u5bf9\u5916\u90e8\u6570\u636e\u6e90\u7684",(0,t.yg)("strong",{parentName:"p"},"\u5143\u6570\u636e"),"\u8fdb\u884c\u7f13\u5b58\u3002"),(0,t.yg)("p",null,"\u5143\u6570\u636e\u5305\u62ec\u5e93\u3001\u8868\u3001\u5217\u4fe1\u606f\u3001\u5206\u533a\u4fe1\u606f\u3001\u5feb\u7167\u4fe1\u606f\u3001\u6587\u4ef6\u5217\u540d\u7b49\u3002\xa0"),(0,t.yg)("p",null,"\u672c\u6587\u8be6\u7ec6\u4ecb\u7ecd\u7f13\u5b58\u7684\u5143\u6570\u636e\u7684\u79cd\u7c7b\u3001\u7b56\u7565\u548c\u76f8\u5173\u53c2\u6570\u914d\u7f6e\u3002"),(0,t.yg)("p",null,"\u5173\u4e8e",(0,t.yg)("strong",{parentName:"p"},"\u6570\u636e\u7f13\u5b58"),"\uff0c\u53ef\u53c2\u9605",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/lakehouse/filecache"},"\u6570\u636e\u7f13\u5b58\u6587\u6863"),"\u3002"),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u8be5\u6587\u6863\u9002\u7528\u4e8e 2.1.6 \u4e4b\u540e\u7684\u7248\u672c\u3002")),(0,t.yg)("h2",{id:"\u7f13\u5b58\u7b56\u7565\u8bf4\u660e"},"\u7f13\u5b58\u7b56\u7565\u8bf4\u660e"),(0,t.yg)("p",null,"\u5927\u591a\u6570\u7f13\u5b58\u90fd\u6709\u5982\u4e0b\u4e09\u4e2a\u7b56\u7565\u6307\u6807\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7f13\u5b58\u6240\u80fd\u5bb9\u7eb3\u7684\u6700\u5927\u5bf9\u8c61\u4e2a\u6570\u3002\u5982\u6700\u591a\u7f13\u5b58 1000 \u5f20\u8868\u3002\u5f53\u7f13\u5b58\u6570\u91cf\u8d85\u8fc7\u9608\u503c\u540e\uff0c\u4f1a\u4f7f\u7528 LRU\uff08Least-Recent-Used\uff09\u7b56\u7565\u79fb\u9664\u90e8\u5206\u7f13\u5b58\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7f13\u5b58\u5bf9\u8c61\u5199\u5165\u7f13\u5b58\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u8be5\u5bf9\u8c61\u4f1a\u88ab\u81ea\u52a8\u4ece\u7f13\u5b58\u4e2d\u79fb\u9664\uff0c\u4e0b\u6b21\u8bbf\u95ee\u65f6\uff0c\u4f1a\u91cd\u65b0\u4ece\u6570\u636e\u6e90\u62c9\u53d6\u6700\u65b0\u7684\u4fe1\u606f\u5e76\u66f4\u65b0\u7f13\u5b58\u3002"),(0,t.yg)("p",{parentName:"li"},"\u6bd4\u5982\u7528\u6237\u5728 08:00 \u7b2c\u4e00\u8bbf\u95ee\u8868 A\uff0c\u5e76\u5199\u5165\u7f13\u5b58\u3002\u82e5\u6dd8\u6c70\u65f6\u95f4\u4e3a 4 \u5c0f\u65f6\u3002\u5219\u5728\u6ca1\u6709\u56e0\u5bb9\u91cf\u95ee\u9898\u88ab\u6c70\u6362\u7684\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5728\u4e4b\u540e\u7684 08:00-14:00 \u4e4b\u95f4\uff0c\u90fd\u4f1a\u76f4\u63a5\u8bbf\u95ee\u7f13\u5b58\u4e2d\u7684\u8868 A\u300214:00 \u540e\uff0c\u7f13\u5b58\u88ab\u6dd8\u6c70\u3002\u82e5\u7528\u6237\u518d\u6b21\u8bbf\u95ee\u8868 A\uff0c\u4f1a\u4ece\u6570\u636e\u6e90\u62c9\u53d6\u6700\u65b0\u7684\u4fe1\u606f\u5e76\u66f4\u65b0\u7f13\u5b58\u3002"),(0,t.yg)("p",{parentName:"li"},"\u6b64\u7b56\u7565\u4e3b\u8981\u7528\u4e8e\u81ea\u52a8\u4ece\u7f13\u5b58\u4e2d\u79fb\u9664\u4e0d\u518d\u88ab\u8bbf\u95ee\u7684\u5bf9\u8c61\uff0c\u964d\u4f4e\u7f13\u5b58\u7a7a\u95f4\u5360\u7528\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7f13\u5b58\u5bf9\u8c61\u5199\u5165\u7f13\u5b58\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1\u5237\u65b0\u3002"),(0,t.yg)("p",{parentName:"li"},"\u6bd4\u5982\u7528\u6237\u5728 08:00 \u7b2c\u4e00\u8bbf\u95ee\u8868 A\uff0c\u5e76\u5199\u5165\u7f13\u5b58\u3002\u82e5\u6700\u77ed\u5237\u65b0\u65f6\u95f4\u4e3a 10 \u5206\u949f\u3002\u5219\u5728\u6ca1\u6709\u56e0\u5bb9\u91cf\u95ee\u9898\u88ab\u6c70\u6362\u7684\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5728\u4e4b\u540e\u7684 08:00-8:10 \u4e4b\u95f4\uff0c\u90fd\u4f1a\u76f4\u63a5\u8bbf\u95ee\u7f13\u5b58\u4e2d\u7684\u8868 A\u300208:10\uff0c\u8be5\u7f13\u5b58\u5bf9\u8c61\u4f1a\u88ab\u6807\u8bb0\u4e3a\u3010\u51c6\u5907\u5237\u65b0\u3011\uff0c\u5f53\u7528\u6237\u518d\u6b21\u8bbf\u95ee\u8fd9\u4e2a\u7f13\u5b58\u5bf9\u8c61\u65f6\uff0c\u4ecd\u4f1a\u8fd4\u56de\u5f53\u524d\u5bf9\u8c61\uff0c\u4f46\u4f1a\u540c\u65f6\u89e6\u53d1\u7f13\u5b58\u5237\u65b0\u64cd\u4f5c\u3002\u5047\u8bbe\u7f13\u5b58\u66f4\u65b0\u9700\u8981 1 \u5206\u949f\uff0c\u5219 1 \u5206\u949f\u540e\u518d\u6b21\u8bbf\u95ee\u7f13\u5b58\uff0c\u4f1a\u5f97\u5230\u66f4\u65b0\u540e\u7684\u7f13\u5b58\u5bf9\u8c61\u3002"),(0,t.yg)("p",{parentName:"li"},"\u6ce8\u610f\uff0c\u89e6\u53d1\u7f13\u5b58\u5237\u65b0\u7684\u65f6\u95f4\u662f\u5728\u3010\u8d85\u8fc7\u6700\u77ed\u5237\u65b0\u65f6\u95f4\u540e\uff0c\u7b2c\u4e00\u6b21\u8bbf\u95ee\u8be5\u7f13\u5b58\u5bf9\u8c61\u65f6\u3011\uff0c\u5e76\u4e14\u662f\u5f02\u6b65\u5237\u65b0\u3002\u6240\u4ee5\u6bd4\u5982\u6700\u77ed\u5237\u65b0\u65f6\u95f4\u662f 10 \u5206\u949f\uff0c\u5e76\u4e0d\u610f\u5473\u7740 10 \u5206\u949f\u540e\u4e00\u5b9a\u4f1a\u83b7\u53d6\u5230\u6700\u65b0\u7684\u5bf9\u8c61\u3002"),(0,t.yg)("p",{parentName:"li"},"\u8be5\u7b56\u7565\u6709\u522b\u4e8e\u3010\u6dd8\u6c70\u65f6\u95f4\u3011\uff0c\u4e3b\u8981\u7528\u4e8e\u8c03\u6574\u7f13\u5b58\u7684\u65f6\u6548\u6027\uff0c\u5e76\u4e14\u901a\u8fc7\u5f02\u6b65\u5237\u65b0\u7684\u65b9\u5f0f\u907f\u514d\u7f13\u5b58\u66f4\u65b0\u963b\u585e\u5f53\u524d\u64cd\u4f5c\u3002"))),(0,t.yg)("h2",{id:"\u7f13\u5b58\u7c7b\u578b"},"\u7f13\u5b58\u7c7b\u578b"),(0,t.yg)("h3",{id:"\u5e93\u8868\u540d\u79f0\u5217\u8868"},"\u5e93\u3001\u8868\u540d\u79f0\u5217\u8868"),(0,t.yg)("p",null,"\u5e93\u540d\u79f0\u5217\u8868\uff08Database name list\uff09\u6307\u7684\u662f\u4e00\u4e2a Catalog \u4e0b\u6240\u6709\u5e93\u7684\u540d\u79f0\u7684\u5217\u8868\u3002"),(0,t.yg)("p",null,"\u8868\u540d\u79f0\u5217\u8868\uff08Table name list\uff09\u6307\u7684\u662f\u4e00\u4e2a\u5e93\u4e0b\u6240\u6709\u8868\u7684\u540d\u79f0\u5217\u8868\u3002"),(0,t.yg)("p",null,"\u540d\u79f0\u5217\u8868\u4ec5\u7528\u4e8e\u9700\u8981\u5217\u4e3e\u540d\u79f0\u5f97\u64cd\u4f5c\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," \u8bed\u53e5\u3002"),(0,t.yg)("p",null,"\u6bcf\u4e2a Catalog \u4e0b\u90fd\u4e00\u4e2a\u5e93\u540d\u79f0\u5217\u8868\u7f13\u5b58\u3002\u6bcf\u4e2a\u5e93\u4e0b\u90fd\u6709\u4e00\u4e2a\u8868\u540d\u79f0\u5217\u8868\u7f13\u5b58\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u6bcf\u4e2a\u7f13\u5b58\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u6761\u76ee\u3002\u6240\u4ee5\u6700\u5927\u7f13\u5b58\u6570\u91cf\u4e3a 1\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 86400 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u67e5\u770b\u5230\u6700\u65b0\u7684\u540d\u79f0\u5217\u8868\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"\u5e93\u8868\u5bf9\u8c61"},"\u5e93\u3001\u8868\u5bf9\u8c61"),(0,t.yg)("p",null,"\u7f13\u5b58\u5355\u72ec\u7684\u5e93\u548c\u8868\u5bf9\u8c61\u3002\u4efb\u4f55\u5bf9\u5e93\u3001\u8868\u7684\u8bbf\u95ee\u64cd\u4f5c\uff0c\u5982\u67e5\u8be2\u3001\u5199\u5165\u7b49\uff0c\u90fd\u4f1a\u4ece\u8fd9\u4e2a\u7f13\u5b58\u4e2d\u83b7\u53d6\u5bf9\u5e94\u7684\u5bf9\u8c61\u3002"),(0,t.yg)("p",null,"\u6ce8\u610f\uff0c\u8be5\u7f13\u5b58\u4e2d\u7684\u5bf9\u8c61\u6240\u7ec4\u6210\u7684\u5217\u8868\uff0c\u53ef\u80fd\u4e0e",(0,t.yg)("strong",{parentName:"p"},"\u5e93\u3001\u8868\u540d\u79f0\u5217\u8868"),"\u7f13\u5b58\u4e2d\u7684\u4e0d\u4e00\u81f4\u3002"),(0,t.yg)("p",null,"\u6bd4\u5982\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u547d\u4ee4\uff0c\u4ece\u540d\u79f0\u5217\u8868\u7f13\u5b58\u4e2d\u83b7\u53d6\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"A"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"B"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"C")," \u4e09\u4e2a\u8868\u3002\u5047\u8bbe\u6b64\u65f6\u5916\u90e8\u6570\u636e\u6e90\u589e\u52a0\u4e86\u8868 ",(0,t.yg)("inlineCode",{parentName:"p"},"D"),"\uff0c\u90a3\u4e48 ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT * FROM D")," \u53ef\u4ee5\u8bbf\u95ee\u5230\u8868 ",(0,t.yg)("inlineCode",{parentName:"p"},"D"),"\uff0c\u540c\u65f6\u3010\u8868\u5bf9\u8c61\u3011\u7f13\u5b58\u91cc\u4f1a\u589e\u52a0\u8868 ",(0,t.yg)("inlineCode",{parentName:"p"},"D")," \u5bf9\u8c61\uff0c\u4f46\u3010\u8868\u540d\u79f0\u5217\u8868\u3011\u7f13\u5b58\u4e2d\u53ef\u80fd\u4f9d\u7136\u662f ",(0,t.yg)("inlineCode",{parentName:"p"},"A"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"B"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"C"),"\u3002\u53ea\u6709\u5f53\u3010\u8868\u540d\u79f0\u5217\u8868\u3011\u7f13\u5b58\u5237\u65b0\u540e\uff0c\u624d\u4f1a\u53d8\u6210 ",(0,t.yg)("inlineCode",{parentName:"p"},"A"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"B"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"C"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"D"),"\u3002"),(0,t.yg)("p",null,"\u6bcf\u4e2a Catalog \u4e0b\u90fd\u4e00\u4e2a\u5e93\u540d\u79f0\u5217\u8868\u7f13\u5b58\u3002\u6bcf\u4e2a\u5e93\u4e0b\u90fd\u6709\u4e00\u4e2a\u8868\u540d\u79f0\u5217\u8868\u7f13\u5b58\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_meta_object_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 1000\u3002\u53ef\u4ee5\u6839\u636e\u5355\u4e2a Catalog \u4e0b\u6570\u636e\u5e93\u7684\u6570\u91cf\uff0c\u6216\u5355\u4e2a\u6570\u636e\u5e93\u4e0b\u8868\u7684\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 86400 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u5230\u6700\u65b0\u7684\u5e93\u6216\u8868\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"\u8868-schema"},"\u8868 Schema"),(0,t.yg)("p",null,"\u7f13\u5b58\u8868\u7684 Schema \u4fe1\u606f\uff0c\u5982\u5217\u540d\u7b49\u3002\u8be5\u7f13\u5b58\u4e3b\u8981\u7528\u4e8e\u6309\u9700\u52a0\u8f7d\u88ab\u8bbf\u95ee\u5230\u7684\u8868\u7684 Schema\uff0c\u4ee5\u9632\u6b62\u540c\u6b65\u5927\u91cf\u4e0d\u9700\u8981\u88ab\u8bbf\u95ee\u7684\u8868\u7684 Schema \u800c\u5360\u7528 FE \u7684\u5185\u5b58\u3002"),(0,t.yg)("p",null,"\u8be5\u7f13\u5b58\u7531\u6240\u6709 Catalog \u5171\u4eab\uff0c\u5168\u5c40\u552f\u4e00\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_external_schema_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 10000\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e\u4e00\u4e2a Catalog \u4e0b\u6240\u6709\u8868\u7684\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 86400 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u8bbf\u95ee\u5230\u6700\u65b0\u7684 Schema\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"hive-metastore-\u8868\u5206\u533a\u5217\u8868"},"Hive Metastore \u8868\u5206\u533a\u5217\u8868"),(0,t.yg)("p",null,"\u7528\u4e8e\u7f13\u5b58\u4ece Hive Metastore \u540c\u6b65\u8fc7\u6765\u7684\u8868\u7684\u5206\u533a\u5217\u8868\u3002\u5206\u533a\u5217\u8868\u7528\u4e8e\u67e5\u8be2\u662f\u8fdb\u884c\u5206\u533a\u88c1\u526a\u3002"),(0,t.yg)("p",null,"\u8be5\u7f13\u5b58\uff0c\u6bcf\u4e2a Hive Catalog \u6709\u4e00\u4e2a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_hive_partition_table_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 1000\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e\u4e00\u4e2a Catalog \u4e0b\u6240\u6709\u8868\u7684\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 28800 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u8bbf\u95ee\u5230\u6700\u65b0\u7684\u5206\u533a\u5217\u8868\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"hive-metastore-\u8868\u5206\u533a\u5c5e\u6027"},"Hive Metastore \u8868\u5206\u533a\u5c5e\u6027"),(0,t.yg)("p",null,"\u7528\u4e8e\u7f13\u5b58 Hive \u8868\uff0c\u6bcf\u4e2a\u5206\u533a\u7684\u5c5e\u6027\uff0c\u5982\u6587\u4ef6\u683c\u5f0f\uff0c\u5206\u533a\u6839\u8def\u5f84\u7b49\u3002\u6bcf\u4e2a\u67e5\u8be2\uff0c\u7ecf\u8fc7\u5206\u533a\u88c1\u526a\u5f97\u5230\u8981\u8bbf\u95ee\u7684\u5206\u533a\u5217\u8868\u540e\uff0c\u4f1a\u901a\u8fc7\u8be5\u7f13\u5b58\u83b7\u53d6\u6bcf\u4e2a\u5206\u533a\u7684\u8be6\u7ec6\u5c5e\u6027\u3002"),(0,t.yg)("p",null,"\u8be5\u7f13\u5b58\uff0c\u6bcf\u4e2a Hive Catalog \u6709\u4e00\u4e2a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_hive_partition_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 10000\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e\u4e00\u4e2a Catalog \u4e0b\uff0c\u6240\u9700\u8981\u8bbf\u95ee\u7684\u5206\u533a\u7684\u603b\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 28800 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u8bbf\u95ee\u5230\u6700\u65b0\u7684\u5206\u533a\u5c5e\u6027\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"hive-metastore-\u8868\u5206\u533a\u6587\u4ef6\u5217\u8868"},"Hive Metastore \u8868\u5206\u533a\u6587\u4ef6\u5217\u8868"),(0,t.yg)("p",null,"\u7528\u4e8e\u7f13\u5b58 Hive \u8868\uff0c\u5355\u4e2a\u5206\u533a\u4e0b\u7684\u6587\u4ef6\u5217\u8868\u4fe1\u606f\u3002\u8be5\u7f13\u5b58\u7528\u4e8e\u964d\u4f4e\u6587\u4ef6\u7cfb\u7edf\u7684 List \u64cd\u4f5c\u5e26\u6765\u7684\u5f00\u9500\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_external_file_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 100000\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e\u6240\u9700\u8981\u8bbf\u95ee\u7684\u6587\u4ef6\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u9ed8\u8ba4 28800 \u79d2\u3002\u5982\u679c Catalog \u5c5e\u6027\u4e2d\u8bbe\u7f6e\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"file.meta.cache.ttl-second")," \u5c5e\u6027\u3002\u5219\u4f7f\u7528\u8bbe\u7f6e\u7684\u65f6\u95f4\u3002"),(0,t.yg)("p",{parentName:"li"},"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cHive \u8868\u7684\u6570\u636e\u6587\u4ef6\u4f1a\u9891\u7e41\u53d8\u52a8\uff0c\u5bfc\u81f4\u7f13\u5b58\u65e0\u6cd5\u6ee1\u8db3\u65f6\u6548\u6027\u3002\u53ef\u4ee5\u901a\u8fc7\u5c06\u8be5\u8695\u98df\u8bbe\u7f6e\u4e3a 0\uff0c\u5173\u95ed\u8be5\u7f13\u5b58\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6bcf\u6b21\u90fd\u4f1a\u5b9e\u65f6\u83b7\u53d6\u6587\u4ef6\u5217\u8868\u8fdb\u884c\u67e5\u8be2\uff0c\u6027\u80fd\u53ef\u80fd\u964d\u4f4e\uff0c\u6587\u4ef6\u65f6\u6548\u6027\u63d0\u5347\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u8bbf\u95ee\u5230\u6700\u65b0\u7684\u5206\u533a\u5c5e\u6027\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"hudi-\u8868\u5206\u533a"},"Hudi \u8868\u5206\u533a"),(0,t.yg)("p",null,"\u7528\u4e8e\u7f13\u5b58 Hudi \u8868\u7684\u5206\u533a\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"\u8be5\u7f13\u5b58\uff0c\u6bcf\u4e2a Hudi Catalog \u6709\u4e00\u4e2a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_hive_table_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 1000\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e Hudi \u8868\u7684\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 28800 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u8bbf\u95ee\u5230\u6700\u65b0\u7684 Hudi \u5206\u533a\u5c5e\u6027\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"iceberg-\u8868\u4fe1\u606f"},"Iceberg \u8868\u4fe1\u606f"),(0,t.yg)("p",null,"\u7528\u4e8e\u7f13\u5b58 Iceberg \u8868\u5bf9\u8c61\u3002\u8be5\u5bf9\u8c61\u901a\u8fc7 Iceberg API \u52a0\u8f7d\u5e76\u6784\u5efa\u3002"),(0,t.yg)("p",null,"\u8be5\u7f13\u5b58\uff0c\u6bcf\u4e2a Iceberg Catalog \u6709\u4e00\u4e2a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_hive_table_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 1000\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e Iceberg \u8868\u7684\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 28800 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u8bbf\u95ee\u5230\u6700\u65b0\u7684 Iceberg \u8868\u5c5e\u6027\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h3",{id:"iceberg-\u8868-snapshot"},"Iceberg \u8868 Snapshot"),(0,t.yg)("p",null,"\u7528\u4e8e\u7f13\u5b58 Iceberg \u8868\u7684 Snapshot \u5217\u8868\u3002\u8be5\u5bf9\u8c61\u901a\u8fc7 Iceberg API \u52a0\u8f7d\u5e76\u6784\u5efa\u3002\n\u8be5\u7f13\u5b58\uff0c\u6bcf\u4e2a Iceberg Catalog \u6709\u4e00\u4e2a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u5927\u7f13\u5b58\u6570\u91cf"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"max_hive_table_cache_num")," \u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3a 1000\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e Iceberg \u8868\u7684\u6570\u91cf\uff0c\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6dd8\u6c70\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u56fa\u5b9a 28800 \u79d2\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6700\u77ed\u5237\u65b0\u65f6\u95f4"),(0,t.yg)("p",{parentName:"li"},"\u7531 FE \u914d\u7f6e\u9879 ",(0,t.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," \u63a7\u5236\u3002\u5355\u4f4d\u4e3a\u5206\u949f\u3002\u9ed8\u8ba4 10 \u5206\u949f\u3002\u51cf\u5c11\u8be5\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u5b9e\u65f6\u7684\u5728 Doris \u4e2d\u8bbf\u95ee\u5230\u6700\u65b0\u7684 Iceberg \u8868\u5c5e\u6027\uff0c\u4f46\u4f1a\u589e\u52a0\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u9891\u7387\u3002"))),(0,t.yg)("h2",{id:"\u7f13\u5b58\u5237\u65b0"},"\u7f13\u5b58\u5237\u65b0"),(0,t.yg)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u6bcf\u4e2a\u7f13\u5b58\u5404\u81ea\u7684\u5237\u65b0\u548c\u6dd8\u6c70\u7b56\u7565\u5916\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u6216\u5b9a\u65f6\u7684\u65b9\u5f0f\u76f4\u63a5\u5237\u65b0\u5143\u6570\u636e\u7f13\u5b58\u3002"),(0,t.yg)("h3",{id:"\u624b\u52a8\u5237\u65b0"},"\u624b\u52a8\u5237\u65b0"),(0,t.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"REFRESH")," \u547d\u4ee4\u624b\u52a8\u5237\u65b0\u5143\u6570\u636e\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"REFRESH CATALOG"),(0,t.yg)("p",{parentName:"li"},"\u5237\u65b0\u6307\u5b9a Catalog\u3002"),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");')),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u8be5\u547d\u4ee4\u4f1a\u5237\u65b0\u6307\u5b9a Catalog \u7684\u5e93\u5217\u8868\uff0c\u8868\u5217\u540d\u4ee5\u53ca\u6240\u6709\u7f13\u5b58\u4fe1\u606f\u7b49\u3002"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"invalid_cache")," \u8868\u793a\u662f\u5426\u8981\u5237\u65b0\u5206\u533a\u548c\u6587\u4ef6\u5217\u8868\u7b49\u7f13\u5b58\u3002\u9ed8\u8ba4\u4e3a true\u3002\u5982\u679c\u4e3a false\uff0c\u5219\u53ea\u4f1a\u5237\u65b0 Catalog \u7684\u5e93\u3001\u8868\u5217\u8868\uff0c\u800c\u4e0d\u4f1a\u5237\u65b0\u5206\u533a\u548c\u6587\u4ef6\u5217\u8868\u7b49\u7f13\u5b58\u4fe1\u606f\u3002\u8be5\u53c2\u6570\u9002\u7528\u4e8e\uff0c\u7528\u6237\u53ea\u60f3\u540c\u6b65\u65b0\u589e\u5220\u7684\u5e93\u8868\u4fe1\u606f\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a false\u3002"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"REFRESH DATABASE"),(0,t.yg)("p",{parentName:"li"},"\u5237\u65b0\u6307\u5b9a Database\u3002"),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},'REFRESH DATABASE [ctl.]db1 PROPERTIES("invalid_cache" = "true");')),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u8be5\u547d\u4ee4\u4f1a\u5237\u65b0\u6307\u5b9a Database \u7684\u8868\u5217\u540d\u4ee5\u53ca Database \u4e0b\u7684\u6240\u6709\u7f13\u5b58\u4fe1\u606f\u7b49\u3002"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"invalid_cache")," \u5c5e\u6027\u542b\u4e49\u540c\u4e0a\u3002\u9ed8\u8ba4\u4e3a true\u3002\u5982\u679c\u4e3a false\uff0c\u5219\u53ea\u4f1a\u5237\u65b0 Database \u7684\u8868\u5217\u8868\uff0c\u800c\u4e0d\u4f1a\u5237\u65b0\u7f13\u5b58\u4fe1\u606f\u3002\u8be5\u53c2\u6570\u9002\u7528\u4e8e\uff0c\u7528\u6237\u53ea\u60f3\u540c\u6b65\u65b0\u589e\u5220\u7684\u8868\u4fe1\u606f\u65f6\u3002"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"REFRESH TABLE"),(0,t.yg)("p",{parentName:"li"},"\u5237\u65b0\u6307\u5b9a Table\u3002"),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"REFRESH TABLE [ctl.][db.]tbl1;")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u8be5\u547d\u4ee4\u4f1a\u5237\u65b0\u6307\u5b9a Table \u4e0b\u7684\u6240\u6709\u7f13\u5b58\u4fe1\u606f\u7b49\u3002")))),(0,t.yg)("h3",{id:"\u5b9a\u65f6\u5237\u65b0"},"\u5b9a\u65f6\u5237\u65b0"),(0,t.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u521b\u5efa Catalog \u65f6\uff0c\u8bbe\u7f6e\u8be5 Catalog \u7684\u5b9a\u65f6\u5237\u65b0\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'metadata_refresh_interval_sec' = '600'\n);\n")),(0,t.yg)("p",null,"\u5728\u4e0a\u4f8b\u4e2d\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"metadata_refresh_interval_sec")," \u8868\u793a\u6bcf 600 \u79d2\u5237\u65b0\u4e00\u6b21 Catalog\u3002\u76f8\u5f53\u4e8e\u6bcf\u9694 600 \u79d2\uff0c\u81ea\u52a8\u6267\u884c\u4e00\u6b21\uff1a"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");')),(0,t.yg)("p",null,"\u5b9a\u65f6\u5237\u65b0\u95f4\u9694\u4e0d\u5f97\u5c0f\u4e8e 5 \u79d2\u3002"),(0,t.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,t.yg)("p",null,"\u7f13\u5b58\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u5143\u6570\u636e\u7684\u8bbf\u95ee\u6027\u80fd\uff0c\u907f\u514d\u9891\u7e41\u7684\u8fdc\u7a0b\u8bbf\u95ee\u5143\u6570\u636e\u5bfc\u81f4\u6027\u80fd\u6296\u52a8\u6216\u8005\u5bf9\u5143\u6570\u636e\u670d\u52a1\u9020\u6210\u538b\u529b\u3002\u4f46\u540c\u65f6\uff0c\u7f13\u5b58\u4f1a\u964d\u4f4e\u6570\u636e\u7684\u65f6\u6548\u6027\u3002\u6bd4\u5982\u7f13\u5b58\u5237\u65b0\u65f6\u95f4\u662f 10 \u5206\u949f\uff0c\u5219\u5728\u5341\u5206\u949f\u5185\uff0c\u53ea\u80fd\u8bfb\u5230\u7f13\u5b58\u7684\u5143\u6570\u636e\u3002\u56e0\u6b64\uff0c\u9700\u8981\u6839\u636e\u60c5\u51b5\uff0c\u5408\u7406\u7684\u8bbe\u7f6e\u7f13\u5b58\u3002"),(0,t.yg)("h3",{id:"\u9ed8\u8ba4\u884c\u4e3a"},"\u9ed8\u8ba4\u884c\u4e3a"),(0,t.yg)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\uff0c\u9ed8\u8ba4\u53c2\u6570\u914d\u7f6e\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u53ef\u80fd\u5173\u6ce8\u7684\u7f13\u5b58\u884c\u4e3a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5916\u90e8\u6570\u636e\u6e90\u65b0\u589e\u5e93\u3001\u8868\u540e\uff0c\u5728 Doris \u4e2d\u53ef\u4ee5\u901a\u8fc7 SELECT \u5b9e\u65f6\u67e5\u8be2\u5230\u3002\u4f46 SHOW DATABASES \u548c SHOW TABLES \u53ef\u80fd\u770b\u4e0d\u5230\uff0c\u9700\u8981\u624b\u52a8\u5237\u65b0\u7f13\u5b58\uff0c\u6216\u6700\u591a\u7b49\u5f85 10 \u5206\u949f\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5916\u90e8\u6570\u636e\u6e90\u65b0\u589e\u5206\u533a\uff0c\u9700\u8981\u624b\u52a8\u5237\u65b0\u7f13\u5b58\uff0c\u6216\u6700\u591a\u7b49\u5f85 10 \u5206\u949f\u540e\uff0c\u53ef\u4ee5\u67e5\u8be2\u5230\u65b0\u5206\u533a\u7684\u6570\u636e\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5206\u533a\u6570\u636e\u6587\u4ef6\u53d8\u52a8\uff0c\u9700\u8981\u624b\u52a8\u5237\u65b0\u7f13\u5b58\uff0c\u6216\u6700\u591a\u7b49\u5f85 10 \u5206\u949f\u540e\uff0c\u53ef\u4ee5\u67e5\u8be2\u5230\u65b0\u5206\u533a\u7684\u6570\u636e\u3002")),(0,t.yg)("h3",{id:"\u5173\u95ed-hive-catalog-\u5143\u6570\u636e\u7f13\u5b58"},"\u5173\u95ed Hive Catalog \u5143\u6570\u636e\u7f13\u5b58"),(0,t.yg)("p",null,"\u9488\u5bf9 Hive Catalog\uff0c\u5982\u679c\u60f3\u5173\u95ed\u7f13\u5b58\u6765\u67e5\u8be2\u5230\u5b9e\u65f6\u66f4\u65b0\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'-- fe.conf\nmax_hive_partition_table_cache_num=0  // \u5173\u95ed\u5206\u533a\u5217\u8868\u7f13\u5b58\nmax_external_file_cache_num=0    // \u5173\u95ed\u6587\u4ef6\u5217\u8868\u7f13\u5b58\n\n-- Catalog property\n"file.meta.cache.ttl-second" = "0" // \u9488\u5bf9\u67d0\u4e2a Catalog\uff0c\u5173\u95ed\u6587\u4ef6\u5217\u8868\u7f13\u5b58\n')),(0,t.yg)("p",null,"\u8bbe\u7f6e\u4ee5\u4e0a\u53c2\u6570\u540e\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5916\u90e8\u6570\u636e\u6e90\u65b0\u589e\u5206\u533a\u53ef\u4ee5\u5b9e\u65f6\u67e5\u8be2\u5230\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5206\u533a\u6570\u636e\u6587\u4ef6\u53d8\u52a8\u53ef\u4ee5\u5b9e\u65f6\u67e5\u8be2\u5230\u3002")),(0,t.yg)("p",null,"\u4f46\u4f1a\u589e\u52a0\u5916\u90e8\u6e90\u6570\u636e\uff08\u5982 Hive Metastore \u548c HDFS\uff09\u7684\u8bbf\u95ee\u538b\u529b\uff0c\u53ef\u80fd\u5bfc\u81f4\u5143\u6570\u636e\u8bbf\u95ee\u5ef6\u8fdf\u4e0d\u7a33\u5b9a\u7b49\u73b0\u8c61\u3002"),(0,t.yg)("h2",{id:"\u7248\u672c\u884c\u4e3a\u53d8\u66f4"},"\u7248\u672c\u884c\u4e3a\u53d8\u66f4"),(0,t.yg)("p",null,"\u5728 2.1.5 \u7248\u672c\u4e2d\uff0cCatalog \u5c5e\u6027\u4e2d\u589e\u52a0\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"use_meta_cache")," \u5c5e\u6027\uff0c\u9ed8\u8ba4\u4e3a false\u3002"),(0,t.yg)("admonition",{type:"warning"},(0,t.yg)("p",{parentName:"admonition"},"\u4e0d\u8981\u5728 2.1.6 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"use_meta_cache")," \u8bbe\u7f6e\u4e3a true\u3002")),(0,t.yg)("p",null,"2.1.6 \u7248\u672c\u4e2d\uff0c\u65b0\u5efa\u7684 Catalog\uff0c\u8be5\u5c5e\u6027\u9ed8\u8ba4\u4fee\u6539\u4e3a true\uff0c\u4ee5\u5bf9\u5e94\u672c\u6587\u6863\u63cf\u8ff0\u7684\u7f13\u5b58\u884c\u4e3a\u3002\u5efa\u8bae\u7528\u6237\u5347\u7ea7\u5230 2.1.6 \u7248\u672c\u540e\uff0c\u91cd\u5efa\u5df2\u6709\u7684 Catalog\uff0c\u4ee5\u4fbf\u8ba9\u9ed8\u8ba4\u884c\u4e3a\u548c\u672c\u6587\u6863\u63cf\u8ff0\u4e00\u81f4\u3002"))}u.isMDXComponent=!0}}]);