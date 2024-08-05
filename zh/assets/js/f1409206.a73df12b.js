"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3915],{69785:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=o(74848),n=o(28453),i=o(11470),s=o(19365);const a={sidebar_position:1,title:"\u5b9a\u4e49Repository"},l=void 0,c={id:"spring/repository/concept",title:"\u5b9a\u4e49Repository",description:"Jimmer\u6574\u5408\u4e86spring data\uff0c\u4e3aJava\u7528\u6237\u548cKotlin\u7528\u6237\u5404\u81ea\u63d0\u4f9b\u4e86\u4e00\u4e2aRepository\u57fa\u63a5\u53e3\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/spring/repository/concept.mdx",sourceDirName:"spring/repository",slug:"/spring/repository/concept",permalink:"/jimmer-doc/zh/docs/spring/repository/concept",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/spring/repository/concept.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5b9a\u4e49Repository"},sidebar:"tutorialSidebar",previous:{title:"Spring Data\u98ce\u683c",permalink:"/jimmer-doc/zh/docs/spring/repository/"},next:{title:"\u7b80\u5355\u67e5\u8be2",permalink:"/jimmer-doc/zh/docs/spring/repository/abstract"}},u={},p=[];function d(e){const r={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Jimmer\u6574\u5408\u4e86spring data\uff0c\u4e3aJava\u7528\u6237\u548cKotlin\u7528\u6237\u5404\u81ea\u63d0\u4f9b\u4e86\u4e00\u4e2aRepository\u57fa\u63a5\u53e3\u3002"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Java"}),(0,t.jsx)("td",{children:"org.babyfish.jimmer.spring.repository.JRepository<E, ID>"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Kotlin"}),(0,t.jsx)("td",{children:"org.babyfish.jimmer.spring.repository.KRepository<E, ID>"})]})]}),"\n",(0,t.jsx)(r.p,{children:"\u8be5\u63a5\u53e3\u5177\u5907\u4e24\u4e2a\u8303\u578b\u53c2\u6570"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"E: \u5b9e\u4f53\u7c7b\u578b"}),"\n",(0,t.jsx)(r.li,{children:"ID: \u5b9e\u4f53ID\u7c7b\u578b"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u901a\u8fc7\u7ee7\u627f\u6b64\u63a5\u53e3\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u5404\u79cdRepository"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"BookStoreRepository"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",metastring:'title="BookStoreRepostory.java"',children:"package com.example.repository;\n\nimport com.example.model.BookStore;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface BookRepository extends JRepository<BookStore, Long> {}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-kotlin",metastring:'title="BookStoreRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.BookStore\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface BookRepository : KRepository<BookStore, Long>\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"BookRepository"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",metastring:'title="BookRepostory.java"',children:"package com.example.repository;\n\nimport com.example.model.Book;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface BookRepository extends JRepository<Book, Long> {}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-kotlin",metastring:'title="BookRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.Book\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface BookRepository : KRepository<Book, Long>\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"AuthorRepository"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",metastring:'title="AuthorRepostory.java"',children:"package com.example.repository;\n\nimport com.example.model.Auhtor;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface AuthorRepository extends JRepository<Author, Long> {}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-kotlin",metastring:'title="AuthorRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.Author\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface AuthorRepository : KRepository<Author, Long>\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"TreeNodeRepository"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",metastring:'title="TreeNodeRepostory.java"',children:"package com.example.repository;\n\nimport com.example.model.TreeNode;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface TreeNodeRepository extends JRepository<TreeNode, Long> {}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-kotlin",metastring:'title="TreeNodeRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.TreeNode\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface TreeNodeRepository : KRepository<TreeNode, Long>\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"note",children:[(0,t.jsxs)(r.p,{children:["\u5176\u4ed6\u4e0espring-data\u76f8\u540c\uff0c\u5b9a\u4e49\u597d\u63a5\u53e3\u5373\u53ef\uff0c",(0,t.jsx)(r.strong,{children:"\u65e0\u9700"}),"\u7528",(0,t.jsx)(r.code,{children:"@org.springframework.stereotype.Repository"}),"\u4fee\u9970\u3002Jimmer\u4f1a\u81ea\u52a8\u5b9e\u73b0\u8fd9\u4e9b\u63a5\u53e3\u5e76\u6ce8\u518c\u5230Spring\u4e2d\u3002"]}),(0,t.jsx)(r.p,{children:"\u4f46\u662f\u6709\u4e00\u4e2a\u6ce8\u610f\u4e8b\u9879\uff1a"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u81ea\u5b9a\u4e49Repository\u6240\u5c5e\u7684\u5305\u5fc5\u987b\u662fSpringBoot\u4e3b\u7c7b\u6240\u5728\u5305\u6216\u5b50\u5305\u3002"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["\u5426\u5219\uff0c\u9700\u8981\u7528",(0,t.jsx)(r.code,{children:"@org.babyfish.jimmer.spring.repository.EnableJimmerRepositories"}),"\u4fee\u9970SpringBoot\u4e3b\u7c7b\u6216\u5176\u4ed6Spring\u914d\u7f6e\u7c7b\uff0c\u660e\u786e\u6307\u5b9a\u81ea\u5b9a\u4e49Repository\u63a5\u53e3\u6240\u5728\u7684\u5305\u3002"]}),"\n"]}),"\n"]})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,r,o)=>{o.d(r,{A:()=>s});o(96540);var t=o(18215);const n={tabItem:"tabItem_Ymn6"};var i=o(74848);function s(e){let{children:r,hidden:o,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,s),hidden:o,children:r})}},11470:(e,r,o)=>{o.d(r,{A:()=>k});var t=o(96540),n=o(18215),i=o(23104),s=o(56347),a=o(205),l=o(57485),c=o(31682),u=o(70679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:o}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:o,attributes:t,default:n}}=e;return{value:r,label:o,attributes:t,default:n}}))}(o);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,o])}function m(e){let{value:r,tabValues:o}=e;return o.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:o}=e;const n=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:o}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:r,groupId:o});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function g(e){const{defaultValue:r,queryString:o=!1,groupId:n}=e,i=d(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[c,p]=h({queryString:o,groupId:n}),[g,y]=function(e){let{groupId:r}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,u.Dv)(o);return[n,(0,t.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:n}),b=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),y(e)}),[p,y,i]),tabValues:i}}var y=o(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=o(74848);function j(e){let{className:r,block:o,selectedValue:t,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const r=e.currentTarget,o=l.indexOf(r),n=a[o].value;n!==t&&(c(r),s(n))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;r=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;r=l[o]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":o},r),children:a.map((e=>{let{value:r,label:o,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:p,onClick:u,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===r}),children:o??r},r)}))})}function f(e){let{lazy:r,children:o,selectedValue:n}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=g(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...r,...e}),(0,x.jsx)(f,{...r,...e})]})}function k(e){const r=(0,y.A)();return(0,x.jsx)(v,{...e,children:p(e.children)},String(r))}},28453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>a});var t=o(96540);const n={},i=t.createContext(n);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);