"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[882633],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},592174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const i={title:"DATE_TRUNC",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/date-trunc",id:"version-2.1/sql-manual/sql-functions/date-time-functions/date-trunc",title:"DATE_TRUNC",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/date-time-functions/date-trunc.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date-trunc",permalink:"/docs/sql-manual/sql-functions/date-time-functions/date-trunc",draft:!1,tags:[],version:"2.1",frontMatter:{title:"DATE_TRUNC",language:"en"},sidebar:"docs",previous:{title:"DATE_SUB",permalink:"/docs/sql-manual/sql-functions/date-time-functions/date-sub"},next:{title:"DATE_FORMAT",permalink:"/docs/sql-manual/sql-functions/date-time-functions/date-format"}},c={},u=[{value:"date_trunc",id:"date_trunc",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date_trunc"},"date_trunc"),(0,a.yg)("p",null,"date_trunc"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_TRUNC(DATETIME datetime, VARCHAR unit)")),(0,a.yg)("p",null,"Truncates datetime in the specified time unit."),(0,a.yg)("p",null,"datetime is a legal date expression."),(0,a.yg)("p",null,"unit is the time unit you want to truncate. The optional values are as follows: ","[",(0,a.yg)("inlineCode",{parentName:"p"},"second"),",",(0,a.yg)("inlineCode",{parentName:"p"},"minute"),",",(0,a.yg)("inlineCode",{parentName:"p"},"hour"),",",(0,a.yg)("inlineCode",{parentName:"p"},"day"),",",(0,a.yg)("inlineCode",{parentName:"p"},"week"),",",(0,a.yg)("inlineCode",{parentName:"p"},"month"),",",(0,a.yg)("inlineCode",{parentName:"p"},"quarter"),",",(0,a.yg)("inlineCode",{parentName:"p"},"year"),"]","."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select date_trunc('2010-12-02 19:28:30', 'second');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'second')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:30                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'minute');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'minute')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'hour');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'hour')       |\n+-------------------------------------------------+\n| 2010-12-02 19:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'day');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'day')        |\n+-------------------------------------------------+\n| 2010-12-02 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'week');\n+-------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'week') |\n+-------------------------------------------+\n| 2010-11-29 00:00:00                       |\n+-------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'month');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'month')      |\n+-------------------------------------------------+\n| 2010-12-01 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'quarter');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'quarter')    |\n+-------------------------------------------------+\n| 2010-10-01 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'year');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'year')       |\n+-------------------------------------------------+\n| 2010-01-01 00:00:00                             |\n+-------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"DATE_TRUNC,DATE,DATETIME"))}p.isMDXComponent=!0}}]);