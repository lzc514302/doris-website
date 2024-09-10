"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[949232],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>E});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,E=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(E,s(s({ref:t},m),{},{components:r})):n.createElement(E,s({ref:t},m))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},956543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const l={title:"ALTER-SYSTEM-ADD-BROKER",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",id:"version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",title:"ALTER-SYSTEM-ADD-BROKER",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",permalink:"/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ALTER-SYSTEM-ADD-BROKER",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-BACKEND",permalink:"/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BACKEND"},next:{title:"ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND"}},i={},p=[{value:"ALTER-SYSTEM-ADD-BROKER",id:"alter-system-add-broker",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-add-broker"},"ALTER-SYSTEM-ADD-BROKER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM ADD BROKER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to add a BROKER node. (Administrator only!)"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD BROKER broker_name "broker_host1:broker_ipc_port1","broker_host2:broker_ipc_port2",...;\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add two brokers"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER SYSTEM ADD BROKER "host1:port", "host2:port";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"When fe enable fqdn(",(0,a.yg)("a",{parentName:"p",href:"/docs/3.0/admin-manual/cluster-management/fqdn"},"fqdn"),"),add one Broker"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER SYSTEM ADD BROKER "broker_fqdn1:port";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);