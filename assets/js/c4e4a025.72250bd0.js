"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7853],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},513108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-TABLE-STATS",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",title:"SHOW-TABLE-STATS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-TABLE-STATS",language:"en"},sidebar:"docs",previous:{title:"SHOW-PROC",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-PROC"},next:{title:"SHOW-TABLE-STATUS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATUS"}},s={},m=[{value:"SHOW-TABLE-STATS",id:"show-table-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-table-stats"},"SHOW-TABLE-STATS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW TABLE STATS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW TABLE STATS")," to view an overview of statistics collection for a table."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TABLE STATS table_name;\n")),(0,r.yg)("p",null,"Where:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"table_name: The target table name. It can be in the format ",(0,r.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),".")),(0,r.yg)("p",null,"Output:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"updated_rows")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Updated rows since the last ANALYZE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"query_times")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Reserved column for recording the number of times the table was queried in future versions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"row_count")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Number of rows (does not reflect the exact number of rows at the time of command execution)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"updated_time")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Last update time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"columns")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Columns for which statistics information has been collected")))),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show table stats lineitem \\G;\n*************************** 1. row ***************************\nupdated_rows: 0\n query_times: 0\n   row_count: 6001215\nupdated_time: 2023-11-07\n     columns: [l_returnflag, l_receiptdate, l_tax, l_shipmode, l_suppkey, l_shipdate, l_commitdate, l_partkey, l_orderkey, l_quantity, l_linestatus, l_comment, l_extendedprice, l_linenumber, l_discount, l_shipinstruct]\n     trigger: MANUAL\n")),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"SHOW, TABLE, STATS"))}c.isMDXComponent=!0}}]);