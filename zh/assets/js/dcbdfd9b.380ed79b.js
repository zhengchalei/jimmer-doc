"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1797],{4642:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=a(74848),t=a(28453),i=a(11470),r=a(19365);const o={sidebar_position:1,title:"\u590d\u5408\u5b57\u6bb5"},d=void 0,s={id:"mapping/advanced/embedded",title:"\u590d\u5408\u5b57\u6bb5",description:"\u590d\u5408\u5b57\u6bb5\u662f\u5c06\u6570\u636e\u5e93\u7684\u591a\u4e2a\u5217\u5408\u5e76\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u5c06\u5176\u6620\u5c04\u4e3a\u4e00\u4e2a\u975e\u5b9e\u4f53\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u7136\u540e\u5229\u7528\u6b64\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e3a\u5b9e\u4f53\u58f0\u660e\u4e00\u4e2a\u5c5e\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/embedded.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/embedded",permalink:"/jimmer-doc/zh/docs/mapping/advanced/embedded",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/embedded.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u590d\u5408\u5b57\u6bb5"},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u9636\u6620\u5c04",permalink:"/jimmer-doc/zh/docs/mapping/advanced/"},next:{title:"MappedSuperclass",permalink:"/jimmer-doc/zh/docs/mapping/advanced/mapped-super-class"}},c={},u=[{value:"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5",id:"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5",level:2},{value:"\u7b80\u5355\u4f7f\u7528",id:"\u7b80\u5355\u4f7f\u7528",level:3},{value:"\u8986\u76d6\u5217\u540d",id:"\u8986\u76d6\u5217\u540d",level:3},{value:"\u4f5c\u4e3a\u4e3b\u5916\u952e",id:"\u4f5c\u4e3a\u4e3b\u5916\u952e",level:2},{value:"\u4f5c\u4e3a\u4e3b\u952e",id:"\u4f5c\u4e3a\u4e3b\u952e",level:3},{value:"\u88ab@JoinColumn\u5f15\u7528",id:"\u88abjoincolumn\u5f15\u7528",level:3},{value:"\u88ab@JoinTable\u5f15\u7528",id:"\u88abjointable\u5f15\u7528",level:3}];function h(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u590d\u5408\u5b57\u6bb5\u662f\u5c06\u6570\u636e\u5e93\u7684\u591a\u4e2a\u5217\u5408\u5e76\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u5c06\u5176\u6620\u5c04\u4e3a\u4e00\u4e2a\u975e\u5b9e\u4f53\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u7136\u540e\u5229\u7528\u6b64\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e3a\u5b9e\u4f53\u58f0\u660e\u4e00\u4e2a\u5c5e\u6027\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5",children:"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5"}),"\n",(0,l.jsx)(e.h3,{id:"\u7b80\u5355\u4f7f\u7528",children:"\u7b80\u5355\u4f7f\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u5148\uff0c\u5b9a\u4e49\u4e00\u4e2a\u590d\u5408\u7c7b\u578b"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="FullName.java"',children:"// highlight-next-line\n@Embeddable\npublic interface FullName {\n\n    String firstName();\n\n    String lastName();\n}\n"})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="FullName.kt"',children:"// highlight-next-line\n@Embeddable\ninterface FullName {\n\n    val firstName: String\n    \n    val lastName: String\n}\n"})})})]}),"\n",(0,l.jsx)(e.admonition,{type:"caution",children:(0,l.jsx)(e.p,{children:"@Embeddable\u6240\u5b9a\u4e49\u7684\u7c7b\u578b\u4e0d\u662f\u5b9e\u4f53\u7c7b\u578b\uff0c\u5176\u4e2d\u4e0d\u5f97\u58f0\u660eid\u5c5e\u6027\u548c\u5173\u8054\u5c5e\u6027\u3002\u5426\u5219\uff0c\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002"})}),"\n",(0,l.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u53e6\u5916\u4e00\u4e2a\u5b9e\u4f53\u4e2d\u4f7f\u7528\u5b83"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="Author.java"',children:"@Entity\npublic interface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    FullName name();\n}\n"})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:"@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    val name: FullName\n}\n"})})})]}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsxs)(e.p,{children:["\u548cJPA/Hibernate\u4e0d\u540c\uff0c\u5728\u5b9e\u4f53\u4e2d\u4f7f\u7528\u590d\u5408\u7c7b\u578b\u65f6\u65e0\u9700\u4f7f\u7528",(0,l.jsx)(e.code,{children:"@Embedded"}),"\u3002\u4e8b\u5b9e\u4e0a\uff0cJimmer\u4e5f\u4e0d\u63d0\u4f9b",(0,l.jsx)(e.code,{children:"@Embedded"}),"\u6ce8\u89e3\u3002"]})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Author"}),"\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\u5982\u4e0b"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"create table author(\n    id bigint unsigned not null auto_increment primary key,\n    /* highlight-next-line */\n    first_name varchar(20) not null,\n    /* highlight-next-line */\n    last_name varchar(20) not null\n) engine=innodb;\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u8986\u76d6\u5217\u540d",children:"\u8986\u76d6\u5217\u540d"}),"\n",(0,l.jsxs)(e.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(e.code,{children:"org.babyfish.jimmer.sql.PropOverride"}),"\u8986\u76d6\u590d\u5408\u7c7b\u578b\u5b57\u6bb5\u7684\u5217\u540d"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5b9a\u4e49\u590d\u5408\u7c7b\u578b",(0,l.jsx)(e.code,{children:"Point"})]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="Point.java"',children:"@Embeddable\npublic interface Point {\n\n    int x();\n\n    int y();\n}\n"})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="Point.kt"',children:"@Embeddable\ninterface Point {\n\n    val x: Int\n    \n    val y: Int\n}\n"})})})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5b9a\u4e49\u590d\u5408\u7c7b\u578b",(0,l.jsx)(e.code,{children:"Rect"}),"\uff0c\u8986\u76d6",(0,l.jsx)(e.code,{children:"Point"}),"\u7c7b\u578b\u7684\u5217\u540d"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="Rect.java"',children:'@Embeddable\npublic interface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "`TOP`")\n    Point leftTop();\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    Point rightBottom();\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="Rect.kt"',children:'@Embeddable\ninterface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "`TOP`")\n    val leftTop: Point\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    val rightBottom: Point\n}\n'})})})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5b9a\u4e49\u5b9e\u4f53\u7c7b\u578b",(0,l.jsx)(e.code,{children:"Transition"}),"\uff0c\u8986\u76d6",(0,l.jsx)(e.code,{children:"Rect"}),"\u7c7b\u578b\u7684\u5217\u540d"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="Transition.java"',children:'@Entity\npublic interface Transition {\n\n    @Id\n    long id();\n\n    int millis();\n\n    Rect source();\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    Rect target();\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="Transition.kt"',children:'@Entity\ninterface Transition {\n\n    @Id\n    val id: Long\n\n    val millis: Int\n\n    val source: Rect\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    val target: Rect\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Transition"}),"\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\u5982\u4e0b"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"create table transition(\n    id bigint unsigned not null auto_increment primary key,\n    millis int not null,\n    `LEFT` int not null,\n    `TOP` int not null,\n    `RIGHT` int not null,\n    bottom int not null,\n    target_left int not null,\n    target_top int not null,\n    target_right int not null,\n    target_bottom int not null\n) engine=innodb;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4f5c\u4e3a\u4e3b\u5916\u952e",children:"\u4f5c\u4e3a\u4e3b\u5916\u952e"}),"\n",(0,l.jsxs)(e.admonition,{type:"warning",children:[(0,l.jsx)(e.p,{children:"\u7528\u590d\u5408\u7c7b\u578b\u4f5c\u4e3a\u4e3b\u5916\u952e\uff0c\u5373\uff0c\u4e3b\u952e\u548c\u5916\u952e\u90fd\u7531\u591a\u4e2a\u5217\u7ec4\u5408\u800c\u6210\uff0c\u9664\u4e86\u8ba9\u7cfb\u7edf\u53d8\u5f97\u590d\u6742\u5916\uff0c\u6ca1\u6709\u4ec0\u4e48\u597d\u5904\u3002"}),(0,l.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u9664\u975e\u5fc5\u987b\u517c\u5bb9\u9057\u7559\u7cfb\u7edf\u4e2d\u5df2\u6709\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u7cfb\u7edf\u5e94\u8be5\u907f\u514d\u5982\u6b64\u4f7f\u7528\uff0c\u4fdd\u8bc1\u4e3b\u5916\u952e\u7684\u7b80\u5355\u6027\u3002"})]}),"\n",(0,l.jsx)(e.p,{children:"\u8ba9\u6211\u4eec\u5148\u5b9a\u4e49\u4e00\u4e2a\u590d\u5408\u7c7b\u578b"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="UniqueId.java"',children:'// highlight-next-line\n@Embeddable\npublic interface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    int dayNo();\n\n    @columnName("UNIQUE_ID_SEQ_NO")\n    int sequenceNo();\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="UniqueId.kt"',children:'// highlight-next-line\n@Embeddable\ninterface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    val dayNo: Int\n    \n    @columnName("UNIQUE_ID_SEQ_NO")\n    val sequenceNo: Int\n}\n'})})})]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f5c\u4e3a\u4e3b\u952e",children:"\u4f5c\u4e3a\u4e3b\u952e"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n",(0,l.jsxs)(e.p,{children:["\u7531\u4e8e",(0,l.jsx)(e.code,{children:"Book.id"}),"\u672a\u4f7f\u7528",(0,l.jsx)(e.code,{children:"@PropOverride"}),"\u5bf9",(0,l.jsx)(e.code,{children:"UniqueId"}),"\u7c7b\u578b\u4e2d\u5217\u540d\u914d\u7f6e\u8fdb\u884c\u8986\u76d6\uff0c\u6240\u4ee5\u91c7\u7528",(0,l.jsx)(e.code,{children:"UniqueId"}),"\u4e2d\u914d\u7f6e\u7684\u5217\u540d\uff0c\u5bf9\u5e94\u7684DDL\u4e3a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"create table book(\n    unique_id_day_no int not null,\n    unique_id_seq_no int not null,\n    ...\u7701\u7565\u5176\u4ed6\u5b57\u6bb5...\n) engine=innodb;\n\nalter table book\n    add constraint pk_book\n        primary key(unique_id_day_no, unique_id_seq_no);\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u88abjoincolumn\u5f15\u7528",children:"\u88ab@JoinColumn\u5f15\u7528"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="Chapter.java"',children:'@Entity\npublic interface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO", \n        referencedColumnName = "UNIQUE_ID_DAY_NO"\n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO", \n        referencedColumnName = "UNIQUE_ID_SEQ_NO"\n    )\n    Book book();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="Chapter.kt"',children:'@Entity\ninterface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO", \n        referencedColumnName = "UNIQUE_ID_DAY_NO"\n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO", \n        referencedColumnName = "UNIQUE_ID_SEQ_NO"\n    )\n    val book: Book\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n",(0,l.jsxs)(e.admonition,{type:"caution",children:[(0,l.jsxs)(e.p,{children:["\u548c\u6211\u4eec\u4e4b\u524d\u8bb2\u89e3\u8fc7\u7684\u6240\u6709\u4f8b\u5b50\u4e0d\u540c\uff0c\u8fd9\u91cc@JoinColumn\u6ce8\u89e3\u7684",(0,l.jsx)(e.code,{children:"referencedColumnName"}),"\u88ab\u6307\u5b9a\u4e86\u3002"]}),(0,l.jsxs)(e.p,{children:["\u5f53\u5916\u952e\u7531\u591a\u5217\u6784\u6210\u65f6\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u591a\u4e2a",(0,l.jsx)(e.code,{children:"@JoinColumn"}),"\u6ce8\u89e3\uff0c\u5176\u4e2d\uff0c\u6bcf\u4e2a",(0,l.jsx)(e.code,{children:"@JoinColumn"}),"\u5fc5\u987b\u6307\u5b9a",(0,l.jsx)(e.code,{children:"referencedColumnName"}),"\u3002"]})]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u5916\u952e\u662f\u771f\u7684\uff0c\u5bf9\u5e94\u7684\u7ea6\u675f\u4e3a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"alter table chapter\n    add constraint fk_chapter__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u88abjointable\u5f15\u7528",children:"\u88ab@JoinTable\u5f15\u7528"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = {\n            @JoinColumn(\n                name = "BOOK_ID_DAY_NO", \n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            ),\n            @JoinColumn(\n                name = "BOOK_ID_SEQ_NO", \n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        }\n    )\n    // highlight-next-line\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = [\n            JoinColumn(\n                name = "BOOK_ID_DAY_NO", \n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            ),\n            JoinColumn(\n                name = "BOOK_ID_SEQ_NO", \n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        ]\n    )\n    // highlight-next-line\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u5916\u952e\u662f\u771f\u7684\uff0c\u4e2d\u95f4\u8868\u7684DDL\u5982\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"create table book_author_mapping(\n    book_id_day_no int not null,\n    book_id_seq_id int not null,\n    author_id bigint not null\n) engine=innodb;\n\nalter table book_author_mapping\n    add constraint pk_book_author_mapping\n        primary key(\n            book_id_day_no, \n            book_id_seq_id, \n            author_id\n        );\n\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__author\n        foreign key(author_id)\n            references author(id);\n"})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},19365:(n,e,a)=>{a.d(e,{A:()=>r});a(96540);var l=a(18215);const t={tabItem:"tabItem_Ymn6"};var i=a(74848);function r(n){let{children:e,hidden:a,className:r}=n;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,r),hidden:a,children:e})}},11470:(n,e,a)=>{a.d(e,{A:()=>N});var l=a(96540),t=a(18215),i=a(23104),r=a(56347),o=a(205),d=a(57485),s=a(31682),c=a(70679);function u(n){return l.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,l.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(n){const{values:e,children:a}=n;return(0,l.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:a,attributes:l,default:t}}=n;return{value:e,label:a,attributes:l,default:t}}))}(a);return function(n){const e=(0,s.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,a])}function m(n){let{value:e,tabValues:a}=n;return a.some((n=>n.value===e))}function p(n){let{queryString:e=!1,groupId:a}=n;const t=(0,r.W6)(),i=function(n){let{queryString:e=!1,groupId:a}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d.aZ)(i),(0,l.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(t.location.search);e.set(i,n),t.replace({...t.location,search:e.toString()})}),[i,t])]}function g(n){const{defaultValue:e,queryString:a=!1,groupId:t}=n,i=h(n),[r,d]=(0,l.useState)((()=>function(n){let{defaultValue:e,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=a.find((n=>n.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:i}))),[s,u]=p({queryString:a,groupId:t}),[g,x]=function(n){let{groupId:e}=n;const a=function(n){return n?`docusaurus.tab.${n}`:null}(e),[t,i]=(0,c.Dv)(a);return[t,(0,l.useCallback)((n=>{a&&i.set(n)}),[a,i])]}({groupId:t}),j=(()=>{const n=s??g;return m({value:n,tabValues:i})?n:null})();(0,o.A)((()=>{j&&d(j)}),[j]);return{selectedValue:r,selectValue:(0,l.useCallback)((n=>{if(!m({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);d(n),u(n),x(n)}),[u,x,i]),tabValues:i}}var x=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function _(n){let{className:e,block:a,selectedValue:l,selectValue:r,tabValues:o}=n;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.a_)(),c=n=>{const e=n.currentTarget,a=d.indexOf(e),t=o[a].value;t!==l&&(s(e),r(t))},u=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const a=d.indexOf(n.currentTarget)+1;e=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(n.currentTarget)-1;e=d[a]??d[d.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},e),children:o.map((n=>{let{value:e,label:a,attributes:i}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,ref:n=>d.push(n),onKeyDown:u,onClick:c,...i,className:(0,t.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":l===e}),children:a??e},e)}))})}function v(n){let{lazy:e,children:a,selectedValue:t}=n;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===t));return n?(0,l.cloneElement)(n,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((n,e)=>(0,l.cloneElement)(n,{key:e,hidden:n.props.value!==t})))})}function f(n){const e=g(n);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,b.jsx)(_,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function N(n){const e=(0,x.A)();return(0,b.jsx)(f,{...n,children:u(n.children)},String(e))}},28453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var l=a(96540);const t={},i=l.createContext(t);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);