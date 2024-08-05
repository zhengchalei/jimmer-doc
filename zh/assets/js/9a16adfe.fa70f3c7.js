"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1008],{38220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=t(74848),i=t(28453);const c={sidebar_position:3,title:"\u4fdd\u5b58\u6307\u4ee4"},r=void 0,o={id:"mutation/save-command/index",title:"\u4fdd\u5b58\u6307\u4ee4",description:"\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u81ea\u52a8\u627e\u51faDIFF\u5e76\u4fee\u6539\u6570\u636e\u5e93\uff0c\u7c7b\u4f3c\u4e8eReact/Vue",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/index.md",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/",permalink:"/jimmer-doc/zh/docs/mutation/save-command/",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/index.md",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4fdd\u5b58\u6307\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664\u8bed\u53e5",permalink:"/jimmer-doc/zh/docs/mutation/delete-statement"},next:{title:"\u57fa\u672c\u7528\u6cd5",permalink:"/jimmer-doc/zh/docs/mutation/save-command/usage"}},d={},a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u81ea\u52a8\u627e\u51faDIFF\u5e76\u4fee\u6539\u6570\u636e\u5e93\uff0c\u7c7b\u4f3c\u4e8eReact/Vue"})}),"\n",(0,s.jsx)(n.p,{children:"\u4fdd\u5b58\u6307\u4ee4\u662fJimmer\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u5927\u5e45\u7b80\u5316\u590d\u6742\u6570\u636e\u7ed3\u6784\u4fdd\u5b58\u4e1a\u52a1\u7684\u5f00\u53d1\u96be\u5ea6\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u8bf4",(0,s.jsx)(n.a,{href:"../../query/object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u8ba9\u4f5c\u4e3a\u8f93\u51fa\u4fe1\u606f\u7684\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u662f\u4efb\u4f55\u5f62\u72b6\uff0c\u90a3\u4e48\uff0c\u4fdd\u5b58\u6307\u4ee4\u5c31\u662f\u8ba9\u4f5c\u4e3a\u8f93\u5165\u4fe1\u606f\u7684\u6570\u636e\u7ed3\u6784\u4e5f\u53ef\u4ee5\u662f\u4efb\u4f55\u5f62\u72b6\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u8bfb\u8005\u5bf9Web\u524d\u7aef\u6280\u672f\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\u53ef\u4ee5\u7528",(0,s.jsx)(n.a,{href:"https://react.dev/",children:"React"}),"\u6216",(0,s.jsx)(n.a,{href:"https://vuejs.org/",children:"Vue"}),"\u4e2d\u7684",(0,s.jsx)(n.code,{children:"Virtual DOM diff"}),"\u6765\u7c7b\u6bd4\u3002"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u4fdd\u5b58\u6307\u4ee4\u9700\u8981\u5f00\u53d1\u4eba\u5458",(0,s.jsx)(n.strong,{children:"\u5f7b\u5e95\u6539\u53d8\u8fc7\u53bb\u7684\u601d\u7ef4\u6a21\u5f0f"})]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u601d\u7ef4\u6a21\u5f0f\u7684\u672c\u8d28\u533a\u522b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee5\u524d\u7684\u4f20\u7edf\u601d\u7ef4\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u81ea\u5df1\u53bb\u5bf9\u6bd4\u8981\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u548c\u6570\u636e\u5e93\u73b0\u6709\u6570\u636e\u7684\u5dee\u5f02\uff0c\u5bf9\u6709\u53d8\u5316\u7684\u5c40\u90e8\u6267\u884c",(0,s.jsx)(n.code,{children:"INSERT"}),"\u3001",(0,s.jsx)(n.code,{children:"UPDATE"}),"\u6216",(0,s.jsx)(n.code,{children:"DELETE"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4fdd\u5b58\u6307\u4ee4\u7684\u601d\u7ef4\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u53d7\u5ba2\u6237\u7aef\u4f20\u9012\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4fdd\u5b58\u5373\u53ef\u3002Jimmer\u4f1a\u5904\u7406\u597d\u4e00\u5207 ",(0,s.jsxs)(n.em,{children:["(\u81ea\u52a8\u5bf9\u6bd4\u8981\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u548c\u6570\u636e\u5e93\u73b0\u6709\u6570\u636e\u7684\u5dee\u5f02\uff0c\u5bf9\u6709\u53d8\u5316\u7684\u5c40\u90e8\u6267\u884c",(0,s.jsx)(n.code,{children:"INSERT"}),"\u3001",(0,s.jsx)(n.code,{children:"UPDATE"}),"\u6216",(0,s.jsx)(n.code,{children:"DELETE"}),")"]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee5\u524d\u7684\u4e60\u60ef\u5e94\u8be5\u88ab\u66f4\u597d\u7684\u65b9\u6cd5\u66ff\u4ee3"}),"\n",(0,s.jsx)(n.p,{children:"\u4f20\u7edf\u5f00\u53d1\u6a21\u5f0f\u4e2d\uff0c\u5f00\u53d1\u4eba\u5458\u975e\u5e38\u559c\u6b22\u505a\u4e00\u4ef6\u4e8b\uff1a\u5148\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u518d\u4fee\u6539\u5176\u90e8\u5206\u5c5e\u6027\uff0c\u6700\u540e\u4fdd\u5b58\u4fee\u6539\u540e\u7684\u5bf9\u8c61\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u867d\u7136Jimmer\u4e5f\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u8fd9\u6837\u505a\uff0c\u4f46\u662f\u63a8\u8350\u6027\u80fd\u66f4\u9ad8\u7684\u505a\u6cd5\uff0c\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"./incomplete",children:"\u4e0d\u5b8c\u6574\u5bf9\u8c61"})]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"\u8c03\u7528\u4fdd\u5b58\u6307\u4ee4\u53ea\u9700\u8981\u8ba9\u4e00\u884c\u4ee3\u7801\uff0c\u4f46\u5176\u5185\u90e8\u9690\u85cf\u4e86\u5343\u904d\u4e07\u5316\u7684\u7ec6\u8282\uff0c\u6587\u6863\u96be\u4ee5\u7a77\u4e3e\u5927\u91cf\u6848\u4f8b\u3002\u56e0\u6b64\uff0c\u4fdd\u5b58\u6307\u4ee4\u6709\u72ec\u7acb\u7684\u793a\u4f8b\u9879\u76ee\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Java: ",(0,s.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command",children:"jimmer-examples/java/save-command"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Kotlin: ",(0,s.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt",children:"jimmer-examples/kotlin/save-command-kt"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7528IDE\u968f\u610f\u6253\u5f00\u5176\u4e2d\u4e00\u4e2a\uff0c\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u5373\u53ef\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);