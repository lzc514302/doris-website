"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[281282],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"PMOD",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/numeric-functions/pmod",id:"version-2.0/sql-manual/sql-functions/numeric-functions/pmod",title:"PMOD",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/pmod.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/pmod",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/pmod",draft:!1,tags:[],version:"2.0",frontMatter:{title:"PMOD",language:"en"},sidebar:"docs",previous:{title:"FLOOR",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/floor"},next:{title:"ROUND",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/round"}},s={},c=[{value:"pmod",id:"pmod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"pmod"},"pmod"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"BIGINT PMOD(BIGINT x, BIGINT y)\nDOUBLE PMOD(DOUBLE x, DOUBLE y)\n")),(0,o.yg)("p",null,"Returns the positive result of x mod y in the residue systems.\nFormally, return ",(0,o.yg)("inlineCode",{parentName:"p"},"(x%y+y)%y"),"."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL [test]> SELECT PMOD(13,5);\n+-------------+\n| pmod(13, 5) |\n+-------------+\n|           3 |\n+-------------+\n\nMySQL [test]> SELECT PMOD(-13,5);\n+-------------+\n| pmod(-13, 5) |\n+-------------+\n|           2 |\n+-------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"PMOD\n")))}m.isMDXComponent=!0}}]);