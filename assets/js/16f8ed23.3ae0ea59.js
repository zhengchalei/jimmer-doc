"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9482],{90842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(74848),i=t(28453),r=t(11470),o=t(19365);const s={sidebar_position:3,title:"2.4 Associated Id"},l=void 0,c={id:"showcase/fetch-association/associated-id",title:"2.4 Associated Id",description:"Unlike the previous example, here we only need to fetch the associated object id, not the entire associated object.",source:"@site/docs/showcase/fetch-association/associated-id.mdx",sourceDirName:"showcase/fetch-association",slug:"/showcase/fetch-association/associated-id",permalink:"/jimmer-doc/docs/showcase/fetch-association/associated-id",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/fetch-association/associated-id.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"2.4 Associated Id"},sidebar:"tutorialSidebar",previous:{title:"2.2 More Associations",permalink:"/jimmer-doc/docs/showcase/fetch-association/more-association"},next:{title:"2.3 Deeper Association",permalink:"/jimmer-doc/docs/showcase/fetch-association/deeper-association"}},d={},u=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"If there is no IdView property",id:"if-there-is-no-idview-property",level:3},{value:"If there is IdView property",id:"if-there-is-idview-property",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Unlike the previous example, here we only need to fetch the associated object id, not the entire associated object."}),"\n",(0,a.jsx)(n.h2,{id:"query-dynamic-entities",children:"Query Dynamic Entities"}),"\n",(0,a.jsx)(n.h3,{id:"if-there-is-no-idview-property",children:"If there is no IdView property"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .allScalarFields()\n                // highlight-next-line\n                .authors()\n        )\n    )\n    .execute();\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                authors()\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51,\n        "authors":[\n            // highlight-next-line\n            { "id":2 },\n            // highlight-next-line\n            { "id":1 }\n        ]\n    },\n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        "price":55,\n        "authors":[\n            // highlight-next-line\n            { "id":2 },\n            // highlight-next-line\n            { "id":1 }\n        ]\n    },\n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        "price":50,\n        "authors":[\n            // highlight-next-line\n            { "id":2 }, \n            // highlight-next-line\n            { "id":1 }\n        ]\n    }\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This will lead to large numbers of objects that have only the id property ",(0,a.jsx)(n.em,{children:"(JPA users can understand them as entity proxies)"}),",\nalthough correct, this may not be the format preferred by developers.\nIn the next section we discuss how to solve this problem."]}),"\n",(0,a.jsx)(n.h2,{id:"if-there-is-idview-property",children:"If there is IdView property"}),"\n",(0,a.jsxs)(n.p,{children:["In order to solve the above problem, we can add the ",(0,a.jsx)(n.a,{href:"../../mapping/advanced/view/id-view",children:"@IdView"})," property for entity interface, namely the associated id property."]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n\n    ....\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView("authors")\n    val authorIds: List<Long>\n\n    ....\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, the ",(0,a.jsx)(n.code,{children:"authorIds"})," property is a view of the ",(0,a.jsx)(n.code,{children:"authors"})," property, and they share data.\nSo, it does not change the entity format, it just diversifies the expression."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This is just a case study, no in-depth discussion of the @IdView property.\nPlease refer ",(0,a.jsx)(n.a,{href:"../../mapping/advanced/view/id-view",children:"here"})," for more details"]})}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .allScalarFields()\n                // highlight-next-line\n                .authorIds()\n        )\n    )\n    .execute();\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                authorIds()\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        "price":50,\n        // highlight-next-line\n        "authorIds":[2, 1]\n    },\n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        "price":55,\n        // highlight-next-line\n        "authorIds":[2, 1]\n    },\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51,\n        // highlight-next-line\n        "authorIds":[2, 1]\n    }\n]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"query-static-dto",children:"Query Static DTO"}),"\n",(0,a.jsxs)(n.p,{children:["No need to define @IdView attributes in entities,\ncreate any file with the ",(0,a.jsx)(n.code,{children:"dto"})," extension under the ",(0,a.jsx)(n.code,{children:"src/main/dto"})," folder, and edit the code as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars\n    #highlight-next-line\n    id(authors) as authorIds\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Compile the project, a java/kotlin class named ",(0,a.jsx)(n.code,{children:"BookView"})," will be automatically generated."]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"[\n    BookView(\n        id=3, \n        name=Learning GraphQL, \n        edition=3, \n        price=51.00, \n        authorIds=[2, 1]\n    ), \n    BookView(\n        id=2, \n        name=Learning GraphQL, \n        edition=2, \n        price=55.00, \n        authorIds=[2, 1]\n    ), \n    BookView(\n        id=1, \n        name=Learning GraphQL, \n        edition=1, \n        price=50.00, \n        authorIds=[2, 1]\n    )\n]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),i=t(18215),r=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:i}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),f=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==a&&(c(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);