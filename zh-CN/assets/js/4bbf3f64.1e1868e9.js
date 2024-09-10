"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[525844],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=s(n),p=a,f=y["".concat(c,".").concat(p)]||y[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},527653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"DAYOFYEAR",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/dayofyear",id:"sql-manual/sql-functions/date-time-functions/dayofyear",title:"DAYOFYEAR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/dayofyear.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/dayofyear",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/dayofyear",draft:!1,tags:[],version:"current",frontMatter:{title:"DAYOFYEAR",language:"zh-CN"},sidebar:"docs",previous:{title:"DAY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/day"},next:{title:"DAYOFMONTH",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/dayofmonth"}},c={},s=[{value:"dayofyear",id:"dayofyear",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},y="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"dayofyear"},"dayofyear"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT DAYOFYEAR(DATETIME date)")),(0,a.yg)("p",null,"\u83b7\u5f97\u65e5\u671f\u4e2d\u5bf9\u5e94\u5f53\u5e74\u4e2d\u7684\u54ea\u4e00\u5929\u3002"),(0,a.yg)("p",null,"\u53c2\u6570\u4e3aDate\u6216\u8005Datetime\u7c7b\u578b"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select dayofyear('2007-02-03 00:00:00');\n+----------------------------------+\n| dayofyear('2007-02-03 00:00:00') |\n+----------------------------------+\n|                               34 |\n+----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DAYOFYEAR\n")))}d.isMDXComponent=!0}}]);