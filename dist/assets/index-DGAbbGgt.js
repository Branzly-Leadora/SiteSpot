var yE=Object.defineProperty;var SE=(t,e,n)=>e in t?yE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var we=(t,e,n)=>SE(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var v_={exports:{}},xu={},x_={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),ME=Symbol.for("react.portal"),EE=Symbol.for("react.fragment"),TE=Symbol.for("react.strict_mode"),wE=Symbol.for("react.profiler"),AE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),bE=Symbol.for("react.forward_ref"),RE=Symbol.for("react.suspense"),PE=Symbol.for("react.memo"),LE=Symbol.for("react.lazy"),Lg=Symbol.iterator;function NE(t){return t===null||typeof t!="object"?null:(t=Lg&&t[Lg]||t["@@iterator"],typeof t=="function"?t:null)}var __={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y_=Object.assign,S_={};function No(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||__}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M_(){}M_.prototype=No.prototype;function Pp(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||__}var Lp=Pp.prototype=new M_;Lp.constructor=Pp;y_(Lp,No.prototype);Lp.isPureReactComponent=!0;var Ng=Array.isArray,E_=Object.prototype.hasOwnProperty,Np={current:null},T_={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)E_.call(e,i)&&!T_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qa,type:t,key:s,ref:o,props:r,_owner:Np.current}}function DE(t,e){return{$$typeof:qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===qa}function IE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dg=/\/+/g;function Yu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IE(""+t.key):e.toString(36)}function ic(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qa:case ME:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Yu(o,0):i,Ng(r)?(n="",t!=null&&(n=t.replace(Dg,"$&/")+"/"),ic(r,e,n,"",function(c){return c})):r!=null&&(Dp(r)&&(r=DE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Dg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ng(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Yu(s,a);o+=ic(s,e,n,l,r)}else if(l=NE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Yu(s,a++),o+=ic(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var i=[],r=0;return ic(t,i,"","",function(s){return e.call(n,s,r++)}),i}function UE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},rc={transition:null},FE={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:rc,ReactCurrentOwner:Np};function A_(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!Dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=No;Ge.Fragment=EE;Ge.Profiler=wE;Ge.PureComponent=Pp;Ge.StrictMode=TE;Ge.Suspense=RE;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FE;Ge.act=A_;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Np.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)E_.call(e,l)&&!T_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:qa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:CE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AE,_context:t},t.Consumer=t};Ge.createElement=w_;Ge.createFactory=function(t){var e=w_.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:bE,render:t}};Ge.isValidElement=Dp;Ge.lazy=function(t){return{$$typeof:LE,_payload:{_status:-1,_result:t},_init:UE}};Ge.memo=function(t,e){return{$$typeof:PE,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=rc.transition;rc.transition={};try{t()}finally{rc.transition=e}};Ge.unstable_act=A_;Ge.useCallback=function(t,e){return pn.current.useCallback(t,e)};Ge.useContext=function(t){return pn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return pn.current.useEffect(t,e)};Ge.useId=function(){return pn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return pn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Ge.useRef=function(t){return pn.current.useRef(t)};Ge.useState=function(t){return pn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return pn.current.useTransition()};Ge.version="18.3.1";x_.exports=Ge;var Q=x_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=Q,OE=Symbol.for("react.element"),BE=Symbol.for("react.fragment"),zE=Object.prototype.hasOwnProperty,VE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HE={key:!0,ref:!0,__self:!0,__source:!0};function C_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zE.call(e,i)&&!HE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:OE,type:t,key:s,ref:o,props:r,_owner:VE.current}}xu.Fragment=BE;xu.jsx=C_;xu.jsxs=C_;v_.exports=xu;var E=v_.exports,b_={exports:{}},In={},R_={exports:{}},P_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var X=D.length;D.push(O);e:for(;0<X;){var ee=X-1>>>1,re=D[ee];if(0<r(re,O))D[ee]=O,D[X]=re,X=ee;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],X=D.pop();if(X!==O){D[0]=X;e:for(var ee=0,re=D.length,Ue=re>>>1;ee<Ue;){var je=2*(ee+1)-1,ze=D[je],K=je+1,se=D[K];if(0>r(ze,X))K<re&&0>r(se,ze)?(D[ee]=se,D[K]=X,ee=K):(D[ee]=ze,D[je]=X,ee=je);else if(K<re&&0>r(se,X))D[ee]=se,D[K]=X,ee=K;else break e}}return O}function r(D,O){var X=D.sortIndex-O.sortIndex;return X!==0?X:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,m=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=D)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function _(D){if(S=!1,y(D),!m)if(n(l)!==null)m=!0,V(C);else{var O=n(c);O!==null&&H(_,O.startTime-D)}}function C(D,O){m=!1,S&&(S=!1,h(x),x=-1),p=!0;var X=u;try{for(y(O),d=n(l);d!==null&&(!(d.expirationTime>O)||D&&!b());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,u=d.priorityLevel;var re=ee(d.expirationTime<=O);O=t.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&i(l),y(O)}else i(l);d=n(l)}if(d!==null)var Ue=!0;else{var je=n(c);je!==null&&H(_,je.startTime-O),Ue=!1}return Ue}finally{d=null,u=X,p=!1}}var A=!1,P=null,x=-1,R=5,T=-1;function b(){return!(t.unstable_now()-T<R)}function N(){if(P!==null){var D=t.unstable_now();T=D;var O=!0;try{O=P(!0,D)}finally{O?F():(A=!1,P=null)}}else A=!1}var F;if(typeof v=="function")F=function(){v(N)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,U=z.port2;z.port1.onmessage=N,F=function(){U.postMessage(null)}}else F=function(){g(N,0)};function V(D){P=D,A||(A=!0,F())}function H(D,O){x=g(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,V(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var X=u;u=O;try{return D()}finally{u=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=u;u=D;try{return O()}finally{u=X}},t.unstable_scheduleCallback=function(D,O,X){var ee=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ee+X:ee):X=ee,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=X+re,D={id:f++,callback:O,priorityLevel:D,startTime:X,expirationTime:re,sortIndex:-1},X>ee?(D.sortIndex=X,e(c,D),n(l)===null&&D===n(c)&&(S?(h(x),x=-1):S=!0,H(_,X-ee))):(D.sortIndex=re,e(l,D),m||p||(m=!0,V(C))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var O=u;return function(){var X=u;u=O;try{return D.apply(this,arguments)}finally{u=X}}}})(P_);R_.exports=P_;var GE=R_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=Q,Dn=GE;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L_=new Set,Ca={};function Es(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(Ca[t]=e,t=0;t<e.length;t++)L_.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sd=Object.prototype.hasOwnProperty,jE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ig={},Ug={};function XE(t){return Sd.call(Ug,t)?!0:Sd.call(Ig,t)?!1:jE.test(t)?Ug[t]=!0:(Ig[t]=!0,!1)}function $E(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YE(t,e,n,i){if(e===null||typeof e>"u"||$E(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function Up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,Up);Qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,Up);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,Up);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YE(e,n,r,i)&&(n=null),i||r===null?XE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),I_=Symbol.for("react.offscreen"),Fg=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=Fg&&t[Fg]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,qu;function ia(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Ku=!1;function Zu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function qE(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Zu(t.type,!1),t;case 11:return t=Zu(t.type.render,!1),t;case 1:return t=Zu(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case Xs:return"Portal";case Md:return"Profiler";case kp:return"StrictMode";case Ed:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D_:return(t.displayName||"Context")+".Consumer";case N_:return(t._context.displayName||"Context")+".Provider";case Op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bp:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function KE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZE(t){var e=U_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=ZE(t))}function F_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=U_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ad(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k_(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function Cd(t,e){k_(t,e);var n=Ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&bd(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bd(t,e,n){(e!=="number"||Rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ra(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function O_(t,e){var n=Ur(e.value),i=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pl,z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QE=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){QE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function V_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function H_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=V_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var JE=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ld(t,e){if(e){if(JE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Id=null,co=null,uo=null;function Vg(t){if(t=Qa(t)){if(typeof Id!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Eu(e),Id(t.stateNode,t.type,e))}}function G_(t){co?uo?uo.push(t):uo=[t]:co=t}function W_(){if(co){var t=co,e=uo;if(uo=co=null,Vg(t),e)for(t=0;t<e.length;t++)Vg(e[t])}}function j_(t,e){return t(e)}function X_(){}var Qu=!1;function $_(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return j_(t,e,n)}finally{Qu=!1,(co!==null||uo!==null)&&(X_(),W_())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ud=!1;if(Zi)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Ud=!1}function eT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var da=!1,Pc=null,Lc=!1,Fd=null,tT={onError:function(t){da=!0,Pc=t}};function nT(t,e,n,i,r,s,o,a,l){da=!1,Pc=null,eT.apply(tT,arguments)}function iT(t,e,n,i,r,s,o,a,l){if(nT.apply(this,arguments),da){if(da){var c=Pc;da=!1,Pc=null}else throw Error(oe(198));Lc||(Lc=!0,Fd=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(t){if(Ts(t)!==t)throw Error(oe(188))}function rT(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hg(r),t;if(s===i)return Hg(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function q_(t){return t=rT(t),t!==null?K_(t):null}function K_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K_(t);if(e!==null)return e;t=t.sibling}return null}var Z_=Dn.unstable_scheduleCallback,Gg=Dn.unstable_cancelCallback,sT=Dn.unstable_shouldYield,oT=Dn.unstable_requestPaint,Rt=Dn.unstable_now,aT=Dn.unstable_getCurrentPriorityLevel,Vp=Dn.unstable_ImmediatePriority,Q_=Dn.unstable_UserBlockingPriority,Nc=Dn.unstable_NormalPriority,lT=Dn.unstable_LowPriority,J_=Dn.unstable_IdlePriority,_u=null,Ci=null;function cT(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:dT,uT=Math.log,fT=Math.LN2;function dT(t){return t>>>=0,t===0?32:31-(uT(t)/fT|0)|0}var ml=64,gl=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=sa(a):(s&=o,s!==0&&(i=sa(s)))}else o=n&~r,o!==0?i=sa(o):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function hT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ey(){var t=ml;return ml<<=1,!(ml&4194240)&&(ml=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function mT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function ty(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ny,Gp,iy,ry,sy,Od=!1,vl=[],Cr=null,br=null,Rr=null,Pa=new Map,La=new Map,yr=[],gT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wg(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function Ho(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Qa(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vT(t,e,n,i,r){switch(e){case"focusin":return Cr=Ho(Cr,t,e,n,i,r),!0;case"dragenter":return br=Ho(br,t,e,n,i,r),!0;case"mouseover":return Rr=Ho(Rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,Ho(Pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,La.set(s,Ho(La.get(s)||null,t,e,n,i,r)),!0}return!1}function oy(t){var e=rs(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=Y_(n),e!==null){t.blockedOn=e,sy(t.priority,function(){iy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Dd=i,n.target.dispatchEvent(i),Dd=null}else return e=Qa(n),e!==null&&Gp(e),t.blockedOn=n,!1;e.shift()}return!0}function jg(t,e,n){sc(t)&&n.delete(e)}function xT(){Od=!1,Cr!==null&&sc(Cr)&&(Cr=null),br!==null&&sc(br)&&(br=null),Rr!==null&&sc(Rr)&&(Rr=null),Pa.forEach(jg),La.forEach(jg)}function Go(t,e){t.blockedOn===e&&(t.blockedOn=null,Od||(Od=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,xT)))}function Na(t){function e(r){return Go(r,t)}if(0<vl.length){Go(vl[0],t);for(var n=1;n<vl.length;n++){var i=vl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cr!==null&&Go(Cr,t),br!==null&&Go(br,t),Rr!==null&&Go(Rr,t),Pa.forEach(e),La.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)oy(n),n.blockedOn===null&&yr.shift()}var fo=ir.ReactCurrentBatchConfig,Ic=!0;function _T(t,e,n,i){var r=rt,s=fo.transition;fo.transition=null;try{rt=1,Wp(t,e,n,i)}finally{rt=r,fo.transition=s}}function yT(t,e,n,i){var r=rt,s=fo.transition;fo.transition=null;try{rt=4,Wp(t,e,n,i)}finally{rt=r,fo.transition=s}}function Wp(t,e,n,i){if(Ic){var r=Bd(t,e,n,i);if(r===null)uf(t,e,i,Uc,n),Wg(t,i);else if(vT(r,t,e,n,i))i.stopPropagation();else if(Wg(t,i),e&4&&-1<gT.indexOf(t)){for(;r!==null;){var s=Qa(r);if(s!==null&&ny(s),s=Bd(t,e,n,i),s===null&&uf(t,e,i,Uc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uf(t,e,i,null,n)}}var Uc=null;function Bd(t,e,n,i){if(Uc=null,t=zp(i),t=rs(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uc=t,null}function ay(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aT()){case Vp:return 1;case Q_:return 4;case Nc:case lT:return 16;case J_:return 536870912;default:return 16}default:return 16}}var Er=null,jp=null,oc=null;function ly(){if(oc)return oc;var t,e=jp,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return oc=r.slice(t,1<i?1-i:void 0)}function ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Xg(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:Xg,this.isPropagationStopped=Xg,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Un(Do),Za=_t({},Do,{view:0,detail:0}),ST=Un(Za),ef,tf,Wo,yu=_t({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wo&&(Wo&&t.type==="mousemove"?(ef=t.screenX-Wo.screenX,tf=t.screenY-Wo.screenY):tf=ef=0,Wo=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),$g=Un(yu),MT=_t({},yu,{dataTransfer:0}),ET=Un(MT),TT=_t({},Za,{relatedTarget:0}),nf=Un(TT),wT=_t({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),AT=Un(wT),CT=_t({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bT=Un(CT),RT=_t({},Do,{data:0}),Yg=Un(RT),PT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NT[t])?!!e[t]:!1}function $p(){return DT}var IT=_t({},Za,{key:function(t){if(t.key){var e=PT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UT=Un(IT),FT=_t({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qg=Un(FT),kT=_t({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),OT=Un(kT),BT=_t({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),zT=Un(BT),VT=_t({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HT=Un(VT),GT=[9,13,27,32],Yp=Zi&&"CompositionEvent"in window,ha=null;Zi&&"documentMode"in document&&(ha=document.documentMode);var WT=Zi&&"TextEvent"in window&&!ha,cy=Zi&&(!Yp||ha&&8<ha&&11>=ha),Kg=" ",Zg=!1;function uy(t,e){switch(t){case"keyup":return GT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function jT(t,e){switch(t){case"compositionend":return fy(e);case"keypress":return e.which!==32?null:(Zg=!0,Kg);case"textInput":return t=e.data,t===Kg&&Zg?null:t;default:return null}}function XT(t,e){if(Ys)return t==="compositionend"||!Yp&&uy(t,e)?(t=ly(),oc=jp=Er=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cy&&e.locale!=="ko"?null:e.data;default:return null}}var $T={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$T[t.type]:e==="textarea"}function dy(t,e,n,i){G_(i),e=Fc(e,"onChange"),0<e.length&&(n=new Xp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Da=null;function YT(t){Ey(t,0)}function Su(t){var e=Zs(t);if(F_(e))return t}function qT(t,e){if(t==="change")return e}var hy=!1;if(Zi){var rf;if(Zi){var sf="oninput"in document;if(!sf){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),sf=typeof Jg.oninput=="function"}rf=sf}else rf=!1;hy=rf&&(!document.documentMode||9<document.documentMode)}function e0(){pa&&(pa.detachEvent("onpropertychange",py),Da=pa=null)}function py(t){if(t.propertyName==="value"&&Su(Da)){var e=[];dy(e,Da,t,zp(t)),$_(YT,e)}}function KT(t,e,n){t==="focusin"?(e0(),pa=e,Da=n,pa.attachEvent("onpropertychange",py)):t==="focusout"&&e0()}function ZT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Da)}function QT(t,e){if(t==="click")return Su(e)}function JT(t,e){if(t==="input"||t==="change")return Su(e)}function ew(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:ew;function Ia(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Sd.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function t0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function n0(t,e){var n=t0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=t0(n)}}function my(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?my(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gy(){for(var t=window,e=Rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rc(t.document)}return e}function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tw(t){var e=gy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&my(n.ownerDocument.documentElement,n)){if(i!==null&&qp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=n0(n,s);var o=n0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nw=Zi&&"documentMode"in document&&11>=document.documentMode,qs=null,zd=null,ma=null,Vd=!1;function i0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vd||qs==null||qs!==Rc(i)||(i=qs,"selectionStart"in i&&qp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ia(ma,i)||(ma=i,i=Fc(zd,"onSelect"),0<i.length&&(e=new Xp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qs)))}function _l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},of={},vy={};Zi&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Mu(t){if(of[t])return of[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vy)return of[t]=e[n];return t}var xy=Mu("animationend"),_y=Mu("animationiteration"),yy=Mu("animationstart"),Sy=Mu("transitionend"),My=new Map,r0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){My.set(t,e),Es(e,[t])}for(var af=0;af<r0.length;af++){var lf=r0[af],iw=lf.toLowerCase(),rw=lf[0].toUpperCase()+lf.slice(1);zr(iw,"on"+rw)}zr(xy,"onAnimationEnd");zr(_y,"onAnimationIteration");zr(yy,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Sy,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sw=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function s0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,iT(i,e,void 0,t),t.currentTarget=null}function Ey(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;s0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;s0(r,a,c),s=l}}}if(Lc)throw t=Fd,Lc=!1,Fd=null,t}function pt(t,e){var n=e[Xd];n===void 0&&(n=e[Xd]=new Set);var i=t+"__bubble";n.has(i)||(Ty(e,t,2,!1),n.add(i))}function cf(t,e,n){var i=0;e&&(i|=4),Ty(n,t,i,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[yl]){t[yl]=!0,L_.forEach(function(n){n!=="selectionchange"&&(sw.has(n)||cf(n,!1,t),cf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,cf("selectionchange",!1,e))}}function Ty(t,e,n,i){switch(ay(e)){case 1:var r=_T;break;case 4:r=yT;break;default:r=Wp}n=r.bind(null,e,n,t),r=void 0,!Ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$_(function(){var c=s,f=zp(n),d=[];e:{var u=My.get(t);if(u!==void 0){var p=Xp,m=t;switch(t){case"keypress":if(ac(n)===0)break e;case"keydown":case"keyup":p=UT;break;case"focusin":m="focus",p=nf;break;case"focusout":m="blur",p=nf;break;case"beforeblur":case"afterblur":p=nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ET;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=OT;break;case xy:case _y:case yy:p=AT;break;case Sy:p=zT;break;case"scroll":p=ST;break;case"wheel":p=HT;break;case"copy":case"cut":case"paste":p=bT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qg}var S=(e&4)!==0,g=!S&&t==="scroll",h=S?u!==null?u+"Capture":null:u;S=[];for(var v=c,y;v!==null;){y=v;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,h!==null&&(_=Ra(v,h),_!=null&&S.push(Fa(v,_,y)))),g)break;v=v.return}0<S.length&&(u=new p(u,m,null,n,f),d.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Dd&&(m=n.relatedTarget||n.fromElement)&&(rs(m)||m[Qi]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?rs(m):null,m!==null&&(g=Ts(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(S=$g,_="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=qg,_="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?u:Zs(p),y=m==null?u:Zs(m),u=new S(_,v+"leave",p,n,f),u.target=g,u.relatedTarget=y,_=null,rs(f)===c&&(S=new S(h,v+"enter",m,n,f),S.target=y,S.relatedTarget=g,_=S),g=_,p&&m)t:{for(S=p,h=m,v=0,y=S;y;y=bs(y))v++;for(y=0,_=h;_;_=bs(_))y++;for(;0<v-y;)S=bs(S),v--;for(;0<y-v;)h=bs(h),y--;for(;v--;){if(S===h||h!==null&&S===h.alternate)break t;S=bs(S),h=bs(h)}S=null}else S=null;p!==null&&o0(d,u,p,S,!1),m!==null&&g!==null&&o0(d,g,m,S,!0)}}e:{if(u=c?Zs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var C=qT;else if(Qg(u))if(hy)C=JT;else{C=ZT;var A=KT}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(C=QT);if(C&&(C=C(t,c))){dy(d,C,n,f);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&bd(u,"number",u.value)}switch(A=c?Zs(c):window,t){case"focusin":(Qg(A)||A.contentEditable==="true")&&(qs=A,zd=c,ma=null);break;case"focusout":ma=zd=qs=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,i0(d,n,f);break;case"selectionchange":if(nw)break;case"keydown":case"keyup":i0(d,n,f)}var P;if(Yp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ys?uy(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(cy&&n.locale!=="ko"&&(Ys||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ys&&(P=ly()):(Er=f,jp="value"in Er?Er.value:Er.textContent,Ys=!0)),A=Fc(c,x),0<A.length&&(x=new Yg(x,t,null,n,f),d.push({event:x,listeners:A}),P?x.data=P:(P=fy(n),P!==null&&(x.data=P)))),(P=WT?jT(t,n):XT(t,n))&&(c=Fc(c,"onBeforeInput"),0<c.length&&(f=new Yg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=P))}Ey(d,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ra(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=Ra(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function o0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ra(n,s),l!=null&&o.unshift(Fa(n,l,a))):r||(l=Ra(n,s),l!=null&&o.push(Fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ow=/\r\n?/g,aw=/\u0000|\uFFFD/g;function a0(t){return(typeof t=="string"?t:""+t).replace(ow,`
`).replace(aw,"")}function Sl(t,e,n){if(e=a0(e),a0(t)!==e&&n)throw Error(oe(425))}function kc(){}var Hd=null,Gd=null;function Wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jd=typeof setTimeout=="function"?setTimeout:void 0,lw=typeof clearTimeout=="function"?clearTimeout:void 0,l0=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof l0<"u"?function(t){return l0.resolve(null).then(t).catch(uw)}:jd;function uw(t){setTimeout(function(){throw t})}function ff(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function c0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Io,ka="__reactProps$"+Io,Qi="__reactContainer$"+Io,Xd="__reactEvents$"+Io,fw="__reactListeners$"+Io,dw="__reactHandles$"+Io;function rs(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=c0(t);t!==null;){if(n=t[Ti])return n;t=c0(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){return t=t[Ti]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Eu(t){return t[ka]||null}var $d=[],Qs=-1;function Vr(t){return{current:t}}function mt(t){0>Qs||(t.current=$d[Qs],$d[Qs]=null,Qs--)}function ht(t,e){Qs++,$d[Qs]=t.current,t.current=e}var Fr={},an=Vr(Fr),yn=Vr(!1),ms=Fr;function _o(t,e){var n=t.type.contextTypes;if(!n)return Fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Oc(){mt(yn),mt(an)}function u0(t,e,n){if(an.current!==Fr)throw Error(oe(168));ht(an,e),ht(yn,n)}function wy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,KE(t)||"Unknown",r));return _t({},n,i)}function Bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,ms=an.current,ht(an,t),ht(yn,yn.current),!0}function f0(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=wy(t,e,ms),i.__reactInternalMemoizedMergedChildContext=t,mt(yn),mt(an),ht(an,t)):mt(yn),ht(yn,n)}var Hi=null,Tu=!1,df=!1;function Ay(t){Hi===null?Hi=[t]:Hi.push(t)}function hw(t){Tu=!0,Ay(t)}function Hr(){if(!df&&Hi!==null){df=!0;var t=0,e=rt;try{var n=Hi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,Tu=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),Z_(Vp,Hr),r}finally{rt=e,df=!1}}return null}var Js=[],eo=0,zc=null,Vc=0,zn=[],Vn=0,gs=null,Wi=1,ji="";function Qr(t,e){Js[eo++]=Vc,Js[eo++]=zc,zc=t,Vc=e}function Cy(t,e,n){zn[Vn++]=Wi,zn[Vn++]=ji,zn[Vn++]=gs,gs=t;var i=Wi;t=ji;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wi=1<<32-li(e)+r|n<<r|i,ji=s+t}else Wi=1<<s|n<<r|i,ji=t}function Kp(t){t.return!==null&&(Qr(t,1),Cy(t,1,0))}function Zp(t){for(;t===zc;)zc=Js[--eo],Js[eo]=null,Vc=Js[--eo],Js[eo]=null;for(;t===gs;)gs=zn[--Vn],zn[Vn]=null,ji=zn[--Vn],zn[Vn]=null,Wi=zn[--Vn],zn[Vn]=null}var Pn=null,Rn=null,gt=!1,ii=null;function by(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function Yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qd(t){if(gt){var e=Rn;if(e){var n=e;if(!d0(t,e)){if(Yd(t))throw Error(oe(418));e=Pr(n.nextSibling);var i=Pn;e&&d0(t,e)?by(i,n):(t.flags=t.flags&-4097|2,gt=!1,Pn=t)}}else{if(Yd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,gt=!1,Pn=t}}}function h0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Ml(t){if(t!==Pn)return!1;if(!gt)return h0(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wd(t.type,t.memoizedProps)),e&&(e=Rn)){if(Yd(t))throw Ry(),Error(oe(418));for(;e;)by(t,e),e=Pr(e.nextSibling)}if(h0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?Pr(t.stateNode.nextSibling):null;return!0}function Ry(){for(var t=Rn;t;)t=Pr(t.nextSibling)}function yo(){Rn=Pn=null,gt=!1}function Qp(t){ii===null?ii=[t]:ii.push(t)}var pw=ir.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function p0(t){var e=t._init;return e(t._payload)}function Py(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ir(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,_){return v===null||v.tag!==6?(v=_f(y,h.mode,_),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,_){var C=y.type;return C===$s?f(h,v,y.props.children,_,y.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&p0(C)===v.type)?(_=r(v,y.props),_.ref=jo(h,v,y),_.return=h,_):(_=pc(y.type,y.key,y.props,null,h.mode,_),_.ref=jo(h,v,y),_.return=h,_)}function c(h,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=yf(y,h.mode,_),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function f(h,v,y,_,C){return v===null||v.tag!==7?(v=ds(y,h.mode,_,C),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_f(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return y=pc(v.type,v.key,v.props,null,h.mode,y),y.ref=jo(h,null,v),y.return=h,y;case Xs:return v=yf(v,h.mode,y),v.return=h,v;case xr:var _=v._init;return d(h,_(v._payload),y)}if(ra(v)||zo(v))return v=ds(v,h.mode,y,null),v.return=h,v;El(h,v)}return null}function u(h,v,y,_){var C=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(h,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:return y.key===C?l(h,v,y,_):null;case Xs:return y.key===C?c(h,v,y,_):null;case xr:return C=y._init,u(h,v,C(y._payload),_)}if(ra(y)||zo(y))return C!==null?null:f(h,v,y,_,null);El(h,y)}return null}function p(h,v,y,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(y)||null,a(v,h,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case dl:return h=h.get(_.key===null?y:_.key)||null,l(v,h,_,C);case Xs:return h=h.get(_.key===null?y:_.key)||null,c(v,h,_,C);case xr:var A=_._init;return p(h,v,y,A(_._payload),C)}if(ra(_)||zo(_))return h=h.get(y)||null,f(v,h,_,C,null);El(v,_)}return null}function m(h,v,y,_){for(var C=null,A=null,P=v,x=v=0,R=null;P!==null&&x<y.length;x++){P.index>x?(R=P,P=null):R=P.sibling;var T=u(h,P,y[x],_);if(T===null){P===null&&(P=R);break}t&&P&&T.alternate===null&&e(h,P),v=s(T,v,x),A===null?C=T:A.sibling=T,A=T,P=R}if(x===y.length)return n(h,P),gt&&Qr(h,x),C;if(P===null){for(;x<y.length;x++)P=d(h,y[x],_),P!==null&&(v=s(P,v,x),A===null?C=P:A.sibling=P,A=P);return gt&&Qr(h,x),C}for(P=i(h,P);x<y.length;x++)R=p(P,h,x,y[x],_),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?x:R.key),v=s(R,v,x),A===null?C=R:A.sibling=R,A=R);return t&&P.forEach(function(b){return e(h,b)}),gt&&Qr(h,x),C}function S(h,v,y,_){var C=zo(y);if(typeof C!="function")throw Error(oe(150));if(y=C.call(y),y==null)throw Error(oe(151));for(var A=C=null,P=v,x=v=0,R=null,T=y.next();P!==null&&!T.done;x++,T=y.next()){P.index>x?(R=P,P=null):R=P.sibling;var b=u(h,P,T.value,_);if(b===null){P===null&&(P=R);break}t&&P&&b.alternate===null&&e(h,P),v=s(b,v,x),A===null?C=b:A.sibling=b,A=b,P=R}if(T.done)return n(h,P),gt&&Qr(h,x),C;if(P===null){for(;!T.done;x++,T=y.next())T=d(h,T.value,_),T!==null&&(v=s(T,v,x),A===null?C=T:A.sibling=T,A=T);return gt&&Qr(h,x),C}for(P=i(h,P);!T.done;x++,T=y.next())T=p(P,h,x,T.value,_),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?x:T.key),v=s(T,v,x),A===null?C=T:A.sibling=T,A=T);return t&&P.forEach(function(N){return e(h,N)}),gt&&Qr(h,x),C}function g(h,v,y,_){if(typeof y=="object"&&y!==null&&y.type===$s&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:e:{for(var C=y.key,A=v;A!==null;){if(A.key===C){if(C=y.type,C===$s){if(A.tag===7){n(h,A.sibling),v=r(A,y.props.children),v.return=h,h=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&p0(C)===A.type){n(h,A.sibling),v=r(A,y.props),v.ref=jo(h,A,y),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===$s?(v=ds(y.props.children,h.mode,_,y.key),v.return=h,h=v):(_=pc(y.type,y.key,y.props,null,h.mode,_),_.ref=jo(h,v,y),_.return=h,h=_)}return o(h);case Xs:e:{for(A=y.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=yf(y,h.mode,_),v.return=h,h=v}return o(h);case xr:return A=y._init,g(h,v,A(y._payload),_)}if(ra(y))return m(h,v,y,_);if(zo(y))return S(h,v,y,_);El(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=_f(y,h.mode,_),v.return=h,h=v),o(h)):n(h,v)}return g}var So=Py(!0),Ly=Py(!1),Hc=Vr(null),Gc=null,to=null,Jp=null;function em(){Jp=to=Gc=null}function tm(t){var e=Hc.current;mt(Hc),t._currentValue=e}function Kd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){Gc=t,Jp=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Jp!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(Gc===null)throw Error(oe(308));to=t,Gc.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var ss=null;function nm(t){ss===null?ss=[t]:ss.push(t)}function Ny(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,nm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function lc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hp(t,n)}}function m0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,S=a;switch(u=e,p=n,S.tag){case 1:if(m=S.payload,typeof m=="function"){d=m.call(p,d,u);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,u=typeof m=="function"?m.call(p,d,u):m,u==null)break e;d=_t({},d,u);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=d}}function g0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ja={},bi=Vr(Ja),Oa=Vr(Ja),Ba=Vr(Ja);function os(t){if(t===Ja)throw Error(oe(174));return t}function rm(t,e){switch(ht(Ba,e),ht(Oa,t),ht(bi,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pd(e,t)}mt(bi),ht(bi,e)}function Mo(){mt(bi),mt(Oa),mt(Ba)}function Iy(t){os(Ba.current);var e=os(bi.current),n=Pd(e,t.type);e!==n&&(ht(Oa,t),ht(bi,n))}function sm(t){Oa.current===t&&(mt(bi),mt(Oa))}var vt=Vr(0);function jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hf=[];function om(){for(var t=0;t<hf.length;t++)hf[t]._workInProgressVersionPrimary=null;hf.length=0}var cc=ir.ReactCurrentDispatcher,pf=ir.ReactCurrentBatchConfig,vs=0,xt=null,Ot=null,jt=null,Xc=!1,ga=!1,za=0,mw=0;function en(){throw Error(oe(321))}function am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function lm(t,e,n,i,r,s){if(vs=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cc.current=t===null||t.memoizedState===null?_w:yw,t=n(i,r),ga){s=0;do{if(ga=!1,za=0,25<=s)throw Error(oe(301));s+=1,jt=Ot=null,e.updateQueue=null,cc.current=Sw,t=n(i,r)}while(ga)}if(cc.current=$c,e=Ot!==null&&Ot.next!==null,vs=0,jt=Ot=xt=null,Xc=!1,e)throw Error(oe(300));return t}function cm(){var t=za!==0;return za=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?xt.memoizedState=jt=t:jt=jt.next=t,jt}function $n(){if(Ot===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=jt===null?xt.memoizedState:jt.next;if(e!==null)jt=e,Ot=t;else{if(t===null)throw Error(oe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},jt===null?xt.memoizedState=jt=t:jt=jt.next=t}return jt}function Va(t,e){return typeof e=="function"?e(t):e}function mf(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((vs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,xt.lanes|=f,xs|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,xs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gf(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Uy(){}function Fy(t,e){var n=xt,i=$n(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,um(By.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,Oy.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(oe(349));vs&30||ky(n,e,r)}return r}function ky(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Oy(t,e,n,i){e.value=n,e.getSnapshot=i,zy(e)&&Vy(t)}function By(t,e,n){return n(function(){zy(e)&&Vy(t)})}function zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function Vy(t){var e=Ji(t,1);e!==null&&ci(e,t,1,-1)}function v0(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=xw.bind(null,xt,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hy(){return $n().memoizedState}function uc(t,e,n,i){var r=yi();xt.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function wu(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&am(i,o.deps)){r.memoizedState=Ha(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function x0(t,e){return uc(8390656,8,t,e)}function um(t,e){return wu(2048,8,t,e)}function Gy(t,e){return wu(4,2,t,e)}function Wy(t,e){return wu(4,4,t,e)}function jy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xy(t,e,n){return n=n!=null?n.concat([t]):null,wu(4,4,jy.bind(null,e,t),n)}function fm(){}function $y(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&am(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yy(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&am(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function qy(t,e,n){return vs&21?(fi(n,e)||(n=ey(),xt.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function gw(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=pf.transition;pf.transition={};try{t(!1),e()}finally{rt=n,pf.transition=i}}function Ky(){return $n().memoizedState}function vw(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zy(t))Qy(e,n);else if(n=Ny(t,e,n,i),n!==null){var r=dn();ci(n,t,i,r),Jy(n,e,i)}}function xw(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zy(t))Qy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,nm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ny(t,e,r,i),n!==null&&(r=dn(),ci(n,t,i,r),Jy(n,e,i))}}function Zy(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function Qy(t,e){ga=Xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hp(t,n)}}var $c={readContext:Xn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},_w={readContext:Xn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:x0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uc(4194308,4,jy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return uc(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vw.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:v0,useDebugValue:fm,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=v0(!1),e=t[0];return t=gw.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=yi();if(gt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Xt===null)throw Error(oe(349));vs&30||ky(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,x0(By.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,Oy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=Xt.identifierPrefix;if(gt){var n=ji,i=Wi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yw={readContext:Xn,useCallback:$y,useContext:Xn,useEffect:um,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Wy,useMemo:Yy,useReducer:mf,useRef:Hy,useState:function(){return mf(Va)},useDebugValue:fm,useDeferredValue:function(t){var e=$n();return qy(e,Ot.memoizedState,t)},useTransition:function(){var t=mf(Va)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Uy,useSyncExternalStore:Fy,useId:Ky,unstable_isNewReconciler:!1},Sw={readContext:Xn,useCallback:$y,useContext:Xn,useEffect:um,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Wy,useMemo:Yy,useReducer:gf,useRef:Hy,useState:function(){return gf(Va)},useDebugValue:fm,useDeferredValue:function(t){var e=$n();return Ot===null?e.memoizedState=t:qy(e,Ot.memoizedState,t)},useTransition:function(){var t=gf(Va)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Uy,useSyncExternalStore:Fy,useId:Ky,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Dr(t),s=$i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,r),e!==null&&(ci(e,t,r,i),lc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Dr(t),s=$i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,r),e!==null&&(ci(e,t,r,i),lc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Dr(t),r=$i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Lr(t,r,i),e!==null&&(ci(e,t,i,n),lc(e,t,i))}};function _0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,i)||!Ia(r,s):!0}function eS(t,e,n){var i=!1,r=Fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=Sn(e)?ms:an.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):Fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function y0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function Qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},im(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=Sn(e)?ms:an.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Au.enqueueReplaceState(r,r.state,null),Wc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",i=e;do n+=qE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mw=typeof WeakMap=="function"?WeakMap:Map;function tS(t,e,n){n=$i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){qc||(qc=!0,ch=i),Jd(t,e)},n}function nS(t,e,n){n=$i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Jd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jd(t,e),typeof i!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function S0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Mw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fw.bind(null,t,e,n),e.then(t,t))}function M0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function E0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$i(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var Ew=ir.ReactCurrentOwner,_n=!1;function cn(t,e,n,i){e.child=t===null?Ly(e,null,n,i):So(e,t.child,n,i)}function T0(t,e,n,i,r){n=n.render;var s=e.ref;return ho(e,r),i=lm(t,e,n,i,s,r),n=cm(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(gt&&n&&Kp(e),e.flags|=1,cn(t,e,i,r),e.child)}function w0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iS(t,e,s,i,r)):(t=pc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function iS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ia(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,er(t,e,r)}return eh(t,e,n,i,r)}function rS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(io,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(io,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(io,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(io,bn),bn|=i;return cn(t,e,r,n),e.child}function sS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eh(t,e,n,i,r){var s=Sn(n)?ms:an.current;return s=_o(e,s),ho(e,r),n=lm(t,e,n,i,s,r),i=cm(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(gt&&i&&Kp(e),e.flags|=1,cn(t,e,n,r),e.child)}function A0(t,e,n,i,r){if(Sn(n)){var s=!0;Bc(e)}else s=!1;if(ho(e,r),e.stateNode===null)fc(t,e),eS(e,n,i),Qd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=Sn(n)?ms:an.current,c=_o(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&y0(e,o,i,c),_r=!1;var u=e.memoizedState;o.state=u,Wc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||yn.current||_r?(typeof f=="function"&&(Zd(e,n,f,i),l=e.memoizedState),(a=_r||_0(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=Sn(n)?ms:an.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&y0(e,o,i,l),_r=!1,u=e.memoizedState,o.state=u,Wc(e,i,o,r);var m=e.memoizedState;a!==d||u!==m||yn.current||_r?(typeof p=="function"&&(Zd(e,n,p,i),m=e.memoizedState),(c=_r||_0(e,n,c,i,u,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return th(t,e,n,i,s,r)}function th(t,e,n,i,r,s){sS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&f0(e,n,!1),er(t,e,s);i=e.stateNode,Ew.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):cn(t,e,a,s),e.memoizedState=i.state,r&&f0(e,n,!0),e.child}function oS(t){var e=t.stateNode;e.pendingContext?u0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&u0(t,e.context,!1),rm(t,e.containerInfo)}function C0(t,e,n,i,r){return yo(),Qp(r),e.flags|=256,cn(t,e,n,i),e.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function aS(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(vt,r&1),t===null)return qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,i,0,null),t=ds(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ih(n),e.memoizedState=nh,t):dm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Tw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ir(a,s):(s=ds(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nh,i}return s=t.child,t=s.sibling,i=Ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dm(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&Qp(i),So(e,t.child,null,n),t=dm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vf(Error(oe(422))),Tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ru({mode:"visible",children:i.children},r,0,null),s=ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=ih(o),e.memoizedState=nh,s);if(!(e.mode&1))return Tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=vf(s,i,void 0),Tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),ci(i,t,r,-1))}return xm(),i=vf(Error(oe(421))),Tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=Pr(r.nextSibling),Pn=e,gt=!0,ii=null,t!==null&&(zn[Vn++]=Wi,zn[Vn++]=ji,zn[Vn++]=gs,Wi=t.id,ji=t.overflow,gs=e),e=dm(e,i.children),e.flags|=4096,e)}function b0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kd(t.return,e,n)}function xf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b0(t,n,e);else if(t.tag===19)b0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xf(e,!0,n,null,s);break;case"together":xf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ww(t,e,n){switch(e.tag){case 3:oS(e),yo();break;case 5:Iy(e);break;case 1:Sn(e.type)&&Bc(e);break;case 4:rm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?aS(t,e,n):(ht(vt,vt.current&1),t=er(t,e,n),t!==null?t.sibling:null);ht(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,rS(t,e,n)}return er(t,e,n)}var cS,rh,uS,fS;cS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rh=function(){};uS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,os(bi.current);var s=null;switch(n){case"input":r=Ad(t,r),i=Ad(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Rd(t,r),i=Rd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kc)}Ld(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fS=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xo(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Aw(t,e,n){var i=e.pendingProps;switch(Zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Sn(e.type)&&Oc(),tn(e),null;case 3:return i=e.stateNode,Mo(),mt(yn),mt(an),om(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(dh(ii),ii=null))),rh(t,e),tn(e),null;case 5:sm(e);var r=os(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)uS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return tn(e),null}if(t=os(bi.current),Ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)pt(oa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":kg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Bg(i,s),pt("invalid",i)}Ld(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":hl(i),Og(i,s,!0);break;case"textarea":hl(i),zg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ti]=e,t[ka]=i,cS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nd(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)pt(oa[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":kg(t,i),r=Ad(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Bg(t,i),r=Rd(t,i),pt("invalid",t);break;default:r=i}Ld(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?H_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Fp(t,s,l,o))}switch(n){case"input":hl(t),Og(t,i,!1);break;case"textarea":hl(t),zg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?lo(t,!!i.multiple,s,!1):i.defaultValue!=null&&lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)fS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=os(Ba.current),os(bi.current),Ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return tn(e),null;case 13:if(mt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Rn!==null&&e.mode&1&&!(e.flags&128))Ry(),yo(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Ti]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ii!==null&&(dh(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Bt===0&&(Bt=3):xm())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return Mo(),rh(t,e),t===null&&Ua(e.stateNode.containerInfo),tn(e),null;case 10:return tm(e.type._context),tn(e),null;case 17:return Sn(e.type)&&Oc(),tn(e),null;case 19:if(mt(vt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jc(t),o!==null){for(e.flags|=128,Xo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>To&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304)}else{if(!i)if(t=jc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return tn(e),null}else 2*Rt()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=vt.current,ht(vt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return vm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Cw(t,e){switch(Zp(e),e.tag){case 1:return Sn(e.type)&&Oc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),mt(yn),mt(an),om(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sm(e),null;case 13:if(mt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(vt),null;case 4:return Mo(),null;case 10:return tm(e.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var wl=!1,sn=!1,bw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function sh(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var R0=!1;function Rw(t,e){if(Hd=Ic,t=gy(),qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gd={focusedElem:t,selectionRange:n},Ic=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var S=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:ti(e.type,S),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(_){Tt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=R0,R0=!1,m}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sh(e,n,s)}r=r.next}while(r!==i)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dS(t){var e=t.alternate;e!==null&&(t.alternate=null,dS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[ka],delete e[Xd],delete e[fw],delete e[dw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hS(t){return t.tag===5||t.tag===3||t.tag===4}function P0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kc));else if(i!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}function lh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}var Yt=null,ni=!1;function lr(t,e,n){for(n=n.child;n!==null;)pS(t,e,n),n=n.sibling}function pS(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:sn||no(n,e);case 6:var i=Yt,r=ni;Yt=null,lr(t,e,n),Yt=i,ni=r,Yt!==null&&(ni?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ni?(t=Yt,n=n.stateNode,t.nodeType===8?ff(t.parentNode,n):t.nodeType===1&&ff(t,n),Na(t)):ff(Yt,n.stateNode));break;case 4:i=Yt,r=ni,Yt=n.stateNode.containerInfo,ni=!0,lr(t,e,n),Yt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sh(n,e,o),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!sn&&(no(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,lr(t,e,n),sn=i):lr(t,e,n);break;default:lr(t,e,n)}}function L0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bw),e.forEach(function(i){var r=Ow.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ni=!1;break e;case 3:Yt=a.stateNode.containerInfo,ni=!0;break e;case 4:Yt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Yt===null)throw Error(oe(160));pS(s,o,r),Yt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mS(e,t),e=e.sibling}function mS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),vi(t),i&4){try{va(3,t,t.return),Cu(3,t)}catch(S){Tt(t,t.return,S)}try{va(5,t,t.return)}catch(S){Tt(t,t.return,S)}}break;case 1:qn(e,t),vi(t),i&512&&n!==null&&no(n,n.return);break;case 5:if(qn(e,t),vi(t),i&512&&n!==null&&no(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(S){Tt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&k_(r,s),Nd(a,o);var c=Nd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?H_(r,d):f==="dangerouslySetInnerHTML"?z_(r,d):f==="children"?ba(r,d):Fp(r,f,d,c)}switch(a){case"input":Cd(r,s);break;case"textarea":O_(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(S){Tt(t,t.return,S)}}break;case 6:if(qn(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Tt(t,t.return,S)}}break;case 3:if(qn(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(S){Tt(t,t.return,S)}break;case 4:qn(e,t),vi(t);break;case 13:qn(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mm=Rt())),i&4&&L0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,qn(e,t),sn=c):qn(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(d=Se=f;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:va(4,u,u.return);break;case 1:no(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(S){Tt(i,n,S)}}break;case 5:no(u,u.return);break;case 22:if(u.memoizedState!==null){D0(d);continue}}p!==null?(p.return=u,Se=p):D0(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V_("display",o))}catch(S){Tt(t,t.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){Tt(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),vi(t),i&4&&L0(t);break;case 21:break;default:qn(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hS(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=P0(t);lh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=P0(t);ah(t,a,o);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pw(t,e,n){Se=t,gS(t)}function gS(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=wl;var c=sn;if(wl=o,(sn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?I0(r):l!==null?(l.return=o,Se=l):I0(r);for(;s!==null;)Se=s,gS(s),s=s.sibling;Se=r,wl=a,sn=c}N0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):N0(t)}}function N0(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&g0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}g0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}sn||e.flags&512&&oh(e)}catch(u){Tt(e,e.return,u)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function D0(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function I0(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{oh(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{oh(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Lw=Math.ceil,Yc=ir.ReactCurrentDispatcher,hm=ir.ReactCurrentOwner,jn=ir.ReactCurrentBatchConfig,Ze=0,Xt=null,It=null,Zt=0,bn=0,io=Vr(0),Bt=0,Ga=null,xs=0,bu=0,pm=0,xa=null,xn=null,mm=0,To=1/0,Vi=null,qc=!1,ch=null,Nr=null,Al=!1,Tr=null,Kc=0,_a=0,uh=null,dc=-1,hc=0;function dn(){return Ze&6?Rt():dc!==-1?dc:dc=Rt()}function Dr(t){return t.mode&1?Ze&2&&Zt!==0?Zt&-Zt:pw.transition!==null?(hc===0&&(hc=ey()),hc):(t=rt,t!==0||(t=window.event,t=t===void 0?16:ay(t.type)),t):1}function ci(t,e,n,i){if(50<_a)throw _a=0,uh=null,Error(oe(185));Ka(t,n,i),(!(Ze&2)||t!==Xt)&&(t===Xt&&(!(Ze&2)&&(bu|=n),Bt===4&&Sr(t,Zt)),Mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(To=Rt()+500,Tu&&Hr()))}function Mn(t,e){var n=t.callbackNode;pT(t,e);var i=Dc(t,t===Xt?Zt:0);if(i===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?hw(U0.bind(null,t)):Ay(U0.bind(null,t)),cw(function(){!(Ze&6)&&Hr()}),n=null;else{switch(ty(i)){case 1:n=Vp;break;case 4:n=Q_;break;case 16:n=Nc;break;case 536870912:n=J_;break;default:n=Nc}n=TS(n,vS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vS(t,e){if(dc=-1,hc=0,Ze&6)throw Error(oe(327));var n=t.callbackNode;if(po()&&t.callbackNode!==n)return null;var i=Dc(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zc(t,i);else{e=i;var r=Ze;Ze|=2;var s=_S();(Xt!==t||Zt!==e)&&(Vi=null,To=Rt()+500,fs(t,e));do try{Iw();break}catch(a){xS(t,a)}while(!0);em(),Yc.current=s,Ze=r,It!==null?e=0:(Xt=null,Zt=0,e=Bt)}if(e!==0){if(e===2&&(r=kd(t),r!==0&&(i=r,e=fh(t,r))),e===1)throw n=Ga,fs(t,0),Sr(t,i),Mn(t,Rt()),n;if(e===6)Sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nw(r)&&(e=Zc(t,i),e===2&&(s=kd(t),s!==0&&(i=s,e=fh(t,s))),e===1))throw n=Ga,fs(t,0),Sr(t,i),Mn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Jr(t,xn,Vi);break;case 3:if(Sr(t,i),(i&130023424)===i&&(e=mm+500-Rt(),10<e)){if(Dc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jd(Jr.bind(null,t,xn,Vi),e);break}Jr(t,xn,Vi);break;case 4:if(Sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Lw(i/1960))-i,10<i){t.timeoutHandle=jd(Jr.bind(null,t,xn,Vi),i);break}Jr(t,xn,Vi);break;case 5:Jr(t,xn,Vi);break;default:throw Error(oe(329))}}}return Mn(t,Rt()),t.callbackNode===n?vS.bind(null,t):null}function fh(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=Zc(t,e),t!==2&&(e=xn,xn=n,e!==null&&dh(e)),t}function dh(t){xn===null?xn=t:xn.push.apply(xn,t)}function Nw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~pm,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function U0(t){if(Ze&6)throw Error(oe(327));po();var e=Dc(t,0);if(!(e&1))return Mn(t,Rt()),null;var n=Zc(t,e);if(t.tag!==0&&n===2){var i=kd(t);i!==0&&(e=i,n=fh(t,i))}if(n===1)throw n=Ga,fs(t,0),Sr(t,e),Mn(t,Rt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,xn,Vi),Mn(t,Rt()),null}function gm(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(To=Rt()+500,Tu&&Hr())}}function _s(t){Tr!==null&&Tr.tag===0&&!(Ze&6)&&po();var e=Ze;Ze|=1;var n=jn.transition,i=rt;try{if(jn.transition=null,rt=1,t)return t()}finally{rt=i,jn.transition=n,Ze=e,!(Ze&6)&&Hr()}}function vm(){bn=io.current,mt(io)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lw(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Zp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oc();break;case 3:Mo(),mt(yn),mt(an),om();break;case 5:sm(i);break;case 4:Mo();break;case 13:mt(vt);break;case 19:mt(vt);break;case 10:tm(i.type._context);break;case 22:case 23:vm()}n=n.return}if(Xt=t,It=t=Ir(t.current,null),Zt=bn=e,Bt=0,Ga=null,pm=bu=xs=0,xn=xa=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ss=null}return t}function xS(t,e){do{var n=It;try{if(em(),cc.current=$c,Xc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xc=!1}if(vs=0,jt=Ot=xt=null,ga=!1,za=0,hm.current=null,n===null||n.return===null){Bt=1,Ga=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=M0(o);if(p!==null){p.flags&=-257,E0(p,o,a,s,e),p.mode&1&&S0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var S=new Set;S.add(l),e.updateQueue=S}else m.add(l);break e}else{if(!(e&1)){S0(s,c,e),xm();break e}l=Error(oe(426))}}else if(gt&&a.mode&1){var g=M0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),E0(g,o,a,s,e),Qp(Eo(l,a));break e}}s=l=Eo(l,a),Bt!==4&&(Bt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=tS(s,l,e);m0(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Nr===null||!Nr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=nS(s,a,e);m0(s,_);break e}}s=s.return}while(s!==null)}SS(n)}catch(C){e=C,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function _S(){var t=Yc.current;return Yc.current=$c,t===null?$c:t}function xm(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Xt===null||!(xs&268435455)&&!(bu&268435455)||Sr(Xt,Zt)}function Zc(t,e){var n=Ze;Ze|=2;var i=_S();(Xt!==t||Zt!==e)&&(Vi=null,fs(t,e));do try{Dw();break}catch(r){xS(t,r)}while(!0);if(em(),Ze=n,Yc.current=i,It!==null)throw Error(oe(261));return Xt=null,Zt=0,Bt}function Dw(){for(;It!==null;)yS(It)}function Iw(){for(;It!==null&&!sT();)yS(It)}function yS(t){var e=ES(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?SS(t):It=e,hm.current=null}function SS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cw(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,It=null;return}}else if(n=Aw(n,e,bn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Bt===0&&(Bt=5)}function Jr(t,e,n){var i=rt,r=jn.transition;try{jn.transition=null,rt=1,Uw(t,e,n,i)}finally{jn.transition=r,rt=i}return null}function Uw(t,e,n,i){do po();while(Tr!==null);if(Ze&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mT(t,s),t===Xt&&(It=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,TS(Nc,function(){return po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=rt;rt=1;var a=Ze;Ze|=4,hm.current=null,Rw(t,n),mS(n,t),tw(Gd),Ic=!!Hd,Gd=Hd=null,t.current=n,Pw(n),oT(),Ze=a,rt=o,jn.transition=s}else t.current=n;if(Al&&(Al=!1,Tr=t,Kc=r),s=t.pendingLanes,s===0&&(Nr=null),cT(n.stateNode),Mn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(qc)throw qc=!1,t=ch,ch=null,t;return Kc&1&&t.tag!==0&&po(),s=t.pendingLanes,s&1?t===uh?_a++:(_a=0,uh=t):_a=0,Hr(),null}function po(){if(Tr!==null){var t=ty(Kc),e=jn.transition,n=rt;try{if(jn.transition=null,rt=16>t?16:t,Tr===null)var i=!1;else{if(t=Tr,Tr=null,Kc=0,Ze&6)throw Error(oe(331));var r=Ze;for(Ze|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:va(8,f,s)}var d=f.child;if(d!==null)d.return=f,Se=d;else for(;Se!==null;){f=Se;var u=f.sibling,p=f.return;if(dS(f),f===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var m=s.alternate;if(m!==null){var S=m.child;if(S!==null){m.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Se=y;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){Se=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Se=_;break e}Se=a.return}}if(Ze=r,Hr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{rt=n,jn.transition=e}}return!1}function F0(t,e,n){e=Eo(n,e),e=tS(t,e,1),t=Lr(t,e,1),e=dn(),t!==null&&(Ka(t,1,e),Mn(t,e))}function Tt(t,e,n){if(t.tag===3)F0(t,t,n);else for(;e!==null;){if(e.tag===3){F0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nr===null||!Nr.has(i))){t=Eo(n,t),t=nS(e,t,1),e=Lr(e,t,1),t=dn(),e!==null&&(Ka(e,1,t),Mn(e,t));break}}e=e.return}}function Fw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Bt===4||Bt===3&&(Zt&130023424)===Zt&&500>Rt()-mm?fs(t,0):pm|=n),Mn(t,e)}function MS(t,e){e===0&&(t.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var n=dn();t=Ji(t,e),t!==null&&(Ka(t,e,n),Mn(t,n))}function kw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MS(t,n)}function Ow(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),MS(t,n)}var ES;ES=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,ww(t,e,n);_n=!!(t.flags&131072)}else _n=!1,gt&&e.flags&1048576&&Cy(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fc(t,e),t=e.pendingProps;var r=_o(e,an.current);ho(e,n),r=lm(null,e,i,t,r,n);var s=cm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,im(e),r.updater=Au,e.stateNode=r,r._reactInternals=e,Qd(e,i,t,n),e=th(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Kp(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=zw(i),t=ti(i,t),r){case 0:e=eh(null,e,i,t,n);break e;case 1:e=A0(null,e,i,t,n);break e;case 11:e=T0(null,e,i,t,n);break e;case 14:e=w0(null,e,i,ti(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),eh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),A0(t,e,i,r,n);case 3:e:{if(oS(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dy(t,e),Wc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Eo(Error(oe(423)),e),e=C0(t,e,i,n,r);break e}else if(i!==r){r=Eo(Error(oe(424)),e),e=C0(t,e,i,n,r);break e}else for(Rn=Pr(e.stateNode.containerInfo.firstChild),Pn=e,gt=!0,ii=null,n=Ly(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),i===r){e=er(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return Iy(e),t===null&&qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wd(i,r)?o=null:s!==null&&Wd(i,s)&&(e.flags|=32),sS(t,e),cn(t,e,o,n),e.child;case 6:return t===null&&qd(e),null;case 13:return aS(t,e,n);case 4:return rm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=So(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),T0(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Hc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!yn.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,n),r=Xn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),w0(t,e,i,r,n);case 15:return iS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),fc(t,e),e.tag=1,Sn(i)?(t=!0,Bc(e)):t=!1,ho(e,n),eS(e,i,r),Qd(e,i,r,n),th(null,e,i,!0,t,n);case 19:return lS(t,e,n);case 22:return rS(t,e,n)}throw Error(oe(156,e.tag))};function TS(t,e){return Z_(t,e)}function Bw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new Bw(t,e,n,i)}function _m(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zw(t){if(typeof t=="function")return _m(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Op)return 11;if(t===Bp)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_m(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $s:return ds(n.children,r,s,e);case kp:o=8,r|=8;break;case Md:return t=Gn(12,n,e,r|2),t.elementType=Md,t.lanes=s,t;case Ed:return t=Gn(13,n,e,r),t.elementType=Ed,t.lanes=s,t;case Td:return t=Gn(19,n,e,r),t.elementType=Td,t.lanes=s,t;case I_:return Ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N_:o=10;break e;case D_:o=9;break e;case Op:o=11;break e;case Bp:o=14;break e;case xr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ds(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Ru(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=I_,t.lanes=n,t.stateNode={isHidden:!1},t}function _f(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function yf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ym(t,e,n,i,r,s,o,a,l){return t=new Vw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},im(s),t}function Hw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wS(t){if(!t)return Fr;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Sn(n))return wy(t,n,e)}return e}function AS(t,e,n,i,r,s,o,a,l){return t=ym(n,i,!0,t,r,s,o,a,l),t.context=wS(null),n=t.current,i=dn(),r=Dr(n),s=$i(i,r),s.callback=e??null,Lr(n,s,r),t.current.lanes=r,Ka(t,r,i),Mn(t,i),t}function Pu(t,e,n,i){var r=e.current,s=dn(),o=Dr(r);return n=wS(n),e.context===null?e.context=n:e.pendingContext=n,e=$i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Lr(r,e,o),t!==null&&(ci(t,r,o,s),lc(t,r,o)),o}function Qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function k0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sm(t,e){k0(t,e),(t=t.alternate)&&k0(t,e)}function Gw(){return null}var CS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mm(t){this._internalRoot=t}Lu.prototype.render=Mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Pu(t,e,null,null)};Lu.prototype.unmount=Mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){Pu(null,t,null,null)}),e[Qi]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ry();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&oy(t)}};function Em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function O0(){}function Ww(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Qc(o);s.call(c)}}var o=AS(e,i,t,0,null,!1,!1,"",O0);return t._reactRootContainer=o,t[Qi]=o.current,Ua(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Qc(l);a.call(c)}}var l=ym(t,0,!1,null,null,!1,!1,"",O0);return t._reactRootContainer=l,t[Qi]=l.current,Ua(t.nodeType===8?t.parentNode:t),_s(function(){Pu(e,l,n,i)}),l}function Du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Qc(o);a.call(l)}}Pu(e,o,t,r)}else o=Ww(n,e,t,r,i);return Qc(o)}ny=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(Hp(e,n|1),Mn(e,Rt()),!(Ze&6)&&(To=Rt()+500,Hr()))}break;case 13:_s(function(){var i=Ji(t,1);if(i!==null){var r=dn();ci(i,t,1,r)}}),Sm(t,1)}};Gp=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=dn();ci(e,t,134217728,n)}Sm(t,134217728)}};iy=function(t){if(t.tag===13){var e=Dr(t),n=Ji(t,e);if(n!==null){var i=dn();ci(n,t,e,i)}Sm(t,e)}};ry=function(){return rt};sy=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Id=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Eu(i);if(!r)throw Error(oe(90));F_(i),Cd(i,r)}}}break;case"textarea":O_(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};j_=gm;X_=_s;var jw={usingClientEntryPoint:!1,Events:[Qa,Zs,Eu,G_,W_,gm]},$o={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xw={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q_(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||Gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{_u=Cl.inject(Xw),Ci=Cl}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jw;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(e))throw Error(oe(200));return Hw(t,e,null,n)};In.createRoot=function(t,e){if(!Em(t))throw Error(oe(299));var n=!1,i="",r=CS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ym(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Ua(t.nodeType===8?t.parentNode:t),new Mm(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=q_(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return _s(t)};In.hydrate=function(t,e,n){if(!Nu(e))throw Error(oe(200));return Du(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Em(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=CS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=AS(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Lu(e)};In.render=function(t,e,n){if(!Nu(e))throw Error(oe(200));return Du(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(oe(40));return t._reactRootContainer?(_s(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};In.unstable_batchedUpdates=gm;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Du(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(t){console.error(t)}}bS(),b_.exports=In;var $w=b_.exports,RS,B0=$w;RS=B0.createRoot,B0.hydrateRoot;const Tm=Q.createContext({});function kr(t){const e=Q.useRef(null);return e.current===null&&(e.current=t()),e.current}const Yw=typeof window<"u",el=Yw?Q.useLayoutEffect:Q.useEffect,Iu=Q.createContext(null);function wm(t,e){t.indexOf(e)===-1&&t.push(e)}function Jc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const di=(t,e,n)=>n>e?e:n<t?t:n;let Am=()=>{};const Or={},PS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),LS=t=>typeof t=="object"&&t!==null,NS=t=>/^0[^.\s]+$/u.test(t);function DS(t){let e;return()=>(e===void 0&&(e=t()),e)}const En=t=>t,tl=(...t)=>t.reduce((e,n)=>i=>n(e(i))),wo=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class Cm{constructor(){this.subscriptions=[]}add(e){return wm(this.subscriptions,e),()=>Jc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ln=t=>t*1e3,Wn=t=>t/1e3,bm=(t,e)=>e?t*(1e3/e):0,IS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,qw=1e-7,Kw=12;function Zw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=IS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>qw&&++a<Kw);return o}function nl(t,e,n,i){if(t===e&&n===i)return En;const r=s=>Zw(s,0,1,t,n);return s=>s===0||s===1?s:IS(r(s),e,i)}const US=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,FS=t=>e=>1-t(1-e),kS=nl(.33,1.53,.69,.99),Rm=FS(kS),OS=US(Rm),BS=t=>t>=1?1:(t*=2)<1?.5*Rm(t):.5*(2-Math.pow(2,-10*(t-1))),Pm=t=>1-Math.sin(Math.acos(t)),zS=FS(Pm),VS=US(Pm),Qw=nl(.42,0,1,1),Jw=nl(0,0,.58,1),HS=nl(.42,0,.58,1),eA=t=>Array.isArray(t)&&typeof t[0]!="number",GS=t=>Array.isArray(t)&&typeof t[0]=="number",tA={linear:En,easeIn:Qw,easeInOut:HS,easeOut:Jw,circIn:Pm,circInOut:VS,circOut:zS,backIn:Rm,backInOut:OS,backOut:kS,anticipate:BS},nA=t=>typeof t=="string",z0=t=>{if(GS(t)){Am(t.length===4);const[e,n,i,r]=t;return nl(e,n,i,r)}else if(nA(t))return tA[t];return t},bl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iA(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,f=!1,d=!1)=>{const p=d&&i?e:n;return f&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0;const f=e;e=n,n=f,e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const rA=40;function WS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=bl.reduce((y,_)=>(y[_]=iA(s),y),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:f,update:d,preRender:u,render:p,postRender:m}=o,S=()=>{const y=Or.useManualTiming,_=y?r.timestamp:performance.now();n=!1,y||(r.delta=i?1e3/60:Math.max(Math.min(_-r.timestamp,rA),1)),r.timestamp=_,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),f.process(r),d.process(r),u.process(r),p.process(r),m.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(S))},g=()=>{n=!0,i=!0,r.isProcessing||t(S)};return{schedule:bl.reduce((y,_)=>{const C=o[_];return y[_]=(A,P=!1,x=!1)=>(n||g(),C.schedule(A,P,x)),y},{}),cancel:y=>{for(let _=0;_<bl.length;_++)o[bl[_]].cancel(y)},state:r,steps:o}}const{schedule:Qe,cancel:Yn,state:Wt,steps:Sf}=WS(typeof requestAnimationFrame<"u"?requestAnimationFrame:En,!0);let mc;function sA(){mc=void 0}const un={now:()=>(mc===void 0&&un.set(Wt.isProcessing||Or.useManualTiming?Wt.timestamp:performance.now()),mc),set:t=>{mc=t,queueMicrotask(sA)}},jS=t=>e=>typeof e=="string"&&e.startsWith(t),XS=jS("--"),oA=jS("var(--"),Lm=t=>oA(t)?aA.test(t.split("/*")[0].trim()):!1,aA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function V0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Uo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Wa={...Uo,transform:t=>di(0,1,t)},Rl={...Uo,default:1},ya=t=>Math.round(t*1e5)/1e5,Nm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lA(t){return t==null}const cA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Dm=(t,e)=>n=>!!(typeof n=="string"&&cA.test(n)&&n.startsWith(t)||e&&!lA(n)&&Object.prototype.hasOwnProperty.call(n,e)),$S=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Nm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},uA=t=>di(0,255,t),Mf={...Uo,transform:t=>Math.round(uA(t))},as={test:Dm("rgb","red"),parse:$S("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Mf.transform(t)+", "+Mf.transform(e)+", "+Mf.transform(n)+", "+ya(Wa.transform(i))+")"};function fA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const hh={test:Dm("#"),parse:fA,transform:as.transform},il=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),zi=il("deg"),Ri=il("%"),Me=il("px"),dA=il("vh"),hA=il("vw"),H0={...Ri,parse:t=>Ri.parse(t)/100,transform:t=>Ri.transform(t*100)},ro={test:Dm("hsl","hue"),parse:$S("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ri.transform(ya(e))+", "+Ri.transform(ya(n))+", "+ya(Wa.transform(i))+")"},Dt={test:t=>as.test(t)||hh.test(t)||ro.test(t),parse:t=>as.test(t)?as.parse(t):ro.test(t)?ro.parse(t):hh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?as.transform(t):ro.transform(t),getAnimatableNone:t=>{const e=Dt.parse(t);return e.alpha=0,Dt.transform(e)}},pA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Nm))==null?void 0:e.length)||0)+(((n=t.match(pA))==null?void 0:n.length)||0)>0}const YS="number",qS="color",gA="var",vA="var(",G0="${}",xA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ao(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(xA,l=>(Dt.test(l)?(i.color.push(s),r.push(qS),n.push(Dt.parse(l))):l.startsWith(vA)?(i.var.push(s),r.push(gA),n.push(l)):(i.number.push(s),r.push(YS),n.push(parseFloat(l))),++s,G0)).split(G0);return{values:n,split:a,indexes:i,types:r}}function _A(t){return Ao(t).values}function KS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===YS?r+=ya(i[s]):o===qS?r+=Dt.transform(i[s]):r+=i[s]}return r}}function yA(t){return KS(Ao(t))}const SA=t=>typeof t=="number"?0:Dt.test(t)?Dt.getAnimatableNone(t):t,MA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:SA(t);function EA(t){const e=Ao(t);return KS(e)(e.values.map((i,r)=>MA(i,e.split[r])))}const ui={test:mA,parse:_A,createTransformer:yA,getAnimatableNone:EA};function Ef(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function TA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Ef(l,a,t+1/3),s=Ef(l,a,t),o=Ef(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function eu(t,e){return n=>n>0?e:t}const ct=(t,e,n)=>t+(e-t)*n,Tf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},wA=[hh,as,ro],AA=t=>wA.find(e=>e.test(t));function W0(t){const e=AA(t);if(!e)return!1;let n=e.parse(t);return e===ro&&(n=TA(n)),n}const j0=(t,e)=>{const n=W0(t),i=W0(e);if(!n||!i)return eu(t,e);const r={...n};return s=>(r.red=Tf(n.red,i.red,s),r.green=Tf(n.green,i.green,s),r.blue=Tf(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),as.transform(r))},ph=new Set(["none","hidden"]);function CA(t,e){return ph.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function bA(t,e){return n=>ct(t,e,n)}function Im(t){return typeof t=="number"?bA:typeof t=="string"?Lm(t)?eu:Dt.test(t)?j0:LA:Array.isArray(t)?ZS:typeof t=="object"?Dt.test(t)?j0:RA:eu}function ZS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Im(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function RA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Im(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function PA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const LA=(t,e)=>{const n=ui.createTransformer(e),i=Ao(t),r=Ao(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?ph.has(t)&&!r.values.length||ph.has(e)&&!i.values.length?CA(t,e):tl(ZS(PA(i,r),r.values),n):eu(t,e)};function QS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):Im(t)(t,e)}const NA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>Qe.update(e,n),stop:()=>Yn(e),now:()=>Wt.isProcessing?Wt.timestamp:un.now()}},JS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},tu=2e4;function Um(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<tu;)e+=n,i=t.next(e);return e>=tu?1/0:e}function DA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Um(i),tu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Wn(r)}}const Et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function mh(t,e){return t*Math.sqrt(1-e*e)}const IA=12;function UA(t,e,n){let i=n;for(let r=1;r<IA;r++)i=i-t(i)/e(i);return i}const wf=.001;function FA({duration:t=Et.duration,bounce:e=Et.bounce,velocity:n=Et.velocity,mass:i=Et.mass}){let r,s,o=1-e;o=di(Et.minDamping,Et.maxDamping,o),t=di(Et.minDuration,Et.maxDuration,Wn(t)),o<1?(r=c=>{const f=c*o,d=f*t,u=f-n,p=mh(c,o),m=Math.exp(-d);return wf-u/p*m},s=c=>{const d=c*o*t,u=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-d),S=mh(Math.pow(c,2),o);return(-r(c)+wf>0?-1:1)*((u-p)*m)/S}):(r=c=>{const f=Math.exp(-c*t),d=(c-n)*t+1;return-wf+f*d},s=c=>{const f=Math.exp(-c*t),d=(n-c)*(t*t);return f*d});const a=5/t,l=UA(r,s,a);if(t=Ln(t),isNaN(l))return{stiffness:Et.stiffness,damping:Et.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const kA=["duration","bounce"],OA=["stiffness","damping","mass"];function X0(t,e){return e.some(n=>t[n]!==void 0)}function BA(t){let e={velocity:Et.velocity,stiffness:Et.stiffness,damping:Et.damping,mass:Et.mass,isResolvedFromDuration:!1,...t};if(!X0(t,OA)&&X0(t,kA))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*di(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Et.mass,stiffness:r,damping:s}}else{const n=FA({...t,velocity:0});e={...e,...n,mass:Et.mass},e.isResolvedFromDuration=!0}return e}function nu(t=Et.visualDuration,e=Et.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:f,duration:d,velocity:u,isResolvedFromDuration:p}=BA({...n,velocity:-Wn(n.velocity||0)}),m=u||0,S=c/(2*Math.sqrt(l*f)),g=o-s,h=Wn(Math.sqrt(l/f)),v=Math.abs(g)<5;i||(i=v?Et.restSpeed.granular:Et.restSpeed.default),r||(r=v?Et.restDelta.granular:Et.restDelta.default);let y,_,C,A,P,x;if(S<1)C=mh(h,S),A=(m+S*h*g)/C,y=T=>{const b=Math.exp(-S*h*T);return o-b*(A*Math.sin(C*T)+g*Math.cos(C*T))},P=S*h*A+g*C,x=S*h*g-A*C,_=T=>Math.exp(-S*h*T)*(P*Math.sin(C*T)+x*Math.cos(C*T));else if(S===1){y=b=>o-Math.exp(-h*b)*(g+(m+h*g)*b);const T=m+h*g;_=b=>Math.exp(-h*b)*(h*T*b-m)}else{const T=h*Math.sqrt(S*S-1);y=z=>{const U=Math.exp(-S*h*z),V=Math.min(T*z,300);return o-U*((m+S*h*g)*Math.sinh(V)+T*g*Math.cosh(V))/T};const b=(m+S*h*g)/T,N=S*h*b-g*T,F=S*h*g-b*T;_=z=>{const U=Math.exp(-S*h*z),V=Math.min(T*z,300);return U*(N*Math.sinh(V)+F*Math.cosh(V))}}const R={calculatedDuration:p&&d||null,velocity:T=>Ln(_(T)),next:T=>{if(!p&&S<1){const N=Math.exp(-S*h*T),F=Math.sin(C*T),z=Math.cos(C*T),U=o-N*(A*F+g*z),V=Ln(N*(P*F+x*z));return a.done=Math.abs(V)<=i&&Math.abs(o-U)<=r,a.value=a.done?o:U,a}const b=y(T);if(p)a.done=T>=d;else{const N=Ln(_(T));a.done=Math.abs(N)<=i&&Math.abs(o-b)<=r}return a.value=a.done?o:b,a},toString:()=>{const T=Math.min(Um(R),tu),b=JS(N=>R.next(T*N).value,T,30);return T+"ms "+b},toTransition:()=>{}};return R}nu.applyToOptions=t=>{const e=DA(t,100,nu);return t.ease=e.ease,t.duration=Ln(e.duration),t.type="keyframes",t};const zA=5;function e1(t,e,n){const i=Math.max(e-zA,0);return bm(n-t(i),e-i)}function gh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const d=t[0],u={done:!1,value:d},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,m=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let S=n*e;const g=d+S,h=o===void 0?g:o(g);h!==g&&(S=h-d);const v=x=>-S*Math.exp(-x/i),y=x=>h+v(x),_=x=>{const R=v(x),T=y(x);u.done=Math.abs(R)<=c,u.value=u.done?h:T};let C,A;const P=x=>{p(u.value)&&(C=x,A=nu({keyframes:[u.value,m(u.value)],velocity:e1(y,x,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return P(0),{calculatedDuration:null,next:x=>{let R=!1;return!A&&C===void 0&&(R=!0,_(x),P(x)),C!==void 0&&x>=C?A.next(x-C):(!R&&_(x),u)}}}function VA(t,e,n){const i=[],r=n||Or.mix||QS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||En:e;a=tl(l,a)}i.push(a)}return i}function Fm(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Am(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=VA(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const u=wo(t[d],t[d+1],f);return a[d](u)};return n?f=>c(di(t[0],t[s-1],f)):c}function HA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=wo(0,e,i);t.push(ct(n,1,r))}}function t1(t){const e=[0];return HA(e,t.length-1),e}function GA(t,e){return t.map(n=>n*e)}function WA(t,e){return t.map(()=>e||HS).splice(0,t.length-1)}function Sa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=eA(i)?i.map(z0):z0(i),s={done:!1,value:e[0]},o=GA(n&&n.length===e.length?n:t1(e),t),a=Fm(o,e,{ease:Array.isArray(r)?r:WA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const jA=t=>t!==null;function Uu(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(jA),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const XA={decay:gh,inertia:gh,tween:Sa,keyframes:Sa,spring:nu};function n1(t){typeof t.type=="string"&&(t.type=XA[t.type])}class km{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const $A=t=>t/100;class iu extends km{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==un.now()&&this.tick(un.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;n1(e);const{type:n=Sa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Sa;l!==Sa&&typeof a[0]!="number"&&(this.mixKeyframes=tl($A,QS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Um(c));const{calculatedDuration:f}=c;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:f,repeat:d,repeatType:u,repeatDelay:p,type:m,onUpdate:S,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,_=i;if(d){const x=Math.min(this.currentTime,r)/a;let R=Math.floor(x),T=x%1;!T&&x>=1&&(T=1),T===1&&R--,R=Math.min(R,d+1),!!(R%2)&&(u==="reverse"?(T=1-T,p&&(T-=p/a)):u==="mirror"&&(_=o)),y=di(0,1,T)*a}let C;v?(this.delayState.value=f[0],C=this.delayState):C=_.next(y),s&&!v&&(C.value=s(C.value));let{done:A}=C;!v&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return P&&m!==gh&&(C.value=Uu(f,this.options,g,this.speed)),S&&S(C.value),P&&this.finish(),C}then(e,n){return this.finished.then(e,n)}get duration(){return Wn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wn(e)}get time(){return Wn(this.currentTime)}set time(e){e=Ln(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return e1(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(un.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Wn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=NA,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(un.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function YA(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ls=t=>t*180/Math.PI,vh=t=>{const e=ls(Math.atan2(t[1],t[0]));return xh(e)},qA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:vh,rotateZ:vh,skewX:t=>ls(Math.atan(t[1])),skewY:t=>ls(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},xh=t=>(t=t%360,t<0&&(t+=360),t),$0=vh,Y0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),q0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),KA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Y0,scaleY:q0,scale:t=>(Y0(t)+q0(t))/2,rotateX:t=>xh(ls(Math.atan2(t[6],t[5]))),rotateY:t=>xh(ls(Math.atan2(-t[2],t[0]))),rotateZ:$0,rotate:$0,skewX:t=>ls(Math.atan(t[4])),skewY:t=>ls(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function _h(t){return t.includes("scale")?1:0}function yh(t,e){if(!t||t==="none")return _h(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=KA,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=qA,r=a}if(!r)return _h(e);const s=i[e],o=r[1].split(",").map(QA);return typeof s=="function"?s(o):o[s]}const ZA=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return yh(n,e)};function QA(t){return parseFloat(t.trim())}const Fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ko=new Set([...Fo,"pathRotation"]),K0=t=>t===Uo||t===Me,JA=new Set(["x","y","z"]),e2=Fo.filter(t=>!JA.has(t));function t2(t){const e=[];return e2.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const wr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>yh(e,"x"),y:(t,{transform:e})=>yh(e,"y")};wr.translateX=wr.x;wr.translateY=wr.y;const hs=new Set;let Sh=!1,Mh=!1,Eh=!1;function i1(){if(Mh){const t=Array.from(hs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=t2(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Mh=!1,Sh=!1,hs.forEach(t=>t.complete(Eh)),hs.clear()}function r1(){hs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Mh=!0)})}function n2(){Eh=!0,r1(),i1(),Eh=!1}class Om{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(hs.add(this),Sh||(Sh=!0,Qe.read(r1),Qe.resolveKeyframes(i1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}YA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),hs.delete(this)}cancel(){this.state==="scheduled"&&(hs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const i2=t=>t.startsWith("--");function s1(t,e,n){i2(e)?t.style.setProperty(e,n):t.style[e]=n}const r2={};function Bm(t,e){const n=DS(t);return()=>r2[e]??n()}const zm=Bm(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),o1=Bm(()=>window.ViewTimeline!==void 0,"viewTimeline"),a1=Bm(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),aa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Z0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:aa([0,.65,.55,1]),circOut:aa([.55,0,1,.45]),backIn:aa([.31,.01,.66,-.59]),backOut:aa([.33,1.53,.69,.99])};function l1(t,e){if(t)return typeof t=="function"?a1()?JS(t,e):"ease-out":GS(t)?aa(t):Array.isArray(t)?t.map(n=>l1(n,e)||Z0.easeOut):Z0[t]}function s2(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const f={[e]:n};l&&(f.offset=l);const d=l1(a,r);Array.isArray(d)&&(f.easing=d);const u={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(u.pseudoElement=c),t.animate(f,u)}function c1(t){return typeof t=="function"&&"applyToOptions"in t}function o2({type:t,...e}){return c1(t)&&a1()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class u1 extends km{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Am(typeof e.type!="string");const c=o2(e);this.animation=s2(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=Uu(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(f),s1(n,i,f),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Wn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wn(e)}get time(){return Wn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ln(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&zm()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),En):r(this)}}const f1={anticipate:BS,backInOut:OS,circInOut:VS};function a2(t){return t in f1}function l2(t){typeof t.ease=="string"&&a2(t.ease)&&(t.ease=f1[t.ease])}const Af=10;class c2 extends u1{constructor(e){l2(e),n1(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new iu({...o,autoplay:!1}),l=Math.max(Af,un.now()-this.startTime),c=di(0,Af,l-Af),f=a.sample(l).value,{name:d}=this.options;s&&d&&s1(s,d,f),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,f,c),a.stop()}}const Q0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ui.test(t)||t==="0")&&!t.startsWith("url("));function u2(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function f2(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Q0(r,e),a=Q0(s,e);return!o||!a?!1:u2(t)||(n==="spring"||c1(n))&&i}function Th(t){t.duration=0,t.type="keyframes"}const d1=new Set(["opacity","clipPath","filter","transform"]),d2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function h2(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&d2.test(t[e]))return!0;return!1}const p2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),m2=DS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function g2(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((d=e==null?void 0:e.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:f}=e.owner.getProps();return m2()&&n&&(d1.has(n)||p2.has(n)&&h2(a))&&(n!=="transform"||!f)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const v2=40;class x2 extends km{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:f,...d}){var m;super(),this.stop=()=>{var S,g;this._animation&&(this._animation.stop(),(S=this.stopTimeline)==null||S.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=un.now();const u={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:f,...d},p=(f==null?void 0:f.KeyframeResolver)||Om;this.keyframeResolver=new p(a,(S,g,h)=>this.onKeyframesResolved(S,g,u,!h),l,c,f),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,v;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:f}=i;this.resolvedAt=un.now();let d=!0;f2(e,s,o,a)||(d=!1,(Or.instantAnimations||!l)&&(f==null||f(Uu(e,i,n))),e[0]=e[e.length-1],Th(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>v2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},m=d&&!c&&g2(p),S=(v=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:v.current;let g;if(m)try{g=new c2({...p,element:S})}catch{g=new iu(p)}else g=new iu(p);g.finished.then(()=>{this.notifyFinished()}).catch(En),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),n2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function h1(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,f)=>c.sortNodePosition(f)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const J0=30,_2=t=>!isNaN(parseFloat(t)),Ma={current:void 0};class y2{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=un.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=un.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=_2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Cm);const i=this.events[e].add(n);return e==="change"?()=>{i(),Qe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ma.current&&Ma.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=un.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>J0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,J0);return bm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function oi(t,e){return new y2(t,e)}function p1(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Vm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?p1(n,t):n}const S2={type:"spring",stiffness:500,damping:25,restSpeed:10},M2=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),E2={type:"keyframes",duration:.8},T2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w2=(t,{keyframes:e})=>e.length>2?E2:ko.has(t)?t.startsWith("scale")?M2(e[1]):S2:T2,A2=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function C2(t){for(const e in t)if(!A2.has(e))return!0;return!1}const Hm=(t,e,n,i={},r,s)=>o=>{const a=Vm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ln(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:u=>{e.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};C2(a)||Object.assign(f,w2(t,f)),f.duration&&(f.duration=Ln(f.duration)),f.repeatDelay&&(f.repeatDelay=Ln(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(Th(f),f.delay===0&&(d=!0)),(Or.instantAnimations||Or.skipAnimations||r!=null&&r.shouldSkipAnimations||a.skipAnimations)&&(d=!0,Th(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const u=Uu(f.keyframes,a);if(u!==void 0){Qe.update(()=>{f.onUpdate(u),f.onComplete()});return}}return a.isSync?new iu(f):new x2(f)},b2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function R2(t){const e=b2.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function m1(t,e,n=1){const[i,r]=R2(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return PS(o)?parseFloat(o):o}return Lm(r)?m1(r,e,n+1):r}function ev(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Gm(t,e,n,i){if(typeof e=="function"){const[r,s]=ev(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=ev(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ps(t,e,n){const i=t.getProps();return Gm(i,e,n!==void 0?n:i.custom,t)}const g1=new Set(["width","height","top","left","right","bottom",...Fo]),wh=t=>Array.isArray(t);function P2(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,oi(n))}function L2(t){return wh(t)?t[t.length-1]||0:t}function N2(t,e){const n=ps(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=L2(s[o]);P2(t,o,a)}}const qt=t=>!!(t&&t.getVelocity);function D2(t){return!!(qt(t)&&t.add)}function Ah(t,e){const n=t.getValue("willChange");if(D2(n))return n.add(e);if(!n&&Or.WillChange){const i=new Or.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Wm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const I2="framerAppearId",v1="data-"+Wm(I2);function x1(t){return t.props[v1]}function U2({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function _1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?p1(s,l):l;const c=s==null?void 0:s.reduceMotion,f=s==null?void 0:s.skipAnimations;i&&(s=i);const d=[],u=r&&t.animationState&&t.animationState.getState()[r],p=s==null?void 0:s.path;p&&p.animateVisualElement(t,a,s,n,d);for(const m in a){const S=t.getValue(m,t.latestValues[m]??null),g=a[m];if(g===void 0||u&&U2(u,m))continue;const h={delay:n,...Vm(s||{},m)};f&&(h.skipAnimations=!0);const v=S.get();if(v!==void 0&&!S.isAnimating()&&!Array.isArray(g)&&g===v&&!h.velocity){Qe.update(()=>S.set(g));continue}let y=!1;if(window.MotionHandoffAnimation){const A=x1(t);if(A){const P=window.MotionHandoffAnimation(A,m,Qe);P!==null&&(h.startTime=P,y=!0)}}Ah(t,m);const _=c??t.shouldReduceMotion;S.start(Hm(m,S,g,_&&g1.has(m)?{type:!1}:h,t,y));const C=S.animation;C&&d.push(C)}if(o){const m=()=>Qe.update(()=>{o&&N2(t,o)});d.length?Promise.all(d).then(m):m()}return d}function Ch(t,e,n={}){var l;const i=ps(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(_1(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:f=0,staggerChildren:d,staggerDirection:u}=r;return F2(t,e,c,f,d,u,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,f]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>f())}else return Promise.all([s(),o(n.delay)])}function F2(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Ch(l,e,{...o,delay:n+(typeof i=="function"?0:i)+h1(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function k2(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Ch(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Ch(t,e,n);else{const r=typeof e=="function"?ps(t,e,n.custom):e;i=Promise.all(_1(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const O2={test:t=>t==="auto",parse:t=>t},y1=t=>e=>e.test(t),S1=[Uo,Me,Ri,zi,hA,dA,O2],tv=t=>S1.find(y1(t));function B2(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||NS(t):!0}const z2=new Set(["brightness","contrast","saturate","opacity"]);function V2(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Nm)||[];if(!i)return t;const r=n.replace(i,"");let s=z2.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const H2=/\b([a-z-]*)\(.*?\)/gu,bh={...ui,getAnimatableNone:t=>{const e=t.match(H2);return e?e.map(V2).join(" "):t}},Rh={...ui,getAnimatableNone:t=>{const e=ui.parse(t);return ui.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},nv={...Uo,transform:Math.round},G2={rotate:zi,pathRotation:zi,rotateX:zi,rotateY:zi,rotateZ:zi,scale:Rl,scaleX:Rl,scaleY:Rl,scaleZ:Rl,skew:zi,skewX:zi,skewY:zi,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Wa,originX:H0,originY:H0,originZ:Me},ru={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,inset:Me,insetBlock:Me,insetBlockStart:Me,insetBlockEnd:Me,insetInline:Me,insetInlineStart:Me,insetInlineEnd:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,paddingBlock:Me,paddingBlockStart:Me,paddingBlockEnd:Me,paddingInline:Me,paddingInlineStart:Me,paddingInlineEnd:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,marginBlock:Me,marginBlockStart:Me,marginBlockEnd:Me,marginInline:Me,marginInlineStart:Me,marginInlineEnd:Me,fontSize:Me,backgroundPositionX:Me,backgroundPositionY:Me,...G2,zIndex:nv,fillOpacity:Wa,strokeOpacity:Wa,numOctaves:nv},W2={...ru,color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,filter:bh,WebkitFilter:bh,mask:Rh,WebkitMask:Rh},M1=t=>W2[t],j2=new Set([bh,Rh]);function E1(t,e){let n=M1(t);return j2.has(n)||(n=ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const X2=new Set(["auto","none","0"]);function $2(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!X2.has(s)&&Ao(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=E1(n,r)}class Y2 extends Om{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let d=e[f];if(typeof d=="string"&&(d=d.trim(),Lm(d))){const u=m1(d,n.current);u!==void 0&&(e[f]=u),f===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!g1.has(i)||e.length!==2)return;const[r,s]=e,o=tv(r),a=tv(s),l=V0(r),c=V0(s);if(l!==c&&wr[i]){this.needsMeasurement=!0;return}if(o!==a)if(K0(o)&&K0(a))for(let f=0;f<e.length;f++){const d=e[f];typeof d=="string"&&(e[f]=parseFloat(d))}else wr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||B2(e[r]))&&i.push(r);i.length&&$2(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=wr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=wr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const jm=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function T1(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const Ph=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Ea(t){return LS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Co,cancel:w1}=WS(queueMicrotask,!1),ei={x:!1,y:!1};function A1(){return ei.x||ei.y}function q2(t){return t==="x"||t==="y"?ei[t]?null:(ei[t]=!0,()=>{ei[t]=!1}):ei.x||ei.y?null:(ei.x=ei.y=!0,()=>{ei.x=ei.y=!1})}function C1(t,e){const n=T1(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function K2(t){return!(t.pointerType==="touch"||A1())}function Z2(t,e,n={}){const[i,r,s]=C1(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const f=()=>{o.removeEventListener("pointerleave",m)},d=g=>{c&&(c(g),c=void 0),f()},u=g=>{a=!1,window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",u),l&&(l=!1,d(g))},p=()=>{a=!0,window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",u,r)},m=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}d(g)}},S=g=>{if(!K2(g))return;l=!1;const h=e(o,g);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",m,r))};o.addEventListener("pointerenter",S,r),o.addEventListener("pointerdown",p,r)}),s}const b1=(t,e)=>e?t===e?!0:b1(t,e.parentElement):!1,Xm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Q2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function J2(t){return Q2.has(t.tagName)||t.isContentEditable===!0}const eC=new Set(["INPUT","SELECT","TEXTAREA"]);function tC(t){return eC.has(t.tagName)||t.isContentEditable===!0}const gc=new WeakSet;function iv(t){return e=>{e.key==="Enter"&&t(e)}}function Cf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const nC=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=iv(()=>{if(gc.has(n))return;Cf(n,"down");const r=iv(()=>{Cf(n,"up")}),s=()=>Cf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function rv(t){return Xm(t)&&!A1()}const sv=new WeakSet;function iC(t,e,n={}){const[i,r,s]=C1(t,n),o=a=>{const l=a.currentTarget;if(!rv(a)||sv.has(a))return;gc.add(l),n.stopPropagation&&sv.add(a);const c=e(l,a),f={...r,capture:!0},d=(m,S)=>{window.removeEventListener("pointerup",u,f),window.removeEventListener("pointercancel",p,f),gc.has(l)&&gc.delete(l),rv(m)&&typeof c=="function"&&c(m,{success:S})},u=m=>{d(m,l===window||l===document||n.useGlobalTarget||b1(l,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",u,f),window.addEventListener("pointercancel",p,f)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),Ea(a)&&(a.addEventListener("focus",c=>nC(c,r)),!J2(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function $m(t){return LS(t)&&"ownerSVGElement"in t}const vc=new WeakMap;let vr;const R1=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:$m(i)&&"getBBox"in i?i.getBBox()[e]:i[n],rC=R1("inline","width","offsetWidth"),sC=R1("block","height","offsetHeight");function oC({target:t,borderBoxSize:e}){var n;(n=vc.get(t))==null||n.forEach(i=>{i(t,{get width(){return rC(t,e)},get height(){return sC(t,e)}})})}function aC(t){t.forEach(oC)}function lC(){typeof ResizeObserver>"u"||(vr=new ResizeObserver(aC))}function cC(t,e){vr||lC();const n=T1(t);return n.forEach(i=>{let r=vc.get(i);r||(r=new Set,vc.set(i,r)),r.add(e),vr==null||vr.observe(i)}),()=>{n.forEach(i=>{const r=vc.get(i);r==null||r.delete(e),r!=null&&r.size||vr==null||vr.unobserve(i)})}}const xc=new Set;let so;function uC(){so=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xc.forEach(e=>e(t))},window.addEventListener("resize",so)}function fC(t){return xc.add(t),so||uC(),()=>{xc.delete(t),!xc.size&&typeof so=="function"&&(window.removeEventListener("resize",so),so=void 0)}}function Lh(t,e){return typeof t=="function"?fC(t):cC(t,e)}function P1(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return Qe.preUpdate(i,!0),()=>Yn(i)}function dC(t){return $m(t)&&t.tagName==="svg"}function hC(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=Fm(r,s,o);return e?a(i):a}const pC=[...S1,Dt,ui],mC=t=>pC.find(y1(t)),ov=()=>({translate:0,scale:1,origin:0,originPoint:0}),oo=()=>({x:ov(),y:ov()}),av=()=>({min:0,max:0}),kt=()=>({x:av(),y:av()}),gC=new WeakMap;function Fu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ja(t){return typeof t=="string"||Array.isArray(t)}const Ym=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qm=["initial",...Ym];function ku(t){return Fu(t.animate)||qm.some(e=>ja(t[e]))}function L1(t){return!!(ku(t)||t.variants)}function vC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(qt(r))t.addValue(i,r);else if(qt(s))t.addValue(i,oi(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,oi(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Nh={current:null},N1={current:!1},xC=typeof window<"u";function _C(){if(N1.current=!0,!!xC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Nh.current=t.matches;t.addEventListener("change",e),e()}else Nh.current=!1}const lv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let su={};function D1(t){su=t}function yC(){return su}class SC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Om,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=un.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Qe.render(this.render,!1,!0))};const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=ku(n),this.isVariantNode=L1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const m=u[p];c[p]!==void 0&&qt(m)&&m.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,gC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(N1.current||_C(),this.shouldReduceMotion=Nh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Yn(this.notifyUpdate),Yn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&d1.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:f}=n.accelerate,d=new u1({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Ln(f)}),u=o(d);this.valueSubscriptions.set(e,()=>{u(),d.cancel()});return}const i=ko.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Qe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in su){const n=su[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<lv.length;i++){const r=lv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=vC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=oi(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(PS(i)||NS(i))?i=parseFloat(i):!mC(i)&&ui.test(n)&&(i=E1(e,n)),this.setBaseTarget(e,qt(i)?i.get():i)),qt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Gm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!qt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Cm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Co.render(this.render)}}class I1 extends SC{constructor(){super(...arguments),this.KeyframeResolver=Y2}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;qt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function U1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function MC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function EC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function bf(t){return t===void 0||t===1}function Dh({scale:t,scaleX:e,scaleY:n}){return!bf(t)||!bf(e)||!bf(n)}function es(t){return Dh(t)||F1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function F1(t){return cv(t.x)||cv(t.y)}function cv(t){return t&&t!=="0%"}function ou(t,e,n){const i=t-n,r=e*i;return n+r}function uv(t,e,n,i,r){return r!==void 0&&(t=ou(t,r,i)),ou(t,n,i)+e}function Ih(t,e=0,n=1,i,r){t.min=uv(t.min,e,n,i,r),t.max=uv(t.max,e,n,i,r)}function k1(t,{x:e,y:n}){Ih(t.x,e.translate,e.scale,e.originPoint),Ih(t.y,n.translate,n.scale,n.originPoint)}const fv=.999999999999,dv=1.0000000000001;function TC(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Mi(t.x,-s.scroll.offset.x),Mi(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,k1(t,o)),i&&es(s.latestValues)&&_c(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<dv&&e.x>fv&&(e.x=1),e.y<dv&&e.y>fv&&(e.y=1)}function Mi(t,e){t.min+=e,t.max+=e}function hv(t,e,n,i,r=.5){const s=ct(t.min,t.max,r);Ih(t,e,n,s,i)}function pv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function _c(t,e,n){const i=n??t;hv(t.x,pv(e.x,i.x),e.scaleX,e.scale,e.originX),hv(t.y,pv(e.y,i.y),e.scaleY,e.scale,e.originY)}function O1(t,e){return U1(EC(t.getBoundingClientRect(),e))}function wC(t,e,n){const i=O1(t,n),{scroll:r}=e;return r&&(Mi(i.x,r.offset.x),Mi(i.y,r.offset.y)),i}const AC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},CC=Fo.length;function bC(t,e,n){let i="",r=!0;for(let o=0;o<CC;o++){const a=Fo[o],l=t[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const f=parseFloat(l);c=a.startsWith("scale")?f===1:f===0}if(!c||n){const f=Ph(l,ru[a]);if(!c){r=!1;const d=AC[a]||a;i+=`${d}(${f}) `}n&&(e[a]=f)}}const s=t.pathRotation;return s&&(r=!1,i+=`rotate(${Ph(s,ru.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Km(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ko.has(l)){o=!0;continue}else if(XS(l)){r[l]=c;continue}else{const f=Ph(c,ru[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=bC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}function B1(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function mv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Yo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Me.test(t))t=parseFloat(t);else return t;const n=mv(t,e.target.x),i=mv(t,e.target.y);return`${n}% ${i}%`}},RC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ui.parse(t);if(r.length>5)return i;const s=ui.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=ct(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},Uh={borderRadius:{...Yo,applyTo:[...jm]},borderTopLeftRadius:Yo,borderTopRightRadius:Yo,borderBottomLeftRadius:Yo,borderBottomRightRadius:Yo,boxShadow:RC};function z1(t,{layout:e,layoutId:n}){return ko.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Uh[t]||t==="opacity")}function Zm(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(qt(i[a])||r&&qt(r[a])||z1(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function PC(t){return window.getComputedStyle(t)}class LC extends I1{constructor(){super(...arguments),this.type="html",this.renderInstance=B1}readValueFromInstance(e,n){var i;if(ko.has(n))return(i=this.projection)!=null&&i.isProjecting?_h(n):ZA(e,n);{const r=PC(e),s=(XS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return O1(e,n)}build(e,n,i){Km(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Zm(e,n,i)}}const NC={offset:"stroke-dashoffset",array:"stroke-dasharray"},DC={offset:"strokeDashoffset",array:"strokeDasharray"};function IC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?NC:DC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const UC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function V1(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,f){if(Km(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:u}=t;d.transform&&(u.transform=d.transform,delete d.transform),(u.transform||d.transformOrigin)&&(u.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),u.transform&&(u.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete d.transformBox);for(const p of UC)d[p]!==void 0&&(u[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&IC(d,r,s,o,!1)}const H1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),G1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function FC(t,e,n,i){B1(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(H1.has(r)?r:Wm(r),e.attrs[r])}function W1(t,e,n){const i=Zm(t,e,n);for(const r in t)if(qt(t[r])||qt(e[r])){const s=Fo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class kC extends I1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ko.has(n)){const i=M1(n);return i&&i.default||0}return n=H1.has(n)?n:Wm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return W1(e,n,i)}build(e,n,i){V1(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){FC(e,n,i,r)}mount(e){this.isSVGTag=G1(e.tagName),super.mount(e)}}const OC=qm.length;function j1(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?j1(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<OC;n++){const i=qm[n],r=t.props[i];(ja(r)||r===!1)&&(e[i]=r)}return e}function X1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const BC=[...Ym].reverse(),zC=Ym.length;function VC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>k2(t,n,i)))}function HC(t){let e=VC(t),n=gv(),i=!0,r=!1;const s=c=>(f,d)=>{var p;const u=ps(t,d,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(u){const{transition:m,transitionEnd:S,...g}=u;f={...f,...g,...S}}return f};function o(c){e=c(t)}function a(c){const{props:f}=t,d=j1(t.parent)||{},u=[],p=new Set;let m={},S=1/0;for(let h=0;h<zC;h++){const v=BC[h],y=n[v],_=f[v]!==void 0?f[v]:d[v],C=ja(_),A=v===c?y.isActive:null;A===!1&&(S=h);let P=_===d[v]&&_!==f[v]&&C;if(P&&(i||r)&&t.manuallyAnimateOnMount&&(P=!1),y.protectedKeys={...m},!y.isActive&&A===null||!_&&!y.prevProp||Fu(_)||typeof _=="boolean")continue;if(v==="exit"&&y.isActive&&A!==!0){y.prevResolvedValues&&(m={...m,...y.prevResolvedValues});continue}const x=GC(y.prevProp,_);let R=x||v===c&&y.isActive&&!P&&C||h>S&&C,T=!1;const b=Array.isArray(_)?_:[_];let N=b.reduce(s(v),{});A===!1&&(N={});const{prevResolvedValues:F={}}=y,z={...F,...N},U=D=>{R=!0,p.has(D)&&(T=!0,p.delete(D)),y.needsAnimating[D]=!0;const O=t.getValue(D);O&&(O.liveStyle=!1)};for(const D in z){const O=N[D],X=F[D];if(m.hasOwnProperty(D))continue;let ee=!1;wh(O)&&wh(X)?ee=!X1(O,X)||x:ee=O!==X,ee?O!=null?U(D):p.add(D):O!==void 0&&p.has(D)?U(D):y.protectedKeys[D]=!0}y.prevProp=_,y.prevResolvedValues=N,y.isActive&&(m={...m,...N}),(i||r)&&t.blockInitialAnimation&&(R=!1);const V=P&&x;R&&(!V||T)&&u.push(...b.map(D=>{const O={type:v};if(typeof D=="string"&&(i||r)&&!V&&t.manuallyAnimateOnMount&&t.parent){const{parent:X}=t,ee=ps(X,D);if(X.enteringChildren&&ee){const{delayChildren:re}=ee.transition||{};O.delay=h1(X.enteringChildren,t,re)}}return{animation:D,options:O}}))}if(p.size){const h={};if(typeof f.initial!="boolean"){const v=ps(t,Array.isArray(f.initial)?f.initial[0]:f.initial);v&&v.transition&&(h.transition=v.transition)}p.forEach(v=>{const y=t.getBaseTarget(v),_=t.getValue(v);_&&(_.liveStyle=!0),h[v]=y??null}),u.push({animation:h})}let g=!!u.length;return i&&(f.initial===!1||f.initial===f.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,r=!1,g?e(u):Promise.resolve()}function l(c,f){var u;if(n[c].isActive===f)return Promise.resolve();(u=t.variantChildren)==null||u.forEach(p=>{var m;return(m=p.animationState)==null?void 0:m.setActive(c,f)}),n[c].isActive=f;const d=a(c);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=gv(),r=!0}}}function GC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!X1(e,t):!1}function jr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gv(){return{animate:jr(!0),whileInView:jr(),whileHover:jr(),whileTap:jr(),whileDrag:jr(),whileFocus:jr(),exit:jr()}}function Fh(t,e){t.min=e.min,t.max=e.max}function Kn(t,e){Fh(t.x,e.x),Fh(t.y,e.y)}function vv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const $1=1e-4,WC=1-$1,jC=1+$1,Y1=.01,XC=0-Y1,$C=0+Y1;function fn(t){return t.max-t.min}function YC(t,e,n){return Math.abs(t-e)<=n}function xv(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=fn(n)/fn(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=WC&&t.scale<=jC||isNaN(t.scale))&&(t.scale=1),(t.translate>=XC&&t.translate<=$C||isNaN(t.translate))&&(t.translate=0)}function Ta(t,e,n,i){xv(t.x,e.x,n.x,i?i.originX:void 0),xv(t.y,e.y,n.y,i?i.originY:void 0)}function _v(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+fn(e)}function qC(t,e,n,i){_v(t.x,e.x,n.x,i==null?void 0:i.x),_v(t.y,e.y,n.y,i==null?void 0:i.y)}function yv(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+fn(e)}function au(t,e,n,i){yv(t.x,e.x,n.x,i==null?void 0:i.x),yv(t.y,e.y,n.y,i==null?void 0:i.y)}function Sv(t,e,n,i,r){return t-=e,t=ou(t,1/n,i),r!==void 0&&(t=ou(t,1/r,i)),t}function KC(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ri.test(e)&&(e=parseFloat(e),e=ct(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ct(s.min,s.max,i);t===s&&(a-=e),t.min=Sv(t.min,e,n,a,r),t.max=Sv(t.max,e,n,a,r)}function Mv(t,e,[n,i,r],s,o){KC(t,e[n],e[i],e[r],e.scale,s,o)}const ZC=["x","scaleX","originX"],QC=["y","scaleY","originY"];function Ev(t,e,n,i){Mv(t.x,e,ZC,n?n.x:void 0,i?i.x:void 0),Mv(t.y,e,QC,n?n.y:void 0,i?i.y:void 0)}function Tv(t){return t.translate===0&&t.scale===1}function q1(t){return Tv(t.x)&&Tv(t.y)}function wv(t,e){return t.min===e.min&&t.max===e.max}function JC(t,e){return wv(t.x,e.x)&&wv(t.y,e.y)}function Av(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function K1(t,e){return Av(t.x,e.x)&&Av(t.y,e.y)}function Cv(t){return fn(t.x)/fn(t.y)}function bv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Si(t){return[t("x"),t("y")]}function eb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,pathRotation:d,rotateX:u,rotateY:p,skewX:m,skewY:S}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotate(${d}deg) `),u&&(i+=`rotateX(${u}deg) `),p&&(i+=`rotateY(${p}deg) `),m&&(i+=`skewX(${m}deg) `),S&&(i+=`skewY(${S}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const tb=jm.length,Rv=t=>typeof t=="string"?parseFloat(t):t,Pv=t=>typeof t=="number"||Me.test(t);function nb(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity??1,ib(i)),t.opacityExit=ct(e.opacity??1,0,rb(i))):s&&(t.opacity=ct(e.opacity??1,n.opacity??1,i));for(let o=0;o<tb;o++){const a=jm[o];let l=Lv(e,a),c=Lv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Pv(l)===Pv(c)?(t[a]=Math.max(ct(Rv(l),Rv(c),i),0),(Ri.test(c)||Ri.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function Lv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ib=Z1(0,.5,zS),rb=Z1(.5,.95,En);function Z1(t,e,n){return i=>i<t?0:i>e?1:n(wo(t,e,i))}function sb(t,e,n){const i=qt(t)?t:oi(t);return i.start(Hm("",i,e,n)),i.animation}function Xa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const ob=(t,e)=>t.depth-e.depth;class ab{constructor(){this.children=[],this.isDirty=!1}add(e){wm(this.children,e),this.isDirty=!0}remove(e){Jc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ob),this.isDirty=!1,this.children.forEach(e)}}function lb(t,e){const n=un.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Yn(i),t(s-e))};return Qe.setup(i,!0),()=>Yn(i)}function yc(t){return qt(t)?t.get():t}class cb{constructor(){this.members=[]}add(e){wm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(Jc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(Jc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Sc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Rf=["","X","Y","Z"],ub=1e3;let fb=0;function Pf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Q1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=x1(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Qe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Q1(i)}function J1({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=fb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pb),this.nodes.forEach(yb),this.nodes.forEach(Sb),this.nodes.forEach(mb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new ab)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Cm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=$m(o)&&!dC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let f,d=0;const u=()=>this.root.updateBlockedByResize=!1;Qe.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,f&&f(),f=lb(u,250),Sc.hasAnimatedSinceResize&&(Sc.hasAnimatedSinceResize=!1,this.nodes.forEach(Iv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:u,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||Ab,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!K1(this.targetLayout,p),v=!d&&u;if(this.options.layoutRoot||this.resumeFrom||v||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const y={...Vm(m,"layout"),onPlay:S,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y),this.setAnimationOrigin(f,v,y.path)}else d||Iv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Yn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Mb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Q1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(vb),this.nodes.forEach(Nv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Dv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xb),this.nodes.forEach(_b),this.nodes.forEach(db),this.nodes.forEach(hb)):this.nodes.forEach(Dv),this.clearAllSnapshots();const a=un.now();Wt.delta=di(0,1e3/60,a-Wt.timestamp),Wt.timestamp=a,Wt.isProcessing=!0,Sf.update.process(Wt),Sf.preRender.process(Wt),Sf.render.process(Wt),Wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Co.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gb),this.sharedNodes.forEach(Eb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fn(this.snapshot.measuredBox.x)&&!fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=kt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!q1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||es(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Cb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return kt();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(bb))){const{scroll:f}=this.root;f&&(Mi(a.x,f.offset.x),Mi(a.y,f.offset.y))}return a}removeElementScroll(o){var l;const a=kt();if(Kn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:d,options:u}=f;f!==this.root&&d&&u.layoutScroll&&(d.wasRoot&&Kn(a,o),Mi(a.x,d.offset.x),Mi(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var f,d;const c=l||kt();Kn(c,o);for(let u=0;u<this.path.length;u++){const p=this.path[u];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Mi(c.x,-p.scroll.offset.x),Mi(c.y,-p.scroll.offset.y)),es(p.latestValues)&&_c(c,p.latestValues,(f=p.layout)==null?void 0:f.layoutBox)}return es(this.latestValues)&&_c(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=kt();Kn(a,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];if(!es(f.latestValues))continue;let d;f.instance&&(Dh(f.latestValues)&&f.updateSnapshot(),d=kt(),Kn(d,f.measurePageBox())),Ev(a,f.latestValues,(l=f.snapshot)==null?void 0:l.layoutBox,d)}return es(this.latestValues)&&Ev(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!this.layout||!(f||d))return;this.resolvedRelativeTargetAt=Wt.timestamp;const u=this.getClosestProjectingParent();u&&this.linkedParentVersion!==u.layoutVersion&&!u.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&u&&u.layout?this.createRelativeTarget(u,this.layout.layoutBox,u.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=kt(),this.targetWithTransforms=kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),qC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Kn(this.target,this.layout.layoutBox),k1(this.target,this.targetDelta)):Kn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target&&this.animationProgress!==1?this.createRelativeTarget(u,this.target,u.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Dh(this.parent.latestValues)||F1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=kt(),this.relativeTargetOrigin=kt(),au(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Kn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Wt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Kn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,u=this.treeScale.y;TC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=kt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vv(this.prevProjectionDelta.x,this.projectionDelta.x),vv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==u||!bv(this.projectionDelta.x,this.prevProjectionDelta.x)||!bv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=oo(),this.projectionDelta=oo(),this.projectionDeltaWithTransform=oo()}setAnimationOrigin(o,a=!1,l){const c=this.snapshot,f=c?c.latestValues:{},d={...this.latestValues},u=oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=kt(),m=c?c.source:void 0,S=this.layout?this.layout.source:void 0,g=m!==S,h=this.getStack(),v=!h||h.members.length<=1,y=!!(g&&!v&&this.options.crossfade===!0&&!this.path.some(wb));this.animationProgress=0;let _;const C=l==null?void 0:l.interpolateProjection(o);this.mixTargetDelta=A=>{const P=A/1e3,x=C==null?void 0:C(P);x?(u.x.translate=x.x,u.x.scale=ct(o.x.scale,1,P),u.x.origin=o.x.origin,u.x.originPoint=o.x.originPoint,u.y.translate=x.y,u.y.scale=ct(o.y.scale,1,P),u.y.origin=o.y.origin,u.y.originPoint=o.y.originPoint):(Uv(u.x,o.x,P),Uv(u.y,o.y,P)),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(au(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Tb(this.relativeTarget,this.relativeTargetOrigin,p,P),_&&JC(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=kt()),Kn(_,this.relativeTarget)),g&&(this.animationValues=d,nb(d,f,this.latestValues,P,y,v)),x&&x.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=x.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Yn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qe.update(()=>{Sc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=oi(0)),this.motionValue.jump(0,!1),this.currentAnimation=sb(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ub),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&eM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||kt();const d=fn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const u=fn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}Kn(a,l),_c(a,f),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Pf("z",o,c,this.animationValues);for(let f=0;f<Rf.length;f++)Pf(`rotate${Rf[f]}`,o,c,this.animationValues),Pf(`skew${Rf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=yc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=yc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!es(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=eb(this.projectionDeltaWithTransform,this.treeScale,f);l&&(d=l(f,d)),o.transform=d;const{x:u,y:p}=this.projectionDelta;o.transformOrigin=`${u.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in Uh){if(f[m]===void 0)continue;const{correct:S,applyTo:g,isCSSVariable:h}=Uh[m],v=d==="none"?f[m]:S(f[m],c);if(g){const y=g.length;for(let _=0;_<y;_++)o[g[_]]=v}else h?this.options.visualElement.renderState.vars[m]=v:o[m]=v}this.options.layoutId&&(o.pointerEvents=c===this?yc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Nv),this.root.sharedNodes.clear()}}}function db(t){t.updateLayout()}function hb(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")Si(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=fn(u);u.min=i[d].min,u.max=u.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Fh(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else eM(s,e.layoutBox,i)&&Si(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=fn(i[d]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=oo();Ta(a,i,e.layoutBox);const l=oo();o?Ta(l,t.applyTransform(r,!0),e.measuredBox):Ta(l,i,e.layoutBox);const c=!q1(a);let f=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:u,layout:p}=d;if(u&&p){const m=t.options.layoutAnchor||void 0,S=kt();au(S,e.layoutBox,u.layoutBox,m);const g=kt();au(g,i,p.layoutBox,m),K1(S,g)||(f=!0),d.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=S,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function pb(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function mb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function gb(t){t.clearSnapshot()}function Nv(t){t.clearMeasurements()}function vb(t){t.isLayoutDirty=!0,t.updateLayout()}function Dv(t){t.isLayoutDirty=!1}function xb(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function _b(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Iv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function yb(t){t.resolveTargetDelta()}function Sb(t){t.calcProjection()}function Mb(t){t.resetSkewAndRotation()}function Eb(t){t.removeLeadSnapshot()}function Uv(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Fv(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function Tb(t,e,n,i){Fv(t.x,e.x,n.x,i),Fv(t.y,e.y,n.y,i)}function wb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Ab={duration:.45,ease:[.4,0,.1,1]},kv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ov=kv("applewebkit/")&&!kv("chrome/")?Math.round:En;function Bv(t){t.min=Ov(t.min),t.max=Ov(t.max)}function Cb(t){Bv(t.x),Bv(t.y)}function eM(t,e,n){return t==="position"||t==="preserve-aspect"&&!YC(Cv(e),Cv(n),.2)}function bb(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const Rb=J1({attachResizeListener:(t,e)=>Xa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Lf={current:void 0},tM=J1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Lf.current){const t=new Rb({});t.mount(window),t.setOptions({layoutScroll:!0}),Lf.current=t}return Lf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ou=Q.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function zv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Pb(...t){return e=>{let n=!1;const i=t.map(r=>{const s=zv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():zv(t[r],null)}}}}function Lb(...t){return Q.useCallback(Pb(...t),t)}class Nb extends Q.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Ea(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=Ea(i)&&i.offsetWidth||0,s=Ea(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function Db({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var u;const o=Q.useId(),a=Q.useRef(null),l=Q.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=Q.useContext(Ou),f=((u=t.props)==null?void 0:u.ref)??(t==null?void 0:t.ref),d=Lb(a,f);return Q.useInsertionEffect(()=>{const{width:p,height:m,top:S,left:g,right:h,bottom:v,direction:y}=l.current;if(e||s===!1||!a.current||!p||!m)return;const _=y==="rtl",C=n==="left"?_?`right: ${h}`:`left: ${g}`:_?`left: ${g}`:`right: ${h}`,A=i==="bottom"?`bottom: ${v}`:`top: ${S}`;a.current.dataset.motionPopId=o;const P=document.createElement("style");c&&(P.nonce=c);const x=r??document.head;return x.appendChild(P),P.sheet&&P.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${C}px !important;
            ${A}px !important;
          }
        `),()=>{var R;(R=a.current)==null||R.removeAttribute("data-motion-pop-id"),x.contains(P)&&x.removeChild(P)}},[e]),E.jsx(Nb,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:Q.cloneElement(t,{ref:d})})}const Ib=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const f=kr(Ub),d=Q.useId(),u=Q.useRef(n),p=Q.useRef(i);el(()=>{u.current=n,p.current=i});let m=!0,S=Q.useMemo(()=>(m=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:g=>{f.set(g,!0);for(const h of f.values())if(!h)return;i&&i()},register:g=>(f.set(g,!1),()=>{var h;f.delete(g),!u.current&&!f.size&&((h=p.current)==null||h.call(p))})}),[n,f,i]);return s&&m&&(S={...S}),Q.useMemo(()=>{f.forEach((g,h)=>f.set(h,!1))},[n]),Q.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),t=E.jsx(Db,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),E.jsx(Iu.Provider,{value:S,children:t})};function Ub(){return new Map}function nM(t=!0){const e=Q.useContext(Iu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=Q.useId();Q.useEffect(()=>{if(t)return r(s)},[t]);const o=Q.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Pl=t=>t.key||"";function Vv(t){const e=[];return Q.Children.forEach(t,n=>{Q.isValidElement(n)&&e.push(n)}),e}const lu=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[f,d]=nM(o),u=Q.useMemo(()=>Vv(t),[t]),p=o&&!f?[]:u.map(Pl),m=Q.useRef(!0),S=Q.useRef(u),g=kr(()=>new Map),h=Q.useRef(new Set),[v,y]=Q.useState(u),[_,C]=Q.useState(u);el(()=>{m.current=!1,S.current=u;for(let x=0;x<_.length;x++){const R=Pl(_[x]);p.includes(R)?(g.delete(R),h.current.delete(R)):g.get(R)!==!0&&g.set(R,!1)}},[_,p.length,p.join("-")]);const A=[];if(u!==v){let x=[...u];for(let R=0;R<_.length;R++){const T=_[R],b=Pl(T);p.includes(b)||(x.splice(R,0,T),A.push(T))}return s==="wait"&&A.length&&(x=A),C(Vv(x)),y(u),null}const{forceRender:P}=Q.useContext(Tm);return E.jsx(E.Fragment,{children:_.map(x=>{const R=Pl(x),T=o&&!f?!1:u===_||p.includes(R),b=()=>{if(h.current.has(R))return;if(g.has(R))h.current.add(R),g.set(R,!0);else return;let N=!0;g.forEach(F=>{F||(N=!1)}),N&&(P==null||P(),C(S.current),o&&(d==null||d()),i&&i())};return E.jsx(Ib,{isPresent:T,initial:!m.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:T?void 0:b,anchorX:a,anchorY:l,children:x},R)})})},iM=Q.createContext({strict:!1}),Hv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Gv=!1;function Fb(){if(Gv)return;const t={};for(const e in Hv)t[e]={isEnabled:n=>Hv[e].some(i=>!!n[i])};D1(t),Gv=!0}function rM(){return Fb(),yC()}function kb(t){const e=rM();for(const n in t)e[n]={...e[n],...t[n]};D1(e)}const Ob=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function cu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ob.has(t)}let sM=t=>!cu(t);function Bb(t){typeof t=="function"&&(sM=e=>e.startsWith("on")?!cu(e):t(e))}try{Bb(require("@emotion/is-prop-valid").default)}catch{}function zb(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||qt(t[r])||(sM(r)||n===!0&&cu(r)||!e&&!cu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Bu=Q.createContext({});function Vb(t,e){if(ku(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ja(n)?n:void 0,animate:ja(i)?i:void 0}}return t.inherit!==!1?e:{}}function Hb(t){const{initial:e,animate:n}=Vb(t,Q.useContext(Bu));return Q.useMemo(()=>({initial:e,animate:n}),[Wv(e),Wv(n)])}function Wv(t){return Array.isArray(t)?t.join(" "):t}const Qm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function oM(t,e,n){for(const i in e)!qt(e[i])&&!z1(i,n)&&(t[i]=e[i])}function Gb({transformTemplate:t},e){return Q.useMemo(()=>{const n=Qm();return Km(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Wb(t,e){const n=t.style||{},i={};return oM(i,n,t),Object.assign(i,Gb(t,e)),i}function jb(t,e){const n={},i=Wb(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const aM=()=>({...Qm(),attrs:{}});function Xb(t,e,n,i){const r=Q.useMemo(()=>{const s=aM();return V1(s,e,G1(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};oM(s,t.style,t),r.style={...s,...r.style}}return r}const $b=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jm(t){return typeof t!="string"||t.includes("-")?!1:!!($b.indexOf(t)>-1||/[A-Z]/u.test(t))}function Yb(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??Jm(t)?Xb:jb)(e,i,r,t),c=zb(e,typeof t=="string",s),f=t!==Q.Fragment?{...c,...l,ref:n}:{},{children:d}=e,u=Q.useMemo(()=>qt(d)?d.get():d,[d]);return Q.createElement(t,{...f,children:u})}function qb({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:Kb(n,i,r,t),renderState:e()}}function Kb(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=yc(s[u]);let{initial:o,animate:a}=t;const l=ku(t),c=L1(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;if(d&&typeof d!="boolean"&&!Fu(d)){const u=Array.isArray(d)?d:[d];for(let p=0;p<u.length;p++){const m=Gm(t,u[p]);if(m){const{transitionEnd:S,transition:g,...h}=m;for(const v in h){let y=h[v];if(Array.isArray(y)){const _=f?y.length-1:0;y=y[_]}y!==null&&(r[v]=y)}for(const v in S)r[v]=S[v]}}}return r}const lM=t=>(e,n)=>{const i=Q.useContext(Bu),r=Q.useContext(Iu),s=()=>qb(t,e,i,r);return n?s():kr(s)},Zb=lM({scrapeMotionValuesFromProps:Zm,createRenderState:Qm}),Qb=lM({scrapeMotionValuesFromProps:W1,createRenderState:aM}),Jb=Symbol.for("motionComponentSymbol");function eR(t,e,n){const i=Q.useRef(n);Q.useInsertionEffect(()=>{i.current=n});const r=Q.useRef(null);return Q.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s)),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const cM=Q.createContext({});function js(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function tR(t,e,n,i,r,s){var y,_;const{visualElement:o}=Q.useContext(Bu),a=Q.useContext(iM),l=Q.useContext(Iu),c=Q.useContext(Ou),f=c.reducedMotion,d=c.skipAnimations,u=Q.useRef(null),p=Q.useRef(!1);i=i||a.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f,skipAnimations:d,isSVG:s}),p.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const m=u.current,S=Q.useContext(cM);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&nR(u.current,n,r,S);const g=Q.useRef(!1);Q.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const h=n[v1],v=Q.useRef(!!h&&typeof window<"u"&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,h))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,h)));return el(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),Q.useEffect(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,h)}),v.current=!1),m.enteringChildren=void 0)}),m}function nR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:f,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:uM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&js(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:f})}function uM(t){if(t)return t.options.allowProjection!==!1?t.projection:uM(t.parent)}function Nf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&kb(i);const s=n?n==="svg":Jm(t),o=s?Qb:Zb;function a(c,f){let d;const u={...Q.useContext(Ou),...c,layoutId:iR(c)},{isStatic:p}=u,m=Hb(c),S=o(c,p);if(!p&&typeof window<"u"){rR();const g=sR(u);d=g.MeasureLayout,m.visualElement=tR(t,S,u,r,g.ProjectionNode,s)}return E.jsxs(Bu.Provider,{value:m,children:[d&&m.visualElement?E.jsx(d,{visualElement:m.visualElement,...u}):null,Yb(t,c,eR(S,m.visualElement,f),S,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=Q.forwardRef(a);return l[Jb]=t,l}function iR({layoutId:t}){const e=Q.useContext(Tm).id;return e&&t!==void 0?e+"-"+t:t}function rR(t,e){Q.useContext(iM).strict}function sR(t){const e=rM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function oR(t,e){if(typeof Proxy>"u")return Nf;const n=new Map,i=(s,o)=>Nf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Nf(o,void 0,t,e)),n.get(o))})}const aR=(t,e)=>e.isSVG??Jm(t)?new kC(e):new LC(e,{allowProjection:t!==Q.Fragment});class lR extends Gr{constructor(e){super(e),e.animationState||(e.animationState=HC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Fu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let cR=0;class uR extends Gr{constructor(){super(...arguments),this.id=cR++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const l=ps(this.node,o,a);if(l){const{transition:c,transitionEnd:f,...d}=l;for(const u in d)(s=this.node.getValue(u))==null||s.jump(d[u])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const fR={animation:{Feature:lR},exit:{Feature:uR}};function rl(t){return{point:{x:t.pageX,y:t.pageY}}}const dR=t=>e=>Xm(e)&&t(e,rl(e));function wa(t,e,n,i){return Xa(t,e,dR(n),i)}const fM=({current:t})=>t?t.ownerDocument.defaultView:null,jv=(t,e)=>Math.abs(t-e);function hR(t,e){const n=jv(t.x,e.x),i=jv(t.y,e.y);return Math.sqrt(n**2+i**2)}const Xv=new Set(["auto","scroll"]);class dM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ll(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Df(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,g=hR(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!g)return;const{point:h}=m,{timestamp:v}=Wt;this.history.push({...h,timestamp:v});const{onStart:y,onMove:_}=this.handlers;S||(y&&y(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,m)},this.handlePointerMove=(m,S)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=Ll(S,this.transformPagePoint),Qe.update(this.updatePoint,!0)},this.handlePointerUp=(m,S)=>{this.end();const{onEnd:g,onSessionEnd:h,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Df(m.type==="pointercancel"?this.lastMoveEventInfo:Ll(S,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,y),h&&h(m,y)},!Xm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=rl(e),c=Ll(l,this.transformPagePoint),{point:f}=c,{timestamp:d}=Wt;this.history=[{...f,timestamp:d}];const{onSessionStart:u}=n;u&&u(e,Df(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=tl(wa(this.contextWindow,"pointermove",this.handlePointerMove,p),wa(this.contextWindow,"pointerup",this.handlePointerUp,p),wa(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Xv.has(i.overflowX)||Xv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),Qe.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Yn(this.updatePoint)}}function Ll(t,e){return e?{point:e(t.point)}:t}function $v(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Df({point:t},e){return{point:t,delta:$v(t,hM(e)),offset:$v(t,pR(e)),velocity:mR(e,.1)}}function pR(t){return t[0]}function hM(t){return t[t.length-1]}function mR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=hM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ln(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Ln(e)*2&&(i=t[1]);const s=Wn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function gR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function Yv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function vR(t,{top:e,left:n,bottom:i,right:r}){return{x:Yv(t.x,n,r),y:Yv(t.y,e,i)}}function qv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function xR(t,e){return{x:qv(t.x,e.x),y:qv(t.y,e.y)}}function _R(t,e){let n=.5;const i=fn(t),r=fn(e);return r>i?n=wo(e.min,e.max-i,t.min):i>r&&(n=wo(t.min,t.max-r,e.min)),di(0,1,n)}function yR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const kh=.35;function SR(t=kh){return t===!1?t=0:t===!0&&(t=kh),{x:Kv(t,"left","right"),y:Kv(t,"top","bottom")}}function Kv(t,e,n){return{min:Zv(t,e),max:Zv(t,n)}}function Zv(t,e){return typeof t=="number"?t:t[e]||0}const MR=new WeakMap;class ER{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=kt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(rl(d).point),this.stopAnimation()},o=(d,u)=>{const{drag:p,dragPropagation:m,onDragStart:S}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=q2(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=u,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Si(h=>{let v=this.getAxisMotionValue(h).get()||0;if(Ri.test(v)){const{projection:y}=this.visualElement;if(y&&y.layout){const _=y.layout.layoutBox[h];_&&(v=fn(_)*(parseFloat(v)/100))}}this.originPoint[h]=v}),S&&Qe.update(()=>S(d,u),!1,!0),Ah(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(d,u)=>{this.latestPointerEvent=d,this.latestPanInfo=u;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:S,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=u;if(m&&this.currentDirection===null){this.currentDirection=wR(h),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",u.point,h),this.updateAxis("y",u.point,h),this.visualElement.render(),g&&Qe.update(()=>g(d,u),!1,!0)},l=(d,u)=>{this.latestPointerEvent=d,this.latestPanInfo=u,this.stop(d,u),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new dM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:fM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Qe.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Nl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=gR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&js(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=vR(i.layoutBox,e):this.constraints=!1,this.elastic=SR(n),r!==this.constraints&&!js(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Si(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=yR(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!js(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=wC(i,r.root,this.visualElement.getTransformPagePoint());let o=xR(r.layout.layoutBox,s);if(n){const a=n(MC(o));this.hasMutatedConstraints=!!a,a&&(o=U1(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Si(f=>{if(!Nl(f,n,this.currentDirection))return;let d=l&&l[f]||{};(o===!0||o===f)&&(d={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ah(this.visualElement,e),i.start(Hm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Si(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Si(n=>{const{drag:i}=this.getProps();if(!Nl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-ct(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!js(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Si(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=_R({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Si(o=>{if(!Nl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ct(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;MR.set(this.visualElement,this);const e=this.visualElement.current,n=wa(e,"pointerdown",c=>{const{drag:f,dragListener:d=!0}=this.getProps(),u=c.target,p=u!==e&&tC(u);f&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();js(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=TR(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Qe.read(r);const a=Xa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f})=>{this.isDragging&&f&&(Si(d=>{const u=this.getAxisMotionValue(d);u&&(this.originPoint[d]+=c[d].translate,u.set(u.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=kh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Qv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function TR(t,e,n){const i=Lh(t,Qv(n)),r=Lh(e,Qv(n));return()=>{i(),r()}}function Nl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function wR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class AR extends Gr{constructor(e){super(e),this.removeGroupControls=En,this.removeListeners=En,this.controls=new ER(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||En}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const If=t=>(e,n)=>{t&&Qe.update(()=>t(e,n),!1,!0)};class CR extends Gr{constructor(){super(...arguments),this.removePointerDownListener=En}onPointerDown(e){this.session=new dM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:If(e),onStart:If(n),onMove:If(i),onEnd:(s,o)=>{delete this.session,r&&Qe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=wa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Uf=!1;class bR extends Q.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Uf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Sc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Uf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Qe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Co.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Uf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function pM(t){const[e,n]=nM(),i=Q.useContext(Tm);return E.jsx(bR,{...t,layoutGroup:i,switchLayoutGroup:Q.useContext(cM),isPresent:e,safeToRemove:n})}const RR={pan:{Feature:CR},drag:{Feature:AR,ProjectionNode:tM,MeasureLayout:pM}};function Jv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Qe.postRender(()=>s(e,rl(e)))}class PR extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=Z2(e,(n,i)=>(Jv(this.node,i,"Start"),r=>Jv(this.node,r,"End"))))}unmount(){}}class LR extends Gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tl(Xa(this.node.current,"focus",()=>this.onFocus()),Xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ex(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Qe.postRender(()=>s(e,rl(e)))}class NR extends Gr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=iC(e,(r,s)=>(ex(this.node,s,"Start"),(o,{success:a})=>ex(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Oh=new WeakMap,Ff=new WeakMap,DR=t=>{const e=Oh.get(t.target);e&&e(t)},IR=t=>{t.forEach(DR)};function UR({root:t,...e}){const n=t||document;Ff.has(n)||Ff.set(n,{});const i=Ff.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(IR,{root:t,...e})),i[r]}function FR(t,e,n){const i=UR(e);return Oh.set(t,n),i.observe(t),()=>{Oh.delete(t),i.unobserve(t)}}const kR={some:0,all:1};class OR extends Gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:kR[r]},a=c=>{const{isIntersecting:f}=c;if(this.isInView===f||(this.isInView=f,s&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:d,onViewportLeave:u}=this.node.getProps(),p=f?d:u;p&&p(c)};this.stopObserver=FR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(BR(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function BR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const zR={inView:{Feature:OR},tap:{Feature:NR},focus:{Feature:LR},hover:{Feature:PR}},VR={layout:{ProjectionNode:tM,MeasureLayout:pM}},HR={...fR,...zR,...RR,...VR},On=oR(HR,aR);function uu(t){return typeof window>"u"?!1:t?o1():zm()}const GR=50,tx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),WR=()=>({time:0,x:tx(),y:tx()}),jR={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function nx(t,e,n,i){const r=n[e],{length:s,position:o}=jR[e],a=r.current,l=n.time;r.current=Math.abs(t[`scroll${o}`]),r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=wo(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>GR?0:bm(r.current-a,c)}function XR(t,e,n){nx(t,"x",e,n),nx(t,"y",e,n),e.time=n}function $R(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(Ea(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Bh={start:0,center:.5,end:1};function ix(t,e,n=0){let i=0;if(t in Bh&&(t=Bh[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const YR=[0,0];function qR(t,e,n,i){let r=Array.isArray(t)?t:YR,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Bh[t]?t:"0"]),s=ix(r[0],n,i),o=ix(r[1],e),s-o}const la={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},KR={x:0,y:0};function ZR(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function QR(t,e,n){const{offset:i=la.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?$R(r,t):KR,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:ZR(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let f=!e[s].interpolate;const d=i.length;for(let u=0;u<d;u++){const p=qR(i[u],c[o],l[o],a[s]);!f&&p!==e[s].interpolatorOffsets[u]&&(f=!0),e[s].offset[u]=p}f&&(e[s].interpolate=Fm(e[s].offset,t1(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=di(0,1,e[s].interpolate(e[s].current))}function JR(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function e3(t,e,n,i={}){return{measure:r=>{JR(t,i.target,n),XR(t,n,r),(i.offset||i.target)&&QR(t,n,i)},notify:()=>e(n)}}const Rs=new WeakMap,rx=new WeakMap,kf=new WeakMap,sx=new WeakMap,Dl=new WeakMap,ox=t=>t===document.scrollingElement?window:t;function mM(t,{container:e=document.scrollingElement,trackContentSize:n=!1,...i}={}){if(!e)return En;let r=kf.get(e);r||(r=new Set,kf.set(e,r));const s=WR(),o=e3(e,t,s,i);if(r.add(o),!Rs.has(e)){const l=()=>{for(const u of r)u.measure(Wt.timestamp);Qe.preUpdate(c)},c=()=>{for(const u of r)u.notify()},f=()=>Qe.read(l);Rs.set(e,f);const d=ox(e);window.addEventListener("resize",f),e!==document.documentElement&&rx.set(e,Lh(e,f)),d.addEventListener("scroll",f),f()}if(n&&!Dl.has(e)){const l=Rs.get(e),c={width:e.scrollWidth,height:e.scrollHeight};sx.set(e,c);const f=()=>{const u=e.scrollWidth,p=e.scrollHeight;(c.width!==u||c.height!==p)&&(l(),c.width=u,c.height=p)},d=Qe.read(f,!0);Dl.set(e,d)}const a=Rs.get(e);return Qe.read(a,!1,!0),()=>{var d;Yn(a);const l=kf.get(e);if(!l||(l.delete(o),l.size))return;const c=Rs.get(e);Rs.delete(e),c&&(ox(e).removeEventListener("scroll",c),(d=rx.get(e))==null||d(),window.removeEventListener("resize",c));const f=Dl.get(e);f&&(Yn(f),Dl.delete(e)),sx.delete(e)}}const t3=[[la.Enter,"entry"],[la.Exit,"exit"],[la.Any,"cover"],[la.All,"contain"]],ax={start:0,end:1};function n3(t){const e=t.trim().split(/\s+/);if(e.length!==2)return;const n=ax[e[0]],i=ax[e[1]];if(!(n===void 0||i===void 0))return[n,i]}function i3(t){if(t.length!==2)return;const e=[];for(const n of t)if(Array.isArray(n))e.push(n);else if(typeof n=="string"){const i=n3(n);if(!i)return;e.push(i)}else return;return e}function r3(t,e){const n=i3(t);if(!n)return!1;for(let i=0;i<2;i++){const r=n[i],s=e[i];if(r[0]!==s[0]||r[1]!==s[1])return!1}return!0}function eg(t){if(!t)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,n]of t3)if(r3(t,e))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const lx=new Map;function cx(t){const e={value:0},n=mM(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function gM({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);let r=lx.get(e);r||(r=new Map,lx.set(e,r));const s=n.target??"self";let o=r.get(s);o||(o={},r.set(s,o));const a=i+(n.offset??[]).join(",");return o[a]||(n.target&&uu(n.target)?eg(n.offset)?o[a]=new ViewTimeline({subject:n.target,axis:i}):o[a]=cx({container:e,...n}):uu()?o[a]=new ScrollTimeline({source:e,axis:i}):o[a]=cx({container:e,...n})),o[a]}function s3(t,e){const n=gM(e),i=e.target?eg(e.offset):void 0,r=e.target?uu(e.target)&&!!i:uu();return t.attachTimeline({timeline:r?n:void 0,...i&&r&&{rangeStart:i.rangeStart,rangeEnd:i.rangeEnd},observe:s=>(s.pause(),P1(o=>{s.time=s.iterationDuration*o},n))})}function o3(t){return t&&(t.target||t.offset)}function a3(t){return t.length===2}function l3(t,e){return a3(t)||o3(e)?mM(n=>{t(n[e.axis].progress,n)},e):P1(t,gM(e))}function vM(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return En;const r={axis:e,container:n,...i};return typeof t=="function"?l3(t,r):s3(t,r)}const c3=()=>({scrollX:oi(0),scrollY:oi(0),scrollXProgress:oi(0),scrollYProgress:oi(0)}),ao=t=>t?!t.current:!1;function ux(t,e,n,i){return{factory:r=>{let s;const o=()=>{if(ao(n)||ao(i)){Co.read(o);return}s=vM(r,{...e,axis:t,container:(n==null?void 0:n.current)||void 0,target:(i==null?void 0:i.current)||void 0})};return Co.read(o),()=>{w1(o),s==null||s()}},times:[0,1],keyframes:[0,1],ease:r=>r,duration:1}}function u3(t,e){return typeof window>"u"?!1:t?o1()&&!!eg(e):zm()}function f3({container:t,target:e,...n}={}){const i=kr(c3);u3(e,n.offset)&&(i.scrollXProgress.accelerate=ux("x",n,t,e),i.scrollYProgress.accelerate=ux("y",n,t,e));const r=Q.useRef(null),s=Q.useRef(!1),o=Q.useCallback(()=>(r.current=vM((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return el(()=>{if(s.current=!1,ao(t)||ao(e)){s.current=!0;return}else return o()},[o]),Q.useEffect(()=>{if(!s.current)return;let a;const l=()=>{const c=ao(t),f=ao(e);!c&&!f&&(a=o())};return Co.read(l),()=>{w1(l),a==null||a()}},[o]),i}function d3(t){const e=kr(()=>oi(t)),{isStatic:n}=Q.useContext(Ou);if(n){const[,i]=Q.useState(t);Q.useEffect(()=>e.on("change",i),[])}return e}function xM(t,e){const n=d3(e()),i=()=>n.set(e());return i(),el(()=>{const r=()=>Qe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Yn(i)}}),n}function h3(t){Ma.current=[],t();const e=xM(Ma.current,t);return Ma.current=void 0,e}function Mc(t,e,n,i){if(typeof t=="function")return h3(t);if(n!==void 0&&!Array.isArray(n)&&typeof e!="function")return p3(t,e,n,i);const o=typeof e=="function"?e:hC(e,n,i),a=Array.isArray(t)?fx(t,o):fx([t],([c])=>o(c)),l=Array.isArray(t)?void 0:t.accelerate;return l&&!l.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(i==null?void 0:i.clamp)!==!1&&(a.accelerate={...l,times:e,keyframes:n,isTransformed:!0}),a}function fx(t,e){const n=kr(()=>[]);return xM(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function p3(t,e,n,i){const r=kr(()=>Object.keys(n)),s=kr(()=>({}));for(const o of r)s[o]=Mc(t,e,n[o],i);return s}var dx="1.3.25";function _M(t,e,n){return Math.max(t,Math.min(e,n))}function m3(t,e,n){return(1-n)*t+n*e}function g3(t,e,n,i){return m3(t,e,1-Math.exp(-n*i))}function v3(t,e){return(t%e+e)%e}var x3=class{constructor(){we(this,"isRunning",!1);we(this,"value",0);we(this,"from",0);we(this,"to",0);we(this,"currentTime",0);we(this,"lerp");we(this,"duration");we(this,"easing");we(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=_M(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=g3(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function _3(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var y3=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){we(this,"width",0);we(this,"height",0);we(this,"scrollHeight",0);we(this,"scrollWidth",0);we(this,"debouncedResize");we(this,"wrapperResizeObserver");we(this,"contentResizeObserver");we(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});we(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});we(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=_3(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},yM=class{constructor(){we(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const S3=100/6,cr={passive:!1};function hx(t,e){return t===1?S3:t===2?e:1}var M3=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){we(this,"touchStart",{x:0,y:0});we(this,"lastDelta",{x:0,y:0});we(this,"window",{width:0,height:0});we(this,"emitter",new yM);we(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});we(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});we(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});we(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=hx(i,this.window.width),s=hx(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});we(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,cr),this.element.addEventListener("touchstart",this.onTouchStart,cr),this.element.addEventListener("touchmove",this.onTouchMove,cr),this.element.addEventListener("touchend",this.onTouchEnd,cr)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,cr),this.element.removeEventListener("touchstart",this.onTouchStart,cr),this.element.removeEventListener("touchmove",this.onTouchMove,cr),this.element.removeEventListener("touchend",this.onTouchEnd,cr)}};const px=t=>Math.min(1,1.001-2**(-10*t));var E3=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:S=!0,prevent:g,virtualScroll:h,overscroll:v=!0,autoRaf:y=!1,anchors:_=!1,autoToggle:C=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:P=!1,naiveDimensions:x=P,stopInertiaOnNavigate:R=!1}={}){we(this,"_isScrolling",!1);we(this,"_isStopped",!1);we(this,"_isLocked",!1);we(this,"_preventNextNativeScrollEvent",!1);we(this,"_resetVelocityTimeout",null);we(this,"_rafId",null);we(this,"_isDraggingSelection",!1);we(this,"isTouching");we(this,"isIos");we(this,"time",0);we(this,"userData",{});we(this,"lastVelocity",0);we(this,"velocity",0);we(this,"direction",0);we(this,"options");we(this,"targetScroll");we(this,"animatedScroll");we(this,"animate",new x3);we(this,"emitter",new yM);we(this,"dimensions");we(this,"virtualScroll");we(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});we(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});we(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});we(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});we(this,"onPointerDown",t=>{t.button===1&&this.reset()});we(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,f=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(m=>{var S,g,h,v,y;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent"))||f==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||f==="horizontal"&&((h=m.hasAttribute)==null?void 0:h.call(m,"data-lenis-prevent-horizontal"))||r&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||s&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation==="both"?d=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const u=r&&this.options.syncTouch,p=r&&i.type==="touchend";p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});we(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});we(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=dx,window.lenis||(window.lenis={}),window.lenis.version=dx,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof a=="number"&&typeof l!="function"?l=px:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:f,gestureOrientation:u,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:S,prevent:g,virtualScroll:h,overscroll:v,autoRaf:y,anchors:_,autoToggle:C,allowNestedScroll:A,naiveDimensions:x,stopInertiaOnNavigate:R},this.dimensions=new y3(t,e,{autoResize:S}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new M3(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=o,l=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!f)return;let u=t,p=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(m=u),m){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?_.left:_.top}const S=m.getBoundingClientRect(),g=getComputedStyle(m),h=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),v=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?S.left:S.top)+this.animatedScroll-(Number.isNaN(h)?0:h)-(Number.isNaN(y)?0:y)}}if(typeof u=="number"){if(u+=p,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=_M(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=px:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,S)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),S||this.emit(),S&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,o,a,l,c,f,d,u,p,m;if(i-(r.time??0)>2e3){r.time=Date.now();const A=window.getComputedStyle(t);if(r.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),f=["auto"].includes(A.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=t.scrollWidth,u=t.scrollHeight,p=t.clientWidth,m=t.clientHeight,a=d>p,l=u>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=u,r.clientWidth=p,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=f}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,u=r.scrollHeight,p=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const S=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let g,h,v,y,_,C;if(S==="horizontal")g=Math.round(t.scrollLeft),h=d-p,v=e,y=s,_=a,C=c;else if(S==="vertical")g=Math.round(t.scrollTop),h=u-m,v=n,y=o,_=l,C=f;else return!1;return!C&&(g>=h||g<=0)?!0:(v>0?g<h:g>0)&&y&&_}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?v3(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tg="185",T3=0,mx=1,w3=2,Ec=1,A3=2,ca=3,Br=0,Tn=1,Gi=2,Yi=0,mo=1,gx=2,vx=3,xx=4,C3=5,ns=100,b3=101,R3=102,P3=103,L3=104,N3=200,D3=201,I3=202,U3=203,zh=204,Vh=205,F3=206,k3=207,O3=208,B3=209,z3=210,V3=211,H3=212,G3=213,W3=214,Hh=0,Gh=1,Wh=2,bo=3,jh=4,Xh=5,$h=6,Yh=7,SM=0,j3=1,X3=2,Pi=0,MM=1,EM=2,TM=3,wM=4,AM=5,CM=6,bM=7,RM=300,ys=301,Ro=302,Of=303,Bf=304,zu=306,qh=1e3,Xi=1001,Kh=1002,Kt=1003,$3=1004,Il=1005,on=1006,zf=1007,cs=1008,Hn=1009,PM=1010,LM=1011,$a=1012,ng=1013,Di=1014,wi=1015,tr=1016,ig=1017,rg=1018,Ya=1020,NM=35902,DM=35899,IM=1021,UM=1022,ai=1023,nr=1026,us=1027,FM=1028,sg=1029,Ss=1030,og=1031,ag=1033,Tc=33776,wc=33777,Ac=33778,Cc=33779,Zh=35840,Qh=35841,Jh=35842,ep=35843,tp=36196,np=37492,ip=37496,rp=37488,sp=37489,fu=37490,op=37491,ap=37808,lp=37809,cp=37810,up=37811,fp=37812,dp=37813,hp=37814,pp=37815,mp=37816,gp=37817,vp=37818,xp=37819,_p=37820,yp=37821,Sp=36492,Mp=36494,Ep=36495,Tp=36283,wp=36284,du=36285,Ap=36286,Y3=3200,_x=0,q3=1,Mr="",Bn="srgb",hu="srgb-linear",pu="linear",it="srgb",Ps=7680,yx=519,K3=512,Z3=513,Q3=514,lg=515,J3=516,eP=517,cg=518,tP=519,Sx=35044,Mx="300 es",Ai=2e3,mu=2001;function nP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iP(){const t=gu("canvas");return t.style.display="block",t}const Ex={};function Tx(...t){const e="THREE."+t.shift();console.log(e,...t)}function kM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=kM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=kM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function go(...t){const e=t.join(" ");e in Ex||(Ex[e]=!0,Ie(...t))}function rP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sP={[Hh]:Gh,[Wh]:$h,[jh]:Yh,[bo]:Xh,[Gh]:Hh,[$h]:Wh,[Yh]:jh,[Xh]:bo};class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=Math.PI/180,Cp=180/Math.PI;function sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function oP(t,e){return(t%e+e)%e}function Hf(t,e,n){return(1-n)*t+n*e}function qo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vg=class vg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vg.prototype.isVector2=!0;let Je=vg;class Oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],p=s[o+1],m=s[o+2],S=s[o+3];if(d!==S||l!==u||c!==p||f!==m){let g=l*u+c*p+f*m+d*S;g<0&&(u=-u,p=-p,m=-m,S=-S,g=-g);let h=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);h=Math.sin(h*v)/y,a=Math.sin(a*v)/y,l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+S*a}else{l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+S*a;const v=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=v,c*=v,f*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+f*d+l*p-c*u,e[n+1]=l*m+f*u+c*d-a*p,e[n+2]=c*m+f*p+a*u-l*d,e[n+3]=f*m-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"YXZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"ZXY":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"ZYX":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"YZX":this._x=u*f*d+c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d-u*p*m;break;case"XZY":this._x=u*f*d-c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d+u*p*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xg=class xg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xg.prototype.isVector3=!0;let Y=xg;const Gf=new Y,wx=new Oo,_g=class _g{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],m=i[8],S=r[0],g=r[3],h=r[6],v=r[1],y=r[4],_=r[7],C=r[2],A=r[5],P=r[8];return s[0]=o*S+a*v+l*C,s[3]=o*g+a*y+l*A,s[6]=o*h+a*_+l*P,s[1]=c*S+f*v+d*C,s[4]=c*g+f*y+d*A,s[7]=c*h+f*_+d*P,s[2]=u*S+p*v+m*C,s[5]=u*g+p*y+m*A,s[8]=u*h+p*_+m*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,p=c*s-o*l,m=n*d+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/m;return e[0]=d*S,e[1]=(r*c-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=u*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wf.makeScale(e,n)),this}rotate(e){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wf.makeRotation(-e)),this}translate(e,n){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_g.prototype.isMatrix3=!0;let ke=_g;const Wf=new ke,Ax=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cx=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aP(){const t={enabled:!0,workingColorSpace:hu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=vo(r.r),r.g=vo(r.g),r.b=vo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?pu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[hu]:{primaries:e,whitePoint:i,transfer:pu,toXYZ:Ax,fromXYZ:Cx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Ax,fromXYZ:Cx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const Xe=aP();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ls;class lP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=gu("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cP=0;class ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jf(r[o].image)):s.push(jf(r[o]))}else s=jf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function jf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let uP=0;const Xf=new Y;class hn extends ws{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Xi,r=Xi,s=on,o=cs,a=ai,l=Hn,c=hn.DEFAULT_ANISOTROPY,f=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uP++}),this.uuid=sl(),this.name="",this.source=new ug(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xf).x}get height(){return this.source.getSize(Xf).y}get depth(){return this.source.getSize(Xf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==RM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=RM;hn.DEFAULT_ANISOTROPY=1;const yg=class yg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],m=l[9],S=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+S)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(p+1)/2,C=(h+1)/2,A=(f+u)/4,P=(d+S)/4,x=(m+g)/4;return y>_&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=P/i):_>C?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-S)*(d-S)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-S)/v,this.z=(u-f)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yg.prototype.isVector4=!0;let wt=yg;class fP extends ws{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ug(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends fP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class OM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dP extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=class vu{constructor(e,n,i,r,s,o,a,l,c,f,d,u,p,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,S,g)}set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,S,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=m,h[11]=S,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*d,m=a*f,S=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=u-S*c,n[9]=-a*l,n[2]=S-u*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,m=c*f,S=c*d;n[0]=u+S*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-m,n[6]=S+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,m=c*f,S=c*d;n[0]=u-S*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*f,n[9]=S-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*d,m=a*f,S=a*d;n[0]=l*f,n[4]=m*c-p,n[8]=u*c+S,n[1]=l*d,n[5]=S*c+u,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,m=a*l,S=a*c;n[0]=l*f,n[4]=S-u*d,n[8]=m*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+m,n[10]=u-S*d}else if(e.order==="XZY"){const u=o*l,p=o*c,m=a*l,S=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+S,n[5]=o*f,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*f,n[10]=S*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hP,e,pP)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),ur.crossVectors(i,An),ur.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ur.crossVectors(i,An)),ur.normalize(),Ul.crossVectors(An,ur),r[0]=ur.x,r[4]=Ul.x,r[8]=An.x,r[1]=ur.y,r[5]=Ul.y,r[9]=An.y,r[2]=ur.z,r[6]=Ul.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],m=i[2],S=i[6],g=i[10],h=i[14],v=i[3],y=i[7],_=i[11],C=i[15],A=r[0],P=r[4],x=r[8],R=r[12],T=r[1],b=r[5],N=r[9],F=r[13],z=r[2],U=r[6],V=r[10],H=r[14],D=r[3],O=r[7],X=r[11],ee=r[15];return s[0]=o*A+a*T+l*z+c*D,s[4]=o*P+a*b+l*U+c*O,s[8]=o*x+a*N+l*V+c*X,s[12]=o*R+a*F+l*H+c*ee,s[1]=f*A+d*T+u*z+p*D,s[5]=f*P+d*b+u*U+p*O,s[9]=f*x+d*N+u*V+p*X,s[13]=f*R+d*F+u*H+p*ee,s[2]=m*A+S*T+g*z+h*D,s[6]=m*P+S*b+g*U+h*O,s[10]=m*x+S*N+g*V+h*X,s[14]=m*R+S*F+g*H+h*ee,s[3]=v*A+y*T+_*z+C*D,s[7]=v*P+y*b+_*U+C*O,s[11]=v*x+y*N+_*V+C*X,s[15]=v*R+y*F+_*H+C*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],m=e[3],S=e[7],g=e[11],h=e[15],v=l*p-c*u,y=a*p-c*d,_=a*u-l*d,C=o*p-c*f,A=o*u-l*f,P=o*d-a*f;return n*(S*v-g*y+h*_)-i*(m*v-g*C+h*A)+r*(m*y-S*C+h*P)-s*(m*_-S*A+g*P)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],m=e[12],S=e[13],g=e[14],h=e[15],v=n*a-i*o,y=n*l-r*o,_=n*c-s*o,C=i*l-r*a,A=i*c-s*a,P=r*c-s*l,x=f*S-d*m,R=f*g-u*m,T=f*h-p*m,b=d*g-u*S,N=d*h-p*S,F=u*h-p*g,z=v*F-y*N+_*b+C*T-A*R+P*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/z;return e[0]=(a*F-l*N+c*b)*U,e[1]=(r*N-i*F-s*b)*U,e[2]=(S*P-g*A+h*C)*U,e[3]=(u*A-d*P-p*C)*U,e[4]=(l*T-o*F-c*R)*U,e[5]=(n*F-r*T+s*R)*U,e[6]=(g*_-m*P-h*y)*U,e[7]=(f*P-u*_+p*y)*U,e[8]=(o*N-a*T+c*x)*U,e[9]=(i*T-n*N-s*x)*U,e[10]=(m*A-S*_+h*v)*U,e[11]=(d*_-f*A-p*v)*U,e[12]=(a*R-o*b-l*x)*U,e[13]=(n*b-i*R+r*x)*U,e[14]=(S*y-m*C-g*v)*U,e[15]=(f*C-d*y+u*v)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,p=s*f,m=s*d,S=o*f,g=o*d,h=a*d,v=l*c,y=l*f,_=l*d,C=i.x,A=i.y,P=i.z;return r[0]=(1-(S+h))*C,r[1]=(p+_)*C,r[2]=(m-y)*C,r[3]=0,r[4]=(p-_)*A,r[5]=(1-(u+h))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(m+y)*P,r[9]=(g-v)*P,r[10]=(1-(u+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ns.set(r[0],r[1],r[2]).length();const a=Ns.set(r[4],r[5],r[6]).length(),l=Ns.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Zn.copy(this);const c=1/o,f=1/a,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,S;if(l)m=s/(o-s),S=o*s/(o-s);else if(a===Ai)m=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===mu)m=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,S;if(l)m=1/(o-s),S=o/(o-s);else if(a===Ai)m=-2/(o-s),S=-(o+s)/(o-s);else if(a===mu)m=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};vu.prototype.isMatrix4=!0;let Ut=vu;const Ns=new Y,Zn=new Ut,hP=new Y(0,0,0),pP=new Y(1,1,1),ur=new Y,Ul=new Y,An=new Y,bx=new Ut,Rx=new Oo;class Ms{constructor(e=0,n=0,i=0,r=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rx.setFromEuler(this),this.setFromQuaternion(Rx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";let BM=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mP=0;const Px=new Y,Ds=new Oo,Ui=new Ut,Fl=new Y,Ko=new Y,gP=new Y,vP=new Oo,Lx=new Y(1,0,0),Nx=new Y(0,1,0),Dx=new Y(0,0,1),Ix={type:"added"},xP={type:"removed"},Is={type:"childadded",child:null},$f={type:"childremoved",child:null};class Nn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mP++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new Y,n=new Ms,i=new Oo,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ke}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Lx,e)}rotateY(e){return this.rotateOnAxis(Nx,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,n){return Px.copy(e).applyQuaternion(this.quaternion),this.position.add(Px.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lx,e)}translateY(e){return this.translateOnAxis(Nx,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ko,Fl,this.up):Ui.lookAt(Fl,Ko,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Ds.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ix),Is.child=e,this.dispatchEvent(Is),Is.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xP),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ix),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,gP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,vP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new Y(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _P={type:"move"};class Yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),h=this._getHandJoint(c,S);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_P)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new kl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function qf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=oP(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qf(o,s,e+1/3),this.g=qf(o,s,e),this.b=qf(o,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=zM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Xe.workingToColorSpace(rn.copy(this),e),Math.round($e(rn.r*255,0,255))*65536+Math.round($e(rn.g*255,0,255))*256+Math.round($e(rn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Bn){Xe.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(Ol);const i=Hf(fr.h,Ol.h,n),r=Hf(fr.s,Ol.s,n),s=Hf(fr.l,Ol.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new tt;tt.NAMES=zM;class yP extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qn=new Y,Fi=new Y,Kf=new Y,ki=new Y,Us=new Y,Fs=new Y,Ux=new Y,Zf=new Y,Qf=new Y,Jf=new Y,ed=new wt,td=new wt,nd=new wt;class si{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Fi.subVectors(i,n),Kf.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Fi),l=Qn.dot(Kf),c=Fi.dot(Fi),f=Fi.dot(Kf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*f)*u,m=(o*f-a*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ed,s.x),o.addScaledVector(td,s.y),o.addScaledVector(nd,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Fi.subVectors(e,n),Qn.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),Qn.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Fs.subVectors(s,i),Zf.subVectors(e,i);const l=Us.dot(Zf),c=Fs.dot(Zf);if(l<=0&&c<=0)return n.copy(i);Qf.subVectors(e,r);const f=Us.dot(Qf),d=Fs.dot(Qf);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Us,o);Jf.subVectors(e,s);const p=Us.dot(Jf),m=Fs.dot(Jf);if(m>=0&&p<=m)return n.copy(s);const S=p*c-l*m;if(S<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Fs,a);const g=f*m-p*d;if(g<=0&&d-f>=0&&p-m>=0)return Ux.subVectors(s,r),a=(d-f)/(d-f+(p-m)),n.copy(r).addScaledVector(Ux,a);const h=1/(g+S+u);return o=S*h,a=u*h,n.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ol{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),zl.subVectors(this.max,Zo),ks.subVectors(e.a,Zo),Os.subVectors(e.b,Zo),Bs.subVectors(e.c,Zo),dr.subVectors(Os,ks),hr.subVectors(Bs,Os),Xr.subVectors(ks,Bs);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Xr.z,Xr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Xr.z,0,-Xr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Xr.y,Xr.x,0];return!id(n,ks,Os,Bs,zl)||(n=[1,0,0,0,1,0,0,0,1],!id(n,ks,Os,Bs,zl))?!1:(Vl.crossVectors(dr,hr),n=[Vl.x,Vl.y,Vl.z],id(n,ks,Os,Bs,zl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Jn=new Y,Bl=new ol,ks=new Y,Os=new Y,Bs=new Y,dr=new Y,hr=new Y,Xr=new Y,Zo=new Y,zl=new Y,Vl=new Y,$r=new Y;function id(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$r.fromArray(t,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=n.dot($r),f=i.dot($r);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Nt=new Y,Hl=new Je;let SP=0;class Ni extends ws{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sx,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hl.fromBufferAttribute(this,n),Hl.applyMatrix3(e),this.setXY(n,Hl.x,Hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qo(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qo(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qo(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class VM extends Ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class HM extends Ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ki extends Ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const MP=new ol,Qo=new Y,rd=new Y;class fg{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):MP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(rd)),this.expandByPoint(Qo.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let EP=0;const kn=new Ut,sd=new Nn,zs=new Y,Cn=new ol,Jo=new ol,Gt=new Y;class rr extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EP++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nP(e)?HM:VM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ki(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Cn.min,Jo.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,Jo.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(Jo.min),Cn.expandByPoint(Jo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Gt.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),Gt.add(zs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new Y,l[x]=new Y;const c=new Y,f=new Y,d=new Y,u=new Je,p=new Je,m=new Je,S=new Y,g=new Y;function h(x,R,T){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,T),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,T),f.sub(c),d.sub(c),p.sub(u),m.sub(u);const b=1/(p.x*m.y-m.x*p.y);isFinite(b)&&(S.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(b),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(b),a[x].add(S),a[R].add(S),a[T].add(S),l[x].add(g),l[R].add(g),l[T].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,R=v.length;x<R;++x){const T=v[x],b=T.start,N=T.count;for(let F=b,z=b+N;F<z;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new Y,_=new Y,C=new Y,A=new Y;function P(x){C.fromBufferAttribute(r,x),A.copy(C);const R=a[x];y.copy(R),y.sub(C.multiplyScalar(C.dot(R))).normalize(),_.crossVectors(A,R);const b=_.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,b)}for(let x=0,R=v.length;x<R;++x){const T=v[x],b=T.start,N=T.count;for(let F=b,z=b+N;F<z;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,f=new Y,d=new Y;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),S=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,m=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*f;for(let h=0;h<f;h++)u[m++]=c[p++]}return new Ni(u,f,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TP=0;class Vu extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TP++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=mo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Vh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zh&&(i.blendSrc=this.blendSrc),this.blendDst!==Vh&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new Y,od=new Y,Gl=new Y,pr=new Y,ad=new Y,Wl=new Y,ld=new Y;class wP{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){od.copy(e).add(n).multiplyScalar(.5),Gl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(od);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Gl),a=pr.dot(this.direction),l=-pr.dot(Gl),c=pr.lengthSq(),f=Math.abs(1-o*o);let d,u,p,m;if(f>0)if(d=o*l-a,u=o*a-l,m=s*f,d>=0)if(u>=-m)if(u<=m){const S=1/f;d*=S,u*=S,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(od).addScaledVector(Gl,u),p}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,i,r,s){ad.subVectors(n,e),Wl.subVectors(i,e),ld.crossVectors(ad,Wl);let o=this.direction.dot(ld),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);const l=a*this.direction.dot(Wl.crossVectors(pr,Wl));if(l<0)return null;const c=a*this.direction.dot(ad.cross(pr));if(c<0||l+c>o)return null;const f=-a*pr.dot(ld);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class GM extends Vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=SM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fx=new Ut,Yr=new wP,jl=new fg,kx=new Y,Xl=new Y,$l=new Y,Yl=new Y,cd=new Y,ql=new Y,Ox=new Y,Kl=new Y;class Ii extends Nn{constructor(e=new rr,n=new GM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(cd.fromBufferAttribute(d,e),o?ql.addScaledVector(cd,f):ql.addScaledVector(cd.sub(n),f))}n.add(ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(jl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(jl,kx)===null||Yr.origin.distanceToSquared(kx)>(e.far-e.near)**2))&&(Fx.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(Fx),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,S=u.length;m<S;m++){const g=u[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,C=y;_<C;_+=3){const A=a.getX(_),P=a.getX(_+1),x=a.getX(_+2);r=Zl(this,h,e,i,c,f,d,A,P,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=m,h=S;g<h;g+=3){const v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);r=Zl(this,o,e,i,c,f,d,v,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,S=u.length;m<S;m++){const g=u[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,C=y;_<C;_+=3){const A=_,P=_+1,x=_+2;r=Zl(this,h,e,i,c,f,d,A,P,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=m,h=S;g<h;g+=3){const v=g,y=g+1,_=g+2;r=Zl(this,o,e,i,c,f,d,v,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function AP(t,e,n,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;Kl.copy(a),Kl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Kl);return c<n.near||c>n.far?null:{distance:c,point:Kl.clone(),object:t}}function Zl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xl),t.getVertexPosition(l,$l),t.getVertexPosition(c,Yl);const f=AP(t,e,n,i,Xl,$l,Yl,Ox);if(f){const d=new Y;si.getBarycoord(Ox,Xl,$l,Yl,d),r&&(f.uv=si.getInterpolatedAttribute(r,a,l,c,d,new Je)),s&&(f.uv1=si.getInterpolatedAttribute(s,a,l,c,d,new Je)),o&&(f.normal=si.getInterpolatedAttribute(o,a,l,c,d,new Y),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new Y,materialIndex:0};si.getNormal(Xl,$l,Yl,u.normal),f.face=u,f.barycoord=d}return f}class CP extends hn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,f=Kt,d,u){super(null,o,a,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ud=new Y,bP=new Y,RP=new ke;class ts{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ud.subVectors(i,n).cross(bP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ud),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RP.getNormalMatrix(e),r=this.coplanarPoint(ud).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new fg,PP=new Je(.5,.5),Ql=new Y;class WM{constructor(e=new ts,n=new ts,i=new ts,r=new ts,s=new ts,o=new ts){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],p=s[7],m=s[8],S=s[9],g=s[10],h=s[11],v=s[12],y=s[13],_=s[14],C=s[15];if(r[0].setComponents(c-o,p-f,h-m,C-v).normalize(),r[1].setComponents(c+o,p+f,h+m,C+v).normalize(),r[2].setComponents(c+a,p+d,h+S,C+y).normalize(),r[3].setComponents(c-a,p-d,h-S,C-y).normalize(),i)r[4].setComponents(l,u,g,_).normalize(),r[5].setComponents(c-l,p-u,h-g,C-_).normalize();else if(r[4].setComponents(c-l,p-u,h-g,C-_).normalize(),n===Ai)r[5].setComponents(c+l,p+u,h+g,C+_).normalize();else if(n===mu)r[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const n=PP.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ql.x=r.normal.x>0?e.max.x:e.min.x,Ql.y=r.normal.y>0?e.max.y:e.min.y,Ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jM extends hn{constructor(e=[],n=ys,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Po extends hn{constructor(e,n,i=Di,r,s,o,a=Kt,l=Kt,c,f=nr,d=1){if(f!==nr&&f!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ug(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class LP extends Po{constructor(e,n=Di,i=ys,r,s,o=Kt,a=Kt,l,c=nr){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class XM extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends rr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(f,3)),this.setAttribute("uv",new Ki(d,2));function m(S,g,h,v,y,_,C,A,P,x,R){const T=_/P,b=C/x,N=_/2,F=C/2,z=A/2,U=P+1,V=x+1;let H=0,D=0;const O=new Y;for(let X=0;X<V;X++){const ee=X*b-F;for(let re=0;re<U;re++){const Ue=re*T-N;O[S]=Ue*v,O[g]=ee*y,O[h]=z,c.push(O.x,O.y,O.z),O[S]=0,O[g]=0,O[h]=A>0?1:-1,f.push(O.x,O.y,O.z),d.push(re/P),d.push(1-X/x),H+=1}}for(let X=0;X<x;X++)for(let ee=0;ee<P;ee++){const re=u+ee+U*X,Ue=u+ee+U*(X+1),je=u+(ee+1)+U*(X+1),ze=u+(ee+1)+U*X;l.push(re,Ue,ze),l.push(Ue,je,ze),D+=6}a.addGroup(p,D,R),p+=D,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ll extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],m=[],S=[],g=[];for(let h=0;h<f;h++){const v=h*u-o;for(let y=0;y<c;y++){const _=y*d-s;m.push(_,-v,0),S.push(0,0,1),g.push(y/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,_=v+c*(h+1),C=v+1+c*(h+1),A=v+1+c*h;p.push(y,_,A),p.push(_,C,A)}this.setIndex(p),this.setAttribute("position",new Ki(m,3)),this.setAttribute("normal",new Ki(S,3)),this.setAttribute("uv",new Ki(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}function Lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Bx(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Bx(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=Lo(t[n]);for(const r in i)e[r]=i[r]}return e}function Bx(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function NP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $M(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const DP={clone:Lo,merge:ln};var IP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IP,this.fragmentShader=UP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=NP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class FP extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kP extends Vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OP extends Vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jl=new Y,ec=new Oo,xi=new Y;class dg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,ec,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,xi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Jl,ec,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Y,zx=new Je,Vx=new Je;class ri extends dg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cp*2*Math.atan(Math.tan(Vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,zx,Vx),n.subVectors(Vx,zx)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class YM extends dg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=-90,Hs=1;class BP extends Nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ri(Vs,Hs,e,n);r.layers=this.layers,this.add(r);const s=new ri(Vs,Hs,e,n);s.layers=this.layers,this.add(s);const o=new ri(Vs,Hs,e,n);o.layers=this.layers,this.add(o);const a=new ri(Vs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new ri(Vs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new ri(Vs,Hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class zP extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sg=class Sg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Sg.prototype.isMatrix2=!0;let Hx=Sg;function Gx(t,e,n,i){const r=VP(i);switch(n){case IM:return t*e;case FM:return t*e/r.components*r.byteLength;case sg:return t*e/r.components*r.byteLength;case Ss:return t*e*2/r.components*r.byteLength;case og:return t*e*2/r.components*r.byteLength;case UM:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case ag:return t*e*4/r.components*r.byteLength;case Tc:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:case ep:return Math.max(t,16)*Math.max(e,8)/4;case Zh:case Jh:return Math.max(t,8)*Math.max(e,8)/2;case tp:case np:case rp:case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ip:case fu:case op:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sp:case Mp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Tp:case wp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case du:case Ap:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VP(t){switch(t){case Hn:case PM:return{byteLength:1,components:1};case $a:case LM:case tr:return{byteLength:2,components:1};case ig:case rg:return{byteLength:2,components:4};case Di:case ng:case wi:return{byteLength:4,components:1};case NM:case DM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tg}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HP(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],S=d[p];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++u,d[u]=S)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const S=d[p];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var GP=`#ifdef USE_ALPHAHASH
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
#endif`,YP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qP=`#ifdef USE_AOMAP
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
#endif`,eL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nL=`#ifdef USE_IRIDESCENCE
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
#endif`,iL=`#ifdef USE_BUMPMAP
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
#endif`,rL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dL=`#define PI 3.141592653589793
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
} // validated`,hL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pL=`vec3 transformedNormal = objectNormal;
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
#endif`,mL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_L="gl_FragColor = linearToOutputTexel( gl_FragColor );",yL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SL=`#ifdef USE_ENVMAP
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
#endif`,ML=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EL=`#ifdef USE_ENVMAP
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
#endif`,TL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wL=`#ifdef USE_ENVMAP
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
#endif`,AL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PL=`#ifdef USE_GRADIENTMAP
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
}`,LL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IL=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,UL=`#ifdef USE_ENVMAP
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
#endif`,FL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zL=`PhysicalMaterial material;
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
#endif`,VL=`uniform sampler2D dfgLUT;
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
}`,HL=`
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
#endif`,GL=`#if defined( RE_IndirectDiffuse )
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
#endif`,WL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jL=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,XL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$L=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JL=`#if defined( USE_POINTS_UV )
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
#endif`,eN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sN=`#ifdef USE_MORPHTARGETS
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
#endif`,oN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dN=`#ifdef USE_NORMALMAP
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
#endif`,hN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_N=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bN=`float getShadowMask() {
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
}`,RN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PN=`#ifdef USE_SKINNING
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
#endif`,LN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NN=`#ifdef USE_SKINNING
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
#endif`,DN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kN=`#ifdef USE_TRANSMISSION
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
#endif`,ON=`#ifdef USE_TRANSMISSION
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
#endif`,BN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WN=`uniform sampler2D t2D;
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
}`,jN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$N=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qN=`#include <common>
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
}`,KN=`#if DEPTH_PACKING == 3200
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
}`,ZN=`#define DISTANCE
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
}`,QN=`#define DISTANCE
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
}`,JN=`varying vec3 vWorldDirection;
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
}`,Ve={alphahash_fragment:GP,alphahash_pars_fragment:WP,alphamap_fragment:jP,alphamap_pars_fragment:XP,alphatest_fragment:$P,alphatest_pars_fragment:YP,aomap_fragment:qP,aomap_pars_fragment:KP,batching_pars_vertex:ZP,batching_vertex:QP,begin_vertex:JP,beginnormal_vertex:eL,bsdfs:tL,iridescence_fragment:nL,bumpmap_pars_fragment:iL,clipping_planes_fragment:rL,clipping_planes_pars_fragment:sL,clipping_planes_pars_vertex:oL,clipping_planes_vertex:aL,color_fragment:lL,color_pars_fragment:cL,color_pars_vertex:uL,color_vertex:fL,common:dL,cube_uv_reflection_fragment:hL,defaultnormal_vertex:pL,displacementmap_pars_vertex:mL,displacementmap_vertex:gL,emissivemap_fragment:vL,emissivemap_pars_fragment:xL,colorspace_fragment:_L,colorspace_pars_fragment:yL,envmap_fragment:SL,envmap_common_pars_fragment:ML,envmap_pars_fragment:EL,envmap_pars_vertex:TL,envmap_physical_pars_fragment:UL,envmap_vertex:wL,fog_vertex:AL,fog_pars_vertex:CL,fog_fragment:bL,fog_pars_fragment:RL,gradientmap_pars_fragment:PL,lightmap_pars_fragment:LL,lights_lambert_fragment:NL,lights_lambert_pars_fragment:DL,lights_pars_begin:IL,lights_toon_fragment:FL,lights_toon_pars_fragment:kL,lights_phong_fragment:OL,lights_phong_pars_fragment:BL,lights_physical_fragment:zL,lights_physical_pars_fragment:VL,lights_fragment_begin:HL,lights_fragment_maps:GL,lights_fragment_end:WL,lightprobes_pars_fragment:jL,logdepthbuf_fragment:XL,logdepthbuf_pars_fragment:$L,logdepthbuf_pars_vertex:YL,logdepthbuf_vertex:qL,map_fragment:KL,map_pars_fragment:ZL,map_particle_fragment:QL,map_particle_pars_fragment:JL,metalnessmap_fragment:eN,metalnessmap_pars_fragment:tN,morphinstance_vertex:nN,morphcolor_vertex:iN,morphnormal_vertex:rN,morphtarget_pars_vertex:sN,morphtarget_vertex:oN,normal_fragment_begin:aN,normal_fragment_maps:lN,normal_pars_fragment:cN,normal_pars_vertex:uN,normal_vertex:fN,normalmap_pars_fragment:dN,clearcoat_normal_fragment_begin:hN,clearcoat_normal_fragment_maps:pN,clearcoat_pars_fragment:mN,iridescence_pars_fragment:gN,opaque_fragment:vN,packing:xN,premultiplied_alpha_fragment:_N,project_vertex:yN,dithering_fragment:SN,dithering_pars_fragment:MN,roughnessmap_fragment:EN,roughnessmap_pars_fragment:TN,shadowmap_pars_fragment:wN,shadowmap_pars_vertex:AN,shadowmap_vertex:CN,shadowmask_pars_fragment:bN,skinbase_vertex:RN,skinning_pars_vertex:PN,skinning_vertex:LN,skinnormal_vertex:NN,specularmap_fragment:DN,specularmap_pars_fragment:IN,tonemapping_fragment:UN,tonemapping_pars_fragment:FN,transmission_fragment:kN,transmission_pars_fragment:ON,uv_pars_fragment:BN,uv_pars_vertex:zN,uv_vertex:VN,worldpos_vertex:HN,background_vert:GN,background_frag:WN,backgroundCube_vert:jN,backgroundCube_frag:XN,cube_vert:$N,cube_frag:YN,depth_vert:qN,depth_frag:KN,distance_vert:ZN,distance_frag:QN,equirect_vert:JN,equirect_frag:eD,linedashed_vert:tD,linedashed_frag:nD,meshbasic_vert:iD,meshbasic_frag:rD,meshlambert_vert:sD,meshlambert_frag:oD,meshmatcap_vert:aD,meshmatcap_frag:lD,meshnormal_vert:cD,meshnormal_frag:uD,meshphong_vert:fD,meshphong_frag:dD,meshphysical_vert:hD,meshphysical_frag:pD,meshtoon_vert:mD,meshtoon_frag:gD,points_vert:vD,points_frag:xD,shadow_vert:_D,shadow_frag:yD,sprite_vert:SD,sprite_frag:MD},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ei={basic:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:ln([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:ln([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:ln([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:ln([me.common,me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:ln([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ei.physical={uniforms:ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const tc={r:0,b:0,g:0},ED=new Ut,KM=new ke;KM.set(-1,0,0,0,1,0,0,0,1);function TD(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,f=null,d=0,u=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const _=v.backgroundBlurriness>0;y=e.get(y,_)}return y}function m(v){let y=!1;const _=p(v);_===null?g(o,a):_&&_.isColor&&(g(_,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(v,y){const _=p(y);_&&(_.isCubeTexture||_.mapping===zu)?(c===void 0&&(c=new Ii(new al(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Lo(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ED.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(KM),c.material.toneMapped=Xe.getTransfer(_.colorSpace)!==it,(f!==_||d!==_.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ii(new ll(2,2),new hi({name:"BackgroundMaterial",uniforms:Lo(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,d=_.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(tc,$M(t)),n.buffers.color.setClear(tc.r,tc.g,tc.b,y,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:S,dispose:h}}function wD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(b,N,F,z,U){let V=!1;const H=d(b,z,F,N);s!==H&&(s=H,c(s.object)),V=p(b,z,F,U),V&&m(b,z,F,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(b,N,F,z),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function f(b){return t.deleteVertexArray(b)}function d(b,N,F,z){const U=z.wireframe===!0;let V=i[N.id];V===void 0&&(V={},i[N.id]=V);const H=b.isInstancedMesh===!0?b.id:0;let D=V[H];D===void 0&&(D={},V[H]=D);let O=D[F.id];O===void 0&&(O={},D[F.id]=O);let X=O[U];return X===void 0&&(X=u(l()),O[U]=X),X}function u(b){const N=[],F=[],z=[];for(let U=0;U<n;U++)N[U]=0,F[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,N,F,z){const U=s.attributes,V=N.attributes;let H=0;const D=F.getAttributes();for(const O in D)if(D[O].location>=0){const ee=U[O];let re=V[O];if(re===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function m(b,N,F,z){const U={},V=N.attributes;let H=0;const D=F.getAttributes();for(const O in D)if(D[O].location>=0){let ee=V[O];ee===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));const re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),U[O]=re,H++}s.attributes=U,s.attributesNum=H,s.index=z}function S(){const b=s.newAttributes;for(let N=0,F=b.length;N<F;N++)b[N]=0}function g(b){h(b,0)}function h(b,N){const F=s.newAttributes,z=s.enabledAttributes,U=s.attributeDivisors;F[b]=1,z[b]===0&&(t.enableVertexAttribArray(b),z[b]=1),U[b]!==N&&(t.vertexAttribDivisor(b,N),U[b]=N)}function v(){const b=s.newAttributes,N=s.enabledAttributes;for(let F=0,z=N.length;F<z;F++)N[F]!==b[F]&&(t.disableVertexAttribArray(F),N[F]=0)}function y(b,N,F,z,U,V,H){H===!0?t.vertexAttribIPointer(b,N,F,U,V):t.vertexAttribPointer(b,N,F,z,U,V)}function _(b,N,F,z){S();const U=z.attributes,V=F.getAttributes(),H=N.defaultAttributeValues;for(const D in V){const O=V[D];if(O.location>=0){let X=U[D];if(X===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){const ee=X.normalized,re=X.itemSize,Ue=e.get(X);if(Ue===void 0)continue;const je=Ue.buffer,ze=Ue.type,K=Ue.bytesPerElement,se=ze===t.INT||ze===t.UNSIGNED_INT||X.gpuType===ng;if(X.isInterleavedBufferAttribute){const ae=X.data,De=ae.stride,Fe=X.offset;if(ae.isInstancedInterleavedBuffer){for(let Le=0;Le<O.locationSize;Le++)h(O.location+Le,ae.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Le=0;Le<O.locationSize;Le++)g(O.location+Le);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Le=0;Le<O.locationSize;Le++)y(O.location+Le,re/O.locationSize,ze,ee,De*K,(Fe+re/O.locationSize*Le)*K,se)}else{if(X.isInstancedBufferAttribute){for(let ae=0;ae<O.locationSize;ae++)h(O.location+ae,X.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ae=0;ae<O.locationSize;ae++)g(O.location+ae);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ae=0;ae<O.locationSize;ae++)y(O.location+ae,re/O.locationSize,ze,ee,re*K,re/O.locationSize*ae*K,se)}}else if(H!==void 0){const ee=H[D];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(O.location,ee);break;case 3:t.vertexAttrib3fv(O.location,ee);break;case 4:t.vertexAttrib4fv(O.location,ee);break;default:t.vertexAttrib1fv(O.location,ee)}}}}v()}function C(){R();for(const b in i){const N=i[b];for(const F in N){const z=N[F];for(const U in z){const V=z[U];for(const H in V)f(V[H].object),delete V[H];delete z[U]}}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const F in N){const z=N[F];for(const U in z){const V=z[U];for(const H in V)f(V[H].object),delete V[H];delete z[U]}}delete i[b.id]}function P(b){for(const N in i){const F=i[N];for(const z in F){const U=F[z];if(U[b.id]===void 0)continue;const V=U[b.id];for(const H in V)f(V[H].object),delete V[H];delete U[b.id]}}}function x(b){for(const N in i){const F=i[N],z=b.isInstancedMesh===!0?b.id:0,U=F[z];if(U!==void 0){for(const V in U){const H=U[V];for(const D in H)f(H[D].object),delete H[D];delete U[V]}delete F[z],Object.keys(F).length===0&&delete i[N]}}}function R(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function AD(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function CD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==ai&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Hn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wi&&!x)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ie("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:C,samples:A}}function bD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ts,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,y=v*4;let _=h.clippingState||null;l.value=_,_=f(m,u,y,p);for(let C=0;C!==y;++C)_[C]=n[C];h.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,m){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,m!==!0||g===null){const h=p+S*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,_=p;y!==S;++y,_+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const Ar=4,Wx=[.125,.215,.35,.446,.526,.582],is=20,RD=256,ea=new YM,jx=new tt;let fd=null,dd=0,hd=0,pd=!1;const PD=new Y;class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=PD}=s;fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,dd,hd),this._renderer.xr.enabled=pd,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ys||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:tr,format:ai,colorSpace:hu,depthBuffer:!1},r=$x(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$x(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LD(s)),this._blurMaterial=DD(s,e,n),this._ggxMaterial=ND(s,e,n)}return r}_compileMaterial(e){const n=new Ii(new rr,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new ri(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(jx),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new al,new GM({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy(jx),h=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const C=this._cubeSize;Gs(r,_*C,y>2?C:0,C,C),d.setRenderTarget(r),h&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ys||e.mapping===Ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=0+c*1.25,p=d*u,{_lodMax:m}=this,S=this._sizeLods[i],g=3*S*(i>m-Ar?i-m+Ar:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Gs(s,g,h,3*S,2*S),r.setRenderTarget(s),r.render(a,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Gs(e,g,h,3*S,2*S),r.setRenderTarget(e),r.render(a,ea)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),S=s/m,g=isFinite(s)?1+Math.floor(f*S):is;g>is&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);const h=[];let v=0;for(let P=0;P<is;++P){const x=P/S,R=Math.exp(-x*x/2);h.push(R),P===0?v+=R:P<g&&(v+=2*R)}for(let P=0;P<h.length;P++)h[P]=h[P]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const _=this._sizeLods[r],C=3*_*(r>y-Ar?r-y+Ar:0),A=4*(this._cubeSize-_);Gs(n,C,A,3*_,2*_),l.setRenderTarget(n),l.render(d,ea)}}function LD(t){const e=[],n=[],i=[];let r=t;const s=t-Ar+1+Wx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Ar?l=Wx[o-t+Ar-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,m=6,S=3,g=2,h=1,v=new Float32Array(S*m*p),y=new Float32Array(g*m*p),_=new Float32Array(h*m*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,x=A>2?0:-1,R=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];v.set(R,S*m*A),y.set(u,g*m*A);const T=[A,A,A,A,A,A];_.set(T,h*m*A)}const C=new rr;C.setAttribute("position",new Ni(v,S)),C.setAttribute("uv",new Ni(y,g)),C.setAttribute("faceIndex",new Ni(_,h)),i.push(new Ii(C,null)),r>Ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $x(t,e,n){const i=new Li(t,e,n);return i.texture.mapping=zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ND(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function DD(t,e,n){const i=new Float32Array(is),r=new Y(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Yx(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function qx(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}class ZM extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new al(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Yi});s.uniforms.tEquirect.value=n;const o=new Ii(r,s),a=n.minFilter;return n.minFilter===cs&&(n.minFilter=on),new BP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function ID(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Of||p===Bf)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const S=new ZM(m.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===Of||p===Bf,S=p===ys||p===Ro;if(m||S){let g=n.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Xx(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new Xx(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,p){return p===Of?u.mapping=ys:p===Bf&&(u.mapping=Ro),u}function l(u){let p=0;const m=6;for(let S=0;S<m;S++)u[S]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function UD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&go("WebGLRenderer: "+i+" extension not supported."),r}}}function FD(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,m=d.attributes.position;let S=0;if(m===void 0)return;if(p!==null){const v=p.array;S=p.version;for(let y=0,_=v.length;y<_;y+=3){const C=v[y+0],A=v[y+1],P=v[y+2];u.push(C,A,A,P,P,C)}}else{const v=m.array;S=m.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const C=y+0,A=y+1,P=y+2;u.push(C,A,A,P,P,C)}}const g=new(m.count>=65535?HM:VM)(u,1);g.version=S;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function kD(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,d*o,p),n.update(u,i,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let S=0;for(let g=0;g<p;g++)S+=u[g];n.update(S,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function OD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BD(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let R=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),m===!0&&(y=2),S===!0&&(y=3);let _=a.attributes.position.count*y,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*C*4*d),P=new OM(A,_,C,d);P.type=wi,P.needsUpdate=!0;const x=y*4;for(let T=0;T<d;T++){const b=g[T],N=h[T],F=v[T],z=_*C*4*T;for(let U=0;U<b.count;U++){const V=U*x;p===!0&&(r.fromBufferAttribute(b,U),A[z+V+0]=r.x,A[z+V+1]=r.y,A[z+V+2]=r.z,A[z+V+3]=0),m===!0&&(r.fromBufferAttribute(N,U),A[z+V+4]=r.x,A[z+V+5]=r.y,A[z+V+6]=r.z,A[z+V+7]=0),S===!0&&(r.fromBufferAttribute(F,U),A[z+V+8]=r.x,A[z+V+9]=r.y,A[z+V+10]=r.z,A[z+V+11]=F.itemSize===4?r.w:1)}}u={count:d,texture:P,size:new Je(_,C)},i.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function zD(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const VD={[MM]:"LINEAR_TONE_MAPPING",[EM]:"REINHARD_TONE_MAPPING",[TM]:"CINEON_TONE_MAPPING",[wM]:"ACES_FILMIC_TONE_MAPPING",[CM]:"AGX_TONE_MAPPING",[bM]:"NEUTRAL_TONE_MAPPING",[AM]:"CUSTOM_TONE_MAPPING"};function HD(t,e,n,i,r,s){const o=new Li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Po(e,n):void 0}),a=new Li(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),l=new rr;l.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const c=new FP({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ii(l,c),d=new YM(-1,1,1,-1,0,1);let u=null,p=null,m=!1,S,g=null,h=[],v=!1;this.setSize=function(y,_){o.setSize(y,_),a.setSize(y,_);for(let C=0;C<h.length;C++){const A=h[C];A.setSize&&A.setSize(y,_)}},this.setEffects=function(y){h=y,v=h.length>0&&h[0].isRenderPass===!0;const _=o.width,C=o.height;for(let A=0;A<h.length;A++){const P=h[A];P.setSize&&P.setSize(_,C)}},this.begin=function(y,_){if(m||y.toneMapping===Pi&&h.length===0)return!1;if(g=_,_!==null){const C=_.width,A=_.height;(o.width!==C||o.height!==A)&&this.setSize(C,A)}return v===!1&&y.setRenderTarget(o),S=y.toneMapping,y.toneMapping=Pi,!0},this.hasRenderPass=function(){return v},this.end=function(y,_){y.toneMapping=S,m=!0;let C=o,A=a;for(let P=0;P<h.length;P++){const x=h[P];if(x.enabled!==!1&&(x.render(y,A,C,_),x.needsSwap!==!1)){const R=C;C=A,A=R}}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,c.defines={},Xe.getTransfer(u)===it&&(c.defines.SRGB_TRANSFER="");const P=VD[p];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=C.texture,y.setRenderTarget(g),y.render(f,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const QM=new hn,bp=new Po(1,1),JM=new OM,eE=new dP,tE=new jM,Kx=[],Zx=[],Qx=new Float32Array(16),Jx=new Float32Array(9),e_=new Float32Array(4);function Bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kx[r];if(s===void 0&&(s=new Float32Array(r),Kx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gu(t,e){let n=Zx[e];n===void 0&&(n=new Int32Array(e),Zx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function jD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function XD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function $D(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;e_.set(i),t.uniformMatrix2fv(this.addr,!1,e_),Vt(n,i)}}function YD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Jx.set(i),t.uniformMatrix3fv(this.addr,!1,Jx),Vt(n,i)}}function qD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Qx.set(i),t.uniformMatrix4fv(this.addr,!1,Qx),Vt(n,i)}}function KD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function QD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function JD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function eI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function nI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function iI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function rI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bp.compareFunction=n.isReversedDepthBuffer()?cg:lg,s=bp):s=QM,n.setTexture2D(e||s,r)}function sI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||eE,r)}function oI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tE,r)}function aI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||JM,r)}function lI(t){switch(t){case 5126:return GD;case 35664:return WD;case 35665:return jD;case 35666:return XD;case 35674:return $D;case 35675:return YD;case 35676:return qD;case 5124:case 35670:return KD;case 35667:case 35671:return ZD;case 35668:case 35672:return QD;case 35669:case 35673:return JD;case 5125:return eI;case 36294:return tI;case 36295:return nI;case 36296:return iI;case 35678:case 36198:case 36298:case 36306:case 35682:return rI;case 35679:case 36299:case 36307:return sI;case 35680:case 36300:case 36308:case 36293:return oI;case 36289:case 36303:case 36311:case 36292:return aI}}function cI(t,e){t.uniform1fv(this.addr,e)}function uI(t,e){const n=Bo(e,this.size,2);t.uniform2fv(this.addr,n)}function fI(t,e){const n=Bo(e,this.size,3);t.uniform3fv(this.addr,n)}function dI(t,e){const n=Bo(e,this.size,4);t.uniform4fv(this.addr,n)}function hI(t,e){const n=Bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pI(t,e){const n=Bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mI(t,e){const n=Bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gI(t,e){t.uniform1iv(this.addr,e)}function vI(t,e){t.uniform2iv(this.addr,e)}function xI(t,e){t.uniform3iv(this.addr,e)}function _I(t,e){t.uniform4iv(this.addr,e)}function yI(t,e){t.uniform1uiv(this.addr,e)}function SI(t,e){t.uniform2uiv(this.addr,e)}function MI(t,e){t.uniform3uiv(this.addr,e)}function EI(t,e){t.uniform4uiv(this.addr,e)}function TI(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=bp:o=QM;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function wI(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||eE,s[o])}function AI(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||tE,s[o])}function CI(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||JM,s[o])}function bI(t){switch(t){case 5126:return cI;case 35664:return uI;case 35665:return fI;case 35666:return dI;case 35674:return hI;case 35675:return pI;case 35676:return mI;case 5124:case 35670:return gI;case 35667:case 35671:return vI;case 35668:case 35672:return xI;case 35669:case 35673:return _I;case 5125:return yI;case 36294:return SI;case 36295:return MI;case 36296:return EI;case 35678:case 36198:case 36298:case 36306:case 35682:return TI;case 35679:case 36299:case 36307:return wI;case 35680:case 36300:case 36308:case 36293:return AI;case 36289:case 36303:case 36311:case 36292:return CI}}class RI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lI(n.type)}}class PI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bI(n.type)}}class LI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const md=/(\w+)(\])?(\[|\.)?/g;function t_(t,e){t.seq.push(e),t.map[e.id]=e}function NI(t,e,n){const i=t.name,r=i.length;for(md.lastIndex=0;;){const s=md.exec(i),o=md.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){t_(n,c===void 0?new RI(a,t,e):new PI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new LI(a),t_(n,d)),n=d}}}class bc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);NI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function n_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DI=37297;let II=0;function UI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const i_=new ke;function FI(t){Xe._getMatrix(i_,Xe.workingColorSpace,t);const e=`mat3( ${i_.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case pu:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function r_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+UI(t.getShaderSource(e),a)}else return s}function kI(t,e){const n=FI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const OI={[MM]:"Linear",[EM]:"Reinhard",[TM]:"Cineon",[wM]:"ACESFilmic",[CM]:"AgX",[bM]:"Neutral",[AM]:"Custom"};function BI(t,e){const n=OI[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nc=new Y;function zI(){Xe.getLuminanceCoefficients(nc);const t=nc.x.toFixed(4),e=nc.y.toFixed(4),n=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function HI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ua(t){return t!==""}function s_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rp(t){return t.replace(WI,XI)}const jI=new Map;function XI(t,e){let n=Ve[e];if(n===void 0){const i=jI.get(e);if(i!==void 0)n=Ve[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rp(n)}const $I=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(t){return t.replace($I,YI)}function YI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const qI={[Ec]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function KI(t){return qI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZI={[ys]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[zu]:"ENVMAP_TYPE_CUBE_UV"};function QI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ZI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const JI={[Ro]:"ENVMAP_MODE_REFRACTION"};function eU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":JI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tU={[SM]:"ENVMAP_BLENDING_MULTIPLY",[j3]:"ENVMAP_BLENDING_MIX",[X3]:"ENVMAP_BLENDING_ADD"};function nU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":tU[t.combine]||"ENVMAP_BLENDING_NONE"}function iU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rU(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=KI(n),c=QI(n),f=eU(n),d=nU(n),u=iU(n),p=VI(n),m=HI(s),S=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),h.length>0&&(h+=`
`)):(g=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),h=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Pi?BI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,kI("linearToOutputTexel",n.outputColorSpace),zI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),o=Rp(o),o=s_(o,n),o=o_(o,n),a=Rp(a),a=s_(a,n),a=o_(a,n),o=a_(o),a=a_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Mx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+g+o,_=v+h+a,C=n_(r,r.VERTEX_SHADER,y),A=n_(r,r.FRAGMENT_SHADER,_);r.attachShader(S,C),r.attachShader(S,A),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(b){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(S)||"",F=r.getShaderInfoLog(C)||"",z=r.getShaderInfoLog(A)||"",U=N.trim(),V=F.trim(),H=z.trim();let D=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,A);else{const X=r_(r,C,"vertex"),ee=r_(r,A,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+X+`
`+ee)}else U!==""?Ie("WebGLProgram: Program Info Log:",U):(V===""||H==="")&&(O=!1);O&&(b.diagnostics={runnable:D,programLog:U,vertexShader:{log:V,prefix:g},fragmentShader:{log:H,prefix:h}})}r.deleteShader(C),r.deleteShader(A),x=new bc(r,S),R=GI(r,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(S,DI)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=II++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=A,this}let sU=0;class oU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aU(e),n.set(e,i)),i}}class aU{constructor(e){this.id=sU++,this.code=e,this.usedTimes=0}}function lU(t){return t===Ss||t===fu||t===du}function cU(t,e,n,i,r,s){const o=new BM,a=new oU,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,R,T,b,N,F){const z=b.fog,U=N.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||V,H),O=D&&D.mapping===zu?D.image.height:null,X=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ee=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,re=ee!==void 0?ee.length:0;let Ue=0;U.morphAttributes.position!==void 0&&(Ue=1),U.morphAttributes.normal!==void 0&&(Ue=2),U.morphAttributes.color!==void 0&&(Ue=3);let je,ze,K,se;if(X){const Ee=Ei[X];je=Ee.vertexShader,ze=Ee.fragmentShader}else{je=x.vertexShader,ze=x.fragmentShader;const Ee=a.getVertexShaderStage(x),St=a.getFragmentShaderStage(x);a.update(x,Ee,St),K=Ee.id,se=St.id}const ae=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,At=!!x.map,We=!!x.matcap,ot=!!D,et=!!x.aoMap,Ye=!!x.lightMap,Pt=!!x.bumpMap&&x.wireframe===!1,Ft=!!x.normalMap,Ht=!!x.displacementMap,$t=!!x.emissiveMap,yt=!!x.metalnessMap,Lt=!!x.roughnessMap,k=x.anisotropy>0,gn=x.clearcoat>0,nt=x.dispersion>0,L=x.iridescence>0,M=x.sheen>0,G=x.transmission>0,$=k&&!!x.anisotropyMap,Z=gn&&!!x.clearcoatMap,le=gn&&!!x.clearcoatNormalMap,ue=gn&&!!x.clearcoatRoughnessMap,J=L&&!!x.iridescenceMap,ne=L&&!!x.iridescenceThicknessMap,fe=M&&!!x.sheenColorMap,Ce=M&&!!x.sheenRoughnessMap,pe=!!x.specularMap,de=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Ne=G&&!!x.transmissionMap,Oe=G&&!!x.thicknessMap,I=!!x.gradientMap,ce=!!x.alphaMap,te=x.alphaTest>0,he=!!x.alphaHash,xe=!!x.extensions;let ie=Pi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ie=t.toneMapping);const Ae={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:ze,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:We,envMap:ot,envMapMode:ot&&D.mapping,envMapCubeUVHeight:O,aoMap:et,lightMap:Ye,bumpMap:Pt,normalMap:Ft,displacementMap:Ht,emissiveMap:$t,normalMapObjectSpace:Ft&&x.normalMapType===q3,normalMapTangentSpace:Ft&&x.normalMapType===_x,packedNormalMap:Ft&&x.normalMapType===_x&&lU(x.normalMap.format),metalnessMap:yt,roughnessMap:Lt,anisotropy:k,anisotropyMap:$,clearcoat:gn,clearcoatMap:Z,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,dispersion:nt,iridescence:L,iridescenceMap:J,iridescenceThicknessMap:ne,sheen:M,sheenColorMap:fe,sheenRoughnessMap:Ce,specularMap:pe,specularColorMap:de,specularIntensityMap:Pe,transmission:G,transmissionMap:Ne,thicknessMap:Oe,gradientMap:I,opaque:x.transparent===!1&&x.blending===mo&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:te,alphaHash:he,combine:x.combine,mapUv:At&&m(x.map.channel),aoMapUv:et&&m(x.aoMap.channel),lightMapUv:Ye&&m(x.lightMap.channel),bumpMapUv:Pt&&m(x.bumpMap.channel),normalMapUv:Ft&&m(x.normalMap.channel),displacementMapUv:Ht&&m(x.displacementMap.channel),emissiveMapUv:$t&&m(x.emissiveMap.channel),metalnessMapUv:yt&&m(x.metalnessMap.channel),roughnessMapUv:Lt&&m(x.roughnessMap.channel),anisotropyMapUv:$&&m(x.anisotropyMap.channel),clearcoatMapUv:Z&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(x.sheenRoughnessMap.channel),specularMapUv:pe&&m(x.specularMap.channel),specularColorMapUv:de&&m(x.specularColorMap.channel),specularIntensityMapUv:Pe&&m(x.specularIntensityMap.channel),transmissionMapUv:Ne&&m(x.transmissionMap.channel),thicknessMapUv:Oe&&m(x.thicknessMap.channel),alphaMapUv:ce&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ft||k),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(At||ce),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&Ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ue,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:$t&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function g(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const T in x.defines)R.push(T),R.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(h(R,x),v(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function h(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function v(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const R=p[x.type];let T;if(R){const b=Ei[R];T=DP.clone(b.uniforms)}else T=x.uniforms;return T}function _(x,R){let T=f.get(R);return T!==void 0?++T.usedTimes:(T=new rU(t,R,x,r),c.push(T),f.set(R,T)),T}function C(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function P(){a.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:y,acquireProgram:_,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:P}}function uU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function c_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function u_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,S,g,h){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:h},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=m,v.materialVariant=o(u),v.groupOrder=S,v.renderOrder=u.renderOrder,v.z=g,v.group=h),e++,v}function l(u,p,m,S,g,h){const v=a(u,p,m,S,g,h);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):n.push(v)}function c(u,p,m,S,g,h){const v=a(u,p,m,S,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function f(u,p,m){n.length>1&&n.sort(u||fU),i.length>1&&i.sort(p||c_),r.length>1&&r.sort(p||c_),m&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function dU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new u_,t.set(i,[o])):r>=s.length?(o=new u_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new tt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function pU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mU=0;function gU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vU(t){const e=new hU,n=pU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Ut,o=new Ut;function a(c){let f=0,d=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,m=0,S=0,g=0,h=0,v=0,y=0,_=0,C=0,A=0,P=0;c.sort(gU);for(let R=0,T=c.length;R<T;R++){const b=c[R],N=b.color,F=b.intensity,z=b.distance;let U=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Ss?U=b.shadow.map.texture:U=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)f+=N.r*F,d+=N.g*F,u+=N.b*F;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],F);P++}else if(b.isDirectionalLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,D=n.get(b);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=b.shadow.matrix,v++}i.directional[p]=V,p++}else if(b.isSpotLight){const V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(N).multiplyScalar(F),V.distance=z,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[S]=V;const H=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,H.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[S]=H.matrix,b.castShadow){const D=n.get(b);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,i.spotShadow[S]=D,i.spotShadowMap[S]=U,_++}S++}else if(b.isRectAreaLight){const V=e.get(b);V.color.copy(N).multiplyScalar(F),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=V,g++}else if(b.isPointLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const H=b.shadow,D=n.get(b);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=b.shadow.matrix,y++}i.point[m]=V,m++}else if(b.isHemisphereLight){const V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(F),V.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[h]=V,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==m||x.spotLength!==S||x.rectAreaLength!==g||x.hemiLength!==h||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==_||x.numSpotMaps!==C||x.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,x.directionalLength=p,x.pointLength=m,x.spotLength=S,x.rectAreaLength=g,x.hemiLength=h,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=_,x.numSpotMaps=C,x.numLightProbes=P,i.version=mU++)}function l(c,f){let d=0,u=0,p=0,m=0,S=0;const g=f.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const _=i.hemi[S];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function f_(t){const e=new vU(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function xU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new f_(t),e.set(r,[a])):s>=o.length?(a=new f_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const _U=`void main() {
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
}`,SU=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],MU=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],d_=new Ut,ta=new Y,gd=new Y;function EU(t,e,n){let i=new WM;const r=new Je,s=new Je,o=new wt,a=new kP,l=new OP,c={},f=n.maxTextureSize,d={[Br]:Tn,[Tn]:Br,[Gi]:Gi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:_U,fragmentShader:yU}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new rr;m.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ii(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let h=this.type;this.render=function(A,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===A3&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ec);const R=t.getRenderTarget(),T=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Yi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=h!==this.type;F&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(U=>U.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,U=A.length;z<U;z++){const V=A[z],H=V.shadow;if(H===void 0){Ie("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const D=H.getFrameExtents();r.multiply(D),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,H.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=O,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ca){if(V.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Li(r.x,r.y,{format:Ss,type:tr,minFilter:on,magFilter:on,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Po(r.x,r.y,wi),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=nr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt}else V.isPointLight?(H.map=new ZM(r.x),H.map.depthTexture=new LP(r.x,Di)):(H.map=new Li(r.x,r.y),H.map.depthTexture=new Po(r.x,r.y,Di)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=nr,this.type===Ec?(H.map.depthTexture.compareFunction=O?cg:lg,H.map.depthTexture.minFilter=on,H.map.depthTexture.magFilter=on):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt);H.camera.updateProjectionMatrix()}const X=H.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<X;ee++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(H.map),t.clear());const re=H.getViewport(ee);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),N.viewport(o)}if(V.isPointLight){const re=H.camera,Ue=H.matrix,je=V.distance||re.far;je!==re.far&&(re.far=je,re.updateProjectionMatrix()),ta.setFromMatrixPosition(V.matrixWorld),re.position.copy(ta),gd.copy(re.position),gd.add(SU[ee]),re.up.copy(MU[ee]),re.lookAt(gd),re.updateMatrixWorld(),Ue.makeTranslation(-ta.x,-ta.y,-ta.z),d_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),H._frustum.setFromProjectionMatrix(d_,re.coordinateSystem,re.reversedDepth)}else H.updateMatrices(V);i=H.getFrustum(),_(P,x,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===ca&&v(H,x),H.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(R,T,b)};function v(A,P){const x=e.update(S);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(r.x,r.y,{format:Ss,type:tr})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(P,null,x,u,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(P,null,x,p,S,null)}function y(A,P,x,R){let T=null;const b=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)T=b;else if(T=x.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=T.uuid,F=P.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let U=z[F];U===void 0&&(U=T.clone(),z[F]=U,P.addEventListener("dispose",C)),T=U}if(T.visible=P.visible,T.wireframe=P.wireframe,R===ca?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:d[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=t.properties.get(T);N.light=x}return T}function _(A,P,x,R,T){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===ca)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const F=e.update(A),z=A.material;if(Array.isArray(z)){const U=F.groups;for(let V=0,H=U.length;V<H;V++){const D=U[V],O=z[D.materialIndex];if(O&&O.visible){const X=y(A,O,R,T);A.onBeforeShadow(t,A,P,x,F,X,D),t.renderBufferDirect(x,null,F,X,A,D),A.onAfterShadow(t,A,P,x,F,X,D)}}}else if(z.visible){const U=y(A,z,R,T);A.onBeforeShadow(t,A,P,x,F,U,null),t.renderBufferDirect(x,null,F,U,A,null),A.onAfterShadow(t,A,P,x,F,U,null)}}const N=A.children;for(let F=0,z=N.length;F<z;F++)_(N[F],P,x,R,T)}function C(A){A.target.removeEventListener("dispose",C);for(const x in c){const R=c[x],T=A.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function TU(t,e){function n(){let I=!1;const ce=new wt;let te=null;const he=new wt(0,0,0,0);return{setMask:function(xe){te!==xe&&!I&&(t.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){I=xe},setClear:function(xe,ie,Ae,Ee,St){St===!0&&(xe*=Ee,ie*=Ee,Ae*=Ee),ce.set(xe,ie,Ae,Ee),he.equals(ce)===!1&&(t.clearColor(xe,ie,Ae,Ee),he.copy(ce))},reset:function(){I=!1,te=null,he.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,te=null,he=null,xe=null;return{setReversed:function(ie){if(ce!==ie){const Ae=e.get("EXT_clip_control");ie?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const Ee=xe;xe=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(ie){ie?ae(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ie){te!==ie&&!I&&(t.depthMask(ie),te=ie)},setFunc:function(ie){if(ce&&(ie=sP[ie]),he!==ie){switch(ie){case Hh:t.depthFunc(t.NEVER);break;case Gh:t.depthFunc(t.ALWAYS);break;case Wh:t.depthFunc(t.LESS);break;case bo:t.depthFunc(t.LEQUAL);break;case jh:t.depthFunc(t.EQUAL);break;case Xh:t.depthFunc(t.GEQUAL);break;case $h:t.depthFunc(t.GREATER);break;case Yh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){I=ie},setClear:function(ie){xe!==ie&&(xe=ie,ce&&(ie=1-ie),t.clearDepth(ie))},reset:function(){I=!1,te=null,he=null,xe=null,ce=!1}}}function r(){let I=!1,ce=null,te=null,he=null,xe=null,ie=null,Ae=null,Ee=null,St=null;return{setTest:function(ft){I||(ft?ae(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(ft){ce!==ft&&!I&&(t.stencilMask(ft),ce=ft)},setFunc:function(ft,pi,mi){(te!==ft||he!==pi||xe!==mi)&&(t.stencilFunc(ft,pi,mi),te=ft,he=pi,xe=mi)},setOp:function(ft,pi,mi){(ie!==ft||Ae!==pi||Ee!==mi)&&(t.stencilOp(ft,pi,mi),ie=ft,Ae=pi,Ee=mi)},setLocked:function(ft){I=ft},setClear:function(ft){St!==ft&&(t.clearStencil(ft),St=ft)},reset:function(){I=!1,ce=null,te=null,he=null,xe=null,ie=null,Ae=null,Ee=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},p=new WeakMap,m=[],S=null,g=!1,h=null,v=null,y=null,_=null,C=null,A=null,P=null,x=new tt(0,0,0),R=0,T=!1,b=null,N=null,F=null,z=null,U=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,D=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=D>=1):O.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=D>=2);let X=null,ee={};const re=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),je=new wt().fromArray(re),ze=new wt().fromArray(Ue);function K(I,ce,te,he){const xe=new Uint8Array(4),ie=t.createTexture();t.bindTexture(I,ie),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<te;Ae++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ce+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ie}const se={};se[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(bo),Pt(!1),Ft(mx),ae(t.CULL_FACE),et(Yi);function ae(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function De(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Fe(I,ce){return u[I]!==ce?(t.bindFramebuffer(I,ce),u[I]=ce,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Le(I,ce){let te=m,he=!1;if(I){te=p.get(ce),te===void 0&&(te=[],p.set(ce,te));const xe=I.textures;if(te.length!==xe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ae=xe.length;ie<Ae;ie++)te[ie]=t.COLOR_ATTACHMENT0+ie;te.length=xe.length,he=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,he=!0);he&&t.drawBuffers(te)}function At(I){return S!==I?(t.useProgram(I),S=I,!0):!1}const We={[ns]:t.FUNC_ADD,[b3]:t.FUNC_SUBTRACT,[R3]:t.FUNC_REVERSE_SUBTRACT};We[P3]=t.MIN,We[L3]=t.MAX;const ot={[N3]:t.ZERO,[D3]:t.ONE,[I3]:t.SRC_COLOR,[zh]:t.SRC_ALPHA,[z3]:t.SRC_ALPHA_SATURATE,[O3]:t.DST_COLOR,[F3]:t.DST_ALPHA,[U3]:t.ONE_MINUS_SRC_COLOR,[Vh]:t.ONE_MINUS_SRC_ALPHA,[B3]:t.ONE_MINUS_DST_COLOR,[k3]:t.ONE_MINUS_DST_ALPHA,[V3]:t.CONSTANT_COLOR,[H3]:t.ONE_MINUS_CONSTANT_COLOR,[G3]:t.CONSTANT_ALPHA,[W3]:t.ONE_MINUS_CONSTANT_ALPHA};function et(I,ce,te,he,xe,ie,Ae,Ee,St,ft){if(I===Yi){g===!0&&(De(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),I!==C3){if(I!==h||ft!==T){if((v!==ns||C!==ns)&&(t.blendEquation(t.FUNC_ADD),v=ns,C=ns),ft)switch(I){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gx:t.blendFunc(t.ONE,t.ONE);break;case vx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",I);break}else switch(I){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case vx:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xx:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",I);break}y=null,_=null,A=null,P=null,x.set(0,0,0),R=0,h=I,T=ft}return}xe=xe||ce,ie=ie||te,Ae=Ae||he,(ce!==v||xe!==C)&&(t.blendEquationSeparate(We[ce],We[xe]),v=ce,C=xe),(te!==y||he!==_||ie!==A||Ae!==P)&&(t.blendFuncSeparate(ot[te],ot[he],ot[ie],ot[Ae]),y=te,_=he,A=ie,P=Ae),(Ee.equals(x)===!1||St!==R)&&(t.blendColor(Ee.r,Ee.g,Ee.b,St),x.copy(Ee),R=St),h=I,T=!1}function Ye(I,ce){I.side===Gi?De(t.CULL_FACE):ae(t.CULL_FACE);let te=I.side===Tn;ce&&(te=!te),Pt(te),I.blending===mo&&I.transparent===!1?et(Yi):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;a.setTest(he),he&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(I){b!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),b=I)}function Ft(I){I!==T3?(ae(t.CULL_FACE),I!==N&&(I===mx?t.cullFace(t.BACK):I===w3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),N=I}function Ht(I){I!==F&&(H&&t.lineWidth(I),F=I)}function $t(I,ce,te){I?(ae(t.POLYGON_OFFSET_FILL),(z!==ce||U!==te)&&(z=ce,U=te,o.getReversed()&&(ce=-ce),t.polygonOffset(ce,te))):De(t.POLYGON_OFFSET_FILL)}function yt(I){I?ae(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function Lt(I){I===void 0&&(I=t.TEXTURE0+V-1),X!==I&&(t.activeTexture(I),X=I)}function k(I,ce,te){te===void 0&&(X===null?te=t.TEXTURE0+V-1:te=X);let he=ee[te];he===void 0&&(he={type:void 0,texture:void 0},ee[te]=he),(he.type!==I||he.texture!==ce)&&(X!==te&&(t.activeTexture(te),X=te),t.bindTexture(I,ce||se[I]),he.type=I,he.texture=ce)}function gn(){const I=ee[X];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function M(){try{t.texSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function G(){try{t.texSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function le(){try{t.texStorage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function ue(){try{t.texStorage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function J(){try{t.texImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function ne(){try{t.texImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function fe(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function Ce(I,ce){d[I]!==ce&&(t.pixelStorei(I,ce),d[I]=ce)}function pe(I){je.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),je.copy(I))}function de(I){ze.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function Pe(I,ce){let te=c.get(ce);te===void 0&&(te=new WeakMap,c.set(ce,te));let he=te.get(I);he===void 0&&(he=t.getUniformBlockIndex(ce,I.name),te.set(I,he))}function Ne(I,ce){const he=c.get(ce).get(I);l.get(ce)!==he&&(t.uniformBlockBinding(ce,he,I.__bindingPointIndex),l.set(ce,he))}function Oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},X=null,ee={},u={},p=new WeakMap,m=[],S=null,g=!1,h=null,v=null,y=null,_=null,C=null,A=null,P=null,x=new tt(0,0,0),R=0,T=!1,b=null,N=null,F=null,z=null,U=null,je.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:De,bindFramebuffer:Fe,drawBuffers:Le,useProgram:At,setBlending:et,setMaterial:Ye,setFlipSided:Pt,setCullFace:Ft,setLineWidth:Ht,setPolygonOffset:$t,setScissorTest:yt,activeTexture:Lt,bindTexture:k,unbindTexture:gn,compressedTexImage2D:nt,compressedTexImage3D:L,texImage2D:J,texImage3D:ne,pixelStorei:Ce,getParameter:fe,updateUBOMapping:Pe,uniformBlockBinding:Ne,texStorage2D:le,texStorage3D:ue,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:$,compressedTexSubImage3D:Z,scissor:pe,viewport:de,reset:Oe}}function wU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap,d=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,M){return m?new OffscreenCanvas(L,M):gu("canvas")}function g(L,M,G){let $=1;const Z=nt(L);if((Z.width>G||Z.height>G)&&($=G/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor($*Z.width),ue=Math.floor($*Z.height);u===void 0&&(u=S(le,ue));const J=M?S(le,ue):u;return J.width=le,J.height=ue,J.getContext("2d").drawImage(L,0,0,le,ue),Ie("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+le+"x"+ue+")."),J}else return"data"in L&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function h(L){return L.generateMipmaps}function v(L){t.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(L,M,G,$,Z,le=!1){if(L!==null){if(t[L]!==void 0)return t[L];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue;$&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===t.RED&&(G===t.FLOAT&&(J=t.R32F),G===t.HALF_FLOAT&&(J=t.R16F),G===t.UNSIGNED_BYTE&&(J=t.R8),G===t.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),G===t.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.R8UI),G===t.UNSIGNED_SHORT&&(J=t.R16UI),G===t.UNSIGNED_INT&&(J=t.R32UI),G===t.BYTE&&(J=t.R8I),G===t.SHORT&&(J=t.R16I),G===t.INT&&(J=t.R32I)),M===t.RG&&(G===t.FLOAT&&(J=t.RG32F),G===t.HALF_FLOAT&&(J=t.RG16F),G===t.UNSIGNED_BYTE&&(J=t.RG8),G===t.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),G===t.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RG8UI),G===t.UNSIGNED_SHORT&&(J=t.RG16UI),G===t.UNSIGNED_INT&&(J=t.RG32UI),G===t.BYTE&&(J=t.RG8I),G===t.SHORT&&(J=t.RG16I),G===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGB8UI),G===t.UNSIGNED_SHORT&&(J=t.RGB16UI),G===t.UNSIGNED_INT&&(J=t.RGB32UI),G===t.BYTE&&(J=t.RGB8I),G===t.SHORT&&(J=t.RGB16I),G===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),G===t.UNSIGNED_INT&&(J=t.RGBA32UI),G===t.BYTE&&(J=t.RGBA8I),G===t.SHORT&&(J=t.RGBA16I),G===t.INT&&(J=t.RGBA32I)),M===t.RGB&&(G===t.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),G===t.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),M===t.RGBA){const ne=le?pu:Xe.getTransfer(Z);G===t.FLOAT&&(J=t.RGBA32F),G===t.HALF_FLOAT&&(J=t.RGBA16F),G===t.UNSIGNED_BYTE&&(J=ne===it?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),G===t.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(L,M){let G;return L?M===null||M===Di||M===Ya?G=t.DEPTH24_STENCIL8:M===wi?G=t.DEPTH32F_STENCIL8:M===$a&&(G=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===Ya?G=t.DEPTH_COMPONENT24:M===wi?G=t.DEPTH_COMPONENT32F:M===$a&&(G=t.DEPTH_COMPONENT16),G}function A(L,M){return h(L)===!0||L.isFramebufferTexture&&L.minFilter!==Kt&&L.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function P(L){const M=L.target;M.removeEventListener("dispose",P),R(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&d.delete(M)}function x(L){const M=L.target;M.removeEventListener("dispose",x),b(M)}function R(L){const M=i.get(L);if(M.__webglInit===void 0)return;const G=L.source,$=p.get(G);if($){const Z=$[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(L),Object.keys($).length===0&&p.delete(G)}i.remove(L)}function T(L){const M=i.get(L);t.deleteTexture(M.__webglTexture);const G=L.source,$=p.get(G);delete $[M.__cacheKey],o.memory.textures--}function b(L){const M=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Z=0;Z<M.__webglFramebuffer[$].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[$][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=L.textures;for(let $=0,Z=G.length;$<Z;$++){const le=i.get(G[$]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(G[$])}i.remove(L)}let N=0;function F(){N=0}function z(){return N}function U(L){N=L}function V(){const L=N;return L>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),N+=1,L}function H(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function D(L,M){const G=i.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const $=L.image;if($===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{De(G,L,M);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function O(L,M){const G=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){De(G,L,M);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function X(L,M){const G=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){De(G,L,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function ee(L,M){const G=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){Fe(G,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const re={[qh]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[Kh]:t.MIRRORED_REPEAT},Ue={[Kt]:t.NEAREST,[$3]:t.NEAREST_MIPMAP_NEAREST,[Il]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[zf]:t.LINEAR_MIPMAP_NEAREST,[cs]:t.LINEAR_MIPMAP_LINEAR},je={[K3]:t.NEVER,[tP]:t.ALWAYS,[Z3]:t.LESS,[lg]:t.LEQUAL,[Q3]:t.EQUAL,[cg]:t.GEQUAL,[J3]:t.GREATER,[eP]:t.NOTEQUAL};function ze(L,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===zf||M.magFilter===Il||M.magFilter===cs||M.minFilter===on||M.minFilter===zf||M.minFilter===Il||M.minFilter===cs)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,re[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,re[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,re[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,Ue[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,Ue[M.minFilter]),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==Il&&M.minFilter!==cs||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(L,M){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",P));const $=M.source;let Z=p.get($);Z===void 0&&(Z={},p.set($,Z));const le=H(M);if(le!==L.__cacheKey){Z[le]===void 0&&(Z[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Z[le].usedTimes++;const ue=Z[L.__cacheKey];ue!==void 0&&(Z[L.__cacheKey].usedTimes--,ue.usedTimes===0&&T(M)),L.__cacheKey=le,L.__webglTexture=Z[le].texture}return G}function se(L,M,G){return Math.floor(Math.floor(L/G)/M)}function ae(L,M,G,$){const le=L.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,G,$,M.data);else{le.sort((Ce,pe)=>Ce.start-pe.start);let ue=0;for(let Ce=1;Ce<le.length;Ce++){const pe=le[ue],de=le[Ce],Pe=pe.start+pe.count,Ne=se(de.start,M.width,4),Oe=se(pe.start,M.width,4);de.start<=Pe+1&&Ne===Oe&&se(de.start+de.count-1,M.width,4)===Ne?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ue,le[ue]=de)}le.length=ue+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Ce=0,pe=le.length;Ce<pe;Ce++){const de=le[Ce],Pe=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Oe=Pe%M.width,I=Math.floor(Pe/M.width),ce=Ne,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Oe,I,ce,te,G,$,M.data)}L.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function De(L,M,G){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const Z=K(L,M),le=M.source;n.bindTexture($,L.__webglTexture,t.TEXTURE0+G);const ue=i.get(le);if(le.version!==ue.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const te=Xe.getPrimaries(Xe.workingColorSpace),he=M.colorSpace===Mr?null:Xe.getPrimaries(M.colorSpace),xe=M.colorSpace===Mr||te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=g(M.image,!1,r.maxTextureSize);ne=gn(M,ne);const fe=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type);let pe=_(M.internalFormat,fe,Ce,M.normalized,M.colorSpace,M.isVideoTexture);ze($,M);let de;const Pe=M.mipmaps,Ne=M.isVideoTexture!==!0,Oe=ue.__version===void 0||Z===!0,I=le.dataReady,ce=A(M,ne);if(M.isDepthTexture)pe=C(M.format===us,M.type),Oe&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,pe,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,pe,ne.width,ne.height,0,fe,Ce,null));else if(M.isDataTexture)if(Pe.length>0){Ne&&Oe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Pe[0].width,Pe[0].height);for(let te=0,he=Pe.length;te<he;te++)de=Pe[te],Ne?I&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,fe,Ce,de.data):n.texImage2D(t.TEXTURE_2D,te,pe,de.width,de.height,0,fe,Ce,de.data);M.generateMipmaps=!1}else Ne?(Oe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,ne.width,ne.height),I&&ae(M,ne,fe,Ce)):n.texImage2D(t.TEXTURE_2D,0,pe,ne.width,ne.height,0,fe,Ce,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,Pe[0].width,Pe[0].height,ne.depth);for(let te=0,he=Pe.length;te<he;te++)if(de=Pe[te],M.format!==ai)if(fe!==null)if(Ne){if(I)if(M.layerUpdates.size>0){const xe=Gx(de.width,de.height,M.format,M.type);for(const ie of M.layerUpdates){const Ae=de.data.subarray(ie*xe/de.data.BYTES_PER_ELEMENT,(ie+1)*xe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ie,de.width,de.height,1,fe,Ae)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,fe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,pe,de.width,de.height,ne.depth,0,de.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,fe,Ce,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,pe,de.width,de.height,ne.depth,0,fe,Ce,de.data)}else{Ne&&Oe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Pe[0].width,Pe[0].height);for(let te=0,he=Pe.length;te<he;te++)de=Pe[te],M.format!==ai?fe!==null?Ne?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,fe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,te,pe,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,fe,Ce,de.data):n.texImage2D(t.TEXTURE_2D,te,pe,de.width,de.height,0,fe,Ce,de.data)}else if(M.isDataArrayTexture)if(Ne){if(Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,ne.width,ne.height,ne.depth),I)if(M.layerUpdates.size>0){const te=Gx(ne.width,ne.height,M.format,M.type);for(const he of M.layerUpdates){const xe=ne.data.subarray(he*te/ne.data.BYTES_PER_ELEMENT,(he+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ne.width,ne.height,1,fe,Ce,xe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ce,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ne.width,ne.height,ne.depth,0,fe,Ce,ne.data);else if(M.isData3DTexture)Ne?(Oe&&n.texStorage3D(t.TEXTURE_3D,ce,pe,ne.width,ne.height,ne.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ce,ne.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ne.width,ne.height,ne.depth,0,fe,Ce,ne.data);else if(M.isFramebufferTexture){if(Oe)if(Ne)n.texStorage2D(t.TEXTURE_2D,ce,pe,ne.width,ne.height);else{let te=ne.width,he=ne.height;for(let xe=0;xe<ce;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,te,he,0,fe,Ce,null),te>>=1,he>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(M),te.onpaint=he=>{const xe=he.changedElements;for(const ie of d)xe.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const xe=t.RGBA,ie=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ie,Ae,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ne&&Oe){const te=nt(Pe[0]);n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height)}for(let te=0,he=Pe.length;te<he;te++)de=Pe[te],Ne?I&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,fe,Ce,de):n.texImage2D(t.TEXTURE_2D,te,pe,fe,Ce,de);M.generateMipmaps=!1}else if(Ne){if(Oe){const te=nt(ne);n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ce,ne)}else n.texImage2D(t.TEXTURE_2D,0,pe,fe,Ce,ne);h(M)&&v($),ue.__version=le.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Fe(L,M,G){if(M.image.length!==6)return;const $=K(L,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+G);const le=i.get(Z);if(Z.version!==le.__version||$===!0){n.activeTexture(t.TEXTURE0+G);const ue=Xe.getPrimaries(Xe.workingColorSpace),J=M.colorSpace===Mr?null:Xe.getPrimaries(M.colorSpace),ne=M.colorSpace===Mr||ue===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const fe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ce=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!fe&&!Ce?pe[ie]=g(M.image[ie],!0,r.maxCubemapSize):pe[ie]=Ce?M.image[ie].image:M.image[ie],pe[ie]=gn(M,pe[ie]);const de=pe[0],Pe=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),Oe=_(M.internalFormat,Pe,Ne,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,ce=le.__version===void 0||$===!0,te=Z.dataReady;let he=A(M,de);ze(t.TEXTURE_CUBE_MAP,M);let xe;if(fe){I&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Oe,de.width,de.height);for(let ie=0;ie<6;ie++){xe=pe[ie].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const Ee=xe[Ae];M.format!==ai?Pe!==null?I?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Ee.width,Ee.height,Pe,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Oe,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Ee.width,Ee.height,Pe,Ne,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Oe,Ee.width,Ee.height,0,Pe,Ne,Ee.data)}}}else{if(xe=M.mipmaps,I&&ce){xe.length>0&&he++;const ie=nt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){I?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Pe,Ne,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,pe[ie].width,pe[ie].height,0,Pe,Ne,pe[ie].data);for(let Ae=0;Ae<xe.length;Ae++){const St=xe[Ae].image[ie].image;I?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,St.width,St.height,Pe,Ne,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Oe,St.width,St.height,0,Pe,Ne,St.data)}}else{I?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,Ne,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Pe,Ne,pe[ie]);for(let Ae=0;Ae<xe.length;Ae++){const Ee=xe[Ae];I?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Pe,Ne,Ee.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Oe,Pe,Ne,Ee.image[ie])}}}h(M)&&v(t.TEXTURE_CUBE_MAP),le.__version=Z.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Le(L,M,G,$,Z,le){const ue=s.convert(G.format,G.colorSpace),J=s.convert(G.type),ne=_(G.internalFormat,ue,J,G.normalized,G.colorSpace),fe=i.get(M),Ce=i.get(G);if(Ce.__renderTarget=M,!fe.__hasExternalTextures){const pe=Math.max(1,M.width>>le),de=Math.max(1,M.height>>le);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,le,ne,pe,de,M.depth,0,ue,J,null):n.texImage2D(Z,le,ne,pe,de,0,ue,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Lt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Z,Ce.__webglTexture,0,yt(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Z,Ce.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function At(L,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer){const $=M.depthTexture,Z=$&&$.isDepthTexture?$.type:null,le=C(M.stencilBuffer,Z),ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Lt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),le,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,L)}else{const $=M.textures;for(let Z=0;Z<$.length;Z++){const le=$[Z],ue=s.convert(le.format,le.colorSpace),J=s.convert(le.type),ne=_(le.internalFormat,ue,J,le.normalized,le.colorSpace);Lt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),ne,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(L,M,G){const $=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ze(t.TEXTURE_CUBE_MAP,M.depthTexture);const fe=s.convert(M.depthTexture.format),Ce=s.convert(M.depthTexture.type);let pe;M.depthTexture.format===nr?pe=t.DEPTH_COMPONENT24:M.depthTexture.format===us&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,M.width,M.height,0,fe,Ce,null)}}else D(M.depthTexture,0);const le=Z.__webglTexture,ue=yt(M),J=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ne=M.depthTexture.format===us?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===nr)Lt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,le,0);else if(M.depthTexture.format===us)Lt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(L){const M=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=$}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)We(M.__webglFramebuffer[$],L,$);else{const $=L.texture.mipmaps;$&&$.length>0?We(M.__webglFramebuffer[0],L,0):We(M.__webglFramebuffer,L,0)}else if(G){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),At(M.__webglDepthbuffer[$],L,!1);else{const Z=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,le)}}else{const $=L.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),At(M.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(L,M,G){const $=i.get(L);M!==void 0&&Le($.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ot(L)}function Ye(L){const M=L.texture,G=i.get(L),$=i.get(M);L.addEventListener("dispose",x);const Z=L.textures,le=L.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),le){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let ne=0;ne<M.mipmaps.length;ne++)G.__webglFramebuffer[J][ne]=t.createFramebuffer()}else G.__webglFramebuffer[J]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)G.__webglFramebuffer[J]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ue)for(let J=0,ne=Z.length;J<ne;J++){const fe=i.get(Z[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&Lt(L)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const ne=Z[J];G.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[J]);const fe=s.convert(ne.format,ne.colorSpace),Ce=s.convert(ne.type),pe=_(ne.internalFormat,fe,Ce,ne.normalized,ne.colorSpace,L.isXRRenderTarget===!0),de=yt(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,G.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),At(G.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),ze(t.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Le(G.__webglFramebuffer[J][ne],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else Le(G.__webglFramebuffer[J],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let J=0,ne=Z.length;J<ne;J++){const fe=Z[J],Ce=i.get(fe);let pe=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ce.__webglTexture),ze(pe,fe),Le(G.__webglFramebuffer,L,fe,t.COLOR_ATTACHMENT0+J,pe,0),h(fe)&&v(pe)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(J=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,$.__webglTexture),ze(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Le(G.__webglFramebuffer[ne],L,M,t.COLOR_ATTACHMENT0,J,ne);else Le(G.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,J,0);h(M)&&v(J),n.unbindTexture()}L.depthBuffer&&ot(L)}function Pt(L){const M=L.textures;for(let G=0,$=M.length;G<$;G++){const Z=M[G];if(h(Z)){const le=y(L),ue=i.get(Z).__webglTexture;n.bindTexture(le,ue),v(le),n.unbindTexture()}}}const Ft=[],Ht=[];function $t(L){if(L.samples>0){if(Lt(L)===!1){const M=L.textures,G=L.width,$=L.height;let Z=t.COLOR_BUFFER_BIT;const le=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(L),J=M.length>1;if(J)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ne=L.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=i.get(M[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,G,$,0,0,G,$,Z,t.NEAREST),l===!0&&(Ft.length=0,Ht.length=0,Ft.push(t.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ft.push(le),Ht.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=i.get(M[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function yt(L){return Math.min(r.maxSamples,L.samples)}function Lt(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(L){const M=o.render.frame;f.get(L)!==M&&(f.set(L,M),L.update())}function gn(L,M){const G=L.colorSpace,$=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==hu&&G!==Mr&&(Xe.getTransfer(G)===it?($!==ai||Z!==Hn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),M}function nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.getTextureUnits=z,this.setTextureUnits=U,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=ee,this.rebindTextures=et,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function AU(t,e){function n(i,r=Mr){let s;const o=Xe.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===ig)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===NM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===DM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===PM)return t.BYTE;if(i===LM)return t.SHORT;if(i===$a)return t.UNSIGNED_SHORT;if(i===ng)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===IM)return t.ALPHA;if(i===UM)return t.RGB;if(i===ai)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===us)return t.DEPTH_STENCIL;if(i===FM)return t.RED;if(i===sg)return t.RED_INTEGER;if(i===Ss)return t.RG;if(i===og)return t.RG_INTEGER;if(i===ag)return t.RGBA_INTEGER;if(i===Tc||i===wc||i===Ac||i===Cc)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zh||i===Qh||i===Jh||i===ep)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tp||i===np||i===ip||i===rp||i===sp||i===fu||i===op)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tp||i===np)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ip)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===rp)return s.COMPRESSED_R11_EAC;if(i===sp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===fu)return s.COMPRESSED_RG11_EAC;if(i===op)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ap||i===lp||i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p||i===yp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ap)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===up)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_p)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sp||i===Mp||i===Ep)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sp)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ep)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tp||i===wp||i===du||i===Ap)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const CU=`
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

}`;class RU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new XM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:CU,fragmentShader:bU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ii(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PU extends ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,m=null;const S=typeof XRWebGLBinding<"u",g=new RU,h={},v=n.getContextAttributes();let y=null,_=null;const C=[],A=[],P=new Je;let x=null;const R=new ri;R.viewport=new wt;const T=new ri;T.viewport=new wt;const b=[R,T],N=new zP;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=C[K];return se===void 0&&(se=new Yf,C[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=C[K];return se===void 0&&(se=new Yf,C[K]=se),se.getGripSpace()},this.getHand=function(K){let se=C[K];return se===void 0&&(se=new Yf,C[K]=se),se.getHandSpace()};function U(K){const se=A.indexOf(K.inputSource);if(se===-1)return;const ae=C[se];ae!==void 0&&(ae.update(K.inputSource,K.frame,c||o),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let K=0;K<C.length;K++){const se=A[K];se!==null&&(A[K]=null,C[K].disconnect(se))}F=null,z=null,g.reset();for(const K in h)delete h[K];e.setRenderTarget(y),p=null,u=null,d=null,r=null,_=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,De=null,Fe=null;v.depth&&(Fe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=v.stencil?us:nr,De=v.stencil?Ya:Di);const Le={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Le),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Li(u.textureWidth,u.textureHeight,{format:ai,type:Hn,depthTexture:new Po(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Li(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(K){for(let se=0;se<K.removed.length;se++){const ae=K.removed[se],De=A.indexOf(ae);De>=0&&(A[De]=null,C[De].disconnect(ae))}for(let se=0;se<K.added.length;se++){const ae=K.added[se];let De=A.indexOf(ae);if(De===-1){for(let Le=0;Le<C.length;Le++)if(Le>=A.length){A.push(ae),De=Le;break}else if(A[Le]===null){A[Le]=ae,De=Le;break}if(De===-1)break}const Fe=C[De];Fe&&Fe.connect(ae)}}const D=new Y,O=new Y;function X(K,se,ae){D.setFromMatrixPosition(se.matrixWorld),O.setFromMatrixPosition(ae.matrixWorld);const De=D.distanceTo(O),Fe=se.projectionMatrix.elements,Le=ae.projectionMatrix.elements,At=Fe[14]/(Fe[10]-1),We=Fe[14]/(Fe[10]+1),ot=(Fe[9]+1)/Fe[5],et=(Fe[9]-1)/Fe[5],Ye=(Fe[8]-1)/Fe[0],Pt=(Le[8]+1)/Le[0],Ft=At*Ye,Ht=At*Pt,$t=De/(-Ye+Pt),yt=$t*-Ye;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(yt),K.translateZ($t),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Fe[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Lt=At+$t,k=We+$t,gn=Ft-yt,nt=Ht+(De-yt),L=ot*We/k*Lt,M=et*We/k*Lt;K.projectionMatrix.makePerspective(gn,nt,L,M,Lt,k),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let se=K.near,ae=K.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),N.near=T.near=R.near=se,N.far=T.far=R.far=ae,(F!==N.near||z!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,z=N.far),N.layers.mask=K.layers.mask|6,R.layers.mask=N.layers.mask&-5,T.layers.mask=N.layers.mask&-3;const De=K.parent,Fe=N.cameras;ee(N,De);for(let Le=0;Le<Fe.length;Le++)ee(Fe[Le],De);Fe.length===2?X(N,R,T):N.projectionMatrix.copy(R.projectionMatrix),re(K,N,De)};function re(K,se,ae){ae===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(K){return h[K]};let Ue=null;function je(K,se){if(f=se.getViewerPose(c||o),m=se,f!==null){const ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let De=!1;ae.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let We=0;We<ae.length;We++){const ot=ae[We];let et=null;if(p!==null)et=p.getViewport(ot);else{const Pt=d.getViewSubImage(u,ot);et=Pt.viewport,We===0&&(e.setRenderTargetTextures(_,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(_))}let Ye=b[We];Ye===void 0&&(Ye=new ri,Ye.layers.enable(We),Ye.viewport=new wt,b[We]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(et.x,et.y,et.width,et.height),We===0&&(N.matrix.copy(Ye.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Ye)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const We=d.getDepthInformation(ae[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Fe&&Fe.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<ae.length;We++){const ot=ae[We].camera;if(ot){let et=h[ot];et||(et=new XM,h[ot]=et);const Ye=d.getCameraImage(ot);et.sourceTexture=Ye}}}}for(let ae=0;ae<C.length;ae++){const De=A[ae],Fe=C[ae];De!==null&&Fe!==void 0&&Fe.update(De,se,c||o)}Ue&&Ue(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const ze=new qM;ze.setAnimationLoop(je),this.setAnimationLoop=function(K){Ue=K},this.dispose=function(){}}}const LU=new Ut,nE=new ke;nE.set(-1,0,0,0,1,0,0,0,1);function NU(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,$M(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,y,_){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,_)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),S(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,y):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Tn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Tn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(LU.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nE),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=y*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function S(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,C){const A=C.program;i.uniformBlockBinding(_,A)}function c(_,C){let A=r[_.id];A===void 0&&(g(_),A=f(_),r[_.id]=A,_.addEventListener("dispose",v));const P=C.program;i.updateUBOMapping(_,P);const x=e.render.frame;s[_.id]!==x&&(u(_),s[_.id]=x)}function f(_){const C=d();_.__bindingPointIndex=C;const A=t.createBuffer(),P=_.__size,x=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,P,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,A),A}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const C=r[_.id],A=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let x=0,R=A.length;x<R;x++){const T=A[x];if(Array.isArray(T))for(let b=0,N=T.length;b<N;b++)p(T[b],x,b,P);else p(T,x,0,P)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,C,A,P){if(S(_,C,A,P)===!0){const x=_.__offset,R=_.value;if(Array.isArray(R)){let T=0;for(let b=0;b<R.length;b++){const N=R[b],F=h(N);m(N,_.__data,T),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(T+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,_.__data)}}function m(_,C,A){typeof _=="number"||typeof _=="boolean"?C[0]=_:_.isMatrix3?(C[0]=_.elements[0],C[1]=_.elements[1],C[2]=_.elements[2],C[3]=0,C[4]=_.elements[3],C[5]=_.elements[4],C[6]=_.elements[5],C[7]=0,C[8]=_.elements[6],C[9]=_.elements[7],C[10]=_.elements[8],C[11]=0):ArrayBuffer.isView(_)?C.set(new _.constructor(_.buffer,_.byteOffset,C.length)):_.toArray(C,A)}function S(_,C,A,P){const x=_.value,R=C+"_"+A;if(P[R]===void 0)return typeof x=="number"||typeof x=="boolean"?P[R]=x:ArrayBuffer.isView(x)?P[R]=x.slice():P[R]=x.clone(),!0;{const T=P[R];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return P[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function g(_){const C=_.uniforms;let A=0;const P=16;for(let R=0,T=C.length;R<T;R++){const b=Array.isArray(C[R])?C[R]:[C[R]];for(let N=0,F=b.length;N<F;N++){const z=b[N],U=Array.isArray(z.value)?z.value:[z.value];for(let V=0,H=U.length;V<H;V++){const D=U[V],O=h(D),X=A%P,ee=X%O.boundary,re=X+ee;A+=ee,re!==0&&P-re<O.storage&&(A+=P-re),z.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=O.storage}}}const x=A%P;return x>0&&(A+=P-x),_.__size=A,_.__cache={},this}function h(_){const C={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(C.boundary=4,C.storage=4):_.isVector2?(C.boundary=8,C.storage=8):_.isVector3||_.isColor?(C.boundary=16,C.storage=12):_.isVector4?(C.boundary=16,C.storage=16):_.isMatrix3?(C.boundary=48,C.storage=48):_.isMatrix4?(C.boundary=64,C.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(C.boundary=16,C.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),C}function v(_){const C=_.target;C.removeEventListener("dispose",v);const A=o.indexOf(C.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function y(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const IU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function UU(){return _i===null&&(_i=new CP(IU,16,16,Ss,tr),_i.name="DFG_LUT",_i.minFilter=on,_i.magFilter=on,_i.wrapS=Xi,_i.wrapT=Xi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class FU{constructor(e={}){const{canvas:n=iP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const S=p,g=new Set([ag,og,sg]),h=new Set([Hn,Di,$a,Ya,ig,rg]),v=new Uint32Array(4),y=new Int32Array(4),_=new Y;let C=null,A=null;const P=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let b=!1,N=null,F=null,z=null,U=null;this._outputColorSpace=Bn;let V=0,H=0,D=null,O=-1,X=null;const ee=new wt,re=new wt;let Ue=null;const je=new tt(0);let ze=0,K=n.width,se=n.height,ae=1,De=null,Fe=null;const Le=new wt(0,0,K,se),At=new wt(0,0,K,se);let We=!1;const ot=new WM;let et=!1,Ye=!1;const Pt=new Ut,Ft=new Y,Ht=new wt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Lt(){return D===null?ae:1}let k=i;function gn(w,B){return n.getContext(w,B)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tg}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",pi,!1),k===null){const B="webgl2";if(k=gn(B,w),k===null)throw gn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ke("WebGLRenderer: "+w.message),w}let nt,L,M,G,$,Z,le,ue,J,ne,fe,Ce,pe,de,Pe,Ne,Oe,I,ce,te,he,xe,ie;function Ae(){nt=new UD(k),nt.init(),he=new AU(k,nt),L=new CD(k,nt,e,he),M=new TU(k,nt),L.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),F=k.createFramebuffer(),z=k.createFramebuffer(),U=k.createFramebuffer(),G=new OD(k),$=new uU,Z=new wU(k,nt,M,$,L,he,G),le=new ID(T),ue=new HP(k),xe=new wD(k,ue),J=new FD(k,ue,G,xe),ne=new zD(k,J,ue,xe,G),I=new BD(k,L,Z),Pe=new bD($),fe=new cU(T,le,nt,L,xe,Pe),Ce=new NU(T,$),pe=new dU,de=new xU(nt),Oe=new TD(T,le,M,ne,m,l),Ne=new EU(T,ne,L),ie=new DU(k,G,L,M),ce=new AD(k,nt,G),te=new kD(k,nt,G),G.programs=fe.programs,T.capabilities=L,T.extensions=nt,T.properties=$,T.renderLists=pe,T.shadowMap=Ne,T.state=M,T.info=G}Ae(),S!==Hn&&(R=new HD(S,n.width,n.height,a,r,s));const Ee=new PU(T,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(w){w!==void 0&&(ae=w,this.setSize(K,se,!1))},this.getSize=function(w){return w.set(K,se)},this.setSize=function(w,B,q=!0){if(Ee.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,se=B,n.width=Math.floor(w*ae),n.height=Math.floor(B*ae),q===!0&&(n.style.width=w+"px",n.style.height=B+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(K*ae,se*ae).floor()},this.setDrawingBufferSize=function(w,B,q){K=w,se=B,ae=q,n.width=Math.floor(w*q),n.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(S===Hn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,B,q,W){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,B,q,W),M.viewport(ee.copy(Le).multiplyScalar(ae).round())},this.getScissor=function(w){return w.copy(At)},this.setScissor=function(w,B,q,W){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,B,q,W),M.scissor(re.copy(At).multiplyScalar(ae).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(w){M.setScissorTest(We=w)},this.setOpaqueSort=function(w){De=w},this.setTransparentSort=function(w){Fe=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,q=!0){let W=0;if(w){let j=!1;if(D!==null){const ve=D.texture.format;j=g.has(ve)}if(j){const ve=D.texture.type,ye=h.has(ve),ge=Oe.getClearColor(),Te=Oe.getClearAlpha(),be=ge.r,Be=ge.g,He=ge.b;ye?(v[0]=be,v[1]=Be,v[2]=He,v[3]=Te,k.clearBufferuiv(k.COLOR,0,v)):(y[0]=be,y[1]=Be,y[2]=He,y[3]=Te,k.clearBufferiv(k.COLOR,0,y))}else W|=k.COLOR_BUFFER_BIT}B&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),Oe.dispose(),pe.dispose(),de.dispose(),$.dispose(),le.dispose(),ne.dispose(),xe.dispose(),ie.dispose(),fe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Eg),Ee.removeEventListener("sessionend",Tg),Wr.stop()};function St(w){w.preventDefault(),Tx("WebGLRenderer: Context Lost."),b=!0}function ft(){Tx("WebGLRenderer: Context Restored."),b=!1;const w=G.autoReset,B=Ne.enabled,q=Ne.autoUpdate,W=Ne.needsUpdate,j=Ne.type;Ae(),G.autoReset=w,Ne.enabled=B,Ne.autoUpdate=q,Ne.needsUpdate=W,Ne.type=j}function pi(w){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mi(w){const B=w.target;B.removeEventListener("dispose",mi),hE(B)}function hE(w){pE(w),$.remove(w)}function pE(w){const B=$.get(w).programs;B!==void 0&&(B.forEach(function(q){fe.releaseProgram(q)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,W,j,ve){B===null&&(B=$t);const ye=j.isMesh&&j.matrixWorld.determinantAffine()<0,ge=vE(w,B,q,W,j);M.setMaterial(W,ye);let Te=q.index,be=1;if(W.wireframe===!0){if(Te=J.getWireframeAttribute(q),Te===void 0)return;be=2}const Be=q.drawRange,He=q.attributes.position;let Re=Be.start*be,st=(Be.start+Be.count)*be;ve!==null&&(Re=Math.max(Re,ve.start*be),st=Math.min(st,(ve.start+ve.count)*be)),Te!==null?(Re=Math.max(Re,0),st=Math.min(st,Te.count)):He!=null&&(Re=Math.max(Re,0),st=Math.min(st,He.count));const Ct=st-Re;if(Ct<0||Ct===1/0)return;xe.setup(j,W,ge,q,Te);let Mt,at=ce;if(Te!==null&&(Mt=ue.get(Te),at=te,at.setIndex(Mt)),j.isMesh)W.wireframe===!0?(M.setLineWidth(W.wireframeLinewidth*Lt()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(j.isLine){let Jt=W.linewidth;Jt===void 0&&(Jt=1),M.setLineWidth(Jt*Lt()),j.isLineSegments?at.setMode(k.LINES):j.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else j.isPoints?at.setMode(k.POINTS):j.isSprite&&at.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,_e=j._multiDrawCounts,wn=j._multiDrawCount,qe=Te?ue.get(Te).bytesPerElement:1,Fn=$.get(W).currentProgram.getUniforms();for(let gi=0;gi<wn;gi++)Fn.setValue(k,"_gl_DrawID",gi),at.render(Jt[gi]/qe,_e[gi])}else if(j.isInstancedMesh)at.renderInstances(Re,Ct,j.count);else if(q.isInstancedBufferGeometry){const Jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_e=Math.min(q.instanceCount,Jt);at.renderInstances(Re,Ct,_e)}else at.render(Re,Ct)};function Mg(w,B,q){w.transparent===!0&&w.side===Gi&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,ul(w,B,q),w.side=Br,w.needsUpdate=!0,ul(w,B,q),w.side=Gi):ul(w,B,q)}this.compile=function(w,B,q=null){q===null&&(q=w),A=de.get(q),A.init(B),x.push(A),q.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),w!==q&&w.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights();const W=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const ge=ve[ye];Mg(ge,q,j),W.add(ge)}else Mg(ve,q,j),W.add(ve)}),A=x.pop(),W},this.compileAsync=function(w,B,q=null){const W=this.compile(w,B,q);return new Promise(j=>{function ve(){if(W.forEach(function(ye){$.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){j(w);return}setTimeout(ve,10)}nt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Xu=null;function mE(w){Xu&&Xu(w)}function Eg(){Wr.stop()}function Tg(){Wr.start()}const Wr=new qM;Wr.setAnimationLoop(mE),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(w){Xu=w,Ee.setAnimationLoop(w),w===null?Wr.stop():Wr.start()},Ee.addEventListener("sessionstart",Eg),Ee.addEventListener("sessionend",Tg),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;N!==null&&N.renderStart(w,B);const q=Ee.enabled===!0&&Ee.isPresenting===!0,W=R!==null&&(D===null||q)&&R.begin(T,D);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(B),B=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,B,D),A=de.get(w,x.length),A.init(B),A.state.textureUnits=Z.getTextureUnits(),x.push(A),Pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ot.setFromProjectionMatrix(Pt,Ai,B.reversedDepth),Ye=this.localClippingEnabled,et=Pe.init(this.clippingPlanes,Ye),C=pe.get(w,P.length),C.init(),P.push(C),Ee.enabled===!0&&Ee.isPresenting===!0){const ye=T.xr.getDepthSensingMesh();ye!==null&&$u(ye,B,-1/0,T.sortObjects)}$u(w,B,0,T.sortObjects),C.finish(),T.sortObjects===!0&&C.sort(De,Fe,B.reversedDepth),yt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,yt&&Oe.addToRenderList(C,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Pe.beginShadows();const j=A.state.shadowsArray;if(Ne.render(j,w,B),et===!0&&Pe.endShadows(),(W&&R.hasRenderPass())===!1){const ye=C.opaque,ge=C.transmissive;if(A.setupLights(),B.isArrayCamera){const Te=B.cameras;if(ge.length>0)for(let be=0,Be=Te.length;be<Be;be++){const He=Te[be];Ag(ye,ge,w,He)}yt&&Oe.render(w);for(let be=0,Be=Te.length;be<Be;be++){const He=Te[be];wg(C,w,He,He.viewport)}}else ge.length>0&&Ag(ye,ge,w,B),yt&&Oe.render(w),wg(C,w,B)}D!==null&&H===0&&(Z.updateMultisampleRenderTarget(D),Z.updateRenderTargetMipmap(D)),W&&R.end(T),w.isScene===!0&&w.onAfterRender(T,w,B),xe.resetDefaultState(),O=-1,X=null,x.pop(),x.length>0?(A=x[x.length-1],Z.setTextureUnits(A.state.textureUnits),et===!0&&Pe.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?C=P[P.length-1]:C=null,N!==null&&N.renderEnd()};function $u(w,B,q,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ot.intersectsSprite(w)){W&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);const ye=ne.update(w),ge=w.material;ge.visible&&C.push(w,ye,ge,q,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ot.intersectsObject(w))){const ye=ne.update(w),ge=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ht.copy(ye.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(ge)){const Te=ye.groups;for(let be=0,Be=Te.length;be<Be;be++){const He=Te[be],Re=ge[He.materialIndex];Re&&Re.visible&&C.push(w,ye,Re,q,Ht.z,He)}}else ge.visible&&C.push(w,ye,ge,q,Ht.z,null)}}const ve=w.children;for(let ye=0,ge=ve.length;ye<ge;ye++)$u(ve[ye],B,q,W)}function wg(w,B,q,W){const{opaque:j,transmissive:ve,transparent:ye}=w;A.setupLightsView(q),et===!0&&Pe.setGlobalState(T.clippingPlanes,q),W&&M.viewport(ee.copy(W)),j.length>0&&cl(j,B,q),ve.length>0&&cl(ve,B,q),ye.length>0&&cl(ye,B,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ag(w,B,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Re=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:Re?tr:Hn,minFilter:cs,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ve=A.state.transmissionRenderTarget[W.id],ye=W.viewport||ee;ve.setSize(ye.z*T.transmissionResolutionScale,ye.w*T.transmissionResolutionScale);const ge=T.getRenderTarget(),Te=T.getActiveCubeFace(),be=T.getActiveMipmapLevel();T.setRenderTarget(ve),T.getClearColor(je),ze=T.getClearAlpha(),ze<1&&T.setClearColor(16777215,.5),T.clear(),yt&&Oe.render(q);const Be=T.toneMapping;T.toneMapping=Pi;const He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),et===!0&&Pe.setGlobalState(T.clippingPlanes,W),cl(w,q,W),Z.updateMultisampleRenderTarget(ve),Z.updateRenderTargetMipmap(ve),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,Ct=B.length;st<Ct;st++){const Mt=B[st],{object:at,geometry:Jt,material:_e,group:wn}=Mt;if(_e.side===Gi&&at.layers.test(W.layers)){const qe=_e.side;_e.side=Tn,_e.needsUpdate=!0,Cg(at,q,W,Jt,_e,wn),_e.side=qe,_e.needsUpdate=!0,Re=!0}}Re===!0&&(Z.updateMultisampleRenderTarget(ve),Z.updateRenderTargetMipmap(ve))}T.setRenderTarget(ge,Te,be),T.setClearColor(je,ze),He!==void 0&&(W.viewport=He),T.toneMapping=Be}function cl(w,B,q){const W=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ve=w.length;j<ve;j++){const ye=w[j],{object:ge,geometry:Te,group:be}=ye;let Be=ye.material;Be.allowOverride===!0&&W!==null&&(Be=W),ge.layers.test(q.layers)&&Cg(ge,B,q,Te,Be,be)}}function Cg(w,B,q,W,j,ve){w.onBeforeRender(T,B,q,W,j,ve),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(T,B,q,W,w,ve),j.transparent===!0&&j.side===Gi&&j.forceSinglePass===!1?(j.side=Tn,j.needsUpdate=!0,T.renderBufferDirect(q,B,W,j,w,ve),j.side=Br,j.needsUpdate=!0,T.renderBufferDirect(q,B,W,j,w,ve),j.side=Gi):T.renderBufferDirect(q,B,W,j,w,ve),w.onAfterRender(T,B,q,W,j,ve)}function ul(w,B,q){B.isScene!==!0&&(B=$t);const W=$.get(w),j=A.state.lights,ve=A.state.shadowsArray,ye=j.state.version,ge=fe.getParameters(w,j.state,ve,B,q,A.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ge);let be=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const Be=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=le.get(w.envMap||W.environment,Be),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",mi),be=new Map,W.programs=be);let He=be.get(Te);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===ye)return Rg(w,ge),He}else ge.uniforms=fe.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,q,ge),w.onBeforeCompile(ge,T),He=fe.acquireProgram(ge,Te),be.set(Te,He),W.uniforms=ge.uniforms;const Re=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),Rg(w,ge),W.needsLights=_E(w),W.lightsStateVersion=ye,W.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=A.state.lightProbeGridArray.length>0,W.currentProgram=He,W.uniformsList=null,He}function bg(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=bc.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Rg(w,B){const q=$.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function gE(w,B){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let q=0,W=w.length;q<W;q++){const j=w[q];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function vE(w,B,q,W,j){B.isScene!==!0&&(B=$t),Z.resetTextureUnits();const ve=B.fog,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,ge=D===null?T.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Xe.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,be=le.get(W.envMap||ye,Te),Be=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color;let Mt=Pi;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=T.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=at!==void 0?at.length:0,_e=$.get(W),wn=A.state.lights;if(et===!0&&(Ye===!0||w!==X)){const dt=w===X&&W.id===O;Pe.setState(W,w,dt)}let qe=!1;W.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==wn.state.version||_e.outputColorSpace!==ge||j.isBatchedMesh&&_e.batching===!1||!j.isBatchedMesh&&_e.batching===!0||j.isBatchedMesh&&_e.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&_e.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&_e.instancing===!1||!j.isInstancedMesh&&_e.instancing===!0||j.isSkinnedMesh&&_e.skinning===!1||!j.isSkinnedMesh&&_e.skinning===!0||j.isInstancedMesh&&_e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&_e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&_e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&_e.instancingMorph===!1&&j.morphTexture!==null||_e.envMap!==be||W.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Pe.numPlanes||_e.numIntersection!==Pe.numIntersection)||_e.vertexAlphas!==Be||_e.vertexTangents!==He||_e.morphTargets!==Re||_e.morphNormals!==st||_e.morphColors!==Ct||_e.toneMapping!==Mt||_e.morphTargetsCount!==Jt||!!_e.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,_e.__version=W.version);let Fn=_e.currentProgram;qe===!0&&(Fn=ul(W,B,j),N&&W.isNodeMaterial&&N.onUpdateProgram(W,Fn,_e));let gi=!1,sr=!1,As=!1;const lt=Fn.getUniforms(),bt=_e.uniforms;if(M.useProgram(Fn.program)&&(gi=!0,sr=!0,As=!0),W.id!==O&&(O=W.id,sr=!0),_e.needsLights){const dt=gE(A.state.lightProbeGridArray,j);_e.lightProbeGrid!==dt&&(_e.lightProbeGrid=dt,sr=!0)}if(gi||X!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),lt.setValue(k,"projectionMatrix",w.projectionMatrix),lt.setValue(k,"viewMatrix",w.matrixWorldInverse);const ar=lt.map.cameraPosition;ar!==void 0&&ar.setValue(k,Ft.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&lt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,sr=!0,As=!0)}if(_e.needsLights&&(wn.state.directionalShadowMap.length>0&&lt.setValue(k,"directionalShadowMap",wn.state.directionalShadowMap,Z),wn.state.spotShadowMap.length>0&&lt.setValue(k,"spotShadowMap",wn.state.spotShadowMap,Z),wn.state.pointShadowMap.length>0&&lt.setValue(k,"pointShadowMap",wn.state.pointShadowMap,Z)),j.isSkinnedMesh){lt.setOptional(k,j,"bindMatrix"),lt.setOptional(k,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),lt.setValue(k,"boneTexture",dt.boneTexture,Z))}j.isBatchedMesh&&(lt.setOptional(k,j,"batchingTexture"),lt.setValue(k,"batchingTexture",j._matricesTexture,Z),lt.setOptional(k,j,"batchingIdTexture"),lt.setValue(k,"batchingIdTexture",j._indirectTexture,Z),lt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&lt.setValue(k,"batchingColorTexture",j._colorsTexture,Z));const or=q.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&I.update(j,q,Fn),(sr||_e.receiveShadow!==j.receiveShadow)&&(_e.receiveShadow=j.receiveShadow,lt.setValue(k,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(bt.envMapIntensity.value=B.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=UU()),sr){if(lt.setValue(k,"toneMappingExposure",T.toneMappingExposure),_e.needsLights&&xE(bt,As),ve&&W.fog===!0&&Ce.refreshFogUniforms(bt,ve),Ce.refreshMaterialUniforms(bt,W,ae,se,A.state.transmissionRenderTarget[w.id]),_e.needsLights&&_e.lightProbeGrid){const dt=_e.lightProbeGrid;bt.probesSH.value=dt.texture,bt.probesMin.value.copy(dt.boundingBox.min),bt.probesMax.value.copy(dt.boundingBox.max),bt.probesResolution.value.copy(dt.resolution)}bc.upload(k,bg(_e),bt,Z)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bc.upload(k,bg(_e),bt,Z),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(k,"center",j.center),lt.setValue(k,"modelViewMatrix",j.modelViewMatrix),lt.setValue(k,"normalMatrix",j.normalMatrix),lt.setValue(k,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const dt=W.uniformsGroups;for(let ar=0,Cs=dt.length;ar<Cs;ar++){const Pg=dt[ar];ie.update(Pg,Fn),ie.bind(Pg,Fn)}}return Fn}function xE(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function _E(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,B,q){const W=$.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(w.texture).__webglTexture=B,$.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const q=$.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){D=w,V=B,H=q;let W=null,j=!1,ve=!1;if(w){const ge=$.get(w);if(ge.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,ge.__webglFramebuffer),ee.copy(w.viewport),re.copy(w.scissor),Ue=w.scissorTest,M.viewport(ee),M.scissor(re),M.setScissorTest(Ue),O=-1;return}else if(ge.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(ge.__hasExternalTextures)Z.rebindTextures(w,$.get(w.texture).__webglTexture,$.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Be=w.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&$.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const be=$.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[B])?W=be[B][q]:W=be[B],j=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?W=$.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?W=be[q]:W=be,ee.copy(w.viewport),re.copy(w.scissor),Ue=w.scissorTest}else ee.copy(Le).multiplyScalar(ae).floor(),re.copy(At).multiplyScalar(ae).floor(),Ue=We;if(q!==0&&(W=F),M.bindFramebuffer(k.FRAMEBUFFER,W)&&M.drawBuffers(w,W),M.viewport(ee),M.scissor(re),M.setScissorTest(Ue),j){const ge=$.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,q)}else if(ve){const ge=B;for(let Te=0;Te<w.textures.length;Te++){const be=$.get(w.textures[Te]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Te,be.__webglTexture,q,ge)}}else if(w!==null&&q!==0){const ge=$.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ge.__webglTexture,q)}O=-1},this.readRenderTargetPixels=function(w,B,q,W,j,ve,ye,ge=0){if(!(w&&w.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){M.bindFramebuffer(k.FRAMEBUFFER,Te);try{const be=w.textures[ge],Be=be.format,He=be.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ge),!L.textureFormatReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(He)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&q>=0&&q<=w.height-j&&k.readPixels(B,q,W,j,he.convert(Be),he.convert(He),ve)}finally{const be=D!==null?$.get(D).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,B,q,W,j,ve,ye,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(B>=0&&B<=w.width-W&&q>=0&&q<=w.height-j){M.bindFramebuffer(k.FRAMEBUFFER,Te);const be=w.textures[ge],Be=be.format,He=be.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ge),!L.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.bufferData(k.PIXEL_PACK_BUFFER,ve.byteLength,k.STREAM_READ),k.readPixels(B,q,W,j,he.convert(Be),he.convert(He),0);const st=D!==null?$.get(D).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,st);const Ct=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await rP(k,Ct,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ve),k.deleteBuffer(Re),k.deleteSync(Ct),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,q=0){const W=Math.pow(2,-q),j=Math.floor(w.image.width*W),ve=Math.floor(w.image.height*W),ye=B!==null?B.x:0,ge=B!==null?B.y:0;Z.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,ye,ge,j,ve),M.unbindTexture()},this.copyTextureToTexture=function(w,B,q=null,W=null,j=0,ve=0){let ye,ge,Te,be,Be,He,Re,st,Ct;const Mt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(q!==null)ye=q.max.x-q.min.x,ge=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,be=q.min.x,Be=q.min.y,He=q.isBox3?q.min.z:0;else{const bt=Math.pow(2,-j);ye=Math.floor(Mt.width*bt),ge=Math.floor(Mt.height*bt),w.isDataArrayTexture?Te=Mt.depth:w.isData3DTexture?Te=Math.floor(Mt.depth*bt):Te=1,be=0,Be=0,He=0}W!==null?(Re=W.x,st=W.y,Ct=W.z):(Re=0,st=0,Ct=0);const at=he.convert(B.format),Jt=he.convert(B.type);let _e;B.isData3DTexture?(Z.setTexture3D(B,0),_e=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Z.setTexture2DArray(B,0),_e=k.TEXTURE_2D_ARRAY):(Z.setTexture2D(B,0),_e=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const wn=M.getParameter(k.UNPACK_ROW_LENGTH),qe=M.getParameter(k.UNPACK_IMAGE_HEIGHT),Fn=M.getParameter(k.UNPACK_SKIP_PIXELS),gi=M.getParameter(k.UNPACK_SKIP_ROWS),sr=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,be),M.pixelStorei(k.UNPACK_SKIP_ROWS,Be),M.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const As=w.isDataArrayTexture||w.isData3DTexture,lt=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const bt=$.get(w),or=$.get(B),dt=$.get(bt.__renderTarget),ar=$.get(or.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,dt.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Cs=0;Cs<Te;Cs++)As&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(w).__webglTexture,j,He+Cs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(B).__webglTexture,ve,Ct+Cs)),k.blitFramebuffer(be,Be,ye,ge,Re,st,ye,ge,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||$.has(w)){const bt=$.get(w),or=$.get(B);M.bindFramebuffer(k.READ_FRAMEBUFFER,z),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let dt=0;dt<Te;dt++)As?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.__webglTexture,j,He+dt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,j),lt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,or.__webglTexture,ve,Ct+dt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,or.__webglTexture,ve),j!==0?k.blitFramebuffer(be,Be,ye,ge,Re,st,ye,ge,k.COLOR_BUFFER_BIT,k.NEAREST):lt?k.copyTexSubImage3D(_e,ve,Re,st,Ct+dt,be,Be,ye,ge):k.copyTexSubImage2D(_e,ve,Re,st,be,Be,ye,ge);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else lt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(_e,ve,Re,st,Ct,ye,ge,Te,at,Jt,Mt.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(_e,ve,Re,st,Ct,ye,ge,Te,at,Mt.data):k.texSubImage3D(_e,ve,Re,st,Ct,ye,ge,Te,at,Jt,Mt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ve,Re,st,ye,ge,at,Jt,Mt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ve,Re,st,Mt.width,Mt.height,at,Mt.data):k.texSubImage2D(k.TEXTURE_2D,ve,Re,st,ye,ge,at,Jt,Mt);M.pixelStorei(k.UNPACK_ROW_LENGTH,wn),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe),M.pixelStorei(k.UNPACK_SKIP_PIXELS,Fn),M.pixelStorei(k.UNPACK_SKIP_ROWS,gi),M.pixelStorei(k.UNPACK_SKIP_IMAGES,sr),ve===0&&B.generateMipmaps&&k.generateMipmap(_e),M.unbindTexture()},this.initRenderTarget=function(w){$.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){V=0,H=0,D=null,M.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const kU=`
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
`,OU="void main(){ gl_Position = vec4(position, 1.0); }";function BU(){const t=Q.useRef(null);return Q.useEffect(()=>{const e=t.current,n=e.parentElement,i=!1;let r;try{r=new FU({canvas:e,antialias:!1,powerPreference:"high-performance"})}catch{return}r.setPixelRatio(Math.min(1.25,window.devicePixelRatio||1));const s=new yP,o=new dg,a={uTime:{value:0},uRes:{value:new Je(1,1)}},l=new hi({vertexShader:OU,fragmentShader:kU,uniforms:a});s.add(new Ii(new ll(2,2),l));const c=()=>{const y=n.clientWidth,_=n.clientHeight;r.setSize(y,_,!1),a.uRes.value.set(y*r.getPixelRatio(),_*r.getPixelRatio())};c(),window.addEventListener("resize",c);let f=0,d=!1,u=performance.now();const p=()=>{a.uTime.value=(performance.now()-u)/1e3,r.render(s,o),f=requestAnimationFrame(p)},m=()=>{d||i||(d=!0,f=requestAnimationFrame(p))},S=()=>{d=!1,cancelAnimationFrame(f)},g=new IntersectionObserver(([y])=>{y.isIntersecting?m():S()},{threshold:0});g.observe(n);const h=y=>{y.preventDefault(),S()},v=()=>{c(),m()};return e.addEventListener("webglcontextlost",h),e.addEventListener("webglcontextrestored",v),()=>{g.disconnect(),S(),window.removeEventListener("resize",c),e.removeEventListener("webglcontextlost",h),e.removeEventListener("webglcontextrestored",v),l.dispose(),r.dispose()}},[]),E.jsx("canvas",{ref:t,className:"hero-space","aria-hidden":!0})}const zU=({h:t=15})=>E.jsx("svg",{viewBox:"0 0 228 120",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:E.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z",fill:"#ea4b71"})}),VU=({h:t=19})=>E.jsx("svg",{viewBox:"0 0 256 260",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:E.jsx("path",{fill:"#ECEEF3",d:"M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"})}),iE=({h:t=19})=>E.jsx("svg",{viewBox:"0 0 256 257",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:E.jsx("path",{fill:"#D97757",d:"m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"})}),HU=({h:t=20})=>E.jsx("svg",{viewBox:"0 0 256 384",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:E.jsx("path",{fill:"#ECEEF3",d:"M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"})}),GU=({h:t=16})=>E.jsxs("svg",{viewBox:"0 0 24 24",style:{height:t,width:"auto",display:"block"},xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[E.jsx("defs",{children:E.jsxs("linearGradient",{id:"gemg",x1:"0",y1:"0",x2:"1",y2:"1",children:[E.jsx("stop",{offset:"0",stopColor:"#4E8DF6"}),E.jsx("stop",{offset:"1",stopColor:"#9B72CB"})]})}),E.jsx("path",{fill:"url(#gemg)",d:"M12 24C12 17.373 6.627 12 0 12 6.627 12 12 6.627 12 0c0 6.627 5.373 12 12 12-6.627 0-12 5.373-12 12Z"})]}),WU="modulepreload",jU=function(t){return"/"+t},h_={},XU=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=jU(l),l in h_)return;h_[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":WU,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},$U=Q.lazy(()=>XU(()=>import("./react-spline-BUek6Gue.js").then(t=>t.r),[]));function YU({scene:t,className:e}){return E.jsx(Q.Suspense,{fallback:E.jsx("div",{className:"spline-fallback",children:E.jsx("span",{className:"loader"})}),children:E.jsx($U,{scene:t,className:e})})}/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qU=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KU=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=t=>{const e=KU(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZU=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},QU=Q.createContext({}),JU=()=>Q.useContext(QU),eF=Q.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>{const{size:c=24,strokeWidth:f=2,absoluteStrokeWidth:d=!1,color:u="currentColor",className:p=""}=JU()??{},m=i??d?Number(n??f)*24/Number(e??c):n??f;return Q.createElement("svg",{ref:l,...vd,width:e??c??vd.width,height:e??c??vd.height,stroke:t??u,strokeWidth:m,className:rE("lucide",p,r),...!s&&!ZU(a)&&{"aria-hidden":"true"},...a},[...o.map(([S,g])=>Q.createElement(S,g)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(t,e)=>{const n=Q.forwardRef(({className:i,...r},s)=>Q.createElement(eF,{ref:s,iconNode:e,className:rE(`lucide-${qU(p_(t))}`,`lucide-${t}`,i),...r}));return n.displayName=p_(t),n};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tF=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Aa=ut("arrow-right",tF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nF=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],hg=ut("bot",nF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iF=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],Wu=ut("chart-line",iF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rF=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],sF=ut("check",rF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ju=ut("circle-check",oF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],sE=ut("clock-3",aF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lF=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],cF=ut("gauge",lF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],oE=ut("globe",uF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fF=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aE=ut("layers",fF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dF=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],hF=ut("lock-open",dF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pF=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mF=ut("mail",pF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gF=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],vF=ut("map-pin",gF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xF=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],lE=ut("megaphone",xF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _F=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],pg=ut("message-square",_F);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yF=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],mg=ut("phone-call",yF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SF=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],MF=ut("phone",SF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EF=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]],TF=ut("piggy-bank",EF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wF=[["path",{d:"M12 17V7",key:"pyj7ub"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",key:"1elt7d"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]],AF=ut("receipt",wF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CF=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],bF=ut("rocket",CF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],PF=ut("rows-3",RF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LF=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],NF=ut("search",LF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DF=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],IF=ut("send",DF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UF=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],FF=ut("star",UF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],cE=ut("target",kF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OF=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],uE=ut("trending-up",OF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BF=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zF=ut("x",BF);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VF=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],gg=ut("zap",VF),m_=[oE,mg,Wu,hg,lE,pg],HF=[NF,bF,Wu],GF=[Wu,gg,aE,hF,hg,mg],WF=[PF,aE,cF],jF=[uE,cE,TF];function Ws({C:t,size:e=22,color:n="#F2F4F8",strokeWidth:i=1.7}){return E.jsx("span",{style:{color:n,lineHeight:0,display:"inline-flex"},children:E.jsx(t,{size:e,strokeWidth:i})})}function na({className:t="",children:e,...n}){return E.jsxs("a",{className:`hbtn ${t}`,...n,children:[E.jsx("span",{className:"hbtn-label",children:e}),E.jsx("span",{className:"hbtn-arrow","aria-hidden":!0,children:E.jsx(Aa,{size:15,strokeWidth:2.3})})]})}const Kr={type:"spring",stiffness:190,damping:30,mass:1.05},XF={"Martin Dvořák":["#8B8F98","#D7DAE0"],"Lucie Králová":["#8B8F98","#D7DAE0"],"Petr Novotný":["#8B8F98","#D7DAE0"]},$F={"Martin Dvořák":"https://i.pravatar.cc/150?img=13","Lucie Králová":"https://i.pravatar.cc/150?img=45","Petr Novotný":"https://i.pravatar.cc/150?img=68"};function YF({name:t,size:e=48}){const n=t.split(" ").map(l=>l[0]).join("").slice(0,2),[i,r]=XF[t]||["#3E6FF4","#7AA0FF"],s=$F[t],[o,a]=Q.useState(!1);return E.jsx("span",{className:"avatar",style:{width:e,height:e,background:`conic-gradient(from 140deg, ${i}, ${r}, ${i})`},children:s&&!o?E.jsx("img",{className:"avatar-in",src:s,alt:t,loading:"lazy",onError:()=>a(!0)}):E.jsx("span",{className:"avatar-in avatar-init",style:{fontSize:e*.36},children:n})})}const qF=[{label:"Služby",href:"#sluzby",id:"sluzby"},{label:"Jak pracujeme",href:"#proces",id:"proces"},{label:"Reference",href:"#reference",id:"reference"},{label:"Ceník",href:"#cenik",id:"cenik"},{label:"FAQ",href:"#faq",id:"faq"}],KF=[{no:"01",h:"Analýza",p:"Projdeme váš byznys, čísla a konkurenci. Do týdne víte, kde vám utíkají zákazníci a co s tím uděláme."},{no:"02",h:"Realizace",p:"Navrhneme, postavíme a spustíme. Web, automatizace i kampaně — bez průtahů a bez výmluv."},{no:"03",h:"Optimalizace a péče",p:"Spuštěním nekončíme. Měříme, testujeme a každý měsíc posouváme výsledky o kus dál."}],ZF=[{h:"Tvorba webů",p:"Rychlé, moderní weby postavené na datech, ne na pocitech. Od landing page po e-shop.",type:"tasklist",textFirst:!0},{h:"Hlasoví AI agenti",p:"AI vyřizuje hovory, dotazy a rezervace za vás — spolehlivě a nonstop.",type:"voice",textFirst:!1},{h:"Datové přehledy",p:"Proměníme čísla z kampaní a provozu v přehledné, akční insighty.",type:"budget",textFirst:!0},{h:"Vlastní AI agenti",p:"Postavíme AI systémy na míru vašemu byznysu, které myslí a jednají samy.",type:"team",textFirst:!1},{h:"Marketingové kampaně",p:"Výkonnostní kampaně napříč kanály, řízené daty, ne pocitem.",type:"marketing",textFirst:!1},{h:"Chatboti na míru",p:"Okamžité, přesné odpovědi zákazníkům kdykoliv, s AI, co zná váš byznys.",type:"chatbot",textFirst:!1}],gr=[{k:"E-shop · doplňky stravy",num:212,prefix:"+",suffix:" %",trend:"up",lead:"tržeb za 6 měsíců",from:"1,1 %",to:"3,4 %",metric:"konverzní poměr",p:"Nový web, přestavěný funnel a výkonnostní kampaně. Konverzní poměr vzrostl z 1,1 % na 3,4 %."},{k:"B2B · strojírenská výroba",num:9,prefix:"",suffix:"×",trend:"step",lead:"více poptávek měsíčně",from:"5",to:"47",metric:"poptávky / měsíc",p:"Z 5 na 47 poptávek měsíčně. Automatizace zpracování poptávek navíc šetří 30 hodin práce obchodu."},{k:"Služby · advokátní kancelář",num:58,prefix:"−",suffix:" %",trend:"down",lead:"nižší cena za lead",from:"100 %",to:"42 %",metric:"náklady na lead",p:"Přesnější cílení a nové landing pages. Kancelář naplnila kapacitu do tří měsíců od spuštění."}];function QF({dir:t}){const e={up:[6,11,8,17,22,31,42],step:[8,8,17,17,27,27,40],down:[42,35,31,20,15,9,5]},n=e[t]||e.up,i=120,r=42,s=46,a=n.map((c,f)=>[f/(n.length-1)*i,r-c/s*r]).map(c=>c.join(",")).join(" "),l=`0,${r} ${a} ${i},${r}`;return E.jsxs("svg",{className:"case-spark",viewBox:`0 0 ${i} ${r}`,preserveAspectRatio:"none","aria-hidden":!0,children:[E.jsx("polygon",{className:"case-spark-area",points:l}),E.jsx("polyline",{className:"case-spark-line",points:a})]})}const JF=[{h:"Výsledky v číslech",p:"Měřitelné, každý měsíc.",stat:"+212 %"},{h:"Rychlost",p:"První výstupy do 14 dnů.",stat:"14 dní"},{h:"Jeden partner",p:"Vše pod jednou střechou.",stat:"1 tým"},{h:"Bez závazků",p:"Zůstanete, protože to funguje.",stat:"0 smluv"},{h:"Technologie 2026",p:"AI, co konkurence nemá.",stat:"24/7"},{h:"Lidský přístup",p:"Mluvíme česky, ne buzzwordy.",stat:"100 %"}],Zr=[{quote:"Do tří měsíců se nám poptávky zdvojnásobily. Poprvé máme agenturu, která mluví v číslech, ne ve slibech.",name:"Martin Dvořák",role:"jednatel, TZB Systémy"},{quote:"Automatizace od SiteSpotu nám šetří přes 40 hodin měsíčně. Fakturace a CRM běží samy, my se věnujeme klientům.",name:"Lucie Králová",role:"majitelka, Studio Květ"},{quote:"Nový web se zaplatil za šest týdnů. Konečně přesně vím, kam jde každá koruna z marketingu a co mi vrací.",name:"Petr Novotný",role:"CEO, Fitbox.cz"}],ek=[{tier:"Start",price:"od 29 000 Kč",per:"jednorázově",desc:"Pro firmy, které potřebují web, co konečně prodává.",feats:["Landing page nebo firemní web","Texty a copywriting v ceně","SEO základ a analytika","Spuštění do 3 týdnů","30 dní podpory zdarma"],cta:"Chci začít"},{tier:"Růst",price:"od 19 000 Kč",per:"měsíčně, bez závazku",desc:"Pro firmy, které chtějí předvídatelný přísun poptávek.",feats:["Vše z tarifu Start","Správa kampaní (Google + Meta)","2 AI automatizace na míru","Průběžná optimalizace webu","Měsíční report + konzultace"],cta:"Chci růst",featured:!0},{tier:"Scale",price:"individuálně",per:"dle rozsahu",desc:"Pro firmy, kde je online hlavní růstový kanál.",feats:["Dedikovaný tým","Neomezené automatizace","Kompletní marketing na klíč","Garantovaná SLA odezva","Čtvrtletní strategická roadmapa"],cta:"Domluvit se"}],tk=["Pomalé, ruční procesy","Náchylné k lidským chybám","Vyžaduje více lidí","Těžko škáluje bez náboru","Omezené na pracovní dobu","Rozhodování od oka a s prodlevami","Rutina zpomaluje tým","Vícekrokové ruční předávky","Pomalejší reakční doby","Ruční follow-upy a evidence"],nk=["Úkoly hotové okamžitě","Vysoká přesnost, konzistentní výsledky","Nižší provozní náklady","Škáluje bez námahy","Běží 24/7 nonstop","Data a přehledy v reálném čase","Automatizuje rutinu pro vyšší výstup","Plynulý, automatický tok","Okamžité odpovědi přes chat i hlas","Automatický nurturing a připomínky"],ik=[{q:"Za jak dlouho bude web hotový?",a:"Landing page spouštíme do 3 týdnů, rozsáhlejší weby do 4–8 týdnů. Přesný harmonogram dostanete po úvodní analýze — a platí to, co si domluvíme."},{q:"Kolik spolupráce stojí?",a:"Jednorázové projekty začínají na 29 000 Kč, průběžná spolupráce na 19 000 Kč měsíčně. Cenu znáte vždy předem, fixně a bez skrytých položek."},{q:"Už web mám. Má smysl se ozvat?",a:"Určitě. Uděláme vám audit zdarma — často stačí stávající web optimalizovat a napojit na automatizace, místo stavění od nuly."},{q:"Jak vypadají AI automatizace v praxi?",a:"Propojíme nástroje, které už používáte — e-mail, CRM, fakturaci, tabulky. Poptávky se samy třídí, faktury odesílají, reporty generují. Klientům běžně šetříme 30 a více hodin měsíčně."},{q:"Musím podepsat dlouhodobý závazek?",a:"Ne. Spolupráce běží po měsících s měsíční výpovědní lhůtou. Klienty si držíme výsledky, ne smlouvami."},{q:"Jak poznám, že to funguje?",a:"Každý měsíc dostanete srozumitelný report: kolik přišlo poptávek, co stály a kolik hodin ušetřily automatizace. Žádná hausnumera."},{q:"Pracujete i s menšími firmami?",a:"Ano — většina našich klientů má 2 až 50 zaměstnanců. Řešení stavíme tak, aby dávalo smysl vašemu rozpočtu, ne našemu portfoliu."}],rk=[5410,1728,18143];function sk({type:t}){if(t==="tasklist"){const e=[{l:"Nový poptávkový formulář",ic:ju,c:"#2BB6A6"},{l:"Zápis do CRM",ic:sE,c:"#E0A93E"},{l:"Odeslání faktury",ic:AF,c:"#8A8E99"}];return E.jsx("div",{className:"mock mock-list",children:e.map((n,i)=>E.jsxs("div",{className:"mock-row",children:[E.jsx("span",{className:"mock-row-ic",style:{color:n.c},children:E.jsx(n.ic,{size:15,strokeWidth:2})}),E.jsx("span",{className:"mock-row-l",children:n.l})]},i))})}if(t==="voice"){const e=[6,14,22,12,28,16,24,10,18,8,20,14,26,12,16];return E.jsx("div",{className:"mock mock-voice",children:E.jsxs("div",{className:"mock-wave",children:[e.map((n,i)=>E.jsx("span",{style:{height:n}},i)),E.jsx("span",{className:"mock-phone",children:E.jsx(mg,{size:16,strokeWidth:2})}),e.map((n,i)=>E.jsx("span",{style:{height:e[e.length-1-i]}},"b"+i))]})})}if(t==="budget"){const e=[["Kampaně",62],["Nástroje",41],["Automatizace",74],["Tvorba obsahu",33]];return E.jsxs("div",{className:"mock mock-budget",children:[E.jsxs("div",{className:"mock-budget-head",children:[E.jsx("span",{children:"Rozpočet"}),E.jsx("b",{children:"320 000 Kč"})]}),e.map(([n,i],r)=>E.jsxs("div",{className:"mock-brow",children:[E.jsx("span",{children:n}),E.jsx("span",{className:"mock-bbar",children:E.jsx("span",{style:{width:i+"%"}})})]},r))]})}if(t==="team"){const e=[{name:"OpenAI",el:E.jsx(VU,{h:15})},{name:"Claude",el:E.jsx(iE,{h:16})},{name:"n8n",el:E.jsx(zU,{h:12})},{name:"Gemini",el:E.jsx(GU,{h:15})},{name:"Make",el:E.jsx("span",{className:"mock-word",children:"Make"})}];return E.jsx("div",{className:"mock mock-team",children:e.map(n=>E.jsx("span",{className:"mock-logo-chip",title:n.name,children:n.el},n.name))})}if(t==="marketing"){const e=[["LinkedIn",!0],["E-mail",!0],["Meta Ads",!1],["Google Ads",!0]];return E.jsxs("div",{className:"mock mock-mkt",children:[E.jsxs("div",{className:"mock-mkt-head",children:[E.jsx(IF,{size:13,strokeWidth:2})," Hledám nové leady…"]}),e.map(([n,i],r)=>E.jsxs("div",{className:"mock-mrow",children:[E.jsx("span",{children:n}),E.jsx("span",{className:`mock-toggle${i?" on":""}`})]},r))]})}return t==="chatbot"?E.jsxs("div",{className:"mock mock-chat",children:[E.jsxs("div",{className:"mock-bubble bot",children:[E.jsx(pg,{size:13,strokeWidth:2})," Jak vám mohu pomoct?"]}),E.jsx("div",{className:"mock-bubble user",children:"Chci nabídku na web"})]}):null}function ok(){const t=Q.useRef(null);Q.useEffect(()=>{const f=t.current;if(!f)return;const d=new IntersectionObserver(([u])=>{u.isIntersecting&&(f.classList.add("draw"),d.disconnect())},{threshold:.4});return d.observe(f),()=>d.disconnect()},[]);const e=[5,11,8,15,13,21,18,27,25,34],n=150,i=54,r=38,s=e.map((f,d)=>[d/(e.length-1)*n,i-f/r*i]),o=s.map(f=>f.join(",")).join(" "),a=`0,${i} ${o} ${n},${i}`,[l,c]=s[s.length-1];return E.jsxs("div",{className:"benefit ben-chart spot-card","data-reveal":"60",ref:t,children:[E.jsx("div",{className:"ben-top",children:E.jsxs("span",{className:"chart-badge",children:[E.jsx(uE,{size:13,strokeWidth:2.2})," +47 % za kvartál"]})}),E.jsx("h3",{children:"Růst poptávek"}),E.jsxs("svg",{className:"ben-chart-svg",viewBox:`0 0 ${n} ${i}`,preserveAspectRatio:"none","aria-hidden":!0,children:[E.jsx("polygon",{className:"bc-area",points:a}),E.jsx("polyline",{className:"bc-line",points:o,pathLength:"1"}),E.jsx("circle",{className:"bc-dot",cx:l,cy:c,r:"3"})]})]})}const g_=["Faktura odeslána","Lead zapsán do CRM","Report vygenerován","Schůzka naplánována","Dotaz zodpovězen AI"];function ak(){const[t,e]=Q.useState(0);return Q.useEffect(()=>{const n=setInterval(()=>e(i=>(i+1)%g_.length),2400);return()=>clearInterval(n)},[]),E.jsxs("div",{className:"benefit ben-live spot-card","data-reveal":"120",children:[E.jsx("div",{className:"ben-top",children:E.jsxs("span",{className:"live-pill",children:[E.jsx("span",{className:"live-dot"}),"Živě"]})}),E.jsx("h3",{children:"Automatizace běží"}),E.jsx("div",{className:"live-rows",children:E.jsx(lu,{mode:"popLayout",initial:!1,children:E.jsxs(On.div,{className:"live-row",initial:{opacity:0,y:12,filter:"blur(4px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:-12,filter:"blur(4px)"},transition:{duration:.45,ease:[.22,1,.36,1]},children:[E.jsx(ju,{size:14,strokeWidth:2})," ",g_[t]]},t)})})]})}const xd=[hg,gg,Wu],_d=[oE,lE,pg,cE];function lk(){const t=Q.useRef(null),e=i=>{const r=t.current;if(!r)return;const s=r.getBoundingClientRect(),o=(i.clientX-s.left)/s.width-.5,a=(i.clientY-s.top)/s.height-.5;r.style.setProperty("--tx",a*-10+"deg"),r.style.setProperty("--ty",o*12+"deg")},n=()=>{const i=t.current;i&&(i.style.setProperty("--tx","0deg"),i.style.setProperty("--ty","0deg"))};return E.jsx("div",{className:"ben-center","data-reveal":"0",ref:t,onMouseMove:e,onMouseLeave:n,children:E.jsxs("div",{className:"ben-center-tilt",children:[E.jsx(dE,{className:"ben-center-video",src:fE(34690)}),E.jsx("span",{className:"ben-center-glow","aria-hidden":!0}),E.jsx("span",{className:"orbit-ring r1","aria-hidden":!0,children:xd.map((i,r)=>E.jsx("span",{className:"orbit-hold",style:{transform:`rotate(${360/xd.length*r}deg)`},children:E.jsx("span",{className:"orbit-ic",style:{"--r":`${360/xd.length*r}deg`},children:E.jsx(i,{size:14,strokeWidth:1.9})})},r))}),E.jsx("span",{className:"orbit-ring r2","aria-hidden":!0,children:_d.map((i,r)=>E.jsx("span",{className:"orbit-hold",style:{transform:`rotate(${360/_d.length*r}deg)`},children:E.jsx("span",{className:"orbit-ic out",style:{"--r":`${360/_d.length*r}deg`},children:E.jsx(i,{size:14,strokeWidth:1.9})})},r))}),E.jsx("span",{className:"ben-center-mark",children:"S"}),E.jsxs("span",{className:"ben-center-cap",children:["Jedno AI jádro,",E.jsx("br",{}),"všechny kanály"]})]})})}const yd="hello@sitespot.cz";function ck({open:t,onClose:e}){const[n,i]=Q.useState("idle");Q.useEffect(()=>{if(!t)return;const s=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t,e]),Q.useEffect(()=>{t&&i("idle")},[t]);const r=async s=>{s.preventDefault();const o=Object.fromEntries(new FormData(s.target));i("sending");try{if(!(await fetch(`https://formsubmit.co/ajax/${yd}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...o,_subject:"Nová poptávka ze sitespot.cz",_captcha:"false",_template:"table"})})).ok)throw new Error;i("ok")}catch{i("err")}};return E.jsx(lu,{children:t&&E.jsx(On.div,{className:"cmodal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,children:E.jsxs(On.div,{className:"cmodal",role:"dialog","aria-modal":"true","aria-label":"Domluvit schůzku",initial:{opacity:0,y:34,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.97},transition:{type:"spring",stiffness:260,damping:26},onClick:s=>s.stopPropagation(),children:[E.jsx("button",{className:"cmodal-x","aria-label":"Zavřít",onClick:e,children:E.jsx(zF,{size:17,strokeWidth:2.2})}),n==="ok"?E.jsxs("div",{className:"cmodal-ok",children:[E.jsx("span",{className:"cmodal-ok-ic",children:E.jsx(ju,{size:44,strokeWidth:1.6})}),E.jsx("h3",{children:"Díky, zpráva je u nás!"}),E.jsx("p",{children:"Ozveme se vám do 24 hodin a domluvíme termín konzultace."}),E.jsx("button",{className:"cmodal-send",onClick:e,children:"Zavřít"})]}):E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"cmodal-head",children:[E.jsx("span",{className:"mark",children:"S"}),E.jsx("h3",{children:"Domluvit schůzku"}),E.jsx("p",{children:"30 minut zdarma. Napište nám, co řešíte, a ozveme se do 24 hodin."})]}),E.jsxs("form",{className:"cmodal-form",onSubmit:r,children:[E.jsxs("label",{children:["Jméno",E.jsx("input",{name:"name",required:!0,placeholder:"Jan Novák",autoComplete:"name"})]}),E.jsxs("label",{children:["E-mail",E.jsx("input",{name:"email",type:"email",required:!0,placeholder:"jan@firma.cz",autoComplete:"email"})]}),E.jsxs("label",{children:["Co potřebujete?",E.jsx("textarea",{name:"message",required:!0,rows:4,placeholder:"Např. potřebujeme nový web a automatizovat zpracování poptávek…"})]}),E.jsxs("button",{className:"cmodal-send",type:"submit",disabled:n==="sending",children:[n==="sending"?"Odesílám…":"Odeslat poptávku"," ",n!=="sending"&&E.jsx(Aa,{size:16,strokeWidth:2.2})]}),n==="err"&&E.jsxs("p",{className:"cmodal-err",children:["Odeslání se nepovedlo. Napište nám přímo na ",E.jsx("a",{href:`mailto:${yd}`,children:yd}),"."]})]})]})]})})})}function uk(){return Q.useRef(new Intl.NumberFormat("cs-CZ")).current}function fk({scene:t}){const e=Q.useRef(null),[n,i]=Q.useState(!1);return Q.useEffect(()=>{const r=e.current;if(!r)return;const s=new IntersectionObserver(([o])=>i(o.isIntersecting),{rootMargin:"-18% 0px -18% 0px"});return s.observe(r),()=>s.disconnect()},[]),E.jsx("div",{className:"spline-stage",ref:e,children:n?E.jsx(YU,{scene:t,className:"spline-canvas"}):E.jsx("div",{className:"spline-fallback",children:E.jsx("span",{className:"loader"})})})}const fE=t=>`https://assets.mixkit.co/videos/${t}/${t}-720.mp4`;function dE({src:t,className:e,poster:n}){const i=Q.useRef(null),[r,s]=Q.useState(!1);return Q.useEffect(()=>{const o=i.current;if(!o)return;const a=new IntersectionObserver(([l])=>{l.isIntersecting?o.play().catch(()=>{}):o.pause()},{threshold:.2});return a.observe(o),()=>a.disconnect()},[]),r?E.jsx("div",{className:`media-fallback ${e||""}`,"aria-hidden":!0}):E.jsx("video",{ref:i,className:e,src:t,poster:n,muted:!0,loop:!0,playsInline:!0,preload:"none",onError:()=>s(!0),"aria-hidden":!0})}function dk(){const[t,e]=Q.useState(!1),[n,i]=Q.useState(!1),r=T=>{T.preventDefault(),T.stopPropagation(),i(!0)},[s,o]=Q.useState(!1),[a,l]=Q.useState(""),[c,f]=Q.useState(0),[d,u]=Q.useState(0),[p,m]=Q.useState(0),S=Q.useRef(!1),g=Q.useRef(!1),h=Q.useRef(null),v=Q.useRef(null),y=uk(),{scrollYProgress:_}=f3({target:v,offset:["start start","end start"]}),C=Mc(_,[0,1],[1,.92]),A=Mc(_,[0,1],[28,46]),P=Mc(_,[0,1],[0,80]);Q.useEffect(()=>{const b=document.getElementById("ss-hero-panel"),N=document.getElementById("ss-stars");if(!b||!N)return;const F=N.getContext("2d"),z=Math.min(2,window.devicePixelRatio||1);let U=[],V=0,H=0,D=0;const O=()=>{V=b.clientWidth,H=b.clientHeight,N.width=V*z,N.height=H*z,F.setTransform(z,0,0,z,0,0);const K=Math.min(320,Math.round(V*H/8500));U=Array.from({length:K},()=>({x:Math.random()*V,y:Math.random()*H,r:Math.random()<.85?Math.random()*.9+.35:Math.random()*1.5+.9,p:Math.random()*Math.PI*2,s:.3+Math.random()*1.1,v:.01+Math.random()*.025}))},X=K=>{F.clearRect(0,0,V,H),F.fillStyle="#DDE4FF";for(const se of U)F.globalAlpha=.16+.72*Math.abs(Math.sin(se.p+K*45e-5*se.s)),F.beginPath(),F.arc(se.x,se.y,se.r,0,6.283),F.fill(),se.x+=se.v,se.x>V+2&&(se.x=-2);F.globalAlpha=1};let ee=!1;const re=K=>{X(K),D=requestAnimationFrame(re)},Ue=()=>{ee||(ee=!0,D=requestAnimationFrame(re))},je=()=>{ee=!1,cancelAnimationFrame(D)};O();const ze=new IntersectionObserver(([K])=>{K.isIntersecting?Ue():je()},{threshold:0});return ze.observe(b),window.addEventListener("resize",O),()=>{ze.disconnect(),je(),window.removeEventListener("resize",O)}},[]),Q.useEffect(()=>{const T=document.querySelector(".hero-video");if(!T)return;const b=z=>{z?T.play().catch(()=>{}):T.pause()},N=new IntersectionObserver(([z])=>b(z.isIntersecting),{threshold:0});N.observe(T);const F=()=>{const z=T.getBoundingClientRect();z.bottom>0&&z.top<window.innerHeight&&T.play().catch(()=>{})};return T.readyState>=2?F():T.addEventListener("canplay",F,{once:!0}),()=>{N.disconnect(),T.removeEventListener("canplay",F)}},[]),Q.useEffect(()=>{const T=document.querySelector("[data-scrub]");if(!T)return;[...T.childNodes].forEach(U=>{if(U.nodeType!==3||!U.textContent.trim())return;const V=document.createDocumentFragment();U.textContent.split(/(\s+)/).forEach(H=>{if(!H)return;if(/^\s+$/.test(H)){V.appendChild(document.createTextNode(H));return}const D=document.createElement("span");D.textContent=H,D.className="scrub-w",V.appendChild(D)}),T.replaceChild(V,U)});const b=T.querySelectorAll(".scrub-w");let N=!1;const F=()=>{N=!1;const U=T.getBoundingClientRect(),V=window.innerHeight,H=Math.min(1,Math.max(0,(V*.88-U.top)/(V*.5)));b.forEach((D,O)=>{const X=Math.min(1,Math.max(.12,H*(b.length+2)-O));D.style.opacity=X})},z=()=>{N||(N=!0,requestAnimationFrame(F))};return window.addEventListener("scroll",z,{passive:!0}),F(),()=>window.removeEventListener("scroll",z)},[]),Q.useEffect(()=>{const T=new IntersectionObserver(O=>{O.forEach(X=>{X.isIntersecting&&(X.target.style.opacity="1",X.target.style.transform="translateY(0px) scale(1)",X.target.style.filter="blur(0px)",T.unobserve(X.target))})},{threshold:.1,rootMargin:"0px 0px -6% 0px"}),b=new IntersectionObserver(O=>{O.forEach(X=>{X.isIntersecting&&(b.unobserve(X.target),X.target.querySelectorAll(".ss-w").forEach(ee=>{ee.style.opacity="1",ee.style.transform="translateY(0)",ee.style.filter="blur(0px)"}))})},{threshold:.35}),N=O=>{[...O.childNodes].forEach(X=>{if(X.nodeType===3&&X.textContent.trim()){const ee=document.createDocumentFragment();X.textContent.split(/(\s+)/).forEach(re=>{if(!re)return;if(/^\s+$/.test(re)){ee.appendChild(document.createTextNode(re));return}const Ue=document.createElement("span");Ue.textContent=re,Ue.className="ss-w",Ue.style.display="inline-block",ee.appendChild(Ue)}),O.replaceChild(ee,X)}else X.nodeType===1&&X.tagName!=="BR"&&!X.classList.contains("ss-w")&&(X.classList.add("ss-w"),getComputedStyle(X).display==="inline"&&(X.style.display="inline-block"))})},F=new WeakSet,z=new WeakSet,U=()=>{document.querySelectorAll("[data-reveal]").forEach(O=>{if(F.has(O)||(F.add(O),O.getBoundingClientRect().top<window.innerHeight*.88))return;const ee=parseInt(O.getAttribute("data-reveal")||"0",10);O.style.opacity="0",O.style.transform="translateY(28px) scale(0.94)",O.style.filter="blur(8px)",O.style.transition=`opacity 0.7s ease ${ee}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${ee}ms, filter 0.7s ease ${ee}ms`,T.observe(O)}),document.querySelectorAll("[data-split]").forEach(O=>{z.has(O)||(z.add(O),O.getBoundingClientRect().top<window.innerHeight*.85)||(N(O),O.querySelectorAll(".ss-w").forEach((ee,re)=>{ee.style.opacity="0",ee.style.transform="translateY(1.05em)",ee.style.filter="blur(12px)",ee.style.transition=`opacity 0.6s ease ${re*70}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${re*70}ms, filter 0.6s ease ${re*70}ms`}),b.observe(O))})};U();const V=setTimeout(U,400),H=setTimeout(U,1200),D=new IntersectionObserver(O=>{O.forEach(X=>{if(!X.isIntersecting)return;D.unobserve(X.target);const ee=X.target,re=parseFloat(ee.getAttribute("data-count")),Ue=ee.getAttribute("data-suffix")||"",je=ee.getAttribute("data-prefix")||"",ze=performance.now(),K=1500,se=ae=>{const De=Math.min(1,(ae-ze)/K),Fe=1-Math.pow(1-De,3);ee.textContent=je+y.format(Math.round(re*Fe))+Ue,De<1&&requestAnimationFrame(se)};requestAnimationFrame(se)})},{threshold:.5});return document.querySelectorAll("[data-count]").forEach(O=>D.observe(O)),()=>{T.disconnect(),b.disconnect(),D.disconnect(),clearTimeout(V),clearTimeout(H)}},[y]),Q.useEffect(()=>{const T=["sluzby","proces","reference","cenik","faq"],b=new IntersectionObserver(H=>{H.forEach(D=>{D.isIntersecting&&l(D.target.id)})},{rootMargin:"-30% 0px -60% 0px"});T.forEach(H=>{const D=document.getElementById(H);D&&b.observe(D)});const N=document.getElementById("ss-hero-content"),F=[...document.querySelectorAll("[data-parallax]")].map(H=>[H,parseFloat(H.getAttribute("data-parallax"))]);let z=!1;const U=()=>{z=!1;const H=window.scrollY;N&&H<window.innerHeight*1.1&&(N.style.transform=`translateY(${H*.28}px)`,N.style.opacity=String(Math.max(0,1-H/640)));for(const[D,O]of F)D.style.transform=`translateY(${H*O}px)`},V=()=>{z||(z=!0,requestAnimationFrame(U))};return window.addEventListener("scroll",V,{passive:!0}),()=>{b.disconnect(),window.removeEventListener("scroll",V)}},[]),Q.useEffect(()=>{const T=window.matchMedia("(max-width: 640px)"),b=()=>o(T.matches);return b(),T.addEventListener("change",b),()=>T.removeEventListener("change",b)},[]),Q.useEffect(()=>{const T=new E3({lerp:.09,wheelMultiplier:1,smoothWheel:!0,syncTouch:!1});let b=requestAnimationFrame(function F(z){T.raf(z),b=requestAnimationFrame(F)});const N=F=>{const z=F.target.closest('a[href^="#"]');if(!z)return;const U=z.getAttribute("href");if(!U||U.length<2)return;const V=document.querySelector(U);V&&(F.preventDefault(),T.scrollTo(V,{offset:-90}),e(!1))};return document.addEventListener("click",N),()=>{cancelAnimationFrame(b),document.removeEventListener("click",N),T.destroy()}},[]),Q.useEffect(()=>{const T=b=>{t&&h.current&&!h.current.contains(b.target)&&e(!1)};return document.addEventListener("click",T),()=>document.removeEventListener("click",T)},[t]),Q.useEffect(()=>{const T=setInterval(()=>{S.current||f(b=>(b+1)%Zr.length)},7e3);return()=>clearInterval(T)},[]),Q.useEffect(()=>{const T=setInterval(()=>{g.current||u(b=>(b+1)%gr.length)},5e3);return()=>clearInterval(T)},[]);const x=()=>e(!1),R=Q.useRef(null);return Q.useEffect(()=>{const T=R.current;if(!T)return;let b=!1,N=0,F=0;const z=V=>{N=V.clientX,F=V.clientY,!b&&(b=!0,requestAnimationFrame(()=>{T.style.setProperty("--sx",N+"px"),T.style.setProperty("--sy",F+"px"),b=!1}))},U=()=>{T.style.opacity=window.scrollY>window.innerHeight*.72?"1":"0"};return window.addEventListener("mousemove",z,{passive:!0}),window.addEventListener("scroll",U,{passive:!0}),U(),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("scroll",U)}},[]),Q.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const b=[...document.querySelectorAll(".btn-light, .notch-cta, .plan-cta.primary, .cta .go")].map(N=>{N.classList.add("magnetic");const F=U=>{const V=N.getBoundingClientRect(),H=U.clientX-(V.left+V.width/2),D=U.clientY-(V.top+V.height/2);N.style.setProperty("--magx",H*.22+"px"),N.style.setProperty("--magy",D*.3+"px")},z=()=>{N.style.setProperty("--magx","0px"),N.style.setProperty("--magy","0px")};return N.addEventListener("mousemove",F,{passive:!0}),N.addEventListener("mouseleave",z),()=>{N.removeEventListener("mousemove",F),N.removeEventListener("mouseleave",z)}});return()=>b.forEach(N=>N())},[]),Q.useEffect(()=>{let T=!1,b=0,N=0,F=null;const z=U=>{b=U.clientX,N=U.clientY,!T&&(T=!0,requestAnimationFrame(()=>{var H;const V=(H=document.elementFromPoint(b,N))==null?void 0:H.closest(".spot-card");if(V){const D=V.getBoundingClientRect();V.style.setProperty("--mx",(b-D.left)/D.width*100+"%"),V.style.setProperty("--my",(N-D.top)/D.height*100+"%")}F&&F!==V&&F.style.removeProperty("--mx"),F=V||null,T=!1}))};return window.addEventListener("mousemove",z,{passive:!0}),()=>window.removeEventListener("mousemove",z)},[]),E.jsxs("div",{className:"page",children:[E.jsx("div",{className:"grain","aria-hidden":!0}),E.jsx("div",{className:"cursor-spot",ref:R,"aria-hidden":!0}),E.jsx("div",{className:"nav-wrap",children:E.jsxs(On.div,{ref:h,className:"nav-island",layout:!0,transition:Kr,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[E.jsx("div",{className:"nav-corner left","aria-hidden":!0}),E.jsx("div",{className:"nav-corner right","aria-hidden":!0}),E.jsxs(On.nav,{className:"nav",layout:!0,transition:Kr,children:[E.jsxs("a",{href:"#hero",className:"nav-logo",onClick:x,children:[E.jsx("span",{className:"mark",children:"S"}),E.jsx(lu,{initial:!1,children:t&&!s&&E.jsx(On.span,{className:"name",initial:{opacity:0,width:0,marginLeft:0},animate:{opacity:1,width:"auto",marginLeft:9},exit:{opacity:0,width:0,marginLeft:0},transition:Kr,children:"SiteSpot"})})]}),E.jsx(lu,{initial:!1,children:t&&E.jsx(On.div,{className:`nav-links${s?" mobile":""}`,layout:!0,initial:{width:0,opacity:0},animate:{width:"auto",opacity:1},exit:{width:0,opacity:0},transition:Kr,children:qF.map((T,b)=>E.jsx(On.a,{href:T.href,onClick:x,className:`nav-link${a===T.id?" active":""}`,initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{...Kr,delay:.02*b},children:T.label},T.id))})}),E.jsxs("button",{className:"nav-burger","aria-label":"Menu",onClick:T=>{T.stopPropagation(),e(b=>!b)},children:[E.jsx(On.span,{animate:{rotate:t?45:0,y:t?3:0},transition:Kr}),E.jsx(On.span,{animate:{rotate:t?-45:0,y:t?-3:0},transition:Kr})]})]})]})}),E.jsx("section",{id:"hero",className:"hero",ref:v,children:E.jsxs(On.div,{id:"ss-hero-panel",className:"hero-panel",style:{scale:C,borderRadius:A},children:[E.jsxs(On.div,{className:"hero-media",style:{y:P},"aria-hidden":!0,children:[E.jsx(BU,{}),E.jsx("video",{className:"hero-video",muted:!0,loop:!0,playsInline:!0,preload:"metadata",onError:T=>{T.currentTarget.style.display="none"},onLoadedData:T=>{T.currentTarget.classList.add("ready")},children:E.jsx("source",{src:"/media/hero.mp4",type:"video/mp4"})})]}),E.jsx("canvas",{id:"ss-stars",className:"hero-stars"}),E.jsx("div",{className:"hero-glow a","data-parallax":"0.06","aria-hidden":!0}),E.jsx("div",{className:"hero-glow b","data-parallax":"0.04","aria-hidden":!0}),E.jsxs("div",{id:"ss-hero-content",className:"hero-content",children:[E.jsxs("div",{className:"hero-badge",children:[E.jsx("span",{className:"tag",children:"Nové"}),E.jsx("span",{className:"label",children:"AI agenti na míru"})]}),E.jsxs("h1",{children:["Proměníme váš web",E.jsx("br",{}),"ve stroj na zákazníky."]}),E.jsx("p",{children:"Stavíme weby, které prodávají, a AI automatizace, které šetří čas a peníze — bez zbytečné složitosti."}),E.jsxs("div",{className:"hero-actions",children:[E.jsx(na,{href:"#kontakt",className:"btn-light",onClick:r,children:"Nezávazná konzultace"}),E.jsx(na,{href:"#sluzby",className:"btn-ghost",children:"Naše služby"})]})]}),E.jsxs("div",{className:"hero-notch",children:[E.jsx("div",{className:"corner left","aria-hidden":!0}),E.jsx("div",{className:"corner right","aria-hidden":!0}),E.jsxs("div",{className:"notch-inner",children:[E.jsx("span",{className:"brand",title:"Framer","aria-label":"Framer",children:E.jsx(HU,{h:18})}),E.jsx(na,{href:"#kontakt",className:"notch-cta",onClick:r,children:"Domluvit schůzku"}),E.jsx("span",{className:"brand",title:"Claude","aria-label":"Claude",children:E.jsx(iE,{h:20})})]})]})]})}),E.jsxs("section",{className:"bignum",children:[E.jsx("div",{className:"bignum-ghost","aria-hidden":!0,children:"14K"}),E.jsxs("h2",{className:"bignum-head","data-scrub":"1",children:["Šetříme firmám přes 14 000 hodin",E.jsx("br",{}),"práce každý rok."]})]}),E.jsxs("section",{id:"proces",className:"section dark",children:[E.jsx("div",{className:"blob","data-parallax":"-0.05","aria-hidden":!0,style:{top:-200,left:-160,width:520,height:520,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 18%, transparent), transparent 70%)",filter:"blur(60px)"}}),E.jsxs("div",{className:"wrap proc-pin",children:[E.jsx("div",{className:"proc-sticky",children:E.jsxs("div",{className:"head",children:[E.jsxs("div",{className:"eyebrow","data-reveal":"0",children:[E.jsx("span",{className:"dot"}),"Jak pracujeme"]}),E.jsx("h2",{"data-split":"1",children:"Tři kroky od poptávky k růstu"}),E.jsx("p",{className:"sub","data-reveal":"120",children:"Žádné nekonečné schůzky. Jasný proces, jasné termíny, měřitelné výsledky."})]})}),E.jsx("div",{className:"proc-steps",children:KF.map((T,b)=>E.jsxs("div",{className:"card hoverable pad spot-card","data-reveal":b*100,children:[E.jsxs("div",{className:"step-head",children:[E.jsx("div",{className:"step-ic",children:E.jsx(Ws,{C:HF[b],size:22})}),E.jsx("div",{className:"step-no",children:T.no})]}),E.jsx("h3",{children:T.h}),E.jsx("p",{children:T.p}),E.jsx("div",{className:"proc-media",children:E.jsx(dE,{className:"proc-media-el",src:fE(rk[b])})})]},b))})]})]}),E.jsxs("section",{id:"sluzby",className:"section clip",children:[E.jsx("div",{className:"blob","data-parallax":"0.05","aria-hidden":!0,style:{top:120,right:-200,width:560,height:560,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 70%)",filter:"blur(70px)"}}),E.jsxs("div",{className:"wrap",children:[E.jsxs("div",{className:"head",children:[E.jsxs("div",{className:"eyebrow","data-reveal":"0",children:[E.jsx("span",{className:"dot"}),"Služby"]}),E.jsx("h2",{"data-split":"1",children:"Vše, co váš růst potřebuje. Pod jednou střechou."})]}),E.jsx("div",{className:"grid g-serv-bento",children:ZF.map((T,b)=>E.jsxs("div",{className:"card hoverable serv-b spot-card","data-reveal":b%3*90,children:[T.textFirst&&E.jsxs("div",{className:"serv-b-text",children:[E.jsx("div",{className:"icon sm",children:E.jsx(Ws,{C:m_[b],size:18,color:"#fff"})}),E.jsx("h3",{children:T.h}),E.jsx("p",{children:T.p})]}),E.jsx(sk,{type:T.type}),!T.textFirst&&E.jsxs("div",{className:"serv-b-text",children:[E.jsx("div",{className:"icon sm",children:E.jsx(Ws,{C:m_[b],size:18,color:"#fff"})}),E.jsx("h3",{children:T.h}),E.jsx("p",{children:T.p})]})]},b))})]})]}),E.jsx("section",{id:"ai-agent",className:"section clip",children:E.jsx("div",{className:"wrap",children:E.jsxs("div",{className:"spline-card","data-reveal":"0",children:[E.jsx("div",{className:"spline-spot","aria-hidden":!0}),E.jsxs("div",{className:"spline-copy",children:[E.jsxs("h2",{children:["Živý AI agent,",E.jsx("br",{}),"který pracuje za vás."]}),E.jsx("p",{children:"Postavíme vám vlastní AI systém napojený na vaše nástroje — vyřizuje dotazy, třídí poptávky a jedná sám. Nonstop, bez přestávek, bez chyb z únavy."}),E.jsx(na,{href:"#kontakt",className:"btn-light",onClick:r,children:"Chci svého AI agenta"})]}),E.jsx(fk,{scene:"https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"})]})})}),E.jsxs("section",{id:"reference",className:"section dark",children:[E.jsx("div",{className:"blob","data-parallax":"-0.04","aria-hidden":!0,style:{bottom:-220,left:"35%",width:560,height:520,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 70%)",filter:"blur(70px)"}}),E.jsxs("div",{className:"wrap",children:[E.jsx("div",{className:"head",children:E.jsx("h2",{"data-split":"1",children:"Výsledky, které se dají změřit"})}),E.jsxs("div",{className:"case3d","data-reveal":"0",onMouseEnter:()=>g.current=!0,onMouseLeave:()=>g.current=!1,children:[E.jsx("div",{className:"case3d-stage",children:gr.map((T,b)=>{let N=b-d;N>1&&(N-=gr.length),N<-1&&(N+=gr.length);const F=Math.abs(N),z={transform:`translateX(${N*58}%) translateZ(${-F*170}px) rotateY(${N*-34}deg) scale(${1-F*.1})`,opacity:F>1?0:1-F*.04,zIndex:10-F,pointerEvents:F>1?"none":"auto",filter:F>0?"brightness(0.94)":"none"};return E.jsxs("div",{className:`case3d-card card case spot-card trend-${T.trend}${N===0?" is-active":""}`,style:z,onClick:()=>u(b),children:[E.jsx("div",{className:"case-glow","aria-hidden":!0}),E.jsxs("div",{className:"case-top",children:[E.jsx("span",{className:"case-ic",children:E.jsx(Ws,{C:jF[b],size:18,color:"#fff"})}),E.jsx("span",{className:"kicker",children:T.k})]}),E.jsxs("div",{className:"big grad","data-count":T.num,"data-prefix":T.prefix,"data-suffix":T.suffix,children:[T.prefix,y.format(T.num),T.suffix]}),E.jsx("div",{className:"lead",children:T.lead}),E.jsx(QF,{dir:T.trend}),E.jsxs("div",{className:"case-ba",children:[E.jsx("span",{className:"ba-val from",children:T.from}),E.jsx(Aa,{size:14,strokeWidth:2.2,className:"ba-arrow"}),E.jsx("span",{className:"ba-val to",children:T.to}),E.jsx("span",{className:"ba-metric",children:T.metric})]}),E.jsx("p",{children:T.p})]},b)})}),E.jsxs("div",{className:"case3d-nav",children:[E.jsx("button",{className:"t-arrow","aria-label":"Předchozí",onClick:()=>u(T=>(T+gr.length-1)%gr.length),children:"←"}),E.jsx("div",{className:"t-dots",children:gr.map((T,b)=>E.jsx("button",{className:`t-dot${b===d?" on":""}`,"aria-label":"Přejít na studii",onClick:()=>u(b)},b))}),E.jsx("button",{className:"t-arrow","aria-label":"Další",onClick:()=>u(T=>(T+1)%gr.length),children:"→"})]})]})]})]}),E.jsx("section",{id:"benefity",className:"section",children:E.jsxs("div",{className:"wrap",children:[E.jsx("div",{className:"head",children:E.jsx("h2",{"data-split":"1",children:"Partner, ne dodavatel"})}),E.jsxs("div",{className:"grid g-ben-bento",children:[JF.map((T,b)=>E.jsxs("div",{className:`benefit bento-pos-${b} spot-card`,"data-reveal":b%3*60,children:[E.jsxs("div",{className:"ben-top",children:[E.jsx("div",{className:"ben-ic",children:E.jsx(Ws,{C:GF[b],size:20,color:"#fff"})}),E.jsx("span",{className:"ben-stat",children:T.stat})]}),E.jsx("h3",{children:T.h}),E.jsx("p",{children:T.p})]},b)),E.jsx(ok,{}),E.jsx(ak,{}),E.jsx(lk,{})]})]})}),E.jsx("section",{id:"ohlasy",className:"section",children:E.jsxs("div",{className:"wrap",children:[E.jsx("div",{className:"head",style:{marginBottom:44},children:E.jsx("h2",{"data-split":"1",children:"Co říkají naši klienti"})}),E.jsxs("div",{className:"dbc","data-reveal":"0",onMouseEnter:()=>S.current=!0,onMouseLeave:()=>S.current=!1,children:[E.jsx("div",{className:"dbc-stage",children:Zr.map((T,b)=>{const N=Zr.length;let F=b-c;F>N/2&&(F-=N),F<-N/2&&(F+=N);const z=Math.abs(F),U={transform:`translateX(${F*300}px) translateZ(${-z*220}px) rotateY(${Math.sign(F)*Math.min(z*35,60)}deg) scale(${1-z*.14})`,opacity:z>2?0:1-z*.22,filter:`blur(${z*3.2}px)`,zIndex:10-z,pointerEvents:z>1?"none":"auto"};return E.jsxs("figure",{className:`dbc-card spot-card${F===0?" is-active":""}`,style:U,onClick:()=>f(b),children:[E.jsx("div",{className:"t-stars",children:[0,1,2,3,4].map(V=>E.jsx(FF,{size:15,fill:"currentColor",strokeWidth:0},V))}),E.jsxs("blockquote",{children:["„",T.quote,"“"]}),E.jsxs("figcaption",{children:[E.jsx(YF,{name:T.name,size:46}),E.jsxs("span",{className:"dbc-meta",children:[E.jsxs("span",{className:"t-name",children:[T.name,E.jsx("span",{className:"t-verified",title:"Ověřená reference",children:E.jsx(ju,{size:13,strokeWidth:2.5})})]}),E.jsx("span",{className:"t-role",children:T.role})]})]})]},b)})}),E.jsx("div",{className:"dbc-edge left","aria-hidden":!0}),E.jsx("div",{className:"dbc-edge right","aria-hidden":!0}),E.jsxs("div",{className:"dbc-nav",children:[E.jsx("button",{className:"t-arrow","aria-label":"Předchozí",onClick:()=>f(T=>(T+Zr.length-1)%Zr.length),children:"←"}),E.jsx("div",{className:"t-dots",children:Zr.map((T,b)=>E.jsx("button",{className:`t-dot${b===c?" on":""}`,"aria-label":"Přejít na referenci",onClick:()=>f(b)},b))}),E.jsx("button",{className:"t-arrow","aria-label":"Další",onClick:()=>f(T=>(T+1)%Zr.length),children:"→"})]})]})]})}),E.jsxs("section",{id:"cenik",className:"section dark",children:[E.jsx("div",{className:"blob","data-parallax":"0.04","aria-hidden":!0,style:{top:80,left:"50%",marginLeft:-300,width:600,height:420,background:"radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 72%)",filter:"blur(70px)"}}),E.jsxs("div",{className:"wrap",children:[E.jsxs("div",{className:"head",children:[E.jsxs("div",{className:"eyebrow","data-reveal":"0",children:[E.jsx("span",{className:"dot"}),"Ceník"]}),E.jsx("h2",{"data-split":"1",children:"Férové ceny, žádná překvapení"}),E.jsx("p",{className:"sub","data-reveal":"120",children:"Cenu znáte vždy předem. Fixně, písemně a bez skrytých položek."})]}),E.jsx("div",{className:"grid g-price",children:ek.map((T,b)=>E.jsxs("div",{className:`plan spot-card${T.featured?" featured":""}`,"data-reveal":b*100,children:[T.featured&&E.jsx("div",{className:"badge",children:"Nejoblíbenější"}),E.jsxs("div",{className:"tier",children:[E.jsx(Ws,{C:WF[b],size:20,color:T.featured?"#E8EAED":"#C9C9CE"})," ",T.tier]}),E.jsx("div",{className:"price",children:T.price}),E.jsx("div",{className:"per",children:T.per}),E.jsx("p",{className:"desc",children:T.desc}),E.jsx("hr",{}),E.jsx("div",{className:"feat-list",children:T.feats.map((N,F)=>E.jsxs("div",{className:"row",children:[E.jsx("span",{className:"ok",children:E.jsx(sF,{size:13,strokeWidth:3})}),N]},F))}),E.jsx(na,{href:"#kontakt",className:`plan-cta mt-auto${T.featured?" primary":""}`,onClick:r,children:T.cta})]},b))})]})]}),E.jsx("section",{id:"srovnani",className:"section",children:E.jsxs("div",{className:"wrap",children:[E.jsx("div",{className:"head",children:E.jsxs("h2",{"data-split":"1",children:["Tradiční způsob vs",E.jsx("br",{}),"AI automatizace"]})}),E.jsxs("div",{className:"cmp-bar","data-reveal":"0",children:[E.jsxs("div",{className:"cmp-bar-side left",children:[E.jsx(sE,{size:15,strokeWidth:2})," Tradiční způsob"]}),E.jsxs("div",{className:"cmp-bar-side right",children:[E.jsx(gg,{size:15,strokeWidth:2,fill:"currentColor"})," SiteSpot automatizace"]}),E.jsx("span",{className:"cmp-bar-vs",children:"VS"})]}),E.jsxs("div",{className:"grid g-cmp",children:[E.jsx("div",{className:"cmp bad","data-reveal":"60",children:E.jsx("div",{className:"list",children:tk.map((T,b)=>E.jsxs("div",{className:"row",children:[E.jsx("span",{className:"cdot bad"}),T]},b))})}),E.jsx("div",{className:"cmp good","data-reveal":"120",children:E.jsx("div",{className:"list",children:nk.map((T,b)=>E.jsxs("div",{className:"row",children:[E.jsx("span",{className:"cdot good"}),T]},b))})})]})]})}),E.jsx("section",{id:"faq",className:"section dark",children:E.jsxs("div",{className:"faq-wrap",children:[E.jsx("div",{className:"head",style:{marginBottom:48},children:E.jsx("h2",{"data-split":"1",children:"Na co se ptáte nejčastěji"})}),E.jsx("div",{className:"faq-list",children:ik.map((T,b)=>E.jsxs("div",{className:`faq-item spot-card${p===b?" open":""}`,onClick:()=>m(p===b?-1:b),children:[E.jsxs("div",{className:"faq-q",children:[E.jsx("span",{className:"q",children:T.q}),E.jsx("span",{className:"plus",children:"+"})]}),E.jsx("div",{className:"faq-a",children:E.jsx("div",{className:"inner",children:E.jsx("p",{children:T.a})})})]},b))})]})}),E.jsxs("section",{id:"kontakt",className:"cta",children:[E.jsx("div",{className:"pulse","aria-hidden":!0}),E.jsxs("div",{className:"inner",children:[E.jsxs("h2",{"data-split":"1",children:["Přestaňte web jen mít.",E.jsx("br",{}),"Nechte ho ",E.jsx("span",{className:"grad",children:"vydělávat"}),"."]}),E.jsx("p",{"data-reveal":"150",children:"30 minut, konkrétní doporučení pro váš byznys, žádné závazky. Nejhorší, co se může stát? Odnesete si nápady zdarma."}),E.jsxs("a",{className:"go hbtn",href:"#kontakt",onClick:r,"data-reveal":"250",children:[E.jsx("span",{className:"hbtn-label",children:"Domluvit konzultaci zdarma"}),E.jsx("span",{className:"hbtn-arrow","aria-hidden":!0,children:E.jsx(Aa,{size:18,strokeWidth:2})})]})]})]}),E.jsx("footer",{className:"footer",children:E.jsxs("div",{className:"footer-inner",children:[E.jsxs("div",{className:"footer-grid",children:[E.jsxs("div",{className:"footer-col brand",children:[E.jsxs("div",{className:"footer-brand",children:[E.jsx("span",{className:"mark",children:"S"}),E.jsx("span",{className:"name",children:"SiteSpot"})]}),E.jsx("p",{children:"Digitální agentura pro firmy, které chtějí růst. Weby, AI automatizace, leady a marketing."})]}),E.jsxs("div",{className:"footer-col",children:[E.jsx("div",{className:"footer-head",children:"Navigace"}),E.jsx("a",{href:"#sluzby",children:"Služby"}),E.jsx("a",{href:"#proces",children:"Jak pracujeme"}),E.jsx("a",{href:"#reference",children:"Reference"}),E.jsx("a",{href:"#cenik",children:"Ceník"}),E.jsx("a",{href:"#faq",children:"FAQ"})]}),E.jsxs("div",{className:"footer-col",children:[E.jsx("div",{className:"footer-head",children:"Kontakt"}),E.jsxs("a",{href:"mailto:hello@sitespot.cz",children:[E.jsx(mF,{size:15,strokeWidth:1.7})," hello@sitespot.cz"]}),E.jsxs("a",{href:"tel:+420777123456",children:[E.jsx(MF,{size:15,strokeWidth:1.7})," +420 777 123 456"]}),E.jsxs("span",{style:{color:"var(--muted)",fontSize:"14.5px",display:"inline-flex",alignItems:"center",gap:8},children:[E.jsx(vF,{size:15,strokeWidth:1.7})," Praha · pracujeme po celé ČR"]}),E.jsxs("div",{className:"footer-social",children:[E.jsx("a",{href:"#hero",children:"LinkedIn"}),E.jsx("a",{href:"#hero",children:"Instagram"}),E.jsx("a",{href:"#hero",children:"X"})]})]}),E.jsxs("div",{className:"footer-col",children:[E.jsx("div",{className:"footer-head",children:"Newsletter"}),E.jsx("p",{style:{margin:0,fontSize:"13.5px",lineHeight:1.6,color:"#8A8E99"},children:"Jednou měsíčně tipy na růst. Žádný spam."}),E.jsxs("div",{className:"news-row",children:[E.jsx("input",{placeholder:"vas@email.cz"}),E.jsxs("button",{className:"hbtn",children:[E.jsx("span",{className:"hbtn-label",children:"Odebírat"}),E.jsx("span",{className:"hbtn-arrow","aria-hidden":!0,children:E.jsx(Aa,{size:14,strokeWidth:2.3})})]})]})]})]}),E.jsxs("div",{className:"footer-note",children:[E.jsx("span",{children:"© 2026 SiteSpot s.r.o. Všechna práva vyhrazena."}),E.jsx("span",{children:"Vyrobeno v Praze ⚡"})]})]})}),E.jsx(ck,{open:n,onClose:()=>i(!1)})]})}RS(document.getElementById("root")).render(E.jsx(dk,{}));export{XU as _,E as j,Q as r};
