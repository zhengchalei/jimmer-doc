"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8022],{15433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),l=t(11470),s=t(19365);const o={sidebar_position:3,title:"4.3 Associated Id"},i=void 0,c={id:"showcase/where/associated-id",title:"4.3 Associated Id",description:"IsNull\u5224\u65ad",source:"@site/docs/showcase/where/associated-id.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/associated-id",permalink:"/jimmer-doc/docs/showcase/where/associated-id",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/where/associated-id.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"4.3 Associated Id"},sidebar:"tutorialSidebar",previous:{title:"4.2 Dynamic Conditions",permalink:"/jimmer-doc/docs/showcase/where/dynamic-where"},next:{title:"4.4 Dynamic Table Join",permalink:"/jimmer-doc/docs/showcase/where/dynamic-join"}},u={},d=[{value:"IsNull\u5224\u65ad",id:"isnull\u5224\u65ad",level:2},{value:"Judgment of any value",id:"judgment-of-any-value",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"isnull\u5224\u65ad",children:"IsNull\u5224\u65ad"}),"\n",(0,a.jsxs)(n.p,{children:["Query all ",(0,a.jsx)(n.code,{children:"TreeNode"}),"s with ",(0,a.jsx)(n.code,{children:"parentId"})," being null, i.e. root nodes."]}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parentId().isNull())\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.parentId.isNull())\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["In the code above, ",(0,a.jsx)(n.code,{children:"parentId"})," is automatically generated by Jimmer at compile time based on the many-to-one property ",(0,a.jsx)(n.code,{children:"TreeNode.parent"}),",\neven if the developer does not define the ",(0,a.jsx)(n.a,{href:"../../mapping/advanced/view/id-view",children:"@IdView property"})," named ",(0,a.jsx)(n.code,{children:"parentId"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"judgment-of-any-value",children:"Judgment of any value"}),"\n",(0,a.jsxs)(n.p,{children:["In fact, ",(0,a.jsx)(n.code,{children:"eq"})," supports null parameters. When the parameter of ",(0,a.jsx)(n.code,{children:"eq"})," is null, ",(0,a.jsx)(n.code,{children:"is null"})," is rendered:"]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["Note: The ",(0,a.jsx)(n.code,{children:"eqIf"})," of java and ",(0,a.jsx)(n.code,{children:"eq?"})," of kotlin are different, null is considered a dynamic query and does not render any SQL condition."]})]}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Nullable Long parentId = ...Omitted...;\n\nTreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parentId().eq(parentId))\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val parentId: Long? = ...Omitted...;\n\nval rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.parentId eq parentId)\n        select(table)\n    }\n    .execute()\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),l=t(23104),s=t(56347),o=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);