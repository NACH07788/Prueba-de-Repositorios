(()=>{var t={19662:(t,r,e)=>{var n=e(60614),o=e(66330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},96077:(t,r,e)=>{var n=e(60614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},19670:(t,r,e)=>{var n=e(70111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},41318:(t,r,e)=>{var n=e(45656),o=e(51400),i=e(26244),a=function(t){return function(r,e,a){var u,c=n(r),s=i(c),f=o(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},84326:(t,r,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},70648:(t,r,e)=>{var n=e(51694),o=e(60614),i=e(84326),a=e(5112)("toStringTag"),u=Object,c="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=u(t),a))?e:c?i(r):"Object"==(n=i(r))&&o(r.callee)?"Arguments":n}},99920:(t,r,e)=>{var n=e(92597),o=e(53887),i=e(31236),a=e(3070);t.exports=function(t,r,e){for(var u=o(r),c=a.f,s=i.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||e&&n(e,p)||c(t,p,s(r,p))}}},68880:(t,r,e)=>{var n=e(19781),o=e(3070),i=e(79114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},79114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},98052:(t,r,e)=>{var n=e(60614),o=e(3070),i=e(56339),a=e(13072);t.exports=function(t,r,e,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:r;if(n(e)&&i(e,s,u),u.global)c?t[r]=e:a(r,e);else{try{u.unsafe?t[r]&&(c=!0):delete t[r]}catch(t){}c?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},13072:(t,r,e)=>{var n=e(17854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},19781:(t,r,e)=>{var n=e(47293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:t=>{var r="object"==typeof document&&document.all,e=void 0===r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:e}},80317:(t,r,e)=>{var n=e(17854),o=e(70111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},88113:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:(t,r,e)=>{var n,o,i=e(17854),a=e(88113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},80748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},11060:(t,r,e)=>{var n=e(1702),o=Error,i=n("".replace),a=String(o("zxcasd").stack),u=/\n\s*at [^:]*:[^\n]*/,c=u.test(a);t.exports=function(t,r){if(c&&"string"==typeof t&&!o.prepareStackTrace)for(;r--;)t=i(t,u,"");return t}},5392:(t,r,e)=>{var n=e(68880),o=e(11060),i=e(22914),a=Error.captureStackTrace;t.exports=function(t,r,e,u){i&&(a?a(t,r):n(t,"stack",o(e,u)))}},22914:(t,r,e)=>{var n=e(47293),o=e(79114);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},82109:(t,r,e)=>{var n=e(17854),o=e(31236).f,i=e(68880),a=e(98052),u=e(13072),c=e(99920),s=e(54705);t.exports=function(t,r){var e,f,p,l,v,y=t.target,g=t.global,d=t.stat;if(e=g?n:d?n[y]||u(y,{}):(n[y]||{}).prototype)for(f in r){if(l=r[f],p=t.dontCallGetSet?(v=o(e,f))&&v.value:e[f],!s(g?f:y+(d?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;c(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(e,f,l,t)}}},47293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},22104:(t,r,e)=>{var n=e(34374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},34374:(t,r,e)=>{var n=e(47293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},46916:(t,r,e)=>{var n=e(34374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},76530:(t,r,e)=>{var n=e(19781),o=e(92597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},75668:(t,r,e)=>{var n=e(1702),o=e(19662);t.exports=function(t,r,e){try{return n(o(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}}},1702:(t,r,e)=>{var n=e(34374),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);t.exports=n?a:function(t){return function(){return i.apply(t,arguments)}}},35005:(t,r,e)=>{var n=e(17854),o=e(60614);t.exports=function(t,r){return arguments.length<2?(e=n[t],o(e)?e:void 0):n[t]&&n[t][r];var e}},58173:(t,r,e)=>{var n=e(19662),o=e(68554);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},17854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},92597:(t,r,e)=>{var n=e(1702),o=e(47908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:t=>{t.exports={}},64664:(t,r,e)=>{var n=e(19781),o=e(47293),i=e(80317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},68361:(t,r,e)=>{var n=e(1702),o=e(47293),i=e(84326),a=Object,u=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):a(t)}:a},79587:(t,r,e)=>{var n=e(60614),o=e(70111),i=e(27674);t.exports=function(t,r,e){var a,u;return i&&n(a=r.constructor)&&a!==e&&o(u=a.prototype)&&u!==e.prototype&&i(t,u),t}},42788:(t,r,e)=>{var n=e(1702),o=e(60614),i=e(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},58340:(t,r,e)=>{var n=e(70111),o=e(68880);t.exports=function(t,r){n(r)&&"cause"in r&&o(t,"cause",r.cause)}},29909:(t,r,e)=>{var n,o,i,a=e(94811),u=e(17854),c=e(70111),s=e(68880),f=e(92597),p=e(5465),l=e(6200),v=e(3501),y="Object already initialized",g=u.TypeError,d=u.WeakMap;if(a||p.state){var h=p.state||(p.state=new d);h.get=h.get,h.has=h.has,h.set=h.set,n=function(t,r){if(h.has(t))throw g(y);return r.facade=t,h.set(t,r),r},o=function(t){return h.get(t)||{}},i=function(t){return h.has(t)}}else{var b=l("state");v[b]=!0,n=function(t,r){if(f(t,b))throw g(y);return r.facade=t,s(t,b,r),r},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw g("Incompatible receiver, "+t+" required");return e}}}},60614:(t,r,e)=>{var n=e(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},54705:(t,r,e)=>{var n=e(47293),o=e(60614),i=/#|\.prototype\./,a=function(t,r){var e=c[u(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},68554:t=>{t.exports=function(t){return null==t}},70111:(t,r,e)=>{var n=e(60614),o=e(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},31913:t=>{t.exports=!1},52190:(t,r,e)=>{var n=e(35005),o=e(60614),i=e(47976),a=e(43307),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,u(t))}},26244:(t,r,e)=>{var n=e(17466);t.exports=function(t){return n(t.length)}},56339:(t,r,e)=>{var n=e(1702),o=e(47293),i=e(60614),a=e(92597),u=e(19781),c=e(76530).CONFIGURABLE,s=e(42788),f=e(29909),p=f.enforce,l=f.get,v=String,y=Object.defineProperty,g=n("".slice),d=n("".replace),h=n([].join),b=u&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),m=String(String).split("String"),x=t.exports=function(t,r,e){"Symbol("===g(v(r),0,7)&&(r="["+d(v(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!a(t,"name")||c&&t.name!==r)&&(u?y(t,"name",{value:r,configurable:!0}):t.name=r),b&&e&&a(e,"arity")&&t.length!==e.arity&&y(t,"length",{value:e.arity});try{e&&a(e,"constructor")&&e.constructor?u&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=p(t);return a(n,"source")||(n.source=h(m,"string"==typeof r?r:"")),t};Function.prototype.toString=x((function(){return i(this)&&l(this).source||s(this)}),"toString")},74758:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},56277:(t,r,e)=>{var n=e(41340);t.exports=function(t,r){return void 0===t?arguments.length<2?"":r:n(t)}},3070:(t,r,e)=>{var n=e(19781),o=e(64664),i=e(3353),a=e(19670),u=e(34948),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",v="writable";r.f=n?i?function(t,r,e){if(a(t),r=u(r),a(e),"function"==typeof t&&"prototype"===r&&"value"in e&&v in e&&!e[v]){var n=f(t,r);n&&n[v]&&(t[r]=e.value,e={configurable:l in e?e[l]:n[l],enumerable:p in e?e[p]:n[p],writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(a(t),r=u(r),a(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},31236:(t,r,e)=>{var n=e(19781),o=e(46916),i=e(55296),a=e(79114),u=e(45656),c=e(34948),s=e(92597),f=e(64664),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=u(t),r=c(r),f)try{return p(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},8006:(t,r,e)=>{var n=e(16324),o=e(80748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},25181:(t,r)=>{r.f=Object.getOwnPropertySymbols},47976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},16324:(t,r,e)=>{var n=e(1702),o=e(92597),i=e(45656),a=e(41318).indexOf,u=e(3501),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&c(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||c(f,e));return f}},55296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},27674:(t,r,e)=>{var n=e(75668),o=e(19670),i=e(96077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=n(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},92140:(t,r,e)=>{var n=e(46916),o=e(60614),i=e(70111),a=TypeError;t.exports=function(t,r){var e,u;if("string"===r&&o(e=t.toString)&&!i(u=n(e,t)))return u;if(o(e=t.valueOf)&&!i(u=n(e,t)))return u;if("string"!==r&&o(e=t.toString)&&!i(u=n(e,t)))return u;throw a("Can't convert object to primitive value")}},53887:(t,r,e)=>{var n=e(35005),o=e(1702),i=e(8006),a=e(25181),u=e(19670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=a.f;return e?c(r,e(t)):r}},2626:(t,r,e)=>{var n=e(3070).f;t.exports=function(t,r,e){e in t||n(t,e,{configurable:!0,get:function(){return r[e]},set:function(t){r[e]=t}})}},84488:(t,r,e)=>{var n=e(68554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},6200:(t,r,e)=>{var n=e(72309),o=e(69711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(17854),o=e(13072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},72309:(t,r,e)=>{var n=e(31913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.30.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},36293:(t,r,e)=>{var n=e(7392),o=e(47293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},51400:(t,r,e)=>{var n=e(19303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},45656:(t,r,e)=>{var n=e(68361),o=e(84488);t.exports=function(t){return n(o(t))}},19303:(t,r,e)=>{var n=e(74758);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},17466:(t,r,e)=>{var n=e(19303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},47908:(t,r,e)=>{var n=e(84488),o=Object;t.exports=function(t){return o(n(t))}},57593:(t,r,e)=>{var n=e(46916),o=e(70111),i=e(52190),a=e(58173),u=e(92140),c=e(5112),s=TypeError,f=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=a(t,f);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),u(t,r)}},34948:(t,r,e)=>{var n=e(57593),o=e(52190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},51694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},41340:(t,r,e)=>{var n=e(70648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},66330:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},69711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},43307:(t,r,e)=>{var n=e(36293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(19781),o=e(47293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},94811:(t,r,e)=>{var n=e(17854),o=e(60614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:(t,r,e)=>{var n=e(17854),o=e(72309),i=e(92597),a=e(69711),u=e(36293),c=e(43307),s=n.Symbol,f=o("wks"),p=c?s.for||s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=u&&i(s,t)?s[t]:p("Symbol."+t)),f[t]}},89191:(t,r,e)=>{"use strict";var n=e(35005),o=e(92597),i=e(68880),a=e(47976),u=e(27674),c=e(99920),s=e(2626),f=e(79587),p=e(56277),l=e(58340),v=e(5392),y=e(19781),g=e(31913);t.exports=function(t,r,e,d){var h="stackTraceLimit",b=d?2:1,m=t.split("."),x=m[m.length-1],w=n.apply(null,m);if(w){var E=w.prototype;if(!g&&o(E,"cause")&&delete E.cause,!e)return w;var S=n("Error"),O=r((function(t,r){var e=p(d?r:t,void 0),n=d?new w(t):new w;return void 0!==e&&i(n,"message",e),v(n,O,n.stack,2),this&&a(E,this)&&f(n,this,O),arguments.length>b&&l(n,arguments[b]),n}));if(O.prototype=E,"Error"!==x?u?u(O,S):c(O,S,{name:!0}):y&&h in w&&(s(O,w,h),s(O,w,"prepareStackTrace")),c(O,w),!g)try{E.name!==x&&i(E,"name",x),E.constructor=O}catch(t){}return O}}},21703:(t,r,e)=>{var n=e(82109),o=e(17854),i=e(22104),a=e(89191),u="WebAssembly",c=o[u],s=7!==Error("e",{cause:7}).cause,f=function(t,r){var e={};e[t]=a(t,r,s),n({global:!0,constructor:!0,arity:1,forced:s},e)},p=function(t,r){if(c&&c[t]){var e={};e[t]=a(u+"."+t,r,s),n({target:u,stat:!0,constructor:!0,arity:1,forced:s},e)}};f("Error",(function(t){return function(r){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(r){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(r){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(r){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(r){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(r){return i(t,this,arguments)}})),f("URIError",(function(t){return function(r){return i(t,this,arguments)}})),p("CompileError",(function(t){return function(r){return i(t,this,arguments)}})),p("LinkError",(function(t){return function(r){return i(t,this,arguments)}})),p("RuntimeError",(function(t){return function(r){return i(t,this,arguments)}}))}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";e(21703);const t=new Map;class r{getItem(r){const e=String(r);return t.has(r)?String(t.get(e)):null}setItem(r,e){t.set(String(r),String(e))}removeItem(r){t.delete(r)}clear(){t.clear()}key(r){if(0===arguments.length)throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");return Array.from(t.keys())[r]}get length(){return t.size}}let n,o=!1;try{n=localStorage,o=!0}catch(t){const e=new r;n=new Proxy(e,{set:function(t,n,o){return r.prototype.hasOwnProperty(n)?e[n]=o:e.setItem(n,o),!0},get:function(t,n){return r.prototype.hasOwnProperty(n)?e[n]:null!=e.getItem(n)?e.getItem(n):void 0}})}function i(){window.parent.postMessage({type:"RELAY_READY"},window.EURL)}try{!function(){function t(){return Date.now()/1e3|0}if(n.setItem("editorHasEmittedBundle","false"),n.setItem("editorLastConnected",`${t()}`),setInterval((function(){n.setItem("editorLastConnected",`${t()}`)}),2e3),"serviceWorker"in navigator){var r={enabled:!0};window.onmessage=function(t){var e;"PREVIEW_INSTANTIATE_BUNDLE"===t.data.type&&n.setItem("editorHasEmittedBundle","true"),r.enabled&&(e=t.data,navigator.serviceWorker.getRegistrations().then((t=>{t.forEach((t=>{t.active&&t.active.postMessage({type:"RELAY_TO_PREVIEWS",payload:e})}))})))},navigator.serviceWorker.addEventListener("message",(t=>{const{type:e,payload:n}=t.data;if("PREVIEW_TO_RELAY"===e){const t=n;"EDITOR_CONNECTED"===t.type&&(r.enabled=!1),r.enabled&&window.parent.postMessage(t,"*")}}))}}()}catch(t){window.parent.postMessage({type:"RELAY_FAILED"},window.EURL)}var a;"serviceWorker"in navigator?(a="_sw_.js",new Promise(((t,r)=>{if(!("serviceWorker"in navigator))return r("This browser doesn't support Service Workers.");window.addEventListener("load",(function(){navigator.serviceWorker.register(a).then((function(){navigator.serviceWorker.ready.then((r=>{t(r)}))}),(function(t){return r(t)}))}))}))).then((()=>{!function(t){const r=r=>{"FETCH_REQUEST"===r.data.type&&t(r.data,r.ports[0])};navigator.serviceWorker.addEventListener("message",r)}(((t,r)=>{window.parent.postMessage(t,"*",[r])})),i()})):i(),window.addEventListener("unload",(function(){n.setItem("editorLastConnected","0"),n.setItem("editorHasEmittedBundle","false")}))})()})();