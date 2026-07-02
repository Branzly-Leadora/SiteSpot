var yE=Object.defineProperty;var SE=(t,e,n)=>e in t?yE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ce=(t,e,n)=>SE(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var y_={exports:{}},_u={},S_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),ME=Symbol.for("react.portal"),EE=Symbol.for("react.fragment"),TE=Symbol.for("react.strict_mode"),wE=Symbol.for("react.profiler"),AE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),bE=Symbol.for("react.forward_ref"),RE=Symbol.for("react.suspense"),PE=Symbol.for("react.memo"),NE=Symbol.for("react.lazy"),Dg=Symbol.iterator;function LE(t){return t===null||typeof t!="object"?null:(t=Dg&&t[Dg]||t["@@iterator"],typeof t=="function"?t:null)}var M_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E_=Object.assign,T_={};function Lo(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||M_}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w_(){}w_.prototype=Lo.prototype;function Lp(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||M_}var Dp=Lp.prototype=new w_;Dp.constructor=Lp;E_(Dp,Lo.prototype);Dp.isPureReactComponent=!0;var Ig=Array.isArray,A_=Object.prototype.hasOwnProperty,Ip={current:null},C_={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A_.call(e,i)&&!C_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ka,type:t,key:s,ref:o,props:r,_owner:Ip.current}}function DE(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function IE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ug=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IE(""+t.key):e.toString(36)}function sc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case ME:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ku(o,0):i,Ig(r)?(n="",t!=null&&(n=t.replace(Ug,"$&/")+"/"),sc(r,e,n,"",function(c){return c})):r!=null&&(Up(r)&&(r=DE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ug,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ku(s,a);o+=sc(s,e,n,l,r)}else if(l=LE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ku(s,a++),o+=sc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hl(t,e,n){if(t==null)return t;var i=[],r=0;return sc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function UE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},oc={transition:null},FE={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:oc,ReactCurrentOwner:Ip};function R_(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:hl,forEach:function(t,e,n){hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hl(t,function(){e++}),e},toArray:function(t){return hl(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Lo;We.Fragment=EE;We.Profiler=wE;We.PureComponent=Lp;We.StrictMode=TE;We.Suspense=RE;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FE;We.act=R_;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=E_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ip.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)A_.call(e,l)&&!C_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:CE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AE,_context:t},t.Consumer=t};We.createElement=b_;We.createFactory=function(t){var e=b_.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:bE,render:t}};We.isValidElement=Up;We.lazy=function(t){return{$$typeof:NE,_payload:{_status:-1,_result:t},_init:UE}};We.memo=function(t,e){return{$$typeof:PE,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=oc.transition;oc.transition={};try{t()}finally{oc.transition=e}};We.unstable_act=R_;We.useCallback=function(t,e){return pn.current.useCallback(t,e)};We.useContext=function(t){return pn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};We.useEffect=function(t,e){return pn.current.useEffect(t,e)};We.useId=function(){return pn.current.useId()};We.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return pn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};We.useRef=function(t){return pn.current.useRef(t)};We.useState=function(t){return pn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return pn.current.useTransition()};We.version="18.3.1";S_.exports=We;var Z=S_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=Z,OE=Symbol.for("react.element"),BE=Symbol.for("react.fragment"),zE=Object.prototype.hasOwnProperty,VE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HE={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zE.call(e,i)&&!HE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:OE,type:t,key:s,ref:o,props:r,_owner:VE.current}}_u.Fragment=BE;_u.jsx=P_;_u.jsxs=P_;y_.exports=_u;var v=y_.exports,N_={exports:{}},Un={},L_={exports:{}},D_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,z){var X=L.length;L.push(z);e:for(;0<X;){var K=X-1>>>1,te=L[K];if(0<r(te,z))L[K]=z,L[X]=te,X=K;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var z=L[0],X=L.pop();if(X!==z){L[0]=X;e:for(var K=0,te=L.length,Me=te>>>1;K<Me;){var Be=2*(K+1)-1,Oe=L[Be],Q=Be+1,ae=L[Q];if(0>r(Oe,X))Q<te&&0>r(ae,Oe)?(L[K]=ae,L[Q]=X,K=Q):(L[K]=Oe,L[Be]=X,K=Be);else if(Q<te&&0>r(ae,X))L[K]=ae,L[Q]=X,K=Q;else break e}}return z}function r(L,z){var X=L.sortIndex-z.sortIndex;return X!==0?X:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,m=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(L){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=L)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function y(L){if(M=!1,S(L),!m)if(n(l)!==null)m=!0,O(A);else{var z=n(c);z!==null&&H(y,z.startTime-L)}}function A(L,z){m=!1,M&&(M=!1,h(_),_=-1),p=!0;var X=u;try{for(S(z),d=n(l);d!==null&&(!(d.expirationTime>z)||L&&!I());){var K=d.callback;if(typeof K=="function"){d.callback=null,u=d.priorityLevel;var te=K(d.expirationTime<=z);z=t.unstable_now(),typeof te=="function"?d.callback=te:d===n(l)&&i(l),S(z)}else i(l);d=n(l)}if(d!==null)var Me=!0;else{var Be=n(c);Be!==null&&H(y,Be.startTime-z),Me=!1}return Me}finally{d=null,u=X,p=!1}}var w=!1,R=null,_=-1,b=5,N=-1;function I(){return!(t.unstable_now()-N<b)}function C(){if(R!==null){var L=t.unstable_now();N=L;var z=!0;try{z=R(!0,L)}finally{z?D():(w=!1,R=null)}}else w=!1}var D;if(typeof x=="function")D=function(){x(C)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,U=k.port2;k.port1.onmessage=C,D=function(){U.postMessage(null)}}else D=function(){g(C,0)};function O(L){R=L,w||(w=!0,D())}function H(L,z){_=g(function(){L(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,O(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var X=u;u=z;try{return L()}finally{u=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=u;u=L;try{return z()}finally{u=X}},t.unstable_scheduleCallback=function(L,z,X){var K=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?K+X:K):X=K,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=X+te,L={id:f++,callback:z,priorityLevel:L,startTime:X,expirationTime:te,sortIndex:-1},X>K?(L.sortIndex=X,e(c,L),n(l)===null&&L===n(c)&&(M?(h(_),_=-1):M=!0,H(y,X-K))):(L.sortIndex=te,e(l,L),m||p||(m=!0,O(A))),L},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(L){var z=u;return function(){var X=u;u=z;try{return L.apply(this,arguments)}finally{u=X}}}})(D_);L_.exports=D_;var GE=L_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=Z,In=GE;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I_=new Set,Ca={};function Es(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(Ca[t]=e,t=0;t<e.length;t++)I_.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,jE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fg={},kg={};function XE(t){return Ed.call(kg,t)?!0:Ed.call(Fg,t)?!1:jE.test(t)?kg[t]=!0:(Fg[t]=!0,!1)}function $E(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qE(t,e,n,i){if(e===null||typeof e>"u"||$E(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fp,kp);Qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fp,kp);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fp,kp);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Op(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qE(e,n,r,i)&&(n=null),i||r===null?XE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),F_=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Ad=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),Og=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Zu;function ia(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var Qu=!1;function Ju(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function YE(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function Cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case Xs:return"Portal";case Td:return"Profiler";case Bp:return"StrictMode";case wd:return"Suspense";case Ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F_:return(t.displayName||"Context")+".Consumer";case U_:return(t._context.displayName||"Context")+".Provider";case zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vp:return e=t.displayName||null,e!==null?e:Cd(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Cd(t(e))}catch{}}return null}function KE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cd(e);case 8:return e===Bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZE(t){var e=O_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=ZE(t))}function B_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=O_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bd(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z_(t,e){e=e.checked,e!=null&&Op(t,"checked",e,!1)}function Rd(t,e){z_(t,e);var n=Ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pd(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pd(t,e,n){(e!=="number"||Nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ra(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function V_(t,e){var n=Ur(e.value),i=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,G_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QE=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){QE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function W_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function j_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=W_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var JE=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dd(t,e){if(e){if(JE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function Hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fd=null,co=null,uo=null;function Gg(t){if(t=Ja(t)){if(typeof Fd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Tu(e),Fd(t.stateNode,t.type,e))}}function X_(t){co?uo?uo.push(t):uo=[t]:co=t}function $_(){if(co){var t=co,e=uo;if(uo=co=null,Gg(t),e)for(t=0;t<e.length;t++)Gg(e[t])}}function q_(t,e){return t(e)}function Y_(){}var ef=!1;function K_(t,e,n){if(ef)return t(e,n);ef=!0;try{return q_(t,e,n)}finally{ef=!1,(co!==null||uo!==null)&&(Y_(),$_())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Tu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var kd=!1;if(Zi)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){kd=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{kd=!1}function eT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var da=!1,Lc=null,Dc=!1,Od=null,tT={onError:function(t){da=!0,Lc=t}};function nT(t,e,n,i,r,s,o,a,l){da=!1,Lc=null,eT.apply(tT,arguments)}function iT(t,e,n,i,r,s,o,a,l){if(nT.apply(this,arguments),da){if(da){var c=Lc;da=!1,Lc=null}else throw Error(oe(198));Dc||(Dc=!0,Od=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wg(t){if(Ts(t)!==t)throw Error(oe(188))}function rT(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wg(r),t;if(s===i)return Wg(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Q_(t){return t=rT(t),t!==null?J_(t):null}function J_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J_(t);if(e!==null)return e;t=t.sibling}return null}var ey=In.unstable_scheduleCallback,jg=In.unstable_cancelCallback,sT=In.unstable_shouldYield,oT=In.unstable_requestPaint,Rt=In.unstable_now,aT=In.unstable_getCurrentPriorityLevel,Gp=In.unstable_ImmediatePriority,ty=In.unstable_UserBlockingPriority,Ic=In.unstable_NormalPriority,lT=In.unstable_LowPriority,ny=In.unstable_IdlePriority,yu=null,Ci=null;function cT(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(yu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:dT,uT=Math.log,fT=Math.LN2;function dT(t){return t>>>=0,t===0?32:31-(uT(t)/fT|0)|0}var vl=64,xl=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=sa(a):(s&=o,s!==0&&(i=sa(s)))}else o=n&~r,o!==0?i=sa(o):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function hT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iy(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function mT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function ry(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sy,jp,oy,ay,ly,zd=!1,_l=[],Cr=null,br=null,Rr=null,Pa=new Map,Na=new Map,yr=[],gT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xg(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Ho(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ja(e),e!==null&&jp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vT(t,e,n,i,r){switch(e){case"focusin":return Cr=Ho(Cr,t,e,n,i,r),!0;case"dragenter":return br=Ho(br,t,e,n,i,r),!0;case"mouseover":return Rr=Ho(Rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,Ho(Pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,Ho(Na.get(s)||null,t,e,n,i,r)),!0}return!1}function cy(t){var e=rs(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=Z_(n),e!==null){t.blockedOn=e,ly(t.priority,function(){oy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ud=i,n.target.dispatchEvent(i),Ud=null}else return e=Ja(n),e!==null&&jp(e),t.blockedOn=n,!1;e.shift()}return!0}function $g(t,e,n){ac(t)&&n.delete(e)}function xT(){zd=!1,Cr!==null&&ac(Cr)&&(Cr=null),br!==null&&ac(br)&&(br=null),Rr!==null&&ac(Rr)&&(Rr=null),Pa.forEach($g),Na.forEach($g)}function Go(t,e){t.blockedOn===e&&(t.blockedOn=null,zd||(zd=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,xT)))}function La(t){function e(r){return Go(r,t)}if(0<_l.length){Go(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cr!==null&&Go(Cr,t),br!==null&&Go(br,t),Rr!==null&&Go(Rr,t),Pa.forEach(e),Na.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)cy(n),n.blockedOn===null&&yr.shift()}var fo=ir.ReactCurrentBatchConfig,Fc=!0;function _T(t,e,n,i){var r=rt,s=fo.transition;fo.transition=null;try{rt=1,Xp(t,e,n,i)}finally{rt=r,fo.transition=s}}function yT(t,e,n,i){var r=rt,s=fo.transition;fo.transition=null;try{rt=4,Xp(t,e,n,i)}finally{rt=r,fo.transition=s}}function Xp(t,e,n,i){if(Fc){var r=Vd(t,e,n,i);if(r===null)df(t,e,i,kc,n),Xg(t,i);else if(vT(r,t,e,n,i))i.stopPropagation();else if(Xg(t,i),e&4&&-1<gT.indexOf(t)){for(;r!==null;){var s=Ja(r);if(s!==null&&sy(s),s=Vd(t,e,n,i),s===null&&df(t,e,i,kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else df(t,e,i,null,n)}}var kc=null;function Vd(t,e,n,i){if(kc=null,t=Hp(i),t=rs(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aT()){case Gp:return 1;case ty:return 4;case Ic:case lT:return 16;case ny:return 536870912;default:return 16}default:return 16}}var Er=null,$p=null,lc=null;function fy(){if(lc)return lc;var t,e=$p,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return lc=r.slice(t,1<i?1-i:void 0)}function cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function qg(){return!1}function Fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yl:qg,this.isPropagationStopped=qg,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qp=Fn(Do),Qa=yt({},Do,{view:0,detail:0}),ST=Fn(Qa),nf,rf,Wo,Su=yt({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wo&&(Wo&&t.type==="mousemove"?(nf=t.screenX-Wo.screenX,rf=t.screenY-Wo.screenY):rf=nf=0,Wo=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),Yg=Fn(Su),MT=yt({},Su,{dataTransfer:0}),ET=Fn(MT),TT=yt({},Qa,{relatedTarget:0}),sf=Fn(TT),wT=yt({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),AT=Fn(wT),CT=yt({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bT=Fn(CT),RT=yt({},Do,{data:0}),Kg=Fn(RT),PT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LT[t])?!!e[t]:!1}function Yp(){return DT}var IT=yt({},Qa,{key:function(t){if(t.key){var e=PT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(t){return t.type==="keypress"?cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UT=Fn(IT),FT=yt({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=Fn(FT),kT=yt({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),OT=Fn(kT),BT=yt({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),zT=Fn(BT),VT=yt({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HT=Fn(VT),GT=[9,13,27,32],Kp=Zi&&"CompositionEvent"in window,ha=null;Zi&&"documentMode"in document&&(ha=document.documentMode);var WT=Zi&&"TextEvent"in window&&!ha,dy=Zi&&(!Kp||ha&&8<ha&&11>=ha),Qg=" ",Jg=!1;function hy(t,e){switch(t){case"keyup":return GT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function py(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function jT(t,e){switch(t){case"compositionend":return py(e);case"keypress":return e.which!==32?null:(Jg=!0,Qg);case"textInput":return t=e.data,t===Qg&&Jg?null:t;default:return null}}function XT(t,e){if(qs)return t==="compositionend"||!Kp&&hy(t,e)?(t=fy(),lc=$p=Er=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dy&&e.locale!=="ko"?null:e.data;default:return null}}var $T={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$T[t.type]:e==="textarea"}function my(t,e,n,i){X_(i),e=Oc(e,"onChange"),0<e.length&&(n=new qp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Da=null;function qT(t){Ay(t,0)}function Mu(t){var e=Zs(t);if(B_(e))return t}function YT(t,e){if(t==="change")return e}var gy=!1;if(Zi){var of;if(Zi){var af="oninput"in document;if(!af){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),af=typeof t0.oninput=="function"}of=af}else of=!1;gy=of&&(!document.documentMode||9<document.documentMode)}function n0(){pa&&(pa.detachEvent("onpropertychange",vy),Da=pa=null)}function vy(t){if(t.propertyName==="value"&&Mu(Da)){var e=[];my(e,Da,t,Hp(t)),K_(qT,e)}}function KT(t,e,n){t==="focusin"?(n0(),pa=e,Da=n,pa.attachEvent("onpropertychange",vy)):t==="focusout"&&n0()}function ZT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Da)}function QT(t,e){if(t==="click")return Mu(e)}function JT(t,e){if(t==="input"||t==="change")return Mu(e)}function ew(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:ew;function Ia(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ed.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function i0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function r0(t,e){var n=i0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=i0(n)}}function xy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _y(){for(var t=window,e=Nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nc(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tw(t){var e=_y(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xy(n.ownerDocument.documentElement,n)){if(i!==null&&Zp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=r0(n,s);var o=r0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nw=Zi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Hd=null,ma=null,Gd=!1;function s0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gd||Ys==null||Ys!==Nc(i)||(i=Ys,"selectionStart"in i&&Zp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ia(ma,i)||(ma=i,i=Oc(Hd,"onSelect"),0<i.length&&(e=new qp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},lf={},yy={};Zi&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Eu(t){if(lf[t])return lf[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yy)return lf[t]=e[n];return t}var Sy=Eu("animationend"),My=Eu("animationiteration"),Ey=Eu("animationstart"),Ty=Eu("transitionend"),wy=new Map,o0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){wy.set(t,e),Es(e,[t])}for(var cf=0;cf<o0.length;cf++){var uf=o0[cf],iw=uf.toLowerCase(),rw=uf[0].toUpperCase()+uf.slice(1);zr(iw,"on"+rw)}zr(Sy,"onAnimationEnd");zr(My,"onAnimationIteration");zr(Ey,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Ty,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sw=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function a0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,iT(i,e,void 0,t),t.currentTarget=null}function Ay(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;a0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;a0(r,a,c),s=l}}}if(Dc)throw t=Od,Dc=!1,Od=null,t}function pt(t,e){var n=e[qd];n===void 0&&(n=e[qd]=new Set);var i=t+"__bubble";n.has(i)||(Cy(e,t,2,!1),n.add(i))}function ff(t,e,n){var i=0;e&&(i|=4),Cy(n,t,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[Ml]){t[Ml]=!0,I_.forEach(function(n){n!=="selectionchange"&&(sw.has(n)||ff(n,!1,t),ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,ff("selectionchange",!1,e))}}function Cy(t,e,n,i){switch(uy(e)){case 1:var r=_T;break;case 4:r=yT;break;default:r=Xp}n=r.bind(null,e,n,t),r=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function df(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}K_(function(){var c=s,f=Hp(n),d=[];e:{var u=wy.get(t);if(u!==void 0){var p=qp,m=t;switch(t){case"keypress":if(cc(n)===0)break e;case"keydown":case"keyup":p=UT;break;case"focusin":m="focus",p=sf;break;case"focusout":m="blur",p=sf;break;case"beforeblur":case"afterblur":p=sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ET;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=OT;break;case Sy:case My:case Ey:p=AT;break;case Ty:p=zT;break;case"scroll":p=ST;break;case"wheel":p=HT;break;case"copy":case"cut":case"paste":p=bT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zg}var M=(e&4)!==0,g=!M&&t==="scroll",h=M?u!==null?u+"Capture":null:u;M=[];for(var x=c,S;x!==null;){S=x;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,h!==null&&(y=Ra(x,h),y!=null&&M.push(Fa(x,y,S)))),g)break;x=x.return}0<M.length&&(u=new p(u,m,null,n,f),d.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Ud&&(m=n.relatedTarget||n.fromElement)&&(rs(m)||m[Qi]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?rs(m):null,m!==null&&(g=Ts(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(M=Yg,y="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=Zg,y="onPointerLeave",h="onPointerEnter",x="pointer"),g=p==null?u:Zs(p),S=m==null?u:Zs(m),u=new M(y,x+"leave",p,n,f),u.target=g,u.relatedTarget=S,y=null,rs(f)===c&&(M=new M(h,x+"enter",m,n,f),M.target=S,M.relatedTarget=g,y=M),g=y,p&&m)t:{for(M=p,h=m,x=0,S=M;S;S=bs(S))x++;for(S=0,y=h;y;y=bs(y))S++;for(;0<x-S;)M=bs(M),x--;for(;0<S-x;)h=bs(h),S--;for(;x--;){if(M===h||h!==null&&M===h.alternate)break t;M=bs(M),h=bs(h)}M=null}else M=null;p!==null&&l0(d,u,p,M,!1),m!==null&&g!==null&&l0(d,g,m,M,!0)}}e:{if(u=c?Zs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var A=YT;else if(e0(u))if(gy)A=JT;else{A=ZT;var w=KT}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(A=QT);if(A&&(A=A(t,c))){my(d,A,n,f);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Pd(u,"number",u.value)}switch(w=c?Zs(c):window,t){case"focusin":(e0(w)||w.contentEditable==="true")&&(Ys=w,Hd=c,ma=null);break;case"focusout":ma=Hd=Ys=null;break;case"mousedown":Gd=!0;break;case"contextmenu":case"mouseup":case"dragend":Gd=!1,s0(d,n,f);break;case"selectionchange":if(nw)break;case"keydown":case"keyup":s0(d,n,f)}var R;if(Kp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else qs?hy(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(dy&&n.locale!=="ko"&&(qs||_!=="onCompositionStart"?_==="onCompositionEnd"&&qs&&(R=fy()):(Er=f,$p="value"in Er?Er.value:Er.textContent,qs=!0)),w=Oc(c,_),0<w.length&&(_=new Kg(_,t,null,n,f),d.push({event:_,listeners:w}),R?_.data=R:(R=py(n),R!==null&&(_.data=R)))),(R=WT?jT(t,n):XT(t,n))&&(c=Oc(c,"onBeforeInput"),0<c.length&&(f=new Kg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=R))}Ay(d,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ra(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=Ra(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function l0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ra(n,s),l!=null&&o.unshift(Fa(n,l,a))):r||(l=Ra(n,s),l!=null&&o.push(Fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ow=/\r\n?/g,aw=/\u0000|\uFFFD/g;function c0(t){return(typeof t=="string"?t:""+t).replace(ow,`
`).replace(aw,"")}function El(t,e,n){if(e=c0(e),c0(t)!==e&&n)throw Error(oe(425))}function Bc(){}var Wd=null,jd=null;function Xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,lw=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(uw)}:$d;function uw(t){setTimeout(function(){throw t})}function hf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function f0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Io,ka="__reactProps$"+Io,Qi="__reactContainer$"+Io,qd="__reactEvents$"+Io,fw="__reactListeners$"+Io,dw="__reactHandles$"+Io;function rs(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=f0(t);t!==null;){if(n=t[Ti])return n;t=f0(t)}return e}t=n,n=t.parentNode}return null}function Ja(t){return t=t[Ti]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Tu(t){return t[ka]||null}var Yd=[],Qs=-1;function Vr(t){return{current:t}}function mt(t){0>Qs||(t.current=Yd[Qs],Yd[Qs]=null,Qs--)}function ht(t,e){Qs++,Yd[Qs]=t.current,t.current=e}var Fr={},an=Vr(Fr),yn=Vr(!1),ms=Fr;function _o(t,e){var n=t.type.contextTypes;if(!n)return Fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function zc(){mt(yn),mt(an)}function d0(t,e,n){if(an.current!==Fr)throw Error(oe(168));ht(an,e),ht(yn,n)}function by(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,KE(t)||"Unknown",r));return yt({},n,i)}function Vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,ms=an.current,ht(an,t),ht(yn,yn.current),!0}function h0(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=by(t,e,ms),i.__reactInternalMemoizedMergedChildContext=t,mt(yn),mt(an),ht(an,t)):mt(yn),ht(yn,n)}var Hi=null,wu=!1,pf=!1;function Ry(t){Hi===null?Hi=[t]:Hi.push(t)}function hw(t){wu=!0,Ry(t)}function Hr(){if(!pf&&Hi!==null){pf=!0;var t=0,e=rt;try{var n=Hi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,wu=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),ey(Gp,Hr),r}finally{rt=e,pf=!1}}return null}var Js=[],eo=0,Hc=null,Gc=0,zn=[],Vn=0,gs=null,Wi=1,ji="";function Qr(t,e){Js[eo++]=Gc,Js[eo++]=Hc,Hc=t,Gc=e}function Py(t,e,n){zn[Vn++]=Wi,zn[Vn++]=ji,zn[Vn++]=gs,gs=t;var i=Wi;t=ji;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wi=1<<32-li(e)+r|n<<r|i,ji=s+t}else Wi=1<<s|n<<r|i,ji=t}function Qp(t){t.return!==null&&(Qr(t,1),Py(t,1,0))}function Jp(t){for(;t===Hc;)Hc=Js[--eo],Js[eo]=null,Gc=Js[--eo],Js[eo]=null;for(;t===gs;)gs=zn[--Vn],zn[Vn]=null,ji=zn[--Vn],zn[Vn]=null,Wi=zn[--Vn],zn[Vn]=null}var Nn=null,Pn=null,gt=!1,ii=null;function Ny(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function p0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Pn=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Pn=null,!0):!1;default:return!1}}function Kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zd(t){if(gt){var e=Pn;if(e){var n=e;if(!p0(t,e)){if(Kd(t))throw Error(oe(418));e=Pr(n.nextSibling);var i=Nn;e&&p0(t,e)?Ny(i,n):(t.flags=t.flags&-4097|2,gt=!1,Nn=t)}}else{if(Kd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,gt=!1,Nn=t}}}function m0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Tl(t){if(t!==Nn)return!1;if(!gt)return m0(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xd(t.type,t.memoizedProps)),e&&(e=Pn)){if(Kd(t))throw Ly(),Error(oe(418));for(;e;)Ny(t,e),e=Pr(e.nextSibling)}if(m0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Nn?Pr(t.stateNode.nextSibling):null;return!0}function Ly(){for(var t=Pn;t;)t=Pr(t.nextSibling)}function yo(){Pn=Nn=null,gt=!1}function em(t){ii===null?ii=[t]:ii.push(t)}var pw=ir.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function g0(t){var e=t._init;return e(t._payload)}function Dy(t){function e(h,x){if(t){var S=h.deletions;S===null?(h.deletions=[x],h.flags|=16):S.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=Ir(h,x),h.index=0,h.sibling=null,h}function s(h,x,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<x?(h.flags|=2,x):S):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,S,y){return x===null||x.tag!==6?(x=Sf(S,h.mode,y),x.return=h,x):(x=r(x,S),x.return=h,x)}function l(h,x,S,y){var A=S.type;return A===$s?f(h,x,S.props.children,y,S.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xr&&g0(A)===x.type)?(y=r(x,S.props),y.ref=jo(h,x,S),y.return=h,y):(y=gc(S.type,S.key,S.props,null,h.mode,y),y.ref=jo(h,x,S),y.return=h,y)}function c(h,x,S,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Mf(S,h.mode,y),x.return=h,x):(x=r(x,S.children||[]),x.return=h,x)}function f(h,x,S,y,A){return x===null||x.tag!==7?(x=ds(S,h.mode,y,A),x.return=h,x):(x=r(x,S),x.return=h,x)}function d(h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Sf(""+x,h.mode,S),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:return S=gc(x.type,x.key,x.props,null,h.mode,S),S.ref=jo(h,null,x),S.return=h,S;case Xs:return x=Mf(x,h.mode,S),x.return=h,x;case xr:var y=x._init;return d(h,y(x._payload),S)}if(ra(x)||zo(x))return x=ds(x,h.mode,S,null),x.return=h,x;wl(h,x)}return null}function u(h,x,S,y){var A=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return A!==null?null:a(h,x,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pl:return S.key===A?l(h,x,S,y):null;case Xs:return S.key===A?c(h,x,S,y):null;case xr:return A=S._init,u(h,x,A(S._payload),y)}if(ra(S)||zo(S))return A!==null?null:f(h,x,S,y,null);wl(h,S)}return null}function p(h,x,S,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(S)||null,a(x,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return h=h.get(y.key===null?S:y.key)||null,l(x,h,y,A);case Xs:return h=h.get(y.key===null?S:y.key)||null,c(x,h,y,A);case xr:var w=y._init;return p(h,x,S,w(y._payload),A)}if(ra(y)||zo(y))return h=h.get(S)||null,f(x,h,y,A,null);wl(x,y)}return null}function m(h,x,S,y){for(var A=null,w=null,R=x,_=x=0,b=null;R!==null&&_<S.length;_++){R.index>_?(b=R,R=null):b=R.sibling;var N=u(h,R,S[_],y);if(N===null){R===null&&(R=b);break}t&&R&&N.alternate===null&&e(h,R),x=s(N,x,_),w===null?A=N:w.sibling=N,w=N,R=b}if(_===S.length)return n(h,R),gt&&Qr(h,_),A;if(R===null){for(;_<S.length;_++)R=d(h,S[_],y),R!==null&&(x=s(R,x,_),w===null?A=R:w.sibling=R,w=R);return gt&&Qr(h,_),A}for(R=i(h,R);_<S.length;_++)b=p(R,h,_,S[_],y),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?_:b.key),x=s(b,x,_),w===null?A=b:w.sibling=b,w=b);return t&&R.forEach(function(I){return e(h,I)}),gt&&Qr(h,_),A}function M(h,x,S,y){var A=zo(S);if(typeof A!="function")throw Error(oe(150));if(S=A.call(S),S==null)throw Error(oe(151));for(var w=A=null,R=x,_=x=0,b=null,N=S.next();R!==null&&!N.done;_++,N=S.next()){R.index>_?(b=R,R=null):b=R.sibling;var I=u(h,R,N.value,y);if(I===null){R===null&&(R=b);break}t&&R&&I.alternate===null&&e(h,R),x=s(I,x,_),w===null?A=I:w.sibling=I,w=I,R=b}if(N.done)return n(h,R),gt&&Qr(h,_),A;if(R===null){for(;!N.done;_++,N=S.next())N=d(h,N.value,y),N!==null&&(x=s(N,x,_),w===null?A=N:w.sibling=N,w=N);return gt&&Qr(h,_),A}for(R=i(h,R);!N.done;_++,N=S.next())N=p(R,h,_,N.value,y),N!==null&&(t&&N.alternate!==null&&R.delete(N.key===null?_:N.key),x=s(N,x,_),w===null?A=N:w.sibling=N,w=N);return t&&R.forEach(function(C){return e(h,C)}),gt&&Qr(h,_),A}function g(h,x,S,y){if(typeof S=="object"&&S!==null&&S.type===$s&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case pl:e:{for(var A=S.key,w=x;w!==null;){if(w.key===A){if(A=S.type,A===$s){if(w.tag===7){n(h,w.sibling),x=r(w,S.props.children),x.return=h,h=x;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xr&&g0(A)===w.type){n(h,w.sibling),x=r(w,S.props),x.ref=jo(h,w,S),x.return=h,h=x;break e}n(h,w);break}else e(h,w);w=w.sibling}S.type===$s?(x=ds(S.props.children,h.mode,y,S.key),x.return=h,h=x):(y=gc(S.type,S.key,S.props,null,h.mode,y),y.ref=jo(h,x,S),y.return=h,h=y)}return o(h);case Xs:e:{for(w=S.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(h,x.sibling),x=r(x,S.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=Mf(S,h.mode,y),x.return=h,h=x}return o(h);case xr:return w=S._init,g(h,x,w(S._payload),y)}if(ra(S))return m(h,x,S,y);if(zo(S))return M(h,x,S,y);wl(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,S),x.return=h,h=x):(n(h,x),x=Sf(S,h.mode,y),x.return=h,h=x),o(h)):n(h,x)}return g}var So=Dy(!0),Iy=Dy(!1),Wc=Vr(null),jc=null,to=null,tm=null;function nm(){tm=to=jc=null}function im(t){var e=Wc.current;mt(Wc),t._currentValue=e}function Qd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){jc=t,tm=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(tm!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(jc===null)throw Error(oe(308));to=t,jc.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var ss=null;function rm(t){ss===null?ss=[t]:ss.push(t)}function Uy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,rm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wp(t,n)}}function v0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,M=a;switch(u=e,p=n,M.tag){case 1:if(m=M.payload,typeof m=="function"){d=m.call(p,d,u);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=M.payload,u=typeof m=="function"?m.call(p,d,u):m,u==null)break e;d=yt({},d,u);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=d}}function x0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var el={},bi=Vr(el),Oa=Vr(el),Ba=Vr(el);function os(t){if(t===el)throw Error(oe(174));return t}function om(t,e){switch(ht(Ba,e),ht(Oa,t),ht(bi,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ld(e,t)}mt(bi),ht(bi,e)}function Mo(){mt(bi),mt(Oa),mt(Ba)}function ky(t){os(Ba.current);var e=os(bi.current),n=Ld(e,t.type);e!==n&&(ht(Oa,t),ht(bi,n))}function am(t){Oa.current===t&&(mt(bi),mt(Oa))}var xt=Vr(0);function $c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mf=[];function lm(){for(var t=0;t<mf.length;t++)mf[t]._workInProgressVersionPrimary=null;mf.length=0}var fc=ir.ReactCurrentDispatcher,gf=ir.ReactCurrentBatchConfig,vs=0,_t=null,Ot=null,jt=null,qc=!1,ga=!1,za=0,mw=0;function en(){throw Error(oe(321))}function cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function um(t,e,n,i,r,s){if(vs=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?_w:yw,t=n(i,r),ga){s=0;do{if(ga=!1,za=0,25<=s)throw Error(oe(301));s+=1,jt=Ot=null,e.updateQueue=null,fc.current=Sw,t=n(i,r)}while(ga)}if(fc.current=Yc,e=Ot!==null&&Ot.next!==null,vs=0,jt=Ot=_t=null,qc=!1,e)throw Error(oe(300));return t}function fm(){var t=za!==0;return za=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?_t.memoizedState=jt=t:jt=jt.next=t,jt}function $n(){if(Ot===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=jt===null?_t.memoizedState:jt.next;if(e!==null)jt=e,Ot=t;else{if(t===null)throw Error(oe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},jt===null?_t.memoizedState=jt=t:jt=jt.next=t}return jt}function Va(t,e){return typeof e=="function"?e(t):e}function vf(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((vs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=f,xs|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,xs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xf(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Oy(){}function By(t,e){var n=_t,i=$n(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,dm(Hy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,Vy.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(oe(349));vs&30||zy(n,e,r)}return r}function zy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vy(t,e,n,i){e.value=n,e.getSnapshot=i,Gy(e)&&Wy(t)}function Hy(t,e,n){return n(function(){Gy(e)&&Wy(t)})}function Gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function Wy(t){var e=Ji(t,1);e!==null&&ci(e,t,1,-1)}function _0(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=xw.bind(null,_t,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jy(){return $n().memoizedState}function dc(t,e,n,i){var r=yi();_t.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function Au(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&cm(i,o.deps)){r.memoizedState=Ha(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function y0(t,e){return dc(8390656,8,t,e)}function dm(t,e){return Au(2048,8,t,e)}function Xy(t,e){return Au(4,2,t,e)}function $y(t,e){return Au(4,4,t,e)}function qy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yy(t,e,n){return n=n!=null?n.concat([t]):null,Au(4,4,qy.bind(null,e,t),n)}function hm(){}function Ky(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zy(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qy(t,e,n){return vs&21?(fi(n,e)||(n=iy(),_t.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function gw(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=gf.transition;gf.transition={};try{t(!1),e()}finally{rt=n,gf.transition=i}}function Jy(){return $n().memoizedState}function vw(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},eS(t))tS(e,n);else if(n=Uy(t,e,n,i),n!==null){var r=dn();ci(n,t,i,r),nS(n,e,i)}}function xw(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(eS(t))tS(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,rm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Uy(t,e,r,i),n!==null&&(r=dn(),ci(n,t,i,r),nS(n,e,i))}}function eS(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function tS(t,e){ga=qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nS(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wp(t,n)}}var Yc={readContext:Xn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},_w={readContext:Xn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:y0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dc(4194308,4,qy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return dc(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vw.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:_0,useDebugValue:hm,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=_0(!1),e=t[0];return t=gw.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=yi();if(gt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Xt===null)throw Error(oe(349));vs&30||zy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,y0(Hy.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,Vy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=Xt.identifierPrefix;if(gt){var n=ji,i=Wi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yw={readContext:Xn,useCallback:Ky,useContext:Xn,useEffect:dm,useImperativeHandle:Yy,useInsertionEffect:Xy,useLayoutEffect:$y,useMemo:Zy,useReducer:vf,useRef:jy,useState:function(){return vf(Va)},useDebugValue:hm,useDeferredValue:function(t){var e=$n();return Qy(e,Ot.memoizedState,t)},useTransition:function(){var t=vf(Va)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Oy,useSyncExternalStore:By,useId:Jy,unstable_isNewReconciler:!1},Sw={readContext:Xn,useCallback:Ky,useContext:Xn,useEffect:dm,useImperativeHandle:Yy,useInsertionEffect:Xy,useLayoutEffect:$y,useMemo:Zy,useReducer:xf,useRef:jy,useState:function(){return xf(Va)},useDebugValue:hm,useDeferredValue:function(t){var e=$n();return Ot===null?e.memoizedState=t:Qy(e,Ot.memoizedState,t)},useTransition:function(){var t=xf(Va)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Oy,useSyncExternalStore:By,useId:Jy,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cu={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Dr(t),s=$i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,r),e!==null&&(ci(e,t,r,i),uc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Dr(t),s=$i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,r),e!==null&&(ci(e,t,r,i),uc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Dr(t),r=$i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Nr(t,r,i),e!==null&&(ci(e,t,i,n),uc(e,t,i))}};function S0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,i)||!Ia(r,s):!0}function iS(t,e,n){var i=!1,r=Fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=Sn(e)?ms:an.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):Fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function M0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cu.enqueueReplaceState(e,e.state,null)}function eh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},sm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=Sn(e)?ms:an.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cu.enqueueReplaceState(r,r.state,null),Xc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",i=e;do n+=YE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mw=typeof WeakMap=="function"?WeakMap:Map;function rS(t,e,n){n=$i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zc||(Zc=!0,fh=i),th(t,e)},n}function sS(t,e,n){n=$i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){th(t,e),typeof i!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function E0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Mw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fw.bind(null,t,e,n),e.then(t,t))}function T0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function w0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$i(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var Ew=ir.ReactCurrentOwner,_n=!1;function cn(t,e,n,i){e.child=t===null?Iy(e,null,n,i):So(e,t.child,n,i)}function A0(t,e,n,i,r){n=n.render;var s=e.ref;return ho(e,r),i=um(t,e,n,i,s,r),n=fm(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(gt&&n&&Qp(e),e.flags|=1,cn(t,e,i,r),e.child)}function C0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Sm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oS(t,e,s,i,r)):(t=gc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function oS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ia(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,er(t,e,r)}return nh(t,e,n,i,r)}function aS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(io,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(io,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(io,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(io,Rn),Rn|=i;return cn(t,e,r,n),e.child}function lS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nh(t,e,n,i,r){var s=Sn(n)?ms:an.current;return s=_o(e,s),ho(e,r),n=um(t,e,n,i,s,r),i=fm(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(gt&&i&&Qp(e),e.flags|=1,cn(t,e,n,r),e.child)}function b0(t,e,n,i,r){if(Sn(n)){var s=!0;Vc(e)}else s=!1;if(ho(e,r),e.stateNode===null)hc(t,e),iS(e,n,i),eh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=Sn(n)?ms:an.current,c=_o(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&M0(e,o,i,c),_r=!1;var u=e.memoizedState;o.state=u,Xc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||yn.current||_r?(typeof f=="function"&&(Jd(e,n,f,i),l=e.memoizedState),(a=_r||S0(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=Sn(n)?ms:an.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&M0(e,o,i,l),_r=!1,u=e.memoizedState,o.state=u,Xc(e,i,o,r);var m=e.memoizedState;a!==d||u!==m||yn.current||_r?(typeof p=="function"&&(Jd(e,n,p,i),m=e.memoizedState),(c=_r||S0(e,n,c,i,u,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return ih(t,e,n,i,s,r)}function ih(t,e,n,i,r,s){lS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&h0(e,n,!1),er(t,e,s);i=e.stateNode,Ew.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):cn(t,e,a,s),e.memoizedState=i.state,r&&h0(e,n,!0),e.child}function cS(t){var e=t.stateNode;e.pendingContext?d0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&d0(t,e.context,!1),om(t,e.containerInfo)}function R0(t,e,n,i,r){return yo(),em(r),e.flags|=256,cn(t,e,n,i),e.child}var rh={dehydrated:null,treeContext:null,retryLane:0};function sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function uS(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(xt,r&1),t===null)return Zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,i,0,null),t=ds(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sh(n),e.memoizedState=rh,t):pm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Tw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ir(a,s):(s=ds(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rh,i}return s=t.child,t=s.sibling,i=Ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pm(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,i){return i!==null&&em(i),So(e,t.child,null,n),t=pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=_f(Error(oe(422))),Al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pu({mode:"visible",children:i.children},r,0,null),s=ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=sh(o),e.memoizedState=rh,s);if(!(e.mode&1))return Al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=_f(s,i,void 0),Al(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),ci(i,t,r,-1))}return ym(),i=_f(Error(oe(421))),Al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=Pr(r.nextSibling),Nn=e,gt=!0,ii=null,t!==null&&(zn[Vn++]=Wi,zn[Vn++]=ji,zn[Vn++]=gs,Wi=t.id,ji=t.overflow,gs=e),e=pm(e,i.children),e.flags|=4096,e)}function P0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qd(t.return,e,n)}function yf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function fS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&P0(t,n,e);else if(t.tag===19)P0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$c(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$c(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ww(t,e,n){switch(e.tag){case 3:cS(e),yo();break;case 5:ky(e);break;case 1:Sn(e.type)&&Vc(e);break;case 4:om(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?uS(t,e,n):(ht(xt,xt.current&1),t=er(t,e,n),t!==null?t.sibling:null);ht(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return fS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,aS(t,e,n)}return er(t,e,n)}var dS,oh,hS,pS;dS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oh=function(){};hS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,os(bi.current);var s=null;switch(n){case"input":r=bd(t,r),i=bd(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Nd(t,r),i=Nd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bc)}Dd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pS=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xo(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Aw(t,e,n){var i=e.pendingProps;switch(Jp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Sn(e.type)&&zc(),tn(e),null;case 3:return i=e.stateNode,Mo(),mt(yn),mt(an),lm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(ph(ii),ii=null))),oh(t,e),tn(e),null;case 5:am(e);var r=os(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)hS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return tn(e),null}if(t=os(bi.current),Tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)pt(oa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Bg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Vg(i,s),pt("invalid",i)}Dd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,t),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":ml(i),zg(i,s,!0);break;case"textarea":ml(i),Hg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ti]=e,t[ka]=i,dS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Id(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)pt(oa[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Bg(t,i),r=bd(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Vg(t,i),r=Nd(t,i),pt("invalid",t);break;default:r=i}Dd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Op(t,s,l,o))}switch(n){case"input":ml(t),zg(t,i,!1);break;case"textarea":ml(t),Hg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?lo(t,!!i.multiple,s,!1):i.defaultValue!=null&&lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)pS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=os(Ba.current),os(bi.current),Tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:El(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return tn(e),null;case 13:if(mt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Pn!==null&&e.mode&1&&!(e.flags&128))Ly(),yo(),e.flags|=98560,s=!1;else if(s=Tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Ti]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ii!==null&&(ph(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Bt===0&&(Bt=3):ym())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return Mo(),oh(t,e),t===null&&Ua(e.stateNode.containerInfo),tn(e),null;case 10:return im(e.type._context),tn(e),null;case 17:return Sn(e.type)&&zc(),tn(e),null;case 19:if(mt(xt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$c(t),o!==null){for(e.flags|=128,Xo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>To&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304)}else{if(!i)if(t=$c(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return tn(e),null}else 2*Rt()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=xt.current,ht(xt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return _m(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Cw(t,e){switch(Jp(e),e.tag){case 1:return Sn(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),mt(yn),mt(an),lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return am(e),null;case 13:if(mt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(xt),null;case 4:return Mo(),null;case 10:return im(e.type._context),null;case 22:case 23:return _m(),null;case 24:return null;default:return null}}var Cl=!1,sn=!1,bw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function ah(t,e,n){try{n()}catch(i){wt(t,e,i)}}var N0=!1;function Rw(t,e){if(Wd=Fc,t=_y(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},Fc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var M=m.memoizedProps,g=m.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:ti(e.type,M),g);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=N0,N0=!1,m}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ah(e,n,s)}r=r.next}while(r!==i)}}function bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mS(t){var e=t.alternate;e!==null&&(t.alternate=null,mS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[ka],delete e[qd],delete e[fw],delete e[dw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gS(t){return t.tag===5||t.tag===3||t.tag===4}function L0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bc));else if(i!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}function uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var qt=null,ni=!1;function lr(t,e,n){for(n=n.child;n!==null;)vS(t,e,n),n=n.sibling}function vS(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(yu,n)}catch{}switch(n.tag){case 5:sn||no(n,e);case 6:var i=qt,r=ni;qt=null,lr(t,e,n),qt=i,ni=r,qt!==null&&(ni?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ni?(t=qt,n=n.stateNode,t.nodeType===8?hf(t.parentNode,n):t.nodeType===1&&hf(t,n),La(t)):hf(qt,n.stateNode));break;case 4:i=qt,r=ni,qt=n.stateNode.containerInfo,ni=!0,lr(t,e,n),qt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ah(n,e,o),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!sn&&(no(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,lr(t,e,n),sn=i):lr(t,e,n);break;default:lr(t,e,n)}}function D0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bw),e.forEach(function(i){var r=Ow.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,ni=!1;break e;case 3:qt=a.stateNode.containerInfo,ni=!0;break e;case 4:qt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(qt===null)throw Error(oe(160));vS(s,o,r),qt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xS(e,t),e=e.sibling}function xS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),vi(t),i&4){try{va(3,t,t.return),bu(3,t)}catch(M){wt(t,t.return,M)}try{va(5,t,t.return)}catch(M){wt(t,t.return,M)}}break;case 1:Yn(e,t),vi(t),i&512&&n!==null&&no(n,n.return);break;case 5:if(Yn(e,t),vi(t),i&512&&n!==null&&no(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(M){wt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z_(r,s),Id(a,o);var c=Id(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?j_(r,d):f==="dangerouslySetInnerHTML"?G_(r,d):f==="children"?ba(r,d):Op(r,f,d,c)}switch(a){case"input":Rd(r,s);break;case"textarea":V_(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(M){wt(t,t.return,M)}}break;case 6:if(Yn(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){wt(t,t.return,M)}}break;case 3:if(Yn(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(M){wt(t,t.return,M)}break;case 4:Yn(e,t),vi(t);break;case 13:Yn(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vm=Rt())),i&4&&D0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,Yn(e,t),sn=c):Yn(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(d=Se=f;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:va(4,u,u.return);break;case 1:no(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(M){wt(i,n,M)}}break;case 5:no(u,u.return);break;case 22:if(u.memoizedState!==null){U0(d);continue}}p!==null?(p.return=u,Se=p):U0(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=W_("display",o))}catch(M){wt(t,t.return,M)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){wt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,t),vi(t),i&4&&D0(t);break;case 21:break;default:Yn(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gS(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=L0(t);uh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=L0(t);ch(t,a,o);break;default:throw Error(oe(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pw(t,e,n){Se=t,_S(t)}function _S(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Cl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=Cl;var c=sn;if(Cl=o,(sn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?F0(r):l!==null?(l.return=o,Se=l):F0(r);for(;s!==null;)Se=s,_S(s),s=s.sibling;Se=r,Cl=a,sn=c}I0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):I0(t)}}function I0(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||bu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&x0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}x0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&La(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}sn||e.flags&512&&lh(e)}catch(u){wt(e,e.return,u)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function U0(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function F0(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bu(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{lh(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{lh(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Nw=Math.ceil,Kc=ir.ReactCurrentDispatcher,mm=ir.ReactCurrentOwner,jn=ir.ReactCurrentBatchConfig,Ze=0,Xt=null,It=null,Zt=0,Rn=0,io=Vr(0),Bt=0,Ga=null,xs=0,Ru=0,gm=0,xa=null,xn=null,vm=0,To=1/0,Vi=null,Zc=!1,fh=null,Lr=null,bl=!1,Tr=null,Qc=0,_a=0,dh=null,pc=-1,mc=0;function dn(){return Ze&6?Rt():pc!==-1?pc:pc=Rt()}function Dr(t){return t.mode&1?Ze&2&&Zt!==0?Zt&-Zt:pw.transition!==null?(mc===0&&(mc=iy()),mc):(t=rt,t!==0||(t=window.event,t=t===void 0?16:uy(t.type)),t):1}function ci(t,e,n,i){if(50<_a)throw _a=0,dh=null,Error(oe(185));Za(t,n,i),(!(Ze&2)||t!==Xt)&&(t===Xt&&(!(Ze&2)&&(Ru|=n),Bt===4&&Sr(t,Zt)),Mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(To=Rt()+500,wu&&Hr()))}function Mn(t,e){var n=t.callbackNode;pT(t,e);var i=Uc(t,t===Xt?Zt:0);if(i===0)n!==null&&jg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jg(n),e===1)t.tag===0?hw(k0.bind(null,t)):Ry(k0.bind(null,t)),cw(function(){!(Ze&6)&&Hr()}),n=null;else{switch(ry(i)){case 1:n=Gp;break;case 4:n=ty;break;case 16:n=Ic;break;case 536870912:n=ny;break;default:n=Ic}n=CS(n,yS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yS(t,e){if(pc=-1,mc=0,Ze&6)throw Error(oe(327));var n=t.callbackNode;if(po()&&t.callbackNode!==n)return null;var i=Uc(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jc(t,i);else{e=i;var r=Ze;Ze|=2;var s=MS();(Xt!==t||Zt!==e)&&(Vi=null,To=Rt()+500,fs(t,e));do try{Iw();break}catch(a){SS(t,a)}while(!0);nm(),Kc.current=s,Ze=r,It!==null?e=0:(Xt=null,Zt=0,e=Bt)}if(e!==0){if(e===2&&(r=Bd(t),r!==0&&(i=r,e=hh(t,r))),e===1)throw n=Ga,fs(t,0),Sr(t,i),Mn(t,Rt()),n;if(e===6)Sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Lw(r)&&(e=Jc(t,i),e===2&&(s=Bd(t),s!==0&&(i=s,e=hh(t,s))),e===1))throw n=Ga,fs(t,0),Sr(t,i),Mn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Jr(t,xn,Vi);break;case 3:if(Sr(t,i),(i&130023424)===i&&(e=vm+500-Rt(),10<e)){if(Uc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$d(Jr.bind(null,t,xn,Vi),e);break}Jr(t,xn,Vi);break;case 4:if(Sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Nw(i/1960))-i,10<i){t.timeoutHandle=$d(Jr.bind(null,t,xn,Vi),i);break}Jr(t,xn,Vi);break;case 5:Jr(t,xn,Vi);break;default:throw Error(oe(329))}}}return Mn(t,Rt()),t.callbackNode===n?yS.bind(null,t):null}function hh(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=Jc(t,e),t!==2&&(e=xn,xn=n,e!==null&&ph(e)),t}function ph(t){xn===null?xn=t:xn.push.apply(xn,t)}function Lw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~gm,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function k0(t){if(Ze&6)throw Error(oe(327));po();var e=Uc(t,0);if(!(e&1))return Mn(t,Rt()),null;var n=Jc(t,e);if(t.tag!==0&&n===2){var i=Bd(t);i!==0&&(e=i,n=hh(t,i))}if(n===1)throw n=Ga,fs(t,0),Sr(t,e),Mn(t,Rt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,xn,Vi),Mn(t,Rt()),null}function xm(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(To=Rt()+500,wu&&Hr())}}function _s(t){Tr!==null&&Tr.tag===0&&!(Ze&6)&&po();var e=Ze;Ze|=1;var n=jn.transition,i=rt;try{if(jn.transition=null,rt=1,t)return t()}finally{rt=i,jn.transition=n,Ze=e,!(Ze&6)&&Hr()}}function _m(){Rn=io.current,mt(io)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lw(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Jp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zc();break;case 3:Mo(),mt(yn),mt(an),lm();break;case 5:am(i);break;case 4:Mo();break;case 13:mt(xt);break;case 19:mt(xt);break;case 10:im(i.type._context);break;case 22:case 23:_m()}n=n.return}if(Xt=t,It=t=Ir(t.current,null),Zt=Rn=e,Bt=0,Ga=null,gm=Ru=xs=0,xn=xa=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ss=null}return t}function SS(t,e){do{var n=It;try{if(nm(),fc.current=Yc,qc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qc=!1}if(vs=0,jt=Ot=_t=null,ga=!1,za=0,mm.current=null,n===null||n.return===null){Bt=1,Ga=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=T0(o);if(p!==null){p.flags&=-257,w0(p,o,a,s,e),p.mode&1&&E0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var M=new Set;M.add(l),e.updateQueue=M}else m.add(l);break e}else{if(!(e&1)){E0(s,c,e),ym();break e}l=Error(oe(426))}}else if(gt&&a.mode&1){var g=T0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),w0(g,o,a,s,e),em(Eo(l,a));break e}}s=l=Eo(l,a),Bt!==4&&(Bt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=rS(s,l,e);v0(s,h);break e;case 1:a=l;var x=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Lr===null||!Lr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=sS(s,a,e);v0(s,y);break e}}s=s.return}while(s!==null)}TS(n)}catch(A){e=A,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function MS(){var t=Kc.current;return Kc.current=Yc,t===null?Yc:t}function ym(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Xt===null||!(xs&268435455)&&!(Ru&268435455)||Sr(Xt,Zt)}function Jc(t,e){var n=Ze;Ze|=2;var i=MS();(Xt!==t||Zt!==e)&&(Vi=null,fs(t,e));do try{Dw();break}catch(r){SS(t,r)}while(!0);if(nm(),Ze=n,Kc.current=i,It!==null)throw Error(oe(261));return Xt=null,Zt=0,Bt}function Dw(){for(;It!==null;)ES(It)}function Iw(){for(;It!==null&&!sT();)ES(It)}function ES(t){var e=AS(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?TS(t):It=e,mm.current=null}function TS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cw(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,It=null;return}}else if(n=Aw(n,e,Rn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Bt===0&&(Bt=5)}function Jr(t,e,n){var i=rt,r=jn.transition;try{jn.transition=null,rt=1,Uw(t,e,n,i)}finally{jn.transition=r,rt=i}return null}function Uw(t,e,n,i){do po();while(Tr!==null);if(Ze&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mT(t,s),t===Xt&&(It=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,CS(Ic,function(){return po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=rt;rt=1;var a=Ze;Ze|=4,mm.current=null,Rw(t,n),xS(n,t),tw(jd),Fc=!!Wd,jd=Wd=null,t.current=n,Pw(n),oT(),Ze=a,rt=o,jn.transition=s}else t.current=n;if(bl&&(bl=!1,Tr=t,Qc=r),s=t.pendingLanes,s===0&&(Lr=null),cT(n.stateNode),Mn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zc)throw Zc=!1,t=fh,fh=null,t;return Qc&1&&t.tag!==0&&po(),s=t.pendingLanes,s&1?t===dh?_a++:(_a=0,dh=t):_a=0,Hr(),null}function po(){if(Tr!==null){var t=ry(Qc),e=jn.transition,n=rt;try{if(jn.transition=null,rt=16>t?16:t,Tr===null)var i=!1;else{if(t=Tr,Tr=null,Qc=0,Ze&6)throw Error(oe(331));var r=Ze;for(Ze|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:va(8,f,s)}var d=f.child;if(d!==null)d.return=f,Se=d;else for(;Se!==null;){f=Se;var u=f.sibling,p=f.return;if(mS(f),f===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var m=s.alternate;if(m!==null){var M=m.child;if(M!==null){m.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var x=t.current;for(Se=x;Se!==null;){o=Se;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Se=S;else e:for(o=x;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bu(9,a)}}catch(A){wt(a,a.return,A)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(Ze=r,Hr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(yu,t)}catch{}i=!0}return i}finally{rt=n,jn.transition=e}}return!1}function O0(t,e,n){e=Eo(n,e),e=rS(t,e,1),t=Nr(t,e,1),e=dn(),t!==null&&(Za(t,1,e),Mn(t,e))}function wt(t,e,n){if(t.tag===3)O0(t,t,n);else for(;e!==null;){if(e.tag===3){O0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Lr===null||!Lr.has(i))){t=Eo(n,t),t=sS(e,t,1),e=Nr(e,t,1),t=dn(),e!==null&&(Za(e,1,t),Mn(e,t));break}}e=e.return}}function Fw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Bt===4||Bt===3&&(Zt&130023424)===Zt&&500>Rt()-vm?fs(t,0):gm|=n),Mn(t,e)}function wS(t,e){e===0&&(t.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var n=dn();t=Ji(t,e),t!==null&&(Za(t,e,n),Mn(t,n))}function kw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wS(t,n)}function Ow(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),wS(t,n)}var AS;AS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,ww(t,e,n);_n=!!(t.flags&131072)}else _n=!1,gt&&e.flags&1048576&&Py(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hc(t,e),t=e.pendingProps;var r=_o(e,an.current);ho(e,n),r=um(null,e,i,t,r,n);var s=fm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,sm(e),r.updater=Cu,e.stateNode=r,r._reactInternals=e,eh(e,i,t,n),e=ih(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Qp(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=zw(i),t=ti(i,t),r){case 0:e=nh(null,e,i,t,n);break e;case 1:e=b0(null,e,i,t,n);break e;case 11:e=A0(null,e,i,t,n);break e;case 14:e=C0(null,e,i,ti(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),nh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),b0(t,e,i,r,n);case 3:e:{if(cS(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fy(t,e),Xc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Eo(Error(oe(423)),e),e=R0(t,e,i,n,r);break e}else if(i!==r){r=Eo(Error(oe(424)),e),e=R0(t,e,i,n,r);break e}else for(Pn=Pr(e.stateNode.containerInfo.firstChild),Nn=e,gt=!0,ii=null,n=Iy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),i===r){e=er(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return ky(e),t===null&&Zd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xd(i,r)?o=null:s!==null&&Xd(i,s)&&(e.flags|=32),lS(t,e),cn(t,e,o,n),e.child;case 6:return t===null&&Zd(e),null;case 13:return uS(t,e,n);case 4:return om(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=So(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),A0(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Wc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!yn.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,n),r=Xn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),C0(t,e,i,r,n);case 15:return oS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),hc(t,e),e.tag=1,Sn(i)?(t=!0,Vc(e)):t=!1,ho(e,n),iS(e,i,r),eh(e,i,r,n),ih(null,e,i,!0,t,n);case 19:return fS(t,e,n);case 22:return aS(t,e,n)}throw Error(oe(156,e.tag))};function CS(t,e){return ey(t,e)}function Bw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new Bw(t,e,n,i)}function Sm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zw(t){if(typeof t=="function")return Sm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zp)return 11;if(t===Vp)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Sm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $s:return ds(n.children,r,s,e);case Bp:o=8,r|=8;break;case Td:return t=Gn(12,n,e,r|2),t.elementType=Td,t.lanes=s,t;case wd:return t=Gn(13,n,e,r),t.elementType=wd,t.lanes=s,t;case Ad:return t=Gn(19,n,e,r),t.elementType=Ad,t.lanes=s,t;case k_:return Pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U_:o=10;break e;case F_:o=9;break e;case zp:o=11;break e;case Vp:o=14;break e;case xr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ds(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Pu(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function Sf(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function Mf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tf(0),this.expirationTimes=tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,i,r,s,o,a,l){return t=new Vw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sm(s),t}function Hw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function bS(t){if(!t)return Fr;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Sn(n))return by(t,n,e)}return e}function RS(t,e,n,i,r,s,o,a,l){return t=Mm(n,i,!0,t,r,s,o,a,l),t.context=bS(null),n=t.current,i=dn(),r=Dr(n),s=$i(i,r),s.callback=e??null,Nr(n,s,r),t.current.lanes=r,Za(t,r,i),Mn(t,i),t}function Nu(t,e,n,i){var r=e.current,s=dn(),o=Dr(r);return n=bS(n),e.context===null?e.context=n:e.pendingContext=n,e=$i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Nr(r,e,o),t!==null&&(ci(t,r,o,s),uc(t,r,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function B0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Em(t,e){B0(t,e),(t=t.alternate)&&B0(t,e)}function Gw(){return null}var PS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tm(t){this._internalRoot=t}Lu.prototype.render=Tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Nu(t,e,null,null)};Lu.prototype.unmount=Tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){Nu(null,t,null,null)}),e[Qi]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ay();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&cy(t)}};function wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function z0(){}function Ww(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=eu(o);s.call(c)}}var o=RS(e,i,t,0,null,!1,!1,"",z0);return t._reactRootContainer=o,t[Qi]=o.current,Ua(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=eu(l);a.call(c)}}var l=Mm(t,0,!1,null,null,!1,!1,"",z0);return t._reactRootContainer=l,t[Qi]=l.current,Ua(t.nodeType===8?t.parentNode:t),_s(function(){Nu(e,l,n,i)}),l}function Iu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=eu(o);a.call(l)}}Nu(e,o,t,r)}else o=Ww(n,e,t,r,i);return eu(o)}sy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(Wp(e,n|1),Mn(e,Rt()),!(Ze&6)&&(To=Rt()+500,Hr()))}break;case 13:_s(function(){var i=Ji(t,1);if(i!==null){var r=dn();ci(i,t,1,r)}}),Em(t,1)}};jp=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=dn();ci(e,t,134217728,n)}Em(t,134217728)}};oy=function(t){if(t.tag===13){var e=Dr(t),n=Ji(t,e);if(n!==null){var i=dn();ci(n,t,e,i)}Em(t,e)}};ay=function(){return rt};ly=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Fd=function(t,e,n){switch(e){case"input":if(Rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tu(i);if(!r)throw Error(oe(90));B_(i),Rd(i,r)}}}break;case"textarea":V_(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};q_=xm;Y_=_s;var jw={usingClientEntryPoint:!1,Events:[Ja,Zs,Tu,X_,$_,xm]},$o={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xw={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q_(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||Gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{yu=Rl.inject(Xw),Ci=Rl}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jw;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wm(e))throw Error(oe(200));return Hw(t,e,null,n)};Un.createRoot=function(t,e){if(!wm(t))throw Error(oe(299));var n=!1,i="",r=PS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Ua(t.nodeType===8?t.parentNode:t),new Tm(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Q_(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return _s(t)};Un.hydrate=function(t,e,n){if(!Du(e))throw Error(oe(200));return Iu(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!wm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=PS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=RS(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Lu(e)};Un.render=function(t,e,n){if(!Du(e))throw Error(oe(200));return Iu(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Du(t))throw Error(oe(40));return t._reactRootContainer?(_s(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Un.unstable_batchedUpdates=xm;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Du(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Iu(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function NS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NS)}catch(t){console.error(t)}}NS(),N_.exports=Un;var $w=N_.exports,LS,V0=$w;LS=V0.createRoot,V0.hydrateRoot;const Am=Z.createContext({});function kr(t){const e=Z.useRef(null);return e.current===null&&(e.current=t()),e.current}const qw=typeof window<"u",tl=qw?Z.useLayoutEffect:Z.useEffect,Uu=Z.createContext(null);function Cm(t,e){t.indexOf(e)===-1&&t.push(e)}function tu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const di=(t,e,n)=>n>e?e:n<t?t:n;let bm=()=>{};const Or={},DS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),IS=t=>typeof t=="object"&&t!==null,US=t=>/^0[^.\s]+$/u.test(t);function FS(t){let e;return()=>(e===void 0&&(e=t()),e)}const En=t=>t,nl=(...t)=>t.reduce((e,n)=>i=>n(e(i))),wo=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class Rm{constructor(){this.subscriptions=[]}add(e){return Cm(this.subscriptions,e),()=>tu(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ln=t=>t*1e3,Wn=t=>t/1e3,Pm=(t,e)=>e?t*(1e3/e):0,kS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Yw=1e-7,Kw=12;function Zw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=kS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Yw&&++a<Kw);return o}function il(t,e,n,i){if(t===e&&n===i)return En;const r=s=>Zw(s,0,1,t,n);return s=>s===0||s===1?s:kS(r(s),e,i)}const OS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,BS=t=>e=>1-t(1-e),zS=il(.33,1.53,.69,.99),Nm=BS(zS),VS=OS(Nm),HS=t=>t>=1?1:(t*=2)<1?.5*Nm(t):.5*(2-Math.pow(2,-10*(t-1))),Lm=t=>1-Math.sin(Math.acos(t)),GS=BS(Lm),WS=OS(Lm),Qw=il(.42,0,1,1),Jw=il(0,0,.58,1),jS=il(.42,0,.58,1),eA=t=>Array.isArray(t)&&typeof t[0]!="number",XS=t=>Array.isArray(t)&&typeof t[0]=="number",tA={linear:En,easeIn:Qw,easeInOut:jS,easeOut:Jw,circIn:Lm,circInOut:WS,circOut:GS,backIn:Nm,backInOut:VS,backOut:zS,anticipate:HS},nA=t=>typeof t=="string",H0=t=>{if(XS(t)){bm(t.length===4);const[e,n,i,r]=t;return il(e,n,i,r)}else if(nA(t))return tA[t];return t},Pl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iA(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,f=!1,d=!1)=>{const p=d&&i?e:n;return f&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0;const f=e;e=n,n=f,e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const rA=40;function $S(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Pl.reduce((S,y)=>(S[y]=iA(s),S),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:f,update:d,preRender:u,render:p,postRender:m}=o,M=()=>{const S=Or.useManualTiming,y=S?r.timestamp:performance.now();n=!1,S||(r.delta=i?1e3/60:Math.max(Math.min(y-r.timestamp,rA),1)),r.timestamp=y,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),f.process(r),d.process(r),u.process(r),p.process(r),m.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(M))},g=()=>{n=!0,i=!0,r.isProcessing||t(M)};return{schedule:Pl.reduce((S,y)=>{const A=o[y];return S[y]=(w,R=!1,_=!1)=>(n||g(),A.schedule(w,R,_)),S},{}),cancel:S=>{for(let y=0;y<Pl.length;y++)o[Pl[y]].cancel(S)},state:r,steps:o}}const{schedule:Qe,cancel:qn,state:Wt,steps:Ef}=$S(typeof requestAnimationFrame<"u"?requestAnimationFrame:En,!0);let vc;function sA(){vc=void 0}const un={now:()=>(vc===void 0&&un.set(Wt.isProcessing||Or.useManualTiming?Wt.timestamp:performance.now()),vc),set:t=>{vc=t,queueMicrotask(sA)}},qS=t=>e=>typeof e=="string"&&e.startsWith(t),YS=qS("--"),oA=qS("var(--"),Dm=t=>oA(t)?aA.test(t.split("/*")[0].trim()):!1,aA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function G0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Uo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Wa={...Uo,transform:t=>di(0,1,t)},Nl={...Uo,default:1},ya=t=>Math.round(t*1e5)/1e5,Im=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lA(t){return t==null}const cA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Um=(t,e)=>n=>!!(typeof n=="string"&&cA.test(n)&&n.startsWith(t)||e&&!lA(n)&&Object.prototype.hasOwnProperty.call(n,e)),KS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Im);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},uA=t=>di(0,255,t),Tf={...Uo,transform:t=>Math.round(uA(t))},as={test:Um("rgb","red"),parse:KS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Tf.transform(t)+", "+Tf.transform(e)+", "+Tf.transform(n)+", "+ya(Wa.transform(i))+")"};function fA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const mh={test:Um("#"),parse:fA,transform:as.transform},rl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),zi=rl("deg"),Ri=rl("%"),Ee=rl("px"),dA=rl("vh"),hA=rl("vw"),W0={...Ri,parse:t=>Ri.parse(t)/100,transform:t=>Ri.transform(t*100)},ro={test:Um("hsl","hue"),parse:KS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ri.transform(ya(e))+", "+Ri.transform(ya(n))+", "+ya(Wa.transform(i))+")"},Dt={test:t=>as.test(t)||mh.test(t)||ro.test(t),parse:t=>as.test(t)?as.parse(t):ro.test(t)?ro.parse(t):mh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?as.transform(t):ro.transform(t),getAnimatableNone:t=>{const e=Dt.parse(t);return e.alpha=0,Dt.transform(e)}},pA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Im))==null?void 0:e.length)||0)+(((n=t.match(pA))==null?void 0:n.length)||0)>0}const ZS="number",QS="color",gA="var",vA="var(",j0="${}",xA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ao(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(xA,l=>(Dt.test(l)?(i.color.push(s),r.push(QS),n.push(Dt.parse(l))):l.startsWith(vA)?(i.var.push(s),r.push(gA),n.push(l)):(i.number.push(s),r.push(ZS),n.push(parseFloat(l))),++s,j0)).split(j0);return{values:n,split:a,indexes:i,types:r}}function _A(t){return Ao(t).values}function JS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===ZS?r+=ya(i[s]):o===QS?r+=Dt.transform(i[s]):r+=i[s]}return r}}function yA(t){return JS(Ao(t))}const SA=t=>typeof t=="number"?0:Dt.test(t)?Dt.getAnimatableNone(t):t,MA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:SA(t);function EA(t){const e=Ao(t);return JS(e)(e.values.map((i,r)=>MA(i,e.split[r])))}const ui={test:mA,parse:_A,createTransformer:yA,getAnimatableNone:EA};function wf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function TA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=wf(l,a,t+1/3),s=wf(l,a,t),o=wf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function nu(t,e){return n=>n>0?e:t}const ct=(t,e,n)=>t+(e-t)*n,Af=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},wA=[mh,as,ro],AA=t=>wA.find(e=>e.test(t));function X0(t){const e=AA(t);if(!e)return!1;let n=e.parse(t);return e===ro&&(n=TA(n)),n}const $0=(t,e)=>{const n=X0(t),i=X0(e);if(!n||!i)return nu(t,e);const r={...n};return s=>(r.red=Af(n.red,i.red,s),r.green=Af(n.green,i.green,s),r.blue=Af(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),as.transform(r))},gh=new Set(["none","hidden"]);function CA(t,e){return gh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function bA(t,e){return n=>ct(t,e,n)}function Fm(t){return typeof t=="number"?bA:typeof t=="string"?Dm(t)?nu:Dt.test(t)?$0:NA:Array.isArray(t)?e1:typeof t=="object"?Dt.test(t)?$0:RA:nu}function e1(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Fm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function RA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Fm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function PA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const NA=(t,e)=>{const n=ui.createTransformer(e),i=Ao(t),r=Ao(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?gh.has(t)&&!r.values.length||gh.has(e)&&!i.values.length?CA(t,e):nl(e1(PA(i,r),r.values),n):nu(t,e)};function t1(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):Fm(t)(t,e)}const LA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>Qe.update(e,n),stop:()=>qn(e),now:()=>Wt.isProcessing?Wt.timestamp:un.now()}},n1=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},iu=2e4;function km(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<iu;)e+=n,i=t.next(e);return e>=iu?1/0:e}function DA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(km(i),iu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Wn(r)}}const Tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function vh(t,e){return t*Math.sqrt(1-e*e)}const IA=12;function UA(t,e,n){let i=n;for(let r=1;r<IA;r++)i=i-t(i)/e(i);return i}const Cf=.001;function FA({duration:t=Tt.duration,bounce:e=Tt.bounce,velocity:n=Tt.velocity,mass:i=Tt.mass}){let r,s,o=1-e;o=di(Tt.minDamping,Tt.maxDamping,o),t=di(Tt.minDuration,Tt.maxDuration,Wn(t)),o<1?(r=c=>{const f=c*o,d=f*t,u=f-n,p=vh(c,o),m=Math.exp(-d);return Cf-u/p*m},s=c=>{const d=c*o*t,u=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-d),M=vh(Math.pow(c,2),o);return(-r(c)+Cf>0?-1:1)*((u-p)*m)/M}):(r=c=>{const f=Math.exp(-c*t),d=(c-n)*t+1;return-Cf+f*d},s=c=>{const f=Math.exp(-c*t),d=(n-c)*(t*t);return f*d});const a=5/t,l=UA(r,s,a);if(t=Ln(t),isNaN(l))return{stiffness:Tt.stiffness,damping:Tt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const kA=["duration","bounce"],OA=["stiffness","damping","mass"];function q0(t,e){return e.some(n=>t[n]!==void 0)}function BA(t){let e={velocity:Tt.velocity,stiffness:Tt.stiffness,damping:Tt.damping,mass:Tt.mass,isResolvedFromDuration:!1,...t};if(!q0(t,OA)&&q0(t,kA))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*di(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Tt.mass,stiffness:r,damping:s}}else{const n=FA({...t,velocity:0});e={...e,...n,mass:Tt.mass},e.isResolvedFromDuration=!0}return e}function ru(t=Tt.visualDuration,e=Tt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:f,duration:d,velocity:u,isResolvedFromDuration:p}=BA({...n,velocity:-Wn(n.velocity||0)}),m=u||0,M=c/(2*Math.sqrt(l*f)),g=o-s,h=Wn(Math.sqrt(l/f)),x=Math.abs(g)<5;i||(i=x?Tt.restSpeed.granular:Tt.restSpeed.default),r||(r=x?Tt.restDelta.granular:Tt.restDelta.default);let S,y,A,w,R,_;if(M<1)A=vh(h,M),w=(m+M*h*g)/A,S=N=>{const I=Math.exp(-M*h*N);return o-I*(w*Math.sin(A*N)+g*Math.cos(A*N))},R=M*h*w+g*A,_=M*h*g-w*A,y=N=>Math.exp(-M*h*N)*(R*Math.sin(A*N)+_*Math.cos(A*N));else if(M===1){S=I=>o-Math.exp(-h*I)*(g+(m+h*g)*I);const N=m+h*g;y=I=>Math.exp(-h*I)*(h*N*I-m)}else{const N=h*Math.sqrt(M*M-1);S=k=>{const U=Math.exp(-M*h*k),O=Math.min(N*k,300);return o-U*((m+M*h*g)*Math.sinh(O)+N*g*Math.cosh(O))/N};const I=(m+M*h*g)/N,C=M*h*I-g*N,D=M*h*g-I*N;y=k=>{const U=Math.exp(-M*h*k),O=Math.min(N*k,300);return U*(C*Math.sinh(O)+D*Math.cosh(O))}}const b={calculatedDuration:p&&d||null,velocity:N=>Ln(y(N)),next:N=>{if(!p&&M<1){const C=Math.exp(-M*h*N),D=Math.sin(A*N),k=Math.cos(A*N),U=o-C*(w*D+g*k),O=Ln(C*(R*D+_*k));return a.done=Math.abs(O)<=i&&Math.abs(o-U)<=r,a.value=a.done?o:U,a}const I=S(N);if(p)a.done=N>=d;else{const C=Ln(y(N));a.done=Math.abs(C)<=i&&Math.abs(o-I)<=r}return a.value=a.done?o:I,a},toString:()=>{const N=Math.min(km(b),iu),I=n1(C=>b.next(N*C).value,N,30);return N+"ms "+I},toTransition:()=>{}};return b}ru.applyToOptions=t=>{const e=DA(t,100,ru);return t.ease=e.ease,t.duration=Ln(e.duration),t.type="keyframes",t};const zA=5;function i1(t,e,n){const i=Math.max(e-zA,0);return Pm(n-t(i),e-i)}function xh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const d=t[0],u={done:!1,value:d},p=_=>a!==void 0&&_<a||l!==void 0&&_>l,m=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let M=n*e;const g=d+M,h=o===void 0?g:o(g);h!==g&&(M=h-d);const x=_=>-M*Math.exp(-_/i),S=_=>h+x(_),y=_=>{const b=x(_),N=S(_);u.done=Math.abs(b)<=c,u.value=u.done?h:N};let A,w;const R=_=>{p(u.value)&&(A=_,w=ru({keyframes:[u.value,m(u.value)],velocity:i1(S,_,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return R(0),{calculatedDuration:null,next:_=>{let b=!1;return!w&&A===void 0&&(b=!0,y(_),R(_)),A!==void 0&&_>=A?w.next(_-A):(!b&&y(_),u)}}}function VA(t,e,n){const i=[],r=n||Or.mix||t1,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||En:e;a=nl(l,a)}i.push(a)}return i}function Om(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(bm(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=VA(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const u=wo(t[d],t[d+1],f);return a[d](u)};return n?f=>c(di(t[0],t[s-1],f)):c}function HA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=wo(0,e,i);t.push(ct(n,1,r))}}function r1(t){const e=[0];return HA(e,t.length-1),e}function GA(t,e){return t.map(n=>n*e)}function WA(t,e){return t.map(()=>e||jS).splice(0,t.length-1)}function Sa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=eA(i)?i.map(H0):H0(i),s={done:!1,value:e[0]},o=GA(n&&n.length===e.length?n:r1(e),t),a=Om(o,e,{ease:Array.isArray(r)?r:WA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const jA=t=>t!==null;function Fu(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(jA),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const XA={decay:xh,inertia:xh,tween:Sa,keyframes:Sa,spring:ru};function s1(t){typeof t.type=="string"&&(t.type=XA[t.type])}class Bm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const $A=t=>t/100;class su extends Bm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==un.now()&&this.tick(un.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;s1(e);const{type:n=Sa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Sa;l!==Sa&&typeof a[0]!="number"&&(this.mixKeyframes=nl($A,t1(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=km(c));const{calculatedDuration:f}=c;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:f,repeat:d,repeatType:u,repeatDelay:p,type:m,onUpdate:M,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let S=this.currentTime,y=i;if(d){const _=Math.min(this.currentTime,r)/a;let b=Math.floor(_),N=_%1;!N&&_>=1&&(N=1),N===1&&b--,b=Math.min(b,d+1),!!(b%2)&&(u==="reverse"?(N=1-N,p&&(N-=p/a)):u==="mirror"&&(y=o)),S=di(0,1,N)*a}let A;x?(this.delayState.value=f[0],A=this.delayState):A=y.next(S),s&&!x&&(A.value=s(A.value));let{done:w}=A;!x&&l!==null&&(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return R&&m!==xh&&(A.value=Fu(f,this.options,g,this.speed)),M&&M(A.value),R&&this.finish(),A}then(e,n){return this.finished.then(e,n)}get duration(){return Wn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wn(e)}get time(){return Wn(this.currentTime)}set time(e){e=Ln(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return i1(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(un.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Wn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=LA,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(un.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function qA(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ls=t=>t*180/Math.PI,_h=t=>{const e=ls(Math.atan2(t[1],t[0]));return yh(e)},YA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:_h,rotateZ:_h,skewX:t=>ls(Math.atan(t[1])),skewY:t=>ls(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},yh=t=>(t=t%360,t<0&&(t+=360),t),Y0=_h,K0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Z0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),KA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:K0,scaleY:Z0,scale:t=>(K0(t)+Z0(t))/2,rotateX:t=>yh(ls(Math.atan2(t[6],t[5]))),rotateY:t=>yh(ls(Math.atan2(-t[2],t[0]))),rotateZ:Y0,rotate:Y0,skewX:t=>ls(Math.atan(t[4])),skewY:t=>ls(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Sh(t){return t.includes("scale")?1:0}function Mh(t,e){if(!t||t==="none")return Sh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=KA,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=YA,r=a}if(!r)return Sh(e);const s=i[e],o=r[1].split(",").map(QA);return typeof s=="function"?s(o):o[s]}const ZA=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Mh(n,e)};function QA(t){return parseFloat(t.trim())}const Fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ko=new Set([...Fo,"pathRotation"]),Q0=t=>t===Uo||t===Ee,JA=new Set(["x","y","z"]),e2=Fo.filter(t=>!JA.has(t));function t2(t){const e=[];return e2.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const wr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Mh(e,"x"),y:(t,{transform:e})=>Mh(e,"y")};wr.translateX=wr.x;wr.translateY=wr.y;const hs=new Set;let Eh=!1,Th=!1,wh=!1;function o1(){if(Th){const t=Array.from(hs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=t2(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Th=!1,Eh=!1,hs.forEach(t=>t.complete(wh)),hs.clear()}function a1(){hs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Th=!0)})}function n2(){wh=!0,a1(),o1(),wh=!1}class zm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(hs.add(this),Eh||(Eh=!0,Qe.read(a1),Qe.resolveKeyframes(o1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}qA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),hs.delete(this)}cancel(){this.state==="scheduled"&&(hs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const i2=t=>t.startsWith("--");function l1(t,e,n){i2(e)?t.style.setProperty(e,n):t.style[e]=n}const r2={};function Vm(t,e){const n=FS(t);return()=>r2[e]??n()}const Hm=Vm(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),c1=Vm(()=>window.ViewTimeline!==void 0,"viewTimeline"),u1=Vm(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),aa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,J0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:aa([0,.65,.55,1]),circOut:aa([.55,0,1,.45]),backIn:aa([.31,.01,.66,-.59]),backOut:aa([.33,1.53,.69,.99])};function f1(t,e){if(t)return typeof t=="function"?u1()?n1(t,e):"ease-out":XS(t)?aa(t):Array.isArray(t)?t.map(n=>f1(n,e)||J0.easeOut):J0[t]}function s2(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const f={[e]:n};l&&(f.offset=l);const d=f1(a,r);Array.isArray(d)&&(f.easing=d);const u={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(u.pseudoElement=c),t.animate(f,u)}function d1(t){return typeof t=="function"&&"applyToOptions"in t}function o2({type:t,...e}){return d1(t)&&u1()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class h1 extends Bm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,bm(typeof e.type!="string");const c=o2(e);this.animation=s2(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=Fu(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(f),l1(n,i,f),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Wn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wn(e)}get time(){return Wn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ln(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Hm()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),En):r(this)}}const p1={anticipate:HS,backInOut:VS,circInOut:WS};function a2(t){return t in p1}function l2(t){typeof t.ease=="string"&&a2(t.ease)&&(t.ease=p1[t.ease])}const bf=10;class c2 extends h1{constructor(e){l2(e),s1(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new su({...o,autoplay:!1}),l=Math.max(bf,un.now()-this.startTime),c=di(0,bf,l-bf),f=a.sample(l).value,{name:d}=this.options;s&&d&&l1(s,d,f),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,f,c),a.stop()}}const ev=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ui.test(t)||t==="0")&&!t.startsWith("url("));function u2(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function f2(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=ev(r,e),a=ev(s,e);return!o||!a?!1:u2(t)||(n==="spring"||d1(n))&&i}function Ah(t){t.duration=0,t.type="keyframes"}const m1=new Set(["opacity","clipPath","filter","transform"]),d2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function h2(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&d2.test(t[e]))return!0;return!1}const p2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),m2=FS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function g2(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((d=e==null?void 0:e.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:f}=e.owner.getProps();return m2()&&n&&(m1.has(n)||p2.has(n)&&h2(a))&&(n!=="transform"||!f)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const v2=40;class x2 extends Bm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:f,...d}){var m;super(),this.stop=()=>{var M,g;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=un.now();const u={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:f,...d},p=(f==null?void 0:f.KeyframeResolver)||zm;this.keyframeResolver=new p(a,(M,g,h)=>this.onKeyframesResolved(M,g,u,!h),l,c,f),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,x;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:f}=i;this.resolvedAt=un.now();let d=!0;f2(e,s,o,a)||(d=!1,(Or.instantAnimations||!l)&&(f==null||f(Fu(e,i,n))),e[0]=e[e.length-1],Ah(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>v2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},m=d&&!c&&g2(p),M=(x=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:x.current;let g;if(m)try{g=new c2({...p,element:M})}catch{g=new su(p)}else g=new su(p);g.finished.then(()=>{this.notifyFinished()}).catch(En),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),n2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function g1(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,f)=>c.sortNodePosition(f)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const tv=30,_2=t=>!isNaN(parseFloat(t)),Ma={current:void 0};class y2{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=un.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=un.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=_2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Rm);const i=this.events[e].add(n);return e==="change"?()=>{i(),Qe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ma.current&&Ma.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=un.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>tv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,tv);return Pm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function oi(t,e){return new y2(t,e)}function v1(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Gm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?v1(n,t):n}const S2={type:"spring",stiffness:500,damping:25,restSpeed:10},M2=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),E2={type:"keyframes",duration:.8},T2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w2=(t,{keyframes:e})=>e.length>2?E2:ko.has(t)?t.startsWith("scale")?M2(e[1]):S2:T2,A2=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function C2(t){for(const e in t)if(!A2.has(e))return!0;return!1}const Wm=(t,e,n,i={},r,s)=>o=>{const a=Gm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ln(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:u=>{e.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};C2(a)||Object.assign(f,w2(t,f)),f.duration&&(f.duration=Ln(f.duration)),f.repeatDelay&&(f.repeatDelay=Ln(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(Ah(f),f.delay===0&&(d=!0)),(Or.instantAnimations||Or.skipAnimations||r!=null&&r.shouldSkipAnimations||a.skipAnimations)&&(d=!0,Ah(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const u=Fu(f.keyframes,a);if(u!==void 0){Qe.update(()=>{f.onUpdate(u),f.onComplete()});return}}return a.isSync?new su(f):new x2(f)},b2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function R2(t){const e=b2.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function x1(t,e,n=1){const[i,r]=R2(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return DS(o)?parseFloat(o):o}return Dm(r)?x1(r,e,n+1):r}function nv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function jm(t,e,n,i){if(typeof e=="function"){const[r,s]=nv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=nv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ps(t,e,n){const i=t.getProps();return jm(i,e,n!==void 0?n:i.custom,t)}const _1=new Set(["width","height","top","left","right","bottom",...Fo]),Ch=t=>Array.isArray(t);function P2(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,oi(n))}function N2(t){return Ch(t)?t[t.length-1]||0:t}function L2(t,e){const n=ps(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=N2(s[o]);P2(t,o,a)}}const Yt=t=>!!(t&&t.getVelocity);function D2(t){return!!(Yt(t)&&t.add)}function bh(t,e){const n=t.getValue("willChange");if(D2(n))return n.add(e);if(!n&&Or.WillChange){const i=new Or.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Xm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const I2="framerAppearId",y1="data-"+Xm(I2);function S1(t){return t.props[y1]}function U2({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function M1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?v1(s,l):l;const c=s==null?void 0:s.reduceMotion,f=s==null?void 0:s.skipAnimations;i&&(s=i);const d=[],u=r&&t.animationState&&t.animationState.getState()[r],p=s==null?void 0:s.path;p&&p.animateVisualElement(t,a,s,n,d);for(const m in a){const M=t.getValue(m,t.latestValues[m]??null),g=a[m];if(g===void 0||u&&U2(u,m))continue;const h={delay:n,...Gm(s||{},m)};f&&(h.skipAnimations=!0);const x=M.get();if(x!==void 0&&!M.isAnimating()&&!Array.isArray(g)&&g===x&&!h.velocity){Qe.update(()=>M.set(g));continue}let S=!1;if(window.MotionHandoffAnimation){const w=S1(t);if(w){const R=window.MotionHandoffAnimation(w,m,Qe);R!==null&&(h.startTime=R,S=!0)}}bh(t,m);const y=c??t.shouldReduceMotion;M.start(Wm(m,M,g,y&&_1.has(m)?{type:!1}:h,t,S));const A=M.animation;A&&d.push(A)}if(o){const m=()=>Qe.update(()=>{o&&L2(t,o)});d.length?Promise.all(d).then(m):m()}return d}function Rh(t,e,n={}){var l;const i=ps(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(M1(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:f=0,staggerChildren:d,staggerDirection:u}=r;return F2(t,e,c,f,d,u,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,f]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>f())}else return Promise.all([s(),o(n.delay)])}function F2(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Rh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+g1(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function k2(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Rh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Rh(t,e,n);else{const r=typeof e=="function"?ps(t,e,n.custom):e;i=Promise.all(M1(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const O2={test:t=>t==="auto",parse:t=>t},E1=t=>e=>e.test(t),T1=[Uo,Ee,Ri,zi,hA,dA,O2],iv=t=>T1.find(E1(t));function B2(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||US(t):!0}const z2=new Set(["brightness","contrast","saturate","opacity"]);function V2(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Im)||[];if(!i)return t;const r=n.replace(i,"");let s=z2.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const H2=/\b([a-z-]*)\(.*?\)/gu,Ph={...ui,getAnimatableNone:t=>{const e=t.match(H2);return e?e.map(V2).join(" "):t}},Nh={...ui,getAnimatableNone:t=>{const e=ui.parse(t);return ui.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},rv={...Uo,transform:Math.round},G2={rotate:zi,pathRotation:zi,rotateX:zi,rotateY:zi,rotateZ:zi,scale:Nl,scaleX:Nl,scaleY:Nl,scaleZ:Nl,skew:zi,skewX:zi,skewY:zi,distance:Ee,translateX:Ee,translateY:Ee,translateZ:Ee,x:Ee,y:Ee,z:Ee,perspective:Ee,transformPerspective:Ee,opacity:Wa,originX:W0,originY:W0,originZ:Ee},ou={borderWidth:Ee,borderTopWidth:Ee,borderRightWidth:Ee,borderBottomWidth:Ee,borderLeftWidth:Ee,borderRadius:Ee,borderTopLeftRadius:Ee,borderTopRightRadius:Ee,borderBottomRightRadius:Ee,borderBottomLeftRadius:Ee,width:Ee,maxWidth:Ee,height:Ee,maxHeight:Ee,top:Ee,right:Ee,bottom:Ee,left:Ee,inset:Ee,insetBlock:Ee,insetBlockStart:Ee,insetBlockEnd:Ee,insetInline:Ee,insetInlineStart:Ee,insetInlineEnd:Ee,padding:Ee,paddingTop:Ee,paddingRight:Ee,paddingBottom:Ee,paddingLeft:Ee,paddingBlock:Ee,paddingBlockStart:Ee,paddingBlockEnd:Ee,paddingInline:Ee,paddingInlineStart:Ee,paddingInlineEnd:Ee,margin:Ee,marginTop:Ee,marginRight:Ee,marginBottom:Ee,marginLeft:Ee,marginBlock:Ee,marginBlockStart:Ee,marginBlockEnd:Ee,marginInline:Ee,marginInlineStart:Ee,marginInlineEnd:Ee,fontSize:Ee,backgroundPositionX:Ee,backgroundPositionY:Ee,...G2,zIndex:rv,fillOpacity:Wa,strokeOpacity:Wa,numOctaves:rv},W2={...ou,color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,filter:Ph,WebkitFilter:Ph,mask:Nh,WebkitMask:Nh},w1=t=>W2[t],j2=new Set([Ph,Nh]);function A1(t,e){let n=w1(t);return j2.has(n)||(n=ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const X2=new Set(["auto","none","0"]);function $2(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!X2.has(s)&&Ao(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=A1(n,r)}class q2 extends zm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let d=e[f];if(typeof d=="string"&&(d=d.trim(),Dm(d))){const u=x1(d,n.current);u!==void 0&&(e[f]=u),f===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!_1.has(i)||e.length!==2)return;const[r,s]=e,o=iv(r),a=iv(s),l=G0(r),c=G0(s);if(l!==c&&wr[i]){this.needsMeasurement=!0;return}if(o!==a)if(Q0(o)&&Q0(a))for(let f=0;f<e.length;f++){const d=e[f];typeof d=="string"&&(e[f]=parseFloat(d))}else wr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||B2(e[r]))&&i.push(r);i.length&&$2(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=wr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=wr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const $m=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function C1(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const Lh=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Ea(t){return IS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Co,cancel:b1}=$S(queueMicrotask,!1),ei={x:!1,y:!1};function R1(){return ei.x||ei.y}function Y2(t){return t==="x"||t==="y"?ei[t]?null:(ei[t]=!0,()=>{ei[t]=!1}):ei.x||ei.y?null:(ei.x=ei.y=!0,()=>{ei.x=ei.y=!1})}function P1(t,e){const n=C1(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function K2(t){return!(t.pointerType==="touch"||R1())}function Z2(t,e,n={}){const[i,r,s]=P1(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const f=()=>{o.removeEventListener("pointerleave",m)},d=g=>{c&&(c(g),c=void 0),f()},u=g=>{a=!1,window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",u),l&&(l=!1,d(g))},p=()=>{a=!0,window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",u,r)},m=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}d(g)}},M=g=>{if(!K2(g))return;l=!1;const h=e(o,g);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",m,r))};o.addEventListener("pointerenter",M,r),o.addEventListener("pointerdown",p,r)}),s}const N1=(t,e)=>e?t===e?!0:N1(t,e.parentElement):!1,qm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Q2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function J2(t){return Q2.has(t.tagName)||t.isContentEditable===!0}const eC=new Set(["INPUT","SELECT","TEXTAREA"]);function tC(t){return eC.has(t.tagName)||t.isContentEditable===!0}const xc=new WeakSet;function sv(t){return e=>{e.key==="Enter"&&t(e)}}function Rf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const nC=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=sv(()=>{if(xc.has(n))return;Rf(n,"down");const r=sv(()=>{Rf(n,"up")}),s=()=>Rf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function ov(t){return qm(t)&&!R1()}const av=new WeakSet;function iC(t,e,n={}){const[i,r,s]=P1(t,n),o=a=>{const l=a.currentTarget;if(!ov(a)||av.has(a))return;xc.add(l),n.stopPropagation&&av.add(a);const c=e(l,a),f={...r,capture:!0},d=(m,M)=>{window.removeEventListener("pointerup",u,f),window.removeEventListener("pointercancel",p,f),xc.has(l)&&xc.delete(l),ov(m)&&typeof c=="function"&&c(m,{success:M})},u=m=>{d(m,l===window||l===document||n.useGlobalTarget||N1(l,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",u,f),window.addEventListener("pointercancel",p,f)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),Ea(a)&&(a.addEventListener("focus",c=>nC(c,r)),!J2(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Ym(t){return IS(t)&&"ownerSVGElement"in t}const _c=new WeakMap;let vr;const L1=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Ym(i)&&"getBBox"in i?i.getBBox()[e]:i[n],rC=L1("inline","width","offsetWidth"),sC=L1("block","height","offsetHeight");function oC({target:t,borderBoxSize:e}){var n;(n=_c.get(t))==null||n.forEach(i=>{i(t,{get width(){return rC(t,e)},get height(){return sC(t,e)}})})}function aC(t){t.forEach(oC)}function lC(){typeof ResizeObserver>"u"||(vr=new ResizeObserver(aC))}function cC(t,e){vr||lC();const n=C1(t);return n.forEach(i=>{let r=_c.get(i);r||(r=new Set,_c.set(i,r)),r.add(e),vr==null||vr.observe(i)}),()=>{n.forEach(i=>{const r=_c.get(i);r==null||r.delete(e),r!=null&&r.size||vr==null||vr.unobserve(i)})}}const yc=new Set;let so;function uC(){so=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};yc.forEach(e=>e(t))},window.addEventListener("resize",so)}function fC(t){return yc.add(t),so||uC(),()=>{yc.delete(t),!yc.size&&typeof so=="function"&&(window.removeEventListener("resize",so),so=void 0)}}function Dh(t,e){return typeof t=="function"?fC(t):cC(t,e)}function D1(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return Qe.preUpdate(i,!0),()=>qn(i)}function dC(t){return Ym(t)&&t.tagName==="svg"}function hC(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=Om(r,s,o);return e?a(i):a}const pC=[...T1,Dt,ui],mC=t=>pC.find(E1(t)),lv=()=>({translate:0,scale:1,origin:0,originPoint:0}),oo=()=>({x:lv(),y:lv()}),cv=()=>({min:0,max:0}),kt=()=>({x:cv(),y:cv()}),gC=new WeakMap;function ku(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ja(t){return typeof t=="string"||Array.isArray(t)}const Km=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zm=["initial",...Km];function Ou(t){return ku(t.animate)||Zm.some(e=>ja(t[e]))}function I1(t){return!!(Ou(t)||t.variants)}function vC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Yt(r))t.addValue(i,r);else if(Yt(s))t.addValue(i,oi(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,oi(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Ih={current:null},U1={current:!1},xC=typeof window<"u";function _C(){if(U1.current=!0,!!xC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ih.current=t.matches;t.addEventListener("change",e),e()}else Ih.current=!1}const uv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let au={};function F1(t){au=t}function yC(){return au}class SC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=zm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=un.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Qe.render(this.render,!1,!0))};const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Ou(n),this.isVariantNode=I1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const m=u[p];c[p]!==void 0&&Yt(m)&&m.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,gC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(U1.current||_C(),this.shouldReduceMotion=Ih.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),qn(this.notifyUpdate),qn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&m1.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:f}=n.accelerate,d=new h1({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Ln(f)}),u=o(d);this.valueSubscriptions.set(e,()=>{u(),d.cancel()});return}const i=ko.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Qe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in au){const n=au[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<uv.length;i++){const r=uv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=vC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=oi(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(DS(i)||US(i))?i=parseFloat(i):!mC(i)&&ui.test(n)&&(i=A1(e,n)),this.setBaseTarget(e,Yt(i)?i.get():i)),Yt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=jm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Yt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Rm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Co.render(this.render)}}class k1 extends SC{constructor(){super(...arguments),this.KeyframeResolver=q2}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Yt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function O1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function MC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function EC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Pf(t){return t===void 0||t===1}function Uh({scale:t,scaleX:e,scaleY:n}){return!Pf(t)||!Pf(e)||!Pf(n)}function es(t){return Uh(t)||B1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function B1(t){return fv(t.x)||fv(t.y)}function fv(t){return t&&t!=="0%"}function lu(t,e,n){const i=t-n,r=e*i;return n+r}function dv(t,e,n,i,r){return r!==void 0&&(t=lu(t,r,i)),lu(t,n,i)+e}function Fh(t,e=0,n=1,i,r){t.min=dv(t.min,e,n,i,r),t.max=dv(t.max,e,n,i,r)}function z1(t,{x:e,y:n}){Fh(t.x,e.translate,e.scale,e.originPoint),Fh(t.y,n.translate,n.scale,n.originPoint)}const hv=.999999999999,pv=1.0000000000001;function TC(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Mi(t.x,-s.scroll.offset.x),Mi(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,z1(t,o)),i&&es(s.latestValues)&&Sc(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<pv&&e.x>hv&&(e.x=1),e.y<pv&&e.y>hv&&(e.y=1)}function Mi(t,e){t.min+=e,t.max+=e}function mv(t,e,n,i,r=.5){const s=ct(t.min,t.max,r);Fh(t,e,n,s,i)}function gv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Sc(t,e,n){const i=n??t;mv(t.x,gv(e.x,i.x),e.scaleX,e.scale,e.originX),mv(t.y,gv(e.y,i.y),e.scaleY,e.scale,e.originY)}function V1(t,e){return O1(EC(t.getBoundingClientRect(),e))}function wC(t,e,n){const i=V1(t,n),{scroll:r}=e;return r&&(Mi(i.x,r.offset.x),Mi(i.y,r.offset.y)),i}const AC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},CC=Fo.length;function bC(t,e,n){let i="",r=!0;for(let o=0;o<CC;o++){const a=Fo[o],l=t[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const f=parseFloat(l);c=a.startsWith("scale")?f===1:f===0}if(!c||n){const f=Lh(l,ou[a]);if(!c){r=!1;const d=AC[a]||a;i+=`${d}(${f}) `}n&&(e[a]=f)}}const s=t.pathRotation;return s&&(r=!1,i+=`rotate(${Lh(s,ou.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Qm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ko.has(l)){o=!0;continue}else if(YS(l)){r[l]=c;continue}else{const f=Lh(c,ou[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=bC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}function H1(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function vv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const qo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ee.test(t))t=parseFloat(t);else return t;const n=vv(t,e.target.x),i=vv(t,e.target.y);return`${n}% ${i}%`}},RC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ui.parse(t);if(r.length>5)return i;const s=ui.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=ct(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},kh={borderRadius:{...qo,applyTo:[...$m]},borderTopLeftRadius:qo,borderTopRightRadius:qo,borderBottomLeftRadius:qo,borderBottomRightRadius:qo,boxShadow:RC};function G1(t,{layout:e,layoutId:n}){return ko.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!kh[t]||t==="opacity")}function Jm(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(Yt(i[a])||r&&Yt(r[a])||G1(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function PC(t){return window.getComputedStyle(t)}class NC extends k1{constructor(){super(...arguments),this.type="html",this.renderInstance=H1}readValueFromInstance(e,n){var i;if(ko.has(n))return(i=this.projection)!=null&&i.isProjecting?Sh(n):ZA(e,n);{const r=PC(e),s=(YS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return V1(e,n)}build(e,n,i){Qm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Jm(e,n,i)}}const LC={offset:"stroke-dashoffset",array:"stroke-dasharray"},DC={offset:"strokeDashoffset",array:"strokeDasharray"};function IC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?LC:DC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const UC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function W1(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,f){if(Qm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:u}=t;d.transform&&(u.transform=d.transform,delete d.transform),(u.transform||d.transformOrigin)&&(u.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),u.transform&&(u.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete d.transformBox);for(const p of UC)d[p]!==void 0&&(u[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&IC(d,r,s,o,!1)}const j1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),X1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function FC(t,e,n,i){H1(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(j1.has(r)?r:Xm(r),e.attrs[r])}function $1(t,e,n){const i=Jm(t,e,n);for(const r in t)if(Yt(t[r])||Yt(e[r])){const s=Fo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class kC extends k1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ko.has(n)){const i=w1(n);return i&&i.default||0}return n=j1.has(n)?n:Xm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return $1(e,n,i)}build(e,n,i){W1(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){FC(e,n,i,r)}mount(e){this.isSVGTag=X1(e.tagName),super.mount(e)}}const OC=Zm.length;function q1(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?q1(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<OC;n++){const i=Zm[n],r=t.props[i];(ja(r)||r===!1)&&(e[i]=r)}return e}function Y1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const BC=[...Km].reverse(),zC=Km.length;function VC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>k2(t,n,i)))}function HC(t){let e=VC(t),n=xv(),i=!0,r=!1;const s=c=>(f,d)=>{var p;const u=ps(t,d,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(u){const{transition:m,transitionEnd:M,...g}=u;f={...f,...g,...M}}return f};function o(c){e=c(t)}function a(c){const{props:f}=t,d=q1(t.parent)||{},u=[],p=new Set;let m={},M=1/0;for(let h=0;h<zC;h++){const x=BC[h],S=n[x],y=f[x]!==void 0?f[x]:d[x],A=ja(y),w=x===c?S.isActive:null;w===!1&&(M=h);let R=y===d[x]&&y!==f[x]&&A;if(R&&(i||r)&&t.manuallyAnimateOnMount&&(R=!1),S.protectedKeys={...m},!S.isActive&&w===null||!y&&!S.prevProp||ku(y)||typeof y=="boolean")continue;if(x==="exit"&&S.isActive&&w!==!0){S.prevResolvedValues&&(m={...m,...S.prevResolvedValues});continue}const _=GC(S.prevProp,y);let b=_||x===c&&S.isActive&&!R&&A||h>M&&A,N=!1;const I=Array.isArray(y)?y:[y];let C=I.reduce(s(x),{});w===!1&&(C={});const{prevResolvedValues:D={}}=S,k={...D,...C},U=L=>{b=!0,p.has(L)&&(N=!0,p.delete(L)),S.needsAnimating[L]=!0;const z=t.getValue(L);z&&(z.liveStyle=!1)};for(const L in k){const z=C[L],X=D[L];if(m.hasOwnProperty(L))continue;let K=!1;Ch(z)&&Ch(X)?K=!Y1(z,X)||_:K=z!==X,K?z!=null?U(L):p.add(L):z!==void 0&&p.has(L)?U(L):S.protectedKeys[L]=!0}S.prevProp=y,S.prevResolvedValues=C,S.isActive&&(m={...m,...C}),(i||r)&&t.blockInitialAnimation&&(b=!1);const O=R&&_;b&&(!O||N)&&u.push(...I.map(L=>{const z={type:x};if(typeof L=="string"&&(i||r)&&!O&&t.manuallyAnimateOnMount&&t.parent){const{parent:X}=t,K=ps(X,L);if(X.enteringChildren&&K){const{delayChildren:te}=K.transition||{};z.delay=g1(X.enteringChildren,t,te)}}return{animation:L,options:z}}))}if(p.size){const h={};if(typeof f.initial!="boolean"){const x=ps(t,Array.isArray(f.initial)?f.initial[0]:f.initial);x&&x.transition&&(h.transition=x.transition)}p.forEach(x=>{const S=t.getBaseTarget(x),y=t.getValue(x);y&&(y.liveStyle=!0),h[x]=S??null}),u.push({animation:h})}let g=!!u.length;return i&&(f.initial===!1||f.initial===f.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,r=!1,g?e(u):Promise.resolve()}function l(c,f){var u;if(n[c].isActive===f)return Promise.resolve();(u=t.variantChildren)==null||u.forEach(p=>{var m;return(m=p.animationState)==null?void 0:m.setActive(c,f)}),n[c].isActive=f;const d=a(c);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=xv(),r=!0}}}function GC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Y1(e,t):!1}function jr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function xv(){return{animate:jr(!0),whileInView:jr(),whileHover:jr(),whileTap:jr(),whileDrag:jr(),whileFocus:jr(),exit:jr()}}function Oh(t,e){t.min=e.min,t.max=e.max}function Kn(t,e){Oh(t.x,e.x),Oh(t.y,e.y)}function _v(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const K1=1e-4,WC=1-K1,jC=1+K1,Z1=.01,XC=0-Z1,$C=0+Z1;function fn(t){return t.max-t.min}function qC(t,e,n){return Math.abs(t-e)<=n}function yv(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=fn(n)/fn(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=WC&&t.scale<=jC||isNaN(t.scale))&&(t.scale=1),(t.translate>=XC&&t.translate<=$C||isNaN(t.translate))&&(t.translate=0)}function Ta(t,e,n,i){yv(t.x,e.x,n.x,i?i.originX:void 0),yv(t.y,e.y,n.y,i?i.originY:void 0)}function Sv(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+fn(e)}function YC(t,e,n,i){Sv(t.x,e.x,n.x,i==null?void 0:i.x),Sv(t.y,e.y,n.y,i==null?void 0:i.y)}function Mv(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+fn(e)}function cu(t,e,n,i){Mv(t.x,e.x,n.x,i==null?void 0:i.x),Mv(t.y,e.y,n.y,i==null?void 0:i.y)}function Ev(t,e,n,i,r){return t-=e,t=lu(t,1/n,i),r!==void 0&&(t=lu(t,1/r,i)),t}function KC(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ri.test(e)&&(e=parseFloat(e),e=ct(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ct(s.min,s.max,i);t===s&&(a-=e),t.min=Ev(t.min,e,n,a,r),t.max=Ev(t.max,e,n,a,r)}function Tv(t,e,[n,i,r],s,o){KC(t,e[n],e[i],e[r],e.scale,s,o)}const ZC=["x","scaleX","originX"],QC=["y","scaleY","originY"];function wv(t,e,n,i){Tv(t.x,e,ZC,n?n.x:void 0,i?i.x:void 0),Tv(t.y,e,QC,n?n.y:void 0,i?i.y:void 0)}function Av(t){return t.translate===0&&t.scale===1}function Q1(t){return Av(t.x)&&Av(t.y)}function Cv(t,e){return t.min===e.min&&t.max===e.max}function JC(t,e){return Cv(t.x,e.x)&&Cv(t.y,e.y)}function bv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function J1(t,e){return bv(t.x,e.x)&&bv(t.y,e.y)}function Rv(t){return fn(t.x)/fn(t.y)}function Pv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Si(t){return[t("x"),t("y")]}function eb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,pathRotation:d,rotateX:u,rotateY:p,skewX:m,skewY:M}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotate(${d}deg) `),u&&(i+=`rotateX(${u}deg) `),p&&(i+=`rotateY(${p}deg) `),m&&(i+=`skewX(${m}deg) `),M&&(i+=`skewY(${M}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const tb=$m.length,Nv=t=>typeof t=="string"?parseFloat(t):t,Lv=t=>typeof t=="number"||Ee.test(t);function nb(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity??1,ib(i)),t.opacityExit=ct(e.opacity??1,0,rb(i))):s&&(t.opacity=ct(e.opacity??1,n.opacity??1,i));for(let o=0;o<tb;o++){const a=$m[o];let l=Dv(e,a),c=Dv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Lv(l)===Lv(c)?(t[a]=Math.max(ct(Nv(l),Nv(c),i),0),(Ri.test(c)||Ri.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function Dv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ib=eM(0,.5,GS),rb=eM(.5,.95,En);function eM(t,e,n){return i=>i<t?0:i>e?1:n(wo(t,e,i))}function sb(t,e,n){const i=Yt(t)?t:oi(t);return i.start(Wm("",i,e,n)),i.animation}function Xa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const ob=(t,e)=>t.depth-e.depth;class ab{constructor(){this.children=[],this.isDirty=!1}add(e){Cm(this.children,e),this.isDirty=!0}remove(e){tu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ob),this.isDirty=!1,this.children.forEach(e)}}function lb(t,e){const n=un.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(qn(i),t(s-e))};return Qe.setup(i,!0),()=>qn(i)}function Mc(t){return Yt(t)?t.get():t}class cb{constructor(){this.members=[]}add(e){Cm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(tu(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(tu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Ec={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Nf=["","X","Y","Z"],ub=1e3;let fb=0;function Lf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function tM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=S1(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Qe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&tM(i)}function nM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=fb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pb),this.nodes.forEach(yb),this.nodes.forEach(Sb),this.nodes.forEach(mb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new ab)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Ym(o)&&!dC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let f,d=0;const u=()=>this.root.updateBlockedByResize=!1;Qe.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,f&&f(),f=lb(u,250),Ec.hasAnimatedSinceResize&&(Ec.hasAnimatedSinceResize=!1,this.nodes.forEach(Fv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:u,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||Ab,{onLayoutAnimationStart:M,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!J1(this.targetLayout,p),x=!d&&u;if(this.options.layoutRoot||this.resumeFrom||x||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const S={...Gm(m,"layout"),onPlay:M,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S),this.setAnimationOrigin(f,x,S.path)}else d||Fv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Mb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&tM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(vb),this.nodes.forEach(Iv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Uv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xb),this.nodes.forEach(_b),this.nodes.forEach(db),this.nodes.forEach(hb)):this.nodes.forEach(Uv),this.clearAllSnapshots();const a=un.now();Wt.delta=di(0,1e3/60,a-Wt.timestamp),Wt.timestamp=a,Wt.isProcessing=!0,Ef.update.process(Wt),Ef.preRender.process(Wt),Ef.render.process(Wt),Wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Co.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gb),this.sharedNodes.forEach(Eb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fn(this.snapshot.measuredBox.x)&&!fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=kt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Q1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||es(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Cb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return kt();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(bb))){const{scroll:f}=this.root;f&&(Mi(a.x,f.offset.x),Mi(a.y,f.offset.y))}return a}removeElementScroll(o){var l;const a=kt();if(Kn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:d,options:u}=f;f!==this.root&&d&&u.layoutScroll&&(d.wasRoot&&Kn(a,o),Mi(a.x,d.offset.x),Mi(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var f,d;const c=l||kt();Kn(c,o);for(let u=0;u<this.path.length;u++){const p=this.path[u];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Mi(c.x,-p.scroll.offset.x),Mi(c.y,-p.scroll.offset.y)),es(p.latestValues)&&Sc(c,p.latestValues,(f=p.layout)==null?void 0:f.layoutBox)}return es(this.latestValues)&&Sc(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=kt();Kn(a,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];if(!es(f.latestValues))continue;let d;f.instance&&(Uh(f.latestValues)&&f.updateSnapshot(),d=kt(),Kn(d,f.measurePageBox())),wv(a,f.latestValues,(l=f.snapshot)==null?void 0:l.layoutBox,d)}return es(this.latestValues)&&wv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!this.layout||!(f||d))return;this.resolvedRelativeTargetAt=Wt.timestamp;const u=this.getClosestProjectingParent();u&&this.linkedParentVersion!==u.layoutVersion&&!u.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&u&&u.layout?this.createRelativeTarget(u,this.layout.layoutBox,u.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=kt(),this.targetWithTransforms=kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),YC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Kn(this.target,this.layout.layoutBox),z1(this.target,this.targetDelta)):Kn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target&&this.animationProgress!==1?this.createRelativeTarget(u,this.target,u.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Uh(this.parent.latestValues)||B1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=kt(),this.relativeTargetOrigin=kt(),cu(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Kn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Wt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Kn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,u=this.treeScale.y;TC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=kt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_v(this.prevProjectionDelta.x,this.projectionDelta.x),_v(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==u||!Pv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Pv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=oo(),this.projectionDelta=oo(),this.projectionDeltaWithTransform=oo()}setAnimationOrigin(o,a=!1,l){const c=this.snapshot,f=c?c.latestValues:{},d={...this.latestValues},u=oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=kt(),m=c?c.source:void 0,M=this.layout?this.layout.source:void 0,g=m!==M,h=this.getStack(),x=!h||h.members.length<=1,S=!!(g&&!x&&this.options.crossfade===!0&&!this.path.some(wb));this.animationProgress=0;let y;const A=l==null?void 0:l.interpolateProjection(o);this.mixTargetDelta=w=>{const R=w/1e3,_=A==null?void 0:A(R);_?(u.x.translate=_.x,u.x.scale=ct(o.x.scale,1,R),u.x.origin=o.x.origin,u.x.originPoint=o.x.originPoint,u.y.translate=_.y,u.y.scale=ct(o.y.scale,1,R),u.y.origin=o.y.origin,u.y.originPoint=o.y.originPoint):(kv(u.x,o.x,R),kv(u.y,o.y,R)),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(cu(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Tb(this.relativeTarget,this.relativeTargetOrigin,p,R),y&&JC(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=kt()),Kn(y,this.relativeTarget)),g&&(this.animationValues=d,nb(d,f,this.latestValues,R,S,x)),_&&_.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=_.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qe.update(()=>{Ec.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=oi(0)),this.motionValue.jump(0,!1),this.currentAnimation=sb(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ub),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&iM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||kt();const d=fn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const u=fn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}Kn(a,l),Sc(a,f),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Lf("z",o,c,this.animationValues);for(let f=0;f<Nf.length;f++)Lf(`rotate${Nf[f]}`,o,c,this.animationValues),Lf(`skew${Nf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Mc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Mc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!es(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=eb(this.projectionDeltaWithTransform,this.treeScale,f);l&&(d=l(f,d)),o.transform=d;const{x:u,y:p}=this.projectionDelta;o.transformOrigin=`${u.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in kh){if(f[m]===void 0)continue;const{correct:M,applyTo:g,isCSSVariable:h}=kh[m],x=d==="none"?f[m]:M(f[m],c);if(g){const S=g.length;for(let y=0;y<S;y++)o[g[y]]=x}else h?this.options.visualElement.renderState.vars[m]=x:o[m]=x}this.options.layoutId&&(o.pointerEvents=c===this?Mc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Iv),this.root.sharedNodes.clear()}}}function db(t){t.updateLayout()}function hb(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")Si(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=fn(u);u.min=i[d].min,u.max=u.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Oh(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else iM(s,e.layoutBox,i)&&Si(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=fn(i[d]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=oo();Ta(a,i,e.layoutBox);const l=oo();o?Ta(l,t.applyTransform(r,!0),e.measuredBox):Ta(l,i,e.layoutBox);const c=!Q1(a);let f=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:u,layout:p}=d;if(u&&p){const m=t.options.layoutAnchor||void 0,M=kt();cu(M,e.layoutBox,u.layoutBox,m);const g=kt();cu(g,i,p.layoutBox,m),J1(M,g)||(f=!0),d.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=M,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function pb(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function mb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function gb(t){t.clearSnapshot()}function Iv(t){t.clearMeasurements()}function vb(t){t.isLayoutDirty=!0,t.updateLayout()}function Uv(t){t.isLayoutDirty=!1}function xb(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function _b(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Fv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function yb(t){t.resolveTargetDelta()}function Sb(t){t.calcProjection()}function Mb(t){t.resetSkewAndRotation()}function Eb(t){t.removeLeadSnapshot()}function kv(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Ov(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function Tb(t,e,n,i){Ov(t.x,e.x,n.x,i),Ov(t.y,e.y,n.y,i)}function wb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Ab={duration:.45,ease:[.4,0,.1,1]},Bv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),zv=Bv("applewebkit/")&&!Bv("chrome/")?Math.round:En;function Vv(t){t.min=zv(t.min),t.max=zv(t.max)}function Cb(t){Vv(t.x),Vv(t.y)}function iM(t,e,n){return t==="position"||t==="preserve-aspect"&&!qC(Rv(e),Rv(n),.2)}function bb(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const Rb=nM({attachResizeListener:(t,e)=>Xa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Df={current:void 0},rM=nM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Df.current){const t=new Rb({});t.mount(window),t.setOptions({layoutScroll:!0}),Df.current=t}return Df.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Bu=Z.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Hv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Pb(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Hv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Hv(t[r],null)}}}}function Nb(...t){return Z.useCallback(Pb(...t),t)}class Lb extends Z.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Ea(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=Ea(i)&&i.offsetWidth||0,s=Ea(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function Db({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var u;const o=Z.useId(),a=Z.useRef(null),l=Z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=Z.useContext(Bu),f=((u=t.props)==null?void 0:u.ref)??(t==null?void 0:t.ref),d=Nb(a,f);return Z.useInsertionEffect(()=>{const{width:p,height:m,top:M,left:g,right:h,bottom:x,direction:S}=l.current;if(e||s===!1||!a.current||!p||!m)return;const y=S==="rtl",A=n==="left"?y?`right: ${h}`:`left: ${g}`:y?`left: ${g}`:`right: ${h}`,w=i==="bottom"?`bottom: ${x}`:`top: ${M}`;a.current.dataset.motionPopId=o;const R=document.createElement("style");c&&(R.nonce=c);const _=r??document.head;return _.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${A}px !important;
            ${w}px !important;
          }
        `),()=>{var b;(b=a.current)==null||b.removeAttribute("data-motion-pop-id"),_.contains(R)&&_.removeChild(R)}},[e]),v.jsx(Lb,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:Z.cloneElement(t,{ref:d})})}const Ib=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const f=kr(Ub),d=Z.useId(),u=Z.useRef(n),p=Z.useRef(i);tl(()=>{u.current=n,p.current=i});let m=!0,M=Z.useMemo(()=>(m=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:g=>{f.set(g,!0);for(const h of f.values())if(!h)return;i&&i()},register:g=>(f.set(g,!1),()=>{var h;f.delete(g),!u.current&&!f.size&&((h=p.current)==null||h.call(p))})}),[n,f,i]);return s&&m&&(M={...M}),Z.useMemo(()=>{f.forEach((g,h)=>f.set(h,!1))},[n]),Z.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),t=v.jsx(Db,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),v.jsx(Uu.Provider,{value:M,children:t})};function Ub(){return new Map}function sM(t=!0){const e=Z.useContext(Uu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=Z.useId();Z.useEffect(()=>{if(t)return r(s)},[t]);const o=Z.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Ll=t=>t.key||"";function Gv(t){const e=[];return Z.Children.forEach(t,n=>{Z.isValidElement(n)&&e.push(n)}),e}const $a=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[f,d]=sM(o),u=Z.useMemo(()=>Gv(t),[t]),p=o&&!f?[]:u.map(Ll),m=Z.useRef(!0),M=Z.useRef(u),g=kr(()=>new Map),h=Z.useRef(new Set),[x,S]=Z.useState(u),[y,A]=Z.useState(u);tl(()=>{m.current=!1,M.current=u;for(let _=0;_<y.length;_++){const b=Ll(y[_]);p.includes(b)?(g.delete(b),h.current.delete(b)):g.get(b)!==!0&&g.set(b,!1)}},[y,p.length,p.join("-")]);const w=[];if(u!==x){let _=[...u];for(let b=0;b<y.length;b++){const N=y[b],I=Ll(N);p.includes(I)||(_.splice(b,0,N),w.push(N))}return s==="wait"&&w.length&&(_=w),A(Gv(_)),S(u),null}const{forceRender:R}=Z.useContext(Am);return v.jsx(v.Fragment,{children:y.map(_=>{const b=Ll(_),N=o&&!f?!1:u===y||p.includes(b),I=()=>{if(h.current.has(b))return;if(g.has(b))h.current.add(b),g.set(b,!0);else return;let C=!0;g.forEach(D=>{D||(C=!1)}),C&&(R==null||R(),A(M.current),o&&(d==null||d()),i&&i())};return v.jsx(Ib,{isPresent:N,initial:!m.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:N?void 0:I,anchorX:a,anchorY:l,children:_},b)})})},oM=Z.createContext({strict:!1}),Wv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let jv=!1;function Fb(){if(jv)return;const t={};for(const e in Wv)t[e]={isEnabled:n=>Wv[e].some(i=>!!n[i])};F1(t),jv=!0}function aM(){return Fb(),yC()}function kb(t){const e=aM();for(const n in t)e[n]={...e[n],...t[n]};F1(e)}const Ob=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function uu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ob.has(t)}let lM=t=>!uu(t);function Bb(t){typeof t=="function"&&(lM=e=>e.startsWith("on")?!uu(e):t(e))}try{Bb(require("@emotion/is-prop-valid").default)}catch{}function zb(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||Yt(t[r])||(lM(r)||n===!0&&uu(r)||!e&&!uu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const zu=Z.createContext({});function Vb(t,e){if(Ou(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ja(n)?n:void 0,animate:ja(i)?i:void 0}}return t.inherit!==!1?e:{}}function Hb(t){const{initial:e,animate:n}=Vb(t,Z.useContext(zu));return Z.useMemo(()=>({initial:e,animate:n}),[Xv(e),Xv(n)])}function Xv(t){return Array.isArray(t)?t.join(" "):t}const eg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function cM(t,e,n){for(const i in e)!Yt(e[i])&&!G1(i,n)&&(t[i]=e[i])}function Gb({transformTemplate:t},e){return Z.useMemo(()=>{const n=eg();return Qm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Wb(t,e){const n=t.style||{},i={};return cM(i,n,t),Object.assign(i,Gb(t,e)),i}function jb(t,e){const n={},i=Wb(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const uM=()=>({...eg(),attrs:{}});function Xb(t,e,n,i){const r=Z.useMemo(()=>{const s=uM();return W1(s,e,X1(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};cM(s,t.style,t),r.style={...s,...r.style}}return r}const $b=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tg(t){return typeof t!="string"||t.includes("-")?!1:!!($b.indexOf(t)>-1||/[A-Z]/u.test(t))}function qb(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??tg(t)?Xb:jb)(e,i,r,t),c=zb(e,typeof t=="string",s),f=t!==Z.Fragment?{...c,...l,ref:n}:{},{children:d}=e,u=Z.useMemo(()=>Yt(d)?d.get():d,[d]);return Z.createElement(t,{...f,children:u})}function Yb({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:Kb(n,i,r,t),renderState:e()}}function Kb(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=Mc(s[u]);let{initial:o,animate:a}=t;const l=Ou(t),c=I1(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;if(d&&typeof d!="boolean"&&!ku(d)){const u=Array.isArray(d)?d:[d];for(let p=0;p<u.length;p++){const m=jm(t,u[p]);if(m){const{transitionEnd:M,transition:g,...h}=m;for(const x in h){let S=h[x];if(Array.isArray(S)){const y=f?S.length-1:0;S=S[y]}S!==null&&(r[x]=S)}for(const x in M)r[x]=M[x]}}}return r}const fM=t=>(e,n)=>{const i=Z.useContext(zu),r=Z.useContext(Uu),s=()=>Yb(t,e,i,r);return n?s():kr(s)},Zb=fM({scrapeMotionValuesFromProps:Jm,createRenderState:eg}),Qb=fM({scrapeMotionValuesFromProps:$1,createRenderState:uM}),Jb=Symbol.for("motionComponentSymbol");function eR(t,e,n){const i=Z.useRef(n);Z.useInsertionEffect(()=>{i.current=n});const r=Z.useRef(null);return Z.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s)),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const dM=Z.createContext({});function js(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function tR(t,e,n,i,r,s){var S,y;const{visualElement:o}=Z.useContext(zu),a=Z.useContext(oM),l=Z.useContext(Uu),c=Z.useContext(Bu),f=c.reducedMotion,d=c.skipAnimations,u=Z.useRef(null),p=Z.useRef(!1);i=i||a.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f,skipAnimations:d,isSVG:s}),p.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const m=u.current,M=Z.useContext(dM);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&nR(u.current,n,r,M);const g=Z.useRef(!1);Z.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const h=n[y1],x=Z.useRef(!!h&&typeof window<"u"&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,h))&&((y=window.MotionHasOptimisedAnimation)==null?void 0:y.call(window,h)));return tl(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),Z.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,h)}),x.current=!1),m.enteringChildren=void 0)}),m}function nR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:f,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:hM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&js(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:f})}function hM(t){if(t)return t.options.allowProjection!==!1?t.projection:hM(t.parent)}function If(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&kb(i);const s=n?n==="svg":tg(t),o=s?Qb:Zb;function a(c,f){let d;const u={...Z.useContext(Bu),...c,layoutId:iR(c)},{isStatic:p}=u,m=Hb(c),M=o(c,p);if(!p&&typeof window<"u"){rR();const g=sR(u);d=g.MeasureLayout,m.visualElement=tR(t,M,u,r,g.ProjectionNode,s)}return v.jsxs(zu.Provider,{value:m,children:[d&&m.visualElement?v.jsx(d,{visualElement:m.visualElement,...u}):null,qb(t,c,eR(M,m.visualElement,f),M,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=Z.forwardRef(a);return l[Jb]=t,l}function iR({layoutId:t}){const e=Z.useContext(Am).id;return e&&t!==void 0?e+"-"+t:t}function rR(t,e){Z.useContext(oM).strict}function sR(t){const e=aM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function oR(t,e){if(typeof Proxy>"u")return If;const n=new Map,i=(s,o)=>If(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,If(o,void 0,t,e)),n.get(o))})}const aR=(t,e)=>e.isSVG??tg(t)?new kC(e):new NC(e,{allowProjection:t!==Z.Fragment});class lR extends Gr{constructor(e){super(e),e.animationState||(e.animationState=HC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ku(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let cR=0;class uR extends Gr{constructor(){super(...arguments),this.id=cR++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const l=ps(this.node,o,a);if(l){const{transition:c,transitionEnd:f,...d}=l;for(const u in d)(s=this.node.getValue(u))==null||s.jump(d[u])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const fR={animation:{Feature:lR},exit:{Feature:uR}};function sl(t){return{point:{x:t.pageX,y:t.pageY}}}const dR=t=>e=>qm(e)&&t(e,sl(e));function wa(t,e,n,i){return Xa(t,e,dR(n),i)}const pM=({current:t})=>t?t.ownerDocument.defaultView:null,$v=(t,e)=>Math.abs(t-e);function hR(t,e){const n=$v(t.x,e.x),i=$v(t.y,e.y);return Math.sqrt(n**2+i**2)}const qv=new Set(["auto","scroll"]);class mM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Dl(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Uf(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,g=hR(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!g)return;const{point:h}=m,{timestamp:x}=Wt;this.history.push({...h,timestamp:x});const{onStart:S,onMove:y}=this.handlers;M||(S&&S(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,m)},this.handlePointerMove=(m,M)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Dl(M,this.transformPagePoint),Qe.update(this.updatePoint,!0)},this.handlePointerUp=(m,M)=>{this.end();const{onEnd:g,onSessionEnd:h,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Uf(m.type==="pointercancel"?this.lastMoveEventInfo:Dl(M,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,S),h&&h(m,S)},!qm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=sl(e),c=Dl(l,this.transformPagePoint),{point:f}=c,{timestamp:d}=Wt;this.history=[{...f,timestamp:d}];const{onSessionStart:u}=n;u&&u(e,Uf(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=nl(wa(this.contextWindow,"pointermove",this.handlePointerMove,p),wa(this.contextWindow,"pointerup",this.handlePointerUp,p),wa(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(qv.has(i.overflowX)||qv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),Qe.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qn(this.updatePoint)}}function Dl(t,e){return e?{point:e(t.point)}:t}function Yv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Uf({point:t},e){return{point:t,delta:Yv(t,gM(e)),offset:Yv(t,pR(e)),velocity:mR(e,.1)}}function pR(t){return t[0]}function gM(t){return t[t.length-1]}function mR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=gM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ln(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Ln(e)*2&&(i=t[1]);const s=Wn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function gR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function Kv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function vR(t,{top:e,left:n,bottom:i,right:r}){return{x:Kv(t.x,n,r),y:Kv(t.y,e,i)}}function Zv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function xR(t,e){return{x:Zv(t.x,e.x),y:Zv(t.y,e.y)}}function _R(t,e){let n=.5;const i=fn(t),r=fn(e);return r>i?n=wo(e.min,e.max-i,t.min):i>r&&(n=wo(t.min,t.max-r,e.min)),di(0,1,n)}function yR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Bh=.35;function SR(t=Bh){return t===!1?t=0:t===!0&&(t=Bh),{x:Qv(t,"left","right"),y:Qv(t,"top","bottom")}}function Qv(t,e,n){return{min:Jv(t,e),max:Jv(t,n)}}function Jv(t,e){return typeof t=="number"?t:t[e]||0}const MR=new WeakMap;class ER{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=kt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(sl(d).point),this.stopAnimation()},o=(d,u)=>{const{drag:p,dragPropagation:m,onDragStart:M}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Y2(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=u,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Si(h=>{let x=this.getAxisMotionValue(h).get()||0;if(Ri.test(x)){const{projection:S}=this.visualElement;if(S&&S.layout){const y=S.layout.layoutBox[h];y&&(x=fn(y)*(parseFloat(x)/100))}}this.originPoint[h]=x}),M&&Qe.update(()=>M(d,u),!1,!0),bh(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(d,u)=>{this.latestPointerEvent=d,this.latestPanInfo=u;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:M,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=u;if(m&&this.currentDirection===null){this.currentDirection=wR(h),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",u.point,h),this.updateAxis("y",u.point,h),this.visualElement.render(),g&&Qe.update(()=>g(d,u),!1,!0)},l=(d,u)=>{this.latestPointerEvent=d,this.latestPanInfo=u,this.stop(d,u),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new mM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:pM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Qe.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Il(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=gR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&js(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=vR(i.layoutBox,e):this.constraints=!1,this.elastic=SR(n),r!==this.constraints&&!js(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Si(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=yR(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!js(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=wC(i,r.root,this.visualElement.getTransformPagePoint());let o=xR(r.layout.layoutBox,s);if(n){const a=n(MC(o));this.hasMutatedConstraints=!!a,a&&(o=O1(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Si(f=>{if(!Il(f,n,this.currentDirection))return;let d=l&&l[f]||{};(o===!0||o===f)&&(d={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return bh(this.visualElement,e),i.start(Wm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Si(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Si(n=>{const{drag:i}=this.getProps();if(!Il(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-ct(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!js(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Si(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=_R({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Si(o=>{if(!Il(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ct(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;MR.set(this.visualElement,this);const e=this.visualElement.current,n=wa(e,"pointerdown",c=>{const{drag:f,dragListener:d=!0}=this.getProps(),u=c.target,p=u!==e&&tC(u);f&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();js(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=TR(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Qe.read(r);const a=Xa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f})=>{this.isDragging&&f&&(Si(d=>{const u=this.getAxisMotionValue(d);u&&(this.originPoint[d]+=c[d].translate,u.set(u.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Bh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ex(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function TR(t,e,n){const i=Dh(t,ex(n)),r=Dh(e,ex(n));return()=>{i(),r()}}function Il(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function wR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class AR extends Gr{constructor(e){super(e),this.removeGroupControls=En,this.removeListeners=En,this.controls=new ER(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||En}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ff=t=>(e,n)=>{t&&Qe.update(()=>t(e,n),!1,!0)};class CR extends Gr{constructor(){super(...arguments),this.removePointerDownListener=En}onPointerDown(e){this.session=new mM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ff(e),onStart:Ff(n),onMove:Ff(i),onEnd:(s,o)=>{delete this.session,r&&Qe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=wa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let kf=!1;class bR extends Z.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),kf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ec.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),kf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Qe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Co.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;kf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function vM(t){const[e,n]=sM(),i=Z.useContext(Am);return v.jsx(bR,{...t,layoutGroup:i,switchLayoutGroup:Z.useContext(dM),isPresent:e,safeToRemove:n})}const RR={pan:{Feature:CR},drag:{Feature:AR,ProjectionNode:rM,MeasureLayout:vM}};function tx(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Qe.postRender(()=>s(e,sl(e)))}class PR extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=Z2(e,(n,i)=>(tx(this.node,i,"Start"),r=>tx(this.node,r,"End"))))}unmount(){}}class NR extends Gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nl(Xa(this.node.current,"focus",()=>this.onFocus()),Xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function nx(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Qe.postRender(()=>s(e,sl(e)))}class LR extends Gr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=iC(e,(r,s)=>(nx(this.node,s,"Start"),(o,{success:a})=>nx(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const zh=new WeakMap,Of=new WeakMap,DR=t=>{const e=zh.get(t.target);e&&e(t)},IR=t=>{t.forEach(DR)};function UR({root:t,...e}){const n=t||document;Of.has(n)||Of.set(n,{});const i=Of.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(IR,{root:t,...e})),i[r]}function FR(t,e,n){const i=UR(e);return zh.set(t,n),i.observe(t),()=>{zh.delete(t),i.unobserve(t)}}const kR={some:0,all:1};class OR extends Gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:kR[r]},a=c=>{const{isIntersecting:f}=c;if(this.isInView===f||(this.isInView=f,s&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:d,onViewportLeave:u}=this.node.getProps(),p=f?d:u;p&&p(c)};this.stopObserver=FR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(BR(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function BR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const zR={inView:{Feature:OR},tap:{Feature:LR},focus:{Feature:NR},hover:{Feature:PR}},VR={layout:{ProjectionNode:rM,MeasureLayout:vM}},HR={...fR,...zR,...RR,...VR},bn=oR(HR,aR);function fu(t){return typeof window>"u"?!1:t?c1():Hm()}const GR=50,ix=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),WR=()=>({time:0,x:ix(),y:ix()}),jR={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function rx(t,e,n,i){const r=n[e],{length:s,position:o}=jR[e],a=r.current,l=n.time;r.current=Math.abs(t[`scroll${o}`]),r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=wo(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>GR?0:Pm(r.current-a,c)}function XR(t,e,n){rx(t,"x",e,n),rx(t,"y",e,n),e.time=n}function $R(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(Ea(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Vh={start:0,center:.5,end:1};function sx(t,e,n=0){let i=0;if(t in Vh&&(t=Vh[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const qR=[0,0];function YR(t,e,n,i){let r=Array.isArray(t)?t:qR,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Vh[t]?t:"0"]),s=sx(r[0],n,i),o=sx(r[1],e),s-o}const la={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},KR={x:0,y:0};function ZR(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function QR(t,e,n){const{offset:i=la.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?$R(r,t):KR,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:ZR(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let f=!e[s].interpolate;const d=i.length;for(let u=0;u<d;u++){const p=YR(i[u],c[o],l[o],a[s]);!f&&p!==e[s].interpolatorOffsets[u]&&(f=!0),e[s].offset[u]=p}f&&(e[s].interpolate=Om(e[s].offset,r1(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=di(0,1,e[s].interpolate(e[s].current))}function JR(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function e3(t,e,n,i={}){return{measure:r=>{JR(t,i.target,n),XR(t,n,r),(i.offset||i.target)&&QR(t,n,i)},notify:()=>e(n)}}const Rs=new WeakMap,ox=new WeakMap,Bf=new WeakMap,ax=new WeakMap,Ul=new WeakMap,lx=t=>t===document.scrollingElement?window:t;function xM(t,{container:e=document.scrollingElement,trackContentSize:n=!1,...i}={}){if(!e)return En;let r=Bf.get(e);r||(r=new Set,Bf.set(e,r));const s=WR(),o=e3(e,t,s,i);if(r.add(o),!Rs.has(e)){const l=()=>{for(const u of r)u.measure(Wt.timestamp);Qe.preUpdate(c)},c=()=>{for(const u of r)u.notify()},f=()=>Qe.read(l);Rs.set(e,f);const d=lx(e);window.addEventListener("resize",f),e!==document.documentElement&&ox.set(e,Dh(e,f)),d.addEventListener("scroll",f),f()}if(n&&!Ul.has(e)){const l=Rs.get(e),c={width:e.scrollWidth,height:e.scrollHeight};ax.set(e,c);const f=()=>{const u=e.scrollWidth,p=e.scrollHeight;(c.width!==u||c.height!==p)&&(l(),c.width=u,c.height=p)},d=Qe.read(f,!0);Ul.set(e,d)}const a=Rs.get(e);return Qe.read(a,!1,!0),()=>{var d;qn(a);const l=Bf.get(e);if(!l||(l.delete(o),l.size))return;const c=Rs.get(e);Rs.delete(e),c&&(lx(e).removeEventListener("scroll",c),(d=ox.get(e))==null||d(),window.removeEventListener("resize",c));const f=Ul.get(e);f&&(qn(f),Ul.delete(e)),ax.delete(e)}}const t3=[[la.Enter,"entry"],[la.Exit,"exit"],[la.Any,"cover"],[la.All,"contain"]],cx={start:0,end:1};function n3(t){const e=t.trim().split(/\s+/);if(e.length!==2)return;const n=cx[e[0]],i=cx[e[1]];if(!(n===void 0||i===void 0))return[n,i]}function i3(t){if(t.length!==2)return;const e=[];for(const n of t)if(Array.isArray(n))e.push(n);else if(typeof n=="string"){const i=n3(n);if(!i)return;e.push(i)}else return;return e}function r3(t,e){const n=i3(t);if(!n)return!1;for(let i=0;i<2;i++){const r=n[i],s=e[i];if(r[0]!==s[0]||r[1]!==s[1])return!1}return!0}function ng(t){if(!t)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,n]of t3)if(r3(t,e))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const ux=new Map;function fx(t){const e={value:0},n=xM(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function _M({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);let r=ux.get(e);r||(r=new Map,ux.set(e,r));const s=n.target??"self";let o=r.get(s);o||(o={},r.set(s,o));const a=i+(n.offset??[]).join(",");return o[a]||(n.target&&fu(n.target)?ng(n.offset)?o[a]=new ViewTimeline({subject:n.target,axis:i}):o[a]=fx({container:e,...n}):fu()?o[a]=new ScrollTimeline({source:e,axis:i}):o[a]=fx({container:e,...n})),o[a]}function s3(t,e){const n=_M(e),i=e.target?ng(e.offset):void 0,r=e.target?fu(e.target)&&!!i:fu();return t.attachTimeline({timeline:r?n:void 0,...i&&r&&{rangeStart:i.rangeStart,rangeEnd:i.rangeEnd},observe:s=>(s.pause(),D1(o=>{s.time=s.iterationDuration*o},n))})}function o3(t){return t&&(t.target||t.offset)}function a3(t){return t.length===2}function l3(t,e){return a3(t)||o3(e)?xM(n=>{t(n[e.axis].progress,n)},e):D1(t,_M(e))}function yM(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return En;const r={axis:e,container:n,...i};return typeof t=="function"?l3(t,r):s3(t,r)}const c3=()=>({scrollX:oi(0),scrollY:oi(0),scrollXProgress:oi(0),scrollYProgress:oi(0)}),ao=t=>t?!t.current:!1;function dx(t,e,n,i){return{factory:r=>{let s;const o=()=>{if(ao(n)||ao(i)){Co.read(o);return}s=yM(r,{...e,axis:t,container:(n==null?void 0:n.current)||void 0,target:(i==null?void 0:i.current)||void 0})};return Co.read(o),()=>{b1(o),s==null||s()}},times:[0,1],keyframes:[0,1],ease:r=>r,duration:1}}function u3(t,e){return typeof window>"u"?!1:t?c1()&&!!ng(e):Hm()}function f3({container:t,target:e,...n}={}){const i=kr(c3);u3(e,n.offset)&&(i.scrollXProgress.accelerate=dx("x",n,t,e),i.scrollYProgress.accelerate=dx("y",n,t,e));const r=Z.useRef(null),s=Z.useRef(!1),o=Z.useCallback(()=>(r.current=yM((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return tl(()=>{if(s.current=!1,ao(t)||ao(e)){s.current=!0;return}else return o()},[o]),Z.useEffect(()=>{if(!s.current)return;let a;const l=()=>{const c=ao(t),f=ao(e);!c&&!f&&(a=o())};return Co.read(l),()=>{b1(l),a==null||a()}},[o]),i}function d3(t){const e=kr(()=>oi(t)),{isStatic:n}=Z.useContext(Bu);if(n){const[,i]=Z.useState(t);Z.useEffect(()=>e.on("change",i),[])}return e}function SM(t,e){const n=d3(e()),i=()=>n.set(e());return i(),tl(()=>{const r=()=>Qe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),qn(i)}}),n}function h3(t){Ma.current=[],t();const e=SM(Ma.current,t);return Ma.current=void 0,e}function Tc(t,e,n,i){if(typeof t=="function")return h3(t);if(n!==void 0&&!Array.isArray(n)&&typeof e!="function")return p3(t,e,n,i);const o=typeof e=="function"?e:hC(e,n,i),a=Array.isArray(t)?hx(t,o):hx([t],([c])=>o(c)),l=Array.isArray(t)?void 0:t.accelerate;return l&&!l.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(i==null?void 0:i.clamp)!==!1&&(a.accelerate={...l,times:e,keyframes:n,isTransformed:!0}),a}function hx(t,e){const n=kr(()=>[]);return SM(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function p3(t,e,n,i){const r=kr(()=>Object.keys(n)),s=kr(()=>({}));for(const o of r)s[o]=Tc(t,e,n[o],i);return s}var px="1.3.25";function MM(t,e,n){return Math.max(t,Math.min(e,n))}function m3(t,e,n){return(1-n)*t+n*e}function g3(t,e,n,i){return m3(t,e,1-Math.exp(-n*i))}function v3(t,e){return(t%e+e)%e}var x3=class{constructor(){Ce(this,"isRunning",!1);Ce(this,"value",0);Ce(this,"from",0);Ce(this,"to",0);Ce(this,"currentTime",0);Ce(this,"lerp");Ce(this,"duration");Ce(this,"easing");Ce(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=MM(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=g3(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function _3(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var y3=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Ce(this,"width",0);Ce(this,"height",0);Ce(this,"scrollHeight",0);Ce(this,"scrollWidth",0);Ce(this,"debouncedResize");Ce(this,"wrapperResizeObserver");Ce(this,"contentResizeObserver");Ce(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ce(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ce(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=_3(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},EM=class{constructor(){Ce(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const S3=100/6,cr={passive:!1};function mx(t,e){return t===1?S3:t===2?e:1}var M3=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Ce(this,"touchStart",{x:0,y:0});Ce(this,"lastDelta",{x:0,y:0});Ce(this,"window",{width:0,height:0});Ce(this,"emitter",new EM);Ce(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Ce(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});Ce(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Ce(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=mx(i,this.window.width),s=mx(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Ce(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,cr),this.element.addEventListener("touchstart",this.onTouchStart,cr),this.element.addEventListener("touchmove",this.onTouchMove,cr),this.element.addEventListener("touchend",this.onTouchEnd,cr)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,cr),this.element.removeEventListener("touchstart",this.onTouchStart,cr),this.element.removeEventListener("touchmove",this.onTouchMove,cr),this.element.removeEventListener("touchend",this.onTouchEnd,cr)}};const gx=t=>Math.min(1,1.001-2**(-10*t));var E3=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:M=!0,prevent:g,virtualScroll:h,overscroll:x=!0,autoRaf:S=!1,anchors:y=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:_=R,stopInertiaOnNavigate:b=!1}={}){Ce(this,"_isScrolling",!1);Ce(this,"_isStopped",!1);Ce(this,"_isLocked",!1);Ce(this,"_preventNextNativeScrollEvent",!1);Ce(this,"_resetVelocityTimeout",null);Ce(this,"_rafId",null);Ce(this,"_isDraggingSelection",!1);Ce(this,"isTouching");Ce(this,"isIos");Ce(this,"time",0);Ce(this,"userData",{});Ce(this,"lastVelocity",0);Ce(this,"velocity",0);Ce(this,"direction",0);Ce(this,"options");Ce(this,"targetScroll");Ce(this,"animatedScroll");Ce(this,"animate",new x3);Ce(this,"emitter",new EM);Ce(this,"dimensions");Ce(this,"virtualScroll");Ce(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Ce(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ce(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Ce(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});Ce(this,"onPointerDown",t=>{t.button===1&&this.reset()});Ce(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,f=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(m=>{var M,g,h,x,S;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((M=m.hasAttribute)==null?void 0:M.call(m,"data-lenis-prevent"))||f==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||f==="horizontal"&&((h=m.hasAttribute)==null?void 0:h.call(m,"data-lenis-prevent-horizontal"))||r&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-touch"))||s&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation==="both"?d=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const u=r&&this.options.syncTouch,p=r&&i.type==="touchend";p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ce(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ce(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=px,window.lenis||(window.lenis={}),window.lenis.version=px,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof a=="number"&&typeof l!="function"?l=gx:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:f,gestureOrientation:u,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:M,prevent:g,virtualScroll:h,overscroll:x,autoRaf:S,anchors:y,autoToggle:A,allowNestedScroll:w,naiveDimensions:_,stopInertiaOnNavigate:b},this.dimensions=new y3(t,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new M3(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=o,l=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!f)return;let u=t,p=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(m=u),m){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?y.left:y.top}const M=m.getBoundingClientRect(),g=getComputedStyle(m),h=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),x=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);u=(this.isHorizontal?M.left:M.top)+this.animatedScroll-(Number.isNaN(h)?0:h)-(Number.isNaN(S)?0:S)}}if(typeof u=="number"){if(u+=p,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=MM(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=gx:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,M)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),M||this.emit(),M&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,o,a,l,c,f,d,u,p,m;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(t);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),f=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=t.scrollWidth,u=t.scrollHeight,p=t.clientWidth,m=t.clientHeight,a=d>p,l=u>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=u,r.clientWidth=p,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=f}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,u=r.scrollHeight,p=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const M=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let g,h,x,S,y,A;if(M==="horizontal")g=Math.round(t.scrollLeft),h=d-p,x=e,S=s,y=a,A=c;else if(M==="vertical")g=Math.round(t.scrollTop),h=u-m,x=n,S=o,y=l,A=f;else return!1;return!A&&(g>=h||g<=0)?!0:(x>0?g<h:g>0)&&S&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?v3(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ig="185",T3=0,vx=1,w3=2,wc=1,A3=2,ca=3,Br=0,Tn=1,Gi=2,qi=0,mo=1,xx=2,_x=3,yx=4,C3=5,ns=100,b3=101,R3=102,P3=103,N3=104,L3=200,D3=201,I3=202,U3=203,Hh=204,Gh=205,F3=206,k3=207,O3=208,B3=209,z3=210,V3=211,H3=212,G3=213,W3=214,Wh=0,jh=1,Xh=2,bo=3,$h=4,qh=5,Yh=6,Kh=7,TM=0,j3=1,X3=2,Pi=0,wM=1,AM=2,CM=3,bM=4,RM=5,PM=6,NM=7,LM=300,ys=301,Ro=302,zf=303,Vf=304,Vu=306,Zh=1e3,Xi=1001,Qh=1002,Kt=1003,$3=1004,Fl=1005,on=1006,Hf=1007,cs=1008,Hn=1009,DM=1010,IM=1011,qa=1012,rg=1013,Di=1014,wi=1015,tr=1016,sg=1017,og=1018,Ya=1020,UM=35902,FM=35899,kM=1021,OM=1022,ai=1023,nr=1026,us=1027,BM=1028,ag=1029,Ss=1030,lg=1031,cg=1033,Ac=33776,Cc=33777,bc=33778,Rc=33779,Jh=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,op=37488,ap=37489,du=37490,lp=37491,cp=37808,up=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,vp=37816,xp=37817,_p=37818,yp=37819,Sp=37820,Mp=37821,Ep=36492,Tp=36494,wp=36495,Ap=36283,Cp=36284,hu=36285,bp=36286,q3=3200,Sx=0,Y3=1,Mr="",Bn="srgb",pu="srgb-linear",mu="linear",it="srgb",Ps=7680,Mx=519,K3=512,Z3=513,Q3=514,ug=515,J3=516,eP=517,fg=518,tP=519,Ex=35044,Tx="300 es",Ai=2e3,gu=2001;function nP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iP(){const t=vu("canvas");return t.style.display="block",t}const wx={};function Ax(...t){const e="THREE."+t.shift();console.log(e,...t)}function zM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=zM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=zM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function go(...t){const e=t.join(" ");e in wx||(wx[e]=!0,Ue(...t))}function rP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sP={[Wh]:jh,[Xh]:Yh,[$h]:Kh,[bo]:qh,[jh]:Wh,[Yh]:Xh,[Kh]:$h,[qh]:bo};class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,Rp=180/Math.PI;function ol(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function oP(t,e){return(t%e+e)%e}function Wf(t,e,n){return(1-n)*t+n*e}function Yo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _g=class _g{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_g.prototype.isVector2=!0;let Je=_g;class Oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],p=s[o+1],m=s[o+2],M=s[o+3];if(d!==M||l!==u||c!==p||f!==m){let g=l*u+c*p+f*m+d*M;g<0&&(u=-u,p=-p,m=-m,M=-M,g=-g);let h=1-a;if(g<.9995){const x=Math.acos(g),S=Math.sin(x);h=Math.sin(h*x)/S,a=Math.sin(a*x)/S,l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+M*a}else{l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+M*a;const x=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=x,c*=x,f*=x,d*=x}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+f*d+l*p-c*u,e[n+1]=l*m+f*u+c*d-a*p,e[n+2]=c*m+f*p+a*u-l*d,e[n+3]=f*m-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"YXZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"ZXY":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"ZYX":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"YZX":this._x=u*f*d+c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d-u*p*m;break;case"XZY":this._x=u*f*d-c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d+u*p*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yg=class yg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yg.prototype.isVector3=!0;let q=yg;const jf=new q,Cx=new Oo,Sg=class Sg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],m=i[8],M=r[0],g=r[3],h=r[6],x=r[1],S=r[4],y=r[7],A=r[2],w=r[5],R=r[8];return s[0]=o*M+a*x+l*A,s[3]=o*g+a*S+l*w,s[6]=o*h+a*y+l*R,s[1]=c*M+f*x+d*A,s[4]=c*g+f*S+d*w,s[7]=c*h+f*y+d*R,s[2]=u*M+p*x+m*A,s[5]=u*g+p*S+m*w,s[8]=u*h+p*y+m*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,p=c*s-o*l,m=n*d+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=d*M,e[1]=(r*c-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=u*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xf.makeScale(e,n)),this}rotate(e){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xf.makeRotation(-e)),this}translate(e,n){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sg.prototype.isMatrix3=!0;let ke=Sg;const Xf=new ke,bx=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rx=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aP(){const t={enabled:!0,workingColorSpace:pu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=vo(r.r),r.g=vo(r.g),r.b=vo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?mu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[pu]:{primaries:e,whitePoint:i,transfer:mu,toXYZ:bx,fromXYZ:Rx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:bx,fromXYZ:Rx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const Xe=aP();function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ns;class lP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ns===void 0&&(Ns=vu("canvas")),Ns.width=e.width,Ns.height=e.height;const r=Ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ns}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yi(n[i]/255)*255):n[i]=Yi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cP=0;class dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($f(r[o].image)):s.push($f(r[o]))}else s=$f(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $f(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let uP=0;const qf=new q;class hn extends ws{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Xi,r=Xi,s=on,o=cs,a=ai,l=Hn,c=hn.DEFAULT_ANISOTROPY,f=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uP++}),this.uuid=ol(),this.name="",this.source=new dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qf).x}get height(){return this.source.getSize(qf).y}get depth(){return this.source.getSize(qf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==LM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=LM;hn.DEFAULT_ANISOTROPY=1;const Mg=class Mg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],m=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,A=(h+1)/2,w=(f+u)/4,R=(d+M)/4,_=(m+g)/4;return S>y&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=R/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=_/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-m)*(g-m)+(d-M)*(d-M)+(u-f)*(u-f));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-M)/x,this.z=(u-f)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mg.prototype.isVector4=!0;let At=Mg;class fP extends ws{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new dg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends fP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class VM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dP extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xu=class xu{constructor(e,n,i,r,s,o,a,l,c,f,d,u,p,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,M,g)}set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,M,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=m,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*d,m=a*f,M=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=u-M*c,n[9]=-a*l,n[2]=M-u*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,m=c*f,M=c*d;n[0]=u+M*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-m,n[6]=M+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,m=c*f,M=c*d;n[0]=u-M*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*f,n[9]=M-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*d,m=a*f,M=a*d;n[0]=l*f,n[4]=m*c-p,n[8]=u*c+M,n[1]=l*d,n[5]=M*c+u,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,m=a*l,M=a*c;n[0]=l*f,n[4]=M-u*d,n[8]=m*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+m,n[10]=u-M*d}else if(e.order==="XZY"){const u=o*l,p=o*c,m=a*l,M=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+M,n[5]=o*f,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*f,n[10]=M*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hP,e,pP)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),ur.crossVectors(i,An),ur.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ur.crossVectors(i,An)),ur.normalize(),kl.crossVectors(An,ur),r[0]=ur.x,r[4]=kl.x,r[8]=An.x,r[1]=ur.y,r[5]=kl.y,r[9]=An.y,r[2]=ur.z,r[6]=kl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],m=i[2],M=i[6],g=i[10],h=i[14],x=i[3],S=i[7],y=i[11],A=i[15],w=r[0],R=r[4],_=r[8],b=r[12],N=r[1],I=r[5],C=r[9],D=r[13],k=r[2],U=r[6],O=r[10],H=r[14],L=r[3],z=r[7],X=r[11],K=r[15];return s[0]=o*w+a*N+l*k+c*L,s[4]=o*R+a*I+l*U+c*z,s[8]=o*_+a*C+l*O+c*X,s[12]=o*b+a*D+l*H+c*K,s[1]=f*w+d*N+u*k+p*L,s[5]=f*R+d*I+u*U+p*z,s[9]=f*_+d*C+u*O+p*X,s[13]=f*b+d*D+u*H+p*K,s[2]=m*w+M*N+g*k+h*L,s[6]=m*R+M*I+g*U+h*z,s[10]=m*_+M*C+g*O+h*X,s[14]=m*b+M*D+g*H+h*K,s[3]=x*w+S*N+y*k+A*L,s[7]=x*R+S*I+y*U+A*z,s[11]=x*_+S*C+y*O+A*X,s[15]=x*b+S*D+y*H+A*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],m=e[3],M=e[7],g=e[11],h=e[15],x=l*p-c*u,S=a*p-c*d,y=a*u-l*d,A=o*p-c*f,w=o*u-l*f,R=o*d-a*f;return n*(M*x-g*S+h*y)-i*(m*x-g*A+h*w)+r*(m*S-M*A+h*R)-s*(m*y-M*w+g*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],m=e[12],M=e[13],g=e[14],h=e[15],x=n*a-i*o,S=n*l-r*o,y=n*c-s*o,A=i*l-r*a,w=i*c-s*a,R=r*c-s*l,_=f*M-d*m,b=f*g-u*m,N=f*h-p*m,I=d*g-u*M,C=d*h-p*M,D=u*h-p*g,k=x*D-S*C+y*I+A*N-w*b+R*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=(a*D-l*C+c*I)*U,e[1]=(r*C-i*D-s*I)*U,e[2]=(M*R-g*w+h*A)*U,e[3]=(u*w-d*R-p*A)*U,e[4]=(l*N-o*D-c*b)*U,e[5]=(n*D-r*N+s*b)*U,e[6]=(g*y-m*R-h*S)*U,e[7]=(f*R-u*y+p*S)*U,e[8]=(o*C-a*N+c*_)*U,e[9]=(i*N-n*C-s*_)*U,e[10]=(m*w-M*y+h*x)*U,e[11]=(d*y-f*w-p*x)*U,e[12]=(a*b-o*I-l*_)*U,e[13]=(n*I-i*b+r*_)*U,e[14]=(M*S-m*A-g*x)*U,e[15]=(f*A-d*S+u*x)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,p=s*f,m=s*d,M=o*f,g=o*d,h=a*d,x=l*c,S=l*f,y=l*d,A=i.x,w=i.y,R=i.z;return r[0]=(1-(M+h))*A,r[1]=(p+y)*A,r[2]=(m-S)*A,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(u+h))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(m+S)*R,r[9]=(g-x)*R,r[10]=(1-(u+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ls.set(r[0],r[1],r[2]).length();const a=Ls.set(r[4],r[5],r[6]).length(),l=Ls.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Zn.copy(this);const c=1/o,f=1/a,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,M;if(l)m=s/(o-s),M=o*s/(o-s);else if(a===Ai)m=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===gu)m=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,M;if(l)m=1/(o-s),M=o/(o-s);else if(a===Ai)m=-2/(o-s),M=-(o+s)/(o-s);else if(a===gu)m=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};xu.prototype.isMatrix4=!0;let Ut=xu;const Ls=new q,Zn=new Ut,hP=new q(0,0,0),pP=new q(1,1,1),ur=new q,kl=new q,An=new q,Px=new Ut,Nx=new Oo;class Ms{constructor(e=0,n=0,i=0,r=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Px.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Px,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";let HM=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mP=0;const Lx=new q,Ds=new Oo,Ui=new Ut,Ol=new q,Ko=new q,gP=new q,vP=new Oo,Dx=new q(1,0,0),Ix=new q(0,1,0),Ux=new q(0,0,1),Fx={type:"added"},xP={type:"removed"},Is={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Dn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mP++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new q,n=new Ms,i=new Oo,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ke}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new HM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Dx,e)}rotateY(e){return this.rotateOnAxis(Ix,e)}rotateZ(e){return this.rotateOnAxis(Ux,e)}translateOnAxis(e,n){return Lx.copy(e).applyQuaternion(this.quaternion),this.position.add(Lx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dx,e)}translateY(e){return this.translateOnAxis(Ix,e)}translateZ(e){return this.translateOnAxis(Ux,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ol.copy(e):Ol.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ko,Ol,this.up):Ui.lookAt(Ol,Ko,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Ds.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fx),Is.child=e,this.dispatchEvent(Is),Is.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xP),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fx),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,gP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,vP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new q(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bl extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _P={type:"move"};class Kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_P)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const GM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Zf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=oP(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=GM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Xe.workingToColorSpace(rn.copy(this),e),Math.round($e(rn.r*255,0,255))*65536+Math.round($e(rn.g*255,0,255))*256+Math.round($e(rn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Bn){Xe.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(zl);const i=Wf(fr.h,zl.h,n),r=Wf(fr.s,zl.s,n),s=Wf(fr.l,zl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new tt;tt.NAMES=GM;class yP extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qn=new q,Fi=new q,Qf=new q,ki=new q,Us=new q,Fs=new q,kx=new q,Jf=new q,ed=new q,td=new q,nd=new At,id=new At,rd=new At;class si{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Fi.subVectors(i,n),Qf.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Fi),l=Qn.dot(Qf),c=Fi.dot(Fi),f=Fi.dot(Qf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*f)*u,m=(o*f-a*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,n),id.fromBufferAttribute(e,i),rd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nd,s.x),o.addScaledVector(id,s.y),o.addScaledVector(rd,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Fi.subVectors(e,n),Qn.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),Qn.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Fs.subVectors(s,i),Jf.subVectors(e,i);const l=Us.dot(Jf),c=Fs.dot(Jf);if(l<=0&&c<=0)return n.copy(i);ed.subVectors(e,r);const f=Us.dot(ed),d=Fs.dot(ed);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Us,o);td.subVectors(e,s);const p=Us.dot(td),m=Fs.dot(td);if(m>=0&&p<=m)return n.copy(s);const M=p*c-l*m;if(M<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Fs,a);const g=f*m-p*d;if(g<=0&&d-f>=0&&p-m>=0)return kx.subVectors(s,r),a=(d-f)/(d-f+(p-m)),n.copy(r).addScaledVector(kx,a);const h=1/(g+M+u);return o=M*h,a=u*h,n.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class al{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vl.copy(i.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Hl.subVectors(this.max,Zo),ks.subVectors(e.a,Zo),Os.subVectors(e.b,Zo),Bs.subVectors(e.c,Zo),dr.subVectors(Os,ks),hr.subVectors(Bs,Os),Xr.subVectors(ks,Bs);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Xr.z,Xr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Xr.z,0,-Xr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Xr.y,Xr.x,0];return!sd(n,ks,Os,Bs,Hl)||(n=[1,0,0,0,1,0,0,0,1],!sd(n,ks,Os,Bs,Hl))?!1:(Gl.crossVectors(dr,hr),n=[Gl.x,Gl.y,Gl.z],sd(n,ks,Os,Bs,Hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new q,new q,new q,new q,new q,new q,new q,new q],Jn=new q,Vl=new al,ks=new q,Os=new q,Bs=new q,dr=new q,hr=new q,Xr=new q,Zo=new q,Hl=new q,Gl=new q,$r=new q;function sd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$r.fromArray(t,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=n.dot($r),f=i.dot($r);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Lt=new q,Wl=new Je;let SP=0;class Li extends ws{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ex,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yo(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yo(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yo(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ex&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class WM extends Li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jM extends Li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ki extends Li{constructor(e,n,i){super(new Float32Array(e),n,i)}}const MP=new al,Qo=new q,od=new q;class hg{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):MP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(od)),this.expandByPoint(Qo.copy(e.center).sub(od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let EP=0;const On=new Ut,ad=new Dn,zs=new q,Cn=new al,Jo=new al,Gt=new q;class rr extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EP++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nP(e)?jM:WM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ki(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Cn.min,Jo.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,Jo.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(Jo.min),Cn.expandByPoint(Jo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Gt.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),Gt.add(zs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Li(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new q,l[_]=new q;const c=new q,f=new q,d=new q,u=new Je,p=new Je,m=new Je,M=new q,g=new q;function h(_,b,N){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,N),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,N),f.sub(c),d.sub(c),p.sub(u),m.sub(u);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(M.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(I),a[_].add(M),a[b].add(M),a[N].add(M),l[_].add(g),l[b].add(g),l[N].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,b=x.length;_<b;++_){const N=x[_],I=N.start,C=N.count;for(let D=I,k=I+C;D<k;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const S=new q,y=new q,A=new q,w=new q;function R(_){A.fromBufferAttribute(r,_),w.copy(A);const b=a[_];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(w,b);const I=y.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,I)}for(let _=0,b=x.length;_<b;++_){const N=x[_],I=N.start,C=N.count;for(let D=I,k=I+C;D<k;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,f=new q,d=new q;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,m=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*f;for(let h=0;h<f;h++)u[m++]=c[p++]}return new Li(u,f,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TP=0;class Hu extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TP++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=mo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hh&&(i.blendSrc=this.blendSrc),this.blendDst!==Gh&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new q,ld=new q,jl=new q,pr=new q,cd=new q,Xl=new q,ud=new q;class wP{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ld.copy(e).add(n).multiplyScalar(.5),jl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(ld);const s=e.distanceTo(n)*.5,o=-this.direction.dot(jl),a=pr.dot(this.direction),l=-pr.dot(jl),c=pr.lengthSq(),f=Math.abs(1-o*o);let d,u,p,m;if(f>0)if(d=o*l-a,u=o*a-l,m=s*f,d>=0)if(u>=-m)if(u<=m){const M=1/f;d*=M,u*=M,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ld).addScaledVector(jl,u),p}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,i,r,s){cd.subVectors(n,e),Xl.subVectors(i,e),ud.crossVectors(cd,Xl);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(pr,Xl));if(l<0)return null;const c=a*this.direction.dot(cd.cross(pr));if(c<0||l+c>o)return null;const f=-a*pr.dot(ud);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class XM extends Hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=TM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ox=new Ut,qr=new wP,$l=new hg,Bx=new q,ql=new q,Yl=new q,Kl=new q,fd=new q,Zl=new q,zx=new q,Ql=new q;class Ii extends Dn{constructor(e=new rr,n=new XM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(fd.fromBufferAttribute(d,e),o?Zl.addScaledVector(fd,f):Zl.addScaledVector(fd.sub(n),f))}n.add(Zl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!($l.containsPoint(qr.origin)===!1&&(qr.intersectSphere($l,Bx)===null||qr.origin.distanceToSquared(Bx)>(e.far-e.near)**2))&&(Ox.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Ox),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){const g=u[m],h=o[g.materialIndex],x=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,A=S;y<A;y+=3){const w=a.getX(y),R=a.getX(y+1),_=a.getX(y+2);r=Jl(this,h,e,i,c,f,d,w,R,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let g=m,h=M;g<h;g+=3){const x=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);r=Jl(this,o,e,i,c,f,d,x,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){const g=u[m],h=o[g.materialIndex],x=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,A=S;y<A;y+=3){const w=y,R=y+1,_=y+2;r=Jl(this,h,e,i,c,f,d,w,R,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=m,h=M;g<h;g+=3){const x=g,S=g+1,y=g+2;r=Jl(this,o,e,i,c,f,d,x,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function AP(t,e,n,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ql);return c<n.near||c>n.far?null:{distance:c,point:Ql.clone(),object:t}}function Jl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ql),t.getVertexPosition(l,Yl),t.getVertexPosition(c,Kl);const f=AP(t,e,n,i,ql,Yl,Kl,zx);if(f){const d=new q;si.getBarycoord(zx,ql,Yl,Kl,d),r&&(f.uv=si.getInterpolatedAttribute(r,a,l,c,d,new Je)),s&&(f.uv1=si.getInterpolatedAttribute(s,a,l,c,d,new Je)),o&&(f.normal=si.getInterpolatedAttribute(o,a,l,c,d,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new q,materialIndex:0};si.getNormal(ql,Yl,Kl,u.normal),f.face=u,f.barycoord=d}return f}class CP extends hn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,f=Kt,d,u){super(null,o,a,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new q,bP=new q,RP=new ke;class ts{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=dd.subVectors(i,n).cross(bP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(dd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RP.getNormalMatrix(e),r=this.coplanarPoint(dd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new hg,PP=new Je(.5,.5),ec=new q;class $M{constructor(e=new ts,n=new ts,i=new ts,r=new ts,s=new ts,o=new ts){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],p=s[7],m=s[8],M=s[9],g=s[10],h=s[11],x=s[12],S=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-o,p-f,h-m,A-x).normalize(),r[1].setComponents(c+o,p+f,h+m,A+x).normalize(),r[2].setComponents(c+a,p+d,h+M,A+S).normalize(),r[3].setComponents(c-a,p-d,h-M,A-S).normalize(),i)r[4].setComponents(l,u,g,y).normalize(),r[5].setComponents(c-l,p-u,h-g,A-y).normalize();else if(r[4].setComponents(c-l,p-u,h-g,A-y).normalize(),n===Ai)r[5].setComponents(c+l,p+u,h+g,A+y).normalize();else if(n===gu)r[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=PP.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ec.x=r.normal.x>0?e.max.x:e.min.x,ec.y=r.normal.y>0?e.max.y:e.min.y,ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qM extends hn{constructor(e=[],n=ys,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Po extends hn{constructor(e,n,i=Di,r,s,o,a=Kt,l=Kt,c,f=nr,d=1){if(f!==nr&&f!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class NP extends Po{constructor(e,n=Di,i=ys,r,s,o=Kt,a=Kt,l,c=nr){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class YM extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends rr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(f,3)),this.setAttribute("uv",new Ki(d,2));function m(M,g,h,x,S,y,A,w,R,_,b){const N=y/R,I=A/_,C=y/2,D=A/2,k=w/2,U=R+1,O=_+1;let H=0,L=0;const z=new q;for(let X=0;X<O;X++){const K=X*I-D;for(let te=0;te<U;te++){const Me=te*N-C;z[M]=Me*x,z[g]=K*S,z[h]=k,c.push(z.x,z.y,z.z),z[M]=0,z[g]=0,z[h]=w>0?1:-1,f.push(z.x,z.y,z.z),d.push(te/R),d.push(1-X/_),H+=1}}for(let X=0;X<_;X++)for(let K=0;K<R;K++){const te=u+K+U*X,Me=u+K+U*(X+1),Be=u+(K+1)+U*(X+1),Oe=u+(K+1)+U*X;l.push(te,Me,Oe),l.push(Me,Be,Oe),L+=6}a.addGroup(p,L,b),p+=L,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cl extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],m=[],M=[],g=[];for(let h=0;h<f;h++){const x=h*u-o;for(let S=0;S<c;S++){const y=S*d-s;m.push(y,-x,0),M.push(0,0,1),g.push(S/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const S=x+c*h,y=x+c*(h+1),A=x+1+c*(h+1),w=x+1+c*h;p.push(S,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new Ki(m,3)),this.setAttribute("normal",new Ki(M,3)),this.setAttribute("uv",new Ki(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}function No(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Vx(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Vx(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=No(t[n]);for(const r in i)e[r]=i[r]}return e}function Vx(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function LP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function KM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const DP={clone:No,merge:ln};var IP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IP,this.fragmentShader=UP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=LP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class FP extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kP extends Hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OP extends Hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tc=new q,nc=new Oo,xi=new q;class pg extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,xi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(tc,nc,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new q,Hx=new Je,Gx=new Je;class ri extends pg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rp*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Hx,Gx),n.subVectors(Gx,Hx)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ZM extends pg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=-90,Hs=1;class BP extends Dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ri(Vs,Hs,e,n);r.layers=this.layers,this.add(r);const s=new ri(Vs,Hs,e,n);s.layers=this.layers,this.add(s);const o=new ri(Vs,Hs,e,n);o.layers=this.layers,this.add(o);const a=new ri(Vs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new ri(Vs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new ri(Vs,Hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class zP extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Eg=class Eg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Eg.prototype.isMatrix2=!0;let Wx=Eg;function jx(t,e,n,i){const r=VP(i);switch(n){case kM:return t*e;case BM:return t*e/r.components*r.byteLength;case ag:return t*e/r.components*r.byteLength;case Ss:return t*e*2/r.components*r.byteLength;case lg:return t*e*2/r.components*r.byteLength;case OM:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case cg:return t*e*4/r.components*r.byteLength;case Ac:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(t,16)*Math.max(e,8)/4;case Jh:case tp:return Math.max(t,8)*Math.max(e,8)/2;case ip:case rp:case op:case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sp:case du:case lp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ep:case Tp:case wp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ap:case Cp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hu:case bp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VP(t){switch(t){case Hn:case DM:return{byteLength:1,components:1};case qa:case IM:case tr:return{byteLength:2,components:1};case sg:case og:return{byteLength:2,components:4};case Di:case rg:case wi:return{byteLength:4,components:1};case UM:case FM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ig}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ig);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function QM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HP(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],M=d[p];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const M=d[p];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var GP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$P=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,QP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_N="gl_FragColor = linearToOutputTexel( gl_FragColor );",yN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,MN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IN=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,UN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kN=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ON=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jN=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$N=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_L=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ML=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$L=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,JL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_D=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:GP,alphahash_pars_fragment:WP,alphamap_fragment:jP,alphamap_pars_fragment:XP,alphatest_fragment:$P,alphatest_pars_fragment:qP,aomap_fragment:YP,aomap_pars_fragment:KP,batching_pars_vertex:ZP,batching_vertex:QP,begin_vertex:JP,beginnormal_vertex:eN,bsdfs:tN,iridescence_fragment:nN,bumpmap_pars_fragment:iN,clipping_planes_fragment:rN,clipping_planes_pars_fragment:sN,clipping_planes_pars_vertex:oN,clipping_planes_vertex:aN,color_fragment:lN,color_pars_fragment:cN,color_pars_vertex:uN,color_vertex:fN,common:dN,cube_uv_reflection_fragment:hN,defaultnormal_vertex:pN,displacementmap_pars_vertex:mN,displacementmap_vertex:gN,emissivemap_fragment:vN,emissivemap_pars_fragment:xN,colorspace_fragment:_N,colorspace_pars_fragment:yN,envmap_fragment:SN,envmap_common_pars_fragment:MN,envmap_pars_fragment:EN,envmap_pars_vertex:TN,envmap_physical_pars_fragment:UN,envmap_vertex:wN,fog_vertex:AN,fog_pars_vertex:CN,fog_fragment:bN,fog_pars_fragment:RN,gradientmap_pars_fragment:PN,lightmap_pars_fragment:NN,lights_lambert_fragment:LN,lights_lambert_pars_fragment:DN,lights_pars_begin:IN,lights_toon_fragment:FN,lights_toon_pars_fragment:kN,lights_phong_fragment:ON,lights_phong_pars_fragment:BN,lights_physical_fragment:zN,lights_physical_pars_fragment:VN,lights_fragment_begin:HN,lights_fragment_maps:GN,lights_fragment_end:WN,lightprobes_pars_fragment:jN,logdepthbuf_fragment:XN,logdepthbuf_pars_fragment:$N,logdepthbuf_pars_vertex:qN,logdepthbuf_vertex:YN,map_fragment:KN,map_pars_fragment:ZN,map_particle_fragment:QN,map_particle_pars_fragment:JN,metalnessmap_fragment:eL,metalnessmap_pars_fragment:tL,morphinstance_vertex:nL,morphcolor_vertex:iL,morphnormal_vertex:rL,morphtarget_pars_vertex:sL,morphtarget_vertex:oL,normal_fragment_begin:aL,normal_fragment_maps:lL,normal_pars_fragment:cL,normal_pars_vertex:uL,normal_vertex:fL,normalmap_pars_fragment:dL,clearcoat_normal_fragment_begin:hL,clearcoat_normal_fragment_maps:pL,clearcoat_pars_fragment:mL,iridescence_pars_fragment:gL,opaque_fragment:vL,packing:xL,premultiplied_alpha_fragment:_L,project_vertex:yL,dithering_fragment:SL,dithering_pars_fragment:ML,roughnessmap_fragment:EL,roughnessmap_pars_fragment:TL,shadowmap_pars_fragment:wL,shadowmap_pars_vertex:AL,shadowmap_vertex:CL,shadowmask_pars_fragment:bL,skinbase_vertex:RL,skinning_pars_vertex:PL,skinning_vertex:NL,skinnormal_vertex:LL,specularmap_fragment:DL,specularmap_pars_fragment:IL,tonemapping_fragment:UL,tonemapping_pars_fragment:FL,transmission_fragment:kL,transmission_pars_fragment:OL,uv_pars_fragment:BL,uv_pars_vertex:zL,uv_vertex:VL,worldpos_vertex:HL,background_vert:GL,background_frag:WL,backgroundCube_vert:jL,backgroundCube_frag:XL,cube_vert:$L,cube_frag:qL,depth_vert:YL,depth_frag:KL,distance_vert:ZL,distance_frag:QL,equirect_vert:JL,equirect_frag:eD,linedashed_vert:tD,linedashed_frag:nD,meshbasic_vert:iD,meshbasic_frag:rD,meshlambert_vert:sD,meshlambert_frag:oD,meshmatcap_vert:aD,meshmatcap_frag:lD,meshnormal_vert:cD,meshnormal_frag:uD,meshphong_vert:fD,meshphong_frag:dD,meshphysical_vert:hD,meshphysical_frag:pD,meshtoon_vert:mD,meshtoon_frag:gD,points_vert:vD,points_frag:xD,shadow_vert:_D,shadow_frag:yD,sprite_vert:SD,sprite_frag:MD},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ei={basic:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:ln([me.points,me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:ln([me.common,me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:ln([me.sprite,me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:ln([me.common,me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:ln([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Ei.physical={uniforms:ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ic={r:0,b:0,g:0},ED=new Ut,JM=new ke;JM.set(-1,0,0,0,1,0,0,0,1);function TD(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,f=null,d=0,u=null;function p(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const y=x.backgroundBlurriness>0;S=e.get(S,y)}return S}function m(x){let S=!1;const y=p(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===Vu)?(c===void 0&&(c=new Ii(new ll(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:No(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ED.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(JM),c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==it,(f!==y||d!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ii(new cl(2,2),new hi({name:"BackgroundMaterial",uniforms:No(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,u=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,S){x.getRGB(ic,KM(t)),n.buffers.color.setClear(ic.r,ic.g,ic.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:M,dispose:h}}function wD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(I,C,D,k,U){let O=!1;const H=d(I,k,D,C);s!==H&&(s=H,c(s.object)),O=p(I,k,D,U),O&&m(I,k,D,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(I,C,D,k),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function f(I){return t.deleteVertexArray(I)}function d(I,C,D,k){const U=k.wireframe===!0;let O=i[C.id];O===void 0&&(O={},i[C.id]=O);const H=I.isInstancedMesh===!0?I.id:0;let L=O[H];L===void 0&&(L={},O[H]=L);let z=L[D.id];z===void 0&&(z={},L[D.id]=z);let X=z[U];return X===void 0&&(X=u(l()),z[U]=X),X}function u(I){const C=[],D=[],k=[];for(let U=0;U<n;U++)C[U]=0,D[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:k,object:I,attributes:{},index:null}}function p(I,C,D,k){const U=s.attributes,O=C.attributes;let H=0;const L=D.getAttributes();for(const z in L)if(L[z].location>=0){const K=U[z];let te=O[z];if(te===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),K===void 0||K.attribute!==te||te&&K.data!==te.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function m(I,C,D,k){const U={},O=C.attributes;let H=0;const L=D.getAttributes();for(const z in L)if(L[z].location>=0){let K=O[z];K===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const te={};te.attribute=K,K&&K.data&&(te.data=K.data),U[z]=te,H++}s.attributes=U,s.attributesNum=H,s.index=k}function M(){const I=s.newAttributes;for(let C=0,D=I.length;C<D;C++)I[C]=0}function g(I){h(I,0)}function h(I,C){const D=s.newAttributes,k=s.enabledAttributes,U=s.attributeDivisors;D[I]=1,k[I]===0&&(t.enableVertexAttribArray(I),k[I]=1),U[I]!==C&&(t.vertexAttribDivisor(I,C),U[I]=C)}function x(){const I=s.newAttributes,C=s.enabledAttributes;for(let D=0,k=C.length;D<k;D++)C[D]!==I[D]&&(t.disableVertexAttribArray(D),C[D]=0)}function S(I,C,D,k,U,O,H){H===!0?t.vertexAttribIPointer(I,C,D,U,O):t.vertexAttribPointer(I,C,D,k,U,O)}function y(I,C,D,k){M();const U=k.attributes,O=D.getAttributes(),H=C.defaultAttributeValues;for(const L in O){const z=O[L];if(z.location>=0){let X=U[L];if(X===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const K=X.normalized,te=X.itemSize,Me=e.get(X);if(Me===void 0)continue;const Be=Me.buffer,Oe=Me.type,Q=Me.bytesPerElement,ae=Oe===t.INT||Oe===t.UNSIGNED_INT||X.gpuType===rg;if(X.isInterleavedBufferAttribute){const se=X.data,Ae=se.stride,Fe=X.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<z.locationSize;De++)h(z.location+De,se.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<z.locationSize;De++)g(z.location+De);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let De=0;De<z.locationSize;De++)S(z.location+De,te/z.locationSize,Oe,K,Ae*Q,(Fe+te/z.locationSize*De)*Q,ae)}else{if(X.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)h(z.location+se,X.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let se=0;se<z.locationSize;se++)g(z.location+se);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let se=0;se<z.locationSize;se++)S(z.location+se,te/z.locationSize,Oe,K,te*Q,te/z.locationSize*se*Q,ae)}}else if(H!==void 0){const K=H[L];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(z.location,K);break;case 3:t.vertexAttrib3fv(z.location,K);break;case 4:t.vertexAttrib4fv(z.location,K);break;default:t.vertexAttrib1fv(z.location,K)}}}}x()}function A(){b();for(const I in i){const C=i[I];for(const D in C){const k=C[D];for(const U in k){const O=k[U];for(const H in O)f(O[H].object),delete O[H];delete k[U]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const C=i[I.id];for(const D in C){const k=C[D];for(const U in k){const O=k[U];for(const H in O)f(O[H].object),delete O[H];delete k[U]}}delete i[I.id]}function R(I){for(const C in i){const D=i[C];for(const k in D){const U=D[k];if(U[I.id]===void 0)continue;const O=U[I.id];for(const H in O)f(O[H].object),delete O[H];delete U[I.id]}}}function _(I){for(const C in i){const D=i[C],k=I.isInstancedMesh===!0?I.id:0,U=D[k];if(U!==void 0){for(const O in U){const H=U[O];for(const L in H)f(H[L].object),delete H[L];delete U[O]}delete D[k],Object.keys(D).length===0&&delete i[C]}}}function b(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function AD(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function CD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ai&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Hn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wi&&!_)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ue("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:w}}function bD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ts,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?f(null):c();else{const x=s?0:i,S=x*4;let y=h.clippingState||null;l.value=y,y=f(m,u,S,p);for(let A=0;A!==S;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,m){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,m!==!0||g===null){const h=p+M*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<h)&&(g=new Float32Array(h));for(let S=0,y=p;S!==M;++S,y+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Ar=4,Xx=[.125,.215,.35,.446,.526,.582],is=20,RD=256,ea=new ZM,$x=new tt;let hd=null,pd=0,md=0,gd=!1;const PD=new q;class qx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=PD}=s;hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ys||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:tr,format:ai,colorSpace:pu,depthBuffer:!1},r=Yx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ND(s)),this._blurMaterial=DD(s,e,n),this._ggxMaterial=LD(s,e,n)}return r}_compileMaterial(e){const n=new Ii(new rr,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new ri(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor($x),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new ll,new XM({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let h=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,h=!0):(g.color.copy($x),h=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));const A=this._cubeSize;Gs(r,y*A,S>2?A:0,A,A),d.setRenderTarget(r),h&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ys||e.mapping===Ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=0+c*1.25,p=d*u,{_lodMax:m}=this,M=this._sizeLods[i],g=3*M*(i>m-Ar?i-m+Ar:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Gs(s,g,h,3*M,2*M),r.setRenderTarget(s),r.render(a,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Gs(e,g,h,3*M,2*M),r.setRenderTarget(e),r.render(a,ea)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),M=s/m,g=isFinite(s)?1+Math.floor(f*M):is;g>is&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);const h=[];let x=0;for(let R=0;R<is;++R){const _=R/M,b=Math.exp(-_*_/2);h.push(b),R===0?x+=b:R<g&&(x+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=m,u.mipInt.value=S-i;const y=this._sizeLods[r],A=3*y*(r>S-Ar?r-S+Ar:0),w=4*(this._cubeSize-y);Gs(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(d,ea)}}function ND(t){const e=[],n=[],i=[];let r=t;const s=t-Ar+1+Xx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Ar?l=Xx[o-t+Ar-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,m=6,M=3,g=2,h=1,x=new Float32Array(M*m*p),S=new Float32Array(g*m*p),y=new Float32Array(h*m*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,_=w>2?0:-1,b=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];x.set(b,M*m*w),S.set(u,g*m*w);const N=[w,w,w,w,w,w];y.set(N,h*m*w)}const A=new rr;A.setAttribute("position",new Li(x,M)),A.setAttribute("uv",new Li(S,g)),A.setAttribute("faceIndex",new Li(y,h)),i.push(new Ii(A,null)),r>Ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Yx(t,e,n){const i=new Ni(t,e,n);return i.texture.mapping=Vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LD(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function DD(t,e,n){const i=new Float32Array(is),r=new q(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Kx(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Zx(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class eE extends Ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ll(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:No(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:qi});s.uniforms.tEquirect.value=n;const o=new Ii(r,s),a=n.minFilter;return n.minFilter===cs&&(n.minFilter=on),new BP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function ID(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===zf||p===Vf)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const M=new eE(m.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===zf||p===Vf,M=p===ys||p===Ro;if(m||M){let g=n.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new qx(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return m&&x&&x.height>0||M&&x&&l(x)?(i===null&&(i=new qx(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,p){return p===zf?u.mapping=ys:p===Vf&&(u.mapping=Ro),u}function l(u){let p=0;const m=6;for(let M=0;M<m;M++)u[M]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function UD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&go("WebGLRenderer: "+i+" extension not supported."),r}}}function FD(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,m=d.attributes.position;let M=0;if(m===void 0)return;if(p!==null){const x=p.array;M=p.version;for(let S=0,y=x.length;S<y;S+=3){const A=x[S+0],w=x[S+1],R=x[S+2];u.push(A,w,w,R,R,A)}}else{const x=m.array;M=m.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const A=S+0,w=S+1,R=S+2;u.push(A,w,w,R,R,A)}}const g=new(m.count>=65535?jM:WM)(u,1);g.version=M;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function kD(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,d*o,p),n.update(u,i,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];n.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function OD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BD(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),m===!0&&(S=2),M===!0&&(S=3);let y=a.attributes.position.count*S,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*A*4*d),R=new VM(w,y,A,d);R.type=wi,R.needsUpdate=!0;const _=S*4;for(let N=0;N<d;N++){const I=g[N],C=h[N],D=x[N],k=y*A*4*N;for(let U=0;U<I.count;U++){const O=U*_;p===!0&&(r.fromBufferAttribute(I,U),w[k+O+0]=r.x,w[k+O+1]=r.y,w[k+O+2]=r.z,w[k+O+3]=0),m===!0&&(r.fromBufferAttribute(C,U),w[k+O+4]=r.x,w[k+O+5]=r.y,w[k+O+6]=r.z,w[k+O+7]=0),M===!0&&(r.fromBufferAttribute(D,U),w[k+O+8]=r.x,w[k+O+9]=r.y,w[k+O+10]=r.z,w[k+O+11]=D.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new Je(y,A)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function zD(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const VD={[wM]:"LINEAR_TONE_MAPPING",[AM]:"REINHARD_TONE_MAPPING",[CM]:"CINEON_TONE_MAPPING",[bM]:"ACES_FILMIC_TONE_MAPPING",[PM]:"AGX_TONE_MAPPING",[NM]:"NEUTRAL_TONE_MAPPING",[RM]:"CUSTOM_TONE_MAPPING"};function HD(t,e,n,i,r,s){const o=new Ni(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Po(e,n):void 0}),a=new Ni(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),l=new rr;l.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const c=new FP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ii(l,c),d=new ZM(-1,1,1,-1,0,1);let u=null,p=null,m=!1,M,g=null,h=[],x=!1;this.setSize=function(S,y){o.setSize(S,y),a.setSize(S,y);for(let A=0;A<h.length;A++){const w=h[A];w.setSize&&w.setSize(S,y)}},this.setEffects=function(S){h=S,x=h.length>0&&h[0].isRenderPass===!0;const y=o.width,A=o.height;for(let w=0;w<h.length;w++){const R=h[w];R.setSize&&R.setSize(y,A)}},this.begin=function(S,y){if(m||S.toneMapping===Pi&&h.length===0)return!1;if(g=y,y!==null){const A=y.width,w=y.height;(o.width!==A||o.height!==w)&&this.setSize(A,w)}return x===!1&&S.setRenderTarget(o),M=S.toneMapping,S.toneMapping=Pi,!0},this.hasRenderPass=function(){return x},this.end=function(S,y){S.toneMapping=M,m=!0;let A=o,w=a;for(let R=0;R<h.length;R++){const _=h[R];if(_.enabled!==!1&&(_.render(S,w,A,y),_.needsSwap!==!1)){const b=A;A=w,w=b}}if(u!==S.outputColorSpace||p!==S.toneMapping){u=S.outputColorSpace,p=S.toneMapping,c.defines={},Xe.getTransfer(u)===it&&(c.defines.SRGB_TRANSFER="");const R=VD[p];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(g),S.render(f,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const tE=new hn,Pp=new Po(1,1),nE=new VM,iE=new dP,rE=new qM,Qx=[],Jx=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function Bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qx[r];if(s===void 0&&(s=new Float32Array(r),Qx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wu(t,e){let n=Jx[e];n===void 0&&(n=new Int32Array(e),Jx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function jD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function XD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function $D(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;n_.set(i),t.uniformMatrix2fv(this.addr,!1,n_),Vt(n,i)}}function qD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;t_.set(i),t.uniformMatrix3fv(this.addr,!1,t_),Vt(n,i)}}function YD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;e_.set(i),t.uniformMatrix4fv(this.addr,!1,e_),Vt(n,i)}}function KD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function QD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function JD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function eI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function nI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function iI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function rI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Pp.compareFunction=n.isReversedDepthBuffer()?fg:ug,s=Pp):s=tE,n.setTexture2D(e||s,r)}function sI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iE,r)}function oI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rE,r)}function aI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nE,r)}function lI(t){switch(t){case 5126:return GD;case 35664:return WD;case 35665:return jD;case 35666:return XD;case 35674:return $D;case 35675:return qD;case 35676:return YD;case 5124:case 35670:return KD;case 35667:case 35671:return ZD;case 35668:case 35672:return QD;case 35669:case 35673:return JD;case 5125:return eI;case 36294:return tI;case 36295:return nI;case 36296:return iI;case 35678:case 36198:case 36298:case 36306:case 35682:return rI;case 35679:case 36299:case 36307:return sI;case 35680:case 36300:case 36308:case 36293:return oI;case 36289:case 36303:case 36311:case 36292:return aI}}function cI(t,e){t.uniform1fv(this.addr,e)}function uI(t,e){const n=Bo(e,this.size,2);t.uniform2fv(this.addr,n)}function fI(t,e){const n=Bo(e,this.size,3);t.uniform3fv(this.addr,n)}function dI(t,e){const n=Bo(e,this.size,4);t.uniform4fv(this.addr,n)}function hI(t,e){const n=Bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pI(t,e){const n=Bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mI(t,e){const n=Bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gI(t,e){t.uniform1iv(this.addr,e)}function vI(t,e){t.uniform2iv(this.addr,e)}function xI(t,e){t.uniform3iv(this.addr,e)}function _I(t,e){t.uniform4iv(this.addr,e)}function yI(t,e){t.uniform1uiv(this.addr,e)}function SI(t,e){t.uniform2uiv(this.addr,e)}function MI(t,e){t.uniform3uiv(this.addr,e)}function EI(t,e){t.uniform4uiv(this.addr,e)}function TI(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Pp:o=tE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function wI(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||iE,s[o])}function AI(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rE,s[o])}function CI(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nE,s[o])}function bI(t){switch(t){case 5126:return cI;case 35664:return uI;case 35665:return fI;case 35666:return dI;case 35674:return hI;case 35675:return pI;case 35676:return mI;case 5124:case 35670:return gI;case 35667:case 35671:return vI;case 35668:case 35672:return xI;case 35669:case 35673:return _I;case 5125:return yI;case 36294:return SI;case 36295:return MI;case 36296:return EI;case 35678:case 36198:case 36298:case 36306:case 35682:return TI;case 35679:case 36299:case 36307:return wI;case 35680:case 36300:case 36308:case 36293:return AI;case 36289:case 36303:case 36311:case 36292:return CI}}class RI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lI(n.type)}}class PI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bI(n.type)}}class NI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function i_(t,e){t.seq.push(e),t.map[e.id]=e}function LI(t,e,n){const i=t.name,r=i.length;for(vd.lastIndex=0;;){const s=vd.exec(i),o=vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){i_(n,c===void 0?new RI(a,t,e):new PI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new NI(a),i_(n,d)),n=d}}}class Pc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);LI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function r_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DI=37297;let II=0;function UI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const s_=new ke;function FI(t){Xe._getMatrix(s_,Xe.workingColorSpace,t);const e=`mat3( ${s_.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case mu:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function o_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+UI(t.getShaderSource(e),a)}else return s}function kI(t,e){const n=FI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const OI={[wM]:"Linear",[AM]:"Reinhard",[CM]:"Cineon",[bM]:"ACESFilmic",[PM]:"AgX",[NM]:"Neutral",[RM]:"Custom"};function BI(t,e){const n=OI[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const rc=new q;function zI(){Xe.getLuminanceCoefficients(rc);const t=rc.x.toFixed(4),e=rc.y.toFixed(4),n=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function HI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ua(t){return t!==""}function a_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Np(t){return t.replace(WI,XI)}const jI=new Map;function XI(t,e){let n=He[e];if(n===void 0){const i=jI.get(e);if(i!==void 0)n=He[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Np(n)}const $I=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(t){return t.replace($I,qI)}function qI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const YI={[wc]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function KI(t){return YI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZI={[ys]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function QI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ZI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const JI={[Ro]:"ENVMAP_MODE_REFRACTION"};function eU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":JI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tU={[TM]:"ENVMAP_BLENDING_MULTIPLY",[j3]:"ENVMAP_BLENDING_MIX",[X3]:"ENVMAP_BLENDING_ADD"};function nU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":tU[t.combine]||"ENVMAP_BLENDING_NONE"}function iU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rU(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=KI(n),c=QI(n),f=eU(n),d=nU(n),u=iU(n),p=VI(n),m=HI(s),M=r.createProgram();let g,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),h.length>0&&(h+=`
`)):(g=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),h=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?He.tonemapping_pars_fragment:"",n.toneMapping!==Pi?BI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,kI("linearToOutputTexel",n.outputColorSpace),zI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),o=Np(o),o=a_(o,n),o=l_(o,n),a=Np(a),a=a_(a,n),a=l_(a,n),o=c_(o),a=c_(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=x+g+o,y=x+h+a,A=r_(r,r.VERTEX_SHADER,S),w=r_(r,r.FRAGMENT_SHADER,y);r.attachShader(M,A),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(I){if(t.debug.checkShaderErrors){const C=r.getProgramInfoLog(M)||"",D=r.getShaderInfoLog(A)||"",k=r.getShaderInfoLog(w)||"",U=C.trim(),O=D.trim(),H=k.trim();let L=!0,z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,A,w);else{const X=o_(r,A,"vertex"),K=o_(r,w,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+X+`
`+K)}else U!==""?Ue("WebGLProgram: Program Info Log:",U):(O===""||H==="")&&(z=!1);z&&(I.diagnostics={runnable:L,programLog:U,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:h}})}r.deleteShader(A),r.deleteShader(w),_=new Pc(r,M),b=GI(r,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(M,DI)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=II++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=w,this}let sU=0;class oU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aU(e),n.set(e,i)),i}}class aU{constructor(e){this.id=sU++,this.code=e,this.usedTimes=0}}function lU(t){return t===Ss||t===du||t===hu}function cU(t,e,n,i,r,s){const o=new HM,a=new oU,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,b,N,I,C,D){const k=I.fog,U=C.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,L=e.get(_.envMap||O,H),z=L&&L.mapping===Vu?L.image.height:null,X=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=K!==void 0?K.length:0;let Me=0;U.morphAttributes.position!==void 0&&(Me=1),U.morphAttributes.normal!==void 0&&(Me=2),U.morphAttributes.color!==void 0&&(Me=3);let Be,Oe,Q,ae;if(X){const Te=Ei[X];Be=Te.vertexShader,Oe=Te.fragmentShader}else{Be=_.vertexShader,Oe=_.fragmentShader;const Te=a.getVertexShaderStage(_),Mt=a.getFragmentShaderStage(_);a.update(_,Te,Mt),Q=Te.id,ae=Mt.id}const se=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Fe=C.isInstancedMesh===!0,De=C.isBatchedMesh===!0,vt=!!_.map,je=!!_.matcap,ot=!!L,et=!!_.aoMap,qe=!!_.lightMap,Pt=!!_.bumpMap&&_.wireframe===!1,Ft=!!_.normalMap,Ht=!!_.displacementMap,$t=!!_.emissiveMap,St=!!_.metalnessMap,Nt=!!_.roughnessMap,B=_.anisotropy>0,gn=_.clearcoat>0,nt=_.dispersion>0,P=_.iridescence>0,E=_.sheen>0,G=_.transmission>0,$=B&&!!_.anisotropyMap,J=gn&&!!_.clearcoatMap,le=gn&&!!_.clearcoatNormalMap,ue=gn&&!!_.clearcoatRoughnessMap,ee=P&&!!_.iridescenceMap,ie=P&&!!_.iridescenceThicknessMap,fe=E&&!!_.sheenColorMap,Re=E&&!!_.sheenRoughnessMap,pe=!!_.specularMap,de=!!_.specularColorMap,Le=!!_.specularIntensityMap,Ie=G&&!!_.transmissionMap,ze=G&&!!_.thicknessMap,F=!!_.gradientMap,ce=!!_.alphaMap,ne=_.alphaTest>0,he=!!_.alphaHash,xe=!!_.extensions;let re=Pi;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(re=t.toneMapping);const be={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:Oe,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:De,batchingColor:De&&C._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&C.instanceColor!==null,instancingMorph:Fe&&C.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:vt,matcap:je,envMap:ot,envMapMode:ot&&L.mapping,envMapCubeUVHeight:z,aoMap:et,lightMap:qe,bumpMap:Pt,normalMap:Ft,displacementMap:Ht,emissiveMap:$t,normalMapObjectSpace:Ft&&_.normalMapType===Y3,normalMapTangentSpace:Ft&&_.normalMapType===Sx,packedNormalMap:Ft&&_.normalMapType===Sx&&lU(_.normalMap.format),metalnessMap:St,roughnessMap:Nt,anisotropy:B,anisotropyMap:$,clearcoat:gn,clearcoatMap:J,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,dispersion:nt,iridescence:P,iridescenceMap:ee,iridescenceThicknessMap:ie,sheen:E,sheenColorMap:fe,sheenRoughnessMap:Re,specularMap:pe,specularColorMap:de,specularIntensityMap:Le,transmission:G,transmissionMap:Ie,thicknessMap:ze,gradientMap:F,opaque:_.transparent===!1&&_.blending===mo&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:ne,alphaHash:he,combine:_.combine,mapUv:vt&&m(_.map.channel),aoMapUv:et&&m(_.aoMap.channel),lightMapUv:qe&&m(_.lightMap.channel),bumpMapUv:Pt&&m(_.bumpMap.channel),normalMapUv:Ft&&m(_.normalMap.channel),displacementMapUv:Ht&&m(_.displacementMap.channel),emissiveMapUv:$t&&m(_.emissiveMap.channel),metalnessMapUv:St&&m(_.metalnessMap.channel),roughnessMapUv:Nt&&m(_.roughnessMap.channel),anisotropyMapUv:$&&m(_.anisotropyMap.channel),clearcoatMapUv:J&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(_.sheenRoughnessMap.channel),specularMapUv:pe&&m(_.specularMap.channel),specularColorMapUv:de&&m(_.specularColorMap.channel),specularIntensityMapUv:Le&&m(_.specularIntensityMap.channel),transmissionMapUv:Ie&&m(_.transmissionMap.channel),thicknessMapUv:ze&&m(_.thicknessMap.channel),alphaMapUv:ce&&m(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ft||B),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!U.attributes.uv&&(vt||ce),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&Ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:vt&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:$t&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gi,flipSided:_.side===Tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(h(b,_),x(b,_),b.push(t.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function h(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function x(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const b=p[_.type];let N;if(b){const I=Ei[b];N=DP.clone(I.uniforms)}else N=_.uniforms;return N}function y(_,b){let N=f.get(b);return N!==void 0?++N.usedTimes:(N=new rU(t,b,_,r),c.push(N),f.set(b,N)),N}function A(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:R}}function uU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function f_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function d_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,M,g,h){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},t[e]=x):(x.id=u.id,x.object=u,x.geometry=p,x.material=m,x.materialVariant=o(u),x.groupOrder=M,x.renderOrder=u.renderOrder,x.z=g,x.group=h),e++,x}function l(u,p,m,M,g,h){const x=a(u,p,m,M,g,h);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):n.push(x)}function c(u,p,m,M,g,h){const x=a(u,p,m,M,g,h);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):n.unshift(x)}function f(u,p,m){n.length>1&&n.sort(u||fU),i.length>1&&i.sort(p||f_),r.length>1&&r.sort(p||f_),m&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function dU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new d_,t.set(i,[o])):r>=s.length?(o=new d_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new tt};break;case"SpotLight":n={position:new q,direction:new q,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function pU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mU=0;function gU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vU(t){const e=new hU,n=pU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Ut,o=new Ut;function a(c){let f=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,m=0,M=0,g=0,h=0,x=0,S=0,y=0,A=0,w=0,R=0;c.sort(gU);for(let b=0,N=c.length;b<N;b++){const I=c[b],C=I.color,D=I.intensity,k=I.distance;let U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ss?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=C.r*D,d+=C.g*D,u+=C.b*D;else if(I.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],D);R++}else if(I.isDirectionalLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,L=n.get(I);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=I.shadow.matrix,x++}i.directional[p]=O,p++}else if(I.isSpotLight){const O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(C).multiplyScalar(D),O.distance=k,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,i.spot[M]=O;const H=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,H.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[M]=H.matrix,I.castShadow){const L=n.get(I);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.spotShadow[M]=L,i.spotShadowMap[M]=U,y++}M++}else if(I.isRectAreaLight){const O=e.get(I);O.color.copy(C).multiplyScalar(D),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=O,g++}else if(I.isPointLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const H=I.shadow,L=n.get(I);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=I.shadow.matrix,S++}i.point[m]=O,m++}else if(I.isHemisphereLight){const O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(D),O.groundColor.copy(I.groundColor).multiplyScalar(D),i.hemi[h]=O,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==p||_.pointLength!==m||_.spotLength!==M||_.rectAreaLength!==g||_.hemiLength!==h||_.numDirectionalShadows!==x||_.numPointShadows!==S||_.numSpotShadows!==y||_.numSpotMaps!==A||_.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,_.directionalLength=p,_.pointLength=m,_.spotLength=M,_.rectAreaLength=g,_.hemiLength=h,_.numDirectionalShadows=x,_.numPointShadows=S,_.numSpotShadows=y,_.numSpotMaps=A,_.numLightProbes=R,i.version=mU++)}function l(c,f){let d=0,u=0,p=0,m=0,M=0;const g=f.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const S=c[h];if(S.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(S.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function h_(t){const e=new vU(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function xU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new h_(t),e.set(r,[a])):s>=o.length?(a=new h_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const _U=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SU=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],MU=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],p_=new Ut,ta=new q,xd=new q;function EU(t,e,n){let i=new $M;const r=new Je,s=new Je,o=new At,a=new kP,l=new OP,c={},f=n.maxTextureSize,d={[Br]:Tn,[Tn]:Br,[Gi]:Gi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:_U,fragmentShader:yU}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new rr;m.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ii(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let h=this.type;this.render=function(w,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===A3&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wc);const b=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),C=t.state;C.setBlending(qi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const D=h!==this.type;D&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(U=>U.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,U=w.length;k<U;k++){const O=w[k],H=O.shadow;if(H===void 0){Ue("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const L=H.getFrameExtents();r.multiply(L),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/L.x),r.x=s.x*L.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/L.y),r.y=s.y*L.y,H.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=z,H.map===null||D===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ca){if(O.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ni(r.x,r.y,{format:Ss,type:tr,minFilter:on,magFilter:on,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Po(r.x,r.y,wi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=nr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt}else O.isPointLight?(H.map=new eE(r.x),H.map.depthTexture=new NP(r.x,Di)):(H.map=new Ni(r.x,r.y),H.map.depthTexture=new Po(r.x,r.y,Di)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=nr,this.type===wc?(H.map.depthTexture.compareFunction=z?fg:ug,H.map.depthTexture.minFilter=on,H.map.depthTexture.magFilter=on):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt);H.camera.updateProjectionMatrix()}const X=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<X;K++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,K),t.clear();else{K===0&&(t.setRenderTarget(H.map),t.clear());const te=H.getViewport(K);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),C.viewport(o)}if(O.isPointLight){const te=H.camera,Me=H.matrix,Be=O.distance||te.far;Be!==te.far&&(te.far=Be,te.updateProjectionMatrix()),ta.setFromMatrixPosition(O.matrixWorld),te.position.copy(ta),xd.copy(te.position),xd.add(SU[K]),te.up.copy(MU[K]),te.lookAt(xd),te.updateMatrixWorld(),Me.makeTranslation(-ta.x,-ta.y,-ta.z),p_.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),H._frustum.setFromProjectionMatrix(p_,te.coordinateSystem,te.reversedDepth)}else H.updateMatrices(O);i=H.getFrustum(),y(R,_,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===ca&&x(H,_),H.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(b,N,I)};function x(w,R){const _=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ni(r.x,r.y,{format:Ss,type:tr})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,_,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,_,p,M,null)}function S(w,R,_,b){let N=null;const I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)N=I;else if(N=_.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const C=N.uuid,D=R.uuid;let k=c[C];k===void 0&&(k={},c[C]=k);let U=k[D];U===void 0&&(U=N.clone(),k[D]=U,R.addEventListener("dispose",A)),N=U}if(N.visible=R.visible,N.wireframe=R.wireframe,b===ca?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:d[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const C=t.properties.get(N);C.light=_}return N}function y(w,R,_,b,N){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===ca)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const D=e.update(w),k=w.material;if(Array.isArray(k)){const U=D.groups;for(let O=0,H=U.length;O<H;O++){const L=U[O],z=k[L.materialIndex];if(z&&z.visible){const X=S(w,z,b,N);w.onBeforeShadow(t,w,R,_,D,X,L),t.renderBufferDirect(_,null,D,X,w,L),w.onAfterShadow(t,w,R,_,D,X,L)}}}else if(k.visible){const U=S(w,k,b,N);w.onBeforeShadow(t,w,R,_,D,U,null),t.renderBufferDirect(_,null,D,U,w,null),w.onAfterShadow(t,w,R,_,D,U,null)}}const C=w.children;for(let D=0,k=C.length;D<k;D++)y(C[D],R,_,b,N)}function A(w){w.target.removeEventListener("dispose",A);for(const _ in c){const b=c[_],N=w.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function TU(t,e){function n(){let F=!1;const ce=new At;let ne=null;const he=new At(0,0,0,0);return{setMask:function(xe){ne!==xe&&!F&&(t.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){F=xe},setClear:function(xe,re,be,Te,Mt){Mt===!0&&(xe*=Te,re*=Te,be*=Te),ce.set(xe,re,be,Te),he.equals(ce)===!1&&(t.clearColor(xe,re,be,Te),he.copy(ce))},reset:function(){F=!1,ne=null,he.set(-1,0,0,0)}}}function i(){let F=!1,ce=!1,ne=null,he=null,xe=null;return{setReversed:function(re){if(ce!==re){const be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function(re){re?se(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(re){ne!==re&&!F&&(t.depthMask(re),ne=re)},setFunc:function(re){if(ce&&(re=sP[re]),he!==re){switch(re){case Wh:t.depthFunc(t.NEVER);break;case jh:t.depthFunc(t.ALWAYS);break;case Xh:t.depthFunc(t.LESS);break;case bo:t.depthFunc(t.LEQUAL);break;case $h:t.depthFunc(t.EQUAL);break;case qh:t.depthFunc(t.GEQUAL);break;case Yh:t.depthFunc(t.GREATER);break;case Kh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=re}},setLocked:function(re){F=re},setClear:function(re){xe!==re&&(xe=re,ce&&(re=1-re),t.clearDepth(re))},reset:function(){F=!1,ne=null,he=null,xe=null,ce=!1}}}function r(){let F=!1,ce=null,ne=null,he=null,xe=null,re=null,be=null,Te=null,Mt=null;return{setTest:function(ft){F||(ft?se(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(ft){ce!==ft&&!F&&(t.stencilMask(ft),ce=ft)},setFunc:function(ft,pi,mi){(ne!==ft||he!==pi||xe!==mi)&&(t.stencilFunc(ft,pi,mi),ne=ft,he=pi,xe=mi)},setOp:function(ft,pi,mi){(re!==ft||be!==pi||Te!==mi)&&(t.stencilOp(ft,pi,mi),re=ft,be=pi,Te=mi)},setLocked:function(ft){F=ft},setClear:function(ft){Mt!==ft&&(t.clearStencil(ft),Mt=ft)},reset:function(){F=!1,ce=null,ne=null,he=null,xe=null,re=null,be=null,Te=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},p=new WeakMap,m=[],M=null,g=!1,h=null,x=null,S=null,y=null,A=null,w=null,R=null,_=new tt(0,0,0),b=0,N=!1,I=null,C=null,D=null,k=null,U=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,L=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=L>=1):z.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=L>=2);let X=null,K={};const te=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Be=new At().fromArray(te),Oe=new At().fromArray(Me);function Q(F,ce,ne,he){const xe=new Uint8Array(4),re=t.createTexture();t.bindTexture(F,re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<ne;be++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ce+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return re}const ae={};ae[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(bo),Pt(!1),Ft(vx),se(t.CULL_FACE),et(qi);function se(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function Ae(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function Fe(F,ce){return u[F]!==ce?(t.bindFramebuffer(F,ce),u[F]=ce,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function De(F,ce){let ne=m,he=!1;if(F){ne=p.get(ce),ne===void 0&&(ne=[],p.set(ce,ne));const xe=F.textures;if(ne.length!==xe.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let re=0,be=xe.length;re<be;re++)ne[re]=t.COLOR_ATTACHMENT0+re;ne.length=xe.length,he=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,he=!0);he&&t.drawBuffers(ne)}function vt(F){return M!==F?(t.useProgram(F),M=F,!0):!1}const je={[ns]:t.FUNC_ADD,[b3]:t.FUNC_SUBTRACT,[R3]:t.FUNC_REVERSE_SUBTRACT};je[P3]=t.MIN,je[N3]=t.MAX;const ot={[L3]:t.ZERO,[D3]:t.ONE,[I3]:t.SRC_COLOR,[Hh]:t.SRC_ALPHA,[z3]:t.SRC_ALPHA_SATURATE,[O3]:t.DST_COLOR,[F3]:t.DST_ALPHA,[U3]:t.ONE_MINUS_SRC_COLOR,[Gh]:t.ONE_MINUS_SRC_ALPHA,[B3]:t.ONE_MINUS_DST_COLOR,[k3]:t.ONE_MINUS_DST_ALPHA,[V3]:t.CONSTANT_COLOR,[H3]:t.ONE_MINUS_CONSTANT_COLOR,[G3]:t.CONSTANT_ALPHA,[W3]:t.ONE_MINUS_CONSTANT_ALPHA};function et(F,ce,ne,he,xe,re,be,Te,Mt,ft){if(F===qi){g===!0&&(Ae(t.BLEND),g=!1);return}if(g===!1&&(se(t.BLEND),g=!0),F!==C3){if(F!==h||ft!==N){if((x!==ns||A!==ns)&&(t.blendEquation(t.FUNC_ADD),x=ns,A=ns),ft)switch(F){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xx:t.blendFunc(t.ONE,t.ONE);break;case _x:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",F);break}else switch(F){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _x:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yx:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",F);break}S=null,y=null,w=null,R=null,_.set(0,0,0),b=0,h=F,N=ft}return}xe=xe||ce,re=re||ne,be=be||he,(ce!==x||xe!==A)&&(t.blendEquationSeparate(je[ce],je[xe]),x=ce,A=xe),(ne!==S||he!==y||re!==w||be!==R)&&(t.blendFuncSeparate(ot[ne],ot[he],ot[re],ot[be]),S=ne,y=he,w=re,R=be),(Te.equals(_)===!1||Mt!==b)&&(t.blendColor(Te.r,Te.g,Te.b,Mt),_.copy(Te),b=Mt),h=F,N=!1}function qe(F,ce){F.side===Gi?Ae(t.CULL_FACE):se(t.CULL_FACE);let ne=F.side===Tn;ce&&(ne=!ne),Pt(ne),F.blending===mo&&F.transparent===!1?et(qi):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const he=F.stencilWrite;a.setTest(he),he&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),$t(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(F){I!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),I=F)}function Ft(F){F!==T3?(se(t.CULL_FACE),F!==C&&(F===vx?t.cullFace(t.BACK):F===w3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),C=F}function Ht(F){F!==D&&(H&&t.lineWidth(F),D=F)}function $t(F,ce,ne){F?(se(t.POLYGON_OFFSET_FILL),(k!==ce||U!==ne)&&(k=ce,U=ne,o.getReversed()&&(ce=-ce),t.polygonOffset(ce,ne))):Ae(t.POLYGON_OFFSET_FILL)}function St(F){F?se(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function Nt(F){F===void 0&&(F=t.TEXTURE0+O-1),X!==F&&(t.activeTexture(F),X=F)}function B(F,ce,ne){ne===void 0&&(X===null?ne=t.TEXTURE0+O-1:ne=X);let he=K[ne];he===void 0&&(he={type:void 0,texture:void 0},K[ne]=he),(he.type!==F||he.texture!==ce)&&(X!==ne&&(t.activeTexture(ne),X=ne),t.bindTexture(F,ce||ae[F]),he.type=F,he.texture=ce)}function gn(){const F=K[X];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function E(){try{t.texSubImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function G(){try{t.texSubImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function le(){try{t.texStorage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function ue(){try{t.texStorage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function ee(){try{t.texImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function ie(){try{t.texImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function fe(F){return d[F]!==void 0?d[F]:t.getParameter(F)}function Re(F,ce){d[F]!==ce&&(t.pixelStorei(F,ce),d[F]=ce)}function pe(F){Be.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Be.copy(F))}function de(F){Oe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Oe.copy(F))}function Le(F,ce){let ne=c.get(ce);ne===void 0&&(ne=new WeakMap,c.set(ce,ne));let he=ne.get(F);he===void 0&&(he=t.getUniformBlockIndex(ce,F.name),ne.set(F,he))}function Ie(F,ce){const he=c.get(ce).get(F);l.get(ce)!==he&&(t.uniformBlockBinding(ce,he,F.__bindingPointIndex),l.set(ce,he))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},X=null,K={},u={},p=new WeakMap,m=[],M=null,g=!1,h=null,x=null,S=null,y=null,A=null,w=null,R=null,_=new tt(0,0,0),b=0,N=!1,I=null,C=null,D=null,k=null,U=null,Be.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Ae,bindFramebuffer:Fe,drawBuffers:De,useProgram:vt,setBlending:et,setMaterial:qe,setFlipSided:Pt,setCullFace:Ft,setLineWidth:Ht,setPolygonOffset:$t,setScissorTest:St,activeTexture:Nt,bindTexture:B,unbindTexture:gn,compressedTexImage2D:nt,compressedTexImage3D:P,texImage2D:ee,texImage3D:ie,pixelStorei:Re,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Ie,texStorage2D:le,texStorage3D:ue,texSubImage2D:E,texSubImage3D:G,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:pe,viewport:de,reset:ze}}function wU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap,d=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return m?new OffscreenCanvas(P,E):vu("canvas")}function g(P,E,G){let $=1;const J=nt(P);if((J.width>G||J.height>G)&&($=G/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor($*J.width),ue=Math.floor($*J.height);u===void 0&&(u=M(le,ue));const ee=E?M(le,ue):u;return ee.width=le,ee.height=ue,ee.getContext("2d").drawImage(P,0,0,le,ue),Ue("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+le+"x"+ue+")."),ee}else return"data"in P&&Ue("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function h(P){return P.generateMipmaps}function x(P){t.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,E,G,$,J,le=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;$&&(ue=e.get("EXT_texture_norm16"),ue||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=E;if(E===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8),G===t.UNSIGNED_SHORT&&ue&&(ee=ue.R16_EXT),G===t.SHORT&&ue&&(ee=ue.R16_SNORM_EXT)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),E===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8),G===t.UNSIGNED_SHORT&&ue&&(ee=ue.RG16_EXT),G===t.SHORT&&ue&&(ee=ue.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),G===t.UNSIGNED_INT&&(ee=t.RGB32UI),G===t.BYTE&&(ee=t.RGB8I),G===t.SHORT&&(ee=t.RGB16I),G===t.INT&&(ee=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),G===t.UNSIGNED_INT&&(ee=t.RGBA32UI),G===t.BYTE&&(ee=t.RGBA8I),G===t.SHORT&&(ee=t.RGBA16I),G===t.INT&&(ee=t.RGBA32I)),E===t.RGB&&(G===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGB16_EXT),G===t.SHORT&&ue&&(ee=ue.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),E===t.RGBA){const ie=le?mu:Xe.getTransfer(J);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=ie===it?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGBA16_EXT),G===t.SHORT&&ue&&(ee=ue.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function A(P,E){let G;return P?E===null||E===Di||E===Ya?G=t.DEPTH24_STENCIL8:E===wi?G=t.DEPTH32F_STENCIL8:E===qa&&(G=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Di||E===Ya?G=t.DEPTH_COMPONENT24:E===wi?G=t.DEPTH_COMPONENT32F:E===qa&&(G=t.DEPTH_COMPONENT16),G}function w(P,E){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kt&&P.minFilter!==on?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){const E=P.target;E.removeEventListener("dispose",R),b(E),E.isVideoTexture&&f.delete(E),E.isHTMLTexture&&d.delete(E)}function _(P){const E=P.target;E.removeEventListener("dispose",_),I(E)}function b(P){const E=i.get(P);if(E.__webglInit===void 0)return;const G=P.source,$=p.get(G);if($){const J=$[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(P),Object.keys($).length===0&&p.delete(G)}i.remove(P)}function N(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const G=P.source,$=p.get(G);delete $[E.__cacheKey],o.memory.textures--}function I(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let J=0;J<E.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[$][J]);else t.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)t.deleteFramebuffer(E.__webglFramebuffer[$]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=P.textures;for(let $=0,J=G.length;$<J;$++){const le=i.get(G[$]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(G[$])}i.remove(P)}let C=0;function D(){C=0}function k(){return C}function U(P){C=P}function O(){const P=C;return P>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),C+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function L(P,E){const G=i.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const $=P.image;if($===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(G,P,E);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function z(P,E){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Ae(G,P,E);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function X(P,E){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Ae(G,P,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function K(P,E){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Fe(G,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const te={[Zh]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[Qh]:t.MIRRORED_REPEAT},Me={[Kt]:t.NEAREST,[$3]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[Hf]:t.LINEAR_MIPMAP_NEAREST,[cs]:t.LINEAR_MIPMAP_LINEAR},Be={[K3]:t.NEVER,[tP]:t.ALWAYS,[Z3]:t.LESS,[ug]:t.LEQUAL,[Q3]:t.EQUAL,[fg]:t.GEQUAL,[J3]:t.GREATER,[eP]:t.NOTEQUAL};function Oe(P,E){if(E.type===wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===on||E.magFilter===Hf||E.magFilter===Fl||E.magFilter===cs||E.minFilter===on||E.minFilter===Hf||E.minFilter===Fl||E.minFilter===cs)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,te[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,te[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,te[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Me[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==Fl&&E.minFilter!==cs||E.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Q(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));const $=E.source;let J=p.get($);J===void 0&&(J={},p.set($,J));const le=H(E);if(le!==P.__cacheKey){J[le]===void 0&&(J[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[le].usedTimes++;const ue=J[P.__cacheKey];ue!==void 0&&(J[P.__cacheKey].usedTimes--,ue.usedTimes===0&&N(E)),P.__cacheKey=le,P.__webglTexture=J[le].texture}return G}function ae(P,E,G){return Math.floor(Math.floor(P/G)/E)}function se(P,E,G,$){const le=P.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,G,$,E.data);else{le.sort((Re,pe)=>Re.start-pe.start);let ue=0;for(let Re=1;Re<le.length;Re++){const pe=le[ue],de=le[Re],Le=pe.start+pe.count,Ie=ae(de.start,E.width,4),ze=ae(pe.start,E.width,4);de.start<=Le+1&&Ie===ze&&ae(de.start+de.count-1,E.width,4)===Ie?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ue,le[ue]=de)}le.length=ue+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Re=0,pe=le.length;Re<pe;Re++){const de=le[Re],Le=Math.floor(de.start/4),Ie=Math.ceil(de.count/4),ze=Le%E.width,F=Math.floor(Le/E.width),ce=Ie,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,ze,F,ce,ne,G,$,E.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Ae(P,E,G){let $=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=t.TEXTURE_3D);const J=Q(P,E),le=E.source;n.bindTexture($,P.__webglTexture,t.TEXTURE0+G);const ue=i.get(le);if(le.version!==ue.__version||J===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ne=Xe.getPrimaries(Xe.workingColorSpace),he=E.colorSpace===Mr?null:Xe.getPrimaries(E.colorSpace),xe=E.colorSpace===Mr||ne===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let ie=g(E.image,!1,r.maxTextureSize);ie=gn(E,ie);const fe=s.convert(E.format,E.colorSpace),Re=s.convert(E.type);let pe=y(E.internalFormat,fe,Re,E.normalized,E.colorSpace,E.isVideoTexture);Oe($,E);let de;const Le=E.mipmaps,Ie=E.isVideoTexture!==!0,ze=ue.__version===void 0||J===!0,F=le.dataReady,ce=w(E,ie);if(E.isDepthTexture)pe=A(E.format===us,E.type),ze&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,pe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,pe,ie.width,ie.height,0,fe,Re,null));else if(E.isDataTexture)if(Le.length>0){Ie&&ze&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Le[0].width,Le[0].height);for(let ne=0,he=Le.length;ne<he;ne++)de=Le[ne],Ie?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,de.width,de.height,fe,Re,de.data):n.texImage2D(t.TEXTURE_2D,ne,pe,de.width,de.height,0,fe,Re,de.data);E.generateMipmaps=!1}else Ie?(ze&&n.texStorage2D(t.TEXTURE_2D,ce,pe,ie.width,ie.height),F&&se(E,ie,fe,Re)):n.texImage2D(t.TEXTURE_2D,0,pe,ie.width,ie.height,0,fe,Re,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,Le[0].width,Le[0].height,ie.depth);for(let ne=0,he=Le.length;ne<he;ne++)if(de=Le[ne],E.format!==ai)if(fe!==null)if(Ie){if(F)if(E.layerUpdates.size>0){const xe=jx(de.width,de.height,E.format,E.type);for(const re of E.layerUpdates){const be=de.data.subarray(re*xe/de.data.BYTES_PER_ELEMENT,(re+1)*xe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,re,de.width,de.height,1,fe,be)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,ie.depth,fe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,pe,de.width,de.height,ie.depth,0,de.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,ie.depth,fe,Re,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,pe,de.width,de.height,ie.depth,0,fe,Re,de.data)}else{Ie&&ze&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Le[0].width,Le[0].height);for(let ne=0,he=Le.length;ne<he;ne++)de=Le[ne],E.format!==ai?fe!==null?Ie?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,de.width,de.height,fe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,pe,de.width,de.height,0,de.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,de.width,de.height,fe,Re,de.data):n.texImage2D(t.TEXTURE_2D,ne,pe,de.width,de.height,0,fe,Re,de.data)}else if(E.isDataArrayTexture)if(Ie){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,ie.width,ie.height,ie.depth),F)if(E.layerUpdates.size>0){const ne=jx(ie.width,ie.height,E.format,E.type);for(const he of E.layerUpdates){const xe=ie.data.subarray(he*ne/ie.data.BYTES_PER_ELEMENT,(he+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ie.width,ie.height,1,fe,Re,xe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ie.width,ie.height,ie.depth,0,fe,Re,ie.data);else if(E.isData3DTexture)Ie?(ze&&n.texStorage3D(t.TEXTURE_3D,ce,pe,ie.width,ie.height,ie.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ie.width,ie.height,ie.depth,0,fe,Re,ie.data);else if(E.isFramebufferTexture){if(ze)if(Ie)n.texStorage2D(t.TEXTURE_2D,ce,pe,ie.width,ie.height);else{let ne=ie.width,he=ie.height;for(let xe=0;xe<ce;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,ne,he,0,fe,Re,null),ne>>=1,he>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),d.add(E),ne.onpaint=he=>{const xe=he.changedElements;for(const re of d)xe.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const xe=t.RGBA,re=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,re,be,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ie&&ze){const ne=nt(Le[0]);n.texStorage2D(t.TEXTURE_2D,ce,pe,ne.width,ne.height)}for(let ne=0,he=Le.length;ne<he;ne++)de=Le[ne],Ie?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe,Re,de):n.texImage2D(t.TEXTURE_2D,ne,pe,fe,Re,de);E.generateMipmaps=!1}else if(Ie){if(ze){const ne=nt(ie);n.texStorage2D(t.TEXTURE_2D,ce,pe,ne.width,ne.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,pe,fe,Re,ie);h(E)&&x($),ue.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Fe(P,E,G){if(E.image.length!==6)return;const $=Q(P,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+G);const le=i.get(J);if(J.version!==le.__version||$===!0){n.activeTexture(t.TEXTURE0+G);const ue=Xe.getPrimaries(Xe.workingColorSpace),ee=E.colorSpace===Mr?null:Xe.getPrimaries(E.colorSpace),ie=E.colorSpace===Mr||ue===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,Re=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!fe&&!Re?pe[re]=g(E.image[re],!0,r.maxCubemapSize):pe[re]=Re?E.image[re].image:E.image[re],pe[re]=gn(E,pe[re]);const de=pe[0],Le=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type),ze=y(E.internalFormat,Le,Ie,E.normalized,E.colorSpace),F=E.isVideoTexture!==!0,ce=le.__version===void 0||$===!0,ne=J.dataReady;let he=w(E,de);Oe(t.TEXTURE_CUBE_MAP,E);let xe;if(fe){F&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,de.width,de.height);for(let re=0;re<6;re++){xe=pe[re].mipmaps;for(let be=0;be<xe.length;be++){const Te=xe[be];E.format!==ai?Le!==null?F?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,Te.width,Te.height,Le,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,ze,Te.width,Te.height,0,Te.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,Te.width,Te.height,Le,Ie,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,ze,Te.width,Te.height,0,Le,Ie,Te.data)}}}else{if(xe=E.mipmaps,F&&ce){xe.length>0&&he++;const re=nt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,re.width,re.height)}for(let re=0;re<6;re++)if(Re){F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,Le,Ie,pe[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,pe[re].width,pe[re].height,0,Le,Ie,pe[re].data);for(let be=0;be<xe.length;be++){const Mt=xe[be].image[re].image;F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Mt.width,Mt.height,Le,Ie,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,ze,Mt.width,Mt.height,0,Le,Ie,Mt.data)}}else{F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,Ie,pe[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Le,Ie,pe[re]);for(let be=0;be<xe.length;be++){const Te=xe[be];F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Le,Ie,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,ze,Le,Ie,Te.image[re])}}}h(E)&&x(t.TEXTURE_CUBE_MAP),le.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function De(P,E,G,$,J,le){const ue=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),ie=y(G.internalFormat,ue,ee,G.normalized,G.colorSpace),fe=i.get(E),Re=i.get(G);if(Re.__renderTarget=E,!fe.__hasExternalTextures){const pe=Math.max(1,E.width>>le),de=Math.max(1,E.height>>le);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,le,ie,pe,de,E.depth,0,ue,ee,null):n.texImage2D(J,le,ie,pe,de,0,ue,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Nt(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,Re.__webglTexture,0,St(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,Re.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(P,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const $=E.depthTexture,J=$&&$.isDepthTexture?$.type:null,le=A(E.stencilBuffer,J),ue=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Nt(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(E),le,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(E),le,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,le,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,P)}else{const $=E.textures;for(let J=0;J<$.length;J++){const le=$[J],ue=s.convert(le.format,le.colorSpace),ee=s.convert(le.type),ie=y(le.internalFormat,ue,ee,le.normalized,le.colorSpace);Nt(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(E),ie,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(E),ie,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function je(P,E,G){const $=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(E.depthTexture);if(J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,E.depthTexture);const fe=s.convert(E.depthTexture.format),Re=s.convert(E.depthTexture.type);let pe;E.depthTexture.format===nr?pe=t.DEPTH_COMPONENT24:E.depthTexture.format===us&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,E.width,E.height,0,fe,Re,null)}}else L(E.depthTexture,0);const le=J.__webglTexture,ue=St(E),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ie=E.depthTexture.format===us?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===nr)Nt(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,le,0);else if(E.depthTexture.format===us)Nt(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(P){const E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=$}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)je(E.__webglFramebuffer[$],P,$);else{const $=P.texture.mipmaps;$&&$.length>0?je(E.__webglFramebuffer[0],P,0):je(E.__webglFramebuffer,P,0)}else if(G){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=t.createRenderbuffer(),vt(E.__webglDepthbuffer[$],P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}else{const $=P.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),vt(E.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(P,E,G){const $=i.get(P);E!==void 0&&De($.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ot(P)}function qe(P){const E=P.texture,G=i.get(P),$=i.get(E);P.addEventListener("dispose",_);const J=P.textures,le=P.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=E.version,o.memory.textures++),le){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let ie=0;ie<E.mipmaps.length;ie++)G.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else G.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<E.mipmaps.length;ee++)G.__webglFramebuffer[ee]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ue)for(let ee=0,ie=J.length;ee<ie;ee++){const fe=i.get(J[ee]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Nt(P)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ie=J[ee];G.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const fe=s.convert(ie.format,ie.colorSpace),Re=s.convert(ie.type),pe=y(ie.internalFormat,fe,Re,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),de=St(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),vt(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,E);for(let ee=0;ee<6;ee++)if(E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)De(G.__webglFramebuffer[ee][ie],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else De(G.__webglFramebuffer[ee],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(E)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let ee=0,ie=J.length;ee<ie;ee++){const fe=J[ee],Re=i.get(fe);let pe=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Re.__webglTexture),Oe(pe,fe),De(G.__webglFramebuffer,P,fe,t.COLOR_ATTACHMENT0+ee,pe,0),h(fe)&&x(pe)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),Oe(ee,E),E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)De(G.__webglFramebuffer[ie],P,E,t.COLOR_ATTACHMENT0,ee,ie);else De(G.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ee,0);h(E)&&x(ee),n.unbindTexture()}P.depthBuffer&&ot(P)}function Pt(P){const E=P.textures;for(let G=0,$=E.length;G<$;G++){const J=E[G];if(h(J)){const le=S(P),ue=i.get(J).__webglTexture;n.bindTexture(le,ue),x(le),n.unbindTexture()}}}const Ft=[],Ht=[];function $t(P){if(P.samples>0){if(Nt(P)===!1){const E=P.textures,G=P.width,$=P.height;let J=t.COLOR_BUFFER_BIT;const le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(P),ee=E.length>1;if(ee)for(let fe=0;fe<E.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ie=P.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Re=i.get(E[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,G,$,0,0,G,$,J,t.NEAREST),l===!0&&(Ft.length=0,Ht.length=0,Ft.push(t.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ft.push(le),Ht.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let fe=0;fe<E.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Re=i.get(E[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function St(P){return Math.min(r.maxSamples,P.samples)}function Nt(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(P){const E=o.render.frame;f.get(P)!==E&&(f.set(P,E),P.update())}function gn(P,E){const G=P.colorSpace,$=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==pu&&G!==Mr&&(Xe.getTransfer(G)===it?($!==ai||J!==Hn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),E}function nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.getTextureUnits=k,this.setTextureUnits=U,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=et,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function AU(t,e){function n(i,r=Mr){let s;const o=Xe.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===sg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===og)return t.UNSIGNED_SHORT_5_5_5_1;if(i===UM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===FM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===DM)return t.BYTE;if(i===IM)return t.SHORT;if(i===qa)return t.UNSIGNED_SHORT;if(i===rg)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===kM)return t.ALPHA;if(i===OM)return t.RGB;if(i===ai)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===us)return t.DEPTH_STENCIL;if(i===BM)return t.RED;if(i===ag)return t.RED_INTEGER;if(i===Ss)return t.RG;if(i===lg)return t.RG_INTEGER;if(i===cg)return t.RGBA_INTEGER;if(i===Ac||i===Cc||i===bc||i===Rc)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===np)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ip||i===rp||i===sp||i===op||i===ap||i===du||i===lp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ip||i===rp)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===op)return s.COMPRESSED_R11_EAC;if(i===ap)return s.COMPRESSED_SIGNED_R11_EAC;if(i===du)return s.COMPRESSED_RG11_EAC;if(i===lp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p||i===yp||i===Sp||i===Mp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===up)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_p)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ep||i===Tp||i===wp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ep)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ap||i===Cp||i===hu||i===bp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ap)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const CU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new YM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:CU,fragmentShader:bU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ii(new cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PU extends ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,m=null;const M=typeof XRWebGLBinding<"u",g=new RU,h={},x=n.getContextAttributes();let S=null,y=null;const A=[],w=[],R=new Je;let _=null;const b=new ri;b.viewport=new At;const N=new ri;N.viewport=new At;const I=[b,N],C=new zP;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=A[Q];return ae===void 0&&(ae=new Kf,A[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=A[Q];return ae===void 0&&(ae=new Kf,A[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=A[Q];return ae===void 0&&(ae=new Kf,A[Q]=ae),ae.getHandSpace()};function U(Q){const ae=w.indexOf(Q.inputSource);if(ae===-1)return;const se=A[ae];se!==void 0&&(se.update(Q.inputSource,Q.frame,c||o),se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",H);for(let Q=0;Q<A.length;Q++){const ae=w[Q];ae!==null&&(w[Q]=null,A[Q].disconnect(ae))}D=null,k=null,g.reset();for(const Q in h)delete h[Q];e.setRenderTarget(S),p=null,u=null,d=null,r=null,y=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ae=null,Fe=null;x.depth&&(Fe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?us:nr,Ae=x.stencil?Ya:Di);const De={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(De),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ni(u.textureWidth,u.textureHeight,{format:ai,type:Hn,depthTexture:new Po(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ni(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Q){for(let ae=0;ae<Q.removed.length;ae++){const se=Q.removed[ae],Ae=w.indexOf(se);Ae>=0&&(w[Ae]=null,A[Ae].disconnect(se))}for(let ae=0;ae<Q.added.length;ae++){const se=Q.added[ae];let Ae=w.indexOf(se);if(Ae===-1){for(let De=0;De<A.length;De++)if(De>=w.length){w.push(se),Ae=De;break}else if(w[De]===null){w[De]=se,Ae=De;break}if(Ae===-1)break}const Fe=A[Ae];Fe&&Fe.connect(se)}}const L=new q,z=new q;function X(Q,ae,se){L.setFromMatrixPosition(ae.matrixWorld),z.setFromMatrixPosition(se.matrixWorld);const Ae=L.distanceTo(z),Fe=ae.projectionMatrix.elements,De=se.projectionMatrix.elements,vt=Fe[14]/(Fe[10]-1),je=Fe[14]/(Fe[10]+1),ot=(Fe[9]+1)/Fe[5],et=(Fe[9]-1)/Fe[5],qe=(Fe[8]-1)/Fe[0],Pt=(De[8]+1)/De[0],Ft=vt*qe,Ht=vt*Pt,$t=Ae/(-qe+Pt),St=$t*-qe;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(St),Q.translateZ($t),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Nt=vt+$t,B=je+$t,gn=Ft-St,nt=Ht+(Ae-St),P=ot*je/B*Nt,E=et*je/B*Nt;Q.projectionMatrix.makePerspective(gn,nt,P,E,Nt,B),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function K(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,se=Q.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(se=g.depthFar)),C.near=N.near=b.near=ae,C.far=N.far=b.far=se,(D!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,k=C.far),C.layers.mask=Q.layers.mask|6,b.layers.mask=C.layers.mask&-5,N.layers.mask=C.layers.mask&-3;const Ae=Q.parent,Fe=C.cameras;K(C,Ae);for(let De=0;De<Fe.length;De++)K(Fe[De],Ae);Fe.length===2?X(C,b,N):C.projectionMatrix.copy(b.projectionMatrix),te(Q,C,Ae)};function te(Q,ae,se){se===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Rp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(Q){return h[Q]};let Me=null;function Be(Q,ae){if(f=ae.getViewerPose(c||o),m=ae,f!==null){const se=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ae=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Ae=!0);for(let je=0;je<se.length;je++){const ot=se[je];let et=null;if(p!==null)et=p.getViewport(ot);else{const Pt=d.getViewSubImage(u,ot);et=Pt.viewport,je===0&&(e.setRenderTargetTextures(y,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(y))}let qe=I[je];qe===void 0&&(qe=new ri,qe.layers.enable(je),qe.viewport=new At,I[je]=qe),qe.matrix.fromArray(ot.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ot.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(et.x,et.y,et.width,et.height),je===0&&(C.matrix.copy(qe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ae===!0&&C.cameras.push(qe)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const je=d.getDepthInformation(se[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(Fe&&Fe.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<se.length;je++){const ot=se[je].camera;if(ot){let et=h[ot];et||(et=new YM,h[ot]=et);const qe=d.getCameraImage(ot);et.sourceTexture=qe}}}}for(let se=0;se<A.length;se++){const Ae=w[se],Fe=A[se];Ae!==null&&Fe!==void 0&&Fe.update(Ae,ae,c||o)}Me&&Me(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}const Oe=new QM;Oe.setAnimationLoop(Be),this.setAnimationLoop=function(Q){Me=Q},this.dispose=function(){}}}const NU=new Ut,sE=new ke;sE.set(-1,0,0,0,1,0,0,0,1);function LU(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,KM(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,x,S,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),M(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,x,S):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Tn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Tn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const x=e.get(h),S=x.envMap,y=x.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(NU.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(sE),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,x,S){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*x,g.scale.value=S*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,x){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){const x=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const w=A.program;i.uniformBlockBinding(y,w)}function c(y,A){let w=r[y.id];w===void 0&&(g(y),w=f(y),r[y.id]=w,y.addEventListener("dispose",x));const R=A.program;i.updateUBOMapping(y,R);const _=e.render.frame;s[y.id]!==_&&(u(y),s[y.id]=_)}function f(y){const A=d();y.__bindingPointIndex=A;const w=t.createBuffer(),R=y.__size,_=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,w),w}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const A=r[y.id],w=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let _=0,b=w.length;_<b;_++){const N=w[_];if(Array.isArray(N))for(let I=0,C=N.length;I<C;I++)p(N[I],_,I,R);else p(N,_,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,A,w,R){if(M(y,A,w,R)===!0){const _=y.__offset,b=y.value;if(Array.isArray(b)){let N=0;for(let I=0;I<b.length;I++){const C=b[I],D=h(C);m(C,y.__data,N),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,y.__data)}}function m(y,A,w){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,w)}function M(y,A,w,R){const _=y.value,b=A+"_"+w;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const N=R[b];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function g(y){const A=y.uniforms;let w=0;const R=16;for(let b=0,N=A.length;b<N;b++){const I=Array.isArray(A[b])?A[b]:[A[b]];for(let C=0,D=I.length;C<D;C++){const k=I[C],U=Array.isArray(k.value)?k.value:[k.value];for(let O=0,H=U.length;O<H;O++){const L=U[O],z=h(L),X=w%R,K=X%z.boundary,te=X+K;w+=K,te!==0&&R-te<z.storage&&(w+=R-te),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=z.storage}}}const _=w%R;return _>0&&(w+=R-_),y.__size=w,y.__cache={},this}function h(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",y),A}function x(y){const A=y.target;A.removeEventListener("dispose",x);const w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const IU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function UU(){return _i===null&&(_i=new CP(IU,16,16,Ss,tr),_i.name="DFG_LUT",_i.minFilter=on,_i.magFilter=on,_i.wrapS=Xi,_i.wrapT=Xi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class FU{constructor(e={}){const{canvas:n=iP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const M=p,g=new Set([cg,lg,ag]),h=new Set([Hn,Di,qa,Ya,sg,og]),x=new Uint32Array(4),S=new Int32Array(4),y=new q;let A=null,w=null;const R=[],_=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,C=null,D=null,k=null,U=null;this._outputColorSpace=Bn;let O=0,H=0,L=null,z=-1,X=null;const K=new At,te=new At;let Me=null;const Be=new tt(0);let Oe=0,Q=n.width,ae=n.height,se=1,Ae=null,Fe=null;const De=new At(0,0,Q,ae),vt=new At(0,0,Q,ae);let je=!1;const ot=new $M;let et=!1,qe=!1;const Pt=new Ut,Ft=new q,Ht=new At,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Nt(){return L===null?se:1}let B=i;function gn(T,V){return n.getContext(T,V)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ig}`),n.addEventListener("webglcontextlost",Mt,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",pi,!1),B===null){const V="webgl2";if(B=gn(V,T),B===null)throw gn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ke("WebGLRenderer: "+T.message),T}let nt,P,E,G,$,J,le,ue,ee,ie,fe,Re,pe,de,Le,Ie,ze,F,ce,ne,he,xe,re;function be(){nt=new UD(B),nt.init(),he=new AU(B,nt),P=new CD(B,nt,e,he),E=new TU(B,nt),P.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),D=B.createFramebuffer(),k=B.createFramebuffer(),U=B.createFramebuffer(),G=new OD(B),$=new uU,J=new wU(B,nt,E,$,P,he,G),le=new ID(N),ue=new HP(B),xe=new wD(B,ue),ee=new FD(B,ue,G,xe),ie=new zD(B,ee,ue,xe,G),F=new BD(B,P,J),Le=new bD($),fe=new cU(N,le,nt,P,xe,Le),Re=new LU(N,$),pe=new dU,de=new xU(nt),ze=new TD(N,le,E,ie,m,l),Ie=new EU(N,ie,P),re=new DU(B,G,P,E),ce=new AD(B,nt,G),ne=new kD(B,nt,G),G.programs=fe.programs,N.capabilities=P,N.extensions=nt,N.properties=$,N.renderLists=pe,N.shadowMap=Ie,N.state=E,N.info=G}be(),M!==Hn&&(b=new HD(M,n.width,n.height,a,r,s));const Te=new PU(N,B);this.xr=Te,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(Q,ae,!1))},this.getSize=function(T){return T.set(Q,ae)},this.setSize=function(T,V,Y=!0){if(Te.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,ae=V,n.width=Math.floor(T*se),n.height=Math.floor(V*se),Y===!0&&(n.style.width=T+"px",n.style.height=V+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Q*se,ae*se).floor()},this.setDrawingBufferSize=function(T,V,Y){Q=T,ae=V,se=Y,n.width=Math.floor(T*Y),n.height=Math.floor(V*Y),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(M===Hn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(De)},this.setViewport=function(T,V,Y,W){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,V,Y,W),E.viewport(K.copy(De).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(vt)},this.setScissor=function(T,V,Y,W){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,V,Y,W),E.scissor(te.copy(vt).multiplyScalar(se).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){E.setScissorTest(je=T)},this.setOpaqueSort=function(T){Ae=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,Y=!0){let W=0;if(T){let j=!1;if(L!==null){const ve=L.texture.format;j=g.has(ve)}if(j){const ve=L.texture.type,ye=h.has(ve),ge=ze.getClearColor(),we=ze.getClearAlpha(),Pe=ge.r,Ve=ge.g,Ge=ge.b;ye?(x[0]=Pe,x[1]=Ve,x[2]=Ge,x[3]=we,B.clearBufferuiv(B.COLOR,0,x)):(S[0]=Pe,S[1]=Ve,S[2]=Ge,S[3]=we,B.clearBufferiv(B.COLOR,0,S))}else W|=B.COLOR_BUFFER_BIT}V&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),C=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),ze.dispose(),pe.dispose(),de.dispose(),$.dispose(),le.dispose(),ie.dispose(),xe.dispose(),re.dispose(),fe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",wg),Te.removeEventListener("sessionend",Ag),Wr.stop()};function Mt(T){T.preventDefault(),Ax("WebGLRenderer: Context Lost."),I=!0}function ft(){Ax("WebGLRenderer: Context Restored."),I=!1;const T=G.autoReset,V=Ie.enabled,Y=Ie.autoUpdate,W=Ie.needsUpdate,j=Ie.type;be(),G.autoReset=T,Ie.enabled=V,Ie.autoUpdate=Y,Ie.needsUpdate=W,Ie.type=j}function pi(T){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mi(T){const V=T.target;V.removeEventListener("dispose",mi),hE(V)}function hE(T){pE(T),$.remove(T)}function pE(T){const V=$.get(T).programs;V!==void 0&&(V.forEach(function(Y){fe.releaseProgram(Y)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Y,W,j,ve){V===null&&(V=$t);const ye=j.isMesh&&j.matrixWorld.determinantAffine()<0,ge=vE(T,V,Y,W,j);E.setMaterial(W,ye);let we=Y.index,Pe=1;if(W.wireframe===!0){if(we=ee.getWireframeAttribute(Y),we===void 0)return;Pe=2}const Ve=Y.drawRange,Ge=Y.attributes.position;let Ne=Ve.start*Pe,st=(Ve.start+Ve.count)*Pe;ve!==null&&(Ne=Math.max(Ne,ve.start*Pe),st=Math.min(st,(ve.start+ve.count)*Pe)),we!==null?(Ne=Math.max(Ne,0),st=Math.min(st,we.count)):Ge!=null&&(Ne=Math.max(Ne,0),st=Math.min(st,Ge.count));const Ct=st-Ne;if(Ct<0||Ct===1/0)return;xe.setup(j,W,ge,Y,we);let Et,at=ce;if(we!==null&&(Et=ue.get(we),at=ne,at.setIndex(Et)),j.isMesh)W.wireframe===!0?(E.setLineWidth(W.wireframeLinewidth*Nt()),at.setMode(B.LINES)):at.setMode(B.TRIANGLES);else if(j.isLine){let Jt=W.linewidth;Jt===void 0&&(Jt=1),E.setLineWidth(Jt*Nt()),j.isLineSegments?at.setMode(B.LINES):j.isLineLoop?at.setMode(B.LINE_LOOP):at.setMode(B.LINE_STRIP)}else j.isPoints?at.setMode(B.POINTS):j.isSprite&&at.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,_e=j._multiDrawCounts,wn=j._multiDrawCount,Ye=we?ue.get(we).bytesPerElement:1,kn=$.get(W).currentProgram.getUniforms();for(let gi=0;gi<wn;gi++)kn.setValue(B,"_gl_DrawID",gi),at.render(Jt[gi]/Ye,_e[gi])}else if(j.isInstancedMesh)at.renderInstances(Ne,Ct,j.count);else if(Y.isInstancedBufferGeometry){const Jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_e=Math.min(Y.instanceCount,Jt);at.renderInstances(Ne,Ct,_e)}else at.render(Ne,Ct)};function Tg(T,V,Y){T.transparent===!0&&T.side===Gi&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,dl(T,V,Y),T.side=Br,T.needsUpdate=!0,dl(T,V,Y),T.side=Gi):dl(T,V,Y)}this.compile=function(T,V,Y=null){Y===null&&(Y=T),w=de.get(Y),w.init(V),_.push(w),Y.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),T!==Y&&T.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights();const W=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const ge=ve[ye];Tg(ge,Y,j),W.add(ge)}else Tg(ve,Y,j),W.add(ve)}),w=_.pop(),W},this.compileAsync=function(T,V,Y=null){const W=this.compile(T,V,Y);return new Promise(j=>{function ve(){if(W.forEach(function(ye){$.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){j(T);return}setTimeout(ve,10)}nt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let qu=null;function mE(T){qu&&qu(T)}function wg(){Wr.stop()}function Ag(){Wr.start()}const Wr=new QM;Wr.setAnimationLoop(mE),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(T){qu=T,Te.setAnimationLoop(T),T===null?Wr.stop():Wr.start()},Te.addEventListener("sessionstart",wg),Te.addEventListener("sessionend",Ag),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C!==null&&C.renderStart(T,V);const Y=Te.enabled===!0&&Te.isPresenting===!0,W=b!==null&&(L===null||Y)&&b.begin(N,L);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(V),V=Te.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,V,L),w=de.get(T,_.length),w.init(V),w.state.textureUnits=J.getTextureUnits(),_.push(w),Pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ot.setFromProjectionMatrix(Pt,Ai,V.reversedDepth),qe=this.localClippingEnabled,et=Le.init(this.clippingPlanes,qe),A=pe.get(T,R.length),A.init(),R.push(A),Te.enabled===!0&&Te.isPresenting===!0){const ye=N.xr.getDepthSensingMesh();ye!==null&&Yu(ye,V,-1/0,N.sortObjects)}Yu(T,V,0,N.sortObjects),A.finish(),N.sortObjects===!0&&A.sort(Ae,Fe,V.reversedDepth),St=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,St&&ze.addToRenderList(A,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Le.beginShadows();const j=w.state.shadowsArray;if(Ie.render(j,T,V),et===!0&&Le.endShadows(),(W&&b.hasRenderPass())===!1){const ye=A.opaque,ge=A.transmissive;if(w.setupLights(),V.isArrayCamera){const we=V.cameras;if(ge.length>0)for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){const Ge=we[Pe];bg(ye,ge,T,Ge)}St&&ze.render(T);for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){const Ge=we[Pe];Cg(A,T,Ge,Ge.viewport)}}else ge.length>0&&bg(ye,ge,T,V),St&&ze.render(T),Cg(A,T,V)}L!==null&&H===0&&(J.updateMultisampleRenderTarget(L),J.updateRenderTargetMipmap(L)),W&&b.end(N),T.isScene===!0&&T.onAfterRender(N,T,V),xe.resetDefaultState(),z=-1,X=null,_.pop(),_.length>0?(w=_[_.length-1],J.setTextureUnits(w.state.textureUnits),et===!0&&Le.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,C!==null&&C.renderEnd()};function Yu(T,V,Y,W){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ot.intersectsSprite(T)){W&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pt);const ye=ie.update(T),ge=T.material;ge.visible&&A.push(T,ye,ge,Y,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ot.intersectsObject(T))){const ye=ie.update(T),ge=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ht.copy(ye.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(Pt)),Array.isArray(ge)){const we=ye.groups;for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){const Ge=we[Pe],Ne=ge[Ge.materialIndex];Ne&&Ne.visible&&A.push(T,ye,Ne,Y,Ht.z,Ge)}}else ge.visible&&A.push(T,ye,ge,Y,Ht.z,null)}}const ve=T.children;for(let ye=0,ge=ve.length;ye<ge;ye++)Yu(ve[ye],V,Y,W)}function Cg(T,V,Y,W){const{opaque:j,transmissive:ve,transparent:ye}=T;w.setupLightsView(Y),et===!0&&Le.setGlobalState(N.clippingPlanes,Y),W&&E.viewport(K.copy(W)),j.length>0&&fl(j,V,Y),ve.length>0&&fl(ve,V,Y),ye.length>0&&fl(ye,V,Y),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function bg(T,V,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Ne=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Ni(1,1,{generateMipmaps:!0,type:Ne?tr:Hn,minFilter:cs,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ve=w.state.transmissionRenderTarget[W.id],ye=W.viewport||K;ve.setSize(ye.z*N.transmissionResolutionScale,ye.w*N.transmissionResolutionScale);const ge=N.getRenderTarget(),we=N.getActiveCubeFace(),Pe=N.getActiveMipmapLevel();N.setRenderTarget(ve),N.getClearColor(Be),Oe=N.getClearAlpha(),Oe<1&&N.setClearColor(16777215,.5),N.clear(),St&&ze.render(Y);const Ve=N.toneMapping;N.toneMapping=Pi;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),et===!0&&Le.setGlobalState(N.clippingPlanes,W),fl(T,Y,W),J.updateMultisampleRenderTarget(ve),J.updateRenderTargetMipmap(ve),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let st=0,Ct=V.length;st<Ct;st++){const Et=V[st],{object:at,geometry:Jt,material:_e,group:wn}=Et;if(_e.side===Gi&&at.layers.test(W.layers)){const Ye=_e.side;_e.side=Tn,_e.needsUpdate=!0,Rg(at,Y,W,Jt,_e,wn),_e.side=Ye,_e.needsUpdate=!0,Ne=!0}}Ne===!0&&(J.updateMultisampleRenderTarget(ve),J.updateRenderTargetMipmap(ve))}N.setRenderTarget(ge,we,Pe),N.setClearColor(Be,Oe),Ge!==void 0&&(W.viewport=Ge),N.toneMapping=Ve}function fl(T,V,Y){const W=V.isScene===!0?V.overrideMaterial:null;for(let j=0,ve=T.length;j<ve;j++){const ye=T[j],{object:ge,geometry:we,group:Pe}=ye;let Ve=ye.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),ge.layers.test(Y.layers)&&Rg(ge,V,Y,we,Ve,Pe)}}function Rg(T,V,Y,W,j,ve){T.onBeforeRender(N,V,Y,W,j,ve),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(N,V,Y,W,T,ve),j.transparent===!0&&j.side===Gi&&j.forceSinglePass===!1?(j.side=Tn,j.needsUpdate=!0,N.renderBufferDirect(Y,V,W,j,T,ve),j.side=Br,j.needsUpdate=!0,N.renderBufferDirect(Y,V,W,j,T,ve),j.side=Gi):N.renderBufferDirect(Y,V,W,j,T,ve),T.onAfterRender(N,V,Y,W,j,ve)}function dl(T,V,Y){V.isScene!==!0&&(V=$t);const W=$.get(T),j=w.state.lights,ve=w.state.shadowsArray,ye=j.state.version,ge=fe.getParameters(T,j.state,ve,V,Y,w.state.lightProbeGridArray),we=fe.getProgramCacheKey(ge);let Pe=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,W.fog=V.fog;const Ve=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=le.get(T.envMap||W.environment,Ve),W.envMapRotation=W.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",mi),Pe=new Map,W.programs=Pe);let Ge=Pe.get(we);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===ye)return Ng(T,ge),Ge}else ge.uniforms=fe.getUniforms(T),C!==null&&T.isNodeMaterial&&C.build(T,Y,ge),T.onBeforeCompile(ge,N),Ge=fe.acquireProgram(ge,we),Pe.set(we,Ge),W.uniforms=ge.uniforms;const Ne=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=Le.uniform),Ng(T,ge),W.needsLights=_E(T),W.lightsStateVersion=ye,W.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=Ge,W.uniformsList=null,Ge}function Pg(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Pc.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Ng(T,V){const Y=$.get(T);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function gE(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(V.matrixWorld);for(let Y=0,W=T.length;Y<W;Y++){const j=T[Y];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function vE(T,V,Y,W,j){V.isScene!==!0&&(V=$t),J.resetTextureUnits();const ve=V.fog,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?V.environment:null,ge=L===null?N.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xe.workingColorSpace,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=le.get(W.envMap||ye,we),Ve=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,Ct=!!Y.morphAttributes.color;let Et=Pi;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=N.toneMapping);const at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Jt=at!==void 0?at.length:0,_e=$.get(W),wn=w.state.lights;if(et===!0&&(qe===!0||T!==X)){const dt=T===X&&W.id===z;Le.setState(W,T,dt)}let Ye=!1;W.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==wn.state.version||_e.outputColorSpace!==ge||j.isBatchedMesh&&_e.batching===!1||!j.isBatchedMesh&&_e.batching===!0||j.isBatchedMesh&&_e.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&_e.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&_e.instancing===!1||!j.isInstancedMesh&&_e.instancing===!0||j.isSkinnedMesh&&_e.skinning===!1||!j.isSkinnedMesh&&_e.skinning===!0||j.isInstancedMesh&&_e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&_e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&_e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&_e.instancingMorph===!1&&j.morphTexture!==null||_e.envMap!==Pe||W.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Le.numPlanes||_e.numIntersection!==Le.numIntersection)||_e.vertexAlphas!==Ve||_e.vertexTangents!==Ge||_e.morphTargets!==Ne||_e.morphNormals!==st||_e.morphColors!==Ct||_e.toneMapping!==Et||_e.morphTargetsCount!==Jt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,_e.__version=W.version);let kn=_e.currentProgram;Ye===!0&&(kn=dl(W,V,j),C&&W.isNodeMaterial&&C.onUpdateProgram(W,kn,_e));let gi=!1,sr=!1,As=!1;const lt=kn.getUniforms(),bt=_e.uniforms;if(E.useProgram(kn.program)&&(gi=!0,sr=!0,As=!0),W.id!==z&&(z=W.id,sr=!0),_e.needsLights){const dt=gE(w.state.lightProbeGridArray,j);_e.lightProbeGrid!==dt&&(_e.lightProbeGrid=dt,sr=!0)}if(gi||X!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(B,"projectionMatrix",T.projectionMatrix),lt.setValue(B,"viewMatrix",T.matrixWorldInverse);const ar=lt.map.cameraPosition;ar!==void 0&&ar.setValue(B,Ft.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,sr=!0,As=!0)}if(_e.needsLights&&(wn.state.directionalShadowMap.length>0&&lt.setValue(B,"directionalShadowMap",wn.state.directionalShadowMap,J),wn.state.spotShadowMap.length>0&&lt.setValue(B,"spotShadowMap",wn.state.spotShadowMap,J),wn.state.pointShadowMap.length>0&&lt.setValue(B,"pointShadowMap",wn.state.pointShadowMap,J)),j.isSkinnedMesh){lt.setOptional(B,j,"bindMatrix"),lt.setOptional(B,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),lt.setValue(B,"boneTexture",dt.boneTexture,J))}j.isBatchedMesh&&(lt.setOptional(B,j,"batchingTexture"),lt.setValue(B,"batchingTexture",j._matricesTexture,J),lt.setOptional(B,j,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",j._indirectTexture,J),lt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",j._colorsTexture,J));const or=Y.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&F.update(j,Y,kn),(sr||_e.receiveShadow!==j.receiveShadow)&&(_e.receiveShadow=j.receiveShadow,lt.setValue(B,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&V.environment!==null&&(bt.envMapIntensity.value=V.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=UU()),sr){if(lt.setValue(B,"toneMappingExposure",N.toneMappingExposure),_e.needsLights&&xE(bt,As),ve&&W.fog===!0&&Re.refreshFogUniforms(bt,ve),Re.refreshMaterialUniforms(bt,W,se,ae,w.state.transmissionRenderTarget[T.id]),_e.needsLights&&_e.lightProbeGrid){const dt=_e.lightProbeGrid;bt.probesSH.value=dt.texture,bt.probesMin.value.copy(dt.boundingBox.min),bt.probesMax.value.copy(dt.boundingBox.max),bt.probesResolution.value.copy(dt.resolution)}Pc.upload(B,Pg(_e),bt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pc.upload(B,Pg(_e),bt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(B,"center",j.center),lt.setValue(B,"modelViewMatrix",j.modelViewMatrix),lt.setValue(B,"normalMatrix",j.normalMatrix),lt.setValue(B,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const dt=W.uniformsGroups;for(let ar=0,Cs=dt.length;ar<Cs;ar++){const Lg=dt[ar];re.update(Lg,kn),re.bind(Lg,kn)}}return kn}function xE(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function _E(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,V,Y){const W=$.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(T.texture).__webglTexture=V,$.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const Y=$.get(T);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Y=0){L=T,O=V,H=Y;let W=null,j=!1,ve=!1;if(T){const ge=$.get(T);if(ge.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(B.FRAMEBUFFER,ge.__webglFramebuffer),K.copy(T.viewport),te.copy(T.scissor),Me=T.scissorTest,E.viewport(K),E.scissor(te),E.setScissorTest(Me),z=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(ge.__hasExternalTextures)J.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ve=T.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&$.has(Ve)&&(T.width!==Ve.image.width||T.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const Pe=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[V])?W=Pe[V][Y]:W=Pe[V],j=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?W=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[Y]:W=Pe,K.copy(T.viewport),te.copy(T.scissor),Me=T.scissorTest}else K.copy(De).multiplyScalar(se).floor(),te.copy(vt).multiplyScalar(se).floor(),Me=je;if(Y!==0&&(W=D),E.bindFramebuffer(B.FRAMEBUFFER,W)&&E.drawBuffers(T,W),E.viewport(K),E.scissor(te),E.setScissorTest(Me),j){const ge=$.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge.__webglTexture,Y)}else if(ve){const ge=V;for(let we=0;we<T.textures.length;we++){const Pe=$.get(T.textures[we]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+we,Pe.__webglTexture,Y,ge)}}else if(T!==null&&Y!==0){const ge=$.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,Y)}z=-1},this.readRenderTargetPixels=function(T,V,Y,W,j,ve,ye,ge=0){if(!(T&&T.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){E.bindFramebuffer(B.FRAMEBUFFER,we);try{const Pe=T.textures[ge],Ve=Pe.format,Ge=Pe.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge),!P.textureFormatReadable(Ve)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Ge)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-W&&Y>=0&&Y<=T.height-j&&B.readPixels(V,Y,W,j,he.convert(Ve),he.convert(Ge),ve)}finally{const Pe=L!==null?$.get(L).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,V,Y,W,j,ve,ye,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(V>=0&&V<=T.width-W&&Y>=0&&Y<=T.height-j){E.bindFramebuffer(B.FRAMEBUFFER,we);const Pe=T.textures[ge],Ve=Pe.format,Ge=Pe.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge),!P.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(V,Y,W,j,he.convert(Ve),he.convert(Ge),0);const st=L!==null?$.get(L).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,st);const Ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await rP(B,Ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.deleteBuffer(Ne),B.deleteSync(Ct),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,Y=0){const W=Math.pow(2,-Y),j=Math.floor(T.image.width*W),ve=Math.floor(T.image.height*W),ye=V!==null?V.x:0,ge=V!==null?V.y:0;J.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,ye,ge,j,ve),E.unbindTexture()},this.copyTextureToTexture=function(T,V,Y=null,W=null,j=0,ve=0){let ye,ge,we,Pe,Ve,Ge,Ne,st,Ct;const Et=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(Y!==null)ye=Y.max.x-Y.min.x,ge=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,Pe=Y.min.x,Ve=Y.min.y,Ge=Y.isBox3?Y.min.z:0;else{const bt=Math.pow(2,-j);ye=Math.floor(Et.width*bt),ge=Math.floor(Et.height*bt),T.isDataArrayTexture?we=Et.depth:T.isData3DTexture?we=Math.floor(Et.depth*bt):we=1,Pe=0,Ve=0,Ge=0}W!==null?(Ne=W.x,st=W.y,Ct=W.z):(Ne=0,st=0,Ct=0);const at=he.convert(V.format),Jt=he.convert(V.type);let _e;V.isData3DTexture?(J.setTexture3D(V,0),_e=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(J.setTexture2DArray(V,0),_e=B.TEXTURE_2D_ARRAY):(J.setTexture2D(V,0),_e=B.TEXTURE_2D),E.activeTexture(B.TEXTURE0),E.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),E.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),E.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const wn=E.getParameter(B.UNPACK_ROW_LENGTH),Ye=E.getParameter(B.UNPACK_IMAGE_HEIGHT),kn=E.getParameter(B.UNPACK_SKIP_PIXELS),gi=E.getParameter(B.UNPACK_SKIP_ROWS),sr=E.getParameter(B.UNPACK_SKIP_IMAGES);E.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),E.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);const As=T.isDataArrayTexture||T.isData3DTexture,lt=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const bt=$.get(T),or=$.get(V),dt=$.get(bt.__renderTarget),ar=$.get(or.__renderTarget);E.bindFramebuffer(B.READ_FRAMEBUFFER,dt.__webglFramebuffer),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Cs=0;Cs<we;Cs++)As&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(T).__webglTexture,j,Ge+Cs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(V).__webglTexture,ve,Ct+Cs)),B.blitFramebuffer(Pe,Ve,ye,ge,Ne,st,ye,ge,B.DEPTH_BUFFER_BIT,B.NEAREST);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||$.has(T)){const bt=$.get(T),or=$.get(V);E.bindFramebuffer(B.READ_FRAMEBUFFER,k),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let dt=0;dt<we;dt++)As?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bt.__webglTexture,j,Ge+dt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bt.__webglTexture,j),lt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,or.__webglTexture,ve,Ct+dt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,or.__webglTexture,ve),j!==0?B.blitFramebuffer(Pe,Ve,ye,ge,Ne,st,ye,ge,B.COLOR_BUFFER_BIT,B.NEAREST):lt?B.copyTexSubImage3D(_e,ve,Ne,st,Ct+dt,Pe,Ve,ye,ge):B.copyTexSubImage2D(_e,ve,Ne,st,Pe,Ve,ye,ge);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else lt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(_e,ve,Ne,st,Ct,ye,ge,we,at,Jt,Et.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,ve,Ne,st,Ct,ye,ge,we,at,Et.data):B.texSubImage3D(_e,ve,Ne,st,Ct,ye,ge,we,at,Jt,Et):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ve,Ne,st,ye,ge,at,Jt,Et.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ve,Ne,st,Et.width,Et.height,at,Et.data):B.texSubImage2D(B.TEXTURE_2D,ve,Ne,st,ye,ge,at,Jt,Et);E.pixelStorei(B.UNPACK_ROW_LENGTH,wn),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ye),E.pixelStorei(B.UNPACK_SKIP_PIXELS,kn),E.pixelStorei(B.UNPACK_SKIP_ROWS,gi),E.pixelStorei(B.UNPACK_SKIP_IMAGES,sr),ve===0&&V.generateMipmaps&&B.generateMipmap(_e),E.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){O=0,H=0,L=null,E.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const kU=`
precision highp float;
uniform vec2 uRes;
uniform float uTime;

// hash / noise helpers
float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i+vec2(1.,0.)), c = hash(i+vec2(0.,1.)), d = hash(i+vec2(1.,1.));
  vec2 u = f*f*(3.-2.*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.-u.x) + (d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6,1.2,-1.2,1.6);
  for(int i=0;i<4;i++){ v += a*noise(p); p = m*p; a *= 0.5; }
  return v;
}

// twinkling star layer
float stars(vec2 uv, float density, float sharp, float tw){
  vec2 g = uv*density;
  vec2 id = floor(g); vec2 f = fract(g)-0.5;
  float h = hash(id);
  if(h < 0.965) return 0.0;                 // sparse
  float d = length(f);
  float s = smoothstep(0.5*sharp, 0.0, d);
  float twinkle = 0.6 + 0.4*sin(uTime*tw + h*40.0);
  return s*twinkle;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - 0.5*uRes.xy) / uRes.y;

  float t = uTime*0.015;
  // drifting nebula clouds
  vec2 q = p*1.4;
  float n1 = fbm(q + vec2(t, t*0.6));
  float n2 = fbm(q*2.1 - vec2(t*0.8, t*0.4) + n1);
  float neb = smoothstep(0.15, 1.15, n1*0.65 + n2*0.55);

  vec3 deep   = vec3(0.02, 0.03, 0.07);     // base space
  vec3 blue   = vec3(0.10, 0.20, 0.55);
  vec3 violet = vec3(0.32, 0.14, 0.55);
  vec3 cyan   = vec3(0.10, 0.35, 0.55);

  vec3 col = deep;
  col = mix(col, blue,   neb*0.7);
  col = mix(col, violet, smoothstep(0.4,1.0,n2)*neb*0.8);
  col += cyan * pow(neb,2.0) * 0.25;

  // star layers (parallax densities)
  float st = 0.0;
  st += stars(uv + vec2(t*0.5,0.0),  90.0, 1.0, 3.0)*0.9;
  st += stars(uv*1.7 - vec2(t*0.3,0.0), 140.0, 0.8, 4.5)*0.7;
  st += stars(uv*2.6 + vec2(t*0.2,0.0), 210.0, 0.6, 6.0)*0.5;
  col += vec3(0.9,0.95,1.0) * st;

  // subtle bright core glow lower-center + vignette
  float glow = smoothstep(0.9, 0.0, length(p - vec2(0.0,-0.15)));
  col += blue * glow * 0.10;
  float vig = smoothstep(1.25, 0.25, length(p));
  col *= 0.55 + 0.45*vig;

  gl_FragColor = vec4(col, 1.0);
}
`,OU="void main(){ gl_Position = vec4(position, 1.0); }";function BU(){const t=Z.useRef(null);return Z.useEffect(()=>{const e=t.current,n=e.parentElement,i=!1;let r;try{r=new FU({canvas:e,antialias:!1,powerPreference:"high-performance"})}catch{return}r.setPixelRatio(Math.min(1.25,window.devicePixelRatio||1));const s=new yP,o=new pg,a={uTime:{value:0},uRes:{value:new Je(1,1)}},l=new hi({vertexShader:OU,fragmentShader:kU,uniforms:a});s.add(new Ii(new cl(2,2),l));const c=()=>{const S=n.clientWidth,y=n.clientHeight;r.setSize(S,y,!1),a.uRes.value.set(S*r.getPixelRatio(),y*r.getPixelRatio())};c(),window.addEventListener("resize",c);let f=0,d=!1,u=performance.now();const p=()=>{a.uTime.value=(performance.now()-u)/1e3,r.render(s,o),f=requestAnimationFrame(p)},m=()=>{d||i||(d=!0,f=requestAnimationFrame(p))},M=()=>{d=!1,cancelAnimationFrame(f)},g=new IntersectionObserver(([S])=>{S.isIntersecting?m():M()},{threshold:0});g.observe(n);const h=S=>{S.preventDefault(),M()},x=()=>{c(),m()};return e.addEventListener("webglcontextlost",h),e.addEventListener("webglcontextrestored",x),()=>{g.disconnect(),M(),window.removeEventListener("resize",c),e.removeEventListener("webglcontextlost",h),e.removeEventListener("webglcontextrestored",x),l.dispose(),r.dispose()}},[]),v.jsx("canvas",{ref:t,className:"hero-space","aria-hidden":!0})}const zU=({h:t=15})=>v.jsx("svg",{viewBox:"0 0 228 120",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:v.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z",fill:"#ea4b71"})}),VU=({h:t=19})=>v.jsx("svg",{viewBox:"0 0 256 260",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:v.jsx("path",{fill:"#ECEEF3",d:"M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"})}),oE=({h:t=19})=>v.jsx("svg",{viewBox:"0 0 256 257",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:v.jsx("path",{fill:"#D97757",d:"m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"})}),HU=({h:t=20})=>v.jsx("svg",{viewBox:"0 0 256 384",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:v.jsx("path",{fill:"#ECEEF3",d:"M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"})}),GU=({h:t=16})=>v.jsxs("svg",{viewBox:"0 0 24 24",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[v.jsx("defs",{children:v.jsxs("linearGradient",{id:"gemg",x1:"0",y1:"0",x2:"1",y2:"1",children:[v.jsx("stop",{offset:"0",stopColor:"#4E8DF6"}),v.jsx("stop",{offset:"1",stopColor:"#9B72CB"})]})}),v.jsx("path",{fill:"url(#gemg)",d:"M12 24C12 17.373 6.627 12 0 12 6.627 12 12 6.627 12 0c0 6.627 5.373 12 12 12-6.627 0-12 5.373-12 12Z"})]}),WU="modulepreload",jU=function(t){return"/"+t},m_={},XU=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=jU(l),l in m_)return;m_[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":WU,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},$U=Z.lazy(()=>XU(()=>import("./react-spline-B8LqRMFK.js").then(t=>t.r),[]));function qU({scene:t,className:e}){return v.jsx(Z.Suspense,{fallback:v.jsx("div",{className:"spline-fallback",children:v.jsx("span",{className:"loader"})}),children:v.jsx($U,{scene:t,className:e})})}/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YU=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KU=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=t=>{const e=KU(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZU=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},QU=Z.createContext({}),JU=()=>Z.useContext(QU),eF=Z.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>{const{size:c=24,strokeWidth:f=2,absoluteStrokeWidth:d=!1,color:u="currentColor",className:p=""}=JU()??{},m=i??d?Number(n??f)*24/Number(e??c):n??f;return Z.createElement("svg",{ref:l,..._d,width:e??c??_d.width,height:e??c??_d.height,stroke:t??u,strokeWidth:m,className:aE("lucide",p,r),...!s&&!ZU(a)&&{"aria-hidden":"true"},...a},[...o.map(([M,g])=>Z.createElement(M,g)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(t,e)=>{const n=Z.forwardRef(({className:i,...r},s)=>Z.createElement(eF,{ref:s,iconNode:e,className:aE(`lucide-${YU(g_(t))}`,`lucide-${t}`,i),...r}));return n.displayName=g_(t),n};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tF=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Aa=ut("arrow-right",tF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nF=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ju=ut("bot",nF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iF=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],Xu=ut("chart-line",iF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rF=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],mg=ut("check",rF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ul=ut("circle-check",sF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],lE=ut("clock-3",oF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],lF=ut("gauge",aF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],cE=ut("globe",cF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uF=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],uE=ut("layers",uF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fF=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],dF=ut("lock-open",fF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hF=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],pF=ut("mail",hF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mF=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],gF=ut("map-pin",mF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vF=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],fE=ut("megaphone",vF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xF=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],gg=ut("message-square",xF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _F=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],vg=ut("phone-call",_F);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yF=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],SF=ut("phone",yF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MF=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]],EF=ut("piggy-bank",MF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TF=[["path",{d:"M12 17V7",key:"pyj7ub"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",key:"1elt7d"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]],wF=ut("receipt",TF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AF=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],CF=ut("rocket",AF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],RF=ut("rows-3",bF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PF=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],NF=ut("search",PF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LF=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],DF=ut("send",LF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IF=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],UF=ut("star",IF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],dE=ut("target",FF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kF=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],xg=ut("trending-up",kF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OF=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],BF=ut("x",OF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zF=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$u=ut("zap",zF),v_=[cE,vg,Xu,ju,fE,gg],VF=[NF,CF,Xu],HF=[Xu,$u,uE,dF,ju,vg],GF=[RF,uE,lF],WF=[xg,dE,EF];function Ws({C:t,size:e=22,color:n="#F2F4F8",strokeWidth:i=1.7}){return v.jsx("span",{style:{color:n,lineHeight:0,display:"inline-flex"},children:v.jsx(t,{size:e,strokeWidth:i})})}function na({className:t="",children:e,...n}){return v.jsxs("a",{className:`hbtn ${t}`,...n,children:[v.jsx("span",{className:"hbtn-label",children:e}),v.jsx("span",{className:"hbtn-arrow","aria-hidden":!0,children:v.jsx(Aa,{size:15,strokeWidth:2.3})})]})}const Kr={type:"spring",stiffness:190,damping:30,mass:1.05},jF={"Martin Dvořák":["#8B8F98","#D7DAE0"],"Lucie Králová":["#8B8F98","#D7DAE0"],"Petr Novotný":["#8B8F98","#D7DAE0"]},XF={"Martin Dvořák":"https://i.pravatar.cc/150?img=13","Lucie Králová":"https://i.pravatar.cc/150?img=45","Petr Novotný":"https://i.pravatar.cc/150?img=68"};function $F({name:t,size:e=48}){const n=t.split(" ").map(l=>l[0]).join("").slice(0,2),[i,r]=jF[t]||["#3E6FF4","#7AA0FF"],s=XF[t],[o,a]=Z.useState(!1);return v.jsx("span",{className:"avatar",style:{width:e,height:e,background:`conic-gradient(from 140deg, ${i}, ${r}, ${i})`},children:s&&!o?v.jsx("img",{className:"avatar-in",src:s,alt:t,loading:"lazy",onError:()=>a(!0)}):v.jsx("span",{className:"avatar-in avatar-init",style:{fontSize:e*.36},children:n})})}const qF=[{label:"Služby",href:"#sluzby",id:"sluzby"},{label:"Jak pracujeme",href:"#proces",id:"proces"},{label:"Reference",href:"#reference",id:"reference"},{label:"Ceník",href:"#cenik",id:"cenik"},{label:"FAQ",href:"#faq",id:"faq"}],YF=[{no:"01",h:"Analýza",p:"Projdeme váš byznys, čísla a konkurenci. Do týdne víte, kde vám utíkají zákazníci a co s tím uděláme."},{no:"02",h:"Realizace",p:"Navrhneme, postavíme a spustíme. Web, automatizace i kampaně — bez průtahů a bez výmluv."},{no:"03",h:"Optimalizace a péče",p:"Spuštěním nekončíme. Měříme, testujeme a každý měsíc posouváme výsledky o kus dál."}],KF=[{h:"Tvorba webů",p:"Rychlé, moderní weby postavené na datech, ne na pocitech. Od landing page po e-shop.",type:"tasklist",textFirst:!0},{h:"Hlasoví AI agenti",p:"AI vyřizuje hovory, dotazy a rezervace za vás — spolehlivě a nonstop.",type:"voice",textFirst:!1},{h:"Datové přehledy",p:"Proměníme čísla z kampaní a provozu v přehledné, akční insighty.",type:"budget",textFirst:!0},{h:"Vlastní AI agenti",p:"Postavíme AI systémy na míru vašemu byznysu, které myslí a jednají samy.",type:"team",textFirst:!1},{h:"Marketingové kampaně",p:"Výkonnostní kampaně napříč kanály, řízené daty, ne pocitem.",type:"marketing",textFirst:!1},{h:"Chatboti na míru",p:"Okamžité, přesné odpovědi zákazníkům kdykoliv, s AI, co zná váš byznys.",type:"chatbot",textFirst:!1}],gr=[{k:"E-shop · doplňky stravy",num:212,prefix:"+",suffix:" %",trend:"up",lead:"tržeb za 6 měsíců",from:"1,1 %",to:"3,4 %",metric:"konverzní poměr",p:"Nový web, přestavěný funnel a výkonnostní kampaně. Konverzní poměr vzrostl z 1,1 % na 3,4 %."},{k:"B2B · strojírenská výroba",num:9,prefix:"",suffix:"×",trend:"step",lead:"více poptávek měsíčně",from:"5",to:"47",metric:"poptávky / měsíc",p:"Z 5 na 47 poptávek měsíčně. Automatizace zpracování poptávek navíc šetří 30 hodin práce obchodu."},{k:"Služby · advokátní kancelář",num:58,prefix:"−",suffix:" %",trend:"down",lead:"nižší cena za lead",from:"100 %",to:"42 %",metric:"náklady na lead",p:"Přesnější cílení a nové landing pages. Kancelář naplnila kapacitu do tří měsíců od spuštění."}];function ZF({dir:t}){const e={up:[6,11,8,17,22,31,42],step:[8,8,17,17,27,27,40],down:[42,35,31,20,15,9,5]},n=e[t]||e.up,i=120,r=42,s=46,a=n.map((c,f)=>[f/(n.length-1)*i,r-c/s*r]).map(c=>c.join(",")).join(" "),l=`0,${r} ${a} ${i},${r}`;return v.jsxs("svg",{className:"case-spark",viewBox:`0 0 ${i} ${r}`,preserveAspectRatio:"none","aria-hidden":!0,children:[v.jsx("polygon",{className:"case-spark-area",points:l}),v.jsx("polyline",{className:"case-spark-line",points:a})]})}const QF=[{h:"Výsledky v číslech",p:"Měřitelné, každý měsíc.",stat:"+212 %",mini:"finance"},{h:"Rychlost",p:"První výstupy do 14 dnů.",stat:"14 dní",mini:"timeline"},{h:"Jeden partner",p:"Vše pod jednou střechou.",stat:"1 tým",mini:"team"},{h:"Bez závazků",p:"Zůstanete, protože to funguje.",stat:"0 smluv"},{h:"Technologie 2026",p:"AI, co konkurence nemá.",stat:"24/7"},{h:"Lidský přístup",p:"Mluvíme česky, ne buzzwordy.",stat:"100 %"}];function JF({type:t}){if(t==="finance"){const e=[["Poptávky",74],["Ušetřené hodiny",62],["Konverze",45]];return v.jsxs("div",{className:"bmini bmini-fin",children:[v.jsxs("div",{className:"bfin-head",children:[v.jsx("span",{children:"Získané leady"}),v.jsx("b",{"data-count":"3800","data-suffix":"+",children:"0"})]}),e.map(([n,i],r)=>v.jsxs("div",{className:"bfin-row",children:[v.jsx("span",{children:n}),v.jsx("span",{className:"bfin-bar",children:v.jsx("span",{style:{width:i+"%"}})})]},r))]})}if(t==="timeline"){const e=["Analýza hotová","Návrh schválen","Web spuštěn"];return v.jsx("div",{className:"bmini bmini-tl",children:e.map((n,i)=>v.jsxs("div",{className:"btl-row",children:[v.jsx("span",{className:"btl-ic",children:v.jsx(ul,{size:14,strokeWidth:2})}),n]},i))})}if(t==="team"){const e=[["MK","Marek","Strategie","#3FCF8E"],["LT","Lucie","Design","#5B9BFF"],["PV","Petr","Vývoj","#E0A93E"]];return v.jsx("div",{className:"bmini bmini-team",children:e.map(([n,i,r,s],o)=>v.jsxs("div",{className:"btm-row",children:[v.jsx("span",{className:"btm-av",children:n}),v.jsxs("span",{className:"btm-meta",children:[v.jsx("b",{children:i}),v.jsx("i",{children:r})]}),v.jsx("span",{className:"btm-dot",style:{background:s,boxShadow:`0 0 8px ${s}`}})]},o))})}return null}const ek=["Weby","AI agenti","Automatizace","Marketing","Datové přehledy","Chatboti"];function x_({reverse:t=!1}){const e=ek.join("  ·  ")+"  ·  ";return v.jsx("div",{className:`marq${t?" rev":""}`,"aria-hidden":!0,children:v.jsxs("div",{className:"marq-track",children:[v.jsx("span",{children:e}),v.jsx("span",{children:e})]})})}function tk(){const[t,e]=Z.useState(0),[n,i]=Z.useState(!1);return Z.useEffect(()=>{const r=performance.now(),s=1300;let o;const a=l=>{const c=Math.min(1,(l-r)/s);e(Math.round((1-Math.pow(1-c,2))*100)),c<1?o=requestAnimationFrame(a):setTimeout(()=>i(!0),220)};return o=requestAnimationFrame(a),()=>cancelAnimationFrame(o)},[]),v.jsx($a,{children:!n&&v.jsxs(bn.div,{className:"preloader",exit:{y:"-100%"},transition:{duration:.75,ease:[.76,0,.24,1]},children:[v.jsx("span",{className:"pre-mark",children:"S"}),v.jsxs("span",{className:"pre-num",children:[t," %"]})]})})}const Zr=[{quote:"Do tří měsíců se nám poptávky zdvojnásobily. Poprvé máme agenturu, která mluví v číslech, ne ve slibech.",name:"Martin Dvořák",role:"jednatel, TZB Systémy"},{quote:"Automatizace od SiteSpotu nám šetří přes 40 hodin měsíčně. Fakturace a CRM běží samy, my se věnujeme klientům.",name:"Lucie Králová",role:"majitelka, Studio Květ"},{quote:"Nový web se zaplatil za šest týdnů. Konečně přesně vím, kam jde každá koruna z marketingu a co mi vrací.",name:"Petr Novotný",role:"CEO, Fitbox.cz"}],nk=[{tier:"Start",price:"od 29 000 Kč",per:"jednorázově",desc:"Pro firmy, které potřebují web, co konečně prodává.",feats:["Landing page nebo firemní web","Texty a copywriting v ceně","SEO základ a analytika","Spuštění do 3 týdnů","30 dní podpory zdarma"],cta:"Chci začít"},{tier:"Růst",price:"od 19 000 Kč",per:"měsíčně, bez závazku",desc:"Pro firmy, které chtějí předvídatelný přísun poptávek.",feats:["Vše z tarifu Start","Správa kampaní (Google + Meta)","2 AI automatizace na míru","Průběžná optimalizace webu","Měsíční report + konzultace"],cta:"Chci růst",featured:!0},{tier:"Scale",price:"individuálně",per:"dle rozsahu",desc:"Pro firmy, kde je online hlavní růstový kanál.",feats:["Dedikovaný tým","Neomezené automatizace","Kompletní marketing na klíč","Garantovaná SLA odezva","Čtvrtletní strategická roadmapa"],cta:"Domluvit se"}],ik=["Pomalé, ruční procesy","Náchylné k lidským chybám","Vyžaduje více lidí","Těžko škáluje bez náboru","Omezené na pracovní dobu","Rozhodování od oka a s prodlevami","Rutina zpomaluje tým","Vícekrokové ruční předávky","Pomalejší reakční doby","Ruční follow-upy a evidence"],rk=["Úkoly hotové okamžitě","Vysoká přesnost, konzistentní výsledky","Nižší provozní náklady","Škáluje bez námahy","Běží 24/7 nonstop","Data a přehledy v reálném čase","Automatizuje rutinu pro vyšší výstup","Plynulý, automatický tok","Okamžité odpovědi přes chat i hlas","Automatický nurturing a připomínky"],sk=[{q:"Za jak dlouho bude web hotový?",a:"Landing page spouštíme do 3 týdnů, rozsáhlejší weby do 4–8 týdnů. Přesný harmonogram dostanete po úvodní analýze — a platí to, co si domluvíme."},{q:"Kolik spolupráce stojí?",a:"Jednorázové projekty začínají na 29 000 Kč, průběžná spolupráce na 19 000 Kč měsíčně. Cenu znáte vždy předem, fixně a bez skrytých položek."},{q:"Už web mám. Má smysl se ozvat?",a:"Určitě. Uděláme vám audit zdarma — často stačí stávající web optimalizovat a napojit na automatizace, místo stavění od nuly."},{q:"Jak vypadají AI automatizace v praxi?",a:"Propojíme nástroje, které už používáte — e-mail, CRM, fakturaci, tabulky. Poptávky se samy třídí, faktury odesílají, reporty generují. Klientům běžně šetříme 30 a více hodin měsíčně."},{q:"Musím podepsat dlouhodobý závazek?",a:"Ne. Spolupráce běží po měsících s měsíční výpovědní lhůtou. Klienty si držíme výsledky, ne smlouvami."},{q:"Jak poznám, že to funguje?",a:"Každý měsíc dostanete srozumitelný report: kolik přišlo poptávek, co stály a kolik hodin ušetřily automatizace. Žádná hausnumera."},{q:"Pracujete i s menšími firmami?",a:"Ano — většina našich klientů má 2 až 50 zaměstnanců. Řešení stavíme tak, aby dávalo smysl vašemu rozpočtu, ne našemu portfoliu."}];function ok({i:t}){if(t===0){const l=[88,64,76,52],c=[["SEO",92],["UX",88],["Rychlost",96]];return v.jsxs("div",{className:"proc-scene",children:[v.jsxs("div",{className:"pwin",children:[v.jsxs("div",{className:"pwin-bar",children:[v.jsx("span",{className:"d r"}),v.jsx("span",{className:"d y"}),v.jsx("span",{className:"d g"}),v.jsx("i",{children:"vas-web.cz/audit"})]}),v.jsxs("div",{className:"pwin-body",children:[v.jsx("div",{className:"pw-rows",children:l.map((f,d)=>v.jsx("span",{style:{width:f+"%"}},d))}),v.jsx("span",{className:"pw-beam","aria-hidden":!0}),v.jsx("div",{className:"pw-chips",children:c.map(([f,d],u)=>v.jsxs("b",{style:{animationDelay:u*.7+"s"},children:[f," ",v.jsx("em",{children:d})]},u))})]})]}),v.jsxs("div",{className:"proc-cap",children:[v.jsx("span",{className:"proc-cap-dot"}),"Analyzujeme web a konkurenci…"]})]})}if(t===1){const l=[[26,44,18],[12,30,52,14],[20,16,38],[34,22,28,12],[16,46,20]],c=["#7AA0FF","#C77DF3","#3FCF8E","#9CA1AC","#E0A93E"];return v.jsxs("div",{className:"proc-scene",children:[v.jsxs("div",{className:"pwin",children:[v.jsxs("div",{className:"pwin-bar",children:[v.jsx("span",{className:"d r"}),v.jsx("span",{className:"d y"}),v.jsx("span",{className:"d g"}),v.jsx("i",{children:"novy-web.jsx"})]}),v.jsxs("div",{className:"pwin-body",children:[v.jsx("div",{className:"pw-code",children:l.map((f,d)=>v.jsx("div",{className:"pw-line",style:{paddingLeft:d%3*14},children:f.map((u,p)=>v.jsx("span",{className:"pw-tok",style:{width:u,background:c[(d+p*2)%c.length],animationDelay:d*.55+p*.18+"s"}},p))},d))}),v.jsxs("span",{className:"pw-toast",children:[v.jsx(mg,{size:11,strokeWidth:3})," Nasazeno"]})]})]}),v.jsxs("div",{className:"proc-cap",children:[v.jsx("span",{className:"proc-cap-dot"}),"Programujeme a nasazujeme…"]})]})}const e=[6,14,10,22,18,30,26,40,36,52],n=150,i=56,r=56,o=e.map((l,c)=>[c/(e.length-1)*n,i-l/r*i]).map(l=>l.join(",")).join(" "),a=`0,${i} ${o} ${n},${i}`;return v.jsxs("div",{className:"proc-scene",children:[v.jsxs("div",{className:"pwin",children:[v.jsxs("div",{className:"pwin-bar",children:[v.jsx("span",{className:"d r"}),v.jsx("span",{className:"d y"}),v.jsx("span",{className:"d g"}),v.jsx("i",{children:"vysledky.sitespot.cz"})]}),v.jsxs("div",{className:"pwin-body chart",children:[v.jsxs("svg",{className:"pg-svg",viewBox:`0 0 ${n} ${i}`,preserveAspectRatio:"none","aria-hidden":!0,children:[v.jsx("defs",{children:v.jsxs("linearGradient",{id:"pgg",x1:"0",y1:"0",x2:"0",y2:"1",children:[v.jsx("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.3"}),v.jsx("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]})}),v.jsx("polygon",{className:"pg-area",points:a,fill:"url(#pgg)"}),v.jsx("polyline",{className:"pg-line",points:o,pathLength:"1"})]}),v.jsxs("span",{className:"pg-badge",children:[v.jsx(xg,{size:11,strokeWidth:2.4})," +34 %"]})]})]}),v.jsxs("div",{className:"proc-cap",children:[v.jsx("span",{className:"proc-cap-dot"}),"Výsledky rostou každý měsíc"]})]})}function ak({type:t}){if(t==="tasklist"){const e=[{l:"Nový poptávkový formulář",ic:ul,c:"#2BB6A6"},{l:"Zápis do CRM",ic:lE,c:"#E0A93E"},{l:"Odeslání faktury",ic:wF,c:"#8A8E99"}];return v.jsx("div",{className:"mock mock-list",children:e.map((n,i)=>v.jsxs("div",{className:"mock-row",children:[v.jsx("span",{className:"mock-row-ic",style:{color:n.c},children:v.jsx(n.ic,{size:15,strokeWidth:2})}),v.jsx("span",{className:"mock-row-l",children:n.l})]},i))})}if(t==="voice"){const e=[6,14,22,12,28,16,24,10,18,8,20,14,26,12,16];return v.jsx("div",{className:"mock mock-voice",children:v.jsxs("div",{className:"mock-wave",children:[e.map((n,i)=>v.jsx("span",{style:{height:n}},i)),v.jsx("span",{className:"mock-phone",children:v.jsx(vg,{size:16,strokeWidth:2})}),e.map((n,i)=>v.jsx("span",{style:{height:e[e.length-1-i]}},"b"+i))]})})}if(t==="budget"){const e=[["Kampaně",62],["Nástroje",41],["Automatizace",74],["Tvorba obsahu",33]];return v.jsxs("div",{className:"mock mock-budget",children:[v.jsxs("div",{className:"mock-budget-head",children:[v.jsx("span",{children:"Rozpočet"}),v.jsx("b",{children:"320 000 Kč"})]}),e.map(([n,i],r)=>v.jsxs("div",{className:"mock-brow",children:[v.jsx("span",{children:n}),v.jsx("span",{className:"mock-bbar",children:v.jsx("span",{style:{width:i+"%"}})})]},r))]})}if(t==="team"){const e=[{name:"OpenAI",el:v.jsx(VU,{h:15})},{name:"Claude",el:v.jsx(oE,{h:16})},{name:"n8n",el:v.jsx(zU,{h:12})},{name:"Gemini",el:v.jsx(GU,{h:15})},{name:"Make",el:v.jsx("span",{className:"mock-word",children:"Make"})}];return v.jsx("div",{className:"mock mock-team",children:e.map(n=>v.jsx("span",{className:"mock-logo-chip",title:n.name,children:n.el},n.name))})}if(t==="marketing"){const e=[["LinkedIn",!0],["E-mail",!0],["Meta Ads",!1],["Google Ads",!0]];return v.jsxs("div",{className:"mock mock-mkt",children:[v.jsxs("div",{className:"mock-mkt-head",children:[v.jsx(DF,{size:13,strokeWidth:2})," Hledám nové leady…"]}),e.map(([n,i],r)=>v.jsxs("div",{className:"mock-mrow",children:[v.jsx("span",{children:n}),v.jsx("span",{className:`mock-toggle${i?" on":""}`})]},r))]})}return t==="chatbot"?v.jsxs("div",{className:"mock mock-chat",children:[v.jsxs("div",{className:"mock-bubble bot",children:[v.jsx(gg,{size:13,strokeWidth:2})," Jak vám mohu pomoct?"]}),v.jsx("div",{className:"mock-bubble user",children:"Chci nabídku na web"})]}):null}function lk(){const t=Z.useRef(null);Z.useEffect(()=>{const f=t.current;if(!f)return;const d=new IntersectionObserver(([u])=>{u.isIntersecting&&(f.classList.add("draw"),d.disconnect())},{threshold:.4});return d.observe(f),()=>d.disconnect()},[]);const e=[5,11,8,15,13,21,18,27,25,34],n=150,i=54,r=38,s=e.map((f,d)=>[d/(e.length-1)*n,i-f/r*i]),o=s.map(f=>f.join(",")).join(" "),a=`0,${i} ${o} ${n},${i}`,[l,c]=s[s.length-1];return v.jsxs("div",{className:"benefit ben-chart spot-card","data-reveal":"60",ref:t,children:[v.jsx("div",{className:"ben-top",children:v.jsxs("span",{className:"chart-badge",children:[v.jsx(xg,{size:13,strokeWidth:2.2})," +47 % za kvartál"]})}),v.jsx("h3",{children:"Růst poptávek"}),v.jsxs("svg",{className:"ben-chart-svg",viewBox:`0 0 ${n} ${i}`,preserveAspectRatio:"none","aria-hidden":!0,children:[v.jsx("defs",{children:v.jsxs("linearGradient",{id:"bcg",x1:"0",y1:"0",x2:"0",y2:"1",children:[v.jsx("stop",{offset:"0",stopColor:"#FFFFFF",stopOpacity:"0.32"}),v.jsx("stop",{offset:"1",stopColor:"#FFFFFF",stopOpacity:"0.02"})]})}),v.jsx("polygon",{className:"bc-area",points:a,fill:"url(#bcg)"}),v.jsx("polyline",{className:"bc-line",points:o,pathLength:"1"}),v.jsx("circle",{className:"bc-dot",cx:l,cy:c,r:"3"})]})]})}const __=["Faktura odeslána","Lead zapsán do CRM","Report vygenerován","Schůzka naplánována","Dotaz zodpovězen AI"];function ck(){const[t,e]=Z.useState(0);return Z.useEffect(()=>{const n=setInterval(()=>e(i=>(i+1)%__.length),2400);return()=>clearInterval(n)},[]),v.jsxs("div",{className:"benefit ben-live spot-card","data-reveal":"120",children:[v.jsx("div",{className:"ben-top",children:v.jsxs("span",{className:"live-pill",children:[v.jsx("span",{className:"live-dot"}),"Živě"]})}),v.jsx("h3",{children:"Automatizace běží"}),v.jsxs("div",{className:"live-chain","aria-hidden":!0,children:[v.jsx("span",{className:"lc-node n1",children:v.jsx(ju,{size:13,strokeWidth:2})}),v.jsx("span",{className:"lc-line l1"}),v.jsx("span",{className:"lc-node n2",children:v.jsx($u,{size:13,strokeWidth:2})}),v.jsx("span",{className:"lc-line l2"}),v.jsx("span",{className:"lc-node n3",children:v.jsx(mg,{size:13,strokeWidth:2.4})})]}),v.jsx("div",{className:"live-rows",children:v.jsx($a,{mode:"popLayout",initial:!1,children:v.jsxs(bn.div,{className:"live-row",initial:{opacity:0,y:12,filter:"blur(4px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:-12,filter:"blur(4px)"},transition:{duration:.45,ease:[.22,1,.36,1]},children:[v.jsx(ul,{size:14,strokeWidth:2})," ",__[t]]},t)})})]})}const yd=[ju,$u,Xu],Sd=[cE,fE,gg,dE];function uk(){const t=Z.useRef(null),e=i=>{const r=t.current;if(!r)return;const s=r.getBoundingClientRect(),o=(i.clientX-s.left)/s.width-.5,a=(i.clientY-s.top)/s.height-.5;r.style.setProperty("--tx",a*-10+"deg"),r.style.setProperty("--ty",o*12+"deg")},n=()=>{const i=t.current;i&&(i.style.setProperty("--tx","0deg"),i.style.setProperty("--ty","0deg"))};return v.jsx("div",{className:"ben-center","data-reveal":"0",ref:t,onMouseMove:e,onMouseLeave:n,children:v.jsxs("div",{className:"ben-center-tilt",children:[v.jsx(mk,{className:"ben-center-video",src:pk(34690)}),v.jsx("span",{className:"ben-center-glow","aria-hidden":!0}),v.jsx("span",{className:"orbit-ring r1","aria-hidden":!0,children:yd.map((i,r)=>v.jsx("span",{className:"orbit-hold",style:{transform:`rotate(${360/yd.length*r}deg)`},children:v.jsx("span",{className:"orbit-ic",style:{"--r":`${360/yd.length*r}deg`},children:v.jsx(i,{size:14,strokeWidth:1.9})})},r))}),v.jsx("span",{className:"orbit-ring r2","aria-hidden":!0,children:Sd.map((i,r)=>v.jsx("span",{className:"orbit-hold",style:{transform:`rotate(${360/Sd.length*r}deg)`},children:v.jsx("span",{className:"orbit-ic out",style:{"--r":`${360/Sd.length*r}deg`},children:v.jsx(i,{size:14,strokeWidth:1.9})})},r))}),v.jsx("span",{className:"ben-center-mark",children:"S"}),v.jsxs("span",{className:"ben-center-cap",children:["Jedno AI jádro,",v.jsx("br",{}),"všechny kanály"]})]})})}const Md="hello@sitespot.cz";function fk({open:t,onClose:e}){const[n,i]=Z.useState("idle");Z.useEffect(()=>{if(!t)return;const s=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t,e]),Z.useEffect(()=>{t&&i("idle")},[t]);const r=async s=>{s.preventDefault();const o=Object.fromEntries(new FormData(s.target));i("sending");try{if(!(await fetch(`https://formsubmit.co/ajax/${Md}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...o,_subject:"Nová poptávka ze sitespot.cz",_captcha:"false",_template:"table"})})).ok)throw new Error;i("ok")}catch{i("err")}};return v.jsx($a,{children:t&&v.jsx(bn.div,{className:"cmodal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,children:v.jsxs(bn.div,{className:"cmodal",role:"dialog","aria-modal":"true","aria-label":"Domluvit schůzku",initial:{opacity:0,y:34,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.97},transition:{type:"spring",stiffness:260,damping:26},onClick:s=>s.stopPropagation(),children:[v.jsx("button",{className:"cmodal-x","aria-label":"Zavřít",onClick:e,children:v.jsx(BF,{size:17,strokeWidth:2.2})}),n==="ok"?v.jsxs("div",{className:"cmodal-ok",children:[v.jsx("span",{className:"cmodal-ok-ic",children:v.jsx(ul,{size:44,strokeWidth:1.6})}),v.jsx("h3",{children:"Díky, zpráva je u nás!"}),v.jsx("p",{children:"Ozveme se vám do 24 hodin a domluvíme termín konzultace."}),v.jsx("button",{className:"cmodal-send",onClick:e,children:"Zavřít"})]}):v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"cmodal-head",children:[v.jsx("span",{className:"mark",children:"S"}),v.jsx("h3",{children:"Domluvit schůzku"}),v.jsx("p",{children:"30 minut zdarma. Napište nám, co řešíte, a ozveme se do 24 hodin."})]}),v.jsxs("form",{className:"cmodal-form",onSubmit:r,children:[v.jsxs("label",{children:["Jméno",v.jsx("input",{name:"name",required:!0,placeholder:"Jan Novák",autoComplete:"name"})]}),v.jsxs("label",{children:["E-mail",v.jsx("input",{name:"email",type:"email",required:!0,placeholder:"jan@firma.cz",autoComplete:"email"})]}),v.jsxs("label",{children:["Co potřebujete?",v.jsx("textarea",{name:"message",required:!0,rows:4,placeholder:"Např. potřebujeme nový web a automatizovat zpracování poptávek…"})]}),v.jsxs("button",{className:"cmodal-send",type:"submit",disabled:n==="sending",children:[n==="sending"?"Odesílám…":"Odeslat poptávku"," ",n!=="sending"&&v.jsx(Aa,{size:16,strokeWidth:2.2})]}),n==="err"&&v.jsxs("p",{className:"cmodal-err",children:["Odeslání se nepovedlo. Napište nám přímo na ",v.jsx("a",{href:`mailto:${Md}`,children:Md}),"."]})]})]})]})})})}function dk(){return Z.useRef(new Intl.NumberFormat("cs-CZ")).current}function hk({scene:t}){const e=Z.useRef(null),[n,i]=Z.useState(!1);return Z.useEffect(()=>{const r=e.current;if(!r)return;const s=new IntersectionObserver(([o])=>i(o.isIntersecting),{rootMargin:"-18% 0px -18% 0px"});return s.observe(r),()=>s.disconnect()},[]),v.jsx("div",{className:"spline-stage",ref:e,children:n?v.jsx(qU,{scene:t,className:"spline-canvas"}):v.jsx("div",{className:"spline-fallback",children:v.jsx("span",{className:"loader"})})})}const pk=t=>`https://assets.mixkit.co/videos/${t}/${t}-720.mp4`;function mk({src:t,className:e,poster:n}){const i=Z.useRef(null),[r,s]=Z.useState(!1);return Z.useEffect(()=>{const o=i.current;if(!o)return;const a=new IntersectionObserver(([l])=>{l.isIntersecting?o.play().catch(()=>{}):o.pause()},{threshold:.2});return a.observe(o),()=>a.disconnect()},[]),r?v.jsx("div",{className:`media-fallback ${e||""}`,"aria-hidden":!0}):v.jsx("video",{ref:i,className:e,src:t,poster:n,muted:!0,loop:!0,playsInline:!0,preload:"none",onError:()=>s(!0),"aria-hidden":!0})}function gk(){const[t,e]=Z.useState(!1),[n,i]=Z.useState(!1),r=C=>{C.preventDefault(),C.stopPropagation(),i(!0)},[s,o]=Z.useState(!1),[a,l]=Z.useState(""),[c,f]=Z.useState(0),[d,u]=Z.useState(0),[p,m]=Z.useState(0),M=Z.useRef(!1),g=Z.useRef(!1),h=Z.useRef(null),x=Z.useRef(null),S=dk(),{scrollYProgress:y}=f3({target:x,offset:["start start","end start"]}),A=Tc(y,[0,1],[1,.92]),w=Tc(y,[0,1],[28,46]),R=Tc(y,[0,1],[0,80]);Z.useEffect(()=>{const D=document.getElementById("ss-hero-panel"),k=document.getElementById("ss-stars");if(!D||!k)return;const U=k.getContext("2d"),O=Math.min(2,window.devicePixelRatio||1);let H=[],L=0,z=0,X=0;const K=()=>{L=D.clientWidth,z=D.clientHeight,k.width=L*O,k.height=z*O,U.setTransform(O,0,0,O,0,0);const se=Math.min(320,Math.round(L*z/8500));H=Array.from({length:se},()=>({x:Math.random()*L,y:Math.random()*z,r:Math.random()<.85?Math.random()*.9+.35:Math.random()*1.5+.9,p:Math.random()*Math.PI*2,s:.3+Math.random()*1.1,v:.01+Math.random()*.025}))},te=se=>{U.clearRect(0,0,L,z),U.fillStyle="#DDE4FF";for(const Ae of H)U.globalAlpha=.16+.72*Math.abs(Math.sin(Ae.p+se*45e-5*Ae.s)),U.beginPath(),U.arc(Ae.x,Ae.y,Ae.r,0,6.283),U.fill(),Ae.x+=Ae.v,Ae.x>L+2&&(Ae.x=-2);U.globalAlpha=1};let Me=!1;const Be=se=>{te(se),X=requestAnimationFrame(Be)},Oe=()=>{Me||(Me=!0,X=requestAnimationFrame(Be))},Q=()=>{Me=!1,cancelAnimationFrame(X)};K();const ae=new IntersectionObserver(([se])=>{se.isIntersecting?Oe():Q()},{threshold:0});return ae.observe(D),window.addEventListener("resize",K),()=>{ae.disconnect(),Q(),window.removeEventListener("resize",K)}},[]),Z.useEffect(()=>{const C=document.querySelector(".hero-video");if(!C)return;const D=O=>{O?C.play().catch(()=>{}):C.pause()},k=new IntersectionObserver(([O])=>D(O.isIntersecting),{threshold:0});k.observe(C);const U=()=>{const O=C.getBoundingClientRect();O.bottom>0&&O.top<window.innerHeight&&C.play().catch(()=>{})};return C.readyState>=2?U():C.addEventListener("canplay",U,{once:!0}),()=>{k.disconnect(),C.removeEventListener("canplay",U)}},[]),Z.useEffect(()=>{const C=document.querySelector("[data-scrub]");if(!C)return;[...C.childNodes].forEach(H=>{if(H.nodeType!==3||!H.textContent.trim())return;const L=document.createDocumentFragment();H.textContent.split(/(\s+)/).forEach(z=>{if(!z)return;if(/^\s+$/.test(z)){L.appendChild(document.createTextNode(z));return}const X=document.createElement("span");X.textContent=z,X.className="scrub-w",L.appendChild(X)}),C.replaceChild(L,H)});const D=C.querySelectorAll(".scrub-w");let k=!1;const U=()=>{k=!1;const H=C.getBoundingClientRect(),L=window.innerHeight,z=Math.min(1,Math.max(0,(L*.88-H.top)/(L*.5)));D.forEach((X,K)=>{const te=Math.min(1,Math.max(.12,z*(D.length+2)-K));X.style.opacity=te})},O=()=>{k||(k=!0,requestAnimationFrame(U))};return window.addEventListener("scroll",O,{passive:!0}),U(),()=>window.removeEventListener("scroll",O)},[]),Z.useEffect(()=>{const C=new IntersectionObserver(K=>{K.forEach(te=>{te.isIntersecting&&(te.target.style.opacity="1",te.target.style.transform="translateY(0px) scale(1)",te.target.style.filter="blur(0px)",C.unobserve(te.target))})},{threshold:.1,rootMargin:"0px 0px -6% 0px"}),D=new IntersectionObserver(K=>{K.forEach(te=>{te.isIntersecting&&(D.unobserve(te.target),te.target.querySelectorAll(".ss-w").forEach(Me=>{Me.style.transform="translateY(0)"}))})},{threshold:.35}),k=K=>{[...K.childNodes].forEach(te=>{if(te.nodeType===3&&te.textContent.trim()){const Me=document.createDocumentFragment();te.textContent.split(/(\s+)/).forEach(Be=>{if(!Be)return;if(/^\s+$/.test(Be)){Me.appendChild(document.createTextNode(Be));return}const Oe=document.createElement("span");Oe.className="ss-m";const Q=document.createElement("span");Q.textContent=Be,Q.className="ss-w",Oe.appendChild(Q),Me.appendChild(Oe)}),K.replaceChild(Me,te)}else if(te.nodeType===1&&te.tagName!=="BR"&&!te.classList.contains("ss-w")&&!te.classList.contains("ss-m")){const Me=document.createElement("span");Me.className="ss-m",K.replaceChild(Me,te),te.classList.add("ss-w"),getComputedStyle(te).display==="inline"&&(te.style.display="inline-block"),Me.appendChild(te)}})},U=new WeakSet,O=new WeakSet,H=()=>{document.querySelectorAll("[data-reveal]").forEach(K=>{if(U.has(K)||(U.add(K),K.getBoundingClientRect().top<window.innerHeight*.88))return;const Me=parseInt(K.getAttribute("data-reveal")||"0",10);K.style.opacity="0",K.style.transform="translateY(28px) scale(0.94)",K.style.filter="blur(8px)",K.style.transition=`opacity 0.7s ease ${Me}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${Me}ms, filter 0.7s ease ${Me}ms`,C.observe(K)}),document.querySelectorAll("[data-split]").forEach(K=>{O.has(K)||(O.add(K),K.getBoundingClientRect().top<window.innerHeight*.85)||(k(K),K.querySelectorAll(".ss-w").forEach((Me,Be)=>{Me.style.transform="translateY(112%)",Me.style.transition=`transform 0.9s cubic-bezier(0.16,1,0.3,1) ${Be*60}ms`}),D.observe(K))})};H();const L=setTimeout(H,400),z=setTimeout(H,1200),X=new IntersectionObserver(K=>{K.forEach(te=>{if(!te.isIntersecting)return;X.unobserve(te.target);const Me=te.target,Be=parseFloat(Me.getAttribute("data-count")),Oe=Me.getAttribute("data-suffix")||"",Q=Me.getAttribute("data-prefix")||"",ae=performance.now(),se=1500,Ae=Fe=>{const De=Math.min(1,(Fe-ae)/se),vt=1-Math.pow(1-De,3);Me.textContent=Q+S.format(Math.round(Be*vt))+Oe,De<1&&requestAnimationFrame(Ae)};requestAnimationFrame(Ae)})},{threshold:.5});return document.querySelectorAll("[data-count]").forEach(K=>X.observe(K)),()=>{C.disconnect(),D.disconnect(),X.disconnect(),clearTimeout(L),clearTimeout(z)}},[S]),Z.useEffect(()=>{const C=["sluzby","proces","reference","cenik","faq"],D=new IntersectionObserver(z=>{z.forEach(X=>{X.isIntersecting&&l(X.target.id)})},{rootMargin:"-30% 0px -60% 0px"});C.forEach(z=>{const X=document.getElementById(z);X&&D.observe(X)});const k=document.getElementById("ss-hero-content"),U=[...document.querySelectorAll("[data-parallax]")].map(z=>[z,parseFloat(z.getAttribute("data-parallax"))]);let O=!1;const H=()=>{O=!1;const z=window.scrollY;k&&z<window.innerHeight*1.1&&(k.style.transform=`translateY(${z*.28}px)`,k.style.opacity=String(Math.max(0,1-z/640)));for(const[X,K]of U)X.style.transform=`translateY(${z*K}px)`},L=()=>{O||(O=!0,requestAnimationFrame(H))};return window.addEventListener("scroll",L,{passive:!0}),()=>{D.disconnect(),window.removeEventListener("scroll",L)}},[]),Z.useEffect(()=>{const C=window.matchMedia("(max-width: 640px)"),D=()=>o(C.matches);return D(),C.addEventListener("change",D),()=>C.removeEventListener("change",D)},[]),Z.useEffect(()=>{const C=new E3({lerp:.09,wheelMultiplier:1,smoothWheel:!0,syncTouch:!1});let D=requestAnimationFrame(function U(O){C.raf(O),D=requestAnimationFrame(U)});const k=U=>{const O=U.target.closest('a[href^="#"]');if(!O)return;const H=O.getAttribute("href");if(!H||H.length<2)return;const L=document.querySelector(H);L&&(U.preventDefault(),C.scrollTo(L,{offset:-90}),e(!1))};return document.addEventListener("click",k),()=>{cancelAnimationFrame(D),document.removeEventListener("click",k),C.destroy()}},[]),Z.useEffect(()=>{const C=D=>{t&&h.current&&!h.current.contains(D.target)&&e(!1)};return document.addEventListener("click",C),()=>document.removeEventListener("click",C)},[t]),Z.useEffect(()=>{const C=setInterval(()=>{M.current||f(D=>(D+1)%Zr.length)},7e3);return()=>clearInterval(C)},[]),Z.useEffect(()=>{const C=setInterval(()=>{g.current||u(D=>(D+1)%gr.length)},5e3);return()=>clearInterval(C)},[]);const _=()=>e(!1),b=Z.useRef(null);Z.useEffect(()=>{const C=b.current;if(!C)return;let D=!1,k=0,U=0;const O=L=>{k=L.clientX,U=L.clientY,!D&&(D=!0,requestAnimationFrame(()=>{C.style.setProperty("--sx",k+"px"),C.style.setProperty("--sy",U+"px"),D=!1}))},H=()=>{C.style.opacity=window.scrollY>window.innerHeight*.72?"1":"0"};return window.addEventListener("mousemove",O,{passive:!0}),window.addEventListener("scroll",H,{passive:!0}),H(),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("scroll",H)}},[]);const N=Z.useRef(null),I=Z.useRef(null);return Z.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const C=N.current,D=I.current;if(!C||!D)return;document.documentElement.classList.add("has-cursor");let k=window.innerWidth/2,U=window.innerHeight/2,O=k,H=U,L=0;const z=K=>{var te,Me;k=K.clientX,U=K.clientY,C.style.transform=`translate(${k}px, ${U}px)`,D.classList.toggle("big",!!((Me=(te=K.target).closest)!=null&&Me.call(te,"a, button, .spot-card")))},X=()=>{O+=(k-O)*.16,H+=(U-H)*.16,D.style.transform=`translate(${O}px, ${H}px)`,L=requestAnimationFrame(X)};return window.addEventListener("mousemove",z,{passive:!0}),L=requestAnimationFrame(X),()=>{window.removeEventListener("mousemove",z),cancelAnimationFrame(L),document.documentElement.classList.remove("has-cursor")}},[]),Z.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const D=[...document.querySelectorAll(".btn-light, .notch-cta, .plan-cta.primary, .cta .go")].map(k=>{k.classList.add("magnetic");const U=H=>{const L=k.getBoundingClientRect(),z=H.clientX-(L.left+L.width/2),X=H.clientY-(L.top+L.height/2);k.style.setProperty("--magx",z*.22+"px"),k.style.setProperty("--magy",X*.3+"px")},O=()=>{k.style.setProperty("--magx","0px"),k.style.setProperty("--magy","0px")};return k.addEventListener("mousemove",U,{passive:!0}),k.addEventListener("mouseleave",O),()=>{k.removeEventListener("mousemove",U),k.removeEventListener("mouseleave",O)}});return()=>D.forEach(k=>k())},[]),Z.useEffect(()=>{let C=!1,D=0,k=0,U=null;const O=H=>{D=H.clientX,k=H.clientY,!C&&(C=!0,requestAnimationFrame(()=>{var z;const L=(z=document.elementFromPoint(D,k))==null?void 0:z.closest(".spot-card");if(L){const X=L.getBoundingClientRect();L.style.setProperty("--mx",(D-X.left)/X.width*100+"%"),L.style.setProperty("--my",(k-X.top)/X.height*100+"%")}U&&U!==L&&U.style.removeProperty("--mx"),U=L||null,C=!1}))};return window.addEventListener("mousemove",O,{passive:!0}),()=>window.removeEventListener("mousemove",O)},[]),v.jsxs("div",{className:"page",children:[v.jsx(tk,{}),v.jsx("div",{className:"grain","aria-hidden":!0}),v.jsx("div",{className:"cursor-spot",ref:b,"aria-hidden":!0}),v.jsx("div",{className:"cur-dot",ref:N,"aria-hidden":!0}),v.jsx("div",{className:"cur-ring",ref:I,"aria-hidden":!0}),v.jsx("div",{className:"nav-wrap",children:v.jsxs(bn.div,{ref:h,className:"nav-island",layout:!0,transition:Kr,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[v.jsx("div",{className:"nav-corner left","aria-hidden":!0}),v.jsx("div",{className:"nav-corner right","aria-hidden":!0}),v.jsxs(bn.nav,{className:"nav",layout:!0,transition:Kr,children:[v.jsxs("a",{href:"#hero",className:"nav-logo",onClick:_,children:[v.jsx("span",{className:"mark",children:"S"}),v.jsx($a,{initial:!1,children:t&&!s&&v.jsx(bn.span,{className:"name",initial:{opacity:0,width:0,marginLeft:0},animate:{opacity:1,width:"auto",marginLeft:9},exit:{opacity:0,width:0,marginLeft:0},transition:Kr,children:"SiteSpot"})})]}),v.jsx($a,{initial:!1,children:t&&v.jsx(bn.div,{className:`nav-links${s?" mobile":""}`,layout:!0,initial:{width:0,opacity:0},animate:{width:"auto",opacity:1},exit:{width:0,opacity:0},transition:Kr,children:qF.map((C,D)=>v.jsx(bn.a,{href:C.href,onClick:_,className:`nav-link${a===C.id?" active":""}`,initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{...Kr,delay:.02*D},children:C.label},C.id))})}),v.jsxs("button",{className:"nav-burger","aria-label":"Menu",onClick:C=>{C.stopPropagation(),e(D=>!D)},children:[v.jsx(bn.span,{animate:{rotate:t?45:0,y:t?3:0},transition:Kr}),v.jsx(bn.span,{animate:{rotate:t?-45:0,y:t?-3:0},transition:Kr})]})]})]})}),v.jsx("section",{id:"hero",className:"hero",ref:x,children:v.jsxs(bn.div,{id:"ss-hero-panel",className:"hero-panel",style:{scale:A,borderRadius:w},children:[v.jsxs(bn.div,{className:"hero-media",style:{y:R},"aria-hidden":!0,children:[v.jsx(BU,{}),v.jsx("video",{className:"hero-video",muted:!0,loop:!0,playsInline:!0,preload:"metadata",onError:C=>{C.currentTarget.style.display="none"},onLoadedData:C=>{C.currentTarget.classList.add("ready")},children:v.jsx("source",{src:"/media/hero.mp4",type:"video/mp4"})})]}),v.jsx("canvas",{id:"ss-stars",className:"hero-stars"}),v.jsx("div",{className:"hero-glow a","data-parallax":"0.06","aria-hidden":!0}),v.jsx("div",{className:"hero-glow b","data-parallax":"0.04","aria-hidden":!0}),v.jsxs("div",{id:"ss-hero-content",className:"hero-content",children:[v.jsxs("div",{className:"hero-badge",children:[v.jsx("span",{className:"tag",children:"Nové"}),v.jsx("span",{className:"label",children:"AI agenti na míru"})]}),v.jsxs("h1",{children:["Proměníme váš web",v.jsx("br",{}),"ve stroj na zákazníky."]}),v.jsx("p",{children:"Stavíme weby, které prodávají, a AI automatizace, které šetří čas a peníze — bez zbytečné složitosti."}),v.jsxs("div",{className:"hero-actions",children:[v.jsx(na,{href:"#kontakt",className:"btn-light",onClick:r,children:"Nezávazná konzultace"}),v.jsx(na,{href:"#sluzby",className:"btn-ghost",children:"Naše služby"})]})]}),v.jsxs("div",{className:"hero-notch",children:[v.jsx("div",{className:"corner left","aria-hidden":!0}),v.jsx("div",{className:"corner right","aria-hidden":!0}),v.jsxs("div",{className:"notch-inner",children:[v.jsx("span",{className:"brand",title:"Framer","aria-label":"Framer",children:v.jsx(HU,{h:18})}),v.jsx(na,{href:"#kontakt",className:"notch-cta",onClick:r,children:"Domluvit schůzku"}),v.jsx("span",{className:"brand",title:"Claude","aria-label":"Claude",children:v.jsx(oE,{h:20})})]})]})]})}),v.jsxs("section",{className:"bignum",children:[v.jsx("div",{className:"bignum-ghost","aria-hidden":!0,children:"14K"}),v.jsxs("h2",{className:"bignum-head","data-scrub":"1",children:["Šetříme firmám přes 14 000 hodin",v.jsx("br",{}),"práce každý rok."]})]}),v.jsx(x_,{}),v.jsxs("section",{id:"proces",className:"section dark",children:[v.jsx("div",{className:"blob","data-parallax":"-0.05","aria-hidden":!0,style:{top:-200,left:-160,width:520,height:520,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 18%, transparent), transparent 70%)",filter:"blur(60px)"}}),v.jsxs("div",{className:"wrap proc-pin",children:[v.jsx("div",{className:"proc-sticky",children:v.jsxs("div",{className:"head",children:[v.jsxs("div",{className:"eyebrow","data-reveal":"0",children:[v.jsx("span",{className:"dot"}),"Jak pracujeme"]}),v.jsx("h2",{"data-split":"1",children:"Tři kroky od poptávky k růstu"}),v.jsx("p",{className:"sub","data-reveal":"120",children:"Žádné nekonečné schůzky. Jasný proces, jasné termíny, měřitelné výsledky."})]})}),v.jsx("div",{className:"proc-steps",children:YF.map((C,D)=>v.jsxs("div",{className:"card hoverable pad spot-card","data-reveal":D*100,children:[v.jsxs("div",{className:"step-head",children:[v.jsx("div",{className:"step-ic",children:v.jsx(Ws,{C:VF[D],size:22})}),v.jsx("div",{className:"step-no",children:C.no})]}),v.jsx("h3",{children:C.h}),v.jsx("p",{children:C.p}),v.jsx(ok,{i:D})]},D))})]})]}),v.jsxs("section",{id:"sluzby",className:"section clip",children:[v.jsx("div",{className:"blob","data-parallax":"0.05","aria-hidden":!0,style:{top:120,right:-200,width:560,height:560,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 70%)",filter:"blur(70px)"}}),v.jsxs("div",{className:"wrap",children:[v.jsxs("div",{className:"head",children:[v.jsxs("div",{className:"eyebrow","data-reveal":"0",children:[v.jsx("span",{className:"dot"}),"Služby"]}),v.jsx("h2",{"data-split":"1",children:"Vše, co váš růst potřebuje. Pod jednou střechou."})]}),v.jsx("div",{className:"grid g-serv-bento",children:KF.map((C,D)=>v.jsxs("div",{className:"card hoverable serv-b spot-card","data-reveal":D%3*90,children:[C.textFirst&&v.jsxs("div",{className:"serv-b-text",children:[v.jsx("div",{className:"icon sm",children:v.jsx(Ws,{C:v_[D],size:18,color:"#fff"})}),v.jsx("h3",{children:C.h}),v.jsx("p",{children:C.p})]}),v.jsx(ak,{type:C.type}),!C.textFirst&&v.jsxs("div",{className:"serv-b-text",children:[v.jsx("div",{className:"icon sm",children:v.jsx(Ws,{C:v_[D],size:18,color:"#fff"})}),v.jsx("h3",{children:C.h}),v.jsx("p",{children:C.p})]})]},D))})]})]}),v.jsx("section",{id:"ai-agent",className:"section clip",children:v.jsx("div",{className:"wrap",children:v.jsxs("div",{className:"spline-card","data-reveal":"0",children:[v.jsx("div",{className:"spline-spot","aria-hidden":!0}),v.jsxs("div",{className:"spline-copy",children:[v.jsxs("h2",{children:["Živý AI agent,",v.jsx("br",{}),"který pracuje za vás."]}),v.jsx("p",{children:"Postavíme vám vlastní AI systém napojený na vaše nástroje — vyřizuje dotazy, třídí poptávky a jedná sám. Nonstop, bez přestávek, bez chyb z únavy."}),v.jsx(na,{href:"#kontakt",className:"btn-light",onClick:r,children:"Chci svého AI agenta"})]}),v.jsx(hk,{scene:"https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"})]})})}),v.jsxs("section",{id:"reference",className:"section dark",children:[v.jsx("div",{className:"blob","data-parallax":"-0.04","aria-hidden":!0,style:{bottom:-220,left:"35%",width:560,height:520,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 70%)",filter:"blur(70px)"}}),v.jsxs("div",{className:"wrap",children:[v.jsx("div",{className:"head",children:v.jsx("h2",{"data-split":"1",children:"Výsledky, které se dají změřit"})}),v.jsxs("div",{className:"case3d","data-reveal":"0",onMouseEnter:()=>g.current=!0,onMouseLeave:()=>g.current=!1,children:[v.jsx("div",{className:"case3d-stage",children:gr.map((C,D)=>{let k=D-d;k>1&&(k-=gr.length),k<-1&&(k+=gr.length);const U=Math.abs(k),O={transform:`translateX(${k*58}%) translateZ(${-U*170}px) rotateY(${k*-34}deg) scale(${1-U*.1})`,opacity:U>1?0:1-U*.04,zIndex:10-U,pointerEvents:U>1?"none":"auto",filter:U>0?"brightness(0.94)":"none"};return v.jsxs("div",{className:`case3d-card card case spot-card trend-${C.trend}${k===0?" is-active":""}`,style:O,onClick:()=>u(D),children:[v.jsx("div",{className:"case-glow","aria-hidden":!0}),v.jsxs("div",{className:"case-top",children:[v.jsx("span",{className:"case-ic",children:v.jsx(Ws,{C:WF[D],size:18,color:"#fff"})}),v.jsx("span",{className:"kicker",children:C.k})]}),v.jsxs("div",{className:"big grad","data-count":C.num,"data-prefix":C.prefix,"data-suffix":C.suffix,children:[C.prefix,S.format(C.num),C.suffix]}),v.jsx("div",{className:"lead",children:C.lead}),v.jsx(ZF,{dir:C.trend}),v.jsxs("div",{className:"case-ba",children:[v.jsx("span",{className:"ba-val from",children:C.from}),v.jsx(Aa,{size:14,strokeWidth:2.2,className:"ba-arrow"}),v.jsx("span",{className:"ba-val to",children:C.to}),v.jsx("span",{className:"ba-metric",children:C.metric})]}),v.jsx("p",{children:C.p})]},D)})}),v.jsxs("div",{className:"case3d-nav",children:[v.jsx("button",{className:"t-arrow","aria-label":"Předchozí",onClick:()=>u(C=>(C+gr.length-1)%gr.length),children:"←"}),v.jsx("div",{className:"t-dots",children:gr.map((C,D)=>v.jsx("button",{className:`t-dot${D===d?" on":""}`,"aria-label":"Přejít na studii",onClick:()=>u(D)},D))}),v.jsx("button",{className:"t-arrow","aria-label":"Další",onClick:()=>u(C=>(C+1)%gr.length),children:"→"})]})]})]})]}),v.jsx("section",{id:"benefity",className:"section",children:v.jsxs("div",{className:"wrap",children:[v.jsx("div",{className:"head",children:v.jsx("h2",{"data-split":"1",children:"Partner, ne dodavatel"})}),v.jsxs("div",{className:"grid g-ben-bento",children:[QF.map((C,D)=>v.jsxs("div",{className:`benefit bento-pos-${D} spot-card`,"data-reveal":D%3*60,children:[v.jsxs("div",{className:"ben-top",children:[v.jsx("div",{className:"ben-ic",children:v.jsx(Ws,{C:HF[D],size:20,color:"#fff"})}),v.jsx("span",{className:"ben-stat",children:C.stat})]}),v.jsx("h3",{children:C.h}),v.jsx("p",{children:C.p}),C.mini&&v.jsx(JF,{type:C.mini})]},D)),v.jsx(lk,{}),v.jsx(ck,{}),v.jsx(uk,{})]})]})}),v.jsx("section",{id:"ohlasy",className:"section",children:v.jsxs("div",{className:"wrap",children:[v.jsx("div",{className:"head",style:{marginBottom:44},children:v.jsx("h2",{"data-split":"1",children:"Co říkají naši klienti"})}),v.jsxs("div",{className:"dbc","data-reveal":"0",onMouseEnter:()=>M.current=!0,onMouseLeave:()=>M.current=!1,children:[v.jsx("div",{className:"dbc-stage",children:Zr.map((C,D)=>{const k=Zr.length;let U=D-c;U>k/2&&(U-=k),U<-k/2&&(U+=k);const O=Math.abs(U),H={transform:`translateX(${U*300}px) translateZ(${-O*220}px) rotateY(${Math.sign(U)*Math.min(O*35,60)}deg) scale(${1-O*.14})`,opacity:O>2?0:1-O*.22,filter:`blur(${O*3.2}px)`,zIndex:10-O,pointerEvents:O>1?"none":"auto"};return v.jsxs("figure",{className:`dbc-card spot-card${U===0?" is-active":""}`,style:H,onClick:()=>f(D),children:[v.jsx("div",{className:"t-stars",children:[0,1,2,3,4].map(L=>v.jsx(UF,{size:15,fill:"currentColor",strokeWidth:0},L))}),v.jsxs("blockquote",{children:["„",C.quote,"“"]}),v.jsxs("figcaption",{children:[v.jsx($F,{name:C.name,size:46}),v.jsxs("span",{className:"dbc-meta",children:[v.jsxs("span",{className:"t-name",children:[C.name,v.jsx("span",{className:"t-verified",title:"Ověřená reference",children:v.jsx(ul,{size:13,strokeWidth:2.5})})]}),v.jsx("span",{className:"t-role",children:C.role})]})]})]},D)})}),v.jsx("div",{className:"dbc-edge left","aria-hidden":!0}),v.jsx("div",{className:"dbc-edge right","aria-hidden":!0}),v.jsxs("div",{className:"dbc-nav",children:[v.jsx("button",{className:"t-arrow","aria-label":"Předchozí",onClick:()=>f(C=>(C+Zr.length-1)%Zr.length),children:"←"}),v.jsx("div",{className:"t-dots",children:Zr.map((C,D)=>v.jsx("button",{className:`t-dot${D===c?" on":""}`,"aria-label":"Přejít na referenci",onClick:()=>f(D)},D))}),v.jsx("button",{className:"t-arrow","aria-label":"Další",onClick:()=>f(C=>(C+1)%Zr.length),children:"→"})]})]})]})}),v.jsx(x_,{reverse:!0}),v.jsxs("section",{id:"cenik",className:"section dark",children:[v.jsx("div",{className:"blob","data-parallax":"0.04","aria-hidden":!0,style:{top:80,left:"50%",marginLeft:-300,width:600,height:420,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 72%)",filter:"blur(70px)"}}),v.jsxs("div",{className:"wrap",children:[v.jsxs("div",{className:"head",children:[v.jsxs("div",{className:"eyebrow","data-reveal":"0",children:[v.jsx("span",{className:"dot"}),"Ceník"]}),v.jsx("h2",{"data-split":"1",children:"Férové ceny, žádná překvapení"}),v.jsx("p",{className:"sub","data-reveal":"120",children:"Cenu znáte vždy předem. Fixně, písemně a bez skrytých položek."})]}),v.jsx("div",{className:"grid g-price",children:nk.map((C,D)=>v.jsxs("div",{className:`plan spot-card${C.featured?" featured":""}`,"data-reveal":D*100,children:[C.featured&&v.jsx("div",{className:"badge",children:"Nejoblíbenější"}),v.jsxs("div",{className:"tier",children:[v.jsx(Ws,{C:GF[D],size:20,color:C.featured?"#E8EAED":"#C9C9CE"})," ",C.tier]}),v.jsx("div",{className:"price",children:C.price}),v.jsx("div",{className:"per",children:C.per}),v.jsx("p",{className:"desc",children:C.desc}),v.jsx("hr",{}),v.jsx("div",{className:"feat-list",children:C.feats.map((k,U)=>v.jsxs("div",{className:"row",children:[v.jsx("span",{className:"ok",children:v.jsx(mg,{size:13,strokeWidth:3})}),k]},U))}),v.jsx(na,{href:"#kontakt",className:`plan-cta mt-auto${C.featured?" primary":""}`,onClick:r,children:C.cta})]},D))})]})]}),v.jsx("section",{id:"srovnani",className:"section",children:v.jsxs("div",{className:"wrap",children:[v.jsx("div",{className:"head",children:v.jsxs("h2",{"data-split":"1",children:["Tradiční způsob vs",v.jsx("br",{}),"AI automatizace"]})}),v.jsxs("div",{className:"cmp-bar","data-reveal":"0",children:[v.jsxs("div",{className:"cmp-bar-side left",children:[v.jsx(lE,{size:15,strokeWidth:2})," Tradiční způsob"]}),v.jsx("span",{className:"cmp-bar-vs",children:"VS"}),v.jsxs("div",{className:"cmp-bar-side right",children:[v.jsx($u,{size:15,strokeWidth:2,fill:"currentColor"})," SiteSpot automatizace"]})]}),v.jsxs("div",{className:"grid g-cmp",children:[v.jsx("div",{className:"cmp bad",children:v.jsx("div",{className:"list",children:ik.map((C,D)=>v.jsxs("div",{className:"row","data-reveal":D*55,children:[v.jsx("span",{className:"cdot bad"}),C]},D))})}),v.jsx("div",{className:"cmp good",children:v.jsx("div",{className:"list",children:rk.map((C,D)=>v.jsxs("div",{className:"row","data-reveal":D*55,children:[v.jsx("span",{className:"cdot good"}),C]},D))})})]})]})}),v.jsx("section",{id:"faq",className:"section dark",children:v.jsxs("div",{className:"faq-wrap",children:[v.jsx("div",{className:"head",style:{marginBottom:48},children:v.jsx("h2",{"data-split":"1",children:"Na co se ptáte nejčastěji"})}),v.jsx("div",{className:"faq-list",children:sk.map((C,D)=>v.jsxs("div",{className:`faq-item spot-card${p===D?" open":""}`,onClick:()=>m(p===D?-1:D),children:[v.jsxs("div",{className:"faq-q",children:[v.jsx("span",{className:"q",children:C.q}),v.jsx("span",{className:"plus",children:"+"})]}),v.jsx("div",{className:"faq-a",children:v.jsx("div",{className:"inner",children:v.jsx("p",{children:C.a})})})]},D))})]})}),v.jsxs("section",{id:"kontakt",className:"cta",children:[v.jsx("div",{className:"pulse","aria-hidden":!0}),v.jsxs("div",{className:"inner",children:[v.jsxs("h2",{"data-split":"1",children:["Přestaňte web jen mít.",v.jsx("br",{}),"Nechte ho ",v.jsx("span",{className:"grad",children:"vydělávat"}),"."]}),v.jsx("p",{"data-reveal":"150",children:"30 minut, konkrétní doporučení pro váš byznys, žádné závazky. Nejhorší, co se může stát? Odnesete si nápady zdarma."}),v.jsxs("a",{className:"go hbtn",href:"#kontakt",onClick:r,"data-reveal":"250",children:[v.jsx("span",{className:"hbtn-label",children:"Domluvit konzultaci zdarma"}),v.jsx("span",{className:"hbtn-arrow","aria-hidden":!0,children:v.jsx(Aa,{size:18,strokeWidth:2})})]})]})]}),v.jsx("footer",{className:"footer",children:v.jsxs("div",{className:"footer-inner",children:[v.jsxs("div",{className:"footer-grid",children:[v.jsxs("div",{className:"footer-col brand",children:[v.jsxs("div",{className:"footer-brand",children:[v.jsx("span",{className:"mark",children:"S"}),v.jsx("span",{className:"name",children:"SiteSpot"})]}),v.jsx("p",{children:"Digitální agentura pro firmy, které chtějí růst. Weby, AI automatizace, leady a marketing."})]}),v.jsxs("div",{className:"footer-col",children:[v.jsx("div",{className:"footer-head",children:"Navigace"}),v.jsx("a",{href:"#sluzby",children:"Služby"}),v.jsx("a",{href:"#proces",children:"Jak pracujeme"}),v.jsx("a",{href:"#reference",children:"Reference"}),v.jsx("a",{href:"#cenik",children:"Ceník"}),v.jsx("a",{href:"#faq",children:"FAQ"})]}),v.jsxs("div",{className:"footer-col",children:[v.jsx("div",{className:"footer-head",children:"Kontakt"}),v.jsxs("a",{href:"mailto:hello@sitespot.cz",children:[v.jsx(pF,{size:15,strokeWidth:1.7})," hello@sitespot.cz"]}),v.jsxs("a",{href:"tel:+420777123456",children:[v.jsx(SF,{size:15,strokeWidth:1.7})," +420 777 123 456"]}),v.jsxs("span",{style:{color:"var(--muted)",fontSize:"14.5px",display:"inline-flex",alignItems:"center",gap:8},children:[v.jsx(gF,{size:15,strokeWidth:1.7})," Praha · pracujeme po celé ČR"]}),v.jsxs("div",{className:"footer-social",children:[v.jsx("a",{href:"#hero",children:"LinkedIn"}),v.jsx("a",{href:"#hero",children:"Instagram"}),v.jsx("a",{href:"#hero",children:"X"})]})]}),v.jsxs("div",{className:"footer-col",children:[v.jsx("div",{className:"footer-head",children:"Newsletter"}),v.jsx("p",{style:{margin:0,fontSize:"13.5px",lineHeight:1.6,color:"#8A8E99"},children:"Jednou měsíčně tipy na růst. Žádný spam."}),v.jsxs("div",{className:"news-row",children:[v.jsx("input",{placeholder:"vas@email.cz"}),v.jsxs("button",{className:"hbtn",children:[v.jsx("span",{className:"hbtn-label",children:"Odebírat"}),v.jsx("span",{className:"hbtn-arrow","aria-hidden":!0,children:v.jsx(Aa,{size:14,strokeWidth:2.3})})]})]})]})]}),v.jsxs("div",{className:"footer-note",children:[v.jsx("span",{children:"© 2026 SiteSpot s.r.o. Všechna práva vyhrazena."}),v.jsx("span",{children:"Vyrobeno v Praze ⚡"})]})]})}),v.jsx(fk,{open:n,onClose:()=>i(!1)})]})}LS(document.getElementById("root")).render(v.jsx(gk,{}));export{XU as _,v as j,Z as r};
