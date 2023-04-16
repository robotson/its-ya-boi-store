(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3321:function(e,t,o){"use strict";o.d(t,{Z:function(){return I}});var n=o(3366),a=o(7462),i=o(7294),r=o(6010),l=o(7925),s=o(4780),d=o(1796),c=o(948),u=o(1657),p=o(7739),h=o(8216),v=o(1588),m=o(4867);function x(e){return(0,m.Z)("MuiButton",e)}let g=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=i.createContext({});var f=o(5893);let S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>{let{color:t,disableElevation:o,fullWidth:n,size:i,variant:r,classes:l}=e,d={root:["root",r,`${r}${(0,h.Z)(t)}`,`size${(0,h.Z)(i)}`,`${r}Size${(0,h.Z)(i)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(i)}`]},c=(0,s.Z)(d,x,l);return(0,a.Z)({},l,c)},y=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,h.Z)(o.color)}`],t[`size${(0,h.Z)(o.size)}`],t[`${o.variant}Size${(0,h.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,n;return(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,a.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(n=e.palette).getContrastText)?void 0:o.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),C=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))),$=i.forwardRef(function(e,t){let o=i.useContext(b),s=(0,l.Z)(o,e),d=(0,u.Z)({props:s,name:"MuiButton"}),{children:c,color:p="primary",component:h="button",className:v,disabled:m=!1,disableElevation:x=!1,disableFocusRipple:g=!1,endIcon:y,focusVisibleClassName:$,fullWidth:I=!1,size:R="medium",startIcon:k,type:j,variant:_="text"}=d,E=(0,n.Z)(d,S),N=(0,a.Z)({},d,{color:p,component:h,disabled:m,disableElevation:x,disableFocusRipple:g,fullWidth:I,size:R,type:j,variant:_}),M=Z(N),T=k&&(0,f.jsx)(C,{className:M.startIcon,ownerState:N,children:k}),W=y&&(0,f.jsx)(w,{className:M.endIcon,ownerState:N,children:y});return(0,f.jsxs)(z,(0,a.Z)({ownerState:N,className:(0,r.Z)(o.className,M.root,v),component:h,disabled:m,focusRipple:!g,focusVisibleClassName:(0,r.Z)(M.focusVisible,$),ref:t,type:j},E,{classes:M,children:[T,c,W]}))});var I=$},2734:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}}),o(7294);var n=o(6682),a=o(247);function i(){let e=(0,n.Z)(a.Z);return e}},5557:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(1817)}])},1817:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return P},default:function(){return O}});var n=o(5893),a=o(9008),i=o.n(a),r=o(7294),l=o(2734),s=o(6242),d=o(3965),c=o(4267),u=o(3366),p=o(7462),h=o(6010),v=o(4780),m=o(948),x=o(1657),g=o(1588),b=o(4867);function f(e){return(0,b.Z)("MuiCardActions",e)}(0,g.Z)("MuiCardActions",["root","spacing"]);let S=["disableSpacing","className"],Z=e=>{let{classes:t,disableSpacing:o}=e;return(0,v.Z)({root:["root",!o&&"spacing"]},f,t)},y=(0,m.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,p.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),z=r.forwardRef(function(e,t){let o=(0,x.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:i}=o,r=(0,u.Z)(o,S),l=(0,p.Z)({},o,{disableSpacing:a}),s=Z(l);return(0,n.jsx)(y,(0,p.Z)({className:(0,h.Z)(s.root,i),ownerState:l,ref:t},r))});var C=o(7357),w=o(5861),$=o(6740),I=o.n($),R=o(8360),k=o(3321),j=o(1163);let _=e=>{let{product:t}=e,o=(0,j.useRouter)(),{cartContext:a,setCartContext:i}=(0,R.i)(),[l,s]=(0,r.useState)(void 0!==a.find(e=>e.id===t.id)),[d,c]=(0,r.useState)(()=>l?(t=a.find(e=>e.id===t.id)).quantity:0);(0,r.useEffect)(()=>{let e=a.find(e=>e.id===t.id);e&&(s(!0),c(e.quantity))},[a,t.id]);let u=()=>{l?o.push("cart"):(i(e=>[...e,{id:t.id,name:t.name,price:t.price,quantity:1}]),s(!0),c(1))};return(0,n.jsx)(k.Z,{sx:{width:"100%"},variant:l?"outlined":"contained",onClick:u,children:l?"IN YOUR CART (".concat(d,")"):"ADD TO CART"})},E=e=>{let{product:t}=e,o=(0,l.Z)();return(0,n.jsxs)(s.Z,{variant:"outlined",sx:{minWidth:275},children:[(0,n.jsx)(d.Z,{component:"img",sx:{objectFit:"contain"},image:"images/".concat(t.local_image),title:t.name}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(w.Z,{variant:"h6",sx:{fontWeight:"bold",color:o.palette.primary.dark},children:t.name}),(0,n.jsxs)(w.Z,{variant:"subtitle1",children:[I()(t.price.unit_amount,{fromCents:!0}).format()," each"]}),(0,n.jsxs)(w.Z,{variant:"subtitle2",sx:{color:"grey"},children:["plus ",I()(t.price.metadata.us_ship_rate,{fromCents:!0}).format()," Shipping"]})]}),(0,n.jsx)(z,{p:2,children:(0,n.jsx)(C.Z,{textAlign:"center",width:"100%",p:1,children:(0,n.jsx)(_,{product:t})})})]})};var N=o(3156),M=o(6886),T=o(9854),W=o.n(T),P=!0;function O(e){let{allProducts:t}=e;return(0,l.Z)(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"it's ya continuously integrating boi webstore"})}),(0,n.jsx)(N.Z,{maxWidth:"lg",children:(0,n.jsx)(M.ZP,{className:W().container,container:!0,spacing:3,children:t.map(e=>(0,n.jsx)(M.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(E,{product:e})},e.id))})})]})}},9854:function(e){e.exports={container:"Home_container__Ennsq"}}},function(e){e.O(0,[40,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);