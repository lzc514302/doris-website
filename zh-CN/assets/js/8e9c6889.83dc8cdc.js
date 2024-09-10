"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[656933],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||y[u]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},295472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(296540),r(15680));const l={title:"DROP-POLICY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",title:"DROP-POLICY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DROP-POLICY",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-FILE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FILE"},next:{title:"DROP-ENCRYPT-KEY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY"}},p={},s=[{value:"Name",id:"name",level:2},{value:"Description",id:"description",level:2},{value:"ROW POLICY",id:"row-policy",level:3},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}],c={toc:s},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP POLICY"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"drop policy for row or storage"),(0,a.yg)("h3",{id:"row-policy"},"ROW POLICY"),(0,a.yg)("p",null,"Grammar\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Drop row policy")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 [FOR user| ROLE role];\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Drop storage policy")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP STORAGE POLICY policy_name1\n")),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the row policy for table1 named test_row_policy_1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the row policy for table1 using by user test"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 for test\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the row policy for table1 using by role1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 for role role1\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the storage policy named policy_name1"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP STORAGE POLICY policy_name1\n")),(0,a.yg)("h2",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP, POLICY\n")),(0,a.yg)("h2",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);