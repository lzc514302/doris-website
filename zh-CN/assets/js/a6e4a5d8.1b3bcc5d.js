"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[378731],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=s,y=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},125704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),s=(t(296540),t(15680));const a={title:"SPACE",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/space",id:"sql-manual/sql-functions/string-functions/space",title:"SPACE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/space.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/space",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/space",draft:!1,tags:[],version:"current",frontMatter:{title:"SPACE",language:"zh-CN"},sidebar:"docs",previous:{title:"UUID",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/uuid"},next:{title:"ESQUERY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/esquery"}},i={},c=[{value:"space",id:"space",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"space"},"space"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR space(Int num)")),(0,s.yg)("p",null,"\u8fd4\u56de\u7531num\u4e2a\u7a7a\u683c\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select length(space(10));\n+-------------------+\n| length(space(10)) |\n+-------------------+\n|                10 |\n+-------------------+\n1 row in set (0.01 sec)\n\nmysql> select length(space(-10));\n+--------------------+\n| length(space(-10)) |\n+--------------------+\n|                  0 |\n+--------------------+\n1 row in set (0.02 sec)\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"space\n")))}f.isMDXComponent=!0}}]);