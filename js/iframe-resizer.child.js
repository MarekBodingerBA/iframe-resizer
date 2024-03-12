/**
 *  iframe-resizer/child 5.0.0-alpha.1 (iife) 
 *
 *  License:    GPL-3.0
 *  Copyright:  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 * 
 *  Desciption: Keep same and cross domain iFrames sized to their content with
 *              support for window/content resizing, and multiple iFrames.
 *
 *  @preserve
 *  @module @iframe-resizer/child
 *  @version 5.0.0-alpha.1
 *  @license GPL-3.0
 *  @author David J. Bradshaw <dave@bradshaw.net>
 *  @fileoverview Child window script for iframe-resizer.
 *  @copyright (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 *  @see {@link https://github.com/davidjbradshaw/iframe-resizer}
 */


!function(){"use strict";const e="5.0.0-alpha.1",t=10,n="data-iframe-size",o=(e,t,n,o)=>e.addEventListener(t,n,o||!1),i=(e,t,n)=>e.removeEventListener(t,n,!1),a={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},r={height:()=>(ae("Custom height calculation function not defined"),Ie.auto()),width:()=>(ae("Custom width calculation function not defined"),Ce.auto())},c={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},s=128,d={},l="checkVisibility"in window,u="auto",m={reset:1,resetPage:1,init:1},f="[iFrameSizer]",g=f.length,h={max:1,min:1,bodyScroll:1,documentElementScroll:1},p=["body"],w="scroll";let v=!0,b="",y=0,$="",z=null,S="",M=!0,O=!1,E=null,T=!0,I=!1,C=1,P=u,R=!0,x="",L={},N=!0,k=!1,A=!1,H="",B=0,F=0,q="child",D=null,U=!1,W=window.parent,J="*",V=0,j=!1,Q=1,X=w,Y=window,G=()=>{ae("onMessage function not defined")},K=()=>{},Z=null,_=null;const ee=e=>e.charAt(0).toUpperCase()+e.slice(1),te=e=>""!=`${e}`&&void 0!==e;function ne(e){switch(!0){case!te(e):return"";case te(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case te(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(te(e.className)?`.${e.className}`:"")}}const oe=(...e)=>[`${f}[${H}]`,...e].join(" "),ie=(...e)=>k&&console?.log(oe(...e)),ae=(...e)=>console?.warn(oe(...e)),re=(...e)=>console?.warn(window.chrome?oe(...e):oe(...e).replaceAll(/\u001B\[[\d;]*m/gi,""));function ce(){!function(){try{U="iframeParentListener"in window.parent}catch(e){ie("Cross domain iframe detected.")}}(),function(){const e=e=>"true"===e,t=x.slice(g).split(":");H=t[0],y=void 0===t[1]?y:Number(t[1]),O=void 0===t[2]?O:e(t[2]),k=void 0===t[3]?k:e(t[3]),v=void 0===t[6]?v:e(t[6]),$=t[7],P=void 0===t[8]?P:t[8],b=t[9],S=t[10],V=void 0===t[11]?V:Number(t[11]),L.enable=void 0!==t[12]&&e(t[12]),q=void 0===t[13]?q:t[13],X=void 0===t[14]?X:t[14],A=void 0===t[15]?A:e(t[15]),B=void 0===t[16]?B:Number(t[16]),F=void 0===t[17]?F:Number(t[17]),M=void 0===t[18]?M:e(t[18])}(),ie(`Initialising iFrame v${e} (${window.location.href})`),function(){function e(){const e=window.iFrameResizer;ie(`Reading data from page: ${JSON.stringify(e)}`),G=e?.onMessage||G,K=e?.onReady||K,B=e?.offsetHeight||B,F=e?.offsetWidth||F,J=e?.targetOrigin||J,P=e?.heightCalculationMethod||P,X=e?.widthCalculationMethod||X}function t(e,t){return"function"==typeof e&&(ie(`Setup custom ${t}CalcMethod`),r[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),P=t(P,"height"),X=t(X,"width"));ie(`TargetOrigin for parent set to: ${J}`)}(),function(){void 0===$&&($=`${y}px`);se("margin",function(e,t){t.includes("-")&&(ae(`Negative CSS value ignored for ${e}`),t="");return t}("margin",$))}(),se("background",b),se("padding",S),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body),ie('HTML & body height set to "auto !important"')}(),fe(),ge(),function(){let e=!1;const t=t=>document.querySelectorAll(`[${t}]`).forEach((o=>{e=!0,o.removeAttribute(t),o.setAttribute(n,null)}));t("data-iframe-height"),t("data-iframe-width"),e&&re("\n[31;1mDeprecated Attributes[m\n          \nThe [1mdata-iframe-height[m and [1mdata-iframe-width[m attributes have been deprecated and replaced with the single [1mdata-iframe-size[m attribute. Use of the old attributes will be removed in a future version of [3miframe-resizer[m.")}(),document.querySelectorAll(`[${n}]`).length>0&&("auto"===P&&(P="autoOverflow",ie('data-iframe-size attribute found on page, using "autoOverflow" calculation method for height')),"auto"===X&&(X="autoOverflow",ie('data-iframe-size attribute found on page, using "autoOverflow" calculation method for width'))),ue(),Y.parentIFrame={autoResize:e=>(!0===e&&!1===v?(v=!0,he()):!1===e&&!0===v&&(v=!1,le("remove"),D?.disconnect(),z?.disconnect()),ke(0,0,"autoResize",JSON.stringify(v)),v),close(){ke(0,0,"close")},getId:()=>H,getPageInfo(e){if("function"==typeof e)return Z=e,ke(0,0,"pageInfo"),void re("\n[31;1mDeprecated Method (getPageInfo()[m\n          \nThe [1mgetPageInfo()[m method has been deprecated and replaced with  [1mgetParentInfo()[m. Use of this method will be removed in a future version of [3miframe-resizer[m.\n");Z=null,ke(0,0,"pageInfoStop")},getParentInfo(e){if("function"==typeof e)return _=e,void ke(0,0,"parentInfo");_=null,ke(0,0,"parentInfoStop")},moveToAnchor(e){L.findTarget(e)},reset(){Ne("parentIFrame.reset")},scrollTo(e,t){ke(t,e,"scrollTo")},scrollToOffset(e,t){ke(t,e,"scrollToOffset")},sendMessage(e,t){ke(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){P=e,fe()},setWidthCalculationMethod(e){X=e,ge()},setTargetOrigin(e){ie(`Set targetOrigin: ${e}`),J=e},size(e,t){Re("size",`parentIFrame.size(${e||""}${t?`,${t}`:""})`,e,t)}},function(){if(!0!==A)return;function e(e){ke(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){ie(`Add event listener: ${n}`),o(window.document,t,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}(),he(),L=function(){const e=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=e();return{x:parseInt(o.left,t)+parseInt(i.x,t),y:parseInt(o.top,t)+parseInt(i.y,t)}}function i(e){function t(e){const t=n(e);ie(`Moving to in page link (#${o}) at x: ${t.x}y: ${t.y}`),ke(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?(ie(`In page link (#${o}) not found in iFrame, so sending to parent`),ke(0,0,"inPageLink",`#${o}`)):t(a)}function a(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&o(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function c(){o(window,"hashchange",a)}function d(){setTimeout(a,s)}function l(){ie("Setting up location.hash handlers"),r(),c(),d()}L.enable?l():ie("In page linking not enabled");return{findTarget:i}}(),Re("init","Init message from host page"),K(),N=!1}function se(e,t){void 0!==t&&""!==t&&"null"!==t&&(document.body.style.setProperty(e,t),ie(`Body ${e} set to "${t}"`))}function de(e){({add(t){function n(){Re(e.eventName,e.eventType)}d[t]=n,o(window,t,n,{passive:!0})},remove(e){const t=d[e];delete d[e],i(window,e,t)}})[e.method](e.eventName),ie(`${ee(e.method)} event listener: ${e.eventType}`)}function le(e){de({method:e,eventType:"After Print",eventName:"afterprint"}),de({method:e,eventType:"Before Print",eventName:"beforeprint"}),de({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function ue(){const e=document.querySelectorAll(`[${n}]`);I=e.length>0,E=I?e:Me(document)()}function me(e,t,n,o){return t!==e&&(e in n||(ae(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in c&&re(`\n[31;1mDeprecated ${o}CalculationMethod (${e})[m\n\nThis version of [3miframe-resizer[m can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`),ie(`${o} calculation method set to "${e}"`)),e}function fe(){P=me(P,u,Ie,"height")}function ge(){X=me(X,w,Ce,"width")}function he(){!0===v?(le("add"),z=function(){function e(e){e.forEach($e),ue()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return ie("Create <body/> MutationObserver"),t.observe(n,o),t}const n=t();return{disconnect(){ie("Disconnect MutationObserver"),n.disconnect()}}}(),D=new ResizeObserver(pe),ye(window.document)):ie("Auto Resize disabled")}function pe(e){Re("resizeObserver",`resizeObserver: ${ne(e[0].target)}`)}const we=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},ve=()=>[...Me(document)()].filter(we);function be(e){e&&(D.observe(e),ie(`Attached resizeObserver: ${ne(e)}`))}function ye(e){[...ve(),...p.flatMap((t=>e.querySelector(t)))].forEach(be)}function $e(e){"childList"===e.type&&ye(e.target)}function ze(e){const t=ee(e);let n,o=0,i=E.length,r=0,c=performance.now();E.forEach((t=>{if(!I&&l&&!t.checkVisibility(a))return ie(`Skipping non-visable element: ${ne(t)}`),void(i-=1);o=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),o>r&&(r=o,n=t)})),c=performance.now()-c;const s=`\nParsed ${i} element${i=""} in ${c.toPrecision(3)}ms\n${t} ${I?"tagged ":""}element found at: ${r}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(n)}`;return c<1.1||N||I?ie(s):re(`\n[31;1mPerformance Warning[m\n\nCalculateing the page size took an excessive amount of time. To improve performace add the [1mdata-iframe-size[m attribute to the ${e} element on the page.\n${s}`),r}const Se=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Me=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");const Oe={height:0,width:0},Ee={height:0,width:0};function Te(e,t){function n(){return Ee[i]=a,Oe[i]=s,a}const o=e===Ie,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),c=Math.floor(a),s=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e),d=`HTML: ${a}  Page: ${s}`;switch(!0){case!e.enabled():return s;case!t&&0===Ee[i]&&0===Oe[i]:if(ie(`Initial page size values: ${d}`),e.taggedElement(!0)<=r)return n();break;case j&&a===Ee[i]&&s===Oe[i]:return ie(`Size unchanged: ${d}`),Math.max(a,s);case 0===a:return ie(`Page is hidden: ${d}`),s;case!t&&a!==Ee[i]&&s<=Oe[i]:return ie(`New HTML bounding size: ${d}`,"Previous bounding size:",Ee[i]),n();case!t&&a<Ee[i]:return ie("HTML bounding size decreased:",d),n();case s===c||s===r:return ie("HTML bounding size equals page size:",d),n();case a>s:return ie(`Page size < HTML bounding size: ${d}`),n();case!t:ie(`Switch to autoOverflow: ${d}`),function({ceilBoundingSize:e,dimension:t,isHeight:n,scrollSize:o}){const i=n?"bottom":"right";re(`\n[31;1mDetected content overflowing html element[m\n    \nThis causes [3miframe-resizer[m to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${i} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the [1m<HTML>[m element or alternatively you can add the attribute [1mdata-iframe-size[m to the elements on the page that you want [3miframe-resizer[m to use when calculating the dimensions of the iframe. \n  \nWhen present the [3m${i} margin of the ${n?"lowest":"right most"} element[m with a [1mdata-iframe-size[m attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${o} > document size: ${e})`),n?(ie(`Switching from ${P} to autoOverflow`),P="autoOverflow"):(ie(`Switching from ${X} to autoOverflow`),X="autoOverflow")}({ceilBoundingSize:r,dimension:i,isHeight:o,scrollSize:s});break;default:ie(`Content overflowing HTML element: ${d}`)}return Math.max(e.taggedElement(),n())}const Ie={enabled:()=>M,getOffset:()=>B,type:"height",auto:()=>Te(Ie,!1),autoOverflow:()=>Te(Ie,!0),bodyOffset:()=>{const{body:e}=document,n=getComputedStyle(e);return e.offsetHeight+parseInt(n.marginTop,t)+parseInt(n.marginBottom,t)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Ie.bodyOffset(),custom:()=>r.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...Se(Ie)),min:()=>Math.min(...Se(Ie)),grow:()=>Ie.max(),lowestElement:()=>ze("bottom"),taggedElement:()=>ze("bottom")},Ce={enabled:()=>O,getOffset:()=>F,type:"width",auto:()=>Te(Ce,!1),autoOverflow:()=>Te(Ce,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>r.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...Se(Ce)),min:()=>Math.min(...Se(Ce)),rightMostElement:()=>ze("right"),scroll:()=>Math.max(Ce.bodyScroll(),Ce.documentElementScroll()),taggedElement:()=>ze("right")};function Pe(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=V);return i=Math.ceil(void 0===n?Ie[P]():n),a=Math.ceil(void 0===o?Ce[X]():o),M&&e(C,i)||O&&e(Q,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(M&&P in h||O&&X in h)&&Ne(t):(xe(),C=i,Q=a,ke(C,Q,e))}function Re(e,t,n,o){document.hidden?ie("Page hidden - Ignored resize request"):(e in m||ie(`Trigger event: ${t}`),Pe(e,t,n,o))}function xe(){j||(j=!0,ie("Trigger event lock on"),requestAnimationFrame((()=>{j=!1,ie("Trigger event lock off"),ie("--")})))}function Le(e){C=Ie[P](),Q=Ce[X](),ke(C,Q,e)}function Ne(e){const t=P;P=u,ie(`Reset trigger event: ${e}`),xe(),Le("reset"),P=t}function ke(e,t,n,o,i){void 0!==i?ie(`Message targetOrigin: ${i}`):i=J,function(){const a=`${H}:${`${e+B}:${t+F}`}:${n}${void 0===o?"":`:${o}`}`;ie(`Sending message to host page (${a}) via ${U?"sameDomain":"postMessage"}`),U?window.parent.iframeParentListener(f+a):W.postMessage(f+a,i)}()}function Ae(e){const t={init:function(){x=e.data,W=e.source,ce(),T=!1,setTimeout((()=>{R=!1}),s)},reset(){R?ie("Page reset ignored by init"):(ie("Page size reset by host page"),Le("resetPage"))},resize(){Re("resizeParent","Parent window requested size check")},moveToAnchor(){L.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();ie(`PageInfo received from parent: ${e}`),Z?Z(JSON.parse(e)):ke(0,0,"pageInfoStop"),ie(" --")},parentInfo(){const e=o();ie(`ParentInfo received from parent: ${e}`),_?_(Object.freeze(JSON.parse(e))):ke(0,0,"parentInfoStop"),ie(" --")},message(){const e=o();ie(`onMessage called from parent: ${e}`),G(JSON.parse(e)),ie(" --")}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,a=()=>e.data.split(":")[2]in{true:1,false:1};f===`${e.data}`.slice(0,g)&&(!1!==T?a()?t.init():ie(`Ignored message of type "${n()}". Received before initialization.`):function(){const o=n();o in t?t[o]():i()||a()||ae(`Unexpected message (${e.data})`)}())}function He(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function Be(e){return Ae(e),Y}"undefined"!=typeof window&&(window.iframeChildListener=e=>Ae({data:e,sameDomian:!0}),o(window,"message",Ae),o(window,"readystatechange",He),He());try{top?.document?.getElementById("banner")&&(Y={},window.mockMsgListener=Be,i(window,"message",Ae),define([],(()=>Be)))}catch(e){}}();
