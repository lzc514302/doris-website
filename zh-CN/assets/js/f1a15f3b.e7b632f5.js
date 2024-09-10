"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[832576],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>v});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,v=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},513547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const i={title:"IPV4",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-data-types/ip/IPV4",id:"version-3.0/sql-manual/sql-data-types/ip/IPV4",title:"IPV4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-data-types/ip/IPV4.md",sourceDirName:"sql-manual/sql-data-types/ip",slug:"/sql-manual/sql-data-types/ip/IPV4",permalink:"/zh-CN/docs/3.0/sql-manual/sql-data-types/ip/IPV4",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IPV4",language:"zh-CN"},sidebar:"docs",previous:{title:"IP \u7c7b\u578b\u6982\u89c8",permalink:"/zh-CN/docs/3.0/sql-manual/sql-data-types/ip/ip-overview"},next:{title:"IPV6",permalink:"/zh-CN/docs/3.0/sql-manual/sql-data-types/ip/IPV6"}},p={},s=[{value:"IPV4",id:"ipv4",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"ipv4"},"IPV4"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"IPv4 \u7c7b\u578b\uff0c\u4ee5 UInt32 \u7684\u5f62\u5f0f\u5b58\u50a8\u5728 4 \u4e2a\u5b57\u8282\u4e2d\uff0c\u7528\u4e8e\u8868\u793a IPv4 \u5730\u5740\u3002\n\u53d6\u503c\u8303\u56f4\u662f ","['0.0.0.0', '255.255.255.255']","\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u8d85\u51fa\u53d6\u503c\u8303\u56f4\u6216\u8005\u683c\u5f0f\u975e\u6cd5\u7684\u8f93\u5165\u5c06\u8fd4\u56deNULL")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE ipv4_test (\n  `id` int,\n  `ip_v4` ipv4\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,a.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"insert into ipv4_test values(1, '0.0.0.0');\ninsert into ipv4_test values(2, '127.0.0.1');\ninsert into ipv4_test values(3, '59.50.185.152');\ninsert into ipv4_test values(4, '255.255.255.255');\ninsert into ipv4_test values(5, '255.255.255.256'); // invalid data\n")),(0,a.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select * from ipv4_test order by id;\n+------+-----------------+\n| id   | ip_v4           |\n+------+-----------------+\n|    1 | 0.0.0.0         |\n|    2 | 127.0.0.1       |\n|    3 | 59.50.185.152   |\n|    4 | 255.255.255.255 |\n|    5 | NULL            |\n+------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"IPV4"))}d.isMDXComponent=!0}}]);