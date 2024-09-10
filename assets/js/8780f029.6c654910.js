"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[965269],{15680:(e,a,r)=>{r.d(a,{xA:()=>m,yg:()=>y});var t=r(296540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),p=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},m=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=p(r),u=n,y=g["".concat(l,".").concat(u)]||g[u]||d[u]||i;return r?t.createElement(y,s(s({ref:a},m),{},{components:r})):t.createElement(y,s({ref:a},m))}));function y(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[g]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},517481:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(58168),n=(r(296540),r(15680));const i={title:"Authority Management",language:"en"},s=void 0,o={unversionedId:"admin-manual/auth/user-privilege",id:"admin-manual/auth/user-privilege",title:"Authority Management",description:"\x3c!--",source:"@site/docs/admin-manual/auth/user-privilege.md",sourceDirName:"admin-manual/auth",slug:"/admin-manual/auth/user-privilege",permalink:"/docs/dev/admin-manual/auth/user-privilege",draft:!1,tags:[],version:"current",frontMatter:{title:"Authority Management",language:"en"}},l={},p=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Permission framework",id:"permission-framework",level:2},{value:"Supported operations",id:"supported-operations",level:2},{value:"Permission type",id:"permission-type",level:2},{value:"Permission hierarchy",id:"permission-hierarchy",level:2},{value:"ADMIN /GRANT",id:"admin-grant",level:2},{value:"Some explanations",id:"some-explanations",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"More help",id:"more-help",level:2}],m={toc:p},g="wrapper";function d(e){let{components:a,...r}=e;return(0,n.yg)(g,(0,t.A)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"authority-management"},"Authority Management"),(0,n.yg)("p",null,"Doris's new privilege management system refers to Mysql's privilege management mechanism, achieves table-level fine-grained privilege control, role-based privilege access control, and supports whitelist mechanism."),(0,n.yg)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"user_identity"),(0,n.yg)("p",{parentName:"li"},"In a permission system, a user is identified as a User Identity. User ID consists of two parts: username and userhost. Username is a user name, which is composed of English upper and lower case. Userhost represents the IP from which the user link comes. User_identity is presented as username@'userhost', representing the username from userhost."),(0,n.yg)("p",{parentName:"li"},"Another expression of user_identity is username@","['domain']",", where domain is the domain name, which can be resolved into a set of IPS by DNS . The final expression is a set of username@'userhost', so we use username@'userhost'to represent it.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Privilege"),(0,n.yg)("p",{parentName:"li"},"The objects of permissions are nodes, catalogs, databases or tables. Different permissions represent different operating permissions.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Role"),(0,n.yg)("p",{parentName:"li"},"Doris can create custom named roles. Roles can be seen as a set of permissions. When a newly created user can be assigned a role, the role's permissions are automatically granted. Subsequent changes in the role's permissions will also be reflected in all user permissions that belong to the role.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"user_property"),(0,n.yg)("p",{parentName:"li"},"User attributes are directly attached to a user, not to a user identity. That is, both cmy@'192.%'and cmy@","['domain']"," have the same set of user attributes, which belong to user cmy, not cmy@'192.%' or cmy@","['domain']","."),(0,n.yg)("p",{parentName:"li"},"User attributes include, but are not limited to, the maximum number of user connections, import cluster configuration, and so on."))),(0,n.yg)("h2",{id:"permission-framework"},"Permission framework"),(0,n.yg)("p",null,"Doris permission design is based on RBAC (Role-Based Access Control) permission management model. Users are associated with roles, roles and permissions, and users are associated with permissions indirectly through roles."),(0,n.yg)("p",null,"When a role is deleted, the user automatically loses all permissions of the role."),(0,n.yg)("p",null,"When a user and a role are disassociated, the user automatically loses all permissions of the role."),(0,n.yg)("p",null,"When the role's permissions are added or deleted, the user's permissions will also change."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  user1 \u251c\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u25ba  role1 \u251c\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u25ba  priv1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n              \u2502                 \u2502\n              \u2502                 \u2502\n              \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502\n              \u2502   \u2502  role2 \u251c\u2500\u2500\u2500\u2500\u2524\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  user2 \u251c\u2500\u2500\u2500\u2500\u2518                 \u2502  \u250c\u2500\u25ba  priv2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                      \u2502  \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502  \u2502\n           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u25ba  role3 \u251c\u2500\u2500\u2500\u2500\u2518  \u2502\n           \u2502      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2502\n           \u2502                       \u2502\n           \u2502                       \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  userN \u251c\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u25ba  roleN \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u25ba  privN \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.yg)("p",null,"As shown in the figure above:"),(0,n.yg)("p",null,"Both user1 and user2 have priv1 permissions through role1."),(0,n.yg)("p",null,"UserN has priv1 permissions through role3, priv2 and privN permissions through roleN, so userN has priv1, priv2 and privN permissions at the same time."),(0,n.yg)("p",null,"In order to facilitate user operation, users can be authorized directly. In the underlying implementation, a default role dedicated to the user is created for each user. When authorizing a user, it is actually authorizing the user's default role."),(0,n.yg)("p",null,"The default role cannot be deleted or assigned to others. When a user is deleted, the default role will also be deleted automatically."),(0,n.yg)("h2",{id:"supported-operations"},"Supported operations"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create users: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/CREATE-USER.md"},"CREATE USER")),(0,n.yg)("li",{parentName:"ol"},"Alter users: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/ALTER-USER.md"},"ALTER USER")),(0,n.yg)("li",{parentName:"ol"},"Delete users: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/DROP-USER.md"},"DROP USER")),(0,n.yg)("li",{parentName:"ol"},"Authorization/Assign roles: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/GRANT.md"},"GRANT")),(0,n.yg)("li",{parentName:"ol"},"Withdrawal/REVOKE roles: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/REVOKE.md"},"REVOKE")),(0,n.yg)("li",{parentName:"ol"},"Create role: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE.md"},"CREATE ROLE")),(0,n.yg)("li",{parentName:"ol"},"Delete roles: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE.md"},"DROP ROLE")),(0,n.yg)("li",{parentName:"ol"},"View current user privileges: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Show-Statements/SHOW-GRANTS.md"},"SHOW GRANTS")),(0,n.yg)("li",{parentName:"ol"},"View all user privileges: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Show-Statements/SHOW-GRANTS.md"},"SHOW ALL GRANTS")),(0,n.yg)("li",{parentName:"ol"},"View the created roles: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Show-Statements/SHOW-ROLES.md"},"SHOW ROLES")),(0,n.yg)("li",{parentName:"ol"},"Set user properties: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY.md"},"SET PROPERTY")),(0,n.yg)("li",{parentName:"ol"},"View user properties: ",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY.md"},"SHOW PROPERTY")),(0,n.yg)("li",{parentName:"ol"},"Change password :",(0,n.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD.md"},"SET PASSWORD"))),(0,n.yg)("p",null,"For detailed help with the above commands, you can use help + command to get help after connecting Doris through the MySQL client. For example ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP CREATE USER"),"."),(0,n.yg)("h2",{id:"permission-type"},"Permission type"),(0,n.yg)("p",null,"Doris currently supports the following permissions"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Node_priv"),(0,n.yg)("p",{parentName:"li"},"Nodes change permissions. Including FE, BE, BROKER node addition, deletion, offline operations. User who has Node_priv and Grant_priv permission, can grant Node_priv to other users."),(0,n.yg)("p",{parentName:"li"},"The root user has this permission by default."),(0,n.yg)("p",{parentName:"li"},"Users who have both Grant_priv and Node_priv can grant this privilege to other users."),(0,n.yg)("p",{parentName:"li"},"This permission can only be granted to the Global level.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Grant_priv"),(0,n.yg)("p",{parentName:"li"},"Permissions change permissions. Allow the execution of operations including authorization, revocation, add/delete/change user/role, etc."),(0,n.yg)("p",{parentName:"li"},"However, a user with this permission can not grant node_priv permission to other users, unless the user itself has node_priv permission.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select_priv"),(0,n.yg)("p",{parentName:"li"},"Read-only access to databases and tables.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Load_priv"),(0,n.yg)("p",{parentName:"li"},"Write permissions to databases and tables. Including Load, Insert, Delete and so on.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Alter_priv"),(0,n.yg)("p",{parentName:"li"},"Change permissions on databases and tables. It includes renaming libraries/tables, adding/deleting/changing columns, and adding/deleting partitions.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create_priv"),(0,n.yg)("p",{parentName:"li"},"The right to create databases, tables, and views.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Drop_priv"),(0,n.yg)("p",{parentName:"li"},"Delete permissions for databases, tables, and views.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Usage_priv"),(0,n.yg)("p",{parentName:"li"},"Use of resources and workload groups."))),(0,n.yg)("h2",{id:"permission-hierarchy"},"Permission hierarchy"),(0,n.yg)("p",null,"At the same time, according to the scope of application of permissions, we divide them into four levels:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"GLOBAL LEVEL: Global permissions. That is, permissions on ",(0,n.yg)("inlineCode",{parentName:"li"},"*.*.*")," granted by GRANT statements. The granted permissions apply to any table in any database."),(0,n.yg)("li",{parentName:"ol"},"CATALOG LEVEL: Catalog level permissions. That is, the permissions on ",(0,n.yg)("inlineCode",{parentName:"li"},"ctl.*.*")," granted through the GRANT statement. The permissions granted apply to any library table in the specified Catalog."),(0,n.yg)("li",{parentName:"ol"},"DATABASE LEVEL: Database-level permissions. That is, the permissions on ",(0,n.yg)("inlineCode",{parentName:"li"},"ctl.db.*")," granted through the GRANT statement. The privileges granted apply to any table in the specified database."),(0,n.yg)("li",{parentName:"ol"},"TABLE LEVEL: Table-level permissions. That is, the permissions on ",(0,n.yg)("inlineCode",{parentName:"li"},"ctl.db.tbl")," granted through the GRANT statement. The privileges granted apply to the specified table in the specified database.")),(0,n.yg)("p",null,"The privileges of the resources are divided into two levels as follows:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"GLOBAL LEVEL: Global privileges. That is, the privileges granted on ",(0,n.yg)("inlineCode",{parentName:"li"},"*")," by the GRANT statement. The privileges granted apply to the resource."),(0,n.yg)("li",{parentName:"ol"},"RESOURCE LEVEL: Resource-level privileges. This is the permission on ",(0,n.yg)("inlineCode",{parentName:"li"},"resource_name")," granted by the GRANT statement. The privilege granted applies to the specified resource.")),(0,n.yg)("p",null,"The workload group has only one level:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"WORKLOAD GROUP LEVEL: privileges on ",(0,n.yg)("inlineCode",{parentName:"li"},"workload_group_name")," that can be granted with the GRANT statement. The privileges granted apply to the specified workload group. workload",(0,n.yg)("em",{parentName:"li"},"group_name supports ",(0,n.yg)("inlineCode",{parentName:"em"},"%")," and `"),(0,n.yg)("inlineCode",{parentName:"li"},"match characters,"),"%",(0,n.yg)("inlineCode",{parentName:"li"},"can match any string and"),"_` matches any single character.")),(0,n.yg)("h2",{id:"admin-grant"},"ADMIN /GRANT"),(0,n.yg)("p",null,"ADMIN_PRIV and GRANT_PRIV have the authority of ",(0,n.yg)("strong",{parentName:"p"},'"grant authority"')," at the same time, which is more special. The operations related to these two privileges are described here one by one."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CREATE USER"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Users with ADMIN privileges, or GRANT privileges at the GLOBAL and DATABASE levels can create new users."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"DROP USER"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Users with ADMIN authority or GRANT authority at the global level can drop users."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CREATE/DROP ROLE"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Users with ADMIN authority or GRANT authority at the global level can create or drop role."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"GRANT /REVOKE"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Users with ADMIN or GLOBAL GRANT privileges can grant or revoke the privileges of any user."),(0,n.yg)("li",{parentName:"ul"},"Users with GRANT privileges at the DATABASE level can grant or revoke the privileges of any user on the specified database."),(0,n.yg)("li",{parentName:"ul"},"Users with GRANT privileges at TABLE level can grant or revoke the privileges of any user on the specified tables in the specified database."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"SET PASSWORD"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Users with ADMIN or GLOBAL GRANT privileges can set any user's password."),(0,n.yg)("li",{parentName:"ul"},"Ordinary users can set their corresponding User Identity password. The corresponding User Identity can be viewed by ",(0,n.yg)("inlineCode",{parentName:"li"},"SELECT CURRENT_USER();"),"command."),(0,n.yg)("li",{parentName:"ul"},"Users with GRANT privileges at non-GLOBAL level cannot set the password of existing users, but can only specify the password when creating users.")))),(0,n.yg)("h2",{id:"some-explanations"},"Some explanations"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"When Doris initializes, the following users and roles are automatically created:"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Operator role: This role has Node","_","priv and Admin","_","priv, i.e. all permissions for Doris. In a subsequent upgrade version, we may restrict the role's permissions to Node","_","priv, which is to grant only node change permissions. To meet some cloud deployment requirements.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"admin role: This role has Admin","_","priv, which is all permissions except for node changes.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"root@'%': root user, which allows login from any node, with the role of operator.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"admin@'%': admin user, allowing login from any node, role admin.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"It is not supported to delete or change the permissions of default created roles or users.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The user of the operator role has one and only one user, that is, root. Users of admin roles can create multiple.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Operational instructions for possible conflicts"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Conflict between domain name and ip:"),(0,n.yg)("p",{parentName:"li"},"Assume that the following users are created:"),(0,n.yg)("p",{parentName:"li"},"CREATE USER cmy@","['domain']",";"),(0,n.yg)("p",{parentName:"li"},"And authorize:"),(0,n.yg)("p",{parentName:"li"},"GRANT SELECT_PRIV ON ","*",".","*"," TO cmy@","['domain']"),(0,n.yg)("p",{parentName:"li"},"The domain is resolved into two ips: IP1 and IP2"),(0,n.yg)("p",{parentName:"li"},"Let's assume that we have a separate authorization for cmy@'ip1':"),(0,n.yg)("p",{parentName:"li"},"GRANT ALTER_PRIV ON ","*",".","*"," TO cmy@'ip1';"),(0,n.yg)("p",{parentName:"li"},"The permissions of CMY @'ip1'will be changed to SELECT","_","PRIV, ALTER","_","PRIV. And when we change the permissions of cmy@","['domain']"," again, cmy@'ip1' will not follow.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"duplicate IP conflicts:"),(0,n.yg)("p",{parentName:"li"},"Assume that the following users are created:"),(0,n.yg)("p",{parentName:"li"},"CREATE USER cmy@'%' IDENTIFIED BY \"12345\";"),(0,n.yg)("p",{parentName:"li"},"CREATE USER cmy@'192.%' IDENTIFIED BY \"abcde\";"),(0,n.yg)("p",{parentName:"li"},"In priority,'192.%'takes precedence over'%', so when user CMY tries to login Doris with password '12345' from 192.168.1.1, the machine will be rejected.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Forget passwords"),(0,n.yg)("p",{parentName:"li"},"If you forget your password and cannot log in to Doris, you can add ",(0,n.yg)("inlineCode",{parentName:"p"},"skip_localhost_auth_check")," in fe config and restart FE so that logging to Doris without a password in localhost."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"skip_localhost_auth_check = true")),(0,n.yg)("p",{parentName:"li"},"After login, the password can be reset through the SET PASSWORD command.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"No user can reset the password of the root user except the root user himself.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"ADMIN","_","PRIV permissions can only be granted or revoked at the GLOBAL level.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Having GRANT","_","PRIV at GLOBAL level is actually equivalent to having ADMIN","_","PRIV, because GRANT","_","PRIV at this level has the right to grant arbitrary permissions, please use it carefully.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"current_user()")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"user()")),(0,n.yg)("p",{parentName:"li"},"Users can view ",(0,n.yg)("inlineCode",{parentName:"p"},"current_user")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"user")," respectively by ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT current_user();")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT user();"),". Where ",(0,n.yg)("inlineCode",{parentName:"p"},"current_user")," indicates which identity the current user is passing through the authentication system, and ",(0,n.yg)("inlineCode",{parentName:"p"},"user")," is the user's current actual ",(0,n.yg)("inlineCode",{parentName:"p"},"user_identity"),"."),(0,n.yg)("p",{parentName:"li"},"For example, suppose the user ",(0,n.yg)("inlineCode",{parentName:"p"},"user1@'192.%'")," is created, and then a user user1 from 192.168.10.1 is logged into the system. At this time, ",(0,n.yg)("inlineCode",{parentName:"p"},"current_user")," is ",(0,n.yg)("inlineCode",{parentName:"p"},"user1@'192.%'"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"user")," is ",(0,n.yg)("inlineCode",{parentName:"p"},"user1@'192.168.10.1'"),"."),(0,n.yg)("p",{parentName:"li"},"All privileges are given to a ",(0,n.yg)("inlineCode",{parentName:"p"},"current_user"),", and the real user has all the privileges of the corresponding ",(0,n.yg)("inlineCode",{parentName:"p"},"current_user"),"."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"`SELECT session_user()`  is supported , which is having same behaviour as user() function.\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Password Validation"),(0,n.yg)("p",{parentName:"li"},"In version 1.2, the verification function of user password strength has been added. This feature is controlled by the global variable ",(0,n.yg)("inlineCode",{parentName:"p"},"validate_password_policy"),". Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"NONE/0"),", i.e. password strength is not checked. If set to ",(0,n.yg)("inlineCode",{parentName:"p"},"STRONG/2"),', the password must contain 3 items of "uppercase letters", "lowercase letters", "numbers" and "special characters", and the length must be greater than or equal to 8.'))),(0,n.yg)("h2",{id:"best-practices"},"Best Practices"),(0,n.yg)("p",null,"Here are some usage scenarios of Doris privilege system."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Scene 1"),(0,n.yg)("p",{parentName:"li"},"The users of Doris cluster are divided into Admin, RD and Client. Administrators have all the rights of the whole cluster, mainly responsible for cluster building, node management and so on. The development engineer is responsible for business modeling, including database building, data import and modification. Users access different databases and tables to get data."),(0,n.yg)("p",{parentName:"li"},"In this scenario, ADMIN or GRANT privileges can be granted to administrators. Give RD CREATE, DROP, ALTER, LOAD, SELECT permissions to any or specified database tables. Give Client SELECT permission to any or specified database table. At the same time, it can also simplify the authorization of multiple users by creating different roles.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Scene 2"),(0,n.yg)("p",{parentName:"li"},"There are multiple services in a cluster, and each business may use one or more data. Each business needs to manage its own users. In this scenario. Administrator users can create a user with GRANT privileges at the DATABASE level for each database. The user can only authorize the specified database for the user.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Blacklist"),(0,n.yg)("p",{parentName:"li"},"Doris itself does not support blacklist, only whitelist, but we can simulate blacklist in some way. Suppose you first create a user named ",(0,n.yg)("inlineCode",{parentName:"p"},"user@'192.%'"),", which allows users from ",(0,n.yg)("inlineCode",{parentName:"p"},"192.*")," to login. At this time, if you want to prohibit users from ",(0,n.yg)("inlineCode",{parentName:"p"},"192.168.10.1")," from logging in, you can create another user with ",(0,n.yg)("inlineCode",{parentName:"p"},"cmy@'192.168.10.1'")," and set a new password. Since ",(0,n.yg)("inlineCode",{parentName:"p"},"192.168.10.1")," has a higher priority than ",(0,n.yg)("inlineCode",{parentName:"p"},"192.%"),", user can no longer login by using the old password from ",(0,n.yg)("inlineCode",{parentName:"p"},"192.168.10.1"),"."))),(0,n.yg)("h2",{id:"more-help"},"More help"),(0,n.yg)("p",null,"For more detailed syntax and best practices for permission management use, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Account-Management-Statements/GRANT.md"},"GRANTS")," command manual. Enter ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP GRANTS")," at the command line of the MySql client for more help information."))}d.isMDXComponent=!0}}]);