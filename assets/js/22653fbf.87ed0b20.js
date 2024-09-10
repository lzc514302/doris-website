"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[351055],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>E});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),i=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(d.Provider,{value:n},e.children)},y="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=i(t),g=r,E=y["".concat(d,".").concat(g)]||y[g]||N[g]||l;return t?a.createElement(E,o(o({ref:n},p),{},{components:t})):a.createElement(E,o({ref:n},p))}));function E(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=g;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[y]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},769641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=t(58168),r=(t(296540),t(15680));const l={title:"Star Schema Benchmark",language:"en"},o=void 0,s={unversionedId:"benchmark/ssb",id:"version-3.0/benchmark/ssb",title:"Star Schema Benchmark",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/benchmark/ssb.md",sourceDirName:"benchmark",slug:"/benchmark/ssb",permalink:"/docs/3.0/benchmark/ssb",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Star Schema Benchmark",language:"en"},sidebar:"benchmark",next:{title:"TPC-H Benchmark",permalink:"/docs/3.0/benchmark/tpch"}},d={},i=[{value:"1. Hardware Environment",id:"1-hardware-environment",level:2},{value:"2. Software Environment",id:"2-software-environment",level:2},{value:"3. Test Data Volume",id:"3-test-data-volume",level:2},{value:"4. SSB Flat Test Results",id:"4-ssb-flat-test-results",level:2},{value:"5. Standard SSB Test Results",id:"5-standard-ssb-test-results",level:2},{value:"6. Environment Preparation",id:"6-environment-preparation",level:2},{value:"7. Data Preparation",id:"7-data-preparation",level:2},{value:"7.1 Download and Install the SSB Data Generation Tool.",id:"71-download-and-install-the-ssb-data-generation-tool",level:3},{value:"7.2 Generate SSB Test Set",id:"72-generate-ssb-test-set",level:3},{value:"7.3 Create Table",id:"73-create-table",level:3},{value:"7.3.1 Prepare the <code>doris-cluster.conf</code> File.",id:"731-prepare-the-doris-clusterconf-file",level:4},{value:"7.3.2 Execute the Following Script to Generate and Create the SSB Table:",id:"732-execute-the-following-script-to-generate-and-create-the-ssb-table",level:4},{value:"7.4 Import data",id:"74-import-data",level:3},{value:"7.5 Checking Imported data",id:"75-checking-imported-data",level:3},{value:"7.6 Query Test",id:"76-query-test",level:3},{value:"7.6.1 SSB FLAT Test for SQL",id:"761-ssb-flat-test-for-sql",level:4},{value:"7.6.2 SSB Standard Test for SQL",id:"762-ssb-standard-test-for-sql",level:4}],p={toc:i},y="wrapper";function N(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"star-schema-benchmark"},"Star Schema Benchmark"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF"},"Star Schema Benchmark(SSB)")," is a lightweight performance test set in the data warehouse scenario. SSB provides a simplified star schema data based on ",(0,r.yg)("a",{parentName:"p",href:"http://www.tpc.org/tpch/"},"TPC-H"),", which is mainly used to test the performance of multi-table JOIN query under star schema.  In addition, the industry usually flattens SSB into a wide table model (Referred as: SSB flat) to test the performance of the query engine, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/getting-started"},"Clickhouse"),"."),(0,r.yg)("p",null,"This document mainly introduces the performance of Doris on the SSB 1000G test set."),(0,r.yg)("p",null,"We tested 13 queries on the SSB standard test dataset based on Apache Doris version 2.0.6."),(0,r.yg)("h2",{id:"1-hardware-environment"},"1. Hardware Environment"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Hardware"),(0,r.yg)("th",{parentName:"tr",align:null},"Configuration Instructions"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Number of mMachines"),(0,r.yg)("td",{parentName:"tr",align:null},"4 Tencent Cloud Virtual Machine\uff081FE\uff0c3BEs\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPU"),(0,r.yg)("td",{parentName:"tr",align:null},"AMD EPYC\u2122 Milan(2.55GHz/3.5GHz)  48C")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Memory"),(0,r.yg)("td",{parentName:"tr",align:null},"192G")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Network"),(0,r.yg)("td",{parentName:"tr",align:null},"21Gbps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Disk"),(0,r.yg)("td",{parentName:"tr",align:null},"ESSD Cloud Hard Disk")))),(0,r.yg)("h2",{id:"2-software-environment"},"2. Software Environment"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Doris Deployed 3BEs and 1FE"),(0,r.yg)("li",{parentName:"ul"},"Kernel Version: Linux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"),(0,r.yg)("li",{parentName:"ul"},"OS version: Ubuntu 20.04 LTS (Focal Fossa)"),(0,r.yg)("li",{parentName:"ul"},"Doris software version: Apache Doris 2.0.6."),(0,r.yg)("li",{parentName:"ul"},'JDK: openjdk version "1.8.0_131"')),(0,r.yg)("h2",{id:"3-test-data-volume"},"3. Test Data Volume"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"SSB Table Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Rows"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Annotation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"lineorder"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5,999,989,709"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Commodity Order Details")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"customer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"30,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Customer Information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"part"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Parts Information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"supplier"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Supplier Information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"dates"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2,556"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"lineorder_flat"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5,999,989,709"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Wide Table after Data Flattening")))),(0,r.yg)("h2",{id:"4-ssb-flat-test-results"},"4. SSB Flat Test Results"),(0,r.yg)("p",null,"Here we use Apache Doris 2.0.6 for comparative testing. In the test, we use Query Time(ms) as the main performance indicator. The test results are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris 2.0.6 (ms)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"86")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.2"),(0,r.yg)("td",{parentName:"tr",align:null},"31")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.3"),(0,r.yg)("td",{parentName:"tr",align:null},"87")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.1"),(0,r.yg)("td",{parentName:"tr",align:null},"1046")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.2"),(0,r.yg)("td",{parentName:"tr",align:null},"569")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"480")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.1"),(0,r.yg)("td",{parentName:"tr",align:null},"1339")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.2"),(0,r.yg)("td",{parentName:"tr",align:null},"957")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.3"),(0,r.yg)("td",{parentName:"tr",align:null},"215")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.4"),(0,r.yg)("td",{parentName:"tr",align:null},"34")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.1"),(0,r.yg)("td",{parentName:"tr",align:null},"1569")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.2"),(0,r.yg)("td",{parentName:"tr",align:null},"174")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.3"),(0,r.yg)("td",{parentName:"tr",align:null},"109")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total"),(0,r.yg)("td",{parentName:"tr",align:null},"6696")))),(0,r.yg)("h2",{id:"5-standard-ssb-test-results"},"5. Standard SSB Test Results"),(0,r.yg)("p",null,"Here we use Apache Doris 2.0.6 for comparative testing. In the test, we use Query Time(ms) as the main performance indicator. The test results are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris 2.0.6 (ms)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"332")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.2"),(0,r.yg)("td",{parentName:"tr",align:null},"86")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.3"),(0,r.yg)("td",{parentName:"tr",align:null},"80")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.1"),(0,r.yg)("td",{parentName:"tr",align:null},"985")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.2"),(0,r.yg)("td",{parentName:"tr",align:null},"844")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"768")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.1"),(0,r.yg)("td",{parentName:"tr",align:null},"2924")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.2"),(0,r.yg)("td",{parentName:"tr",align:null},"944")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.3"),(0,r.yg)("td",{parentName:"tr",align:null},"766")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.4"),(0,r.yg)("td",{parentName:"tr",align:null},"146")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.1"),(0,r.yg)("td",{parentName:"tr",align:null},"3451")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.2"),(0,r.yg)("td",{parentName:"tr",align:null},"829")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.3"),(0,r.yg)("td",{parentName:"tr",align:null},"325")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total"),(0,r.yg)("td",{parentName:"tr",align:null},"12480")))),(0,r.yg)("h2",{id:"6-environment-preparation"},"6. Environment Preparation"),(0,r.yg)("p",null,"Please first refer to the ","[official documentation]","(. /install/install-deploy.md) to install and deploy Apache Doris first to obtain a Doris cluster which is working well(including at least 1 FE 1 BE, 1 FE 3 BEs is recommended)."),(0,r.yg)("h2",{id:"7-data-preparation"},"7. Data Preparation"),(0,r.yg)("h3",{id:"71-download-and-install-the-ssb-data-generation-tool"},"7.1 Download and Install the SSB Data Generation Tool."),(0,r.yg)("p",null,"Execute the following script to download and compile the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/ssb-tools"},"ssb-tools")," tool."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/build-ssb-dbgen.sh\n")),(0,r.yg)("p",null,"After successful installation, the ",(0,r.yg)("inlineCode",{parentName:"p"},"dbgen")," binary will be generated under the ",(0,r.yg)("inlineCode",{parentName:"p"},"ssb-dbgen/")," directory."),(0,r.yg)("h3",{id:"72-generate-ssb-test-set"},"7.2 Generate SSB Test Set"),(0,r.yg)("p",null,"Execute the following script to generate the SSB dataset:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/gen-ssb-data.sh -s 1000\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note 1: Check the script help via ",(0,r.yg)("inlineCode",{parentName:"p"},"sh gen-ssb-data.sh -h"),"."),(0,r.yg)("p",{parentName:"blockquote"},"Note 2: The data will be generated under the ",(0,r.yg)("inlineCode",{parentName:"p"},"ssb-data/")," directory with the suffix ",(0,r.yg)("inlineCode",{parentName:"p"},".tbl"),". The total file size is about 600GB and may need a few minutes to an hour to generate."),(0,r.yg)("p",{parentName:"blockquote"},"Note 3: A standard test data set of 100G is generated by default.")),(0,r.yg)("h3",{id:"73-create-table"},"7.3 Create Table"),(0,r.yg)("h4",{id:"731-prepare-the-doris-clusterconf-file"},"7.3.1 Prepare the ",(0,r.yg)("inlineCode",{parentName:"h4"},"doris-cluster.conf")," File."),(0,r.yg)("p",null,"Before import the script, you need to write the FE\u2019s ip port and other information in the ",(0,r.yg)("inlineCode",{parentName:"p"},"doris-cluster.conf")," file."),(0,r.yg)("p",null,"The file is located under ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/tools/ssb-tools/conf/"),"."),(0,r.yg)("p",null,"The content of the file includes FE's ip, HTTP port, user name, password and the DB name of the data to be imported:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where SSB tables located\nexport DB='ssb'\n")),(0,r.yg)("h4",{id:"732-execute-the-following-script-to-generate-and-create-the-ssb-table"},"7.3.2 Execute the Following Script to Generate and Create the SSB Table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/create-ssb-tables.sh -s 1000\n")),(0,r.yg)("p",null,"Or copy the table creation statements in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/ddl/create-ssb-tables-sf1000.sql"},"create-ssb-tables.sql")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/ddl/create-ssb-flat-tables-sf1000.sql"}," create-ssb-flat-table.sql")," and then execute them in the MySQL client."),(0,r.yg)("h3",{id:"74-import-data"},"7.4 Import data"),(0,r.yg)("p",null,"We use the following command to complete all data import of SSB test set and SSB FLAT wide table data synthesis and then import into the table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"}," sh bin/load-ssb-data.sh\n")),(0,r.yg)("h3",{id:"75-checking-imported-data"},"7.5 Checking Imported data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from dates;\nselect count(*) from lineorder;\nselect count(*) from lineorder_flat;\n")),(0,r.yg)("h3",{id:"76-query-test"},"7.6 Query Test"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"SSB-Flat Query Statement: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/tree/master/tools/ssb-tools/ssb-flat-queries"}," ssb-flat-queries")),(0,r.yg)("li",{parentName:"ul"},"Standard SSB Queries: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/tree/master/tools/ssb-tools/ssb-queries"}," ssb-queries"))),(0,r.yg)("h4",{id:"761-ssb-flat-test-for-sql"},"7.6.1 SSB FLAT Test for SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Q1.1\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    LO_ORDERDATE >= 19930101\n    AND LO_ORDERDATE <= 19931231\n    AND LO_DISCOUNT BETWEEN 1 AND 3\n    AND LO_QUANTITY < 25;\n\n--Q1.2\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    LO_ORDERDATE >= 19940101\n  AND LO_ORDERDATE <= 19940131\n  AND LO_DISCOUNT BETWEEN 4 AND 6\n  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q1.3\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    weekofyear(LO_ORDERDATE) = 6\n  AND LO_ORDERDATE >= 19940101\n  AND LO_ORDERDATE <= 19941231\n  AND LO_DISCOUNT BETWEEN 5 AND 7\n  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q2.1\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE P_CATEGORY = 'MFGR#12' AND S_REGION = 'AMERICA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.2\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE\n    P_BRAND >= 'MFGR#2221'\n  AND P_BRAND <= 'MFGR#2228'\n  AND S_REGION = 'ASIA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.3\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE\n    P_BRAND = 'MFGR#2239'\n  AND S_REGION = 'EUROPE'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q3.1\nSELECT\n    C_NATION,\n    S_NATION, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_REGION = 'ASIA'\n  AND S_REGION = 'ASIA'\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_NATION, S_NATION, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.2\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_NATION = 'UNITED STATES'\n  AND S_NATION = 'UNITED STATES'\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.3\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND S_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.4\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND S_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND LO_ORDERDATE >= 19971201\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q4.1\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    C_NATION,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    C_REGION = 'AMERICA'\n  AND S_REGION = 'AMERICA'\n  AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, C_NATION\nORDER BY YEAR ASC, C_NATION ASC;\n\n--Q4.2\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    S_NATION,\n    P_CATEGORY,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    C_REGION = 'AMERICA'\n  AND S_REGION = 'AMERICA'\n  AND LO_ORDERDATE >= 19970101\n  AND LO_ORDERDATE <= 19981231\n  AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, S_NATION, P_CATEGORY\nORDER BY\n    YEAR ASC,\n    S_NATION ASC,\n    P_CATEGORY ASC;\n\n--Q4.3\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    S_CITY,\n    P_BRAND,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    S_NATION = 'UNITED STATES'\n  AND LO_ORDERDATE >= 19970101\n  AND LO_ORDERDATE <= 19981231\n  AND P_CATEGORY = 'MFGR#14'\nGROUP BY YEAR, S_CITY, P_BRAND\nORDER BY YEAR ASC, S_CITY ASC, P_BRAND ASC;\n")),(0,r.yg)("h4",{id:"762-ssb-standard-test-for-sql"},"7.6.2 SSB Standard Test for SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Q1.1\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_year = 1993\n  AND lo_discount BETWEEN 1 AND 3\n  AND lo_quantity < 25;\n\n--Q1.2\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_yearmonth = 'Jan1994'\n  AND lo_discount BETWEEN 4 AND 6\n  AND lo_quantity BETWEEN 26 AND 35;\n    \n--Q1.3\nSELECT\n    SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_weeknuminyear = 6\n  AND d_year = 1994\n  AND lo_discount BETWEEN 5 AND 7\n  AND lo_quantity BETWEEN 26 AND 35;\n    \n--Q2.1\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_category = 'MFGR#12'\n  AND s_region = 'AMERICA'\nGROUP BY d_year, p_brand\nORDER BY p_brand;\n\n--Q2.2\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_brand BETWEEN 'MFGR#2221' AND 'MFGR#2228'\n  AND s_region = 'ASIA'\nGROUP BY d_year, p_brand\nORDER BY d_year, p_brand;\n\n--Q2.3\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_brand = 'MFGR#2239'\n  AND s_region = 'EUROPE'\nGROUP BY d_year, p_brand\nORDER BY d_year, p_brand;\n\n--Q3.1\nSELECT\n    c_nation,\n    s_nation,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'ASIA'\n  AND s_region = 'ASIA'\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_nation, s_nation, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.2\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND c_nation = 'UNITED STATES'\n  AND s_nation = 'UNITED STATES'\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.3\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND (\n            c_city = 'UNITED KI1'\n        OR c_city = 'UNITED KI5'\n    )\n  AND (\n            s_city = 'UNITED KI1'\n        OR s_city = 'UNITED KI5'\n    )\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.4\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND (\n            c_city = 'UNITED KI1'\n        OR c_city = 'UNITED KI5'\n    )\n  AND (\n            s_city = 'UNITED KI1'\n        OR s_city = 'UNITED KI5'\n    )\n  AND d_yearmonth = 'Dec1997'\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q4.1\nSELECT\n    d_year,\n    c_nation,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'AMERICA'\n  AND s_region = 'AMERICA'\n  AND (\n            p_mfgr = 'MFGR#1'\n        OR p_mfgr = 'MFGR#2'\n    )\nGROUP BY d_year, c_nation\nORDER BY d_year, c_nation;\n\n--Q4.2\nSELECT\n    d_year,\n    s_nation,\n    p_category,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'AMERICA'\n  AND s_region = 'AMERICA'\n  AND (\n            d_year = 1997\n        OR d_year = 1998\n    )\n  AND (\n            p_mfgr = 'MFGR#1'\n        OR p_mfgr = 'MFGR#2'\n    )\nGROUP BY d_year, s_nation, p_category\nORDER BY d_year, s_nation, p_category;\n\n--Q4.3\nSELECT\n    d_year,\n    s_city,\n    p_brand,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND s_nation = 'UNITED STATES'\n  AND (\n            d_year = 1997\n        OR d_year = 1998\n    )\n  AND p_category = 'MFGR#14'\nGROUP BY d_year, s_city, p_brand\nORDER BY d_year, s_city, p_brand;\n\n")))}N.isMDXComponent=!0}}]);