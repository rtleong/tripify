const d={};function q(e){d.context=e}function St(){return{...d.context,id:`${d.context.id}${d.context.count++}-`,count:0}}const vt=(e,t)=>e===t,Ee=Symbol("solid-proxy"),fe={equals:vt};let U=null,Ye=tt;const O=1,D=2,ze={owned:null,cleanups:null,context:null,owner:null},we={};var p=null;let f=null,S=null,C=null,$=null,Ce=0;const[rr,Re]=T(!1);function $e(e,t){const n=S,r=p,s=e.length===0,o=s?ze:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>k(()=>K(o)));p=o,S=null;try{return _(l,!0)}finally{S=n,p=r}}function T(e,t){t=t?Object.assign({},fe,t):fe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(f&&f.running&&f.sources.has(n)?s=s(n.tValue):s=s(n.value)),et(n,s));return[Ze.bind(n),r]}function _e(e,t,n){const r=ye(e,t,!0,O);Z(r)}function M(e,t,n){const r=ye(e,t,!1,O);Z(r)}function Ge(e,t,n){Ye=Tt;const r=ye(e,t,!1,O),s=X&&ce(p,X.id);s&&(r.suspense=s),r.user=!0,$?$.push(r):Z(r)}function A(e,t,n){n=n?Object.assign({},fe,n):fe;const r=ye(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Z(r),Ze.bind(r)}function Et(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o=t||{}):(r=e,s=t,o=n||{});let l=null,i=we,c=null,u=!1,a=!1,g="initialValue"in o,y=typeof r=="function"&&A(r);const w=new Set,[v,x]=(o.storage||T)(o.initialValue),[L,N]=T(void 0),[R,B]=T(void 0,{equals:!1}),[F,V]=T(g?"ready":"unresolved");if(d.context){c=`${d.context.id}${d.context.count++}`;let h;o.ssrLoadFrom==="initial"?i=o.initialValue:d.load&&(h=d.load(c))&&(i=h[0])}function W(h,m,P,j){return l===h&&(l=null,g=!0,(h===i||m===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(j,{value:m})),i=we,f&&h&&u?(f.promises.delete(h),u=!1,_(()=>{f.running=!0,ee(m,P)},!1)):ee(m,P)),m}function ee(h,m){_(()=>{m||x(()=>h),V(m?"errored":"ready"),N(m);for(const P of w.keys())P.decrement();w.clear()},!1)}function te(){const h=X&&ce(p,X.id),m=v(),P=L();if(P&&!l)throw P;return S&&!S.user&&h&&_e(()=>{R(),l&&(h.resolved&&f&&u?f.promises.add(l):w.has(h)||(h.increment(),w.add(h)))}),m}function E(h=!0){if(h!==!1&&a)return;a=!1;const m=y?y():r;if(u=f&&f.running,m==null||m===!1){W(l,k(v));return}f&&l&&f.promises.delete(l);const P=i!==we?i:k(()=>s(m,{value:v(),refetching:h}));return typeof P!="object"||!(P&&"then"in P)?(W(l,P,void 0,m),P):(l=P,a=!0,queueMicrotask(()=>a=!1),_(()=>{V(g?"refreshing":"pending"),B()},!1),P.then(j=>W(P,j,void 0,m),j=>W(P,void 0,st(j),m)))}return Object.defineProperties(te,{state:{get:()=>F()},error:{get:()=>L()},loading:{get(){const h=F();return h==="pending"||h==="refreshing"}},latest:{get(){if(!g)return te();const h=L();if(h&&!l)throw h;return v()}}}),y?_e(()=>E(!1)):E(!1),[te,{refetch:E,mutate:x}]}function k(e){const t=S;S=null;try{return e()}finally{S=t}}function Je(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(o){o=!1;return}const c=k(()=>t(i,s,l));return s=i,c}}function sr(e){Ge(()=>k(e))}function le(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function qe(e){U||(U=Symbol("error")),p===null||(p.context===null?p.context={[U]:[e]}:p.context[U]?p.context[U].push(e):p.context[U]=[e])}function Qe(){return p}function Pt(e,t){const n=p,r=S;p=e,S=null;try{return _(t,!0)}catch(s){Te(s)}finally{p=n,S=r}}function At(e){if(f&&f.running)return e(),f.done;const t=S,n=p;return Promise.resolve().then(()=>{S=t,p=n;let r;return X&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),_(e,!1),S=p=null,r?r.done:void 0})}function Ct(e){$.push.apply($,e),e.length=0}function Q(e,t){const n=Symbol("context");return{id:n,Provider:Ot(n),defaultValue:e}}function Y(e){let t;return(t=ce(p,e.id))!==void 0?t:e.defaultValue}function ke(e){const t=A(e),n=A(()=>Pe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let X;function $t(){return X||(X=Q({}))}function Ze(){const e=f&&f.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===O||e&&this.tState===O)Z(this);else{const t=C;C=null,_(()=>he(this),!1),C=t}if(S){const t=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(t)):(S.sources=[this],S.sourceSlots=[t]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function et(e,t,n){let r=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(f){const s=f.running;(s||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&_(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=f&&f.running;l&&f.disposed.has(o)||((l&&!o.tState||!l&&!o.state)&&(o.pure?C.push(o):$.push(o),o.observers&&nt(o)),l?o.tState=O:o.state=O)}if(C.length>1e6)throw C=[],new Error},!1)}return t}function Z(e){if(!e.fn)return;K(e);const t=p,n=S,r=Ce;S=p=e,je(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{_(()=>{f&&(f.running=!0),S=p=e,je(e,e.tValue,r),S=p=null},!1)}),S=n,p=t}function je(e,t,n){let r;try{r=e.fn(t)}catch(s){e.pure&&(f&&f.running?(e.tState=O,e.tOwned&&e.tOwned.forEach(K),e.tOwned=void 0):(e.state=O,e.owned&&e.owned.forEach(K),e.owned=null)),Te(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?et(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function ye(e,t,n,r=O,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return f&&f.running&&(o.state=0,o.tState=r),p===null||p!==ze&&(f&&f.running&&p.pure?p.tOwned?p.tOwned.push(o):p.tOwned=[o]:p.owned?p.owned.push(o):p.owned=[o]),o}function de(e){const t=f&&f.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===D||t&&e.tState===D)return he(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ce);){if(t&&f.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,o=n[r+1];for(;(s=s.owner)&&s!==o;)if(f.disposed.has(s))return}if(!t&&e.state===O||t&&e.tState===O)Z(e);else if(!t&&e.state===D||t&&e.tState===D){const s=C;C=null,_(()=>he(e,n[0]),!1),C=s}}}function _(e,t){if(C)return e();let n=!1;t||(C=[]),$?n=!0:$=[],Ce++;try{const r=e();return kt(n),r}catch(r){C||($=null),C=null,Te(r)}}function kt(e){if(C&&(tt(C),C=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const r=f.sources,s=f.disposed;$.push.apply($,f.effects),t=f.resolve;for(const o of $)"tState"in o&&(o.state=o.tState),delete o.tState;f=null,_(()=>{for(const o of s)K(o);for(const o of r){if(o.value=o.tValue,o.owned)for(let l=0,i=o.owned.length;l<i;l++)K(o.owned[l]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}Re(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,$),$=null,Re(!0);return}}const n=$;$=null,n.length&&_(()=>Ye(n),!1),t&&t()}function tt(e){for(let t=0;t<e.length;t++)de(e[t])}function Tt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:de(r)}for(d.context&&q(),t=0;t<n;t++)de(e[t])}function he(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(!n&&s.state===O||n&&s.tState===O?s!==t&&de(s):(!n&&s.state===D||n&&s.tState===D)&&he(s,t))}}function nt(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=D:r.state=D,r.pure?C.push(r):$.push(r),r.observers&&nt(r))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)K(e.tOwned[t]);delete e.tOwned}rt(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function rt(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)rt(e.owned[n])}function st(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Te(e){e=st(e);const t=U&&ce(p,U);if(!t)throw e;for(const n of t)n(e)}function ce(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ce(e.owner,t):void 0}function Pe(e){if(typeof e=="function"&&!e.length)return Pe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Pe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ot(e,t){return function(r){let s;return M(()=>s=k(()=>(p.context={[e]:r.value},ke(()=>r.children))),void 0),s}}let ot=!1;function Nt(){ot=!0}function b(e,t){if(ot&&d.context){const n=d.context;q(St());const r=k(()=>e(t||{}));return q(n),r}return k(()=>e(t||{}))}function ue(){return!0}const Lt={get(e,t,n){return t===Ee?n:e.get(t)},has(e,t){return t===Ee?!0:e.has(t)},set:ue,deleteProperty:ue,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ue,deleteProperty:ue}},ownKeys(e){return e.keys()}};function be(e){return(e=typeof e=="function"?e():e)?e:{}}function Rt(...e){let t=!1;for(let r=0;r<e.length;r++){const s=e[r];t=t||!!s&&Ee in s,e[r]=typeof s=="function"?(t=!0,A(s)):s}if(t)return new Proxy({get(r){for(let s=e.length-1;s>=0;s--){const o=be(e[s])[r];if(o!==void 0)return o}},has(r){for(let s=e.length-1;s>=0;s--)if(r in be(e[s]))return!0;return!1},keys(){const r=[];for(let s=0;s<e.length;s++)r.push(...Object.keys(be(e[s])));return[...new Set(r)]}},Lt);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const s=Object.getOwnPropertyDescriptors(e[r]);for(const o in s)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const i=(e[l]||{})[o];if(i!==void 0)return i}}})}return n}function xe(e){let t,n;const r=s=>{const o=d.context;if(o){const[i,c]=T();(n||(n=e())).then(u=>{q(o),c(()=>u.default),q()}),t=i}else if(!t){const[i]=Et(()=>(n||(n=e())).then(c=>c.default));t=i}let l;return A(()=>(l=t())&&k(()=>{if(!o)return l(s);const i=d.context;q(o);const c=l(s);return q(i),c}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}let _t=0;function qt(){const e=d.context;return e?`${e.id}${e.count++}`:`cl-${_t++}`}function Oe(e){let t=!1;const n=e.keyed,r=A(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return A(()=>{const s=r();if(s){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?k(()=>o(s)):o}return e.fallback},void 0,void 0)}let G;function it(){G&&[...G].forEach(e=>e())}function jt(e){let t,n;d.context&&d.load&&(n=d.load(d.context.id+d.context.count))&&(t=n[0]);const[r,s]=T(t,void 0);return G||(G=new Set),G.add(s),le(()=>G.delete(s)),A(()=>{let o;if(o=r()){const l=e.fallback,i=typeof l=="function"&&l.length?k(()=>l(o,()=>s())):l;return qe(s),i}return qe(s),e.children},void 0,void 0)}const Vt=Q();function Mt(e){let t=0,n,r,s,o,l;const[i,c]=T(!1),u=$t(),a={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:i,effects:[],resolved:!1},g=Qe();if(d.context&&d.load){const v=d.context.id+d.context.count;let x=d.load(v);if(x&&(s=x[0])&&s!=="$$f"){(typeof s!="object"||!("then"in s))&&(s=Promise.resolve(s));const[L,N]=T(void 0,{equals:!1});o=L,s.then(R=>{if(R||d.done)return R&&(l=R),N();d.gather(v),q(r),N(),q()})}}const y=Y(Vt);y&&(n=y.register(a.inFallback));let w;return le(()=>w&&w()),b(u.Provider,{value:a,get children(){return A(()=>{if(l)throw l;if(r=d.context,o)return o(),o=void 0;r&&s==="$$f"&&q();const v=A(()=>e.children);return A(x=>{const L=a.inFallback(),{showContent:N=!0,showFallback:R=!0}=n?n():{};if((!L||s&&s!=="$$f")&&N)return a.resolved=!0,w&&w(),w=r=s=void 0,Ct(a.effects),v();if(!!R)return w?x:$e(B=>(w=B,r&&(q({id:r.id+"f",count:0}),r=void 0),e.fallback),g)})})}})}const Bt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ft=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Bt]),Ht=new Set(["innerHTML","textContent","innerText","children"]),It=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ve=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ut=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Dt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Kt(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,c=t[s-1].nextSibling,u=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const a=o<r?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],a)}else if(o===i)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],a),t[s]=n[o]}else{if(!u){u=new Map;let g=i;for(;g<o;)u.set(n[g],g++)}const a=u.get(t[l]);if(a!=null)if(i<a&&a<o){let g=l,y=1,w;for(;++g<s&&g<o&&!((w=u.get(t[g]))==null||w!==a+y);)y++;if(y>a-i){const v=t[l];for(;i<a;)e.insertBefore(n[i++],v)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Me="_$DX_DELEGATE";function Wt(e,t,n,r={}){let s;return $e(o=>{s=o,t===document?e():ge(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function Xt(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function Ne(e,t=window.document){const n=t[Me]||(t[Me]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,ut))}}function lt(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Yt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function zt(e,t){t==null?e.removeAttribute("class"):e.className=t}function ct(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function Gt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(Be(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],c=!!t[i];!i||i==="undefined"||n[i]===c||!c||(Be(e,i,!0),n[i]=c)}return n}function Jt(e,t,n){if(!t)return n?lt(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function oe(e,t={},n,r){const s={};return r||M(()=>s.children=J(e,t.children,s.children)),M(()=>t.ref&&t.ref(e)),M(()=>Qt(e,t,n,!0,s,!0)),s}function ge(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return J(e,t,r,n);M(s=>J(e,t(),s,n),r)}function Qt(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=Fe(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){r||J(e,t.children);continue}const i=t[l];s[l]=Fe(e,l,i,s[l],n,o)}}function Zt(e,t,n={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=s=>Ie(t,s),d.registry=new Map,d.context={id:n.renderId||"",count:0},Ie(t,n.renderId);const r=Wt(e,t,[...t.childNodes],n);return d.context=null,r}function en(e){let t,n;return!d.context||!(t=d.registry.get(n=rn()))?e.cloneNode(!0):(d.completed&&d.completed.add(t),d.registry.delete(n),t)}function or(e){let t=e,n=0,r=[];if(d.context)for(;t;){if(t.nodeType===8){const s=t.nodeValue;if(s==="#")n++;else if(s==="/"){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function tn(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;for(t.queued=!1;t.length;){const[n,r]=t[0];if(!e.has(n))return;ut(r),t.shift()}}),d.events.queued=!0)}function nn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Be(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function Fe(e,t,n,r,s,o){let l,i,c;if(t==="style")return Jt(e,n,r);if(t==="classList")return Gt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),a=Ut.has(u);if(!a&&r){const g=Array.isArray(r)?r[0]:r;e.removeEventListener(u,g)}(a||n)&&(ct(e,u,n,a),a&&Ne([u]))}else if((c=Ht.has(t))||!s&&(Ve[t]||(i=Ft.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?zt(e,n):l&&!i&&!c?e[nn(t)]=n:e[Ve[t]||t]=n;else{const u=s&&t.indexOf(":")>-1&&Dt[t.split(":")[0]];u?Yt(e,u,t,n):lt(e,It[t]||t,n)}return n}function ut(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),d.registry&&!d.done&&(d.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let s=r.nextSibling;r.remove(),r=s}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function J(e,t,n,r,s){for(d.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(d.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=z(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(d.context)return n;n=z(e,n,r)}else{if(o==="function")return M(()=>{let i=t();for(;typeof i=="function";)i=i();n=J(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(Ae(i,t,n,s))return M(()=>n=J(e,i,n,r,!0)),()=>n;if(d.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=z(e,n,r),l)return n}else c?n.length===0?He(e,i,r):Kt(e,n,i):(n&&z(e),He(e,i));n=i}else if(t instanceof Node){if(d.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=z(e,n,r,t);z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ae(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],c=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=Ae(e,i,c)||s;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();s=Ae(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const u=String(i);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function He(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function z(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const c=i.parentNode===e;!o&&!l?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}function Ie(e,t){const n=e.querySelectorAll("*[data-hk]");for(let r=0;r<n.length;r++){const s=n[r],o=s.getAttribute("data-hk");(!t||o.startsWith(t))&&!d.registry.has(o)&&d.registry.set(o,s)}}function rn(){const e=d.context;return`${e.id}${e.count++}`}function sn(e){return d.context?void 0:e.children}function on(){}const at=!1,ln=(...e)=>(Nt(),Zt(...e)),cn="modulepreload",un=function(e){return"/"+e},Ue={},Se=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=un(o),o in Ue)return;Ue[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!r)for(let a=s.length-1;a>=0;a--){const g=s[a];if(g.href===o&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":cn,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((a,g)=>{u.addEventListener("load",a),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function an(e,t){e&&t&&ln(e,t)}const Le=Q(),fn=["title","meta"],De=e=>e.tag+(e.name?`.${e.name}"`:""),dn=e=>{if(!d.context){const s=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(s,o=>o.parentNode.removeChild(o))}const t=new Map;function n(s){if(s.ref)return s.ref;let o=document.querySelector(`[data-sm="${s.id}"]`);return o?(o.tagName.toLowerCase()!==s.tag&&(o.parentNode&&o.parentNode.removeChild(o),o=document.createElement(s.tag)),o.removeAttribute("data-sm")):o=document.createElement(s.tag),o}const r={addClientTag:s=>{let o=De(s);if(fn.indexOf(s.tag)!==-1){t.has(o)||t.set(o,[]);let i=t.get(o),c=i.length;i=[...i,s],t.set(o,i);{let u=n(s);s.ref=u,oe(u,s.props);let a=null;for(var l=c-1;l>=0;l--)if(i[l]!=null){a=i[l];break}u.parentNode!=document.head&&document.head.appendChild(u),a&&a.ref&&document.head.removeChild(a.ref)}return c}{let i=n(s);s.ref=i,oe(i,s.props),i.parentNode!=document.head&&document.head.appendChild(i)}return-1},removeClientTag:(s,o)=>{const l=De(s);if(s.ref){const i=t.get(l);if(i){if(s.ref.parentNode){s.ref.parentNode.removeChild(s.ref);for(let c=o-1;c>=0;c--)i[c]!=null&&document.head.appendChild(i[c].ref)}i[o]=null,t.set(l,i)}else s.ref.parentNode&&s.ref.parentNode.removeChild(s.ref)}}};return b(Le.Provider,{value:r,get children(){return e.children}})},ft=(e,t)=>{const n=qt();if(!Y(Le))throw new Error("<MetaProvider /> should be in the tree");return hn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function hn(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=Y(Le);M(()=>{{let s=t(e);le(()=>n(e,s))}})}const gn=e=>ft("title",e),Ke=e=>ft("meta",e);function yn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function pn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function mn(e){try{return document.querySelector(e)}catch{return null}}function wn(e,t){const n=mn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function bn(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=pn(T(o(e()),{equals:(i,c)=>i.value===c.value}),void 0,i=>(!s&&t(i),i));return n&&le(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function xn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:T({value:""})};return e}function Sn(){return bn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),wn(window.location.hash.slice(1),n)},e=>yn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function vn(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(s,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const En=/^(?:[a-z0-9]+:)?\/\//i,Pn=/^\/+|\/+$/g;function se(e,t=!1){const n=e.replace(Pn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ae(e,t,n){if(En.test(t))return;const r=se(e),s=n&&se(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+se(t,!o)}function An(e,t){if(e==null)throw new Error(t);return e}function dt(e,t){return se(e).replace(/\/*(\*.*)?$/g,"")+se(t)}function Cn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function $n(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const c=i.split("/").filter(Boolean),u=c.length-l;if(u<0||u>0&&s===void 0&&!t)return null;const a={path:l?"":"/",params:{}},g=y=>n===void 0?void 0:n[y];for(let y=0;y<l;y++){const w=o[y],v=c[y],x=w[0]===":"?w.slice(1):w;if(w[0]===":"&&ve(v,g(x)))a.params[x]=v;else if(!ve(v,w))return null;a.path+=`/${v}`}if(s){const y=u?c.slice(-u).join("/"):"";if(ve(y,g(s)))a.params[s]=y;else return null}return a}}function ve(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function kn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function ht(e){const t=new Map,n=Qe();return new Proxy({},{get(r,s){return t.has(s)||Pt(n,()=>t.set(s,A(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Tn(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([s,o])=>{o==null||o===""?n.delete(s):n.set(s,String(o))});const r=n.toString();return r?`?${r}`:""}function gt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return gt(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const On=100,yt=Q(),pe=Q(),me=()=>An(Y(yt),"Make sure your app is wrapped in a <Router />");let ie;const pt=()=>ie||Y(pe)||me().base,Nn=()=>me().navigatorFactory(),Ln=()=>me().location,ir=()=>{const e=Ln(),t=Nn(),n=(r,s)=>{const o=k(()=>Tn(e.search,r));t(e.pathname+o+e.hash,{scroll:!1,resolve:!1,...s})};return[e.query,n]};function Rn(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>b(r,{}):()=>{const{element:c}=e;return c===void 0&&n?b(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return mt(e.path).reduce((c,u)=>{for(const a of gt(u)){const g=dt(t,a),y=l?g:g.split("/*",1)[0];c.push({...i,originalPath:a,pattern:y,matcher:$n(y,!l,e.matchFilters)})}return c},[])}function _n(e,t=0){return{routes:e,score:kn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function mt(e){return Array.isArray(e)?e:[e]}function wt(e,t="",n,r=[],s=[]){const o=mt(e);for(let l=0,i=o.length;l<i;l++){const c=o[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=Rn(c,t,n);for(const a of u){r.push(a);const g=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!g)wt(c.children,a.pattern,n,r,s);else{const y=_n([...r],s.length);s.push(y)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function qn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function jn(e,t){const n=new URL("http://sar"),r=A(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=A(()=>r().pathname),o=A(()=>r().search,!0),l=A(()=>r().hash),i=A(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:ht(Je(o,()=>Cn(r())))}}function Vn(e,t="",n,r){const{signal:[s,o],utils:l={}}=xn(e),i=l.parsePath||(E=>E),c=l.renderPath||(E=>E),u=l.beforeLeave||vn(),a=ae("",t),g=void 0;if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!s().value&&o({value:a,replace:!0,scroll:!1});const[y,w]=T(!1),v=async E=>{w(!0);try{await At(E)}finally{w(!1)}},[x,L]=T(s().value),[N,R]=T(s().state),B=jn(x,N),F=[],V={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath(E){return ae(a,E)}};if(n)try{ie=V,V.data=n({data:void 0,params:{},location:B,navigate:ee(V)})}finally{ie=void 0}function W(E,h,m){k(()=>{if(typeof h=="number"){h&&(l.go?u.confirm(h,m)&&l.go(h):console.warn("Router integration does not support relative routing"));return}const{replace:P,resolve:j,scroll:H,state:ne}={replace:!1,resolve:!0,scroll:!0,...m},I=j?E.resolvePath(h):ae("",h);if(I===void 0)throw new Error(`Path '${h}' is not a routable path`);if(F.length>=On)throw new Error("Too many redirects");const re=x();if((I!==re||ne!==N())&&!at){if(u.confirm(I,m)){const xt=F.push({value:re,replace:P,scroll:H,state:N()});v(()=>{L(I),R(ne),it()}).then(()=>{F.length===xt&&te({value:I,state:ne})})}}})}function ee(E){return E=E||Y(pe)||V,(h,m)=>W(E,h,m)}function te(E){const h=F[0];h&&((E.value!==h.value||E.state!==h.state)&&o({...E,replace:h.replace,scroll:h.scroll}),F.length=0)}M(()=>{const{value:E,state:h}=s();k(()=>{E!==x()&&v(()=>{L(E),R(h)})})});{let E=function(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const m=h.composedPath().find(re=>re instanceof Node&&re.nodeName.toUpperCase()==="A");if(!m||!m.hasAttribute("link"))return;const P=m.href;if(m.target||!P&&!m.hasAttribute("state"))return;const j=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||j&&j.includes("external"))return;const H=new URL(P);if(H.origin!==window.location.origin||a&&H.pathname&&!H.pathname.toLowerCase().startsWith(a.toLowerCase()))return;const ne=i(H.pathname+H.search+H.hash),I=m.getAttribute("state");h.preventDefault(),W(V,ne,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:I&&JSON.parse(I)})};Ne(["click"]),document.addEventListener("click",E),le(()=>document.removeEventListener("click",E))}return{base:V,out:g,location:B,isRouting:y,renderPath:c,parsePath:i,navigatorFactory:ee,beforeLeave:u}}function Mn(e,t,n,r,s){const{base:o,location:l,navigatorFactory:i}=e,{pattern:c,element:u,preload:a,data:g}=r().route,y=A(()=>r().path);a&&a();const w={parent:t,pattern:c,get child(){return n()},path:y,params:s,data:t.data,outlet:u,resolvePath(v){return ae(o.path(),v,y())}};if(g)try{ie=w,w.data=g({data:t.data,params:s,location:l,navigate:i(w)})}finally{ie=void 0}return w}const Bn=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||Sn(),i=Vn(l,r,s);return b(yt.Provider,{value:i,get children(){return e.children}})},Fn=e=>{const t=me(),n=pt(),r=ke(()=>e.children),s=A(()=>wt(r(),dt(n.pattern,e.base||""),Hn)),o=A(()=>qn(s(),t.location.pathname)),l=ht(()=>{const a=o(),g={};for(let y=0;y<a.length;y++)Object.assign(g,a[y].params);return g});t.out&&t.out.matches.push(o().map(({route:a,path:g,params:y})=>({originalPath:a.originalPath,pattern:a.pattern,path:g,params:y})));const i=[];let c;const u=A(Je(o,(a,g,y)=>{let w=g&&a.length===g.length;const v=[];for(let x=0,L=a.length;x<L;x++){const N=g&&g[x],R=a[x];y&&N&&R.route.key===N.route.key?v[x]=y[x]:(w=!1,i[x]&&i[x](),$e(B=>{i[x]=B,v[x]=Mn(t,v[x-1]||n,()=>u()[x+1],()=>o()[x],l)}))}return i.splice(a.length).forEach(x=>x()),y&&w?y:(c=v[0],v)}));return b(Oe,{get when(){return u()&&c},children:a=>b(pe.Provider,{value:a,get children(){return a.outlet()}})})},Hn=()=>{const e=pt();return b(Oe,{get when(){return e.child},children:t=>b(pe.Provider,{value:t,get children(){return t.outlet()}})})},In=[{component:xe(()=>Se(()=>import("./_...404_.1fed1f6a.js"),[])),path:"/*404"},{component:xe(()=>Se(()=>import("./index.fc5ebba5.js"),[])),path:"/"},{component:xe(()=>Se(()=>import("./itinerary.3b8fe548.js"),[])),path:"/itinerary"}],Un=()=>In,bt=Q({}),Dn=Fn,Kn="$FETCH",Wn=Xt('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>');function Xn(e){return b(jt,{fallback:(t,n)=>b(Oe,{get when(){return!e.fallback},get fallback(){return A(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return b(Yn,{error:t})}}),get children(){return e.children}})}function Yn(e){return Ge(()=>console.error(e.error)),(()=>{const t=en(Wn),n=t.firstChild,r=n.firstChild,s=r.nextSibling,o=s.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),ge(r,()=>e.error.message),ct(s,"click",it,!0),s.style.setProperty("color","rgba(252, 165, 165)"),s.style.setProperty("background-color","rgb(153, 27, 27)"),s.style.setProperty("border-radius","5px"),s.style.setProperty("padding","4px 8px"),o.style.setProperty("margin-top","8px"),o.style.setProperty("width","100%"),ge(o,()=>e.error.stack),tn(),t})()}Ne(["click"]);const zn=!1,Gn=!1;function Jn(){return Y(bt),[b(on,{}),Gn,b(sn,{get children(){return at}}),zn]}function Qn(e){return oe(document.documentElement,e,!1,!0),e.children}function Zn(e){return oe(document.head,e,!1,!0),e.children}function er(e){{let t=ke(()=>e.children);return oe(document.body,e,!1,!0),ge(document.body,()=>{let n=t();if(n){if(Array.isArray(n)){let r=n.filter(s=>Boolean(s));return r.length?r:null}return n}return null},null,[...document.body.childNodes]),document.body}}function We(){return b(Qn,{lang:"en",get children(){return[b(Zn,{get children(){return[b(gn,{children:"Tripify"}),b(Ke,{charset:"utf-8"}),b(Ke,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),b(er,{get children(){return[b(Mt,{get children(){return b(Xn,{get children(){return b(Dn,{get children(){return b(Un,{})}})}})}}),b(Jn,{})]}})]}})}const Xe=Object.values(Object.assign({}))[0],tr=Xe?Xe.default:void 0,nr=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Kn,fetch};function t(n){return b(Bn,Rt(n,{get children(){return b(We,{})}}))}return b(bt.Provider,{value:e,get children(){return b(dn,{get children(){return b(t,{data:tr,get children(){return b(We,{})}})}})}})};an(()=>b(nr,{}),document);export{bt as S,gn as T,or as a,T as b,b as c,sr as d,M as e,ir as f,en as g,ge as i,le as o,lt as s,Xt as t,Y as u};