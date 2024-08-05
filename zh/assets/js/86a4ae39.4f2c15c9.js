"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2e3],{91556:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=i(74848),r=i(28453);const s={sidebar_position:4,title:"3. \u4efb\u610f\u52a8\u6001\u67e5\u8be2"},o=void 0,c={id:"quick-view/dsl/index",title:"3. \u4efb\u610f\u52a8\u6001\u67e5\u8be2",description:"Jimmer\u652f\u6301\u5f3a\u7c7b\u578bSQL DSL\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/dsl/index.md",sourceDirName:"quick-view/dsl",slug:"/quick-view/dsl/",permalink:"/jimmer-doc/zh/docs/quick-view/dsl/",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/dsl/index.md",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"3. \u4efb\u610f\u52a8\u6001\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u4fdd\u5b58\u957f\u5173\u8054",permalink:"/jimmer-doc/zh/docs/quick-view/save/export/long"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/jimmer-doc/zh/docs/quick-view/dsl/feature"}},d={},u=[];function a(e){const t={a:"a",admonition:"admonition",em:"em",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Jimmer\u652f\u6301\u5f3a\u7c7b\u578bSQL DSL\u3002"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"\u6ce8\u610f\uff0c\u548c\u5927\u90e8\u5206\u4eba\u91c7\u7528\u5f3a\u7c7b\u578bDSL\u7684\u6846\u67b6\u4e0d\u540c\uff0cJimmer\u7684\u5f3a\u7c7b\u578bDSL\u4e0d\u4ec5\u4ec5\u662f\u4e3a\u4e86\u8ba9SQL\u8bed\u53e5\u80fd\u5f97\u5230\u7f16\u8bd1\u65f6\u5b89\u5168\u4fdd\u8bc1\u548cIDE\u667a\u80fd\u63d0\u793a\u7684\u4f53\u9a8c\uff0c\u8fd8\u4e3a\u4e86\u5c31\u89e3\u51b3\u539f\u751fSQL\u4e2d\u8868\u8fde\u63a5\u548c\u5b50\u67e5\u8be2\u8fc7\u4e8e\u9ebb\u70e6\u7684\u95ee\u9898\uff0c\u5e76\u7ed9\u4e88\u5b83\u4eec\u66f4\u9ad8\u7ea7\u7684\u62bd\u8c61\u3002"}),(0,n.jsx)(t.p,{children:"\u4e3a\u8868\u8fde\u63a5\u548c\u5b50\u67e5\u8be2\u8d4b\u4e88\u4e86\u66f4\u9ad8\u7ea7\u7684\u62bd\u8c61\u540e\uff0c\u5229\u7528Jimmer\u6784\u5efa\u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u67e5\u8be2\u4f1a\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002\u4ece\u4e00\u5f00\u59cb\uff0cJimmer\u5c31\u662f\u4e3a\u8f7b\u677e\u6784\u9020\u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u67e5\u8be2\u800c\u8bbe\u8ba1\u3002"})]}),"\n",(0,n.jsxs)(t.p,{children:["\u53e6\u5916\uff0c\u5bf9\u4e8e\u7279\u5b9a\u6570\u636e\u5e93\u4ea7\u54c1\u62e5\u6709\u7684\u975eSQL\u6807\u51c6\u7684\u5f3a\u5927\u529f\u80fd\uff0cJimmer\u7684SQL DSL\u80fd\u5d4c\u5165Native SQL\u7247\u6bb5\uff0c\u5f3a\u7c7b\u578bDSL\u7684\u62bd\u8c61\u4e0d\u4f1a\u5f71\u54cd\u5f00\u53d1\u4eba\u5458\u5c3d\u60c5\u4f7f\u7528\u6570\u636e\u7684\u7279\u6709\u529f\u80fd\u3002",(0,n.jsxs)(t.em,{children:["(\u8fd9\u90e8\u5206\u529f\u80fd\u4e0d\u4f1a\u5728\u5feb\u901f\u9884\u89c8\u4e2d\u4ecb\u7ecd\uff0c\u6709\u5174\u8da3\u7684\u7763\u8d23\u8bf7\u67e5\u770b",(0,n.jsx)(t.a,{href:"../../query/native-sql",children:"\u67e5\u8be2\u7bc7/Native\u8868\u8fbe\u5f0f"}),")"]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);