"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[835230],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>f});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||y[d]||l;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},956206:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(58168),a=(n(296540),n(15680));const l={title:"DATE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DATE",id:"version-1.2/sql-manual/sql-reference/Data-Types/DATE",title:"DATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/DATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DATE",language:"zh-CN"},sidebar:"docs",previous:{title:"DECIMALV3",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMALV3"},next:{title:"TIME",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/TIME"}},c={},s=[{value:"DATE",id:"date",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date"},"DATE"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE\u51fd\u6570\n    Syntax:\n        DATE(expr) \n    \u5c06\u8f93\u5165\u7684\u7c7b\u578b\u8f6c\u5316\u4e3aDATE\u7c7b\u578b\nDATE\u7c7b\u578b\n    \u65e5\u671f\u7c7b\u578b\uff0c\u76ee\u524d\u7684\u53d6\u503c\u8303\u56f4\u662f['0000-01-01', '9999-12-31'], \u9ed8\u8ba4\u7684\u6253\u5370\u5f62\u5f0f\u662f'yyyy-MM-dd'\n")),(0,a.yg)("h3",{id:"note"},"note"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u5982\u679c\u60a8\u4f7f\u75281.2\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u5f3a\u70c8\u63a8\u8350\u60a8\u4f7f\u7528DATEV2\u7c7b\u578b\u66ff\u4ee3DATE\u7c7b\u578b\u3002\u76f8\u6bd4DATE\u7c7b\u578b\uff0cDATEV2\u66f4\u52a0\u9ad8\u6548\u3002\n\u6211\u4eec\u6253\u7b97\u57282024\u5e74\u5220\u9664\u8fd9\u4e2a\u7c7b\u578b\uff0c\u76ee\u524d\u9636\u6bb5\uff0cDoris\u9ed8\u8ba4\u7981\u6b62\u521b\u5efa\u542b\u6709DATE\u7c7b\u578b\u7684\u8868\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u9700\u8981\u5728FE\u7684config\u4e2d\u6dfb\u52a0`disable_datev1 = false`\uff0c\u5e76\u91cd\u542fFE\u3002\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT DATE('2003-12-31 01:02:03');\n    -> '2003-12-31'\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE\n")))}y.isMDXComponent=!0}}]);