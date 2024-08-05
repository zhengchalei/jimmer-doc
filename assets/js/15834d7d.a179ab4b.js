"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8855],{38351:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>o});var t=i(74848),s=i(28453),r=i(11470),a=i(19365);const o=[];function l(e){const n={admonition:"admonition",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Initially, people used business fields directly as the primary key of tables. This is the most straightforward and easy to use approach, but it has the following problems:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unstable primary key"}),"\n",(0,t.jsx)(n.p,{children:"Since the primary key itself is a business field, it can be modified, which leads to an unstable primary key."}),"\n",(0,t.jsxs)(n.p,{children:["Although the foreign keys that reference it in the database can use ",(0,t.jsx)(n.code,{children:"on update cascade"})," to keep consistency,\nan unstable primary key will cause many problems for systems outside the database, such as caches."]}),"\n",(0,t.jsx)(n.p,{children:"Even if a unified solution to the primary key instability problem can be abstracted at the technical level, it is not recommended, because it makes the system difficult to understand."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"High cost of multi-table joins"}),"\n",(0,t.jsx)(n.p,{children:"Since the primary key itself is a business field, its type is likely to be a relatively long string type rather than a numeric type,\nand it may even be a composite primary key composed of multiple columns, which leads to high cost of multi-table joins."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To solve the above problems, people learned to use data without business meaning as the primary key, such as"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Auto numbering by database"}),"\n",(0,t.jsx)(n.li,{children:"Sequence value by database"}),"\n",(0,t.jsx)(n.li,{children:"UUID"}),"\n",(0,t.jsx)(n.li,{children:"Snowflake ID"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To enable idempotent saves for save commands, Jimmer introduces two concepts: Id and Key"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"@Id: Primary key"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"@Key: Business primary key"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If Id itself is a business attribute (not recommended), no need to specify Key, because Id itself already represents the uniqueness constraint at the business level."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If Id has no business meaning (recommended), then Key represents what the uniqueness constraint is at the business level."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"See the following example:"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Entity  \npublic interface TreeNode {\n\n    @Id  \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line \n    @Key  \n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Here, the Id of the ",(0,t.jsx)(n.code,{children:"TreeNode"})," entity uses auto numbering and has no business meaning. Therefore, to better match save commands,\n",(0,t.jsx)(n.code,{children:"key"})," is specified here, consisting of two properties: ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"parent"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The corresponding DDL is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table TREE_NODE(\n    ID bigint not null,\n    NAME varchar(20) not null,\n    PARENT_ID bigint\n);\n\nalter table TREE_NODE\n    add constraint PK_TREE_NODE\n        primary key(ID);\n        \nalter table TREE_NODE\n    add constraint UQ_TREE_NODE\n        /* highlight-next-line */\n        unique(NAME, PARENT_ID); \n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"parent"})," properties of the entity type decorated with @Key correspond to the UNIQUE constraint ",(0,t.jsx)(n.em,{children:"(or UNIQUE INDEX)"})," composed of the ",(0,t.jsx)(n.code,{children:"NAME"})," and ",(0,t.jsx)(n.code,{children:"PARENT_ID"})," columns in the database."]}),"\n",(0,t.jsx)(n.p,{children:"This uniqueness constraint can be analogized to file systems. File systems allow directories or files with the same name, but do not allow the same name if the parent directory is specified."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Through this example, we see:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Key can consist of multiple properties"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Foreign keys can be part of Key"}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Let's take another look at another example where the properties that make up Key are all properties based on foreign keys:"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  \n    long id();\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    Order order();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Product product();\n\n    int quantity();\n\n    // Snapshot of `product.price`\n    BigDecimal unitPrice(); \n}\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val order: Order\n\n    // highlight-next-line\n    @Key \n    @ManyToOne\n    val product: Product\n\n    val quantity: Int\n\n    // Snapshot of `product.price`\n    val unitPrice: BigDecimal\n}\n"})})})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},45348:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>p});var t=i(74848),s=i(28453),r=i(11470),a=i(19365),o=i(38351),l=i(74400);const d={sidebar_position:2,title:"Save Mode of Aggregate-Root"},c=void 0,h={id:"mutation/save-command/save-mode",title:"Save Mode of Aggregate-Root",description:"Save commands support 3 save modes that control how the aggregate root itself is saved:",source:"@site/docs/mutation/save-command/save-mode.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/save-mode",permalink:"/jimmer-doc/docs/mutation/save-command/save-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/save-mode.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Save Mode of Aggregate-Root"},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/jimmer-doc/docs/mutation/save-command/usage"},next:{title:"Save Mode of Associated Objects",permalink:"/jimmer-doc/docs/mutation/save-command/associated-save-mode"}},u={},p=[{value:"Specifying Object Id",id:"specifying-object-id",level:2},{value:"Not Specifying Object Id",id:"not-specifying-object-id",level:2},{value:"Not Specifying @Key Property <em>(Not Recommended)</em>",id:"not-specifying-key-property-not-recommended",level:3},{value:"Specifying @Key Property <em>(Recommended)</em>",id:"specifying-key-property-recommended",level:3},{value:"Summary",id:"summary",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Save commands support 3 save modes that control how the aggregate root itself is saved:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"UPSERT: This is the default mode. First check if the aggregate root object to be saved exists via a query:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If it does not exist: Execute INSERT"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If it exists: Execute UPDATE"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"INSERT_ONLY: Unconditionally execute INSERT"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"UPDATE_ONLY: Unconditionally execute UPDATE"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Save modes only affect the aggregate root object, not other associated objects."}),(0,t.jsxs)(n.p,{children:["For associated objects, please view ",(0,t.jsx)(n.a,{href:"./associated-save-mode",children:"Save Mode of Associated Objects"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"specifying-object-id",children:"Specifying Object Id"}),"\n",(0,t.jsx)(n.p,{children:"Let's look at an example:"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Objects.createBook(draft -> {\n    draft.setId(20L);\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.setStore(\n        ImmutableObjects.makeIdOnly(BookStore.class, 2L)\n    );\n});\n// highlight-next-line\nsqlClient.save(book);\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    id = 20\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store = makeIdOnly(BookStore::class, 2L)\n} \n// highlight-next-line\nsqlClient.save(book)\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ",(0,t.jsx)(n.code,{children:"save(book)"})," is shorthand equivalent to ",(0,t.jsx)(n.code,{children:"save(book, SaveMode.UPSERT)"}),", because ",(0,t.jsx)(n.code,{children:"UPSERT"})," is the default save mode."]}),"\n",(0,t.jsx)(n.p,{children:"Executing the code will generate two SQL statements:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query if the object exists in the database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID \nfrom BOOK tb_1_\nwhere\n    tb_1_.ID = ? /* 20 */\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The second SQL statement will differ depending on the result of the first SQL:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If no data is returned from the first SQL, execute INSERT:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(ID, NAME, EDITION, PRICE, STORE_ID)\nvalues(\n    ? /* 20 */, ? /* SQL in Action */,  \n    ? /* 1 */, ? /* 39.9 */, ? /* 2 */\n)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If data is returned from the first SQL, execute UPDATE:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    NAME = ? /* SQL in Action */,\n    EDITION = ? /* 1 */,\n    PRICE = ? /* 39.9 */,\n    STORE_ID = ? /* 2 */\nwhere\n    ID = ? /* 20 */\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Some databases support ",(0,t.jsx)(n.code,{children:"UPSERT"})," ",(0,t.jsxs)(n.em,{children:["(such as Postgres' ",(0,t.jsx)(n.code,{children:"insert into ... on conflict ..."}),")"]}),", which will be supported before Jimmer-1.0.0"]})}),"\n",(0,t.jsx)(n.p,{children:"The usage of the other two modes is simple:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"INSERT_ONLY:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sqlClient.save(book, SaveMode.INSERT_ONLY)\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sqlClient.insert(book)\n"})}),"\n",(0,t.jsx)(n.p,{children:"If executed, it will only generate the INSERT SQL above, without the SELECT."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"UPDATE_ONLY:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sqlClient.save(book, SaveMode.UPDATE_ONLY) \n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sqlClient.update(book)\n"})}),"\n",(0,t.jsx)(n.p,{children:"If executed, it will only generate the UPDATE SQL above, without the SELECT."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"not-specifying-object-id",children:"Not Specifying Object Id"}),"\n",(0,t.jsx)(n.p,{children:"In the above example, we specify the id for the object to be saved."}),"\n",(0,t.jsx)(n.p,{children:"However, often our entities have auto-incrementing id strategies, so specifying the id is unnecessary for insertion."}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"  ',children:"@Entity\npublic interface Book {\n\n    @Id\n    // highlight-next-line\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \n    long id();\n\n    String name();\n\n    int edition();\n\n    ...other properties omitted...\n}\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\npublic interface Book {\n\n    @Id\n    // highlight-next-line\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    val name: String\n\n    val edition: Int\n\n    ...other properties omitted...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"Book.id"})," is decorated with ",(0,t.jsx)(n.code,{children:"@GeneratedValue"})," using auto increment. So specifying the id is unnecessary for inserting a Book."]}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to insert an object without an id property:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Not specifying ",(0,t.jsx)(n.a,{href:"../../mapping/advanced/key",children:"@Key"})," property"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Specifying ",(0,t.jsx)(n.a,{href:"../../mapping/advanced/key",children:"@Key"})," property"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../../mapping/advanced/key",children:"@Key"})," is a very important concept in save commands that will be explained in detail later. It is not discussed here."]}),"\n",(0,t.jsxs)(n.h3,{id:"not-specifying-key-property-not-recommended",children:["Not Specifying @Key Property ",(0,t.jsx)(n.em,{children:"(Not Recommended)"})]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Objects.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.setStore(\n        ImmutableObjects.makeIdOnly(BookStore.class, 2L)\n    );\n});\nsqlClient.save(book);\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store = makeIdOnly(BookStore::class, 2L)\n}\nsqlClient.save(book)\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Obviously, the id property of the object to be saved is not specified, and the ",(0,t.jsx)(n.code,{children:"Book"})," type does not declare a ",(0,t.jsx)(n.a,{href:"../../mapping/advanced/key",children:"@Key"})," property either. So this is an object without neither id nor key."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"In this article, the objects with neither id nor key that we discuss are aggregate roots."}),(0,t.jsx)(n.p,{children:"For associated objects, having neither id nor key will cause exceptions by default. This will be discussed in subsequent documentations."})]}),"\n",(0,t.jsx)(n.p,{children:"Trying to save an aggregate root object without neither id nor key results in different behaviors for different save modes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"UPSERT: Insert the object without querying and checking, same as INSERT_ONLY."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"INSERT_ONLY: Insert the object."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"UPDATE_ONLY: Do not execute any SQL, just tell the developer the affected row count is 0."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The save mode in the above example is the default ",(0,t.jsx)(n.code,{children:"UPSERT"}),", so it generates:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(NAME, EDITION, PRICE, STORE_ID)\nvalues\n    (? /* SQL in Action */, ? /* 1 */, ? /* 39.9 */, ? /* 2 */) \n"})}),"\n",(0,t.jsx)(n.p,{children:"Here, the ID column value is not specified, using the database's auto increment."}),"\n",(0,t.jsx)(n.p,{children:"The developer can also obtain the automatically assigned id after insertion:"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Book book = ...\nlong newestBookId = sqlClient.save(book)\n    // highlight-next-line \n    .getNewEntity()\n    .getId();\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val book = ...\nval newestBookId = sqlClient.save(book)\n    // highlight-next-line\n    .modifiedEntity\n    .id\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"save"})," function returns an object containing ",(0,t.jsx)(n.em,{children:"(but not limited to)"})," two properties: ",(0,t.jsx)(n.code,{children:"originalEntity"})," and ",(0,t.jsx)(n.code,{children:"modifiedEntity"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Among them, ",(0,t.jsx)(n.code,{children:"originalEntity"})," is the original data structure to be saved passed in by the developer."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"modifiedEntity"})," represents a new data structure identical in shape to ",(0,t.jsx)(n.code,{children:"originalEntity"}),". Their differences are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"id"})," property of some objects in ",(0,t.jsx)(n.code,{children:"originalEntity"})," is not specified, the ",(0,t.jsx)(n.code,{children:"id"})," property of the corresponding objects in ",(0,t.jsx)(n.code,{children:"modifiedEntity"})," will be specified."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If some objects in ",(0,t.jsx)(n.code,{children:"originalEntity"})," have optimistic locking properties and correspond to UPDATE statements, the optimistic locking fields of the corresponding objects in ",(0,t.jsx)(n.code,{children:"modifiedEntity"})," will hold the new version number."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["So we can obtain the assigned id of the inserted aggregate root object via ",(0,t.jsx)(n.code,{children:"modifiedEntity.id"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"specifying-key-property-recommended",children:["Specifying @Key Property ",(0,t.jsx)(n.em,{children:"(Recommended)"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"id"})," of an entity is designated some auto-generation strategy ",(0,t.jsx)(n.em,{children:"(e.g. auto increment, sequence, UUID, snowflake id etc.)"}),", it brings a problem that the ",(0,t.jsx)(n.code,{children:"id"})," property of the entity serves no purpose other than being a unique identifier."]}),"\n",(0,t.jsxs)(n.p,{children:["To address this, Jimmer introduces a concept called ",(0,t.jsx)(n.code,{children:"@Key"}),', adding a "second primary key" with actual business meaning to entities. Due to limited space, click ',(0,t.jsx)(l.l,{buttonText:"here",title:"Key Definition",children:(0,t.jsx)(o.Ay,{})})," for the precise definition of ",(0,t.jsx)(n.code,{children:"Key"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["For save commands, ",(0,t.jsx)(n.code,{children:"@Key"})," is an extremely important concept."]}),(0,t.jsxs)(n.p,{children:["As long as the ",(0,t.jsx)(n.code,{children:"id"})," of an entity serves no purpose other than being a unique identifier, a ",(0,t.jsx)(n.code,{children:"key"})," property should be configured for the entity."]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Define ",(0,t.jsx)(n.code,{children:"@Key"})," property for entity type ",(0,t.jsx)(n.code,{children:"Book"})]}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to define the Key property for an entity:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use annotation to statically configure it globally."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Dynamically configure it in code, dynamic configuration only affects the current save command, and it can override static configuration."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below we demonstrate both approaches:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Static configuration ",(0,t.jsx)(n.em,{children:"(default for most business scenarios)"})]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key     \n    String name();\n\n    // highlight-next-line\n    @Key\n    int edition();\n\n    ...other properties omitted...\n}\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    val edition: Int\n\n    ...other properties omitted...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"edition"})," together form the key. This means these two properties jointly form a uniqueness constraint as a business-meaningful second primary key."]}),"\n",(0,t.jsx)(n.p,{children:"That is, book names can repeat, but only within different editions. Book name and edition combined must be unique. This requires adding the following unique constraint on the table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"alter table BOOK\n    add constraint UQ_BOOK\n        unique(NAME, EDITION); \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Override at runtime ",(0,t.jsx)(n.em,{children:"(only for individual save commands, rarely needed for special requirements)"})]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setKeyProps(BookProps.NAME, BookProps.EDITION)\n    .execute();\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"sqlClient.save(book) {\n    // highlight-next-line\n    .setKeyProps(Book::name, Book::edition)\n}\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Without special circumstances, Key properties should be statically configured via annotations for entity types in most cases."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use save commands to save objects without id"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Objects.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.setStore(\n        ImmutableObjects.makeIdOnly(BookStore.class, 2L)\n    );\n});\nsqlClient.save(book);\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store = makeIdOnly(BookStore::class, 2L)\n}\nsqlClient.save(book)\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"This time, two SQL statements will be generated:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check if the object exists in the database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        /* highlight-next-line */\n        tb_1_.NAME = ? /* SQL in Action */\n    and\n        /* highlight-next-line */\n        tb_1_.EDITION = ? /* 1 */\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, the key ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"edition"}),")"]})," is used to determine the existence of the to-be-saved object without id."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The second SQL statement will differ depending on the result of the first SQL:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If no data is returned from the first SQL, insert:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(NAME, EDITION, PRICE, STORE_ID)\nvalues(\n    ? /* SQL in Action */, ? /* 1 */, ? /* 39.9 */, ? /* 2 */\n)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If data is returned from the first SQL, update:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    NAME = ? /* SQL in Action */,\n    EDITION = ? /* 1 */,\n    PRICE = ? /* 39.9 */,\n    STORE_ID = ? /* 2 */ \nwhere\n    ID = ? /* 20 */\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Some databases support ",(0,t.jsx)(n.code,{children:"UPSERT"})," ",(0,t.jsxs)(n.em,{children:["(such as Postgres' ",(0,t.jsx)(n.code,{children:"insert into ... on conflict ..."}),")"]}),", which will be supported before Jimmer-1.0.0"]})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["Once Key properties are declared for an entity type, for objects to be saved ",(0,t.jsx)(n.em,{children:"(whether aggregate root or not)"}),":"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Either the ",(0,t.jsx)(n.code,{children:"id"})," property must be specified"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Or all key properties must be specified ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"edition"})," for this example)"]})]}),"\n",(0,t.jsxs)(n.p,{children:["If a key property is an associated object based on foreign key ",(0,t.jsx)(n.em,{children:"(whether fake or not)"}),", this associated object:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Either must be ",(0,t.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Or must be associated object with its ",(0,t.jsx)(n.code,{children:"id"})," property"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsxs)(n.p,{children:["Otherwise, the save command will throw an exception indicating some ",(0,t.jsx)(n.code,{children:"key"})," properties are not set."]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"INSERT_ONLY"})," and ",(0,t.jsx)(n.code,{children:"UPDATE_ONLY"})," modes are simple and need no summary. Here we focus on summarizing the ",(0,t.jsx)(n.code,{children:"UPSERT"})," mode."]}),"\n",(0,t.jsxs)(n.p,{children:["If Key properties are configured for the entity type, the behavior of the ",(0,t.jsx)(n.code,{children:"UPSERT"})," mode is:"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Precondition"}),(0,t.jsx)("th",{children:"Check if object exists"}),(0,t.jsx)("th",{children:"Check result"}),(0,t.jsx)("th",{children:"Final behavior"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"Id property specified"}),(0,t.jsx)("td",{rowspan:"2",children:"Query data existence by id"}),(0,t.jsx)("td",{children:"Data exists"}),(0,t.jsx)("td",{children:"Update specified properties including key properties by id"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Data does not exist"}),(0,t.jsx)("td",{children:"Insert data, no id generation needed since id is known"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"Id property not specified"}),(0,t.jsx)("td",{rowspan:"2",children:"Query data existence by all key properties"}),(0,t.jsx)("td",{children:"Data exists"}),(0,t.jsx)("td",{children:"Update specified properties except key properties by queried id"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Data does not exist"}),(0,t.jsx)("td",{children:"Insert data, id generation needed since id is unknown"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var t=i(18215);const s={tabItem:"tabItem_Ymn6"};var r=i(74848);function a(e){let{children:n,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>k});var t=i(96540),s=i(18215),r=i(23104),a=i(56347),o=i(205),l=i(57485),d=i(31682),c=i(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:s}}=e;return{value:n,label:i,attributes:t,default:s}}))}(i);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:s}=e,r=u(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,h]=x({queryString:i,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(i);return[s,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),g=(()=>{const e=d??j;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(74848);function y(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,i=l.indexOf(n),s=o[i].value;s!==t&&(d(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},66971:(e,n,i)=>{i.d(n,{a:()=>j});var t=i(96540),s=i(72774),r=i(63051),a=i(28968),o=i(48875),l=i(44676),d=i(47859),c=i(4671),h=i(99343),u=i(7324),p=i(39781),x=i(74848);const j=(0,t.memo)((e=>{let{open:n,fullScreen:i=!1,title:o,maxWidth:j="md",onClose:g,children:f}=e;const[y,b]=(0,t.useState)(i),v=(0,t.useCallback)((()=>{b((e=>!e))}),[]);return(0,x.jsxs)(r.A,{open:n,onClose:g,fullScreen:y,TransitionComponent:m,maxWidth:j,children:[(0,x.jsx)(s.A,{sx:{position:"relative"},children:(0,x.jsxs)(l.A,{children:[(0,x.jsx)(d.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,x.jsx)(c.A,{onClick:v,style:{color:"white"},children:y?(0,x.jsx)(u.A,{}):(0,x.jsx)(h.A,{})}),(0,x.jsx)(c.A,{"aria-label":"close",onClick:g,style:{color:"white"},children:(0,x.jsx)(p.A,{})})]})}),(0,x.jsx)(a.A,{children:f})]})})),m=t.forwardRef((function(e,n){return(0,x.jsx)(o.A,{direction:"up",ref:n,...e})}))},74400:(e,n,i)=>{i.d(n,{l:()=>o});var t=i(96540),s=i(67512),r=i(66971),a=i(74848);const o=(0,t.memo)((e=>{let{buttonText:n,fullScreen:i=!1,title:o=n,variant:l="outlined",maxWidth:d,useOriginalText:c=!0,children:h}=e;const[u,p]=(0,t.useState)(!1),x=(0,t.useCallback)((e=>{p(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),j=(0,t.useCallback)((()=>{p(!1)}),[]),m=c?{textTransform:"none"}:{};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{"data-is-view-more-button":"true",onClick:x,variant:l,size:"small",style:m,children:n}),(0,a.jsx)(r.a,{open:u,onClose:j,title:o,maxWidth:d,fullScreen:i,children:h})]})}))},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);