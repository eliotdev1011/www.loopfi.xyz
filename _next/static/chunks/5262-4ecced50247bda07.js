"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5262],{87520:function(e,r,t){t.d(r,{j:function(){return i}});var o=t(6157),n=t(56238);let l={any:0,all:1};function i(e,r,{root:t,margin:i,amount:s="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};let a=(0,o.I)(e),c=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let t=c.get(e.target);if(!!t!==e.isIntersecting){if(e.isIntersecting){let t=r(e);(0,n.m)(t)?c.set(e.target,t):d.unobserve(e.target)}else t&&(t(e),c.delete(e.target))}})},{root:t,rootMargin:i,threshold:"number"==typeof s?s:l[s]});return a.forEach(e=>d.observe(e)),()=>d.disconnect()}},6157:function(e,r,t){t.d(r,{I:function(){return o}});function o(e,r){var t;return"string"==typeof e?r?(null!==(t=r[e])&&void 0!==t||(r[e]=document.querySelectorAll(e)),e=r[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}},56238:function(e,r,t){t.d(r,{m:function(){return o}});let o=e=>"function"==typeof e},43310:function(e,r,t){t.d(r,{tv:function(){return er}});var o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,n=e=>!e||"object"!=typeof e||0===Object.keys(e).length,l=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function i(e){let r=[];return function e(r,t){r.forEach(function(r){Array.isArray(r)?e(r,t):t.push(r)})}(e,r),r}var s=(...e)=>i(e).filter(Boolean),a=(e,r)=>{let t={},o=Object.keys(e),n=Object.keys(r);for(let l of o)if(n.includes(l)){let o=e[l],n=r[l];"object"==typeof o&&"object"==typeof n?t[l]=a(o,n):Array.isArray(o)||Array.isArray(n)?t[l]=s(n,o):t[l]=n+" "+o}else t[l]=e[l];for(let e of n)o.includes(e)||(t[e]=r[e]);return t},c=e=>e&&"string"==typeof e?e.replace(/\s+/g," ").trim():e;let d=/^\[(.+)\]$/;function u(e,r){let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}let p=/\s+/;function f(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=function e(r){let t;if("string"==typeof r)return r;let o="";for(let n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function b(e,...r){let t,o,n;let l=function(s){var a;return o=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map;function n(n,l){t.set(n,l),++r>e&&(r=0,o=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}}((a=r.reduce((e,r)=>r(e),e())).cacheSize),splitModifiers:function(e){let r=e.separator,t=1===r.length,o=r[0],n=r.length;return function(e){let l;let i=[],s=0,a=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===s){if(d===o&&(t||e.slice(c,c+n)===r)){i.push(e.slice(a,c)),a=c+n;continue}if("/"===d){l=c;continue}}"["===d?s++:"]"===d&&s--}let c=0===i.length?e:e.substring(a),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:l&&l>a?l-a:void 0}}}(a),...function(e){let r=function(e){var r;let{theme:t,prefix:o}=e,n={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),o?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[o+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,t,o,n){r.forEach(r=>{if("string"==typeof r){(""===r?t:u(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(n),t,o,n);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(([r,l])=>{e(l,u(t,r),o,n)})})})(r,n,e,t)}),n}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(r,t){if(0===r.length)return t.classGroupId;let o=r[0],n=t.nextPart.get(o),l=n?e(r.slice(1),n):void 0;if(l)return l;if(0===t.validators.length)return;let i=r.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId}(t,r)||function(e){if(d.test(e)){let r=d.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}}(a)}).cache.get,n=t.cache.set,l=i,i(s)};function i(e){let r=o(e);if(r)return r;let l=function(e,r){let{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(p).map(e=>{let{modifiers:r,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:i}=t(e),s=o(i?l.substring(0,i):l),a=!!i;if(!s){if(!i||!(s=o(l)))return{isTailwindClass:!1,originalClassName:e};a=!1}let c=(function(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:a}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:t,hasPostfixModifier:o}=e,i=r+t;return!l.has(i)&&(l.add(i),n(t,o).forEach(e=>l.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return n(e,l),l}return function(){return l(f.apply(null,arguments))}}function g(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let m=/^\[(?:([a-z-]+):)?(.+)\]$/i,y=/^\d+\/\d+$/,h=new Set(["px","full","screen"]),v=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,w=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,x=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,k=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,j=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function z(e){return C(e)||h.has(e)||y.test(e)}function A(e){return _(e,"length",W)}function C(e){return!!e&&!Number.isNaN(Number(e))}function O(e){return _(e,"number",C)}function S(e){return!!e&&Number.isInteger(Number(e))}function $(e){return e.endsWith("%")&&C(e.slice(0,-1))}function G(e){return m.test(e)}function M(e){return v.test(e)}let N=new Set(["length","size","percentage"]);function V(e){return _(e,N,q)}function E(e){return _(e,"position",q)}let I=new Set(["image","url"]);function P(e){return _(e,I,J)}function T(e){return _(e,"",B)}function R(){return!0}function _(e,r,t){let o=m.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))}function W(e){return w.test(e)&&!x.test(e)}function q(){return!1}function B(e){return k.test(e)}function J(e){return j.test(e)}function K(){let e=g("colors"),r=g("spacing"),t=g("blur"),o=g("brightness"),n=g("borderColor"),l=g("borderRadius"),i=g("borderSpacing"),s=g("borderWidth"),a=g("contrast"),c=g("grayscale"),d=g("hueRotate"),u=g("invert"),p=g("gap"),f=g("gradientColorStops"),b=g("gradientColorStopPositions"),m=g("inset"),y=g("margin"),h=g("opacity"),v=g("padding"),w=g("saturate"),x=g("scale"),k=g("sepia"),j=g("skew"),N=g("space"),I=g("translate"),_=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto",G,r],B=()=>[G,r],J=()=>["",z,A],K=()=>["auto",C,G],D=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],F=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],L=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",G],U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[C,O],Y=()=>[C,G];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[z,A],blur:["none","",M,G],brightness:X(),borderColor:[e],borderRadius:["none","","full",M,G],borderSpacing:B(),borderWidth:J(),contrast:X(),grayscale:Q(),hueRotate:Y(),invert:Q(),gap:B(),gradientColorStops:[e],gradientColorStopPositions:[$,A],inset:q(),margin:q(),opacity:X(),padding:B(),saturate:X(),scale:X(),sepia:Q(),skew:Y(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...D(),G]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",S,G]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",S,G]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",S,G]},G]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[S,G]},G]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,r]}],"min-w":[{"min-w":[G,r,"min","max","fit"]}],"max-w":[{"max-w":[G,r,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[G,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,r,"auto","min","max","fit"]}],"font-size":[{text:["base",M,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",C,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...F(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,A]}],"underline-offset":[{"underline-offset":["auto",z,G]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...D(),E]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",V]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},P]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...F(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:F()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...F()]}],"outline-offset":[{"outline-offset":[z,G]}],"outline-w":[{outline:[z,A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[z,A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,T]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",M,G]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[S,G]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,A,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function D(e,r,t){void 0!==t&&(e[r]=t)}let F=b(K);var H={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},L=e=>e||void 0,Q=(...e)=>L(i(e).filter(Boolean).join(" ")),U=null,X={},Y=!1,Z=(...e)=>r=>r.twMerge?((!U||Y)&&(Y=!1,U=n(X)?F:function(e,...r){return"function"==typeof e?b(K,e,...r):b(()=>(function(e,{cacheSize:r,prefix:t,separator:o,extend:n={},override:l={}}){for(let n in D(e,"cacheSize",r),D(e,"prefix",t),D(e,"separator",o),l)(function(e,r){if(r)for(let t in r)D(e,t,r[t])})(e[n],l[n]);for(let r in n)(function(e,r){if(r)for(let t in r){let o=r[t];void 0!==o&&(e[t]=(e[t]||[]).concat(o))}})(e[r],n[r]);return e})(K(),e),...r)}({...X,extend:{theme:X.theme,classGroups:X.classGroups,conflictingClassGroupModifiers:X.conflictingClassGroupModifiers,conflictingClassGroups:X.conflictingClassGroups,...X.extend}})),L(U(Q(e)))):Q(e),ee=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=Q(e[t],r[t]):e[t]=r[t];return e},er=(e,r)=>{let{extend:t=null,slots:i={},variants:d={},compoundVariants:u=[],compoundSlots:p=[],defaultVariants:f={}}=e,b={...H,...r},g=null!=t&&t.base?Q(t.base,null==e?void 0:e.base):null==e?void 0:e.base,m=null!=t&&t.variants&&!n(t.variants)?a(d,t.variants):d,y=null!=t&&t.defaultVariants&&!n(t.defaultVariants)?{...t.defaultVariants,...f}:f;n(b.twMergeConfig)||l(b.twMergeConfig,X)||(Y=!0,X=b.twMergeConfig);let h=n(null==t?void 0:t.slots),v=n(i)?{}:{base:Q(null==e?void 0:e.base,h&&(null==t?void 0:t.base)),...i},w=h?v:ee({...null==t?void 0:t.slots},n(v)?{base:null==e?void 0:e.base}:v),x=n(null==t?void 0:t.compoundVariants)?u:s(null==t?void 0:t.compoundVariants,u),k=e=>{if(n(m)&&n(i)&&h)return Z(g,null==e?void 0:e.class,null==e?void 0:e.className)(b);if(x&&!Array.isArray(x))throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);if(p&&!Array.isArray(p))throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof p}`);let r=(e,r,t=[],o)=>{let n=t;if("string"==typeof r)n=n.concat(c(r).split(" ").map(r=>`${e}:${r}`));else if(Array.isArray(r))n=n.concat(r.reduce((r,t)=>r.concat(`${e}:${t}`),[]));else if("object"==typeof r&&"string"==typeof o){for(let t in r)if(r.hasOwnProperty(t)&&t===o){let l=r[t];if(l&&"string"==typeof l){let r=c(l);n[o]?n[o]=n[o].concat(r.split(" ").map(r=>`${e}:${r}`)):n[o]=r.split(" ").map(r=>`${e}:${r}`)}else Array.isArray(l)&&l.length>0&&(n[o]=l.reduce((r,t)=>r.concat(`${e}:${t}`),[]))}}return n},t=(t,l=m,i=null,s=null)=>{var a;let c=l[t];if(!c||n(c))return null;let d=null!=(a=null==s?void 0:s[t])?a:null==e?void 0:e[t];if(null===d)return null;let u=o(d),p=Array.isArray(b.responsiveVariants)&&b.responsiveVariants.length>0||!0===b.responsiveVariants,f=null==y?void 0:y[t],g=[];if("object"==typeof u&&p)for(let[e,t]of Object.entries(u)){let o=c[t];if("initial"===e){f=t;continue}Array.isArray(b.responsiveVariants)&&!b.responsiveVariants.includes(e)||(g=r(e,o,g,i))}let h=c[(null!=u&&"object"!=typeof u?u:o(f))||"false"];return"object"==typeof g&&"string"==typeof i&&g[i]?ee(g,h):g.length>0?(g.push(h),g):h},l=(e,r)=>{if(!m||"object"!=typeof m)return null;let o=[];for(let n in m){let l=t(n,m,e,r),i="base"===e&&"string"==typeof l?l:l&&l[e];i&&(o[o.length]=i)}return o},s={};for(let r in e)void 0!==e[r]&&(s[r]=e[r]);let a=(r,t)=>{var o;let n="object"==typeof(null==e?void 0:e[r])?{[r]:null==(o=e[r])?void 0:o.initial}:{};return{...y,...s,...n,...t}},d=(e=[],r)=>{let t=[];for(let{class:o,className:n,...l}of e){let e=!0;for(let[t,o]of Object.entries(l)){let n=a(t,r);if(Array.isArray(o)){if(!o.includes(n[t])){e=!1;break}}else if(n[t]!==o){e=!1;break}}e&&(o&&t.push(o),n&&t.push(n))}return t},u=e=>{let r=d(x,e);if(!Array.isArray(r))return r;let t={};for(let e of r)if("string"==typeof e&&(t.base=Z(t.base,e)(b)),"object"==typeof e)for(let[r,o]of Object.entries(e))t[r]=Z(t[r],o)(b);return t},f=e=>{if(p.length<1)return null;let r={};for(let{slots:t=[],class:o,className:l,...i}of p){if(!n(i)){let r=!0;for(let t of Object.keys(i)){let o=a(t,e)[t];if(void 0===o||(Array.isArray(i[t])?!i[t].includes(o):i[t]!==o)){r=!1;break}}if(!r)continue}for(let e of t)r[e]=r[e]||[],r[e].push([o,l])}return r};if(!n(i)||!h){let e={};if("object"==typeof w&&!n(w))for(let r of Object.keys(w))e[r]=e=>{var t,o;return Z(w[r],l(r,e),(null!=(t=u(e))?t:[])[r],(null!=(o=f(e))?o:[])[r],null==e?void 0:e.class,null==e?void 0:e.className)(b)};return e}return Z(g,m?Object.keys(m).map(e=>t(e,m)):null,d(x),null==e?void 0:e.class,null==e?void 0:e.className)(b)};return k.variantKeys=(()=>{if(!(!m||"object"!=typeof m))return Object.keys(m)})(),k.extend=t,k.base=g,k.slots=w,k.variants=m,k.defaultVariants=y,k.compoundSlots=p,k.compoundVariants=x,k}}}]);