"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6501],{71611:(e,t,n)=>{n.d(t,{Q:()=>d});var o=n(58168),r=n(98587),i=n(54871),a=n(54856),s=n(74311),l=n(45489);const c=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function d(e){var t;const{elementType:n,externalSlotProps:d,ownerState:u,skipResolvingSlotProps:p=!1}=e,h=(0,r.A)(e,c),m=p?{}:(0,l.Y)(d,u),{props:f,internalRef:v}=(0,s.p)((0,o.A)({},h,{externalSlotProps:m})),x=(0,i.A)(v,null==m?void 0:m.ref,null==(t=e.additionalProps)?void 0:t.ref);return(0,a.X)(n,(0,o.A)({},f,{ref:x}),u)}},49993:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(98587),r=n(58168),i=n(96540),a=n(54533),s=n(64111),l=n(11848),c=n(3541),d=n(20973),u=n(27553),p=n(17245);function h(e){return(0,p.Ay)("MuiBackdrop",e)}(0,u.A)("MuiBackdrop",["root","invisible"]);var m=n(74848);const f=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],v=(0,l.Ay)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>(0,r.A)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"}))),x=i.forwardRef((function(e,t){var n,i,l;const u=(0,c.A)({props:e,name:"MuiBackdrop"}),{children:p,className:x,component:g="div",components:b={},componentsProps:A={},invisible:y=!1,open:E,slotProps:S={},slots:k={},TransitionComponent:w=d.A,transitionDuration:R}=u,C=(0,o.A)(u,f),T=(0,r.A)({},u,{component:g,invisible:y}),P=(e=>{const{classes:t,invisible:n}=e,o={root:["root",n&&"invisible"]};return(0,s.A)(o,h,t)})(T),M=null!=(n=S.root)?n:A.root;return(0,m.jsx)(w,(0,r.A)({in:E,timeout:R},C,{children:(0,m.jsx)(v,(0,r.A)({"aria-hidden":!0},M,{as:null!=(i=null!=(l=k.root)?l:b.Root)?i:g,className:(0,a.A)(P.root,x,null==M?void 0:M.className),ownerState:(0,r.A)({},T,null==M?void 0:M.ownerState),classes:P,ref:t,children:p}))}))}))},67512:(e,t,n)=>{n.d(t,{A:()=>C});var o=n(98587),r=n(58168),i=n(96540),a=n(54533),s=n(46311),l=n(64111),c=n(771),d=n(11848),u=n(39770),p=n(3541),h=n(52957),m=n(28466),f=n(27553),v=n(17245);function x(e){return(0,v.Ay)("MuiButton",e)}const g=(0,f.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const b=i.createContext({});const A=i.createContext(void 0);var y=n(74848);const E=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,r.A)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),k=(0,d.Ay)(h.A,{shouldForwardProp:e=>(0,u.A)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,m.A)(n.color)}`],t[`size${(0,m.A)(n.size)}`],t[`${n.variant}Size${(0,m.A)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,o;const i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],a="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,r.A)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.A)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:a,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.A)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,r.A)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,r.A)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.X4)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(o=e.palette).getContrastText)?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}})),w=(0,d.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,m.A)(n.size)}`]]}})((({ownerState:e})=>(0,r.A)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),R=(0,d.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,m.A)(n.size)}`]]}})((({ownerState:e})=>(0,r.A)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e)))),C=i.forwardRef((function(e,t){const n=i.useContext(b),c=i.useContext(A),d=(0,s.A)(n,e),u=(0,p.A)({props:d,name:"MuiButton"}),{children:h,color:f="primary",component:v="button",className:g,disabled:S=!1,disableElevation:C=!1,disableFocusRipple:T=!1,endIcon:P,focusVisibleClassName:M,fullWidth:N=!1,size:W="medium",startIcon:I,type:B,variant:z="text"}=u,$=(0,o.A)(u,E),D=(0,r.A)({},u,{color:f,component:v,disabled:S,disableElevation:C,disableFocusRipple:T,fullWidth:N,size:W,type:B,variant:z}),O=(e=>{const{color:t,disableElevation:n,fullWidth:o,size:i,variant:a,classes:s}=e,c={root:["root",a,`${a}${(0,m.A)(t)}`,`size${(0,m.A)(i)}`,`${a}Size${(0,m.A)(i)}`,`color${(0,m.A)(t)}`,n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,m.A)(i)}`],endIcon:["icon","endIcon",`iconSize${(0,m.A)(i)}`]},d=(0,l.A)(c,x,s);return(0,r.A)({},s,d)})(D),F=I&&(0,y.jsx)(w,{className:O.startIcon,ownerState:D,children:I}),L=P&&(0,y.jsx)(R,{className:O.endIcon,ownerState:D,children:P}),j=c||"";return(0,y.jsxs)(k,(0,r.A)({ownerState:D,className:(0,a.A)(n.className,O.root,g,j),component:v,disabled:S,focusRipple:!T,focusVisibleClassName:(0,a.A)(O.focusVisible,M),ref:t,type:B},$,{classes:O,children:[F,h,L]}))}))},63051:(e,t,n)=>{n.d(t,{A:()=>T});var o=n(98587),r=n(58168),i=n(96540),a=n(54533),s=n(64111),l=n(14953),c=n(28466),d=n(92616),u=n(20973),p=n(57416),h=n(3541),m=n(11848),f=n(27553),v=n(17245);function x(e){return(0,v.Ay)("MuiDialog",e)}const g=(0,f.A)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var b=n(28102),A=n(49993),y=n(44675),E=n(74848);const S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],k=(0,m.Ay)(A.A,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),w=(0,m.Ay)(d.A,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),R=(0,m.Ay)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.container,t[`scroll${(0,c.A)(n.scroll)}`]]}})((({ownerState:e})=>(0,r.A)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),C=(0,m.Ay)(p.A,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`scrollPaper${(0,c.A)(n.scroll)}`],t[`paperWidth${(0,c.A)(String(n.maxWidth))}`],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})((({theme:e,ownerState:t})=>(0,r.A)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${g.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${g.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${g.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),T=i.forwardRef((function(e,t){const n=(0,h.A)({props:e,name:"MuiDialog"}),d=(0,y.A)(),m={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":f,"aria-labelledby":v,BackdropComponent:g,BackdropProps:A,children:T,className:P,disableEscapeKeyDown:M=!1,fullScreen:N=!1,fullWidth:W=!1,maxWidth:I="sm",onBackdropClick:B,onClose:z,open:$,PaperComponent:D=p.A,PaperProps:O={},scroll:F="paper",TransitionComponent:L=u.A,transitionDuration:j=m,TransitionProps:K}=n,V=(0,o.A)(n,S),U=(0,r.A)({},n,{disableEscapeKeyDown:M,fullScreen:N,fullWidth:W,maxWidth:I,scroll:F}),X=(e=>{const{classes:t,scroll:n,maxWidth:o,fullWidth:r,fullScreen:i}=e,a={root:["root"],container:["container",`scroll${(0,c.A)(n)}`],paper:["paper",`paperScroll${(0,c.A)(n)}`,`paperWidth${(0,c.A)(String(o))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return(0,s.A)(a,x,t)})(U),Y=i.useRef(),H=(0,l.A)(v),q=i.useMemo((()=>({titleId:H})),[H]);return(0,E.jsx)(w,(0,r.A)({className:(0,a.A)(X.root,P),closeAfterTransition:!0,components:{Backdrop:k},componentsProps:{backdrop:(0,r.A)({transitionDuration:j,as:g},A)},disableEscapeKeyDown:M,onClose:z,open:$,ref:t,onClick:e=>{Y.current&&(Y.current=null,B&&B(e),z&&z(e,"backdropClick"))},ownerState:U},V,{children:(0,E.jsx)(L,(0,r.A)({appear:!0,in:$,timeout:j,role:"presentation"},K,{children:(0,E.jsx)(R,{className:(0,a.A)(X.container),onMouseDown:e=>{Y.current=e.target===e.currentTarget},ownerState:U,children:(0,E.jsx)(C,(0,r.A)({as:D,elevation:24,role:"dialog","aria-describedby":f,"aria-labelledby":H},O,{className:(0,a.A)(X.paper,O.className),ownerState:U,children:(0,E.jsx)(b.A.Provider,{value:q,children:T})}))})}))}))}))},28102:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(96540).createContext({})},28968:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(98587),r=n(58168),i=n(96540),a=n(54533),s=n(64111),l=n(11848),c=n(3541),d=n(27553),u=n(17245);function p(e){return(0,u.Ay)("MuiDialogContent",e)}(0,d.A)("MuiDialogContent",["root","dividers"]);var h=n(61435),m=n(74848);const f=["className","dividers"],v=(0,l.Ay)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})((({theme:e,ownerState:t})=>(0,r.A)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${h.A.root} + &`]:{paddingTop:0}}))),x=i.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiDialogContent"}),{className:i,dividers:l=!1}=n,d=(0,o.A)(n,f),u=(0,r.A)({},n,{dividers:l}),h=(e=>{const{classes:t,dividers:n}=e,o={root:["root",n&&"dividers"]};return(0,s.A)(o,p,t)})(u);return(0,m.jsx)(v,(0,r.A)({className:(0,a.A)(h.root,i),ownerState:u,ref:t},d))}))},61435:(e,t,n)=>{n.d(t,{A:()=>a,t:()=>i});var o=n(27553),r=n(17245);function i(e){return(0,r.Ay)("MuiDialogTitle",e)}const a=(0,o.A)("MuiDialogTitle",["root"])},20973:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(58168),r=n(98587),i=n(96540),a=n(12062),s=n(44675),l=n(35186),c=n(96852),d=n(74848);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],p={entering:{opacity:1},entered:{opacity:1}},h=i.forwardRef((function(e,t){const n=(0,s.A)(),h={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:m,appear:f=!0,children:v,easing:x,in:g,onEnter:b,onEntered:A,onEntering:y,onExit:E,onExited:S,onExiting:k,style:w,timeout:R=h,TransitionComponent:C=a.Ay}=e,T=(0,r.A)(e,u),P=i.useRef(null),M=(0,c.A)(P,v.ref,t),N=e=>t=>{if(e){const n=P.current;void 0===t?e(n):e(n,t)}},W=N(y),I=N(((e,t)=>{(0,l.q)(e);const o=(0,l.c)({style:w,timeout:R,easing:x},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",o),e.style.transition=n.transitions.create("opacity",o),b&&b(e,t)})),B=N(A),z=N(k),$=N((e=>{const t=(0,l.c)({style:w,timeout:R,easing:x},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),E&&E(e)})),D=N(S);return(0,d.jsx)(C,(0,o.A)({appear:f,in:g,nodeRef:P,onEnter:I,onEntered:B,onEntering:W,onExit:$,onExited:D,onExiting:z,addEndListener:e=>{m&&m(P.current,e)},timeout:R},T,{children:(e,t)=>i.cloneElement(v,(0,o.A)({style:(0,o.A)({opacity:0,visibility:"exited"!==e||g?void 0:"hidden"},p[e],w,v.props.style),ref:M},t))}))}))},92616:(e,t,n)=>{n.d(t,{A:()=>j});var o=n(98587),r=n(58168),i=n(96540),a=n(54533),s=n(71611),l=n(54871),c=n(86249),d=n(66111),u=n(9941),p=n(34718),h=n(61489),m=n(36809);function f(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function v(e){return parseInt((0,h.A)(e).getComputedStyle(e).paddingRight,10)||0}function x(e,t,n,o,r){const i=[t,n,...o];[].forEach.call(e.children,(e=>{const t=-1===i.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&f(e,r)}))}function g(e,t){let n=-1;return e.some(((e,o)=>!!t(e)&&(n=o,!0))),n}function b(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,c.A)(e);return t.body===e?(0,h.A)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){const e=(0,m.A)((0,c.A)(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${v(o)+e}px`;const t=(0,c.A)(o).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${v(t)+e}px`}))}let e;if(o.parentNode instanceof DocumentFragment)e=(0,c.A)(o).body;else{const t=o.parentElement,n=(0,h.A)(o);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:o}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}const A=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&f(e.modalRef,!1);const o=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);x(t,e.mount,e.modalRef,o,!0);const r=g(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:o}),n)}mount(e,t){const n=g(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[n];o.restore||(o.restore=b(o,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const o=g(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&f(e.modalRef,t),x(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{const e=r.modals[r.modals.length-1];e.modalRef&&f(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};function y(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:a=A,closeAfterTransition:s=!1,onTransitionEnter:h,onTransitionExited:m,children:v,onClose:x,open:g,rootRef:b}=e,y=i.useRef({}),E=i.useRef(null),S=i.useRef(null),k=(0,l.A)(S,b),[w,R]=i.useState(!g),C=function(e){return!!e&&e.props.hasOwnProperty("in")}(v);let T=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(T=!1);const P=()=>(y.current.modalRef=S.current,y.current.mount=E.current,y.current),M=()=>{a.mount(P(),{disableScrollLock:o}),S.current&&(S.current.scrollTop=0)},N=(0,d.A)((()=>{const e=function(e){return"function"==typeof e?e():e}(t)||(0,c.A)(E.current).body;a.add(P(),e),S.current&&M()})),W=i.useCallback((()=>a.isTopModal(P())),[a]),I=(0,d.A)((e=>{E.current=e,e&&(g&&W()?M():S.current&&f(S.current,T))})),B=i.useCallback((()=>{a.remove(P(),T)}),[T,a]);i.useEffect((()=>()=>{B()}),[B]),i.useEffect((()=>{g?N():C&&s||B()}),[g,B,C,s,N]);const z=e=>t=>{var o;null==(o=e.onKeyDown)||o.call(e,t),"Escape"===t.key&&229!==t.which&&W()&&(n||(t.stopPropagation(),x&&x(t,"escapeKeyDown")))},$=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&x&&x(t,"backdropClick")};return{getRootProps:(t={})=>{const n=(0,p.h)(e);delete n.onTransitionEnter,delete n.onTransitionExited;const o=(0,r.A)({},n,t);return(0,r.A)({role:"presentation"},o,{onKeyDown:z(o),ref:k})},getBackdropProps:(e={})=>{const t=e;return(0,r.A)({"aria-hidden":!0},t,{onClick:$(t),open:g})},getTransitionProps:()=>({onEnter:(0,u.A)((()=>{R(!1),h&&h()}),null==v?void 0:v.props.onEnter),onExited:(0,u.A)((()=>{R(!0),m&&m(),s&&B()}),null==v?void 0:v.props.onExited)}),rootRef:k,portalRef:I,isTopModal:W,exited:w,hasTransition:C}}var E=n(64111),S=n(74848);const k=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function w(e){const t=[],n=[];return Array.from(e.querySelectorAll(k)).forEach(((e,o)=>{const r=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===r?t.push(e):n.push({documentOrder:o,tabIndex:r,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function R(){return!0}function C(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:r=!1,getTabbable:a=w,isEnabled:s=R,open:d}=e,u=i.useRef(!1),p=i.useRef(null),h=i.useRef(null),m=i.useRef(null),f=i.useRef(null),v=i.useRef(!1),x=i.useRef(null),g=(0,l.A)(t.ref,x),b=i.useRef(null);i.useEffect((()=>{d&&x.current&&(v.current=!n)}),[n,d]),i.useEffect((()=>{if(!d||!x.current)return;const e=(0,c.A)(x.current);return x.current.contains(e.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),v.current&&x.current.focus()),()=>{r||(m.current&&m.current.focus&&(u.current=!0,m.current.focus()),m.current=null)}}),[d]),i.useEffect((()=>{if(!d||!x.current)return;const e=(0,c.A)(x.current),t=t=>{b.current=t,!o&&s()&&"Tab"===t.key&&e.activeElement===x.current&&t.shiftKey&&(u.current=!0,h.current&&h.current.focus())},n=()=>{const t=x.current;if(null===t)return;if(!e.hasFocus()||!s()||u.current)return void(u.current=!1);if(t.contains(e.activeElement))return;if(o&&e.activeElement!==p.current&&e.activeElement!==h.current)return;if(e.activeElement!==f.current)f.current=null;else if(null!==f.current)return;if(!v.current)return;let n=[];if(e.activeElement!==p.current&&e.activeElement!==h.current||(n=a(x.current)),n.length>0){var r,i;const e=Boolean((null==(r=b.current)?void 0:r.shiftKey)&&"Tab"===(null==(i=b.current)?void 0:i.key)),t=n[0],o=n[n.length-1];"string"!=typeof t&&"string"!=typeof o&&(e?o.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,o,r,s,d,a]);const A=e=>{null===m.current&&(m.current=e.relatedTarget),v.current=!0};return(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)("div",{tabIndex:d?0:-1,onFocus:A,ref:p,"data-testid":"sentinelStart"}),i.cloneElement(t,{ref:g,onFocus:e=>{null===m.current&&(m.current=e.relatedTarget),v.current=!0,f.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,S.jsx)("div",{tabIndex:d?0:-1,onFocus:A,ref:h,"data-testid":"sentinelEnd"})]})}var T=n(40961),P=n(50173),M=n(13721);const N=i.forwardRef((function(e,t){const{children:n,container:o,disablePortal:r=!1}=e,[a,s]=i.useState(null),c=(0,l.A)(i.isValidElement(n)?n.ref:null,t);if((0,P.A)((()=>{r||s(function(e){return"function"==typeof e?e():e}(o)||document.body)}),[o,r]),(0,P.A)((()=>{if(a&&!r)return(0,M.A)(t,a),()=>{(0,M.A)(t,null)}}),[t,a,r]),r){if(i.isValidElement(n)){const e={ref:c};return i.cloneElement(n,e)}return(0,S.jsx)(i.Fragment,{children:n})}return(0,S.jsx)(i.Fragment,{children:a?T.createPortal(n,a):a})}));var W=n(11848),I=n(3541),B=n(49993),z=n(27553),$=n(17245);function D(e){return(0,$.Ay)("MuiModal",e)}(0,z.A)("MuiModal",["root","hidden","backdrop"]);const O=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],F=(0,W.Ay)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.A)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),L=(0,W.Ay)(B.A,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),j=i.forwardRef((function(e,t){var n,l,c,d,u,p;const h=(0,I.A)({name:"MuiModal",props:e}),{BackdropComponent:m=L,BackdropProps:f,className:v,closeAfterTransition:x=!1,children:g,container:b,component:A,components:k={},componentsProps:w={},disableAutoFocus:R=!1,disableEnforceFocus:T=!1,disableEscapeKeyDown:P=!1,disablePortal:M=!1,disableRestoreFocus:W=!1,disableScrollLock:B=!1,hideBackdrop:z=!1,keepMounted:$=!1,onBackdropClick:j,open:K,slotProps:V,slots:U}=h,X=(0,o.A)(h,O),Y=(0,r.A)({},h,{closeAfterTransition:x,disableAutoFocus:R,disableEnforceFocus:T,disableEscapeKeyDown:P,disablePortal:M,disableRestoreFocus:W,disableScrollLock:B,hideBackdrop:z,keepMounted:$}),{getRootProps:H,getBackdropProps:q,getTransitionProps:G,portalRef:Q,isTopModal:_,exited:J,hasTransition:Z}=y((0,r.A)({},Y,{rootRef:t})),ee=(0,r.A)({},Y,{exited:J}),te=(e=>{const{open:t,exited:n,classes:o}=e,r={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,E.A)(r,D,o)})(ee),ne={};if(void 0===g.props.tabIndex&&(ne.tabIndex="-1"),Z){const{onEnter:e,onExited:t}=G();ne.onEnter=e,ne.onExited=t}const oe=null!=(n=null!=(l=null==U?void 0:U.root)?l:k.Root)?n:F,re=null!=(c=null!=(d=null==U?void 0:U.backdrop)?d:k.Backdrop)?c:m,ie=null!=(u=null==V?void 0:V.root)?u:w.root,ae=null!=(p=null==V?void 0:V.backdrop)?p:w.backdrop,se=(0,s.Q)({elementType:oe,externalSlotProps:ie,externalForwardedProps:X,getSlotProps:H,additionalProps:{ref:t,as:A},ownerState:ee,className:(0,a.A)(v,null==ie?void 0:ie.className,null==te?void 0:te.root,!ee.open&&ee.exited&&(null==te?void 0:te.hidden))}),le=(0,s.Q)({elementType:re,externalSlotProps:ae,additionalProps:f,getSlotProps:e=>q((0,r.A)({},e,{onClick:t=>{j&&j(t),null!=e&&e.onClick&&e.onClick(t)}})),className:(0,a.A)(null==ae?void 0:ae.className,null==f?void 0:f.className,null==te?void 0:te.backdrop),ownerState:ee});return $||K||Z&&!J?(0,S.jsx)(N,{ref:Q,container:b,disablePortal:M,children:(0,S.jsxs)(oe,(0,r.A)({},se,{children:[!z&&m?(0,S.jsx)(re,(0,r.A)({},le)):null,(0,S.jsx)(C,{disableEnforceFocus:T,disableAutoFocus:R,disableRestoreFocus:W,isEnabled:_,open:K,children:i.cloneElement(g,ne)})]}))}):null}))},47859:(e,t,n)=>{n.d(t,{A:()=>A});var o=n(98587),r=n(58168),i=n(96540),a=n(54533),s=n(39599),l=n(64111),c=n(11848),d=n(3541),u=n(28466),p=n(27553),h=n(17245);function m(e){return(0,h.Ay)("MuiTypography",e)}(0,p.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(74848);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.A)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.A)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=i.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiTypography"}),i=(e=>b[e]||e)(n.color),c=(0,s.A)((0,r.A)({},n,{color:i})),{align:p="inherit",className:h,component:A,gutterBottom:y=!1,noWrap:E=!1,paragraph:S=!1,variant:k="body1",variantMapping:w=g}=c,R=(0,o.A)(c,v),C=(0,r.A)({},c,{align:p,color:i,className:h,component:A,gutterBottom:y,noWrap:E,paragraph:S,variant:k,variantMapping:w}),T=A||(S?"p":w[k]||g[k])||"span",P=(e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:r,variant:i,classes:a}=e,s={root:["root",i,"inherit"!==e.align&&`align${(0,u.A)(t)}`,n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,l.A)(s,m,a)})(C);return(0,f.jsx)(x,(0,r.A)({as:T,ref:t,ownerState:C,className:(0,a.A)(P.root,h)},R))}))},35186:(e,t,n)=>{n.d(t,{c:()=>r,q:()=>o});const o=e=>e.scrollTop;function r(e,t){var n,o;const{timeout:r,easing:i,style:a={}}=e;return{duration:null!=(n=a.transitionDuration)?n:"number"==typeof r?r:r[t.mode]||0,easing:null!=(o=a.transitionTimingFunction)?o:"object"==typeof i?i[t.mode]:i,delay:a.transitionDelay}}},1935:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(84965).A},94346:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(96540);const r=function(e,t){var n,r;return o.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(r=e.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)}},96248:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(86249).A},93749:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(61489).A},78478:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(96540);const r=function({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=o.useRef(void 0!==e),[a,s]=o.useState(t);return[i?e:a,o.useCallback((e=>{i||s(e)}),[])]}},2778:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(50173).A},9941:(e,t,n)=>{function o(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}n.d(t,{A:()=>o})},84965:(e,t,n)=>{function o(e,t=166){let n;function o(...o){clearTimeout(n),n=setTimeout((()=>{e.apply(this,o)}),t)}return o.clear=()=>{clearTimeout(n)},o}n.d(t,{A:()=>o})},36809:(e,t,n)=>{function o(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}n.d(t,{A:()=>o})},86249:(e,t,n)=>{function o(e){return e&&e.ownerDocument||document}n.d(t,{A:()=>o})},61489:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(86249);function r(e){return(0,o.A)(e).defaultView||window}},14953:(e,t,n)=>{var o;n.d(t,{A:()=>s});var r=n(96540);let i=0;const a=(o||(o=n.t(r,2)))["useId".toString()];function s(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,n]=r.useState(e),o=e||t;return r.useEffect((()=>{null==t&&(i+=1,n(`mui-${i}`))}),[t]),o}(e)}},12062:(e,t,n)=>{n.d(t,{Ay:()=>v});var o=n(98587),r=n(42892),i=n(96540),a=n(40961);const s=!1;var l=n(17241),c="unmounted",d="exited",u="entering",p="entered",h="exiting",m=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(r=d,o.appearStatus=u):r=p:r=t.unmountOnExit||t.mountOnEnter?c:d,o.state={status:r},o.nextCallback=null,o}(0,r.A)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===c?{status:d}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==u&&n!==p&&(t=u):n!==u&&n!==p||(t=h)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===u){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[a.findDOMNode(this),o],i=r[0],l=r[1],c=this.getTimeouts(),d=o?c.appear:c.enter;!e&&!n||s?this.safeSetState({status:p},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,l),this.safeSetState({status:u},(function(){t.props.onEntering(i,l),t.onTransitionEnd(d,(function(){t.safeSetState({status:p},(function(){t.props.onEntered(i,l)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:a.findDOMNode(this);t&&!s?(this.props.onExit(o),this.safeSetState({status:h},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],s=r[1];this.props.addEndListener(i,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===c)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,o.A)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(l.A.Provider,{value:null},"function"==typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function f(){}m.contextType=l.A,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},m.UNMOUNTED=c,m.EXITED=d,m.ENTERING=u,m.ENTERED=p,m.EXITING=h;const v=m}}]);