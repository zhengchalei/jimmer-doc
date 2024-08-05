"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9493],{86440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),s=t(11470),i=t(19365);const l={sidebar_position:6,title:"More Types"},o=void 0,c={id:"mapping/base/more-type",title:"More Types",description:"In addition to boolean, number, string, UUID, date, and enumeration, scalar properties also support other types, including:",source:"@site/docs/mapping/base/more-type.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/more-type",permalink:"/jimmer-doc/docs/mapping/base/more-type",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/more-type.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:6,frontMatter:{sidebar_position:6,title:"More Types"},sidebar:"tutorialSidebar",previous:{title:"JSON Converter",permalink:"/jimmer-doc/docs/mapping/base/json-converter"},next:{title:"Advanced mapping",permalink:"/jimmer-doc/docs/mapping/advanced/"}},u={},d=[{value:"Array Types",id:"array-types",level:2},{value:"JSON Types",id:"json-types",level:2},{value:"Custom Types",id:"custom-types",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In addition to boolean, number, string, UUID, date, and enumeration, scalar properties also support other types, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Array types"}),"\n",(0,r.jsx)(n.li,{children:"JSON types"}),"\n",(0,r.jsx)(n.li,{children:"Custom types"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Enum types are not discussed in this article, please refer to ",(0,r.jsx)(n.a,{href:"../advanced/enum",children:"Enum Mapping"})]})}),"\n",(0,r.jsx)(n.h2,{id:"array-types",children:"Array Types"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"To use array types, the underlying database must support array types"})}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    String[] tags();\n}\n"})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    val tags: Array<String>\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"For Postgres, you need to specify the data element type in SQL, for example:"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    @Column(sqlElementType = "text")\n    String[] tags();\n}\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    @Column(sqlElementType = "text")\n    val tags: Array<String>\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"json-types",children:"JSON Types"}),"\n",(0,r.jsx)(n.p,{children:"You can use Jackson to support scalar properties of any type, whether it's a custom Java/Kotlin type, a collection type, or even a mix of the two."}),"\n",(0,r.jsxs)(n.p,{children:["Just use the ",(0,r.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.Serialized"})," annotation, and you can use the JSON type."]}),"\n",(0,r.jsx)(n.p,{children:"Here, the usage is demonstrated using a collection type as an example:"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    @Serialized\n    Map<String, Map<String, List<Integer>>> data();\n}\n"})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    @Serialized\n    val data: Map<String, Map<String, List<Integer>>>\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"So what SQL type does the JSON type correspond to?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the database supports the JSON or JSONB type, use that type"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Otherwise, please use the string type"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For Postgres, it supports operations on the internal structure of JSON, please see ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/9.5/functions-json.html",children:"JSON Operations in Postgres"}),". How should Jimmer implement such operations?"]}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer's SQL DSL can mix in Native SQL expressions, please see ",(0,r.jsx)(n.a,{href:"../../query/native-sql",children:"Native Expressions"}),", this article will not repeat it. Note:"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/9.5/functions-json.html",children:"JSON Operations in Postgres"})," use ",(0,r.jsx)(n.code,{children:"?"}),", which happens to be the parameter for JDBC, please use ",(0,r.jsx)(n.code,{children:"??"})," instead."]})}),"\n",(0,r.jsx)(n.h2,{id:"custom-types",children:"Custom Types"}),"\n",(0,r.jsxs)(n.p,{children:["If the JSON type still cannot meet your requirements (e.g., you expect to map some Postgres-specific types), you can use ",(0,r.jsx)(n.code,{children:"ScalarProvider"})," to customize types."]}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"../../configuration/scala-providder",children:"ScalarProvider"}),", this article will not repeat it."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),a=t(18215),s=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),y=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function S(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);