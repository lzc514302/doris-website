"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[209228],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||g[m]||r;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},238341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(58168),i=(n(296540),n(15680));const r={title:"FineBI",language:"en"},o=void 0,s={unversionedId:"ecosystem/bi/finebi",id:"version-3.0/ecosystem/bi/finebi",title:"FineBI",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/bi/finebi.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/finebi",permalink:"/docs/3.0/ecosystem/bi/finebi",draft:!1,tags:[],version:"3.0",frontMatter:{title:"FineBI",language:"en"},sidebar:"ecosystem",previous:{title:"DataGrip",permalink:"/docs/3.0/ecosystem/bi/datagrip"},next:{title:"Power BI",permalink:"/docs/3.0/ecosystem/bi/powerbi"}},l={},c=[{value:"FineBI Introduction",id:"finebi-introduction",level:2},{value:"Precondition",id:"precondition",level:2},{value:"Login and Connection",id:"login-and-connection",level:2},{value:"Create  model",id:"create--model",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"finebi-introduction"},"FineBI Introduction"),(0,i.yg)("p",null,"As a business intelligence product, FineBI has a system architecture of data processing, real-time analysis, multidimensional analysis Dashboard and other functions. FineBI supports rich data source connection and analysis and management of tables with multiple views. FineBI can successfully support the modeling and visualization of internal and external data of Apache Doris."),(0,i.yg)("h2",{id:"precondition"},"Precondition"),(0,i.yg)("p",null,"Install FineBI 5.0 or later, Download link: ",(0,i.yg)("a",{parentName:"p",href:"https://intl.finebi.com/"},"https://intl.finebi.com/")),(0,i.yg)("h2",{id:"login-and-connection"},"Login and Connection"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create  account and  log in FineBI"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"login page",src:n(401919).A,width:"686",height:"592"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Select the Built-in database, If you need to select an external database configuration, the documentation is available\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://help.fanruan.com/finebi-en/doc-view-4437.html"},"https://help.fanruan.com/finebi-en/doc-view-4437.html")),(0,i.yg)("admonition",{parentName:"li",title:"Note",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"It is recommended to select the built-in database as the information repository of FineBI. The database type selected here is not the target database for querying and analyzing data, but the database for storing and maintaining FineBI model, dashboard and other information. FineBI needs to add, delete, modify and check it.")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"select database",src:n(65060).A,width:"1388",height:"684"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Click the Management System button and select the database connection management in Data Connections to create a new database connection."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"data connection",src:n(318957).A,width:"2004",height:"1532"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"On the new database connection page, select MySQL database"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"select connection",src:n(514098).A,width:"1776",height:"498"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Fill in the link information of the Doris database"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Parameters are described as follows\uff1a"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Username\uff1aThe username for logging into Doris\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Password\uff1aPassword of the current user\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Host\uff1aIP address of the FE host in the Doris cluster\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Port\uff1aFE query port of the Doris cluster\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Coding\uff1aEncoding format of the Doris cluster\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Name Database\uff1aTarget database in Doris cluster\u3002"))))),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"connection information",src:n(2765).A,width:"1072",height:"1468"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Click the test link. Connection succeeded is displayed when the connection information is correct"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"connection test",src:n(450592).A,width:"904",height:"512"})))),(0,i.yg)("h2",{id:"create--model"},"Create  model"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'In the "Public Data" section, click to create a new dataset. Then click the database table'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"new dataset",src:n(845065).A,width:"746",height:"624"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"You need to import tables in the existing database connection"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"select table",src:n(879839).A,width:"2294",height:"410"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"You need to refresh each imported table after importing the table. You can analyze the table in the topic only after refreshing the table"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"refresh table",src:n(51687).A,width:"3650",height:"1330"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add the imported public data to the edited topic, and then conduct compass analysis and configuration according to business logic."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"data analysis",src:n(995887).A,width:"2802",height:"1526"})))))}g.isMDXComponent=!0},401919:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-1-9ac6bf2a297df74354404c35d165b808.png"},995887:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-10-c858dee55fb99605ce13fc9a2d4f13b5.png"},65060:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-2-8f7c241a6c82537184e7502da96f8f0c.png"},318957:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-3-5ad1b290c79c275e001177c25b3d5886.png"},514098:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-4-3c85ea98da3aaa21519a5b69f2fefd8f.png"},2765:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-5-1-93f3b223024e2e9a50ba2f0a2da45fd4.png"},450592:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-6-bf862861654bdb2dd749e42c30dbe853.png"},845065:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-7-a6ead2e4bfeda94e238c92e7a15176fb.png"},879839:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-8-2-85e527a5d08fd9059faf560e21a99fed.png"},51687:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-finebi-en-9-81e4d1fc59ad09d95d6f0a6b05127339.png"}}]);