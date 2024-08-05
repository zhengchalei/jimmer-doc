"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2649],{57971:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(74848),l=r(28453),i=r(11470),a=r(19365);const s={sidebar_position:1,title:"\u65b9\u8a00"},c=void 0,o={id:"configuration/dialect",title:"\u65b9\u8a00",description:"\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u5bf9SQL\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\uff0c\u56e0\u6b64Jimmer\u91c7\u7528\u65b9\u8a00\u914d\u7f6e\u6765\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/configuration/dialect.mdx",sourceDirName:"configuration",slug:"/configuration/dialect",permalink:"/jimmer-doc/zh/docs/configuration/dialect",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/configuration/dialect.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u65b9\u8a00"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u7bc7",permalink:"/jimmer-doc/zh/docs/configuration/"},next:{title:"Connection Manager",permalink:"/jimmer-doc/zh/docs/configuration/connection-manager"}},u={},d=[{value:"\u8bbe\u7f6e\u65b9\u8a00",id:"\u8bbe\u7f6e\u65b9\u8a00",level:2},{value:"\u65b9\u8a00\u5217\u8868",id:"\u65b9\u8a00\u5217\u8868",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u5bf9SQL\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\uff0c\u56e0\u6b64Jimmer\u91c7\u7528\u65b9\u8a00\u914d\u7f6e\u6765\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bbe\u7f6e\u65b9\u8a00",children:"\u8bbe\u7f6e\u65b9\u8a00"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\uff0c\u6709\u4e24\u79cd\u7528\u6cd5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u914d\u7f6e",(0,t.jsx)(n.code,{children:"application.yml"}),"\u6216",(0,t.jsx)(n.code,{children:"application.properties"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jimmer:\n  dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u63d0\u4f9b\u5168\u5c40\u7684\u65b9\u8a00Bean"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Bean\npublic Dialect dialect() {\n    return new MySqlDialect();\n}\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun dialect(): Dialect =\n    MySqlDialect()\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u5982\u679c\u540c\u65f6\u91c7\u7528\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5 ",(0,t.jsx)(n.em,{children:"(\u4e0d\u63a8\u8350)"}),"\uff0c\u5219\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u4f18\u5148"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(new MySqlDialect())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setDialect(MySqlDialect())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u8a00\u5217\u8868",children:"\u65b9\u8a00\u5217\u8868"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.DefaultDialect"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u672a\u6307\u5b9a\u65b9\u8a00\u914d\u7f6e\u65f6\uff0cJimmer\u6240\u91c7\u7528\u7684\u9ed8\u8ba4\u65b9\u8a00\uff0c\u56e0\u6b64\uff0c\u65e0\u9700\u663e\u5f0f\u6307\u5b9a\u3002"}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"\u9ed8\u8ba4\u914d\u7f6e\u4ec5\u80fd\u7528\u4e8e\u5b66\u4e60\u6700\u521d\u9636\u6bb5\u7684\u7b80\u5355demo\uff0c\u7edd\u4e0d\u80fd\u7528\u4e8e\u5b9e\u9645\u9879\u76ee\u3002\u4ee5\u4e0b\u60c5\u51b5\u90fd\u4f1a\u5bfc\u81f4\u5f02\u5e38:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4ee3\u7801\u4e2d\u5bf9Jimmer\u7684\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u751f\u6210\u4f9d\u8d56\u6027\u7279\u5b9a\u6570\u636e\u5e93\u4ea7\u54c1\u7684SQL\uff0c\u800c\u975e\u5b8c\u7f8e\u7684\u8de8\u6570\u636e\u5e93SQL"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5c06",(0,t.jsx)(n.a,{href:"../mutation/trigger",children:"\u89e6\u53d1\u5668"}),"\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a",(0,t.jsx)(n.code,{children:"TRANSACTION_ONLY"}),"\u5e76\u4f7f\u7528\u7f13\u5b58\u65f6\uff0cJimmer\u542f\u52a8\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa",(0,t.jsx)(n.code,{children:"JIMMER_TRANS_CACHE_OPERATOR"}),"\u8868\uff0c",(0,t.jsx)(n.code,{children:"DefaultDialect"}),"\u5e76\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003",(0,t.jsx)(n.a,{href:"../cache/consistency",children:"\u7f13\u5b58\u4e00\u81f4\u6027"})]}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.H2Dialect"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.MySqlDialect"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.PostgresDialect"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.OracleDialect"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.TiDBDialect"}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3aTiDB\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u65e0\u6cd5\u652f\u6301\u5916\u952e\u7ea6\u675f\uff0c\u56e0\u6b64\uff0c\u771f\u5916\u952e\u4e0d\u88ab\u6b64\u65b9\u8a00\u652f\u6301\u3002\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"../mapping/base/foreignkey",children:"\u771f\u5047\u5916\u952e"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c",(0,t.jsx)(n.code,{children:"TiDBDialect"}),"\u548c",(0,t.jsx)(n.code,{children:"MySqlDialect"}),"\u6ca1\u6709\u4efb\u4f55\u5dee\u5f02\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u81f3\u4e8e\u5176\u4ed6\u6570\u636e\u5e93\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u6269\u5c55\u65b9\u8a00\u3002\u4f46\u9700\u8981\u6570\u636e\u5e93\u652f\u6301\u591a\u5217",(0,t.jsx)(n.code,{children:"in"}),"\u8868\u8fbe\u5f0f\uff0c\u6bd4\u5982"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"where (a, b) in ((3, 4), (8, 13))\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6216"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"where (a, b) in (select x, y from ...)\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["\u76ee\u524d\uff0c\u591a\u5217",(0,t.jsx)(n.code,{children:"in"}),"\u8868\u8fbe\u5f0f\u662fJimmer\u9ad8\u5ea6\u4f9d\u8d56\u7684\u7279\u6027\uff0c\u800cMicrosoft Sql Server\u6682\u4e0d\u652f\u6301\u6b64\u7279\u6027\u3002"]}),(0,t.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u76ee\u524d\u6682\u65f6\u4e0d\u652f\u6301Microsoft Sql Server\u3002"})]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(18215);const l={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>S});var t=r(96540),l=r(18215),i=r(23104),a=r(56347),s=r(205),c=r(57485),o=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const l=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,i=h(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,d]=p({queryString:r,groupId:l}),[j,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,u.Dv)(r);return[l,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:l}),f=(()=>{const e=o??j;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),l=s[r].value;l!==t&&(o(n),a(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:l}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function S(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const l={},i=t.createContext(l);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);