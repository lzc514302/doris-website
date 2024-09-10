"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[607458],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(i,".").concat(d)]||c[d]||y[d]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},747835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const l={title:"ARRAY",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-data-types/semi-structured/ARRAY",id:"version-3.0/sql-manual/sql-data-types/semi-structured/ARRAY",title:"ARRAY",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/semi-structured/ARRAY.md",sourceDirName:"sql-manual/sql-data-types/semi-structured",slug:"/sql-manual/sql-data-types/semi-structured/ARRAY",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/ARRAY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY",language:"en"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/semi-structured-overview"},next:{title:"MAP",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/MAP"}},i={},p=[{value:"ARRAY",id:"array",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array"},"ARRAY"),(0,a.yg)("p",null,"ARRAY"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T>")),(0,a.yg)("p",null,"An array of T-type items, it cannot be used as a key column. Now ARRAY can only used in Duplicate Model Tables."),(0,a.yg)("p",null,"After version 2.0, it supports the use of non-key columns in Unique model tables."),(0,a.yg)("p",null,"T-type could be any of:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Create table example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> CREATE TABLE `array_test` (\n  `id` int(11) NULL COMMENT "",\n  `c_array` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n')),(0,a.yg)("p",null,"Insert data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> INSERT INTO `array_test` VALUES (1, [1,2,3,4,5]);\nmysql> INSERT INTO `array_test` VALUES (2, [6,7,8]), (3, []), (4, null);\n")),(0,a.yg)("p",null,"Select data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM `array_test`;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ARRAY\n")))}y.isMDXComponent=!0}}]);