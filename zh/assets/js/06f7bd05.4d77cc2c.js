"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4335],{45377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(74848),l=t(28453),r=t(11470),s=t(19365);const o={sidebar_position:1,title:"\u4fee\u6539\u8bed\u53e5"},i=void 0,c={id:"mutation/update-statement",title:"\u4fee\u6539\u8bed\u53e5",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/update-statement.mdx",sourceDirName:"mutation",slug:"/mutation/update-statement",permalink:"/jimmer-doc/zh/docs/mutation/update-statement",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/update-statement.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4fee\u6539\u8bed\u53e5"},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u7bc7",permalink:"/jimmer-doc/zh/docs/mutation/"},next:{title:"\u5220\u9664\u8bed\u53e5",permalink:"/jimmer-doc/zh/docs/mutation/delete-statement"}},u={},d=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u4f7f\u7528JOIN",id:"\u4f7f\u7528join",level:2},{value:"MySql",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,a.jsx)(n.p,{children:"Update\u8bed\u53e5\u7528\u6cd5\u5982\u4e0b"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'AuthorTable author = Tables.AUTHOR_TABLE;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .where(author.firstName().eq("Dan"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName, \n            concat(table.firstName, value("*"))\n        )\n        where(table.firstName eq "Dan")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"update AUTHOR tb_1_ \nset FIRST_NAME = concat(tb_1_.FIRST_NAME, ?) \nwhere tb_1_.FIRST_NAME = ?\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528join",children:"\u4f7f\u7528JOIN"}),"\n",(0,a.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cupdate\u8bed\u53e5\u4e0d\u652f\u6301join\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u5f02\u5e38"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'AuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .where(\n        author\n            // highlight-next-line\n            .books()\n            .name()\n            .eq("Learning GraphQL")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        where(\n            table\n                // highlight-next-line\n                .books\n                .name \n                eq "Learning GraphQL"\n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u5f02\u5e38\u4fe1\u606f\u5982\u4e0b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Table joins for update statement is forbidden by the current dialect, but there is a join `'Author.books'`.\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u4f7f\u7528MySql\u6216Postgres\u65f6\uff0cupdate\u8bed\u53e5\u53ef\u4ee5\u4f7f\u7528JOIN\u8bed\u53e5\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"mysql",children:"MySql"}),"\n",(0,a.jsx)(n.p,{children:"\u9996\u5148\uff0c\u9700\u8981\u5728\u521b\u5efaSqlClient\u65f6\uff0c\u6307\u5b9a\u65b9\u8a00\u4e3aMySqlDialect"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"SpringBoot\u4e0b\u7684\u914d\u7f6e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728",(0,a.jsx)(n.code,{children:"applicaion.yml"}),"\u6216",(0,a.jsx)(n.code,{children:"application.properties"}),"\u4e2d\u58f0\u660e\u65b9\u8a00"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:'language-title="applicaion.yml"',children:"jimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u975eSpringBoot\u4e0b\u7684\u914d\u7f6e"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(\n        new org.babyfish.jimmer.sql.dialect.MySqlDialect()\n    )\n    ...\n    .build();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setDialect(org.babyfish.jimmer.sql.dialect.MySqlDialect())\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u5728update\u4e2d\u4f7f\u7528JOIN\u4e86"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'AuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .set(\n        author.books().name(),\n        author.books().name().concat("*")\n    )\n    .set(\n        author.books().store().name(),\n        author.books().store().name().concat("*")\n    )\n    .where(\n        author.books().store().name().eq("MANNING")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        set(\n            table.books.name,\n            concat(table.books.name, value("*"))\n        )\n        set(\n            table.books.store.name,\n            concat(table.books.store.name, value("*"))\n        )\n        where(\n            table.books.store.name eq "MANNING"\n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u9488\u5bf9MySQL\u7684SQL\u8bed\u53e5\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"update \n    AUTHOR tb_1_ \n    inner join BOOK_AUTHOR_MAPPING as tb_2_ \n        on tb_1_.ID = tb_2_.AUTHOR_ID \n    inner join BOOK as tb_3_ \n        on tb_2_.BOOK_ID = tb_3_.ID \n    inner join BOOK_STORE as tb_4_ \n        on tb_3_.STORE_ID = tb_4_.ID \nset \n    tb_1_.FIRST_NAME = concat(tb_1_.FIRST_NAME, ?), \n    tb_3_.NAME = concat(tb_3_.NAME, ?), \n    tb_4_.NAME = concat(tb_4_.NAME, ?) \nwhere \n    tb_4_.NAME = ?\n"})}),"\n",(0,a.jsx)(n.h3,{id:"postgres",children:"Postgres"}),"\n",(0,a.jsx)(n.p,{children:"\u9996\u5148\uff0c\u9700\u8981\u5728\u521b\u5efaSqlClient\u65f6\uff0c\u6307\u5b9a\u65b9\u8a00\u4e3aPostgresDialect"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"SpringBoot\u4e0b\u7684\u914d\u7f6e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728",(0,a.jsx)(n.code,{children:"applicaion.yml"}),"\u6216",(0,a.jsx)(n.code,{children:"application.properties"}),"\u4e2d\u58f0\u660e\u65b9\u8a00\u914d\u7f6e\u914d\u7f6e"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:'language-title="applicaion.yml"',children:"jimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.PostgresDialect\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u975eSpringBoot\u4e0b\u7684\u914d\u7f6e"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(\n        new org.babyfish.jimmer.sql.dialect.PostgresDialect()\n    )\n    ...\n    .build();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setDialect(org.babyfish.jimmer.sql.dialect.PostgresDialect())\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u5728update\u4e2d\u4f7f\u7528JOIN\u4e86"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'AuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .where(\n        author.books().store().name().eq("MANNING")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        where(\n            table.books.store.name eq "MANNING"\n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n'})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"\u548cMySql\u4e0d\u540c\uff0c\u5728Postgres\u4e2d\u4f7f\u7528update\u8bed\u53e5\u7684JOIN\u5b58\u5728\u5982\u4e0b\u9650\u5236"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u53ea\u80fd\u5728",(0,a.jsx)(n.code,{children:"where"}),"\u5b50\u53e5\u4e2d\u4f7f\u7528\u8868\u8fde\u63a5\uff0c\u4e0d\u80fd\u5728",(0,a.jsx)(n.code,{children:"set"}),"\u5b50\u53e5\u4e2d\u4f7f\u7528\u8868\u8fde\u63a5\u3002\u5373Postgres\u8fd8\u662f\u53ea\u5141\u8bb8\u4fee\u6539\u5f53\u524d\u8868\u7684\u5b57\u6bb5\uff0c\u652f\u6301\u8fde\u63a5\u5230\u5176\u5b83\u8868\u4ec5\u4ec5\u662f\u4e3a\u4e86\u505a\u6761\u4ef6\u8fc7\u6ee4\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u8fde\u63a5\u8def\u5f84\u53ef\u4ee5\u5177\u6709\u591a\u7ea7\uff0c\u5982",(0,a.jsx)(n.code,{children:"author.books().store()"}),"\uff0c\u5176\u4e2d\uff0c",(0,a.jsx)(n.code,{children:"books()"}),"\u662f\u7b2c1\u7ea7\uff0c",(0,a.jsx)(n.code,{children:"store()"}),"\u662f\u7b2c2\u7ea7\u3002\u5176\u4e2d\uff0c\u7b2c\u4e00\u7ea7\u8fde\u63a5\u7684\u7c7b\u578b\u5fc5\u987b\u662f",(0,a.jsx)(n.code,{children:"inner join"}),"\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u9488\u5bf9Postgres\u7684SQL\u8bed\u53e5\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"update \n    AUTHOR tb_1_ \nset \n    FIRST_NAME = concat(tb_1_.FIRST_NAME, ?) \nfrom BOOK_AUTHOR_MAPPING as tb_2_ \u2776\ninner join BOOK as tb_3_ \u2777\n    on tb_2_.BOOK_ID = tb_3_.ID \ninner join BOOK_STORE as tb_4_ \u2778\n    on tb_3_.STORE_ID = tb_4_.ID \nwhere \n    tb_1_.ID = tb_2_.AUTHOR_ID \u2779\nand \n    tb_4_.NAME = ?\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["\u8fde\u63a5\u8def\u5f84",(0,a.jsx)(n.code,{children:"author.books().store()"}),"\u6709\u4e24\u7ea7\uff0c",(0,a.jsx)(n.code,{children:"books()"}),"\u662f\u7b2c1\u7ea7\uff0c",(0,a.jsx)(n.code,{children:"store()"}),"\u662f\u7b2c2\u7ea7\u3002"]}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u7b2c\u4e00\u7ea7",(0,a.jsx)(n.code,{children:"books()"}),"\u6d89\u53ca\u4e24\u5f20\u8868"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u2776 \u5904\u7684",(0,a.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"}),"\u8868\uff0c\u4f46\u8fd9\u91cc\u7f3a\u5c11\u8fde\u63a5\u6761\u4ef6\uff0c\u8fde\u63a5\u6761\u4ef6\u5728\u2779\u5904\u8865\u4e0a\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u2777 \u5904\u7684",(0,a.jsx)(n.code,{children:"BOOK"}),"\u8868"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u7b2c\u4e8c\u7ea7",(0,a.jsx)(n.code,{children:"store()"}),"\u6d89\u53ca\u4e00\u5f20\u8868"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u2779 ",(0,a.jsx)(n.code,{children:"\u5904\u7684"}),"BOOK_STORE`\u8868"]}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsxs)(n.p,{children:["\u53ef\u89c1\uff0c\u5728Postgres\u7684update\u8bed\u53e5\u4e2d\uff0c\u76f4\u63a5\u548c\u4e3b\u8868\u76f8\u5173\u7684\u8868\u8fde\u63a5\u4e0d\u80fd\u4f7f\u7528",(0,a.jsx)(n.code,{children:"join"})," + ",(0,a.jsx)(n.code,{children:"on"}),"\u7684\u5199\u6cd5\uff0c\u5fc5\u987b\u7b49\u4ef7\u53d8\u6362\u4e3a",(0,a.jsx)(n.code,{children:"from"})," + ",(0,a.jsx)(n.code,{children:"where"}),"\u7684\u5199\u6cd5\u3002"]}),(0,a.jsxs)(n.p,{children:["\u8fd9\u5c31\u662fJimmer\u89c4\u5b9aPostgres\u65b9\u8a00\u4e0bupdate\u8bed\u53e5\u7b2c\u4e00\u7ea7\u8fde\u63a5\u7684\u7c7b\u578b\u5fc5\u987b\u662f",(0,a.jsx)(n.code,{children:"inner join"}),"\u7684\u539f\u56e0\u3002"]})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const l={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(96540),l=t(18215),r=t(23104),s=t(56347),o=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=b({queryString:t,groupId:l}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,u.Dv)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),x=(()=>{const e=c??j;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),l=o[t].value;l!==a&&(c(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,l.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(_,{...n,...e})]})}function A(e){const n=(0,m.A)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const l={},r=a.createContext(l);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);