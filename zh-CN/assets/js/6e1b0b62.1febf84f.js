"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[107171],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>N});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):g(g({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),y=o(t),u=l,N=y["".concat(p,".").concat(u)]||y[u]||d[u]||r;return t?a.createElement(N,g(g({ref:n},m),{},{components:t})):a.createElement(N,g({ref:n},m))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[y]="string"==typeof e?e:l,g[1]=i;for(var o=2;o<r;o++)g[o]=t[o];return a.createElement.apply(null,g)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},600896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(58168),l=(t(296540),t(15680));const r={title:"BE \u65e5\u5fd7\u7ba1\u7406",language:"zh-CN"},g=void 0,i={unversionedId:"admin-manual/log-management/be-log",id:"version-3.0/admin-manual/log-management/be-log",title:"BE \u65e5\u5fd7\u7ba1\u7406",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/log-management/be-log.md",sourceDirName:"admin-manual/log-management",slug:"/admin-manual/log-management/be-log",permalink:"/zh-CN/docs/3.0/admin-manual/log-management/be-log",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BE \u65e5\u5fd7\u7ba1\u7406",language:"zh-CN"},sidebar:"docs",previous:{title:"FE \u65e5\u5fd7\u7ba1\u7406",permalink:"/zh-CN/docs/3.0/admin-manual/log-management/fe-log"},next:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/zh-CN/docs/3.0/admin-manual/maint-monitor/monitor-metrics/metrics"}},p={},o=[{value:"\u65e5\u5fd7\u5206\u7c7b",id:"\u65e5\u5fd7\u5206\u7c7b",level:2},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u5f00\u542f DEBUG \u65e5\u5fd7",id:"\u5f00\u542f-debug-\u65e5\u5fd7",level:2},{value:"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e",id:"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e",level:2}],m={toc:o},y="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd Backend(BE) \u8fdb\u7a0b\u7684\u65e5\u5fd7\u7ba1\u7406\u3002"),(0,l.yg)("p",null,"\u8be5\u6587\u6863\u9002\u7528\u4e8e 2.1.4 \u53ca\u4e4b\u540e\u7684 Doris \u7248\u672c\u3002"),(0,l.yg)("h2",{id:"\u65e5\u5fd7\u5206\u7c7b"},"\u65e5\u5fd7\u5206\u7c7b"),(0,l.yg)("p",null,"\u5f53\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"sh bin/start_be.sh --daemon")," \u65b9\u5f0f\u542f\u52a8 BE \u8fdb\u7a0b\u540e\uff0cBE \u65e5\u5fd7\u76ee\u5f55\u4e0b\u4f1a\u4ea7\u751f\u4ee5\u4e0b\u7c7b\u578b\u7684\u65e5\u5fd7\u6587\u4ef6\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.INFO"),(0,l.yg)("p",{parentName:"li"},"BE \u8fdb\u7a0b\u8fd0\u884c\u65e5\u5fd7\u3002BE \u7684\u4e3b\u65e5\u5fd7\u6587\u4ef6\u3002BE \u8fdb\u7a0b\u6240\u6709\u7b49\u7ea7\uff08DEBUG\u3001INFO\u3001WARN\u3001ERROR \u7b49\uff09\u7684\u8fd0\u884c\u65e5\u5fd7\u90fd\u4f1a\u6253\u5370\u5230\u8fd9\u4e2a\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002"),(0,l.yg)("p",{parentName:"li"},"\u6ce8\u610f\u8fd9\u4e2a\u6587\u4ef6\u662f\u4e00\u4e2a\u8f6f\u94fe\uff0c\u4ed6\u6307\u5411\u7684\u662f\u5f53\u524d\u6700\u65b0\u7684 BE \u8fd0\u884c\u65e5\u5fd7\u6587\u4ef6\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.WARNING"),(0,l.yg)("p",{parentName:"li"},"BE \u8fdb\u7a0b\u8fd0\u884c\u65e5\u5fd7\u3002\u4f46\u53ea\u4f1a\u6253\u5370 WARN \u7ea7\u522b\u4ee5\u4e0a\u7684\u8fd0\u884c\u65e5\u5fd7\u3002be.WARNING \u4e2d\u7684\u5185\u5bb9\u662f be.INFO \u65e5\u5fd7\u5185\u5bb9\u7684\u5b50\u96c6\u3002\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u67e5\u770b\u544a\u8b66\u6216\u9519\u8bef\u7ea7\u522b\u65e5\u5fd7\u3002"),(0,l.yg)("p",{parentName:"li"},"\u6ce8\u610f\u8fd9\u4e2a\u6587\u4ef6\u662f\u4e00\u4e2a\u8f6f\u94fe\uff0c\u4ed6\u6307\u5411\u7684\u662f\u5f53\u524d\u6700\u65b0\u7684 BE \u544a\u8b66\u65e5\u5fd7\u6587\u4ef6\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.out"),(0,l.yg)("p",{parentName:"li"},"\u7528\u4e8e\u63a5\u6536\u6807\u51c6\u8f93\u51fa\u6d41\u548c\u9519\u8bef\u6570\u636e\u6d41\u7684\u65e5\u5fd7\u3002\u6bd4\u5982 start \u811a\u672c\u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"echo")," \u547d\u4ee4\u8f93\u51fa\u7b49\uff0c\u6216\u5176\u4ed6\u672a\u88ab glog \u6846\u67b6\u6355\u83b7\u5230\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\u901a\u5e38\u4f5c\u4e3a\u8fd0\u884c\u65e5\u5fd7\u7684\u8865\u5145\u3002"),(0,l.yg)("p",{parentName:"li"},"\u901a\u5e38\u5728 BE \u5f02\u5e38\u5b95\u673a\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u67e5\u770b\u8fd9\u4e2a\u65e5\u5fd7\u6765\u83b7\u53d6\u5f02\u5e38\u5806\u6808\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"jni.log"),(0,l.yg)("p",{parentName:"li"},"BE \u8fdb\u7a0b\u901a\u8fc7 JNI \u8c03\u7528 Java \u7a0b\u5e8f\u65f6\uff0cJava \u7a0b\u5e8f\u6253\u5370\u7684\u65e5\u5fd7\u3002"),(0,l.yg)("p",{parentName:"li"},"TODO\uff1a\u672a\u6765\u7248\u672c\u4e2d\uff0c\u8fd9\u90e8\u5206\u65e5\u5fd7\u4f1a\u7edf\u4e00\u5230 be.INFO \u65e5\u5fd7\u4e2d\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.gc.log"),(0,l.yg)("p",{parentName:"li"},"BE JVM \u7684 GC \u65e5\u5fd7\u3002\u8be5\u65e5\u5fd7\u7684\u884c\u4e3a\u7531 be.conf \u4e2d\u7684 JVM \u542f\u52a8\u9879 ",(0,l.yg)("inlineCode",{parentName:"p"},"JAVA_OPTS")," \u63a7\u5236\u3002"))),(0,l.yg)("h2",{id:"\u65e5\u5fd7\u914d\u7f6e"},"\u65e5\u5fd7\u914d\u7f6e"),(0,l.yg)("p",null,"\u5305\u62ec\u914d\u7f6e\u65e5\u5fd7\u7684\u5b58\u653e\u8def\u5f84\u3001\u4fdd\u7559\u65f6\u95f4\u3001\u4fdd\u7559\u6570\u76ee\u3001\u5927\u5c0f\u7b49\u3002"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u9879\u5747\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"be.conf")," \u6587\u4ef6\u4e2d\u914d\u7f6e\u3002"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"LOG_DIR")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ENV(DORIS_HOME)/log")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u6240\u6709\u65e5\u5fd7\u7684\u5b58\u653e\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a BE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,l.yg)("inlineCode",{parentName:"td"},"log/")," \u76ee\u5f55\u4e0b\u3002\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u914d\u7f6e\u540d\u9700\u5927\u5199\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_level")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"INFO")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"INFO"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"WARNING"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"ERROR"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"FATAL")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"be.INFO")," \u7684\u65e5\u5fd7\u7b49\u7ea7\u3002\u9ed8\u8ba4\u4e3a INFO\u3002\u4e0d\u5efa\u8bae\u4fee\u6539\uff0cINFO \u7b49\u7ea7\u5305\u542b\u8bb8\u591a\u5173\u952e\u65e5\u5fd7\u4fe1\u606f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_roll_num")),(0,l.yg)("td",{parentName:"tr",align:null},"10"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"be.INFO")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"be.WARNING")," \u6700\u5927\u6587\u4ef6\u6570\u91cf\u3002\u9ed8\u8ba4 10\u3002\u5f53\u56e0\u4e3a\u65e5\u5fd7\u6eda\u52a8\u6216\u5207\u5206\u540e\uff0c\u65e5\u5fd7\u6587\u4ef6\u6570\u91cf\u5927\u4e8e\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u8001\u7684\u65e5\u5fd7\u6587\u4ef6\u5c06\u88ab\u5220\u9664")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_verbose_modules")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'\u53ef\u4ee5\u8bbe\u7f6e\u6307\u5b9a\u4ee3\u7801\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5f00\u542f DEBUG \u7ea7\u522b\u65e5\u5fd7\u3002\u8bf7\u53c2\u9605 "\u5f00\u542f DEBUG \u65e5\u5fd7" \u7ae0\u8282')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_verbose_level")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'\u8bf7\u53c2\u9605 "\u5f00\u542f DEBUG \u65e5\u5fd7" \u7ae0\u8282')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_verbose_flags_v")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'\u8bf7\u53c2\u9605 "\u5f00\u542f DEBUG \u65e5\u5fd7" \u7ae0\u8282')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_roll_mode")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"SIZE-MB-1024")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"TIME-DAY"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"TIME-HOUR"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"SIZE-MB-nnn")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"be.INFO")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"be.WARNING")," \u65e5\u5fd7\u7684\u6eda\u52a8\u7b56\u7565\u3002\u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"SIZE-MB-1024"),"\uff0c\u5373\u6bcf\u4e2a\u65e5\u5fd7\u8fbe\u5230 1024MB \u5927\u5c0f\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6\u3002\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u6309\u5929\u6216\u6309\u5c0f\u65f6\u6eda\u52a8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"log_buffer_level")),(0,l.yg)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7a7a \u6216 ",(0,l.yg)("inlineCode",{parentName:"td"},"-1")),(0,l.yg)("td",{parentName:"tr",align:null},"BE \u65e5\u5fd7\u8f93\u51fa\u6a21\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBE \u65e5\u5fd7\u4f1a\u5f02\u6b65\u4e0b\u5237\u5230\u78c1\u76d8\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a -1\uff0c\u5219\u65e5\u5fd7\u5185\u5bb9\u4f1a\u5b9e\u65f6\u4e0b\u5237\u3002\u5b9e\u65f6\u4e0b\u5237\u4f1a\u5f71\u54cd\u65e5\u5fd7\u6027\u80fd\uff0c\u4f46\u53ef\u4ee5\u5c3d\u53ef\u80fd\u591a\u7684\u4fdd\u7559\u6700\u65b0\u7684\u65e5\u5fd7\u3002\u5982\u5728 BE \u5f02\u5e38\u5b95\u673a\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u6700\u540e\u7684\u65e5\u5fd7\u4fe1\u606f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disable_compaction_trace_log")),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"true, false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a true\uff0c\u5373\u5173\u95ed compaction \u64cd\u4f5c\u7684 tracing \u65e5\u5fd7\u3002\u5982\u679c\u4e3a false\uff0c\u5219\u4f1a\u6253\u5370\u548c Compaction \u64cd\u4f5c\u76f8\u5173\u7684 tracing \u65e5\u5fd7\uff0c\u7528\u4e8e\u6392\u67e5\u95ee\u9898\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"aws_log_level")),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u63a7\u5236 aws sdk \u7684\u65e5\u5fd7\u7b49\u7ea7\u3002\u9ed8\u8ba4\u4e3a 0\uff0c\u8868\u793a\u5173\u95ed aws sdk \u65e5\u5fd7\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0caws sdk \u65e5\u5fd7\u5df2\u7ecf\u88ab glog \u4e3b\u52a8\u6355\u83b7\uff0c\u5e76\u4f1a\u6b63\u5e38\u6253\u5370\u4e3b\u52a8\u6355\u83b7\u7684\u65e5\u5fd7\u3002\u4e2a\u522b\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u5f00\u542f aws sdk \u65e5\u5fd7\u4ee5\u67e5\u770b\u66f4\u591a\u672a\u88ab\u6355\u83b7\u7684\u65e5\u5fd7\u3002\u4e0d\u540c\u6570\u5b57\u4ee3\u8868\u4e0d\u540c\u65e5\u5fd7\u7b49\u7ea7\uff1aOff = 0, Fatal = 1, Error = 2, Warn = 3, Info = 4, Debug = 5, Trace = 6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"s3_file_writer_log_interval_second")),(0,l.yg)("td",{parentName:"tr",align:null},"60"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u6267\u884c S3 Upload \u64cd\u4f5c\u65f6\uff0c\u4f1a\u6bcf\u9694 60 \u79d2\uff08\u9ed8\u8ba4\uff09\u6253\u5370\u64cd\u4f5c\u8fdb\u5ea6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"enable_debug_log_timeout_secs")),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u503c\u5927\u4e8e 0 \u65f6\uff0c\u4f1a\u6253\u5370 pipeline \u6267\u884c\u5f15\u64ce\u7684\u4e00\u4e9b\u8be6\u7ec6\u6267\u884c\u65e5\u5fd7\u3002\u4e3b\u8981\u7528\u4e8e\u6392\u67e5\u95ee\u9898\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5173\u95ed")))),(0,l.yg)("h2",{id:"\u5f00\u542f-debug-\u65e5\u5fd7"},"\u5f00\u542f DEBUG \u65e5\u5fd7"),(0,l.yg)("p",null,"BE \u7684 Debug \u65e5\u5fd7\u76ee\u524d\u4ec5\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u5e76\u91cd\u542f BE \u8282\u70b9\u4ee5\u751f\u6548\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_modules")," \u6307\u5b9a\u8981\u5f00\u542f\u7684\u6587\u4ef6\u540d\uff0c\u53ef\u4ee5\u901a\u8fc7\u901a\u914d\u7b26 * \u6307\u5b9a\u3002\u6bd4\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=*\n")),(0,l.yg)("p",null,"\u8868\u793a\u5f00\u542f\u6240\u6709 DEBUG \u65e5\u5fd7\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_level")," \u8868\u793a DEBUG \u7684\u7ea7\u522b\u3002\u6570\u5b57\u8d8a\u5927\uff0c\u5219 DEBUG \u65e5\u5fd7\u8d8a\u8be6\u7ec6\u3002\u53d6\u503c\u8303\u56f4\u5728 1-10\u3002"),(0,l.yg)("h2",{id:"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e"},"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e"),(0,l.yg)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u5bb9\u5668\u73af\u5883\uff08\u5982 k8s\uff09\u90e8\u7f72 FE \u8fdb\u7a0b\u3002\u6240\u6709\u65e5\u5fd7\u9700\u8981\u901a\u8fc7\u6807\u51c6\u8f93\u51fa\u6d41\u800c\u4e0d\u662f\u6587\u4ef6\u8fdb\u884c\u8f93\u51fa\u3002"),(0,l.yg)("p",null,"\u6b64\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"sh bin/start_be.sh --console")," \u547d\u4ee4\u524d\u53f0\u542f\u52a8 BE \u8fdb\u7a0b\uff0c\u5e76\u5c06\u6240\u6709\u65e5\u5fd7\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u5728\u540c\u4e00\u6807\u51c6\u8f93\u51fa\u6d41\u4e2d\u533a\u5206\u4e0d\u540c\u65e5\u5fd7\u7c7b\u578b\uff0c\u4f1a\u5728\u6bcf\u6761\u65e5\u5fd7\u524d\u6dfb\u52a0\u4e0d\u540c\u7684\u524d\u7f00\u4ee5\u793a\u533a\u5206\u3002\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"RuntimeLogger W20240624 00:36:46.325274 1460943 olap_server.cpp:710] Have not get FE Master heartbeat yet\nRuntimeLogger I20240624 00:36:46.325999 1459644 olap_server.cpp:208] tablet checkpoint tasks producer thread started\nRuntimeLogger I20240624 00:36:46.326066 1460954 olap_server.cpp:448] begin to produce tablet meta checkpoint tasks.\nRuntimeLogger I20240624 00:36:46.326093 1459644 olap_server.cpp:213] tablet path check thread started\nRuntimeLogger I20240624 00:36:46.326190 1459644 olap_server.cpp:219] cache clean thread started\nRuntimeLogger I20240624 00:36:46.326336 1459644 olap_server.cpp:231] path gc threads started. number:1\nRuntimeLogger I20240624 00:36:46.326643 1460958 olap_server.cpp:424] try to start path gc thread!\n")),(0,l.yg)("p",null,"\u4e0d\u540c\u7684\u524d\u7f00\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"RuntimeLogger"),"\uff1a\u5bf9\u5e94 ",(0,l.yg)("inlineCode",{parentName:"li"},"fe.log")," \u4e2d\u7684\u65e5\u5fd7\u3002")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u540e\u7eed\u7248\u672c\u4f1a\u589e\u52a0\u5bf9 jni.log \u7684\u652f\u6301\u3002")),(0,l.yg)("p",null,"\u6b64\u5916\uff0c\u9488\u5bf9\u5bb9\u5668\u73af\u5883\u8fd8\u6709\u4e00\u4e2a\u989d\u5916\u914d\u7f6e\u53c2\u6570\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"enable_file_logger")),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"true, false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u6587\u4ef6\u65e5\u5fd7\u3002\u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),"\u3002\u5f53\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"--console")," \u547d\u4ee4\u542f\u52a8 BE \u8fdb\u7a0b\u65f6\uff0c\u65e5\u5fd7\u4f1a\u540c\u65f6\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u4ee5\u53ca\u6b63\u5e38\u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u5f53\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u65e5\u5fd7\u53ea\u4f1a\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u4e0d\u4f1a\u518d\u4ea7\u751f\u65e5\u5fd7\u6587\u4ef6")))))}d.isMDXComponent=!0}}]);