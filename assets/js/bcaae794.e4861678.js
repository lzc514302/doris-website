"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[439015],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},823144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const o={title:"PAUSE-SYNC-JOB",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",id:"version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",title:"PAUSE-SYNC-JOB",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",draft:!1,tags:[],version:"3.0",frontMatter:{title:"PAUSE-SYNC-JOB",language:"en"},sidebar:"docs",previous:{title:"CREATE-SYNC-JOB",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"},next:{title:"RESUME-SYNC-JOB",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB"}},s={},p=[{value:"PAUSE-SYNC-JOB",id:"pause-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"pause-sync-job"},"PAUSE-SYNC-JOB"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"PAUSE SYNC JOB"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Pause a running resident data synchronization job in a database via ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name"),". The suspended job will stop synchronizing data and keep the latest position of consumption until it is resumed by the user."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE SYNC JOB [db.]job_name\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Pause the data sync job named ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE SYNC JOB `job_name`;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"PAUSE, SYNC, JOB\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);