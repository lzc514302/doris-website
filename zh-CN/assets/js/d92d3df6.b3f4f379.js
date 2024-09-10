"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[380397],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,f=p["".concat(i,".").concat(y)]||p[y]||g[y]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},541718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"REGR_SXX",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/aggregate-functions/regr_sxx",id:"sql-manual/sql-functions/aggregate-functions/regr_sxx",title:"REGR_SXX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/regr_sxx.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/regr_sxx",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/regr_sxx",draft:!1,tags:[],version:"current",frontMatter:{title:"REGR_SXX",language:"zh-CN"},sidebar:"docs",previous:{title:"RETENTION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/retention"},next:{title:"REGR_SXY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/regr_sxy"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"KEYWORDS",id:"keywords",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"}," double regr_sxx(y, x)")),(0,a.yg)("p",null,"x, y \u652f\u6301\u57fa\u672c\u6570\u5b57\u7c7b\u578b"),(0,a.yg)("p",null,"\u8ba1\u7b97\u6240\u6709\u8f93\u5165\u6570\u636e\u70b9\u4e0e\u5176\u7ebf\u6027\u56de\u5f52\u62df\u5408\u76f4\u7ebf\u4e4b\u95f4\u7684\u6a2a\u5411\u79bb\u5dee\u5e73\u65b9\u548c"),(0,a.yg)("h2",{id:"example"},"EXAMPLE"),(0,a.yg)("p",null,"\u6211\u4eec\u6709\u5982\u4e0b\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from t;\n+------+------+------+\n| id   | x    | y    |\n+------+------+------+\n|    2 |   14 |   27 |\n|    4 |   10 |   20 |\n|    3 |    5 |    7 |\n|    1 |   18 |   13 |\n+------+------+------+\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select regr_sxx(y,x) from t;\n+----------------+\n| regr_sxx(y, x) |\n+----------------+\n|          92.75 |\n+----------------+\n\n")),(0,a.yg)("h2",{id:"keywords"},"KEYWORDS"),(0,a.yg)("p",null,"REGR_SXX"))}g.isMDXComponent=!0}}]);