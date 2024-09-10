"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24237],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},310557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const o={title:"Release 2.0.8",language:"en"},i=void 0,l={unversionedId:"releasenotes/v2.0/release-2.0.8",id:"version-2.1/releasenotes/v2.0/release-2.0.8",title:"Release 2.0.8",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/releasenotes/v2.0/release-2.0.8.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.8",permalink:"/docs/releasenotes/v2.0/release-2.0.8",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Release 2.0.8",language:"en"},sidebar:"releasenotes",previous:{title:"Release 2.0.9",permalink:"/docs/releasenotes/v2.0/release-2.0.9"},next:{title:"Release 2.0.7",permalink:"/docs/releasenotes/v2.0/release-2.0.7"}},s={},p=[{value:"1 Behavior change",id:"1-behavior-change",level:2},{value:"2 New features",id:"2-new-features",level:2},{value:"3 Improvement and optimizations",id:"3-improvement-and-optimizations",level:2},{value:"4 Credits",id:"4-credits",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Thanks to our community users and developers, about 65 improvements and bug fixes have been made in Doris 2.0.8 version."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Quick Download")," : ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GitHub")," : ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")))),(0,r.yg)("h2",{id:"1-behavior-change"},"1 Behavior change"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW")," statement can not be executed with high version of MySQL 8.x jdbc driver. So rename these statement, remove the ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN")," keywords. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/29492"},"https://github.com/apache/doris/pull/29492"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN SHOW CONFIG -> SHOW CONFIG\nADMIN SHOW REPLICA -> SHOW REPLICA\nADMIN DIAGNOSE TABLET -> SHOW TABLET DIAGNOSIS\nADMIN SHOW TABLET -> SHOW TABLET\n")),(0,r.yg)("h2",{id:"2-new-features"},"2 New features"),(0,r.yg)("p",null,"N/A"),(0,r.yg)("h2",{id:"3-improvement-and-optimizations"},"3 Improvement and optimizations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Make Inverted Index work with TopN opt in Nereids")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Limit the max string length to 1024 while collecting column stats to control BE memory usage")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC Catalog close when JDBC client is not empty")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Accept all Iceberg database and do not check the name format of database")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Refresh external table's rowcount async to avoid cache miss and unstable query plan")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Simplify the isSplitable method of hive external table to avoid too many hadoop metrics"))),(0,r.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.7...2.0.8"},"GitHub")," ."),(0,r.yg)("h2",{id:"4-credits"},"4 Credits"),(0,r.yg)("p",null,"Thanks all who contribute to this release:"),(0,r.yg)("p",null,"924060929,  AcKing-Sam, amorynan, AshinGau, BePPPower, BiteTheDDDDt, ByteYue, cambyzju,  dongsilun, eldenmoon, feiniaofeiafei, gnehil, Jibing-Li, liaoxin01, luwei16,  morningman, morrySnow, mrhhsg, Mryange, nextdreamblue, platoneko,  starocean999, SWJTU-ZhangLei, wuwenchi, xiaokang, xinyiZzz, Yukang-Lian,  Yulei-Yang, zclllyybb, zddr, zhangstar333, zhiqiang-hhhh, ziyanTOP, zy-kkk,  zzzxl1993"))}m.isMDXComponent=!0}}]);