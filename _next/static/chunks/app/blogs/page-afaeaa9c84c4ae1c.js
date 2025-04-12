(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{1963:(e,r,t)=>{"use strict";t.d(r,{TextureButton:()=>s});var a=t(3797),n=t(4385),o=t(8459),i=t(9724),l=t(6578);let d=(0,i.F)("",{variants:{variant:{primary:"w-full border border-[1px] dark:border-[2px] border-black/10 dark:border-black bg-gradient-to-b from-black/70 to-black dark:from-white dark:to-white/80 p-[1px] transition duration-300 ease-in-out ",accent:"w-full border-[1px] dark:border-[2px] border-black/10 dark:border-neutral-950 bg-gradient-to-b from-indigo-300/90 to-indigo-500 dark:from-indigo-200/70 dark:to-indigo-500 p-[1px] transition duration-300 ease-in-out ",destructive:"w-full border-[1px] dark:border-[2px] border-black/10 dark:border-neutral-950 bg-gradient-to-b from-red-300/90 to-red-500 dark:from-red-300/90 dark:to-red-500 p-[1px] transition duration-300 ease-in-out ",secondary:"w-full border-[1px] dark:border-[2px] border-black/20 bg-white/50 dark:border-neutral-950 dark:bg-neutral-600/50 p-[1px] transition duration-300 ease-in-out ",minimal:"group  w-full border-[1px] dark:border-[2px] border-black/20 bg-white/50 dark:border-neutral-950 dark:bg-neutral-600/80 p-[1px]  active:bg-neutral-200 dark:active:bg-neutral-800 hover:bg-gradient-to-t hover:from-neutral-100 to-white dark:hover:from-neutral-600/50 dark:hover:to-neutral-600/70 active:bg-neutral-200 dark:active:bg-neutral-800",icon:"group rounded-full border dark:border-neutral-950 border-black/10 dark:bg-neutral-600/50 bg-white/50 p-[1px] active:bg-neutral-200 dark:active:bg-neutral-800 hover:bg-gradient-to-t hover:from-neutral-100 to-white dark:hover:from-neutral-700 dark:hover:to-neutral-600 active:bg-neutral-200 dark:active:bg-neutral-800"},size:{sm:"rounded-[6px]",default:"rounded-[12px]",lg:"rounded-[12px]",icon:"rounded-full"}},defaultVariants:{variant:"primary",size:"default"}}),u=(0,i.F)("w-full h-full flex items-center justify-center text-muted-foreground",{variants:{variant:{primary:"gap-2 bg-gradient-to-b from-neutral-800 to-black  dark:from-neutral-200 dark:to-neutral-50 text-sm text-white/90 dark:text-black/80 transition duration-300 ease-in-out  hover:from-stone-800 hover:to-neutral-800/70 dark:hover:from-stone-200 dark:hover:to-neutral-200 dark:active:from-stone-300 dark:active:to-neutral-300 active:bg-gradient-to-b active:from-black active:to-black ",accent:"gap-2 bg-gradient-to-b from-indigo-400 to-indigo-600 text-sm text-white/90 transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-indigo-400/70 hover:to-indigo-600/70 dark:hover:from-indigo-400/70 dark:hover:to-indigo-600/70 active:bg-gradient-to-b active:from-indigo-400/80 active:to-indigo-600/80 dark:active:from-indigo-400 dark:active:to-indigo-600",destructive:"gap-2 bg-gradient-to-b from-red-400/60 to-red-500/60 text-sm text-white/90 transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-red-400/70 hover:to-red-600/70 dark:hover:from-red-400/70 dark:hover:to-red-500/80 active:bg-gradient-to-b active:from-red-400/80 active:to-red-600/80 dark:active:from-red-400 dark:active:to-red-500",secondary:"bg-gradient-to-b from-neutral-100/80 to-neutral-200/50 dark:from-neutral-800 dark:to-neutral-700/50 text-sm transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-neutral-200/40 hover:to-neutral-300/60 dark:hover:from-neutral-700 dark:hover:to-neutral-700/60 active:bg-gradient-to-b active:from-neutral-200/60 active:to-neutral-300/70 dark:active:from-neutral-800 dark:active:to-neutral-700",minimal:"bg-gradient-to-b from-white to-neutral-50/50 dark:from-neutral-800 dark:to-neutral-700/50 text-sm transition duration-300 ease-in-out group-hover:bg-gradient-to-b group-hover:from-neutral-50/50 group-hover:to-neutral-100/60 dark:group-hover:from-neutral-700 dark:group-hover:to-neutral-700/60 group-active:bg-gradient-to-b group-active:from-neutral-100/60 group-active:to-neutral-100/90 dark:group-active:from-neutral-800 dark:group-active:to-neutral-700",icon:"bg-gradient-to-b from-white to-neutral-50/50 dark:from-neutral-800 dark:to-neutral-700/50 group-active:bg-neutral-200 dark:group-active:bg-neutral-800 rounded-full"},size:{sm:"text-xs rounded-[4px] px-4 py-1",default:"text-sm rounded-[10px] px-4 py-2",lg:"text-base rounded-[10px] px-4 py-2",icon:"rounded-full"}},defaultVariants:{variant:"primary",size:"default"}}),s=n.forwardRef((e,r)=>{let{children:t,variant:n="primary",size:i="default",asChild:s=!1,className:c,...f}=e,m=s?o.DX:"button";return(0,a.jsx)(m,{className:(0,l.cn)(d({variant:n,size:i}),c),ref:r,...f,children:(0,a.jsx)("div",{className:(0,l.cn)(u({variant:n,size:i})),children:t})})});s.displayName="TextureButton"},5014:(e,r,t)=>{"use strict";t.d(r,{s:()=>s});var a=t(6440),n=t(7792),o=t(337);function i(e,r){[...r].reverse().forEach(t=>{let a=e.getVariant(t);a&&(0,n.U)(e,a),e.variantChildren&&e.variantChildren.forEach(e=>{i(e,r)})})}function l(){let e=!1,r=new Set,t={subscribe:e=>(r.add(e),()=>void r.delete(e)),start(t,n){(0,a.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let i=[];return r.forEach(e=>{i.push((0,o._)(e,t,{transitionOverride:n}))}),Promise.all(i)},set:t=>((0,a.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),r.forEach(e=>{Array.isArray(t)?i(e,t):"string"==typeof t?i(e,[t]):(0,n.U)(e,t)})),stop(){r.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,t.stop()})};return t}var d=t(991),u=t(1920);let s=function(){let e=(0,d.M)(l);return(0,u.E)(e.mount,[]),e}},5183:(e,r,t)=>{"use strict";t.d(r,{Q:()=>d});var a=t(3797),n=t(6578),o=t(9127),i=t(9516),l=t(4385);function d(e){let{children:r,defaultValue:t,onValueChange:d,className:u,transition:s,enableHover:c=!1}=e,[f,m]=(0,l.useState)(null),p=(0,l.useId)(),v=e=>{m(e),d&&d(e)};return(0,l.useEffect)(()=>{void 0!==t&&m(t)},[t]),l.Children.map(r,(e,r)=>{let d=e.props["data-id"],m=c?{onMouseEnter:()=>v(d),onMouseLeave:()=>v(null)}:{onClick:()=>v(d)};return(0,l.cloneElement)(e,{key:r,className:(0,n.cn)("relative inline-flex",e.props.className),"data-checked":f===d?"true":"false",...m},(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.N,{initial:!1,children:f===d&&(0,a.jsx)(i.P.div,{layoutId:"background-".concat(p),className:(0,n.cn)("absolute inset-0",u),transition:s,initial:{opacity:+!!t},animate:{opacity:1},exit:{opacity:0}})}),(0,a.jsx)("div",{className:"z-10",children:e.props.children})]}))})}},6364:(e,r,t)=>{"use strict";t.d(r,{default:()=>f});var a=t(3797),n=t(8293),o=t(9516),i=t(6050),l=t.n(i),d=t(5183);let u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},s={hidden:{opacity:0,y:20,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}},c={duration:.3};function f(e){let{blogs:r}=e,t=(0,n.o)();function i(){document.documentElement.animate([{opacity:1,transform:"translateY(0)"},{opacity:.2,transform:"translateY(-35%)"}],{duration:1500,easing:"cubic-bezier(0.87,0,0.13,1)",fill:"forwards",pseudoElement:"::view-transition-old(root)"}),document.documentElement.animate([{clipPath:"polygon(0% 100%,100% 100%,100% 100%,0% 100%)"},{clipPath:"polygon(0% 100%,100% 100%,100% 0%,0% 0%)"}],{duration:1500,easing:"cubic-bezier(0.87,0,0.13,1)",fill:"forwards",pseudoElement:"::view-transition-new(root)"})}return(0,a.jsx)(o.P.main,{className:"space-y-24",variants:u,initial:"hidden",animate:"visible",children:(0,a.jsxs)(o.P.section,{variants:s,transition:c,children:[(0,a.jsx)(l(),{href:"/blogs",onClick:e=>{e.preventDefault(),t.push("/blogs",{onTransitionReady:i})},children:(0,a.jsx)("h3",{className:"mb-3 text-lg font-medium",children:"Recent Blogs"})}),(0,a.jsx)("div",{className:"flex flex-col space-y-0",children:(0,a.jsx)(d.Q,{enableHover:!0,className:"h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80",transition:{type:"spring",bounce:0,duration:.2},children:r.map(e=>(0,a.jsx)(l(),{className:"-mx-3 rounded-xl px-3 py-3",href:"blogs/"+e.slug,"data-id":e.frontmatter.title,onClick:r=>{r.preventDefault(),t.push("blogs/"+e.slug,{onTransitionReady:i})},children:(0,a.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,a.jsx)("h4",{className:"font-normal dark:text-zinc-100",children:e.frontmatter.title}),(0,a.jsx)("p",{className:"text-zinc-500 dark:text-zinc-400",children:e.frontmatter.author})]})},e.frontmatter.title))})})]})})}},6578:(e,r,t)=>{"use strict";t.d(r,{cn:()=>o});var a=t(5066),n=t(1917);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,a.$)(r))}},6711:(e,r,t)=>{"use strict";t.d(r,{ChevronLeftIcon:()=>u});var a=t(3797),n=t(5014),o=t(9516),i=t(4385),l=t(6578);let d={times:[0,.4,1],duration:.5},u=(0,i.forwardRef)((e,r)=>{let{onMouseEnter:t,onMouseLeave:u,className:s,size:c=28,...f}=e,m=(0,n.s)(),p=(0,i.useRef)(!1);(0,i.useImperativeHandle)(r,()=>(p.current=!0,{startAnimation:()=>m.start("animate"),stopAnimation:()=>m.start("normal")}));let v=(0,i.useCallback)(e=>{p.current?null==t||t(e):m.start("animate")},[m,t]),b=(0,i.useCallback)(e=>{p.current?null==u||u(e):m.start("normal")},[m,u]);return(0,a.jsx)("div",{className:(0,l.cn)("cursor-pointer select-none p-2 rounded-full transition-colors duration-200 flex items-center justify-center",s),onMouseEnter:v,onMouseLeave:b,...f,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)(o.P.path,{variants:{normal:{x:0},animate:{x:[0,-2,0]}},transition:d,animate:m,d:"m15 18-6-6 6-6"})})})});u.displayName="ChevronLeftIcon"},7880:(e,r,t)=>{Promise.resolve().then(t.bind(t,6364)),Promise.resolve().then(t.bind(t,6711)),Promise.resolve().then(t.bind(t,1963))},8459:(e,r,t)=>{"use strict";t.d(r,{DX:()=>i});var a=t(4385);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}var o=t(3797),i=function(e){let r=function(e){let r=a.forwardRef((e,r)=>{let{children:t,...o}=e;if(a.isValidElement(t)){var i;let e,l;let d=(i=t,(l=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(l=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref),u=function(e,r){let t={...r};for(let a in r){let n=e[a],o=r[a];/^on[A-Z]/.test(a)?n&&o?t[a]=(...e)=>{o(...e),n(...e)}:n&&(t[a]=n):"style"===a?t[a]={...n,...o}:"className"===a&&(t[a]=[n,o].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props);return t.type!==a.Fragment&&(u.ref=r?function(...e){return r=>{let t=!1,a=e.map(e=>{let a=n(e,r);return t||"function"!=typeof a||(t=!0),a});if(t)return()=>{for(let r=0;r<a.length;r++){let t=a[r];"function"==typeof t?t():n(e[r],null)}}}}(r,d):d),a.cloneElement(t,u)}return a.Children.count(t)>1?a.Children.only(null):null});return r.displayName=`${e}.SlotClone`,r}(e),t=a.forwardRef((e,t)=>{let{children:n,...i}=e,l=a.Children.toArray(n),u=l.find(d);if(u){let e=u.props.children,n=l.map(r=>r!==u?r:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,o.jsx)(r,{...i,ref:t,children:a.isValidElement(e)?a.cloneElement(e,void 0,n):null})}return(0,o.jsx)(r,{...i,ref:t,children:n})});return t.displayName=`${e}.Slot`,t}("Slot"),l=Symbol("radix.slottable");function d(e){return a.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===l}},9724:(e,r,t)=>{"use strict";t.d(r,{F:()=>i});var a=t(5066);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,o=a.$,i=(e,r)=>t=>{var a;if((null==r?void 0:r.variants)==null)return o(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:l}=r,d=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],a=null==l?void 0:l[e];if(null===r)return null;let o=n(r)||n(a);return i[e][o]}),u=t&&Object.entries(t).reduce((e,r)=>{let[t,a]=r;return void 0===a||(e[t]=a),e},{});return o(e,d,null==r?void 0:null===(a=r.compoundVariants)||void 0===a?void 0:a.reduce((e,r)=>{let{class:t,className:a,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...l,...u}[r]):({...l,...u})[r]===t})?[...e,t,a]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},e=>{var r=r=>e(e.s=r);e.O(0,[516,526,499,937,350,358],()=>r(7880)),_N_E=e.O()}]);