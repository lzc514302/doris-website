"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[554805],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>f});var r=t(296540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,s=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),c=u(t),y=i,f=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return t?r.createElement(f,l(l({ref:e},p),{},{components:t})):r.createElement(f,l({ref:e},p))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,l=new Array(o);l[0]=y;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a[c]="string"==typeof n?n:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},472943:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_NUM_TO_STRING",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-num-to-string",id:"version-2.1/sql-manual/sql-functions/ip-functions/ipv4-num-to-string",title:"IPV4_NUM_TO_STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/ip-functions/ipv4-num-to-string.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-num-to-string",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-num-to-string",draft:!1,tags:[],version:"2.1",frontMatter:{title:"IPV4_NUM_TO_STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_WINDOW_FUNNEL",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-window-funnel"},next:{title:"IPV4_STRING_TO_NUM",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-string-to-num"}},s={},u=[{value:"IPV4_NUM_TO_STRING",id:"ipv4_num_to_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function m(n){let{components:e,...t}=n;return(0,i.yg)(c,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_num_to_string"},"IPV4_NUM_TO_STRING"),(0,i.yg)("p",null,"IPV4_NUM_TO_STRING"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IPV4_NUM_TO_STRING(BIGINT ipv4_num)")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR INET_NTOA(BIGINT ipv4_num)")),(0,i.yg)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u7c7b\u578b\u4e3aInt16\u3001Int32\u3001Int64 \u4e14\u5927\u7aef\u8868\u793a\u7684 IPv4 \u7684\u5730\u5740\uff0c\u8fd4\u56de\u76f8\u5e94 IPv4 \u7684\u5b57\u7b26\u4e32\u8868\u73b0\u5f62\u5f0f\uff0c\u683c\u5f0f\u4e3aA.B.C.D\uff08\u4ee5\u70b9\u5206\u5272\u7684\u5341\u8fdb\u5236\u6570\u5b57\uff09\u3002"),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"\u5bf9\u4e8e\u8d1f\u6570\u6216\u8d85\u8fc7 ",(0,i.yg)("inlineCode",{parentName:"p"},"4294967295"),"\uff08\u5373 ",(0,i.yg)("inlineCode",{parentName:"p"},"'255.255.255.255'"),"\uff09\u7684\u5165\u53c2\u90fd\u8fd4\u56de ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u8868\u793a\u65e0\u6548\u8f93\u5165\u3002\u8be5\u51fd\u6570\u6709\u4e00\u4e2a\u522b\u540d\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"INET_NOTA"),"\u3002"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select ipv4_num_to_string(3232235521);\n+--------------------------------+\n| ipv4_num_to_string(3232235521) |\n+--------------------------------+\n| 192.168.0.1                    |\n+--------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select num,ipv4_num_to_string(num) from ipv4_bi;\n+------------+---------------------------+\n| num        | ipv4_num_to_string(`num`) |\n+------------+---------------------------+\n|         -1 | NULL                      |\n|          0 | 0.0.0.0                   |\n| 2130706433 | 127.0.0.1                 |\n| 4294967295 | 255.255.255.255           |\n| 4294967296 | NULL                      |\n+------------+---------------------------+\n7 rows in set (0.01 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV4_NUM_TO_STRING, INET_NTOA, IP"))}m.isMDXComponent=!0}}]);