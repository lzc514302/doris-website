"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[281004],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>u});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=t.createContext({}),o=function(e){var a=t.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},y=function(e){var a=o(e.components);return t.createElement(g.Provider,{value:a},e.children)},N="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),N=o(n),m=l,u=N["".concat(g,".").concat(m)]||N[m]||d[m]||r;return n?t.createElement(u,i(i({ref:a},y),{},{components:n})):t.createElement(u,i({ref:a},y))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var g in a)hasOwnProperty.call(a,g)&&(p[g]=a[g]);p.originalType=e,p[N]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},584613:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var t=n(58168),l=(n(296540),n(15680));const r={title:"Hive",language:"zh-CN"},i=void 0,p={unversionedId:"lakehouse/datalake-building/hive-build",id:"lakehouse/datalake-building/hive-build",title:"Hive",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/datalake-building/hive-build.md",sourceDirName:"lakehouse/datalake-building",slug:"/lakehouse/datalake-building/hive-build",permalink:"/zh-CN/docs/dev/lakehouse/datalake-building/hive-build",draft:!1,tags:[],version:"current",frontMatter:{title:"Hive",language:"zh-CN"},sidebar:"docs",previous:{title:"TPCDS",permalink:"/zh-CN/docs/dev/lakehouse/datalake-analytics/tpcds"},next:{title:"Iceberg",permalink:"/zh-CN/docs/dev/lakehouse/datalake-building/iceberg-build"}},g={},o=[{value:"\u5143\u6570\u636e\u521b\u5efa\u4e0e\u5220\u9664",id:"\u5143\u6570\u636e\u521b\u5efa\u4e0e\u5220\u9664",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Database",id:"database",level:3},{value:"Table",id:"table",level:3},{value:"\u6570\u636e\u64cd\u4f5c",id:"\u6570\u636e\u64cd\u4f5c",level:2},{value:"INSERT",id:"insert",level:3},{value:"INSERT OVERWRITE",id:"insert-overwrite",level:3},{value:"CTAS(CREATE TABLE AS SELECT)",id:"ctascreate-table-as-select",level:3},{value:"\u5f02\u5e38\u6570\u636e\u548c\u6570\u636e\u8f6c\u6362",id:"\u5f02\u5e38\u6570\u636e\u548c\u6570\u636e\u8f6c\u6362",level:2},{value:"\u4e8b\u52a1\u673a\u5236",id:"\u4e8b\u52a1\u673a\u5236",level:2},{value:"\u5e76\u53d1\u5199\u5165\u673a\u5236",id:"\u5e76\u53d1\u5199\u5165\u673a\u5236",level:3},{value:"HDFS \u6587\u4ef6\u64cd\u4f5c",id:"hdfs-\u6587\u4ef6\u64cd\u4f5c",level:3},{value:"\u5bf9\u8c61\u5b58\u50a8\u6587\u4ef6\u64cd\u4f5c",id:"\u5bf9\u8c61\u5b58\u50a8\u6587\u4ef6\u64cd\u4f5c",level:3},{value:"\u76f8\u5173\u53c2\u6570",id:"\u76f8\u5173\u53c2\u6570",level:2},{value:"FE",id:"fe",level:3},{value:"BE",id:"be",level:3}],y={toc:o},N="wrapper";function d(e){let{components:a,...n}=e;return(0,l.yg)(N,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u81ea 2.1.3 \u7248\u672c\u5f00\u59cb\uff0cApache Doris \u652f\u6301\u5bf9 Hive \u7684 DDL \u548c DML \u64cd\u4f5c\u3002\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 Apache Doris \u5728 Hive \u4e2d\u521b\u5efa\u5e93\u8868\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u5230 Hive \u8868\u4e2d\u3002\u901a\u8fc7\u8be5\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Apache Doris \u5bf9 Hive \u8fdb\u884c\u5b8c\u6574\u7684\u6570\u636e\u67e5\u8be2\u548c\u5199\u5165\u64cd\u4f5c\uff0c\u8fdb\u4e00\u6b65\u5e2e\u52a9\u7528\u6237\u7b80\u5316\u6e56\u4ed3\u4e00\u4f53\u67b6\u6784\u3002"),(0,l.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5728 Apache Doris \u4e2d\u652f\u6301\u7684 Hive \u64cd\u4f5c\uff0c\u8bed\u6cd5\u548c\u4f7f\u7528\u987b\u77e5\u3002"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u529f\u80fd\u3002")),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u4f7f\u7528\u524d\uff0c\u8bf7\u5148\u8bbe\u7f6e\uff1a"),(0,l.yg)("br",null),"set global enable_nereids_planner = true; set global enable_fallback_to_original_planner = false;",(0,l.yg)("br",null),"\u4ece\u8001\u7248\u672c\u5347\u7ea7\u4e0a\u6765\u7684\u96c6\u7fa4\uff0c\u8fd9\u4e9b\u53c2\u6570\u53ef\u80fd\u6709\u53d8\u5316\u3002"),(0,l.yg)("h2",{id:"\u5143\u6570\u636e\u521b\u5efa\u4e0e\u5220\u9664"},"\u5143\u6570\u636e\u521b\u5efa\u4e0e\u5220\u9664"),(0,l.yg)("h3",{id:"catalog"},"Catalog"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},'CREATE CATALOG [IF NOT EXISTS] hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.16.47:7004",\n    "hadoop.username" = "hadoop",\n    "fs.defaultFS" = "hdfs://172.21.16.47:4007"\n);\n')),(0,l.yg)("p",{parentName:"li"},"  \u6ce8\u610f\uff0c\u5982\u679c\u9700\u8981\u901a\u8fc7 Apache Doris \u521b\u5efa Hive \u8868\u6216\u5199\u5165\u6570\u636e\uff0c\u9700\u8981\u5728 Catalog \u5c5e\u6027\u4e2d\u663e\u5f0f\u589e\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," \u5c5e\u6027\u3002\u5982\u679c\u521b\u5efa Catalog \u4ec5\u7528\u4e8e\u67e5\u8be2\uff0c\u5219\u8be5\u53c2\u6570\u53ef\u4ee5\u7701\u7565\u3002"),(0,l.yg)("p",{parentName:"li"},"  \u66f4\u591a\u53c2\u6570\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/datalake-analytics/hive"},"Hive Catalog"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5220\u9664"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"DROP CATALOG [IF EXISTS] hive;\n")),(0,l.yg)("p",{parentName:"li"},"  \u5220\u9664 Catalog \u5e76\u4e0d\u4f1a\u5220\u9664 hive \u4e2d\u7684\u4efb\u4f55\u5e93\u8868\u4fe1\u606f\u3002\u4ec5\u4ec5\u662f\u5728 Apache Doris \u4e2d\u79fb\u9664\u4e86\u5bf9\u8fd9\u4e2a Hive \u96c6\u7fa4\u7684\u6620\u5c04\u3002\n"))),(0,l.yg)("h3",{id:"database"},"Database"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa"),(0,l.yg)("p",{parentName:"li"},"  \u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SWITCH")," \u8bed\u53e5\u5207\u6362\u5230\u5bf9\u5e94\u7684 Catalog \u4e0b\uff0c\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE DATABASE")," \u8bed\u53e5\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"SWITCH hive;\nCREATE DATABASE [IF NOT EXISTS] hive_db;\n")),(0,l.yg)("p",{parentName:"li"},"  \u4e5f\u53ef\u4ee5\u4f7f\u7528\u5168\u9650\u5b9a\u540d\u521b\u5efa\uff0c\u6216\u6307\u5b9a location\uff0c\u5982\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"CREATE DATABASE [IF NOT EXISTS] hive.hive_db;\n    \nCREATE DATABASE [IF NOT EXISTS] hive.hive_db\nPROPERTIES ('location'='hdfs://172.21.16.47:4007/path/to/db/');\n")),(0,l.yg)("p",{parentName:"li"},"  \u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW CREATE DATABASE")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b Database \u7684 Location \u4fe1\u606f\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"mysql> SHOW CREATE DATABASE hive_db;\n+----------+---------------------------------------------------------------------------------------------+\n| Database | Create Database                                                                             |\n+----------+---------------------------------------------------------------------------------------------+\n| hive_db  | CREATE DATABASE `hive_db` LOCATION 'hdfs://172.21.16.47:4007/usr/hive/warehouse/hive_db.db' |\n+----------+---------------------------------------------------------------------------------------------+\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5220\u9664"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"DROP DATABASE [IF EXISTS] hive.hive_db;\n")),(0,l.yg)("p",{parentName:"li"},"  :::caution \u6ce8\u610f\n\u5bf9\u4e8e Hive Database\uff0c\u5fc5\u987b\u5148\u5220\u9664\u8fd9\u4e2a Database \u4e0b\u7684\u6240\u6709\u8868\u540e\uff0c\u624d\u80fd\u5220\u9664 Database\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002\u8fd9\u4e2a\u64cd\u4f5c\u4f1a\u540c\u6b65\u5220\u9664 Hive \u4e2d\u5bf9\u5e94\u7684 Database\u3002\n:::\n"))),(0,l.yg)("h3",{id:"table"},"Table"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa"),(0,l.yg)("p",{parentName:"li"},"  Apache Doris \u652f\u6301\u5728 Hive \u4e2d\u521b\u5efa\u5206\u533a\u6216\u975e\u5206\u533a\u8868\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"-- Create unpartitioned hive table\nCREATE TABLE unpartitioned_table (\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3',\n  `col4` CHAR(10) COMMENT 'col4',\n  `col5` FLOAT COMMENT 'col5',\n  `col6` DOUBLE COMMENT 'col6',\n  `col7` DECIMAL(9,4) COMMENT 'col7',\n  `col8` VARCHAR(11) COMMENT 'col8',\n  `col9` STRING COMMENT 'col9'\n)  ENGINE=hive\nPROPERTIES (\n  'file_format'='parquet'\n);\n\n-- Create partitioned hive table\n-- The partition columns must be in table's column definition list\nCREATE TABLE partition_table (\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3',\n  `col4` DECIMAL(2,1) COMMENT 'col4',\n  `pt1` VARCHAR COMMENT 'pt1',\n  `pt2` VARCHAR COMMENT 'pt2'\n)  ENGINE=hive\nPARTITION BY LIST (pt1, pt2) ()\nPROPERTIES (\n  'file_format'='orc',\n  'compression'='zlib'\n);\n")),(0,l.yg)("p",{parentName:"li"},"  \u521b\u5efa\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," \u547d\u4ee4\u67e5\u770b Hive \u7684\u5efa\u8868\u8bed\u53e5\u3002"),(0,l.yg)("p",{parentName:"li"},"  \u6ce8\u610f\uff0c\u4e0d\u540c\u4e8e Hive \u4e2d\u7684\u5efa\u8868\u8bed\u53e5\u3002\u5728 Apache Doris \u4e2d\u521b\u5efa Hive \u5206\u533a\u8868\u65f6\uff0c\u5206\u533a\u5217\u4e5f\u5fc5\u987b\u5199\u5230 Table \u7684 Schema \u4e2d\u3002\u540c\u65f6\uff0c\u5206\u533a\u5217\u5fc5\u987b\u5728\u6240\u6709 Schema \u7684\u6700\u540e\uff0c\u4e14\u987a\u5e8f\u4fdd\u6301\u4e00\u81f4\u3002"),(0,l.yg)("p",{parentName:"li"},"  :::tip"),(0,l.yg)("p",{parentName:"li"},"  \u5bf9\u4e8e\u67d0\u4e9b\u9ed8\u8ba4\u5f00\u542f ACID \u4e8b\u52a1\u7279\u6027\u7684 Hive \u96c6\u7fa4\uff0c\u4f7f\u7528 Apache Doris \u5efa\u8868\u540e\uff0c\u8868\u5c5e\u6027 ",(0,l.yg)("inlineCode",{parentName:"p"},"transactional")," \u4f1a\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\u3002\u800c Apache Doris \u53ea\u652f\u6301\u90e8\u5206 Hive \u4e8b\u52a1\u8868\u7684\u7279\u6027\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u5bfc\u81f4 Apache Doris \u521b\u5efa\u7684 Hive\uff0cApache Doris \u672c\u8eab\u65e0\u6cd5\u8bfb\u53d6\u7684\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u9700\u8981\u5728\u5efa\u8868\u7684\u5c5e\u6027\u4e2d\uff0c\u663e\u5f0f\u589e\u52a0\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},'"transactional" = "false"'),"\uff0c\u6765\u521b\u5efa\u975e\u4e8b\u52a1\u7684 Hive \u8868\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"CREATE TABLE non_acid_table(\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3'\n)  ENGINE=hive\nPROPERTIES (\n  'transactional'='false',\n);\n")),(0,l.yg)("p",{parentName:"li"},"  :::")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5220\u9664"),(0,l.yg)("p",{parentName:"li"},"  \u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"DROP TABLE")," \u8bed\u53e5\u5220\u9664\u4e00\u4e2a Hive \u8868\u3002\u5f53\u524d\u5220\u9664\u8868\u540e\uff0c\u4f1a\u540c\u65f6\u5220\u9664\u6570\u636e\uff0c\u5305\u62ec\u5206\u533a\u6570\u636e\u3002\n")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5217\u7c7b\u578b"),(0,l.yg)("p",{parentName:"li"},"  \u5728 Apache Doris \u4e2d\u521b\u5efa Hive \u8868\u6240\u4f7f\u7528\u7684\u5217\u7c7b\u578b\uff0c\u548c Hive \u4e2d\u7684\u5217\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Apache Doris"),(0,l.yg)("th",{parentName:"tr",align:null},"Hive"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"CHAR")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MAP"),(0,l.yg)("td",{parentName:"tr",align:null},"MAP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,l.yg)("td",{parentName:"tr",align:null},"STRUCT")))),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u5217\u7c7b\u578b\u53ea\u80fd\u4e3a\u9ed8\u8ba4\u7684 Nullable\uff0c\u4e0d\u652f\u6301  NOT NULL\u3002"),(0,l.yg)("li",{parentName:"ul"},"Hive 3.0 \u652f\u6301\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u5219\u9700\u8981\u518d Catalog \u5c5e\u6027\u4e2d\u663e\u793a\u7684\u6dfb\u52a0 ",(0,l.yg)("inlineCode",{parentName:"li"},'"hive.version" = "3.0.0"')),(0,l.yg)("li",{parentName:"ul"},"\u63d2\u5165\u6570\u636e\u540e\uff0c\u5982\u679c\u7c7b\u578b\u4e0d\u80fd\u591f\u517c\u5bb9\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},"'abc'")," \u63d2\u5165\u5230\u6570\u503c\u7c7b\u578b\uff0c\u5219\u4f1a\u8f6c\u4e3a null \u503c\u540e\u63d2\u5165\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5206\u533a"),(0,l.yg)("p",{parentName:"li"},"  Hive \u4e2d\u7684\u5206\u533a\u7c7b\u578b\u5bf9\u5e94 Apache Doris \u4e2d\u7684 List \u5206\u533a\u3002\u56e0\u6b64\uff0c\u5728 Apache Doris \u4e2d \u521b\u5efa Hive \u5206\u533a\u8868\uff0c\u9700\u4f7f\u7528 List \u5206\u533a\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u4f46\u65e0\u9700\u663e\u5f0f\u7684\u679a\u4e3e\u5404\u4e2a\u5206\u533a\u3002\u5728\u5199\u5165\u6570\u636e\u65f6\uff0cApache Doris \u4f1a\u6839\u636e\u6570\u636e\u7684\u503c\uff0c\u81ea\u52a8\u521b\u5efa\u5bf9\u5e94\u7684 Hive \u5206\u533a\u3002"),(0,l.yg)("p",{parentName:"li"},"  \u652f\u6301\u521b\u5efa\u5355\u5217\u6216\u591a\u5217\u5206\u533a\u8868\u3002\n")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u6587\u4ef6\u683c\u5f0f"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Parquet"),(0,l.yg)("li",{parentName:"ul"},"ORC\uff08\u9ed8\u8ba4\uff09"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u538b\u7f29\u683c\u5f0f"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Parquet\uff1asnappy\uff08\u9ed8\u8ba4\uff09\uff0czstd\uff0cplain\u3002\uff08Plain \u5c31\u662f\u4e0d\u91c7\u7528\u538b\u7f29\uff09"),(0,l.yg)("li",{parentName:"ul"},"ORC\uff1asnappy\uff0czlib\uff08\u9ed8\u8ba4\uff09\uff0czstd\uff0cplain\u3002\uff08Plain \u5c31\u662f\u4e0d\u91c7\u7528\u538b\u7f29\uff09"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5b58\u50a8\u4ecb\u8d28"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"HDFS"),(0,l.yg)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b58\u50a8")))),(0,l.yg)("h2",{id:"\u6570\u636e\u64cd\u4f5c"},"\u6570\u636e\u64cd\u4f5c"),(0,l.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 INSERT \u8bed\u53e5\u5c06\u6570\u636e\u5199\u5165\u5230 Hive \u8868\u4e2d\u3002"),(0,l.yg)("p",null,"\u652f\u6301\u5199\u5165\u5230\u7531 Apache Doris \u521b\u5efa\u7684 Hive \u8868\uff0c\u6216\u8005 Hive \u4e2d\u5df2\u5b58\u5728\u7684\u4e14\u683c\u5f0f\u652f\u6301\u7684\u8868\u3002"),(0,l.yg)("p",null,"\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u4f1a\u6839\u636e\u6570\u636e\uff0c\u81ea\u52a8\u5199\u5165\u5230\u5bf9\u5e94\u5206\u533a\uff0c\u6216\u8005\u521b\u5efa\u65b0\u7684\u5206\u533a\u3002"),(0,l.yg)("p",null,"\u76ee\u524d\u4e0d\u652f\u6301\u6307\u5b9a\u5206\u533a\u5199\u5165\u3002"),(0,l.yg)("h3",{id:"insert"},"INSERT"),(0,l.yg)("p",null,"INSERT \u64cd\u4f5c\u4f1a\u6570\u636e\u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f\u5199\u5165\u5230\u76ee\u6807\u8868\u4e2d\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'INSERT INTO hive_tbl values (val1, val2, val3, val4);\nINSERT INTO hive.hive_db.hive_tbl SELECT col1, col2 FROM internal.db1.tbl1;\n\nINSERT INTO hive_tbl(col1, col2) values (val1, val2);\nINSERT INTO hive_tbl(col1, col2, partition_col1, partition_col2) values (1, 2, "beijing", "2023-12-12");\n')),(0,l.yg)("h3",{id:"insert-overwrite"},"INSERT OVERWRITE"),(0,l.yg)("p",null,"INSERT OVERWRITE \u4f1a\u4f7f\u7528\u65b0\u7684\u6570\u636e\u5b8c\u5168\u8986\u76d6\u539f\u6709\u8868\u4e2d\u7684\u6570\u636e\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"INSERT OVERWRITE TABLE VALUES(val1, val2, val3, val4)\nINSERT OVERWRITE TABLE hive.hive_db.hive_tbl(col1, col2) SELECT col1, col2 FROM internal.db1.tbl1;\n")),(0,l.yg)("h3",{id:"ctascreate-table-as-select"},"CTAS(CREATE TABLE AS SELECT)"),(0,l.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"CTAS(CREATE TABLE AS SELECT)")," \u8bed\u53e5\u521b\u5efa Hive \u8868\u5e76\u5199\u5165\u6570\u636e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"CREATE TABLE hive_ctas ENGINE=hive AS SELECT * FROM other_table;\n")),(0,l.yg)("p",null,"CTAS \u652f\u6301\u6307\u5b9a\u6587\u4ef6\u683c\u5f0f\u3001\u5206\u533a\u65b9\u5f0f\u7b49\u4fe1\u606f\uff0c\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'CREATE TABLE hive_ctas ENGINE=hive\nPARTITION BY LIST (pt1, pt2) ()\nAS SELECT col1,pt1,pt2 FROM part_ctas_src WHERE col1>0;\n    \nCREATE TABLE hive.hive_db.hive_ctas (col1,col2,pt1) ENGINE=hive\nPARTITION BY LIST (pt1) ()\nPROPERTIES (\n    "file_format"="parquet",\n    "compression"="zstd"\n)\nAS SELECT col1,pt1 as col2,pt2 as pt1 FROM test_ctas.part_ctas_src WHERE col1>0;\n')),(0,l.yg)("h2",{id:"\u5f02\u5e38\u6570\u636e\u548c\u6570\u636e\u8f6c\u6362"},"\u5f02\u5e38\u6570\u636e\u548c\u6570\u636e\u8f6c\u6362"),(0,l.yg)("p",null,"TODO"),(0,l.yg)("h2",{id:"\u4e8b\u52a1\u673a\u5236"},"\u4e8b\u52a1\u673a\u5236"),(0,l.yg)("p",null,"\u5bf9 Hive \u7684\u5199\u5165\u64cd\u4f5c\u4f1a\u88ab\u653e\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u4e8b\u52a1\u91cc\uff0c\u5728\u4e8b\u52a1\u63d0\u4ea4\u524d\uff0c\u6570\u636e\u5bf9\u5916\u4e0d\u53ef\u89c1\u3002\u53ea\u6709\u5f53\u63d0\u4ea4\u8be5\u4e8b\u52a1\u540e\uff0c\u8868\u7684\u76f8\u5173\u64cd\u4f5c\u624d\u5bf9\u5176\u4ed6\u4eba\u53ef\u89c1\u3002"),(0,l.yg)("p",null,"\u4e8b\u52a1\u80fd\u4fdd\u8bc1\u64cd\u4f5c\u7684\u539f\u5b50\u6027\uff0c\u4e8b\u52a1\u5185\u7684\u6240\u6709\u64cd\u4f5c\uff0c\u8981\u4e48\u5168\u90e8\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002"),(0,l.yg)("p",null,"\u4e8b\u52a1\u4e0d\u80fd\u5b8c\u5168\u4fdd\u8bc1\u64cd\u4f5c\u7684\u9694\u79bb\u6027\uff0c\u53ea\u80fd\u5c3d\u529b\u800c\u4e3a\uff0c\u901a\u8fc7\u5206\u79bb\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\u548c \u5bf9 Hive Metastore \u7684\u5143\u6570\u636e\u64cd\u4f5c\u6765\u5c3d\u91cf\u51cf\u5c11\u4e0d\u4e00\u81f4\u7684\u65f6\u95f4\u7a97\u53e3\u3002"),(0,l.yg)("p",null,"\u6bd4\u5982\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u9700\u8981\u4fee\u6539 Hive \u8868\u7684\u591a\u4e2a\u5206\u533a\u3002\u5047\u8bbe\u8fd9\u4e2a\u4efb\u52a1\u5206\u6210\u4e24\u6279\u8fdb\u884c\u64cd\u4f5c\uff0c\u5728\u7b2c\u4e00\u6279\u64cd\u4f5c\u5df2\u7ecf\u5b8c\u6210\u3001\u7b2c\u4e8c\u6279\u64cd\u4f5c\u8fd8\u672a\u5b8c\u6210\u65f6\uff0c\u7b2c\u4e00\u6279\u5206\u533a\u5df2\u7ecf\u5bf9\u5916\u53ef\u89c1\uff0c\u5916\u90e8\u53ef\u4ee5\u8bfb\u53d6\u5230\u7b2c\u4e00\u6279\u5206\u533a\uff0c\u4f46\u8bfb\u4e0d\u5230\u7b2c\u4e8c\u6279\u5206\u533a\u3002"),(0,l.yg)("p",null,"\u5728\u4e8b\u52a1\u63d0\u4ea4\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4efb\u4f55\u5f02\u5e38\uff0c\u90fd\u4f1a\u76f4\u63a5\u56de\u9000\u8be5\u4e8b\u52a1\uff0c\u5305\u62ec\u5bf9 HDFS \u6587\u4ef6\u7684\u4fee\u6539\u3001\u4ee5\u53ca\u5bf9 Hive Metastore \u5143\u6570\u636e\u7684\u4fee\u6539\uff0c\u4e0d\u9700\u8981\u7528\u6237\u505a\u5176\u4ed6\u5904\u7406\u3002"),(0,l.yg)("h3",{id:"\u5e76\u53d1\u5199\u5165\u673a\u5236"},"\u5e76\u53d1\u5199\u5165\u673a\u5236"),(0,l.yg)("p",null,"\u5f53\u524d Apache Doris \u652f\u6301\u4f7f\u7528\u591a\u4e2a\u63d2\u5165\u8bed\u53e5\u8fdb\u884c\u5e76\u53d1\u5199\u5165\u3002\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7528\u6237\u9700\u8981\u63a7\u5236\u5e76\u53d1\u5199\u5165\u4e0d\u4ea7\u751f\u53ef\u80fd\u51b2\u7a81\u7684\u60c5\u51b5\u3002"),(0,l.yg)("p",null,"\u56e0\u4e3a\u666e\u901a\u975e\u4e8b\u52a1 Hive \u8868\u7f3a\u5c11\u5b8c\u5907\u7684\u4e8b\u52a1\u673a\u5236\u3002\u901a\u8fc7\u4e0a\u6587\u4ecb\u7ecd\u7684 Apache Doris \u4e8b\u52a1\u673a\u5236\u6211\u4eec\u77e5\u9053\u76ee\u524d Apache Doris \u4e2d\u7684\u5b9e\u73b0\u53ea\u80fd\u662f\u5c3d\u529b\u800c\u4e3a\u5730\u51cf\u5c11\u53ef\u80fd\u4e0d\u4e00\u81f4\u7684\u65f6\u95f4\u7a97\u53e3\uff0c\u800c\u65e0\u6cd5\u4fdd\u8bc1\u771f\u6b63\u7684 ACID\u3002\u56e0\u6b64\u5728 Apache Doris \u4e2d\u8fdb\u884c\u5e76\u53d1\u5199\u5165Hive \u8868\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u5e76\u53d1\u64cd\u4f5c"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u4e3a\u6570\u636e\u8ffd\u52a0\u64cd\u4f5c\uff0c\u5728\u5e76\u53d1\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u65f6\uff0c\u4e0d\u4f1a\u4ea7\u751f\u51b2\u7a81\uff0c\u64cd\u4f5c\u4f1a\u4ea7\u751f\u9884\u671f\u7684\u7ed3\u679c\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"INSERT OVERWRITE")," \u5e76\u53d1\u64cd\u4f5c"),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT OVERWRITE")," \u5bf9\u540c\u4e00\u8868\u6216\u5206\u533a\u5e76\u53d1\u5199\u5165\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u6216\u635f\u574f\uff0c\u7ed3\u679c\u53ef\u80fd\u662f\u4e0d\u786e\u5b9a\u7684\u3002"),(0,l.yg)("p",{parentName:"li"},"\u4e00\u822c\u6709\u4ee5\u4e0b\u51e0\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u5199\u5165\u4e0d\u540c\u7684\u5206\u533a\uff0c\u5e76\u53d1\u64cd\u4f5c\u4e0d\u540c\u5206\u533a\u4e0d\u4f1a\u4ea7\u751f\u51b2\u7a81\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e\u975e\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u540c\u65f6\u6267\u884c INSERT\uff0c\u800c\u4e0d\u4f7f\u7528 INSERT OVERWRITE\uff0c\u8fd9\u6837\u4e0d\u4f1a\u4ea7\u751f\u51b2\u7a81\u7684\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e\u53ef\u80fd\u4ea7\u751f\u51b2\u7a81\u7684\u64cd\u4f5c\uff0c\u9700\u8981\u7528\u6237\u5728\u4e1a\u52a1\u4fa7\u63a7\u5236\u540c\u4e00\u65f6\u95f4\u53ea\u6709\u4e00\u4e2a\u5199\u5165\u5728\u8fdb\u884c\u3002")))),(0,l.yg)("h3",{id:"hdfs-\u6587\u4ef6\u64cd\u4f5c"},"HDFS \u6587\u4ef6\u64cd\u4f5c"),(0,l.yg)("p",null,"\u5728 HDFS \u4e0a\u7684 Hive \u8868\u6570\u636e\u901a\u5e38\u4f1a\u5148\u5199\u5165\u5230\u4e34\u65f6\u76ee\u5f55\uff0c\u7136\u540e\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"rename")," \u7b49\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\u8fdb\u884c\u6700\u7ec8\u7684\u6587\u4ef6\u63d0\u4ea4\u3002\u8fd9\u91cc\u6211\u4eec\u8be6\u7ec6\u4ecb\u7ecd\u4e0d\u540c\u6570\u636e\u64cd\u4f5c\u4e2d\uff0cHDFS \u4e0a\u6587\u4ef6\u7684\u5177\u4f53\u64cd\u4f5c\u3002"),(0,l.yg)("p",null,"\u6570\u636e\u7684\u4e34\u65f6\u76ee\u5f55\u683c\u5f0f\u4e3a\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/.doris_staging/<username>/<uuid>")),(0,l.yg)("p",null,"\u5199\u5165\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u4e3a\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"<query-id>_<uuid>-<index>.<compress-type>.<file-type>")),(0,l.yg)("p",null,"\u4e0b\u9762\u4e3e\u4f8b\u8bf4\u660e\u5404\u79cd\u60c5\u51b5\u4e0b\u7684\u6587\u4ef6\u64cd\u4f5c\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u975e\u5206\u533a\u8868"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Append\uff08\u8ffd\u52a0\u5199\u5165\uff09"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u76ee\u6807\u8868\u76ee\u5f55\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table1"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e34\u65f6\u6587\u4ef6\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/f02247cb662846038baae272af5eeb05/b35fdbcea3a4e39-86d1f36987ef1492_7e3985bf-9de9-4fc7-b84e-adf11aa08756-0.orc")),(0,l.yg)("p",{parentName:"li"},"\u63d0\u4ea4\u9636\u6bb5\u4f1a\u628a\u6240\u6709\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\u5230\u76ee\u6807\u8868\u76ee\u5f55\u4e0b\u3002")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Overwrite\uff08\u8986\u76d6\u5199\uff09"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u76ee\u6807\u8868\u76ee\u5f55\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table1"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e34\u65f6\u6587\u4ef6\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/f02247cb662846038baae272af5eeb05/b35fdbcea3a4e39-86d1f36987ef1492_7e3985bf-9de9-4fc7-b84e-adf11aa08756-0.orc")),(0,l.yg)("p",{parentName:"li"},"\u63d0\u4ea4\u9636\u6bb5\uff1a"))),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},"\u76ee\u6807\u8868\u76ee\u5f55\u91cd\u547d\u540d\u4e3a\u76ee\u6807\u8868\u4e34\u65f6\u76ee\u5f55\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"hdfs://ns/usr/hive/warehouse/example.db/_temp_b35fdbcea3a4e39-86d1f36987ef1492_table1")),(0,l.yg)("li",{parentName:"ol"},"\u4e34\u65f6\u76ee\u5f55\u91cd\u547d\u540d\u4e3a\u76ee\u6807\u8868\u76ee\u5f55\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5220\u9664\u76ee\u6807\u8868\u4e34\u65f6\u76ee\u5f55\u3002"))))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5206\u533a\u8868"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Add\uff08\u6dfb\u52a0\u5230\u65b0\u5206\u533a\uff09"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u76ee\u6807\u8868\u76ee\u5f55\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table2/part_col=2024-01-01"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e34\u65f6\u6587\u4ef6\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/a7eac7505d7a42fdb06cb9ef1ea3e912/par1=a/d678a74d232345e0-b659e2fb58e86ffd_549ad677-ee75-4fa1-b8a6-3e821e1dae61-0.orc")),(0,l.yg)("p",{parentName:"li"},"\u63d0\u4ea4\u9636\u6bb5\uff0c\u4f1a\u5c06\u4e34\u65f6\u76ee\u5f55\u91cd\u547d\u540d\u4e3a\u76ee\u6807\u8868\u76ee\u5f55")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Append\uff08\u5199\u5165\u6570\u636e\u5230\u5df2\u5b58\u5728\u7684\u5206\u533a\uff09"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u76ee\u6807\u8868\u76ee\u5f55\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table2/part_col=2024-01-01"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e34\u65f6\u6587\u4ef6\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/a7eac7505d7a42fdb06cb9ef1ea3e912/par1=a/d678a74d232345e0-b659e2fb58e86ffd_549ad677-ee75-4fa1-b8a6-3e821e1dae61-0.orc")),(0,l.yg)("p",{parentName:"li"},"\u63d0\u4ea4\u9636\u6bb5\uff0c\u4f1a\u5c06\u4e34\u65f6\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff0c\u79fb\u52a8\u5230\u76ee\u6807\u8868\u76ee\u5f55\u4e0b\u3002")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Overwrite\uff08\u8986\u76d6\u5df2\u6709\u5206\u533a\uff09"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u76ee\u6807\u8868\u76ee\u5f55\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table2/part_col=2024-01-01"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e34\u65f6\u6587\u4ef6\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/a7eac7505d7a42fdb06cb9ef1ea3e912/par1=a/d678a74d232345e0-b659e2fb58e86ffd_549ad677-ee75-4fa1-b8a6-3e821e1dae61-0.orc")),(0,l.yg)("p",{parentName:"li"},"\u63d0\u4ea4\u9636\u6bb5\uff1a"))),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},"\u76ee\u6807\u8868\u5206\u533a\u76ee\u5f55\u91cd\u547d\u540d\u4e3a\u76ee\u6807\u8868\u4e34\u65f6\u5206\u533a\u76ee\u5f55\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"hdfs://ns/usr/hive/warehouse/example.db/table2/_temp_d678a74d232345e0-b659e2fb58e86ffd_part_col=2024-01-01")),(0,l.yg)("li",{parentName:"ol"},"\u4e34\u65f6\u5206\u533a\u76ee\u5f55\u91cd\u547d\u540d\u4e3a\u76ee\u6807\u8868\u5206\u533a\u76ee\u5f55\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5220\u9664\u76ee\u6807\u8868\u4e34\u65f6\u5206\u533a\u76ee\u3002")))))),(0,l.yg)("h3",{id:"\u5bf9\u8c61\u5b58\u50a8\u6587\u4ef6\u64cd\u4f5c"},"\u5bf9\u8c61\u5b58\u50a8\u6587\u4ef6\u64cd\u4f5c"),(0,l.yg)("p",null,"TODO"),(0,l.yg)("h2",{id:"\u76f8\u5173\u53c2\u6570"},"\u76f8\u5173\u53c2\u6570"),(0,l.yg)("h3",{id:"fe"},"FE"),(0,l.yg)("p",null,"TODO"),(0,l.yg)("h3",{id:"be"},"BE"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"hive_sink_max_file_size")),(0,l.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u7684\u6570\u636e\u6587\u4ef6\u5927\u5c0f\u3002\u5f53\u5199\u5165\u6570\u636e\u91cf\u8d85\u8fc7\u8be5\u5927\u5c0f\u540e\u4f1a\u5173\u95ed\u5f53\u524d\u6587\u4ef6\uff0c\u6eda\u52a8\u4ea7\u751f\u4e00\u4e2a\u65b0\u6587\u4ef6\u7ee7\u7eed\u5199\u5165\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"1GB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_max_partition_nums_per_writer")),(0,l.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9\u4e0a\u6bcf\u4e2a Instance \u6700\u5927\u5199\u5165\u7684\u5206\u533a\u6570\u76ee\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"128")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"table_sink_non_partition_write_scaling_data_processed_threshold")),(0,l.yg)("td",{parentName:"tr",align:null},"\u975e\u5206\u533a\u8868\u5f00\u59cb scaling-write \u7684\u6570\u636e\u91cf\u9608\u503c\u3002\u6bcf\u589e\u52a0 ",(0,l.yg)("inlineCode",{parentName:"td"},"table_sink_non_partition_write_scaling_data_processed_threshold")," \u6570\u636e\u5c31\u4f1a\u53d1\u9001\u7ed9\u4e00\u4e2a\u65b0\u7684 writer(instance) \u8fdb\u884c\u5199\u5165\u3002scaling-write \u673a\u5236\u4e3b\u8981\u662f\u4e3a\u4e86\u6839\u636e\u6570\u636e\u91cf\u6765\u4f7f\u7528\u4e0d\u540c\u6570\u76ee\u7684 writer(instance) \u6765\u8fdb\u884c\u5199\u5165\uff0c\u4f1a\u968f\u7740\u6570\u636e\u91cf\u7684\u589e\u52a0\u800c\u589e\u5927\u5199\u5165\u7684 writer(instance) \u6570\u76ee\uff0c\u4ece\u800c\u63d0\u9ad8\u5e76\u53d1\u5199\u5165\u7684\u541e\u5410\u3002\u5f53\u6570\u636e\u91cf\u6bd4\u8f83\u5c11\u7684\u65f6\u5019\u4e5f\u4f1a\u8282\u7701\u8d44\u6e90\uff0c\u5e76\u4e14\u5c3d\u53ef\u80fd\u5730\u51cf\u5c11\u4ea7\u751f\u7684\u6587\u4ef6\u6570\u76ee\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"25MB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_data_processed_rebalance_threshold")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5206\u533a\u8868\u5f00\u59cb\u89e6\u53d1\u91cd\u5e73\u8861\u7684\u6700\u5c11\u6570\u636e\u91cf\u9608\u503c\u3002\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"\u5f53\u524d\u7d2f\u79ef\u7684\u6570\u636e\u91cf")," - ",(0,l.yg)("inlineCode",{parentName:"td"},"\u81ea\u4ece\u4e0a\u6b21\u89e6\u53d1\u91cd\u5e73\u8861\u6216\u8005\u6700\u5f00\u59cb\u7d2f\u79ef\u7684\u6570\u636e\u91cf")," >= ",(0,l.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_data_processed_rebalance_threshold"),"\uff0c\u5c31\u5f00\u59cb\u89e6\u53d1\u91cd\u5e73\u8861\u673a\u5236\u3002\u5982\u679c\u53d1\u73b0\u6700\u7ec8\u751f\u6210\u7684\u6587\u4ef6\u5927\u5c0f\u5dee\u5f02\u8fc7\u5927\uff0c\u53ef\u4ee5\u8c03\u5c0f\u6539\u9608\u503c\u6765\u589e\u52a0\u5747\u8861\u5ea6\u3002\u5f53\u7136\u8fc7\u5c0f\u7684\u9608\u503c\u4f1a\u5bfc\u81f4\u91cd\u5e73\u8861\u7684\u6210\u672c\u589e\u52a0\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u6027\u80fd\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"25MB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_partition_data_processed_rebalance_threshold")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5206\u533a\u8868\u5f00\u59cb\u8fdb\u884c\u91cd\u5e73\u8861\u65f6\u7684\u6700\u5c11\u7684\u5206\u533a\u6570\u636e\u91cf\u9608\u503c\u3002\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"\u5f53\u524d\u5206\u533a\u7684\u6570\u636e\u91cf")," >= ",(0,l.yg)("inlineCode",{parentName:"td"},"\u9608\u503c")," * ",(0,l.yg)("inlineCode",{parentName:"td"},"\u5f53\u524d\u5206\u533a\u5df2\u7ecf\u5206\u914d\u7684 task \u6570\u76ee"),"\uff0c\u5c31\u5f00\u59cb\u5bf9\u8be5\u5206\u533a\u8fdb\u884c\u91cd\u5e73\u8861\u3002\u5982\u679c\u53d1\u73b0\u6700\u7ec8\u751f\u6210\u7684\u6587\u4ef6\u5927\u5c0f\u5dee\u5f02\u8fc7\u5927\uff0c\u53ef\u4ee5\u8c03\u5c0f\u6539\u9608\u503c\u6765\u589e\u52a0\u5747\u8861\u5ea6\u3002\u5f53\u7136\u8fc7\u5c0f\u7684\u9608\u503c\u4f1a\u5bfc\u81f4\u91cd\u5e73\u8861\u7684\u6210\u672c\u589e\u52a0\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u6027\u80fd\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"15MB")))))}d.isMDXComponent=!0}}]);