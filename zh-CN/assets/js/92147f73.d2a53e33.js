"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[162940],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,y=c["".concat(i,".").concat(g)]||c[g]||m[g]||p;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<p;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},657612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=a(58168),n=(a(296540),a(15680));const p={title:"Release 1.1.4",language:"zh-CN"},l=void 0,o={unversionedId:"releasenotes/v1.1/release-1.1.4",id:"version-1.2/releasenotes/v1.1/release-1.1.4",title:"Release 1.1.4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/releasenotes/v1.1/release-1.1.4.md",sourceDirName:"releasenotes/v1.1",slug:"/releasenotes/v1.1/release-1.1.4",permalink:"/zh-CN/docs/1.2/releasenotes/v1.1/release-1.1.4",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Release 1.1.4",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 1.1.5",permalink:"/zh-CN/docs/1.2/releasenotes/v1.1/release-1.1.5"},next:{title:"Release 1.1.3",permalink:"/zh-CN/docs/1.2/releasenotes/v1.1/release-1.1.3"}},i={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u4f5c\u4e3a 1.1 LTS\uff08Long-term Support\uff0c\u957f\u5468\u671f\u652f\u6301\uff09\u7248\u672c\u57fa\u7840\u4e4b\u4e0a\u7684 Bugfix \u7248\u672c\uff0c\u5728 Apache Doris 1.1.4 \u7248\u672c\u4e2d\uff0cDoris \u56e2\u961f\u4fee\u590d\u4e86\u81ea 1.1.3 \u7248\u672c\u4ee5\u6765\u7684\u7ea6 60 \u4e2a Issue \u6216\u6027\u80fd\u4f18\u5316\u9879\u3002\u6539\u8fdb\u4e86 Spark Load \u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u4f18\u5316\u4e86\u8bf8\u591a\u5185\u5b58\u4ee5\u53ca BE \u5f02\u5e38\u5b95\u673a\u7684\u95ee\u9898\uff0c\u7cfb\u7edf\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u5f97\u4ee5\u8fdb\u4e00\u6b65\u52a0\u5f3a\uff0c\u63a8\u8350\u6240\u6709\u7528\u6237\u4e0b\u8f7d\u548c\u4f7f\u7528\u3002"),(0,n.yg)("h1",{id:"\u65b0\u589e\u529f\u80fd"},"\u65b0\u589e\u529f\u80fd"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Broker Load \u652f\u6301 \u534e\u4e3a\u4e91 OBS \u5bf9\u8c61\u5b58\u50a8\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13523"},"#13523"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Spark Load \u652f\u6301 Parquet \u548c Orc \u6587\u4ef6\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13438"},"#13438")))),(0,n.yg)("h1",{id:"\u4f18\u5316\u6539\u8fdb"},"\u4f18\u5316\u6539\u8fdb"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u7981\u7528 Metric Hook \u4e2d\u7684\u4e92\u65a5\u91cf\uff0c\u5176\u5c06\u5f71\u54cd\u6570\u636e\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u7684\u67e5\u8be2\u6027\u80fd\u3002 ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/10941"},"#10941"))),(0,n.yg)("h1",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5f53 Spark Load \u52a0\u8f7d\u6587\u4ef6\u65f6 Where \u6761\u4ef6\u4e0d\u751f\u6548\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13804"},"#13804"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 If \u51fd\u6570\u5b58\u5728 Nullable \u5217\u65f6\u5f00\u542f\u5411\u91cf\u5316\u8fd4\u56de\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13779"},"#13779"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5728\u4f7f\u7528 Anti Join \u548c\u5176\u4ed6 Join \u8c13\u8bcd\u65f6\u4ea7\u751f\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13743"},"#13743"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5f53\u8c03\u7528\u51fd\u6570 concat(ifnull)\u65f6 BE \u5b95\u673a\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13693"},"#13693"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 group by \u8bed\u53e5\u4e2d\u5b58\u5728\u51fd\u6570\u65f6 planner \u9519\u8bef\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13613"},"#13613"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 lateral view \u8bed\u53e5\u4e0d\u80fd\u6b63\u786e\u8bc6\u522b\u8868\u540d\u548c\u5217\u540d\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13600"},"#13600"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u548c\u8868\u522b\u540d\u65f6\u51fa\u73b0\u672a\u77e5\u5217\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13605"},"#13605"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 JSONReader \u65e0\u6cd5\u91ca\u653e\u503c\u548c\u89e3\u6790 allocator \u5185\u5b58\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13513"},"#13513"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5f53 enable_vectorized_alter_table \u4e3a true \u65f6\u5141\u8bb8\u4f7f\u7528 to_bitmap() \u5bf9\u8d1f\u503c\u5217\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13448"},"#13448"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u51fd\u6570 from_date_format_str \u4e2d\u5fae\u79d2\u6570\u4e22\u5931\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13446"},"#13446"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u6392\u5e8f exprs \u7684 nullability \u5c5e\u6027\u5728\u4f7f\u7528\u5b50 smap \u4fe1\u606f\u8fdb\u884c\u66ff\u6362\u540e\u53ef\u80fd\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13328"},"#13328"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 case when \u6709 1000 \u4e2a\u6761\u4ef6\u65f6\u51fa\u73b0 Core \u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13315"},"#13315"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Stream Load \u5bfc\u5165\u6570\u636e\u65f6\u6700\u540e\u4e00\u884c\u6570\u636e\u4e22\u5931\u7684\u95ee\u9898\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13066"},"#13066"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u6062\u590d\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u4e0e\u5907\u4efd\u524d\u76f8\u540c\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11942"},"#11942")))))}m.isMDXComponent=!0}}]);