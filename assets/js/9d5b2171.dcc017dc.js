"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[621606],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(d,".").concat(u)]||m[u]||y[u]||o;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},461192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const o={title:"Loading Overview",language:"en"},l=void 0,i={unversionedId:"data-operate/import/load-manual",id:"version-3.0/data-operate/import/load-manual",title:"Loading Overview",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/data-operate/import/load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-manual",permalink:"/docs/3.0/data-operate/import/load-manual",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Loading Overview",language:"en"},sidebar:"docs",previous:{title:"Best Practices",permalink:"/docs/3.0/table-design/best-practice"},next:{title:"Stream Load",permalink:"/docs/3.0/data-operate/import/stream-load-manual"}},d={},p=[{value:"Supported Data Sources",id:"supported-data-sources",level:2},{value:"By Scene",id:"by-scene",level:3},{value:"By Loading Method",id:"by-loading-method",level:3},{value:"Supported Data Formats",id:"supported-data-formats",level:2},{value:"Import Instructions",id:"import-instructions",level:2},{value:"Import Atomicity Guarantees",id:"import-atomicity-guarantees",level:2},{value:"Synchronous and Asynchronous Imports",id:"synchronous-and-asynchronous-imports",level:2},{value:"Import the Data of Array Types",id:"import-the-data-of-array-types",level:2},{value:"Execution Engine Selected",id:"execution-engine-selected",level:2}],s={toc:p},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"supported-data-sources"},"Supported Data Sources"),(0,r.yg)("p",null,"Doris provides a variety of data import solutions, and you can choose different data import methods for different data sources."),(0,r.yg)("h3",{id:"by-scene"},"By Scene"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Data Source"),(0,r.yg)("th",{parentName:"tr",align:null},"Loading Method"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Object Storage (s3), HDFS"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./broker-load-manual"},"Loading data using Broker"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Local file"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./stream-load-manual"},"Loading local data"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./routine-load-manual"},"Subscribing to Kafka data"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySQL, PostgreSQL, Oracle, SQLServer"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./mysql-load-manual"},"Sync data via external table"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Loading via JDBC"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../../lakehouse/database/jdbc"},"Sync data using JDBC"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Loading JSON format data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./load-json-format"},"JSON format data Loading"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AutoMQ"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/3.0/ecosystem/automq-load"},"AutoMQ Load"))))),(0,r.yg)("h3",{id:"by-loading-method"},"By Loading Method"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Loading method name"),(0,r.yg)("th",{parentName:"tr",align:null},"Use method"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Broker Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./broker-load-manual"},"Import external storage data via Broker"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./stream-load-manual"},"Stream import data (local file and memory data)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Routine Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./routine-load-manual"},"Import Kafka data"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Insert Into"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./insert-into-manual"},"External table imports data through INSERT"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"S3 Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./broker-load-manual"},"Object storage data import of S3 protocol"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySQL Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./mysql-load-manual"},"Local data import of MySql protocol"))))),(0,r.yg)("h2",{id:"supported-data-formats"},"Supported Data Formats"),(0,r.yg)("p",null,"Different import methods support slightly different data formats."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Import Methods"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Formats"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Broker Load"),(0,r.yg)("td",{parentName:"tr",align:null},"parquet, orc, csv, gzip")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load"),(0,r.yg)("td",{parentName:"tr",align:null},"csv, json, parquet, orc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Routine Load"),(0,r.yg)("td",{parentName:"tr",align:null},"csv, json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySql Load"),(0,r.yg)("td",{parentName:"tr",align:null},"csv")))),(0,r.yg)("h2",{id:"import-instructions"},"Import Instructions"),(0,r.yg)("p",null,"The data import implementation of Apache Doris has the following common features, which are introduced here to help you better use the data import function"),(0,r.yg)("h2",{id:"import-atomicity-guarantees"},"Import Atomicity Guarantees"),(0,r.yg)("p",null,"Each import job of Doris, whether it is batch import using Broker Load or single import using INSERT statement, is a complete transaction operation. The import transaction can ensure that the data in a batch takes effect atomically, and there will be no partial data writing."),(0,r.yg)("p",null,"At the same time, an import job will have a Label. This Label is unique under a database (Database) and is used to uniquely identify an import job. Label can be specified by the user, and some import functions will also be automatically generated by the system."),(0,r.yg)("p",null,"Label is used to ensure that the corresponding import job can only be successfully imported once. A successfully imported Label, when used again, will be rejected with the error ",(0,r.yg)("inlineCode",{parentName:"p"},"Label already used"),". Through this mechanism, ",(0,r.yg)("inlineCode",{parentName:"p"},"At-Most-Once")," semantics can be implemented in Doris. If combined with the ",(0,r.yg)("inlineCode",{parentName:"p"},"At-Least-Once")," semantics of the upstream system, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Exactly-Once")," semantics of imported data can be achieved."),(0,r.yg)("p",null,"For best practices on atomicity guarantees, see Importing Transactions and Atomicity."),(0,r.yg)("h2",{id:"synchronous-and-asynchronous-imports"},"Synchronous and Asynchronous Imports"),(0,r.yg)("p",null,"Import methods are divided into synchronous and asynchronous. For the synchronous import method, the returned result indicates whether the import succeeds or fails. For the asynchronous import method, a successful return only means that the job was submitted successfully, not that the data was imported successfully. You need to use the corresponding command to check the running status of the import job."),(0,r.yg)("h2",{id:"import-the-data-of-array-types"},"Import the Data of Array Types"),(0,r.yg)("p",null,"For example, in the following import, you need to cast columns b14 and a13 into ",(0,r.yg)("inlineCode",{parentName:"p"},"array<string>")," type, and then use the ",(0,r.yg)("inlineCode",{parentName:"p"},"array_union")," function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL label_03_14_49_34_898986_19090452100 ( \n  DATA INFILE("hdfs://test.hdfs.com:9000/user/test/data/sys/load/array_test.data") \n  INTO TABLE `test_array_table` \n  COLUMNS TERMINATED BY "|" (`k1`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `a10`, `a11`, `a12`, `a13`, `b14`) \n  SET(a14=array_union(cast(b14 as array<string>), cast(a13 as array<string>))) WHERE size(a2) > 270) \n  WITH BROKER "hdfs" ("username"="test_array", "password"="") \n  PROPERTIES( "max_filter_ratio"="0.8" );\n')),(0,r.yg)("h2",{id:"execution-engine-selected"},"Execution Engine Selected"),(0,r.yg)("p",null,"The Pipeline engine is turned off by default on import, and is enabled by the following two variables:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_load")," in ",(0,r.yg)("a",{parentName:"p",href:"../../admin-manual/config/fe-config"},"FE CONFIG")," ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_load"),". When enabled, import tasks such as Streamload will try to use the Pipeline engine.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"enable_nereids_dml_with_pipeline")," in Session Variable to enable insert into to try to use the Pipeline engine."))),(0,r.yg)("p",null,"When the above variables are turned on, whether and which set of Pipeline engine is used still depends on the settings of the other two Session Variables ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_engine")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_x_engine"),". When both are enabled, PipelineX is selected in preference to the Pipeline Engine. If neither is enabled, the import will not be executed using the Pipeline engine even if the above variables are set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."))}y.isMDXComponent=!0}}]);