"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6087],{27262:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(74848),r=t(28453),l=t(11470),s=t(19365);const a=[];function o(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Usage1: Query Entity Objects"}),(0,i.jsx)("th",{children:"Usage2: Query DTOs"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{rowspan:"2",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Code"})}),(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        table.fetch(\n            Fetchers.BOOK_FETCHER\n                .allScalarFields()\n                // highlight-next-line\n                .store(\n                    Fetchers.BOOK_STORE_FETCHER\n                        .allScalarFields()\n                )\n                // highlight-next-line\n                .authors(\n                    Fetchers.AUTHOR_FETCHER\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "Learning GraphQL"\n        select(\n            // highlight-next-line\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                store {\n                    allScalarFields()\n                }\n                // highlight-next-line\n                authors {\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"DTO Code"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export yourpackage.Book \n    -> package yourpackage.dto;\n\nBookView {\n    #allScalars\n    store {\n        #allScalars\n    }\n    authors {\n        #allScalars\n    }\n}\n"})}),(0,i.jsxs)(n.p,{children:["After compilation, Java/Kotlin type ",(0,i.jsx)(n.code,{children:"BookView"})," will be automatically generated."]})]})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Code"})}),(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        // highlight-next-line\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "GraphQL"\n        select(\n            // highlight-next-line\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n'})})})]})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output Result"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id": 1,\n        "name": "Learning GraphQL",\n        "edition": 1,\n        "price": 50,\n        // highlight-next-line\n        "store": {\n            "id": 1,\n            "name": "O\'REILLY",\n            "website": null\n        },\n        // highlight-next-line\n        "authors": [\n            {\n                "id": 2,\n                "firstName": "Alex",\n                "lastName": "Banks",\n                "gender": "MALE"\n            },\n            {\n                "id": 1,\n                "firstName": "Eve",\n                "lastName": "Procello",\n                "gender": "FEMALE"\n            }\n        ]\n    },\n    {\n        "id": 2,\n        "name": "Learning GraphQL",\n        "edition": 2,\n        "price": 55,\n        // highlight-next-line\n        "store": {\n            "id": 1,\n            "name": "O\'REILLY",\n            "website": null\n        },\n        // highlight-next-line\n        "authors": [\n            {\n                "id": 2,\n                "firstName": "Alex",\n                "lastName": "Banks",\n                "gender": "MALE"\n            },\n            {\n                "id": 1,\n                "firstName": "Eve",\n                "lastName": "Procello",\n                "gender": "FEMALE"\n            }\n        ]\n    },\n    {\n        "id": 3,\n        "name": "Learning GraphQL",\n        "edition": 3,\n        "price": 51,\n        // highlight-next-line\n        "store": {\n            "id": 1,\n            "name": "O\'REILLY",\n            "website": null\n        },\n        // highlight-next-line\n        "authors": [\n            {\n                "id": 2,\n                "firstName": "Alex",\n                "lastName": "Banks",\n                "gender": "MALE"\n            },\n            {\n                "id": 1,\n                "firstName": "Eve",\n                "lastName": "Procello",\n                "gender": "FEMALE"\n            }\n        ]\n    }\n]\n'})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output Result"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"[\n    BookView(\n        id=1, \n        name=Learning GraphQL, \n        edition=1, \n        price=50.00, \n        // highlight-next-line\n        store=BookView.TargetOf_store(\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        // highlight-next-line\n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=2, \n        name=Learning GraphQL, \n        edition=2, \n        price=55.00, \n        // highlight-next-line\n        store=BookView.TargetOf_store(\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        // highlight-next-line\n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=3, \n        name=Learning GraphQL, \n        edition=3, \n        price=51.00, \n        // highlight-next-line\n        store=BookView.TargetOf_store(\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        // highlight-next-line\n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    )\n]\n"})})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},36312:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(74848),r=t(28453),l=t(11470),s=t(19365);const a=[];function o(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Usage1: Query Entity Objects"}),(0,i.jsx)("th",{children:"Usage2: Query DTOs"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{rowspan:"2",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Code"})}),(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        // highlight-next-line\n        table.fetch(\n            Fetchers.BOOK_FETCHER\n                .name()\n        )\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "Learning GraphQL"\n        select(\n            // highlight-next-line\n            table.fetchBy {\n                name()\n            }\n        )\n    }\n    .execute()\n'})})})]})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"DTO\u4ee3\u7801"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export yourpackage.Book \n    -> package yourpackage.dto;\n\nBookView {\n    id\n    name\n}\n"})}),(0,i.jsxs)(n.p,{children:["After compilation, Java/Kotlin type ",(0,i.jsx)(n.code,{children:"BookView"})," will be automatically generated."]})]})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Code"})}),(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        // highlight-next-line\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "Learning GraphQL"\n        select(\n            // highlight-next-line\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n'})})})]})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output Result"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {"id":10,"name":"Learning GraphQL"}, \n    {"id":11,"name":"Learning GraphQL"}, \n    {"id":12,"name":"Learning GraphQL"}\n]\n'})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output Result"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"[\n    BookView(id=10, name=Learning GraphQL), \n    BookView(id=11, name=Learning GraphQL), \n    BookView(id=12, name=Learning GraphQL)\n]\n"})})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},56879:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(74848),r=t(28453),l=t(11470),s=t(19365);const a=[];function o(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Usage1: Query Entity Objects"}),(0,i.jsx)("th",{children:"Usage2: Query DTOs"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{rowspan:"2",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Code"})}),(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"TreeNode rootNode = sqlClient\n    .findById(\n        Fetchers.TREE_NODE_FETCHER\n                .allScalarFields()\n                // Recursion upwards\n                // highlight-next-line\n                .recursiveParent() \u2776\n                // Recursion downward\n                // highlight-next-line\n                .recursiveChildNodes() \u2777\n        10L\n    );\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val rootNode = sqlClient\n    .findById(\n        newFetcher(TreeNode::class).by {\n            allScalarFields()\n            // Recursion upwards\n            // highlight-next-line\n            `parent*`() \u2776\n            // Recursion downward\n            // highlight-next-line\n            `childNodes*`() \u2777\n        }\n    )\n"})})})]})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"DTO\u4ee3\u7801"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export yourpackage.TreeNode \n    -> package yourpackage.dto;\n\nRecurisveTreeNodeView {\n    id\n    // Recursion upwards\n    // highlight-next-line\n    parent* \u2776\n    // Recursion downward\n    // highlight-next-line\n    childNodes* \u2777\n}\n"})}),(0,i.jsxs)(n.p,{children:["After compilation, Java/Kotlin type ",(0,i.jsx)(n.code,{children:"RecurisveTreeNodeView"})," will be automatically generated."]})]})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Code"})}),(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"RecurisveTreeNodeView rootNode = sqlClient\n    .findById(\n        RecurisveTreeNodeView.class,\n        10L\n    );\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val rootNode = sqlClient\n    .findById(\n        RecurisveTreeNodeView::class,\n        10L\n    );\n"})})})]})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output Result"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id": 10,\n    "name": "Woman",\n    "parent": { \u2776\n        "id": 9,\n        "name": "Clothing", \u2776\n        "parent": {\n            "id": 1,\n            "name": "Home",\n            "parent": null \u2776\n        }\n    },\n    "childNodes": [ \u2777\n        {\n            "id": 11,\n            "name": "Casual wear",\n            "childNodes": [ \u2777\n                {\n                    "id": 12,\n                    "name": "Dress",\n                    "childNodes": [] \u2777\n                },\n                {\n                    "id": 13,\n                    "name": "Miniskirt",\n                    "childNodes": [] \u2777\n                },\n                {\n                    "id": 14,\n                    "name": "Jeans",\n                    "childNodes": [] \u2777\n                }\n            ]\n        },\n        {\n            "id": 15,\n            "name": "Formal wear",\n            "childNodes": [ \u2777\n                {\n                    "id": 16,\n                    "name": "Suit",\n                    "childNodes": [] \u2777\n                },\n                {\n                    "id": 17,\n                    "name": "Shirt",\n                    "childNodes": [] \u2777\n                }\n            ]\n        }\n    ]\n}\n'})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output Result"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"RecursiveTreeNodeView(\n    id=10, \n    name=Woman, \n    parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n        id=9, \n        name=Clothing, \n        parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n            id=1, \n            name=Home, \n            parent=null \u2776\n        )\n    ), \n    childNodes=[ \u2777\n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=11, \n            name=Casual wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=12, \n                    name=Dress, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=13, \n                    name=Miniskirt, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=14, \n                    name=Jeans, \n                    childNodes=[] \u2777\n                )\n            ]\n        ), \n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=15, \n            name=Formal wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=16, \n                    name=Suit, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=17, \n                    name=Shirt, \n                    childNodes=[] \u2777\n                )\n            ]\n        )\n    ]\n)\n"})})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},73172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=t(74848),r=t(28453),l=t(11470),s=t(19365),a=t(36312),o=t(27262),c=t(56879);const d={sidebar_position:1,title:"Feature Introduction"},h=void 0,u={id:"quick-view/fetch/feature",title:"Feature Introduction",description:"Here is the English translation of the file, with the code indentation preserved:",source:"@site/docs/quick-view/fetch/feature.mdx",sourceDirName:"quick-view/fetch",slug:"/quick-view/fetch/feature",permalink:"/jimmer-doc/docs/quick-view/fetch/feature",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/fetch/feature.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Feature Introduction"},sidebar:"tutorialSidebar",previous:{title:"1. Query Arbitrary Shape",permalink:"/jimmer-doc/docs/quick-view/fetch/"},next:{title:"Exposing Features",permalink:"/jimmer-doc/docs/quick-view/fetch/export/"}},p={},g=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"1. Query Partial Objects",id:"1-query-partial-objects",level:3},...a.RM,{value:"2. Include Associated Objects",id:"2-include-associated-objects",level:3},...o.RM,{value:"3. Recursive Query",id:"3-recursive-query",level:3},...c.RM,{value:"Repository Code Style",id:"repository-code-style",level:2},{value:"The Simplest Repository",id:"the-simplest-repository",level:3},{value:"Improved Repository",id:"improved-repository",level:3}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the English translation of the file, with the code indentation preserved:"}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.p,{children:"Jimmer can query data structures of any shape, with control over the queried data structure as fine-grained as GraphQL."}),"\n",(0,i.jsx)(n.p,{children:"Next, we will demonstrate its usage in three scenarios."}),"\n",(0,i.jsx)(n.h3,{id:"1-query-partial-objects",children:"1. Query Partial Objects"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"A partial object refers to querying only part of an object's properties, with less information than an isolated object."})}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"2-include-associated-objects",children:"2. Include Associated Objects"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Select an entity as the aggregate root, and query not only the aggregate root object but also its associated objects, with no restrictions on depth or breadth."}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This level of control over the format is as fine-grained as GraphQL."}),"\n"]})]}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"3-recursive-query",children:"3. Recursive Query"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"If an entity contains Self-correlation properties, you can perform a recursive query."}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"As of now, the GraphQL protocol does not support recursive queries."}),"\n"]})]}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"repository-code-style",children:"Repository Code Style"}),"\n",(0,i.jsx)(n.p,{children:"The above code is only intended to demonstrate Jimmer's powerful control over the format of the queried data through three scenarios and does not organize the code structure."}),"\n",(0,i.jsxs)(n.p,{children:["In actual development, we must organize the code in some way, with data operation-level code placed in the ",(0,i.jsx)(n.code,{children:"Repository"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"The previous examples showed two usages: querying entity objects and querying DTO objects. To control the complexity of this document, the following sections will only discuss how to organize code for querying entity objects."})}),"\n",(0,i.jsx)(n.h3,{id:"the-simplest-repository",children:"The Simplest Repository"}),"\n",(0,i.jsx)(n.p,{children:"Now let's write a BookRepository for querying Book"}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"  ',children:"@Repository\npubic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @Nullable\n    public Book findBookById(long id) {\n        return sqlClient.findById(Book.class, id);\n    }\n\n    public List<Book> findBooksByName(@Nullable String name) {\n        BookTable table = Tables.BOOK_TABLE;\n        return sqlClient\n            .createQuery(table)\n            .whereIf(\n                name != null && !name.isEmpty(),  \n                table.name().ilike(name)\n            )\n            .select(table)\n            .execute();\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt"',children:"@Repository\nclass BookRepository(\n    private val sqlClient: KSqlClient  \n) {\n\n    fun findBookById(id: Long): Book? =  \n        sqlClient.findById(Book::class, id)  \n\n    fun findBooksByName(name: String?): List<Book> =  \n        sqlClient\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike name);\n                }\n                select(table) \n            }\n            .execute()\n}\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JSqlClient"})," in Java code and ",(0,i.jsx)(n.code,{children:"KSqlClient"})," in Kotlin code are the API entry points provided by Jimmer for Java and Kotlin developers."]}),"\n",(0,i.jsxs)(n.p,{children:["In actual projects, the object is a global object. This chapter document is used for quick preview and does not introduce details. Readers can ignore specific details for the time being and just know that ",(0,i.jsx)(n.code,{children:"sqlClient"})," is the API entry point."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The purpose of this article is to control the format of returned objects, not to introduce complex query conditions ",(0,i.jsxs)(n.em,{children:["(this part of the content is introduced in ",(0,i.jsx)(n.a,{href:"../dsl",children:"Quick Preview/Arbitrary Dynamic Queries"}),")"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["So these two methods symbolically use ",(0,i.jsx)(n.code,{children:"Book.id"})," and ",(0,i.jsx)(n.code,{children:"Book.name"})," as filters."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Jimmer is technically neutral, but using Spring-style code often serves to simplify explanation, so this example uses Spring-style writing."}),"\n",(0,i.jsxs)(n.p,{children:["However, for convenience of non-Spring users to read, it deliberately does not use ",(0,i.jsx)(n.a,{href:"../../spring/repository",children:"Jimmer support for Spring Data"})," here, but uses the relatively primitive injection of ",(0,i.jsx)(n.code,{children:"sqlClient"}),", which reduces interference from Spring to a minimum."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Tables.BOOK_TABLE"})," in Java code is code that Jimmer automatically generates at compile time."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If there is an instance ",(0,i.jsx)(n.code,{children:"bookRepository"})," of the above class, take ",(0,i.jsx)(n.code,{children:"findBookById"})," as an example:"]}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"System.out.println(bookRepository.findBookById(1L));\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"println(bookRepository.findBookById(1L));  \n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"The output result is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id" : 1,\n  "name" : "Learning GraphQL",\n  "edition" : 1,\n  "price" : 50.00,\n  "store" : {\n    "id" : 1\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The output format is fixed and does not match the topic \u201cQuery Any Data Structure Shape\u201d we are discussing now, so we need to improve ",(0,i.jsx)(n.code,{children:"BookRepository"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"improved-repository",children:"Improved Repository"}),"\n",(0,i.jsxs)(n.p,{children:["Let's make some minor improvements to the previous ",(0,i.jsx)(n.code,{children:"BookRepository"})," class"]}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"  ',children:"@Repository\npubic class BookRepository {\n\n    private final JSqlClient sqlClient;  \n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @Nullable\n    public Book findBookById(\n        long id,  \n        // highlight-next-line\n        Fetcher<Book> fetcher\n    ) {\n        return sqlClient.findById(\n            // highlight-next-line\n            fetcher,  \n            id  \n        );\n    }\n\n    public List<Book> findBooksByName(\n        @Nullable String name,\n        // highlight-next-line  \n        @Nullable Fetcher<Book> fetcher\n    ) {\n        BookTable table = Tables.BOOK_TABLE;\n        return sqlClient\n            .createQuery(table)\n            .whereIf(  \n                name != null && !name.isEmpty(),   \n                table.name().ilike(name)\n            )\n            .select(  \n                // highlight-next-line\n                table.fetch(fetcher)\n            )\n            .execute();\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt"',children:"@Repository\nclass BookRepository(\n    private val sqlClient: KSqlClient  \n) {\n\n    fun findBookById(\n        id: Long,\n        // highlight-next-line\n        fetcher: Fetcher<Book>\n    ): Book? =\n        sqlClient.findById(\n            // highlight-next-line\n            fetcher,  \n            id\n        )  \n\n    fun findBooksByName(\n        name: String? = null,\n        // highlight-next-line  \n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =  \n        sqlClient\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike name); \n                }\n                select( \n                    // highlight-next-line  \n                    table.fetch(fetcher)\n                )\n            }\n            .execute()  \n}\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we add a parameter of type ",(0,i.jsx)(n.code,{children:"Fetcher<Book>"})," for each query method, through which we can flexibly control the format of the queried object ",(0,i.jsx)(n.em,{children:"(i.e. the shape of the queried data structure)"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This is the recommended usage. The Repository is only responsible for filtering, sorting, paging and other operations, but does not control the format of the returned data. Instead, it exposes the control of the data format through the ",(0,i.jsx)(n.code,{children:"Fetcher<E>"})," parameter to Let the upper layer business logic decide."]})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(18215);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(96540),r=t(18215),l=t(23104),s=t(56347),a=t(205),o=t(57485),c=t(31682),d=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=u(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[c,h]=g({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),m=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=a[t].value;r!==i&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,r.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);