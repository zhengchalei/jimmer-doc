"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9907],{96456:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=a(74848),r=a(28453),l=a(11470),i=a(19365);const s={sidebar_position:2,title:"MappedSuperclass"},c=void 0,o={id:"mapping/advanced/mapped-super-class",title:"MappedSuperclass",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/mapped-super-class.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/mapped-super-class",permalink:"/jimmer-doc/zh/docs/mapping/advanced/mapped-super-class",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/mapped-super-class.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"MappedSuperclass"},sidebar:"tutorialSidebar",previous:{title:"\u590d\u5408\u5b57\u6bb5",permalink:"/jimmer-doc/zh/docs/mapping/advanced/embedded"},next:{title:"\u903b\u8f91\u5220\u9664",permalink:"/jimmer-doc/zh/docs/mapping/advanced/logical-deleted/"}},u={},d=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u591a\u7ee7\u627f",id:"\u591a\u7ee7\u627f",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.MappedSuperclass"}),"\u7528\u4e8e\u63d0\u4f9b\u53ef\u4f9b\u5b9e\u4f53\u7ee7\u627f\u7684\u62bd\u8c61\u8d85\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8d85\u7c7b\u578b\u5e76\u4e0d\u662f\u5b9e\u4f53\uff0c\u4f46\u53ef\u4ee5\u88ab\u591a\u4e2a\u5b9e\u4f53\u7c7b\u578b\u7ee7\u627f\uff0c\u4ece\u800c\u907f\u514d\u591a\u4e2a\u5b9e\u4f53\u91cd\u590d\u58f0\u660e\u76f8\u540c\u7684\u5c5e\u6027\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5148\u5b9a\u4e49\u8d85\u7c7b\u578b"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="BaseEntity.java"',children:"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    @ManyToOne\n    User createdBy();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    User modifiedBy();\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="BaseEntity.kt"',children:"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    @ManyToOne\n    val createdBy: User\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    val modifiedBy: User\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ed6\u5b9e\u4f53\u5c31\u53ef\u4ee5\u7ee7\u627f\u5b83"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"BookStore"})}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="BookStore.java"',children:"@Entity\n// highlight-next-line\npublic interface BookStore extends BaseEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStore.kt"',children:"@Entity\n// highlight-next-line\ninterface BookStore : BaseEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Book"})}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\n// highlight-next-line\npublic interface Book extends BaseEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\n// highlight-next-line\ninterface Book : BaseEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Author"})}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:"@Entity\n// highlight-next-line\npublic interface Author extends BaseEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:"@Entity\n// highlight-next-line\ninterface Author : BaseEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u591a\u7ee7\u627f",children:"\u591a\u7ee7\u627f"}),"\n",(0,t.jsxs)(n.p,{children:["\u88ab",(0,t.jsx)(n.code,{children:"MappedSuperclass"}),"\u4fee\u9970\u7684\u7c7b\u578b\u652f\u6301\u591a\u7ee7\u627f\uff0c\u5176\u4ed6\u7c7b\u578b\u53ef\u4ee5\u4ece\u591a\u4e2a",(0,t.jsx)(n.code,{children:"MappedSuperclass"}),"\u8d85\u7c7b\u578b\u7ee7\u627f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u62bd\u8c61\u63a5\u53e3",(0,t.jsx)(n.code,{children:"TenantAware"}),"\uff0c\u6240\u6709\u652f\u6301\u591a\u79df\u6237\u7684\u5b9e\u4f53\u90fd\u7ee7\u627f\u5b83"]}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="TenantAware.java"',children:"// highlight-next-line\n@MappedSuperclass\npublic interface TenantAware {\n\n    String tenant();\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="TenantAware.kt"',children:"// highlight-next-line\n@MappedSuperclass\ninterface TenantAware {\n\n    val tenant: String\n}\n"})})})]}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\n// highlight-next-line\npublic interface Book extends BaseEntity, TenantAware {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\n// highlight-next-line\ninterface Book : BaseEntity, TenantAware {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539",(0,t.jsx)(n.code,{children:"Book"}),"\uff0c\u8ba9\u5b83\u4e0d\u5149\u7ee7\u627f",(0,t.jsx)(n.code,{children:"BaseEntty"}),"\uff0c\u8fd8\u7ee7\u627f",(0,t.jsx)(n.code,{children:"TenantAware"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@MapperSuperclass"}),"\u7684\u4f5c\u7528\u4e0d\u4ec5\u4ec5\u662f\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u8fd8\u53ef\u4ee5\u548c\u5176\u4ed6\u53e6\u5916\u4e24\u4e2a\u529f\u80fd\u914d\u5408\u4f7f\u7528"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../query/global-filter",children:"\u5168\u5c40\u8fc7\u6ee4\u5668"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../mutation/draft-interceptor",children:"\u62e6\u622a\u5668"})}),"\n"]}),(0,t.jsx)(n.p,{children:"\u5728\u548c\u5b83\u4eec\u914d\u5408\u4f7f\u7528\u65f6\uff0c\u591a\u7ee7\u627f\u53ef\u4ee5\u83b7\u5f97\u826f\u597d\u7684\u7075\u6d3b\u6027\u3002"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(96540),r=a(18215),l=a(23104),i=a(56347),s=a(205),c=a(57485),o=a(31682),u=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,d]=m({queryString:a,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),j=(()=>{const e=o??g;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function f(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),u=e=>{const n=e.currentTarget,a=c.indexOf(n),r=s[a].value;r!==t&&(o(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(96540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);