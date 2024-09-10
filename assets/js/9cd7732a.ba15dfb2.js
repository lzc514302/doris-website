"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[110581],{15680:(e,r,n)=>{n.d(r,{xA:()=>y,yg:()=>f});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),u=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},y=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=t,f=c["".concat(i,".").concat(m)]||c[m]||p[m]||s;return n?a.createElement(f,l(l({ref:r},y),{},{components:n})):a.createElement(f,l({ref:r},y))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[c]="string"==typeof e?e:t,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},300947:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(58168),t=(n(296540),n(15680));const s={title:"array_sum",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_sum",id:"version-1.2/sql-manual/sql-functions/array-functions/array_sum",title:"array_sum",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_sum.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_sum",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_sum",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_sum",language:"en"},sidebar:"docs",previous:{title:"array_avg",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_avg"},next:{title:"array_size",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_size"}},i={},u=[{value:"array_sum",id:"array_sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:u},c="wrapper";function p(e){let{components:r,...n}=e;return(0,t.yg)(c,(0,a.A)({},y,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_sum"},"array_sum"),(0,t.yg)("p",null,"array_sum"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"T array_sum(ARRAY<T> src, Array<T> key)\nT array_sum(lambda, Array<T> arr1, Array<T> arr2 ....)\n")),(0,t.yg)("p",null,"Get the sum of all elements in an array (",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," values are skipped).\nWhen the array is empty or all elements in the array are ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," values, the function returns ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_sum(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_sum(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               6 |\n| [1, NULL, 3] |               4 |\n+--------------+-----------------+\n4 rows in set (0.01 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,SUM,ARRAY_SUM"))}p.isMDXComponent=!0}}]);