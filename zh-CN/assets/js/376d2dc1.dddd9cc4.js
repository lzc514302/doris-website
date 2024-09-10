"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[865217],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>c});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},y=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,c=g["".concat(i,".").concat(m)]||g[m]||s[m]||l;return n?r.createElement(c,p(p({ref:t},y),{},{components:n})):r.createElement(c,p({ref:t},y))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[g]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},562512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const l={title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",language:"zh-CN"},p=void 0,o={unversionedId:"query/high-concurrent-point-query",id:"query/high-concurrent-point-query",title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query/high-concurrent-point-query.md",sourceDirName:"query",slug:"/query/high-concurrent-point-query",permalink:"/zh-CN/docs/dev/query/high-concurrent-point-query",draft:!1,tags:[],version:"current",frontMatter:{title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",language:"zh-CN"},sidebar:"docs",previous:{title:"HLL \u8fd1\u4f3c\u53bb\u91cd",permalink:"/zh-CN/docs/dev/query/duplicate/using-hll"},next:{title:"TOPN \u67e5\u8be2\u4f18\u5316",permalink:"/zh-CN/docs/dev/query/topn-query"}},i={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u884c\u5b58",id:"\u884c\u5b58",level:2},{value:"\u5728 Unique \u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316",id:"\u5728-unique-\u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316",level:2},{value:"\u4f7f\u7528 <code>PreparedStatement</code>",id:"\u4f7f\u7528-preparedstatement",level:2},{value:"\u5f00\u542f\u884c\u7f13\u5b58",id:"\u5f00\u542f\u884c\u7f13\u5b58",level:2},{value:"\u6027\u80fd\u4f18\u5316",id:"\u6027\u80fd\u4f18\u5316",level:2},{value:"Q&amp;A",id:"qa",level:2}],y={toc:u},g="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u9ad8\u5e76\u53d1\u70b9\u67e5\u529f\u80fd\u4e3a Doris 2.0 \u7248\u672c\u91cd\u5927\u6027\u80fd\u63d0\u5347")),(0,a.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.yg)("p",null,"Doris \u57fa\u4e8e\u5217\u5b58\u683c\u5f0f\u5f15\u64ce\u6784\u5efa\uff0c\u5728\u9ad8\u5e76\u53d1\u670d\u52a1\u573a\u666f\u4e2d\uff0c\u7528\u6237\u603b\u662f\u5e0c\u671b\u4ece\u7cfb\u7edf\u4e2d\u83b7\u53d6\u6574\u884c\u6570\u636e\u3002\u4f46\u662f\uff0c\u5f53\u8868\u5bbd\u65f6\uff0c\u5217\u5b58\u683c\u5f0f\u5c06\u5927\u5927\u653e\u5927\u968f\u673a\u8bfb\u53d6 IO\u3002Doris \u67e5\u8be2\u5f15\u64ce\u548c\u8ba1\u5212\u5bf9\u4e8e\u67d0\u4e9b\u7b80\u5355\u7684\u67e5\u8be2\uff08\u5982\u70b9\u67e5\u8be2\uff09\u6765\u8bf4\u592a\u91cd\u4e86\u3002\u9700\u8981\u4e00\u4e2a\u5728 FE \u7684\u67e5\u8be2\u89c4\u5212\u4e2d\u89c4\u5212\u77ed\u8def\u5f84\u6765\u5904\u7406\u8fd9\u6837\u7684\u67e5\u8be2\u3002FE \u662f SQL \u67e5\u8be2\u7684\u8bbf\u95ee\u5c42\u670d\u52a1\uff0c\u4f7f\u7528 Java \u7f16\u5199\uff0c\u5206\u6790\u548c\u89e3\u6790 SQL \u4e5f\u4f1a\u5bfc\u81f4\u9ad8\u5e76\u53d1\u67e5\u8be2\u7684\u9ad8 CPU \u5f00\u9500\u3002\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u4eec\u5728 Doris \u4e2d\u5f15\u5165\u4e86\u884c\u5b58\u3001\u77ed\u67e5\u8be2\u8def\u5f84\u3001PreparedStatement \u6765\u89e3\u51b3\u4e0a\u8bc9\u95ee\u9898\uff0c\u4e0b\u9762\u662f\u5f00\u542f\u8fd9\u4e9b\u4f18\u5316\u7684\u6307\u5357\u3002"),(0,a.yg)("h2",{id:"\u884c\u5b58"},"\u884c\u5b58"),(0,a.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 Olap \u8868\u4e2d\u5f00\u542f\u884c\u5b58\u6a21\u5f0f\uff0c\u4f46\u662f\u9700\u8981\u989d\u5916\u7684\u7a7a\u95f4\u6765\u5b58\u50a8\u884c\u5b58\u3002\u76ee\u524d\u7684\u884c\u5b58\u5b9e\u73b0\u662f\u5c06\u884c\u5b58\u7f16\u7801\u540e\u5b58\u5728\u5355\u72ec\u7684\u4e00\u5217\u4e2d\uff0c\u8fd9\u6837\u505a\u662f\u7528\u4e8e\u7b80\u5316\u884c\u5b58\u7684\u5b9e\u73b0\u3002\u884c\u5b58\u6a21\u5f0f\u4ec5\u652f\u6301\u5728\u5efa\u8868\u7684\u65f6\u5019\u5f00\u542f\uff0c\u9700\u8981\u5728\u5efa\u8868\u8bed\u53e5\u7684 property \u4e2d\u6307\u5b9a\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,a.yg)("h2",{id:"\u5728-unique-\u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316"},"\u5728 Unique \u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316"),(0,a.yg)("p",null,"\u4e0a\u8ff0\u7684\u884c\u5b58\u7528\u4e8e\u5728 Unique \u6a21\u578b\u4e0b\u5f00\u542f Merge-On-Write \u7b56\u7565\u662f\u51cf\u5c11\u70b9\u67e5\u65f6\u7684 IO \u5f00\u9500\u3002\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"enable_unique_key_merge_on_write"),"\u4e0e",(0,a.yg)("inlineCode",{parentName:"p"},"store_row_column"),"\u5728\u521b\u5efa Unique \u8868\u5f00\u542f\u65f6\uff0c\u5bf9\u4e8e\u4e3b\u952e\u7684\u70b9\u67e5\u4f1a\u8d70\u77ed\u8def\u5f84\u6765\u5bf9 SQL \u6267\u884c\u8fdb\u884c\u4f18\u5316\uff0c\u4ec5\u9700\u8981\u6267\u884c\u4e00\u6b21 RPC \u5373\u53ef\u6267\u884c\u5b8c\u6210\u67e5\u8be2\u3002\u4e0b\u9762\u662f\u70b9\u67e5\u7ed3\u5408\u884c\u5b58\u5728 \u5728 Unique \u6a21\u578b\u4e0b\u5f00\u542f Merge-On-Write \u7b56\u7565\u7684\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `tbl_point_query` (\n    `key` int(11) NULL,\n    `v1` decimal(27, 9) NULL,\n    `v2` varchar(30) NULL,\n    `v3` varchar(30) NULL,\n    `v4` date NULL,\n    `v5` datetime NULL,\n    `v6` float NULL,\n    `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key`) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1",\n    "enable_unique_key_merge_on_write" = "true",\n    "light_schema_change" = "true",\n    "store_row_column" = "true"\n);\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"enable_unique_key_merge_on_write"),"\u5e94\u8be5\u88ab\u5f00\u542f\uff0c\u5b58\u50a8\u5f15\u64ce\u9700\u8981\u6839\u636e\u4e3b\u952e\u6765\u5feb\u901f\u70b9\u67e5")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5f53\u6761\u4ef6\u53ea\u5305\u542b\u4e3b\u952e\u65f6\uff0c\u5982",(0,a.yg)("inlineCode",{parentName:"p"},"select * from tbl_point_query where key = 123"),"\uff0c\u7c7b\u4f3c\u7684\u67e5\u8be2\u4f1a\u8d70\u77ed\u8def\u5f84\u6765\u4f18\u5316\u67e5\u8be2")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"light_schema_change"),"\u5e94\u8be5\u88ab\u5f00\u542f\uff0c\u56e0\u4e3a\u4e3b\u952e\u70b9\u67e5\u7684\u4f18\u5316\u4f9d\u8d56\u4e86\u8f7b\u91cf\u7ea7 Schema Change \u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"column unique id"),"\u6765\u5b9a\u4f4d\u5217")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u53ea\u652f\u6301\u5355\u8868 key \u5217\u7b49\u503c\u67e5\u8be2\u4e0d\u652f\u6301 join\u3001\u5d4c\u5957\u5b50\u67e5\u8be2\uff0c ",(0,a.yg)("strong",{parentName:"p"},"where \u6761\u4ef6\u91cc\u9700\u8981\u6709\u4e14\u4ec5\u6709 key \u5217\u7684\u7b49\u503c"),"\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e00\u79cd key value \u67e5\u8be2")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5f00\u542f\u884c\u5b58\u4f1a\u5bfc\u81f4\u7a7a\u95f4\u81a8\u80c0\uff0c\u5360\u7528\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u5982\u679c\u53ea\u9700\u8981\u67e5\u8be2\u90e8\u5206\u5217\uff0c\u5728Doris 2.1\u540e\u5efa\u8bae\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},'"row_store_columns"="key,v1,v2"')," \u7c7b\u4f3c\u7684\u65b9\u5f0f\u6307\u5b9a\u90e8\u4efd\u5217\u4f5c\u4e3a\u884c\u5b58\uff0c\u67e5\u8be2\u7684\u65f6\u5019\u53ea\u67e5\u8be2\u8fd9\u90e8\u4efd\u5217\uff0c\u4f8b\u5982"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT key, v1, v2 FROM tbl_point_query WHERE key = 1\n")),(0,a.yg)("h2",{id:"\u4f7f\u7528-preparedstatement"},"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"h2"},"PreparedStatement")),(0,a.yg)("p",null,"\u4e3a\u4e86\u51cf\u5c11 SQL \u89e3\u6790\u548c\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u5f00\u9500\uff0c\u6211\u4eec\u5728 FE \u7aef\u63d0\u4f9b\u4e86\u4e0e MySQL \u534f\u8bae\u5b8c\u5168\u517c\u5bb9\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"PreparedStatement"),"\u7279\u6027\uff08\u76ee\u524d\u53ea\u652f\u6301\u4e3b\u952e\u70b9\u67e5\uff09\u3002\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"PreparedStatement"),"\u5728 FE \u5f00\u542f\uff0cSQL \u548c\u5176\u8868\u8fbe\u5f0f\u5c06\u88ab\u63d0\u524d\u8ba1\u7b97\u5e76\u7f13\u5b58\u5230 Session \u7ea7\u522b\u7684\u5185\u5b58\u7f13\u5b58\u4e2d\uff0c\u540e\u7eed\u7684\u67e5\u8be2\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\u5bf9\u8c61\u5373\u53ef\u3002\u5f53 CPU \u6210\u4e3a\u4e3b\u952e\u70b9\u67e5\u7684\u74f6\u9888\uff0c\u5728\u5f00\u542f ",(0,a.yg)("inlineCode",{parentName:"p"},"PreparedStatement")," \u540e\uff0c\u5c06\u4f1a\u6709 4 \u500d + \u7684\u6027\u80fd\u63d0\u5347\u3002\u4e0b\u9762\u662f\u5728 JDBC \u4e2d\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"PreparedStatement")," \u7684\u4f8b\u5b50"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e JDBC url \u5e76\u5728 Server \u7aef\u5f00\u542f prepared statement")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/ycsb?useServerPrepStmts=true\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"PreparedStatement"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// use `?` for placement holders, readStatement should be reused\nPreparedStatement readStatement = conn.prepareStatement("select * from tbl_point_query where key = ?");\n...\nreadStatement.setInt(1,1234);\nResultSet resultSet = readStatement.executeQuery();\n...\nreadStatement.setInt(1,1235);\nresultSet = readStatement.executeQuery();\n...\n')),(0,a.yg)("h2",{id:"\u5f00\u542f\u884c\u7f13\u5b58"},"\u5f00\u542f\u884c\u7f13\u5b58"),(0,a.yg)("p",null,"Doris \u4e2d\u6709\u9488\u5bf9 Page \u7ea7\u522b\u7684 Cache\uff0c\u6bcf\u4e2a Page \u4e2d\u5b58\u7684\u662f\u67d0\u4e00\u5217\u7684\u6570\u636e\uff0c\u6240\u4ee5 Page cache \u662f\u9488\u5bf9\u5217\u7684\u7f13\u5b58\uff0c\u5bf9\u4e8e\u524d\u9762\u63d0\u5230\u7684\u884c\u5b58\uff0c\u4e00\u884c\u91cc\u5305\u62ec\u4e86\u591a\u5217\u6570\u636e\uff0c\u7f13\u5b58\u53ef\u80fd\u88ab\u5927\u67e5\u8be2\u7ed9\u5237\u6389\uff0c\u4e3a\u4e86\u589e\u52a0\u884c\u7f13\u5b58\u547d\u4e2d\u7387\uff0c\u5355\u72ec\u5f15\u5165\u4e86\u884c\u5b58\u7f13\u5b58\uff0c\u884c\u7f13\u5b58\u590d\u7528\u4e86 Doris \u4e2d\u7684 LRU Cache \u673a\u5236\u6765\u4fdd\u969c\u5185\u5b58\u7684\u4f7f\u7528\uff0c\u901a\u8fc7\u6307\u5b9a\u4e0b\u9762\u7684\u7684 BE \u914d\u7f6e\u6765\u5f00\u542f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"disable_storage_row_cache"),"\u662f\u5426\u5f00\u542f\u884c\u7f13\u5b58\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"row_cache_mem_limit"),"\u6307\u5b9a Row cache \u5360\u7528\u5185\u5b58\u7684\u767e\u5206\u6bd4\uff0c\u9ed8\u8ba4 20% \u5185\u5b58"))),(0,a.yg)("h2",{id:"\u6027\u80fd\u4f18\u5316"},"\u6027\u80fd\u4f18\u5316"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u901a\u5e38\uff0c\u901a\u8fc7\u589e\u52a0 Observer \u6570\u91cf\u6765\u63d0\u5347\u5904\u7406 query \u80fd\u529b\u662f\u6709\u6548\u7684")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"query \u8d1f\u8f7d\u5747\u8861\uff1a\u70b9\u67e5\u4e2d\u5982\u679c\u53d1\u73b0\u63a5\u53d7\u70b9\u67e5\u8bf7\u6c42\u7684 fe cpu \u4f7f\u7528\u8fc7\u9ad8\uff0c\u6216\u8bf7\u6c42\u54cd\u5e94\u53d8\u6162\uff0c\u53ef\u4f7f\u7528 jdbc load balance \u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\uff0c\u5c06\u8bf7\u6c42\u5206\u6563\u5230\u591a\u4e2a\u8282\u70b9\uff0c\u5206\u62c5\u538b\u529b\uff08\u540c\u65f6\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u8fdb\u884c query \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\uff0c\u5982 Nginx\uff0cproxySQL)")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u901a\u8fc7\u5c06\u70b9\u67e5\u8bf7\u6c42\u5b9a\u5411\u53d1\u9001\u81f3 Observer \u89d2\u8272\u6765\u5206\u62c5\u9ad8\u5e76\u53d1\u70b9\u67e5\u7684\u8bf7\u6c42\u538b\u529b\uff0c\u51cf\u5c11\u5411 fe master \u53d1\u9001\u70b9\u67e5\u8bf7\u6c42\uff0c\u901a\u5e38\u53ef\u4ee5\u89e3\u51b3 Fe Master \u8282\u70b9\u67e5\u8be2\u8017\u65f6\u4e0a\u4e0b\u6d6e\u52a8\u95ee\u9898\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u6027\u80fd\u4e0e\u7a33\u5b9a\u6027"))),(0,a.yg)("h2",{id:"qa"},"Q&A"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. \u5982\u4f55\u786e\u5b9a\u914d\u7f6e\u65e0\u8bef\u4f7f\u7528\u4e86\u5e76\u53d1\u70b9\u67e5\u7684\u77ed\u8def\u5f84\u4f18\u5316")),(0,a.yg)("p",null,"A\uff1aexplain sql\uff0c\u5f53\u6267\u884c\u8ba1\u5212\u4e2d\u51fa\u73b0 SHORT-CIRCUIT\uff0c\u8bc1\u660e\u4f7f\u7528\u4e86\u77ed\u8def\u5f84\u4f18\u5316"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> explain select * from tbl_point_query where `key` = -2147481418 ;                                                                                                                                \n      +-----------------------------------------------------------------------------------------------+                                                                                                       \n      | Explain String(Old Planner)                                                                   |                                                                                                       \n      +-----------------------------------------------------------------------------------------------+                                                                                                       \n      | PLAN FRAGMENT 0                                                                               |                                                                                                       \n      |   OUTPUT EXPRS:                                                                               |                                                                                                       \n      |     `test`.`tbl_point_query`.`key`                                                            |                                                                                                       \n      |     `test`.`tbl_point_query`.`v1`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v2`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v3`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v4`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v5`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v6`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v7`                                                             |                                                                                                       \n      |   PARTITION: UNPARTITIONED                                                                    |                                                                                                       \n      |                                                                                               |                                                                                                       \n      |   HAS_COLO_PLAN_NODE: false                                                                   |                                                                                                       \n      |                                                                                               |                                                                                                       \n      |   VRESULT SINK                                                                                |                                                                                                       \n      |      MYSQL_PROTOCAL                                                                           |                                                                                                       \n      |                                                                                               |                                                                                                       \n      |   0:VOlapScanNode                                                                             |                                                                                                       \n      |      TABLE: test.tbl_point_query(tbl_point_query), PREAGGREGATION: ON                         |                                                                                                       \n      |      PREDICATES: `key` = -2147481418 AND `test`.`tbl_point_query`.`__DORIS_DELETE_SIGN__` = 0 |                                                                                                       \n      |      partitions=1/1 (tbl_point_query), tablets=1/1, tabletList=360065                         |                                                                                                       \n      |      cardinality=9452868, avgRowSize=833.31323, numNodes=1                                    |                                                                                                       \n      |      pushAggOp=NONE                                                                           |                                                                                                       \n      |      SHORT-CIRCUIT                                                                            |                                                                                                       \n      +-----------------------------------------------------------------------------------------------+\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. \u5982\u4f55\u786e\u5b9a prepared statement \u751f\u6548")),(0,a.yg)("p",null,"A\uff1a\u5f53\u53d1\u9001\u8bf7\u6c42\u5230 Doris \u4e4b\u540e\uff0c\u5728 fe.audit.log \u4e2d\u627e\u5230\u76f8\u5e94\u7684 query \u8bf7\u6c42\uff0c\u53d1\u73b0 Stmt=EXECUTE() \uff0c\u8bf4\u660e prepared statement \u751f\u6548"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"2024-01-02 11:15:51,248 [query] |Client=192.168.1.82:53450|User=root|Db=test|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=49|ScanBytes=0|ScanRows=0|ReturnRows=1|StmtId=51|QueryId=b63d30b908f04dad-ab4a\n   3ba21d2c776b|IsQuery=true|isNereids=false|feIp=10.16.10.6|Stmt=EXECUTE(-2147481418)|CpuTimeMS=0|SqlHash=eee20fa2ac13a4f93bd4503a87921024|peakMemoryBytes=0|SqlDigest=|TraceId=|WorkloadGroup=|FuzzyVaria\n   bles=\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. \u975e\u4e3b\u952e\u67e5\u8be2\u80fd\u5426\u4f7f\u7528\u5230\u9ad8\u5e76\u53d1\u70b9\u67e5\u7684\u7279\u6b8a\u4f18\u5316")),(0,a.yg)("p",null,"A\uff1a\u4e0d\u80fd\uff0c\u9ad8\u5e76\u53d1\u70b9\u67e5\u53ea\u9488\u5bf9\u4e8e key \u5217\u7684\u7b49\u503c\u67e5\u8be2\uff0c\u4e14\u67e5\u8be2\u4e2d\u4e0d\u80fd\u5305\u542b join\uff0c\u5d4c\u5957\u5b50\u67e5\u8be2"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"4. useServerPrepStmts \u5728\u666e\u901a\u67e5\u8be2\u4e2d\u662f\u5426\u6709\u7528")),(0,a.yg)("p",null,"A\uff1aPrepared Statement \u76ee\u524d\u53ea\u5728\u4e3b\u952e\u70b9\u67e5\u7684\u60c5\u51b5\u4e0b\u751f\u6548"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"5. \u4f18\u5316\u5668\u9009\u62e9\u9700\u8981\u8fdb\u884c\u5168\u5c40\u8bbe\u7f6e\u5417")),(0,a.yg)("p",null,"A\uff1a\u5728\u4f7f\u7528 prepared statement \u8fdb\u884c\u67e5\u8be2\u65f6\uff0cDoris \u4f1a\u9009\u62e9\u6027\u80fd\u6700\u597d\u7684\u67e5\u8be2\u65b9\u5f0f\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u4f18\u5316\u5668"))}s.isMDXComponent=!0}}]);