"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8941],{88336:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>l});var s=t(74848),i=t(28453);const l=[];function o(e){const n={a:"a",em:"em",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"There are 5 modes for dissociating child objects"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["NONE\n",(0,s.jsx)(n.em,{children:"(default)"})]})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["Depend on the global configuration ",(0,s.jsx)(n.a,{href:"/docs/configuration/dissociate-action-checking",children:"jimmer.default-dissociate-action-checking"}),"."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.a,{href:"/docs/configuration/dissociate-action-checking",children:"jimmer.default-dissociate-action-checking"})," is true ",(0,s.jsx)(n.em,{children:"(default)"})," or the foreign key underlying the current association is real ",(0,s.jsxs)(n.em,{children:["(there is a corresponding foreign key constraint in the database, please refer to ",(0,s.jsx)(n.a,{href:"/docs/mapping/base/foreignkey",children:"Real and Fake Foreign Keys"}),")"]}),",\nit is treated as CHECK."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.a,{href:"/docs/configuration/dissociate-action-checking",children:"jimmer.default-dissociate-action-checking"})," is false and the foreign key underlying the current association is fake ",(0,s.jsxs)(n.em,{children:["(there is no corresponding foreign key constraint in the database, please refer to ",(0,s.jsx)(n.a,{href:"/docs/mapping/base/foreignkey",children:"Real and Fake Foreign Keys"}),")"]}),","]}),"\n",(0,s.jsx)(n.p,{children:"it is treated as LAX."}),"\n"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"LAX"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["This option is only valid for pseudo foreign keys ",(0,s.jsxs)(n.em,{children:["(please refer to ",(0,s.jsx)(n.a,{href:"/docs/mapping/base/foreignkey",children:"Real and Fake Foreign Keys"}),")"]}),",\notherwise it will be ignored, the same as CHECK."]}),(0,s.jsxs)(n.p,{children:["Dissociation operations are supported even if there are child objects.\nEven if the parent object is deleted ",(0,s.jsx)(n.em,{children:"(dissociation mode is also adopted by delete commands)"}),",\ndangling pseudo foreign keys of child objects are allowed\n",(0,s.jsx)(n.em,{children:"(even if pseudo foreign keys are left dangling, the query system can still work normally)"}),"."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"CHECK"}),(0,s.jsx)("td",{children:"If there are child objects, disassociation is not supported, the operation is prevented by throwing an exception."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"SET_NULL"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Set the foreign key of the disassociated child object to null.\nThe prerequisite is that the many-to-one associated propety of the child object is nullable; otherwise, attempting this configuration will lead to an exception."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"DELETE"}),(0,s.jsx)("td",{children:"Delete the disassociated child objects."})]})]})]})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},41722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var s=t(74848),i=t(28453),l=t(11470),o=t(19365),r=t(88336);const a={sidebar_position:4,title:"Delete Command"},c=void 0,d={id:"mutation/delete-command",title:"Delete Command",description:"Basic Concepts",source:"@site/docs/mutation/delete-command.mdx",sourceDirName:"mutation",slug:"/mutation/delete-command",permalink:"/jimmer-doc/docs/mutation/delete-command",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/delete-command.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Delete Command"},sidebar:"tutorialSidebar",previous:{title:"Using MapStruct",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/mapstruct"},next:{title:"Mutable Association Table",permalink:"/jimmer-doc/docs/mutation/associations"}},h={},u=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Logical Delete",id:"logical-delete",level:2},{value:"Physical Delete",id:"physical-delete",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Dissociate Mode",id:"dissociate-mode",level:3},...r.RM,{value:"Dissociation Examples",id:"dissociation-examples",level:2}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,s.jsx)(n.p,{children:"The delete command deletes objects by id or id collection."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"API Category"}),(0,s.jsx)("th",{children:"Language"}),(0,s.jsx)("th",{children:"Delete by Id"}),(0,s.jsx)("th",{children:"Delete by Id Collection"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"Low Level API"}),(0,s.jsx)("td",{children:"Java"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Full API"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"JSqlClient.getEntities().delete"}),(0,s.jsx)("li",{children:"JSqlClient.getEntities().deleteCommand"})]}),(0,s.jsx)(n.p,{children:"Shortcut API"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"JSqlClient.deleteById"})})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Full API"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"JSqlClient.getEntities().deleteAll"}),(0,s.jsx)("li",{children:"JSqlClient.getEntities().deleteAllCommand"})]}),(0,s.jsx)(n.p,{children:"Shortcut API"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"JSqlClient.deleteByIds"})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Kotlin"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Full API"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"KSqlClient.entities.delete"})}),(0,s.jsx)(n.p,{children:"Shortcut API"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"KSqlClient.deleteById"})})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Full API"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"KSqlClient.entities.deleteAll"})}),(0,s.jsx)(n.p,{children:"Shortcut API"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"KSqlClient.deleteByIds"})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"Spring Data API"}),(0,s.jsx)("td",{children:"Java"}),(0,s.jsx)("td",{children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"JRepository.deleteById"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"JRepository.deleteByIds"}),(0,s.jsx)("li",{children:"JRepository.deleteAllById"})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Kotlin"}),(0,s.jsx)("td",{children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"KRepository.deleteById"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"KRepository.deleteByIds"}),(0,s.jsx)("li",{children:"KRepository.deleteAllById"})]})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Necessary Explanations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Java low-level API there are two methods ending in ",(0,s.jsx)(n.code,{children:"Command"}),": ",(0,s.jsx)(n.code,{children:"deleteCommand"})," and ",(0,s.jsx)(n.code,{children:"deleteAllCommand"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["These two methods create commands but do not execute them immediately. After the user does more configuration on the command, calling ",(0,s.jsx)(n.code,{children:"execute"})," executes it."]}),"\n",(0,s.jsxs)(n.p,{children:["Take ",(0,s.jsx)(n.code,{children:"deleteCommand"})," as an example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L) \u2776\n    .setDissociateAction(BookProps.STORE, DissociateAction.SET_NULL) \u2777\n    .execute(); \u2778\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u2776 Create the command, but do not execute it."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2777 Configure the command, can be chained with multiple configurations ",(0,s.jsx)(n.em,{children:"(here only one configuration is demoed)"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The effect of this configuration will be explained later, readers can ignore it for now."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u2778 Finally execute it."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Kotlin does not need such a design, because its delete method supports an optional Lambda parameter for configuration. Simply execute with the necessary configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        setDissociateAction(Book::store, DissociateAction.SET_NULL)\n    }\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Spring Data API we can find two methods with the same functionality but different names: ",(0,s.jsx)(n.code,{children:"deleteByIds"})," and ",(0,s.jsx)(n.code,{children:"deleteAllById"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"deleteByIds"}),": A method consistent in style with the Jimmer low-level shortcut API."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"deleteAllById"}),": A required method when inheriting ",(0,s.jsx)(n.code,{children:"org.springframework.data.repository.CrudRepository"}),", can be understood as an alias of ",(0,s.jsx)(n.code,{children:"deleteByIds"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The delete command supports two types of operations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Logical delete: Does not actually delete data, just marks the logical delete field of the object as "deleted".'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Physical delete: Actually deletes data."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All the above APIs support an optional parameter of type ",(0,s.jsx)(n.code,{children:"DeleteMode"})," through Java method overloading or Kotlin default parameters. This parameter type is an enum with three possible values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AUTO"}),": Does not explicitly specify whether the current operation is logical delete or physical delete"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the deleted entity type has a ",(0,s.jsx)(n.a,{href:"../mapping/advanced/logical-deleted/entity",children:"logical delete field"}),", perform logical delete."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Otherwise, perform physical delete."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LOGICAL"}),": Explicitly specifies that the current operation is logical delete"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the deleted entity type has a ",(0,s.jsx)(n.a,{href:"../mapping/advanced/logical-deleted/entity",children:"logical delete field"}),", perform logical delete."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Otherwise, throw an exception indicating that the current entity does not support logical delete."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PHYSICAL"}),": Explicitly specifies that the current operation is physical delete"]}),"\n",(0,s.jsxs)(n.p,{children:["Regardless of whether the deleted entity type has a ",(0,s.jsx)(n.a,{href:"../mapping/advanced/logical-deleted/entity",children:"logical delete field"}),", perform physical delete."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"logical-delete",children:"Logical Delete"}),"\n",(0,s.jsxs)(n.p,{children:["Assuming the entity has a ",(0,s.jsx)(n.a,{href:"../mapping/advanced/logical-deleted/entity",children:"logical delete field"}),", for example:"]}),"\n",(0,s.jsxs)(l.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    // highlight-next-line  \n    @LogicalDeleted("true")\n    boolean isDeleted();\n\n    ...other code omitted...\n}\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...other code omitted...\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"Then the following three behaviors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sqlClient.deleteById(Book.class, 1L)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sqlClient.deleteById(Book.class, 1L, DeleteMode.AUTO)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sqlClient.deleteById(Book.class, 1L, DeleteMode.LOGICAL)"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"have the same function, they all represent logical delete, and generate the following sql:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"update BOOK  \nset DELETED = ? /* true */\nwhere ID in(?/* 1L*/)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"physical-delete",children:"Physical Delete"}),"\n",(0,s.jsxs)(n.p,{children:["If the entity does not have a ",(0,s.jsx)(n.a,{href:"../mapping/advanced/logical-deleted/entity",children:"logical delete field"}),", or the delete mode is explicitly specified as ",(0,s.jsx)(n.code,{children:"DeleteMode.PHYSICAL"}),", physical delete is performed."]}),"\n",(0,s.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsxs)(l.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'DeleteResult result = sqlClient\n    .getEntities()\n    .deleteAll(Book.class, Arrays.asList(1L, 2L, 3L, 4L));\n\nSystem.out.println(\n    \n    "Affected row count: " +\n    result.getTotalAffectedRowCount() + \n\n    "\\nAffected row count of table \'BOOK\': " +\n    result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n    \n    "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n    result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val result = sqlClient\n    .entities\n    .deleteAll(Book::class, listOf(1L, 2L, 3L, 4L))\nprintln(\n    """Affected row count:\n        |${result.totalAffectedRowCount}\n        |Affected row count of table \'BOOK\':\n        |${result.affectedRowCount(Book::class)} \n        |Affected row count of middle table \'BOOK_AUTHOR_MAPPING\':\n        |${result.affectedRowCount(Book::authors)}\n    """.trimMargin()  \n)\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The finally generated SQL is:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"delete from BOOK_AUTHOR_MAPPING\nwhere BOOK_ID in(?, ?, ?, ?) \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"delete from BOOK\nwhere ID in(?, ?, ?, ?)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dissociate-mode",children:"Dissociate Mode"}),"\n",(0,s.jsx)(n.p,{children:"From the above discussion we can see that the delete command may cause data in many-to-many association middle tables to be deleted, which is a relatively simple case."}),"\n",(0,s.jsx)(n.p,{children:"For one-to-one or one-to-many associations directly based on foreign keys, the situation to be handled is a little more complex."}),"\n",(0,s.jsxs)(l.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'DeleteResult result = sqlClient\n    .getEntities()\n    .delete(BookStore.class, 1L);\n\nSystem.out.println(\n\n    "Affected row count: " +\n            result.getTotalAffectedRowCount() +\n\n            "\\nAffected row count of table \'BOOK_STORE\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookStore.class)) +\n\n            "\\nAffected row count of table \'BOOK\': " + \n            result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n\n            "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L)\nprintln(  \n    \"\"\"Affected row count:\n        |${result.totalAffectedRowCount}\n        |Affected row count of table 'BOOK_STORE':\n        |${result.affectedRowCount(BookStore::class)}\n        |Affected row count of table 'BOOK':\n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table 'BOOK_AUTHOR_MAPPING':\n        |${result.affectedRowCount(Book::authors)} \n    \"\"\".trimMargin()\n)\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["This code deletes a ",(0,s.jsx)(n.code,{children:"BookStore"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:["Because the ",(0,s.jsx)(n.code,{children:"BookStore"})," object has a one-to-many association ",(0,s.jsx)(n.code,{children:"BookStore.books"}),", if the object being deleted already has some associated objects in the database, Jimmer will discard those objects."]}),"\n",(0,s.jsxs)(n.p,{children:["The one-to-many association ",(0,s.jsx)(n.code,{children:"BookStore.books"})," is not a mapping based on a middle table, but a mapping based on a foreign key. How will Jimmer discard those ",(0,s.jsx)(n.code,{children:"Book"})," objects?"]}),"\n",(0,s.jsxs)(n.p,{children:["Unlike JPA, Jimmer does not allow direct use of ",(0,s.jsx)(n.code,{children:"@OneToMany"})," for association mapping. ",(0,s.jsx)(n.code,{children:"@OneToMany"})," must use the ",(0,s.jsx)(n.code,{children:"mappedBy"})," property. See ",(0,s.jsx)(n.a,{href:"../mapping/base/association/one-to-many",children:"@OneToMany"})," to learn more."]}),"\n",(0,s.jsxs)(n.p,{children:["This means that through the one-to-many association ",(0,s.jsx)(n.code,{children:"BookStore.books"})," we can certainly find the corresponding many-to-one association ",(0,s.jsx)(n.code,{children:"Book.store"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, Jimmer will refer to the ",(0,s.jsx)(n.a,{href:"../mapping/advanced/on-dissociate",children:"@OnDissociate"})," annotation on the many-to-one association property ",(0,s.jsx)(n.code,{children:"Book.store"}),"."]}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"dissociation-examples",children:"Dissociation Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the foreign key corresponding to ",(0,s.jsx)(n.code,{children:"Book.store"})," is configured by the ",(0,s.jsx)(n.a,{href:"../mapping/advanced/on-dissociate",children:"@OnDissociate"})," annotation as ",(0,s.jsx)(n.code,{children:"SET_NULL"}),", the following SQL is executed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"update BOOK set STORE_ID = null where STORE_ID in(?)\n"})}),"\n",(0,s.jsx)(n.p,{children:"where the parameter is the id of the deleted object. Thus, the foreign keys of these discarded objects are set to null."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Otherwise, first execute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ID from BOOK where STORE_ID in(?) \n"})}),"\n",(0,s.jsx)(n.p,{children:"where the parameter is the id of the deleted object. Thus, the ids of these discarded objects are obtained."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the query does not return any data, skip the subsequent steps."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the foreign key corresponding to ",(0,s.jsx)(n.code,{children:"Book.store"})," is configured by ",(0,s.jsx)(n.a,{href:"../mapping/advanced/on-dissociate",children:"@OnDissociate"})," as ",(0,s.jsx)(n.code,{children:"DELETE"}),", use the new delete command to delete these discarded objects. This is actually the automatic recursive execution capability of the delete command."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Otherwise, throw an exception."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The above discussed situations all require the developer to use the ",(0,s.jsx)(n.a,{href:"../mapping/advanced/on-dissociate",children:"@OnDissociate"})," annotation on the ",(0,s.jsx)(n.code,{children:"Book.store"})," property."]}),"\n",(0,s.jsxs)(n.p,{children:["However, you can also choose not to use the ",(0,s.jsx)(n.a,{href:"../mapping/advanced/on-dissociate",children:"@OnDissociate"})," annotation, but dynamically specify the dissociateAction configuration for the delete command."]}),"\n",(0,s.jsxs)(l.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L)\n    .configure(it ->\n            it\n                // highlight-next-line \n                .setDissociateAction(\n                    BookProps.STORE,\n                    DissociateAction.SET_NULL\n                )\n    )\n    .execute();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        // highlight-next-line\n        setDissociateAction(\n            Book::store,\n            DissociateAction.SET_NULL  \n        )\n    }\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Here, calling the command's ",(0,s.jsx)(n.code,{children:"setDissociateAction"})," method dynamically has the same effect as using the ",(0,s.jsx)(n.a,{href:"../mapping/advanced/on-dissociate",children:"@OnDissociate"})," annotation statically on the ",(0,s.jsx)(n.code,{children:"Book.store"})," property and specifying cascade delete."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the last parameter of the ",(0,s.jsx)(n.code,{children:"setDissociateAction"})," method is ",(0,s.jsx)(n.code,{children:"DissociateAction.SET_NULL"}),", the associated property being set must be nullable, otherwise it will cause an exception."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If dissociation rules are configured dynamically for the save command and also configured statically in the entity interface through the ",(0,s.jsx)(n.a,{href:"../mapping/advanced/on-dissociate",children:"@OnDissociate"})," annotation, the dynamic configuration takes precedence."]}),"\n"]}),"\n"]})})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(18215);const i={tabItem:"tabItem_Ymn6"};var l=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var s=t(96540),i=t(18215),l=t(23104),o=t(56347),r=t(205),a=t(57485),c=t(31682),d=t(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,l=u(e),[o,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,h]=j({queryString:t,groupId:i}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),f=(()=>{const e=c??p;return x({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:r}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),i=r[t].value;i!==s&&(c(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...l,className:(0,i.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function A(e){const n=(0,m.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);