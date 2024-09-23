function zg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ah={exports:{}},vo={},lh={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),Bg=Symbol.for("react.fragment"),$g=Symbol.for("react.strict_mode"),Vg=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),Gg=Symbol.for("react.forward_ref"),Kg=Symbol.for("react.suspense"),Yg=Symbol.for("react.memo"),qg=Symbol.for("react.lazy"),Nc=Symbol.iterator;function Qg(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var uh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ch=Object.assign,dh={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=dh,this.updater=n||uh}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fh(){}fh.prototype=Ir.prototype;function nu(e,t,n){this.props=e,this.context=t,this.refs=dh,this.updater=n||uh}var ru=nu.prototype=new fh;ru.constructor=nu;ch(ru,Ir.prototype);ru.isPureReactComponent=!0;var Ac=Array.isArray,hh=Object.prototype.hasOwnProperty,iu={current:null},ph={key:!0,ref:!0,__self:!0,__source:!0};function mh(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)hh.call(t,r)&&!ph.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ji,type:e,key:s,ref:o,props:i,_owner:iu.current}}function Xg(e,t){return{$$typeof:ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function su(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function Jg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oc=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jg(""+e.key):t.toString(36)}function ms(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ji:case Ug:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Go(o,0):r,Ac(i)?(n="",e!=null&&(n=e.replace(Oc,"$&/")+"/"),ms(i,t,n,"",function(u){return u})):i!=null&&(su(i)&&(i=Xg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Oc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ac(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Go(s,a);o+=ms(s,t,n,l,i)}else if(l=Qg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Go(s,a++),o+=ms(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qi(e,t,n){if(e==null)return e;var r=[],i=0;return ms(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Zg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},gs={transition:null},ev={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:gs,ReactCurrentOwner:iu};function gh(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Qi,forEach:function(e,t,n){Qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qi(e,function(){t++}),t},toArray:function(e){return Qi(e,function(t){return t})||[]},only:function(e){if(!su(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Ir;M.Fragment=Bg;M.Profiler=Vg;M.PureComponent=nu;M.StrictMode=$g;M.Suspense=Kg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;M.act=gh;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ch({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=iu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)hh.call(t,l)&&!ph.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ji,type:e.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Wg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hg,_context:e},e.Consumer=e};M.createElement=mh;M.createFactory=function(e){var t=mh.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Gg,render:e}};M.isValidElement=su;M.lazy=function(e){return{$$typeof:qg,_payload:{_status:-1,_result:e},_init:Zg}};M.memo=function(e,t){return{$$typeof:Yg,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=gs.transition;gs.transition={};try{e()}finally{gs.transition=t}};M.unstable_act=gh;M.useCallback=function(e,t){return ge.current.useCallback(e,t)};M.useContext=function(e){return ge.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};M.useEffect=function(e,t){return ge.current.useEffect(e,t)};M.useId=function(){return ge.current.useId()};M.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ge.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};M.useRef=function(e){return ge.current.useRef(e)};M.useState=function(e){return ge.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ge.current.useTransition()};M.version="18.3.1";lh.exports=M;var S=lh.exports;const ou=oh(S),tv=zg({__proto__:null,default:ou},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=S,rv=Symbol.for("react.element"),iv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,ov=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function vh(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)sv.call(t,r)&&!av.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rv,type:e,key:s,ref:o,props:i,_owner:ov.current}}vo.Fragment=iv;vo.jsx=vh;vo.jsxs=vh;ah.exports=vo;var c=ah.exports,yh={exports:{}},Ae={},wh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var R=C.length;C.push(O);e:for(;0<R;){var X=R-1>>>1,re=C[X];if(0<i(re,O))C[X]=O,C[R]=re,R=X;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],R=C.pop();if(R!==O){C[0]=R;e:for(var X=0,re=C.length,Yi=re>>>1;X<Yi;){var hn=2*(X+1)-1,Wo=C[hn],pn=hn+1,qi=C[pn];if(0>i(Wo,R))pn<re&&0>i(qi,Wo)?(C[X]=qi,C[pn]=R,X=pn):(C[X]=Wo,C[hn]=R,X=hn);else if(pn<re&&0>i(qi,R))C[X]=qi,C[pn]=R,X=pn;else break e}}return O}function i(C,O){var R=C.sortIndex-O.sortIndex;return R!==0?R:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,m=3,v=!1,y=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function w(C){if(x=!1,g(C),!y)if(n(l)!==null)y=!0,Vo(b);else{var O=n(u);O!==null&&Ho(w,O.startTime-C)}}function b(C,O){y=!1,x&&(x=!1,p(N),N=-1),v=!0;var R=m;try{for(g(O),f=n(l);f!==null&&(!(f.expirationTime>O)||C&&!Ue());){var X=f.callback;if(typeof X=="function"){f.callback=null,m=f.priorityLevel;var re=X(f.expirationTime<=O);O=e.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&r(l),g(O)}else r(l);f=n(l)}if(f!==null)var Yi=!0;else{var hn=n(u);hn!==null&&Ho(w,hn.startTime-O),Yi=!1}return Yi}finally{f=null,m=R,v=!1}}var T=!1,I=null,N=-1,B=5,j=-1;function Ue(){return!(e.unstable_now()-j<B)}function Rr(){if(I!==null){var C=e.unstable_now();j=C;var O=!0;try{O=I(!0,C)}finally{O?jr():(T=!1,I=null)}}else T=!1}var jr;if(typeof h=="function")jr=function(){h(Rr)};else if(typeof MessageChannel<"u"){var Pc=new MessageChannel,Fg=Pc.port2;Pc.port1.onmessage=Rr,jr=function(){Fg.postMessage(null)}}else jr=function(){_(Rr,0)};function Vo(C){I=C,T||(T=!0,jr())}function Ho(C,O){N=_(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Vo(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var R=m;m=O;try{return C()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=m;m=C;try{return O()}finally{m=R}},e.unstable_scheduleCallback=function(C,O,R){var X=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?X+R:X):R=X,C){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=R+re,C={id:d++,callback:O,priorityLevel:C,startTime:R,expirationTime:re,sortIndex:-1},R>X?(C.sortIndex=R,t(u,C),n(l)===null&&C===n(u)&&(x?(p(N),N=-1):x=!0,Ho(w,R-X))):(C.sortIndex=re,t(l,C),y||v||(y=!0,Vo(b))),C},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(C){var O=m;return function(){var R=m;m=O;try{return C.apply(this,arguments)}finally{m=R}}}})(xh);wh.exports=xh;var lv=wh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=S,Ne=lv;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kh=new Set,ci={};function zn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(ci[e]=t,e=0;e<t.length;e++)kh.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rc={},jc={};function dv(e){return La.call(jc,e)?!0:La.call(Rc,e)?!1:cv.test(e)?jc[e]=!0:(Rc[e]=!0,!1)}function fv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hv(e,t,n,r){if(t===null||typeof t>"u"||fv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var au=/[\-:]([a-z])/g;function lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(au,lu);le[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(au,lu);le[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(au,lu);le[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function uu(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hv(t,n,i,r)&&(n=null),r||i===null?dv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),cu=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),_h=Symbol.for("react.provider"),bh=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Sh=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ko;function Vr(e){if(Ko===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ko=t&&t[1]||""}return`
`+Ko+e}var Yo=!1;function qo(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function pv(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Kn:return"Portal";case Ma:return"Profiler";case cu:return"StrictMode";case Da:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bh:return(e.displayName||"Context")+".Consumer";case _h:return(e._context.displayName||"Context")+".Provider";case du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fu:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function mv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gv(e){var t=Eh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=gv(e))}function Ih(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Eh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ch(e,t){t=t.checked,t!=null&&uu(e,"checked",t,!1)}function Ba(e,t){Ch(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$a(e,t.type,n):t.hasOwnProperty("defaultValue")&&$a(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $a(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Hr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rn(n)}}function Th(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ph(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ph(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,Nh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vv=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){vv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function Ah(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function Oh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ah(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yv=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,t){if(t){if(yv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,lr=null,ur=null;function Uc(e){if(e=Di(e)){if(typeof Ya!="function")throw Error(k(280));var t=e.stateNode;t&&(t=_o(t),Ya(e.stateNode,e.type,t))}}function Rh(e){lr?ur?ur.push(e):ur=[e]:lr=e}function jh(){if(lr){var e=lr,t=ur;if(ur=lr=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function Lh(e,t){return e(t)}function Mh(){}var Qo=!1;function Dh(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return Lh(e,t,n)}finally{Qo=!1,(lr!==null||ur!==null)&&(Mh(),jh())}}function fi(e,t){var n=e.stateNode;if(n===null)return null;var r=_o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var qa=!1;if(kt)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){qa=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{qa=!1}function wv(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Xr=!1,js=null,Ls=!1,Qa=null,xv={onError:function(e){Xr=!0,js=e}};function kv(e,t,n,r,i,s,o,a,l){Xr=!1,js=null,wv.apply(xv,arguments)}function _v(e,t,n,r,i,s,o,a,l){if(kv.apply(this,arguments),Xr){if(Xr){var u=js;Xr=!1,js=null}else throw Error(k(198));Ls||(Ls=!0,Qa=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bc(e){if(Un(e)!==e)throw Error(k(188))}function bv(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bc(i),e;if(s===r)return Bc(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function zh(e){return e=bv(e),e!==null?Uh(e):null}function Uh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uh(e);if(t!==null)return t;e=e.sibling}return null}var Bh=Ne.unstable_scheduleCallback,$c=Ne.unstable_cancelCallback,Sv=Ne.unstable_shouldYield,Ev=Ne.unstable_requestPaint,J=Ne.unstable_now,Iv=Ne.unstable_getCurrentPriorityLevel,pu=Ne.unstable_ImmediatePriority,$h=Ne.unstable_UserBlockingPriority,Ms=Ne.unstable_NormalPriority,Cv=Ne.unstable_LowPriority,Vh=Ne.unstable_IdlePriority,yo=null,nt=null;function Tv(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Av,Pv=Math.log,Nv=Math.LN2;function Av(e){return e>>>=0,e===0?32:31-(Pv(e)/Nv|0)|0}var es=64,ts=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wr(a):(s&=o,s!==0&&(r=Wr(s)))}else o=n&~i,o!==0?r=Wr(o):s!==0&&(r=Wr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),i=1<<n,r|=e[n],t&=~i;return r}function Ov(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-We(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ov(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hh(){var e=es;return es<<=1,!(es&4194240)&&(es=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function jv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-We(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function mu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Wh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gh,gu,Kh,Yh,qh,Ja=!1,ns=[],Wt=null,Gt=null,Kt=null,hi=new Map,pi=new Map,Dt=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function Dr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Di(t),t!==null&&gu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mv(e,t,n,r,i){switch(t){case"focusin":return Wt=Dr(Wt,e,t,n,r,i),!0;case"dragenter":return Gt=Dr(Gt,e,t,n,r,i),!0;case"mouseover":return Kt=Dr(Kt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return hi.set(s,Dr(hi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,pi.set(s,Dr(pi.get(s)||null,e,t,n,r,i)),!0}return!1}function Qh(e){var t=wn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Fh(n),t!==null){e.blockedOn=t,qh(e.priority,function(){Kh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return t=Di(n),t!==null&&gu(t),e.blockedOn=n,!1;t.shift()}return!0}function Hc(e,t,n){vs(e)&&n.delete(t)}function Dv(){Ja=!1,Wt!==null&&vs(Wt)&&(Wt=null),Gt!==null&&vs(Gt)&&(Gt=null),Kt!==null&&vs(Kt)&&(Kt=null),hi.forEach(Hc),pi.forEach(Hc)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Dv)))}function mi(e){function t(i){return Fr(i,e)}if(0<ns.length){Fr(ns[0],e);for(var n=1;n<ns.length;n++){var r=ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&Fr(Wt,e),Gt!==null&&Fr(Gt,e),Kt!==null&&Fr(Kt,e),hi.forEach(t),pi.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Qh(n),n.blockedOn===null&&Dt.shift()}var cr=Nt.ReactCurrentBatchConfig,Fs=!0;function Fv(e,t,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=1,vu(e,t,n,r)}finally{F=i,cr.transition=s}}function zv(e,t,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=4,vu(e,t,n,r)}finally{F=i,cr.transition=s}}function vu(e,t,n,r){if(Fs){var i=Za(e,t,n,r);if(i===null)aa(e,t,r,zs,n),Vc(e,r);else if(Mv(i,e,t,n,r))r.stopPropagation();else if(Vc(e,r),t&4&&-1<Lv.indexOf(e)){for(;i!==null;){var s=Di(i);if(s!==null&&Gh(s),s=Za(e,t,n,r),s===null&&aa(e,t,r,zs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else aa(e,t,r,null,n)}}var zs=null;function Za(e,t,n,r){if(zs=null,e=hu(r),e=wn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zs=e,null}function Xh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iv()){case pu:return 1;case $h:return 4;case Ms:case Cv:return 16;case Vh:return 536870912;default:return 16}default:return 16}}var Bt=null,yu=null,ys=null;function Jh(){if(ys)return ys;var e,t=yu,n=t.length,r,i="value"in Bt?Bt.value:Bt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ys=i.slice(e,1<r?1-r:void 0)}function ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function Wc(){return!1}function Oe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rs:Wc,this.isPropagationStopped=Wc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=Oe(Cr),Mi=q({},Cr,{view:0,detail:0}),Uv=Oe(Mi),Jo,Zo,zr,wo=q({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Jo=e.screenX-zr.screenX,Zo=e.screenY-zr.screenY):Zo=Jo=0,zr=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),Gc=Oe(wo),Bv=q({},wo,{dataTransfer:0}),$v=Oe(Bv),Vv=q({},Mi,{relatedTarget:0}),ea=Oe(Vv),Hv=q({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=Oe(Hv),Gv=q({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=Oe(Gv),Yv=q({},Cr,{data:0}),Kc=Oe(Yv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xv[e])?!!t[e]:!1}function xu(){return Jv}var Zv=q({},Mi,{key:function(e){if(e.key){var t=qv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ey=Oe(Zv),ty=q({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=Oe(ty),ny=q({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),ry=Oe(ny),iy=q({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Oe(iy),oy=q({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Oe(oy),ly=[9,13,27,32],ku=kt&&"CompositionEvent"in window,Jr=null;kt&&"documentMode"in document&&(Jr=document.documentMode);var uy=kt&&"TextEvent"in window&&!Jr,Zh=kt&&(!ku||Jr&&8<Jr&&11>=Jr),qc=" ",Qc=!1;function ep(e,t){switch(e){case"keyup":return ly.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function cy(e,t){switch(e){case"compositionend":return tp(t);case"keypress":return t.which!==32?null:(Qc=!0,qc);case"textInput":return e=t.data,e===qc&&Qc?null:e;default:return null}}function dy(e,t){if(qn)return e==="compositionend"||!ku&&ep(e,t)?(e=Jh(),ys=yu=Bt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zh&&t.locale!=="ko"?null:t.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fy[e.type]:t==="textarea"}function np(e,t,n,r){Rh(r),t=Us(t,"onChange"),0<t.length&&(n=new wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,gi=null;function hy(e){hp(e,0)}function xo(e){var t=Jn(e);if(Ih(t))return e}function py(e,t){if(e==="change")return t}var rp=!1;if(kt){var ta;if(kt){var na="oninput"in document;if(!na){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),na=typeof Jc.oninput=="function"}ta=na}else ta=!1;rp=ta&&(!document.documentMode||9<document.documentMode)}function Zc(){Zr&&(Zr.detachEvent("onpropertychange",ip),gi=Zr=null)}function ip(e){if(e.propertyName==="value"&&xo(gi)){var t=[];np(t,gi,e,hu(e)),Dh(hy,t)}}function my(e,t,n){e==="focusin"?(Zc(),Zr=t,gi=n,Zr.attachEvent("onpropertychange",ip)):e==="focusout"&&Zc()}function gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(gi)}function vy(e,t){if(e==="click")return xo(t)}function yy(e,t){if(e==="input"||e==="change")return xo(t)}function wy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:wy;function vi(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!La.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function op(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xy(e){var t=op(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sp(n.ownerDocument.documentElement,n)){if(r!==null&&_u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=td(n,s);var o=td(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ky=kt&&"documentMode"in document&&11>=document.documentMode,Qn=null,el=null,ei=null,tl=!1;function nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||Qn==null||Qn!==Rs(r)||(r=Qn,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&vi(ei,r)||(ei=r,r=Us(el,"onSelect"),0<r.length&&(t=new wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionend:is("Transition","TransitionEnd")},ra={},ap={};kt&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function ko(e){if(ra[e])return ra[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ap)return ra[e]=t[n];return e}var lp=ko("animationend"),up=ko("animationiteration"),cp=ko("animationstart"),dp=ko("transitionend"),fp=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){fp.set(e,t),zn(t,[e])}for(var ia=0;ia<rd.length;ia++){var sa=rd[ia],_y=sa.toLowerCase(),by=sa[0].toUpperCase()+sa.slice(1);un(_y,"on"+by)}un(lp,"onAnimationEnd");un(up,"onAnimationIteration");un(cp,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(dp,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_v(r,t,void 0,e),e.currentTarget=null}function hp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;id(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;id(i,a,u),s=l}}}if(Ls)throw e=Qa,Ls=!1,Qa=null,e}function $(e,t){var n=t[ol];n===void 0&&(n=t[ol]=new Set);var r=e+"__bubble";n.has(r)||(pp(t,e,2,!1),n.add(r))}function oa(e,t,n){var r=0;t&&(r|=4),pp(n,e,r,t)}var ss="_reactListening"+Math.random().toString(36).slice(2);function yi(e){if(!e[ss]){e[ss]=!0,kh.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||oa(n,!1,e),oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ss]||(t[ss]=!0,oa("selectionchange",!1,t))}}function pp(e,t,n,r){switch(Xh(t)){case 1:var i=Fv;break;case 4:i=zv;break;default:i=vu}n=i.bind(null,t,n,e),i=void 0,!qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function aa(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Dh(function(){var u=s,d=hu(n),f=[];e:{var m=fp.get(e);if(m!==void 0){var v=wu,y=e;switch(e){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":v=ey;break;case"focusin":y="focus",v=ea;break;case"focusout":y="blur",v=ea;break;case"beforeblur":case"afterblur":v=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ry;break;case lp:case up:case cp:v=Wv;break;case dp:v=sy;break;case"scroll":v=Uv;break;case"wheel":v=ay;break;case"copy":case"cut":case"paste":v=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yc}var x=(t&4)!==0,_=!x&&e==="scroll",p=x?m!==null?m+"Capture":null:m;x=[];for(var h=u,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=fi(h,p),w!=null&&x.push(wi(h,w,g)))),_)break;h=h.return}0<x.length&&(m=new v(m,y,null,n,d),f.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Ka&&(y=n.relatedTarget||n.fromElement)&&(wn(y)||y[_t]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?wn(y):null,y!==null&&(_=Un(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Gc,w="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Yc,w="onPointerLeave",p="onPointerEnter",h="pointer"),_=v==null?m:Jn(v),g=y==null?m:Jn(y),m=new x(w,h+"leave",v,n,d),m.target=_,m.relatedTarget=g,w=null,wn(d)===u&&(x=new x(p,h+"enter",y,n,d),x.target=g,x.relatedTarget=_,w=x),_=w,v&&y)t:{for(x=v,p=y,h=0,g=x;g;g=Gn(g))h++;for(g=0,w=p;w;w=Gn(w))g++;for(;0<h-g;)x=Gn(x),h--;for(;0<g-h;)p=Gn(p),g--;for(;h--;){if(x===p||p!==null&&x===p.alternate)break t;x=Gn(x),p=Gn(p)}x=null}else x=null;v!==null&&sd(f,m,v,x,!1),y!==null&&_!==null&&sd(f,_,y,x,!0)}}e:{if(m=u?Jn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var b=py;else if(Xc(m))if(rp)b=yy;else{b=gy;var T=my}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=vy);if(b&&(b=b(e,u))){np(f,b,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&$a(m,"number",m.value)}switch(T=u?Jn(u):window,e){case"focusin":(Xc(T)||T.contentEditable==="true")&&(Qn=T,el=u,ei=null);break;case"focusout":ei=el=Qn=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,nd(f,n,d);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":nd(f,n,d)}var I;if(ku)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else qn?ep(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Zh&&n.locale!=="ko"&&(qn||N!=="onCompositionStart"?N==="onCompositionEnd"&&qn&&(I=Jh()):(Bt=d,yu="value"in Bt?Bt.value:Bt.textContent,qn=!0)),T=Us(u,N),0<T.length&&(N=new Kc(N,e,null,n,d),f.push({event:N,listeners:T}),I?N.data=I:(I=tp(n),I!==null&&(N.data=I)))),(I=uy?cy(e,n):dy(e,n))&&(u=Us(u,"onBeforeInput"),0<u.length&&(d=new Kc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=I))}hp(f,t)})}function wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Us(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fi(e,n),s!=null&&r.unshift(wi(e,s,i)),s=fi(e,t),s!=null&&r.push(wi(e,s,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fi(n,s),l!=null&&o.unshift(wi(n,l,a))):i||(l=fi(n,s),l!=null&&o.push(wi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ey=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Iy,"")}function os(e,t,n){if(t=od(t),od(e)!==t&&n)throw Error(k(425))}function Bs(){}var nl=null,rl=null;function il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(Py)}:sl;function Py(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mi(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),Je="__reactFiber$"+Tr,xi="__reactProps$"+Tr,_t="__reactContainer$"+Tr,ol="__reactEvents$"+Tr,Ny="__reactListeners$"+Tr,Ay="__reactHandles$"+Tr;function wn(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[Je])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function Di(e){return e=e[Je]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function _o(e){return e[xi]||null}var al=[],Zn=-1;function cn(e){return{current:e}}function V(e){0>Zn||(e.current=al[Zn],al[Zn]=null,Zn--)}function U(e,t){Zn++,al[Zn]=e.current,e.current=t}var sn={},fe=cn(sn),xe=cn(!1),Tn=sn;function yr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function $s(){V(xe),V(fe)}function ud(e,t,n){if(fe.current!==sn)throw Error(k(168));U(fe,t),U(xe,n)}function mp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,mv(e)||"Unknown",i));return q({},n,r)}function Vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Tn=fe.current,U(fe,e),U(xe,xe.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=mp(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,V(xe),V(fe),U(fe,e)):V(xe),U(xe,n)}var dt=null,bo=!1,ua=!1;function gp(e){dt===null?dt=[e]:dt.push(e)}function Oy(e){bo=!0,gp(e)}function dn(){if(!ua&&dt!==null){ua=!0;var e=0,t=F;try{var n=dt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,bo=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Bh(pu,dn),i}finally{F=t,ua=!1}}return null}var er=[],tr=0,Hs=null,Ws=0,je=[],Le=0,Pn=null,pt=1,mt="";function mn(e,t){er[tr++]=Ws,er[tr++]=Hs,Hs=e,Ws=t}function vp(e,t,n){je[Le++]=pt,je[Le++]=mt,je[Le++]=Pn,Pn=e;var r=pt;e=mt;var i=32-We(r)-1;r&=~(1<<i),n+=1;var s=32-We(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pt=1<<32-We(t)+i|n<<i|r,mt=s+e}else pt=1<<s|n<<i|r,mt=e}function bu(e){e.return!==null&&(mn(e,1),vp(e,1,0))}function Su(e){for(;e===Hs;)Hs=er[--tr],er[tr]=null,Ws=er[--tr],er[tr]=null;for(;e===Pn;)Pn=je[--Le],je[Le]=null,mt=je[--Le],je[Le]=null,pt=je[--Le],je[Le]=null}var Ie=null,Ee=null,W=!1,He=null;function yp(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Ee=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Ee=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(W){var t=Ee;if(t){var n=t;if(!dd(e,t)){if(ll(e))throw Error(k(418));t=Yt(n.nextSibling);var r=Ie;t&&dd(e,t)?yp(r,n):(e.flags=e.flags&-4097|2,W=!1,Ie=e)}}else{if(ll(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Ie=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function as(e){if(e!==Ie)return!1;if(!W)return fd(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!il(e.type,e.memoizedProps)),t&&(t=Ee)){if(ll(e))throw wp(),Error(k(418));for(;t;)yp(e,t),t=Yt(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Ie?Yt(e.stateNode.nextSibling):null;return!0}function wp(){for(var e=Ee;e;)e=Yt(e.nextSibling)}function wr(){Ee=Ie=null,W=!1}function Eu(e){He===null?He=[e]:He.push(e)}var Ry=Nt.ReactCurrentBatchConfig;function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ls(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hd(e){var t=e._init;return t(e._payload)}function xp(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Jt(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,w){return h===null||h.tag!==6?(h=ga(g,p.mode,w),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,w){var b=g.type;return b===Yn?d(p,h,g.props.children,w,g.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Lt&&hd(b)===h.type)?(w=i(h,g.props),w.ref=Ur(p,h,g),w.return=p,w):(w=Is(g.type,g.key,g.props,null,p.mode,w),w.ref=Ur(p,h,g),w.return=p,w)}function u(p,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=va(g,p.mode,w),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function d(p,h,g,w,b){return h===null||h.tag!==7?(h=En(g,p.mode,w,b),h.return=p,h):(h=i(h,g),h.return=p,h)}function f(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ga(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Xi:return g=Is(h.type,h.key,h.props,null,p.mode,g),g.ref=Ur(p,null,h),g.return=p,g;case Kn:return h=va(h,p.mode,g),h.return=p,h;case Lt:var w=h._init;return f(p,w(h._payload),g)}if(Hr(h)||Lr(h))return h=En(h,p.mode,g,null),h.return=p,h;ls(p,h)}return null}function m(p,h,g,w){var b=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(p,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xi:return g.key===b?l(p,h,g,w):null;case Kn:return g.key===b?u(p,h,g,w):null;case Lt:return b=g._init,m(p,h,b(g._payload),w)}if(Hr(g)||Lr(g))return b!==null?null:d(p,h,g,w,null);ls(p,g)}return null}function v(p,h,g,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,a(h,p,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xi:return p=p.get(w.key===null?g:w.key)||null,l(h,p,w,b);case Kn:return p=p.get(w.key===null?g:w.key)||null,u(h,p,w,b);case Lt:var T=w._init;return v(p,h,g,T(w._payload),b)}if(Hr(w)||Lr(w))return p=p.get(g)||null,d(h,p,w,b,null);ls(h,w)}return null}function y(p,h,g,w){for(var b=null,T=null,I=h,N=h=0,B=null;I!==null&&N<g.length;N++){I.index>N?(B=I,I=null):B=I.sibling;var j=m(p,I,g[N],w);if(j===null){I===null&&(I=B);break}e&&I&&j.alternate===null&&t(p,I),h=s(j,h,N),T===null?b=j:T.sibling=j,T=j,I=B}if(N===g.length)return n(p,I),W&&mn(p,N),b;if(I===null){for(;N<g.length;N++)I=f(p,g[N],w),I!==null&&(h=s(I,h,N),T===null?b=I:T.sibling=I,T=I);return W&&mn(p,N),b}for(I=r(p,I);N<g.length;N++)B=v(I,p,N,g[N],w),B!==null&&(e&&B.alternate!==null&&I.delete(B.key===null?N:B.key),h=s(B,h,N),T===null?b=B:T.sibling=B,T=B);return e&&I.forEach(function(Ue){return t(p,Ue)}),W&&mn(p,N),b}function x(p,h,g,w){var b=Lr(g);if(typeof b!="function")throw Error(k(150));if(g=b.call(g),g==null)throw Error(k(151));for(var T=b=null,I=h,N=h=0,B=null,j=g.next();I!==null&&!j.done;N++,j=g.next()){I.index>N?(B=I,I=null):B=I.sibling;var Ue=m(p,I,j.value,w);if(Ue===null){I===null&&(I=B);break}e&&I&&Ue.alternate===null&&t(p,I),h=s(Ue,h,N),T===null?b=Ue:T.sibling=Ue,T=Ue,I=B}if(j.done)return n(p,I),W&&mn(p,N),b;if(I===null){for(;!j.done;N++,j=g.next())j=f(p,j.value,w),j!==null&&(h=s(j,h,N),T===null?b=j:T.sibling=j,T=j);return W&&mn(p,N),b}for(I=r(p,I);!j.done;N++,j=g.next())j=v(I,p,N,j.value,w),j!==null&&(e&&j.alternate!==null&&I.delete(j.key===null?N:j.key),h=s(j,h,N),T===null?b=j:T.sibling=j,T=j);return e&&I.forEach(function(Rr){return t(p,Rr)}),W&&mn(p,N),b}function _(p,h,g,w){if(typeof g=="object"&&g!==null&&g.type===Yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xi:e:{for(var b=g.key,T=h;T!==null;){if(T.key===b){if(b=g.type,b===Yn){if(T.tag===7){n(p,T.sibling),h=i(T,g.props.children),h.return=p,p=h;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Lt&&hd(b)===T.type){n(p,T.sibling),h=i(T,g.props),h.ref=Ur(p,T,g),h.return=p,p=h;break e}n(p,T);break}else t(p,T);T=T.sibling}g.type===Yn?(h=En(g.props.children,p.mode,w,g.key),h.return=p,p=h):(w=Is(g.type,g.key,g.props,null,p.mode,w),w.ref=Ur(p,h,g),w.return=p,p=w)}return o(p);case Kn:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=va(g,p.mode,w),h.return=p,p=h}return o(p);case Lt:return T=g._init,_(p,h,T(g._payload),w)}if(Hr(g))return y(p,h,g,w);if(Lr(g))return x(p,h,g,w);ls(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=ga(g,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return _}var xr=xp(!0),kp=xp(!1),Gs=cn(null),Ks=null,nr=null,Iu=null;function Cu(){Iu=nr=Ks=null}function Tu(e){var t=Gs.current;V(Gs),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Ks=e,Iu=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Iu!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Ks===null)throw Error(k(308));nr=e,Ks.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var xn=null;function Pu(e){xn===null?xn=[e]:xn.push(e)}function _p(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,Pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mu(e,n)}}function pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var i=e.updateQueue;Mt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(m=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(v,f,m):y,m==null)break e;f=q({},f,m);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);An|=o,e.lanes=o,e.memoizedState=f}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Fi={},rt=cn(Fi),ki=cn(Fi),_i=cn(Fi);function kn(e){if(e===Fi)throw Error(k(174));return e}function Au(e,t){switch(U(_i,t),U(ki,e),U(rt,Fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ha(t,e)}V(rt),U(rt,t)}function kr(){V(rt),V(ki),V(_i)}function Sp(e){kn(_i.current);var t=kn(rt.current),n=Ha(t,e.type);t!==n&&(U(ki,e),U(rt,n))}function Ou(e){ki.current===e&&(V(rt),V(ki))}var K=cn(0);function qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function Ru(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var ks=Nt.ReactCurrentDispatcher,da=Nt.ReactCurrentBatchConfig,Nn=0,Y=null,te=null,ie=null,Qs=!1,ti=!1,bi=0,jy=0;function ue(){throw Error(k(321))}function ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Lu(e,t,n,r,i,s){if(Nn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?Fy:zy,e=n(r,i),ti){s=0;do{if(ti=!1,bi=0,25<=s)throw Error(k(301));s+=1,ie=te=null,t.updateQueue=null,ks.current=Uy,e=n(r,i)}while(ti)}if(ks.current=Xs,t=te!==null&&te.next!==null,Nn=0,ie=te=Y=null,Qs=!1,t)throw Error(k(300));return e}function Mu(){var e=bi!==0;return bi=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function ze(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function Si(e,t){return typeof t=="function"?t(e):t}function fa(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Nn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Y.lanes|=d,An|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ye(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,An|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ha(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ye(s,t.memoizedState)||(we=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ep(){}function Ip(e,t){var n=Y,r=ze(),i=t(),s=!Ye(r.memoizedState,i);if(s&&(r.memoizedState=i,we=!0),r=r.queue,Du(Pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Ei(9,Tp.bind(null,n,r,i,t),void 0,null),se===null)throw Error(k(349));Nn&30||Cp(n,t,i)}return i}function Cp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tp(e,t,n,r){t.value=n,t.getSnapshot=r,Np(t)&&Ap(e)}function Pp(e,t,n){return n(function(){Np(t)&&Ap(e)})}function Np(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function Ap(e){var t=bt(e,1);t!==null&&Ge(t,e,1,-1)}function gd(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=Dy.bind(null,Y,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Op(){return ze().memoizedState}function _s(e,t,n,r){var i=Qe();Y.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function So(e,t,n,r){var i=ze();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&ju(r,o.deps)){i.memoizedState=Ei(t,n,s,r);return}}Y.flags|=e,i.memoizedState=Ei(1|t,n,s,r)}function vd(e,t){return _s(8390656,8,e,t)}function Du(e,t){return So(2048,8,e,t)}function Rp(e,t){return So(4,2,e,t)}function jp(e,t){return So(4,4,e,t)}function Lp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mp(e,t,n){return n=n!=null?n.concat([e]):null,So(4,4,Lp.bind(null,t,e),n)}function Fu(){}function Dp(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fp(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zp(e,t,n){return Nn&21?(Ye(n,t)||(n=Hh(),Y.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Ly(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=da.transition;da.transition={};try{e(!1),t()}finally{F=n,da.transition=r}}function Up(){return ze().memoizedState}function My(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bp(e))$p(t,n);else if(n=_p(e,t,n,r),n!==null){var i=pe();Ge(n,e,r,i),Vp(n,t,r)}}function Dy(e,t,n){var r=Xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bp(e))$p(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,o)){var l=t.interleaved;l===null?(i.next=i,Pu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_p(e,t,i,r),n!==null&&(i=pe(),Ge(n,e,r,i),Vp(n,t,r))}}function Bp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function $p(e,t){ti=Qs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mu(e,n)}}var Xs={readContext:Fe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Fy={readContext:Fe,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_s(4194308,4,Lp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _s(4194308,4,e,t)},useInsertionEffect:function(e,t){return _s(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=My.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:gd,useDebugValue:Fu,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=gd(!1),t=e[0];return e=Ly.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Qe();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),se===null)throw Error(k(349));Nn&30||Cp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,vd(Pp.bind(null,r,s,e),[e]),r.flags|=2048,Ei(9,Tp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Qe(),t=se.identifierPrefix;if(W){var n=mt,r=pt;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zy={readContext:Fe,useCallback:Dp,useContext:Fe,useEffect:Du,useImperativeHandle:Mp,useInsertionEffect:Rp,useLayoutEffect:jp,useMemo:Fp,useReducer:fa,useRef:Op,useState:function(){return fa(Si)},useDebugValue:Fu,useDeferredValue:function(e){var t=ze();return zp(t,te.memoizedState,e)},useTransition:function(){var e=fa(Si)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Ep,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1},Uy={readContext:Fe,useCallback:Dp,useContext:Fe,useEffect:Du,useImperativeHandle:Mp,useInsertionEffect:Rp,useLayoutEffect:jp,useMemo:Fp,useReducer:ha,useRef:Op,useState:function(){return ha(Si)},useDebugValue:Fu,useDeferredValue:function(e){var t=ze();return te===null?t.memoizedState=e:zp(t,te.memoizedState,e)},useTransition:function(){var e=ha(Si)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Ep,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Xt(e),s=wt(r,i);s.payload=t,n!=null&&(s.callback=n),t=qt(e,s,i),t!==null&&(Ge(t,e,i,r),xs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Xt(e),s=wt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=qt(e,s,i),t!==null&&(Ge(t,e,i,r),xs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Xt(e),i=wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=qt(e,i,r),t!==null&&(Ge(t,e,r,n),xs(t,e,r))}};function yd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!vi(n,r)||!vi(i,s):!0}function Hp(e,t,n){var r=!1,i=sn,s=t.contextType;return typeof s=="object"&&s!==null?s=Fe(s):(i=ke(t)?Tn:fe.current,r=t.contextTypes,s=(r=r!=null)?yr(e,i):sn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function fl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Fe(s):(s=ke(t)?Tn:fe.current,i.context=yr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(dl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Eo.enqueueReplaceState(i,i.state,null),Ys(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var n="",r=t;do n+=pv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var By=typeof WeakMap=="function"?WeakMap:Map;function Wp(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zs||(Zs=!0,bl=r),hl(e,t)},n}function Gp(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hl(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new By;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=t1.bind(null,e,t,n),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var $y=Nt.ReactCurrentOwner,we=!1;function he(e,t,n,r){t.child=e===null?kp(t,null,n,r):xr(t,e.child,n,r)}function bd(e,t,n,r,i){n=n.render;var s=t.ref;return dr(t,i),r=Lu(e,t,n,r,s,i),n=Mu(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(W&&n&&bu(t),t.flags|=1,he(e,t,r,i),t.child)}function Sd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Gu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Kp(e,t,s,r,i)):(e=Is(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(o,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Jt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Kp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(vi(s,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,St(e,t,i)}return pl(e,t,n,r,i)}function Yp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ir,Se),Se|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(ir,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,U(ir,Se),Se|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,U(ir,Se),Se|=r;return he(e,t,i,n),t.child}function qp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,n,r,i){var s=ke(n)?Tn:fe.current;return s=yr(t,s),dr(t,i),n=Lu(e,t,n,r,s,i),r=Mu(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(W&&r&&bu(t),t.flags|=1,he(e,t,n,i),t.child)}function Ed(e,t,n,r,i){if(ke(n)){var s=!0;Vs(t)}else s=!1;if(dr(t,i),t.stateNode===null)bs(e,t),Hp(t,n,r),fl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=ke(n)?Tn:fe.current,u=yr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wd(t,o,r,u),Mt=!1;var m=t.memoizedState;o.state=m,Ys(t,r,o,i),l=t.memoizedState,a!==r||m!==l||xe.current||Mt?(typeof d=="function"&&(dl(t,n,d,r),l=t.memoizedState),(a=Mt||yd(t,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:$e(t.type,a),o.props=u,f=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fe(l):(l=ke(n)?Tn:fe.current,l=yr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&wd(t,o,r,l),Mt=!1,m=t.memoizedState,o.state=m,Ys(t,r,o,i);var y=t.memoizedState;a!==f||m!==y||xe.current||Mt?(typeof v=="function"&&(dl(t,n,v,r),y=t.memoizedState),(u=Mt||yd(t,n,u,r,m,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,s,i)}function ml(e,t,n,r,i,s){qp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&cd(t,n,!1),St(e,t,s);r=t.stateNode,$y.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=xr(t,e.child,null,s),t.child=xr(t,null,a,s)):he(e,t,a,s),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function Qp(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),Au(e,t.containerInfo)}function Id(e,t,n,r,i){return wr(),Eu(i),t.flags|=256,he(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xp(e,t,n){var r=t.pendingProps,i=K.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(K,i&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=To(o,r,0,null),e=En(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=vl(n),t.memoizedState=gl,e):zu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Vy(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Jt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Jt(a,s):(s=En(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?vl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return s=e.child,e=s.sibling,r=Jt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zu(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function us(e,t,n,r){return r!==null&&Eu(r),xr(t,e.child,null,n),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vy(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=pa(Error(k(422))),us(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),s=En(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&xr(t,e.child,null,o),t.child.memoizedState=vl(o),t.memoizedState=gl,s);if(!(t.mode&1))return us(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=pa(s,r,void 0),us(e,t,o,r)}if(a=(o&e.childLanes)!==0,we||a){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(e,i),Ge(r,e,i,-1))}return Wu(),r=pa(Error(k(421))),us(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=n1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ee=Yt(i.nextSibling),Ie=t,W=!0,He=null,e!==null&&(je[Le++]=pt,je[Le++]=mt,je[Le++]=Pn,pt=e.id,mt=e.overflow,Pn=t),t=zu(t,r.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function ma(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(he(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ma(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ma(t,!0,n,null,s);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hy(e,t,n){switch(t.tag){case 3:Qp(t),wr();break;case 5:Sp(t);break;case 1:ke(t.type)&&Vs(t);break;case 4:Au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Gs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Xp(e,t,n):(U(K,K.current&1),e=St(e,t,n),e!==null?e.sibling:null);U(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Yp(e,t,n)}return St(e,t,n)}var Zp,yl,em,tm;Zp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};em=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(rt.current);var s=null;switch(n){case"input":i=Ua(e,i),r=Ua(e,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=Va(e,i),r=Va(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bs)}Wa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ci.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ci.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};tm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wy(e,t,n){var r=t.pendingProps;switch(Su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&$s(),ce(t),null;case 3:return r=t.stateNode,kr(),V(xe),V(fe),Ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(Il(He),He=null))),yl(e,t),ce(t),null;case 5:Ou(t);var i=kn(_i.current);if(n=t.type,e!==null&&t.stateNode!=null)em(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ce(t),null}if(e=kn(rt.current),as(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Je]=t,r[xi]=s,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)$(Gr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Mc(r,s),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$("invalid",r);break;case"textarea":Fc(r,s),$("invalid",r)}Wa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",""+a]):ci.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":Ji(r),Dc(r,s,!0);break;case"textarea":Ji(r),zc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ph(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Je]=t,e[xi]=r,Zp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ga(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)$(Gr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Mc(e,r),i=Ua(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),$("invalid",e);break;case"textarea":Fc(e,r),i=Va(e,r),$("invalid",e);break;default:i=r}Wa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Oh(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nh(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&di(e,l):typeof l=="number"&&di(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ci.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$("scroll",e):l!=null&&uu(e,s,l,o))}switch(n){case"input":Ji(e),Dc(e,r,!1);break;case"textarea":Ji(e),zc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ar(e,!!r.multiple,s,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)tm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=kn(_i.current),kn(rt.current),as(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(s=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&os(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(V(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ee!==null&&t.mode&1&&!(t.flags&128))wp(),wr(),t.flags|=98560,s=!1;else if(s=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Je]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),s=!1}else He!==null&&(Il(He),He=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Wu())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return kr(),yl(e,t),e===null&&yi(t.stateNode.containerInfo),ce(t),null;case 10:return Tu(t.type._context),ce(t),null;case 17:return ke(t.type)&&$s(),ce(t),null;case 19:if(V(K),s=t.memoizedState,s===null)return ce(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Br(s,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=qs(e),o!==null){for(t.flags|=128,Br(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(K,K.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>br&&(t.flags|=128,r=!0,Br(s,!1),t.lanes=4194304)}else{if(!r)if(e=qs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return ce(t),null}else 2*J()-s.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Br(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=K.current,U(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Hu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Gy(e,t){switch(Su(t),t.tag){case 1:return ke(t.type)&&$s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),V(xe),V(fe),Ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ou(t),null;case 13:if(V(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(K),null;case 4:return kr(),null;case 10:return Tu(t.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var cs=!1,de=!1,Ky=typeof WeakSet=="function"?WeakSet:Set,E=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function wl(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Td=!1;function Yy(e,t){if(nl=Fs,e=op(),_u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++d===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},Fs=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,_=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:$e(t.type,x),_);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){Q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=Td,Td=!1,y}function ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&wl(t,n,s)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[xi],delete t[ol],delete t[Ny],delete t[Ay])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rm(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bs));else if(r!==4&&(e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_l(e,t,n),e=e.sibling;e!==null;)_l(e,t,n),e=e.sibling}var oe=null,Ve=!1;function Ot(e,t,n){for(n=n.child;n!==null;)im(e,t,n),n=n.sibling}function im(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:de||rr(n,t);case 6:var r=oe,i=Ve;oe=null,Ot(e,t,n),oe=r,Ve=i,oe!==null&&(Ve?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ve?(e=oe,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),mi(e)):la(oe,n.stateNode));break;case 4:r=oe,i=Ve,oe=n.stateNode.containerInfo,Ve=!0,Ot(e,t,n),oe=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wl(n,t,o),i=i.next}while(i!==r)}Ot(e,t,n);break;case 1:if(!de&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,Ot(e,t,n),de=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ky),t.forEach(function(r){var i=r1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,Ve=!1;break e;case 3:oe=a.stateNode.containerInfo,Ve=!0;break e;case 4:oe=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(oe===null)throw Error(k(160));im(s,o,i),oe=null,Ve=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}function sm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),qe(e),r&4){try{ni(3,e,e.return),Io(3,e)}catch(x){Q(e,e.return,x)}try{ni(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Be(t,e),qe(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(Be(t,e),qe(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{di(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ch(i,s),Ga(a,o);var u=Ga(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Oh(i,f):d==="dangerouslySetInnerHTML"?Nh(i,f):d==="children"?di(i,f):uu(i,d,f,u)}switch(a){case"input":Ba(i,s);break;case"textarea":Th(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ar(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ar(i,!!s.multiple,s.defaultValue,!0):ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[xi]=s}catch(x){Q(e,e.return,x)}}break;case 6:if(Be(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){Q(e,e.return,x)}}break;case 3:if(Be(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Be(t,e),qe(e);break;case 13:Be(t,e),qe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($u=J())),r&4&&Nd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||d,Be(t,e),de=u):Be(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(m=E,v=m.child,m.tag){case 0:case 11:case 14:case 15:ni(4,m,m.return);break;case 1:rr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:rr(m,m.return);break;case 22:if(m.memoizedState!==null){Od(f);continue}}v!==null?(v.return=m,E=v):Od(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ah("display",o))}catch(x){Q(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Q(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Be(t,e),qe(e),r&4&&Nd(e);break;case 21:break;default:Be(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rm(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(di(i,""),r.flags&=-33);var s=Pd(e);_l(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pd(e);kl(e,a,o);break;default:throw Error(k(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qy(e,t,n){E=e,om(e)}function om(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||de;a=cs;var u=de;if(cs=o,(de=l)&&!u)for(E=i;E!==null;)o=E,l=o.child,o.tag===22&&o.memoizedState!==null?Rd(i):l!==null?(l.return=o,E=l):Rd(i);for(;s!==null;)E=s,om(s),s=s.sibling;E=i,cs=a,de=u}Ad(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):Ad(e)}}function Ad(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&md(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&mi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&xl(t)}catch(m){Q(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Od(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Rd(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var s=t.return;try{xl(t)}catch(l){Q(t,s,l)}break;case 5:var o=t.return;try{xl(t)}catch(l){Q(t,o,l)}}}catch(l){Q(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Qy=Math.ceil,Js=Nt.ReactCurrentDispatcher,Uu=Nt.ReactCurrentOwner,De=Nt.ReactCurrentBatchConfig,D=0,se=null,Z=null,ae=0,Se=0,ir=cn(0),ne=0,Ii=null,An=0,Co=0,Bu=0,ri=null,ye=null,$u=0,br=1/0,ct=null,Zs=!1,bl=null,Qt=null,ds=!1,$t=null,eo=0,ii=0,Sl=null,Ss=-1,Es=0;function pe(){return D&6?J():Ss!==-1?Ss:Ss=J()}function Xt(e){return e.mode&1?D&2&&ae!==0?ae&-ae:Ry.transition!==null?(Es===0&&(Es=Hh()),Es):(e=F,e!==0||(e=window.event,e=e===void 0?16:Xh(e.type)),e):1}function Ge(e,t,n,r){if(50<ii)throw ii=0,Sl=null,Error(k(185));Li(e,n,r),(!(D&2)||e!==se)&&(e===se&&(!(D&2)&&(Co|=n),ne===4&&Ft(e,ae)),_e(e,r),n===1&&D===0&&!(t.mode&1)&&(br=J()+500,bo&&dn()))}function _e(e,t){var n=e.callbackNode;Rv(e,t);var r=Ds(e,e===se?ae:0);if(r===0)n!==null&&$c(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$c(n),t===1)e.tag===0?Oy(jd.bind(null,e)):gp(jd.bind(null,e)),Ty(function(){!(D&6)&&dn()}),n=null;else{switch(Wh(r)){case 1:n=pu;break;case 4:n=$h;break;case 16:n=Ms;break;case 536870912:n=Vh;break;default:n=Ms}n=pm(n,am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function am(e,t){if(Ss=-1,Es=0,D&6)throw Error(k(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Ds(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=to(e,r);else{t=r;var i=D;D|=2;var s=um();(se!==e||ae!==t)&&(ct=null,br=J()+500,Sn(e,t));do try{Zy();break}catch(a){lm(e,a)}while(!0);Cu(),Js.current=s,D=i,Z!==null?t=0:(se=null,ae=0,t=ne)}if(t!==0){if(t===2&&(i=Xa(e),i!==0&&(r=i,t=El(e,i))),t===1)throw n=Ii,Sn(e,0),Ft(e,r),_e(e,J()),n;if(t===6)Ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!Xy(i)&&(t=to(e,r),t===2&&(s=Xa(e),s!==0&&(r=s,t=El(e,s))),t===1))throw n=Ii,Sn(e,0),Ft(e,r),_e(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:gn(e,ye,ct);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=$u+500-J(),10<t)){if(Ds(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sl(gn.bind(null,e,ye,ct),t);break}gn(e,ye,ct);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-We(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qy(r/1960))-r,10<r){e.timeoutHandle=sl(gn.bind(null,e,ye,ct),r);break}gn(e,ye,ct);break;case 5:gn(e,ye,ct);break;default:throw Error(k(329))}}}return _e(e,J()),e.callbackNode===n?am.bind(null,e):null}function El(e,t){var n=ri;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=to(e,t),e!==2&&(t=ye,ye=n,t!==null&&Il(t)),e}function Il(e){ye===null?ye=e:ye.push.apply(ye,e)}function Xy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ye(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Bu,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function jd(e){if(D&6)throw Error(k(327));fr();var t=Ds(e,0);if(!(t&1))return _e(e,J()),null;var n=to(e,t);if(e.tag!==0&&n===2){var r=Xa(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=Ii,Sn(e,0),Ft(e,t),_e(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,ye,ct),_e(e,J()),null}function Vu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(br=J()+500,bo&&dn())}}function On(e){$t!==null&&$t.tag===0&&!(D&6)&&fr();var t=D;D|=1;var n=De.transition,r=F;try{if(De.transition=null,F=1,e)return e()}finally{F=r,De.transition=n,D=t,!(D&6)&&dn()}}function Hu(){Se=ir.current,V(ir)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cy(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$s();break;case 3:kr(),V(xe),V(fe),Ru();break;case 5:Ou(r);break;case 4:kr();break;case 13:V(K);break;case 19:V(K);break;case 10:Tu(r.type._context);break;case 22:case 23:Hu()}n=n.return}if(se=e,Z=e=Jt(e.current,null),ae=Se=t,ne=0,Ii=null,Bu=Co=An=0,ye=ri=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return e}function lm(e,t){do{var n=Z;try{if(Cu(),ks.current=Xs,Qs){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qs=!1}if(Nn=0,ie=te=Y=null,ti=!1,bi=0,Uu.current=null,n===null||n.return===null){ne=1,Ii=t,Z=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=kd(o);if(v!==null){v.flags&=-257,_d(v,o,a,s,t),v.mode&1&&xd(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){xd(s,u,t),Wu();break e}l=Error(k(426))}}else if(W&&a.mode&1){var _=kd(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),_d(_,o,a,s,t),Eu(_r(l,a));break e}}s=l=_r(l,a),ne!==4&&(ne=2),ri===null?ri=[s]:ri.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Wp(s,l,t);pd(s,p);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qt===null||!Qt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Gp(s,a,t);pd(s,w);break e}}s=s.return}while(s!==null)}dm(n)}catch(b){t=b,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function um(){var e=Js.current;return Js.current=Xs,e===null?Xs:e}function Wu(){(ne===0||ne===3||ne===2)&&(ne=4),se===null||!(An&268435455)&&!(Co&268435455)||Ft(se,ae)}function to(e,t){var n=D;D|=2;var r=um();(se!==e||ae!==t)&&(ct=null,Sn(e,t));do try{Jy();break}catch(i){lm(e,i)}while(!0);if(Cu(),D=n,Js.current=r,Z!==null)throw Error(k(261));return se=null,ae=0,ne}function Jy(){for(;Z!==null;)cm(Z)}function Zy(){for(;Z!==null&&!Sv();)cm(Z)}function cm(e){var t=hm(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?dm(e):Z=t,Uu.current=null}function dm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gy(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(n=Wy(n,t,Se),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function gn(e,t,n){var r=F,i=De.transition;try{De.transition=null,F=1,e1(e,t,n,r)}finally{De.transition=i,F=r}return null}function e1(e,t,n,r){do fr();while($t!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(jv(e,s),e===se&&(Z=se=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ds||(ds=!0,pm(Ms,function(){return fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=De.transition,De.transition=null;var o=F;F=1;var a=D;D|=4,Uu.current=null,Yy(e,n),sm(n,e),xy(rl),Fs=!!nl,rl=nl=null,e.current=n,qy(n),Ev(),D=a,F=o,De.transition=s}else e.current=n;if(ds&&(ds=!1,$t=e,eo=i),s=e.pendingLanes,s===0&&(Qt=null),Tv(n.stateNode),_e(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zs)throw Zs=!1,e=bl,bl=null,e;return eo&1&&e.tag!==0&&fr(),s=e.pendingLanes,s&1?e===Sl?ii++:(ii=0,Sl=e):ii=0,dn(),null}function fr(){if($t!==null){var e=Wh(eo),t=De.transition,n=F;try{if(De.transition=null,F=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,eo=0,D&6)throw Error(k(331));var i=D;for(D|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:ni(8,d,s)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var m=d.sibling,v=d.return;if(nm(d),d===u){E=null;break}if(m!==null){m.return=v,E=m;break}E=v}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ni(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,E=p;break e}E=s.return}}var h=e.current;for(E=h;E!==null;){o=E;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,E=g;else e:for(o=h;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Io(9,a)}}catch(b){Q(a,a.return,b)}if(a===o){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(D=i,dn(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{F=n,De.transition=t}}return!1}function Ld(e,t,n){t=_r(n,t),t=Wp(e,t,1),e=qt(e,t,1),t=pe(),e!==null&&(Li(e,1,t),_e(e,t))}function Q(e,t,n){if(e.tag===3)Ld(e,e,n);else for(;t!==null;){if(t.tag===3){Ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=_r(n,e),e=Gp(t,e,1),t=qt(t,e,1),e=pe(),t!==null&&(Li(t,1,e),_e(t,e));break}}t=t.return}}function t1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>J()-$u?Sn(e,0):Bu|=n),_e(e,t)}function fm(e,t){t===0&&(e.mode&1?(t=ts,ts<<=1,!(ts&130023424)&&(ts=4194304)):t=1);var n=pe();e=bt(e,t),e!==null&&(Li(e,t,n),_e(e,n))}function n1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fm(e,n)}function r1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),fm(e,n)}var hm;hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Hy(e,t,n);we=!!(e.flags&131072)}else we=!1,W&&t.flags&1048576&&vp(t,Ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bs(e,t),e=t.pendingProps;var i=yr(t,fe.current);dr(t,n),i=Lu(null,t,r,e,i,n);var s=Mu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(s=!0,Vs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nu(t),i.updater=Eo,t.stateNode=i,i._reactInternals=t,fl(t,r,e,n),t=ml(null,t,r,!0,s,n)):(t.tag=0,W&&s&&bu(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=s1(r),e=$e(r,e),i){case 0:t=pl(null,t,r,e,n);break e;case 1:t=Ed(null,t,r,e,n);break e;case 11:t=bd(null,t,r,e,n);break e;case 14:t=Sd(null,t,r,$e(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Ed(e,t,r,i,n);case 3:e:{if(Qp(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,bp(e,t),Ys(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=_r(Error(k(423)),t),t=Id(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(k(424)),t),t=Id(e,t,r,n,i);break e}else for(Ee=Yt(t.stateNode.containerInfo.firstChild),Ie=t,W=!0,He=null,n=kp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=St(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Sp(t),e===null&&ul(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,il(r,i)?o=null:s!==null&&il(r,s)&&(t.flags|=32),qp(e,t),he(e,t,o,n),t.child;case 6:return e===null&&ul(t),null;case 13:return Xp(e,t,n);case 4:return Au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),bd(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,U(Gs,r._currentValue),r._currentValue=o,s!==null)if(Ye(s.value,o)){if(s.children===i.children&&!xe.current){t=St(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=wt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,dr(t,n),i=Fe(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=$e(r,t.pendingProps),i=$e(r.type,i),Sd(e,t,r,i,n);case 15:return Kp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),bs(e,t),t.tag=1,ke(r)?(e=!0,Vs(t)):e=!1,dr(t,n),Hp(t,r,i),fl(t,r,i,n),ml(null,t,r,!0,e,n);case 19:return Jp(e,t,n);case 22:return Yp(e,t,n)}throw Error(k(156,t.tag))};function pm(e,t){return Bh(e,t)}function i1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new i1(e,t,n,r)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s1(e){if(typeof e=="function")return Gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===fu)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Is(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Gu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yn:return En(n.children,i,s,t);case cu:o=8,i|=8;break;case Ma:return e=Me(12,n,t,i|2),e.elementType=Ma,e.lanes=s,e;case Da:return e=Me(13,n,t,i),e.elementType=Da,e.lanes=s,e;case Fa:return e=Me(19,n,t,i),e.elementType=Fa,e.lanes=s,e;case Sh:return To(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _h:o=10;break e;case bh:o=9;break e;case du:o=11;break e;case fu:o=14;break e;case Lt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Me(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function En(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Sh,e.lanes=n,e.stateNode={isHidden:!1},e}function ga(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ku(e,t,n,r,i,s,o,a,l){return e=new o1(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Me(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(s),e}function a1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mm(e){if(!e)return sn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return mp(e,n,t)}return t}function gm(e,t,n,r,i,s,o,a,l){return e=Ku(n,r,!0,e,i,s,o,a,l),e.context=mm(null),n=e.current,r=pe(),i=Xt(n),s=wt(r,i),s.callback=t??null,qt(n,s,i),e.current.lanes=i,Li(e,i,r),_e(e,r),e}function Po(e,t,n,r){var i=t.current,s=pe(),o=Xt(i);return n=mm(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(i,t,o),e!==null&&(Ge(e,i,o,s),xs(e,i,o)),o}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yu(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function l1(){return null}var vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}No.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Po(e,t,null,null)};No.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Po(null,e,null,null)}),t[_t]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&Qh(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function u1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=no(o);s.call(u)}}var o=gm(t,r,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=o,e[_t]=o.current,yi(e.nodeType===8?e.parentNode:e),On(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=no(l);a.call(u)}}var l=Ku(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=l,e[_t]=l.current,yi(e.nodeType===8?e.parentNode:e),On(function(){Po(t,l,n,r)}),l}function Oo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=no(o);a.call(l)}}Po(t,o,e,i)}else o=u1(n,t,e,i,r);return no(o)}Gh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(mu(t,n|1),_e(t,J()),!(D&6)&&(br=J()+500,dn()))}break;case 13:On(function(){var r=bt(e,1);if(r!==null){var i=pe();Ge(r,e,1,i)}}),Yu(e,1)}};gu=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=pe();Ge(t,e,134217728,n)}Yu(e,134217728)}};Kh=function(e){if(e.tag===13){var t=Xt(e),n=bt(e,t);if(n!==null){var r=pe();Ge(n,e,t,r)}Yu(e,t)}};Yh=function(){return F};qh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ya=function(e,t,n){switch(t){case"input":if(Ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_o(r);if(!i)throw Error(k(90));Ih(r),Ba(r,i)}}}break;case"textarea":Th(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};Lh=Vu;Mh=On;var c1={usingClientEntryPoint:!1,Events:[Di,Jn,_o,Rh,jh,Vu]},$r={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d1={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zh(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||l1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{yo=fs.inject(d1),nt=fs}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(k(200));return a1(e,t,null,n)};Ae.createRoot=function(e,t){if(!Qu(e))throw Error(k(299));var n=!1,r="",i=vm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ku(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,yi(e.nodeType===8?e.parentNode:e),new qu(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=zh(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return On(e)};Ae.hydrate=function(e,t,n){if(!Ao(t))throw Error(k(200));return Oo(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=gm(t,null,e,1,n??null,i,!1,s,o),e[_t]=t.current,yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new No(t)};Ae.render=function(e,t,n){if(!Ao(t))throw Error(k(200));return Oo(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(k(40));return e._reactRootContainer?(On(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ae.unstable_batchedUpdates=Vu;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ao(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Oo(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym)}catch(e){console.error(e)}}ym(),yh.exports=Ae;var f1=yh.exports,wm,Fd=f1;wm=Fd.createRoot,Fd.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}var Vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vt||(Vt={}));const zd="popstate";function h1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ro(i)}return m1(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function p1(){return Math.random().toString(36).substr(2,8)}function Ud(e,t){return{usr:e.state,key:e.key,idx:t}}function Cl(e,t,n,r){return n===void 0&&(n=null),Ci({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:n,key:t&&t.key||r||p1()})}function ro(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Ci({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Vt.Pop;let _=d(),p=_==null?null:_-u;u=_,l&&l({action:a,location:x.location,delta:p})}function m(_,p){a=Vt.Push;let h=Cl(x.location,_,p);u=d()+1;let g=Ud(h,u),w=x.createHref(h);try{o.pushState(g,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}s&&l&&l({action:a,location:x.location,delta:1})}function v(_,p){a=Vt.Replace;let h=Cl(x.location,_,p);u=d();let g=Ud(h,u),w=x.createHref(h);o.replaceState(g,"",w),s&&l&&l({action:a,location:x.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof _=="string"?_:ro(_);return h=h.replace(/ $/,"%20"),ee(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let x={get action(){return a},get location(){return e(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zd,f),l=_,()=>{i.removeEventListener(zd,f),l=null}},createHref(_){return t(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:v,go(_){return o.go(_)}};return x}var Bd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bd||(Bd={}));function g1(e,t,n){return n===void 0&&(n="/"),v1(e,t,n,!1)}function v1(e,t,n,r){let i=typeof t=="string"?Pr(t):t,s=Xu(i.pathname||"/",n);if(s==null)return null;let o=km(e);y1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=P1(s);a=C1(o[l],u,r)}return a}function km(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zt([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),km(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:E1(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _m(s.path))i(s,o,l)}),t}function _m(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_m(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function y1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const w1=/^:[\w-]+$/,x1=3,k1=2,_1=1,b1=10,S1=-2,$d=e=>e==="*";function E1(e,t){let n=e.split("/"),r=n.length;return n.some($d)&&(r+=S1),t&&(r+=k1),n.filter(i=>!$d(i)).reduce((i,s)=>i+(w1.test(s)?x1:s===""?_1:b1),r)}function I1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function C1(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=Vd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),m=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Vd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Zt([s,f.pathname]),pathnameBase:R1(Zt([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Zt([s,f.pathnameBase]))}return o}function Vd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=T1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function T1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function P1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function N1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:A1(n,t):t,search:j1(r),hash:L1(i)}}function A1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ya(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function O1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bm(e,t){let n=O1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pr(e):(i=Ci({},e),ee(!i.pathname||!i.pathname.includes("?"),ya("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),ya("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),ya("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?t[f]:"/"}let l=N1(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),R1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function M1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Em=["post","put","patch","delete"];new Set(Em);const D1=["get",...Em];new Set(D1);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}const Ju=S.createContext(null),F1=S.createContext(null),Bn=S.createContext(null),Ro=S.createContext(null),$n=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Im=S.createContext(null);function z1(e,t){let{relative:n}=t===void 0?{}:t;zi()||ee(!1);let{basename:r,navigator:i}=S.useContext(Bn),{hash:s,pathname:o,search:a}=Tm(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Zt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function zi(){return S.useContext(Ro)!=null}function Nr(){return zi()||ee(!1),S.useContext(Ro).location}function Cm(e){S.useContext(Bn).static||S.useLayoutEffect(e)}function Zu(){let{isDataRoute:e}=S.useContext($n);return e?J1():U1()}function U1(){zi()||ee(!1);let e=S.useContext(Ju),{basename:t,future:n,navigator:r}=S.useContext(Bn),{matches:i}=S.useContext($n),{pathname:s}=Nr(),o=JSON.stringify(bm(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Cm(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Sm(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function Tm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Bn),{matches:i}=S.useContext($n),{pathname:s}=Nr(),o=JSON.stringify(bm(i,r.v7_relativeSplatPath));return S.useMemo(()=>Sm(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function B1(e,t){return $1(e,t)}function $1(e,t,n,r){zi()||ee(!1);let{navigator:i}=S.useContext(Bn),{matches:s}=S.useContext($n),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Nr(),d;if(t){var f;let _=typeof t=="string"?Pr(t):t;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||ee(!1),d=_}else d=u;let m=d.pathname||"/",v=m;if(l!=="/"){let _=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=g1(e,{pathname:v}),x=K1(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Zt([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Zt([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&x?S.createElement(Ro.Provider,{value:{location:Ti({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Vt.Pop}},x):x}function V1(){let e=X1(),t=M1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const H1=S.createElement(V1,null);class W1 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement($n.Provider,{value:this.props.routeContext},S.createElement(Im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G1(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Ju);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement($n.Provider,{value:t},r)}function K1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:v}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let v,y=!1,x=null,_=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||H1,l&&(u<0&&m===0?(y=!0,_=null):u===m&&(y=!0,_=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,m+1)),h=()=>{let g;return v?g=x:y?g=_:f.route.Component?g=S.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,S.createElement(G1,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?S.createElement(W1,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var Pm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pm||{}),io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(io||{});function Y1(e){let t=S.useContext(Ju);return t||ee(!1),t}function q1(e){let t=S.useContext(F1);return t||ee(!1),t}function Q1(e){let t=S.useContext($n);return t||ee(!1),t}function Nm(e){let t=Q1(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function X1(){var e;let t=S.useContext(Im),n=q1(io.UseRouteError),r=Nm(io.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function J1(){let{router:e}=Y1(Pm.UseNavigateStable),t=Nm(io.UseNavigateStable),n=S.useRef(!1);return Cm(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ti({fromRouteId:t},s)))},[e,t])}function Kr(e){ee(!1)}function Z1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vt.Pop,navigator:s,static:o=!1,future:a}=e;zi()&&ee(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:Ti({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Pr(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:y="default"}=r,x=S.useMemo(()=>{let _=Xu(d,l);return _==null?null:{location:{pathname:_,search:f,hash:m,state:v,key:y},navigationType:i}},[l,d,f,m,v,y,i]);return x==null?null:S.createElement(Bn.Provider,{value:u},S.createElement(Ro.Provider,{children:n,value:x}))}function ew(e){let{children:t,location:n}=e;return B1(Tl(t),n)}new Promise(()=>{});function Tl(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Tl(r.props.children,s));return}r.type!==Kr&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pl.apply(this,arguments)}function tw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rw(e,t){return e.button===0&&(!t||t==="_self")&&!nw(e)}const iw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],sw="6";try{window.__reactRouterVersion=sw}catch{}const ow="startTransition",Hd=tv[ow];function aw(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=h1({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(f=>{u&&Hd?Hd(()=>l(f)):l(f)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(Z1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const lw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,si=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,m=tw(t,iw),{basename:v}=S.useContext(Bn),y,x=!1;if(typeof u=="string"&&uw.test(u)&&(y=u,lw))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),b=Xu(w.pathname,v);w.origin===g.origin&&b!=null?u=b+w.search+w.hash:x=!0}catch{}let _=z1(u,{relative:i}),p=cw(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function h(g){r&&r(g),g.defaultPrevented||p(g)}return S.createElement("a",Pl({},m,{href:y||_,onClick:x||s?r:h,ref:n,target:l}))});var Wd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var Gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function cw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=Zu(),u=Nr(),d=Tm(e,{relative:o});return S.useCallback(f=>{if(rw(f,n)){f.preventDefault();let m=r!==void 0?r:ro(u)===ro(d);l(e,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}const Kd=()=>{};let ec={},Am={},Om=null,Rm={mark:Kd,measure:Kd};try{typeof window<"u"&&(ec=window),typeof document<"u"&&(Am=document),typeof MutationObserver<"u"&&(Om=MutationObserver),typeof performance<"u"&&(Rm=performance)}catch{}const{userAgent:Yd=""}=ec.navigator||{},on=ec,H=Am,qd=Om,hs=Rm;on.document;const At=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function",jm=~Yd.indexOf("MSIE")||~Yd.indexOf("Trident/");var G="classic",Lm="duotone",Ce="sharp",Te="sharp-duotone",dw=[G,Lm,Ce,Te],fw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Qd={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hw=["kit"],pw=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,mw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,gw={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},vw={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},yw={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ww={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},xw={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},kw={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Mm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},_w=["solid","regular","light","thin","duotone","brands"],Dm=[1,2,3,4,5,6,7,8,9,10],bw=Dm.concat([11,12,13,14,15,16,17,18,19,20]),Yr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sw=[...Object.keys(ww),..._w,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yr.GROUP,Yr.SWAP_OPACITY,Yr.PRIMARY,Yr.SECONDARY].concat(Dm.map(e=>"".concat(e,"x"))).concat(bw.map(e=>"w-".concat(e))),Ew={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Iw={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Cw={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Xd={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Et="___FONT_AWESOME___",Nl=16,Fm="fa",zm="svg-inline--fa",Rn="data-fa-i2svg",Al="data-fa-pseudo-element",Tw="data-fa-pseudo-element-pending",tc="data-prefix",nc="data-icon",Jd="fontawesome-i2svg",Pw="async",Nw=["HTML","HEAD","STYLE","SCRIPT"],Um=(()=>{try{return!0}catch{return!1}})(),Bm=[G,Ce,Te];function Ui(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[G]}})}const $m={...Mm};$m[G]={...Mm[G],...Qd.kit,...Qd["kit-duotone"]};const In=Ui($m),Ol={...kw};Ol[G]={...Ol[G],...Xd.kit,...Xd["kit-duotone"]};const Pi=Ui(Ol),Rl={...xw};Rl[G]={...Rl[G],...Cw.kit};const Cn=Ui(Rl),jl={...yw};jl[G]={...jl[G],...Iw.kit};const Aw=Ui(jl),Ow=pw,Vm="fa-layers-text",Rw=mw,jw={...fw};Ui(jw);const Lw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wa=Yr,Sr=new Set;Object.keys(Pi[G]).map(Sr.add.bind(Sr));Object.keys(Pi[Ce]).map(Sr.add.bind(Sr));Object.keys(Pi[Te]).map(Sr.add.bind(Sr));const Mw=[...hw,...Sw],oi=on.FontAwesomeConfig||{};function Dw(e){var t=H.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}H&&typeof H.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=Fw(Dw(n));i!=null&&(oi[r]=i)});const Hm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fm,replacementClass:zm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oi.familyPrefix&&(oi.cssPrefix=oi.familyPrefix);const Er={...Hm,...oi};Er.autoReplaceSvg||(Er.observeMutations=!1);const P={};Object.keys(Hm).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){Er[e]=t,ai.forEach(n=>n(P))},get:function(){return Er[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){Er.cssPrefix=e,ai.forEach(t=>t(P))},get:function(){return Er.cssPrefix}});on.FontAwesomeConfig=P;const ai=[];function zw(e){return ai.push(e),()=>{ai.splice(ai.indexOf(e),1)}}const Rt=Nl,Ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Uw(e){if(!e||!At)return;const t=H.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=H.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return H.head.insertBefore(t,r),e}const Bw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ni(){let e=12,t="";for(;e-- >0;)t+=Bw[Math.random()*62|0];return t}function Ar(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rc(e){return e.classList?Ar(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Wm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $w(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Wm(e[n]),'" '),"").trim()}function jo(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ic(e){return e.size!==Ze.size||e.x!==Ze.x||e.y!==Ze.y||e.rotate!==Ze.rotate||e.flipX||e.flipY}function Vw(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Hw(e){let{transform:t,width:n=Nl,height:r=Nl,startCentered:i=!1}=e,s="";return i&&jm?s+="translate(".concat(t.x/Rt-n/2,"em, ").concat(t.y/Rt-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(t.x/Rt,"em), calc(-50% + ").concat(t.y/Rt,"em)) "):s+="translate(".concat(t.x/Rt,"em, ").concat(t.y/Rt,"em) "),s+="scale(".concat(t.size/Rt*(t.flipX?-1:1),", ").concat(t.size/Rt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Ww=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Gm(){const e=Fm,t=zm,n=P.cssPrefix,r=P.replacementClass;let i=Ww;if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Zd=!1;function xa(){P.autoAddCss&&!Zd&&(Uw(Gm()),Zd=!0)}var Gw={mixout(){return{dom:{css:Gm,insertCss:xa}}},hooks(){return{beforeDOMElementCreation(){xa()},beforeI2svg(){xa()}}}};const It=on||{};It[Et]||(It[Et]={});It[Et].styles||(It[Et].styles={});It[Et].hooks||(It[Et].hooks={});It[Et].shims||(It[Et].shims=[]);var et=It[Et];const Km=[],Ym=function(){H.removeEventListener("DOMContentLoaded",Ym),so=1,Km.map(e=>e())};let so=!1;At&&(so=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),so||H.addEventListener("DOMContentLoaded",Ym));function Kw(e){At&&(so?setTimeout(e,0):Km.push(e))}function Bi(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Wm(e):"<".concat(t," ").concat($w(n),">").concat(r.map(Bi).join(""),"</").concat(t,">")}function ef(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ka=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=n,l,u,d;for(r===void 0?(l=1,d=t[s[0]]):(l=0,d=r);l<o;l++)u=s[l],d=a(d,t[u],u,t);return d};function Yw(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ll(e){const t=Yw(e);return t.length===1?t[0].toString(16):null}function qw(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function tf(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ml(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=tf(t);typeof et.hooks.addPack=="function"&&!r?et.hooks.addPack(e,tf(t)):et.styles[e]={...et.styles[e]||{},...i},e==="fas"&&Ml("fa",t)}const{styles:yn,shims:Qw}=et,Xw={[G]:Object.values(Cn[G]),[Ce]:Object.values(Cn[Ce]),[Te]:Object.values(Cn[Te])};let sc=null,qm={},Qm={},Xm={},Jm={},Zm={};const Jw={[G]:Object.keys(In[G]),[Ce]:Object.keys(In[Ce]),[Te]:Object.keys(In[Te])};function Zw(e){return~Mw.indexOf(e)}function e2(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Zw(i)?i:null}const e0=()=>{const e=r=>ka(yn,(i,s,o)=>(i[o]=ka(s,r,{}),i),{});qm=e((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Qm=e((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),Zm=e((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const t="far"in yn||P.autoFetchSvg,n=ka(Qw,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Xm=n.names,Jm=n.unicodes,sc=Lo(P.styleDefault,{family:P.familyDefault})};zw(e=>{sc=Lo(e.styleDefault,{family:P.familyDefault})});e0();function oc(e,t){return(qm[e]||{})[t]}function t2(e,t){return(Qm[e]||{})[t]}function Ht(e,t){return(Zm[e]||{})[t]}function t0(e){return Xm[e]||{prefix:null,iconName:null}}function n2(e){const t=Jm[e],n=oc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function an(){return sc}const ac=()=>({prefix:null,iconName:null,rest:[]});function Lo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=G}=t,r=In[n][e],i=Pi[n][e]||Pi[n][r],s=e in et.styles?e:null;return i||s||null}const r2={[G]:Object.keys(Cn[G]),[Ce]:Object.keys(Cn[Ce]),[Te]:Object.keys(Cn[Te])};function Mo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[G]:"".concat(P.cssPrefix,"-").concat(G),[Ce]:"".concat(P.cssPrefix,"-").concat(Ce),[Te]:"".concat(P.cssPrefix,"-").concat(Te)};let i=null,s=G;const o=dw.filter(l=>l!==Lm);o.forEach(l=>{(e.includes(r[l])||e.some(u=>r2[l].includes(u)))&&(s=l)});const a=e.reduce((l,u)=>{const d=e2(P.cssPrefix,u);if(yn[u]?(u=Xw[s].includes(u)?Aw[s][u]:u,i=u,l.prefix=u):Jw[s].indexOf(u)>-1?(i=u,l.prefix=Lo(u,{family:s})):d?l.iconName=d:u!==P.replacementClass&&!o.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=i==="fa"?t0(l.iconName):{},m=Ht(l.prefix,l.iconName);f.prefix&&(i=null),l.iconName=f.iconName||m||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!yn.far&&yn.fas&&!P.autoFetchSvg&&(l.prefix="fas")}return l},ac());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Ce&&(yn.fass||P.autoFetchSvg)&&(a.prefix="fass",a.iconName=Ht(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Te&&(yn.fasds||P.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Ht(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=an()||"fas"),a}class i2{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Ml(s,i[s]);const o=Cn[G][s];o&&Ml(o,i[s]),e0()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];t[s]||(t[s]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[s][u]=a)}),t[s][o]=a}),t}}let nf=[],sr={};const hr={},s2=Object.keys(hr);function o2(e,t){let{mixoutsTo:n}=t;return nf=e,sr={},Object.keys(hr).forEach(r=>{s2.indexOf(r)===-1&&delete hr[r]}),nf.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{sr[o]||(sr[o]=[]),sr[o].push(s[o])})}r.provides&&r.provides(hr)}),n}function Dl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(sr[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function jn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(sr[e]||[]).forEach(s=>{s.apply(null,n)})}function ln(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return hr[e]?hr[e].apply(null,t):void 0}function Fl(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||an();if(t)return t=Ht(n,t)||t,ef(n0.definitions,n,t)||ef(et.styles,n,t)}const n0=new i2,a2=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,jn("noAuto")},l2={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return At?(jn("beforeI2svg",e),ln("pseudoElements2svg",e),ln("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Kw(()=>{c2({autoReplaceSvgRoot:t}),jn("watch",e)})}},u2={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ht(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Lo(e[0]);return{prefix:n,iconName:Ht(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(Ow))){const t=Mo(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||an(),iconName:Ht(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=an();return{prefix:t,iconName:Ht(t,e)||e}}}},Re={noAuto:a2,config:P,dom:l2,parse:u2,library:n0,findIconDefinition:Fl,toHtml:Bi},c2=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=H}=e;(Object.keys(et.styles).length>0||P.autoFetchSvg)&&At&&P.autoReplaceSvg&&Re.dom.i2svg({node:t})};function Do(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Bi(n))}}),Object.defineProperty(e,"node",{get:function(){if(!At)return;const n=H.createElement("div");return n.innerHTML=e.html,n.children}}),e}function d2(e){let{children:t,main:n,mask:r,attributes:i,styles:s,transform:o}=e;if(ic(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=jo({...s,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function f2(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:s}=e;const o=s===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function lc(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:u,extra:d,watchable:f=!1}=e,{width:m,height:v}=n.found?n:t,y=r==="fak",x=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(b=>d.classes.indexOf(b)===-1).filter(b=>b!==""||!!b).concat(d.classes).join(" ");let _={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)}};const p=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};f&&(_.attributes[Rn]=""),a&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||Ni())},children:[a]}),delete _.attributes.title);const h={..._,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:s,symbol:o,styles:{...p,...d.styles}},{children:g,attributes:w}=n.found&&t.found?ln("generateAbstractMask",h)||{children:[],attributes:{}}:ln("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=g,h.attributes=w,o?f2(h):d2(h)}function rf(e){const{content:t,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=e,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Rn]="");const u={...o.styles};ic(i)&&(u.transform=Hw({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const d=jo(u);d.length>0&&(l.style=d);const f=[];return f.push({tag:"span",attributes:l,children:[t]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function h2(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=jo(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_a}=et;function zl(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(wa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(wa.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(wa.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const p2={found:!1,width:512,height:512};function m2(e,t){!Um&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ul(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=an()),new Promise((r,i)=>{if(n==="fa"){const s=t0(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&_a[t]&&_a[t][e]){const s=_a[t][e];return r(zl(s))}m2(e,t),r({...p2,icon:P.showMissingIcons&&e?ln("missingIconAbstract")||{}:{}})})}const sf=()=>{},Bl=P.measurePerformance&&hs&&hs.mark&&hs.measure?hs:{mark:sf,measure:sf},qr='FA "6.6.0"',g2=e=>(Bl.mark("".concat(qr," ").concat(e," begins")),()=>r0(e)),r0=e=>{Bl.mark("".concat(qr," ").concat(e," ends")),Bl.measure("".concat(qr," ").concat(e),"".concat(qr," ").concat(e," begins"),"".concat(qr," ").concat(e," ends"))};var uc={begin:g2,end:r0};const Cs=()=>{};function of(e){return typeof(e.getAttribute?e.getAttribute(Rn):null)=="string"}function v2(e){const t=e.getAttribute?e.getAttribute(tc):null,n=e.getAttribute?e.getAttribute(nc):null;return t&&n}function y2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function w2(){return P.autoReplaceSvg===!0?Ts.replace:Ts[P.autoReplaceSvg]||Ts.replace}function x2(e){return H.createElementNS("http://www.w3.org/2000/svg",e)}function k2(e){return H.createElement(e)}function i0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?x2:k2}=t;if(typeof e=="string")return H.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){r.appendChild(i0(s,{ceFn:n}))}),r}function _2(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ts={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(i0(n),t)}),t.getAttribute(Rn)===null&&P.keepOriginalSource){let n=H.createComment(_2(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~rc(t).indexOf(P.replacementClass))return Ts.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===P.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Bi(s)).join(`
`);t.setAttribute(Rn,""),t.innerHTML=i}};function af(e){e()}function s0(e,t){const n=typeof t=="function"?t:Cs;if(e.length===0)n();else{let r=af;P.mutateApproach===Pw&&(r=on.requestAnimationFrame||af),r(()=>{const i=w2(),s=uc.begin("mutate");e.map(i),s(),n()})}}let cc=!1;function o0(){cc=!0}function $l(){cc=!1}let oo=null;function lf(e){if(!qd||!P.observeMutations)return;const{treeCallback:t=Cs,nodeCallback:n=Cs,pseudoElementsCallback:r=Cs,observeMutationsRoot:i=H}=e;oo=new qd(s=>{if(cc)return;const o=an();Ar(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!of(a.addedNodes[0])&&(P.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&P.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&of(a.target)&&~Lw.indexOf(a.attributeName))if(a.attributeName==="class"&&v2(a.target)){const{prefix:l,iconName:u}=Mo(rc(a.target));a.target.setAttribute(tc,l||o),u&&a.target.setAttribute(nc,u)}else y2(a.target)&&n(a.target)})}),At&&oo.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function b2(){oo&&oo.disconnect()}function S2(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function E2(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Mo(rc(e));return i.prefix||(i.prefix=an()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=t2(i.prefix,e.innerText)||oc(i.prefix,Ll(e.innerText))),!i.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function I2(e){const t=Ar(e.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Ni()):(t["aria-hidden"]="true",t.focusable="false")),t}function C2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function uf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=E2(e),s=I2(e),o=Dl("parseNodeAttributes",{},e);let a=t.styleParser?S2(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:T2}=et;function a0(e){const t=P.autoReplaceSvg==="nest"?uf(e,{styleParser:!1}):uf(e);return~t.extra.classes.indexOf(Vm)?ln("generateLayersText",e,t):ln("generateSvgReplacementMutation",e,t)}let ot=new Set;Bm.map(e=>{ot.add("fa-".concat(e))});Object.keys(In[G]).map(ot.add.bind(ot));Object.keys(In[Ce]).map(ot.add.bind(ot));Object.keys(In[Te]).map(ot.add.bind(ot));ot=[...ot];function cf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!At)return Promise.resolve();const n=H.documentElement.classList,r=d=>n.add("".concat(Jd,"-").concat(d)),i=d=>n.remove("".concat(Jd,"-").concat(d)),s=P.autoFetchSvg?ot:Bm.map(d=>"fa-".concat(d)).concat(Object.keys(T2));s.includes("fa")||s.push("fa");const o=[".".concat(Vm,":not([").concat(Rn,"])")].concat(s.map(d=>".".concat(d,":not([").concat(Rn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ar(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=uc.begin("onTree"),u=a.reduce((d,f)=>{try{const m=a0(f);m&&d.push(m)}catch(m){Um||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,f)=>{Promise.all(u).then(m=>{s0(m,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),d()})}).catch(m=>{l(),f(m)})})}function P2(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;a0(e).then(n=>{n&&s0([n],t)})}function N2(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Fl(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Fl(i||{})),e(r,{...n,mask:i})}}const A2=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ze,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:d={}}=t;if(!e)return;const{prefix:f,iconName:m,icon:v}=e;return Do({type:"icon",...e},()=>(jn("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(o?u["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(a||Ni()):(u["aria-hidden"]="true",u.focusable="false")),lc({icons:{main:zl(v),mask:i?zl(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:m,transform:{...Ze,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:u,styles:d,classes:l}})))};var O2={mixout(){return{icon:N2(A2)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=cf,e.nodeCallback=P2,e}}},provides(e){e.i2svg=function(t){const{node:n=H,callback:r=()=>{}}=t;return cf(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:u,maskId:d,extra:f}=n;return new Promise((m,v)=>{Promise.all([Ul(r,o),u.iconName?Ul(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[x,_]=y;m([t,lc({icons:{main:x,mask:_},prefix:o,iconName:r,transform:a,symbol:l,maskId:d,title:i,titleId:s,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:s,styles:o}=t;const a=jo(o);a.length>0&&(r.style=a);let l;return ic(s)&&(l=ln("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},R2={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Do({type:"layer"},()=>{jn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},j2={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=t;return Do({type:"counter",content:e},()=>(jn("beforeDOMElementCreation",{content:e,params:t}),h2({content:e.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},L2={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ze,title:r=null,classes:i=[],attributes:s={},styles:o={}}=t;return Do({type:"text",content:e},()=>(jn("beforeDOMElementCreation",{content:e,params:t}),rf({content:e,transform:{...Ze,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(jm){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/l,a=u.height/l}return P.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,rf({content:t.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const M2=new RegExp('"',"ug"),df=[1105920,1112319],ff={FontAwesome:{normal:"fas",400:"fas"},...vw,...gw,...Ew},Vl=Object.keys(ff).reduce((e,t)=>(e[t.toLowerCase()]=ff[t],e),{}),D2=Object.keys(Vl).reduce((e,t)=>{const n=Vl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function F2(e){const t=e.replace(M2,""),n=qw(t,0),r=n>=df[0]&&n<=df[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ll(i?t[0]:t),isSecondary:r||i}}function z2(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Vl[n]||{})[i]||D2[n]}function hf(e,t){const n="".concat(Tw).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const o=Ar(e.children).filter(m=>m.getAttribute(Al)===t)[0],a=on.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(Rw),d=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&f!=="none"&&f!==""){const m=a.getPropertyValue("content");let v=z2(l,d);const{value:y,isSecondary:x}=F2(m),_=u[0].startsWith("FontAwesome");let p=oc(v,y),h=p;if(_){const g=n2(y);g.iconName&&g.prefix&&(p=g.iconName,v=g.prefix)}if(p&&!x&&(!o||o.getAttribute(tc)!==v||o.getAttribute(nc)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);const g=C2(),{extra:w}=g;w.attributes[Al]=t,Ul(p,v).then(b=>{const T=lc({...g,icons:{main:b,mask:ac()},prefix:v,iconName:h,extra:w,watchable:!0}),I=H.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=T.map(N=>Bi(N)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function U2(e){return Promise.all([hf(e,"::before"),hf(e,"::after")])}function B2(e){return e.parentNode!==document.head&&!~Nw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Al)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pf(e){if(At)return new Promise((t,n)=>{const r=Ar(e.querySelectorAll("*")).filter(B2).map(U2),i=uc.begin("searchPseudoElements");o0(),Promise.all(r).then(()=>{i(),$l(),t()}).catch(()=>{i(),$l(),n()})})}var $2={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=pf,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=H}=t;P.searchPseudoElements&&pf(n)}}};let mf=!1;var V2={mixout(){return{dom:{unwatch(){o0(),mf=!0}}}},hooks(){return{bootstrap(){lf(Dl("mutationObserverCallbacks",{}))},noAuto(){b2()},watch(e){const{observeMutationsRoot:t}=e;mf?$l():lf(Dl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const gf=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var H2={mixout(){return{parse:{transform:e=>gf(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=gf(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:s}=t;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:d,path:f};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const ba={x:0,y:0,width:"100%",height:"100%"};function vf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function W2(e){return e.tag==="g"?e.children:[e]}var G2={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Mo(n.split(" ").map(i=>i.trim())):ac();return r.prefix||(r.prefix=an()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=t;const{width:l,icon:u}=i,{width:d,icon:f}=s,m=Vw({transform:a,containerWidth:d,iconWidth:l}),v={tag:"rect",attributes:{...ba,fill:"white"}},y=u.children?{children:u.children.map(vf)}:{},x={tag:"g",attributes:{...m.inner},children:[vf({tag:u.tag,attributes:{...u.attributes,...m.path},...y})]},_={tag:"g",attributes:{...m.outer},children:[x]},p="mask-".concat(o||Ni()),h="clip-".concat(o||Ni()),g={tag:"mask",attributes:{...ba,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,_]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:W2(f)},g]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...ba}}),{children:n,attributes:r}}}},K2={provides(e){let t=!1;on.matchMedia&&(t=on.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Y2={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},q2=[Gw,O2,R2,j2,L2,$2,V2,H2,G2,K2,Y2];o2(q2,{mixoutsTo:Re});Re.noAuto;Re.config;Re.library;Re.dom;const Hl=Re.parse;Re.findIconDefinition;Re.toHtml;const Q2=Re.icon;Re.layer;Re.text;Re.counter;var l0={exports:{}},X2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",J2=X2,Z2=J2;function u0(){}function c0(){}c0.resetWarningCache=u0;var ex=function(){function e(r,i,s,o,a,l){if(l!==Z2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c0,resetWarningCache:u0};return n.PropTypes=n,n};l0.exports=ex();var tx=l0.exports;const L=oh(tx);function yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yf(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ao(e){"@babel/helpers - typeof";return ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ao(e)}function or(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rx(e,t){if(e==null)return{};var n=nx(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wl(e){return ix(e)||sx(e)||ox(e)||ax()}function ix(e){if(Array.isArray(e))return Gl(e)}function sx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ox(e,t){if(e){if(typeof e=="string")return Gl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gl(e,t)}}function Gl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ax(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lx(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,d=e.spinReverse,f=e.pulse,m=e.fixedWidth,v=e.inverse,y=e.border,x=e.listItem,_=e.flip,p=e.size,h=e.rotation,g=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":m,"fa-inverse":v,"fa-border":y,"fa-li":x,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},or(t,"fa-".concat(p),typeof p<"u"&&p!==null),or(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),or(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),or(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(b){return w[b]?b:null}).filter(function(b){return b})}function ux(e){return e=e-0,e===e}function d0(e){return ux(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var cx=["style"];function dx(e){return e.charAt(0).toUpperCase()+e.slice(1)}function fx(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=d0(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[dx(i)]=s:t[i]=s,t},{})}function f0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return f0(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=fx(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[d0(u)]=d}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=rx(n,cx);return i.attrs.style=Xe(Xe({},i.attrs.style),o),e.apply(void 0,[t.tag,Xe(Xe({},i.attrs),a)].concat(Wl(r)))}var h0=!1;try{h0=!0}catch{}function hx(){if(!h0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wf(e){if(e&&ao(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hl.icon)return Hl.icon(e);if(e===null)return null;if(e&&ao(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Sa(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?or({},e,t):{}}var xf={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},xt=ou.forwardRef(function(e,t){var n=Xe(Xe({},xf),e),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,d=wf(r),f=Sa("classes",[].concat(Wl(lx(n)),Wl((o||"").split(" ")))),m=Sa("transform",typeof n.transform=="string"?Hl.transform(n.transform):n.transform),v=Sa("mask",wf(i)),y=Q2(d,Xe(Xe(Xe(Xe({},f),m),v),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!y)return hx("Could not find icon",d),null;var x=y.abstract,_={ref:t};return Object.keys(n).forEach(function(p){xf.hasOwnProperty(p)||(_[p]=n[p])}),px(x[0],_)});xt.displayName="FontAwesomeIcon";xt.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};var px=f0.bind(null,ou.createElement);const mx={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},gx={prefix:"fab",iconName:"python",icon:[448,512,[],"f3e2","M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"]},vx={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},p0={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},yx=()=>c.jsx("div",{children:c.jsx("div",{class:"max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto",children:c.jsxs("div",{class:"grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6",children:[c.jsx("a",{class:"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800",href:"#",children:c.jsx("div",{class:"p-4 md:p-5",children:c.jsxs("div",{class:"flex gap-x-5",children:[c.jsx(xt,{icon:gx,size:"lg",className:"shrink-0 size-12 text-gray-800 dark:text-white"}),c.jsxs("div",{class:"grow",children:[c.jsx("h3",{class:"group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200",children:"Learn Python →"}),c.jsx("p",{class:"text-sm text-gray-500 dark:text-neutral-500",children:"Get help from 40k+ Preline users"})]})]})})}),c.jsx("a",{class:"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800",href:"#",children:c.jsx("div",{class:"p-4 md:p-5",children:c.jsxs("div",{class:"flex gap-x-5",children:[c.jsx(xt,{icon:vx,class:"shrink-0 size-12 text-gray-800 dark:text-white"}),c.jsxs("div",{class:"grow",children:[c.jsx("h3",{class:"group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200",children:"Learn JavaScript →"}),c.jsx("p",{class:"text-sm text-gray-500 dark:text-neutral-500",children:"Just head to «Help» in the app"})]})]})})}),c.jsx("a",{class:"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800",href:"#",children:c.jsx("div",{class:"p-4 md:p-5",children:c.jsxs("div",{class:"flex gap-x-5",children:[c.jsx(xt,{icon:mx,size:"lg",className:"shrink-0 size-12 text-gray-800 dark:text-white"}),c.jsxs("div",{class:"grow",children:[c.jsx("h3",{class:"group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200",children:"Learn HTML →"}),c.jsxs("p",{class:"text-sm text-gray-500 dark:text-neutral-500",children:["Reach us at"," "]})]})]})})})]})})});var kf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},wx=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},g0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(m0(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wx(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new xx;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kx=function(e){const t=m0(e);return g0.encodeByteArray(t,!0)},v0=function(e){return kx(e).replace(/\./g,"")},y0=function(e){try{return g0.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=()=>_x().__FIREBASE_DEFAULTS__,Sx=()=>{if(typeof process>"u"||typeof kf>"u")return;const e=kf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ex=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&y0(e[1]);return t&&JSON.parse(t)},dc=()=>{try{return bx()||Sx()||Ex()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ix=e=>{var t,n;return(n=(t=dc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},w0=()=>{var e;return(e=dc())===null||e===void 0?void 0:e.config},x0=e=>{var t;return(t=dc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function k0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Px(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nx(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _0(){try{return typeof indexedDB=="object"}catch{return!1}}function b0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Ax(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="FirebaseError";class ut extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ox,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Rx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ut(i,a,r)}}function Rx(e,t){return e.replace(jx,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const jx=/\{\$([^}]+)}/g;function Lx(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ai(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(_f(s)&&_f(o)){if(!Ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _f(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mx(e,t){const n=new Dx(e,t);return n.subscribe.bind(n)}class Dx{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fx(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ea),i.error===void 0&&(i.error=Ea),i.complete===void 0&&(i.complete=Ea);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fx(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ea(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=1e3,Ux=2,Bx=4*60*60*1e3,$x=.5;function bf(e,t=zx,n=Ux){const r=t*Math.pow(n,e),i=Math.round($x*r*(Math.random()-.5)*2);return Math.min(Bx,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e){return e&&e._delegate?e._delegate:e}class at{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Cx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Wx(t))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=vn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=vn){return this.instances.has(t)}getOptions(t=vn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hx(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=vn){return this.component?this.component.multipleInstances?t:vn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hx(e){return e===vn?void 0:e}function Wx(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vx(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(z||(z={}));const Kx={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Yx=z.INFO,qx={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Qx=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=qx[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fc{constructor(t){this.name=t,this._logLevel=Yx,this._logHandler=Qx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Xx=(e,t)=>t.some(n=>e instanceof n);let Sf,Ef;function Jx(){return Sf||(Sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zx(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S0=new WeakMap,Kl=new WeakMap,E0=new WeakMap,Ia=new WeakMap,hc=new WeakMap;function ek(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(en(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&S0.set(n,e)}).catch(()=>{}),hc.set(t,e),t}function tk(e){if(Kl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Kl.set(e,t)}let Yl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Kl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||E0.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nk(e){Yl=e(Yl)}function rk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ca(this),t,...n);return E0.set(r,t.sort?t.sort():[t]),en(r)}:Zx().includes(e)?function(...t){return e.apply(Ca(this),t),en(S0.get(this))}:function(...t){return en(e.apply(Ca(this),t))}}function ik(e){return typeof e=="function"?rk(e):(e instanceof IDBTransaction&&tk(e),Xx(e,Jx())?new Proxy(e,Yl):e)}function en(e){if(e instanceof IDBRequest)return ek(e);if(Ia.has(e))return Ia.get(e);const t=ik(e);return t!==e&&(Ia.set(e,t),hc.set(t,e)),t}const Ca=e=>hc.get(e);function I0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=en(o);return r&&o.addEventListener("upgradeneeded",l=>{r(en(o.result),l.oldVersion,l.newVersion,en(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sk=["get","getKey","getAll","getAllKeys","count"],ok=["put","add","delete","clear"],Ta=new Map;function If(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ta.get(t))return Ta.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ta.set(t,s),s}nk(e=>({...e,get:(t,n,r)=>If(t,n)||e.get(t,n,r),has:(t,n)=>!!If(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lk(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ql="@firebase/app",Cf="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new fc("@firebase/app"),uk="@firebase/app-compat",ck="@firebase/analytics-compat",dk="@firebase/analytics",fk="@firebase/app-check-compat",hk="@firebase/app-check",pk="@firebase/auth",mk="@firebase/auth-compat",gk="@firebase/database",vk="@firebase/database-compat",yk="@firebase/functions",wk="@firebase/functions-compat",xk="@firebase/installations",kk="@firebase/installations-compat",_k="@firebase/messaging",bk="@firebase/messaging-compat",Sk="@firebase/performance",Ek="@firebase/performance-compat",Ik="@firebase/remote-config",Ck="@firebase/remote-config-compat",Tk="@firebase/storage",Pk="@firebase/storage-compat",Nk="@firebase/firestore",Ak="@firebase/vertexai-preview",Ok="@firebase/firestore-compat",Rk="firebase",jk="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="[DEFAULT]",Lk={[ql]:"fire-core",[uk]:"fire-core-compat",[dk]:"fire-analytics",[ck]:"fire-analytics-compat",[hk]:"fire-app-check",[fk]:"fire-app-check-compat",[pk]:"fire-auth",[mk]:"fire-auth-compat",[gk]:"fire-rtdb",[vk]:"fire-rtdb-compat",[yk]:"fire-fn",[wk]:"fire-fn-compat",[xk]:"fire-iid",[kk]:"fire-iid-compat",[_k]:"fire-fcm",[bk]:"fire-fcm-compat",[Sk]:"fire-perf",[Ek]:"fire-perf-compat",[Ik]:"fire-rc",[Ck]:"fire-rc-compat",[Tk]:"fire-gcs",[Pk]:"fire-gcs-compat",[Nk]:"fire-fst",[Ok]:"fire-fst-compat",[Ak]:"fire-vertex","fire-js":"fire-js",[Rk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map,Mk=new Map,Xl=new Map;function Tf(e,t){try{e.container.addComponent(t)}catch(n){Ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tt(e){const t=e.name;if(Xl.has(t))return Ct.debug(`There were multiple attempts to register component ${t}.`),!1;Xl.set(t,e);for(const n of lo.values())Tf(n,e);for(const n of Mk.values())Tf(n,e);return!0}function Or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function tt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new Vn("app","Firebase",Dk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=jk;function C0(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ql,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw tn.create("bad-app-name",{appName:String(i)});if(n||(n=w0()),!n)throw tn.create("no-options");const s=lo.get(i);if(s){if(Ai(n,s.options)&&Ai(r,s.config))return s;throw tn.create("duplicate-app",{appName:i})}const o=new Gx(i);for(const l of Xl.values())o.addComponent(l);const a=new Fk(n,r,o);return lo.set(i,a),a}function T0(e=Ql){const t=lo.get(e);if(!t&&e===Ql&&w0())return C0();if(!t)throw tn.create("no-app",{appName:e});return t}function it(e,t,n){var r;let i=(r=Lk[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ct.warn(a.join(" "));return}Tt(new at(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="firebase-heartbeat-database",Uk=1,Oi="firebase-heartbeat-store";let Pa=null;function P0(){return Pa||(Pa=I0(zk,Uk,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Oi)}catch(n){console.warn(n)}}}}).catch(e=>{throw tn.create("idb-open",{originalErrorMessage:e.message})})),Pa}async function Bk(e){try{const n=(await P0()).transaction(Oi),r=await n.objectStore(Oi).get(N0(e));return await n.done,r}catch(t){if(t instanceof ut)Ct.warn(t.message);else{const n=tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(n.message)}}}async function Pf(e,t){try{const r=(await P0()).transaction(Oi,"readwrite");await r.objectStore(Oi).put(t,N0(e)),await r.done}catch(n){if(n instanceof ut)Ct.warn(n.message);else{const r=tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ct.warn(r.message)}}}function N0(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=1024,Vk=30*24*60*60*1e3;class Hk{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Vk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ct.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nf(),{heartbeatsToSend:r,unsentEntries:i}=Wk(this._heartbeatsCache.heartbeats),s=v0(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ct.warn(n),""}}}function Nf(){return new Date().toISOString().substring(0,10)}function Wk(e,t=$k){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Af(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Af(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gk{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _0()?b0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Af(e){return v0(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(e){Tt(new at("platform-logger",t=>new ak(t),"PRIVATE")),Tt(new at("heartbeat",t=>new Hk(t),"PRIVATE")),it(ql,Cf,e),it(ql,Cf,"esm2017"),it("fire-js","")}Kk("");var Yk="firebase",qk="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(Yk,qk,"app");const A0="@firebase/installations",pc="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=1e4,R0=`w:${pc}`,j0="FIS_v2",Qk="https://firebaseinstallations.googleapis.com/v1",Xk=60*60*1e3,Jk="installations",Zk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ln=new Vn(Jk,Zk,e_);function L0(e){return e instanceof ut&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0({projectId:e}){return`${Qk}/projects/${e}/installations`}function D0(e){return{token:e.token,requestStatus:2,expiresIn:n_(e.expiresIn),creationTime:Date.now()}}async function F0(e,t){const r=(await t.json()).error;return Ln.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function z0({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function t_(e,{refreshToken:t}){const n=z0(e);return n.append("Authorization",r_(t)),n}async function U0(e){const t=await e();return t.status>=500&&t.status<600?e():t}function n_(e){return Number(e.replace("s","000"))}function r_(e){return`${j0} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=M0(e),i=z0(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:j0,appId:e.appId,sdkVersion:R0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await U0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:D0(u.authToken)}}else throw await F0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=/^[cdef][\w-]{21}$/,Jl="";function a_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=l_(e);return o_.test(n)?n:Jl}catch{return Jl}}function l_(e){return s_(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Map;function V0(e,t){const n=Fo(e);H0(n,t),u_(n,t)}function H0(e,t){const n=$0.get(e);if(n)for(const r of n)r(t)}function u_(e,t){const n=c_();n&&n.postMessage({key:e,fid:t}),d_()}let _n=null;function c_(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=e=>{H0(e.data.key,e.data.fid)}),_n}function d_(){$0.size===0&&_n&&(_n.close(),_n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="firebase-installations-database",h_=1,Mn="firebase-installations-store";let Na=null;function mc(){return Na||(Na=I0(f_,h_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Mn)}}})),Na}async function uo(e,t){const n=Fo(e),i=(await mc()).transaction(Mn,"readwrite"),s=i.objectStore(Mn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&V0(e,t.fid),t}async function W0(e){const t=Fo(e),r=(await mc()).transaction(Mn,"readwrite");await r.objectStore(Mn).delete(t),await r.done}async function zo(e,t){const n=Fo(e),i=(await mc()).transaction(Mn,"readwrite"),s=i.objectStore(Mn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&V0(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(e){let t;const n=await zo(e.appConfig,r=>{const i=p_(r),s=m_(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Jl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function p_(e){const t=e||{fid:a_(),registrationStatus:0};return G0(t)}function m_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ln.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=g_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:v_(e)}:{installationEntry:t}}async function g_(e,t){try{const n=await i_(e,t);return uo(e.appConfig,n)}catch(n){throw L0(n)&&n.customData.serverCode===409?await W0(e.appConfig):await uo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function v_(e){let t=await Of(e.appConfig);for(;t.registrationStatus===1;)await B0(100),t=await Of(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gc(e);return r||n}return t}function Of(e){return zo(e,t=>{if(!t)throw Ln.create("installation-not-found");return G0(t)})}function G0(e){return y_(e)?{fid:e.fid,registrationStatus:0}:e}function y_(e){return e.registrationStatus===1&&e.registrationTime+O0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_({appConfig:e,heartbeatServiceProvider:t},n){const r=x_(e,n),i=t_(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:R0,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await U0(()=>fetch(r,a));if(l.ok){const u=await l.json();return D0(u)}else throw await F0("Generate Auth Token",l)}function x_(e,{fid:t}){return`${M0(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(e,t=!1){let n;const r=await zo(e.appConfig,s=>{if(!K0(s))throw Ln.create("not-registered");const o=s.authToken;if(!t&&b_(o))return s;if(o.requestStatus===1)return n=k_(e,t),s;{if(!navigator.onLine)throw Ln.create("app-offline");const a=E_(s);return n=__(e,a),a}});return n?await n:r.authToken}async function k_(e,t){let n=await Rf(e.appConfig);for(;n.authToken.requestStatus===1;)await B0(100),n=await Rf(e.appConfig);const r=n.authToken;return r.requestStatus===0?vc(e,t):r}function Rf(e){return zo(e,t=>{if(!K0(t))throw Ln.create("not-registered");const n=t.authToken;return I_(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function __(e,t){try{const n=await w_(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await uo(e.appConfig,r),n}catch(n){if(L0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await W0(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await uo(e.appConfig,r)}throw n}}function K0(e){return e!==void 0&&e.registrationStatus===2}function b_(e){return e.requestStatus===2&&!S_(e)}function S_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Xk}function E_(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function I_(e){return e.requestStatus===1&&e.requestTime+O0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(e){const t=e,{installationEntry:n,registrationPromise:r}=await gc(t);return r?r.catch(console.error):vc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(e,t=!1){const n=e;return await P_(n),(await vc(n,t)).token}async function P_(e){const{registrationPromise:t}=await gc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(e){if(!e||!e.options)throw Aa("App Configuration");if(!e.name)throw Aa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Aa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Aa(e){return Ln.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="installations",A_="installations-internal",O_=e=>{const t=e.getProvider("app").getImmediate(),n=N_(t),r=Or(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},R_=e=>{const t=e.getProvider("app").getImmediate(),n=Or(t,Y0).getImmediate();return{getId:()=>C_(n),getToken:i=>T_(n,i)}};function j_(){Tt(new at(Y0,O_,"PUBLIC")),Tt(new at(A_,R_,"PRIVATE"))}j_();it(A0,pc);it(A0,pc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="analytics",L_="firebase_id",M_="origin",D_=60*1e3,F_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new fc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pe=new Vn("analytics","Analytics",z_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(e){if(!e.startsWith(yc)){const t=Pe.create("invalid-gtag-resource",{gtagURL:e});return be.warn(t.message),""}return e}function q0(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function B_(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function $_(e,t){const n=B_("firebase-js-sdk-policy",{createScriptURL:U_}),r=document.createElement("script"),i=`${yc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function V_(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function H_(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await q0(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){be.error(a)}e("config",i,s)}async function W_(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await q0(n);for(const l of o){const u=a.find(f=>f.measurementId===l),d=u&&t[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){be.error(s)}}function G_(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await W_(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await H_(e,t,n,r,a,l)}else if(s==="consent"){const[a,l]=o;e("consent",a,l)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){be.error(a)}}return i}function K_(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=G_(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Y_(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(yc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=30,Q_=1e3;class X_{constructor(t={},n=Q_){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Q0=new X_;function J_(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Z_(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:J_(r)},s=F_.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Pe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eb(e,t=Q0,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Pe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Pe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rb;return setTimeout(async()=>{a.abort()},D_),X0({appId:r,apiKey:i,measurementId:s},o,a,t)}async function X0(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Q0){var s;const{appId:o,measurementId:a}=e;try{await tb(r,t)}catch(l){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Z_(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!nb(u)){if(i.deleteThrottleMetadata(o),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?bf(n,i.intervalMillis,q_):bf(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),be.debug(`Calling attemptFetch again in ${d} millis`),X0(e,f,r,i)}}function tb(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Pe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function nb(e){if(!(e instanceof ut)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class rb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ib(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(){if(_0())try{await b0()}catch(e){return be.warn(Pe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return be.warn(Pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ob(e,t,n,r,i,s,o){var a;const l=eb(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>be.error(v)),t.push(l);const u=sb().then(v=>{if(v)return r.getId()}),[d,f]=await Promise.all([l,u]);Y_(s)||$_(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[M_]="firebase",m.update=!0,f!=null&&(m[L_]=f),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(t){this.app=t}_delete(){return delete li[this.app.options.appId],Promise.resolve()}}let li={},jf=[];const Lf={};let Oa="dataLayer",lb="gtag",Mf,J0,Df=!1;function ub(){const e=[];if(k0()&&e.push("This is a browser extension environment."),Ax()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Pe.create("invalid-analytics-context",{errorInfo:t});be.warn(n.message)}}function cb(e,t,n){ub();const r=e.options.appId;if(!r)throw Pe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pe.create("no-api-key");if(li[r]!=null)throw Pe.create("already-exists",{id:r});if(!Df){V_(Oa);const{wrappedGtag:s,gtagCore:o}=K_(li,jf,Lf,Oa,lb);J0=s,Mf=o,Df=!0}return li[r]=ob(e,jf,Lf,t,Mf,Oa,n),new ab(e)}function db(e=T0()){e=fn(e);const t=Or(e,co);return t.isInitialized()?t.getImmediate():fb(e)}function fb(e,t={}){const n=Or(e,co);if(n.isInitialized()){const i=n.getImmediate();if(Ai(t,n.getOptions()))return i;throw Pe.create("already-initialized")}return n.initialize({options:t})}function hb(e,t,n,r){e=fn(e),ib(J0,li[e.app.options.appId],t,n,r).catch(i=>be.error(i))}const Ff="@firebase/analytics",zf="0.10.7";function pb(){Tt(new at(co,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return cb(r,i,n)},"PUBLIC")),Tt(new at("analytics-internal",e,"PRIVATE")),it(Ff,zf),it(Ff,zf,"esm2017");function e(t){try{const n=t.getProvider(co).getImmediate();return{logEvent:(r,i,s)=>hb(n,r,i,s)}}catch(n){throw Pe.create("interop-component-reg-failed",{reason:n})}}}pb();function wc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mb=Z0,eg=new Vn("auth","Firebase",Z0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new fc("@firebase/auth");function gb(e,...t){fo.logLevel<=z.WARN&&fo.warn(`Auth (${Vi}): ${e}`,...t)}function Ps(e,...t){fo.logLevel<=z.ERROR&&fo.error(`Auth (${Vi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,...t){throw kc(e,...t)}function Ke(e,...t){return kc(e,...t)}function xc(e,t,n){const r=Object.assign(Object.assign({},mb()),{[t]:n});return new Vn("auth","Firebase",r).create(t,{appName:e.name})}function nn(e){return xc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vb(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&lt(e,"argument-error"),xc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return eg.create(e,...t)}function A(e,t,...n){if(!e)throw kc(t,...n)}function gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ps(t),new Error(t)}function Pt(e,t){e||gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function yb(){return Uf()==="http:"||Uf()==="https:"}function Uf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yb()||k0()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Pt(n>t,"Short delay should be less than long delay!"),this.isMobile=Tx()||Px()}get(){return wb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(e,t){Pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=new Hi(3e4,6e4);function Wi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hn(e,t,n,r,i={}){return ng(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=$i(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),tg.fetch()(ig(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function ng(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},kb),t);try{const i=new Sb(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ps(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ps(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ps(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ps(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xc(e,d,u);lt(e,d)}}catch(i){if(i instanceof ut)throw i;lt(e,"network-request-failed",{message:String(i)})}}async function rg(e,t,n,r,i={}){const s=await Hn(e,t,n,r,i);return"mfaPendingCredential"in s&&lt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ig(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?_c(e.config,i):`${e.config.apiScheme}://${i}`}function bb(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sb{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),_b.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ps(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(e,t,r);return i.customData._tokenResponse=n,i}function Bf(e){return e!==void 0&&e.enterprise!==void 0}class Eb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return bb(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Ib(e,t){return Hn(e,"GET","/v2/recaptchaConfig",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(e,t){return Hn(e,"POST","/v1/accounts:delete",t)}async function sg(e,t){return Hn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Tb(e,t=!1){const n=fn(e),r=await n.getIdToken(t),i=bc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ui(Ra(i.auth_time)),issuedAtTime:ui(Ra(i.iat)),expirationTime:ui(Ra(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ra(e){return Number(e)*1e3}function bc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const i=y0(n);return i?JSON.parse(i):(Ps("Failed to decode base64 JWT payload"),null)}catch(i){return Ps("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $f(e){const t=bc(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ut&&Pb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Pb({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ri(e,sg(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?og(s.providerUserInfo):[],a=Ob(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new eu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function Ab(e){const t=fn(e);await ho(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ob(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function og(e){return e.map(t=>{var{providerId:n}=t,r=wc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(e,t){const n=await ng(e,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=ig(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jb(e,t){return Hn(e,"POST","/v2/accounts:revokeToken",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):$f(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=$f(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Rb(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pr;return r&&(A(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class vt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=wc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new eu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ri(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Tb(this,t)}reload(){return Ab(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new vt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(nn(this.auth));const t=await this.getIdToken();return await Ri(this,Cb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:b,providerData:T,stsTokenManager:I}=n;A(g&&I,t,"internal-error");const N=pr.fromJSON(this.name,I);A(typeof g=="string",t,"internal-error"),jt(f,t.name),jt(m,t.name),A(typeof w=="boolean",t,"internal-error"),A(typeof b=="boolean",t,"internal-error"),jt(v,t.name),jt(y,t.name),jt(x,t.name),jt(_,t.name),jt(p,t.name),jt(h,t.name);const B=new vt({uid:g,auth:t,email:m,emailVerified:w,displayName:f,isAnonymous:b,photoURL:y,phoneNumber:v,tenantId:x,stsTokenManager:N,createdAt:p,lastLoginAt:h});return T&&Array.isArray(T)&&(B.providerData=T.map(j=>Object.assign({},j))),_&&(B._redirectEventId=_),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new pr;i.updateFromServerResponse(n);const s=new vt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ho(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?og(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new pr;a.updateFromIdToken(r);const l=new vt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new eu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map;function yt(e){Pt(e instanceof Function,"Expected a class definition");let t=Vf.get(e);return t?(Pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ag.type="NONE";const Hf=ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,t,n){return`firebase:${e}:${t}:${n}`}class mr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ns(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ns("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?vt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new mr(yt(Hf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yt(Hf);const o=Ns(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=vt._fromJSON(t,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new mr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new mr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hg(t))return"Blackberry";if(pg(t))return"Webos";if(ug(t))return"Safari";if((t.includes("chrome/")||cg(t))&&!t.includes("edge/"))return"Chrome";if(fg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lg(e=me()){return/firefox\//i.test(e)}function ug(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cg(e=me()){return/crios\//i.test(e)}function dg(e=me()){return/iemobile/i.test(e)}function fg(e=me()){return/android/i.test(e)}function hg(e=me()){return/blackberry/i.test(e)}function pg(e=me()){return/webos/i.test(e)}function Sc(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lb(e=me()){var t;return Sc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Mb(){return Nx()&&document.documentMode===10}function mg(e=me()){return Sc(e)||fg(e)||pg(e)||hg(e)||/windows phone/i.test(e)||dg(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(e,t=[]){let n;switch(e){case"Browser":n=Wf(me());break;case"Worker":n=`${Wf(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(e,t={}){return Hn(e,"GET","/v2/passwordPolicy",Wi(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=6;class Ub{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gf(this),this.idTokenSubscription=new Gf(this),this.beforeStateQueue=new Db(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await sg(this,{idToken:t}),r=await vt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ho(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tt(this.app))return Promise.reject(nn(this));const n=t?fn(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tt(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Fb(this),n=new Ub(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Vn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jb(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wn(e){return fn(e)}class Gf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mx(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $b(e){Uo=e}function vg(e){return Uo.loadJS(e)}function Vb(){return Uo.recaptchaEnterpriseScript}function Hb(){return Uo.gapiScript}function Wb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Gb="recaptcha-enterprise",Kb="NO_RECAPTCHA";class Yb{constructor(t){this.type=Gb,this.auth=Wn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ib(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Eb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Bf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Kb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Bf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Vb();l.length!==0&&(l+=a),vg(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Kf(e,t,n,r=!1){const i=new Yb(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qb(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kf(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(e,t){const n=Or(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ai(s,t??{}))return i;lt(i,"already-initialized")}return n.initialize({options:t})}function Xb(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Jb(e,t,n){const r=Wn(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=yg(t),{host:o,port:a}=Zb(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),eS()}function yg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Zb(e){const t=yg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yf(o)}}}function Yf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function eS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(t){return gt("not implemented")}_linkToIdToken(t,n){return gt("not implemented")}_getReauthenticationResolver(t){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(e,t){return rg(e,"POST","/v1/accounts:signInWithIdp",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="http://localhost";class Dn extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=wc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return gr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,gr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,gr(t,n)}buildRequest(){const t={requestUri:tS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$i(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Ec{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Gi{constructor(){super("facebook.com")}static credential(t){return Dn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zt.credential(t.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Dn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ft.credentialFromTaggedObject(t)}static credentialFromError(t){return ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Gi{constructor(){super("github.com")}static credential(t){return Dn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ht.credentialFromTaggedObject(t)}static credentialFromError(t){return ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ht.credential(t.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Gi{constructor(){super("twitter.com")}static credential(t,n){return Dn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(e,t){return rg(e,"POST","/v1/accounts:signUp",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await vt._fromIdTokenResponse(t,r,i),o=qf(r);return new Fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=qf(r);return new Fn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function qf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends ut{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,po.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new po(t,n,r,i)}}function xg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(e,s,t,r):s})}async function rS(e,t,n=!1){const r=await Ri(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(e,t,n=!1){const{auth:r}=e;if(tt(r.app))return Promise.reject(nn(r));const i="reauthenticate";try{const s=await Ri(e,xg(r,i,t,e),n);A(s.idToken,r,"internal-error");const o=bc(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(e.uid===a,r,"user-mismatch"),Fn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(e,t,n=!1){if(tt(e.app))return Promise.reject(nn(e));const r="signIn",i=await xg(e,r,t),s=await Fn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(e){const t=Wn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function aS(e,t,n){if(tt(e.app))return Promise.reject(nn(e));const r=Wn(e),o=await qb(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oS(e),l}),a=await Fn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function lS(e,t,n,r){return fn(e).onIdTokenChanged(t,n,r)}function uS(e,t,n){return fn(e).beforeAuthStateChanged(t,n)}const mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=1e3,dS=10;class _g extends kg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Mb()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,dS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},cS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}_g.type="LOCAL";const fS=_g;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends kg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}bg.type="SESSION";const Sg=bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Bo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ic("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function mS(e){st().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function gS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function yS(){return Eg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="firebaseLocalStorageDb",wS=1,go="firebaseLocalStorage",Cg="fbase_key";class Ki{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $o(e,t){return e.transaction([go],t?"readwrite":"readonly").objectStore(go)}function xS(){const e=indexedDB.deleteDatabase(Ig);return new Ki(e).toPromise()}function tu(){const e=indexedDB.open(Ig,wS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(go,{keyPath:Cg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(go)?t(r):(r.close(),await xS(),t(await tu()))})})}async function Qf(e,t,n){const r=$o(e,!0).put({[Cg]:t,value:n});return new Ki(r).toPromise()}async function kS(e,t){const n=$o(e,!1).get(t),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function Xf(e,t){const n=$o(e,!0).delete(t);return new Ki(n).toPromise()}const _S=800,bS=3;class Tg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>bS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(yS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new pS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await tu();return await Qf(t,mo,"1"),await Xf(t,mo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>kS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=$o(i,!1).getAll();return new Ki(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tg.type="LOCAL";const SS=Tg;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(e,t){return t?yt(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends wg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return gr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return gr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ES(e){return sS(e.auth,new Cc(e),e.bypassAuthState)}function IS(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),iS(n,new Cc(e),e.bypassAuthState)}async function CS(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),rS(n,new Cc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ES;case"linkViaPopup":case"linkViaRedirect":return CS;case"reauthViaPopup":case"reauthViaRedirect":return IS;default:lt(this.auth,"internal-error")}}resolve(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Hi(2e3,1e4);async function Ag(e,t,n){if(tt(e.app))return Promise.reject(Ke(e,"operation-not-supported-in-this-environment"));const r=Wn(e);vb(e,t,Ec);const i=Pg(r,n);return new bn(r,"signInViaPopup",t,i).executeNotNull()}class bn extends Ng{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const t=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,TS.get())};t()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="pendingRedirect",As=new Map;class NS extends Ng{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=As.get(this.auth._key());if(!t){try{const r=await AS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}As.set(this.auth._key(),t)}return this.bypassAuthState||As.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AS(e,t){const n=jS(t),r=RS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OS(e,t){As.set(e._key(),t)}function RS(e){return yt(e._redirectPersistence)}function jS(e){return Ns(PS,e.config.apiKey,e.name)}async function LS(e,t,n=!1){if(tt(e.app))return Promise.reject(nn(e));const r=Wn(e),i=Pg(r,t),o=await new NS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=10*60*1e3;class DS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!FS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Og(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=MS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jf(t))}saveEventToCache(t){this.cachedEventUids.add(Jf(t)),this.lastProcessedEventTime=Date.now()}}function Jf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Og({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function FS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Og(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(e,t={}){return Hn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function $S(e){if(e.config.emulator)return;const{authorizedDomains:t}=await zS(e);for(const n of t)try{if(VS(n))return}catch{}lt(e,"unauthorized-domain")}function VS(e){const t=Zl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BS.test(n))return!1;if(US.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Hi(3e4,6e4);function Zf(){const e=st().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function WS(e){return new Promise((t,n)=>{var r,i,s;function o(){Zf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zf(),n(Ke(e,"network-request-failed"))},timeout:HS.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)o();else{const a=Wb("iframefcb");return st()[a]=()=>{gapi.load?o():n(Ke(e,"network-request-failed"))},vg(`${Hb()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Os=null,t})}let Os=null;function GS(e){return Os=Os||WS(e),Os}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=new Hi(5e3,15e3),YS="__/auth/iframe",qS="emulator/auth/iframe",QS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JS(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_c(t,qS):`https://${e.config.authDomain}/${YS}`,r={apiKey:t.apiKey,appName:e.name,v:Vi},i=XS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$i(r).slice(1)}`}async function ZS(e){const t=await GS(e),n=st().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:JS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(e,"network-request-failed"),a=st().setTimeout(()=>{s(o)},KS.get());function l(){st().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tE=500,nE=600,rE="_blank",iE="http://localhost";class eh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sE(e,t,n,r=tE,i=nE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=me().toLowerCase();n&&(a=cg(u)?rE:n),lg(u)&&(t=t||iE,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if(Lb(u)&&a!=="_self")return oE(t||"",a),new eh(null);const f=window.open(t||"",a,d);A(f,e,"popup-blocked");try{f.focus()}catch{}return new eh(f)}function oE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="__/auth/handler",lE="emulator/auth/handler",uE=encodeURIComponent("fac");async function th(e,t,n,r,i,s){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Vi,eventId:i};if(t instanceof Ec){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Lx(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(t instanceof Gi){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${uE}=${encodeURIComponent(l)}`:"";return`${cE(e)}?${$i(a).slice(1)}${u}`}function cE({config:e}){return e.emulator?_c(e,lE):`https://${e.authDomain}/${aE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class dE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sg,this._completeRedirectFn=LS,this._overrideRedirectResult=OS}async _openPopup(t,n,r,i){var s;Pt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await th(t,n,r,Zl(),i);return sE(t,o,Ic())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await th(t,n,r,Zl(),i);return mS(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ZS(t),r=new DS(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ja,{type:ja},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ja];o!==void 0&&n(!!o),lt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$S(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return mg()||ug()||Sc()}}const fE=dE;var nh="@firebase/auth",rh="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mE(e){Tt(new at("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gg(e)},u=new Bb(r,i,s,l);return Xb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tt(new at("auth-internal",t=>{const n=Wn(t.getProvider("auth").getImmediate());return(r=>new hE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(nh,rh,pE(e)),it(nh,rh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=5*60,vE=x0("authIdTokenMaxAge")||gE;let ih=null;const yE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vE)return;const i=n==null?void 0:n.token;ih!==i&&(ih=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rg(e=T0()){const t=Or(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Qb(e,{popupRedirectResolver:fE,persistence:[SS,fS,Sg]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yE(s.toString());uS(n,o,()=>o(n.currentUser)),lS(n,a=>o(a))}}const i=Ix("auth");return i&&Jb(n,`http://${i}`),n}function wE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}$b({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mE("Browser");const xE={apiKey:"AIzaSyB7dFCKvuqBzGsf16reEZj6d0iC14caSE8",authDomain:"crade-code.firebaseapp.com",projectId:"crade-code",storageBucket:"crade-code.appspot.com",messagingSenderId:"52821838648",appId:"1:52821838648:web:5f0c393ea3f380fc5bcfcd",measurementId:"G-9E8RZQFRG5"},kE=C0(xE);db(kE);const Tc=Rg(),_E=new ft,bE=new ht,SE=(e,t)=>aS(Tc,e,t),jg=()=>Ag(Tc,_E),Lg=()=>Ag(Tc,bE),EE=()=>{const e=async()=>{try{await Lg(),navigate("/")}catch(t){setError(t.message)}};return c.jsx("div",{children:c.jsx("div",{className:"max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8",children:c.jsxs("div",{className:"max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 relative z-10",children:[c.jsx("div",{className:"flex justify-center",children:c.jsxs("a",{className:"inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-black p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600",href:"#",children:["Explore the Languages We Offer",c.jsxs("span",{className:"flex items-center gap-x-1",children:[c.jsx("span",{className:"border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700",children:"Explore"}),c.jsx("svg",{className:"shrink-0 size-4 text-blue-600",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"m9 18 6-6-6-6"})})]})]})}),c.jsx("div",{className:"mt-5 max-w-xl text-center mx-auto",children:c.jsxs("h1",{className:"block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200",children:["Accelerate Your Coding Journey"," "]})}),c.jsx("div",{className:"mt-5 max-w-3xl text-center mx-auto",children:c.jsx("p",{className:"text-lg text-gray-600 dark:text-neutral-400",children:"Learn to code with engaging, hands-on lessons that cater to beginners and experts alike. Start building your future today with tools and resources designed to make coding fun and accessible for everyone."})}),c.jsx("div",{className:"mt-8 gap-3 flex justify-center",children:c.jsxs("button",{onClick:e,className:"inline-flex justify-center items-center gap-x-3 text-center bg-black text-white dark:bg-white dark:text-black text-sm font-medium rounded-full py-3 px-4",children:[c.jsx("svg",{className:"shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:c.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Continue with Github"]})})]})})})},IE=()=>c.jsx("div",{children:c.jsx("div",{class:"max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-[70px] mx-auto",children:c.jsxs("div",{class:"grid md:grid-cols-2 gap-12",children:[c.jsxs("div",{class:"lg:w-3/4",children:[c.jsx("h2",{class:"text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white",children:"Collaborative Tools to Unlock Your Coding Potential"}),c.jsx("p",{class:"mt-3 text-gray-800 dark:text-neutral-400",children:"Unlock your potential with tools designed to make learning to code a collaborative and enriching experience. Whether you're just starting out or advancing your skills, our platform provides the resources you need to succeed."}),c.jsx("p",{class:"mt-5",children:c.jsxs("a",{class:"inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500",href:"#",children:["Learn more",c.jsx("svg",{class:"shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:c.jsx("path",{d:"m9 18 6-6-6-6"})})]})})]}),c.jsxs("div",{class:"space-y-6 lg:space-y-10",children:[c.jsxs("div",{class:"flex gap-x-5 sm:gap-x-8",children:[c.jsx("span",{class:"shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200",children:c.jsxs("svg",{class:"shrink-0 size-5",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),c.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}),c.jsxs("div",{class:"grow",children:[c.jsx("h3",{class:"text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200",children:"Comprehensive Learning Resources"}),c.jsx("p",{class:"mt-1 text-gray-600 dark:text-neutral-400",children:"Dive into our extensive library of tutorials, documentation, and coding exercises. Everything is crafted to help you understand concepts quickly and apply them effectively."})]})]}),c.jsxs("div",{class:"flex gap-x-5 sm:gap-x-8",children:[c.jsx("span",{class:"shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200",children:c.jsxs("svg",{class:"shrink-0 size-5",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"}),c.jsx("path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"})]})}),c.jsxs("div",{class:"grow",children:[c.jsx("h3",{class:"text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200",children:"24/7 Support"}),c.jsx("p",{class:"mt-1 text-gray-600 dark:text-neutral-400",children:"Join a community of learners and experienced developers eager to help you grow. Share your progress, ask questions, and collaborate on projects in a supportive environment."})]})]}),c.jsxs("div",{class:"flex gap-x-5 sm:gap-x-8",children:[c.jsx("span",{class:"shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200",children:c.jsxs("svg",{class:"shrink-0 size-5",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M7 10v12"}),c.jsx("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"})]})}),c.jsxs("div",{class:"grow",children:[c.jsx("h3",{class:"text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200",children:"Simple and affordable"}),c.jsx("p",{class:"mt-1 text-gray-600 dark:text-neutral-400",children:"Learning to code shouldn’t be expensive. Our platform offers extensive free, high-quality tools and resources to help you achieve your coding goals without breaking the bank."})]})]})]})]})})}),CE=()=>c.jsxs("div",{children:[c.jsx(EE,{}),c.jsx(yx,{}),c.jsx(IE,{})]}),Mg={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"]},sh=({onRegisterClick:e})=>(S.useEffect(()=>{setTimeout(()=>{e()},100)},[e]),c.jsxs("body",{className:"dark:bg-black transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px] min-h-screen",children:[c.jsxs("button",{"data-drawer-target":"cta-button-sidebar","data-drawer-toggle":"cta-button-sidebar","aria-controls":"cta-button-sidebar",type:"button",class:"inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[c.jsx("span",{class:"sr-only",children:"Open sidebar"}),c.jsx("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]}),c.jsx("aside",{id:"cta-button-sidebar",class:"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar",children:c.jsxs("div",{class:"h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",children:[c.jsxs("ul",{class:"space-y-2 font-medium",children:[c.jsx("div",{class:"w-full h-0.4 bg-gray-600"}),c.jsxs(si,{class:"flex items-center justify-left font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white",to:"/","aria-label":"Home",children:[c.jsx(xt,{icon:Mg,size:"lg",className:"pr-[7px]"}),"CradeCode"]}),c.jsxs("li",{children:[c.jsx("a",{href:"#",class:"text-xs font-bold flex items-center mt-8 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"ms-3",children:"Lessons"})}),c.jsx("a",{href:"#",class:"text-xs flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"flex-1 ms-3 whitespace-nowrap",children:"Getting started"})})]}),c.jsx("li",{children:c.jsx("a",{href:"#",class:"text-xs flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"flex-1 ms-3 whitespace-nowrap",children:"Inbox"})})}),c.jsx("li",{children:c.jsx("a",{href:"#",class:"text-xs flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"flex-1 ms-3 whitespace-nowrap",children:"Users"})})}),c.jsx("li",{children:c.jsx("a",{href:"#",class:"text-xs flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"flex-1 ms-3 whitespace-nowrap",children:"Products"})})}),c.jsx("li",{children:c.jsx("a",{href:"#",class:"text-xs flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"flex-1 ms-3 whitespace-nowrap",children:"Sign In"})})}),c.jsx("li",{children:c.jsx("a",{href:"#",class:"text-xs flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"flex-1 ms-3 whitespace-nowrap",children:"Sign Up"})})}),c.jsx("div",{class:"w-full h-0.5 bg-gray-700"})]}),c.jsx("div",{class:"w-full h-0.4 bg-gray-600"}),c.jsx("ul",{class:"space-y-2 font-medium",children:c.jsxs("li",{children:[c.jsx("li",{children:c.jsx("a",{href:"#",class:"text-xs font-bold flex items-center mt-8 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"ms-3",children:"Settings"})})}),c.jsx("a",{href:"#",class:"text-xs flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 group",children:c.jsx("span",{class:"flex-1 ms-3 whitespace-nowrap",children:"Getting started"})})]})}),c.jsxs("div",{id:"dropdown-cta",class:"p-4 mt-4 rounded-lg bg-blue-50 dark:bg-blue-900",role:"alert",children:[c.jsxs("div",{class:"flex items-center mt-auto mb-3",children:[c.jsx("span",{class:"bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900",children:"Beta"}),c.jsxs("button",{type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800","data-dismiss-target":"#dropdown-cta","aria-label":"Close",children:[c.jsx("span",{class:"sr-only",children:"Close"}),c.jsx("svg",{class:"w-2.5 h-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:c.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})]})]}),c.jsx("p",{class:"mb-3 text-sm text-blue-800 dark:text-blue-400",children:"Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile."}),c.jsx("a",{class:"text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300",href:"#",children:"Turn new navigation off"})]})]})}),c.jsx("div",{class:"p-4 sm:ml-64 max-w-[1000px] mx-auto",children:" "})]})),Dg=({onSignInClick:e,onRegisterClick:t})=>{const n=Nr(),r=Zu(),i=document.querySelector("html"),s=localStorage.getItem("hs_theme")==="light"||localStorage.getItem("hs_theme")==="auto"&&!window.matchMedia("(prefers-color-scheme: dark)").matches,o=localStorage.getItem("hs_theme")==="dark"||localStorage.getItem("hs_theme")==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;s&&i.classList.contains("dark")?i.classList.remove("dark"):o&&i.classList.contains("light")?i.classList.remove("light"):o&&!i.classList.contains("dark")?i.classList.add("dark"):s&&!i.classList.contains("light")&&i.classList.add("light");const a=()=>{r("/gettingstarted")};return c.jsx(c.Fragment,{children:!n.pathname.includes("/practice")&&!n.pathname.includes("/gettingstarted")&&c.jsx("header",{class:"flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white  dark:bg-black ",children:c.jsxs("nav",{class:"relative max-w-[75rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{class:"flex justify-between items-center gap-x-1",children:[c.jsxs(si,{class:"flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white",to:"/","aria-label":"Home",children:[c.jsx(xt,{icon:Mg,size:"lg",className:"pr-[7px]"}),"CradeCode"]}),c.jsxs("button",{type:"button",class:"hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",id:"hs-header-base-collapse","aria-expanded":"false","aria-controls":"hs-header-base","aria-label":"Toggle navigation","data-hs-collapse":"#hs-header-base",children:[c.jsxs("svg",{class:"hs-collapse-open:hidden size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("line",{x1:"3",x2:"21",y1:"6",y2:"6"}),c.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),c.jsx("line",{x1:"3",x2:"21",y1:"18",y2:"18"})]}),c.jsxs("svg",{class:"hs-collapse-open:block shrink-0 hidden size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M18 6 6 18"}),c.jsx("path",{d:"m6 6 12 12"})]}),c.jsx("span",{class:"sr-only",children:"Toggle navigation"})]})]}),c.jsx("div",{id:"hs-header-base",class:"hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block ","aria-labelledby":"hs-header-base-collapse",children:c.jsx("div",{class:"overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500",children:c.jsxs("div",{class:"py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1",children:[c.jsx("div",{class:"grow",children:c.jsxs("div",{class:"flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1",children:[c.jsxs(si,{class:"p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",to:"/","aria-current":"page",children:[c.jsxs("svg",{class:"shrink-0 size-4 me-3 md:me-2 block md:hidden",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),c.jsx("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),"Home"]}),c.jsxs("div",{class:"hs-dropdown z-50 shadow-lg [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ",children:[c.jsxs("button",{id:"hs-header-base-mega-menu-small",type:"button",class:"hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700","aria-haspopup":"menu","aria-expanded":"false","aria-label":"Mega Menu",children:[c.jsxs("svg",{class:"shrink-0 size-4 me-3 md:me-2 block md:hidden",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),c.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Languages",c.jsx("svg",{class:"hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:c.jsx("path",{d:"m6 9 6 6 6-6"})})]}),c.jsx("div",{class:"hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-80 hidden z-10 top-full md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:md:bg-neutral-800",role:"menu","aria-orientation":"vertical","aria-labelledby":"hs-header-base-mega-menu-small",children:c.jsxs("div",{class:"py-1 md:px-1 space-y-0.5",children:[c.jsxs("a",{class:"p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",href:"#",children:[c.jsxs("svg",{class:"shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("line",{x1:"22",x2:"2",y1:"12",y2:"12"}),c.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}),c.jsx("line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}),c.jsx("line",{x1:"10",x2:"10.01",y1:"16",y2:"16"})]}),c.jsxs("div",{class:"grow",children:[c.jsx("span",{class:"block font-semibold text-sm text-gray-800 dark:text-neutral-200",children:"Python"}),c.jsx("p",{class:"text-sm text-gray-500 dark:text-neutral-500",children:"How you get the most accurate and up-to-date data"})]})]}),c.jsx("div",{class:"my-2 border-t border-gray-100 dark:border-neutral-800"}),c.jsxs("a",{class:"p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",href:"#",children:[c.jsxs("svg",{class:"shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"9",cy:"7",r:"4"}),c.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),c.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),c.jsxs("div",{class:"grow",children:[c.jsx("span",{class:"block font-semibold text-sm text-gray-800 dark:text-neutral-200",children:"JavaScript"}),c.jsx("p",{class:"text-sm text-gray-500 dark:text-neutral-500",children:"Meet the people building products to help your business grow"})]})]}),c.jsx("div",{class:"my-2 border-t border-gray-100 dark:border-neutral-800"}),c.jsxs("a",{class:"p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",href:"#",children:[c.jsxs("svg",{class:"shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}),c.jsx("path",{d:"M18 14h-8"}),c.jsx("path",{d:"M15 18h-5"}),c.jsx("path",{d:"M10 6h8v4h-8V6Z"})]}),c.jsxs("div",{class:"grow",children:[c.jsx("span",{class:"block font-semibold text-sm text-gray-800 dark:text-neutral-200",children:"C++"}),c.jsx("p",{class:"text-sm text-gray-500 dark:text-neutral-500",children:"The latest news, feature releases, and how to grow with data"})]})]}),c.jsxs("a",{class:"p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",href:"#",children:[c.jsxs("svg",{class:"shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}),c.jsx("path",{d:"M18 14h-8"}),c.jsx("path",{d:"M15 18h-5"}),c.jsx("path",{d:"M10 6h8v4h-8V6Z"})]}),c.jsx("div",{class:"grow",children:c.jsx("span",{class:"block font-semibold text-sm text-gray-800 dark:text-neutral-200",children:"View Full List"})})]})]})})]}),c.jsxs(si,{class:"p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",to:"/practice",children:[c.jsxs("svg",{class:"shrink-0 size-4 me-3 md:me-2 block md:hidden",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}),c.jsx("path",{d:"M18 14h-8"}),c.jsx("path",{d:"M15 18h-5"}),c.jsx("path",{d:"M10 6h8v4h-8V6Z"})]}),"Practice"]})]})}),c.jsx("div",{class:"my-2 md:my-0 md:mx-2",children:c.jsx("div",{class:"w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"})}),c.jsx("button",{type:"button",class:"hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800","data-hs-theme-click-value":"dark",children:c.jsx("span",{class:"group inline-flex shrink-0 justify-center items-center size-9",children:c.jsx("svg",{class:"shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:c.jsx("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"})})})}),c.jsx("button",{type:"button",class:"hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800","data-hs-theme-click-value":"light",children:c.jsx("span",{class:"group inline-flex shrink-0 justify-center items-center size-9",children:c.jsxs("svg",{class:"shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"4"}),c.jsx("path",{d:"M12 2v2"}),c.jsx("path",{d:"M12 20v2"}),c.jsx("path",{d:"m4.93 4.93 1.41 1.41"}),c.jsx("path",{d:"m17.66 17.66 1.41 1.41"}),c.jsx("path",{d:"M2 12h2"}),c.jsx("path",{d:"M20 12h2"}),c.jsx("path",{d:"m6.34 17.66-1.41 1.41"}),c.jsx("path",{d:"m19.07 4.93-1.41 1.41"})]})})}),c.jsxs("div",{class:" flex flex-wrap items-center gap-x-1.5",children:[c.jsx("button",{class:"py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-white",onClick:e,children:"Sign in"}),c.jsx("button",{class:"py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-black text-white dark:bg-white dark:text-black focus:outline-none disabled:opacity-50 disabled:pointer-events-none  ",onClick:a,children:"Get started"})]})]})})})]})})})},TE=()=>c.jsxs("div",{className:"min-h-screen dark:bg-black",children:[c.jsx(Dg,{}),c.jsx("div",{class:"relative overflow-hidden",children:c.jsx("div",{class:"relative z-10",children:c.jsx("div",{class:"max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16",children:c.jsxs("div",{class:"max-w-2xl text-center mx-auto",children:[c.jsx("p",{class:"inline-block text-sm font-medium bg-clip-text text-black dark:text-white text-transparent ",children:"An all-in-one resource for coding"}),c.jsx("div",{class:"mt-5 max-w-2xl",children:c.jsx("h1",{class:"block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200",children:"Learn to Program with Expert Made Tutorials"})}),c.jsx("div",{class:"mt-5 max-w-3xl",children:c.jsx("p",{class:"text-lg text-gray-600 dark:text-neutral-400",children:"Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."})}),c.jsxs("div",{class:"mt-8 gap-3 flex justify-center",children:[c.jsxs("a",{class:"py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white text-black focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none",href:"#",children:["Get started",c.jsx("svg",{class:"shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:c.jsx("path",{d:"m9 18 6-6-6-6"})})]}),c.jsxs("a",{class:"py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",href:"#",children:[c.jsxs("svg",{class:"shrink-0 size-4",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z",fill:"#0ACF83"}),c.jsx("path",{d:"M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z",fill:"#A259FF"}),c.jsx("path",{d:"M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z",fill:"#F24E1E"}),c.jsx("path",{d:"M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z",fill:"#FF7262"}),c.jsx("path",{d:"M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z",fill:"#1ABCFE"})]}),"Preline Figma"]})]})]})})})}),c.jsx("div",{className:"max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto",children:c.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70",children:[c.jsx("div",{className:"h-52 flex flex-col justify-center items-center bg-white rounded-t-xl"}),c.jsxs("div",{className:"p-4 md:p-6",children:[c.jsx("span",{className:"block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500",children:"Duration: 4 Weeks"}),c.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white",children:"Python Course"}),c.jsx("p",{className:"mt-3 text-gray-500 dark:text-neutral-500",children:"Master the fundamentals of Python, one of the most popular programming languages in the world."})]}),c.jsxs("div",{className:"mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700",children:[c.jsx("a",{className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",href:"#",children:"View Description"}),c.jsx("a",{className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",href:"#",children:"Enroll"})]})]}),c.jsxs("div",{className:"group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70",children:[c.jsx("div",{className:"h-52 flex flex-col justify-center items-center bg-white rounded-t-xl"}),c.jsxs("div",{className:"p-4 md:p-6",children:[c.jsx("span",{className:"block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500",children:"Duration: 5 Weeks"}),c.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white",children:"Web Development with JavaScript"}),c.jsx("p",{className:"mt-3 text-gray-500 dark:text-neutral-500",children:"Track tasks and projects, use agile boards, measure progress."})]}),c.jsxs("div",{className:"mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700",children:[c.jsx("a",{className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",href:"#",children:"View sample"}),c.jsx("a",{className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",href:"#",children:"View API"})]})]}),c.jsxs("div",{className:"group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70",children:[c.jsx("div",{className:"h-52 flex flex-col justify-center items-center bg-white rounded-t-xl"}),c.jsxs("div",{className:"p-4 md:p-6",children:[c.jsx("span",{className:"block mb-1 text-xs font-semibold uppercase text-amber-500",children:"Slack API"}),c.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white",children:"Slack"}),c.jsx("p",{className:"mt-3 text-gray-500 dark:text-neutral-500",children:"Email collaboration and email service desk made easy."})]}),c.jsxs("div",{className:"mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700",children:[c.jsx("a",{className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",href:"#",children:"View sample"}),c.jsx("a",{className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",href:"#",children:"View API"})]})]})]})})]}),PE=({isOpen:e,onClose:t})=>{if(!e)return null;const[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),d=Zu(),f=async y=>{if(y.preventDefault(),i!==o){u("Passwords do not match.");return}try{await SE(n,i),d("/")}catch(x){u(x.message)}},m=async()=>{try{await jg(),d("/")}catch(y){u(y.message)}},v=async()=>{try{await Lg(),d("/")}catch(y){u(y.message)}};return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm",children:[" ",c.jsx("div",{className:"min-h-screen",children:c.jsx("div",{className:"max-w-lg px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto",children:c.jsx("div",{className:"mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700",children:c.jsxs("div",{className:"p-4 sm:p-7",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"block text-2xl font-bold text-gray-800 dark:text-white",children:"Sign up"}),c.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-neutral-400",children:["Already have an account?"," ",c.jsx(si,{className:"text-blue-600 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500",to:"/signin",children:"Sign in here"})]})]}),l&&c.jsx("p",{className:"text-red-500 text-center mt-4",children:l}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("button",{onClick:m,type:"button",className:"w-full mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",children:[c.jsxs("svg",{className:"w-4 h-auto",width:"46",height:"47",viewBox:"0 0 46 47",fill:"none",children:[c.jsx("path",{d:"M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z",fill:"#4285F4"}),c.jsx("path",{d:"M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z",fill:"#34A853"}),c.jsx("path",{d:"M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z",fill:"#FBBC05"}),c.jsx("path",{d:"M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z",fill:"#EB4335"})]}),"Sign Up with Google"]}),c.jsxs("button",{onClick:v,type:"button",className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",children:[c.jsx(xt,{icon:p0,className:"w-4 h-auto"}),"Sign Up with GitHub"]}),c.jsx("div",{className:"py-3 flex justify-center items-center text-xs text-gray-400 uppercase text-center",children:"Or"}),c.jsx("form",{onSubmit:f,children:c.jsxs("div",{className:"grid gap-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-sm mb-2 dark:text-white",children:"Email address"}),c.jsx("input",{type:"email",id:"email",name:"email",value:n,onChange:y=>r(y.target.value),className:"py-3 px-4 w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"block text-sm mb-2 dark:text-white",children:"Password"}),c.jsx("input",{type:"password",id:"password",name:"password",value:i,onChange:y=>s(y.target.value),className:"py-3 px-4 w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"confirm-password",className:"block text-sm mb-2 dark:text-white",children:"Confirm Password"}),c.jsx("input",{type:"password",id:"confirm-password",name:"confirm-password",value:o,onChange:y=>a(y.target.value),className:"py-3 px-4 w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",required:!0})]}),c.jsx("button",{type:"submit",className:"w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Sign up"})]})})]})]})})})})]})},NE=({isOpen:e,onClose:t})=>{if(!e)return null;const n=()=>{t(),setIsSignUpOpen(!0)},r=async()=>{Rg();try{const i=await jg();setUser(i.user),navigate("/")}catch(i){console.error("Error during sign-in:",i)}};return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm",children:[" ",c.jsx("div",{className:"min-h-screen",children:c.jsx("div",{className:"max-w-lg px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto",children:c.jsx("div",{className:"mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700",children:c.jsxs("div",{className:"p-4 sm:p-7",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"block text-2xl font-bold text-gray-800 dark:text-white",children:"Sign in"}),c.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-neutral-400",children:["Don't have an account yet?"," ",c.jsx("button",{className:"text-blue-600 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500",onClick:n,children:"Sign up here"})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("button",{onClick:r,type:"button",className:"w-full mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",children:[c.jsxs("svg",{className:"w-4 h-auto",width:"46",height:"47",viewBox:"0 0 46 47",fill:"none",children:[c.jsx("path",{d:"M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z",fill:"#4285F4"}),c.jsx("path",{d:"M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z",fill:"#34A853"}),c.jsx("path",{d:"M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z",fill:"#FBBC05"}),c.jsx("path",{d:"M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z",fill:"#EB4335"})]}),"Sign in with Google"]}),c.jsxs("button",{type:"button",className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",children:[c.jsx(xt,{icon:p0,className:"w-4 h-auto"}),"Sign Up with GitHub"]}),c.jsx("div",{className:"py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600",children:"Or"}),c.jsx("form",{children:c.jsxs("div",{className:"grid gap-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-sm mb-2 dark:text-white",children:"Email address"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"email",id:"email",name:"email",className:"py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 transition-all duration-200",required:!0,"aria-describedby":"email-error"}),c.jsx("div",{className:"hidden absolute inset-y-0 end-0 pointer-events-none pe-3",children:c.jsx("svg",{className:"size-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true",children:c.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})})})]}),c.jsx("p",{className:"hidden text-xs text-red-600 mt-2",id:"email-error",children:"Please include a valid email address so we can get back to you"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("label",{htmlFor:"password",className:"block text-sm mb-2 dark:text-white",children:"Password"}),c.jsx("a",{className:"inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500",href:"../examples/html/recover-account.html",children:"Forgot password?"})]}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"password",id:"password",name:"password",className:"py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 transition-all duration-200",required:!0,"aria-describedby":"password-error"}),c.jsx("div",{className:"hidden absolute inset-y-0 end-0 pointer-events-none pe-3",children:c.jsx("svg",{className:"size-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true",children:c.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})})})]}),c.jsx("p",{className:"hidden text-xs text-red-600 mt-2",id:"password-error",children:"8+ characters required"})]}),c.jsxs("div",{className:"flex items-center",children:[c.jsx("div",{className:"flex",children:c.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"})}),c.jsx("div",{className:"ms-3",children:c.jsx("label",{htmlFor:"remember-me",className:"text-sm dark:text-white",children:"Remember me"})})]}),c.jsx("button",{type:"submit",className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition-all duration-200",children:"Sign in"})]})})]})]})})})})]})},AE=()=>c.jsx("footer",{class:"mx-auto dark:bg-black dark:text-white",children:c.jsxs("div",{class:" max-w-[70rem] container mx-auto py-4 flex justify-between items-center",children:[c.jsxs("div",{class:"flex space-x-4",children:[c.jsx("a",{href:"#",class:"text-sm hover:underline",children:"Privacy"}),c.jsx("a",{href:"#",class:"text-sm hover:underline",children:"Terms"})]}),c.jsx("div",{class:"text-sm",children:"© 2024 CradleCode"})]})});function OE(){const[e,t]=S.useState(!1),[n,r]=S.useState(!1),i=()=>t(!0),s=()=>t(!1),o=()=>r(!0),a=()=>r(!1),l=Nr();return S.useEffect(()=>{l.pathname!=="/gettingstarted"&&r(!1)},[l]),c.jsxs("div",{className:"dark:bg-black",children:[c.jsx(Dg,{onSignInClick:i,onRegisterClick:o}),c.jsxs(ew,{children:[c.jsx(Kr,{path:"/",element:c.jsx(CE,{})}),c.jsx(Kr,{path:"/courses",element:c.jsx(TE,{})}),c.jsx(Kr,{path:"/practice",element:c.jsx(sh,{})}),c.jsx(Kr,{path:"/gettingstarted",element:c.jsx(sh,{onRegisterClick:o})})]}),c.jsx(NE,{isOpen:e,onClose:s}),c.jsx(PE,{isOpen:n,onClose:a}),c.jsx(AE,{})]})}function RE(){return c.jsx(aw,{children:c.jsx(OE,{})})}wm(document.getElementById("root")).render(c.jsx(S.StrictMode,{children:c.jsx(RE,{})}));
