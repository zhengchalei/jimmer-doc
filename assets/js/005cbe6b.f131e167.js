"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3988,5785,5323,7704,561,2942,5799,8180],{91064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var o=n(74848),r=n(28453),i=n(11470),a=n(19365),s=n(64087);const l={sidebar_position:2,title:"Save Short Associations"},c=void 0,d={id:"quick-view/save/export/short",title:"Save Short Associations",description:"What is Short Association",source:"@site/docs/quick-view/save/export/short.mdx",sourceDirName:"quick-view/save/export",slug:"/quick-view/save/export/short",permalink:"/jimmer-doc/docs/quick-view/save/export/short",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/save/export/short.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Save Short Associations"},sidebar:"tutorialSidebar",previous:{title:"Save Aggregate Root",permalink:"/jimmer-doc/docs/quick-view/save/export/root"},next:{title:"Save Long Associations",permalink:"/jimmer-doc/docs/quick-view/save/export/long"}},u={},h=[{value:"What is Short Association",id:"what-is-short-association",level:2},{value:"Define Input DTO",id:"define-input-dto",level:2},{value:"Generated Code",id:"generated-code",level:2},{value:"Write HTTP Service",id:"write-http-service",level:2}];function v(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"what-is-short-association",children:"What is Short Association"}),"\n",(0,o.jsx)(t.p,{children:"A short association refers to only changing the association relationship between the current object and other objects, without further modifying the associated object."}),"\n",(0,o.jsx)(t.p,{children:"For the UI interface:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Reference association ",(0,o.jsx)(t.em,{children:"(one-to-one and many-to-one)"})," is rendered as a radio menu"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Collection association ",(0,o.jsx)(t.em,{children:"(one-to-many and many-to-many)"})," is rendered as a multiple select menu"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsx)(s.M,{}),"\n",(0,o.jsx)(t.h2,{id:"define-input-dto",children:"Define Input DTO"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Install DTO language Intellij plugin: ",(0,o.jsx)(t.a,{href:"https://github.com/ClearPlume/jimmer-dto",children:"https://github.com/ClearPlume/jimmer-dto"})," ",(0,o.jsx)(t.em,{children:"(This process is not required but highly recommended)"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Create a new directory ",(0,o.jsx)(t.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Under ",(0,o.jsx)(t.code,{children:"src/main/dto"}),", create a file ",(0,o.jsx)(t.code,{children:"Book.dto"})," and write the following code:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",metastring:'title="Book.dto"',children:"input BookInputWithShortAssociations {\n    #allScalars(this) \n    #highlight-next-line  \n    id(store) //default alias storeId  \n    #highlight-next-line\n    id(authors) as authorIds\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"generated-code",children:"Generated Code"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:'title="BookInputWithShortAssociations.java"  ',children:'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"  \n)\npublic class BookInputWithShortAssociations implements Input<Book> {  \n\n    @Nullable\n    private Long id;  \n\n    @NotNull\n    private String name;\n\n    private int edition;\n\n    @NotNull  \n    private BigDecimal price;\n\n    @Nullable\n    // highlight-next-line\n    private Long storeId;\n\n    @NotNull\n    // highlight-next-line \n    private List<Long> authorIds;\n\n    ...Omit other methods...  \n}\n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",metastring:'title="BookInputWithShortAssociations.kt"  ',children:'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)  \ndata class BookInputWithShortAssociations(\n    val id: Long?,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    // highlight-next-line\n    val storeId: Long? \n    // highlight-next-line\n    val authorIds: List<Long>  \n) : Input<Book> {\n    ...Omit other methods...   \n}\n'})})})]}),"\n",(0,o.jsx)(t.h2,{id:"write-http-service",children:"Write HTTP Service"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:'title="BookController.java"',children:'@RestController\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient; \n    }\n\n    @PutMapping("/book")\n    public int saveBookInputWithShortAssociations(\n        // highlight-next-line  \n        @RequestBody BookInputWithShortAssociations input\n    ) {\n        return sqlClient\n            .save(input)\n            .getTotalAffectedRowCount();\n    } \n} \n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",metastring:'title="BookController.java"  ',children:'class BookController(  \n    private val sqlClient: KSqlClient  \n) {  \n\n    @PutMapping("/book")\n    fun saveBookInputWithShortAssociations( \n        // highlight-next-line\n        @RequestBody input: BookInputWithShortAssociations\n    ): Int =\n        sqlClient\n            .save(input)\n            .totalAffectedRowCount\n}\n'})})})]}),"\n",(0,o.jsx)(t.p,{children:"It can be seen that no matter how the Input DTO changes, Jimmer still only needs one method call to complete data saving."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}},54856:(e,t,n)=>{n.d(t,{X:()=>i});var o=n(58168),r=n(25419);function i(e,t,n){return void 0===e||(0,r.g)(e)?t:(0,o.A)({},t,{ownerState:(0,o.A)({},t.ownerState,n)})}},34718:(e,t,n)=>{function o(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{h:()=>o})},25419:(e,t,n)=>{function o(e){return"string"==typeof e}n.d(t,{g:()=>o})},74311:(e,t,n)=>{n.d(t,{p:()=>l});var o=n(58168);function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}const i=function(){for(var e,t,n=0,o="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o};var a=n(34718);function s(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}function l(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:l,className:c}=e;if(!t){const e=i(null==n?void 0:n.className,c,null==l?void 0:l.className,null==r?void 0:r.className),t=(0,o.A)({},null==n?void 0:n.style,null==l?void 0:l.style,null==r?void 0:r.style),a=(0,o.A)({},n,l,r);return e.length>0&&(a.className=e),Object.keys(t).length>0&&(a.style=t),{props:a,internalRef:void 0}}const d=(0,a.h)((0,o.A)({},l,r)),u=s(r),h=s(l),v=t(d),p=i(null==v?void 0:v.className,null==n?void 0:n.className,c,null==l?void 0:l.className,null==r?void 0:r.className),m=(0,o.A)({},null==v?void 0:v.style,null==n?void 0:n.style,null==l?void 0:l.style,null==r?void 0:r.style),f=(0,o.A)({},v,n,h,u);return p.length>0&&(f.className=p),Object.keys(m).length>0&&(f.style=m),{props:f,internalRef:v.ref}}},45489:(e,t,n)=>{function o(e,t,n){return"function"==typeof e?e(t,n):e}n.d(t,{Y:()=>o})},57416:(e,t,n)=>{n.d(t,{A:()=>g});var o=n(98587),r=n(58168),i=n(96540),a=n(54533),s=n(64111),l=n(771),c=n(11848);const d=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var u=n(3541),h=n(27553),v=n(17245);function p(e){return(0,v.Ay)("MuiPaper",e)}(0,h.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=n(74848);const f=["className","component","elevation","square","variant"],A=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,r.A)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.A)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.X4)("#fff",d(t.elevation))}, ${(0,l.X4)("#fff",d(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),g=i.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiPaper"}),{className:i,component:l="div",elevation:c=1,square:d=!1,variant:h="elevation"}=n,v=(0,o.A)(n,f),g=(0,r.A)({},n,{component:l,elevation:c,square:d,variant:h}),x=(e=>{const{square:t,elevation:n,variant:o,classes:r}=e,i={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,s.A)(i,p,r)})(g);return(0,m.jsx)(A,(0,r.A)({as:l,ownerState:g,className:(0,a.A)(x.root,i),ref:t},v))}))},68999:(e,t,n)=>{n.d(t,{A:()=>_});var o=n(98587),r=n(58168),i=n(96540),a=n(37273),s=n(94521),l=n(17245),c=n(64111),d=n(61311),u=n(51264),h=n(33571);const v=["ownerState"],p=["variants"],m=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function f(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const A=(0,u.A)(),g=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function x({defaultTheme:e,theme:t,themeId:n}){return o=t,0===Object.keys(o).length?e:t[n]||t;var o}function j(e){return e?(t,n)=>n[e]:null}function y(e,t){let{ownerState:n}=t,i=(0,o.A)(t,v);const a="function"==typeof e?e((0,r.A)({ownerState:n},i)):e;if(Array.isArray(a))return a.flatMap((e=>y(e,(0,r.A)({ownerState:n},i))));if(a&&"object"==typeof a&&Array.isArray(a.variants)){const{variants:e=[]}=a;let t=(0,o.A)(a,p);return e.forEach((e=>{let o=!0;"function"==typeof e.props?o=e.props((0,r.A)({ownerState:n},i,n)):Object.keys(e.props).forEach((t=>{(null==n?void 0:n[t])!==e.props[t]&&i[t]!==e.props[t]&&(o=!1)})),o&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,r.A)({ownerState:n},i,n)):e.style))})),t}return a}const b=function(e={}){const{themeId:t,defaultTheme:n=A,rootShouldForwardProp:i=f,slotShouldForwardProp:a=f}=e,l=e=>(0,h.A)((0,r.A)({},e,{theme:x((0,r.A)({},e,{defaultTheme:n,themeId:t}))}));return l.__mui_systemSx=!0,(e,c={})=>{(0,d.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:u,slot:h,skipVariantsResolver:v,skipSx:p,overridesResolver:A=j(g(h))}=c,b=(0,o.A)(c,m),k=void 0!==v?v:h&&"Root"!==h&&"root"!==h||!1,S=p||!1;let w=f;"Root"===h||"root"===h?w=i:h?w=a:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(w=void 0);const C=(0,d.default)(e,(0,r.A)({shouldForwardProp:w,label:undefined},b)),I=e=>"function"==typeof e&&e.__emotion_real!==e||(0,s.Q)(e)?o=>y(e,(0,r.A)({},o,{theme:x({theme:o.theme,defaultTheme:n,themeId:t})})):e,N=(o,...i)=>{let a=I(o);const s=i?i.map(I):[];u&&A&&s.push((e=>{const o=x((0,r.A)({},e,{defaultTheme:n,themeId:t}));if(!o.components||!o.components[u]||!o.components[u].styleOverrides)return null;const i=o.components[u].styleOverrides,a={};return Object.entries(i).forEach((([t,n])=>{a[t]=y(n,(0,r.A)({},e,{theme:o}))})),A(e,a)})),u&&!k&&s.push((e=>{var o;const i=x((0,r.A)({},e,{defaultTheme:n,themeId:t}));return y({variants:null==i||null==(o=i.components)||null==(o=o[u])?void 0:o.variants},(0,r.A)({},e,{theme:i}))})),S||s.push(l);const c=s.length-i.length;if(Array.isArray(o)&&c>0){const e=new Array(c).fill("");a=[...o,...e],a.raw=[...o.raw,...e]}const d=C(a,...s);return e.muiName&&(d.muiName=e.muiName),d};return C.withConfig&&(N.withConfig=C.withConfig),N}}(),k=b;var S=n(44467),w=n(39599),C=n(89452),I=n(3675),N=n(74848);const B=["component","direction","spacing","divider","children","className","useFlexGap"],R=(0,u.A)(),q=k("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function P(e){return(0,S.A)({props:e,name:"MuiStack",defaultTheme:R})}function T(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,r)=>(e.push(o),r<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${r}`})),e)),[])}const W=({ownerState:e,theme:t})=>{let n=(0,r.A)({display:"flex",flexDirection:"column"},(0,C.NI)({theme:t},(0,C.kW)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,I.LX)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),i=(0,C.kW)({values:e.direction,base:r}),a=(0,C.kW)({values:e.spacing,base:r});"object"==typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const o=t>0?i[n[t-1]]:"column";i[e]=o}}));const l=(t,n)=>{return e.useFlexGap?{gap:(0,I._W)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${r=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,I._W)(o,t)}};var r};n=(0,s.A)(n,(0,C.NI)({theme:t},a,l))}return n=(0,C.iZ)(t.breakpoints,n),n};var L=n(11848),M=n(3541);const O=function(e={}){const{createStyledComponent:t=q,useThemeProps:n=P,componentName:s="MuiStack"}=e,d=t(W),u=i.forwardRef((function(e,t){const i=n(e),u=(0,w.A)(i),{component:h="div",direction:v="column",spacing:p=0,divider:m,children:f,className:A,useFlexGap:g=!1}=u,x=(0,o.A)(u,B),j={direction:v,spacing:p,useFlexGap:g},y=(0,c.A)({root:["root"]},(e=>(0,l.Ay)(s,e)),{});return(0,N.jsx)(d,(0,r.A)({as:h,ownerState:j,ref:t,className:(0,a.A)(y.root,A)},x,{children:m?T(f,m):f}))}));return u}({createStyledComponent:(0,L.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,M.A)({props:e,name:"MuiStack"})}),_=O},44675:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var o=n(82858),r=n(22765),i=n(58312);function a(){const e=(0,o.A)(r.A);return e[i.A]||e}},64087:(e,t,n)=>{n.d(t,{M:()=>x});var o=n(44586),r=n(31729),i=n(48440),a=n(80421),s=n(57416),l=n(18441),c=n(68999),d=n(43581),u=n(63051),h=n(46831),v=n(28968),p=n(15993),m=n(13407),f=n(67512),A=n(96540),g=n(74848);const x=(0,A.memo)((()=>{const[e,t]=(0,A.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,A.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),x=(0,A.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),j=(0,A.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),y=(0,A.useCallback)((e=>{let n;const o=e.target.value;n="string"==typeof o?parseInt(o):o,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),b=(0,A.useCallback)((e=>{let n=[];console.log(e.target.value);const o=e.target.value;n="string"==typeof o?o.split(",").map((e=>parseInt(e))):o,t((e=>({...e,authorIds:n})))}),[]),{i18n:k}=(0,o.A)(),S=(0,A.useMemo)((()=>"zh"==k.currentLocale||"zh_cn"==k.currentLocale||"zh_CN"==k.currentLocale),[k.currentLocale]),[w,C]=(0,A.useState)(!1),I=(0,A.useCallback)((()=>{C(!0)}),[]),N=(0,A.useCallback)((()=>{C(!1)}),[]);return(0,g.jsxs)(s.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,g.jsxs)(c.A,{spacing:2,children:[(0,g.jsx)("h1",{children:"Book Form"}),(0,g.jsx)(d.A,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,g.jsx)(d.A,{label:"Edition",type:"number",value:e.edition,onChange:x}),(0,g.jsx)(d.A,{label:"Price",type:"number",value:e.price,onChange:j}),(0,g.jsxs)(r.A,{fullWidth:!0,children:[(0,g.jsx)(i.A,{id:"store-select-label",children:"Store"}),(0,g.jsxs)(l.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:y,children:[(0,g.jsx)(a.A,{value:-1,children:"--NONE--"}),(0,g.jsx)(a.A,{value:1,children:"O'REILLY"}),(0,g.jsx)(a.A,{value:2,children:"MANNING"})]})]}),(0,g.jsxs)(r.A,{fullWidth:!0,children:[(0,g.jsx)(i.A,{id:"author-multi-select-label",children:"Authors"}),(0,g.jsxs)(l.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:b,children:[(0,g.jsx)(a.A,{value:1,children:"Eve Procello"}),(0,g.jsx)(a.A,{value:2,children:"Alex Banks"}),(0,g.jsx)(a.A,{value:3,children:"Dan Vanderkam"}),(0,g.jsx)(a.A,{value:4,children:"Boris Cherny"}),(0,g.jsx)(a.A,{value:5,children:"Samer Buna"})]})]}),(0,g.jsx)(r.A,{children:(0,g.jsx)(f.A,{onClick:I,variant:"contained",children:S?"\u63d0\u4ea4":"Submit"})})]}),(0,g.jsxs)(u.A,{open:w,onClose:N,children:[(0,g.jsx)(h.A,{children:S?"\u4fe1\u606f":"Info"}),(0,g.jsx)(v.A,{children:(0,g.jsx)(m.A,{children:S?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,g.jsx)(p.A,{children:(0,g.jsx)(f.A,{onClick:N,children:"\u5173\u95ed"})})]})]})}))},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);