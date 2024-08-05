"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9527],{61362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(74848),r=t(28453),s=t(11470),a=t(19365);const o={sidebar_position:2,title:"Association Path Chaining"},l=void 0,c={id:"query/dynamic-join/chain-style",title:"Association Path Chaining",description:"How Jimmer solves the dynamic join problem will be discussed in subsequent docs. This article first introduces the join style in Jimmer.",source:"@site/docs/query/dynamic-join/chain-style.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/chain-style",permalink:"/jimmer-doc/docs/query/dynamic-join/chain-style",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/dynamic-join/chain-style.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Association Path Chaining"},sidebar:"tutorialSidebar",previous:{title:"Problems with Other Solutions",permalink:"/jimmer-doc/docs/query/dynamic-join/problem"},next:{title:"Merge Conflict Joins",permalink:"/jimmer-doc/docs/query/dynamic-join/merge"}},u={},d=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Outer Joins",id:"outer-joins",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"How Jimmer solves the dynamic join problem will be discussed in subsequent docs. This article first introduces the join style in Jimmer."}),"\n",(0,i.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,i.jsx)(n.p,{children:"Firstly, Jimmer does not support cartesian products which is exists in theoretical and should be carefully avoided in actual projects."}),"\n",(0,i.jsxs)(n.p,{children:["Thus, Jimmer's SQL DSL does not need to support multiple ",(0,i.jsx)(n.code,{children:"from"})," clauses. All cross-table operations are unified as ",(0,i.jsx)(n.code,{children:"join"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In Jimmer, all table joins are implicit, formed by association paths of arbitrary length, and are considered as multiple table joins. For example:"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public List<Book> findBooksByStoreCityName(@Nullable String storeCityName) {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            storeCityName != null && !storeCityName.isEmpty(),\n            // highlight-next-line\n            table.store().city().name().eq(name) \n        )\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        .execute();\n}\n"})})}),(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun findBooksByStoreCityName(name: storeCityName?): List<Book> =  \n    sqlClient\n        .createQuery(Book::class) {\n            storeCityName?.takeIf { it.isNotEmpty() }?.let {\n                // highlight-next-line\n                where(table.store.city.name eq it)\n            }\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .execute()\n"})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["In the above code, ",(0,i.jsx)(n.code,{children:"table.store().city()"})," in Java or ",(0,i.jsx)(n.code,{children:"table.store.city"})," in Kotlin is the association path."]}),(0,i.jsx)(n.p,{children:"The association path length is unlimited. Each association reference corresponds to a SQL join operation."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"from BOOK tb_1_\n// highlight-next-line  \ninner join BOOK_STORE tb_2_ // `.store`\n    on tb_1_.STORE_ID = tb_2_.ID \n// highlight-next-line\ninner join CITY tb_3_ // `.city`\n    on tb_2_.CITY_ID = tb_3_.ID\n\n"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"findBooksByStoreCityName(null)"}),", the generated SQL is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:'findBooksByStoreCityName("ChengDu")'}),", the generated SQL is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID \nfrom BOOK tb_1_\n// highlight-next-line\ninner join BOOK_STORE tb_2_ // `.store`\n    on tb_1_.STORE_ID = tb_2_.ID\n// highlight-next-line\ninner join CITY tb_3_ // `.city`\n    on tb_2_.CITY_ID = tb_3_.ID\nwhere\n    // `.name eq "ChengDu"` \n    // highlight-next-line\n    tb_3_.NAME = ? /* ChengDu */ \norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"outer-joins",children:"Outer Joins"}),"\n",(0,i.jsxs)(n.p,{children:["The association paths ",(0,i.jsx)(n.code,{children:".store"})," and ",(0,i.jsx)(n.code,{children:".city"})," in the above example represent inner joins."]}),"\n",(0,i.jsx)(n.p,{children:"It's also easy to express outer joins, taking left outer join as an example:"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"table.store().city(JoinType.LEFT) \n"})})}),(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"table.store.`city?`  \n"})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"To fully leverage Kotlin's strengths and optimize its developer experience, Jimmer provides slightly different APIs for Java and Kotlin with the same essence."}),(0,i.jsx)(n.p,{children:"However, outer joins are the only exception where Java and Kotlin APIs behave differently:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Java DSL\nUse JoinType to represent join type, can be ",(0,i.jsx)(n.code,{children:"INNER"})," ",(0,i.jsx)(n.em,{children:"(default)"}),", ",(0,i.jsx)(n.code,{children:"LEFT"}),", ",(0,i.jsx)(n.code,{children:"RIGHT"})," or ",(0,i.jsx)(n.code,{children:"FULL"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Kotlin DSL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DSL properties same as entity properties represent inner join"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["DSL properties with a ",(0,i.jsx)(n.code,{children:"?"})," suffix compared to entity properties represent left outer join"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["That is, Kotlin DSL does not support ",(0,i.jsx)(n.code,{children:"RIGHT"})," and ",(0,i.jsx)(n.code,{children:"FULL"}),". This sacrifice is a careful trade-off to gain null safety integration in Kotlin, which is more important."]}),"\n",(0,i.jsxs)(n.p,{children:["This detail will be discussed in ",(0,i.jsx)(n.a,{href:"./kotlin-join",children:"Kotlin Join Features"}),"."]}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(96540),r=t(18215),s=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:r}),[b,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,x.jsx)(_,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);