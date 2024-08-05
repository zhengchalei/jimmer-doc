"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9329],{38761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),r=n(28453),s=n(11470),a=n(19365);const o={sidebar_position:4,title:"Deep Pagination Optimization"},l=void 0,c={id:"query/paging/deep-optimization",title:"Deep Pagination Optimization",description:"Pagination queries have a problem - when the data volume is large, if the pagination range is too far back (i.e. offset is too large), performance issues can occur.",source:"@site/docs/query/paging/deep-optimization.mdx",sourceDirName:"query/paging",slug:"/query/paging/deep-optimization",permalink:"/jimmer-doc/docs/query/paging/deep-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/paging/deep-optimization.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Deep Pagination Optimization"},sidebar:"tutorialSidebar",previous:{title:"Reverse Sorting Optimization",permalink:"/jimmer-doc/docs/query/paging/reverse-sorting"},next:{title:"DSL Expressions",permalink:"/jimmer-doc/docs/query/expression"}},u={},d=[{value:"Set Threshold",id:"set-threshold",level:2},{value:"Effectiveness",id:"effectiveness",level:2},{value:"Set to 0",id:"set-to-0",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Pagination queries have a problem - when the data volume is large, if the pagination range is too far back (i.e. offset is too large), performance issues can occur."}),"\n",(0,i.jsxs)(t.p,{children:["Therefore, Jimmer supports deep pagination optimization. Set a threshold ",(0,i.jsx)(t.code,{children:"offset-optimizing-threshold"})," for the pagination offset. Once the offset reaches this threshold, the implementation of the pagination query is changed."]}),"\n",(0,i.jsx)(t.h2,{id:"set-threshold",children:"Set Threshold"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Using Spring Boot Starter:"}),"\n",(0,i.jsxs)(t.p,{children:["Modify ",(0,i.jsx)(t.code,{children:"application.yml"})," ",(0,i.jsx)(t.em,{children:"(or application.properties)"}),", add config item ",(0,i.jsx)(t.code,{children:"offset-optimizing-threshold"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"jimmer:\n    offset-optimizing-threshold: 1000\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Using low-level API:"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setOffsetOptimizingThreshold(1000)  \n    ...Other config omitted...\n    .build();\n"})})}),(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setOffsetOptimizingThreshold(1000)\n    ...Other config omitted...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["If this threshold is not set, the default is ",(0,i.jsx)(t.code,{children:"Integer.MAX_VALUE"}),", meaning this feature is disabled."]})]}),"\n",(0,i.jsx)(t.h2,{id:"effectiveness",children:"Effectiveness"}),"\n",(0,i.jsx)(t.p,{children:"To discuss this feature, focusing on the data query instead of the count query is sufficient. Let's look at this simple pagination query:"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"public List<Book> findBooks(int limit, int offset) {\n    BookTable table = Tables.BOOK_TABLE;\n    return sqlClient\n            .createQuery(table)\n            .select(table)\n            .limit(limit, offset) \n            .execute();  \n}\n"})})}),(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"fun findBooks(limit: Int, offset: Int): List<Book> =\n    sqlClient.createQuery(Book::class) {\n        select(table)\n    }\n    .limit(limit, offset)\n    .execute()\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["Pagination query support differs for different dialects. Oracle is more complex. See ",(0,i.jsx)(t.a,{href:"./usage#dialects",children:"Pagination/Usage#Dialects"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To simplify discussion, assume using ",(0,i.jsx)(t.code,{children:"org.babyfish.jimmer.sql.H2Dialect"}),". Pagination queries under it generate simple SQL:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["When offset is less than 1000, e.g. calling ",(0,i.jsx)(t.code,{children:"findBooks(10, 90)"}),", the generated SQL:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \nlimit ? /* 10 */ offset ? /* 90 */\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["When offset is greater than or equal to 1000, e.g. calling ",(0,i.jsx)(t.code,{children:"findBooks(10, 1000)"}),", the generated SQL:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select\n    optimize_.ID,\n    optimize_.NAME,\n    optimize_.EDITION,\n    optimize_.PRICE,\n    optimize_.STORE_ID\nfrom (\n    select\n        tb_1_.ID optimize_core_id_  \n    from BOOK tb_1_\n    limit ? /* 10 */ offset ? /* 1000 */ \n) optimize_core_ inner join BOOK optimize_\n    on optimize_.ID = optimize_core_.optimize_core_id_\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As you can see, when offset is too large, Jimmer queries ids of the page first, then converts the ids to objects. This is useful when data volume is large."}),"\n",(0,i.jsx)(t.h2,{id:"set-to-0",children:"Set to 0"}),"\n",(0,i.jsx)(t.p,{children:"For some databases (e.g. MySQL), if data volume is large, performance is poor even when querying the first page (offset is 0)."}),"\n",(0,i.jsxs)(t.p,{children:["In this case, simply set ",(0,i.jsx)(t.code,{children:"offset-optimizing-threshold"})," to 0 directly."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>_});var i=n(96540),r=n(18215),s=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function j(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(c(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function _(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);