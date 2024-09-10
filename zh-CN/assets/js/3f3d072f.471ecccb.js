"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[673238],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(t),y=a,d=g["".concat(p,".").concat(y)]||g[y]||u[y]||o;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},999685:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(58168),a=(t(296540),t(15680));const o={title:"HLL(HyperLogLog)",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-data-types/aggregate/HLL",id:"version-2.0/sql-manual/sql-data-types/aggregate/HLL",title:"HLL(HyperLogLog)",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-data-types/aggregate/HLL.md",sourceDirName:"sql-manual/sql-data-types/aggregate",slug:"/sql-manual/sql-data-types/aggregate/HLL",permalink:"/zh-CN/docs/2.0/sql-manual/sql-data-types/aggregate/HLL",draft:!1,tags:[],version:"2.0",frontMatter:{title:"HLL(HyperLogLog)",language:"zh-CN"},sidebar:"docs",previous:{title:"\u805a\u5408\u7c7b\u578b\u6982\u89c8",permalink:"/zh-CN/docs/2.0/sql-manual/sql-data-types/aggregate/aggregate-overview"},next:{title:"BITMAP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-data-types/aggregate/BITMAP"}},p={},s=[{value:"HLL(HyperLogLog)",id:"hllhyperloglog",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},g="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(g,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hllhyperloglog"},"HLL(HyperLogLog)"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"HLL\nHLL \u4e0d\u80fd\u4f5c\u4e3a key \u5217\u4f7f\u7528\uff0c\u652f\u6301\u5728 Aggregate \u6a21\u578b\u3001Duplicate \u6a21\u578b\u548c Unique \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002\u5728 Aggregate \u6a21\u578b\u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u5efa\u8868\u65f6\u914d\u5408\u7684\u805a\u5408\u7c7b\u578b\u4e3a HLL_UNION\u3002\n\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\n\u5e76\u4e14 HLL \u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684 hll_union_agg\u3001hll_raw_agg\u3001hll_cardinality\u3001hll_hash \u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"),(0,a.yg)("p",null,"HLL \u662f\u6a21\u7cca\u53bb\u91cd\uff0c\u5728\u6570\u636e\u91cf\u5927\u7684\u60c5\u51b5\u6027\u80fd\u4f18\u4e8e Count Distinct\u3002\nHLL \u7684\u8bef\u5dee\u901a\u5e38\u5728 1% \u5de6\u53f3\uff0c\u6709\u65f6\u4f1a\u8fbe\u5230 2%\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select hour, HLL_UNION_AGG(pv) over(order by hour) uv from(\n   select hour, HLL_RAW_AGG(device_id) as pv\n   from metric_table -- \u67e5\u8be2\u6bcf\u5c0f\u65f6\u7684\u7d2f\u8ba1UV\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HLL,HYPERLOGLOG\n")))}u.isMDXComponent=!0}}]);