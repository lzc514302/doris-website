"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[996081],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=l,g=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},737984:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var t=a(58168),l=(a(296540),a(15680));const r={title:"CREATE-TABLE-AND-GENERATED-COLUMN",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AND-GENERATED-COLUMN",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AND-GENERATED-COLUMN",title:"CREATE-TABLE-AND-GENERATED-COLUMN",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AND-GENERATED-COLUMN.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AND-GENERATED-COLUMN",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AND-GENERATED-COLUMN",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CREATE-TABLE-AND-GENERATED-COLUMN",language:"en"},sidebar:"docs",previous:{title:"CREATE-TABLE",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE"},next:{title:"CREATE-TABLE-LIKE",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"}},i={},u=[{value:"Grammar",id:"grammar",level:2},{value:"Restrictions on generated columns",id:"restrictions-on-generated-columns",level:2},{value:"Import data",id:"import-data",level:2},{value:"INSERT",id:"insert",level:3},{value:"Load",id:"load",level:3},{value:"Stream Load",id:"stream-load",level:4},{value:"HTTP Stream Load",id:"http-stream-load",level:4},{value:"MySQL Load",id:"mysql-load",level:4},{value:"Other Load",id:"other-load",level:4},{value:"Generated columns and partial update",id:"generated-columns-and-partial-update",level:2}],c={toc:u},d="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"A generated column is a special database table column whose value is calculated from the values of other columns rather than directly inserted or updated by the user. This feature supports pre-computing the results of expressions and storing them in the database, which is suitable for scenarios that require frequent queries or complex calculations."),(0,l.yg)("p",null,"Generated columns can automatically calculate results based on predefined expressions when data is imported or updated, and store these results persistently. In this way, during subsequent queries, you can directly access these calculated results without performing complex calculations during queries, thereby significantly reducing the computational burden during queries and improving query performance."),(0,l.yg)("p",null,"Here is an example using a generated column:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE products (\nproduct_id INT,\nprice DECIMAL(10,2),\nquantity INT,\ntotal_value DECIMAL(10,2) GENERATED ALWAYS AS (price * quantity)\n) UNIQUE KEY(product_id) \nDISTRIBUTED BY HASH(product_id) PROPERTIES ("replication_num" = "1");\n\nINSERT INTO products VALUES(1, 10.00, 10, default);\nINSERT INTO products(product_id, price, quantity) VALUES(1, 20.00, 10);\n')),(0,l.yg)("p",null,"Query data from the table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM products;\n+------------+-------+----------+-------------+\n| product_id | price | quantity | total_value |\n+------------+-------+----------+-------------+\n|          1 | 10.00 |       10 |      100.00 |\n|          1 | 20.00 |       10 |      200.00 |\n+------------+-------+----------+-------------+\n")),(0,l.yg)("p",null,"In this example, the total_value column is a generated column whose value is calculated by multiplying the values \u200b\u200bof the price and quantity columns.\nThe values of generated columns are calculated and stored in the table when importing or updating."),(0,l.yg)("h2",{id:"grammar"},"Grammar"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"col_name data_type [GENERATED ALWAYS] AS (expr)\n[NOT NULL | NULL] [COMMENT 'string']\n")),(0,l.yg)("h2",{id:"restrictions-on-generated-columns"},"Restrictions on generated columns"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"The functions used can only be built-in scalar functions and operators. UDF, aggregate functions, etc. are not allowed."),(0,l.yg)("li",{parentName:"ol"},"Variables, subqueries, and Lambda expressions are not allowed."),(0,l.yg)("li",{parentName:"ol"},"AUTO_INCREMENT columns cannot be used as base columns in generated column definitions."),(0,l.yg)("li",{parentName:"ol"},"Generated column definitions can reference other generated columns, but only columns that appear earlier in the table definition. Generated column definitions can reference any base (non-generated) column in the table, regardless of whether its definition occurs earlier or later."),(0,l.yg)("li",{parentName:"ol"},"In the aggregate model, when the generated column is a VALUE column, only REPLACE and REPLACE_IF_NOT_NULL aggregate types are allowed.")),(0,l.yg)("h2",{id:"import-data"},"Import data"),(0,l.yg)("p",null,"When importing data, if the NOT NULL restriction of the generated column is violated, for example, when importing data, the column referenced by the generated column is not specified, and this column has no default value, the import will fail."),(0,l.yg)("h3",{id:"insert"},"INSERT"),(0,l.yg)("p",null,"When specifying columns, the specified columns cannot contain generated columns, otherwise an error will be reported."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO products(product_id, price, quantity) VALUES(1, 20.00, 10);\n")),(0,l.yg)("p",null,"When no columns are specified, the DEFAULT keyword must be used as a placeholder for the generated columns.\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO products VALUES(1, 10.00, 10, default);\n")),(0,l.yg)("h3",{id:"load"},"Load"),(0,l.yg)("p",null,"When using the load method to import data, you need to explicitly specify the import column. You should not specify a generated column as an import column. When you specify an import generated column and there is corresponding data in the data file, the generated column will not use the value in the data file, and the value of the generated column is still the result of the expression calculation."),(0,l.yg)("h4",{id:"stream-load"},"Stream Load"),(0,l.yg)("p",null,"Create table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> CREATE TABLE gen_col_stream_load(a INT,b INT,c DOUBLE GENERATED ALWAYS AS (abs(a+b)) not null)\nDISTRIBUTED BY HASH(a)\nPROPERTIES("replication_num" = "1");\n')),(0,l.yg)("p",null,"Prepare data and perform stream loading:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'cat gen_col_data.csv \n1,2\n3,5\n2,9\n\ncurl --location-trusted -u root: \\\n-H "Expect:100-continue" \\\n-H "column_separator:," \\\n-H "columns:a,b" \\\n-T gen_col_data.csv \\\n-XPUT http://127.0.0.1:8030/api/testdb/gen_col_stream_load/_stream_load\n{\n    "TxnId": 223227,\n    "Label": "d4a615c9-6e73-4d95-a8a4-e4c30d3b2262",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 3,\n    "NumberLoadedRows": 3,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 12,\n    "LoadTimeMs": 152,\n    "BeginTxnTimeMs": 5,\n    "StreamLoadPutTimeMs": 39,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 66,\n    "CommitAndPublishTimeMs": 37\n}\n')),(0,l.yg)("p",null,"View the data import results:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM gen_col_stream_load;\n+------+------+------+\n| a    | b    | c    |\n+------+------+------+\n|    1 |    2 |    3 |\n|    2 |    9 |   11 |\n|    3 |    5 |    8 |\n+------+------+------+\n3 rows in set (0.07 sec)\n")),(0,l.yg)("h4",{id:"http-stream-load"},"HTTP Stream Load"),(0,l.yg)("p",null,"Create table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> CREATE TABLE gencol_refer_gencol_http_load(a INT,c DOUBLE GENERATED ALWAYS AS (abs(a+b)) NOT NULL,b INT, d INT GENERATED ALWAYS AS(c+1))\nDISTRIBUTED BY HASH(a)\nPROPERTIES("replication_num" = "1");\n')),(0,l.yg)("p",null,"Prepare data and perform HTTP stream loading:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl  --location-trusted -u root: -T gen_col_data.csv  -H "Expect: 100-Continue" \\\n-H "sql:insert into testdb.gencol_refer_gencol_http_load(a, b) select * from http_stream(\\"format\\" = \\"CSV\\", \\"column_separator\\" = \\",\\" )" \\\nhttp://127.0.0.1:8030/api/_http_stream\n{\n    "TxnId": 223244,\n    "Label": "label_824464cba2a1eabc_bee78e427ea55e81",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 3,\n    "NumberLoadedRows": 3,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 12,\n    "LoadTimeMs": 142,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 45,\n    "ReadDataTimeMs": 46,\n    "WriteDataTimeMs": 59,\n    "CommitAndPublishTimeMs": 36\n}\n')),(0,l.yg)("p",null,"View the data import results:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM gencol_refer_gencol_http_load;                                                                                                                          +------+------+------+------+\n| a    | c    | b    | d    |\n+------+------+------+------+\n|    2 |   11 |    9 |   12 |\n|    1 |    3 |    2 |    4 |\n|    3 |    8 |    5 |    9 |\n+------+------+------+------+\n3 rows in set (0.04 sec)\n")),(0,l.yg)("h4",{id:"mysql-load"},"MySQL Load"),(0,l.yg)("p",null,"The process of creating a table, loading data and querying is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE gen_col_mysql_load(a INT,b INT,c DOUBLE GENERATED ALWAYS AS (abs(a+b)) NOT NULL)\nDISTRIBUTED BY HASH(a)\nPROPERTIES(\"replication_num\" = \"1\");\n\nmysql> LOAD DATA LOCAL\nINFILE '/path_to_data/gen_col_data.csv'\nINTO TABLE gen_col_mysql_load\nCOLUMNS TERMINATED BY ','\n(a,b);\nQuery OK, 3 rows affected (0.14 sec)\nRecords: 3  Deleted: 0  Skipped: 0  Warnings: 0\n\nmysql> SELECT * FROM gen_col_mysql_load;\n+------+------+------+\n| a    | b    | c    |\n+------+------+------+\n|    2 |    9 |   11 |\n|    3 |    5 |    8 |\n|    1 |    2 |    3 |\n+------+------+------+\n3 rows in set (0.06 sec)\n")),(0,l.yg)("h4",{id:"other-load"},"Other Load"),(0,l.yg)("p",null,"BROKER LOAD, ROUTINE LOAD and other methods can import data into a table with generated columns, which will not be listed here."),(0,l.yg)("h2",{id:"generated-columns-and-partial-update"},"Generated columns and partial update"),(0,l.yg)("p",null,"When updating some columns, you must specify all the common columns referenced by the generated columns in columns, otherwise an error will be reported."),(0,l.yg)("p",null,"The following is an example to create a table, insert a row of data, and set the session variable:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE test_partial_column_unique_gen_col (a INT, b INT, c INT AS (a+b), d INT AS (c+1), e INT)\nUNIQUE KEY(a) DISTRIBUTED BY HASH(a) PROPERTIES(\n "enable_unique_key_merge_on_write" = "true",\n "replication_num"="1"\n);\nSET enable_unique_key_partial_update=true;\nSET enable_insert_strict=false;\nSET enable_fallback_to_original_planner=false;\nINSERT INTO test_partial_column_unique_gen_col(a,b,e) VALUES(1,2,7);\n')),(0,l.yg)("p",null,"If all referenced normal columns are not specified, an error will be reported:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> INSERT INTO test_partial_column_unique_gen_col(a) VALUES(3);\nERROR 1105 (HY000): errCode = 2, detailMessage = Partial update should include all ordinary columns referenced by generated columns, missing: b\n")),(0,l.yg)("p",null,'The same is true for LOAD. All referenced normal columns need to be specified in -H "columns: a, b". The following is an example of using stream load:'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root: -H "Expect:100-continue" -H "column_separator:," \\\n-H "columns: a, b" -H "partial_columns:true" \\\n-T /Users/moailing/Documents/tmp/gen_col_data.csv \\\nhttp://127.0.0.1:8030/api/testdb/partial_column_unique_gen_col/_stream_load\n')))}m.isMDXComponent=!0}}]);