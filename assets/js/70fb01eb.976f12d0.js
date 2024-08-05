"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7386],{62834:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>_,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=r(74848),i=r(28453),s=r(11470),l=r(19365);const a={sidebar_position:4,title:"Recursive Query"},d=void 0,o={id:"query/object-fetcher/recursive",title:"Recursive Query",description:"A common requirement is to handle self-associated property.",source:"@site/docs/query/object-fetcher/recursive.mdx",sourceDirName:"query/object-fetcher",slug:"/query/object-fetcher/recursive",permalink:"/jimmer-doc/docs/query/object-fetcher/recursive",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/object-fetcher/recursive.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Recursive Query"},sidebar:"tutorialSidebar",previous:{title:"Associations",permalink:"/jimmer-doc/docs/query/object-fetcher/association"},next:{title:"View Properties",permalink:"/jimmer-doc/docs/query/object-fetcher/view"}},c={},h=[{value:"Model and Data Preparation",id:"model-and-data-preparation",level:2},{value:"Unlimited Recursion",id:"unlimited-recursion",level:2},{value:"Limited Depth",id:"limited-depth",level:2},{value:"Control Recursion Per Node",id:"control-recursion-per-node",level:2},{value:"Recursion on Multiple Properties",id:"recursion-on-multiple-properties",level:2}];function u(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A common requirement is to handle self-associated property."}),"\n",(0,t.jsx)(n.p,{children:"From a database perspective, self-assoiated property means a table's foreign key references itself. From an object model perspective, it represents a tree."}),"\n",(0,t.jsx)(n.p,{children:"The difficulty of self-associated properites is that the object depth is uncontrollable, theoretically infinite. Jimmer provides great support for this."}),"\n",(0,t.jsx)(n.h2,{id:"model-and-data-preparation",children:"Model and Data Preparation"}),"\n",(0,t.jsx)(n.p,{children:"Define the entity interface:"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface TreeNode {\n\n    @Id  \n    @Column(name = "NODE_ID")\n    long id();\n\n    String name();\n\n    @Null  \n    @ManyToOne\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface TreeNode {\n\n    @Id\n    @Column(name = "NODE_ID") \n    val id: Long\n\n    val name: String\n\n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode> \n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Prepare the database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table tree_node(\n    node_id bigint not null,\n    name varchar(20) not null,\n    parent_id bigint\n);\n\nalter table tree_node\n    add constraint pk_tree_node\n        primary key(node_id);\n        \nalter table tree_node\n    add constraint uq_tree_node\n        unique(parent_id, name);\n        \nalter table tree_node\n    add constraint fk_tree_node__parent\n        foreign key(parent_id)\n            references tree_node(node_id);\n\ninsert into tree_node(\n    node_id, name, parent_id\n) values\n    (1, 'Home', null),\n        (2, 'Food', 1),\n            (3, 'Drinks', 2),\n                (4, 'Coca Cola', 3),\n                (5, 'Fanta', 3),\n            (6, 'Bread', 2),\n                (7, 'Baguette', 6),\n                (8, 'Ciabatta', 6),\n        (9, 'Clothing', 1),\n            (10, 'Woman', 9),\n                (11, 'Casual wear', 10),\n                    (12, 'Dress', 11),\n                    (13, 'Miniskirt', 11),\n                    (14, 'Jeans', 11),\n                (15, 'Formal wear', 10),\n                    (16, 'Suit', 15),\n                    (17, 'Shirt', 15),\n            (18, 'Man', 9),\n                (19, 'Casual wear', 18),\n                    (20, 'Jacket', 19),\n                    (21, 'Jeans', 19),\n                (22, 'Formal wear', 18),\n                    (23, 'Suit', 22),\n                    (24, 'Shirt', 22)\n;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"unlimited-recursion",children:"Unlimited Recursion"}),"\n",(0,t.jsx)(n.p,{children:"Top-down, fetch unlimited layers:"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"TreeNodeTable node = Tables.TREE_NODE_TABLE;\n\nList<TreeNode> treeNodes = sqlClient\n    .createQuery(node)\n    .where(node.parentId().isNull())\n    .select(\n        node.fetch(\n            Fetchers.TREE_NODE_FETCHER\n                .name()\n                // highlight-next-line\n                .recursiveChildNodes()\n        )\n    )\n    .execute();\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val treeNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                `childNodes*`()\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"recursiveChildNodes"})," in Java code and ",(0,t.jsx)(n.code,{children:"childNodes*"})," in Kotlin code represent recursive queries."]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Jimmer automatically discovers self-associated properties in entities\nand generates such methods at compile time for users to invoke."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Recursive queries do not require specifying the shape of associated objects\nbecause recursive queries are very special -\nthe shape of associated objects is the shape of the current object itself."}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"6 SQL statements are generated:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query root nodes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_ \nwhere\ntb_1_.PARENT_ID is null\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_\nwhere \ntb_1_.PARENT_ID in (?)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID, \n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_ \nwhere\ntb_1_.PARENT_ID in (?, ?)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_\nwhere  \ntb_1_.PARENT_ID in (?, ?, ?, ?) \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_\nwhere\ntb_1_.PARENT_ID in (?, ?, ?, ?, ?, ?, ?, ?)  \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fetch layer 5 ",(0,t.jsx)(n.em,{children:"(This step does not query any data and the recursive query downstairs ends)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID, \n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_ \nwhere\ntb_1_.PARENT_ID in (?, ?, ?, ?, ?, ?, ?, ?, ?)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The printed result is (original compact, formatted for readability):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": 1,\n    "name": "Home",\n    "childNodes": [\n        {\n            "id": 9,\n            "name": "Clothing",\n            "childNodes": [\n                {\n                    "id": 18,\n                    "name": "Man",\n                    "childNodes": [\n                        {\n                            "id": 19,\n                            "name": "Casual wear", \n                            "childNodes": [\n                                {\n                                    "id": 20,\n                                    "name": "Jacket",\n                                    "childNodes": []\n                                },\n                                {\n                                    "id": 21,\n                                    "name": "Jeans",\n                                    "childNodes": []\n                                }\n                            ]\n                        },\n                        {\n                            "id": 22,\n                            "name": "Formal wear",\n                            "childNodes": [\n                                {\n                                    "id": 24,\n                                    "name": "Shirt",\n                                    "childNodes": []\n                                },\n                                {\n                                    "id": 23,\n                                    "name": "Suit",\n                                    "childNodes": []\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "id": 10,\n                    "name": "Woman",\n                    "childNodes": [\n                        {\n                            "id": 11,\n                            "name": "Casual wear",\n                            "childNodes": [\n                                {\n                                    "id": 12,\n                                    "name": "Dress",\n                                    "childNodes": []\n                                },\n                                {\n                                    "id": 14,\n                                    "name": "Jeans",\n                                    "childNodes": []\n                                },\n                                {\n                                    "id": 13,\n                                    "name": "Miniskirt", \n                                    "childNodes": []\n                                }\n                            ]\n                        },\n                        {\n                            "id": 15,\n                            "name": "Formal wear",\n                            "childNodes": [\n                                {\n                                    "id": 17,\n                                    "name": "Shirt",\n                                    "childNodes": []\n                                },\n                                {\n                                    "id": 16,\n                                    "name": "Suit",\n                                    "childNodes": []\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            "id": 2,\n            "name": "Food",\n            "childNodes": [\n                {\n                    "id": 6,\n                    "name": "Bread",\n                    "childNodes": [\n                        {\n                            "id": 7,\n                            "name": "Baguette",\n                            "childNodes": []\n                        },\n                        {\n                            "id": 8,\n                            "name": "Ciabatta",\n                            "childNodes": []\n                        }\n                    ]\n                },\n                {\n                    "id": 3,\n                    "name": "Drinks",\n                    "childNodes": [\n                        {\n                            "id": 4,\n                            "name": "Coca Cola",\n                            "childNodes": []\n                        },\n                        {\n                            "id": 5,\n                            "name": "Fanta",\n                            "childNodes": []\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"limited-depth",children:"Limited Depth"}),"\n",(0,t.jsx)(n.p,{children:"Top-down, fetch two layers:"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"TreeNodeTable node = Tables.TREE_NODE_TABLE;\n\nList<TreeNode> treeNodes = sqlClient\n    .createQuery(node)\n    .where(node.parentId().isNull())\n    .select(\n        node.fetch(\n            Fetchers.TREE_NODE_FETCHER\n                .name()\n                .recursiveChildNodes(\n                    // highlight-next-line  \n                    it -> it.depth(2)\n                )\n        )\n    )\n    .execute();\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val treeNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    // highlight-next-line\n                    depth(2)\n                }\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"3 SQLs are generated:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Main query to fetch root nodes (layer 0)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.NODE_ID, \n    tb_1_.NAME\nfrom TREE_NODE as tb_1_ \nwhere\ntb_1_.PARENT_ID is null\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID, \n    tb_1_.NAME\nfrom TREE_NODE as tb_1_\nwhere  \ntb_1_.PARENT_ID in (?)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME \nfrom TREE_NODE as tb_1_\nwhere\ntb_1_.PARENT_ID in (?, ?) \n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The printed result is (original compact, formatted for readability):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Home",\n    "childNodes":[\n        {\n            "id":9,\n            "name":"Clothing",\n            "childNodes":[\n                // highlight-next-line\n                {"id":18,"name":"Man"},\n                // highlight-next-line\n                {"id":10,"name":"Woman"}\n            ]\n        },{\n            "id":2,\n            "name":"Food",\n            "childNodes":[\n                // highlight-next-line\n                {"id":6,"name":"Bread"},\n                // highlight-next-line\n                {"id":3,"name":"Drinks"}\n            ]\n        }  \n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Note that the 4 marked objects do not show ",(0,t.jsx)(n.code,{children:"childNodes"})," as ",(0,t.jsx)(n.code,{children:"[]"}),", but lack the ",(0,t.jsx)(n.code,{children:"childNodes"})," property altogether."]}),(0,t.jsx)(n.p,{children:"This indicates not knowing at all whether there are deeper child nodes,\nbecause the recursive process was prematurely terminated manually."})]}),"\n",(0,t.jsx)(n.h2,{id:"control-recursion-per-node",children:"Control Recursion Per Node"}),"\n",(0,t.jsx)(n.p,{children:'Top-down, fetch unlimited layers. But for the node named "Clothing", stop recursion.'}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'TreeNodeTable node = Tables.TREE_NODE_TABLE;\n\nList<TreeNode> treeNodes = sqlClient\n    .createQuery(node)\n    .where(node.parentId().isNull())\n    .select(\n        node.fetch(\n            Fetchers.TREE_NODE_FETCHER\n            .name()\n            .recursiveChildNodes(\n                it -> it.recursive(args ->\n                    // highlight-next-line\n                    !args.getEntity().name().equals("Clothing")\n                )\n            )\n        )\n    )\n    .execute(); \n'})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val treeNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    recursive {\n                        // highlight-next-line\n                        entity.name != "Clothing"\n                    }\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In the above code, the parameter ",(0,t.jsx)(n.code,{children:"args"})," of ",(0,t.jsx)(n.code,{children:"it.recursive(args)"})," is an object providing two properties:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"args.getEntity()"}),": The current node object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"args.getDepth()"}),": The current node depth. 0 for nodes obtained directly from the main query, incrementally increases with recursion depth."]}),"\n",(0,t.jsx)(n.li,{children:"The return value decided by the user: A boolean variable that decides whether to recursively fetch for the current node."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The above code means all nodes will be recursively fetched except the ",(0,t.jsx)(n.code,{children:"Clothing"})," node."]}),"\n",(0,t.jsx)(n.p,{children:"4 SQLs are generated:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query root objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_ \nwhere tb_1_.PARENT_ID is null\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_\nwhere\ntb_1_.PARENT_ID in (?)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_\nwhere\n/*\n* Home node has two child nodes: \n*      "Food" and "Clothing",\n*\n* However, "Clothing is excluded by user,  \n* so `in(?)` is used here, not `in(?, ?)`  \n*/\ntb_1_.PARENT_ID in (?) \n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch layer 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_\nwhere\ntb_1_.PARENT_ID in (?, ?)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Fetch layer 4"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE as tb_1_ \nwhere\ntb_1_.PARENT_ID in (?, ?, ?, ?)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The printed result is (original compact, formatted for readability):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Home",\n    "childNodes":[\n        // highlight-next-line\n        {"id":9,"name":"Clothing"},\n        {\n            "id":2,\n            "name":"Food",\n            "childNodes":[\n                {\n                    "id":6,\n                    "name":"Bread",\n                    "childNodes":[\n                        {"id":7,"name":"Baguette","childNodes":[]},\n                        {"id":8,"name":"Ciabatta","childNodes":[]}\n                    ]\n                },{\n                    "id":3,\n                    "name":"Drinks",\n                    "childNodes":[\n                        {"id":4,"name":"Coca Cola","childNodes":[]},\n                        {"id":5,"name":"Fanta","childNodes":[]}\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Note that the marked object does not show ",(0,t.jsx)(n.code,{children:"childNodes"})," as ",(0,t.jsx)(n.code,{children:"[]"}),", but lack the ",(0,t.jsx)(n.code,{children:"childNodes"})," property altogether."]}),(0,t.jsx)(n.p,{children:"This indicates not knowing at all whether there are deeper child nodes,\nbecause the recursive process was prematurely terminated manually."})]}),"\n",(0,t.jsx)(n.h2,{id:"recursion-on-multiple-properties",children:"Recursion on Multiple Properties"}),"\n",(0,t.jsx)(n.p,{children:"Jimmer supports recursive queries on multiple association properties, as below"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Tree treeNode = sqlClient\n    .findById(\n        Fetchers.TREE_NODE_FETCHER\n                .name()\n                // highlight-next-line\n                .recursiveParent()\n                // highlight-next-line\n                .recursiveChildNodes(),\n        10L\n    );\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val treeNodes = sqlClient\n    .findById(\n        newFetcher(TreeNode::class) {\n            name()\n            // highlight-next-line\n            `parent*`()\n            // highlight-next-line\n            `childNodes*`()\n        }\n    )\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"This example performs recursive queries on two associated properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"parent: Starting from the current node, keep querying upwards for the parent node until the root node is queried"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"childNodes: Starting from the current node, keep querying downwards for child nodes until the deepest child node is queried"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When executed, the following 6 SQL statements are generated:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query current node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.NODE_ID, \n    tb_1_.NAME,\n    tb_1_.PARENT_ID\nfrom TREE_NODE tb_1_ \nwhere\n    tb_1_.NODE_ID = ? /* 10 */\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query first layer parent node upstairs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.NODE_ID,\n    tb_1_.NAME, \n    tb_1_.PARENT_ID\nfrom TREE_NODE tb_1_\nwhere\n    tb_1_.NODE_ID = ? /* 9 */\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Query second layer parent node upstairs ",(0,t.jsx)(n.em,{children:"(This step will query the root node and the recursive query upstairs ends)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.NODE_ID,\n    tb_1_.NAME,\n    tb_1_.PARENT_ID\nfrom TREE_NODE tb_1_\nwhere\n    tb_1_.NODE_ID = ? /* 1 */\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query first layer child nodes downstairs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.NODE_ID, \n    tb_1_.NAME\nfrom TREE_NODE tb_1_\nwhere\n    tb_1_.PARENT_ID = ? /* 10 */ \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query second layer child nodes downstairs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE tb_1_\nwhere\n    tb_1_.PARENT_ID in (\n        ? /* 11 */, ? /* 15 */\n    )\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Query third layer child nodes downstairs ",(0,t.jsx)(n.em,{children:"(This step does not query any data and the recursive query downstairs ends)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.PARENT_ID,\n    tb_1_.NODE_ID,\n    tb_1_.NAME\nfrom TREE_NODE tb_1_\nwhere\n    tb_1_.PARENT_ID in (\n        ? /* 12 */, ? /* 13 */, ? /* 14 */, ? /* 16 */, ? /* 17 */\n    )\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Finally, the query result is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id":10,\n    "name":"Woman",\n    "parent":{ // Recursive query upstairs  \n        "id":9,\n        "name":"Clothing",\n        "parent":{\n            "id":1, \n            "name":"Home",\n            "parent":null\n        }\n    },\n    "childNodes":[ // Recursive query downstairs\n        {\n            "id":11,\n            "name":"Casual wear", \n            "childNodes":[\n                {\n                    "id":12,\n                    "name":"Dress",\n                    "childNodes":[]\n                },\n                {\n                    "id":13, \n                    "name":"Miniskirt",\n                    "childNodes":[]\n                },\n                {\n                    "id":14,\n                    "name":"Jeans",\n                    "childNodes":[]\n                }\n            ]\n        },\n        {\n            "id":15, \n            "name":"Formal wear",\n            "childNodes":[\n                {\n                    "id":16,\n                    "name":"Suit",\n                    "childNodes":[]\n                },\n                {\n                    "id":17,\n                    "name":"Shirt",\n                    "childNodes":[] \n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It is not difficult to see from the correct running of this example that the recursive path of the ",(0,t.jsx)(n.code,{children:"parent"})," direction and the recursive path of the ",(0,t.jsx)(n.code,{children:"childNodes"})," direction are completely independent.\nThe recursive query upstairs and downstairs will not be mixed or alternate."]}),"\n",(0,t.jsx)(n.p,{children:"Therefore, we can slightly correct the previous discussion on why recursive queries do not require specifying the associated object format:"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Associated object format =\nAll properties in the current object format that are not recursively queried ",(0,t.jsx)(n.em,{children:"(whether associated properties or not)"})," +\nThe currently recursively queried property ",(0,t.jsx)(n.em,{children:"(excluding other recursively queried properties)"})]})]})]})}function _(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(18215);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>f});var t=r(96540),i=r(18215),s=r(23104),l=r(56347),a=r(205),d=r(57485),o=r(31682),c=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function _(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const i=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=u(e),[l,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!_({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,h]=p({queryString:r,groupId:i}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),j=(()=>{const e=o??m;return _({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&d(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!_({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),i=a[r].value;i!==t&&(o(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...s,className:(0,i.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function E(e){const n=m(e);return(0,N.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,N.jsx)(b,{...n,...e}),(0,N.jsx)(g,{...n,...e})]})}function f(e){const n=(0,x.A)();return(0,N.jsx)(E,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);