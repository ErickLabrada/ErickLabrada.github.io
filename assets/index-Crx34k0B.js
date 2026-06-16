var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var r={},i=[],a=()=>{},o=()=>!1,s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith(`onUpdate:`),l=Object.assign,u=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>C(e)===`[object Map]`,h=e=>C(e)===`[object Set]`,g=e=>C(e)===`[object Date]`,_=e=>typeof e==`function`,v=e=>typeof e==`string`,y=e=>typeof e==`symbol`,b=e=>typeof e==`object`&&!!e,x=e=>(b(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,C=e=>S.call(e),ee=e=>C(e).slice(8,-1),te=e=>C(e)===`[object Object]`,ne=e=>v(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,re=n(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ie=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ae=/-\w/g,w=ie(e=>e.replace(ae,e=>e.slice(1).toUpperCase())),oe=/\B([A-Z])/g,se=ie(e=>e.replace(oe,`-$1`).toLowerCase()),ce=ie(e=>e.charAt(0).toUpperCase()+e.slice(1)),le=ie(e=>e?`on${ce(e)}`:``),T=(e,t)=>!Object.is(e,t),ue=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},de=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},fe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},pe,me=()=>pe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function he(e){if(p(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=v(r)?ye(r):he(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(v(e)||b(e))return e}var ge=/;(?![^(]*\))/g,_e=/:([^]+)/,ve=/\/\*[^]*?\*\//g;function ye(e){let t={};return e.replace(ve,``).split(ge).forEach(e=>{if(e){let n=e.split(_e);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function be(e){let t=``;if(v(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){let r=be(e[n]);r&&(t+=r+` `)}else if(b(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var xe=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Se=n(xe);xe+``;function Ce(e){return!!e||e===``}function we(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Te(e[r],t[r]);return n}function Te(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=y(e),r=y(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return n&&r?we(e,t):!1;if(n=b(e),r=b(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Te(e[n],t[n]))return!1}}return String(e)===String(t)}var Ee=e=>!!(e&&e.__v_isRef===!0),De=e=>v(e)?e:e==null?``:p(e)||b(e)&&(e.toString===S||!_(e.toString))?Ee(e)?De(e.value):JSON.stringify(e,Oe,2):String(e),Oe=(e,t)=>Ee(t)?Oe(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ke(t,r)+` =>`]=n,e),{})}:h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ke(e))}:y(t)?ke(t):b(t)&&!p(t)&&!te(t)?String(t):t,ke=(e,t=``)=>y(e)?`Symbol(${e.description??t})`:e,Ae,je=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Ae;try{return Ae=this,e()}finally{Ae=t}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){if(this._on>0&&--this._on===0){if(Ae===this)Ae=this.prevScope;else{let e=Ae;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Me(){return Ae}var E,Ne=new WeakSet,Pe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ne.has(this)&&(Ne.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Re(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ze(this),Ve(this);let e=E,t=qe;E=this,qe=!0;try{return this.fn()}finally{He(this),E=e,qe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ge(e);this.deps=this.depsTail=void 0,Ze(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ne.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ue(this)&&this.run()}get dirty(){return Ue(this)}},Fe=0,Ie,Le;function Re(e,t=!1){if(e.flags|=8,t){e.next=Le,Le=e;return}e.next=Ie,Ie=e}function ze(){Fe++}function Be(){if(--Fe>0)return;if(Le){let e=Le;for(Le=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ie;){let t=Ie;for(Ie=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ve(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function He(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ge(r),Ke(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ue(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(We(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function We(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qe)||(e.globalVersion=Qe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ue(e))))return;e.flags|=2;let t=e.dep,n=E,r=qe;E=e,qe=!0;try{Ve(e);let n=e.fn(e._value);(t.version===0||T(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{E=n,qe=r,He(e),e.flags&=-3}}function Ge(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ge(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ke(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var qe=!0,Je=[];function Ye(){Je.push(qe),qe=!1}function Xe(){let e=Je.pop();qe=e===void 0?!0:e}function Ze(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=E;E=void 0;try{t()}finally{E=e}}}var Qe=0,$e=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},et=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!E||!qe||E===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==E)t=this.activeLink=new $e(E,this),E.deps?(t.prevDep=E.depsTail,E.depsTail.nextDep=t,E.depsTail=t):E.deps=E.depsTail=t,tt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=E.depsTail,t.nextDep=void 0,E.depsTail.nextDep=t,E.depsTail=t,E.deps===t&&(E.deps=e)}return t}trigger(e){this.version++,Qe++,this.notify(e)}notify(e){ze();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Be()}}};function tt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)tt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var nt=new WeakMap,rt=Symbol(``),it=Symbol(``),at=Symbol(``);function ot(e,t,n){if(qe&&E){let t=nt.get(e);t||nt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new et),r.map=t,r.key=n),r.track()}}function st(e,t,n,r,i,a){let o=nt.get(e);if(!o){Qe++;return}let s=e=>{e&&e.trigger()};if(ze(),t===`clear`)o.forEach(s);else{let i=p(e),a=i&&ne(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===at||!y(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(at)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(rt)),m(e)&&s(o.get(it)));break;case`delete`:i||(s(o.get(rt)),m(e)&&s(o.get(it)));break;case`set`:m(e)&&s(o.get(rt));break}}Be()}function ct(e){let t=D(e);return t===e?t:(ot(t,`iterate`,at),Jt(e)?t:t.map(Zt))}function lt(e){return ot(e=D(e),`iterate`,at),e}function ut(e,t){return qt(e)?Qt(Kt(e)?Zt(t):t):Zt(t)}var dt={__proto__:null,[Symbol.iterator](){return ft(this,Symbol.iterator,e=>ut(this,e))},concat(...e){return ct(this).concat(...e.map(e=>p(e)?ct(e):e))},entries(){return ft(this,`entries`,e=>(e[1]=ut(this,e[1]),e))},every(e,t){return mt(this,`every`,e,t,void 0,arguments)},filter(e,t){return mt(this,`filter`,e,t,e=>e.map(e=>ut(this,e)),arguments)},find(e,t){return mt(this,`find`,e,t,e=>ut(this,e),arguments)},findIndex(e,t){return mt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return mt(this,`findLast`,e,t,e=>ut(this,e),arguments)},findLastIndex(e,t){return mt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return mt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return gt(this,`includes`,e)},indexOf(...e){return gt(this,`indexOf`,e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return gt(this,`lastIndexOf`,e)},map(e,t){return mt(this,`map`,e,t,void 0,arguments)},pop(){return _t(this,`pop`)},push(...e){return _t(this,`push`,e)},reduce(e,...t){return ht(this,`reduce`,e,t)},reduceRight(e,...t){return ht(this,`reduceRight`,e,t)},shift(){return _t(this,`shift`)},some(e,t){return mt(this,`some`,e,t,void 0,arguments)},splice(...e){return _t(this,`splice`,e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return _t(this,`unshift`,e)},values(){return ft(this,`values`,e=>ut(this,e))}};function ft(e,t,n){let r=lt(e),i=r[t]();return r!==e&&!Jt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var pt=Array.prototype;function mt(e,t,n,r,i,a){let o=lt(e),s=o!==e&&!Jt(e),c=o[t];if(c!==pt[t]){let t=c.apply(e,a);return s?Zt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ut(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ht(e,t,n,r){let i=lt(e),a=i!==e&&!Jt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ut(e,t)),n.call(this,t,ut(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ut(e,c):c}function gt(e,t,n){let r=D(e);ot(r,`iterate`,at);let i=r[t](...n);return(i===-1||i===!1)&&Yt(n[0])?(n[0]=D(n[0]),r[t](...n)):i}function _t(e,t,n=[]){Ye(),ze();let r=D(e)[t].apply(e,n);return Be(),Xe(),r}var vt=n(`__proto__,__v_isRef,__isVue`),yt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(y));function bt(e){y(e)||(e=String(e));let t=D(this);return ot(t,`has`,e),t.hasOwnProperty(e)}var xt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?zt:Rt:i?Lt:It).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=p(e);if(!r){let e;if(a&&(e=dt[t]))return e;if(t===`hasOwnProperty`)return bt}let o=Reflect.get(e,t,$t(e)?e:n);if((y(t)?yt.has(t):vt(t))||(r||ot(e,`get`,t),i))return o;if($t(o)){let e=a&&ne(t)?o:o.value;return r&&b(e)?Wt(e):e}return b(o)?r?Wt(o):Ht(o):o}},St=class extends xt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=p(e)&&ne(t);if(!this._isShallow){let e=qt(i);if(!Jt(n)&&!qt(n)&&(i=D(i),n=D(n)),!a&&$t(i)&&!$t(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:f(e,t),s=Reflect.set(e,t,n,$t(e)?e:r);return e===D(r)&&(o?T(n,i)&&st(e,`set`,t,n,i):st(e,`add`,t,n)),s}deleteProperty(e,t){let n=f(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&st(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!y(t)||!yt.has(t))&&ot(e,`has`,t),n}ownKeys(e){return ot(e,`iterate`,p(e)?`length`:rt),Reflect.ownKeys(e)}},Ct=class extends xt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},wt=new St,Tt=new Ct,Et=new St(!0),Dt=e=>e,Ot=e=>Reflect.getPrototypeOf(e);function kt(e,t,n){return function(...r){let i=this.__v_raw,a=D(i),o=m(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,u=i[e](...r),d=n?Dt:t?Qt:Zt;return!t&&ot(a,`iterate`,c?it:rt),l(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function At(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function jt(e,t){let n={get(n){let r=this.__v_raw,i=D(r),a=D(n);e||(T(n,a)&&ot(i,`get`,n),ot(i,`get`,a));let{has:o}=Ot(i),s=t?Dt:e?Qt:Zt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&ot(D(t),`iterate`,rt),t.size},has(t){let n=this.__v_raw,r=D(n),i=D(t);return e||(T(t,i)&&ot(r,`has`,t),ot(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=D(a),s=t?Dt:e?Qt:Zt;return!e&&ot(o,`iterate`,rt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return l(n,e?{add:At(`add`),set:At(`set`),delete:At(`delete`),clear:At(`clear`)}:{add(e){let n=D(this),r=Ot(n),i=D(e),a=!t&&!Jt(e)&&!qt(e)?i:e;return r.has.call(n,a)||T(e,a)&&r.has.call(n,e)||T(i,a)&&r.has.call(n,i)||(n.add(a),st(n,`add`,a,a)),this},set(e,n){!t&&!Jt(n)&&!qt(n)&&(n=D(n));let r=D(this),{has:i,get:a}=Ot(r),o=i.call(r,e);o||=(e=D(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?T(n,s)&&st(r,`set`,e,n,s):st(r,`add`,e,n),this},delete(e){let t=D(this),{has:n,get:r}=Ot(t),i=n.call(t,e);i||=(e=D(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&st(t,`delete`,e,void 0,a),o},clear(){let e=D(this),t=e.size!==0,n=e.clear();return t&&st(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=kt(r,e,t)}),n}function Mt(e,t){let n=jt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(f(n,r)&&r in t?n:t,r,i)}var Nt={get:Mt(!1,!1)},Pt={get:Mt(!1,!0)},Ft={get:Mt(!0,!1)},It=new WeakMap,Lt=new WeakMap,Rt=new WeakMap,zt=new WeakMap;function Bt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Vt(e){return e.__v_skip||!Object.isExtensible(e)?0:Bt(ee(e))}function Ht(e){return qt(e)?e:Gt(e,!1,wt,Nt,It)}function Ut(e){return Gt(e,!1,Et,Pt,Lt)}function Wt(e){return Gt(e,!0,Tt,Ft,Rt)}function Gt(e,t,n,r,i){if(!b(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Vt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Kt(e){return qt(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function Jt(e){return!!(e&&e.__v_isShallow)}function Yt(e){return e?!!e.__v_raw:!1}function D(e){let t=e&&e.__v_raw;return t?D(t):e}function Xt(e){return!f(e,`__v_skip`)&&Object.isExtensible(e)&&de(e,`__v_skip`,!0),e}var Zt=e=>b(e)?Ht(e):e,Qt=e=>b(e)?Wt(e):e;function $t(e){return e?e.__v_isRef===!0:!1}function en(e){return nn(e,!1)}function tn(e){return nn(e,!0)}function nn(e,t){return $t(e)?e:new rn(e,t)}var rn=class{constructor(e,t){this.dep=new et,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:D(e),this._value=t?e:Zt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Jt(e)||qt(e);e=n?e:D(e),T(e,t)&&(this._rawValue=e,this._value=n?e:Zt(e),this.dep.trigger())}};function an(e){return $t(e)?e.value:e}var on={get:(e,t,n)=>t===`__v_raw`?e:an(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return $t(i)&&!$t(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function sn(e){return Kt(e)?e:new Proxy(e,on)}var cn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new et(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&E!==this)return Re(this,!0),!0}get value(){let e=this.dep.track();return We(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function ln(e,t,n=!1){let r,i;return _(e)?r=e:(r=e.get,i=e.set),new cn(r,i,n)}var un={},dn=new WeakMap,fn=void 0;function pn(e,t=!1,n=fn){if(n){let t=dn.get(n);t||dn.set(n,t=[]),t.push(e)}}function mn(e,t,n=r){let{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:d}=n,f=e=>o?e:Jt(e)||o===!1||o===0?hn(e,1):hn(e),m,h,g,v,y=!1,b=!1;if($t(e)?(h=()=>e.value,y=Jt(e)):Kt(e)?(h=()=>f(e),y=!0):p(e)?(b=!0,y=e.some(e=>Kt(e)||Jt(e)),h=()=>e.map(e=>{if($t(e))return e.value;if(Kt(e))return f(e);if(_(e))return d?d(e,2):e()})):h=_(e)?t?d?()=>d(e,2):e:()=>{if(g){Ye();try{g()}finally{Xe()}}let t=fn;fn=m;try{return d?d(e,3,[v]):e(v)}finally{fn=t}}:a,t&&o){let e=h,t=o===!0?1/0:o;h=()=>hn(e(),t)}let x=Me(),S=()=>{m.stop(),x&&x.active&&u(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(un):un,ee=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(t){let e=m.run();if(o||y||(b?e.some((e,t)=>T(e,C[t])):T(e,C))){g&&g();let n=fn;fn=m;try{let n=[e,C===un?void 0:b&&C[0]===un?[]:C,v];C=e,d?d(t,3,n):t(...n)}finally{fn=n}}}else m.run()};return l&&l(ee),m=new Pe(h),m.scheduler=c?()=>c(ee,!1):ee,v=e=>pn(e,!1,m),g=m.onStop=()=>{let e=dn.get(m);if(e){if(d)d(e,4);else for(let t of e)t();dn.delete(m)}},t?i?ee(!0):C=m.run():c?c(ee.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function hn(e,t=1/0,n){if(t<=0||!b(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$t(e))hn(e.value,t,n);else if(p(e))for(let r=0;r<e.length;r++)hn(e[r],t,n);else if(h(e)||m(e))e.forEach(e=>{hn(e,t,n)});else if(te(e)){for(let r in e)hn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&hn(e[r],t,n)}return e}function gn(e,t,n,r){try{return r?e(...r):e()}catch(e){vn(e,t,n)}}function _n(e,t,n,r){if(_(e)){let i=gn(e,t,n,r);return i&&x(i)&&i.catch(e=>{vn(e,t,n)}),i}if(p(e)){let i=[];for(let a=0;a<e.length;a++)i.push(_n(e[a],t,n,r));return i}}function vn(e,t,n,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||r;if(t){let r=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}r=r.parent}if(o){Ye(),gn(o,null,10,[e,i,a]),Xe();return}}yn(e,n,a,i,s)}function yn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var bn=[],xn=-1,Sn=[],Cn=null,wn=0,Tn=Promise.resolve(),En=null;function Dn(e){let t=En||Tn;return e?t.then(this?e.bind(this):e):t}function On(e){let t=xn+1,n=bn.length;for(;t<n;){let r=t+n>>>1,i=bn[r],a=Pn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function kn(e){if(!(e.flags&1)){let t=Pn(e),n=bn[bn.length-1];!n||!(e.flags&2)&&t>=Pn(n)?bn.push(e):bn.splice(On(t),0,e),e.flags|=1,An()}}function An(){En||=Tn.then(Fn)}function jn(e){p(e)?Sn.push(...e):Cn&&e.id===-1?Cn.splice(wn+1,0,e):e.flags&1||(Sn.push(e),e.flags|=1),An()}function Mn(e,t,n=xn+1){for(;n<bn.length;n++){let t=bn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;bn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Nn(e){if(Sn.length){let e=[...new Set(Sn)].sort((e,t)=>Pn(e)-Pn(t));if(Sn.length=0,Cn){Cn.push(...e);return}for(Cn=e,wn=0;wn<Cn.length;wn++){let e=Cn[wn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Cn=null,wn=0}}var Pn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Fn(e){try{for(xn=0;xn<bn.length;xn++){let e=bn[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<bn.length;xn++){let e=bn[xn];e&&(e.flags&=-2)}xn=-1,bn.length=0,Nn(e),En=null,(bn.length||Sn.length)&&Fn(e)}}var In=null,Ln=null;function Rn(e){let t=In;return In=e,Ln=e&&e.type.__scopeId||null,t}function zn(e,t=In,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Zi(-1);let i=Rn(t),a;try{a=e(...n)}finally{Rn(i),r._d&&Zi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Bn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ye(),_n(c,n,8,[e.el,s,e,t]),Xe())}}function Vn(e,t){if(va){let n=va.provides,r=va.parent&&va.parent.provides;r===n&&(n=va.provides=Object.create(r)),n[e]=t}}function Hn(e,t,n=!1){let r=ya();if(r||Qr){let i=Qr?Qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_(t)?t.call(r&&r.proxy):t}}var Un=Symbol.for(`v-scx`),Wn=()=>Hn(Un);function Gn(e,t,n){return Kn(e,t,n)}function Kn(e,t,n=r){let{immediate:i,deep:o,flush:s,once:c}=n,u=l({},n),d=t&&i||!t&&s!==`post`,f;if(Ta){if(s===`sync`){let e=Wn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=a,e.resume=a,e.pause=a,e}}let p=va;u.call=(e,t,n)=>_n(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{ki(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():kn(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=mn(e,t,u);return Ta&&(f?f.push(h):d&&h()),h}function qn(e,t,n){let r=this.proxy,i=v(e)?e.includes(`.`)?Jn(r,e):()=>r[e]:e.bind(r,r),a;_(t)?a=t:(a=t.handler,n=t);let o=Sa(this),s=Kn(i,a.bind(r),n);return o(),s}function Jn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Yn=Symbol(`_vte`),Xn=e=>e.__isTeleport,Zn=Symbol(`_leaveCb`);function Qn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Qn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $n(e,t){return _(e)?l({name:e.name},t,{setup:e}):e}function er(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function tr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var nr=new WeakMap;function rr(e,t,n,i,a=!1){if(p(e)){e.forEach((e,r)=>rr(e,t&&(p(t)?t[r]:t),n,i,a));return}if(ar(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rr(e,t,n,i.component.subTree);return}let s=i.shapeFlag&4?Pa(i.component):i.el,c=a?null:s,{i:l,r:d}=e,m=t&&t.r,h=l.refs===r?l.refs={}:l.refs,g=l.setupState,y=D(g),b=g===r?o:e=>tr(h,e)?!1:f(y,e),x=(e,t)=>!(t&&tr(h,t));if(m!=null&&m!==d){if(ir(t),v(m))h[m]=null,b(m)&&(g[m]=null);else if($t(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(_(d))gn(d,l,12,[c,h]);else{let t=v(d),r=$t(d);if(t||r){let i=()=>{if(e.f){let n=t?b(d)?g[d]:h[d]:x(d)||!e.k?d.value:h[e.k];if(a)p(n)&&u(n,s);else if(p(n))n.includes(s)||n.push(s);else if(t)h[d]=[s],b(d)&&(g[d]=h[d]);else{let t=[s];x(d,e.k)&&(d.value=t),e.k&&(h[e.k]=t)}}else t?(h[d]=c,b(d)&&(g[d]=c)):r&&(x(d,e.k)&&(d.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),nr.delete(e)};t.id=-1,nr.set(e,t),ki(t,n)}else ir(e),i()}}}function ir(e){let t=nr.get(e);t&&(t.flags|=8,nr.delete(e))}me().requestIdleCallback,me().cancelIdleCallback;var ar=e=>!!e.type.__asyncLoader,or=e=>e.type.__isKeepAlive;function sr(e,t){lr(e,`a`,t)}function cr(e,t){lr(e,`da`,t)}function lr(e,t,n=va){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(dr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)or(e.parent.vnode)&&ur(r,t,n,e),e=e.parent}}function ur(e,t,n,r){let i=dr(t,e,r,!0);vr(()=>{u(r[t],i)},n)}function dr(e,t,n=va,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ye();let i=Sa(n),a=_n(t,n,e,r);return i(),Xe(),a};return r?i.unshift(a):i.push(a),a}}var fr=e=>(t,n=va)=>{(!Ta||e===`sp`)&&dr(e,(...e)=>t(...e),n)},pr=fr(`bm`),mr=fr(`m`),hr=fr(`bu`),gr=fr(`u`),_r=fr(`bum`),vr=fr(`um`),yr=fr(`sp`),br=fr(`rtg`),xr=fr(`rtc`);function Sr(e,t=va){dr(`ec`,e,t)}var Cr=`components`;function wr(e,t){return Er(Cr,e,!0,t)||e}var Tr=Symbol.for(`v-ndc`);function Er(e,t,n=!0,r=!1){let i=In||va;if(i){let n=i.type;if(e===Cr){let e=Fa(n,!1);if(e&&(e===t||e===w(t)||e===ce(w(t))))return n}let a=Dr(i[e]||n[e],t)||Dr(i.appContext[e],t);return!a&&r?n:a}}function Dr(e,t){return e&&(e[t]||e[w(t)]||e[ce(w(t))])}function Or(e,t,n,r){let i,a=n&&n[r],o=p(e);if(o||v(e)){let n=o&&Kt(e),r=!1,s=!1;n&&(r=!Jt(e),s=qt(e),e=lt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Qt(Zt(e[n])):Zt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(b(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var kr=e=>e?wa(e)?Pa(e):kr(e.parent):null,Ar=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zr(e),$forceUpdate:e=>e.f||=()=>{kn(e.update)},$nextTick:e=>e.n||=Dn.bind(e.proxy),$watch:e=>qn.bind(e)}),jr=(e,t)=>e!==r&&!e.__isScriptSetup&&f(e,t),Mr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else if(jr(i,t))return s[t]=1,i[t];else if(a!==r&&f(a,t))return s[t]=2,a[t];else if(f(o,t))return s[t]=3,o[t];else if(n!==r&&f(n,t))return s[t]=4,n[t];else Pr&&(s[t]=0)}let u=Ar[t],d,p;if(u)return t===`$attrs`&&ot(e.attrs,`get`,``),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==r&&f(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,f(p,t))return p[t]},set({_:e},t,n){let{data:i,setupState:a,ctx:o}=e;return jr(a,t)?(a[t]=n,!0):i!==r&&f(i,t)?(i[t]=n,!0):f(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(n[c]||e!==r&&c[0]!==`$`&&f(e,c)||jr(t,c)||f(o,c)||f(i,c)||f(Ar,c)||f(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?f(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Nr(e){return p(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Pr=!0;function Fr(e){let t=zr(e),n=e.proxy,r=e.ctx;Pr=!1,t.beforeCreate&&Lr(t.beforeCreate,e,`bc`);let{data:i,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:g,activated:v,deactivated:y,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:te,renderTracked:ne,renderTriggered:re,errorCaptured:ie,serverPrefetch:ae,expose:w,inheritAttrs:oe,components:se,directives:ce,filters:le}=t;if(u&&Ir(u,r,null),s)for(let e in s){let t=s[e];_(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);b(t)&&(e.data=Ht(t))}if(Pr=!0,o)for(let e in o){let t=o[e],i=La({get:_(t)?t.bind(n,n):_(t.get)?t.get.bind(n,n):a,set:!_(t)&&_(t.set)?t.set.bind(n):a});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(c)for(let e in c)Rr(c[e],r,n,e);if(l){let e=_(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Vn(t,e[t])})}d&&Lr(d,e,`c`);function T(e,t){p(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(T(pr,f),T(mr,m),T(hr,h),T(gr,g),T(sr,v),T(cr,y),T(Sr,ie),T(xr,ne),T(br,re),T(_r,S),T(vr,ee),T(yr,ae),p(w))if(w.length){let t=e.exposed||={};w.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};te&&e.render===a&&(e.render=te),oe!=null&&(e.inheritAttrs=oe),se&&(e.components=se),ce&&(e.directives=ce),ae&&er(e)}function Ir(e,t,n=a){p(e)&&(e=Wr(e));for(let n in e){let r=e[n],i;i=b(r)?`default`in r?Hn(r.from||n,r.default,!0):Hn(r.from||n):Hn(r),$t(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Lr(e,t,n){_n(p(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rr(e,t,n,r){let i=r.includes(`.`)?Jn(n,r):()=>n[r];if(v(e)){let n=t[e];_(n)&&Gn(i,n)}else if(_(e))Gn(i,e.bind(n));else if(b(e))if(p(e))e.forEach(e=>Rr(e,t,n,r));else{let r=_(e.handler)?e.handler.bind(n):t[e.handler];_(r)&&Gn(i,r,e)}}function zr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Br(c,e,o,!0)),Br(c,t,o)),b(t)&&a.set(t,c),c}function Br(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Br(e,a,n,!0),i&&i.forEach(t=>Br(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Vr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Vr={data:Hr,props:qr,emits:qr,methods:Kr,computed:Kr,beforeCreate:Gr,created:Gr,beforeMount:Gr,mounted:Gr,beforeUpdate:Gr,updated:Gr,beforeDestroy:Gr,beforeUnmount:Gr,destroyed:Gr,unmounted:Gr,activated:Gr,deactivated:Gr,errorCaptured:Gr,serverPrefetch:Gr,components:Kr,directives:Kr,watch:Jr,provide:Hr,inject:Ur};function Hr(e,t){return t?e?function(){return l(_(e)?e.call(this,this):e,_(t)?t.call(this,this):t)}:t:e}function Ur(e,t){return Kr(Wr(e),Wr(t))}function Wr(e){if(p(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Gr(e,t){return e?[...new Set([].concat(e,t))]:t}function Kr(e,t){return e?l(Object.create(null),e,t):t}function qr(e,t){return e?p(e)&&p(t)?[...new Set([...e,...t])]:l(Object.create(null),Nr(e),Nr(t??{})):t}function Jr(e,t){if(!e)return t;if(!t)return e;let n=l(Object.create(null),e);for(let r in t)n[r]=Gr(e[r],t[r]);return n}function Yr(){return{app:null,config:{isNativeTag:o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Xr=0;function Zr(e,t){return function(n,r=null){_(n)||(n=l({},n)),r!=null&&!b(r)&&(r=null);let i=Yr(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Xr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:za,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&_(e.install)?(a.add(e),e.install(c,...t)):_(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||k(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Pa(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(_n(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Qr;Qr=c;try{return e()}finally{Qr=t}}};return c}}var Qr=null,$r=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${w(t)}Modifiers`]||e[`${se(t)}Modifiers`];function ei(e,t,...n){if(e.isUnmounted)return;let i=e.vnode.props||r,a=n,o=t.startsWith(`update:`),s=o&&$r(i,t.slice(7));s&&(s.trim&&(a=n.map(e=>v(e)?e.trim():e)),s.number&&(a=n.map(fe)));let c,l=i[c=le(t)]||i[c=le(w(t))];!l&&o&&(l=i[c=le(se(t))]),l&&_n(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,_n(u,e,6,a)}}var ti=new WeakMap;function ni(e,t,n=!1){let r=n?ti:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!_(e)){let r=e=>{let n=ni(e,t,!0);n&&(s=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(b(e)&&r.set(e,null),null):(p(a)?a.forEach(e=>o[e]=null):l(o,a),b(e)&&r.set(e,o),o)}function ri(e,t){return!e||!s(t)?!1:(t=t.slice(2).replace(/Once$/,``),f(e,t[0].toLowerCase()+t.slice(1))||f(e,se(t))||f(e,t))}function ii(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Rn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ua(u.call(t,e,d,f,m,p,h)),y=s}else{let e=t;v=ua(e.length>1?e(f,{attrs:s,slots:o,emit:l}):e(f,null)),y=t.props?s:ai(s)}}catch(t){Ki.length=0,vn(t,e,1),v=k(Wi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(c)&&(y=oi(y,a)),b=sa(b,y,!1,!0))}return n.dirs&&(b=sa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Qn(b,n.transition),v=b,Rn(_),v}var ai=e=>{let t;for(let n in e)(n===`class`||n===`style`||s(n))&&((t||={})[n]=e[n]);return t},oi=(e,t)=>{let n={};for(let r in e)(!c(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function si(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ci(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(li(o,r,n)&&!ri(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ci(r,o,l):!0:!!o;return!1}function ci(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(li(t,e,a)&&!ri(n,a))return!0}return!1}function li(e,t,n){let r=e[n],i=t[n];return n===`style`&&b(r)&&b(i)?!Te(r,i):r!==i}function ui({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var di={},fi=()=>Object.create(di),pi=e=>Object.getPrototypeOf(e)===di;function mi(e,t,n,r=!1){let i={},a=fi();e.propsDefaults=Object.create(null),gi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Ut(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function hi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=D(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ri(e.emitsOptions,o))continue;let u=t[o];if(c)if(f(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=w(o);i[t]=_i(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{gi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!f(t,a)&&((r=se(a))===a||!f(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=_i(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!f(t,e))&&(delete a[e],l=!0)}l&&st(e.attrs,`set`,``)}function gi(e,t,n,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let r in t){if(re(r))continue;let l=t[r],u;a&&f(a,u=w(r))?!o||!o.includes(u)?n[u]=l:(c||={})[u]=l:ri(e.emitsOptions,r)||(!(r in i)||l!==i[r])&&(i[r]=l,s=!0)}if(o){let t=D(n),i=c||r;for(let r=0;r<o.length;r++){let s=o[r];n[s]=_i(a,t,s,i[s],e,!f(i,s))}}return s}function _i(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=f(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&_(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Sa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===se(n))&&(r=!0))}return r}var vi=new WeakMap;function yi(e,t,n=!1){let a=n?vi:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,c={},u=[],d=!1;if(!_(e)){let r=e=>{d=!0;let[n,r]=yi(e,t,!0);l(c,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!d)return b(e)&&a.set(e,i),i;if(p(s))for(let e=0;e<s.length;e++){let t=w(s[e]);bi(t)&&(c[t]=r)}else if(s)for(let e in s){let t=w(e);if(bi(t)){let n=s[e],r=c[t]=p(n)||_(n)?{type:n}:l({},n),i=r.type,a=!1,o=!0;if(p(i))for(let e=0;e<i.length;++e){let t=i[e],n=_(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=_(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||f(r,`default`))&&u.push(t)}}let m=[c,u];return b(e)&&a.set(e,m),m}function bi(e){return e[0]!==`$`&&!re(e)}var xi=e=>e===`_`||e===`_ctx`||e===`$stable`,Si=e=>p(e)?e.map(ua):[ua(e)],Ci=(e,t,n)=>{if(t._n)return t;let r=zn((...e)=>Si(t(...e)),n);return r._c=!1,r},wi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(xi(n))continue;let i=e[n];if(_(i))t[n]=Ci(n,i,r);else if(i!=null){let e=Si(i);t[n]=()=>e}}},Ti=(e,t)=>{let n=Si(t);e.slots.default=()=>n},Ei=(e,t,n)=>{for(let r in t)(n||!xi(r))&&(e[r]=t[r])},Di=(e,t,n)=>{let r=e.slots=fi();if(e.vnode.shapeFlag&32){let e=t._;e?(Ei(r,t,n),n&&de(r,`_`,e,!0)):wi(t,r)}else t&&Ti(e,t)},Oi=(e,t,n)=>{let{vnode:i,slots:a}=e,o=!0,s=r;if(i.shapeFlag&32){let e=t._;e?n&&e===1?o=!1:Ei(a,t,n):(o=!t.$stable,wi(t,a)),s=t}else t&&(Ti(e,t),s={default:1});if(o)for(let e in a)!xi(e)&&s[e]==null&&delete a[e]},ki=Vi;function Ai(e){return ji(e)}function ji(e,t){let n=me();n.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=a,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!na(e,t)&&(r=Ce(e),ve(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ui:y(e,t,n,r);break;case Wi:b(e,t,n,r);break;case Gi:e??x(t,n,r,o);break;case Hi:se(e,t,n,r,i,a,o,s,c);break;default:d&1?ee(e,t,n,r,i,a,o,s,c):d&6?ce(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ee)}u!=null&&i?rr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&rr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ee=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ae(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&ie(e.children,d,null,r,i,Mi(e,a),s,u),_&&Bn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!re(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ma(f,r,e)}_&&Bn(e,null,r,`beforeMount`);let v=Pi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&ki(()=>{try{f&&ma(f,r,e),v&&g.enter(d),_&&Bn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Bi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ie=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?da(e[l]):ua(e[l]),t,n,r,i,a,o,s)},ae=(e,t,n,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||r,h=t.props||r,g;if(n&&Ni(n,!1),(g=h.onVnodeBeforeUpdate)&&ma(g,n,t,e),f&&Bn(t,e,n,`beforeUpdate`),n&&Ni(n,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?w(e.dynamicChildren,d,l,n,i,Mi(t,a),o):s||pe(e,t,l,null,n,i,Mi(t,a),o,!1),u>0){if(u&16)oe(l,m,h,n,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],i=m[r],o=h[r];(o!==i||r===`value`)&&c(l,r,i,o,a,n)}}u&1&&e.children!==t.children&&p(l,t.children)}else !s&&d==null&&oe(l,m,h,n,a);((g=h.onVnodeUpdated)||f)&&ki(()=>{g&&ma(g,n,t,e),f&&Bn(t,e,n,`updated`)},i)},w=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===Hi||!na(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},oe=(e,t,n,i,a)=>{if(t!==n){if(t!==r)for(let r in t)!re(r)&&!(r in n)&&c(e,r,t[r],null,a,i);for(let r in n){if(re(r))continue;let o=n[r],s=t[r];o!==s&&r!==`value`&&c(e,r,s,o,a,i)}`value`in n&&c(e,`value`,t.value,n.value,a)}},se=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),ie(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(w(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Fi(e,t,!0)):pe(e,t,n,f,i,a,s,c,l)},ce=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):le(t,n,r,i,a,o,c):T(e,t,c)},le=(e,t,n,r,i,a,o)=>{let s=e.component=_a(e,r,i);if(or(e)&&(s.ctx.renderer=Ee),Ea(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,de,o),!e.el){let r=s.subTree=k(Wi);b(null,r,t,n),e.placeholder=r.el}}else de(s,e,t,n,i,a,o)},T=(e,t,n)=>{let r=t.component=e.component;if(si(e,t,n))if(r.asyncDep&&!r.asyncResolved){fe(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},de=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Li(e);if(n){t&&(t.el=c.el,fe(e,t,o)),n.asyncDep.then(()=>{ki(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ni(e,!1),t?(t.el=c.el,fe(e,t,o)):t=c,n&&ue(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ma(d,s,t,c),Ni(e,!0);let f=ii(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Ce(p),e,i,a),t.el=f.el,u===null&&ui(e,f.el),r&&ki(r,i),(d=t.props&&t.props.onVnodeUpdated)&&ki(()=>ma(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ar(t);if(Ni(e,!1),l&&ue(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ma(o,d,t),Ni(e,!0),s&&Oe){let t=()=>{e.subTree=ii(e),Oe(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=ii(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&ki(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;ki(()=>ma(o,d,e),i)}(t.shapeFlag&256||d&&ar(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&ki(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Pe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>kn(u),Ni(e,!0),l()},fe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,hi(e,t.props,r,n),Oi(e,t.children,n),Ye(),Mn(e),Xe()},pe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ge(l,d,n,r,i,a,o,s,c);return}else if(f&256){he(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&Se(l,i,a),d!==l&&p(n,d)):u&16?m&16?ge(l,d,n,r,i,a,o,s,c):Se(l,i,a,!0):(u&8&&p(n,``),m&16&&ie(d,n,r,i,a,o,s,c))},he=(e,t,n,r,a,o,s,c,l)=>{e||=i,t||=i;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?da(t[p]):ua(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?Se(e,a,o,!0,!1,f):ie(t,n,r,a,o,s,c,l,f)},ge=(e,t,n,r,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?da(t[u]):ua(t[u]);if(na(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?da(t[p]):ua(t[p]);if(na(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,i=e<d?t[e].el:r;for(;u<=p;)v(null,t[u]=l?da(t[u]):ua(t[u]),n,i,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)ve(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?da(t[u]):ua(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){ve(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&na(r,t[_])){i=_;break}i===void 0?ve(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let ee=x?Ii(C):i;for(_=ee.length-1,u=b-1;u>=0;u--){let e=h+u,i=t[e],f=t[e+1],p=e+1<d?f.el||zi(f):r;C[u]===0?v(null,i,n,p,a,o,s,c,l):x&&(_<0||u!==ee[_]?_e(i,n,p,2):_--)}}},_e=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){_e(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Ee);return}if(c===Hi){o(a,t,n);for(let e=0;e<u.length;e++)_e(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Gi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),ki(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Zn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},ve=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ye(),rr(s,null,n,e,!0),Xe()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!ar(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ma(_,t,e),u&6)xe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Bn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ee,r):l&&!l.hasOnce&&(a!==Hi||d>0&&d&64)?Se(l,t,n,!1,!0):(a===Hi&&d&384||!i&&u&16)&&Se(c,t,n),r&&ye(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&ki(()=>{_&&ma(_,t,e),h&&Bn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ye=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===Hi){be(n,r);return}if(t===Gi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},be=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},xe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ri(c),Ri(l),r&&ue(r),i.stop(),a&&(a.flags|=8,ve(o,e,t,n)),s&&ki(s,t),ki(()=>{e.isUnmounted=!0},t)},Se=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ve(e[o],t,n,r,i)},Ce=e=>{if(e.shapeFlag&6)return Ce(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Yn];return n?h(n):t},we=!1,Te=(e,t,n)=>{let r;e==null?t._vnode&&(ve(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,we||=(we=!0,Mn(r),Nn(),!1)},Ee={p:v,um:ve,m:_e,r:ye,mt:le,mc:ie,pc:pe,pbc:w,n:Ce,o:e},De,Oe;return t&&([De,Oe]=t(Ee)),{render:Te,hydrate:De,createApp:Zr(Te,De)}}function Mi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ni({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Pi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fi(e,t,n=!1){let r=e.children,i=t.children;if(p(r)&&p(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=da(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Fi(t,a)),a.type===Ui&&(a.patchFlag===-1&&(a=i[e]=da(a)),a.el=t.el),a.type===Wi&&!a.el&&(a.el=t.el)}}function Ii(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Li(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Li(t)}function Ri(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function zi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?zi(t.subTree):null}var Bi=e=>e.__isSuspense;function Vi(e,t){t&&t.pendingBranch?p(e)?t.effects.push(...e):t.effects.push(e):jn(e)}var Hi=Symbol.for(`v-fgt`),Ui=Symbol.for(`v-txt`),Wi=Symbol.for(`v-cmt`),Gi=Symbol.for(`v-stc`),Ki=[],qi=null;function Ji(e=!1){Ki.push(qi=e?null:[])}function Yi(){Ki.pop(),qi=Ki[Ki.length-1]||null}var Xi=1;function Zi(e,t=!1){Xi+=e,e<0&&qi&&t&&(qi.hasOnce=!0)}function Qi(e){return e.dynamicChildren=Xi>0?qi||i:null,Yi(),Xi>0&&qi&&qi.push(e),e}function $i(e,t,n,r,i,a){return Qi(O(e,t,n,r,i,a,!0))}function ea(e,t,n,r,i){return Qi(k(e,t,n,r,i,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function na(e,t){return e.type===t.type&&e.key===t.key}var ra=({key:e})=>e??null,ia=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:v(e)||$t(e)||_(e)?{i:In,r:e,k:t,f:!!n}:e);function O(e,t=null,n=null,r=0,i=null,a=e===Hi?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ra(t),ref:t&&ia(t),scopeId:Ln,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:In};return s?(fa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=v(n)?8:16),Xi>0&&!o&&qi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&qi.push(c),c}var k=aa;function aa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Tr)&&(e=Wi),ta(e)){let r=sa(e,t,!0);return n&&fa(r,n),Xi>0&&!a&&qi&&(r.shapeFlag&6?qi[qi.indexOf(e)]=r:qi.push(r)),r.patchFlag=-2,r}if(Ia(e)&&(e=e.__vccOpts),t){t=oa(t);let{class:e,style:n}=t;e&&!v(e)&&(t.class=be(e)),b(n)&&(Yt(n)&&!p(n)&&(n=l({},n)),t.style=he(n))}let o=v(e)?1:Bi(e)?128:Xn(e)?64:b(e)?4:_(e)?2:0;return O(e,t,n,r,i,o,a,!0)}function oa(e){return e?Yt(e)||pi(e)?l({},e):e:null}function sa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?pa(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ra(l),ref:t&&t.ref?n&&a?p(a)?a.concat(ia(t)):[a,ia(t)]:ia(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Hi?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sa(e.ssContent),ssFallback:e.ssFallback&&sa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Qn(u,c.clone(u)),u}function ca(e=` `,t=0){return k(Ui,null,e,t)}function la(e=``,t=!1){return t?(Ji(),ea(Wi,null,e)):k(Wi,null,e)}function ua(e){return e==null||typeof e==`boolean`?k(Wi):p(e)?k(Hi,null,e.slice()):ta(e)?da(e):k(Ui,null,String(e))}function da(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sa(e)}function fa(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(p(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),fa(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!pi(t)?t._ctx=In:r===3&&In&&(In.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else _(t)?(t={default:t,_ctx:In},n=32):(t=String(t),r&64?(n=16,t=[ca(t)]):n=8);e.children=t,e.shapeFlag|=n}function pa(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=be([t.class,r.class]));else if(e===`style`)t.style=he([t.style,r.style]);else if(s(e)){let n=t[e],i=r[e];i&&n!==i&&!(p(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!c(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ma(e,t,n,r=null){_n(e,t,7,[n,r])}var ha=Yr(),ga=0;function _a(e,t,n){let i=e.type,a=(t?t.appContext:e.appContext)||ha,o={uid:ga++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new je(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yi(i,a),emitsOptions:ni(i,a),emit:null,emitted:null,propsDefaults:r,inheritAttrs:i.inheritAttrs,ctx:r,data:r,props:r,attrs:r,slots:r,refs:r,setupState:r,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ei.bind(null,o),e.ce&&e.ce(o),o}var va=null,ya=()=>va||In,ba,xa;{let e=me(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ba=t(`__VUE_INSTANCE_SETTERS__`,e=>va=e),xa=t(`__VUE_SSR_SETTERS__`,e=>Ta=e)}var Sa=e=>{let t=va;return ba(e),e.scope.on(),()=>{e.scope.off(),ba(t)}},Ca=()=>{va&&va.scope.off(),ba(null)};function wa(e){return e.vnode.shapeFlag&4}var Ta=!1;function Ea(e,t=!1,n=!1){t&&xa(t);let{props:r,children:i}=e.vnode,a=wa(e);mi(e,r,a,t),Di(e,i,n||t);let o=a?Da(e,t):void 0;return t&&xa(!1),o}function Da(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Mr);let{setup:r}=n;if(r){Ye();let n=e.setupContext=r.length>1?Na(e):null,i=Sa(e),a=gn(r,e,0,[e.props,n]),o=x(a);if(Xe(),i(),(o||e.sp)&&!ar(e)&&er(e),o){if(a.then(Ca,Ca),t)return a.then(n=>{Oa(e,n,t)}).catch(t=>{vn(t,e,0)});e.asyncDep=a}else Oa(e,a,t)}else ja(e,t)}function Oa(e,t,n){_(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:b(t)&&(e.setupState=sn(t)),ja(e,n)}var ka,Aa;function ja(e,t,n){let r=e.type;if(!e.render){if(!t&&ka&&!r.render){let t=r.template||zr(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=ka(t,l(l({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||a,Aa&&Aa(e)}{let t=Sa(e);Ye();try{Fr(e)}finally{Xe(),t()}}}var Ma={get(e,t){return ot(e,`get`,``),e[t]}};function Na(e){return{attrs:new Proxy(e.attrs,Ma),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Pa(e){return e.exposed?e.exposeProxy||=new Proxy(sn(Xt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ar)return Ar[n](e)},has(e,t){return t in e||t in Ar}}):e.proxy}function Fa(e,t=!0){return _(e)?e.displayName||e.name:e.name||t&&e.__name}function Ia(e){return _(e)&&`__vccOpts`in e}var La=(e,t)=>ln(e,t,Ta);function Ra(e,t,n){try{Zi(-1);let r=arguments.length;return r===2?b(t)&&!p(t)?ta(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),k(e,t,n))}finally{Zi(1)}}var za=`3.5.33`,Ba=void 0,Va=typeof window<`u`&&window.trustedTypes;if(Va)try{Ba=Va.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ha=Ba?e=>Ba.createHTML(e):e=>e,Ua=`http://www.w3.org/2000/svg`,Wa=`http://www.w3.org/1998/Math/MathML`,Ga=typeof document<`u`?document:null,Ka=Ga&&Ga.createElement(`template`),qa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ga.createElementNS(Ua,e):t===`mathml`?Ga.createElementNS(Wa,e):n?Ga.createElement(e,{is:n}):Ga.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ga.createTextNode(e),createComment:e=>Ga.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ga.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ka.innerHTML=Ha(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ka.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ja=Symbol(`_vtc`);function Ya(e,t,n){let r=e[Ja];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Xa=Symbol(`_vod`),Za=Symbol(`_vsh`),Qa=Symbol(``),$a=/(?:^|;)\s*display\s*:/;function eo(e,t,n){let r=e.style,i=v(n),a=!1;if(n&&!i){if(t)if(v(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??no(r,t,``)}else for(let e in t)n[e]??no(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?no(r,i,``):oo(e,i,!v(t)&&t?t[i]:void 0,o)||no(r,i,o)}}else if(i){if(t!==n){let e=r[Qa];e&&(n+=`;`+e),r.cssText=n,a=$a.test(n)}}else t&&e.removeAttribute(`style`);Xa in e&&(e[Xa]=a?r.display:``,e[Za]&&(r.display=`none`))}var to=/\s*!important$/;function no(e,t,n){if(p(n))n.forEach(n=>no(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=ao(e,t);to.test(n)?e.setProperty(se(r),n.replace(to,``),`important`):e[r]=n}}var ro=[`Webkit`,`Moz`,`ms`],io={};function ao(e,t){let n=io[t];if(n)return n;let r=w(t);if(r!==`filter`&&r in e)return io[t]=r;r=ce(r);for(let n=0;n<ro.length;n++){let i=ro[n]+r;if(i in e)return io[t]=i}return t}function oo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&v(r)&&n===r}var so=`http://www.w3.org/1999/xlink`;function co(e,t,n,r,i,a=Se(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(so,t.slice(6,t.length)):e.setAttributeNS(so,t,n):n==null||a&&!Ce(n)?e.removeAttribute(t):e.setAttribute(t,a?``:y(n)?String(n):n)}function lo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ha(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Ce(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function uo(e,t,n,r){e.addEventListener(t,n,r)}function fo(e,t,n,r){e.removeEventListener(t,n,r)}var po=Symbol(`_vei`);function mo(e,t,n,r,i=null){let a=e[po]||(e[po]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=go(t);r?uo(e,n,a[t]=bo(r,i),s):o&&(fo(e,n,o,s),a[t]=void 0)}}var ho=/(?:Once|Passive|Capture)$/;function go(e){let t;if(ho.test(e)){t={};let n;for(;n=e.match(ho);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):se(e.slice(2)),t]}var _o=0,vo=Promise.resolve(),yo=()=>_o||=(vo.then(()=>_o=0),Date.now());function bo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;_n(xo(e,n.value),t,5,[e])};return n.value=e,n.attached=yo(),n}function xo(e,t){if(p(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var So=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Co=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Ya(e,r,o):t===`style`?eo(e,n,r):s(t)?c(t)||mo(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):wo(e,t,r,o))?(lo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&co(e,t,r,o,a,t!==`value`)):e._isVueCE&&(To(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!v(r)))?lo(e,w(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),co(e,t,r,o))};function wo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&So(t)&&_(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return So(t)&&v(n)?!1:t in e}function To(e,t){let n=e._def.props;if(!n)return!1;let r=w(t);return Array.isArray(n)?n.some(e=>w(e)===r):Object.keys(n).some(e=>w(e)===r)}var Eo=[`ctrl`,`shift`,`alt`,`meta`],Do={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Eo.some(n=>e[`${n}Key`]&&!t.includes(n))},Oo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Do[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},ko=l({patchProp:Co},qa),Ao;function jo(){return Ao||=Ai(ko)}var Mo=((...e)=>{let t=jo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Po(e);if(!r)return;let i=t._component;!_(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,No(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function No(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Po(e){return v(e)?document.querySelector(e):e}var Fo=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Io={};function Lo(e,t){let n=wr(`router-view`);return Ji(),ea(n)}var Ro=Fo(Io,[[`render`,Lo]]),zo=typeof document<`u`;function Bo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Vo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Bo(e.default)}var A=Object.assign;function Ho(e,t){let n={};for(let r in t){let i=t[r];n[r]=Wo(i)?i.map(e):e(i)}return n}var Uo=()=>{},Wo=Array.isArray;function Go(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Ko=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),qo=Symbol(``);Ko.MATCHER_NOT_FOUND,Ko.NAVIGATION_GUARD_REDIRECT,Ko.NAVIGATION_ABORTED,Ko.NAVIGATION_CANCELLED,Ko.NAVIGATION_DUPLICATED;function Jo(e,t){return A(Error(),{type:e,[qo]:!0},t)}function Yo(e,t){return e instanceof Error&&qo in e&&(t==null||!!(e.type&t))}var Xo=Symbol(``),Zo=Symbol(``),Qo=Symbol(``),$o=Symbol(``),es=Symbol(``),ts=/#/g,ns=/&/g,rs=/\//g,is=/=/g,as=/\?/g,os=/\+/g,ss=/%5B/g,cs=/%5D/g,ls=/%5E/g,us=/%60/g,ds=/%7B/g,fs=/%7C/g,ps=/%7D/g,ms=/%20/g;function hs(e){return e==null?``:encodeURI(``+e).replace(fs,`|`).replace(ss,`[`).replace(cs,`]`)}function gs(e){return hs(e).replace(ds,`{`).replace(ps,`}`).replace(ls,`^`)}function _s(e){return hs(e).replace(os,`%2B`).replace(ms,`+`).replace(ts,`%23`).replace(ns,`%26`).replace(us,"`").replace(ds,`{`).replace(ps,`}`).replace(ls,`^`)}function vs(e){return _s(e).replace(is,`%3D`)}function ys(e){return hs(e).replace(ts,`%23`).replace(as,`%3F`)}function bs(e){return ys(e).replace(rs,`%2F`)}function xs(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Ss=/\/$/,Cs=e=>e.replace(Ss,``);function ws(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Ms(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:xs(o)}}function Ts(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Es(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Ds(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Os(t.matched[r],n.matched[i])&&ks(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Os(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ks(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!As(e[n],t[n]))return!1;return!0}function As(e,t){return Wo(e)?js(e,t):Wo(t)?js(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function js(e,t){return Wo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Ms(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Ns={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Ps=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Fs=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Is(e){if(!e)if(zo){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Cs(e)}var Ls=/^[^#]+#/;function Rs(e,t){return e.replace(Ls,`#`)+t}function zs(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Bs=()=>({left:window.scrollX,top:window.scrollY});function Vs(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=zs(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Hs(e,t){return(history.state?history.state.position-t:-1)+e}var Us=new Map;function Ws(e,t){Us.set(e,t)}function Gs(e){let t=Us.get(e);return Us.delete(e),t}function Ks(e){return typeof e==`string`||e&&typeof e==`object`}function qs(e){return typeof e==`string`||typeof e==`symbol`}function Js(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(os,` `),i=r.indexOf(`=`),a=xs(i<0?r:r.slice(0,i)),o=i<0?null:xs(r.slice(i+1));if(a in t){let e=t[a];Wo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Ys(e){let t=``;for(let n in e){let r=e[n];if(n=vs(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Wo(r)?r.map(e=>e&&_s(e)):[r&&_s(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Xs(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Wo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function Zs(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Qs(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Jo(Ko.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Ks(e)?c(Jo(Ko.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function $s(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Bo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Qs(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Vo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Qs(c,n,r,o,e,i)()}))}}return a}function ec(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Os(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Os(e,s))||i.push(s))}return[n,r,i]}var tc=()=>location.protocol+`//`+location.host;function nc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Es(n,``)}return Es(n,e)+r+i}function rc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=nc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Ps.pop,direction:u?u>0?Fs.forward:Fs.back:Fs.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(A({},e.state,{scroll:Bs()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function ic(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Bs():null}}function ac(e){let{history:t,location:n}=window,r={value:nc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:tc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,A({},t.state,ic(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=A({},i.value,t.state,{forward:e,scroll:Bs()});a(o.current,o,!0),a(e,A({},ic(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function oc(e){e=Is(e);let t=ac(e),n=rc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=A({location:``,base:e,go:r,createHref:Rs.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}var sc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),cc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(cc||{}),lc={type:sc.Static,value:``},uc=/[a-zA-Z0-9_]/;function dc(e){if(!e)return[[]];if(e===`/`)return[[lc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=cc.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===cc.Static?a.push({type:sc.Static,value:l}):n===cc.Param||n===cc.ParamRegExp||n===cc.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:sc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==cc.ParamRegExp){r=n,n=cc.EscapeNext;continue}switch(n){case cc.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=cc.Param):f();break;case cc.EscapeNext:f(),n=r;break;case cc.Param:c===`(`?n=cc.ParamRegExp:uc.test(c)?f():(d(),n=cc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case cc.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=cc.ParamRegExpEnd:u+=c;break;case cc.ParamRegExpEnd:d(),n=cc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===cc.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var fc=`[^/]+?`,pc={sensitive:!1,strict:!1,start:!0,end:!0},mc=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(mc||{}),hc=/[.+*?^${}()[\]/\\]/g;function gc(e,t){let n=A({},pc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[mc.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=mc.Segment+(n.sensitive?mc.BonusCaseSensitive:0);if(o.type===sc.Static)r||(i+=`/`),i+=o.value.replace(hc,`\\$&`),s+=mc.Static;else if(o.type===sc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||fc;if(u!==fc){s+=mc.BonusCustomRegExp;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=mc.Dynamic,c&&(s+=mc.BonusOptional),n&&(s+=mc.BonusRepeatable),u===`.*`&&(s+=mc.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=mc.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===sc.Static)n+=e.value;else if(e.type===sc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Wo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Wo(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function _c(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===mc.Static+mc.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===mc.Static+mc.Segment?1:-1:0}function vc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=_c(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(yc(r))return 1;if(yc(i))return-1}return i.length-r.length}function yc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var bc={strict:!1,end:!0,sensitive:!1};function xc(e,t,n){let r=A(gc(dc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Sc(e,t){let n=[],r=new Map;t=Go(bc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=wc(e);s.aliasOf=r&&r.record;let l=Go(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(wc(A({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=xc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Ec(d)&&o(e.name)),Ac(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Uo}function o(e){if(qs(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Oc(e,n);n.splice(t,0,e),e.record.name&&!Ec(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Jo(Ko.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=A(Cc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Cc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Jo(Ko.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=A({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Dc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Cc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function wc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Tc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function Tc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Ec(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dc(e){return e.reduce((e,t)=>A(e,t.meta),{})}function Oc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;vc(e,t[i])<0?r=i:n=i+1}let i=kc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function kc(e){let t=e;for(;t=t.parent;)if(Ac(t)&&vc(e,t)===0)return t}function Ac({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function jc(e){let t=Hn(Qo),n=Hn($o),r=La(()=>{let n=an(e.to);return t.resolve(n)}),i=La(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Os.bind(null,i));if(o>-1)return o;let s=Ic(e[t-2]);return t>1&&Ic(i)===s&&a[a.length-1].path!==s?a.findIndex(Os.bind(null,e[t-2])):o}),a=La(()=>i.value>-1&&Fc(n.params,r.value.params)),o=La(()=>i.value>-1&&i.value===n.matched.length-1&&ks(n.params,r.value.params));function s(n={}){if(Pc(n)){let n=t[an(e.replace)?`replace`:`push`](an(e.to)).catch(Uo);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:La(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Mc(e){return e.length===1?e[0]:e}var Nc=$n({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:jc,setup(e,{slots:t}){let n=Ht(jc(e)),{options:r}=Hn(Qo),i=La(()=>({[Lc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Lc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Mc(t.default(n));return e.custom?r:Ra(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Pc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Fc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Wo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Ic(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Lc=(e,t,n)=>e??t??n,Rc=$n({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Hn(es),i=La(()=>e.route||r.value),a=Hn(Zo,0),o=La(()=>{let e=an(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=La(()=>i.value.matched[o.value]);Vn(Zo,La(()=>o.value+1)),Vn(Xo,s),Vn(es,i);let c=en();return Gn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Os(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return zc(n.default,{Component:l,route:r});let u=o.props[a],d=Ra(l,A({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return zc(n.default,{Component:d,route:r})||d}}});function zc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Bc=Rc;function Vc(e){let t=Sc(e.routes,e),n=e.parseQuery||Js,r=e.stringifyQuery||Ys,i=e.history,a=Zs(),o=Zs(),s=Zs(),c=tn(Ns),l=Ns;zo&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Ho.bind(null,e=>``+e),d=Ho.bind(null,bs),f=Ho.bind(null,xs);function p(e,n){let r,i;return qs(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=A({},a||c.value),typeof e==`string`){let r=ws(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return A(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=A({},e,{path:ws(n,e.path,a.path).path});else{let t=A({},e.params);for(let e in t)t[e]??delete t[e];o=A({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Ts(r,A({},e,{hash:gs(l),path:s.path})),m=i.createHref(p);return A({fullPath:p,hash:l,query:r===Ys?Xs(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ws(n,e,c.value.path):A({},e)}function y(e,t){if(l!==e)return Jo(Ko.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(A(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),A({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(A(v(u),{state:typeof u==`object`?A({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Ds(r,i,n)&&(f=Jo(Ko.NAVIGATION_DUPLICATED,{to:d,from:i}),de(i,i,!0,!1)),(f?Promise.resolve(f):ne(d,i)).catch(e=>Yo(e)?Yo(e,Ko.NAVIGATION_GUARD_REDIRECT)?e:ue(e):le(e,d,i)).then(e=>{if(e){if(Yo(e,Ko.NAVIGATION_GUARD_REDIRECT))return C(A({replace:s},v(e.to),{state:typeof e.to==`object`?A({},a,e.to.state):a,force:o}),t||d)}else e=ie(d,i,!0,s,a);return re(d,i,e),e})}function ee(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=me.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ne(e,t){let n,[r,i,s]=ec(e,t);n=$s(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Qs(r,e,t))});let c=ee.bind(null,e,t);return n.push(c),ge(n).then(()=>{n=[];for(let r of a.list())n.push(Qs(r,e,t));return n.push(c),ge(n)}).then(()=>{n=$s(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Qs(r,e,t))});return n.push(c),ge(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Wo(r.beforeEnter))for(let i of r.beforeEnter)n.push(Qs(i,e,t));else n.push(Qs(r.beforeEnter,e,t));return n.push(c),ge(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$s(s,`beforeRouteEnter`,e,t,te),n.push(c),ge(n))).then(()=>{n=[];for(let r of o.list())n.push(Qs(r,e,t));return n.push(c),ge(n)}).catch(e=>Yo(e,Ko.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function re(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function ie(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Ns,l=zo?history.state:{};n&&(r||s?i.replace(e.fullPath,A({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,de(e,t,n,s),ue()}let ae;function w(){ae||=i.listen((e,t,n)=>{if(!he.listening)return;let r=_(e),a=S(r,he.currentRoute.value);if(a){C(A(a,{replace:!0,force:!0}),r).catch(Uo);return}l=r;let o=c.value;zo&&Ws(Hs(o.fullPath,n.delta),Bs()),ne(r,o).catch(e=>Yo(e,Ko.NAVIGATION_ABORTED|Ko.NAVIGATION_CANCELLED)?e:Yo(e,Ko.NAVIGATION_GUARD_REDIRECT)?(C(A(v(e.to),{force:!0}),r).then(e=>{Yo(e,Ko.NAVIGATION_ABORTED|Ko.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Ps.pop&&i.go(-1,!1)}).catch(Uo),Promise.reject()):(n.delta&&i.go(-n.delta,!1),le(e,r,o))).then(e=>{e||=ie(r,o,!1),e&&(n.delta&&!Yo(e,Ko.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Ps.pop&&Yo(e,Ko.NAVIGATION_ABORTED|Ko.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),re(r,o,e)}).catch(Uo)})}let oe=Zs(),se=Zs(),ce;function le(e,t,n){ue(e);let r=se.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function T(){return ce&&c.value!==Ns?Promise.resolve():new Promise((e,t)=>{oe.add([e,t])})}function ue(e){return ce||(ce=!e,w(),oe.list().forEach(([t,n])=>e?n(e):t()),oe.reset()),e}function de(t,n,r,i){let{scrollBehavior:a}=e;if(!zo||!a)return Promise.resolve();let o=!r&&Gs(Hs(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Dn().then(()=>a(t,n,o)).then(e=>e&&Vs(e)).catch(e=>le(e,t,n))}let fe=e=>i.go(e),pe,me=new Set,he={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:se.add,isReady:T,install(e){e.component(`RouterLink`,Nc),e.component(`RouterView`,Bc),e.config.globalProperties.$router=he,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>an(c)}),zo&&!pe&&c.value===Ns&&(pe=!0,b(i.location).catch(e=>{}));let t={};for(let e in Ns)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Qo,he),e.provide($o,Ut(t)),e.provide(es,c);let n=e.unmount;me.add(e),e.unmount=function(){me.delete(e),me.size<1&&(l=Ns,ae&&ae(),ae=null,c.value=Ns,pe=!1,ce=!1),n()}}};function ge(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return he}var Hc=`/assets/noise1-DCGOp0qI.png`,Uc=`/assets/noise2-CragiEVl.png`,Wc={class:`noise-overlay`},Gc={class:`noise-shaker`},Kc=[`src`],qc=Fo({__name:`NoiseOverlay`,setup(e){return(e,t)=>(Ji(),$i(`div`,Wc,[O(`div`,Gc,[(Ji(),$i(Hi,null,Or(40,e=>O(`img`,{key:e,src:e%2==1?an(Hc):an(Uc),class:`noise-brick`,alt:``},null,8,Kc)),64))])]))}},[[`__scopeId`,`data-v-6740d534`]]),Jc={},Yc={class:`site-header`},Xc={class:`header-inner`};function Zc(e,t){let n=wr(`router-link`);return Ji(),$i(`header`,Yc,[O(`div`,Xc,[t[1]||=O(`p`,{class:`header-label`},` Erick's Polaroids `,-1),k(n,{to:`/`,class:`header-link`},{default:zn(()=>[...t[0]||=[ca(` Home `,-1)]]),_:1})])])}var Qc=Fo(Jc,[[`render`,Zc],[`__scopeId`,`data-v-8546bc52`]]),$c={},el={class:`hero-section`};function tl(e,t){let n=wr(`sl-card`);return Ji(),$i(`section`,el,[k(n,{class:`hero-card`},{default:zn(()=>[...t[0]||=[O(`p`,{class:`hero-label`},` Portfolio and Projects Archive `,-1),O(`h1`,null,` Hello World, I'm Erick. `,-1),O(`p`,{class:`hero-description`},` Software Engineering graduate with a passion for machine learning, automation, and building software that solves real-world problems. I enjoy exploring the intersection of AI, science, and creativity— whether that's developing tools, analyzing data, or writing music. This portfolio is a collection of projects, experiments, and ideas I've had fun creating. `,-1),O(`div`,{class:`hero-warning`},[O(`span`,null,` Hope you enjoy flipping through it like old Polaroids. `)],-1),O(`a`,{href:`assets/cv.pdf`,download:``},[O(`button`,{class:`primary-button`},` Download CV `)],-1)]]),_:1})])}var nl=Fo($c,[[`render`,tl],[`__scopeId`,`data-v-dfffa364`]]),rl=`/assets/me-CzGBEcO6.jpg`,il={class:`about-grid`},al={class:`portrait-polaroid`},ol=[`src`],sl=Fo($n({__name:`HomeInfoGrid`,setup(e){return(e,t)=>{let n=wr(`sl-card`);return Ji(),$i(`section`,il,[O(`div`,al,[O(`img`,{src:an(rl),alt:`Erick Labrada`},null,8,ol),t[0]||=O(`div`,{class:`portrait-caption`},null,-1)]),k(n,{class:`info-card`},{default:zn(()=>[...t[1]||=[O(`h2`,null,` Currently Exploring `,-1),O(`ul`,null,[O(`li`,null,`Machine Learning & AI Engineering`),O(`li`,null,`Tasks Automation`),O(`li`,null,`Data Analysis`),O(`li`,null,`NLP`),O(`li`,null,`Music`),O(`li`,null,`Photography`)],-1)]]),_:1})])}}}),[[`__scopeId`,`data-v-58811a10`]]),cl={},ll={class:`footer-note`};function ul(e,t){return Ji(),$i(`footer`,ll,[...t[0]||=[O(`p`,null,` "To create is to live twice." `,-1),O(`span`,null,` — Albert Camus `,-1)]])}var dl=Fo(cl,[[`render`,ul],[`__scopeId`,`data-v-8e184f4d`]]),fl={class:`photo`},pl=[`src`,`alt`],ml={class:`caption`},hl={key:0,class:`year`},gl={class:`modal`},_l={class:`modal-image-wrapper`},vl=[`src`,`alt`],yl={class:`modal-content`},bl={key:0,class:`project-date`},xl={class:`project-story`},Sl={key:1,class:`metadata`},Cl={class:`tech-list`},wl=[`href`],Tl=Fo($n({__name:`Polaroid`,props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},fullDescription:{type:String,default:``},githubUrl:{type:String,default:``},technologies:{type:Array,default:()=>[]},rotation:{type:Number,default:0},year:{type:String,default:``}},setup(e){let t=en(!1);function n(){t.value=!0,document.body.style.overflow=`hidden`}function r(){t.value=!1,document.body.style.overflow=``}function i(e){e.key===`Escape`&&r()}return Gn(t,e=>{e?window.addEventListener(`keydown`,i):window.removeEventListener(`keydown`,i)}),_r(()=>{window.removeEventListener(`keydown`,i),document.body.style.overflow=``}),(i,a)=>(Ji(),$i(Hi,null,[O(`article`,{class:`polaroid`,style:he({"--rotation":`${e.rotation}deg`}),onClick:n},[O(`div`,fl,[O(`img`,{src:e.imageSrc,alt:e.title},null,8,pl)]),O(`div`,ml,[O(`h3`,null,De(e.title),1),O(`p`,null,De(e.description),1),e.year?(Ji(),$i(`span`,hl,De(e.year),1)):la(``,!0)])],4),t.value?(Ji(),$i(`div`,{key:0,class:`modal-overlay`,onClick:Oo(r,[`self`])},[O(`div`,gl,[O(`button`,{class:`close-btn`,onClick:r},`×`),O(`div`,_l,[O(`img`,{src:e.imageSrc,alt:e.title},null,8,vl)]),O(`div`,yl,[O(`h2`,null,De(e.title),1),e.year?(Ji(),$i(`span`,bl,De(e.year),1)):la(``,!0),O(`p`,xl,De(e.fullDescription||e.description),1),e.technologies.length?(Ji(),$i(`div`,Sl,[a[0]||=O(`h4`,null,`Technologies`,-1),O(`div`,Cl,[(Ji(!0),$i(Hi,null,Or(e.technologies,e=>(Ji(),$i(`span`,{key:e,class:`tech-tag`},De(e),1))),128))])])):la(``,!0),e.githubUrl?(Ji(),$i(`a`,{key:2,href:e.githubUrl,target:`_blank`,class:`github-link`},` View Source → `,8,wl)):la(``,!0)])])])):la(``,!0)],64))}}),[[`__scopeId`,`data-v-ae814e00`]]),El=`/assets/AI_Assistant-pLW8ocBJ.jpg`,Dl=`/assets/sully-Ds8hznrt.png`,Ol=`/assets/ANAM-dROD_cay.png`,kl=`/assets/DailyAI-BWq_GZIh.png`,Al=`/assets/GreenHouse-1_1GWHft.png`,jl=`/assets/CIA-B6cPrFgP.png`,Ml=`/assets/3D_Engine-BBqKbazC.gif`,Nl=`/assets/wbot-B-w6nC7_.png`,Pl={class:`projects-section`},Fl={class:`projects-group`},Il={class:`featured-grid`},Ll={class:`projects-group`},Rl={class:`stagger-grid`},zl=Fo($n({__name:`ProjectsSection`,setup(e){return(e,t)=>(Ji(),$i(`section`,Pl,[t[2]||=O(`header`,{class:`section-header`},[O(`p`,{class:`section-label`},`Archive`),O(`h2`,null,`Things I've Built`),O(`p`,{class:`section-description`},` A collection of software, experiments, and occasional rabbit holes. Some were built professionally, others started as curiosity and grew into something larger. `)],-1),O(`div`,Fl,[t[0]||=O(`div`,{class:`group-header`},[O(`h3`,null,`Professional Work`),O(`p`,null,` Systems built for real teams, real users, and real business needs. `)],-1),O(`div`,Il,[k(Tl,{title:`AI Communication Assistant`,description:`Multi-component AI assistant for real-time business communication`,"full-description":`Designed and implemented an AI-powered assistant with intent detection and a custom RAG pipeline using Hugging Face models. Built backend with Python and MongoDB. NDA restricts public UI/source.`,"image-src":an(El),rotation:-2,technologies:[`Python`,`MongoDB`,`Hugging Face`]},null,8,[`image-src`]),k(Tl,{title:`Distributed Ticket Receiver`,description:`Task management system for distributed workflows`,"full-description":`Real-time dashboard for automated task processing and synchronized updates across distributed services.`,"image-src":an(Dl),rotation:2,technologies:[`Django`,`JavaScript`,`PostgreSQL`,`Redis`]},null,8,[`image-src`]),k(Tl,{title:`Ticket Source Service Migration`,description:`Refactor of legacy system into NestJS architecture`,"full-description":`Migrated a legacy JS system into NestJS, improving scalability and maintainability with structured backend design.`,"image-src":an(Ol),rotation:-1,technologies:[`NestJS`,`PostgreSQL`]},null,8,[`image-src`])])]),O(`div`,Ll,[t[1]||=O(`div`,{class:`group-header`},[O(`h3`,null,`Experiments & Side Quests`),O(`p`,null,` Learning projects, automation tools, strange ideas, and things I wanted to see exist. `)],-1),O(`div`,Rl,[k(Tl,{class:`p1`,title:`DailyAI`,description:`Automated standup reporting tool using LLMs`,"full-description":`Scrapes kanban activity with Playwright, enriches via GitLab API, generates structured reports using LLMs, and outputs via text-to-speech for meetings.`,"image-src":an(kl),rotation:-3,technologies:[`Python`,`Playwright`,`OpenAI API`]},null,8,[`image-src`]),k(Tl,{class:`p2`,title:`Distributed Greenhouse System`,description:`IoT monitoring platform with microservices architecture`,"full-description":`Aggregates sensor data, detects thresholds, triggers SMS alerts via Twilio, and uses RabbitMQ for async communication. Includes ESP32 simulator.`,"image-src":an(Al),rotation:2,technologies:[`NestJS`,`RabbitMQ`,`MongoDB`,`MySQL`,`ESP32`]},null,8,[`image-src`]),k(Tl,{class:`p3`,title:`Academic Information System (CIA)`,description:`Enrollment system with validation and scheduling rules`,"full-description":`Microfrontend-based academic system with JWT auth, prerequisite validation, and schedule conflict detection.`,"image-src":an(jl),rotation:-1,technologies:[`JavaScript`,`JWT`,`Microfrontends`]},null,8,[`image-src`]),k(Tl,{class:`p4`,title:`3D Engine`,description:`Custom software rendering engine`,"full-description":`Built from scratch using linear algebra concepts like projection matrices and rotation transforms for real-time rendering.`,"image-src":an(Ml),rotation:3,technologies:[`Java`,`Linear Algebra`]},null,8,[`image-src`]),k(Tl,{class:`p5`,title:`Photography Studio System`,description:`Backend + WhatsApp booking automation`,"full-description":`Backend system for studio management with WhatsApp chatbot integration for booking and inquiries.`,"image-src":an(Nl),rotation:-2,technologies:[`NestJS`,`TypeScript`,`MySQL`,`BuilderBot`]},null,8,[`image-src`]),k(Tl,{title:`Sartre's Cat`,description:`Anonymous feedback collection platform for self-reflection.`,"full-description":`A personal experiment built around a simple question: how do people perceive me when they can answer completely anonymously? The platform collects written responses and stores them for later analysis. The long-term goal is to apply sentiment analysis, clustering, and NLP techniques to identify recurring themes, blind spots, and patterns in how others experience me.`,"image-src":an(rl),rotation:-2,technologies:[`Vue`,`TypeScript`,`NLP`,`Data Analysis`]},null,8,[`image-src`]),k(Tl,{title:`Peer Review Automation`,description:`Automated analysis of merge requests and review patterns.`,"full-description":`A backend automation system that analyzes code review behavior across GitLab merge requests. It extracts reviewer patterns, comment density, and quality signals to generate structured insights for engineering teams. Built to improve review consistency and highlight bottlenecks in the development workflow.`,"image-src":an(rl),rotation:2,technologies:[`Python`,`GitLab API`,`NLP`,`Automation`]},null,8,[`image-src`]),k(Tl,{title:`Prompt Generator`,description:`AI-assisted bootstrap generation from Kanban tasks.`,"full-description":`A personal productivity utility that extracts task information from a custom Kanban board and automatically generates structured prompts for AI-assisted development. The system gathers context from task metadata, requirements, and related artifacts, producing prompts that accelerate project bootstrapping, implementation planning, and documentation workflows.`,"image-src":an(rl),rotation:-1,technologies:[`Python`,`Playwright`,`LLMs`,`Automation`]},null,8,[`image-src`])])])]))}}),[[`__scopeId`,`data-v-5b0c4ff9`]]),Bl={},Vl={class:`skills-section`},Hl={class:`skills-grid`};function Ul(e,t){let n=wr(`sl-card`);return Ji(),$i(`section`,Vl,[t[5]||=O(`div`,{class:`section-header`},[O(`p`,{class:`section-label`},`Capabilities`),O(`h2`,null,`Things I Work With`)],-1),O(`div`,Hl,[k(n,{class:`skill-card`},{default:zn(()=>[...t[0]||=[O(`h3`,null,`Backend Development`,-1),O(`p`,null,` Building APIs, services, automation tools, and scalable applications. `,-1),O(`span`,null,`Python • TypeScript • Java • Go`,-1)]]),_:1}),k(n,{class:`skill-card`},{default:zn(()=>[...t[1]||=[O(`h3`,null,`Frameworks`,-1),O(`p`,null,` Creating maintainable applications using modern backend frameworks and libraries. `,-1),O(`span`,null,`NestJS • Flask • Express • Chi`,-1)]]),_:1}),k(n,{class:`skill-card`},{default:zn(()=>[...t[2]||=[O(`h3`,null,`AI & Machine Learning`,-1),O(`p`,null,` Working with language models, retrieval systems, and machine learning workflows. `,-1),O(`span`,null,` LangChain • LangGraph • Hugging Face • Transformers • RAG `,-1)]]),_:1}),k(n,{class:`skill-card`},{default:zn(()=>[...t[3]||=[O(`h3`,null,`Infrastructure`,-1),O(`p`,null,` Databases, messaging systems, containers, and deployment tools. `,-1),O(`span`,null,` PostgreSQL • MySQL • MongoDB • Redis • RabbitMQ • Docker • Git `,-1)]]),_:1}),k(n,{class:`skill-card`},{default:zn(()=>[...t[4]||=[O(`h3`,null,`Languages`,-1),O(`p`,null,` Comfortable working in international environments and teams. `,-1),O(`span`,null,`Spanish (Native) • English (Fluent)`,-1)]]),_:1})])])}var Wl=Fo(Bl,[[`render`,Ul],[`__scopeId`,`data-v-8efc9828`]]),Gl={},Kl={class:`contact-section`};function ql(e,t){let n=wr(`sl-card`);return Ji(),$i(`section`,Kl,[k(n,{class:`contact-card`},{default:zn(()=>[...t[0]||=[O(`p`,{class:`section-label`},` Contact `,-1),O(`h2`,null,` Let's Build Something Interesting `,-1),O(`p`,{class:`contact-description`},` Whether it's software engineering, AI, automation, open source, music, or a project you're excited about, feel free to reach out. `,-1),O(`div`,{class:`contact-links`},[O(`a`,{href:`mailto:Erick.Labrada233380@gmail.com`,class:`contact-link`},` Email `),O(`a`,{href:`https://github.com/ErickLabrada`,target:`_blank`,rel:`noopener`,class:`contact-link`},` GitHub `),O(`a`,{href:`https://www.linkedin.com/in/ericklabrada/`,target:`_blank`,rel:`noopener`,class:`contact-link`},` LinkedIn `)],-1)]]),_:1})])}var Jl=Fo(Gl,[[`render`,ql],[`__scopeId`,`data-v-0f32f014`]]),Yl={class:`home-page`},Xl={class:`home-container`},Zl=Fo($n({__name:`HomeView`,setup(e){return(e,t)=>(Ji(),$i(`div`,Yl,[k(qc),k(Qc),O(`main`,Xl,[k(nl),k(sl),k(zl),k(Wl),k(Jl),k(dl)])]))}}),[[`__scopeId`,`data-v-3cb20572`]]),Ql=Vc({history:oc(`/`),routes:[{path:`/`,component:Zl}]}),$l=Object.defineProperty,eu=Object.defineProperties,tu=Object.getOwnPropertyDescriptor,nu=Object.getOwnPropertyDescriptors,ru=Object.getOwnPropertySymbols,iu=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable,ou=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),su=e=>{throw TypeError(e)},cu=(e,t,n)=>t in e?$l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lu=(e,t)=>{for(var n in t||={})iu.call(t,n)&&cu(e,n,t[n]);if(ru)for(var n of ru(t))au.call(t,n)&&cu(e,n,t[n]);return e},uu=(e,t)=>eu(e,nu(t)),j=(e,t,n,r)=>{for(var i=r>1?void 0:r?tu(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&$l(t,n,i),i},du=(e,t,n)=>t.has(e)||su(`Cannot `+n),fu=(e,t,n)=>(du(e,t,`read from private field`),n?n.call(e):t.get(e)),pu=(e,t,n)=>t.has(e)?su(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),mu=(e,t,n,r)=>(du(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),hu=function(e,t){this[0]=e,this[1]=t},gu=e=>{var t=e[ou(`asyncIterator`)],n=!1,r,i={};return t==null?(t=e[ou(`iterator`)](),r=e=>i[e]=n=>t[e](n)):(t=t.call(e),r=e=>i[e]=r=>{if(n){if(n=!1,e===`throw`)throw r;return r}return n=!0,{done:!1,value:new hu(new Promise(n=>{var i=t[e](r);i instanceof Object||su(`Object expected`),n(i)}),1)}}),i[ou(`iterator`)]=()=>i,r(`next`),`throw`in t?r(`throw`):i.throw=e=>{throw e},`return`in t&&r(`return`),i},_u=new WeakMap,vu=new WeakMap,yu=new WeakMap,bu=new WeakSet,xu=new WeakMap,Su=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`sl-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))},this.handleFormSubmit=e=>{var t;let n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=_u.get(this.form))==null||t.forEach(e=>{this.setUserInteracted(e,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),xu.set(this.host,[])},this.handleInteraction=e=>{let t=xu.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=lu({form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity==`function`?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity==`function`?e.checkValidity():!0,setValue:(e,t)=>e.value=t,assumeInteractionOn:[`sl-input`]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),xu.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),xu.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,_u.has(this.form)?_u.get(this.form).add(this.host):_u.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),vu.has(this.form)||(vu.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),yu.has(this.form)||(yu.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=_u.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),vu.has(this.form)&&(this.form.reportValidity=vu.get(this.form),vu.delete(this.form)),yu.has(this.form)&&(this.form.checkValidity=yu.get(this.form),yu.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?bu.add(e):bu.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let n=document.createElement(`button`);n.type=e,n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.clipPath=`inset(50%)`,n.style.overflow=`hidden`,n.style.whiteSpace=`nowrap`,t&&(n.name=t.name,n.value=t.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!bu.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`sl-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Cu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),wu=Object.freeze(uu(lu({},Cu),{valid:!1,valueMissing:!0})),Tu=Object.freeze(uu(lu({},Cu),{valid:!1,customError:!0})),Eu=globalThis,Du=Eu.ShadowRoot&&(Eu.ShadyCSS===void 0||Eu.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Ou=Symbol(),ku=new WeakMap,Au=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ou)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Du&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ku.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ku.set(t,e))}return e}toString(){return this.cssText}},ju=e=>new Au(typeof e==`string`?e:e+``,void 0,Ou),M=(e,...t)=>new Au(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Ou),Mu=(e,t)=>{if(Du)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Eu.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Nu=Du?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ju(t)})(e):e,{is:Pu,defineProperty:Fu,getOwnPropertyDescriptor:Iu,getOwnPropertyNames:Lu,getOwnPropertySymbols:Ru,getPrototypeOf:zu}=Object,Bu=globalThis,Vu=Bu.trustedTypes,Hu=Vu?Vu.emptyScript:``,Uu=Bu.reactiveElementPolyfillSupport,Wu=(e,t)=>e,Gu={toAttribute(e,t){switch(t){case Boolean:e=e?Hu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ku=(e,t)=>!Pu(e,t),qu={attribute:!0,type:String,converter:Gu,reflect:!1,useDefault:!1,hasChanged:Ku};Symbol.metadata??=Symbol(`metadata`),Bu.litPropertyMetadata??=new WeakMap;var Ju=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=qu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Fu(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Iu(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qu}static _$Ei(){if(this.hasOwnProperty(Wu(`elementProperties`)))return;let e=zu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Wu(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wu(`properties`))){let e=this.properties,t=[...Lu(e),...Ru(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Nu(e))}else e!==void 0&&t.push(Nu(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mu(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Gu:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Gu:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ku)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Ju.elementStyles=[],Ju.shadowRootOptions={mode:`open`},Ju[Wu(`elementProperties`)]=new Map,Ju[Wu(`finalized`)]=new Map,Uu?.({ReactiveElement:Ju}),(Bu.reactiveElementVersions??=[]).push(`2.1.2`);var Yu=globalThis,Xu=e=>e,Zu=Yu.trustedTypes,Qu=Zu?Zu.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,$u=`$lit$`,ed=`lit$${Math.random().toFixed(9).slice(2)}$`,td=`?`+ed,nd=`<${td}>`,rd=document,id=()=>rd.createComment(``),ad=e=>e===null||typeof e!=`object`&&typeof e!=`function`,od=Array.isArray,sd=e=>od(e)||typeof e?.[Symbol.iterator]==`function`,cd=`[ 	
\f\r]`,ld=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ud=/-->/g,dd=/>/g,fd=RegExp(`>|${cd}(?:([^\\s"'>=/]+)(${cd}*=${cd}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),pd=/'/g,md=/"/g,hd=/^(?:script|style|textarea|title)$/i,N=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),gd=Symbol.for(`lit-noChange`),P=Symbol.for(`lit-nothing`),_d=new WeakMap,vd=rd.createTreeWalker(rd,129);function yd(e,t){if(!od(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Qu===void 0?t:Qu.createHTML(t)}var bd=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ld;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ld?c[1]===`!--`?o=ud:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=fd):(hd.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=fd):o=dd:o===fd?c[0]===`>`?(o=i??ld,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?fd:c[3]===`"`?md:pd):o===md||o===pd?o=fd:o===ud||o===dd?o=ld:(o=fd,i=void 0);let d=o===fd&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ld?n+nd:l>=0?(r.push(s),n.slice(0,l)+$u+n.slice(l)+ed+d):n+ed+(l===-2?t:d)}return[yd(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},xd=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=bd(t,n);if(this.el=e.createElement(l,r),vd.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=vd.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith($u)){let t=u[o++],n=i.getAttribute(e).split(ed),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ed:r[1]===`?`?Dd:r[1]===`@`?Od:Td}),i.removeAttribute(e)}else e.startsWith(ed)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(hd.test(i.tagName)){let e=i.textContent.split(ed),t=e.length-1;if(t>0){i.textContent=Zu?Zu.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],id()),vd.nextNode(),c.push({type:2,index:++a});i.append(e[t],id())}}}else if(i.nodeType===8)if(i.data===td)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ed,e+1))!==-1;)c.push({type:7,index:a}),e+=ed.length-1}a++}}static createElement(e,t){let n=rd.createElement(`template`);return n.innerHTML=e,n}};function Sd(e,t,n=e,r){if(t===gd)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ad(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Sd(e,i._$AS(e,t.values),i,r)),t}var Cd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??rd).importNode(t,!0);vd.currentNode=r;let i=vd.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new wd(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new kd(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=vd.nextNode(),a++)}return vd.currentNode=rd,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},wd=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Sd(this,e,t),ad(e)?e===P||e==null||e===``?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==gd&&this._(e):e._$litType$===void 0?e.nodeType===void 0?sd(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&ad(this._$AH)?this._$AA.nextSibling.data=e:this.T(rd.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=xd.createElement(yd(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Cd(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=_d.get(e.strings);return t===void 0&&_d.set(e.strings,t=new xd(e)),t}k(t){od(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(id()),this.O(id()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Xu(e).nextSibling;Xu(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Td=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Sd(this,e,t,0),a=!ad(e)||e!==this._$AH&&e!==gd,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Sd(this,r[n+o],t,o),s===gd&&(s=this._$AH[o]),a||=!ad(s)||s!==this._$AH[o],s===P?e=P:e!==P&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ed=class extends Td{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},Dd=class extends Td{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}},Od=class extends Td{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Sd(this,e,t,0)??P)===gd)return;let n=this._$AH,r=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},kd=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Sd(this,e)}},Ad={M:$u,P:ed,A:td,C:1,L:bd,R:Cd,D:sd,V:Sd,I:wd,H:Td,N:Dd,U:Od,B:Ed,F:kd},jd=Yu.litHtmlPolyfillSupport;jd?.(xd,wd),(Yu.litHtmlVersions??=[]).push(`3.3.2`);var Md=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new wd(t.insertBefore(id(),e),e,void 0,n??{})}return i._$AI(e),i},Nd=globalThis,Pd=class extends Ju{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Md(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gd}};Pd._$litElement$=!0,Pd.finalized=!0,Nd.litElementHydrateSupport?.({LitElement:Pd});var Fd=Nd.litElementPolyfillSupport;Fd?.({LitElement:Pd}),(Nd.litElementVersions??=[]).push(`4.2.2`);var Id=M`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Ld=M`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Rd=(e=`value`)=>(t,n)=>{let r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(t,a,o){let s=r.getPropertyOptions(e);if(t===(typeof s.attribute==`string`?s.attribute:e)){let t=s.converter||Gu,r=(typeof t==`function`?t:t?.fromAttribute??Gu.fromAttribute)(o,s.type);this[e]!==r&&(this[n]=r)}i.call(this,t,a,o)}},zd=M`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Bd=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`sl-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}};function Vd(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var Hd=``;function Ud(e){Hd=e}function Wd(e=``){if(!Hd){let e=[...document.getElementsByTagName(`script`)],t=e.find(e=>e.hasAttribute(`data-shoelace`));if(t)Ud(t.getAttribute(`data-shoelace`));else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),n=``;t&&(n=t.getAttribute(`src`)),Ud(n.split(`/`).slice(0,-1).join(`/`))}}return Hd.replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var Gd={name:`default`,resolver:e=>Wd(`assets/icons/${e}.svg`)},Kd={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},qd=[Gd,{name:`system`,resolver:e=>e in Kd?`data:image/svg+xml,${encodeURIComponent(Kd[e])}`:``}],Jd=[];function Yd(e){Jd.push(e)}function Xd(e){Jd=Jd.filter(t=>t!==e)}function Zd(e){return qd.find(t=>t.name===e)}var Qd=M`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function F(e,t){let n=lu({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var I=M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,$d={attribute:!0,type:String,converter:Gu,reflect:!1,hasChanged:Ku},ef=(e=$d,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function L(e){return(t,n)=>typeof n==`object`?ef(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function R(e){return L({...e,state:!0,attribute:!1})}function tf(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}var nf=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function z(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return nf(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return nf(n,r,{get(){return a(this)}})}}function rf(e){return(t,n)=>nf(t,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var af,B=class extends Pd{constructor(){super(),pu(this,af,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,lu({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){fu(this,af)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),mu(this,af,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};af=new WeakMap,B.version=`2.20.1`,B.dependencies={},j([L()],B.prototype,`dir`,2),j([L()],B.prototype,`lang`,2);var{I:of}=Ad,sf=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,cf=e=>e.strings===void 0,lf={},uf=(e,t=lf)=>e._$AH=t,df=Symbol(),ff=Symbol(),pf,mf=new Map,V=class extends B{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=N`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?df:ff}catch{return ff}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if((t?.tagName)?.toLowerCase()!==`svg`)return df;pf||=new DOMParser;let r=pf.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):df}catch{return df}}connectedCallback(){super.connectedCallback(),Yd(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xd(this)}getIconSource(){let e=Zd(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){var e;let{url:t,fromLibrary:n}=this.getIconSource(),r=n?Zd(this.library):void 0;if(!t){this.svg=null;return}let i=mf.get(t);if(i||(i=this.resolveIcon(t,r),mf.set(t,i)),!this.initialRender)return;let a=await i;if(a===ff&&mf.delete(t),t===this.getIconSource().url){if(sf(a)){if(this.svg=a,r){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof r.mutator==`function`&&e&&r.mutator(e)}return}switch(a){case ff:case df:this.svg=null,this.emit(`sl-error`);break;default:this.svg=a.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit(`sl-load`)}}}render(){return this.svg}};V.styles=[I,Qd],j([R()],V.prototype,`svg`,2),j([L({reflect:!0})],V.prototype,`name`,2),j([L()],V.prototype,`src`,2),j([L()],V.prototype,`label`,2),j([L({reflect:!0})],V.prototype,`library`,2),j([F(`label`)],V.prototype,`handleLabelChange`,1),j([F([`name`,`src`,`library`])],V.prototype,`setIcon`,1);var hf={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gf=e=>(...t)=>({_$litDirective$:e,values:t}),_f=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},H=gf(class extends _f{constructor(e){if(super(e),e.type!==hf.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return gd}}),U=e=>e??P,vf=gf(class extends _f{constructor(e){if(super(e),e.type!==hf.PROPERTY&&e.type!==hf.ATTRIBUTE&&e.type!==hf.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!cf(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===gd||t===P)return t;let n=e.element,r=e.name;if(e.type===hf.PROPERTY){if(t===n[r])return gd}else if(e.type===hf.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return gd}else if(e.type===hf.ATTRIBUTE&&n.getAttribute(r)===t+``)return gd;return uf(e),t}}),yf=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Bd(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit(`sl-change`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleInput(){this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return N`
      <div
        class=${H({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${H({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${U(this.value)}
            .indeterminate=${vf(this.indeterminate)}
            .checked=${vf(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?N`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:``}
            ${!this.checked&&this.indeterminate?N`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};yf.styles=[I,zd,Ld],yf.dependencies={"sl-icon":V},j([z(`input[type="checkbox"]`)],yf.prototype,`input`,2),j([R()],yf.prototype,`hasFocus`,2),j([L()],yf.prototype,`title`,2),j([L()],yf.prototype,`name`,2),j([L()],yf.prototype,`value`,2),j([L({reflect:!0})],yf.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],yf.prototype,`disabled`,2),j([L({type:Boolean,reflect:!0})],yf.prototype,`checked`,2),j([L({type:Boolean,reflect:!0})],yf.prototype,`indeterminate`,2),j([Rd(`checked`)],yf.prototype,`defaultChecked`,2),j([L({reflect:!0})],yf.prototype,`form`,2),j([L({type:Boolean,reflect:!0})],yf.prototype,`required`,2),j([L({attribute:`help-text`})],yf.prototype,`helpText`,2),j([F(`disabled`,{waitUntilFirstUpdate:!0})],yf.prototype,`handleDisabledChange`,1),j([F([`checked`,`indeterminate`],{waitUntilFirstUpdate:!0})],yf.prototype,`handleStateChange`,1);var bf=M`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,xf=new Set,Sf=new Map,Cf,wf=`ltr`,Tf=`en`,Ef=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ef){let e=new MutationObserver(Of);wf=document.documentElement.dir||`ltr`,Tf=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Df(...e){e.map(e=>{let t=e.$code.toLowerCase();Sf.has(t)?Sf.set(t,Object.assign(Object.assign({},Sf.get(t)),e)):Sf.set(t,e),Cf||=e}),Of()}function Of(){Ef&&(wf=document.documentElement.dir||`ltr`,Tf=document.documentElement.lang||navigator.language),[...xf.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var kf=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){xf.add(this.host)}hostDisconnected(){xf.delete(this.host)}dir(){return`${this.host.dir||wf}`.toLowerCase()}lang(){return`${this.host.lang||Tf}`.toLowerCase()}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Sf.get(`${n}-${r}`),a=Sf.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Cf&&Cf[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Cf&&Cf[e])i=Cf[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Af={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`};Df(Af);var jf=Af,W=class extends kf{};Df(jf);var Mf=class extends B{constructor(){super(...arguments),this.localize=new W(this)}render(){return N`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Mf.styles=[I,bf];var Nf=new Map,Pf=new WeakMap;function Ff(e){return e??{keyframes:[],options:{duration:0}}}function If(e,t){return t.toLowerCase()===`rtl`?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function G(e,t){Nf.set(e,Ff(t))}function K(e,t,n){let r=Pf.get(e);if(r?.[t])return If(r[t],n.dir);let i=Nf.get(t);return i?If(i,n.dir):{keyframes:[],options:{duration:0}}}function Lf(e,t,n){return new Promise(r=>{if(n?.duration===1/0)throw Error(`Promise-based animations must be finite.`);let i=e.animate(t,uu(lu({},n),{duration:zf()?0:n.duration}));i.addEventListener(`cancel`,r,{once:!0}),i.addEventListener(`finish`,r,{once:!0})})}function Rf(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e):e.indexOf(`s`)>-1?parseFloat(e)*1e3:parseFloat(e)}function zf(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Bf(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function Vf(e,t){return e.map(e=>uu(lu({},e),{height:e.height===`auto`?`${t}px`:e.height}))}function Hf(e,t,n){return e?t(e):n?.(e)}var Uf=class e extends B{constructor(){super(...arguments),this.localize=new W(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute(`role`)===`treeitem`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`treeitem`),this.setAttribute(`tabindex`,`-1`),this.isNestedItem()&&(this.slot=`children`)}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?`auto`:`0`,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit(`sl-collapse`),await Bf(this.childrenContainer);let{keyframes:e,options:t}=K(this,`tree-item.collapse`,{dir:this.localize.dir()});await Lf(this.childrenContainer,Vf(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit(`sl-after-collapse`)}isNestedItem(){let t=this.parentElement;return!!t&&e.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has(`selected`)&&!e.has(`indeterminate`)&&(this.indeterminate=!1)}async animateExpand(){this.emit(`sl-expand`),await Bf(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:e,options:t}=K(this,`tree-item.expand`,{dir:this.localize.dir()});await Lf(this.childrenContainer,Vf(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height=`auto`,this.emit(`sl-after-expand`)}handleLoadingChange(){this.setAttribute(`aria-busy`,this.loading?`true`:`false`),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleExpandedChange(){this.isLeaf?this.removeAttribute(`aria-expanded`):this.setAttribute(`aria-expanded`,this.expanded?`true`:`false`)}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit(`sl-lazy-load`)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit(`sl-lazy-change`)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(n=>e.isTreeItem(n)&&(t||!n.disabled)):[]}render(){let e=this.localize.dir()===`rtl`,t=!this.loading&&(!this.isLeaf||this.lazy);return N`
      <div
        part="base"
        class="${H({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()===`rtl`})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?`item--disabled`:``}
            ${this.expanded?`item--expanded`:``}
            ${this.indeterminate?`item--indeterminate`:``}
            ${this.selected?`item--selected`:``}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${H({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${Hf(this.loading,()=>N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
          </div>

          ${Hf(this.selectable,()=>N`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${vf(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Uf.styles=[I,Id],Uf.dependencies={"sl-checkbox":yf,"sl-icon":V,"sl-spinner":Mf},j([R()],Uf.prototype,`indeterminate`,2),j([R()],Uf.prototype,`isLeaf`,2),j([R()],Uf.prototype,`loading`,2),j([R()],Uf.prototype,`selectable`,2),j([L({type:Boolean,reflect:!0})],Uf.prototype,`expanded`,2),j([L({type:Boolean,reflect:!0})],Uf.prototype,`selected`,2),j([L({type:Boolean,reflect:!0})],Uf.prototype,`disabled`,2),j([L({type:Boolean,reflect:!0})],Uf.prototype,`lazy`,2),j([z(`slot:not([name])`)],Uf.prototype,`defaultSlot`,2),j([z(`slot[name=children]`)],Uf.prototype,`childrenSlot`,2),j([z(`.tree-item__item`)],Uf.prototype,`itemElement`,2),j([z(`.tree-item__children`)],Uf.prototype,`childrenContainer`,2),j([z(`.tree-item__expand-button slot`)],Uf.prototype,`expandButtonSlot`,2),j([F(`loading`,{waitUntilFirstUpdate:!0})],Uf.prototype,`handleLoadingChange`,1),j([F(`disabled`)],Uf.prototype,`handleDisabledChange`,1),j([F(`selected`)],Uf.prototype,`handleSelectedChange`,1),j([F(`expanded`,{waitUntilFirstUpdate:!0})],Uf.prototype,`handleExpandedChange`,1),j([F(`expanded`,{waitUntilFirstUpdate:!0})],Uf.prototype,`handleExpandAnimation`,1),j([F(`lazy`,{waitUntilFirstUpdate:!0})],Uf.prototype,`handleLazyChange`,1);var Wf=Uf;G(`tree-item.expand`,{keyframes:[{height:`0`,opacity:`0`,overflow:`hidden`},{height:`auto`,opacity:`1`,overflow:`hidden`}],options:{duration:250,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}}),G(`tree-item.collapse`,{keyframes:[{height:`auto`,opacity:`1`,overflow:`hidden`},{height:`0`,opacity:`0`,overflow:`hidden`}],options:{duration:200,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}}),Wf.define(`sl-tree-item`);var Gf=M`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Kf=M`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,qf=Math.min,Jf=Math.max,Yf=Math.round,Xf=Math.floor,Zf=e=>({x:e,y:e}),Qf={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function $f(e,t,n){return Jf(e,qf(t,n))}function ep(e,t){return typeof e==`function`?e(t):e}function tp(e){return e.split(`-`)[0]}function np(e){return e.split(`-`)[1]}function rp(e){return e===`x`?`y`:`x`}function ip(e){return e===`y`?`height`:`width`}function ap(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function op(e){return rp(ap(e))}function sp(e,t,n){n===void 0&&(n=!1);let r=np(e),i=op(e),a=ip(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=gp(o)),[o,gp(o)]}function cp(e){let t=gp(e);return[lp(e),t,lp(t)]}function lp(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var up=[`left`,`right`],dp=[`right`,`left`],fp=[`top`,`bottom`],pp=[`bottom`,`top`];function mp(e,t,n){switch(e){case`top`:case`bottom`:return n?t?dp:up:t?up:dp;case`left`:case`right`:return t?fp:pp;default:return[]}}function hp(e,t,n,r){let i=np(e),a=mp(tp(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(lp)))),a}function gp(e){let t=tp(e);return Qf[t]+e.slice(t.length)}function _p(e){return{top:0,right:0,bottom:0,left:0,...e}}function vp(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:_p(e)}function yp(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function bp(e,t,n){let{reference:r,floating:i}=e,a=ap(t),o=op(t),s=ip(o),c=tp(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(np(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function xp(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=ep(t,e),p=vp(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=yp(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=yp(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Sp=50,Cp=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:xp},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=bp(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Sp&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=bp(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},wp=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=ep(e,t)||{};if(l==null)return{};let d=vp(u),f={x:n,y:r},p=op(i),m=ip(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let ee=b/2-x/2,te=C/2-h[m]/2-1,ne=qf(d[_],te),re=qf(d[v],te),ie=ne,ae=C-h[m]-re,w=C/2-h[m]/2+ee,oe=$f(ie,w,ae),se=!c.arrow&&np(i)!=null&&w!==oe&&a.reference[m]/2-(w<ie?ne:re)-h[m]/2<0,ce=se?w<ie?w-ie:w-ae:0;return{[p]:f[p]+ce,data:{[p]:oe,centerOffset:w-oe-ce,...se&&{alignmentOffset:ce}},reset:se}}}),Tp=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=ep(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=tp(r),_=ap(o),v=tp(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[gp(o)]:cp(o)),x=p!==`none`;!d&&x&&b.push(...hp(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),ee=[],te=i.flip?.overflows||[];if(l&&ee.push(C[g]),u){let e=sp(r,a,y);ee.push(C[e[0]],C[e[1]])}if(te=[...te,{placement:r,overflows:ee}],!ee.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==ap(t))||te.every(e=>ap(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:te},reset:{placement:t}};let n=te.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=te.filter(e=>{if(x){let t=ap(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Ep=new Set([`left`,`top`]);async function Dp(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=tp(n),s=np(n),c=ap(n)===`y`,l=Ep.has(o)?-1:1,u=a&&c?-1:1,d=ep(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Op=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Dp(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},kp=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=ep(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=ap(tp(i)),p=rp(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=$f(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=$f(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},Ap=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=ep(e,t),u=await o.detectOverflow(t,l),d=tp(i),f=np(i),p=ap(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=qf(h-u[g],v),x=qf(m-u[_],y),S=!t.middlewareData.shift,C=b,ee=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(ee=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=Jf(u.left,0),t=Jf(u.right,0),n=Jf(u.top,0),r=Jf(u.bottom,0);p?ee=m-2*(e!==0||t!==0?e+t:Jf(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:Jf(u.top,u.bottom))}await c({...t,availableWidth:ee,availableHeight:C});let te=await o.getDimensions(s.floating);return m!==te.width||h!==te.height?{reset:{rects:!0}}:{}}}};function jp(){return typeof window<`u`}function Mp(e){return Fp(e)?(e.nodeName||``).toLowerCase():`#document`}function Np(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Pp(e){return((Fp(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Fp(e){return jp()?e instanceof Node||e instanceof Np(e).Node:!1}function Ip(e){return jp()?e instanceof Element||e instanceof Np(e).Element:!1}function Lp(e){return jp()?e instanceof HTMLElement||e instanceof Np(e).HTMLElement:!1}function Rp(e){return!jp()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Np(e).ShadowRoot}function zp(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Xp(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Bp(e){return/^(table|td|th)$/.test(Mp(e))}function Vp(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Hp=/transform|translate|scale|rotate|perspective|filter/,Up=/paint|layout|strict|content/,Wp=e=>!!e&&e!==`none`,Gp;function Kp(e){let t=Ip(e)?Xp(e):e;return Wp(t.transform)||Wp(t.translate)||Wp(t.scale)||Wp(t.rotate)||Wp(t.perspective)||!Jp()&&(Wp(t.backdropFilter)||Wp(t.filter))||Hp.test(t.willChange||``)||Up.test(t.contain||``)}function qp(e){let t=Qp(e);for(;Lp(t)&&!Yp(t);){if(Kp(t))return t;if(Vp(t))return null;t=Qp(t)}return null}function Jp(){return Gp??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Gp}function Yp(e){return/^(html|body|#document)$/.test(Mp(e))}function Xp(e){return Np(e).getComputedStyle(e)}function Zp(e){return Ip(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Qp(e){if(Mp(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Rp(e)&&e.host||Pp(e);return Rp(t)?t.host:t}function $p(e){let t=Qp(e);return Yp(t)?e.ownerDocument?e.ownerDocument.body:e.body:Lp(t)&&zp(t)?t:$p(t)}function em(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=$p(e),i=r===e.ownerDocument?.body,a=Np(r);if(i){let e=tm(a);return t.concat(a,a.visualViewport||[],zp(r)?r:[],e&&n?em(e):[])}else return t.concat(r,em(r,[],n))}function tm(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function nm(e){let t=Xp(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Lp(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Yf(n)!==a||Yf(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function rm(e){return Ip(e)?e:e.contextElement}function im(e){let t=rm(e);if(!Lp(t))return Zf(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=nm(t),o=(a?Yf(n.width):n.width)/r,s=(a?Yf(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var am=Zf(0);function om(e){let t=Np(e);return!Jp()||!t.visualViewport?am:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function sm(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Np(e)?!1:t}function cm(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=rm(e),o=Zf(1);t&&(r?Ip(r)&&(o=im(r)):o=im(e));let s=sm(a,n,r)?om(a):Zf(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Np(a),t=r&&Ip(r)?Np(r):r,n=e,i=tm(n);for(;i&&r&&t!==n;){let e=im(i),t=i.getBoundingClientRect(),r=Xp(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Np(i),i=tm(n)}}return yp({width:u,height:d,x:c,y:l})}function lm(e,t){let n=Zp(e).scrollLeft;return t?t.left+n:cm(Pp(e)).left+n}function um(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-lm(e,n),y:n.top+t.scrollTop}}function dm(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Pp(r),s=t?Vp(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Zf(1),u=Zf(0),d=Lp(r);if((d||!d&&!a)&&((Mp(r)!==`body`||zp(o))&&(c=Zp(r)),d)){let e=cm(r);l=im(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?um(o,c):Zf(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function fm(e){return Array.from(e.getClientRects())}function pm(e){let t=Pp(e),n=Zp(e),r=e.ownerDocument.body,i=Jf(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Jf(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+lm(e),s=-n.scrollTop;return Xp(r).direction===`rtl`&&(o+=Jf(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var mm=25;function hm(e,t){let n=Np(e),r=Pp(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Jp();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=lm(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=mm&&(a-=o)}else l<=mm&&(a+=l);return{width:a,height:o,x:s,y:c}}function gm(e,t){let n=cm(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Lp(e)?im(e):Zf(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function _m(e,t,n){let r;if(t===`viewport`)r=hm(e,n);else if(t===`document`)r=pm(Pp(e));else if(Ip(t))r=gm(t,n);else{let n=om(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return yp(r)}function vm(e,t){let n=Qp(e);return n===t||!Ip(n)||Yp(n)?!1:Xp(n).position===`fixed`||vm(n,t)}function ym(e,t){let n=t.get(e);if(n)return n;let r=em(e,[],!1).filter(e=>Ip(e)&&Mp(e)!==`body`),i=null,a=Xp(e).position===`fixed`,o=a?Qp(e):e;for(;Ip(o)&&!Yp(o);){let t=Xp(o),n=Kp(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||zp(o)&&!n&&vm(e,o))?r=r.filter(e=>e!==o):i=t,o=Qp(o)}return t.set(e,r),r}function bm(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Vp(t)?[]:ym(t,this._c):[].concat(n),r],o=_m(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=_m(t,a[e],i);s=Jf(n.top,s),c=qf(n.right,c),l=qf(n.bottom,l),u=Jf(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function xm(e){let{width:t,height:n}=nm(e);return{width:t,height:n}}function Sm(e,t,n){let r=Lp(t),i=Pp(t),a=n===`fixed`,o=cm(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Zf(0);function l(){c.x=lm(i)}if(r||!r&&!a)if((Mp(t)!==`body`||zp(i))&&(s=Zp(t)),r){let e=cm(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?um(i,s):Zf(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Cm(e){return Xp(e).position===`static`}function wm(e,t){if(!Lp(e)||Xp(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Pp(e)===n&&(n=n.ownerDocument.body),n}function Tm(e,t){let n=Np(e);if(Vp(e))return n;if(!Lp(e)){let t=Qp(e);for(;t&&!Yp(t);){if(Ip(t)&&!Cm(t))return t;t=Qp(t)}return n}let r=wm(e,t);for(;r&&Bp(r)&&Cm(r);)r=wm(r,t);return r&&Yp(r)&&Cm(r)&&!Kp(r)?n:r||qp(e)||n}var Em=async function(e){let t=this.getOffsetParent||Tm,n=this.getDimensions,r=await n(e.floating);return{reference:Sm(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Dm(e){return Xp(e).direction===`rtl`}var Om={convertOffsetParentRelativeRectToViewportRelativeRect:dm,getDocumentElement:Pp,getClippingRect:bm,getOffsetParent:Tm,getElementRects:Em,getClientRects:fm,getDimensions:xm,getScale:im,isElement:Ip,isRTL:Dm};function km(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Am(e,t){let n=null,r,i=Pp(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Xf(d),h=Xf(i.clientWidth-(u+f)),g=Xf(i.clientHeight-(d+p)),_=Xf(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Jf(0,qf(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!km(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function jm(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=rm(e),u=i||a?[...l?em(l):[],...t?em(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Am(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?cm(e):null;c&&g();function g(){let t=cm(e);h&&!km(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Mm=Op,Nm=kp,Pm=Tp,Fm=Ap,Im=wp,Lm=(e,t,n)=>{let r=new Map,i={platform:Om,...n},a={...i.platform,_c:r};return Cp(e,t,{...i,platform:a})};function Rm(e){return Bm(e)}function zm(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Bm(e){for(let t=e;t;t=zm(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=zm(e);t;t=zm(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Kp(e)||t.tagName===`BODY`))return t}return null}function Vm(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var q=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.active=!1,this.placement=`top`,this.strategy=`absolute`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Vm(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=jm(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[Mm({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Fm({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``),this.flip&&e.push(Pm({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Nm({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Fm({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Im({element:this.arrowEl,padding:this.arrowPadding}));let t=this.strategy===`absolute`?e=>Om.getOffsetParent(e,Rm):Om.getOffsetParent;Lm(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:uu(lu({},Om),{getOffsetParent:t})}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`sl-reposition`)}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${H({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${H({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy===`fixed`,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};q.styles=[I,Kf],j([z(`.popup`)],q.prototype,`popup`,2),j([z(`.popup__arrow`)],q.prototype,`arrowEl`,2),j([L()],q.prototype,`anchor`,2),j([L({type:Boolean,reflect:!0})],q.prototype,`active`,2),j([L({reflect:!0})],q.prototype,`placement`,2),j([L({reflect:!0})],q.prototype,`strategy`,2),j([L({type:Number})],q.prototype,`distance`,2),j([L({type:Number})],q.prototype,`skidding`,2),j([L({type:Boolean})],q.prototype,`arrow`,2),j([L({attribute:`arrow-placement`})],q.prototype,`arrowPlacement`,2),j([L({attribute:`arrow-padding`,type:Number})],q.prototype,`arrowPadding`,2),j([L({type:Boolean})],q.prototype,`flip`,2),j([L({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],q.prototype,`flipFallbackPlacements`,2),j([L({attribute:`flip-fallback-strategy`})],q.prototype,`flipFallbackStrategy`,2),j([L({type:Object})],q.prototype,`flipBoundary`,2),j([L({attribute:`flip-padding`,type:Number})],q.prototype,`flipPadding`,2),j([L({type:Boolean})],q.prototype,`shift`,2),j([L({type:Object})],q.prototype,`shiftBoundary`,2),j([L({attribute:`shift-padding`,type:Number})],q.prototype,`shiftPadding`,2),j([L({attribute:`auto-size`})],q.prototype,`autoSize`,2),j([L()],q.prototype,`sync`,2),j([L({type:Object})],q.prototype,`autoSizeBoundary`,2),j([L({attribute:`auto-size-padding`,type:Number})],q.prototype,`autoSizePadding`,2),j([L({attribute:`hover-bridge`,type:Boolean})],q.prototype,`hoverBridge`,2);function Hm(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}var Um=class extends B{constructor(){super(),this.localize=new W(this),this.content=``,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger=`hover focus`,this.hoist=!1,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger(`hover`)){let e=Rf(getComputedStyle(this).getPropertyValue(`--show-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger(`hover`)){let e=Rf(getComputedStyle(this).getPropertyValue(`--hide-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener(`blur`,this.handleBlur,!0),this.addEventListener(`focus`,this.handleFocus,!0),this.addEventListener(`click`,this.handleClick),this.addEventListener(`mouseover`,this.handleMouseOver),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit(`sl-show`),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener(`keydown`,this.handleDocumentKeyDown),await Bf(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:n}=K(this,`tooltip.show`,{dir:this.localize.dir()});await Lf(this.popup.popup,t,n),this.popup.reposition(),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await Bf(this.body);let{keyframes:e,options:n}=K(this,`tooltip.hide`,{dir:this.localize.dir()});await Lf(this.popup.popup,e,n),this.popup.active=!1,this.body.hidden=!0,this.emit(`sl-after-hide`)}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Hm(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Hm(this,`sl-after-hide`)}render(){return N`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${H({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        arrow
        hover-bridge
      >
        ${``}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${``}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?`polite`:`off`}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Um.styles=[I,Gf],Um.dependencies={"sl-popup":q},j([z(`slot:not([name])`)],Um.prototype,`defaultSlot`,2),j([z(`.tooltip__body`)],Um.prototype,`body`,2),j([z(`sl-popup`)],Um.prototype,`popup`,2),j([L()],Um.prototype,`content`,2),j([L()],Um.prototype,`placement`,2),j([L({type:Boolean,reflect:!0})],Um.prototype,`disabled`,2),j([L({type:Number})],Um.prototype,`distance`,2),j([L({type:Boolean,reflect:!0})],Um.prototype,`open`,2),j([L({type:Number})],Um.prototype,`skidding`,2),j([L()],Um.prototype,`trigger`,2),j([L({type:Boolean})],Um.prototype,`hoist`,2),j([F(`open`,{waitUntilFirstUpdate:!0})],Um.prototype,`handleOpenChange`,1),j([F([`content`,`distance`,`hoist`,`placement`,`skidding`])],Um.prototype,`handleOptionsChange`,1),j([F(`disabled`)],Um.prototype,`handleDisabledChange`,1),G(`tooltip.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:`ease`}}),G(`tooltip.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:`ease`}}),Um.define(`sl-tooltip`);var Wm=M`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Gm(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}function Km(e,t=!1){function n(e){let t=e.getChildrenItems({includeDisabled:!1});if(t.length){let n=t.every(e=>e.selected),r=t.every(e=>!e.selected&&!e.indeterminate);e.selected=n,e.indeterminate=!n&&!r}}function r(e){let t=e.parentElement;Wf.isTreeItem(t)&&(n(t),r(t))}function i(e){for(let n of e.getChildrenItems())n.selected=t?e.selected||n.selected:!n.disabled&&e.selected,i(n);t&&n(e)}i(e),r(e)}var qm=class extends B{constructor(){super(),this.selection=`single`,this.clickTarget=null,this.localize=new W(this),this.initTreeItem=e=>{e.selectable=this.selection===`multiple`,[`expand`,`collapse`].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(t=>{let n=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(n===null?e.append(r):n.hasAttribute(`data-default`)&&n.replaceWith(r))})},this.handleTreeChanged=e=>{for(let t of e){let e=[...t.addedNodes].filter(Wf.isTreeItem),n=[...t.removedNodes].filter(Wf.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{let t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{let t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Wf.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.addEventListener(`sl-lazy-change`,this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tree`),this.setAttribute(`tabindex`,`0`),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){let t=(e===`expand`?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(t){let n=t.cloneNode(!0);return[n,...n.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),n.setAttribute(`data-default`,``),n.slot=`${e}-icon`,n}return null}selectItem(e){let t=[...this.selectedItems];if(this.selection===`multiple`)e.selected=!e.selected,e.lazy&&(e.expanded=!0),Km(e);else if(this.selection===`single`||e.isLeaf){let t=this.getAllTreeItems();for(let n of t)n.selected=n===e}else this.selection===`leaf`&&(e.expanded=!e.expanded);let n=this.selectedItems;(t.length!==n.length||n.some(e=>!t.includes(e)))&&Promise.all(n.map(e=>e.updateComplete)).then(()=>{this.emit(`sl-selection-change`,{detail:{selection:n}})})}getAllTreeItems(){return[...this.querySelectorAll(`sl-tree-item`)]}focusItem(e){e?.focus()}handleKeyDown(e){if(![`ArrowDown`,`ArrowUp`,`ArrowRight`,`ArrowLeft`,`Home`,`End`,`Enter`,` `].includes(e.key)||e.composedPath().some(e=>[`input`,`textarea`].includes((e?.tagName)?.toLowerCase())))return;let t=this.getFocusableItems(),n=this.localize.dir()===`ltr`,r=this.localize.dir()===`rtl`;if(t.length>0){e.preventDefault();let i=t.findIndex(e=>e.matches(`:focus`)),a=t[i],o=e=>{let n=t[Gm(e,0,t.length-1)];this.focusItem(n)},s=e=>{a.expanded=e};e.key===`ArrowDown`?o(i+1):e.key===`ArrowUp`?o(i-1):n&&e.key===`ArrowRight`||r&&e.key===`ArrowLeft`?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?o(i+1):s(!0):n&&e.key===`ArrowLeft`||r&&e.key===`ArrowRight`?!a||a.disabled||a.isLeaf||!a.expanded?o(i-1):s(!1):e.key===`Home`?o(0):e.key===`End`?o(t.length-1):(e.key===`Enter`||e.key===` `)&&(a.disabled||this.selectItem(a))}}handleClick(e){let t=e.target,n=t.closest(`sl-tree-item`),r=e.composedPath().some(e=>(e?.classList)?.contains(`tree-item__expand-button`));!n||n.disabled||t!==this.clickTarget||(r?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let e=this.selection===`multiple`,t=this.getAllTreeItems();this.setAttribute(`aria-multiselectable`,e?`true`:`false`);for(let n of t)n.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(`:scope > sl-tree-item`)].forEach(e=>Km(e,!0)))}get selectedItems(){return this.getAllTreeItems().filter(e=>e.selected)}getFocusableItems(){let e=this.getAllTreeItems(),t=new Set;return e.filter(e=>{if(e.disabled)return!1;let n=e.parentElement?.closest(`[role=treeitem]`);return n&&(!n.expanded||n.loading||t.has(n))&&t.add(e),!t.has(e)})}render(){return N`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};qm.styles=[I,Wm],j([z(`slot:not([name])`)],qm.prototype,`defaultSlot`,2),j([z(`slot[name=expand-icon]`)],qm.prototype,`expandedIconSlot`,2),j([z(`slot[name=collapse-icon]`)],qm.prototype,`collapsedIconSlot`,2),j([L()],qm.prototype,`selection`,2),j([F(`selection`)],qm.prototype,`handleSelectionChange`,1),qm.define(`sl-tree`);var Jm=M`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Ym=class extends B{render(){return N` <slot></slot> `}};Ym.styles=[I,Jm],Ym.define(`sl-visually-hidden`);var Xm=M`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Zm=0,Qm=class extends B{constructor(){super(...arguments),this.attrId=++Zm,this.componentId=`sl-tab-panel-${this.attrId}`,this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute(`role`,`tabpanel`)}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return N`
      <slot
        part="base"
        class=${H({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Qm.styles=[I,Xm],j([L({reflect:!0})],Qm.prototype,`name`,2),j([L({type:Boolean,reflect:!0})],Qm.prototype,`active`,2),j([F(`active`)],Qm.prototype,`handleActiveChange`,1),Qm.define(`sl-tab-panel`);var $m=M`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,eh=M`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,th=Symbol.for(``),nh=e=>{if(e?.r===th)return e?._$litStatic$},rh=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:th}),ih=new Map,ah=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=nh(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=ih.get(e))===void 0&&(o.raw=o,ih.set(e,t=o)),n=s}return e(t,...n)})(N),oh=class extends B{constructor(){super(...arguments),this.hasFocus=!1,this.label=``,this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?rh`a`:rh`button`;return ah`
      <${t}
        part="base"
        class=${H({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:`button`)}
        href=${U(e?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e&&this.target?`noreferrer noopener`:void 0)}
        role=${U(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${U(this.name)}
          library=${U(this.library)}
          src=${U(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};oh.styles=[I,eh],oh.dependencies={"sl-icon":V},j([z(`.icon-button`)],oh.prototype,`button`,2),j([R()],oh.prototype,`hasFocus`,2),j([L()],oh.prototype,`name`,2),j([L()],oh.prototype,`library`,2),j([L()],oh.prototype,`src`,2),j([L()],oh.prototype,`href`,2),j([L()],oh.prototype,`target`,2),j([L()],oh.prototype,`download`,2),j([L()],oh.prototype,`label`,2),j([L({type:Boolean,reflect:!0})],oh.prototype,`disabled`,2);var sh=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.variant=`neutral`,this.size=`medium`,this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit(`sl-remove`)}render(){return N`
      <span
        part="base"
        class=${H({tag:!0,"tag--primary":this.variant===`primary`,"tag--success":this.variant===`success`,"tag--neutral":this.variant===`neutral`,"tag--warning":this.variant===`warning`,"tag--danger":this.variant===`danger`,"tag--text":this.variant===`text`,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?N`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </span>
    `}};sh.styles=[I,$m],sh.dependencies={"sl-icon-button":oh},j([L({reflect:!0})],sh.prototype,`variant`,2),j([L({reflect:!0})],sh.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],sh.prototype,`pill`,2),j([L({type:Boolean})],sh.prototype,`removable`,2),sh.define(`sl-tag`);var ch=M`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,J=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new Bd(this,`help-text`,`label`),this.hasFocus=!1,this.title=``,this.name=``,this.value=``,this.size=`medium`,this.filled=!1,this.label=``,this.helpText=``,this.placeholder=``,this.rows=4,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.form=``,this.required=!1,this.spellcheck=!0,this.defaultValue=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit(`sl-change`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize===`auto`?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`,this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=``}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return N`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${U(this.name)}
              .value=${vf(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${U(this.placeholder)}
              rows=${U(this.rows)}
              minlength=${U(this.minlength)}
              maxlength=${U(this.maxlength)}
              autocapitalize=${U(this.autocapitalize)}
              autocorrect=${U(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${U(this.spellcheck)}
              enterkeyhint=${U(this.enterkeyhint)}
              inputmode=${U(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!==`auto`}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J.styles=[I,zd,ch],j([z(`.textarea__control`)],J.prototype,`input`,2),j([z(`.textarea__size-adjuster`)],J.prototype,`sizeAdjuster`,2),j([R()],J.prototype,`hasFocus`,2),j([L()],J.prototype,`title`,2),j([L()],J.prototype,`name`,2),j([L()],J.prototype,`value`,2),j([L({reflect:!0})],J.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],J.prototype,`filled`,2),j([L()],J.prototype,`label`,2),j([L({attribute:`help-text`})],J.prototype,`helpText`,2),j([L()],J.prototype,`placeholder`,2),j([L({type:Number})],J.prototype,`rows`,2),j([L()],J.prototype,`resize`,2),j([L({type:Boolean,reflect:!0})],J.prototype,`disabled`,2),j([L({type:Boolean,reflect:!0})],J.prototype,`readonly`,2),j([L({reflect:!0})],J.prototype,`form`,2),j([L({type:Boolean,reflect:!0})],J.prototype,`required`,2),j([L({type:Number})],J.prototype,`minlength`,2),j([L({type:Number})],J.prototype,`maxlength`,2),j([L()],J.prototype,`autocapitalize`,2),j([L()],J.prototype,`autocorrect`,2),j([L()],J.prototype,`autocomplete`,2),j([L({type:Boolean})],J.prototype,`autofocus`,2),j([L()],J.prototype,`enterkeyhint`,2),j([L({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],J.prototype,`spellcheck`,2),j([L()],J.prototype,`inputmode`,2),j([Rd()],J.prototype,`defaultValue`,2),j([F(`disabled`,{waitUntilFirstUpdate:!0})],J.prototype,`handleDisabledChange`,1),j([F(`rows`,{waitUntilFirstUpdate:!0})],J.prototype,`handleRowsChange`,1),j([F(`value`,{waitUntilFirstUpdate:!0})],J.prototype,`handleValueChange`,1),J.define(`sl-textarea`);var lh=M`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,uh=0,dh=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.attrId=++uh,this.componentId=`sl-tab-${this.attrId}`,this.panel=``,this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleCloseClick(e){e.stopPropagation(),this.emit(`sl-close`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,N`
      <div
        part="base"
        class=${H({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?N`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </div>
    `}};dh.styles=[I,lh],dh.dependencies={"sl-icon-button":oh},j([z(`.tab`)],dh.prototype,`tab`,2),j([L({reflect:!0})],dh.prototype,`panel`,2),j([L({type:Boolean,reflect:!0})],dh.prototype,`active`,2),j([L({type:Boolean,reflect:!0})],dh.prototype,`closable`,2),j([L({type:Boolean,reflect:!0})],dh.prototype,`disabled`,2),j([L({type:Number,reflect:!0})],dh.prototype,`tabIndex`,2),j([F(`active`)],dh.prototype,`handleActiveChange`,1),j([F(`disabled`)],dh.prototype,`handleDisabledChange`,1),dh.define(`sl-tab`);var fh=M`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,ph=M`
  :host {
    display: contents;
  }
`,mh=class extends B{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit(`sl-resize`,{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector(`slot`);if(e!==null){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};mh.styles=[I,ph],j([L({type:Boolean,reflect:!0})],mh.prototype,`disabled`,2),j([F(`disabled`,{waitUntilFirstUpdate:!0})],mh.prototype,`handleDisabledChange`,1);function hh(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var gh=new Set;function _h(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function vh(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function yh(e){if(gh.add(e),!document.documentElement.classList.contains(`sl-scroll-lock`)){let e=_h()+vh(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--sl-scroll-lock-gutter`,t),document.documentElement.classList.add(`sl-scroll-lock`),document.documentElement.style.setProperty(`--sl-scroll-lock-size`,`${e}px`)}}function bh(e){gh.delete(e),gh.size===0&&(document.documentElement.classList.remove(`sl-scroll-lock`),document.documentElement.style.removeProperty(`--sl-scroll-lock-size`))}function xh(e,t,n=`vertical`,r=`smooth`){let i=hh(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var Sh=class extends B{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new W(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement=`top`,this.activation=`auto`,this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let e=Promise.all([customElements.whenDefined(`sl-tab`),customElements.whenDefined(`sl-tab-panel`)]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(({target:e})=>{if(e===this)return!0;if(e.closest(`sl-tab-group`)!==this)return!1;let t=e.tagName.toLowerCase();return t===`sl-tab`||t===`sl-tab-panel`});if(t.length!==0){if(t.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`sl-tab`).map(e=>e.target).find(e=>e.active);e&&this.setActiveTab(e)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:[`active`,`disabled`,`name`,`panel`],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector(`slot[name="nav"]`).assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()===`sl-tab-panel`)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`sl-tab`);t?.closest(`sl-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`sl-tab`);if(t?.closest(`sl-tab-group`)===this&&([`Enter`,` `].includes(e.key)&&t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault()),[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key))){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`sl-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`,`bottom`].includes(this.placement)&&xh(r,this.nav,`horizontal`),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t=lu({emitEvents:!0,scrollBehavior:`auto`},t),e!==this.activeTab&&!e.disabled){let n=this.activeTab;this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),this.syncIndicator(),[`top`,`bottom`].includes(this.placement)&&xh(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(n&&this.emit(`sl-tab-hide`,{detail:{name:n.panel}}),this.emit(`sl-tab-show`,{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}repositionIndicator(){let e=this.getActiveTab();if(!e)return;let t=e.clientWidth,n=e.clientHeight,r=this.localize.dir()===`rtl`,i=this.getAllTabs(),a=i.slice(0,i.indexOf(e)).reduce((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight}),{left:0,top:0});switch(this.placement){case`top`:case`bottom`:this.indicator.style.width=`${t}px`,this.indicator.style.height=`auto`,this.indicator.style.translate=r?`${-1*a.left}px`:`${a.left}px`;break;case`start`:case`end`:this.indicator.style.width=`auto`,this.indicator.style.height=`${n}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()===`rtl`?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=[`top`,`bottom`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display=`block`,this.repositionIndicator()):this.indicator.style.display=`none`}show(e){let t=this.tabs.find(t=>t.panel===e);t&&this.setActiveTab(t,{scrollBehavior:`smooth`})}render(){let e=this.localize.dir()===`rtl`;return N`
      <div
        part="base"
        class=${H({"tab-group":!0,"tab-group--top":this.placement===`top`,"tab-group--bottom":this.placement===`bottom`,"tab-group--start":this.placement===`start`,"tab-group--end":this.placement===`end`,"tab-group--rtl":this.localize.dir()===`rtl`,"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${H({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?`chevron-right`:`chevron-left`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToStart`)}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:``}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${H({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?`chevron-left`:`chevron-right`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToEnd`)}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:``}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Sh.styles=[I,fh],Sh.dependencies={"sl-icon-button":oh,"sl-resize-observer":mh},j([z(`.tab-group`)],Sh.prototype,`tabGroup`,2),j([z(`.tab-group__body`)],Sh.prototype,`body`,2),j([z(`.tab-group__nav`)],Sh.prototype,`nav`,2),j([z(`.tab-group__indicator`)],Sh.prototype,`indicator`,2),j([R()],Sh.prototype,`hasScrollControls`,2),j([R()],Sh.prototype,`shouldHideScrollStartButton`,2),j([R()],Sh.prototype,`shouldHideScrollEndButton`,2),j([L()],Sh.prototype,`placement`,2),j([L()],Sh.prototype,`activation`,2),j([L({attribute:`no-scroll-controls`,type:Boolean})],Sh.prototype,`noScrollControls`,2),j([L({attribute:`fixed-scroll-controls`,type:Boolean})],Sh.prototype,`fixedScrollControls`,2),j([tf({passive:!0})],Sh.prototype,`updateScrollButtons`,1),j([F(`noScrollControls`,{waitUntilFirstUpdate:!0})],Sh.prototype,`updateScrollControls`,1),j([F(`placement`,{waitUntilFirstUpdate:!0})],Sh.prototype,`syncIndicator`,1),Sh.define(`sl-tab-group`);var Ch=M`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,wh=class extends B{constructor(){super(...arguments),this.effect=`none`}render(){return N`
      <div
        part="base"
        class=${H({skeleton:!0,"skeleton--pulse":this.effect===`pulse`,"skeleton--sheen":this.effect===`sheen`})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};wh.styles=[I,Ch],j([L()],wh.prototype,`effect`,2),wh.define(`sl-skeleton`);var Th=M`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Eh(e,t){function n(n){let r=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,a=r.left+i.scrollX,o=r.top+i.scrollY,s=n.pageX-a,c=n.pageY-o;t?.onMove&&t.onMove(s,c)}function r(){document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r),t?.onStop&&t.onStop()}document.addEventListener(`pointermove`,n,{passive:!0}),document.addEventListener(`pointerup`,r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}var Dh=()=>null,Oh=class extends B{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new W(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue=``,this.snapFunction=Dh,this.snapThreshold=12}toSnapFunction(e){let t=e.split(` `);return({pos:n,size:r,snapThreshold:i,isRtl:a,vertical:o})=>{let s=n,c=1/0;return t.forEach(t=>{let l;if(t.startsWith(`repeat(`)){let t=e.substring(7,e.length-1),i=t.endsWith(`%`),s=Number.parseFloat(t),c=i?s/100*r:s;l=Math.round((a&&!o?r-n:n)/c)*c}else l=t.endsWith(`%`)?Number.parseFloat(t)/100*r:Number.parseFloat(t);a&&!o&&(l=r-l);let u=Math.abs(n-l);u<=i&&u<c&&(s=l,c=u)}),s}}set snap(e){this.snapValue=e??``,e?this.snapFunction=typeof e==`string`?this.toSnapFunction(e):e:this.snapFunction=Dh}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){let{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){let t=this.localize.dir()===`rtl`;this.disabled||(e.cancelable&&e.preventDefault(),Eh(this,{onMove:(e,n)=>{let r=this.vertical?n:e;this.primary===`end`&&(r=this.size-r),r=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical})??r,this.position=Gm(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`Enter`].includes(e.key)){let t=this.position,n=(e.shiftKey?10:1)*(this.primary===`end`?-1:1);if(e.preventDefault(),(e.key===`ArrowLeft`&&!this.vertical||e.key===`ArrowUp`&&this.vertical)&&(t-=n),(e.key===`ArrowRight`&&!this.vertical||e.key===`ArrowDown`&&this.vertical)&&(t+=n),e.key===`Home`&&(t=this.primary===`end`?100:0),e.key===`End`&&(t=this.primary===`end`?0:100),e.key===`Enter`)if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let e=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=e})}this.position=Gm(t,0,100)}}handleResize(e){let{width:t,height:n}=e[0].contentRect;this.size=this.vertical?n:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.positionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit(`sl-reposition`)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let e=this.vertical?`gridTemplateRows`:`gridTemplateColumns`,t=this.vertical?`gridTemplateColumns`:`gridTemplateRows`,n=this.localize.dir()===`rtl`,r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i=`auto`;return this.primary===`end`?n&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${r}`:n&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${i}`,this.style[t]=``,N`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${U(this.disabled?void 0:`0`)}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term(`resize`)}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Oh.styles=[I,Th],j([z(`.divider`)],Oh.prototype,`divider`,2),j([L({type:Number,reflect:!0})],Oh.prototype,`position`,2),j([L({attribute:`position-in-pixels`,type:Number})],Oh.prototype,`positionInPixels`,2),j([L({type:Boolean,reflect:!0})],Oh.prototype,`vertical`,2),j([L({type:Boolean,reflect:!0})],Oh.prototype,`disabled`,2),j([L()],Oh.prototype,`primary`,2),j([L({reflect:!0})],Oh.prototype,`snap`,1),j([L({type:Number,attribute:`snap-threshold`})],Oh.prototype,`snapThreshold`,2),j([F(`position`)],Oh.prototype,`handlePositionChange`,1),j([F(`positionInPixels`)],Oh.prototype,`handlePositionInPixelsChange`,1),j([F(`vertical`)],Oh.prototype,`handleVerticalChange`,1),Oh.define(`sl-split-panel`);var kh=M`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Ah=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Bd(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleInput(){this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit(`sl-change`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`sl-change`),this.emit(`sl-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`sl-change`),this.emit(`sl-input`))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return N`
      <div
        class=${H({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${H({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${U(this.value)}
            .checked=${vf(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ah.styles=[I,zd,kh],j([z(`input[type="checkbox"]`)],Ah.prototype,`input`,2),j([R()],Ah.prototype,`hasFocus`,2),j([L()],Ah.prototype,`title`,2),j([L()],Ah.prototype,`name`,2),j([L()],Ah.prototype,`value`,2),j([L({reflect:!0})],Ah.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],Ah.prototype,`disabled`,2),j([L({type:Boolean,reflect:!0})],Ah.prototype,`checked`,2),j([Rd(`checked`)],Ah.prototype,`defaultChecked`,2),j([L({reflect:!0})],Ah.prototype,`form`,2),j([L({type:Boolean,reflect:!0})],Ah.prototype,`required`,2),j([L({attribute:`help-text`})],Ah.prototype,`helpText`,2),j([F(`checked`,{waitUntilFirstUpdate:!0})],Ah.prototype,`handleCheckedChange`,1),j([F(`disabled`,{waitUntilFirstUpdate:!0})],Ah.prototype,`handleDisabledChange`,1),Ah.define(`sl-switch`),mh.define(`sl-resize-observer`);var jh=M`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,Mh=class extends _f{constructor(e){if(super(e),this.it=P,e.type!==hf.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===P||e==null)return this._t=void 0,this.it=e;if(e===gd)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Mh.directiveName=`unsafeHTML`,Mh.resultType=1;var Nh=gf(Mh),Y=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new Bd(this,`help-text`,`label`),this.localize=new W(this),this.typeToSelectString=``,this.hasFocus=!1,this.displayLabel=``,this.selectedOptions=[],this.valueHasChanged=!1,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.getTag=e=>N`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`sl-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`sl-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`sl-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`sl-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`sl-option`)||customElements.whenDefined(`sl-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>r.push(e.value)),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}))}getAllOptions(){return[...this.querySelectorAll(`sl-option`)]}getFirstOption(){return this.querySelector(`sl-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected);let t=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&this.value.length===0?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.value=e?.value??``,this.displayLabel=(e?.getTextLabel)?.call(e)??``}this.valueHasChanged=t,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return N`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?Nh(n):n}
        </div>`}else if(t===this.maxOptionsVisible)return N`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return N``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`sl-show`),this.addOpenListeners(),await Bf(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=K(this,`select.show`,{dir:this.localize.dir()});await Lf(this.popup.popup,e,t),this.currentOption&&xh(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await Bf(this);let{keyframes:e,options:t}=K(this,`select.hide`,{dir:this.localize.dir()});await Lf(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Hm(this,`sl-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Hm(this,`sl-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return N`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${H({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement}
            strategy=${this.hoist?`fixed`:`absolute`}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?N`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?N`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=[I,zd,jh],Y.dependencies={"sl-icon":V,"sl-popup":q,"sl-tag":sh},j([z(`.select`)],Y.prototype,`popup`,2),j([z(`.select__combobox`)],Y.prototype,`combobox`,2),j([z(`.select__display-input`)],Y.prototype,`displayInput`,2),j([z(`.select__value-input`)],Y.prototype,`valueInput`,2),j([z(`.select__listbox`)],Y.prototype,`listbox`,2),j([R()],Y.prototype,`hasFocus`,2),j([R()],Y.prototype,`displayLabel`,2),j([R()],Y.prototype,`currentOption`,2),j([R()],Y.prototype,`selectedOptions`,2),j([R()],Y.prototype,`valueHasChanged`,2),j([L()],Y.prototype,`name`,2),j([R()],Y.prototype,`value`,1),j([L({attribute:`value`})],Y.prototype,`defaultValue`,2),j([L({reflect:!0})],Y.prototype,`size`,2),j([L()],Y.prototype,`placeholder`,2),j([L({type:Boolean,reflect:!0})],Y.prototype,`multiple`,2),j([L({attribute:`max-options-visible`,type:Number})],Y.prototype,`maxOptionsVisible`,2),j([L({type:Boolean,reflect:!0})],Y.prototype,`disabled`,2),j([L({type:Boolean})],Y.prototype,`clearable`,2),j([L({type:Boolean,reflect:!0})],Y.prototype,`open`,2),j([L({type:Boolean})],Y.prototype,`hoist`,2),j([L({type:Boolean,reflect:!0})],Y.prototype,`filled`,2),j([L({type:Boolean,reflect:!0})],Y.prototype,`pill`,2),j([L()],Y.prototype,`label`,2),j([L({reflect:!0})],Y.prototype,`placement`,2),j([L({attribute:`help-text`})],Y.prototype,`helpText`,2),j([L({reflect:!0})],Y.prototype,`form`,2),j([L({type:Boolean,reflect:!0})],Y.prototype,`required`,2),j([L()],Y.prototype,`getTag`,2),j([F(`disabled`,{waitUntilFirstUpdate:!0})],Y.prototype,`handleDisabledChange`,1),j([F([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],Y.prototype,`handleValueChange`,1),j([F(`open`,{waitUntilFirstUpdate:!0})],Y.prototype,`handleOpenChange`,1),G(`select.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),G(`select.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),Y.define(`sl-select`),Mf.define(`sl-spinner`);var Ph=M`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,X=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this),this.hasSlotController=new Bd(this,`help-text`,`label`),this.localize=new W(this),this.hasFocus=!1,this.hasTooltip=!1,this.title=``,this.name=``,this.value=0,this.label=``,this.helpText=``,this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip=`top`,this.tooltipFormatter=e=>e.toString(),this.form=``,this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit(`sl-change`)}handleInput(){this.value=parseFloat(this.input.value),this.emit(`sl-input`),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit(`sl-focus`)}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty(`--percent`,`${e*100}%`)}syncTooltip(e){if(this.output!==null){let t=this.input.offsetWidth,n=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue(`--thumb-size`),i=this.localize.dir()===`rtl`,a=t*e;if(i){let i=`${t-a}px + ${e} * ${r}`;this.output.style.translate=`calc((${i} - ${n/2}px - ${r} / 2))`}else{let t=`${a}px - ${e} * ${r}`;this.output.style.translate=`calc(${t} - ${n/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!==`none`&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return N`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--medium":!0,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()===`rtl`,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip===`top`,"range--tooltip-bottom":this.tooltip===`bottom`})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${U(this.name)}
              ?disabled=${this.disabled}
              min=${U(this.min)}
              max=${U(this.max)}
              step=${U(this.step)}
              .value=${vf(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!==`none`&&!this.disabled?N`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter==`function`?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:``}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};X.styles=[I,zd,Ph],j([z(`.range__control`)],X.prototype,`input`,2),j([z(`.range__tooltip`)],X.prototype,`output`,2),j([R()],X.prototype,`hasFocus`,2),j([R()],X.prototype,`hasTooltip`,2),j([L()],X.prototype,`title`,2),j([L()],X.prototype,`name`,2),j([L({type:Number})],X.prototype,`value`,2),j([L()],X.prototype,`label`,2),j([L({attribute:`help-text`})],X.prototype,`helpText`,2),j([L({type:Boolean,reflect:!0})],X.prototype,`disabled`,2),j([L({type:Number})],X.prototype,`min`,2),j([L({type:Number})],X.prototype,`max`,2),j([L({type:Number})],X.prototype,`step`,2),j([L()],X.prototype,`tooltip`,2),j([L({attribute:!1})],X.prototype,`tooltipFormatter`,2),j([L({reflect:!0})],X.prototype,`form`,2),j([Rd()],X.prototype,`defaultValue`,2),j([tf({passive:!0})],X.prototype,`handleThumbDragStart`,1),j([F(`value`,{waitUntilFirstUpdate:!0})],X.prototype,`handleValueChange`,1),j([F(`disabled`,{waitUntilFirstUpdate:!0})],X.prototype,`handleDisabledChange`,1),j([F(`hasTooltip`,{waitUntilFirstUpdate:!0})],X.prototype,`syncRange`,1),X.define(`sl-range`);var Fh=M`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,Ih=`important`,Lh=` !`+Ih,Rh=gf(class extends _f{constructor(e){if(super(e),e.type!==hf.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Lh);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ih:``):n[e]=r}}return gd}}),zh=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.hoverValue=0,this.isHovering=!1,this.label=``,this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>`<sl-icon name="star-fill" library="system"></sl-icon>`}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){let t=this.localize.dir()===`rtl`,{left:n,right:r,width:i}=this.rating.getBoundingClientRect();return Gm(t?this.roundToPrecision((r-e)/i*this.max,this.precision):this.roundToPrecision((e-n)/i*this.max,this.precision),0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit(`sl-change`))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){let t=this.localize.dir()===`ltr`,n=this.localize.dir()===`rtl`,r=this.value;if(!(this.disabled||this.readonly)){if(e.key===`ArrowDown`||t&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`){let t=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-t),e.preventDefault()}if(e.key===`ArrowUp`||t&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`){let t=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+t),e.preventDefault()}e.key===`Home`&&(this.value=0,e.preventDefault()),e.key===`End`&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.emit(`sl-change`)}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit(`sl-change`),e.preventDefault()}roundToPrecision(e,t=.5){let n=1/t;return Math.ceil(e*n)/n}handleHoverValueChange(){this.emit(`sl-hover`,{detail:{phase:`move`,value:this.hoverValue}})}handleIsHoveringChange(){this.emit(`sl-hover`,{detail:{phase:this.isHovering?`start`:`end`,value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){let e=this.localize.dir()===`rtl`,t=Array.from(Array(this.max).keys()),n=0;return n=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,N`
      <div
        part="base"
        class=${H({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-readonly=${this.readonly?`true`:`false`}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?`-1`:`0`}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(t=>n>t&&n<t+1?N`
                <span
                  class=${H({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(n)===t+1})}
                  role="presentation"
                >
                  <div
                    style=${Rh({clipPath:e?`inset(0 ${(n-t)*100}% 0 0)`:`inset(0 0 0 ${(n-t)*100}%)`})}
                  >
                    ${Nh(this.getSymbol(t+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Rh({clipPath:e?`inset(0 0 0 ${100-(n-t)*100}%)`:`inset(0 ${100-(n-t)*100}% 0 0)`})}
                  >
                    ${Nh(this.getSymbol(t+1))}
                  </div>
                </span>
              `:N`
              <span
                class=${H({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(n)===t+1,"rating__symbol--active":n>=t+1})}
                role="presentation"
              >
                ${Nh(this.getSymbol(t+1))}
              </span>
            `)}
        </span>
      </div>
    `}};zh.styles=[I,Fh],zh.dependencies={"sl-icon":V},j([z(`.rating`)],zh.prototype,`rating`,2),j([R()],zh.prototype,`hoverValue`,2),j([R()],zh.prototype,`isHovering`,2),j([L()],zh.prototype,`label`,2),j([L({type:Number})],zh.prototype,`value`,2),j([L({type:Number})],zh.prototype,`max`,2),j([L({type:Number})],zh.prototype,`precision`,2),j([L({type:Boolean,reflect:!0})],zh.prototype,`readonly`,2),j([L({type:Boolean,reflect:!0})],zh.prototype,`disabled`,2),j([L()],zh.prototype,`getSymbol`,2),j([tf({passive:!0})],zh.prototype,`handleTouchMove`,1),j([F(`hoverValue`)],zh.prototype,`handleHoverValueChange`,1),j([F(`isHovering`)],zh.prototype,`handleIsHoveringChange`,1),zh.define(`sl-rating`);var Bh=[{max:276e4,value:6e4,unit:`minute`},{max:72e6,value:36e5,unit:`hour`},{max:5184e5,value:864e5,unit:`day`},{max:24192e5,value:6048e5,unit:`week`},{max:28512e6,value:2592e6,unit:`month`},{max:1/0,value:31536e6,unit:`year`}],Vh=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.isoTime=``,this.relativeTime=``,this.date=new Date,this.format=`long`,this.numeric=`auto`,this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime=``,this.isoTime=``,``;let n=t.getTime()-e.getTime(),{unit:r,value:i}=Bh.find(e=>Math.abs(n)<e.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/i),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let e;e=Hh(r===`minute`?`second`:r===`hour`?`minute`:r===`day`?`hour`:`day`),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),e)}return N` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};j([R()],Vh.prototype,`isoTime`,2),j([R()],Vh.prototype,`relativeTime`,2),j([L()],Vh.prototype,`date`,2),j([L()],Vh.prototype,`format`,2),j([L()],Vh.prototype,`numeric`,2),j([L({type:Boolean})],Vh.prototype,`sync`,2);function Hh(e){let t={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return t-Date.now()%t}Vh.define(`sl-relative-time`);var Uh=M`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Wh=M`
  ${Uh}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Gh=class extends B{constructor(){super(...arguments),this.hasSlotController=new Bd(this,`[default]`,`prefix`,`suffix`),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size=`medium`,this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return ah`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?` button--checked`:``}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${H({button:!0,"button--default":!0,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
          aria-disabled=${this.disabled}
          type="button"
          value=${U(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Gh.styles=[I,Wh],j([z(`.button`)],Gh.prototype,`input`,2),j([z(`.hidden-input`)],Gh.prototype,`hiddenInput`,2),j([R()],Gh.prototype,`hasFocus`,2),j([L({type:Boolean,reflect:!0})],Gh.prototype,`checked`,2),j([L()],Gh.prototype,`value`,2),j([L({type:Boolean,reflect:!0})],Gh.prototype,`disabled`,2),j([L({reflect:!0})],Gh.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],Gh.prototype,`pill`,2),j([F(`disabled`,{waitUntilFirstUpdate:!0})],Gh.prototype,`handleDisabledChange`,1),Gh.define(`sl-radio-button`);var Kh=M`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,qh=M`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Jh=class extends B{constructor(){super(...arguments),this.disableRole=!1,this.label=``}handleFocus(e){Yh(e.target)?.toggleAttribute(`data-sl-button-group__button--focus`,!0)}handleBlur(e){Yh(e.target)?.toggleAttribute(`data-sl-button-group__button--focus`,!1)}handleMouseOver(e){Yh(e.target)?.toggleAttribute(`data-sl-button-group__button--hover`,!0)}handleMouseOut(e){Yh(e.target)?.toggleAttribute(`data-sl-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=Yh(t);r&&(r.toggleAttribute(`data-sl-button-group__button`,!0),r.toggleAttribute(`data-sl-button-group__button--first`,n===0),r.toggleAttribute(`data-sl-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-sl-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-sl-button-group__button--radio`,r.tagName.toLowerCase()===`sl-radio-button`))})}render(){return N`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Jh.styles=[I,qh],j([z(`slot`)],Jh.prototype,`defaultSlot`,2),j([R()],Jh.prototype,`disableRole`,2),j([L()],Jh.prototype,`label`,2);function Yh(e){let t=`sl-button, sl-radio-button`;return e.closest(t)??e.querySelector(t)}var Xh=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this),this.hasSlotController=new Bd(this,`help-text`,`label`),this.customValidityMessage=``,this.hasButtonGroup=!1,this.errorMessage=``,this.defaultValue=``,this.label=``,this.helpText=``,this.name=`option`,this.value=``,this.size=`medium`,this.form=``,this.required=!1}get validity(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?wu:Cu:Tu}get validationMessage(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?this.validationInput.validationMessage:``:this.customValidityMessage}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`sl-radio, sl-radio-button`)]}handleRadioClick(e){let t=e.target.closest(`sl-radio, sl-radio-button`),n=this.getAllRadios(),r=this.value;!t||t.disabled||(this.value=t.value,n.forEach(e=>e.checked=e===t),this.value!==r&&(this.emit(`sl-change`),this.emit(`sl-input`)))}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key))return;let t=this.getAllRadios().filter(e=>!e.disabled),n=t.find(e=>e.checked)??t[0],r=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,i=this.value,a=t.indexOf(n)+r;a<0&&(a=t.length-1),a>t.length-1&&(a=0),this.getAllRadios().forEach(e=>{e.checked=!1,this.hasButtonGroup||e.setAttribute(`tabindex`,`-1`)}),this.value=t[a].value,t[a].checked=!0,this.hasButtonGroup?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==i&&(this.emit(`sl-change`),this.emit(`sl-input`)),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){let e=this.getAllRadios();if(await Promise.all(e.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=e.some(e=>e.tagName.toLowerCase()===`sl-radio-button`),e.length>0&&!e.some(e=>e.checked))if(this.hasButtonGroup){let t=e[0].shadowRoot?.querySelector(`button`);t&&t.setAttribute(`tabindex`,`0`)}else e[0].setAttribute(`tabindex`,`0`);if(this.hasButtonGroup){let e=this.shadowRoot?.querySelector(`sl-button-group`);e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get(`sl-radio`)&&customElements.get(`sl-radio-button`)){this.syncRadioElements();return}customElements.get(`sl-radio`)?this.syncRadioElements():customElements.whenDefined(`sl-radio`).then(()=>this.syncRadios()),customElements.get(`sl-radio-button`)?this.syncRadioElements():customElements.whenDefined(`sl-radio-button`).then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let e=this.required&&!this.value,t=this.customValidityMessage!==``;return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?``:this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=``){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=N`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return N`
      <fieldset
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--radio-group":!0,"form-control--has-label":n,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?N`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Xh.styles=[I,zd,Kh],Xh.dependencies={"sl-button-group":Jh},j([z(`slot:not([name])`)],Xh.prototype,`defaultSlot`,2),j([z(`.radio-group__validation-input`)],Xh.prototype,`validationInput`,2),j([R()],Xh.prototype,`hasButtonGroup`,2),j([R()],Xh.prototype,`errorMessage`,2),j([R()],Xh.prototype,`defaultValue`,2),j([L()],Xh.prototype,`label`,2),j([L({attribute:`help-text`})],Xh.prototype,`helpText`,2),j([L()],Xh.prototype,`name`,2),j([L({reflect:!0})],Xh.prototype,`value`,2),j([L({reflect:!0})],Xh.prototype,`size`,2),j([L({reflect:!0})],Xh.prototype,`form`,2),j([L({type:Boolean,reflect:!0})],Xh.prototype,`required`,2),j([F(`size`,{waitUntilFirstUpdate:!0})],Xh.prototype,`handleSizeChange`,1),j([F(`value`)],Xh.prototype,`handleValueChange`,1),Xh.define(`sl-radio-group`);var Zh=M`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Qh=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.label=``}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e,n=t-this.value/100*t;this.indicatorOffset=`${n}px`}}render(){return N`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Qh.styles=[I,Zh],j([z(`.progress-ring__indicator`)],Qh.prototype,`indicator`,2),j([R()],Qh.prototype,`indicatorOffset`,2),j([L({type:Number,reflect:!0})],Qh.prototype,`value`,2),j([L()],Qh.prototype,`label`,2),Qh.define(`sl-progress-ring`);var $h=M`
  :host {
    display: inline-block;
  }
`,eg=null,tg=class{};tg.render=function(e,t){eg(e,t)},self.QrCreator=tg,(function(e){function t(t,n,r,i){var a={},o=e(r,n);o.u(t),o.J(),i||=0;var s=o.h(),c=o.h()+2*i;return a.text=t,a.level=n,a.version=r,a.O=c,a.a=function(e,t){return e-=i,t-=i,0>e||e>=s||0>t||t>=s?!1:o.a(e,t)},a}function n(e,t,n,r,i,a,o,s,c,l){function u(t,n,r,i,o,s,c){t?(e.lineTo(n+s,r+c),e.arcTo(n,r,i,o,a)):e.lineTo(n,r)}o?e.moveTo(t+a,n):e.moveTo(t,n),u(s,r,n,r,i,-a,0),u(c,r,i,t,i,0,-a),u(l,t,i,t,n,a,0),u(o,t,n,r,n,0,a)}function r(e,t,n,r,i,a,o,s,c,l){function u(t,n,r,i){e.moveTo(t+r,n),e.lineTo(t,n),e.lineTo(t,n+i),e.arcTo(t,n,t+r,n,a)}o&&u(t,n,a,a),s&&u(r,n,-a,a),c&&u(r,i,-a,-a),l&&u(t,i,a,-a)}function i(e,t){var n=t.fill;if(typeof n==`string`)e.fillStyle=n;else{var r=n.type,i=n.colorStops;if(n=n.position.map(e=>Math.round(e*t.size)),r===`linear-gradient`)var a=e.createLinearGradient.apply(e,n);else if(r===`radial-gradient`)a=e.createRadialGradient.apply(e,n);else throw Error(`Unsupported fill`);i.forEach(([e,t])=>{a.addColorStop(e,t)}),e.fillStyle=a}}function a(e,a){a:{var o=a.text,s=a.v,c=a.N,l=a.K,u=a.P;for(c=Math.max(1,c||1),l=Math.min(40,l||40);c<=l;c+=1)try{var d=t(o,s,c,u);break a}catch{}d=void 0}if(!d)return null;for(o=e.getContext(`2d`),a.background&&(o.fillStyle=a.background,o.fillRect(a.left,a.top,a.size,a.size)),s=d.O,l=a.size/s,o.beginPath(),u=0;u<s;u+=1)for(c=0;c<s;c+=1){var f=o,p=a.left+c*l,m=a.top+u*l,h=u,g=c,_=d.a,v=p+l,y=m+l,b=h-1,x=h+1,S=g-1,C=g+1,ee=Math.floor(Math.min(.5,Math.max(0,a.R))*l),te=_(h,g),ne=_(b,S),re=_(b,g);b=_(b,C);var ie=_(h,C);C=_(x,C),g=_(x,g),x=_(x,S),h=_(h,S),p=Math.round(p),m=Math.round(m),v=Math.round(v),y=Math.round(y),te?n(f,p,m,v,y,ee,!re&&!h,!re&&!ie,!g&&!ie,!g&&!h):r(f,p,m,v,y,ee,re&&h&&ne,re&&ie&&b,g&&ie&&C,g&&h&&x)}return i(o,a),o.fill(),e}var o={minVersion:1,maxVersion:40,ecLevel:`L`,left:0,top:0,size:200,fill:`#000`,background:null,text:`no text`,radius:.5,quiet:0};eg=function(e,t){var n={};Object.assign(n,o,e),n.N=n.minVersion,n.K=n.maxVersion,n.v=n.ecLevel,n.left=n.left,n.top=n.top,n.size=n.size,n.fill=n.fill,n.background=n.background,n.text=n.text,n.R=n.radius,n.P=n.quiet,t instanceof HTMLCanvasElement?((t.width!==n.size||t.height!==n.size)&&(t.width=n.size,t.height=n.size),t.getContext(`2d`).clearRect(0,0,t.width,t.height),a(t,n)):(e=document.createElement(`canvas`),e.width=n.size,e.height=n.size,n=a(e,n),t.appendChild(n))}})(function(){function e(e){var t=n.s(e);return{S:function(){return 4},b:function(){return t.length},write:function(e){for(var n=0;n<t.length;n+=1)e.put(t[n],8)}}}function t(){var e=[],t=0,n={B:function(){return e},c:function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(e,t){for(var r=0;r<t;r+=1)n.m((e>>>t-r-1&1)==1)},f:function(){return t},m:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n}function n(n,o){function c(e,t){for(var n=-1;7>=n;n+=1)if(!(-1>=e+n||f<=e+n))for(var r=-1;7>=r;r+=1)-1>=t+r||f<=t+r||(d[e+n][t+r]=0<=n&&6>=n&&(r==0||r==6)||0<=r&&6>=r&&(n==0||n==6)||2<=n&&4>=n&&2<=r&&4>=r)}function l(e,i){for(var o=f=4*n+17,l=Array(o),h=0;h<o;h+=1){l[h]=Array(o);for(var g=0;g<o;g+=1)l[h][g]=null}for(d=l,c(0,0),c(f-7,0),c(0,f-7),o=a.G(n),l=0;l<o.length;l+=1)for(h=0;h<o.length;h+=1){g=o[l];var _=o[h];if(d[g][_]==null)for(var v=-2;2>=v;v+=1)for(var y=-2;2>=y;y+=1)d[g+v][_+y]=v==-2||v==2||y==-2||y==2||v==0&&y==0}for(o=8;o<f-8;o+=1)d[o][6]??(d[o][6]=o%2==0);for(o=8;o<f-8;o+=1)d[6][o]??(d[6][o]=o%2==0);for(o=a.w(u<<3|i),l=0;15>l;l+=1)h=!e&&(o>>l&1)==1,d[6>l?l:8>l?l+1:f-15+l][8]=h,d[8][8>l?f-l-1:9>l?15-l:14-l]=h;if(d[f-8][8]=!e,7<=n){for(o=a.A(n),l=0;18>l;l+=1)h=!e&&(o>>l&1)==1,d[Math.floor(l/3)][l%3+f-8-3]=h;for(l=0;18>l;l+=1)h=!e&&(o>>l&1)==1,d[l%3+f-8-3][Math.floor(l/3)]=h}if(p==null){for(e=s.I(n,u),o=t(),l=0;l<m.length;l+=1)h=m[l],o.put(4,4),o.put(h.b(),a.f(4,n)),h.write(o);for(l=h=0;l<e.length;l+=1)h+=e[l].j;if(o.f()>8*h)throw Error(`code length overflow. (`+o.f()+`>`+8*h+`)`);for(o.f()+4<=8*h&&o.put(0,4);o.f()%8!=0;)o.m(!1);for(;!(o.f()>=8*h)&&(o.put(236,8),!(o.f()>=8*h));)o.put(17,8);var b=0;for(h=l=0,g=Array(e.length),_=Array(e.length),v=0;v<e.length;v+=1){var x=e[v].j,S=e[v].o-x;for(l=Math.max(l,x),h=Math.max(h,S),g[v]=Array(x),y=0;y<g[v].length;y+=1)g[v][y]=255&o.B()[y+b];for(b+=x,y=a.C(S),x=r(g[v],y.b()-1).l(y),_[v]=Array(y.b()-1),y=0;y<_[v].length;y+=1)S=y+x.b()-_[v].length,_[v][y]=0<=S?x.c(S):0}for(y=o=0;y<e.length;y+=1)o+=e[y].o;for(o=Array(o),y=b=0;y<l;y+=1)for(v=0;v<e.length;v+=1)y<g[v].length&&(o[b]=g[v][y],b+=1);for(y=0;y<h;y+=1)for(v=0;v<e.length;v+=1)y<_[v].length&&(o[b]=_[v][y],b+=1);p=o}for(e=p,o=-1,l=f-1,h=7,g=0,i=a.F(i),_=f-1;0<_;_-=2)for(_==6&&--_;;){for(v=0;2>v;v+=1)d[l][_-v]??(y=!1,g<e.length&&(y=(e[g]>>>h&1)==1),i(l,_-v)&&(y=!y),d[l][_-v]=y,--h,h==-1&&(g+=1,h=7));if(l+=o,0>l||f<=l){l-=o,o=-o;break}}}var u=i[o],d=null,f=0,p=null,m=[],h={u:function(t){t=e(t),m.push(t),p=null},a:function(e,t){if(0>e||f<=e||0>t||f<=t)throw Error(e+`,`+t);return d[e][t]},h:function(){return f},J:function(){for(var e=0,t=0,n=0;8>n;n+=1){l(!0,n);var r=a.D(h);(n==0||e>r)&&(e=r,t=n)}l(!1,t)}};return h}function r(e,t){if(e.length===void 0)throw Error(e.length+`/`+t);var n=function(){for(var n=0;n<e.length&&e[n]==0;)n+=1;for(var r=Array(e.length-n+t),i=0;i<e.length-n;i+=1)r[i]=e[i+n];return r}(),i={c:function(e){return n[e]},b:function(){return n.length},multiply:function(e){for(var t=Array(i.b()+e.b()-1),n=0;n<i.b();n+=1)for(var a=0;a<e.b();a+=1)t[n+a]^=o.i(o.g(i.c(n))+o.g(e.c(a)));return r(t,0)},l:function(e){if(0>i.b()-e.b())return i;for(var t=o.g(i.c(0))-o.g(e.c(0)),n=Array(i.b()),a=0;a<i.b();a+=1)n[a]=i.c(a);for(a=0;a<e.b();a+=1)n[a]^=o.i(o.g(e.c(a))+t);return r(n,0).l(e)}};return i}n.s=function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);128>r?t.push(r):2048>r?t.push(192|r>>6,128|r&63):55296>r||57344<=r?t.push(224|r>>12,128|r>>6&63,128|r&63):(n++,r=65536+((r&1023)<<10|e.charCodeAt(n)&1023),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return t};var i={L:1,M:0,Q:3,H:2},a=function(){function e(e){for(var t=0;e!=0;)t+=1,e>>>=1;return t}var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];return{w:function(t){for(var n=t<<10;0<=e(n)-e(1335);)n^=1335<<e(n)-e(1335);return(t<<10|n)^21522},A:function(t){for(var n=t<<12;0<=e(n)-e(7973);)n^=7973<<e(n)-e(7973);return t<<12|n},G:function(e){return t[e-1]},F:function(e){switch(e){case 0:return function(e,t){return(e+t)%2==0};case 1:return function(e){return e%2==0};case 2:return function(e,t){return t%3==0};case 3:return function(e,t){return(e+t)%3==0};case 4:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case 5:return function(e,t){return e*t%2+e*t%3==0};case 6:return function(e,t){return(e*t%2+e*t%3)%2==0};case 7:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw Error(`bad maskPattern:`+e)}},C:function(e){for(var t=r([1],0),n=0;n<e;n+=1)t=t.multiply(r([1,o.i(n)],0));return t},f:function(e,t){if(e!=4||1>t||40<t)throw Error(`mode: `+e+`; type: `+t);return 10>t?8:16},D:function(e){for(var t=e.h(),n=0,r=0;r<t;r+=1)for(var i=0;i<t;i+=1){for(var a=0,o=e.a(r,i),s=-1;1>=s;s+=1)if(!(0>r+s||t<=r+s))for(var c=-1;1>=c;c+=1)0>i+c||t<=i+c||(s!=0||c!=0)&&o==e.a(r+s,i+c)&&(a+=1);5<a&&(n+=3+a-5)}for(r=0;r<t-1;r+=1)for(i=0;i<t-1;i+=1)a=0,e.a(r,i)&&(a+=1),e.a(r+1,i)&&(a+=1),e.a(r,i+1)&&(a+=1),e.a(r+1,i+1)&&(a+=1),(a==0||a==4)&&(n+=3);for(r=0;r<t;r+=1)for(i=0;i<t-6;i+=1)e.a(r,i)&&!e.a(r,i+1)&&e.a(r,i+2)&&e.a(r,i+3)&&e.a(r,i+4)&&!e.a(r,i+5)&&e.a(r,i+6)&&(n+=40);for(i=0;i<t;i+=1)for(r=0;r<t-6;r+=1)e.a(r,i)&&!e.a(r+1,i)&&e.a(r+2,i)&&e.a(r+3,i)&&e.a(r+4,i)&&!e.a(r+5,i)&&e.a(r+6,i)&&(n+=40);for(i=a=0;i<t;i+=1)for(r=0;r<t;r+=1)e.a(r,i)&&(a+=1);return n+=Math.abs(100*a/t/t-50)/5*10}}}(),o=function(){for(var e=Array(256),t=Array(256),n=0;8>n;n+=1)e[n]=1<<n;for(n=8;256>n;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;255>n;n+=1)t[e[n]]=n;return{g:function(e){if(1>e)throw Error(`glog(`+e+`)`);return t[e]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return e[t]}}}(),s=function(){function e(e,n){switch(n){case i.L:return t[4*(e-1)];case i.M:return t[4*(e-1)+1];case i.Q:return t[4*(e-1)+2];case i.H:return t[4*(e-1)+3]}}var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];return{I:function(t,n){var r=e(t,n);if(r===void 0)throw Error(`bad rs block @ typeNumber:`+t+`/errorCorrectLevel:`+n);t=r.length/3,n=[];for(var i=0;i<t;i+=1)for(var a=r[3*i],o=r[3*i+1],s=r[3*i+2],c=0;c<a;c+=1){var l=s,u={};u.o=o,u.j=l,n.push(u)}return n}}}();return n}());var ng=QrCreator,rg=class extends B{constructor(){super(...arguments),this.value=``,this.label=``,this.size=128,this.fill=`black`,this.background=`white`,this.radius=0,this.errorCorrection=`H`}firstUpdated(){this.generate()}generate(){this.hasUpdated&&ng.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){return N`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${Rh({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};rg.styles=[I,$h],j([z(`canvas`)],rg.prototype,`canvas`,2),j([L()],rg.prototype,`value`,2),j([L()],rg.prototype,`label`,2),j([L({type:Number})],rg.prototype,`size`,2),j([L()],rg.prototype,`fill`,2),j([L()],rg.prototype,`background`,2),j([L({type:Number})],rg.prototype,`radius`,2),j([L({attribute:`error-correction`})],rg.prototype,`errorCorrection`,2),j([F([`background`,`errorCorrection`,`fill`,`radius`,`size`,`value`])],rg.prototype,`generate`,1),rg.define(`sl-qr-code`);var ig=M`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,ag=class extends B{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size=`medium`,this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit(`sl-blur`)},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit(`sl-focus`)},this.addEventListener(`blur`,this.handleBlur),this.addEventListener(`click`,this.handleClick),this.addEventListener(`focus`,this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute(`role`,`radio`),this.setAttribute(`tabindex`,`-1`),this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleCheckedChange(){this.setAttribute(`aria-checked`,this.checked?`true`:`false`),this.setAttribute(`tabindex`,this.checked?`0`:`-1`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}render(){return N`
      <span
        part="base"
        class=${H({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size===`small`,"radio--medium":this.size===`medium`,"radio--large":this.size===`large`})}
      >
        <span part="${`control${this.checked?` control--checked`:``}`}" class="radio__control">
          ${this.checked?N` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:``}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};ag.styles=[I,ig],ag.dependencies={"sl-icon":V},j([R()],ag.prototype,`checked`,2),j([R()],ag.prototype,`hasFocus`,2),j([L()],ag.prototype,`value`,2),j([L({reflect:!0})],ag.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],ag.prototype,`disabled`,2),j([F(`checked`)],ag.prototype,`handleCheckedChange`,1),j([F(`disabled`,{waitUntilFirstUpdate:!0})],ag.prototype,`handleDisabledChange`,1),ag.define(`sl-radio`);var og=M`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,sg=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value=``,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`sl-select`).then(()=>{let e=this.closest(`sl-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replace(/ /g,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return N`
      <div
        part="base"
        class=${H({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};sg.styles=[I,og],sg.dependencies={"sl-icon":V},j([z(`.option__label`)],sg.prototype,`defaultSlot`,2),j([R()],sg.prototype,`current`,2),j([R()],sg.prototype,`selected`,2),j([R()],sg.prototype,`hasHover`,2),j([L({reflect:!0})],sg.prototype,`value`,2),j([L({type:Boolean,reflect:!0})],sg.prototype,`disabled`,2),j([F(`disabled`)],sg.prototype,`handleDisabledChange`,1),j([F(`selected`)],sg.prototype,`handleSelectedChange`,1),j([F(`value`)],sg.prototype,`handleValueChange`,1),sg.define(`sl-option`),q.define(`sl-popup`);var cg=M`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,lg=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.indeterminate=!1,this.label=``}render(){return N`
      <div
        part="base"
        class=${H({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${U(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Rh({width:`${this.value}%`})}>
          ${this.indeterminate?``:N` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};lg.styles=[I,cg],j([L({type:Number,reflect:!0})],lg.prototype,`value`,2),j([L({type:Boolean,reflect:!0})],lg.prototype,`indeterminate`,2),j([L()],lg.prototype,`label`,2),lg.define(`sl-progress-bar`);var ug=M`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,dg=class extends B{render(){return N` <slot part="base" class="menu-label"></slot> `}};dg.styles=[I,ug],dg.define(`sl-menu-label`);var fg=M`
  :host {
    display: contents;
  }
`,pg=class extends B{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit(`sl-mutation`,{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let e=typeof this.attr==`string`&&this.attr.length>0,t=e&&this.attr!==`*`?this.attr.split(` `):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return N` <slot></slot> `}};pg.styles=[I,fg],j([L({reflect:!0})],pg.prototype,`attr`,2),j([L({attribute:`attr-old-value`,type:Boolean,reflect:!0})],pg.prototype,`attrOldValue`,2),j([L({attribute:`char-data`,type:Boolean,reflect:!0})],pg.prototype,`charData`,2),j([L({attribute:`char-data-old-value`,type:Boolean,reflect:!0})],pg.prototype,`charDataOldValue`,2),j([L({attribute:`child-list`,type:Boolean,reflect:!0})],pg.prototype,`childList`,2),j([L({type:Boolean,reflect:!0})],pg.prototype,`disabled`,2),j([F(`disabled`)],pg.prototype,`handleDisabledChange`,1),j([F(`attr`,{waitUntilFirstUpdate:!0}),F(`attr-old-value`,{waitUntilFirstUpdate:!0}),F(`char-data`,{waitUntilFirstUpdate:!0}),F(`char-data-old-value`,{waitUntilFirstUpdate:!0}),F(`childList`,{waitUntilFirstUpdate:!0})],pg.prototype,`handleChange`,1),pg.define(`sl-mutation-observer`);var mg=M`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Z=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new Bd(this,`help-text`,`label`),this.localize=new W(this),this.hasFocus=!1,this.title=``,this.__numberInput=Object.assign(document.createElement(`input`),{type:`number`}),this.__dateInput=Object.assign(document.createElement(`input`),{type:`date`}),this.type=`text`,this.name=``,this.value=``,this.defaultValue=``,this.size=`medium`,this.filled=!1,this.pill=!1,this.label=``,this.helpText=``,this.clearable=!1,this.disabled=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form=``,this.required=!1,this.spellcheck=!0}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.emit(`sl-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return N`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${U(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${U(this.placeholder)}
              minlength=${U(this.minlength)}
              maxlength=${U(this.maxlength)}
              min=${U(this.min)}
              max=${U(this.max)}
              step=${U(this.step)}
              .value=${vf(this.value)}
              autocapitalize=${U(this.autocapitalize)}
              autocomplete=${U(this.autocomplete)}
              autocorrect=${U(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${U(this.pattern)}
              enterkeyhint=${U(this.enterkeyhint)}
              inputmode=${U(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?N`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?N`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?N`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:N`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z.styles=[I,zd,mg],Z.dependencies={"sl-icon":V},j([z(`.input__control`)],Z.prototype,`input`,2),j([R()],Z.prototype,`hasFocus`,2),j([L()],Z.prototype,`title`,2),j([L({reflect:!0})],Z.prototype,`type`,2),j([L()],Z.prototype,`name`,2),j([L()],Z.prototype,`value`,2),j([Rd()],Z.prototype,`defaultValue`,2),j([L({reflect:!0})],Z.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],Z.prototype,`filled`,2),j([L({type:Boolean,reflect:!0})],Z.prototype,`pill`,2),j([L()],Z.prototype,`label`,2),j([L({attribute:`help-text`})],Z.prototype,`helpText`,2),j([L({type:Boolean})],Z.prototype,`clearable`,2),j([L({type:Boolean,reflect:!0})],Z.prototype,`disabled`,2),j([L()],Z.prototype,`placeholder`,2),j([L({type:Boolean,reflect:!0})],Z.prototype,`readonly`,2),j([L({attribute:`password-toggle`,type:Boolean})],Z.prototype,`passwordToggle`,2),j([L({attribute:`password-visible`,type:Boolean})],Z.prototype,`passwordVisible`,2),j([L({attribute:`no-spin-buttons`,type:Boolean})],Z.prototype,`noSpinButtons`,2),j([L({reflect:!0})],Z.prototype,`form`,2),j([L({type:Boolean,reflect:!0})],Z.prototype,`required`,2),j([L()],Z.prototype,`pattern`,2),j([L({type:Number})],Z.prototype,`minlength`,2),j([L({type:Number})],Z.prototype,`maxlength`,2),j([L()],Z.prototype,`min`,2),j([L()],Z.prototype,`max`,2),j([L()],Z.prototype,`step`,2),j([L()],Z.prototype,`autocapitalize`,2),j([L()],Z.prototype,`autocorrect`,2),j([L()],Z.prototype,`autocomplete`,2),j([L({type:Boolean})],Z.prototype,`autofocus`,2),j([L()],Z.prototype,`enterkeyhint`,2),j([L({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],Z.prototype,`spellcheck`,2),j([L()],Z.prototype,`inputmode`,2),j([F(`disabled`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleDisabledChange`,1),j([F(`step`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleStepChange`,1),j([F(`value`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleValueChange`,1),Z.define(`sl-input`);var hg=M`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,gg=class extends B{connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>t.includes((e?.getAttribute)?.call(e,`role`)||``));if(!r||n.find(e=>(e?.getAttribute)?.call(e,`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`sl-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`sl-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};gg.styles=[I,hg],j([z(`slot`)],gg.prototype,`defaultSlot`,2),gg.define(`sl-menu`);var _g=M`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,vg=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),vg(e,t);return!0},yg=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},bg=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Cg(t)}};function xg(e){this._$AN===void 0?this._$AM=e:(yg(this),this._$AM=e,bg(this))}function Sg(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)vg(r[e],!1),yg(r[e]);else r!=null&&(vg(r,!1),yg(r));else vg(this,e)}var Cg=e=>{e.type==hf.CHILD&&(e._$AP??=Sg,e._$AQ??=xg)},wg=class extends _f{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),bg(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(vg(this,e),yg(this))}setValue(e){if(cf(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Tg=()=>new Eg,Eg=class{},Dg=new WeakMap,Og=gf(class extends wg{render(e){return P}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),P}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Dg.get(t);n===void 0&&(n=new WeakMap,Dg.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Dg.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),kg=class{constructor(e,t){this.popupRef=Tg(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty(`--safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--safe-triangle-cursor-y`,`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e);break;default:break}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`sl-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`sl-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-y`,`${r+a}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`sl-menu-item, [role^='menuitem']`),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?N`
      <sl-popup
        ${Og(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:N` <slot name="submenu" hidden></slot> `}},Ag=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.type=`normal`,this.checked=!1,this.value=``,this.loading=!1,this.disabled=!1,this.hasSlotController=new Bd(this,`submenu`),this.submenuController=new kg(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(this.cachedTextLabel===void 0){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return Vd(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return N`
      <div
        id="anchor"
        part="base"
        class=${H({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:``}
      </div>
    `}};Ag.styles=[I,_g],Ag.dependencies={"sl-icon":V,"sl-popup":q,"sl-spinner":Mf},j([z(`slot:not([name])`)],Ag.prototype,`defaultSlot`,2),j([z(`.menu-item`)],Ag.prototype,`menuItem`,2),j([L()],Ag.prototype,`type`,2),j([L({type:Boolean,reflect:!0})],Ag.prototype,`checked`,2),j([L()],Ag.prototype,`value`,2),j([L({type:Boolean,reflect:!0})],Ag.prototype,`loading`,2),j([L({type:Boolean,reflect:!0})],Ag.prototype,`disabled`,2),j([F(`checked`)],Ag.prototype,`handleCheckedChange`,1),j([F(`disabled`)],Ag.prototype,`handleDisabledChange`,1),j([F(`type`)],Ag.prototype,`handleTypeChange`,1),Ag.define(`sl-menu-item`);var jg=M`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Mg=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.position=50}handleDrag(e){let{width:t}=this.base.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.preventDefault(),Eh(this.base,{onMove:e=>{this.position=parseFloat(Gm(e/t*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){let t=this.localize.dir()===`ltr`,n=this.localize.dir()===`rtl`;if([`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key)){let r=e.shiftKey?10:1,i=this.position;e.preventDefault(),(t&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`)&&(i-=r),(t&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`)&&(i+=r),e.key===`Home`&&(i=0),e.key===`End`&&(i=100),i=Gm(i,0,100),this.position=i}}handlePositionChange(){this.emit(`sl-change`)}render(){let e=this.localize.dir()===`rtl`;return N`
      <div
        part="base"
        id="image-comparer"
        class=${H({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Rh({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Rh({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Mg.styles=[I,jg],Mg.scopedElement={"sl-icon":V},j([z(`.image-comparer`)],Mg.prototype,`base`,2),j([z(`.image-comparer__handle`)],Mg.prototype,`handle`,2),j([L({type:Number,reflect:!0})],Mg.prototype,`position`,2),j([F(`position`,{waitUntilFirstUpdate:!0})],Mg.prototype,`handlePositionChange`,1),Mg.define(`sl-image-comparer`);var Ng=M`
  :host {
    display: block;
  }
`,Pg=new Map;function Fg(e,t=`cors`){let n=Pg.get(e);if(n!==void 0)return Promise.resolve(n);let r=fetch(e,{mode:t}).then(async t=>{let n={ok:t.ok,status:t.status,html:await t.text()};return Pg.set(e,n),n});return Pg.set(e,r),r}var Ig=class extends B{constructor(){super(...arguments),this.mode=`cors`,this.allowScripts=!1}executeScript(e){let t=document.createElement(`script`);[...e.attributes].forEach(e=>t.setAttribute(e.name,e.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{let e=this.src,t=await Fg(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit(`sl-error`,{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll(`script`)].forEach(e=>this.executeScript(e)),this.emit(`sl-load`)}catch{this.emit(`sl-error`,{detail:{status:-1}})}}render(){return N`<slot></slot>`}};Ig.styles=[I,Ng],j([L()],Ig.prototype,`src`,2),j([L()],Ig.prototype,`mode`,2),j([L({attribute:`allow-scripts`,type:Boolean})],Ig.prototype,`allowScripts`,2),j([F(`src`)],Ig.prototype,`handleSrcChange`,1),Ig.define(`sl-include`),V.define(`sl-icon`),oh.define(`sl-icon-button`);var Lg=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.unit=`byte`,this.display=`short`}render(){if(isNaN(this.value))return``;let e=this.unit===`bit`?[``,`kilo`,`mega`,`giga`,`tera`]:[``,`kilo`,`mega`,`giga`,`tera`,`peta`],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),n=e[t]+this.unit,r=parseFloat((this.value/1e3**t).toPrecision(3));return this.localize.number(r,{style:`unit`,unit:n,unitDisplay:this.display})}};j([L({type:Number})],Lg.prototype,`value`,2),j([L()],Lg.prototype,`unit`,2),j([L()],Lg.prototype,`display`,2),Lg.define(`sl-format-bytes`);var Rg=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.date=new Date,this.hourFormat=`auto`}render(){let e=new Date(this.date),t=this.hourFormat===`auto`?void 0:this.hourFormat===`12`;if(!isNaN(e.getMilliseconds()))return N`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};j([L()],Rg.prototype,`date`,2),j([L()],Rg.prototype,`weekday`,2),j([L()],Rg.prototype,`era`,2),j([L()],Rg.prototype,`year`,2),j([L()],Rg.prototype,`month`,2),j([L()],Rg.prototype,`day`,2),j([L()],Rg.prototype,`hour`,2),j([L()],Rg.prototype,`minute`,2),j([L()],Rg.prototype,`second`,2),j([L({attribute:`time-zone-name`})],Rg.prototype,`timeZoneName`,2),j([L({attribute:`time-zone`})],Rg.prototype,`timeZone`,2),j([L({attribute:`hour-format`})],Rg.prototype,`hourFormat`,2),Rg.define(`sl-format-date`);var zg=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.type=`decimal`,this.noGrouping=!1,this.currency=`USD`,this.currencyDisplay=`symbol`}render(){return isNaN(this.value)?``:this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};j([L({type:Number})],zg.prototype,`value`,2),j([L()],zg.prototype,`type`,2),j([L({attribute:`no-grouping`,type:Boolean})],zg.prototype,`noGrouping`,2),j([L()],zg.prototype,`currency`,2),j([L({attribute:`currency-display`})],zg.prototype,`currencyDisplay`,2),j([L({attribute:`minimum-integer-digits`,type:Number})],zg.prototype,`minimumIntegerDigits`,2),j([L({attribute:`minimum-fraction-digits`,type:Number})],zg.prototype,`minimumFractionDigits`,2),j([L({attribute:`maximum-fraction-digits`,type:Number})],zg.prototype,`maximumFractionDigits`,2),j([L({attribute:`minimum-significant-digits`,type:Number})],zg.prototype,`minimumSignificantDigits`,2),j([L({attribute:`maximum-significant-digits`,type:Number})],zg.prototype,`maximumSignificantDigits`,2),zg.define(`sl-format-number`);var Bg=M`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Vg=class extends B{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}};Vg.styles=[I,Bg],j([L({type:Boolean,reflect:!0})],Vg.prototype,`vertical`,2),j([F(`vertical`)],Vg.prototype,`handleVerticalChange`,1),Vg.define(`sl-divider`);var Hg=M`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Ug(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*gu(Ug(e.shadowRoot.activeElement))))}function Wg(){return[...Ug()].pop()}var Gg=new WeakMap;function Kg(e){let t=Gg.get(e);return t||(t=window.getComputedStyle(e,null),Gg.set(e,t)),t}function qg(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=Kg(e);return t.visibility!==`hidden`&&t.display!==`none`}function Jg(e){let{overflowY:t,overflowX:n}=Kg(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function Yg(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return qg(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:Jg(e):!1}function Xg(e){let t=Qg(e);return{start:t[0]??null,end:t[t.length-1]??null}}function Zg(e,t){return e.getRootNode({composed:!0})?.host!==t}function Qg(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),!n.includes(i)&&Yg(i)&&n.push(i),i instanceof HTMLSlotElement&&Zg(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var $g=[],e_=class{constructor(e){this.tabDirection=`forward`,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if(e.key!==`Tab`||this.isExternalActivated||!this.isActive())return;let n=Wg();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection=`backward`:this.tabDirection=`forward`;let r=Qg(this.element),i=r.findIndex(e=>e===n);this.previousFocus=this.currentFocus;let a=this.tabDirection===`forward`?1:-1;for(;;){i+a>=r.length?i=0:i+a<0?i=r.length-1:i+=a,this.previousFocus=this.currentFocus;let n=r[i];if(this.tabDirection===`backward`&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(t=this.currentFocus)==null||t.focus({preventScroll:!1});let o=[...Ug()];if(o.includes(this.currentFocus)||!o.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection=`forward`},this.element=e,this.elementsWithTabbableControls=[`iframe`]}activate(){$g.push(this.element),document.addEventListener(`focusin`,this.handleFocusIn),document.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keyup`,this.handleKeyUp)}deactivate(){$g=$g.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener(`focusin`,this.handleFocusIn),document.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keyup`,this.handleKeyUp)}isActive(){return $g[$g.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=Qg(this.element);if(!this.element.matches(`:focus-within`)){let t=e[0],n=e[e.length-1],r=this.tabDirection===`forward`?t:n;typeof r?.focus==`function`&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute(`controls`)}},t_=e=>{var t;let{activeElement:n}=document;n&&e.contains(n)&&((t=document.activeElement)==null||t.blur())};function n_(e){return e.charAt(0).toUpperCase()+e.slice(1)}var r_=class extends B{constructor(){super(...arguments),this.hasSlotController=new Bd(this,`footer`),this.localize=new W(this),this.modal=new e_(this),this.open=!1,this.label=``,this.placement=`end`,this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),yh(this)))}disconnectedCallback(){super.disconnectedCallback(),bh(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`sl-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=K(this,`drawer.denyClose`,{dir:this.localize.dir()});Lf(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var e;`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`))):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener(`keydown`,this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),yh(this));let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([Bf(this.drawer),Bf(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit(`sl-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=K(this,`drawer.show${n_(this.placement)}`,{dir:this.localize.dir()}),n=K(this,`drawer.overlay.show`,{dir:this.localize.dir()});await Promise.all([Lf(this.panel,t.keyframes,t.options),Lf(this.overlay,n.keyframes,n.options)]),this.emit(`sl-after-show`)}else{t_(this),this.emit(`sl-hide`),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),bh(this)),await Promise.all([Bf(this.drawer),Bf(this.overlay)]);let e=K(this,`drawer.hide${n_(this.placement)}`,{dir:this.localize.dir()}),t=K(this,`drawer.overlay.hide`,{dir:this.localize.dir()});await Promise.all([Lf(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Lf(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`sl-after-hide`)}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),yh(this)),this.open&&this.contained&&(this.modal.deactivate(),bh(this))}async show(){if(!this.open)return this.open=!0,Hm(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Hm(this,`sl-after-hide`)}render(){return N`
      <div
        part="base"
        class=${H({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement===`top`,"drawer--end":this.placement===`end`,"drawer--bottom":this.placement===`bottom`,"drawer--start":this.placement===`start`,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()===`rtl`,"drawer--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${U(this.noHeader?this.label:void 0)}
          aria-labelledby=${U(this.noHeader?void 0:`title`)}
          tabindex="0"
        >
          ${this.noHeader?``:N`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click=${()=>this.requestClose(`close-button`)}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};r_.styles=[I,Hg],r_.dependencies={"sl-icon-button":oh},j([z(`.drawer`)],r_.prototype,`drawer`,2),j([z(`.drawer__panel`)],r_.prototype,`panel`,2),j([z(`.drawer__overlay`)],r_.prototype,`overlay`,2),j([L({type:Boolean,reflect:!0})],r_.prototype,`open`,2),j([L({reflect:!0})],r_.prototype,`label`,2),j([L({reflect:!0})],r_.prototype,`placement`,2),j([L({type:Boolean,reflect:!0})],r_.prototype,`contained`,2),j([L({attribute:`no-header`,type:Boolean,reflect:!0})],r_.prototype,`noHeader`,2),j([F(`open`,{waitUntilFirstUpdate:!0})],r_.prototype,`handleOpenChange`,1),j([F(`contained`,{waitUntilFirstUpdate:!0})],r_.prototype,`handleNoModalChange`,1),G(`drawer.showTop`,{keyframes:[{opacity:0,translate:`0 -100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),G(`drawer.hideTop`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 -100%`}],options:{duration:250,easing:`ease`}}),G(`drawer.showEnd`,{keyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),G(`drawer.hideEnd`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),G(`drawer.showBottom`,{keyframes:[{opacity:0,translate:`0 100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),G(`drawer.hideBottom`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 100%`}],options:{duration:250,easing:`ease`}}),G(`drawer.showStart`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),G(`drawer.hideStart`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],options:{duration:250,easing:`ease`}}),G(`drawer.denyClose`,{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),G(`drawer.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),G(`drawer.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),r_.define(`sl-drawer`);var i_=M`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,a_=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.placement=`bottom-start`,this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`sl-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?Wg():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`sl-menu`&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`sl-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems(),r=n[0],i=n[n.length-1];[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key===`ArrowDown`||e.key===`Home`)&&(t.setCurrentItem(r),r.focus()),(e.key===`ArrowUp`||e.key===`End`)&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>Xg(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`sl-button`:case`sl-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,Hm(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Hm(this,`sl-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener(`sl-select`,this.handlePanelSelect),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener(`sl-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`sl-show`),this.addOpenListeners(),await Bf(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=K(this,`dropdown.show`,{dir:this.localize.dir()});await Lf(this.popup.popup,e,t),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await Bf(this);let{keyframes:e,options:t}=K(this,`dropdown.hide`,{dir:this.localize.dir()});await Lf(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}render(){return N`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${U(this.sync?this.sync:void 0)}
        class=${H({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};a_.styles=[I,i_],a_.dependencies={"sl-popup":q},j([z(`.dropdown`)],a_.prototype,`popup`,2),j([z(`.dropdown__trigger`)],a_.prototype,`trigger`,2),j([z(`.dropdown__panel`)],a_.prototype,`panel`,2),j([L({type:Boolean,reflect:!0})],a_.prototype,`open`,2),j([L({reflect:!0})],a_.prototype,`placement`,2),j([L({type:Boolean,reflect:!0})],a_.prototype,`disabled`,2),j([L({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],a_.prototype,`stayOpenOnSelect`,2),j([L({attribute:!1})],a_.prototype,`containingElement`,2),j([L({type:Number})],a_.prototype,`distance`,2),j([L({type:Number})],a_.prototype,`skidding`,2),j([L({type:Boolean})],a_.prototype,`hoist`,2),j([L({reflect:!0})],a_.prototype,`sync`,2),j([F(`open`,{waitUntilFirstUpdate:!0})],a_.prototype,`handleOpenChange`,1),G(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),G(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),a_.define(`sl-dropdown`);var o_=M`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,s_=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.isCopying=!1,this.status=`rest`,this.value=``,this.from=``,this.disabled=!1,this.copyLabel=``,this.successLabel=``,this.errorLabel=``,this.feedbackDuration=1e3,this.tooltipPlacement=`top`,this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){let t=this.getRootNode(),n=this.from.includes(`.`),r=this.from.includes(`[`)&&this.from.includes(`]`),i=this.from,a=``;n?[i,a]=this.from.trim().split(`.`):r&&([i,a]=this.from.trim().replace(/\]$/,``).split(`[`));let o=`getElementById`in t?t.getElementById(i):null;o?e=r?o.getAttribute(a)||``:n?o[a]||``:o.textContent||``:(this.showStatus(`error`),this.emit(`sl-error`))}if(!e)this.showStatus(`error`),this.emit(`sl-error`);else try{await navigator.clipboard.writeText(e),this.showStatus(`success`),this.emit(`sl-copy`,{detail:{value:e}})}catch{this.showStatus(`error`),this.emit(`sl-error`)}}async showStatus(e){let t=this.copyLabel||this.localize.term(`copy`),n=this.successLabel||this.localize.term(`copied`),r=this.errorLabel||this.localize.term(`error`),i=e===`success`?this.successIcon:this.errorIcon,a=K(this,`copy.in`,{dir:`ltr`}),o=K(this,`copy.out`,{dir:`ltr`});this.tooltip.content=e===`success`?n:r,await this.copyIcon.animate(o.keyframes,o.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await i.animate(o.keyframes,o.options).finished,i.hidden=!0,this.status=`rest`,this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){let e=this.copyLabel||this.localize.term(`copy`);return N`
      <sl-tooltip
        class=${H({"copy-button":!0,"copy-button--success":this.status===`success`,"copy-button--error":this.status===`error`})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};s_.styles=[I,o_],s_.dependencies={"sl-icon":V,"sl-tooltip":Um},j([z(`slot[name="copy-icon"]`)],s_.prototype,`copyIcon`,2),j([z(`slot[name="success-icon"]`)],s_.prototype,`successIcon`,2),j([z(`slot[name="error-icon"]`)],s_.prototype,`errorIcon`,2),j([z(`sl-tooltip`)],s_.prototype,`tooltip`,2),j([R()],s_.prototype,`isCopying`,2),j([R()],s_.prototype,`status`,2),j([L()],s_.prototype,`value`,2),j([L()],s_.prototype,`from`,2),j([L({type:Boolean,reflect:!0})],s_.prototype,`disabled`,2),j([L({attribute:`copy-label`})],s_.prototype,`copyLabel`,2),j([L({attribute:`success-label`})],s_.prototype,`successLabel`,2),j([L({attribute:`error-label`})],s_.prototype,`errorLabel`,2),j([L({attribute:`feedback-duration`,type:Number})],s_.prototype,`feedbackDuration`,2),j([L({attribute:`tooltip-placement`})],s_.prototype,`tooltipPlacement`,2),j([L({type:Boolean})],s_.prototype,`hoist`,2),G(`copy.in`,{keyframes:[{scale:`.25`,opacity:`.25`},{scale:`1`,opacity:`1`}],options:{duration:100}}),G(`copy.out`,{keyframes:[{scale:`1`,opacity:`1`},{scale:`.25`,opacity:`0`}],options:{duration:100}}),s_.define(`sl-copy-button`);var c_=M`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,l_=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?`auto`:`0`,this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`open`&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key===`ArrowUp`||e.key===`ArrowLeft`)&&(e.preventDefault(),this.hide()),(e.key===`ArrowDown`||e.key===`ArrowRight`)&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit(`sl-show`,{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Bf(this.body);let{keyframes:e,options:t}=K(this,`details.show`,{dir:this.localize.dir()});await Lf(this.body,Vf(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.emit(`sl-after-show`)}else{if(this.emit(`sl-hide`,{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Bf(this.body);let{keyframes:e,options:t}=K(this,`details.hide`,{dir:this.localize.dir()});await Lf(this.body,Vf(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.details.open=!1,this.emit(`sl-after-hide`)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Hm(this,`sl-after-show`)}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Hm(this,`sl-after-hide`)}render(){let e=this.localize.dir()===`rtl`;return N`
      <details
        part="base"
        class=${H({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?`true`:`false`}
          aria-controls="content"
          aria-disabled=${this.disabled?`true`:`false`}
          tabindex=${this.disabled?`-1`:`0`}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};l_.styles=[I,c_],l_.dependencies={"sl-icon":V},j([z(`.details`)],l_.prototype,`details`,2),j([z(`.details__header`)],l_.prototype,`header`,2),j([z(`.details__body`)],l_.prototype,`body`,2),j([z(`.details__expand-icon-slot`)],l_.prototype,`expandIconSlot`,2),j([L({type:Boolean,reflect:!0})],l_.prototype,`open`,2),j([L()],l_.prototype,`summary`,2),j([L({type:Boolean,reflect:!0})],l_.prototype,`disabled`,2),j([F(`open`,{waitUntilFirstUpdate:!0})],l_.prototype,`handleOpenChange`,1),G(`details.show`,{keyframes:[{height:`0`,opacity:`0`},{height:`auto`,opacity:`1`}],options:{duration:250,easing:`linear`}}),G(`details.hide`,{keyframes:[{height:`auto`,opacity:`1`},{height:`0`,opacity:`0`}],options:{duration:250,easing:`linear`}}),l_.define(`sl-details`);var u_=M`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,d_=class extends B{constructor(){super(...arguments),this.hasSlotController=new Bd(this,`footer`),this.localize=new W(this),this.modal=new e_(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),yh(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),bh(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`sl-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=K(this,`dialog.denyClose`,{dir:this.localize.dir()});Lf(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var e;`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),yh(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([Bf(this.dialog),Bf(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`sl-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=K(this,`dialog.show`,{dir:this.localize.dir()}),n=K(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([Lf(this.panel,t.keyframes,t.options),Lf(this.overlay,n.keyframes,n.options)]),this.emit(`sl-after-show`)}else{t_(this),this.emit(`sl-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Bf(this.dialog),Bf(this.overlay)]);let e=K(this,`dialog.hide`,{dir:this.localize.dir()}),t=K(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([Lf(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Lf(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,bh(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`sl-after-hide`)}}async show(){if(!this.open)return this.open=!0,Hm(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Hm(this,`sl-after-hide`)}render(){return N`
      <div
        part="base"
        class=${H({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${U(this.noHeader?this.label:void 0)}
          aria-labelledby=${U(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:N`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${``}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};d_.styles=[I,u_],d_.dependencies={"sl-icon-button":oh},j([z(`.dialog`)],d_.prototype,`dialog`,2),j([z(`.dialog__panel`)],d_.prototype,`panel`,2),j([z(`.dialog__overlay`)],d_.prototype,`overlay`,2),j([L({type:Boolean,reflect:!0})],d_.prototype,`open`,2),j([L({reflect:!0})],d_.prototype,`label`,2),j([L({attribute:`no-header`,type:Boolean,reflect:!0})],d_.prototype,`noHeader`,2),j([F(`open`,{waitUntilFirstUpdate:!0})],d_.prototype,`handleOpenChange`,1),G(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),G(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),G(`dialog.denyClose`,{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),G(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),G(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),d_.define(`sl-dialog`),yf.define(`sl-checkbox`);var f_=M`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Q=class extends B{constructor(){super(...arguments),this.formControlController=new Su(this,{assumeInteractionOn:[`click`]}),this.hasSlotController=new Bd(this,`[default]`,`prefix`,`suffix`),this.localize=new W(this),this.hasFocus=!1,this.invalid=!1,this.title=``,this.variant=`default`,this.size=`medium`,this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type=`button`,this.name=``,this.value=``,this.href=``,this.rel=`noreferrer noopener`}get validity(){return this.isButton()?this.button.validity:Cu}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?rh`a`:rh`button`;return ah`
      <${t}
        part="base"
        class=${H({button:!0,"button--default":this.variant===`default`,"button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:this.type)}
        title=${this.title}
        name=${U(e?void 0:this.name)}
        value=${U(e?void 0:this.value)}
        href=${U(e&&!this.disabled?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e?this.rel:void 0)}
        role=${U(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ah` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:``}
        ${this.loading?ah`<sl-spinner part="spinner"></sl-spinner>`:``}
      </${t}>
    `}};Q.styles=[I,Uh],Q.dependencies={"sl-icon":V,"sl-spinner":Mf},j([z(`.button`)],Q.prototype,`button`,2),j([R()],Q.prototype,`hasFocus`,2),j([R()],Q.prototype,`invalid`,2),j([L()],Q.prototype,`title`,2),j([L({reflect:!0})],Q.prototype,`variant`,2),j([L({reflect:!0})],Q.prototype,`size`,2),j([L({type:Boolean,reflect:!0})],Q.prototype,`caret`,2),j([L({type:Boolean,reflect:!0})],Q.prototype,`disabled`,2),j([L({type:Boolean,reflect:!0})],Q.prototype,`loading`,2),j([L({type:Boolean,reflect:!0})],Q.prototype,`outline`,2),j([L({type:Boolean,reflect:!0})],Q.prototype,`pill`,2),j([L({type:Boolean,reflect:!0})],Q.prototype,`circle`,2),j([L()],Q.prototype,`type`,2),j([L()],Q.prototype,`name`,2),j([L()],Q.prototype,`value`,2),j([L()],Q.prototype,`href`,2),j([L()],Q.prototype,`target`,2),j([L()],Q.prototype,`rel`,2),j([L()],Q.prototype,`download`,2),j([L()],Q.prototype,`form`,2),j([L({attribute:`formaction`})],Q.prototype,`formAction`,2),j([L({attribute:`formenctype`})],Q.prototype,`formEnctype`,2),j([L({attribute:`formmethod`})],Q.prototype,`formMethod`,2),j([L({attribute:`formnovalidate`,type:Boolean})],Q.prototype,`formNoValidate`,2),j([L({attribute:`formtarget`})],Q.prototype,`formTarget`,2),j([F(`disabled`,{waitUntilFirstUpdate:!0})],Q.prototype,`handleDisabledChange`,1);function p_(e,t){h_(e)&&(e=`100%`);let n=g_(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=t===360?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function m_(e){return Math.min(1,Math.max(0,e))}function h_(e){return typeof e==`string`&&e.indexOf(`.`)!==-1&&parseFloat(e)===1}function g_(e){return typeof e==`string`&&e.indexOf(`%`)!==-1}function __(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function v_(e){return Number(e)<=1?`${Number(e)*100}%`:e}function y_(e){return e.length===1?`0`+e:String(e)}function b_(e,t,n){return{r:p_(e,255)*255,g:p_(t,255)*255,b:p_(n,255)*255}}function x_(e,t,n){e=p_(e,255),t=p_(t,255),n=p_(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=0,s=(r+i)/2;if(r===i)o=0,a=0;else{let c=r-i;switch(o=s>.5?c/(2-r-i):c/(r+i),r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4;break;default:break}a/=6}return{h:a,s:o,l:s}}function S_(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function C_(e,t,n){let r,i,a;if(e=p_(e,360),t=p_(t,100),n=p_(n,100),t===0)i=n,a=n,r=n;else{let o=n<.5?n*(1+t):n+t-n*t,s=2*n-o;r=S_(s,o,e+1/3),i=S_(s,o,e),a=S_(s,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function w_(e,t,n){e=p_(e,255),t=p_(t,255),n=p_(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=r,s=r-i,c=r===0?0:s/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4;break;default:break}a/=6}return{h:a,s:c,v:o}}function T_(e,t,n){e=p_(e,360)*6,t=p_(t,100),n=p_(n,100);let r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:l*255,g:u*255,b:d*255}}function E_(e,t,n,r){let i=[y_(Math.round(e).toString(16)),y_(Math.round(t).toString(16)),y_(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function D_(e,t,n,r,i){let a=[y_(Math.round(e).toString(16)),y_(Math.round(t).toString(16)),y_(Math.round(n).toString(16)),y_(A_(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}function O_(e,t,n,r){let i=e/100,a=t/100,o=n/100,s=r/100;return{r:255*(1-i)*(1-s),g:255*(1-a)*(1-s),b:255*(1-o)*(1-s)}}function k_(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function A_(e){return Math.round(parseFloat(e)*255).toString(16)}function j_(e){return M_(e)/255}function M_(e){return parseInt(e,16)}function N_(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var P_={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkgrey:`#a9a9a9`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,goldenrod:`#daa520`,gold:`#ffd700`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,grey:`#808080`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavenderblush:`#fff0f5`,lavender:`#e6e6fa`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`};function F_(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;return typeof e==`string`&&(e=B_(e)),typeof e==`object`&&(V_(e.r)&&V_(e.g)&&V_(e.b)?(t=b_(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):V_(e.h)&&V_(e.s)&&V_(e.v)?(r=v_(e.s),i=v_(e.v),t=T_(e.h,r,i),o=!0,s=`hsv`):V_(e.h)&&V_(e.s)&&V_(e.l)?(r=v_(e.s),a=v_(e.l),t=C_(e.h,r,a),o=!0,s=`hsl`):V_(e.c)&&V_(e.m)&&V_(e.y)&&V_(e.k)&&(t=O_(e.c,e.m,e.y,e.k),o=!0,s=`cmyk`),Object.prototype.hasOwnProperty.call(e,`a`)&&(n=e.a)),n=__(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var I_=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,L_=`[\\s|\\(]+(`+I_+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,R_=`[\\s|\\(]+(`+I_+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,z_={CSS_UNIT:new RegExp(I_),rgb:RegExp(`rgb`+L_),rgba:RegExp(`rgba`+R_),hsl:RegExp(`hsl`+L_),hsla:RegExp(`hsla`+R_),hsv:RegExp(`hsv`+L_),hsva:RegExp(`hsva`+R_),cmyk:RegExp(`cmyk`+R_),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function B_(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(P_[e])e=P_[e],t=!0;else if(e===`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};let n=z_.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=z_.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=z_.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=z_.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=z_.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=z_.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=z_.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=z_.hex8.exec(e),n?{r:M_(n[1]),g:M_(n[2]),b:M_(n[3]),a:j_(n[4]),format:t?`name`:`hex8`}:(n=z_.hex6.exec(e),n?{r:M_(n[1]),g:M_(n[2]),b:M_(n[3]),format:t?`name`:`hex`}:(n=z_.hex4.exec(e),n?{r:M_(n[1]+n[1]),g:M_(n[2]+n[2]),b:M_(n[3]+n[3]),a:j_(n[4]+n[4]),format:t?`name`:`hex8`}:(n=z_.hex3.exec(e),n?{r:M_(n[1]+n[1]),g:M_(n[2]+n[2]),b:M_(n[3]+n[3]),format:t?`name`:`hex`}:!1))))))))))}function V_(e){return typeof e==`number`?!Number.isNaN(e):z_.CSS_UNIT.test(e)}var H_=class e{constructor(t=``,n={}){if(t instanceof e)return t;typeof t==`number`&&(t=N_(t)),this.originalInput=t;let r=F_(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,n,r,i=e.r/255,a=e.g/255,o=e.b/255;return t=i<=.03928?i/12.92:((i+.055)/1.055)**2.4,n=a<=.03928?a/12.92:((a+.055)/1.055)**2.4,r=o<=.03928?o/12.92:((o+.055)/1.055)**2.4,.2126*t+.7152*n+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=__(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=w_(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=w_(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${r}%)`:`hsva(${t}, ${n}%, ${r}%, ${this.roundA})`}toHsl(){let e=x_(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=x_(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${r}%)`:`hsla(${t}, ${n}%, ${r}%, ${this.roundA})`}toHex(e=!1){return E_(this.r,this.g,this.b,e)}toHexString(e=!1){return`#`+this.toHex(e)}toHex8(e=!1){return D_(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#`+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){let e=e=>`${Math.round(p_(e,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=e=>Math.round(p_(e,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...k_(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:n,k:r}=k_(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${r})`}toName(){if(this.a===0)return`transparent`;if(this.a<1)return!1;let e=`#`+E_(this.r,this.g,this.b,!1);for(let[t,n]of Object.entries(P_))if(e===n)return t;return!1}toString(e){let t=!!e;e??=this.format;let n=!1,r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith(`hex`)||e===`name`)?e===`name`&&this.a===0?this.toName():this.toRgbString():(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),(e===`hex`||e===`hex6`)&&(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),e===`cmyk`&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let n=this.toHsl();return n.l+=t/100,n.l=m_(n.l),new e(n)}brighten(t=10){let n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)}darken(t=10){let n=this.toHsl();return n.l-=t/100,n.l=m_(n.l),new e(n)}tint(e=10){return this.mix(`white`,e)}shade(e=10){return this.mix(`black`,e)}desaturate(t=10){let n=this.toHsl();return n.s-=t/100,n.s=m_(n.s),new e(n)}saturate(t=10){let n=this.toHsl();return n.s+=t/100,n.s=m_(n.s),new e(n)}greyscale(){return this.desaturate(100)}spin(t){let n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)}mix(t,n=50){let r=this.toRgb(),i=new e(t).toRgb(),a=n/100;return new e({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})}analogous(t=6,n=30){let r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let n=this.toHsv(),{h:r}=n,{s:i}=n,{v:a}=n,o=[],s=1/t;for(;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+s)%1;return o}splitcomplement(){let t=this.toHsl(),{h:n}=t;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){let n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){let n=new e(t);return this.format===`cmyk`||n.format===`cmyk`?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}},U_=`EyeDropper`in window,$=class extends B{constructor(){super(),this.formControlController=new Su(this),this.isSafeValue=!1,this.localize=new W(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue=``,this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value=``,this.defaultValue=``,this.label=``,this.format=`hex`,this.inline=!1,this.size=`medium`,this.noFormatToggle=!1,this.name=``,this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=``,this.form=``,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit(`sl-focus`)},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit(`sl-blur`)},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand(`copy`),this.previewButton.focus(),this.previewButton.classList.add(`color-picker__preview-color--copied`),this.previewButton.addEventListener(`animationend`,()=>{this.previewButton.classList.remove(`color-picker__preview-color--copied`)})}handleFormatToggle(){let e=[`hex`,`rgb`,`hsl`,`hsv`],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit(`sl-change`),this.emit(`sl-input`)}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__slider.color-picker__alpha`),n=t.querySelector(`.color-picker__slider-handle`),{width:r}=t.getBoundingClientRect(),i=this.value,a=this.value;n.focus(),e.preventDefault(),Eh(t,{onMove:e=>{this.alpha=Gm(e/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit(`sl-input`))},onStop:()=>{this.value!==i&&(i=this.value,this.emit(`sl-change`))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__slider.color-picker__hue`),n=t.querySelector(`.color-picker__slider-handle`),{width:r}=t.getBoundingClientRect(),i=this.value,a=this.value;n.focus(),e.preventDefault(),Eh(t,{onMove:e=>{this.hue=Gm(e/r*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit(`sl-input`))},onStop:()=>{this.value!==i&&(i=this.value,this.emit(`sl-change`))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__grid`),n=t.querySelector(`.color-picker__grid-handle`),{width:r,height:i}=t.getBoundingClientRect(),a=this.value,o=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Eh(t,{onMove:(e,t)=>{this.saturation=Gm(e/r*100,0,100),this.brightness=Gm(100-t/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit(`sl-input`))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit(`sl-change`))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.alpha=Gm(this.alpha-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.alpha=Gm(this.alpha+t,0,100),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleHueKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.hue=Gm(this.hue-t,0,360),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.hue=Gm(this.hue+t,0,360),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleGridKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.saturation=Gm(this.saturation-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.saturation=Gm(this.saturation+t,0,100),this.syncValues()),e.key===`ArrowUp`&&(e.preventDefault(),this.brightness=Gm(this.brightness+t,0,100),this.syncValues()),e.key===`ArrowDown`&&(e.preventDefault(),this.brightness=Gm(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleInputChange(e){let t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value=``,this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key===`Enter`){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit(`sl-change`),this.emit(`sl-input`)),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){let t=new H_(e);if(!t.isValid)return null;let n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},i=t.toRgb(),a=t.toHexString(),o=t.toHex8String(),s=t.toHsv(),c={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(o)}}setColor(e){let t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e==`string`?this.uppercase?e.toUpperCase():e.toLowerCase():``}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format===`hsl`?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format===`rgb`?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format===`hsv`?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove(`color-picker__preview-color--copied`)}handleEyeDropper(){U_&&new EyeDropper().open().then(e=>{let t=this.value;this.setColor(e.sRGBHex),this.value!==t&&(this.emit(`sl-change`),this.emit(`sl-input`))}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit(`sl-change`),this.emit(`sl-input`)))}getHexString(e,t,n,r=100){let i=new H_(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():``}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let n=this.parseColor(t);n===null?this.inputValue=e??``:(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues())}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.dropdown?.open&&this.dropdown.hide()}getFormattedValue(e=`hex`){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return``;switch(e){case`hex`:return t.hex;case`hexa`:return t.hexa;case`rgb`:return t.rgb.string;case`rgba`:return t.rgba.string;case`hsl`:return t.hsl.string;case`hsla`:return t.hsla.string;case`hsv`:return t.hsv.string;case`hsva`:return t.hsva.string;default:return``}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener(`sl-after-show`,()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(`;`).filter(e=>e.trim()!==``),r=N`
      <div
        part="base"
        class=${H({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-labelledby="label"
        tabindex=${this.inline?`0`:`-1`}
      >
        ${this.inline?N`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Rh({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${H({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Rh({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${U(this.disabled?void 0:`0`)}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Rh({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${U(this.disabled?void 0:`0`)}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?N`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Rh({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Rh({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${U(this.disabled?void 0:`0`)}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:``}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term(`copy`)}
            style=${Rh({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?``:this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term(`currentValue`)}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?``:N`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term(`toggleColorFormat`)}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${U_?N`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term(`selectAColorFromTheScreen`)}
                    ></sl-icon>
                  </sl-button>
                `:``}
          </sl-button-group>
        </div>

        ${n.length>0?N`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(e=>{let t=this.parseColor(e);return t?N`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${U(this.disabled?void 0:`0`)}
                      role="button"
                      aria-label=${e}
                      @click=${()=>this.selectSwatch(e)}
                      @keydown=${e=>!this.disabled&&e.key===`Enter`&&this.setColor(t.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Rh({backgroundColor:t.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${e}"`,this),``)})}
              </div>
            `:``}
      </div>
    `;return this.inline?r:N`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?`true`:`false`}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${H({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size===`small`,"color-dropdown__trigger--medium":this.size===`medium`,"color-dropdown__trigger--large":this.size===`large`,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Rh({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};$.styles=[I,f_],$.dependencies={"sl-button-group":Jh,"sl-button":Q,"sl-dropdown":a_,"sl-icon":V,"sl-input":Z,"sl-visually-hidden":Ym},j([z(`[part~="base"]`)],$.prototype,`base`,2),j([z(`[part~="input"]`)],$.prototype,`input`,2),j([z(`.color-dropdown`)],$.prototype,`dropdown`,2),j([z(`[part~="preview"]`)],$.prototype,`previewButton`,2),j([z(`[part~="trigger"]`)],$.prototype,`trigger`,2),j([R()],$.prototype,`hasFocus`,2),j([R()],$.prototype,`isDraggingGridHandle`,2),j([R()],$.prototype,`isEmpty`,2),j([R()],$.prototype,`inputValue`,2),j([R()],$.prototype,`hue`,2),j([R()],$.prototype,`saturation`,2),j([R()],$.prototype,`brightness`,2),j([R()],$.prototype,`alpha`,2),j([L()],$.prototype,`value`,2),j([Rd()],$.prototype,`defaultValue`,2),j([L()],$.prototype,`label`,2),j([L()],$.prototype,`format`,2),j([L({type:Boolean,reflect:!0})],$.prototype,`inline`,2),j([L({reflect:!0})],$.prototype,`size`,2),j([L({attribute:`no-format-toggle`,type:Boolean})],$.prototype,`noFormatToggle`,2),j([L()],$.prototype,`name`,2),j([L({type:Boolean,reflect:!0})],$.prototype,`disabled`,2),j([L({type:Boolean})],$.prototype,`hoist`,2),j([L({type:Boolean})],$.prototype,`opacity`,2),j([L({type:Boolean})],$.prototype,`uppercase`,2),j([L()],$.prototype,`swatches`,2),j([L({reflect:!0})],$.prototype,`form`,2),j([L({type:Boolean,reflect:!0})],$.prototype,`required`,2),j([tf({passive:!1})],$.prototype,`handleTouchMove`,1),j([F(`format`,{waitUntilFirstUpdate:!0})],$.prototype,`handleFormatChange`,1),j([F(`opacity`,{waitUntilFirstUpdate:!0})],$.prototype,`handleOpacityChange`,1),j([F(`value`)],$.prototype,`handleValueChange`,1),$.define(`sl-color-picker`);var W_=M`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,G_=class extends B{constructor(){super(...arguments),this.hasSlotController=new Bd(this,`footer`,`header`,`image`)}render(){return N`
      <div
        part="base"
        class=${H({card:!0,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`)})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};G_.styles=[I,W_],G_.define(`sl-card`);var K_=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener(`mouseenter`,this.pause),this.host.addEventListener(`mouseleave`,this.resume),this.host.addEventListener(`focusin`,this.pause),this.host.addEventListener(`focusout`,this.resume),this.host.addEventListener(`touchstart`,this.pause,{passive:!0}),this.host.addEventListener(`touchend`,this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener(`mouseenter`,this.pause),this.host.removeEventListener(`mouseleave`,this.resume),this.host.removeEventListener(`focusin`,this.pause),this.host.removeEventListener(`focusout`,this.resume),this.host.removeEventListener(`touchstart`,this.pause),this.host.removeEventListener(`touchend`,this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},q_=M`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function*J_(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function*Y_(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var X_=class extends B{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation=`horizontal`,this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new K_(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new W(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty(`scroll-snap-type`,`none`),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:`instant`})},this.handleMouseDragEnd=()=>{let e=this.scrollContainer;document.removeEventListener(`pointermove`,this.handleMouseDrag,{capture:!0});let t=e.scrollLeft,n=e.scrollTop;e.style.removeProperty(`scroll-snap-type`),e.style.setProperty(`overflow`,`hidden`);let r=e.scrollLeft,i=e.scrollTop;e.style.removeProperty(`overflow`),e.style.setProperty(`scroll-snap-type`,`none`),e.scrollTo({left:t,top:n,behavior:`instant`}),requestAnimationFrame(async()=>{(t!==r||n!==i)&&(e.scrollTo({left:r,top:i,behavior:zf()?`auto`:`smooth`}),await Hm(e,`scrollend`)),e.style.removeProperty(`scroll-snap-type`),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(e=>[...e.addedNodes,...e.removedNodes].some(e=>this.isCarouselItem(e)&&!e.hasAttribute(`data-clone`)))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,this.localize.term(`carousel`))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has(`slidesPerMove`)||e.has(`slidesPerPage`))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:n,loop:r}=this,i=r?e/n:(e-t)/n+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute(`data-clone`)))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let t=Math.abs(this.dragStartPosition[0]-e.clientX),n=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+n*n)>=10&&e.preventDefault()}}handleKeyDown(e){if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=e.target,n=this.localize.dir()===`rtl`,r=t.closest(`[part~="pagination-item"]`)!==null,i=e.key===`ArrowDown`||!n&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`,a=e.key===`ArrowUp`||!n&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`;e.preventDefault(),a&&this.previous(),i&&this.next(),e.key===`Home`&&this.goToSlide(0),e.key===`End`&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`[part~="pagination-item--active"]`);e&&e.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener(`pointermove`,this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener(`pointerup`,this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let e=new IntersectionObserver(t=>{e.disconnect();for(let e of t){let t=e.target;t.toggleAttribute(`inert`,!e.isIntersecting),t.classList.toggle(`--in-view`,e.isIntersecting),t.setAttribute(`aria-hidden`,e.isIntersecting?`false`:`true`)}let n=t.find(e=>e.isIntersecting);if(!n)return;let r=this.getSlides({excludeClones:!1}),i=this.getSlides().length,a=r.indexOf(n.target),o=this.loop?a-this.slidesPerPage:a;if(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&n.target.hasAttribute(`data-clone`)){let e=Number(n.target.getAttribute(`data-clone`));this.goToSlide(e,`instant`)}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()===`sl-carousel-item`}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove(`--in-view`),e.classList.remove(`--is-active`),e.setAttribute(`role`,`group`),e.setAttribute(`aria-label`,this.localize.term(`slideNum`,t+1)),this.pagination&&(e.setAttribute(`id`,`slide-${t+1}`),e.setAttribute(`role`,`tabpanel`),e.removeAttribute(`aria-label`),e.setAttribute(`aria-labelledby`,`tab-${t+1}`)),e.hasAttribute(`data-clone`)&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,`auto`),this.synchronizeSlides()}createClones(){let e=this.getSlides(),t=this.slidesPerPage,n=e.slice(-t),r=e.slice(0,t);n.reverse().forEach((t,n)=>{let r=t.cloneNode(!0);r.setAttribute(`data-clone`,String(e.length-n-1)),this.prepend(r)}),r.forEach((e,t)=>{let n=e.cloneNode(!0);n.setAttribute(`data-clone`,String(t)),this.append(n)})}handleSlideChange(){let e=this.getSlides();e.forEach((e,t)=>{e.classList.toggle(`--is-active`,t===this.activeSlide)}),this.hasUpdated&&this.emit(`sl-slide-change`,{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){let e=this.getSlides(),t=this.slidesPerMove;e.forEach((e,n)=>{(n+t)%t===0?e.style.removeProperty(`scroll-snap-align`):e.style.setProperty(`scroll-snap-align`,`none`)})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e=`smooth`){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e=`smooth`){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t=`smooth`){let{slidesPerPage:n,loop:r}=this,i=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!i.length)return;let o=r?(e+i.length)%i.length:Gm(e,0,i.length-n);this.activeSlide=o;let s=this.localize.dir()===`rtl`,c=a[Gm(e+(r?n:0)+(s?n-1:0),0,a.length-1)];this.scrollToSlide(c,zf()?`auto`:t)}scrollToSlide(e,t=`smooth`){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let n=this.scrollContainer,r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),a=i.left-r.left,o=i.top-r.top;a||o?(this.pendingSlideChange=!0,n.scrollTo({left:a+n.scrollLeft,top:o+n.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){let{slidesPerMove:e,scrolling:t}=this,n=this.getPageCount(),r=this.getCurrentPage(),i=this.canScrollPrev(),a=this.canScrollNext(),o=this.localize.dir()===`ltr`;return N`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${H({carousel__slides:!0,"carousel__slides--horizontal":this.orientation===`horizontal`,"carousel__slides--vertical":this.orientation===`vertical`,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?`true`:`false`}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?N`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${H({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
                  aria-label="${this.localize.term(`previousSlide`)}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?`false`:`true`}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${o?`chevron-left`:`chevron-right`}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${H({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a})}
                  aria-label="${this.localize.term(`nextSlide`)}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?`false`:`true`}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${o?`chevron-right`:`chevron-left`}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:``}
        ${this.pagination?N`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${J_(Y_(n),t=>{let i=t===r;return N`
                    <button
                      part="pagination-item ${i?`pagination-item--active`:``}"
                      class="${H({"carousel__pagination-item":!0,"carousel__pagination-item--active":i})}"
                      role="tab"
                      id="tab-${t+1}"
                      aria-controls="slide-${t+1}"
                      aria-selected="${i?`true`:`false`}"
                      aria-label="${i?this.localize.term(`slideNum`,t+1):this.localize.term(`goToSlide`,t+1,n)}"
                      tabindex=${i?`0`:`-1`}
                      @click=${()=>this.goToSlide(t*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:``}
      </div>
    `}};X_.styles=[I,q_],X_.dependencies={"sl-icon":V},j([L({type:Boolean,reflect:!0})],X_.prototype,`loop`,2),j([L({type:Boolean,reflect:!0})],X_.prototype,`navigation`,2),j([L({type:Boolean,reflect:!0})],X_.prototype,`pagination`,2),j([L({type:Boolean,reflect:!0})],X_.prototype,`autoplay`,2),j([L({type:Number,attribute:`autoplay-interval`})],X_.prototype,`autoplayInterval`,2),j([L({type:Number,attribute:`slides-per-page`})],X_.prototype,`slidesPerPage`,2),j([L({type:Number,attribute:`slides-per-move`})],X_.prototype,`slidesPerMove`,2),j([L()],X_.prototype,`orientation`,2),j([L({type:Boolean,reflect:!0,attribute:`mouse-dragging`})],X_.prototype,`mouseDragging`,2),j([z(`.carousel__slides`)],X_.prototype,`scrollContainer`,2),j([z(`.carousel__pagination`)],X_.prototype,`paginationContainer`,2),j([R()],X_.prototype,`activeSlide`,2),j([R()],X_.prototype,`scrolling`,2),j([R()],X_.prototype,`dragging`,2),j([tf({passive:!0})],X_.prototype,`handleScroll`,1),j([F(`loop`,{waitUntilFirstUpdate:!0}),F(`slidesPerPage`,{waitUntilFirstUpdate:!0})],X_.prototype,`initializeSlides`,1),j([F(`activeSlide`)],X_.prototype,`handleSlideChange`,1),j([F(`slidesPerMove`)],X_.prototype,`updateSlidesSnap`,1),j([F(`autoplay`)],X_.prototype,`handleAutoplayChange`,1),X_.define(`sl-carousel`);var Z_=(e,t)=>{let n=0;return function(...r){window.clearTimeout(n),n=window.setTimeout(()=>{e.call(this,...r)},t)}},Q_=(e,t,n)=>{let r=e[t];e[t]=function(...e){r.call(this,...e),n.call(this,r,...e)}};(()=>{if(!(typeof window>`u`)&&!(`onscrollend`in window)){let e=new Set,t=new WeakMap,n=t=>{for(let n of t.changedTouches)e.add(n.identifier)},r=t=>{for(let n of t.changedTouches)e.delete(n.identifier)};document.addEventListener(`touchstart`,n,!0),document.addEventListener(`touchend`,r,!0),document.addEventListener(`touchcancel`,r,!0),Q_(EventTarget.prototype,`addEventListener`,function(n,r){if(r!==`scrollend`)return;let i=Z_(()=>{e.size?i():this.dispatchEvent(new Event(`scrollend`))},100);n.call(this,`scroll`,i,{passive:!0}),t.set(this,i)}),Q_(EventTarget.prototype,`removeEventListener`,function(e,n){if(n!==`scrollend`)return;let r=t.get(this);r&&e.call(this,`scroll`,r,{passive:!0})})}})();var $_=M`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,ev=class extends B{connectedCallback(){super.connectedCallback()}render(){return N` <slot></slot> `}};ev.styles=[I,$_],ev.define(`sl-carousel-item`);var tv=M`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,nv=class extends B{constructor(){super(...arguments),this.hasSlotController=new Bd(this,`prefix`,`suffix`),this.renderType=`button`,this.rel=`noreferrer noopener`}setRenderType(){let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`sl-dropdown`).length>0;if(this.href){this.renderType=`link`;return}if(e){this.renderType=`dropdown`;return}this.renderType=`button`}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return N`
      <div
        part="base"
        class=${H({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test(`prefix`),"breadcrumb-item--has-suffix":this.hasSlotController.test(`suffix`)})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType===`link`?N`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${U(this.target?this.target:void 0)}"
                rel=${U(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:``}
        ${this.renderType===`button`?N`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:``}
        ${this.renderType===`dropdown`?N`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:``}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};nv.styles=[I,tv],j([z(`slot:not([name])`)],nv.prototype,`defaultSlot`,2),j([R()],nv.prototype,`renderType`,2),j([L()],nv.prototype,`href`,2),j([L()],nv.prototype,`target`,2),j([L()],nv.prototype,`rel`,2),j([F(`href`,{waitUntilFirstUpdate:!0})],nv.prototype,`hrefChanged`,1),nv.define(`sl-breadcrumb-item`),Jh.define(`sl-button-group`);var rv=M`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,iv=class extends B{constructor(){super(...arguments),this.hasError=!1,this.image=``,this.label=``,this.initials=``,this.loading=`eager`,this.shape=`circle`}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit(`sl-error`)}render(){let e=N`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,t=N``;return t=this.initials?N`<div part="initials" class="avatar__initials">${this.initials}</div>`:N`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,N`
      <div
        part="base"
        class=${H({avatar:!0,"avatar--circle":this.shape===`circle`,"avatar--rounded":this.shape===`rounded`,"avatar--square":this.shape===`square`})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};iv.styles=[I,rv],iv.dependencies={"sl-icon":V},j([R()],iv.prototype,`hasError`,2),j([L()],iv.prototype,`image`,2),j([L()],iv.prototype,`label`,2),j([L()],iv.prototype,`initials`,2),j([L()],iv.prototype,`loading`,2),j([L({reflect:!0})],iv.prototype,`shape`,2),j([F(`image`)],iv.prototype,`handleImageChange`,1),iv.define(`sl-avatar`);var av=M`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,ov=class extends B{constructor(){super(...arguments),this.localize=new W(this),this.separatorDir=this.localize.dir(),this.label=``}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`sl-breadcrumb-item`);e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),N`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()===`rtl`?`chevron-left`:`chevron-right`} library="system"></sl-icon>
        </slot>
      </span>
    `}};ov.styles=[I,av],ov.dependencies={"sl-icon":V},j([z(`slot`)],ov.prototype,`defaultSlot`,2),j([z(`slot[name="separator"]`)],ov.prototype,`separatorSlot`,2),j([L()],ov.prototype,`label`,2),ov.define(`sl-breadcrumb`),Q.define(`sl-button`);var sv=M`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,cv=class extends B{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let e=document.createElement(`canvas`),{width:t,height:n}=this.animatedImage;e.width=t,e.height=n,e.getContext(`2d`).drawImage(this.animatedImage,0,0,t,n),this.frozenFrame=e.toDataURL(`image/gif`),this.isLoaded||=(this.emit(`sl-load`),!0)}handleError(){this.emit(`sl-error`)}handlePlayChange(){this.play&&(this.animatedImage.src=``,this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return N`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?`false`:`true`}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?N`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?`true`:`false`}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:``}
      </div>
    `}};cv.styles=[I,sv],cv.dependencies={"sl-icon":V},j([z(`.animated-image__animated`)],cv.prototype,`animatedImage`,2),j([R()],cv.prototype,`frozenFrame`,2),j([R()],cv.prototype,`isLoaded`,2),j([L()],cv.prototype,`src`,2),j([L()],cv.prototype,`alt`,2),j([L({type:Boolean,reflect:!0})],cv.prototype,`play`,2),j([F(`play`,{waitUntilFirstUpdate:!0})],cv.prototype,`handlePlayChange`,1),j([F(`src`)],cv.prototype,`handleSrcChange`,1),cv.define(`sl-animated-image`);var lv=M`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,uv=class extends B{constructor(){super(...arguments),this.variant=`primary`,this.pill=!1,this.pulse=!1}render(){return N`
      <span
        part="base"
        class=${H({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};uv.styles=[I,lv],j([L({reflect:!0})],uv.prototype,`variant`,2),j([L({type:Boolean,reflect:!0})],uv.prototype,`pill`,2),j([L({type:Boolean,reflect:!0})],uv.prototype,`pulse`,2),uv.define(`sl-badge`);var dv=M`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,fv=class e extends B{constructor(){super(...arguments),this.hasSlotController=new Bd(this,`icon`,`suffix`),this.localize=new W(this),this.open=!1,this.closable=!1,this.variant=`primary`,this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`sl-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.duration<1/0&&this.restartAutoHide(),await Bf(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=K(this,`alert.show`,{dir:this.localize.dir()});await Lf(this.base,e,t),this.emit(`sl-after-show`)}else{t_(this),this.emit(`sl-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Bf(this.base);let{keyframes:e,options:t}=K(this,`alert.hide`,{dir:this.localize.dir()});await Lf(this.base,e,t),this.base.hidden=!0,this.emit(`sl-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Hm(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Hm(this,`sl-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`sl-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`sl-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return N`
      <div
        part="base"
        class=${H({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?N`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?N`
              <div
                class=${H({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};fv.styles=[I,dv],fv.dependencies={"sl-icon-button":oh},j([z(`[part~="base"]`)],fv.prototype,`base`,2),j([z(`.alert__countdown-elapsed`)],fv.prototype,`countdownElement`,2),j([L({type:Boolean,reflect:!0})],fv.prototype,`open`,2),j([L({type:Boolean,reflect:!0})],fv.prototype,`closable`,2),j([L({reflect:!0})],fv.prototype,`variant`,2),j([L({type:Number})],fv.prototype,`duration`,2),j([L({type:String,reflect:!0})],fv.prototype,`countdown`,2),j([R()],fv.prototype,`remainingTime`,2),j([F(`open`,{waitUntilFirstUpdate:!0})],fv.prototype,`handleOpenChange`,1),j([F(`duration`)],fv.prototype,`handleDurationChange`,1);var pv=fv;G(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),G(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),pv.define(`sl-alert`);var mv=[{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.2,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.4,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -30px, 0) scaleY(1.1)`},{offset:.43,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -30px, 0) scaleY(1.1)`},{offset:.53,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.7,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -15px, 0) scaleY(1.05)`},{offset:.8,"transition-timing-function":`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0) scaleY(0.95)`},{offset:.9,transform:`translate3d(0, -4px, 0) scaleY(1.02)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`}],hv=[{offset:0,opacity:`1`},{offset:.25,opacity:`0`},{offset:.5,opacity:`1`},{offset:.75,opacity:`0`},{offset:1,opacity:`1`}],gv=[{offset:0,transform:`translateX(0)`},{offset:.065,transform:`translateX(-6px) rotateY(-9deg)`},{offset:.185,transform:`translateX(5px) rotateY(7deg)`},{offset:.315,transform:`translateX(-3px) rotateY(-5deg)`},{offset:.435,transform:`translateX(2px) rotateY(3deg)`},{offset:.5,transform:`translateX(0)`}],_v=[{offset:0,transform:`scale(1)`},{offset:.14,transform:`scale(1.3)`},{offset:.28,transform:`scale(1)`},{offset:.42,transform:`scale(1.3)`},{offset:.7,transform:`scale(1)`}],vv=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.111,transform:`translate3d(0, 0, 0)`},{offset:.222,transform:`skewX(-12.5deg) skewY(-12.5deg)`},{offset:.33299999999999996,transform:`skewX(6.25deg) skewY(6.25deg)`},{offset:.444,transform:`skewX(-3.125deg) skewY(-3.125deg)`},{offset:.555,transform:`skewX(1.5625deg) skewY(1.5625deg)`},{offset:.6659999999999999,transform:`skewX(-0.78125deg) skewY(-0.78125deg)`},{offset:.777,transform:`skewX(0.390625deg) skewY(0.390625deg)`},{offset:.888,transform:`skewX(-0.1953125deg) skewY(-0.1953125deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],yv=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.5,transform:`scale3d(1.05, 1.05, 1.05)`},{offset:1,transform:`scale3d(1, 1, 1)`}],bv=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.3,transform:`scale3d(1.25, 0.75, 1)`},{offset:.4,transform:`scale3d(0.75, 1.25, 1)`},{offset:.5,transform:`scale3d(1.15, 0.85, 1)`},{offset:.65,transform:`scale3d(0.95, 1.05, 1)`},{offset:.75,transform:`scale3d(1.05, 0.95, 1)`},{offset:1,transform:`scale3d(1, 1, 1)`}],xv=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(-10px, 0, 0)`},{offset:.2,transform:`translate3d(10px, 0, 0)`},{offset:.3,transform:`translate3d(-10px, 0, 0)`},{offset:.4,transform:`translate3d(10px, 0, 0)`},{offset:.5,transform:`translate3d(-10px, 0, 0)`},{offset:.6,transform:`translate3d(10px, 0, 0)`},{offset:.7,transform:`translate3d(-10px, 0, 0)`},{offset:.8,transform:`translate3d(10px, 0, 0)`},{offset:.9,transform:`translate3d(-10px, 0, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],Sv=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(-10px, 0, 0)`},{offset:.2,transform:`translate3d(10px, 0, 0)`},{offset:.3,transform:`translate3d(-10px, 0, 0)`},{offset:.4,transform:`translate3d(10px, 0, 0)`},{offset:.5,transform:`translate3d(-10px, 0, 0)`},{offset:.6,transform:`translate3d(10px, 0, 0)`},{offset:.7,transform:`translate3d(-10px, 0, 0)`},{offset:.8,transform:`translate3d(10px, 0, 0)`},{offset:.9,transform:`translate3d(-10px, 0, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],Cv=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(0, -10px, 0)`},{offset:.2,transform:`translate3d(0, 10px, 0)`},{offset:.3,transform:`translate3d(0, -10px, 0)`},{offset:.4,transform:`translate3d(0, 10px, 0)`},{offset:.5,transform:`translate3d(0, -10px, 0)`},{offset:.6,transform:`translate3d(0, 10px, 0)`},{offset:.7,transform:`translate3d(0, -10px, 0)`},{offset:.8,transform:`translate3d(0, 10px, 0)`},{offset:.9,transform:`translate3d(0, -10px, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],wv=[{offset:.2,transform:`rotate3d(0, 0, 1, 15deg)`},{offset:.4,transform:`rotate3d(0, 0, 1, -10deg)`},{offset:.6,transform:`rotate3d(0, 0, 1, 5deg)`},{offset:.8,transform:`rotate3d(0, 0, 1, -5deg)`},{offset:1,transform:`rotate3d(0, 0, 1, 0deg)`}],Tv=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.1,transform:`scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)`},{offset:.2,transform:`scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)`},{offset:.3,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.4,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.5,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.6,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.7,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.8,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.9,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:1,transform:`scale3d(1, 1, 1)`}],Ev=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.15,transform:`translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)`},{offset:.3,transform:`translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)`},{offset:.45,transform:`translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)`},{offset:.6,transform:`translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)`},{offset:.75,transform:`translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],Dv=[{offset:0,transform:`translateY(-1200px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],Ov=[{offset:0,transform:`translateX(-2000px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],kv=[{offset:0,transform:`translateX(2000px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],Av=[{offset:0,transform:`translateY(1200px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],jv=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateY(700px) scale(0.7)`,opacity:`0.7`}],Mv=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateX(-2000px) scale(0.7)`,opacity:`0.7`}],Nv=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateX(2000px) scale(0.7)`,opacity:`0.7`}],Pv=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateY(-700px) scale(0.7)`,opacity:`0.7`}],Fv=[{offset:0,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.2,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:.2,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.4,transform:`scale3d(0.9, 0.9, 0.9)`},{offset:.4,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`scale3d(1.03, 1.03, 1.03)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.8,transform:`scale3d(0.97, 0.97, 0.97)`},{offset:.8,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,opacity:`1`,transform:`scale3d(1, 1, 1)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Iv=[{offset:0,opacity:`0`,transform:`translate3d(0, -3000px, 0) scaleY(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(0, 25px, 0) scaleY(0.9)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(0, -10px, 0) scaleY(0.95)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(0, 5px, 0) scaleY(0.985)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Lv=[{offset:0,opacity:`0`,transform:`translate3d(-3000px, 0, 0) scaleX(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(25px, 0, 0) scaleX(1)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(-10px, 0, 0) scaleX(0.98)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(5px, 0, 0) scaleX(0.995)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Rv=[{offset:0,opacity:`0`,transform:`translate3d(3000px, 0, 0) scaleX(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(-25px, 0, 0) scaleX(1)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(10px, 0, 0) scaleX(0.98)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(-5px, 0, 0) scaleX(0.995)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],zv=[{offset:0,opacity:`0`,transform:`translate3d(0, 3000px, 0) scaleY(5)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(0, 10px, 0) scaleY(0.95)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(0, -5px, 0) scaleY(0.985)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Bv=[{offset:.2,transform:`scale3d(0.9, 0.9, 0.9)`},{offset:.5,opacity:`1`,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:.55,opacity:`1`,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:1,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`}],Vv=[{offset:.2,transform:`translate3d(0, 10px, 0) scaleY(0.985)`},{offset:.4,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:.45,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(0, 2000px, 0) scaleY(3)`}],Hv=[{offset:.2,opacity:`1`,transform:`translate3d(20px, 0, 0) scaleX(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(-2000px, 0, 0) scaleX(2)`}],Uv=[{offset:.2,opacity:`1`,transform:`translate3d(-20px, 0, 0) scaleX(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(2000px, 0, 0) scaleX(2)`}],Wv=[{offset:.2,transform:`translate3d(0, -10px, 0) scaleY(0.985)`},{offset:.4,opacity:`1`,transform:`translate3d(0, 20px, 0) scaleY(0.9)`},{offset:.45,opacity:`1`,transform:`translate3d(0, 20px, 0) scaleY(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(0, -2000px, 0) scaleY(3)`}],Gv=[{offset:0,opacity:`0`},{offset:1,opacity:`1`}],Kv=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],qv=[{offset:0,opacity:`0`,transform:`translate3d(100%, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Jv=[{offset:0,opacity:`0`,transform:`translate3d(0, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Yv=[{offset:0,opacity:`0`,transform:`translate3d(0, -2000px, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Xv=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Zv=[{offset:0,opacity:`0`,transform:`translate3d(-2000px, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Qv=[{offset:0,opacity:`0`,transform:`translate3d(100%, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],$v=[{offset:0,opacity:`0`,transform:`translate3d(2000px, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],ey=[{offset:0,opacity:`0`,transform:`translate3d(-100%, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],ty=[{offset:0,opacity:`0`,transform:`translate3d(100%, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],ny=[{offset:0,opacity:`0`,transform:`translate3d(0, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],ry=[{offset:0,opacity:`0`,transform:`translate3d(0, 2000px, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],iy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`}],ay=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(-100%, 100%, 0)`}],oy=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(100%, 100%, 0)`}],sy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, 100%, 0)`}],cy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, 2000px, 0)`}],ly=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(-100%, 0, 0)`}],uy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(-2000px, 0, 0)`}],dy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(100%, 0, 0)`}],fy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(2000px, 0, 0)`}],py=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(-100%, -100%, 0)`}],my=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(100%, -100%, 0)`}],hy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, -100%, 0)`}],gy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, -2000px, 0)`}],_y=[{offset:0,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)`,easing:`ease-out`},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:`ease-out`},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:`ease-in`},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:`ease-in`},{offset:1,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)`,easing:`ease-in`}],vy=[{offset:0,transform:`perspective(400px) rotate3d(1, 0, 0, 90deg)`,easing:`ease-in`,opacity:`0`},{offset:.4,transform:`perspective(400px) rotate3d(1, 0, 0, -20deg)`,easing:`ease-in`},{offset:.6,transform:`perspective(400px) rotate3d(1, 0, 0, 10deg)`,opacity:`1`},{offset:.8,transform:`perspective(400px) rotate3d(1, 0, 0, -5deg)`},{offset:1,transform:`perspective(400px)`}],yy=[{offset:0,transform:`perspective(400px) rotate3d(0, 1, 0, 90deg)`,easing:`ease-in`,opacity:`0`},{offset:.4,transform:`perspective(400px) rotate3d(0, 1, 0, -20deg)`,easing:`ease-in`},{offset:.6,transform:`perspective(400px) rotate3d(0, 1, 0, 10deg)`,opacity:`1`},{offset:.8,transform:`perspective(400px) rotate3d(0, 1, 0, -5deg)`},{offset:1,transform:`perspective(400px)`}],by=[{offset:0,transform:`perspective(400px)`},{offset:.3,transform:`perspective(400px) rotate3d(1, 0, 0, -20deg)`,opacity:`1`},{offset:1,transform:`perspective(400px) rotate3d(1, 0, 0, 90deg)`,opacity:`0`}],xy=[{offset:0,transform:`perspective(400px)`},{offset:.3,transform:`perspective(400px) rotate3d(0, 1, 0, -15deg)`,opacity:`1`},{offset:1,transform:`perspective(400px) rotate3d(0, 1, 0, 90deg)`,opacity:`0`}],Sy=[{offset:0,transform:`translate3d(-100%, 0, 0) skewX(30deg)`,opacity:`0`},{offset:.6,transform:`skewX(-20deg)`,opacity:`1`},{offset:.8,transform:`skewX(5deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],Cy=[{offset:0,transform:`translate3d(100%, 0, 0) skewX(-30deg)`,opacity:`0`},{offset:.6,transform:`skewX(20deg)`,opacity:`1`},{offset:.8,transform:`skewX(-5deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],wy=[{offset:0,opacity:`1`},{offset:1,transform:`translate3d(-100%, 0, 0) skewX(-30deg)`,opacity:`0`}],Ty=[{offset:0,opacity:`1`},{offset:1,transform:`translate3d(100%, 0, 0) skewX(30deg)`,opacity:`0`}],Ey=[{offset:0,transform:`rotate3d(0, 0, 1, -200deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],Dy=[{offset:0,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],Oy=[{offset:0,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],ky=[{offset:0,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],Ay=[{offset:0,transform:`rotate3d(0, 0, 1, -90deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],jy=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 200deg)`,opacity:`0`}],My=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`}],Ny=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`}],Py=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`}],Fy=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 90deg)`,opacity:`0`}],Iy=[{offset:0,transform:`translate3d(0, -100%, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],Ly=[{offset:0,transform:`translate3d(-100%, 0, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],Ry=[{offset:0,transform:`translate3d(100%, 0, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],zy=[{offset:0,transform:`translate3d(0, 100%, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],By=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(0, 100%, 0)`}],Vy=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(-100%, 0, 0)`}],Hy=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(100%, 0, 0)`}],Uy=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(0, -100%, 0)`}],Wy=[{offset:0,easing:`ease-in-out`},{offset:.2,transform:`rotate3d(0, 0, 1, 80deg)`,easing:`ease-in-out`},{offset:.4,transform:`rotate3d(0, 0, 1, 60deg)`,easing:`ease-in-out`,opacity:`1`},{offset:.6,transform:`rotate3d(0, 0, 1, 80deg)`,easing:`ease-in-out`},{offset:.8,transform:`rotate3d(0, 0, 1, 60deg)`,easing:`ease-in-out`,opacity:`1`},{offset:1,transform:`translate3d(0, 700px, 0)`,opacity:`0`}],Gy=[{offset:0,opacity:`0`,transform:`scale(0.1) rotate(30deg)`,"transform-origin":`center bottom`},{offset:.5,transform:`rotate(-10deg)`},{offset:.7,transform:`rotate(3deg)`},{offset:1,opacity:`1`,transform:`scale(1)`}],Ky=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],qy=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)`}],Jy=[{offset:0,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:.5,opacity:`1`}],Yy=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Xy=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Zy=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Qy=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],$y=[{offset:0,opacity:`1`},{offset:.5,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:1,opacity:`0`}],eb=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:1,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],tb=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)`},{offset:1,opacity:`0`,transform:`scale(0.1) translate3d(-2000px, 0, 0)`}],nb=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)`},{offset:1,opacity:`0`,transform:`scale(0.1) translate3d(2000px, 0, 0)`}],rb=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:1,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],ib={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,easeInSine:`cubic-bezier(0.47, 0, 0.745, 0.715)`,easeOutSine:`cubic-bezier(0.39, 0.575, 0.565, 1)`,easeInOutSine:`cubic-bezier(0.445, 0.05, 0.55, 0.95)`,easeInQuad:`cubic-bezier(0.55, 0.085, 0.68, 0.53)`,easeOutQuad:`cubic-bezier(0.25, 0.46, 0.45, 0.94)`,easeInOutQuad:`cubic-bezier(0.455, 0.03, 0.515, 0.955)`,easeInCubic:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`,easeOutCubic:`cubic-bezier(0.215, 0.61, 0.355, 1)`,easeInOutCubic:`cubic-bezier(0.645, 0.045, 0.355, 1)`,easeInQuart:`cubic-bezier(0.895, 0.03, 0.685, 0.22)`,easeOutQuart:`cubic-bezier(0.165, 0.84, 0.44, 1)`,easeInOutQuart:`cubic-bezier(0.77, 0, 0.175, 1)`,easeInQuint:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,easeOutQuint:`cubic-bezier(0.23, 1, 0.32, 1)`,easeInOutQuint:`cubic-bezier(0.86, 0, 0.07, 1)`,easeInExpo:`cubic-bezier(0.95, 0.05, 0.795, 0.035)`,easeOutExpo:`cubic-bezier(0.19, 1, 0.22, 1)`,easeInOutExpo:`cubic-bezier(1, 0, 0, 1)`,easeInCirc:`cubic-bezier(0.6, 0.04, 0.98, 0.335)`,easeOutCirc:`cubic-bezier(0.075, 0.82, 0.165, 1)`,easeInOutCirc:`cubic-bezier(0.785, 0.135, 0.15, 0.86)`,easeInBack:`cubic-bezier(0.6, -0.28, 0.735, 0.045)`,easeOutBack:`cubic-bezier(0.175, 0.885, 0.32, 1.275)`,easeInOutBack:`cubic-bezier(0.68, -0.55, 0.265, 1.55)`},ab=t({backInDown:()=>Dv,backInLeft:()=>Ov,backInRight:()=>kv,backInUp:()=>Av,backOutDown:()=>jv,backOutLeft:()=>Mv,backOutRight:()=>Nv,backOutUp:()=>Pv,bounce:()=>mv,bounceIn:()=>Fv,bounceInDown:()=>Iv,bounceInLeft:()=>Lv,bounceInRight:()=>Rv,bounceInUp:()=>zv,bounceOut:()=>Bv,bounceOutDown:()=>Vv,bounceOutLeft:()=>Hv,bounceOutRight:()=>Uv,bounceOutUp:()=>Wv,easings:()=>ib,fadeIn:()=>Gv,fadeInBottomLeft:()=>Kv,fadeInBottomRight:()=>qv,fadeInDown:()=>Jv,fadeInDownBig:()=>Yv,fadeInLeft:()=>Xv,fadeInLeftBig:()=>Zv,fadeInRight:()=>Qv,fadeInRightBig:()=>$v,fadeInTopLeft:()=>ey,fadeInTopRight:()=>ty,fadeInUp:()=>ny,fadeInUpBig:()=>ry,fadeOut:()=>iy,fadeOutBottomLeft:()=>ay,fadeOutBottomRight:()=>oy,fadeOutDown:()=>sy,fadeOutDownBig:()=>cy,fadeOutLeft:()=>ly,fadeOutLeftBig:()=>uy,fadeOutRight:()=>dy,fadeOutRightBig:()=>fy,fadeOutTopLeft:()=>py,fadeOutTopRight:()=>my,fadeOutUp:()=>hy,fadeOutUpBig:()=>gy,flash:()=>hv,flip:()=>_y,flipInX:()=>vy,flipInY:()=>yy,flipOutX:()=>by,flipOutY:()=>xy,headShake:()=>gv,heartBeat:()=>_v,hinge:()=>Wy,jackInTheBox:()=>Gy,jello:()=>vv,lightSpeedInLeft:()=>Sy,lightSpeedInRight:()=>Cy,lightSpeedOutLeft:()=>wy,lightSpeedOutRight:()=>Ty,pulse:()=>yv,rollIn:()=>Ky,rollOut:()=>qy,rotateIn:()=>Ey,rotateInDownLeft:()=>Dy,rotateInDownRight:()=>Oy,rotateInUpLeft:()=>ky,rotateInUpRight:()=>Ay,rotateOut:()=>jy,rotateOutDownLeft:()=>My,rotateOutDownRight:()=>Ny,rotateOutUpLeft:()=>Py,rotateOutUpRight:()=>Fy,rubberBand:()=>bv,shake:()=>xv,shakeX:()=>Sv,shakeY:()=>Cv,slideInDown:()=>Iy,slideInLeft:()=>Ly,slideInRight:()=>Ry,slideInUp:()=>zy,slideOutDown:()=>By,slideOutLeft:()=>Vy,slideOutRight:()=>Hy,slideOutUp:()=>Uy,swing:()=>wv,tada:()=>Tv,wobble:()=>Ev,zoomIn:()=>Jy,zoomInDown:()=>Yy,zoomInLeft:()=>Xy,zoomInRight:()=>Zy,zoomInUp:()=>Qy,zoomOut:()=>$y,zoomOutDown:()=>eb,zoomOutLeft:()=>tb,zoomOutRight:()=>nb,zoomOutUp:()=>rb}),ob=M`
  :host {
    display: contents;
  }
`,sb=class extends B{constructor(){super(...arguments),this.hasStarted=!1,this.name=`none`,this.play=!1,this.delay=0,this.direction=`normal`,this.duration=1e3,this.easing=`linear`,this.endDelay=0,this.fill=`auto`,this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit(`sl-finish`)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit(`sl-cancel`)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){let e=ib[this.easing]??this.easing,t=this.keyframes??ab[this.name],n=(await this.defaultSlot).assignedElements()[0];return!n||!t?!1:(this.destroyAnimation(),this.animation=n.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener(`cancel`,this.handleAnimationCancel),this.animation.addEventListener(`finish`,this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit(`sl-start`)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener(`cancel`,this.handleAnimationCancel),this.animation.removeEventListener(`finish`,this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit(`sl-start`)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};sb.styles=[I,ob],j([rf(`slot`)],sb.prototype,`defaultSlot`,2),j([L()],sb.prototype,`name`,2),j([L({type:Boolean,reflect:!0})],sb.prototype,`play`,2),j([L({type:Number})],sb.prototype,`delay`,2),j([L()],sb.prototype,`direction`,2),j([L({type:Number})],sb.prototype,`duration`,2),j([L()],sb.prototype,`easing`,2),j([L({attribute:`end-delay`,type:Number})],sb.prototype,`endDelay`,2),j([L()],sb.prototype,`fill`,2),j([L({type:Number})],sb.prototype,`iterations`,2),j([L({attribute:`iteration-start`,type:Number})],sb.prototype,`iterationStart`,2),j([L({attribute:!1})],sb.prototype,`keyframes`,2),j([L({attribute:`playback-rate`,type:Number})],sb.prototype,`playbackRate`,2),j([F([`name`,`delay`,`direction`,`duration`,`easing`,`endDelay`,`fill`,`iterations`,`iterationsStart`,`keyframes`])],sb.prototype,`handleAnimationChange`,1),j([F(`play`)],sb.prototype,`handlePlayChange`,1),j([F(`playbackRate`)],sb.prototype,`handlePlaybackRateChange`,1),sb.define(`sl-animation`);var cb=Mo(Ro);cb.use(Ql),cb.mount(`#app`);