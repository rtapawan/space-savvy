(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{9237:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(2988),o=r(2265),a=r(6309),l=r(6132),i=r(1169),c=r(7437);function s(e){let{options:t,CacheProvider:r=l.C,children:s}=e,[u]=o.useState(()=>{var e;let r=(0,a.Z)((0,n.Z)({},t,{key:null!=(e=null==t?void 0:t.key)?e:"mui"}));r.compat=!0;let o=r.insert,l=[];return r.insert=function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];null!=t&&t.enableCssLayer&&(n[1].styles="@layer mui {".concat(n[1].styles,"}"));let[i,c]=n;return void 0===r.inserted[c.name]&&l.push({name:c.name,isGlobal:!i}),o(...n)},{cache:r,flush:()=>{let e=l;return l=[],e}}});return(0,i.useServerInsertedHTML)(()=>{let e=u.flush();if(0===e.length)return null;let r="",n=u.cache.key,a=[];return e.forEach(e=>{let{name:t,isGlobal:o}=e,l=u.cache.inserted[t];"boolean"!=typeof l&&(o?a.push({name:t,style:l}):(r+=l,n+=" ".concat(t)))}),(0,c.jsxs)(o.Fragment,{children:[a.map(e=>{let{name:r,style:n}=e;return(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":"".concat(u.cache.key,"-global ").concat(r),dangerouslySetInnerHTML:{__html:n}},r)}),r&&(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":n,dangerouslySetInnerHTML:{__html:r}})]})}),(0,c.jsx)(r,{value:u.cache,children:s})}},7735:function(e,t,r){"use strict";r.r(t),r.d(t,{Experimental_CssVarsProvider:function(){return eP},StyledEngineProvider:function(){return Y.Z},THEME_ID:function(){return o.Z},ThemeProvider:function(){return X},adaptV4Theme:function(){return d},alpha:function(){return C},createMuiTheme:function(){return A.A},createStyles:function(){return _},createTheme:function(){return A.Z},css:function(){return Z.iv},darken:function(){return k},decomposeColor:function(){return g},duration:function(){return M.x9},easing:function(){return M.Ui},emphasize:function(){return w},experimentalStyled:function(){return L.ZP},experimental_extendTheme:function(){return eE},experimental_sx:function(){return eD},getContrastRatio:function(){return v},getInitColorSchemeScript:function(){return eL},getLuminance:function(){return b},getOverlayAlpha:function(){return ex.Z},hexToRgb:function(){return f},hslToRgb:function(){return S},keyframes:function(){return Z.F4},lighten:function(){return x},makeStyles:function(){return ee},private_createMixins:function(){return eq.Z},private_createTypography:function(){return eF.Z},private_excludeVariablesFromRoot:function(){return ej},recomposeColor:function(){return p},responsiveFontSizes:function(){return j},rgbToHex:function(){return y},shouldSkipGeneratingVar:function(){return ek},styled:function(){return L.ZP},unstable_createMuiStrictModeTheme:function(){return B},unstable_getUnit:function(){return E},unstable_toUnitless:function(){return F},useColorScheme:function(){return eO},useTheme:function(){return P.Z},useThemeProps:function(){return O.Z},withStyles:function(){return et},withTheme:function(){return er}});var n=r(2414),o=r(2737),a=r(2988),l=r(3950),i=r(6669),c=r(9329);let s=["defaultProps","mixins","overrides","palette","props","styleOverrides"],u=["type","mode"];function d(e){let{defaultProps:t={},mixins:r={},overrides:n={},palette:o={},props:d={},styleOverrides:m={}}=e,h=(0,l.Z)(e,s),f=(0,a.Z)({},h,{components:{}});Object.keys(t).forEach(e=>{let r=f.components[e]||{};r.defaultProps=t[e],f.components[e]=r}),Object.keys(d).forEach(e=>{let t=f.components[e]||{};t.defaultProps=d[e],f.components[e]=t}),Object.keys(m).forEach(e=>{let t=f.components[e]||{};t.styleOverrides=m[e],f.components[e]=t}),Object.keys(n).forEach(e=>{let t=f.components[e]||{};t.styleOverrides=n[e],f.components[e]=t}),f.spacing=(0,i.Z)(e.spacing);let g=(0,c.Z)(e.breakpoints||{}),p=f.spacing;f.mixins=(0,a.Z)({gutters:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.Z)({paddingLeft:p(2),paddingRight:p(2)},e,{[g.up("sm")]:(0,a.Z)({paddingLeft:p(3),paddingRight:p(3)},e[g.up("sm")])})}},r);let{type:y,mode:S}=o,b=(0,l.Z)(o,u),v=S||y||"light";return f.palette=(0,a.Z)({text:{hint:"dark"===v?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.38)"},mode:v,type:v},b),f}var m=r(7609);function h(e,t=0,r=1){return(0,m.Z)(e,t,r)}function f(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map(e=>e+e)),r?`rgb${4===r.length?"a":""}(${r.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function g(e){let t;if(e.type)return e;if("#"===e.charAt(0))return g(f(e));let r=e.indexOf("("),o=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(o))throw Error((0,n.Z)(9,e));let a=e.substring(r+1,e.length-1);if("color"===o){if(t=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,n.Z)(10,t))}else a=a.split(",");return{type:o,values:a=a.map(e=>parseFloat(e)),colorSpace:t}}function p(e){let{type:t,colorSpace:r}=e,{values:n}=e;return -1!==t.indexOf("rgb")?n=n.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`,`${t}(${n})`}function y(e){if(0===e.indexOf("#"))return e;let{values:t}=g(e);return`#${t.map((e,t)=>(function(e){let t=e.toString(16);return 1===t.length?`0${t}`:t})(3===t?Math.round(255*e):e)).join("")}`}function S(e){let{values:t}=e=g(e),r=t[0],n=t[1]/100,o=t[2]/100,a=n*Math.min(o,1-o),l=(e,t=(e+r/30)%12)=>o-a*Math.max(Math.min(t-3,9-t,1),-1),i="rgb",c=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(i+="a",c.push(t[3])),p({type:i,values:c})}function b(e){let t="hsl"===(e=g(e)).type||"hsla"===e.type?g(S(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function v(e,t){let r=b(e),n=b(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function C(e,t){return e=g(e),t=h(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,p(e)}function k(e,t){if(e=g(e),t=h(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return p(e)}function x(e,t){if(e=g(e),t=h(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return p(e)}function w(e,t=.15){return b(e)>.5?k(e,t):x(e,t)}var Z=r(3098),A=r(8285),T=r(6529);function B(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return(0,A.Z)((0,T.Z)({unstable_strictMode:!0},e),...r)}let $=!1;function _(e){return $||(console.warn("MUI: createStyles from @mui/material/styles is deprecated.\nPlease use @mui/styles/createStyles"),$=!0),e}function I(e){return String(parseFloat(e)).length===String(e).length}function E(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function F(e){return parseFloat(e)}function j(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{breakpoints:o=["sm","md","lg"],disableAlign:l=!1,factor:i=2,variants:c=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=r,s=(0,a.Z)({},e);s.typography=(0,a.Z)({},s.typography);let u=s.typography,d=(t=u.htmlFontSize,(e,r)=>{let n=E(e);if(n===r)return e;let o=F(e);"px"!==n&&("em"===n?o=F(e)*F(t):"rem"===n&&(o=F(e)*F(t)));let a=o;if("px"!==r){if("em"===r)a=o/F(t);else{if("rem"!==r)return e;a=o/F(t)}}return parseFloat(a.toFixed(5))+r}),m=o.map(e=>s.breakpoints.values[e]);return c.forEach(e=>{let t=u[e],r=parseFloat(d(t.fontSize,"rem"));if(r<=1)return;let{lineHeight:o}=t;if(!I(o)&&!l)throw Error((0,n.Z)(6));I(o)||(o=parseFloat(d(o,"rem"))/parseFloat(r));let c=null;l||(c=e=>(function(e){let{size:t,grid:r}=e,n=t-t%r,o=n+r;return t-n<o-t?n:o})({size:e,grid:function(e){let{lineHeight:t,pixels:r,htmlFontSize:n}=e;return r/(t*n)}({pixels:4,lineHeight:o,htmlFontSize:u.htmlFontSize})})),u[e]=(0,a.Z)({},t,function(e){let{cssProperty:t,min:r,max:n,unit:o="rem",breakpoints:a=[600,900,1200],transform:l=null}=e,i={[t]:"".concat(r).concat(o)},c=(n-r)/a[a.length-1];return a.forEach(e=>{let n=r+c*e;null!==l&&(n=l(n)),i["@media (min-width:".concat(e,"px)")]={[t]:"".concat(Math.round(1e4*n)/1e4).concat(o)}}),i}({cssProperty:"fontSize",min:1+(r-1)/i,max:r,unit:"rem",breakpoints:m,transform:c}))}),s}var M=r(1355),P=r(2960),O=r(9281),L=r(8024),q=r(2265);let D=q.createContext(null);function R(){return q.useContext(D)}var V="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",z=r(7437),H=function(e){let{children:t,theme:r}=e,n=R(),o=q.useMemo(()=>{let e=null===n?r:"function"==typeof r?r(n):(0,a.Z)({},n,r);return null!=e&&(e[V]=null!==n),e},[r,n]);return(0,z.jsx)(D.Provider,{value:o,children:t})},N=r(6132),U=r(4828),K=r(5158);let W={};function G(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return q.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let l=r(o),i=e?(0,a.Z)({},t,{[e]:l}):l;return n?()=>i:i}return e?(0,a.Z)({},t,{[e]:r}):(0,a.Z)({},t,r)},[e,t,r,n])}var J=function(e){let{children:t,theme:r,themeId:n}=e,o=(0,U.Z)(W),a=R()||W,l=G(n,o,r),i=G(n,a,r,!0),c="rtl"===l.direction;return(0,z.jsx)(H,{theme:i,children:(0,z.jsx)(N.T.Provider,{value:l,children:(0,z.jsx)(K.Z,{value:c,children:t})})})};let Q=["theme"];function X(e){let{theme:t}=e,r=(0,l.Z)(e,Q),n=t[o.Z];return(0,z.jsx)(J,(0,a.Z)({},r,{themeId:n?o.Z:void 0,theme:n||t}))}var Y=r(2774);function ee(){throw Error((0,n.Z)(14))}function et(){throw Error((0,n.Z)(15))}function er(){throw Error((0,n.Z)(16))}var en=r(6003);let eo="mode",ea="color-scheme",el="data-color-scheme";function ei(e){if("undefined"!=typeof window&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ec(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function es(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}let eu=["colorSchemes","components","generateCssVars","cssVarPrefix"];var ed=r(7267);function em(e){return(em="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eh(e){var t=function(e,t){if("object"!=em(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=em(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==em(t)?t:t+""}let ef=(e,t,r,n=[])=>{let o=e;t.forEach((e,a)=>{a===t.length-1?Array.isArray(o)?o[Number(e)]=r:o&&"object"==typeof o&&(o[e]=r):o&&"object"==typeof o&&(o[e]||(o[e]=n.includes(e)?[]:{}),o=o[e])})},eg=(e,t,r)=>{!function e(n,o=[],a=[]){Object.entries(n).forEach(([n,l])=>{r&&(!r||r([...o,n]))||null==l||("object"==typeof l&&Object.keys(l).length>0?e(l,[...o,n],Array.isArray(l)?[...a,n]:a):t([...o,n],l,a))})}(e)},ep=(e,t)=>"number"==typeof t?["lineHeight","fontWeight","opacity","zIndex"].some(t=>e.includes(t))||e[e.length-1].toLowerCase().indexOf("opacity")>=0?t:`${t}px`:t;function ey(e,t){let{prefix:r,shouldSkipGeneratingVar:n}=t||{},o={},a={},l={};return eg(e,(e,t,i)=>{if(("string"==typeof t||"number"==typeof t)&&(!n||!n(e,t))){let n=`--${r?`${r}-`:""}${e.join("-")}`;Object.assign(o,{[n]:ep(e,t)}),ef(a,e,`var(${n})`,i),ef(l,e,`var(${n}, ${t})`,i)}},e=>"vars"===e[0]),{css:o,vars:a,varsWithDefaults:l}}let eS=["colorSchemes","components","defaultColorScheme"];var eb=function(e,t){let{colorSchemes:r={},defaultColorScheme:n="light"}=e,{vars:o,css:i,varsWithDefaults:c}=ey((0,l.Z)(e,eS),t),s=c,u={},{[n]:d}=r;if(Object.entries((0,l.Z)(r,[n].map(eh))||{}).forEach(([e,r])=>{let{vars:n,css:o,varsWithDefaults:a}=ey(r,t);s=(0,T.Z)(s,a),u[e]={css:o,vars:n}}),d){let{css:e,vars:r,varsWithDefaults:o}=ey(d,t);s=(0,T.Z)(s,o),u[n]={css:e,vars:r}}return{vars:s,generateCssVars:e=>{var r,n;if(!e){let r=(0,a.Z)({},i);return{css:r,vars:o,selector:(null==t||null==(n=t.getSelector)?void 0:n.call(t,e,r))||":root"}}let l=(0,a.Z)({},u[e].css);return{css:l,vars:u[e].vars,selector:(null==t||null==(r=t.getSelector)?void 0:r.call(t,e,l))||":root"}}}},ev=r(9626),eC=r(317);function ek(e){var t;return!!e[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||"palette"===e[0]&&!!(null!=(t=e[1])&&t.match(/(mode|contrastThreshold|tonalOffset)/))}var ex=r(1931);let ew=["colorSchemes","cssVarPrefix","shouldSkipGeneratingVar"],eZ=["palette"],eA=[...Array(25)].map((e,t)=>{if(0===t)return;let r=(0,ex.Z)(t);return"linear-gradient(rgba(255 255 255 / ".concat(r,"), rgba(255 255 255 / ").concat(r,"))")});function eT(e,t,r){!e[t]&&r&&(e[t]=r)}function eB(e){return e&&e.startsWith("hsl")?(0,eC.ve)(e):e}function e$(e,t){"".concat(t,"Channel") in e||(e["".concat(t,"Channel")]=(0,eC.LR)(eB(e[t]),"MUI: Can't create `palette.".concat(t,"Channel` because `palette.").concat(t,"` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().")+"\n"+"To suppress this warning, you need to explicitly provide the `palette.".concat(t,'Channel` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.')))}let e_=e=>{try{return e()}catch(e){}},eI=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mui";return function(e=""){return(t,...r)=>`var(--${e?`${e}-`:""}${t}${function t(...r){if(!r.length)return"";let n=r[0];return"string"!=typeof n||n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, ${n}`:`, var(--${e?`${e}-`:""}${n}${t(...r.slice(1))})`}(...r)})`}(e)};function eE(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t,r,n,o,i,c,s=arguments.length,u=Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];let{colorSchemes:m={},cssVarPrefix:h="mui",shouldSkipGeneratingVar:f=ek}=e,g=(0,l.Z)(e,ew),p=eI(h),y=(0,A.Z)((0,a.Z)({},g,m.light&&{palette:null==(t=m.light)?void 0:t.palette})),{palette:S}=y,b=(0,l.Z)(y,eZ),{palette:v}=(0,A.Z)({palette:(0,a.Z)({mode:"dark"},null==(r=m.dark)?void 0:r.palette)}),C=(0,a.Z)({},b,{cssVarPrefix:h,getCssVar:p,colorSchemes:(0,a.Z)({},m,{light:(0,a.Z)({},m.light,{palette:S,opacity:(0,a.Z)({inputPlaceholder:.42,inputUnderline:.42,switchTrackDisabled:.12,switchTrack:.38},null==(n=m.light)?void 0:n.opacity),overlays:(null==(o=m.light)?void 0:o.overlays)||[]}),dark:(0,a.Z)({},m.dark,{palette:v,opacity:(0,a.Z)({inputPlaceholder:.5,inputUnderline:.7,switchTrackDisabled:.2,switchTrack:.3},null==(i=m.dark)?void 0:i.opacity),overlays:(null==(c=m.dark)?void 0:c.overlays)||eA})})});Object.keys(C.colorSchemes).forEach(e=>{let t=C.colorSchemes[e].palette,r=e=>{let r=e.split("-"),n=r[1],o=r[2];return p(e,t[n][o])};if("light"===e?(eT(t.common,"background","#fff"),eT(t.common,"onBackground","#000")):(eT(t.common,"background","#000"),eT(t.common,"onBackground","#fff")),function(e,t){t.forEach(t=>{e[t]||(e[t]={})})}(t,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),"light"===e){eT(t.Alert,"errorColor",(0,eC.q8)(t.error.light,.6)),eT(t.Alert,"infoColor",(0,eC.q8)(t.info.light,.6)),eT(t.Alert,"successColor",(0,eC.q8)(t.success.light,.6)),eT(t.Alert,"warningColor",(0,eC.q8)(t.warning.light,.6)),eT(t.Alert,"errorFilledBg",r("palette-error-main")),eT(t.Alert,"infoFilledBg",r("palette-info-main")),eT(t.Alert,"successFilledBg",r("palette-success-main")),eT(t.Alert,"warningFilledBg",r("palette-warning-main")),eT(t.Alert,"errorFilledColor",e_(()=>S.getContrastText(t.error.main))),eT(t.Alert,"infoFilledColor",e_(()=>S.getContrastText(t.info.main))),eT(t.Alert,"successFilledColor",e_(()=>S.getContrastText(t.success.main))),eT(t.Alert,"warningFilledColor",e_(()=>S.getContrastText(t.warning.main))),eT(t.Alert,"errorStandardBg",(0,eC.ux)(t.error.light,.9)),eT(t.Alert,"infoStandardBg",(0,eC.ux)(t.info.light,.9)),eT(t.Alert,"successStandardBg",(0,eC.ux)(t.success.light,.9)),eT(t.Alert,"warningStandardBg",(0,eC.ux)(t.warning.light,.9)),eT(t.Alert,"errorIconColor",r("palette-error-main")),eT(t.Alert,"infoIconColor",r("palette-info-main")),eT(t.Alert,"successIconColor",r("palette-success-main")),eT(t.Alert,"warningIconColor",r("palette-warning-main")),eT(t.AppBar,"defaultBg",r("palette-grey-100")),eT(t.Avatar,"defaultBg",r("palette-grey-400")),eT(t.Button,"inheritContainedBg",r("palette-grey-300")),eT(t.Button,"inheritContainedHoverBg",r("palette-grey-A100")),eT(t.Chip,"defaultBorder",r("palette-grey-400")),eT(t.Chip,"defaultAvatarColor",r("palette-grey-700")),eT(t.Chip,"defaultIconColor",r("palette-grey-700")),eT(t.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),eT(t.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),eT(t.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),eT(t.LinearProgress,"primaryBg",(0,eC.ux)(t.primary.main,.62)),eT(t.LinearProgress,"secondaryBg",(0,eC.ux)(t.secondary.main,.62)),eT(t.LinearProgress,"errorBg",(0,eC.ux)(t.error.main,.62)),eT(t.LinearProgress,"infoBg",(0,eC.ux)(t.info.main,.62)),eT(t.LinearProgress,"successBg",(0,eC.ux)(t.success.main,.62)),eT(t.LinearProgress,"warningBg",(0,eC.ux)(t.warning.main,.62)),eT(t.Skeleton,"bg","rgba(".concat(r("palette-text-primaryChannel")," / 0.11)")),eT(t.Slider,"primaryTrack",(0,eC.ux)(t.primary.main,.62)),eT(t.Slider,"secondaryTrack",(0,eC.ux)(t.secondary.main,.62)),eT(t.Slider,"errorTrack",(0,eC.ux)(t.error.main,.62)),eT(t.Slider,"infoTrack",(0,eC.ux)(t.info.main,.62)),eT(t.Slider,"successTrack",(0,eC.ux)(t.success.main,.62)),eT(t.Slider,"warningTrack",(0,eC.ux)(t.warning.main,.62));let e=(0,eC.fk)(t.background.default,.8);eT(t.SnackbarContent,"bg",e),eT(t.SnackbarContent,"color",e_(()=>S.getContrastText(e))),eT(t.SpeedDialAction,"fabHoverBg",(0,eC.fk)(t.background.paper,.15)),eT(t.StepConnector,"border",r("palette-grey-400")),eT(t.StepContent,"border",r("palette-grey-400")),eT(t.Switch,"defaultColor",r("palette-common-white")),eT(t.Switch,"defaultDisabledColor",r("palette-grey-100")),eT(t.Switch,"primaryDisabledColor",(0,eC.ux)(t.primary.main,.62)),eT(t.Switch,"secondaryDisabledColor",(0,eC.ux)(t.secondary.main,.62)),eT(t.Switch,"errorDisabledColor",(0,eC.ux)(t.error.main,.62)),eT(t.Switch,"infoDisabledColor",(0,eC.ux)(t.info.main,.62)),eT(t.Switch,"successDisabledColor",(0,eC.ux)(t.success.main,.62)),eT(t.Switch,"warningDisabledColor",(0,eC.ux)(t.warning.main,.62)),eT(t.TableCell,"border",(0,eC.ux)((0,eC.zp)(t.divider,1),.88)),eT(t.Tooltip,"bg",(0,eC.zp)(t.grey[700],.92))}else{eT(t.Alert,"errorColor",(0,eC.ux)(t.error.light,.6)),eT(t.Alert,"infoColor",(0,eC.ux)(t.info.light,.6)),eT(t.Alert,"successColor",(0,eC.ux)(t.success.light,.6)),eT(t.Alert,"warningColor",(0,eC.ux)(t.warning.light,.6)),eT(t.Alert,"errorFilledBg",r("palette-error-dark")),eT(t.Alert,"infoFilledBg",r("palette-info-dark")),eT(t.Alert,"successFilledBg",r("palette-success-dark")),eT(t.Alert,"warningFilledBg",r("palette-warning-dark")),eT(t.Alert,"errorFilledColor",e_(()=>v.getContrastText(t.error.dark))),eT(t.Alert,"infoFilledColor",e_(()=>v.getContrastText(t.info.dark))),eT(t.Alert,"successFilledColor",e_(()=>v.getContrastText(t.success.dark))),eT(t.Alert,"warningFilledColor",e_(()=>v.getContrastText(t.warning.dark))),eT(t.Alert,"errorStandardBg",(0,eC.q8)(t.error.light,.9)),eT(t.Alert,"infoStandardBg",(0,eC.q8)(t.info.light,.9)),eT(t.Alert,"successStandardBg",(0,eC.q8)(t.success.light,.9)),eT(t.Alert,"warningStandardBg",(0,eC.q8)(t.warning.light,.9)),eT(t.Alert,"errorIconColor",r("palette-error-main")),eT(t.Alert,"infoIconColor",r("palette-info-main")),eT(t.Alert,"successIconColor",r("palette-success-main")),eT(t.Alert,"warningIconColor",r("palette-warning-main")),eT(t.AppBar,"defaultBg",r("palette-grey-900")),eT(t.AppBar,"darkBg",r("palette-background-paper")),eT(t.AppBar,"darkColor",r("palette-text-primary")),eT(t.Avatar,"defaultBg",r("palette-grey-600")),eT(t.Button,"inheritContainedBg",r("palette-grey-800")),eT(t.Button,"inheritContainedHoverBg",r("palette-grey-700")),eT(t.Chip,"defaultBorder",r("palette-grey-700")),eT(t.Chip,"defaultAvatarColor",r("palette-grey-300")),eT(t.Chip,"defaultIconColor",r("palette-grey-300")),eT(t.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),eT(t.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),eT(t.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),eT(t.LinearProgress,"primaryBg",(0,eC.q8)(t.primary.main,.5)),eT(t.LinearProgress,"secondaryBg",(0,eC.q8)(t.secondary.main,.5)),eT(t.LinearProgress,"errorBg",(0,eC.q8)(t.error.main,.5)),eT(t.LinearProgress,"infoBg",(0,eC.q8)(t.info.main,.5)),eT(t.LinearProgress,"successBg",(0,eC.q8)(t.success.main,.5)),eT(t.LinearProgress,"warningBg",(0,eC.q8)(t.warning.main,.5)),eT(t.Skeleton,"bg","rgba(".concat(r("palette-text-primaryChannel")," / 0.13)")),eT(t.Slider,"primaryTrack",(0,eC.q8)(t.primary.main,.5)),eT(t.Slider,"secondaryTrack",(0,eC.q8)(t.secondary.main,.5)),eT(t.Slider,"errorTrack",(0,eC.q8)(t.error.main,.5)),eT(t.Slider,"infoTrack",(0,eC.q8)(t.info.main,.5)),eT(t.Slider,"successTrack",(0,eC.q8)(t.success.main,.5)),eT(t.Slider,"warningTrack",(0,eC.q8)(t.warning.main,.5));let e=(0,eC.fk)(t.background.default,.98);eT(t.SnackbarContent,"bg",e),eT(t.SnackbarContent,"color",e_(()=>v.getContrastText(e))),eT(t.SpeedDialAction,"fabHoverBg",(0,eC.fk)(t.background.paper,.15)),eT(t.StepConnector,"border",r("palette-grey-600")),eT(t.StepContent,"border",r("palette-grey-600")),eT(t.Switch,"defaultColor",r("palette-grey-300")),eT(t.Switch,"defaultDisabledColor",r("palette-grey-600")),eT(t.Switch,"primaryDisabledColor",(0,eC.q8)(t.primary.main,.55)),eT(t.Switch,"secondaryDisabledColor",(0,eC.q8)(t.secondary.main,.55)),eT(t.Switch,"errorDisabledColor",(0,eC.q8)(t.error.main,.55)),eT(t.Switch,"infoDisabledColor",(0,eC.q8)(t.info.main,.55)),eT(t.Switch,"successDisabledColor",(0,eC.q8)(t.success.main,.55)),eT(t.Switch,"warningDisabledColor",(0,eC.q8)(t.warning.main,.55)),eT(t.TableCell,"border",(0,eC.q8)((0,eC.zp)(t.divider,1),.68)),eT(t.Tooltip,"bg",(0,eC.zp)(t.grey[700],.92))}e$(t.background,"default"),e$(t.background,"paper"),e$(t.common,"background"),e$(t.common,"onBackground"),e$(t,"divider"),Object.keys(t).forEach(e=>{let r=t[e];r&&"object"==typeof r&&(r.main&&eT(t[e],"mainChannel",(0,eC.LR)(eB(r.main))),r.light&&eT(t[e],"lightChannel",(0,eC.LR)(eB(r.light))),r.dark&&eT(t[e],"darkChannel",(0,eC.LR)(eB(r.dark))),r.contrastText&&eT(t[e],"contrastTextChannel",(0,eC.LR)(eB(r.contrastText))),"text"===e&&(e$(t[e],"primary"),e$(t[e],"secondary")),"action"===e&&(r.active&&e$(t[e],"active"),r.selected&&e$(t[e],"selected")))})});let{vars:k,generateCssVars:x}=eb(C=u.reduce((e,t)=>(0,T.Z)(e,t),C),{prefix:h,shouldSkipGeneratingVar:f});return C.vars=k,C.generateCssVars=x,C.shouldSkipGeneratingVar=f,C.unstable_sxConfig=(0,a.Z)({},ev.Z,null==g?void 0:g.unstable_sxConfig),C.unstable_sx=function(e){return(0,ed.Z)({sx:e,theme:this})},C}var eF=r(5032),ej=e=>[...[...Array(24)].map((t,r)=>"--".concat(e?"".concat(e,"-"):"","overlays-").concat(r+1)),"--".concat(e?"".concat(e,"-"):"","palette-AppBar-darkBg"),"--".concat(e?"".concat(e,"-"):"","palette-AppBar-darkColor")];let eM=eE(),{CssVarsProvider:eP,useColorScheme:eO,getInitColorSchemeScript:eL}=function(e){let{themeId:t,theme:r={},attribute:o=el,modeStorageKey:i=eo,colorSchemeStorageKey:c=ea,defaultMode:s="light",defaultColorScheme:u,disableTransitionOnChange:d=!1,resolveTheme:m,excludeVariablesFromRoot:h}=e;r.colorSchemes&&("string"!=typeof u||r.colorSchemes[u])&&("object"!=typeof u||r.colorSchemes[null==u?void 0:u.light])&&("object"!=typeof u||r.colorSchemes[null==u?void 0:u.dark])||console.error(`MUI: \`${u}\` does not exist in \`theme.colorSchemes\`.`);let f=q.createContext(void 0),g="string"==typeof u?u:u.light,p="string"==typeof u?u:u.dark;return{CssVarsProvider:function(e){let{children:n,theme:g=r,modeStorageKey:p=i,colorSchemeStorageKey:y=c,attribute:S=o,defaultMode:b=s,defaultColorScheme:v=u,disableTransitionOnChange:C=d,storageWindow:k="undefined"==typeof window?void 0:window,documentNode:x="undefined"==typeof document?void 0:document,colorSchemeNode:w="undefined"==typeof document?void 0:document.documentElement,colorSchemeSelector:Z=":root",disableNestedContext:A=!1,disableStyleSheetGeneration:B=!1}=e,$=q.useRef(!1),_=R(),I=q.useContext(f),E=!!I&&!A,F=g[t],j=F||g,{colorSchemes:M={},components:P={},generateCssVars:O=()=>({vars:{},css:{}}),cssVarPrefix:L}=j,D=(0,l.Z)(j,eu),V=Object.keys(M),H="string"==typeof v?v:v.light,N="string"==typeof v?v:v.dark,{mode:U,setMode:K,systemMode:W,lightColorScheme:G,darkColorScheme:Q,colorScheme:X,setColorScheme:Y}=function(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:n,supportedColorSchemes:o=[],modeStorageKey:l=eo,colorSchemeStorageKey:i=ea,storageWindow:c="undefined"==typeof window?void 0:window}=e,s=o.join(","),[u,d]=q.useState(()=>{let e=es(l,t),o=es("".concat(i,"-light"),r),a=es("".concat(i,"-dark"),n);return{mode:e,systemMode:ei(e),lightColorScheme:o,darkColorScheme:a}}),m=ec(u,e=>"light"===e?u.lightColorScheme:"dark"===e?u.darkColorScheme:void 0),h=q.useCallback(e=>{d(r=>{if(e===r.mode)return r;let n=null!=e?e:t;try{localStorage.setItem(l,n)}catch(e){}return(0,a.Z)({},r,{mode:n,systemMode:ei(n)})})},[l,t]),f=q.useCallback(e=>{e?"string"==typeof e?e&&!s.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):d(t=>{let r=(0,a.Z)({},t);return ec(t,t=>{try{localStorage.setItem("".concat(i,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):d(t=>{let o=(0,a.Z)({},t),l=null===e.light?r:e.light,c=null===e.dark?n:e.dark;if(l){if(s.includes(l)){o.lightColorScheme=l;try{localStorage.setItem("".concat(i,"-light"),l)}catch(e){}}else console.error("`".concat(l,"` does not exist in `theme.colorSchemes`."))}if(c){if(s.includes(c)){o.darkColorScheme=c;try{localStorage.setItem("".concat(i,"-dark"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}return o}):d(e=>{try{localStorage.setItem("".concat(i,"-light"),r),localStorage.setItem("".concat(i,"-dark"),n)}catch(e){}return(0,a.Z)({},e,{lightColorScheme:r,darkColorScheme:n})})},[s,i,r,n]),g=q.useCallback(e=>{"system"===u.mode&&d(t=>{let r=null!=e&&e.matches?"dark":"light";return t.systemMode===r?t:(0,a.Z)({},t,{systemMode:r})})},[u.mode]),p=q.useRef(g);return p.current=g,q.useEffect(()=>{let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[]),q.useEffect(()=>{if(c){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(i)&&(!r||s.match(r))&&(e.key.endsWith("light")&&f({light:r}),e.key.endsWith("dark")&&f({dark:r})),e.key===l&&(!r||["light","dark","system"].includes(r))&&h(r||t)};return c.addEventListener("storage",e),()=>{c.removeEventListener("storage",e)}}},[f,h,l,i,s,t,c]),(0,a.Z)({},u,{colorScheme:m,setMode:h,setColorScheme:f})}({supportedColorSchemes:V,defaultLightColorScheme:H,defaultDarkColorScheme:N,modeStorageKey:p,colorSchemeStorageKey:y,defaultMode:b,storageWindow:k}),ee=U,et=X;E&&(ee=I.mode,et=I.colorScheme);let er=ee||("system"===b?s:b),el=et||("dark"===er?N:H),{css:ed,vars:em}=O(),eh=(0,a.Z)({},D,{components:P,colorSchemes:M,cssVarPrefix:L,vars:em,getColorSchemeSelector:e=>`[${S}="${e}"] &`}),ef={},eg={};Object.entries(M).forEach(([e,t])=>{let{css:r,vars:n}=O(e);if(eh.vars=(0,T.Z)(eh.vars,n),e===el&&(Object.keys(t).forEach(e=>{t[e]&&"object"==typeof t[e]?eh[e]=(0,a.Z)({},eh[e],t[e]):eh[e]=t[e]}),eh.palette&&(eh.palette.colorScheme=e)),e===("string"==typeof v?v:"dark"===b?v.dark:v.light)){if(h){let t={};h(L).forEach(e=>{t[e]=r[e],delete r[e]}),ef[`[${S}="${e}"]`]=t}ef[`${Z}, [${S}="${e}"]`]=r}else eg[`${":root"===Z?"":Z}[${S}="${e}"]`]=r}),eh.vars=(0,T.Z)(eh.vars,em),q.useEffect(()=>{et&&w&&w.setAttribute(S,et)},[et,S,w]),q.useEffect(()=>{let e;if(C&&$.current&&x){let t=x.createElement("style");t.appendChild(x.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),x.head.appendChild(t),window.getComputedStyle(x.body),e=setTimeout(()=>{x.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[et,C,x]),q.useEffect(()=>($.current=!0,()=>{$.current=!1}),[]);let ep=q.useMemo(()=>({allColorSchemes:V,colorScheme:et,darkColorScheme:Q,lightColorScheme:G,mode:ee,setColorScheme:Y,setMode:K,systemMode:W}),[V,et,Q,G,ee,Y,K,W]),ey=!0;(B||E&&(null==_?void 0:_.cssVarPrefix)===L)&&(ey=!1);let eS=(0,z.jsxs)(q.Fragment,{children:[ey&&(0,z.jsxs)(q.Fragment,{children:[(0,z.jsx)(en.Z,{styles:{[Z]:ed}}),(0,z.jsx)(en.Z,{styles:ef}),(0,z.jsx)(en.Z,{styles:eg})]}),(0,z.jsx)(J,{themeId:F?t:void 0,theme:m?m(eh):eh,children:n})]});return E?eS:(0,z.jsx)(f.Provider,{value:ep,children:eS})},useColorScheme:()=>{let e=q.useContext(f);if(!e)throw Error((0,n.Z)(19));return e},getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="light",defaultLightColorScheme:r="light",defaultDarkColorScheme:n="dark",modeStorageKey:o=eo,colorSchemeStorageKey:a=ea,attribute:l=el,colorSchemeNode:i="document.documentElement"}=e||{};return(0,z.jsx)("script",{dangerouslySetInnerHTML:{__html:`(function() {
try {
  var mode = localStorage.getItem('${o}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${a}-dark') || '${n}';
    } else {
      colorScheme = localStorage.getItem('${a}-light') || '${r}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${a}-light') || '${r}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${a}-dark') || '${n}';
  }
  if (colorScheme) {
    ${i}.setAttribute('${l}', colorScheme);
  }
} catch(e){}})();`}},"mui-color-scheme-init")})((0,a.Z)({attribute:o,colorSchemeStorageKey:c,defaultMode:s,defaultLightColorScheme:g,defaultDarkColorScheme:p,modeStorageKey:i},e))}}({themeId:o.Z,theme:eM,attribute:"data-mui-color-scheme",modeStorageKey:"mui-mode",colorSchemeStorageKey:"mui-color-scheme",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t=(0,a.Z)({},e,{typography:(0,eF.Z)(e.palette,e.typography)});return t.unstable_sx=function(e){return(0,ed.Z)({sx:e,theme:this})},t},excludeVariablesFromRoot:ej});var eq=r(1523);function eD(){throw Error((0,n.Z)(20))}},4671:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},8715:function(e){e.exports={style:{fontFamily:"'__Roboto_42e952', '__Roboto_Fallback_42e952'",fontStyle:"normal"},className:"__className_42e952"}}}]);