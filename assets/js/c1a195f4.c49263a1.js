"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[762177],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),g=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=g(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=g(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var g=2;g<o;g++)s[g]=a[g];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},657875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const o={title:"AGG_STATE",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-data-types/aggregate/AGG_STATE",id:"sql-manual/sql-data-types/aggregate/AGG_STATE",title:"AGG_STATE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-data-types/aggregate/AGG_STATE.md",sourceDirName:"sql-manual/sql-data-types/aggregate",slug:"/sql-manual/sql-data-types/aggregate/AGG_STATE",permalink:"/docs/dev/sql-manual/sql-data-types/aggregate/AGG_STATE",draft:!1,tags:[],version:"current",frontMatter:{title:"AGG_STATE",language:"en"},sidebar:"docs",previous:{title:"QUANTILE_STATE",permalink:"/docs/dev/sql-manual/sql-data-types/aggregate/QUANTILE_STATE"},next:{title:"Overview",permalink:"/docs/dev/sql-manual/sql-data-types/ip/ip-overview"}},i={},g=[{value:"AGG_STATE",id:"agg_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:g},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"agg_state"},"AGG_STATE"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"  AGG_STATE cannot be used as a key column, and the signature of the aggregation function must be declared at the same time when creating the table.\n  User does not need to specify length and default value. The actual stored data size is related to the function implementation.\n")),(0,r.yg)("p",null,"  AGG_STATE can only be used with ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/combinators/state"},"state"),"\n/",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/combinators/merge"},"merge"),"/",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/combinators/union"},"union")," function combiner usage."),(0,r.yg)("p",null,"  It should be noted that the signature of the aggregation function is also part of the type, and agg_state with different signatures cannot be mixed. For example, if the signature of the table creation statement is ",(0,r.yg)("inlineCode",{parentName:"p"},"max_by(int,int)"),", then ",(0,r.yg)("inlineCode",{parentName:"p"},"max_by(bigint,int)")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"group_concat(varchar)")," cannot be inserted.\nThe nullable attribute here is also part of the signature. If you can confirm that you will not enter a null value, you can declare the parameter as not null, which can obtain a smaller storage size and reduce serialization/deserialization overhead."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note: Because agg_state stores the intermediate result of the aggregation function, the read and write process is strongly dependent on the specific implementation of the aggregation function, if the implementation of the aggregation function is modified during the Doris version upgrade, it may cause incompatible situations. If the incompatibility occurs, the materialized view using the corresponding agg_state needs to be dropped and recreated, and the underlying aggregation table involved will be directly unavailable, so you need to use agg_state with caution.")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"Create table example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'  -- after doris-2.1.1\n  create table a_table(\n      k1 int null,\n      k2 agg_state<max_by(int not null,int)> generic,\n      k3 agg_state<group_concat(string) generic\n  )\n  aggregate key (k1)\n  distributed BY hash(k1) buckets 3\n  properties("replication_num" = "1");  \n\n  -- until doris-2.1.0\n  create table a_table(\n      k1 int null,\n      k2 agg_state max_by(int not null,int),\n      k3 agg_state group_concat(string)\n  )\n  aggregate key (k1)\n  distributed BY hash(k1) buckets 3\n  properties("replication_num" = "1");\n')),(0,r.yg)("p",null,"Here k2 and k3 use max_by and group_concat as aggregation types respectively."),(0,r.yg)("p",null,"Insert data example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    insert into a_table values(1,max_by_state(3,1),group_concat_state('a'));\n    insert into a_table values(1,max_by_state(2,2),group_concat_state('bb'));\n    insert into a_table values(2,max_by_state(1,3),group_concat_state('ccc'));\n")),(0,r.yg)("p",null,"For the agg_state column, the insert statement must use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/combinators/state"},"state")," function to generate the corresponding agg_state data, where the functions and input parameter types must completely correspond to agg_state."),(0,r.yg)("p",null,"Select data example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    mysql [test]>select k1,max_by_merge(k2),group_concat_merge(k3) from a_table group by k1 order by k1;\n    +------+--------------------+--------------------------+\n    | k1   | max_by_merge(`k2`) | group_concat_merge(`k3`) |\n    +------+--------------------+--------------------------+\n    |    1 |                  2 | bb,a                     |\n    |    2 |                  1 | ccc                      |\n    +------+--------------------+--------------------------+\n")),(0,r.yg)("p",null,"If you need to get the actual result, you need to use the corresponding ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/combinators/merge"},"merge")," function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    mysql [test]>select max_by_merge(u2),group_concat_merge(u3) from (\n    select k1,max_by_union(k2) as u2,group_concat_union(k3) u3 from a_table group by k1 order by k1\n    ) t;\n    +--------------------+--------------------------+\n    | max_by_merge(`u2`) | group_concat_merge(`u3`) |\n    +--------------------+--------------------------+\n    |                  1 | ccc,bb,a                 |\n    +--------------------+--------------------------+\n")),(0,r.yg)("p",null,"If you want to aggregate only the agg_state without getting the actual result during the process, you can use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/combinators/union"},"union")," function."),(0,r.yg)("p",null,"For more examples, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/regression-test/suites/datatype_p0/agg_state"},"datatype_p0/agg_state")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"AGG_STATE\n")))}p.isMDXComponent=!0}}]);