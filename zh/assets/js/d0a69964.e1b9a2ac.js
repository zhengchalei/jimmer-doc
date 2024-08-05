"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6646],{39875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(74848),l=t(28453),a=t(11470),i=t(19365);const o={sidebar_position:5,title:"\u9690\u5f0f\u5b50\u67e5\u8be2"},s=void 0,u={id:"query/implicit-subquery",title:"\u9690\u5f0f\u5b50\u67e5\u8be2",description:"\u96c6\u5408 (\u4e00\u5bf9\u591a\u6216\u591a\u5bf9\u591a) \u5173\u8054\u5f80\u5f80\u5bfc\u81f4\u9700\u8981\u5728\u67e5\u8be2\u4e2d\u9ad8\u9891\u4f7f\u7528\u5b50\u67e5\u8be2\uff0c\u9690\u5f0f\u5b50\u67e5\u8be2\u5bf9\u8fd9\u7c7b\u5b50\u67e5\u8be2\u7ed9\u4e88\u4e86\u6781\u5927\u7684\u7b80\u5316\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/implicit-subquery.mdx",sourceDirName:"query",slug:"/query/implicit-subquery",permalink:"/jimmer-doc/zh/docs/query/implicit-subquery",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/implicit-subquery.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u9690\u5f0f\u5b50\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"Kotlin\u8868\u8fde\u63a5\u7279\u6709\u529f\u80fd",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/kotlin-join"},next:{title:"\u52a8\u6001\u6392\u5e8f",permalink:"/jimmer-doc/zh/docs/query/dynamic-order"}},c={},d=[{value:"Jimmer\u4e3a\u96c6\u5408\u5173\u8054\u751f\u6210DSL\u7684\u4ee3\u7801",id:"jimmer\u4e3a\u96c6\u5408\u5173\u8054\u751f\u6210dsl\u7684\u4ee3\u7801",level:2},{value:"\u793a\u8303",id:"\u793a\u8303",level:2},{value:"\u81ea\u52a8\u5408\u5e76",id:"\u81ea\u52a8\u5408\u5e76",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u96c6\u5408 ",(0,r.jsx)(n.em,{children:"(\u4e00\u5bf9\u591a\u6216\u591a\u5bf9\u591a)"})," \u5173\u8054\u5f80\u5f80\u5bfc\u81f4\u9700\u8981\u5728\u67e5\u8be2\u4e2d\u9ad8\u9891\u4f7f\u7528\u5b50\u67e5\u8be2\uff0c\u9690\u5f0f\u5b50\u67e5\u8be2\u5bf9\u8fd9\u7c7b\u5b50\u67e5\u8be2\u7ed9\u4e88\u4e86\u6781\u5927\u7684\u7b80\u5316\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u81f3\u4e8e\u5b8c\u6574\u7684\u666e\u901a\u5b50\u67e5\u8be2\uff0c\u8bf7\u53c2\u89c1",(0,r.jsx)(n.a,{href:"./sub-query",children:"\u666e\u901a\u5b50\u67e5\u8be2"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"jimmer\u4e3a\u96c6\u5408\u5173\u8054\u751f\u6210dsl\u7684\u4ee3\u7801",children:"Jimmer\u4e3a\u96c6\u5408\u5173\u8054\u751f\u6210DSL\u7684\u4ee3\u7801"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u591a\u5bf9\u591a\u5173\u8054",(0,r.jsx)(n.code,{children:"Book.authors"}),"\u4e3a\u4f8b\uff0c\u7ecf\u8fc7\u7f16\u8bd1\uff0cJimmer\u4f1a\u751f\u6210\u5982\u4e0b\u4ee3\u7801"]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookTable.java"',children:"@GeneratedBy(type = Book.class)\npublic class BookTable extends AbstractTypedTable<Book> implements BookProps {\n\n    @Override\n    // highlight-next-line\n    public Predicate authors(Function<AuthorTableEx, Predicate> block) {\n        ...\u7701\u7565\u5b9e\u73b0\u903b\u8f91...\n    }\n}\n"})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\nfun KProps<Book>.authors(\n    block: KNonNullTableEx<Author>.() -> KNonNullExpression<Boolean>?\n): KNonNullExpression<Boolean>? = ...\u7701\u7565\u5b9e\u73b0\u903b\u8f91...\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u6b64",(0,r.jsx)(n.code,{children:"authors"}),"\u65b9\u6cd5\u6784\u5efa\u9690\u542b\u5b50\u67e5\u8be2\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65b9\u6cd5\u7684\u53c2\u6570\u662flambda\u8868\u8fbe\u5f0f\uff0c\u5176\u53c2\u6570\u4e3a\u5173\u8054\u5bf9\u8c61\u7684\u8868\u5bf9\u8c61\uff0c\u7528\u6237\u8fd4\u56de\u4e00\u4e2a\u8fc7\u6ee4\u6b64\u5173\u8054\u5bf9\u8c61\u7684SQL\u6761\u4ef6\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u8303",children:"\u793a\u8303"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\npublic List<Book> findBooks(@Nullable String authorName) {\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n                authorName != null && !authorName.isEmpty(),\n                // highlight-next-line\n                table.authors(author -> {\n                    return Predicate.or(\n                            author.firstName().ilike(authorName),\n                            author.lastName().ilike(authorName)\n                    );\n                })\n        )\n        .select(table)\n        .execute();\n}\n"})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(authorName: String?): List<BookStore> =\n    sqlClient.createQuery(Book::class) {\n        authorName?.takeIf { it.isNotEmpty() }?.let {\n            // highlight-next-line\n            where += table.authors {\n                or(\n                    firstName ilike it,\n                    lastName ilike it\n                )\n            }\n        }\n    }.execute()\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8c03\u7528\u4e0a\u9762\u7684\u65b9\u6cd5\uff0c\u5e76\u6307\u5b9a\u53c2\u6570\u4e3a\u975enull\uff0c\u6bd4\u5982",(0,r.jsx)(n.code,{children:'findBooks("alex")'}),"\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.TENANT,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    exists( \u278a\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n                tb_3_.BOOK_ID = tb_1_.ID \u278b\n            and\n                (\n                    lower(tb_2_.FIRST_NAME) like ? /* %alex% */ \u278c\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %alex% */ \u278d\n                )\n    )\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u278a \u9690\u542b\u5b50\u67e5\u8be2\u603b\u662f\u91c7\u7528",(0,r.jsx)(n.code,{children:"exists"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u278b Jimmmer\u81ea\u52a8\u751f\u6210\u7684SQL\u6761\u4ef6\uff0c\u7528\u4e8e\u5173\u8054\u7236\u5b50\u67e5\u8be2"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u278c \u278d \u7528\u6237\u6307\u5b9a\u7684\u6761\u4ef6\uff0c\u7528\u4e8e\u8fc7\u6ee4\u5173\u8054\u5bf9\u8c61"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u7236\u5b50\u67e5\u8be2\u7684\u5173\u8054\u6761\u4ef6\u88ab\u81ea\u52a8\u751f\u6210\uff0c\u7528\u6237\u53ea\u9700\u8981\u6307\u5b9a\u5173\u8054\u5bf9\u8c61\u8fc7\u6ee4\u6761\u4ef6\uff0c\u8fd9\u662f\u9690\u542b\u5b50\u67e5\u8be2\u548c",(0,r.jsx)(n.a,{href:"./sub-query",children:"\u666e\u901a\u5b50\u67e5\u8be2"}),"\u7684\u672c\u8d28\u533a\u522b\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u81ea\u52a8\u5408\u5e76",children:"\u81ea\u52a8\u5408\u5e76"}),"\n",(0,r.jsxs)(n.p,{children:["\u548c",(0,r.jsx)(n.a,{href:"dynamic-join/merge",children:"\u52a8\u6001JOIN\u7684\u81ea\u52a8\u5408\u5e76"}),"\u7c7b\u4f3c\uff0c\u9488\u5bf9\u76f8\u540c\u5173\u8054\u591a\u4e2a\u9690\u542b\u5b50\u67e5\u8be2\u4e5f\u53ef\u4ee5\u88ab\u81ea\u52a8\u5408\u5e76\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"\u9690\u542b\u5b50\u67e5\u8be2\u7684\u5408\u5e76\u89c4\u5219\u5e76\u6ca1\u6709\u52a8\u6001JOIN\u90a3\u4e48\u901a\u7528\uff0c\u4ec5\u9650\u4e8e\u540c\u4e00\u4e2aand, or\u6216not\u5185\u90e8"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\npublic List<Book> findBooks(\n    @Nullable String authorName, \n    @Nullable Gender authorGender\n) {\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            authorName != null && !authorName.isEmpty(),\n            // highlight-next-line\n            table.authors(author -> {\n                return Predicate.or(\n                        author.firstName().ilike(authorName),\n                        author.lastName().ilike(authorName)\n                );\n            })\n        )\n        .whereIf(\n            authorGender != null,\n            // highlight-next-line\n            table.authors(author -> author.gender().eq(authorGender))\n        )\n        .select(table)\n        .execute();\n}\n"})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(authorName: String?): List<BookStore> =\n    sqlClient.createQuery(Book::class) {\n        authorName?.takeIf { it.isNotEmpty() }?.let {\n            // highlight-next-line\n            where += table.authors {\n                or(\n                    firstName ilike it,\n                    lastName ilike it\n                )\n            }\n        }\n        authorGender?.let {\n            // highlight-next-line\n            where += table.authors {\n                gender like it\n            }\n        }\n    }.execute()\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u4f8b\u5b50\u91c7\u7528\u4e86\u4e24\u4e2a\u9690\u542b\u5b50\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(n.p,{children:'\u7136\u800c\uff0c\u5f53\u6211\u4eec\u628a\u4e24\u4e2a\u53c2\u6570\u90fd\u6307\u5b9a\u6210\u975enull\u65f6\uff0c\u6bd4\u5982*findBooks("alex", Gender.MALE)`\uff0c*\u6700\u7ec8SQL\u4e2d\u53ea\u4f1a\u51fa\u73b0\u4e00\u4e2a\u5b50\u67e5\u8be2\uff0c\u5982\u4e0b'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.TENANT,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    // Merge two implicit subqueries to one real sub query\n    // highlight-next-line\n    exists(\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n                tb_3_.BOOK_ID = tb_1_.ID\n            and\n                (\n                    lower(tb_2_.FIRST_NAME) like ? /* %alex% */\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %alex% */\n                )\n            and\n                tb_2_.GENDER = ? /* M */\n    )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u56e0\u4e3a\u540c\u4e00\u4e2aand, or\u6216not\u5185\u90e8\uff0c\u9488\u5bf9\u76f8\u540c\u5173\u8054\u7684\u591a\u4e2a\u9690\u5f0f\u5b50\u67e5\u8be2\u4f1a\u88ab\u81ea\u52a8\u5408\u5e76\u3002"})]})}function b(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const l={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(96540),l=t(18215),a=t(23104),i=t(56347),o=t(205),s=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:l}),[p,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,c.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),_=(()=>{const e=u??p;return b({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{_&&s(_)}),[_]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),l=o[t].value;l!==r&&(u(n),i(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",_.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",_.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function N(e){const n=(0,x.A)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const l={},a=r.createContext(l);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);