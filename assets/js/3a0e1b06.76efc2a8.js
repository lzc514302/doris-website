"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[456386],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},923871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const l={title:"date_ceil",language:"en"},a=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/date-ceil",id:"version-3.0/sql-manual/sql-functions/date-time-functions/date-ceil",title:"date_ceil",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/date-ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date-ceil",permalink:"/docs/3.0/sql-manual/sql-functions/date-time-functions/date-ceil",draft:!1,tags:[],version:"3.0",frontMatter:{title:"date_ceil",language:"en"},sidebar:"docs",previous:{title:"year_floor",permalink:"/docs/3.0/sql-manual/sql-functions/date-time-functions/year-floor"},next:{title:"second_ceil",permalink:"/docs/3.0/sql-manual/sql-functions/date-time-functions/second-ceil"}},c={},s=[{value:"date_ceil",id:"date_ceil",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practices",id:"best-practices",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"date_ceil"},"date_ceil"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Syntax")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_CEIL(DATETIME datetime, INTERVAL period type)")),(0,i.yg)("p",null,"Convert the date to the nearest rounding up time of the specified time interval period."),(0,i.yg)("p",null,"The datetime parameter is a valid date expression."),(0,i.yg)("p",null,"The period parameter specifies how many units each cycle consists of, starting from 0001-01-01T00:00:00"),(0,i.yg)("p",null,"Type: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 second);\n+--------------------------------------------------------------+\n| second_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:28:20                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 minute);\n+--------------------------------------------------------------+\n| minute_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 hour);\n+------------------------------------------------------------+\n| hour_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-13 23:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 day);\n+-----------------------------------------------------------+\n| day_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-----------------------------------------------------------+\n| 2023-07-15 00:00:00                                       |\n+-----------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 month);\n+-------------------------------------------------------------+\n| month_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-12-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 year);\n+------------------------------------------------------------+\n| year_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2026-01-01 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DATE_CEIL,DATE,CEIL\n")),(0,i.yg)("h3",{id:"best-practices"},"Best Practices"),(0,i.yg)("p",null,"See also"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./second_ceil"},"second_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./minute_ceil"},"minute_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./hour_ceil"},"hour_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./day_ceil"},"day_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./month_ceil"},"month_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./year_ceil"},"year_ceil"))))}d.isMDXComponent=!0}}]);