"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[162948],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,y=p["".concat(o,".").concat(g)]||p[g]||f[g]||s;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=g;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},784824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(58168),i=(n(296540),n(15680));const s={title:"BIT_SHIFT_RIGHT",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/bitwise-functions/bitshiftright",id:"sql-manual/sql-functions/bitwise-functions/bitshiftright",title:"BIT_SHIFT_RIGHT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitwise-functions/bitshiftright.md",sourceDirName:"sql-manual/sql-functions/bitwise-functions",slug:"/sql-manual/sql-functions/bitwise-functions/bitshiftright",permalink:"/docs/dev/sql-manual/sql-functions/bitwise-functions/bitshiftright",draft:!1,tags:[],version:"current",frontMatter:{title:"BIT_SHIFT_RIGHT",language:"en"},sidebar:"docs",previous:{title:"BIT_SHIFT_LEFT",permalink:"/docs/dev/sql-manual/sql-functions/bitwise-functions/bitshiftleft"},next:{title:"ASSERT_TRUE",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/assert-true"}},o={},c=[{value:"bit_shift_right",id:"bit_shift_right",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bit_shift_right"},"bit_shift_right"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIT_SHIFT_RIGHT(BIGINT x, TINYINT c)")),(0,i.yg)("p",null,"Return result of logical right shift of ",(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT")," type x by c bits."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("p",null,"Normal case"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'select 1024 as x, number as c, bit_shift_right(1024, number) as bit_shift_right from numbers("number"="5")\n--------------\n\n+------+------+-----------------+\n| x    | c    | bit_shift_right |\n+------+------+-----------------+\n| 1024 |    0 |            1024 |\n| 1024 |    1 |             512 |\n| 1024 |    2 |             256 |\n| 1024 |    3 |             128 |\n| 1024 |    4 |              64 |\n+------+------+-----------------+\n5 rows in set (0.03 sec)\n')),(0,i.yg)("p",null,"Logical right shift ",(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT")," -1 by 1 bits gets ",(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT_MAX")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select bit_shift_right(-1, 1)\n--------------\n\n+------------------------+\n| bit_shift_right(-1, 1) |\n+------------------------+\n|    9223372036854775807 |\n+------------------------+\n")),(0,i.yg)("p",null,"Return zero if ",(0,i.yg)("inlineCode",{parentName:"p"},"c")," is less than 0"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select bit_shift_right(100, -1)\n--------------\n\n+--------------------------+\n| bit_shift_right(100, -1) |\n+--------------------------+\n|                        0 |\n+--------------------------+\n1 row in set (0.04 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITSHIFT, BITSHIFTRIGHT\n")))}f.isMDXComponent=!0}}]);