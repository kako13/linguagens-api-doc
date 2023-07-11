"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[814],{92503:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(87462),i=t(67294),l=t(86010),o=t(95999),r=t(86668);const c={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function s(e){let{as:n,id:t,...s}=e;const{navbar:{hideOnScroll:m}}=(0,r.L)();return"h1"!==n&&t?i.createElement(n,(0,a.Z)({},s,{className:(0,l.Z)("anchor",m?c.anchorWithHideOnScrollNavbar:c.anchorWithStickyNavbar),id:t}),s.children,i.createElement("a",{className:"hash-link",href:`#${t}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(n,(0,a.Z)({},s,{id:void 0}))}},55203:(e,n,t)=>{t.d(n,{Z:()=>A});var a=t(67294),i=t(3905),l=t(87462),o=t(35742);var r=t(170);var c=t(39960);var s=t(86010),m=t(72389),d=t(86043);const u={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function f(e,n){return!!e&&(e===n||f(e.parentElement,n))}function p(e){let{summary:n,children:t,...i}=e;const o=(0,m.Z)(),r=(0,a.useRef)(null),{collapsed:c,setCollapsed:p}=(0,d.u)({initialState:!i.open}),[v,E]=(0,a.useState)(i.open);return a.createElement("details",(0,l.Z)({},i,{ref:r,open:v,"data-collapsed":c,className:(0,s.Z)(u.details,o&&u.isBrowser,i.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;h(n)&&f(n,r.current)&&(e.preventDefault(),c?(p(!1),E(!0)):p(!0))}}),n??a.createElement("summary",null,"Details"),a.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),E(!e)}},a.createElement("div",{className:u.collapsibleContent},t)))}const v={details:"details_b_Ee"},E="alert alert--info";function b(e){let{...n}=e;return a.createElement(p,(0,l.Z)({},n,{className:(0,s.Z)(E,v.details,n.className)}))}var g=t(92503);function C(e){return a.createElement(g.Z,e)}const N={containsTaskList:"containsTaskList_mC6p"};const Z={img:"img_ev3q"};var k=t(35281),y=t(95999);const T="admonition_LlT9",_="admonitionHeading_tbUL",L="admonitionIcon_kALy",H="admonitionContent_S0QG";var z=t(25108);const x={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(y.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(y.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(y.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(y.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(y.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},S={secondary:"note",important:"info",success:"tip",warning:"danger"};function w(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:i}}(e.children);return{...e,title:e.title??n,children:t}}const M={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...i}=e.props;return a.createElement(e.props.originalType,i)}return e}(e):e));return a.createElement(o.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(r.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){return a.createElement(r.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(b,(0,l.Z)({},e,{summary:t}),i)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(n=e.className,(0,s.Z)(n,n?.includes("contains-task-list")&&N.containsTaskList))}));var n},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(n=e.className,(0,s.Z)(n,Z.img))}));var n},h1:e=>a.createElement(C,(0,l.Z)({as:"h1"},e)),h2:e=>a.createElement(C,(0,l.Z)({as:"h2"},e)),h3:e=>a.createElement(C,(0,l.Z)({as:"h3"},e)),h4:e=>a.createElement(C,(0,l.Z)({as:"h4"},e)),h5:e=>a.createElement(C,(0,l.Z)({as:"h5"},e)),h6:e=>a.createElement(C,(0,l.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:i,icon:l}=w(e),o=function(e){const n=S[e]??e,t=x[n];return t||(z.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),x.info)}(t),r=i??o.label,{iconComponent:c}=o,m=l??a.createElement(c,null);return a.createElement("div",{className:(0,s.Z)(k.k.common.admonition,k.k.common.admonitionType(e.type),"alert",`alert--${o.infimaClassName}`,T)},a.createElement("div",{className:_},a.createElement("span",{className:L},m),r),a.createElement("div",{className:H},n))},mermaid:t(11875).Z};function A(e){let{children:n}=e;return a.createElement(i.Zo,{components:M},n)}},39407:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),i=t(67294),l=t(86010),o=t(38011);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return i.createElement("div",{className:(0,l.Z)(r.tableOfContents,"thin-scrollbar",n)},i.createElement(o.Z,(0,a.Z)({},t,{linkClassName:c,linkActiveClassName:s})))}},38011:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),i=t(67294),l=t(86668),o=t(39665),r=t(96841);function c(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?i.createElement("ul",{className:l?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const s=i.memo(c);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const f=(0,l.L)(),p=d??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,E=(0,o.b)({toc:n,minHeadingLevel:p,maxHeadingLevel:v}),b=(0,i.useMemo)((()=>{if(c&&m)return{linkClassName:c,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:v}}),[c,m,p,v]);return(0,r.S)(b),i.createElement(s,(0,a.Z)({toc:E,className:t,linkClassName:c},h))}}}]);