(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const _c=!1;var Wa=Array.isArray,bm=Array.prototype.indexOf,Tu=Array.from,Eh=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,Mh=Object.getOwnPropertyDescriptors,Tm=Object.prototype,Am=Array.prototype,Au=Object.getPrototypeOf;function ma(i){return typeof i=="function"}const rt=()=>{};function wm(i){return i()}function vc(i){for(var e=0;e<i.length;e++)i[e]()}const ii=2,bh=4,Xa=8,wu=16,Oi=32,na=64,Wo=128,rs=256,Xo=512,In=1024,ur=2048,ss=4096,Ci=8192,ia=16384,Im=32768,ra=65536,Cm=1<<17,Rm=1<<19,Th=1<<20,Ir=Symbol("$state"),Ah=Symbol("legacy props"),Lm=Symbol("");function wh(i){return i===this.v}function Iu(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Cu(i){return!Iu(i,this.v)}function Pm(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Dm(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Um(i){throw new Error("https://svelte.dev/e/effect_orphan")}function Om(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Nm(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function Fm(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bm(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function km(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Hm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let sa=!1,Vm=!1;function zm(){sa=!0}const Ru=1,Lu=2,Ih=4,Gm=8,Wm=16,Xm=1,jm=2,Ch=4,qm=8,Km=16,Rh=1,Ym=2,zn=Symbol(),xc="http://www.w3.org/2000/svg";function Wn(i,e){var t={f:0,v:i,reactions:null,equals:wh,rv:0,wv:0};return t}function Wt(i){return Lh(Wn(i))}function il(i,e=!1){var n;const t=Wn(i);return e||(t.equals=Cu),sa&&Ct!==null&&Ct.l!==null&&((n=Ct.l).s??(n.s=[])).push(t),t}function $n(i,e=!1){return Lh(il(i,e))}function Lh(i){return Ht!==null&&Ht.f&ii&&(Ri===null?og([i]):Ri.push(i)),i}function xl(i,e){return Pe(i,Ei(()=>E(i))),e}function Pe(i,e){return Ht!==null&&Ka()&&Ht.f&(ii|wu)&&(Ri===null||!Ri.includes(i))&&Hm(),yc(i,e)}function yc(i,e){return i.equals(e)||(i.v,i.v=e,i.wv=Jh(),Ph(i,ur),Ka()&&Nt!==null&&Nt.f&In&&!(Nt.f&(Oi|na))&&(tr===null?lg([i]):tr.push(i))),e}function Ph(i,e){var t=i.reactions;if(t!==null)for(var n=Ka(),r=t.length,s=0;s<r;s++){var a=t[s],o=a.f;o&ur||!n&&a===Nt||(fi(a,e),o&(In|rs)&&(o&ii?Ph(a,ss):cl(a)))}}let Dh=!1;function Ne(i,e=null,t){if(typeof i!="object"||i===null||Ir in i)return i;const n=Au(i);if(n!==Tm&&n!==Am)return i;var r=new Map,s=Wa(i),a=Wn(0);s&&r.set("length",Wn(i.length));var o;return new Proxy(i,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Fm();var d=r.get(c);return d===void 0?(d=Wn(u.value),r.set(c,d)):Pe(d,Ne(u.value,o)),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0)c in l&&r.set(c,Wn(zn));else{if(s&&typeof c=="string"){var d=r.get("length"),f=Number(c);Number.isInteger(f)&&f<d.v&&Pe(d,f)}Pe(u,zn),hd(a)}return!0},get(l,c,u){var g;if(c===Ir)return i;var d=r.get(c),f=c in l;if(d===void 0&&(!f||(g=wr(l,c))!=null&&g.writable)&&(d=Wn(Ne(f?l[c]:zn,o)),r.set(c,d)),d!==void 0){var h=E(d);return h===zn?void 0:h}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var d=r.get(c);d&&(u.value=E(d))}else if(u===void 0){var f=r.get(c),h=f==null?void 0:f.v;if(f!==void 0&&h!==zn)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(l,c){var h;if(c===Ir)return!0;var u=r.get(c),d=u!==void 0&&u.v!==zn||Reflect.has(l,c);if(u!==void 0||Nt!==null&&(!d||(h=wr(l,c))!=null&&h.writable)){u===void 0&&(u=Wn(d?Ne(l[c],o):zn),r.set(c,u));var f=E(u);if(f===zn)return!1}return d},set(l,c,u,d){var S;var f=r.get(c),h=c in l;if(s&&c==="length")for(var g=u;g<f.v;g+=1){var _=r.get(g+"");_!==void 0?Pe(_,zn):g in l&&(_=Wn(zn),r.set(g+"",_))}f===void 0?(!h||(S=wr(l,c))!=null&&S.writable)&&(f=Wn(void 0),Pe(f,Ne(u,o)),r.set(c,f)):(h=f.v!==zn,Pe(f,Ne(u,o)));var m=Reflect.getOwnPropertyDescriptor(l,c);if(m!=null&&m.set&&m.set.call(d,u),!h){if(s&&typeof c=="string"){var p=r.get("length"),y=Number(c);Number.isInteger(y)&&y>=p.v&&Pe(p,y+1)}hd(a)}return!0},ownKeys(l){E(a);var c=Reflect.ownKeys(l).filter(f=>{var h=r.get(f);return h===void 0||h.v!==zn});for(var[u,d]of r)d.v!==zn&&!(u in l)&&c.push(u);return c},setPrototypeOf(){Bm()}})}function hd(i,e=1){Pe(i,i.v+e)}var pd,Uh,Oh,Nh;function Zm(){if(pd===void 0){pd=window,Uh=document;var i=Element.prototype,e=Node.prototype;Oh=wr(e,"firstChild").get,Nh=wr(e,"nextSibling").get,i.__click=void 0,i.__className="",i.__attributes=null,i.__styles=null,i.__e=void 0,Text.prototype.__t=void 0}}function ja(i=""){return document.createTextNode(i)}function Qn(i){return Oh.call(i)}function rl(i){return Nh.call(i)}function De(i,e){return Qn(i)}function Ae(i,e){{var t=Qn(i);return t instanceof Comment&&t.data===""?rl(t):t}}function _e(i,e=1,t=!1){let n=i;for(;e--;)n=rl(n);return n}function Jm(i){i.textContent=""}function Ve(i){var e=ii|ur;Nt===null?e|=rs:Nt.f|=Th;var t=Ht!==null&&Ht.f&ii?Ht:null;const n={children:null,ctx:Ct,deps:null,equals:wh,f:e,fn:i,reactions:null,rv:0,v:null,wv:0,parent:t??Nt};return t!==null&&(t.children??(t.children=[])).push(n),n}function Pu(i){const e=Ve(i);return e.equals=Cu,e}function Fh(i){var e=i.children;if(e!==null){i.children=null;for(var t=0;t<e.length;t+=1){var n=e[t];n.f&ii?Du(n):Si(n)}}}function Qm(i){for(var e=i.parent;e!==null;){if(!(e.f&ii))return e;e=e.parent}return null}function Bh(i){var e,t=Nt;Pi(Qm(i));try{Fh(i),e=$h(i)}finally{Pi(t)}return e}function kh(i){var e=Bh(i),t=(Jr||i.f&rs)&&i.deps!==null?ss:In;fi(i,t),i.equals(e)||(i.v=e,i.wv=Jh())}function Du(i){Fh(i),Fa(i,0),fi(i,ia),i.v=i.children=i.deps=i.ctx=i.reactions=null}function Hh(i){Nt===null&&Ht===null&&Um(),Ht!==null&&Ht.f&rs&&Dm(),Ou&&Pm()}function $m(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function aa(i,e,t,n=!0){var r=(i&na)!==0,s=Nt,a={ctx:Ct,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:i|ur,first:null,fn:e,last:null,next:null,parent:r?null:s,prev:null,teardown:null,transitions:null,wv:0};if(t){var o=Ds;try{md(!0),ll(a),a.f|=Im}catch(u){throw Si(a),u}finally{md(o)}}else e!==null&&cl(a);var l=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Th|Wo))===0;if(!l&&!r&&n&&(s!==null&&$m(a,s),Ht!==null&&Ht.f&ii)){var c=Ht;(c.children??(c.children=[])).push(a)}return a}function Vh(i){const e=aa(Xa,null,!1);return fi(e,In),e.teardown=i,e}function bt(i){Hh();var e=Nt!==null&&(Nt.f&Oi)!==0&&Ct!==null&&!Ct.m;if(e){var t=Ct;(t.e??(t.e=[])).push({fn:i,effect:Nt,reaction:Ht})}else{var n=qa(i);return n}}function eg(i){return Hh(),oa(i)}function tg(i){const e=aa(na,i,!0);return(t={})=>new Promise(n=>{t.outro?Vs(e,()=>{Si(e),n(void 0)}):(Si(e),n(void 0))})}function qa(i){return aa(bh,i,!1)}function ng(i,e){var t=Ct,n={effect:null,ran:!1};t.l.r1.push(n),n.effect=oa(()=>{i(),!n.ran&&(n.ran=!0,Pe(t.l.r2,!0),Ei(e))})}function ig(){var i=Ct;oa(()=>{if(E(i.l.r2)){for(var e of i.l.r1){var t=e.effect;t.f&In&&fi(t,ss),la(t)&&ll(t),e.ran=!1}i.l.r2.v=!1}})}function oa(i){return aa(Xa,i,!0)}function Ye(i){return as(i)}function as(i,e=0){return aa(Xa|wu|e,i,!0)}function or(i,e=!0){return aa(Xa|Oi,i,!0,e)}function zh(i){var e=i.teardown;if(e!==null){const t=Ou,n=Ht;gd(!0),Lr(null);try{e.call(null)}finally{gd(t),Lr(n)}}}function Gh(i){var e=i.deriveds;if(e!==null){i.deriveds=null;for(var t=0;t<e.length;t+=1)Du(e[t])}}function Wh(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){var n=t.next;Si(t,e),t=n}}function rg(i){for(var e=i.first;e!==null;){var t=e.next;e.f&Oi||Si(e),e=t}}function Si(i,e=!0){var t=!1;if((e||i.f&Rm)&&i.nodes_start!==null){for(var n=i.nodes_start,r=i.nodes_end;n!==null;){var s=n===r?null:rl(n);n.remove(),n=s}t=!0}Wh(i,e&&!t),Gh(i),Fa(i,0),fi(i,ia);var a=i.transitions;if(a!==null)for(const l of a)l.stop();zh(i);var o=i.parent;o!==null&&o.first!==null&&Xh(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes_start=i.nodes_end=null}function Xh(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function Vs(i,e){var t=[];Uu(i,t,!0),jh(t,()=>{Si(i),e&&e()})}function jh(i,e){var t=i.length;if(t>0){var n=()=>--t||e();for(var r of i)r.out(n)}else e()}function Uu(i,e,t){if(!(i.f&Ci)){if(i.f^=Ci,i.transitions!==null)for(const a of i.transitions)(a.is_global||t)&&e.push(a);for(var n=i.first;n!==null;){var r=n.next,s=(n.f&ra)!==0||(n.f&Oi)!==0;Uu(n,e,s?t:!1),n=r}}}function Ua(i){qh(i,!0)}function qh(i,e){if(i.f&Ci){i.f^=Ci,i.f&In||(i.f^=In),la(i)&&(fi(i,ur),cl(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&ra)!==0||(t.f&Oi)!==0;qh(t,r?e:!1),t=n}if(i.transitions!==null)for(const s of i.transitions)(s.is_global||e)&&s.in()}}let jo=!1,Sc=[];function Kh(){jo=!1;const i=Sc.slice();Sc=[],vc(i)}function sl(i){jo||(jo=!0,queueMicrotask(Kh)),Sc.push(i)}function sg(){jo&&Kh()}function al(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Yh=0,ag=1;let Do=!1,Uo=Yh,Oa=!1,Na=null,Ds=!1,Ou=!1;function md(i){Ds=i}function gd(i){Ou=i}let Zr=[],Us=0;let Ht=null;function Lr(i){Ht=i}let Nt=null;function Pi(i){Nt=i}let Ri=null;function og(i){Ri=i}let Xn=null,Jn=0,tr=null;function lg(i){tr=i}let Zh=1,qo=0,Jr=!1,Ct=null;function Jh(){return++Zh}function Ka(){return!sa||Ct!==null&&Ct.l===null}function la(i){var c;var e=i.f;if(e&ur)return!0;if(e&ss){var t=i.deps,n=(e&rs)!==0;if(t!==null){var r,s,a=(e&Xo)!==0,o=n&&Nt!==null&&!Jr,l=t.length;if(a||o){for(r=0;r<l;r++)s=t[r],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(i)))&&(s.reactions??(s.reactions=[])).push(i);a&&(i.f^=Xo)}for(r=0;r<l;r++)if(s=t[r],la(s)&&kh(s),s.wv>i.wv)return!0}(!n||Nt!==null&&!Jr)&&fi(i,In)}return!1}function cg(i,e){for(var t=e;t!==null;){if(t.f&Wo)try{t.fn(i);return}catch{t.f^=Wo}t=t.parent}throw Do=!1,i}function ug(i){return(i.f&ia)===0&&(i.parent===null||(i.parent.f&Wo)===0)}function ol(i,e,t,n){if(Do){if(t===null&&(Do=!1),ug(e))throw i;return}t!==null&&(Do=!0);{cg(i,e);return}}function Qh(i,e,t=0){var n=i.reactions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];s.f&ii?Qh(s,e,t+1):e===s&&(t===0?fi(s,ur):s.f&In&&fi(s,ss),cl(s))}}function $h(i){var f;var e=Xn,t=Jn,n=tr,r=Ht,s=Jr,a=Ri,o=Ct,l=i.f;Xn=null,Jn=0,tr=null,Ht=l&(Oi|na)?null:i,Jr=!Ds&&(l&rs)!==0,Ri=null,Ct=i.ctx,qo++;try{var c=(0,i.fn)(),u=i.deps;if(Xn!==null){var d;if(Fa(i,Jn),u!==null&&Jn>0)for(u.length=Jn+Xn.length,d=0;d<Xn.length;d++)u[Jn+d]=Xn[d];else i.deps=u=Xn;if(!Jr)for(d=Jn;d<u.length;d++)((f=u[d]).reactions??(f.reactions=[])).push(i)}else u!==null&&Jn<u.length&&(Fa(i,Jn),u.length=Jn);if(Ka()&&tr!==null&&!(i.f&(ii|ss|ur)))for(d=0;d<tr.length;d++)Qh(tr[d],i);return r!==null&&qo++,c}finally{Xn=e,Jn=t,tr=n,Ht=r,Jr=s,Ri=a,Ct=o}}function dg(i,e){let t=e.reactions;if(t!==null){var n=bm.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}t===null&&e.f&ii&&(Xn===null||!Xn.includes(e))&&(fi(e,ss),e.f&(rs|Xo)||(e.f^=Xo),Fa(e,0))}function Fa(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)dg(i,t[n])}function ll(i){var e=i.f;if(!(e&ia)){fi(i,In);var t=Nt,n=Ct;Nt=i;try{e&wu?rg(i):Wh(i),Gh(i),zh(i);var r=$h(i);i.teardown=typeof r=="function"?r:null,i.wv=Zh;var s=i.deps,a;_c&&Vm&&i.f&ur}catch(o){ol(o,i,t,n||i.ctx)}finally{Nt=t}}}function ep(){if(Us>1e3){Us=0;try{Om()}catch(i){if(Na!==null)ol(i,Na,null);else throw i}}Us++}function tp(i){var e=i.length;if(e!==0){ep();var t=Ds;Ds=!0;try{for(var n=0;n<e;n++){var r=i[n];r.f&In||(r.f^=In);var s=[];np(r,s),fg(s)}}finally{Ds=t}}}function fg(i){var e=i.length;if(e!==0)for(var t=0;t<e;t++){var n=i[t];if(!(n.f&(ia|Ci)))try{la(n)&&(ll(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Xh(n):n.fn=null))}catch(r){ol(r,n,null,n.ctx)}}}function hg(){if(Oa=!1,Us>1001)return;const i=Zr;Zr=[],tp(i),Oa||(Us=0,Na=null)}function cl(i){Uo===Yh&&(Oa||(Oa=!0,queueMicrotask(hg))),Na=i;for(var e=i;e.parent!==null;){e=e.parent;var t=e.f;if(t&(na|Oi)){if(!(t&In))return;e.f^=In}}Zr.push(e)}function np(i,e){var t=i.first,n=[];e:for(;t!==null;){var r=t.f,s=(r&Oi)!==0,a=s&&(r&In)!==0,o=t.next;if(!a&&!(r&Ci))if(r&Xa){if(s)t.f^=In;else try{la(t)&&ll(t)}catch(d){ol(d,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}else r&bh&&n.push(t);if(o===null){let d=t.parent;for(;d!==null;){if(i===d)break e;var c=d.next;if(c!==null){t=c;continue e}d=d.parent}}t=o}for(var u=0;u<n.length;u++)l=n[u],e.push(l),np(l,e)}function ip(i){var e=Uo,t=Zr;try{ep();const r=[];Uo=ag,Zr=r,Oa=!1,tp(t);var n=i==null?void 0:i();return sg(),(Zr.length>0||r.length>0)&&ip(),Us=0,Na=null,n}finally{Uo=e,Zr=t}}async function pg(){await Promise.resolve(),ip()}function E(i){var u;var e=i.f,t=(e&ii)!==0;if(t&&e&ia){var n=Bh(i);return Du(i),n}if(Ht!==null){Ri!==null&&Ri.includes(i)&&km();var r=Ht.deps;i.rv<qo&&(i.rv=qo,Xn===null&&r!==null&&r[Jn]===i?Jn++:Xn===null?Xn=[i]:Xn.push(i))}else if(t&&i.deps===null)for(var s=i,a=s.parent,o=s;a!==null;)if(a.f&ii){var l=a;o=l,a=l.parent}else{var c=a;(u=c.deriveds)!=null&&u.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return t&&(s=i,la(s)&&kh(s)),i.v}function Ei(i){const e=Ht;try{return Ht=null,i()}finally{Ht=e}}const mg=-7169;function fi(i,e){i.f=i.f&mg|e}function St(i){return rp().get(i)}function Qe(i,e){return rp().set(i,e),e}function rp(i){return Ct===null&&al(),Ct.c??(Ct.c=new Map(gg(Ct)||void 0))}function gg(i){let e=i.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}function Ec(i,e=1){var t=E(i),n=e===1?t++:t--;return Pe(i,t),n}function Rt(i,e=!1,t){Ct={p:Ct,c:null,e:null,m:!1,s:i,x:null,l:null},sa&&!e&&(Ct.l={s:null,u:null,r1:[],r2:Wn(!1)})}function Lt(i){const e=Ct;if(e!==null){i!==void 0&&(e.x=i);const a=e.e;if(a!==null){var t=Nt,n=Ht;e.e=null;try{for(var r=0;r<a.length;r++){var s=a[r];Pi(s.effect),Lr(s.reaction),qa(s.fn)}}finally{Pi(t),Lr(n)}}Ct=e.p,e.m=!0}return i||{}}function Nu(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(Ir in i)Mc(i);else if(!Array.isArray(i))for(let e in i){const t=i[e];typeof t=="object"&&t&&Ir in t&&Mc(t)}}}function Mc(i,e=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!e.has(i)){e.add(i),i instanceof Date&&i.getTime();for(let n in i)try{Mc(i[n],e)}catch{}const t=Au(i);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=Mh(t);for(let r in n){const s=n[r].get;if(s)try{s.call(i)}catch{}}}}}function _g(i){return i.endsWith("capture")&&i!=="gotpointercapture"&&i!=="lostpointercapture"}const vg=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function xg(i){return vg.includes(i)}const yg={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Sg(i){return i=i.toLowerCase(),yg[i]??i}const Eg=["touchstart","touchmove"];function Mg(i){return Eg.includes(i)}function bg(i,e){if(e){const t=document.body;i.autofocus=!0,sl(()=>{document.activeElement===t&&i.focus()})}}let _d=!1;function Tg(){_d||(_d=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{var e;if(!i.defaultPrevented)for(const t of i.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function sp(i){var e=Ht,t=Nt;Lr(null),Pi(null);try{return i()}finally{Lr(e),Pi(t)}}function Ag(i,e,t,n=t){i.addEventListener(e,()=>sp(t));const r=i.__on_r;r?i.__on_r=()=>{r(),n(!0)}:i.__on_r=()=>n(!0),Tg()}const ap=new Set,bc=new Set;function Fu(i,e,t,n){function r(s){if(n.capture||Ia.call(e,s),!s.cancelBubble)return sp(()=>t.call(this,s))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?sl(()=>{e.addEventListener(i,r,n)}):e.addEventListener(i,r,n),r}function wg(i,e,t,n={}){var r=Fu(e,i,t,n);return()=>{i.removeEventListener(e,r,n)}}function Gn(i,e,t,n,r){var s={capture:n,passive:r},a=Fu(i,e,t,s);(e===document.body||e===window||e===document)&&Vh(()=>{e.removeEventListener(i,a,s)})}function Ig(i){for(var e=0;e<i.length;e++)ap.add(i[e]);for(var t of bc)t(i)}function Ia(i){var y;var e=this,t=e.ownerDocument,n=i.type,r=((y=i.composedPath)==null?void 0:y.call(i))||[],s=r[0]||i.target,a=0,o=i.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){i.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||i.target,s!==e){Eh(i,"currentTarget",{configurable:!0,get(){return s||t}});var u=Ht,d=Nt;Lr(null),Pi(null);try{for(var f,h=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var _=s["__"+n];if(_!==void 0&&!s.disabled)if(Wa(_)){var[m,...p]=_;m.apply(s,[i,...p])}else _.call(s,i)}catch(S){f?h.push(S):f=S}if(i.cancelBubble||g===e||g===null)break;s=g}if(f){for(let S of h)queueMicrotask(()=>{throw S});throw f}}finally{i.__root=e,delete i.currentTarget,Lr(u),Pi(d)}}}function Bu(i){var e=document.createElement("template");return e.innerHTML=i,e.content}function Pr(i,e){var t=Nt;t.nodes_start===null&&(t.nodes_start=i,t.nodes_end=e)}function Ce(i,e){var t=(e&Rh)!==0,n=(e&Ym)!==0,r,s=!i.startsWith("<!>");return()=>{r===void 0&&(r=Bu(s?i:"<!>"+i),t||(r=Qn(r)));var a=n?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Qn(a),l=a.lastChild;Pr(o,l)}else Pr(a,a);return a}}function Ur(i,e,t="svg"){var n=!i.startsWith("<!>"),r=(e&Rh)!==0,s=`<${t}>${n?i:"<!>"+i}</${t}>`,a;return()=>{if(!a){var o=Bu(s),l=Qn(o);if(r)for(a=document.createDocumentFragment();Qn(l);)a.appendChild(Qn(l));else a=Qn(l)}var c=a.cloneNode(!0);if(r){var u=Qn(c),d=c.lastChild;Pr(u,d)}else Pr(c,c);return c}}function zt(i=""){{var e=ja(i+"");return Pr(e,e),e}}function We(){var i=document.createDocumentFragment(),e=document.createComment(""),t=ja();return i.append(e,t),Pr(e,t),i}function Z(i,e){i!==null&&i.before(e)}function wn(i,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(i.__t??(i.__t=i.nodeValue))&&(i.__t=t,i.nodeValue=t==null?"":t+"")}function Cg(i,e){return Rg(i,e)}const us=new Map;function Rg(i,{target:e,anchor:t,props:n={},events:r,context:s,intro:a=!0}){Zm();var o=new Set,l=d=>{for(var f=0;f<d.length;f++){var h=d[f];if(!o.has(h)){o.add(h);var g=Mg(h);e.addEventListener(h,Ia,{passive:g});var _=us.get(h);_===void 0?(document.addEventListener(h,Ia,{passive:g}),us.set(h,1)):us.set(h,_+1)}}};l(Tu(ap)),bc.add(l);var c=void 0,u=tg(()=>{var d=t??e.appendChild(ja());return or(()=>{if(s){Rt({});var f=Ct;f.c=s}r&&(n.$$events=r),c=i(d,n)||{},s&&Lt()}),()=>{var g;for(var f of o){e.removeEventListener(f,Ia);var h=us.get(f);--h===0?(document.removeEventListener(f,Ia),us.delete(f)):us.set(f,h)}bc.delete(l),d!==t&&((g=d.parentNode)==null||g.removeChild(d))}});return Lg.set(c,u),c}let Lg=new WeakMap;function Ke(i,e,t=!1){var n=i,r=null,s=null,a=zn,o=t?ra:0,l=!1;const c=(d,f=!0)=>{l=!0,u(f,d)},u=(d,f)=>{a!==(a=d)&&(a?(r?Ua(r):f&&(r=or(()=>f(n))),s&&Vs(s,()=>{s=null})):(s?Ua(s):f&&(s=or(()=>f(n))),r&&Vs(r,()=>{r=null})))};as(()=>{l=!1,e(c),l||u(null,null)},o)}function zs(i,e){return e}function Pg(i,e,t,n){for(var r=[],s=e.length,a=0;a<s;a++)Uu(e[a].e,r,!0);var o=s>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;Jm(l),l.append(t),n.clear(),Er(i,e[0].prev,e[s-1].next)}jh(r,()=>{for(var c=0;c<s;c++){var u=e[c];o||(n.delete(u.k),Er(i,u.prev,u.next)),Si(u.e,!o)}})}function Gs(i,e,t,n,r,s=null){var a=i,o={flags:e,items:new Map,first:null},l=(e&Ih)!==0;if(l){var c=i;a=c.appendChild(ja())}var u=null,d=!1,f=Pu(()=>{var h=t();return Wa(h)?h:h==null?[]:Tu(h)});as(()=>{var h=E(f),g=h.length;if(!(d&&g===0)){d=g===0;{var _=Ht;Dg(h,o,a,r,e,(_.f&Ci)!==0,n)}s!==null&&(g===0?u?Ua(u):u=or(()=>s(a)):u!==null&&Vs(u,()=>{u=null})),E(f)}})}function Dg(i,e,t,n,r,s,a,o){var H,F,V,z;var l=(r&Gm)!==0,c=(r&(Ru|Lu))!==0,u=i.length,d=e.items,f=e.first,h=f,g,_=null,m,p=[],y=[],S,v,w,T;if(l)for(T=0;T<u;T+=1)S=i[T],v=a(S,T),w=d.get(v),w!==void 0&&((H=w.a)==null||H.measure(),(m??(m=new Set)).add(w));for(T=0;T<u;T+=1){if(S=i[T],v=a(S,T),w=d.get(v),w===void 0){var I=h?h.e.nodes_start:t;_=Og(I,e,_,_===null?e.first:_.next,S,v,T,n,r),d.set(v,_),p=[],y=[],h=_.next;continue}if(c&&Ug(w,S,T,r),w.e.f&Ci&&(Ua(w.e),l&&((F=w.a)==null||F.unfix(),(m??(m=new Set)).delete(w))),w!==h){if(g!==void 0&&g.has(w)){if(p.length<y.length){var b=y[0],x;_=b.prev;var M=p[0],P=p[p.length-1];for(x=0;x<p.length;x+=1)vd(p[x],b,t);for(x=0;x<y.length;x+=1)g.delete(y[x]);Er(e,M.prev,P.next),Er(e,_,M),Er(e,P,b),h=b,_=P,T-=1,p=[],y=[]}else g.delete(w),vd(w,h,t),Er(e,w.prev,w.next),Er(e,w,_===null?e.first:_.next),Er(e,_,w),_=w;continue}for(p=[],y=[];h!==null&&h.k!==v;)(s||!(h.e.f&Ci))&&(g??(g=new Set)).add(h),y.push(h),h=h.next;if(h===null)continue;w=h}p.push(w),_=w,h=w.next}if(h!==null||g!==void 0){for(var U=g===void 0?[]:Tu(g);h!==null;)(s||!(h.e.f&Ci))&&U.push(h),h=h.next;var L=U.length;if(L>0){var Y=r&Ih&&u===0?t:null;if(l){for(T=0;T<L;T+=1)(V=U[T].a)==null||V.measure();for(T=0;T<L;T+=1)(z=U[T].a)==null||z.fix()}Pg(e,U,Y,d)}}l&&sl(()=>{var oe;if(m!==void 0)for(w of m)(oe=w.a)==null||oe.apply()}),Nt.first=e.first&&e.first.e,Nt.last=_&&_.e}function Ug(i,e,t,n){n&Ru&&yc(i.v,e),n&Lu?yc(i.i,t):i.i=t}function Og(i,e,t,n,r,s,a,o,l,c){var u=(l&Ru)!==0,d=(l&Wm)===0,f=u?d?il(r):Wn(r):r,h=l&Lu?Wn(a):a,g={i:h,v:f,k:s,a:null,e:null,prev:t,next:n};try{return g.e=or(()=>o(i,f,h),Dh),g.e.prev=t&&t.e,g.e.next=n&&n.e,t===null?e.first=g:(t.next=g,t.e.next=g.e),n!==null&&(n.prev=g,n.e.prev=g.e),g}finally{}}function vd(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=i.e.nodes_start;s!==n;){var a=rl(s);r.before(s),s=a}}function Er(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function op(i,e,t,n,r){var s=i,a="",o;as(()=>{a!==(a=e()??"")&&(o!==void 0&&(Si(o),o=void 0),a!==""&&(o=or(()=>{var l=a+"";t&&(l=`<svg>${l}</svg>`);var c=Bu(l);if((t||n)&&(c=Qn(c)),Pr(Qn(c),c.lastChild),t||n)for(;Qn(c);)s.before(Qn(c));else s.before(c)})))})}function Ko(i,e,t,n,r){var o;var s=(o=e.$$slots)==null?void 0:o[t],a=!1;s===!0&&(s=e[t==="default"?"children":t],a=!0),s===void 0||s(i,a?()=>n:n)}function Ng(i){const e={};i.children&&(e.default=!0);for(const t in i.$$slots)e[t]=!0;return e}function ut(i,e,...t){var n=i,r=rt,s;as(()=>{r!==(r=e())&&(s&&(Si(s),s=null),s=or(()=>r(n,...t)))},ra)}function ul(i,e,t){var n=i,r,s;as(()=>{r!==(r=e())&&(s&&(Vs(s),s=null),r&&(s=or(()=>t(n,r))))},ra)}function xd(i,e,t,n,r,s){var a,o,l=null,c=i,u;as(()=>{const d=e()||null;var f=d==="svg"?xc:null;d!==a&&(u&&(d===null?Vs(u,()=>{u=null,o=null}):d===o?Ua(u):Si(u)),d&&d!==o&&(u=or(()=>{if(l=f?document.createElementNS(f,d):document.createElement(d),Pr(l,l),n){var h=l.appendChild(ja());n(l,h)}Nt.nodes_end=l,c.before(l)})),a=d,a&&(o=a))},ra)}function kt(i,e,t){qa(()=>{var n=Ei(()=>e(i,t==null?void 0:t())||{});if(t&&(n!=null&&n.update)){var r=!1,s={};oa(()=>{var a=t();Nu(a),r&&Iu(s,a)&&(s=a,n.update(a))}),r=!0}if(n!=null&&n.destroy)return()=>n.destroy()})}function lp(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=lp(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function Fg(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=lp(i))&&(n&&(n+=" "),n+=e);return n}function cp(i){return typeof i=="object"?Fg(i):i??""}function Bg(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function ei(i,e,t,n){var r=i.__attributes??(i.__attributes={});r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[Lm]=t),t==null?i.removeAttribute(e):typeof t!="string"&&up(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Zt(i,e,t,n,r=!1,s=!1,a=!1){var o=e||{},l=i.tagName==="OPTION";for(var c in e)c in t||(t[c]=null);t.class&&(t.class=cp(t.class)),n!==void 0&&(t.class=t.class?t.class+" "+n:n);var u=up(i),d=i.__attributes??(i.__attributes={});for(const y in t){let S=t[y];if(l&&y==="value"&&S==null){i.value=i.__value="",o[y]=S;continue}var f=o[y];if(S!==f){o[y]=S;var h=y[0]+y[1];if(h!=="$$"){if(h==="on"){const v={},w="$$"+y;let T=y.slice(2);var g=xg(T);if(_g(T)&&(T=T.slice(0,-7),v.capture=!0),!g&&f){if(S!=null)continue;i.removeEventListener(T,o[w],v),o[w]=null}if(S!=null)if(g)i[`__${T}`]=S,Ig([T]);else{let I=function(b){o[y].call(this,b)};var p=I;o[w]=Fu(T,i,I,v)}else g&&(i[`__${T}`]=void 0)}else if(y==="style"&&S!=null)i.style.cssText=S+"";else if(y==="autofocus")bg(i,!!S);else if(y==="__value"||y==="value"&&S!=null)i.value=i[y]=i.__value=S;else if(y==="selected"&&l)Bg(i,S);else{var _=y;r||(_=Sg(_));var m=_==="defaultValue"||_==="defaultChecked";if(S==null&&!s&&!m)if(d[y]=null,_==="value"||_==="checked"){let v=i;if(_==="value"){let w=v.defaultValue;v.removeAttribute(_),v.defaultValue=w}else{let w=v.defaultChecked;v.removeAttribute(_),v.defaultChecked=w}}else i.removeAttribute(y);else m||u.includes(_)&&(s||typeof S!="string")?i[_]=S:typeof S!="function"&&ei(i,_,S)}y==="style"&&"__styles"in i&&(i.__styles={})}}}return o}var yd=new Map;function up(i){var e=yd.get(i.nodeName);if(e)return e;yd.set(i.nodeName,e=[]);for(var t,n=i,r=Element.prototype;r!==n;){t=Mh(n);for(var s in t)t[s].set&&e.push(s);n=Au(n)}return e}function ts(i,e,t){var n=i.__className,r=kg(e);(n!==r||Dh)&&(e==null?i.removeAttribute("class"):i.className=r,i.__className=r)}function kg(i,e){return(i??"")+""}function $i(i,e,t){if(t){if(i.classList.contains(e))return;i.classList.add(e)}else{if(!i.classList.contains(e))return;i.classList.remove(e)}}function Hg(i,e,t=e){var n=Ka();Ag(i,"input",r=>{var s=r?i.defaultValue:i.value;if(s=yl(i)?Sl(s):s,t(s),n&&s!==(s=e())){var a=i.selectionStart,o=i.selectionEnd;i.value=s??"",o!==null&&(i.selectionStart=a,i.selectionEnd=Math.min(o,i.value.length))}}),Ei(e)==null&&i.value&&t(yl(i)?Sl(i.value):i.value),oa(()=>{var r=e();yl(i)&&r===Sl(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function yl(i){var e=i.type;return e==="number"||e==="range"}function Sl(i){return i===""?null:+i}function Sd(i,e){return i===e||(i==null?void 0:i[Ir])===e}function xt(i={},e,t,n){return qa(()=>{var r,s;return oa(()=>{r=s,s=[],Ei(()=>{i!==t(...s)&&(e(i,...s),r&&Sd(t(...r),i)&&e(null,...r))})}),()=>{sl(()=>{s&&Sd(t(...s),i)&&e(null,...s)})}}),i}function ca(i=!1){const e=Ct,t=e.l.u;if(!t)return;let n=()=>Nu(e.s);if(i){let r=0,s={};const a=Ve(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});n=()=>E(a)}t.b.length&&eg(()=>{Ed(e,n),vc(t.b)}),bt(()=>{const r=Ei(()=>t.m.map(wm));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&bt(()=>{Ed(e,n),vc(t.a)})}function Ed(i,e){if(i.l.s)for(const t of i.l.s)E(t);e()}function Gi(i,e){var s;var t=(s=i.$$events)==null?void 0:s[e.type],n=Wa(t)?t.slice():t==null?[]:[t];for(var r of n)r.call(this,e)}function dp(i,e,t){if(i==null)return e(void 0),rt;const n=Ei(()=>i.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const ds=[];function Tc(i,e=rt){let t=null;const n=new Set;function r(o){if(Iu(i,o)&&(i=o,t)){const l=!ds.length;for(const c of n)c[1](),ds.push(c,i);if(l){for(let c=0;c<ds.length;c+=2)ds[c][0](ds[c+1]);ds.length=0}}}function s(o){r(o(i))}function a(o,l=rt){const c=[o,l];return n.add(c),n.size===1&&(t=e(r,s)||rt),o(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}function Vg(i){let e;return dp(i,t=>e=t)(),e}let $a=!1,Ac=Symbol();function fp(i,e,t){const n=t[e]??(t[e]={store:null,source:il(void 0),unsubscribe:rt});if(n.store!==i&&!(Ac in t))if(n.unsubscribe(),n.store=i??null,i==null)n.source.v=void 0,n.unsubscribe=rt;else{var r=!0;n.unsubscribe=dp(i,s=>{r?n.source.v=s:Pe(n.source,s)}),r=!1}return i&&Ac in t?Vg(i):E(n.source)}function Yo(i,e){return i.set(e),e}function ku(){const i={};function e(){Vh(()=>{for(var t in i)i[t].unsubscribe();Eh(i,Ac,{enumerable:!1,value:!0})})}return[i,e]}function zg(i){var e=$a;try{return $a=!1,[i(),$a]}finally{$a=e}}const Gg={get(i,e){if(!i.exclude.includes(e))return i.props[e]},set(i,e){return!1},getOwnPropertyDescriptor(i,e){if(!i.exclude.includes(e)&&e in i.props)return{enumerable:!0,configurable:!0,value:i.props[e]}},has(i,e){return i.exclude.includes(e)?!1:e in i.props},ownKeys(i){return Reflect.ownKeys(i.props).filter(e=>!i.exclude.includes(e))}};function hn(i,e,t){return new Proxy({props:i,exclude:e},Gg)}const Wg={get(i,e){if(!i.exclude.includes(e))return E(i.version),e in i.special?i.special[e]():i.props[e]},set(i,e,t){return e in i.special||(i.special[e]=O({get[e](){return i.props[e]}},e,Ch)),i.special[e](t),Ec(i.version),!0},getOwnPropertyDescriptor(i,e){if(!i.exclude.includes(e)&&e in i.props)return{enumerable:!0,configurable:!0,value:i.props[e]}},deleteProperty(i,e){return i.exclude.includes(e)||(i.exclude.push(e),Ec(i.version)),!0},has(i,e){return i.exclude.includes(e)?!1:e in i.props},ownKeys(i){return Reflect.ownKeys(i.props).filter(e=>!i.exclude.includes(e))}};function Ba(i,e){return new Proxy({props:i,exclude:e,special:{},version:Wn(0)},Wg)}const Xg={get(i,e){let t=i.props.length;for(;t--;){let n=i.props[t];if(ma(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(i,e,t){let n=i.props.length;for(;n--;){let r=i.props[n];ma(r)&&(r=r());const s=wr(r,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(i,e){let t=i.props.length;for(;t--;){let n=i.props[t];if(ma(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const r=wr(n,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(i,e){if(e===Ir||e===Ah)return!1;for(let t of i.props)if(ma(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(i){const e=[];for(let t of i.props){ma(t)&&(t=t());for(const n in t)e.includes(n)||e.push(n)}return e}};function qt(...i){return new Proxy({props:i},Xg)}function Md(i){for(var e=Nt,t=Nt;e!==null&&!(e.f&(Oi|na));)e=e.parent;try{return Pi(e),i()}finally{Pi(t)}}function O(i,e,t,n){var I;var r=(t&Xm)!==0,s=!sa||(t&jm)!==0,a=(t&qm)!==0,o=(t&Km)!==0,l=!1,c;a?[c,l]=zg(()=>i[e]):c=i[e];var u=Ir in i||Ah in i,d=a&&(((I=wr(i,e))==null?void 0:I.set)??(u&&e in i&&(b=>i[e]=b)))||void 0,f=n,h=!0,g=!1,_=()=>(g=!0,h&&(h=!1,o?f=Ei(n):f=n),f);c===void 0&&n!==void 0&&(d&&s&&Nm(),c=_(),d&&d(c));var m;if(s)m=()=>{var b=i[e];return b===void 0?_():(h=!0,g=!1,b)};else{var p=Md(()=>(r?Ve:Pu)(()=>i[e]));p.f|=Cm,m=()=>{var b=E(p);return b!==void 0&&(f=void 0),b===void 0?f:b}}if(!(t&Ch))return m;if(d){var y=i.$$legacy;return function(b,x){return arguments.length>0?((!s||!x||y||l)&&d(x?m():b),b):m()}}var S=!1,v=!1,w=il(c),T=Md(()=>Ve(()=>{var b=m(),x=E(w);return S?(S=!1,v=!0,x):(v=!1,w.v=b)}));return r||(T.equals=Cu),function(b,x){if(arguments.length>0){const M=x?E(T):s&&a?Ne(b):b;return T.equals(M)||(S=!0,Pe(w,M),g&&f!==void 0&&(f=M),Ei(()=>E(T))),b}return E(T)}}function Cn(i){Ct===null&&al(),sa&&Ct.l!==null?Kg(Ct).m.push(i):bt(()=>{const e=Ei(i);if(typeof e=="function")return e})}function dr(i){Ct===null&&al(),Cn(()=>()=>Ei(i))}function jg(i,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(i,{detail:e,bubbles:t,cancelable:n})}function qg(){const i=Ct;return i===null&&al(),(e,t,n)=>{var s;const r=(s=i.s.$$events)==null?void 0:s[e];if(r){const a=Wa(r)?r.slice():[r],o=jg(e,t,n);for(const l of a)l.call(i.x,o);return!o.defaultPrevented}return!0}}function Kg(i){var e=i.l;return e.u??(e.u={a:[],b:[],m:[]})}const Yg="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yg);zm();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="172",Os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zg=0,bd=1,Jg=2,hp=1,Qg=2,Qi=3,lr=0,jn=1,Ii=2,Cr=0,Ns=1,Td=2,Ad=3,wd=4,$g=5,Kr=100,e_=101,t_=102,n_=103,i_=104,r_=200,s_=201,a_=202,o_=203,wc=204,Ic=205,l_=206,c_=207,u_=208,d_=209,f_=210,h_=211,p_=212,m_=213,g_=214,Cc=0,Rc=1,Lc=2,Ws=3,Pc=4,Dc=5,Uc=6,Oc=7,pp=0,__=1,v_=2,Rr=0,x_=1,y_=2,S_=3,E_=4,M_=5,b_=6,T_=7,Id="attached",A_="detached",mp=300,Xs=301,js=302,Nc=303,Fc=304,dl=306,qs=1e3,Tr=1001,Zo=1002,On=1003,gp=1004,Ca=1005,ti=1006,Oo=1007,nr=1008,cr=1009,_p=1010,vp=1011,ka=1012,Vu=1013,ns=1014,xi=1015,Ya=1016,zu=1017,Gu=1018,Ks=1020,xp=35902,yp=1021,Sp=1022,di=1023,Ep=1024,Mp=1025,Fs=1026,Ys=1027,Wu=1028,Xu=1029,bp=1030,ju=1031,qu=1033,No=33776,Fo=33777,Bo=33778,ko=33779,Bc=35840,kc=35841,Hc=35842,Vc=35843,zc=36196,Gc=37492,Wc=37496,Xc=37808,jc=37809,qc=37810,Kc=37811,Yc=37812,Zc=37813,Jc=37814,Qc=37815,$c=37816,eu=37817,tu=37818,nu=37819,iu=37820,ru=37821,Ho=36492,su=36494,au=36495,Tp=36283,ou=36284,lu=36285,cu=36286,Ha=2300,Va=2301,El=2302,Cd=2400,Rd=2401,Ld=2402,w_=2500,I_=0,Ap=1,uu=2,C_=3200,R_=3201,wp=0,L_=1,br="",En="srgb",Fn="srgb-linear",Jo="linear",Ft="srgb",fs=7680,Pd=519,P_=512,D_=513,U_=514,Ip=515,O_=516,N_=517,F_=518,B_=519,du=35044,Dd="300 es",ir=2e3,Qo=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ud=1234567;const La=Math.PI/180,Zs=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Ku(i,e){return(i%e+e)%e}function k_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function H_(i,e,t){return i!==e?(t-i)/(e-i):0}function Pa(i,e,t){return(1-t)*i+t*e}function V_(i,e,t,n){return Pa(i,e,1-Math.exp(-t*n))}function z_(i,e=1){return e-Math.abs(Ku(i,e*2)-e)}function G_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function W_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function X_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function j_(i,e){return i+Math.random()*(e-i)}function q_(i){return i*(.5-Math.random())}function K_(i){i!==void 0&&(Ud=i);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(i){return i*La}function Z_(i){return i*Zs}function J_(i){return(i&i-1)===0&&i!==0}function Q_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ev(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yu={DEG2RAD:La,RAD2DEG:Zs,generateUUID:yi,clamp:gt,euclideanModulo:Ku,mapLinear:k_,inverseLerp:H_,lerp:Pa,damp:V_,pingpong:z_,smoothstep:G_,smootherstep:W_,randInt:X_,randFloat:j_,randFloatSpread:q_,seededRandom:K_,degToRad:Y_,radToDeg:Z_,isPowerOfTwo:J_,ceilPowerOfTwo:Q_,floorPowerOfTwo:$_,setQuaternionFromProperEuler:ev,normalize:Ut,denormalize:_i};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,n,r,s,a,o,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],S=r[4],v=r[7],w=r[2],T=r[5],I=r[8];return s[0]=a*_+o*y+l*w,s[3]=a*m+o*S+l*T,s[6]=a*p+o*v+l*I,s[1]=c*_+u*y+d*w,s[4]=c*m+u*S+d*T,s[7]=c*p+u*v+d*I,s[2]=f*_+h*y+g*w,s[5]=f*m+h*S+g*T,s[8]=f*p+h*v+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=t*d+n*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new ct;function Cp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tv(){const i=za("canvas");return i.style.display="block",i}const Od={};function Cs(i){i in Od||(Od[i]=!0,console.warn(i))}function nv(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function iv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nd=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sv(){const i={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ft&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ft&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?Jo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fn]:{primaries:e,whitePoint:n,transfer:Jo,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const wt=sv();function sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class av{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=za("canvas")),hs.width=e.width,hs.height=e.height;const n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=sr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ov=0;class Rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bl(r[a].image)):s.push(bl(r[a]))}else s=bl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?av.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lv=0;class _n extends os{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=Tr,r=Tr,s=ti,a=nr,o=di,l=cr,c=_n.DEFAULT_ANISOTROPY,u=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=yi(),this.name="",this.source=new Rp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=mp;_n.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(h+1)/2,w=(p+1)/2,T=(u+f)/4,I=(d+_)/4,b=(g+m)/4;return S>v&&S>w?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=I/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=b/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=I/s,r=b/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cv extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Rp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends cv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lp extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uv extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==h||u!==g){let m=1-o;const p=l*f+c*h+u*g+d*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),T=Math.atan2(w,p*y);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}const v=o*y;if(l=l*m+f*v,c=c*m+h*v,u=u*m+g*v,d=d*m+_*v,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-o*h,e[t+2]=c*g+u*h+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),f=l(n/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new W,Bd=new Di;class fr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),to.subVectors(this.max,ga),ps.subVectors(e.a,ga),ms.subVectors(e.b,ga),gs.subVectors(e.c,ga),hr.subVectors(ms,ps),pr.subVectors(gs,ms),Fr.subVectors(ps,gs);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Fr.z,Fr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Fr.z,0,-Fr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Fr.y,Fr.x,0];return!Al(t,ps,ms,gs,to)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,ps,ms,gs,to))?!1:(no.crossVectors(hr,pr),t=[no.x,no.y,no.z],Al(t,ps,ms,gs,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new W,new W,new W,new W,new W,new W,new W,new W],hi=new W,eo=new fr,ps=new W,ms=new W,gs=new W,hr=new W,pr=new W,Fr=new W,ga=new W,to=new W,no=new W,Br=new W;function Al(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Br.fromArray(i,s);const o=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=t.dot(Br),u=n.dot(Br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dv=new fr,_a=new W,wl=new W;class Ni{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_a,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(wl)),this.expandByPoint(_a.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new W,Il=new W,io=new W,mr=new W,Cl=new W,ro=new W,Rl=new W;class Za{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Il.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Il);const s=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=mr.dot(this.direction),l=-mr.dot(io),c=mr.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Il).addScaledVector(io,f),h}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),r=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,r,s){Cl.subVectors(t,e),ro.subVectors(n,e),Rl.crossVectors(Cl,ro);let a=this.direction.dot(Rl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mr.subVectors(this.origin,e);const l=o*this.direction.dot(ro.crossVectors(mr,ro));if(l<0)return null;const c=o*this.direction.dot(Cl.cross(mr));if(c<0||l+c>a)return null;const u=-o*mr.dot(Rl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,r,s,a,o,l,c,u,d,f,h,g,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,f,h,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fv,e,hv)}lookAt(e,t,n){const r=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),gr.crossVectors(n,Yn),gr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),gr.crossVectors(n,Yn)),gr.normalize(),so.crossVectors(Yn,gr),r[0]=gr.x,r[4]=so.x,r[8]=Yn.x,r[1]=gr.y,r[5]=so.y,r[9]=Yn.y,r[2]=gr.z,r[6]=so.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],v=n[11],w=n[15],T=r[0],I=r[4],b=r[8],x=r[12],M=r[1],P=r[5],U=r[9],L=r[13],Y=r[2],H=r[6],F=r[10],V=r[14],z=r[3],oe=r[7],ee=r[11],ge=r[15];return s[0]=a*T+o*M+l*Y+c*z,s[4]=a*I+o*P+l*H+c*oe,s[8]=a*b+o*U+l*F+c*ee,s[12]=a*x+o*L+l*V+c*ge,s[1]=u*T+d*M+f*Y+h*z,s[5]=u*I+d*P+f*H+h*oe,s[9]=u*b+d*U+f*F+h*ee,s[13]=u*x+d*L+f*V+h*ge,s[2]=g*T+_*M+m*Y+p*z,s[6]=g*I+_*P+m*H+p*oe,s[10]=g*b+_*U+m*F+p*ee,s[14]=g*x+_*L+m*V+p*ge,s[3]=y*T+S*M+v*Y+w*z,s[7]=y*I+S*P+v*H+w*oe,s[11]=y*b+S*U+v*F+w*ee,s[15]=y*x+S*L+v*V+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*h-n*l*h)+_*(+t*l*h-t*c*f+s*a*f-r*a*h+r*c*u-s*l*u)+m*(+t*c*d-t*o*h-s*a*d+n*a*h+s*o*u-n*c*u)+p*(-r*o*u-t*l*d+t*o*f+r*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=d*m*c-_*f*c+_*l*h-o*m*h-d*l*p+o*f*p,S=g*f*c-u*m*c-g*l*h+a*m*h+u*l*p-a*f*p,v=u*_*c-g*d*c+g*o*h-a*_*h-u*o*p+a*d*p,w=g*d*l-u*_*l-g*o*f+a*_*f+u*o*m-a*d*m,T=t*y+n*S+r*v+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/T;return e[0]=y*I,e[1]=(_*f*s-d*m*s-_*r*h+n*m*h+d*r*p-n*f*p)*I,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*I,e[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*h-n*l*h)*I,e[4]=S*I,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*I,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*I,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*h+t*l*h)*I,e[8]=v*I,e[9]=(g*d*s-u*_*s-g*n*h+t*_*h+u*n*p-t*d*p)*I,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*I,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*h-t*o*h)*I,e[12]=w*I,e[13]=(u*_*r-g*d*r+g*n*f-t*_*f-u*n*m+t*d*m)*I,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*I,e[15]=(a*d*r-u*o*r+u*n*l-t*d*l-a*n*f+t*o*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,_=a*u,m=a*d,p=o*d,y=l*c,S=l*u,v=l*d,w=n.x,T=n.y,I=n.z;return r[0]=(1-(_+p))*w,r[1]=(h+v)*w,r[2]=(g-S)*w,r[3]=0,r[4]=(h-v)*T,r[5]=(1-(f+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+S)*I,r[9]=(m-y)*I,r[10]=(1-(f+_))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),o=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);const c=1/s,u=1/a,d=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ir){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let h,g;if(o===ir)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Qo)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ir){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(a-s),f=(t+e)*c,h=(n+r)*u;let g,_;if(o===ir)g=(a+s)*d,_=-2*d;else if(o===Qo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new W,pi=new ft,fv=new W(0,0,0),hv=new W(1,1,1),gr=new W,so=new W,Yn=new W,kd=new ft,Hd=new Di;class Ui{constructor(e=0,t=0,n=0,r=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pv=0;const Vd=new W,vs=new Di,ji=new ft,ao=new W,va=new W,mv=new W,gv=new Di,zd=new W(1,0,0),Gd=new W(0,1,0),Wd=new W(0,0,1),Xd={type:"added"},_v={type:"removed"},xs={type:"childadded",child:null},Ll={type:"childremoved",child:null};class Jt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new W,t=new Ui,n=new Di,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ct}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(zd,e)}rotateY(e){return this.rotateOnAxis(Gd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Vd.copy(e).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zd,e)}translateY(e){return this.translateOnAxis(Gd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(va,ao,this.up):ji.lookAt(ao,va,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(ji),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_v),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new W(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new W,qi=new W,Pl=new W,Ki=new W,ys=new W,Ss=new W,jd=new W,Dl=new W,Ul=new W,Ol=new W,Nl=new Pt,Fl=new Pt,Bl=new Pt;class vi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mi.subVectors(e,t),r.cross(mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){mi.subVectors(r,t),qi.subVectors(n,t),Pl.subVectors(e,t);const a=mi.dot(mi),o=mi.dot(qi),l=mi.dot(Pl),c=qi.dot(qi),u=qi.dot(Pl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Nl.setScalar(0),Fl.setScalar(0),Bl.setScalar(0),Nl.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,n),Bl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nl,s.x),a.addScaledVector(Fl,s.y),a.addScaledVector(Bl,s.z),a}static isFrontFacing(e,t,n,r){return mi.subVectors(n,t),qi.subVectors(e,t),mi.cross(qi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),mi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ys.subVectors(r,n),Ss.subVectors(s,n),Dl.subVectors(e,n);const l=ys.dot(Dl),c=Ss.dot(Dl);if(l<=0&&c<=0)return t.copy(n);Ul.subVectors(e,r);const u=ys.dot(Ul),d=Ss.dot(Ul);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ys,a);Ol.subVectors(e,s);const h=ys.dot(Ol),g=Ss.dot(Ol);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return jd.subVectors(s,r),o=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(jd,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(ys,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},oo={h:0,s:0,l:0};function kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=wt.workingColorSpace){if(e=Ku(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=kl(a,s,e+1/3),this.g=kl(a,s,e),this.b=kl(a,s,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return wt.fromWorkingColorSpace(An.copy(this),e),Math.round(gt(An.r*255,0,255))*65536+Math.round(gt(An.g*255,0,255))*256+Math.round(gt(An.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(An.copy(this),t);const n=An.r,r=An.g,s=An.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=En){wt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,n=An.g,r=An.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(oo);const n=Pa(_r.h,oo.h,t),r=Pa(_r.s,oo.s,t),s=Pa(_r.l,oo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new st;st.NAMES=Dp;let vv=0;class Li extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Ns,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ic,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ic&&(n.blendDst=this.blendDst),this.blendEquation!==Kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qr extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new W,lo=new nt;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=du,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),e}}class Up extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Op extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ar extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xv=0;const li=new ft,Hl=new Jt,Es=new W,Zn=new fr,xa=new fr,gn=new W;class Fi extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?Op:Up)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ar(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Zn.min,xa.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,xa.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(xa.min),Zn.expandByPoint(xa.max))}Zn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),gn.add(Es)),r=Math.max(r,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new W,l[b]=new W;const c=new W,u=new W,d=new W,f=new nt,h=new nt,g=new nt,_=new W,m=new W;function p(b,x,M){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,M),f.fromBufferAttribute(s,b),h.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(P),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),o[b].add(_),o[x].add(_),o[M].add(_),l[b].add(m),l[x].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let b=0,x=y.length;b<x;++b){const M=y[b],P=M.start,U=M.count;for(let L=P,Y=P+U;L<Y;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new W,v=new W,w=new W,T=new W;function I(b){w.fromBufferAttribute(r,b),T.copy(w);const x=o[b];S.copy(x),S.sub(w.multiplyScalar(w.dot(x))).normalize(),v.crossVectors(T,x);const P=v.dot(l[b])<0?-1:1;a.setXYZW(b,S.x,S.y,S.z,P)}for(let b=0,x=y.length;b<x;++b){const M=y[b],P=M.start,U=M.count;for(let L=P,Y=P+U;L<Y;L+=3)I(e.getX(L+0)),I(e.getX(L+1)),I(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Nn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new ft,kr=new Za,co=new Ni,Kd=new W,uo=new W,fo=new W,ho=new W,Vl=new W,po=new W,Yd=new W,mo=new W;class ni extends Jt{constructor(e=new Fi,t=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Vl.fromBufferAttribute(d,e),a?po.addScaledVector(Vl,u):po.addScaledVector(Vl.sub(t),u))}t.add(po)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(co.containsPoint(kr.origin)===!1&&(kr.intersectSphere(co,Kd)===null||kr.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&(qd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let v=y,w=S;v<w;v+=3){const T=o.getX(v),I=o.getX(v+1),b=o.getX(v+2);r=go(this,p,e,n,c,u,d,T,I,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);r=go(this,a,e,n,c,u,d,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=y,w=S;v<w;v+=3){const T=v,I=v+1,b=v+2;r=go(this,p,e,n,c,u,d,T,I,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,v=m+2;r=go(this,a,e,n,c,u,d,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yv(i,e,t,n,r,s,a,o){let l;if(e.side===jn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;mo.copy(o),mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:i}}function go(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,uo),i.getVertexPosition(l,fo),i.getVertexPosition(c,ho);const u=yv(i,e,t,n,uo,fo,ho,Yd);if(u){const d=new W;vi.getBarycoord(Yd,uo,fo,ho,d),r&&(u.uv=vi.getInterpolatedAttribute(r,o,l,c,d,new nt)),s&&(u.uv1=vi.getInterpolatedAttribute(s,o,l,c,d,new nt)),a&&(u.normal=vi.getInterpolatedAttribute(a,o,l,c,d,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};vi.getNormal(uo,fo,ho,f.normal),u.face=f,u.barycoord=d}return u}class Ja extends Fi{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ar(c,3)),this.setAttribute("normal",new ar(u,3)),this.setAttribute("uv",new ar(d,2));function g(_,m,p,y,S,v,w,T,I,b,x){const M=v/I,P=w/b,U=v/2,L=w/2,Y=T/2,H=I+1,F=b+1;let V=0,z=0;const oe=new W;for(let ee=0;ee<F;ee++){const ge=ee*P-L;for(let be=0;be<H;be++){const qe=be*M-U;oe[_]=qe*y,oe[m]=ge*S,oe[p]=Y,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=T>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(be/I),d.push(1-ee/b),V+=1}}for(let ee=0;ee<b;ee++)for(let ge=0;ge<I;ge++){const be=f+ge+H*ee,qe=f+ge+H*(ee+1),ne=f+(ge+1)+H*(ee+1),re=f+(ge+1)+H*ee;l.push(be,qe,re),l.push(qe,ne,re),z+=6}o.addGroup(h,z,x),h+=z,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pn(i){const e={};for(let t=0;t<i.length;t++){const n=Js(i[t]);for(const r in n)e[r]=n[r]}return e}function Sv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Np(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Ev={clone:Js,merge:Pn};var Mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mv,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new W,Zd=new nt,Jd=new nt;class Dn extends Fp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,Jd),t.subVectors(Jd,Zd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,bs=1;class Tv extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Ms,bs,e,t);r.layers=this.layers,this.add(r);const s=new Dn(Ms,bs,e,t);s.layers=this.layers,this.add(s);const a=new Dn(Ms,bs,e,t);a.layers=this.layers,this.add(a);const o=new Dn(Ms,bs,e,t);o.layers=this.layers,this.add(o);const l=new Dn(Ms,bs,e,t);l.layers=this.layers,this.add(l);const c=new Dn(Ms,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bp extends _n{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Av extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ja(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Cr});s.uniforms.tEquirect.value=t;const a=new ni(r,s),o=t.minFilter;return t.minFilter===nr&&(t.minFilter=ti),new Tv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class wv extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Iv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=du,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new W;class Zu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qd=new W,$d=new Pt,ef=new Pt,Cv=new W,tf=new ft,_o=new W,zl=new Ni,nf=new ft,Gl=new Za;class Rv extends ni{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Id,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(r),e.ray.intersectsSphere(zl)!==!1&&(nf.copy(r).invert(),Gl.copy(e.ray).applyMatrix4(nf),!(this.boundingBox!==null&&Gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===A_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;$d.fromBufferAttribute(r.attributes.skinIndex,e),ef.fromBufferAttribute(r.attributes.skinWeight,e),Qd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=ef.getComponent(s);if(a!==0){const o=$d.getComponent(s);tf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cv.copy(Qd).applyMatrix4(tf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class kp extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hp extends _n{constructor(e=null,t=1,n=1,r,s,a,o,l,c=On,u=On,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rf=new ft,Lv=new ft;class Ju{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Lv;rf.multiplyMatrices(o,t[s]),rf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ju(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hp(t,e,e,di,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new kp),this.bones.push(a),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class fu extends Nn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new ft,sf=new ft,vo=[],af=new fr,Pv=new ft,ya=new ni,Sa=new Ni;class Dv extends ni{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Pv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),af.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Sa.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(n),e.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ts),sf.multiplyMatrices(n,Ts),ya.matrixWorld=sf,ya.raycast(e,vo);for(let a=0,o=vo.length;a<o;a++){const l=vo[a];l.instanceId=s,l.object=this,t.push(l)}vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hp(new Float32Array(r*this.count),r,this.count,Wu,xi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Wl=new W,Uv=new W,Ov=new ct;class Mr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Wl.subVectors(n,t).cross(Uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ov.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Ni,xo=new W;class Qu{constructor(e=new Mr,t=new Mr,n=new Mr,r=new Mr,s=new Mr,a=new Mr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],S=r[14],v=r[15];if(n[0].setComponents(l-s,f-c,m-h,v-p).normalize(),n[1].setComponents(l+s,f+c,m+h,v+p).normalize(),n[2].setComponents(l+a,f+u,m+g,v+y).normalize(),n[3].setComponents(l-a,f-u,m-g,v-y).normalize(),n[4].setComponents(l-o,f-d,m-_,v-S).normalize(),t===ir)n[5].setComponents(l+o,f+d,m+_,v+S).normalize();else if(t===Qo)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xo.x=r.normal.x>0?e.max.x:e.min.x,xo.y=r.normal.y>0?e.max.y:e.min.y,xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vp extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $o=new W,el=new W,of=new ft,Ea=new Za,yo=new Ni,Xl=new W,lf=new W;class $u extends Jt{constructor(e=new Fi,t=new Vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)$o.fromBufferAttribute(t,r-1),el.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=$o.distanceTo(el);e.setAttribute("lineDistance",new ar(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;of.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(of);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),S=So(this,e,Ea,l,p,y);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=So(this,e,Ea,l,_,m);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=So(this,e,Ea,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=So(this,e,Ea,l,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function So(i,e,t,n,r,s){const a=i.geometry.attributes.position;if($o.fromBufferAttribute(a,r),el.fromBufferAttribute(a,s),t.distanceSqToSegment($o,el,Xl,lf)>n)return;Xl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Xl);if(!(l<e.near||l>e.far))return{distance:l,point:lf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const cf=new W,uf=new W;class Nv extends $u{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)cf.fromBufferAttribute(t,r),uf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+cf.distanceTo(uf);e.setAttribute("lineDistance",new ar(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fv extends $u{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zp extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const df=new ft,hu=new Za,Eo=new Ni,Mo=new W;class Bv extends Jt{constructor(e=new Fi,t=new zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;df.copy(r).invert(),hu.copy(e.ray).applyMatrix4(df);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=f,_=h;g<_;g++){const m=c.getX(g);Mo.fromBufferAttribute(d,m),ff(Mo,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=f,_=h;g<_;g++)Mo.fromBufferAttribute(d,g),ff(Mo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ff(i,e,t,n,r,s,a){const o=hu.distanceSqToPoint(i);if(o<t){const l=new W;hu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $r extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gp extends _n{constructor(e,t,n,r,s,a,o,l,c,u=Fs){if(u!==Fs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=ns),n===void 0&&u===Ys&&(n=Ks),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fl extends Fi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let S=0;S<c;S++){const v=S*d-s;g.push(v,-y,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,v=y+c*(p+1),w=y+1+c*(p+1),T=y+1+c*p;h.push(S,v,T),h.push(v,w,T)}this.setIndex(h),this.setAttribute("position",new ar(g,3)),this.setAttribute("normal",new ar(_,3)),this.setAttribute("uv",new ar(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ed extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wp,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bi extends ed{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class kv extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hv extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zv(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function hf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Wp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Qa{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gv extends Qa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cd,endingEnd:Cd}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rd:s=e,o=2*t-n;break;case Ld:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rd:a=e,l=2*n-t;break;case Ld:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*_+.5*g,v=h*m-h*_;for(let w=0;w!==o;++w)s[w]=p*a[u+w]+y*a[c+w]+S*a[l+w]+v*a[d+w];return s}}class Wv extends Qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),d=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*u;return s}}class Xv extends Qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ki{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Va:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Vv(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===El,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const d=o*n,f=d-n,h=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[h+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Va;class ua extends ki{constructor(e,t,n){super(e,t,n)}}ua.prototype.ValueTypeName="bool";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=Ha;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Xp extends ki{}Xp.prototype.ValueTypeName="color";class Qs extends ki{}Qs.prototype.ValueTypeName="number";class jv extends Qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Di.slerpFlat(s,0,a,c-o,a,c,l);return s}}class $s extends ki{InterpolantFactoryMethodLinear(e){return new jv(this.times,this.values,this.getValueSize(),e)}}$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;class da extends ki{constructor(e,t,n){super(e,t,n)}}da.prototype.ValueTypeName="string";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=Ha;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;class ea extends ki{}ea.prototype.ValueTypeName="vector";class qv{constructor(e="",t=-1,n=[],r=w_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Yv(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ki.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=zv(l);l=hf(l,1,u),c=hf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Qs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,h,g,_){if(h.length!==0){const m=[],p=[];Wp(h,m,p,g),m.length!==0&&_.push(new d(f,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)h[f[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const S=f[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}r.push(new Qs(".morphTargetInfluence["+_+"]",m,p))}l=h.length*a}else{const h=".bones["+t[d].name+"]";n(ea,h+".position",f,"pos",r),n($s,h+".quaternion",f,"rot",r),n(ea,h+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Kv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qs;case"vector":case"vector2":case"vector3":case"vector4":return ea;case"color":return Xp;case"quaternion":return $s;case"bool":case"boolean":return ua;case"string":return da}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Yv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kv(i.type);if(i.times===void 0){const t=[],n=[];Wp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ar={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zv{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const Jv=new Zv;class fa{constructor(e){this.manager=e!==void 0?e:Jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi={};class Qv extends Error{constructor(e,t){super(e),this.response=t}}class jp extends fa{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ar.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:r});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:S,value:v})=>{if(S)p.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let T=0,I=u.length;T<I;T++){const b=u[T];b.onProgress&&b.onProgress(w)}p.enqueue(v),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Qv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Ar.add(e,c);const u=Yi[e];delete Yi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $v extends fa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ar.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=za("img");function l(){u(),Ar.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ex extends fa{constructor(e){super(e)}load(e,t,n,r){const s=new _n,a=new $v(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class hl extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jl=new ft,pf=new W,mf=new W;class td{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qu,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tx extends td{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Zs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nx extends hl{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new tx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gf=new ft,Ma=new W,ql=new W;class ix extends td{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ma),ql.copy(n.position),ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ql),n.updateMatrixWorld(),r.makeTranslation(-Ma.x,-Ma.y,-Ma.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf)}}class rx extends hl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ix}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nd extends Fp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sx extends td{constructor(){super(new nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qp extends hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new sx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ax extends hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Da{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ox extends fa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ar.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ar.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Ar.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ar.add(e,l),s.manager.itemStart(e)}}class lx extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const id="\\[\\]\\.:\\/",cx=new RegExp("["+id+"]","g"),rd="[^"+id+"]",ux="[^"+id.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",rd),fx=/(WCOD+)?/.source.replace("WCOD",ux),hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd),mx=new RegExp("^"+dx+fx+hx+px+"$"),gx=["material","materials","bones","map"];class _x{constructor(e,t,n){const r=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ot{constructor(e,t,n){this.path=t,this.parsedPath=n||Ot.parseTrackName(t),this.node=Ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ot.Composite(e,t,n):new Ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cx,"")}static parseTrackName(e){const t=mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);gx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=_x;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _f{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vx extends os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function vf(i,e,t,n){const r=xx(n);switch(t){case yp:return i*e;case Ep:return i*e;case Mp:return i*e*2;case Wu:return i*e/r.components*r.byteLength;case Xu:return i*e/r.components*r.byteLength;case bp:return i*e*2/r.components*r.byteLength;case ju:return i*e*2/r.components*r.byteLength;case Sp:return i*e*3/r.components*r.byteLength;case di:return i*e*4/r.components*r.byteLength;case qu:return i*e*4/r.components*r.byteLength;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bo:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:case Vc:return Math.max(i,16)*Math.max(e,8)/4;case Bc:case Hc:return Math.max(i,8)*Math.max(e,8)/2;case zc:case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ru:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ho:case su:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tp:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lu:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xx(i){switch(i){case cr:case _p:return{byteLength:1,components:1};case ka:case vp:case Ya:return{byteLength:2,components:1};case zu:case Gu:return{byteLength:2,components:4};case ns:case Vu:case xi:return{byteLength:4,components:1};case xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kp(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yx(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
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
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
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
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ux=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wx=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,xy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,by=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ry=`#if defined( USE_POINTS_UV )
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
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
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
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gy=`#ifdef USE_NORMALMAP
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
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,s0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,w0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I0=`#define DISTANCE
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
}`,C0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,N0=`#define LAMBERT
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
}`,F0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,B0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z0=`#define PHONG
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
}`,G0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,W0=`#define STANDARD
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
}`,X0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,j0=`#define TOON
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
}`,q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,K0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Q0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Sx,alphahash_pars_fragment:Ex,alphamap_fragment:Mx,alphamap_pars_fragment:bx,alphatest_fragment:Tx,alphatest_pars_fragment:Ax,aomap_fragment:wx,aomap_pars_fragment:Ix,batching_pars_vertex:Cx,batching_vertex:Rx,begin_vertex:Lx,beginnormal_vertex:Px,bsdfs:Dx,iridescence_fragment:Ux,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Bx,clipping_planes_vertex:kx,color_fragment:Hx,color_pars_fragment:Vx,color_pars_vertex:zx,color_vertex:Gx,common:Wx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:jx,displacementmap_pars_vertex:qx,displacementmap_vertex:Kx,emissivemap_fragment:Yx,emissivemap_pars_fragment:Zx,colorspace_fragment:Jx,colorspace_pars_fragment:Qx,envmap_fragment:$x,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:hy,envmap_vertex:iy,fog_vertex:ry,fog_pars_vertex:sy,fog_fragment:ay,fog_pars_fragment:oy,gradientmap_pars_fragment:ly,lightmap_pars_fragment:cy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:dy,lights_pars_begin:fy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:_y,lights_physical_fragment:vy,lights_physical_pars_fragment:xy,lights_fragment_begin:yy,lights_fragment_maps:Sy,lights_fragment_end:Ey,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:by,logdepthbuf_pars_vertex:Ty,logdepthbuf_vertex:Ay,map_fragment:wy,map_pars_fragment:Iy,map_particle_fragment:Cy,map_particle_pars_fragment:Ry,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Py,morphinstance_vertex:Dy,morphcolor_vertex:Uy,morphnormal_vertex:Oy,morphtarget_pars_vertex:Ny,morphtarget_vertex:Fy,normal_fragment_begin:By,normal_fragment_maps:ky,normal_pars_fragment:Hy,normal_pars_vertex:Vy,normal_vertex:zy,normalmap_pars_fragment:Gy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:qy,opaque_fragment:Ky,packing:Yy,premultiplied_alpha_fragment:Zy,project_vertex:Jy,dithering_fragment:Qy,dithering_pars_fragment:$y,roughnessmap_fragment:e0,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:r0,shadowmask_pars_fragment:s0,skinbase_vertex:a0,skinning_pars_vertex:o0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:f0,tonemapping_pars_fragment:h0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:_0,uv_vertex:v0,worldpos_vertex:x0,background_vert:y0,background_frag:S0,backgroundCube_vert:E0,backgroundCube_frag:M0,cube_vert:b0,cube_frag:T0,depth_vert:A0,depth_frag:w0,distanceRGBA_vert:I0,distanceRGBA_frag:C0,equirect_vert:R0,equirect_frag:L0,linedashed_vert:P0,linedashed_frag:D0,meshbasic_vert:U0,meshbasic_frag:O0,meshlambert_vert:N0,meshlambert_frag:F0,meshmatcap_vert:B0,meshmatcap_frag:k0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:z0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:j0,meshtoon_frag:q0,points_vert:K0,points_frag:Y0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:$0},Se={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},wi={basic:{uniforms:Pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new st(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Pn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Pn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new st(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Pn([Se.points,Se.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Pn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Pn([Se.common,Se.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Pn([Se.sprite,Se.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Pn([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Pn([Se.lights,Se.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};wi.physical={uniforms:Pn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const To={r:0,b:0,g:0},Vr=new Ui,eS=new ft;function tS(i,e,t,n,r,s,a){const o=new st(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const w=g(S);w===null?p(o,l):w&&w.isColor&&(p(w,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===dl)?(u===void 0&&(u=new ni(new Ja(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Js(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Vr.copy(v.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eS.makeRotationFromEuler(Vr)),u.material.toneMapped=wt.getTransfer(w.colorSpace)!==Ft,(d!==w||f!==w.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,h=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ni(new fl(2,2),new Dr({name:"BackgroundMaterial",uniforms:Js(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=wt.getTransfer(w.colorSpace)!==Ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(To,Np(i)),n.buffers.color.setClear(To.r,To.g,To.b,v,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:y}}function nS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,P,U,L,Y){let H=!1;const F=d(L,U,P);s!==F&&(s=F,c(s.object)),H=h(M,L,U,Y),H&&g(M,L,U,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(M,P,U,L),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,P,U){const L=U.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let H=Y[P.id];H===void 0&&(H={},Y[P.id]=H);let F=H[L];return F===void 0&&(F=f(l()),H[L]=F),F}function f(M){const P=[],U=[],L=[];for(let Y=0;Y<t;Y++)P[Y]=0,U[Y]=0,L[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:L,object:M,attributes:{},index:null}}function h(M,P,U,L){const Y=s.attributes,H=P.attributes;let F=0;const V=U.getAttributes();for(const z in V)if(V[z].location>=0){const ee=Y[z];let ge=H[z];if(ge===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ee===void 0||ee.attribute!==ge||ge&&ee.data!==ge.data)return!0;F++}return s.attributesNum!==F||s.index!==L}function g(M,P,U,L){const Y={},H=P.attributes;let F=0;const V=U.getAttributes();for(const z in V)if(V[z].location>=0){let ee=H[z];ee===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));const ge={};ge.attribute=ee,ee&&ee.data&&(ge.data=ee.data),Y[z]=ge,F++}s.attributes=Y,s.attributesNum=F,s.index=L}function _(){const M=s.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const U=s.newAttributes,L=s.enabledAttributes,Y=s.attributeDivisors;U[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),Y[M]!==P&&(i.vertexAttribDivisor(M,P),Y[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let U=0,L=P.length;U<L;U++)P[U]!==M[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function S(M,P,U,L,Y,H,F){F===!0?i.vertexAttribIPointer(M,P,U,Y,H):i.vertexAttribPointer(M,P,U,L,Y,H)}function v(M,P,U,L){_();const Y=L.attributes,H=U.getAttributes(),F=P.defaultAttributeValues;for(const V in H){const z=H[V];if(z.location>=0){let oe=Y[V];if(oe===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const ee=oe.normalized,ge=oe.itemSize,be=e.get(oe);if(be===void 0)continue;const qe=be.buffer,ne=be.type,re=be.bytesPerElement,Me=ne===i.INT||ne===i.UNSIGNED_INT||oe.gpuType===Vu;if(oe.isInterleavedBufferAttribute){const $=oe.data,pe=$.stride,Fe=oe.offset;if($.isInstancedInterleavedBuffer){for(let ze=0;ze<z.locationSize;ze++)p(z.location+ze,$.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ze=0;ze<z.locationSize;ze++)m(z.location+ze);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ze=0;ze<z.locationSize;ze++)S(z.location+ze,ge/z.locationSize,ne,ee,pe*re,(Fe+ge/z.locationSize*ze)*re,Me)}else{if(oe.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)p(z.location+$,oe.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<z.locationSize;$++)m(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let $=0;$<z.locationSize;$++)S(z.location+$,ge/z.locationSize,ne,ee,ge*re,ge/z.locationSize*$*re,Me)}}else if(F!==void 0){const ee=F[V];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(z.location,ee);break;case 3:i.vertexAttrib3fv(z.location,ee);break;case 4:i.vertexAttrib4fv(z.location,ee);break;default:i.vertexAttrib1fv(z.location,ee)}}}}y()}function w(){b();for(const M in n){const P=n[M];for(const U in P){const L=P[U];for(const Y in L)u(L[Y].object),delete L[Y];delete P[U]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const L=P[U];for(const Y in L)u(L[Y].object),delete L[Y];delete P[U]}delete n[M.id]}function I(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const L=U[M.id];for(const Y in L)u(L[Y].object),delete L[Y];delete U[M.id]}}function b(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function iS(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==di&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const b=I===Ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==cr&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==xi&&!b)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:w,maxSamples:T}}function sS(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mr,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||r;return r=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,S=y*4;let v=p.clippingState||null;l.value=v,v=u(g,f,S,h);for(let w=0;w!==S;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=h;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function aS(i){let e=new WeakMap;function t(a,o){return o===Nc?a.mapping=Xs:o===Fc&&(a.mapping=js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Nc||o===Fc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Av(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ls=4,xf=[.125,.215,.35,.446,.526,.582],Yr=20,Kl=new nd,yf=new st;let Yl=null,Zl=0,Jl=0,Ql=!1;const qr=(1+Math.sqrt(5))/2,As=1/qr,Sf=[new W(-qr,As,0),new W(qr,As,0),new W(-As,0,qr),new W(As,0,qr),new W(0,qr,-As),new W(0,qr,As),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,Zl,Jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Ya,format:di,colorSpace:Fn,depthBuffer:!1},r=Mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(s)),this._blurMaterial=lS(s,e,t)}return r}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,n,r){const o=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(yf),u.toneMapping=Rr,u.autoClear=!1;const h=new Qr({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),g=new ni(new Ja,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(yf),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;Ao(r,y*S,p>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ni(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Kl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sf[(r-s-1)%Sf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ni(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Yr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Yr;m>Yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const p=[];let y=0;for(let I=0;I<Yr;++I){const b=I/_,x=Math.exp(-b*b/2);p.push(x),I===0?y+=x:I<m&&(y+=2*x)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[r],w=3*v*(r>S-Ls?r-S+Ls:0),T=4*(this._cubeSize-v);Ao(t,w,T,3*v,2*v),l.setRenderTarget(t),l.render(d,Kl)}}function oS(i){const e=[],t=[],n=[];let r=i;const s=i-Ls+1+xf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ls?l=xf[a-i+Ls-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),S=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let T=0;T<h;T++){const I=T%3*2/3-1,b=T>2?0:-1,x=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];y.set(x,_*g*T),S.set(f,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const w=new Fi;w.setAttribute("position",new Nn(y,_)),w.setAttribute("uv",new Nn(S,m)),w.setAttribute("faceIndex",new Nn(v,p)),e.push(w),r>Ls&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mf(i,e,t){const n=new is(i,e,t);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lS(i,e,t){const n=new Float32Array(Yr),r=new W(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function bf(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Tf(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function sd(){return`

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
	`}function cS(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Nc||l===Fc,u=l===Xs||l===js;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ef(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Ef(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function uS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dS(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let S=0,v=y.length;S<v;S+=3){const w=y[S+0],T=y[S+1],I=y[S+2];f.push(w,T,T,I,I,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const w=S+0,T=S+1,I=S+2;f.push(w,T,T,I,I,w)}}else return;const m=new(Cp(f)?Op:Up)(f,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function fS(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,f*a,g),t.update(h,n,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pS(i,e,t){const n=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const I=new Float32Array(w*T*4*d),b=new Lp(I,w,T,d);b.type=xi,b.needsUpdate=!0;const x=v*4;for(let P=0;P<d;P++){const U=p[P],L=y[P],Y=S[P],H=w*T*4*P;for(let F=0;F<U.count;F++){const V=F*x;g===!0&&(r.fromBufferAttribute(U,F),I[H+V+0]=r.x,I[H+V+1]=r.y,I[H+V+2]=r.z,I[H+V+3]=0),_===!0&&(r.fromBufferAttribute(L,F),I[H+V+4]=r.x,I[H+V+5]=r.y,I[H+V+6]=r.z,I[H+V+7]=0),m===!0&&(r.fromBufferAttribute(Y,F),I[H+V+8]=r.x,I[H+V+9]=r.y,I[H+V+10]=r.z,I[H+V+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new nt(w,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function mS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Yp=new _n,Af=new Gp(1,1),Zp=new Lp,Jp=new uv,Qp=new Bp,wf=[],If=[],Cf=new Float32Array(16),Rf=new Float32Array(9),Lf=new Float32Array(4);function ha(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pl(i,e){let t=If[e];t===void 0&&(t=new Int32Array(e),If[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function vS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function xS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function yS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Lf.set(n),i.uniformMatrix2fv(this.addr,!1,Lf),fn(t,n)}}function SS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Rf.set(n),i.uniformMatrix3fv(this.addr,!1,Rf),fn(t,n)}}function ES(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Cf.set(n),i.uniformMatrix4fv(this.addr,!1,Cf),fn(t,n)}}function MS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function AS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function wS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function IS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function CS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function RS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function LS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Af.compareFunction=Ip,s=Af):s=Yp,t.setTexture2D(e||s,r)}function PS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jp,r)}function DS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qp,r)}function US(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zp,r)}function OS(i){switch(i){case 5126:return gS;case 35664:return _S;case 35665:return vS;case 35666:return xS;case 35674:return yS;case 35675:return SS;case 35676:return ES;case 5124:case 35670:return MS;case 35667:case 35671:return bS;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return wS;case 36294:return IS;case 36295:return CS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return US}}function NS(i,e){i.uniform1fv(this.addr,e)}function FS(i,e){const t=ha(e,this.size,2);i.uniform2fv(this.addr,t)}function BS(i,e){const t=ha(e,this.size,3);i.uniform3fv(this.addr,t)}function kS(i,e){const t=ha(e,this.size,4);i.uniform4fv(this.addr,t)}function HS(i,e){const t=ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function VS(i,e){const t=ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zS(i,e){const t=ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function GS(i,e){i.uniform1iv(this.addr,e)}function WS(i,e){i.uniform2iv(this.addr,e)}function XS(i,e){i.uniform3iv(this.addr,e)}function jS(i,e){i.uniform4iv(this.addr,e)}function qS(i,e){i.uniform1uiv(this.addr,e)}function KS(i,e){i.uniform2uiv(this.addr,e)}function YS(i,e){i.uniform3uiv(this.addr,e)}function ZS(i,e){i.uniform4uiv(this.addr,e)}function JS(i,e,t){const n=this.cache,r=e.length,s=pl(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yp,s[a])}function QS(i,e,t){const n=this.cache,r=e.length,s=pl(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jp,s[a])}function $S(i,e,t){const n=this.cache,r=e.length,s=pl(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qp,s[a])}function eE(i,e,t){const n=this.cache,r=e.length,s=pl(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zp,s[a])}function tE(i){switch(i){case 5126:return NS;case 35664:return FS;case 35665:return BS;case 35666:return kS;case 35674:return HS;case 35675:return VS;case 35676:return zS;case 5124:case 35670:return GS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return jS;case 5125:return qS;case 36294:return KS;case 36295:return YS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return eE}}class nE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=OS(t.type)}}class iE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tE(t.type)}}class rE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function sE(i,e,t){const n=i.name,r=n.length;for($l.lastIndex=0;;){const s=$l.exec(n),a=$l.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pf(t,c===void 0?new nE(o,i,e):new iE(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new rE(o),Pf(t,d)),t=d}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);sE(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Df(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const aE=37297;let oE=0;function lE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Uf=new ct;function cE(i){wt._getMatrix(Uf,wt.workingColorSpace,i);const e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Jo:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Of(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lE(i.getShaderSource(e),a)}else return r}function uE(i,e){const t=cE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dE(i,e){let t;switch(e){case x_:t="Linear";break;case y_:t="Reinhard";break;case S_:t="Cineon";break;case E_:t="ACESFilmic";break;case b_:t="AgX";break;case T_:t="Neutral";break;case M_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wo=new W;function fE(){wt.getLuminanceCoefficients(wo);const i=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function pE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ra(i){return i!==""}function Nf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gE=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(i){return i.replace(gE,vE)}const _E=new Map;function vE(i,e){let t=pt[e];if(t===void 0){const n=_E.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pu(t)}const xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(i){return i.replace(xE,yE)}function yE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function EE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ME(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function bE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pp:e="ENVMAP_BLENDING_MULTIPLY";break;case __:e="ENVMAP_BLENDING_MIX";break;case v_:e="ENVMAP_BLENDING_ADD";break}return e}function TE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AE(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=SE(t),c=EE(t),u=ME(t),d=bE(t),f=TE(t),h=hE(t),g=pE(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(m=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Rr?dE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,uE("linearToOutputTexel",t.outputColorSpace),fE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),a=pu(a),a=Nf(a,t),a=Ff(a,t),o=pu(o),o=Nf(o,t),o=Ff(o,t),a=Bf(a),o=Bf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,v=y+p+o,w=Df(r,r.VERTEX_SHADER,S),T=Df(r,r.FRAGMENT_SHADER,v);r.attachShader(_,w),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function I(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(w).trim(),Y=r.getShaderInfoLog(T).trim();let H=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,T);else{const V=Of(r,w,"vertex"),z=Of(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+V+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||Y==="")&&(F=!1);F&&(P.diagnostics={runnable:H,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(w),r.deleteShader(T),b=new Vo(r,_),x=mE(r,_)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,aE)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let wE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CE(e),t.set(e,n)),n}}class CE{constructor(e){this.id=wE++,this.code=e,this.usedTimes=0}}function RE(i,e,t,n,r,s,a){const o=new Pp,l=new IE,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,U,L){const Y=U.fog,H=L.geometry,F=x.isMeshStandardMaterial?U.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),z=V&&V.mapping===dl?V.image.height:null,oe=g[x.type];x.precision!==null&&(h=r.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ge=ee!==void 0?ee.length:0;let be=0;H.morphAttributes.position!==void 0&&(be=1),H.morphAttributes.normal!==void 0&&(be=2),H.morphAttributes.color!==void 0&&(be=3);let qe,ne,re,Me;if(oe){const it=wi[oe];qe=it.vertexShader,ne=it.fragmentShader}else qe=x.vertexShader,ne=x.fragmentShader,l.update(x),re=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);const $=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,ze=L.isBatchedMesh===!0,_t=!!x.map,fe=!!x.matcap,ke=!!V,D=!!x.aoMap,vt=!!x.lightMap,$e=!!x.bumpMap,et=!!x.normalMap,Re=!!x.displacementMap,tt=!!x.emissiveMap,ye=!!x.metalnessMap,R=!!x.roughnessMap,A=x.anisotropy>0,K=x.clearcoat>0,ie=x.dispersion>0,ue=x.iridescence>0,X=x.sheen>0,q=x.transmission>0,N=A&&!!x.anisotropyMap,se=K&&!!x.clearcoatMap,He=K&&!!x.clearcoatNormalMap,le=K&&!!x.clearcoatRoughnessMap,xe=ue&&!!x.iridescenceMap,Ue=ue&&!!x.iridescenceThicknessMap,Ge=X&&!!x.sheenColorMap,Te=X&&!!x.sheenRoughnessMap,ot=!!x.specularMap,Oe=!!x.specularColorMap,at=!!x.specularIntensityMap,B=q&&!!x.transmissionMap,ve=q&&!!x.thicknessMap,te=!!x.gradientMap,ae=!!x.alphaMap,ce=x.alphaTest>0,he=!!x.alphaHash,Le=!!x.extensions;let ht=Rr;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Vt={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:qe,fragmentShader:ne,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ze,batchingColor:ze&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Fn,alphaToCoverage:!!x.alphaToCoverage,map:_t,matcap:fe,envMap:ke,envMapMode:ke&&V.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:vt,bumpMap:$e,normalMap:et,displacementMap:f&&Re,emissiveMap:tt,normalMapObjectSpace:et&&x.normalMapType===L_,normalMapTangentSpace:et&&x.normalMapType===wp,metalnessMap:ye,roughnessMap:R,anisotropy:A,anisotropyMap:N,clearcoat:K,clearcoatMap:se,clearcoatNormalMap:He,clearcoatRoughnessMap:le,dispersion:ie,iridescence:ue,iridescenceMap:xe,iridescenceThicknessMap:Ue,sheen:X,sheenColorMap:Ge,sheenRoughnessMap:Te,specularMap:ot,specularColorMap:Oe,specularIntensityMap:at,transmission:q,transmissionMap:B,thicknessMap:ve,gradientMap:te,opaque:x.transparent===!1&&x.blending===Ns&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:ce,alphaHash:he,combine:x.combine,mapUv:_t&&_(x.map.channel),aoMapUv:D&&_(x.aoMap.channel),lightMapUv:vt&&_(x.lightMap.channel),bumpMapUv:$e&&_(x.bumpMap.channel),normalMapUv:et&&_(x.normalMap.channel),displacementMapUv:Re&&_(x.displacementMap.channel),emissiveMapUv:tt&&_(x.emissiveMap.channel),metalnessMapUv:ye&&_(x.metalnessMap.channel),roughnessMapUv:R&&_(x.roughnessMap.channel),anisotropyMapUv:N&&_(x.anisotropyMap.channel),clearcoatMapUv:se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(x.sheenRoughnessMap.channel),specularMapUv:ot&&_(x.specularMap.channel),specularColorMapUv:Oe&&_(x.specularColorMap.channel),specularIntensityMapUv:at&&_(x.specularIntensityMap.channel),transmissionMapUv:B&&_(x.transmissionMap.channel),thicknessMapUv:ve&&_(x.thicknessMap.channel),alphaMapUv:ae&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(et||A),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(_t||ae),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:_t&&x.map.isVideoTexture===!0&&wt.getTransfer(x.map.colorSpace)===Ft,decodeVideoTextureEmissive:tt&&x.emissiveMap.isVideoTexture===!0&&wt.getTransfer(x.emissiveMap.colorSpace)===Ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ii,flipSided:x.side===jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(M,x),S(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const M=g[x.type];let P;if(M){const U=wi[M];P=Ev.clone(U.uniforms)}else P=x.uniforms;return P}function w(x,M){let P;for(let U=0,L=u.length;U<L;U++){const Y=u[U];if(Y.cacheKey===M){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new AE(i,M,x,s),u.push(P)),P}function T(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function I(x){l.remove(x)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:I,programs:u,dispose:b}}function LE(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function PE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,h,g,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,f,h,g,_,m){const p=a(d,f,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,g,_,m){const p=a(d,f,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||PE),n.length>1&&n.sort(f||Hf),r.length>1&&r.sort(f||Hf)}function u(){for(let d=e,f=i.length;d<f;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function DE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Vf,i.set(n,[a])):r>=s.length?(a=new Vf,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function UE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new st};break;case"SpotLight":t={position:new W,direction:new W,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function OE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let NE=0;function FE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function BE(i){const e=new UE,t=OE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new ft,a=new ft;function o(c){let u=0,d=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,S=0,v=0,w=0,T=0,I=0;c.sort(FE);for(let x=0,M=c.length;x<M;x++){const P=c[x],U=P.color,L=P.intensity,Y=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*L,d+=U.g*L,f+=U.b*L;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],L);I++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,z=t.get(P);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.directionalShadow[h]=z,n.directionalShadowMap[h]=H,n.directionalShadowMatrix[h]=P.shadow.matrix,y++}n.directional[h]=F,h++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(U).multiplyScalar(L),F.distance=Y,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[_]=F;const V=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,V.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=V.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=H,v++}_++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(U).multiplyScalar(L),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=F,m++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const V=P.shadow,z=t.get(P);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=F,g++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(L),F.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==h||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==y||b.numPointShadows!==S||b.numSpotShadows!==v||b.numSpotMaps!==w||b.numLightProbes!==I)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,b.directionalLength=h,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=y,b.numPointShadows=S,b.numSpotShadows=v,b.numSpotMaps=w,b.numLightProbes=I,n.version=NE++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function zf(i){const e=new BE(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function kE(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new zf(i),e.set(r,[o])):s>=a.length?(o=new zf(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zE(i,e,t){let n=new Qu;const r=new nt,s=new nt,a=new Pt,o=new kv({depthPacking:R_}),l=new Hv,c={},u=t.maxTextureSize,d={[lr]:jn,[jn]:lr,[Ii]:Ii},f=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:HE,fragmentShader:VE}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Fi;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ni(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let p=this.type;this.render=function(T,I,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Cr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=p!==Qi&&this.type===Qi,Y=p===Qi&&this.type!==Qi;for(let H=0,F=T.length;H<F;H++){const V=T[H],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const oe=z.getFrameExtents();if(r.multiply(oe),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,z.mapSize.y=s.y)),z.map===null||L===!0||Y===!0){const ge=this.type!==Qi?{minFilter:On,magFilter:On}:{};z.map!==null&&z.map.dispose(),z.map=new is(r.x,r.y,ge),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ee=z.getViewportCount();for(let ge=0;ge<ee;ge++){const be=z.getViewport(ge);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),U.viewport(a),z.updateMatrices(V,ge),n=z.getFrustum(),v(I,b,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Qi&&y(z,b),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,P)};function y(T,I){const b=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new is(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,b,f,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,b,h,_,null)}function S(T,I,b,x){let M=null;const P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=b.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const U=M.uuid,L=I.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let H=Y[L];H===void 0&&(H=M.clone(),Y[L]=H,I.addEventListener("dispose",w)),M=H}if(M.visible=I.visible,M.wireframe=I.wireframe,x===Qi?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:d[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=b}return M}function v(T,I,b,x,M){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Qi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const L=e.update(T),Y=T.material;if(Array.isArray(Y)){const H=L.groups;for(let F=0,V=H.length;F<V;F++){const z=H[F],oe=Y[z.materialIndex];if(oe&&oe.visible){const ee=S(T,oe,x,M);T.onBeforeShadow(i,T,I,b,L,ee,z),i.renderBufferDirect(b,null,L,ee,T,z),T.onAfterShadow(i,T,I,b,L,ee,z)}}}else if(Y.visible){const H=S(T,Y,x,M);T.onBeforeShadow(i,T,I,b,L,H,null),i.renderBufferDirect(b,null,L,H,T,null),T.onAfterShadow(i,T,I,b,L,H,null)}}const U=T.children;for(let L=0,Y=U.length;L<Y;L++)v(U[L],I,b,x,M)}function w(T){T.target.removeEventListener("dispose",w);for(const b in c){const x=c[b],M=T.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const GE={[Cc]:Rc,[Lc]:Uc,[Pc]:Oc,[Ws]:Dc,[Rc]:Cc,[Uc]:Lc,[Oc]:Pc,[Dc]:Ws};function WE(i,e){function t(){let B=!1;const ve=new Pt;let te=null;const ae=new Pt(0,0,0,0);return{setMask:function(ce){te!==ce&&!B&&(i.colorMask(ce,ce,ce,ce),te=ce)},setLocked:function(ce){B=ce},setClear:function(ce,he,Le,ht,Vt){Vt===!0&&(ce*=ht,he*=ht,Le*=ht),ve.set(ce,he,Le,ht),ae.equals(ve)===!1&&(i.clearColor(ce,he,Le,ht),ae.copy(ve))},reset:function(){B=!1,te=null,ae.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,te=null,ae=null,ce=null;return{setReversed:function(he){if(ve!==he){const Le=e.get("EXT_clip_control");ve?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const ht=ce;ce=null,this.setClear(ht)}ve=he},getReversed:function(){return ve},setTest:function(he){he?$(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(he){te!==he&&!B&&(i.depthMask(he),te=he)},setFunc:function(he){if(ve&&(he=GE[he]),ae!==he){switch(he){case Cc:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Pc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=he}},setLocked:function(he){B=he},setClear:function(he){ce!==he&&(ve&&(he=1-he),i.clearDepth(he),ce=he)},reset:function(){B=!1,te=null,ae=null,ce=null,ve=!1}}}function r(){let B=!1,ve=null,te=null,ae=null,ce=null,he=null,Le=null,ht=null,Vt=null;return{setTest:function(it){B||(it?$(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(it){ve!==it&&!B&&(i.stencilMask(it),ve=it)},setFunc:function(it,mt,Gt){(te!==it||ae!==mt||ce!==Gt)&&(i.stencilFunc(it,mt,Gt),te=it,ae=mt,ce=Gt)},setOp:function(it,mt,Gt){(he!==it||Le!==mt||ht!==Gt)&&(i.stencilOp(it,mt,Gt),he=it,Le=mt,ht=Gt)},setLocked:function(it){B=it},setClear:function(it){Vt!==it&&(i.clearStencil(it),Vt=it)},reset:function(){B=!1,ve=null,te=null,ae=null,ce=null,he=null,Le=null,ht=null,Vt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,w=null,T=null,I=new st(0,0,0),b=0,x=!1,M=null,P=null,U=null,L=null,Y=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=V>=2);let oe=null,ee={};const ge=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),qe=new Pt().fromArray(ge),ne=new Pt().fromArray(be);function re(B,ve,te,ae){const ce=new Uint8Array(4),he=i.createTexture();i.bindTexture(B,he),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<te;Le++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ve+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return he}const Me={};Me[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Ws),$e(!1),et(bd),$(i.CULL_FACE),D(Cr);function $(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function pe(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Fe(B,ve){return d[B]!==ve?(i.bindFramebuffer(B,ve),d[B]=ve,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ze(B,ve){let te=h,ae=!1;if(B){te=f.get(ve),te===void 0&&(te=[],f.set(ve,te));const ce=B.textures;if(te.length!==ce.length||te[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Le=ce.length;he<Le;he++)te[he]=i.COLOR_ATTACHMENT0+he;te.length=ce.length,ae=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ae=!0);ae&&i.drawBuffers(te)}function _t(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const fe={[Kr]:i.FUNC_ADD,[e_]:i.FUNC_SUBTRACT,[t_]:i.FUNC_REVERSE_SUBTRACT};fe[n_]=i.MIN,fe[i_]=i.MAX;const ke={[r_]:i.ZERO,[s_]:i.ONE,[a_]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[f_]:i.SRC_ALPHA_SATURATE,[u_]:i.DST_COLOR,[l_]:i.DST_ALPHA,[o_]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[d_]:i.ONE_MINUS_DST_COLOR,[c_]:i.ONE_MINUS_DST_ALPHA,[h_]:i.CONSTANT_COLOR,[p_]:i.ONE_MINUS_CONSTANT_COLOR,[m_]:i.CONSTANT_ALPHA,[g_]:i.ONE_MINUS_CONSTANT_ALPHA};function D(B,ve,te,ae,ce,he,Le,ht,Vt,it){if(B===Cr){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),B!==$g){if(B!==m||it!==x){if((p!==Kr||v!==Kr)&&(i.blendEquation(i.FUNC_ADD),p=Kr,v=Kr),it)switch(B){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Td:i.blendFunc(i.ONE,i.ONE);break;case Ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Td:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,S=null,w=null,T=null,I.set(0,0,0),b=0,m=B,x=it}return}ce=ce||ve,he=he||te,Le=Le||ae,(ve!==p||ce!==v)&&(i.blendEquationSeparate(fe[ve],fe[ce]),p=ve,v=ce),(te!==y||ae!==S||he!==w||Le!==T)&&(i.blendFuncSeparate(ke[te],ke[ae],ke[he],ke[Le]),y=te,S=ae,w=he,T=Le),(ht.equals(I)===!1||Vt!==b)&&(i.blendColor(ht.r,ht.g,ht.b,Vt),I.copy(ht),b=Vt),m=B,x=!1}function vt(B,ve){B.side===Ii?pe(i.CULL_FACE):$(i.CULL_FACE);let te=B.side===jn;ve&&(te=!te),$e(te),B.blending===Ns&&B.transparent===!1?D(Cr):D(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ae=B.stencilWrite;o.setTest(ae),ae&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),tt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function et(B){B!==Zg?($(i.CULL_FACE),B!==P&&(B===bd?i.cullFace(i.BACK):B===Jg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),P=B}function Re(B){B!==U&&(F&&i.lineWidth(B),U=B)}function tt(B,ve,te){B?($(i.POLYGON_OFFSET_FILL),(L!==ve||Y!==te)&&(i.polygonOffset(ve,te),L=ve,Y=te)):pe(i.POLYGON_OFFSET_FILL)}function ye(B){B?$(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+H-1),oe!==B&&(i.activeTexture(B),oe=B)}function A(B,ve,te){te===void 0&&(oe===null?te=i.TEXTURE0+H-1:te=oe);let ae=ee[te];ae===void 0&&(ae={type:void 0,texture:void 0},ee[te]=ae),(ae.type!==B||ae.texture!==ve)&&(oe!==te&&(i.activeTexture(te),oe=te),i.bindTexture(B,ve||Me[B]),ae.type=B,ae.texture=ve)}function K(){const B=ee[oe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(B){qe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),qe.copy(B))}function Te(B){ne.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function ot(B,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let ae=te.get(B);ae===void 0&&(ae=i.getUniformBlockIndex(ve,B.name),te.set(B,ae))}function Oe(B,ve){const ae=c.get(ve).get(B);l.get(ve)!==ae&&(i.uniformBlockBinding(ve,ae,B.__bindingPointIndex),l.set(ve,ae))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,ee={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,w=null,T=null,I=new st(0,0,0),b=0,x=!1,M=null,P=null,U=null,L=null,Y=null,qe.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:pe,bindFramebuffer:Fe,drawBuffers:ze,useProgram:_t,setBlending:D,setMaterial:vt,setFlipSided:$e,setCullFace:et,setLineWidth:Re,setPolygonOffset:tt,setScissorTest:ye,activeTexture:R,bindTexture:A,unbindTexture:K,compressedTexImage2D:ie,compressedTexImage3D:ue,texImage2D:xe,texImage3D:Ue,updateUBOMapping:ot,uniformBlockBinding:Oe,texStorage2D:He,texStorage3D:le,texSubImage2D:X,texSubImage3D:q,compressedTexSubImage2D:N,compressedTexSubImage3D:se,scissor:Ge,viewport:Te,reset:at}}function XE(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,A){return h?new OffscreenCanvas(R,A):za("canvas")}function _(R,A,K){let ie=1;const ue=ye(R);if((ue.width>K||ue.height>K)&&(ie=K/Math.max(ue.width,ue.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(ie*ue.width),q=Math.floor(ie*ue.height);d===void 0&&(d=g(X,q));const N=A?g(X,q):d;return N.width=X,N.height=q,N.getContext("2d").drawImage(R,0,0,X,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+X+"x"+q+")."),N}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,A,K,ie,ue=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=A;if(A===i.RED&&(K===i.FLOAT&&(X=i.R32F),K===i.HALF_FLOAT&&(X=i.R16F),K===i.UNSIGNED_BYTE&&(X=i.R8)),A===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(X=i.R8UI),K===i.UNSIGNED_SHORT&&(X=i.R16UI),K===i.UNSIGNED_INT&&(X=i.R32UI),K===i.BYTE&&(X=i.R8I),K===i.SHORT&&(X=i.R16I),K===i.INT&&(X=i.R32I)),A===i.RG&&(K===i.FLOAT&&(X=i.RG32F),K===i.HALF_FLOAT&&(X=i.RG16F),K===i.UNSIGNED_BYTE&&(X=i.RG8)),A===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(X=i.RG8UI),K===i.UNSIGNED_SHORT&&(X=i.RG16UI),K===i.UNSIGNED_INT&&(X=i.RG32UI),K===i.BYTE&&(X=i.RG8I),K===i.SHORT&&(X=i.RG16I),K===i.INT&&(X=i.RG32I)),A===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(X=i.RGB8UI),K===i.UNSIGNED_SHORT&&(X=i.RGB16UI),K===i.UNSIGNED_INT&&(X=i.RGB32UI),K===i.BYTE&&(X=i.RGB8I),K===i.SHORT&&(X=i.RGB16I),K===i.INT&&(X=i.RGB32I)),A===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),K===i.UNSIGNED_INT&&(X=i.RGBA32UI),K===i.BYTE&&(X=i.RGBA8I),K===i.SHORT&&(X=i.RGBA16I),K===i.INT&&(X=i.RGBA32I)),A===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),A===i.RGBA){const q=ue?Jo:wt.getTransfer(ie);K===i.FLOAT&&(X=i.RGBA32F),K===i.HALF_FLOAT&&(X=i.RGBA16F),K===i.UNSIGNED_BYTE&&(X=q===Ft?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(R,A){let K;return R?A===null||A===ns||A===Ks?K=i.DEPTH24_STENCIL8:A===xi?K=i.DEPTH32F_STENCIL8:A===ka&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ns||A===Ks?K=i.DEPTH_COMPONENT24:A===xi?K=i.DEPTH_COMPONENT32F:A===ka&&(K=i.DEPTH_COMPONENT16),K}function w(R,A){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==On&&R.minFilter!==ti?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){const A=R.target;A.removeEventListener("dispose",T),b(A),A.isVideoTexture&&u.delete(A)}function I(R){const A=R.target;A.removeEventListener("dispose",I),M(A)}function b(R){const A=n.get(R);if(A.__webglInit===void 0)return;const K=R.source,ie=f.get(K);if(ie){const ue=ie[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&x(R),Object.keys(ie).length===0&&f.delete(K)}n.remove(R)}function x(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const K=R.source,ie=f.get(K);delete ie[A.__cacheKey],a.memory.textures--}function M(R){const A=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(A.__webglFramebuffer[ie]))for(let ue=0;ue<A.__webglFramebuffer[ie].length;ue++)i.deleteFramebuffer(A.__webglFramebuffer[ie][ue]);else i.deleteFramebuffer(A.__webglFramebuffer[ie]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ie])}else{if(Array.isArray(A.__webglFramebuffer))for(let ie=0;ie<A.__webglFramebuffer.length;ie++)i.deleteFramebuffer(A.__webglFramebuffer[ie]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ie=0;ie<A.__webglColorRenderbuffer.length;ie++)A.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ie]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=R.textures;for(let ie=0,ue=K.length;ie<ue;ie++){const X=n.get(K[ie]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(K[ie])}n.remove(R)}let P=0;function U(){P=0}function L(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function Y(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function H(R,A){const K=n.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(K,R,A);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+A)}function F(R,A){const K=n.get(R);if(R.version>0&&K.__version!==R.version){ne(K,R,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+A)}function V(R,A){const K=n.get(R);if(R.version>0&&K.__version!==R.version){ne(K,R,A);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+A)}function z(R,A){const K=n.get(R);if(R.version>0&&K.__version!==R.version){re(K,R,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+A)}const oe={[qs]:i.REPEAT,[Tr]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},ee={[On]:i.NEAREST,[gp]:i.NEAREST_MIPMAP_NEAREST,[Ca]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[nr]:i.LINEAR_MIPMAP_LINEAR},ge={[P_]:i.NEVER,[B_]:i.ALWAYS,[D_]:i.LESS,[Ip]:i.LEQUAL,[U_]:i.EQUAL,[F_]:i.GEQUAL,[O_]:i.GREATER,[N_]:i.NOTEQUAL};function be(R,A){if(A.type===xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ti||A.magFilter===Oo||A.magFilter===Ca||A.magFilter===nr||A.minFilter===ti||A.minFilter===Oo||A.minFilter===Ca||A.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,oe[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ee[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ee[A.minFilter]),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ge[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===On||A.minFilter!==Ca&&A.minFilter!==nr||A.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function qe(R,A){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",T));const ie=A.source;let ue=f.get(ie);ue===void 0&&(ue={},f.set(ie,ue));const X=Y(A);if(X!==R.__cacheKey){ue[X]===void 0&&(ue[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ue[X].usedTimes++;const q=ue[R.__cacheKey];q!==void 0&&(ue[R.__cacheKey].usedTimes--,q.usedTimes===0&&x(A)),R.__cacheKey=X,R.__webglTexture=ue[X].texture}return K}function ne(R,A,K){let ie=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=i.TEXTURE_3D);const ue=qe(R,A),X=A.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+K);const q=n.get(X);if(X.version!==q.__version||ue===!0){t.activeTexture(i.TEXTURE0+K);const N=wt.getPrimaries(wt.workingColorSpace),se=A.colorSpace===br?null:wt.getPrimaries(A.colorSpace),He=A.colorSpace===br||N===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let le=_(A.image,!1,r.maxTextureSize);le=tt(A,le);const xe=s.convert(A.format,A.colorSpace),Ue=s.convert(A.type);let Ge=S(A.internalFormat,xe,Ue,A.colorSpace,A.isVideoTexture);be(ie,A);let Te;const ot=A.mipmaps,Oe=A.isVideoTexture!==!0,at=q.__version===void 0||ue===!0,B=X.dataReady,ve=w(A,le);if(A.isDepthTexture)Ge=v(A.format===Ys,A.type),at&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Ge,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ge,le.width,le.height,0,xe,Ue,null));else if(A.isDataTexture)if(ot.length>0){Oe&&at&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,ot[0].width,ot[0].height);for(let te=0,ae=ot.length;te<ae;te++)Te=ot[te],Oe?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Te.width,Te.height,xe,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,te,Ge,Te.width,Te.height,0,xe,Ue,Te.data);A.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,le.width,le.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,xe,Ue,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,le.width,le.height,0,xe,Ue,le.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ge,ot[0].width,ot[0].height,le.depth);for(let te=0,ae=ot.length;te<ae;te++)if(Te=ot[te],A.format!==di)if(xe!==null)if(Oe){if(B)if(A.layerUpdates.size>0){const ce=vf(Te.width,Te.height,A.format,A.type);for(const he of A.layerUpdates){const Le=Te.data.subarray(he*ce/Te.data.BYTES_PER_ELEMENT,(he+1)*ce/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,he,Te.width,Te.height,1,xe,Le)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Te.width,Te.height,le.depth,xe,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ge,Te.width,Te.height,le.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Te.width,Te.height,le.depth,xe,Ue,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ge,Te.width,Te.height,le.depth,0,xe,Ue,Te.data)}else{Oe&&at&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,ot[0].width,ot[0].height);for(let te=0,ae=ot.length;te<ae;te++)Te=ot[te],A.format!==di?xe!==null?Oe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,Te.width,Te.height,xe,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ge,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Te.width,Te.height,xe,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,te,Ge,Te.width,Te.height,0,xe,Ue,Te.data)}else if(A.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ge,le.width,le.height,le.depth),B)if(A.layerUpdates.size>0){const te=vf(le.width,le.height,A.format,A.type);for(const ae of A.layerUpdates){const ce=le.data.subarray(ae*te/le.data.BYTES_PER_ELEMENT,(ae+1)*te/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,xe,Ue,ce)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Ue,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,le.width,le.height,le.depth,0,xe,Ue,le.data);else if(A.isData3DTexture)Oe?(at&&t.texStorage3D(i.TEXTURE_3D,ve,Ge,le.width,le.height,le.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Ue,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,le.width,le.height,le.depth,0,xe,Ue,le.data);else if(A.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(i.TEXTURE_2D,ve,Ge,le.width,le.height);else{let te=le.width,ae=le.height;for(let ce=0;ce<ve;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ge,te,ae,0,xe,Ue,null),te>>=1,ae>>=1}}else if(ot.length>0){if(Oe&&at){const te=ye(ot[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ge,te.width,te.height)}for(let te=0,ae=ot.length;te<ae;te++)Te=ot[te],Oe?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe,Ue,Te):t.texImage2D(i.TEXTURE_2D,te,Ge,xe,Ue,Te);A.generateMipmaps=!1}else if(Oe){if(at){const te=ye(le);t.texStorage2D(i.TEXTURE_2D,ve,Ge,te.width,te.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ue,le)}else t.texImage2D(i.TEXTURE_2D,0,Ge,xe,Ue,le);m(A)&&p(ie),q.__version=X.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function re(R,A,K){if(A.image.length!==6)return;const ie=qe(R,A),ue=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);const X=n.get(ue);if(ue.version!==X.__version||ie===!0){t.activeTexture(i.TEXTURE0+K);const q=wt.getPrimaries(wt.workingColorSpace),N=A.colorSpace===br?null:wt.getPrimaries(A.colorSpace),se=A.colorSpace===br||q===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const He=A.isCompressedTexture||A.image[0].isCompressedTexture,le=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!He&&!le?xe[ae]=_(A.image[ae],!0,r.maxCubemapSize):xe[ae]=le?A.image[ae].image:A.image[ae],xe[ae]=tt(A,xe[ae]);const Ue=xe[0],Ge=s.convert(A.format,A.colorSpace),Te=s.convert(A.type),ot=S(A.internalFormat,Ge,Te,A.colorSpace),Oe=A.isVideoTexture!==!0,at=X.__version===void 0||ie===!0,B=ue.dataReady;let ve=w(A,Ue);be(i.TEXTURE_CUBE_MAP,A);let te;if(He){Oe&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ot,Ue.width,Ue.height);for(let ae=0;ae<6;ae++){te=xe[ae].mipmaps;for(let ce=0;ce<te.length;ce++){const he=te[ce];A.format!==di?Ge!==null?Oe?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce,0,0,he.width,he.height,Ge,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce,ot,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce,0,0,he.width,he.height,Ge,Te,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce,ot,he.width,he.height,0,Ge,Te,he.data)}}}else{if(te=A.mipmaps,Oe&&at){te.length>0&&ve++;const ae=ye(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ot,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Ge,Te,xe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ot,xe[ae].width,xe[ae].height,0,Ge,Te,xe[ae].data);for(let ce=0;ce<te.length;ce++){const Le=te[ce].image[ae].image;Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce+1,0,0,Le.width,Le.height,Ge,Te,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce+1,ot,Le.width,Le.height,0,Ge,Te,Le.data)}}else{Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ge,Te,xe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ot,Ge,Te,xe[ae]);for(let ce=0;ce<te.length;ce++){const he=te[ce];Oe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce+1,0,0,Ge,Te,he.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce+1,ot,Ge,Te,he.image[ae])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),X.__version=ue.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Me(R,A,K,ie,ue,X){const q=s.convert(K.format,K.colorSpace),N=s.convert(K.type),se=S(K.internalFormat,q,N,K.colorSpace),He=n.get(A),le=n.get(K);if(le.__renderTarget=A,!He.__hasExternalTextures){const xe=Math.max(1,A.width>>X),Ue=Math.max(1,A.height>>X);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,X,se,xe,Ue,A.depth,0,q,N,null):t.texImage2D(ue,X,se,xe,Ue,0,q,N,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),et(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ue,le.__webglTexture,0,$e(A)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ue,le.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(R,A,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer){const ie=A.depthTexture,ue=ie&&ie.isDepthTexture?ie.type:null,X=v(A.stencilBuffer,ue),q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=$e(A);et(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,X,A.width,A.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,X,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,X,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,R)}else{const ie=A.textures;for(let ue=0;ue<ie.length;ue++){const X=ie[ue],q=s.convert(X.format,X.colorSpace),N=s.convert(X.type),se=S(X.internalFormat,q,N,X.colorSpace),He=$e(A);K&&et(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,se,A.width,A.height):et(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,se,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,se,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(A.depthTexture);ie.__renderTarget=A,(!ie.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const ue=ie.__webglTexture,X=$e(A);if(A.depthTexture.format===Fs)et(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(A.depthTexture.format===Ys)et(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const A=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==R.depthTexture){const ie=R.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ie){const ue=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ie.removeEventListener("dispose",ue)};ie.addEventListener("dispose",ue),A.__depthDisposeCallback=ue}A.__boundDepthTexture=ie}if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");pe(A.__webglFramebuffer,R)}else if(K){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]===void 0)A.__webglDepthbuffer[ie]=i.createRenderbuffer(),$(A.__webglDepthbuffer[ie],R,!1);else{const ue=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),$(A.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,A,K){const ie=n.get(R);A!==void 0&&Me(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Fe(R)}function _t(R){const A=R.texture,K=n.get(R),ie=n.get(A);R.addEventListener("dispose",I);const ue=R.textures,X=R.isWebGLCubeRenderTarget===!0,q=ue.length>1;if(q||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=A.version,a.memory.textures++),X){K.__webglFramebuffer=[];for(let N=0;N<6;N++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[N]=[];for(let se=0;se<A.mipmaps.length;se++)K.__webglFramebuffer[N][se]=i.createFramebuffer()}else K.__webglFramebuffer[N]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let N=0;N<A.mipmaps.length;N++)K.__webglFramebuffer[N]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(q)for(let N=0,se=ue.length;N<se;N++){const He=n.get(ue[N]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&et(R)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let N=0;N<ue.length;N++){const se=ue[N];K.__webglColorRenderbuffer[N]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[N]);const He=s.convert(se.format,se.colorSpace),le=s.convert(se.type),xe=S(se.internalFormat,He,le,se.colorSpace,R.isXRRenderTarget===!0),Ue=$e(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,K.__webglColorRenderbuffer[N])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),$(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),be(i.TEXTURE_CUBE_MAP,A);for(let N=0;N<6;N++)if(A.mipmaps&&A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)Me(K.__webglFramebuffer[N][se],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,se);else Me(K.__webglFramebuffer[N],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){for(let N=0,se=ue.length;N<se;N++){const He=ue[N],le=n.get(He);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),be(i.TEXTURE_2D,He),Me(K.__webglFramebuffer,R,He,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,0),m(He)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let N=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(N=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(N,ie.__webglTexture),be(N,A),A.mipmaps&&A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)Me(K.__webglFramebuffer[se],R,A,i.COLOR_ATTACHMENT0,N,se);else Me(K.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,N,0);m(A)&&p(N),t.unbindTexture()}R.depthBuffer&&Fe(R)}function fe(R){const A=R.textures;for(let K=0,ie=A.length;K<ie;K++){const ue=A[K];if(m(ue)){const X=y(R),q=n.get(ue).__webglTexture;t.bindTexture(X,q),p(X),t.unbindTexture()}}}const ke=[],D=[];function vt(R){if(R.samples>0){if(et(R)===!1){const A=R.textures,K=R.width,ie=R.height;let ue=i.COLOR_BUFFER_BIT;const X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=n.get(R),N=A.length>1;if(N)for(let se=0;se<A.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let se=0;se<A.length;se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),N){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,q.__webglColorRenderbuffer[se]);const He=n.get(A[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,K,ie,0,0,K,ie,ue,i.NEAREST),l===!0&&(ke.length=0,D.length=0,ke.push(i.COLOR_ATTACHMENT0+se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(X),D.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),N)for(let se=0;se<A.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,q.__webglColorRenderbuffer[se]);const He=n.get(A[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const A=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function $e(R){return Math.min(r.maxSamples,R.samples)}function et(R){const A=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Re(R){const A=a.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function tt(R,A){const K=R.colorSpace,ie=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==Fn&&K!==br&&(wt.getTransfer(K)===Ft?(ie!==di||ue!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=ze,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=et}function jE(i,e){function t(n,r=br){let s;const a=wt.getTransfer(r);if(n===cr)return i.UNSIGNED_BYTE;if(n===zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_p)return i.BYTE;if(n===vp)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===Vu)return i.INT;if(n===ns)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===Ya)return i.HALF_FLOAT;if(n===yp)return i.ALPHA;if(n===Sp)return i.RGB;if(n===di)return i.RGBA;if(n===Ep)return i.LUMINANCE;if(n===Mp)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===Wu)return i.RED;if(n===Xu)return i.RED_INTEGER;if(n===bp)return i.RG;if(n===ju)return i.RG_INTEGER;if(n===qu)return i.RGBA_INTEGER;if(n===No||n===Fo||n===Bo||n===ko)if(a===Ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===kc||n===Hc||n===Vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===Gc||n===Wc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zc||n===Gc)return a===Ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xc||n===jc||n===qc||n===Kc||n===Yc||n===Zc||n===Jc||n===Qc||n===$c||n===eu||n===tu||n===nu||n===iu||n===ru)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qc)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ru)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===su||n===au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ho)return a===Ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tp||n===ou||n===lu||n===cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ho)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const qE={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $r;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
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

}`;class ZE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new _n,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dr({vertexShader:KE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new fl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JE extends os{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=new ZE,m=t.getContextAttributes();let p=null,y=null;const S=[],v=[],w=new nt;let T=null;const I=new Dn;I.viewport=new Pt;const b=new Dn;b.viewport=new Pt;const x=[I,b],M=new lx;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let re=S[ne];return re===void 0&&(re=new ec,S[ne]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ne){let re=S[ne];return re===void 0&&(re=new ec,S[ne]=re),re.getGripSpace()},this.getHand=function(ne){let re=S[ne];return re===void 0&&(re=new ec,S[ne]=re),re.getHandSpace()};function L(ne){const re=v.indexOf(ne.inputSource);if(re===-1)return;const Me=S[re];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,c||a),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",H);for(let ne=0;ne<S.length;ne++){const re=v[ne];re!==null&&(v[ne]=null,S[ne].disconnect(re))}P=null,U=null,_.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,y=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Me=null,$=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Ys:Fs,$=m.stencil?Ks:ns);const Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new is(f.textureWidth,f.textureHeight,{format:di,type:cr,depthTexture:new Gp(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new is(h.framebufferWidth,h.framebufferHeight,{format:di,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(ne){for(let re=0;re<ne.removed.length;re++){const Me=ne.removed[re],$=v.indexOf(Me);$>=0&&(v[$]=null,S[$].disconnect(Me))}for(let re=0;re<ne.added.length;re++){const Me=ne.added[re];let $=v.indexOf(Me);if($===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=v.length){v.push(Me),$=Fe;break}else if(v[Fe]===null){v[Fe]=Me,$=Fe;break}if($===-1)break}const pe=S[$];pe&&pe.connect(Me)}}const F=new W,V=new W;function z(ne,re,Me){F.setFromMatrixPosition(re.matrixWorld),V.setFromMatrixPosition(Me.matrixWorld);const $=F.distanceTo(V),pe=re.projectionMatrix.elements,Fe=Me.projectionMatrix.elements,ze=pe[14]/(pe[10]-1),_t=pe[14]/(pe[10]+1),fe=(pe[9]+1)/pe[5],ke=(pe[9]-1)/pe[5],D=(pe[8]-1)/pe[0],vt=(Fe[8]+1)/Fe[0],$e=ze*D,et=ze*vt,Re=$/(-D+vt),tt=Re*-D;if(re.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(tt),ne.translateZ(Re),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),pe[10]===-1)ne.projectionMatrix.copy(re.projectionMatrix),ne.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ye=ze+Re,R=_t+Re,A=$e-tt,K=et+($-tt),ie=fe*_t/R*ye,ue=ke*_t/R*ye;ne.projectionMatrix.makePerspective(A,K,ie,ue,ye,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,re){re===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(re.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let re=ne.near,Me=ne.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),M.near=b.near=I.near=re,M.far=b.far=I.far=Me,(P!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far),I.layers.mask=ne.layers.mask|2,b.layers.mask=ne.layers.mask|4,M.layers.mask=I.layers.mask|b.layers.mask;const $=ne.parent,pe=M.cameras;oe(M,$);for(let Fe=0;Fe<pe.length;Fe++)oe(pe[Fe],$);pe.length===2?z(M,I,b):M.projectionMatrix.copy(I.projectionMatrix),ee(ne,M,$)};function ee(ne,re,Me){Me===null?ne.matrix.copy(re.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(re.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(re.projectionMatrix),ne.projectionMatrixInverse.copy(re.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Zs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ge=null;function be(ne,re){if(u=re.getViewerPose(c||a),g=re,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let $=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let Fe=0;Fe<Me.length;Fe++){const ze=Me[Fe];let _t=null;if(h!==null)_t=h.getViewport(ze);else{const ke=d.getViewSubImage(f,ze);_t=ke.viewport,Fe===0&&(e.setRenderTargetTextures(y,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(y))}let fe=x[Fe];fe===void 0&&(fe=new Dn,fe.layers.enable(Fe),fe.viewport=new Pt,x[Fe]=fe),fe.matrix.fromArray(ze.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ze.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(_t.x,_t.y,_t.width,_t.height),Fe===0&&(M.matrix.copy(fe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(fe)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const Fe=d.getDepthInformation(Me[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let Me=0;Me<S.length;Me++){const $=v[Me],pe=S[Me];$!==null&&pe!==void 0&&pe.update($,re,c||a)}ge&&ge(ne,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const qe=new Kp;qe.setAnimationLoop(be),this.setAnimationLoop=function(ne){ge=ne},this.dispose=function(){}}}const zr=new Ui,QE=new ft;function $E(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Np(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,zr.copy(v),zr.x*=-1,zr.y*=-1,zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(zr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eM(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(y,w);const T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const S=d();y.__bindingPointIndex=S;const v=i.createBuffer(),w=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=r[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,I=v.length;T<I;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,M=b.length;x<M;x++){const P=b[x];if(h(P,T,x,w)===!0){const U=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let H=0;H<L.length;H++){const F=L[H],V=_(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,S,v,w){const T=y.value,I=S+"_"+v;if(w[I]===void 0)return typeof T=="number"||typeof T=="boolean"?w[I]=T:w[I]=T.clone(),!0;{const b=w[I];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return w[I]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function g(y){const S=y.uniforms;let v=0;const w=16;for(let I=0,b=S.length;I<b;I++){const x=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,P=x.length;M<P;M++){const U=x[M],L=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,H=L.length;Y<H;Y++){const F=L[Y],V=_(F),z=v%w,oe=z%V.boundary,ee=z+oe;v+=oe,ee!==0&&w-ee<V.storage&&(v+=w-ee),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=V.storage}}}const T=v%w;return T>0&&(v+=w-T),y.__size=v,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class tM{constructor(e={}){const{canvas:t=tv(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=Rr,this.toneMappingExposure=1;const v=this;let w=!1,T=0,I=0,b=null,x=-1,M=null;const P=new Pt,U=new Pt;let L=null;const Y=new st(0);let H=0,F=t.width,V=t.height,z=1,oe=null,ee=null;const ge=new Pt(0,0,F,V),be=new Pt(0,0,F,V);let qe=!1;const ne=new Qu;let re=!1,Me=!1;this.transmissionResolutionScale=1;const $=new ft,pe=new ft,Fe=new W,ze=new Pt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ke(){return b===null?z:1}let D=n;function vt(C,G){return t.getContext(C,G)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hu}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const G="webgl2";if(D=vt(G,C),D===null)throw vt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $e,et,Re,tt,ye,R,A,K,ie,ue,X,q,N,se,He,le,xe,Ue,Ge,Te,ot,Oe,at,B;function ve(){$e=new uS(D),$e.init(),Oe=new jE(D,$e),et=new rS(D,$e,e,Oe),Re=new WE(D,$e),et.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),tt=new hS(D),ye=new LE,R=new XE(D,$e,Re,ye,et,Oe,tt),A=new aS(v),K=new cS(v),ie=new yx(D),at=new nS(D,ie),ue=new dS(D,ie,tt,at),X=new mS(D,ue,ie,tt),Ge=new pS(D,et,R),le=new sS(ye),q=new RE(v,A,K,$e,et,at,le),N=new $E(v,ye),se=new DE,He=new kE($e),Ue=new tS(v,A,K,Re,X,h,l),xe=new zE(v,X,et),B=new eM(D,tt,et,Re),Te=new iS(D,$e,tt),ot=new fS(D,$e,tt),tt.programs=q.programs,v.capabilities=et,v.extensions=$e,v.properties=ye,v.renderLists=se,v.shadowMap=xe,v.state=Re,v.info=tt}ve();const te=new JE(v,D);this.xr=te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=$e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(F,V,!1))},this.getSize=function(C){return C.set(F,V)},this.setSize=function(C,G,J=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,V=G,t.width=Math.floor(C*z),t.height=Math.floor(G*z),J===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(F*z,V*z).floor()},this.setDrawingBufferSize=function(C,G,J){F=C,V=G,z=J,t.width=Math.floor(C*J),t.height=Math.floor(G*J),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,G,J,Q){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,G,J,Q),Re.viewport(P.copy(ge).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(be)},this.setScissor=function(C,G,J,Q){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,G,J,Q),Re.scissor(U.copy(be).multiplyScalar(z).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(C){Re.setScissorTest(qe=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(C=!0,G=!0,J=!0){let Q=0;if(C){let j=!1;if(b!==null){const me=b.texture.format;j=me===qu||me===ju||me===Xu}if(j){const me=b.texture.type,Ee=me===cr||me===ns||me===ka||me===Ks||me===zu||me===Gu,we=Ue.getClearColor(),Ie=Ue.getClearAlpha(),Ze=we.r,Je=we.g,Xe=we.b;Ee?(g[0]=Ze,g[1]=Je,g[2]=Xe,g[3]=Ie,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ze,_[1]=Je,_[2]=Xe,_[3]=Ie,D.clearBufferiv(D.COLOR,0,_))}else Q|=D.COLOR_BUFFER_BIT}G&&(Q|=D.DEPTH_BUFFER_BIT),J&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ue.dispose(),se.dispose(),He.dispose(),ye.dispose(),A.dispose(),K.dispose(),X.dispose(),at.dispose(),B.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Tt),te.removeEventListener("sessionend",$t),bn.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=tt.autoReset,G=xe.enabled,J=xe.autoUpdate,Q=xe.needsUpdate,j=xe.type;ve(),tt.autoReset=C,xe.enabled=G,xe.autoUpdate=J,xe.needsUpdate=Q,xe.type=j}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Le(C){const G=C.target;G.removeEventListener("dispose",Le),ht(G)}function ht(C){Vt(C),ye.remove(C)}function Vt(C){const G=ye.get(C).programs;G!==void 0&&(G.forEach(function(J){q.releaseProgram(J)}),C.isShaderMaterial&&q.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,J,Q,j,me){G===null&&(G=_t);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,we=bi(C,G,J,Q,j);Re.setMaterial(Q,Ee);let Ie=J.index,Ze=1;if(Q.wireframe===!0){if(Ie=ue.getWireframeAttribute(J),Ie===void 0)return;Ze=2}const Je=J.drawRange,Xe=J.attributes.position;let k=Je.start*Ze,de=(Je.start+Je.count)*Ze;me!==null&&(k=Math.max(k,me.start*Ze),de=Math.min(de,(me.start+me.count)*Ze)),Ie!==null?(k=Math.max(k,0),de=Math.min(de,Ie.count)):Xe!=null&&(k=Math.max(k,0),de=Math.min(de,Xe.count));const It=de-k;if(It<0||It===1/0)return;at.setup(j,Q,we,J,Ie);let Et,lt=Te;if(Ie!==null&&(Et=ie.get(Ie),lt=ot,lt.setIndex(Et)),j.isMesh)Q.wireframe===!0?(Re.setLineWidth(Q.wireframeLinewidth*ke()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(j.isLine){let Be=Q.linewidth;Be===void 0&&(Be=1),Re.setLineWidth(Be*ke()),j.isLineSegments?lt.setMode(D.LINES):j.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else j.isPoints?lt.setMode(D.POINTS):j.isSprite&&lt.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)lt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Be=j._multiDrawStarts,Xt=j._multiDrawCounts,At=j._multiDrawCount,xn=Ie?ie.get(Ie).bytesPerElement:1,Ti=ye.get(Q).currentProgram.getUniforms();for(let rn=0;rn<At;rn++)Ti.setValue(D,"_gl_DrawID",rn),lt.render(Be[rn]/xn,Xt[rn])}else if(j.isInstancedMesh)lt.renderInstances(k,It,j.count);else if(J.isInstancedBufferGeometry){const Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Be);lt.renderInstances(k,It,Xt)}else lt.render(k,It)};function it(C,G,J){C.transparent===!0&&C.side===Ii&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,mn(C,G,J),C.side=lr,C.needsUpdate=!0,mn(C,G,J),C.side=Ii):mn(C,G,J)}this.compile=function(C,G,J=null){J===null&&(J=C),p=He.get(J),p.init(G),S.push(p),J.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),C!==J&&C.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const Q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const me=j.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){const we=me[Ee];it(we,J,j),Q.add(we)}else it(me,J,j),Q.add(me)}),S.pop(),p=null,Q},this.compileAsync=function(C,G,J=null){const Q=this.compile(C,G,J);return new Promise(j=>{function me(){if(Q.forEach(function(Ee){ye.get(Ee).currentProgram.isReady()&&Q.delete(Ee)}),Q.size===0){j(C);return}setTimeout(me,10)}$e.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let mt=null;function Gt(C){mt&&mt(C)}function Tt(){bn.stop()}function $t(){bn.start()}const bn=new Kp;bn.setAnimationLoop(Gt),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(C){mt=C,te.setAnimationLoop(C),C===null?bn.stop():bn.start()},te.addEventListener("sessionstart",Tt),te.addEventListener("sessionend",$t),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(G),G=te.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,G,b),p=He.get(C,S.length),p.init(G),S.push(p),pe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(pe),Me=this.localClippingEnabled,re=le.init(this.clippingPlanes,Me),m=se.get(C,y.length),m.init(),y.push(m),te.enabled===!0&&te.isPresenting===!0){const me=v.xr.getDepthSensingMesh();me!==null&&vn(me,G,-1/0,v.sortObjects)}vn(C,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,ee),fe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,fe&&Ue.addToRenderList(m,C),this.info.render.frame++,re===!0&&le.beginShadows();const J=p.state.shadowsArray;xe.render(J,C,G),re===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,j=m.transmissive;if(p.setupLights(),G.isArrayCamera){const me=G.cameras;if(j.length>0)for(let Ee=0,we=me.length;Ee<we;Ee++){const Ie=me[Ee];Kt(Q,j,C,Ie)}fe&&Ue.render(C);for(let Ee=0,we=me.length;Ee<we;Ee++){const Ie=me[Ee];ri(m,C,Ie,Ie.viewport)}}else j.length>0&&Kt(Q,j,C,G),fe&&Ue.render(C),ri(m,C,G);b!==null&&I===0&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(v,C,G),at.resetDefaultState(),x=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],re===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function vn(C,G,J,Q){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ne.intersectsSprite(C)){Q&&ze.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const Ee=X.update(C),we=C.material;we.visible&&m.push(C,Ee,we,J,ze.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ne.intersectsObject(C))){const Ee=X.update(C),we=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ze.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ze.copy(Ee.boundingSphere.center)),ze.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(we)){const Ie=Ee.groups;for(let Ze=0,Je=Ie.length;Ze<Je;Ze++){const Xe=Ie[Ze],k=we[Xe.materialIndex];k&&k.visible&&m.push(C,Ee,k,J,ze.z,Xe)}}else we.visible&&m.push(C,Ee,we,J,ze.z,null)}}const me=C.children;for(let Ee=0,we=me.length;Ee<we;Ee++)vn(me[Ee],G,J,Q)}function ri(C,G,J,Q){const j=C.opaque,me=C.transmissive,Ee=C.transparent;p.setupLightsView(J),re===!0&&le.setGlobalState(v.clippingPlanes,J),Q&&Re.viewport(P.copy(Q)),j.length>0&&nn(j,G,J),me.length>0&&nn(me,G,J),Ee.length>0&&nn(Ee,G,J),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Kt(C,G,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new is(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Ya:cr,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const me=p.state.transmissionRenderTarget[Q.id],Ee=Q.viewport||P;me.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);const we=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(Y),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),fe&&Ue.render(J);const Ie=v.toneMapping;v.toneMapping=Rr;const Ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),re===!0&&le.setGlobalState(v.clippingPlanes,Q),nn(C,J,Q),R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Xe=0,k=G.length;Xe<k;Xe++){const de=G[Xe],It=de.object,Et=de.geometry,lt=de.material,Be=de.group;if(lt.side===Ii&&It.layers.test(Q.layers)){const Xt=lt.side;lt.side=jn,lt.needsUpdate=!0,pn(It,J,Q,Et,lt,Be),lt.side=Xt,lt.needsUpdate=!0,Je=!0}}Je===!0&&(R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me))}v.setRenderTarget(we),v.setClearColor(Y,H),Ze!==void 0&&(Q.viewport=Ze),v.toneMapping=Ie}function nn(C,G,J){const Q=G.isScene===!0?G.overrideMaterial:null;for(let j=0,me=C.length;j<me;j++){const Ee=C[j],we=Ee.object,Ie=Ee.geometry,Ze=Q===null?Ee.material:Q,Je=Ee.group;we.layers.test(J.layers)&&pn(we,G,J,Ie,Ze,Je)}}function pn(C,G,J,Q,j,me){C.onBeforeRender(v,G,J,Q,j,me),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(v,G,J,Q,C,me),j.transparent===!0&&j.side===Ii&&j.forceSinglePass===!1?(j.side=jn,j.needsUpdate=!0,v.renderBufferDirect(J,G,Q,j,C,me),j.side=lr,j.needsUpdate=!0,v.renderBufferDirect(J,G,Q,j,C,me),j.side=Ii):v.renderBufferDirect(J,G,Q,j,C,me),C.onAfterRender(v,G,J,Q,j,me)}function mn(C,G,J){G.isScene!==!0&&(G=_t);const Q=ye.get(C),j=p.state.lights,me=p.state.shadowsArray,Ee=j.state.version,we=q.getParameters(C,j.state,me,G,J),Ie=q.getProgramCacheKey(we);let Ze=Q.programs;Q.environment=C.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(C.isMeshStandardMaterial?K:A).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",Le),Ze=new Map,Q.programs=Ze);let Je=Ze.get(Ie);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Ee)return Mi(C,we),Je}else we.uniforms=q.getUniforms(C),C.onBeforeCompile(we,v),Je=q.acquireProgram(we,Ie),Ze.set(Ie,Je),Q.uniforms=we.uniforms;const Xe=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=le.uniform),Mi(C,we),Q.needsLights=oi(C),Q.lightsStateVersion=Ee,Q.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function si(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Vo.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Mi(C,G){const J=ye.get(C);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function bi(C,G,J,Q,j){G.isScene!==!0&&(G=_t),R.resetTextureUnits();const me=G.fog,Ee=Q.isMeshStandardMaterial?G.environment:null,we=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Fn,Ie=(Q.isMeshStandardMaterial?K:A).get(Q.envMap||Ee),Ze=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xe=!!J.morphAttributes.position,k=!!J.morphAttributes.normal,de=!!J.morphAttributes.color;let It=Rr;Q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(It=v.toneMapping);const Et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=Et!==void 0?Et.length:0,Be=ye.get(Q),Xt=p.state.lights;if(re===!0&&(Me===!0||C!==M)){const jt=C===M&&Q.id===x;le.setState(Q,C,jt)}let At=!1;Q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Xt.state.version||Be.outputColorSpace!==we||j.isBatchedMesh&&Be.batching===!1||!j.isBatchedMesh&&Be.batching===!0||j.isBatchedMesh&&Be.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Be.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||j.isInstancedMesh&&Be.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Be.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Be.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Be.instancingMorph===!1&&j.morphTexture!==null||Be.envMap!==Ie||Q.fog===!0&&Be.fog!==me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==Ze||Be.vertexTangents!==Je||Be.morphTargets!==Xe||Be.morphNormals!==k||Be.morphColors!==de||Be.toneMapping!==It||Be.morphTargetsCount!==lt)&&(At=!0):(At=!0,Be.__version=Q.version);let xn=Be.currentProgram;At===!0&&(xn=mn(Q,G,j));let Ti=!1,rn=!1,Ai=!1;const Dt=xn.getUniforms(),Rn=Be.uniforms;if(Re.useProgram(xn.program)&&(Ti=!0,rn=!0,Ai=!0),Q.id!==x&&(x=Q.id,rn=!0),Ti||M!==C){Re.buffers.depth.getReversed()?($.copy(C.projectionMatrix),iv($),rv($),Dt.setValue(D,"projectionMatrix",$)):Dt.setValue(D,"projectionMatrix",C.projectionMatrix),Dt.setValue(D,"viewMatrix",C.matrixWorldInverse);const en=Dt.map.cameraPosition;en!==void 0&&en.setValue(D,Fe.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&Dt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,rn=!0,Ai=!0)}if(j.isSkinnedMesh){Dt.setOptional(D,j,"bindMatrix"),Dt.setOptional(D,j,"bindMatrixInverse");const jt=j.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Dt.setValue(D,"boneTexture",jt.boneTexture,R))}j.isBatchedMesh&&(Dt.setOptional(D,j,"batchingTexture"),Dt.setValue(D,"batchingTexture",j._matricesTexture,R),Dt.setOptional(D,j,"batchingIdTexture"),Dt.setValue(D,"batchingIdTexture",j._indirectTexture,R),Dt.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(D,"batchingColorTexture",j._colorsTexture,R));const yn=J.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Ge.update(j,J,xn),(rn||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,Dt.setValue(D,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Rn.envMap.value=Ie,Rn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Rn.envMapIntensity.value=G.environmentIntensity),rn&&(Dt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&ai(Rn,Ai),me&&Q.fog===!0&&N.refreshFogUniforms(Rn,me),N.refreshMaterialUniforms(Rn,Q,z,V,p.state.transmissionRenderTarget[C.id]),Vo.upload(D,si(Be),Rn,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Vo.upload(D,si(Be),Rn,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(D,"center",j.center),Dt.setValue(D,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(D,"normalMatrix",j.normalMatrix),Dt.setValue(D,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const jt=Q.uniformsGroups;for(let en=0,Nr=jt.length;en<Nr;en++){const Kn=jt[en];B.update(Kn,xn),B.bind(Kn,xn)}}return xn}function ai(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function oi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,G,J){ye.get(C.texture).__webglTexture=G,ye.get(C.depthTexture).__webglTexture=J;const Q=ye.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const J=ye.get(C);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const Hn=D.createFramebuffer();this.setRenderTarget=function(C,G=0,J=0){b=C,T=G,I=J;let Q=!0,j=null,me=!1,Ee=!1;if(C){const Ie=ye.get(C);if(Ie.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(Ie.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Ie.__hasExternalTextures)R.rebindTextures(C,ye.get(C.texture).__webglTexture,ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xe=C.depthTexture;if(Ie.__boundDepthTexture!==Xe){if(Xe!==null&&ye.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ee=!0);const Je=ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?j=Je[G][J]:j=Je[G],me=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?j=ye.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?j=Je[J]:j=Je,P.copy(C.viewport),U.copy(C.scissor),L=C.scissorTest}else P.copy(ge).multiplyScalar(z).floor(),U.copy(be).multiplyScalar(z).floor(),L=qe;if(J!==0&&(j=Hn),Re.bindFramebuffer(D.FRAMEBUFFER,j)&&Q&&Re.drawBuffers(C,j),Re.viewport(P),Re.scissor(U),Re.setScissorTest(L),me){const Ie=ye.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,J)}else if(Ee){const Ie=ye.get(C.texture),Ze=G;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,J,Ze)}else if(C!==null&&J!==0){const Ie=ye.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ie.__webglTexture,J)}x=-1},this.readRenderTargetPixels=function(C,G,J,Q,j,me,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){Re.bindFramebuffer(D.FRAMEBUFFER,we);try{const Ie=C.texture,Ze=Ie.format,Je=Ie.type;if(!et.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Q&&J>=0&&J<=C.height-j&&D.readPixels(G,J,Q,j,Oe.convert(Ze),Oe.convert(Je),me)}finally{const Ie=b!==null?ye.get(b).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,G,J,Q,j,me,Ee){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){const Ie=C.texture,Ze=Ie.format,Je=Ie.type;if(!et.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-Q&&J>=0&&J<=C.height-j){Re.bindFramebuffer(D.FRAMEBUFFER,we);const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(G,J,Q,j,Oe.convert(Ze),Oe.convert(Je),0);const k=b!==null?ye.get(b).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,k);const de=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await nv(D,de,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.deleteBuffer(Xe),D.deleteSync(de),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,J=0){C.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-J),j=Math.floor(C.image.width*Q),me=Math.floor(C.image.height*Q),Ee=G!==null?G.x:0,we=G!==null?G.y:0;R.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Ee,we,j,me),Re.unbindTexture()};const zi=D.createFramebuffer(),ls=D.createFramebuffer();this.copyTextureToTexture=function(C,G,J=null,Q=null,j=0,me=null){C.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],G=arguments[2],me=arguments[3]||0,J=null),me===null&&(j!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=j,j=0):me=0);let Ee,we,Ie,Ze,Je,Xe,k,de,It;const Et=C.isCompressedTexture?C.mipmaps[me]:C.image;if(J!==null)Ee=J.max.x-J.min.x,we=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,Ze=J.min.x,Je=J.min.y,Xe=J.isBox3?J.min.z:0;else{const yn=Math.pow(2,-j);Ee=Math.floor(Et.width*yn),we=Math.floor(Et.height*yn),C.isDataArrayTexture?Ie=Et.depth:C.isData3DTexture?Ie=Math.floor(Et.depth*yn):Ie=1,Ze=0,Je=0,Xe=0}Q!==null?(k=Q.x,de=Q.y,It=Q.z):(k=0,de=0,It=0);const lt=Oe.convert(G.format),Be=Oe.convert(G.type);let Xt;G.isData3DTexture?(R.setTexture3D(G,0),Xt=D.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(R.setTexture2DArray(G,0),Xt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(G,0),Xt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const At=D.getParameter(D.UNPACK_ROW_LENGTH),xn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ti=D.getParameter(D.UNPACK_SKIP_PIXELS),rn=D.getParameter(D.UNPACK_SKIP_ROWS),Ai=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);const Dt=C.isDataArrayTexture||C.isData3DTexture,Rn=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const yn=ye.get(C),jt=ye.get(G),en=ye.get(yn.__renderTarget),Nr=ye.get(jt.__renderTarget);Re.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Kn=0;Kn<Ie;Kn++)Dt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(C).__webglTexture,j,Xe+Kn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(G).__webglTexture,me,It+Kn)),D.blitFramebuffer(Ze,Je,Ee,we,k,de,Ee,we,D.DEPTH_BUFFER_BIT,D.NEAREST);Re.bindFramebuffer(D.READ_FRAMEBUFFER,null),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||ye.has(C)){const yn=ye.get(C),jt=ye.get(G);Re.bindFramebuffer(D.READ_FRAMEBUFFER,zi),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,ls);for(let en=0;en<Ie;en++)Dt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,j,Xe+en):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,j),Rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,me,It+en):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,me),j!==0?D.blitFramebuffer(Ze,Je,Ee,we,k,de,Ee,we,D.COLOR_BUFFER_BIT,D.NEAREST):Rn?D.copyTexSubImage3D(Xt,me,k,de,It+en,Ze,Je,Ee,we):D.copyTexSubImage2D(Xt,me,k,de,Ze,Je,Ee,we);Re.bindFramebuffer(D.READ_FRAMEBUFFER,null),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Xt,me,k,de,It,Ee,we,Ie,lt,Be,Et.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,me,k,de,It,Ee,we,Ie,lt,Et.data):D.texSubImage3D(Xt,me,k,de,It,Ee,we,Ie,lt,Be,Et):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,k,de,Ee,we,lt,Be,Et.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,k,de,Et.width,Et.height,lt,Et.data):D.texSubImage2D(D.TEXTURE_2D,me,k,de,Ee,we,lt,Be,Et);D.pixelStorei(D.UNPACK_ROW_LENGTH,At),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ti),D.pixelStorei(D.UNPACK_SKIP_ROWS,rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ai),me===0&&G.generateMipmaps&&D.generateMipmap(Xt),Re.unbindTexture()},this.copyTextureToTexture3D=function(C,G,J=null,Q=null,j=0){return C.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],G=arguments[3],j=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,J,Q,j)},this.initRenderTarget=function(C){ye.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Re.unbindTexture()},this.resetState=function(){T=0,I=0,b=null,Re.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function Gf(i,e){if(e===I_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===uu||e===Ap){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===uu)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class nM extends fa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new oM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new SM(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Da.extractUrlBase(e);a=Da.resolveURL(c,this.path)}else a=Da.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new jp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===$p){try{a[yt.KHR_BINARY_GLTF]=new EM(e)}catch(d){r&&r(d);return}s=JSON.parse(a[yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new OM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case yt.KHR_MATERIALS_UNLIT:a[d]=new sM;break;case yt.KHR_DRACO_MESH_COMPRESSION:a[d]=new MM(s,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:a[d]=new bM;break;case yt.KHR_MESH_QUANTIZATION:a[d]=new TM;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function iM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rM{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new st(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Fn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rx(u),c.distance=d;break;case"spot":c=new nx(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,er(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class sM{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qr}extendParams(e,t,n){const r=[];e.color=new st(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Fn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,En))}return Promise.all(r)}}class aM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class oM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(o,o)}return Promise.all(s)}}class lM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class cM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class uM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Fn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,En)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class dM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class fM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(o[0],o[1],o[2],Fn),Promise.all(s)}}class hM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(o[0],o[1],o[2],Fn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,En)),Promise.all(s)}}class mM{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class gM{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class _M{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class vM{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xM{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yM{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(h){return h.buffer}):a.ready.then(function(){const h=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(h),u,d,f,r.mode,r.filter),h})})}else return null}}class SM{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==ui.TRIANGLES&&c.mode!==ui.TRIANGLE_STRIP&&c.mode!==ui.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,h=[];for(const g of d){const _=new ft,m=new W,p=new Di,y=new W(1,1,1),S=new Dv(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(m,p,y));for(const v in l)if(v==="_COLOR_0"){const w=l[v];S.instanceColor=new fu(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Jt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),h.push(S)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const $p="glTF",ba=12,Wf={JSON:1313821514,BIN:5130562};class EM{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$p)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ba,s=new DataView(e,ba);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Wf.JSON){const c=new Uint8Array(e,ba+a,o);this.content=n.decode(c)}else if(l===Wf.BIN){const c=ba+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class MM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const d=mu[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=mu[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],h=ks[f.componentType];c[d]=h.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(h)},o,c,Fn,f)})})}}class bM{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TM{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class em extends Qa{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,d=(n-t)/u,f=d*d,h=f*d,g=e*c,_=g-c,m=-2*h+3*f,p=h-f,y=1-m,S=p-f+d;for(let v=0;v!==o;v++){const w=a[_+v+o],T=a[_+v+l]*u,I=a[g+v+o],b=a[g+v]*u;s[v]=y*w+S*T+m*I+p*b}return s}}const AM=new Di;class wM extends em{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return AM.fromArray(s).normalize().toArray(s),s}}const ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xf={9728:On,9729:ti,9984:gp,9985:Oo,9986:Ca,9987:nr},jf={33071:Tr,33648:Zo,10497:qs},tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IM={CUBICSPLINE:void 0,LINEAR:Va,STEP:Ha},nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function CM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ed({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:lr})),i.DefaultMaterial}function Gr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function er(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function RM(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function LM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PM(i){let e;const t=i.extensions&&i.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ic(t.attributes):e=i.indices+":"+ic(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ic(i.targets[n]);return e}function ic(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const UM=new ft;class OM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new ex(this.options.manager):this.textureLoader=new ox(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Gr(s,o,r),er(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(Da.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=tc[r.type],o=ks[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Nn(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=tc[r.type],c=ks[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(h&&h!==d){const p=Math.floor(f/h),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let S=t.cache.get(y);S||(_=new c(o,p*h,r.count*h/u),S=new Iv(_,h/u),t.cache.add(y,S)),m=new Zu(S,l,f%h/u,g)}else o===null?_=new c(r.count*l):_=new c(o,f,r.count*l),m=new Nn(_,l,g);if(r.sparse!==void 0){const p=tc.SCALAR,y=ks[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,w=new y(a[1],S,r.sparse.count*p),T=new c(a[2],v,r.sparse.count*l);o!==null&&(m=new Nn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,b=w.length;I<b;I++){const x=w[I];if(m.setX(x,T[I*l]),l>=2&&m.setY(x,T[I*l+1]),l>=3&&m.setZ(x,T[I*l+2]),l>=4&&m.setW(x,T[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=Xf[f.magFilter]||ti,u.minFilter=Xf[f.minFilter]||nr,u.wrapS=jf[f.wrapS]||qs,u.wrapT=jf[f.wrapT]||qs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==On&&u.minFilter!==ti,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new _n(_);m.needsUpdate=!0,f(m)}),t.load(Da.resolveURL(d,s.path),g,void 0,h)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),er(d,a),d.userData.mimeType=a.mimeType||DM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[yt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new zp,Li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Vp,Li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ed}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){const d=r[yt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new st(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Fn),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,En)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ii);const u=s.alphaMode||nc.OPAQUE;if(u===nc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===nc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Qr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qr){const d=s.emissiveFactor;o.emissive=new st().setRGB(d[0],d[1],d[2],Fn)}return s.emissiveTexture!==void 0&&a!==Qr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,En)),Promise.all(c).then(function(){const d=new a(o);return s.name&&(d.name=s.name),er(d,s),t.associations.set(d,{materials:e}),s.extensions&&Gr(r,d,s),d})}createUniqueName(e){const t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return qf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=PM(c),d=r[u];if(d)a.push(d.promise);else{let f;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=qf(new Fi,c,t),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?CM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=a[h];let p;const y=c[h];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Rv(_,y):new ni(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?p.geometry=Gf(p.geometry,Ap):m.mode===ui.TRIANGLE_FAN&&(p.geometry=Gf(p.geometry,uu));else if(m.mode===ui.LINES)p=new Nv(_,y);else if(m.mode===ui.LINE_STRIP)p=new $u(_,y);else if(m.mode===ui.LINE_LOOP)p=new Fv(_,y);else if(m.mode===ui.POINTS)p=new Bv(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&LM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),er(p,s),m.extensions&&Gr(r,p,m),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return s.extensions&&Gr(r,d[0],s),d[0];const f=new $r;s.extensions&&Gr(r,f,s),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dn(Yu.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new nd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),er(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const d=a[c];if(d){o.push(d);const f=new ft;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ju(o,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const h=r.channels[d],g=r.samplers[h.sampler],_=h.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let y=0,S=f.length;y<S;y++){const v=f[y],w=h[y],T=g[y],I=_[y],b=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const x=n._createAnimationTracks(v,w,T,I,b);if(x)for(let M=0;M<x.length;M++)p.push(x[M])}return new qv(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,UM)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new kp:c.length>1?u=new $r:c.length===1?u=c[0]:u=new Jt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=a),er(u,s),s.extensions&&Gr(n,u,s),s.matrix!==void 0){const d=new ft;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new $r;n.name&&(s.name=r.createUniqueName(n.name)),er(s,n),n.extensions&&Gr(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[f,h]of r.associations)(f instanceof Li||f instanceof _n)&&d.set(f,h);return u.traverse(f=>{const h=r.associations.get(f);h!=null&&d.set(f,h)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];xr[s.path]===xr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(xr[s.path]){case xr.weights:c=Qs;break;case xr.rotation:c=$s;break;case xr.position:case xr.scale:c=ea;break;default:switch(n.itemSize){case 1:c=Qs;break;case 2:case 3:default:c=ea;break}break}const u=r.interpolation!==void 0?IM[r.interpolation]:Va,d=this._getArrayFromAccessor(n);for(let f=0,h=l.length;f<h;f++){const g=new c(l[f]+"."+xr[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gu(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof $s?wM:em;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NM(i,e,t){const n=e.attributes,r=new fr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),o.normalized){const u=gu(ks[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new W,l=new W;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const _=gu(ks[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new Ni;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function qf(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=mu[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return wt.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),er(i,e),NM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?RM(i,e.targets,t):i})}const Kf={type:"change"},ad={type:"start"},tm={type:"end"},Io=new Za,Yf=new Mr,FM=Math.cos(70*Yu.DEG2RAD),cn=new W,Vn=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rc=1e-6;class BM extends vx{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Di,this._lastTargetPosition=new W,this._quat=new Di().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _f,this._sphericalDelta=new _f,this._scale=1,this._panOffset=new W,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new W,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HM.bind(this),this._onPointerDown=kM.bind(this),this._onPointerUp=VM.bind(this),this._onContextMenu=KM.bind(this),this._onMouseWheel=WM.bind(this),this._onKeyDown=XM.bind(this),this._onTouchStart=jM.bind(this),this._onTouchMove=qM.bind(this),this._onMouseDown=zM.bind(this),this._onMouseMove=GM.bind(this),this._interceptControlDown=YM.bind(this),this._interceptControlUp=ZM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kf),this.update(),this.state=Bt.NONE}update(e=null){const t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Vn:n>Math.PI&&(n-=Vn),r<-Math.PI?r+=Vn:r>Math.PI&&(r-=Vn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=cn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Io.origin.copy(this.object.position),Io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Io.direction))<FM?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Io.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rc||this._lastTargetPosition.distanceToSquared(this.target)>rc?(this.dispatchEvent(Kf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;cn.copy(r).sub(this.target);let s=cn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function HM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function VM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tm),this.state=Bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Bt.DOLLY;break;case Os.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Bt.ROTATE}break;case Os.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(ad)}function GM(i){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function WM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(i.preventDefault(),this.dispatchEvent(ad),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(tm))}function XM(i){this.enabled!==!1&&this._handleKeyDown(i)}function jM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Bt.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Bt.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(ad)}function qM(i){switch(this._trackPointer(i),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Bt.NONE}}function KM(i){this.enabled!==!1&&i.preventDefault()}function YM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var JM=Ur('<path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path>'),QM=Ur('<path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path>'),$M=Ur('<path d="M6 4v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2z"></path>'),eb=Ur('<path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path>'),tb=Ur('<path d="m8 7.5 4 4 4-4V4H8zm0 9V20h8v-3.5l-4-4z" opacity=".3"></path><path d="M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z"></path>',1),nb=Ur("<svg><!></svg>");function ib(i,e){const t=Ba(e,["children","$$slots","$$events","$$legacy"]),n=Ba(t,["size","role","color","variation","ariaLabel"]);Rt(e,!1);const r=St("iconCtx")??{};let s=O(e,"size",24,()=>r.size||"24"),a=O(e,"role",24,()=>r.role||"img"),o=O(e,"color",24,()=>r.color||"currentColor"),l=O(e,"variation",24,()=>r.variation||"outlined"),c=O(e,"ariaLabel",8,"hourglass full");ca();var u=nb();let d;var f=De(u);{var h=_=>{var m=JM();Z(_,m)},g=_=>{var m=We(),p=Ae(m);{var y=v=>{var w=QM();Z(v,w)},S=v=>{var w=We(),T=Ae(w);{var I=x=>{var M=$M();Z(x,M)},b=x=>{var M=We(),P=Ae(M);{var U=Y=>{var H=eb();Z(Y,H)},L=Y=>{var H=We(),F=Ae(H);{var V=z=>{var oe=tb();Z(z,oe)};Ke(F,z=>{l()==="two-tone"&&z(V)},!0)}Z(Y,H)};Ke(P,Y=>{l()==="sharp"?Y(U):Y(L,!1)},!0)}Z(x,M)};Ke(T,x=>{l()==="round"?x(I):x(b,!1)},!0)}Z(v,w)};Ke(p,v=>{l()==="filled"?v(y):v(S,!1)},!0)}Z(_,m)};Ke(f,_=>{l()==="outlined"?_(h):_(g,!1)})}Ye(()=>d=Zt(u,d,{xmlns:"http://www.w3.org/2000/svg",...n,role:a(),width:s(),height:s(),fill:o(),"aria-label":c(),viewBox:"0 0 24 24"},void 0,!0)),Gn("click",u,function(_){Gi.call(this,e,_)}),Gn("keydown",u,function(_){Gi.call(this,e,_)}),Gn("keyup",u,function(_){Gi.call(this,e,_)}),Gn("focus",u,function(_){Gi.call(this,e,_)}),Gn("blur",u,function(_){Gi.call(this,e,_)}),Gn("mouseenter",u,function(_){Gi.call(this,e,_)}),Gn("mouseleave",u,function(_){Gi.call(this,e,_)}),Gn("mouseover",u,function(_){Gi.call(this,e,_)}),Gn("mouseout",u,function(_){Gi.call(this,e,_)}),Z(i,u),Lt()}function Un(i,{threshold:e=1,duration:t=400}={}){const n=([s],a)=>{s.isIntersecting&&(i.style.transition=`opacity ${t}ms ease-out`,i.style.opacity="",a.disconnect())};i.style.opacity="0";const r=new IntersectionObserver(n,{threshold:e});return r.observe(i),{destroy(){r.disconnect()}}}var rb=Ce('<div class="rotating absolute z-9000 pointer-events-none bottom-[-32px] opacity-[0.3] svelte-beu6hy"><!></div>'),sb=Ce('<div class="h-0 w-[600px] relative hidden md:flex align-center justify-center"><div class="absolute top-[-300px] w-[600px] h-[600px] bg-violet rounded-[50%]"></div> <canvas width="600" height="500" class="svelte-beu6hy"></canvas> <!></div>');function ab(i,e){Rt(e,!1);let t=$n(),n=$n(!1);Cn(()=>{const l=new wv,c=new Dn(60,E(t).width/E(t).height,.1,1e3),u=new tM({canvas:E(t),antialias:!0,alpha:!0});u.setSize(E(t).width,E(t).height);const d=new ax(16777215,.8);l.add(d);const f=new qp(16777215,1);f.position.set(5,10,7.5),l.add(f),new nM().load("/laptop.glb",S=>{l.add(S.scene),S.scene.scale.set(1,1,1),S.scene.position.set(0,0,0),Pe(n,!0)},void 0,S=>{console.error("Error loading GLB model:",S)}),c.position.set(1.28,4.61,3.62),c.rotation.set(-.41,.27,.12),c.zoom=1;const g=new BM(c,u.domElement);g.target.set(.3,3.3,.5),g.update(),g.enableDamping=!0,g.dampingFactor=.001,g.enableZoom=!1,g.enablePan=!1;const _=g.getAzimuthalAngle(),m=g.getPolarAngle(),p=Yu.degToRad(15);g.minAzimuthAngle=_-p,g.maxAzimuthAngle=_+p,g.minPolarAngle=m-p,g.maxPolarAngle=m+p;const y=()=>{g.update(),u.render(l,c),requestAnimationFrame(y)};return y(),window.addEventListener("resize",()=>{c.aspect=E(t).width/E(t).height,c.updateProjectionMatrix(),u.setSize(E(t).width,E(t).height)}),()=>{window.removeEventListener("resize",()=>{})}}),ca();var r=sb(),s=_e(De(r),2);xt(s,l=>Pe(t,l),()=>E(t));var a=_e(s,2);{var o=l=>{var c=rb(),u=De(c);ib(u,{size:"64"}),Z(l,c)};Ke(a,l=>{E(n)||l(o)})}kt(r,l=>Un==null?void 0:Un(l)),Ye(()=>$i(s,"loaded",E(n))),Z(i,r),Lt()}function tn(i){return Object.entries(i).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function Mn(i,e,t,n={bubbles:!0}){if(typeof Event>"u")throw new Error("Event not defined.");if(!i)throw new Error("Tried to dispatch event without element.");const r=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));return i==null||i.dispatchEvent(r),r}function _u(i,e){let t=Object.getOwnPropertyNames(i);const n={};for(let r=0;r<t.length;r++){const s=t[r],a=s.indexOf("$");a!==-1&&e.indexOf(s.substring(0,a+1))!==-1||e.indexOf(s)===-1&&(n[s]=i[s])}return n}function un(i,e){let t=Object.getOwnPropertyNames(i);const n={};for(let r=0;r<t.length;r++){const s=t[r];s.substring(0,e.length)===e&&(n[s.substring(e.length)]=i[s])}return n}class ml{constructor(){this.elementMap=new Map}on(e,t,n,r){this.elementMap.has(e)||this.elementMap.set(e,{});const s=this.elementMap.get(e);if(s==null)throw new Error("Event map couldn't be created.");t in s||(s[t]=new Map),s[t].set(n,wg(e,t,n,r))}off(e,t,n){const r=this.elementMap.get(e);if(r==null||!(t in r))return;const s=r[t],a=s.get(n);a!=null&&(a(),s.delete(n),s.size===0&&(delete r[t],Object.keys(r).length===0&&this.elementMap.delete(e)))}clear(){this.elementMap.forEach((e,t)=>{for(let[n,r]of Object.entries(e))r.forEach((s,a)=>{s()})}),this.elementMap.clear()}}function je(i,e){let t=[];if(e)for(let n=0;n<e.length;n++){const r=e[n],s=Array.isArray(r)?r[0]:r;Array.isArray(r)&&r.length>1?t.push(s(i,r[1])):t.push(s(i))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let r=0;r<n.length;r++){const s=t[r];if(s&&s.update){const a=n[r];Array.isArray(a)&&a.length>1?s.update(a[1]):s.update()}}},destroy(){for(let n=0;n<t.length;n++){const r=t[n];r&&r.destroy&&r.destroy()}}}}var Co;function ob(i,e){e===void 0&&(e=!1);var t=i.CSS,n=Co;if(typeof Co=="boolean"&&!e)return Co;var r=t&&typeof t.supports=="function";if(!r)return!1;var s=t.supports("--css-vars","yes"),a=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=s||a,e||(Co=n),n}function lb(i,e,t){if(!i)return{x:0,y:0};var n=e.x,r=e.y,s=n+t.left,a=r+t.top,o,l;if(i.type==="touchstart"){var c=i;o=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-a}else{var u=i;o=u.pageX-s,l=u.pageY-a}return{x:o,y:l}}var vu=function(i,e){return vu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},vu(i,e)};function Hi(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");vu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Qt=function(){return Qt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Qt.apply(this,arguments)};function rr(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Zf(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s}function cb(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return i.concat(s||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Vi=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ub(i){return i===void 0&&(i=window),db(i)?{passive:!0}:!1}function db(i){i===void 0&&(i=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};i.document.addEventListener("test",n,t),i.document.removeEventListener("test",n,t)}catch{e=!1}return e}const nm=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:ub},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function fb(i,e){if(i.closest)return i.closest(e);for(var t=i;t;){if(im(t,e))return t;t=t.parentElement}return null}function im(i,e){var t=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return t.call(i,e)}function hb(i){var e=i;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const od=Object.freeze(Object.defineProperty({__proto__:null,closest:fb,estimateScrollWidth:hb,matches:im},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pb={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},mb={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Jf={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qf=["touchstart","pointerdown","mousedown","keydown"],$f=["touchend","pointerup","mouseup","contextmenu"],Ro=[],gb=function(i){Hi(e,i);function e(t){var n=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(r){n.activateImpl(r)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return pb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return mb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Jf},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var r=e.cssClasses,s=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(s),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(s),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,r;if(t){try{for(var s=rr(Qf),a=s.next();!a.done;a=s.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,r;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=rr($f),a=s.next();!a.done;a=s.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var r=rr(Qf),s=r.next();!s.done;s=r.next()){var a=s.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(o){t={error:o}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=rr($f),s=r.next();!s.done;s=r.next()){var a=s.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,r=Object.keys(n);r.forEach(function(s){s.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[s],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var s=this.previousActivationEvent,a=s&&t!==void 0&&s.type!==t.type;if(!a){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var o=t!==void 0&&Ro.length>0&&Ro.some(function(l){return n.adapter.containsEventTarget(l)});if(o){this.resetActivationState();return}t!==void 0&&(Ro.push(t.target),this.registerDeactivationHandlers(t)),r.wasElementMadeActive=this.checkElementMadeActive(t),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Ro=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=n.checkElementMadeActive(t),r.wasElementMadeActive&&n.animateActivation()),r.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,s=n.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,l=a.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",d="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,g=f.endPoint;u=h.x+"px, "+h.y+"px",d=g.x+"px, "+g.y+"px"}this.adapter.updateCssVariable(r,u),this.adapter.updateCssVariable(s,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,r=t.wasActivatedByPointer,s;r?s=lb(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:a}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState,s=r.hasDeactivationUXRun,a=r.isActivated,o=s||!a;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},Jf.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var r=Qt({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,r=t.wasElementMadeActive;(n||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),r=function(){var a=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return a+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:r();var s=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!==0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,s=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Vi);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var dt={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Bn=new Set;Bn.add(dt.BACKSPACE);Bn.add(dt.ENTER);Bn.add(dt.SPACEBAR);Bn.add(dt.PAGE_UP);Bn.add(dt.PAGE_DOWN);Bn.add(dt.END);Bn.add(dt.HOME);Bn.add(dt.ARROW_LEFT);Bn.add(dt.ARROW_UP);Bn.add(dt.ARROW_RIGHT);Bn.add(dt.ARROW_DOWN);Bn.add(dt.DELETE);Bn.add(dt.ESCAPE);Bn.add(dt.TAB);var qn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},kn=new Map;kn.set(qn.BACKSPACE,dt.BACKSPACE);kn.set(qn.ENTER,dt.ENTER);kn.set(qn.SPACEBAR,dt.SPACEBAR);kn.set(qn.PAGE_UP,dt.PAGE_UP);kn.set(qn.PAGE_DOWN,dt.PAGE_DOWN);kn.set(qn.END,dt.END);kn.set(qn.HOME,dt.HOME);kn.set(qn.ARROW_LEFT,dt.ARROW_LEFT);kn.set(qn.ARROW_UP,dt.ARROW_UP);kn.set(qn.ARROW_RIGHT,dt.ARROW_RIGHT);kn.set(qn.ARROW_DOWN,dt.ARROW_DOWN);kn.set(qn.DELETE,dt.DELETE);kn.set(qn.ESCAPE,dt.ESCAPE);kn.set(qn.TAB,dt.TAB);var Or=new Set;Or.add(dt.PAGE_UP);Or.add(dt.PAGE_DOWN);Or.add(dt.END);Or.add(dt.HOME);Or.add(dt.ARROW_LEFT);Or.add(dt.ARROW_UP);Or.add(dt.ARROW_RIGHT);Or.add(dt.ARROW_DOWN);function ln(i){var e=i.key;if(Bn.has(e))return e;var t=kn.get(i.keyCode);return t||dt.UNKNOWN}const{applyPassive:eh}=nm,{matches:_b}=od;function gi(i,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:r=!1,color:s,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u=g=>i.classList.add(g),removeClass:d=g=>i.classList.remove(g),addStyle:f=(g,_)=>i.style.setProperty(g,_),initPromise:h=Promise.resolve()}={}){let g,_=new ml,m=St("SMUI:addLayoutListener"),p,y=a,S=l,v=c;function w(){t?(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):s==="secondary"?(d("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary"))):(d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),g&&y!==a&&(y=a,a?g.activate():a===!1&&g.deactivate()),e&&!g?(g=new gb({addClass:u,browserSupportsCssVars:()=>ob(window),computeBoundingRect:()=>(o||i).getBoundingClientRect(),containsEventTarget:I=>i.contains(I),deregisterDocumentInteractionHandler:(I,b)=>_.off(document.documentElement,I,b),deregisterInteractionHandler:(I,b)=>_.off(l||i,I,b),deregisterResizeHandler:I=>window.removeEventListener("resize",I),getWindowPageOffset:()=>{var I,b;return{x:(I=window.pageXOffset)!==null&&I!==void 0?I:window.scrollX,y:(b=window.pageYOffset)!==null&&b!==void 0?b:window.scrollY}},isSurfaceActive:()=>a??_b(c||i,":active"),isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(I,b)=>{const x=eh();_.on(document.documentElement,I,b,typeof x=="boolean"?{capture:x}:x)},registerInteractionHandler:(I,b)=>{const x=eh();_.on(l||i,I,b,typeof x=="boolean"?{capture:x}:x)},registerResizeHandler:I=>_.on(window,"resize",I),removeClass:d,updateCssVariable:f}),h.then(()=>{g&&(g.init(),g.setUnbounded(n))})):g&&!e&&h.then(()=>{g&&(g.destroy(),g=void 0,_.clear())}),g&&(S!==l||v!==c)&&(S=l,v=c,g.destroy(),requestAnimationFrame(()=>{g&&(g.init(),g.setUnbounded(n))})),!e&&n&&u("mdc-ripple-upgraded--unbounded")}w(),m&&(p=m(T));function T(){g&&g.layout()}return{update(I){({ripple:e,surface:t,unbounded:n,disabled:r,color:s,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u,removeClass:d,addStyle:f,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:b=>i.classList.add(b),removeClass:b=>i.classList.remove(b),addStyle:(b,x)=>i.style.setProperty(b,x),initPromise:Promise.resolve()},I)),w()},destroy(){g&&(g.destroy(),g=void 0,_.clear(),d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),p&&p()}}}var vb=Ur("<svg><!></svg>");function gl(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"tag",3,"div"),r=hn(e,["$$slots","$$events","$$legacy","use","tag","children"]);const s=Ve(()=>["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(n())>-1);let a;function o(){return a}var l=We(),c=Ae(l);{var u=f=>{var h=vb();let g;var _=De(h);ut(_,()=>e.children??rt),xt(h,m=>a=m,()=>a),kt(h,(m,p)=>je==null?void 0:je(m,p),t),Ye(()=>g=Zt(h,g,{...r},void 0,!0)),Z(f,h)},d=f=>{var h=We(),g=Ae(h);{var _=p=>{var y=We(),S=Ae(y);xd(S,n,!1,(v,w)=>{xt(v,I=>a=I,()=>a),kt(v,(I,b)=>je==null?void 0:je(I,b),t);let T;Ye(()=>T=Zt(v,T,{...r},void 0,v.namespaceURI===xc,v.nodeName.includes("-")))}),Z(p,y)},m=p=>{var y=We(),S=Ae(y);xd(S,n,!1,(v,w)=>{xt(v,x=>a=x,()=>a),kt(v,(x,M)=>je==null?void 0:je(x,M),t);let T;Ye(()=>T=Zt(v,T,{...r},void 0,v.namespaceURI===xc,v.nodeName.includes("-")));var I=We(),b=Ae(I);ut(b,()=>e.children??rt),Z(w,I)}),Z(p,y)};Ke(g,p=>{E(s)?p(_):p(m,!1)},!0)}Z(f,h)};Ke(c,f=>{n()==="svg"?f(u):f(d,!1)})}return Z(i,l),Lt({getElement:o})}function Lo(i,e){Rt(e,!0);const[t,n]=ku(),r=Tc(e.value);Qe(e.key,r),bt(()=>{Yo(r,Ne(e.value))}),dr(()=>{r.set(void 0)});var s=We(),a=Ae(s);ut(a,()=>e.children??rt),Z(i,s),Lt(),n()}var xb=Ce('<div class="mdc-button__touch"></div>'),yb=Ce('<div class="mdc-button__ripple"></div> <!><!>',1);function th(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"style",3,""),s=O(e,"ripple",3,!0),a=O(e,"color",3,"primary"),o=O(e,"variant",3,"text"),l=O(e,"touch",3,!1),c=O(e,"action",3,"close"),u=O(e,"defaultAction",3,!1),d=O(e,"secondary",3,!1),f=O(e,"component",3,gl),h=O(e,"tag",19,()=>e.href==null?"button":"a"),g=hn(e,["$$slots","$$events","$$legacy","use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","tag","children"]),_,m=Ne({}),p=Ne({}),y=St("SMUI:button:context");const S=Ve(()=>y==="dialog:action"&&c()!=null?{"data-mdc-dialog-action":c()}:{action:c()}),v=Ve(()=>y==="dialog:action"&&u()?{"data-mdc-dialog-button-default":""}:{}),w=Ve(()=>y==="banner"?{}:{secondary:d()});let T=e.disabled;bt(()=>{if(T!==e.disabled){if(_){const V=P();"blur"in V&&V.blur()}T=g.disabled}}),Qe("SMUI:label:context","button"),Qe("SMUI:icon:context","button");function I(V){m[V]||(m[V]=!0)}function b(V){(!(V in m)||m[V])&&(m[V]=!1)}function x(V,z){p[V]!=z&&(z===""||z==null?delete p[V]:p[V]=z)}function M(){y==="banner"&&Mn(P(),d()?"SMUIBannerButtonSecondaryActionClick":"SMUIBannerButtonPrimaryActionClick")}function P(){return _.getElement()}var U=We(),L=Ae(U),Y=Ve(()=>[[gi,{ripple:s(),unbounded:!1,color:a(),disabled:!!e.disabled,addClass:I,removeClass:b,addStyle:x}],...t()]),H=Ve(()=>tn({[n()]:!0,"mdc-button":!0,"mdc-button--raised":o()==="raised","mdc-button--unelevated":o()==="unelevated","mdc-button--outlined":o()==="outlined","smui-button--color-secondary":a()==="secondary","mdc-button--touch":l(),"mdc-card__action":y==="card:action","mdc-card__action--button":y==="card:action","mdc-dialog__button":y==="dialog:action","mdc-top-app-bar__navigation-icon":y==="top-app-bar:navigation","mdc-top-app-bar__action-item":y==="top-app-bar:action","mdc-snackbar__action":y==="snackbar:actions","mdc-banner__secondary-action":y==="banner"&&d(),"mdc-banner__primary-action":y==="banner"&&!d(),"mdc-tooltip__action":y==="tooltip:rich-actions",...m})),F=Ve(()=>Object.entries(p).map(([V,z])=>`${V}: ${z};`).concat([r()]).join(" "));return ul(L,f,(V,z)=>{xt(z(V,qt({get tag(){return h()},get use(){return E(Y)},get class(){return E(H)},get style(){return E(F)}},()=>E(S),()=>E(v),()=>E(w),{get href(){return e.href}},()=>g,{onclick:oe=>{var ee;M(),(ee=e.onclick)==null||ee.call(e,oe)},children:(oe,ee)=>{var ge=yb(),be=_e(Ae(ge),2);ut(be,()=>e.children??rt);var qe=_e(be);{var ne=re=>{var Me=xb();Z(re,Me)};Ke(qe,re=>{l()&&re(ne)})}Z(oe,ge)},$$slots:{default:!0}})),oe=>_=oe,()=>_)}),Z(i,U),Lt({getElement:P})}var Sb=Ce(`<article class="relative mb-50 md:mr-20 flex flex-col gap-4"><h1 class="text-9 md:text-10 font-500">Привет!</h1> <p class="leading-8 text-5 md:leading-9 md:text-6 font-350">Меня зовут <span class="color-#6200ee">Арсений</span>, я люблю
    программирование, компьютеры и всё, что с ними связано</p> <div><button><!></button> <button><!></button></div></article>`);function Eb(i,e){let t=O(e,"aboutSection",8),n=O(e,"projectsSection",8);const r=h=>()=>{h.scrollIntoView({behavior:"smooth",block:"start"})};var s=Sb(),a=_e(De(s),4),o=De(a),l=Ve(()=>r(t())),c=De(o);th(c,{children:(h,g)=>{var _=zt("Обо мне");Z(h,_)},$$slots:{default:!0}});var u=_e(o,2),d=Ve(()=>r(n())),f=De(u);th(f,{children:(h,g)=>{var _=zt("Мои проекты");Z(h,_)},$$slots:{default:!0}}),kt(s,h=>Un==null?void 0:Un(h)),Gn("click",o,function(...h){var g;(g=E(l))==null||g.apply(this,h)}),Gn("click",u,function(...h){var g;(g=E(d))==null||g.apply(this,h)}),Z(i,s)}var Mb=Ce('<section class="relative grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-items-center pl-[3%] pr-[3%] md:pl-[10%] md:pr-[10%]"><!> <!></section>');function bb(i,e){let t=O(e,"element",12),n=O(e,"aboutSection",8),r=O(e,"projectsSection",8);var s=Mb(),a=De(s);Eb(a,{get aboutSection(){return n()},get projectsSection(){return r()}});var o=_e(a,2);ab(o,{}),xt(s,l=>t(l),()=>t()),Z(i,s)}var Tb=Ce('<span class="svelte-8wt3xa"><!></span>'),Ab=Ce('<span class="tooltip-slot svelte-8wt3xa"><!> <span><!></span></span>');function xu(i,e){const t=Ba(e,["children","$$slots","$$events","$$legacy"]),n=Ba(t,["tip","top","right","bottom","left","active","color"]);Rt(e,!1);let r=O(e,"tip",8,""),s=O(e,"top",8,!1),a=O(e,"right",8,!1),o=O(e,"bottom",8,!1),l=O(e,"left",8,!1),c=O(e,"active",8,!1),u=O(e,"color",8,"#0f172a"),d=0;const f=v=>{const w=v.querySelector(".tooltip"),T=v.querySelector(".tip");w.style.setProperty("--tooltip-color",u());const I=()=>{x(),w.style.opacity=1,w.style.zIndex="10"},b=()=>{w.style.opacity=0,w.style.zIndex="-1"},x=()=>{const{height:P,width:U}=v.getBoundingClientRect(),{height:L,width:Y}=w.getBoundingClientRect();let H,F,V,z;s()?(z=-(Y/2-U/2),V=P+12):a()?(z=U+12,V=P/2-L/2,d=L/2):o()?(z=-(Y/2-U/2),H=P+12):l()?(z=-(Y+12),V=P/2-L/2,d=L/2):(z=-Math.floor(Y/2-U/2),H=Math.floor(P+8),w.style.bottom="unset",w.style.right="unset"),w.style.top=`${H}px`,w.style.bottom=`${V}px`,w.style.right=`${F}px`,w.style.left=`${z}px`,T.style.setProperty("--top-gap",`${d-4}px`)},M=new ResizeObserver(x);return M.observe(v),v.addEventListener("mouseover",I),v.addEventListener("mouseout",b),{destroy(){v.removeEventListener("mouseover",I),v.removeEventListener("mouseout",b),M.unobserve(v)}}};ca();var h=Ab(),g=De(h);Ko(g,e,"default",{});var _=_e(g,2);let m;var p=De(_);{var y=v=>{var w=Tb();$i(w,"tip",!0);var T=De(w);op(T,r,!1,!1),Ye(()=>{$i(w,"top",s()),$i(w,"right",a()),$i(w,"bottom",o()),$i(w,"left",l())}),Z(v,w)},S=v=>{var w=We(),T=Ae(w);Ko(T,e,"custom-tip",{}),Z(v,w)};Ke(p,v=>{r()?v(y):v(S,!1)})}kt(h,v=>f==null?void 0:f(v)),Ye(()=>{m=Zt(_,m,{...n},"svelte-8wt3xa"),$i(_,"tooltip",!0),$i(_,"active",c())}),Z(i,h),Lt()}var wb=Ce('<button><div class="flex items-center gap-1"><i></i> <span class="text-6 md:text-5 color-black"> </span></div></button>');function Ib(i,e){let t=O(e,"icon",8),n=O(e,"tip",8),r=O(e,"href",8,""),s=$n(!1);var a=Pu(()=>`<a href="${r()}" class="color-white">${n()}</a>`);xu(i,{bottom:!0,get tip(){return E(a)},children:(o,l)=>{var c=wb(),u=De(c),d=De(u),f=_e(d,2),h=De(f);Ye(()=>{ts(d,`${`${t()} text-13 md:m-1`??""} svelte-nwtkd8`),$i(d,"colored",E(s)),wn(h,n())}),Gn("mouseenter",c,()=>Pe(s,!0)),Gn("mouseleave",c,()=>Pe(s,!1)),Z(o,c)},$$slots:{default:!0}})}var Cb=Ce('<section><h3 class="color-#6200ee text-5 md:text-6 mb-7"> </h3> <div class="flex flex-wrap gap-7 justify-center pb-5"></div></section>');function Po(i,e){let t=O(e,"title",8),n=O(e,"data",8);var r=Cb(),s=De(r),a=De(s),o=_e(s,2);Gs(o,5,n,zs,(l,c)=>{Ib(l,{get icon(){return E(c).icon},get tip(){return E(c).tip},get href(){return E(c).href}})}),kt(r,l=>Un==null?void 0:Un(l)),Ye(()=>wn(a,t())),Z(i,r)}var Rb=Ce('<ul class="timeline svelte-1qx6lg0"><!></ul>');function nh(i,e){Rt(e,!0);let t=O(e,"position",3,"right"),n=O(e,"style",3,null);Qe("TimelineConfig",{rootPosition:t()});var r=Rb(),s=De(r);ut(s,()=>e.children??rt),Ye(()=>ei(r,"style",n())),Z(i,r),Lt()}var Lb=Ce('<div class="opposite-block svelte-77d8h8"></div>'),Pb=Ce("<li><!> <!></li>");function sc(i,e){const t=Ng(e);Rt(e,!1);let n=O(e,"position",8,null),r=O(e,"style",8,null);const s=St("TimelineConfig"),a=n()?n():s.rootPosition;Qe("ParentPosition",a),ca();var o=Pb();ts(o,`${`timeline-item ${a}`??""} svelte-77d8h8`);var l=De(o);{var c=f=>{var h=Lb();Z(f,h)},u=f=>{var h=We(),g=Ae(h);Ko(g,e,"opposite-content",{}),Z(f,h)};Ke(l,f=>{t["opposite-content"]?f(u,!1):f(c)})}var d=_e(l,2);Ko(d,e,"default",{}),Ye(()=>ei(o,"style",r())),Z(i,o),Lt()}var Db=Ce('<div class="timeline-separator svelte-6e6s8c"><!></div>');function ac(i,e){Rt(e,!0);let t=O(e,"style",3,null);var n=Db(),r=De(n);ut(r,()=>e.children??rt),Ye(()=>ei(n,"style",t())),Z(i,n),Lt()}var Ub=Ce('<span class="timeline-dot svelte-1ggf9p1"><!></span>');function oc(i,e){Rt(e,!0);let t=O(e,"style",3,null);var n=Ub(),r=De(n);ut(r,()=>e.children??rt),Ye(()=>ei(n,"style",t())),Z(i,n),Lt()}var Ob=Ce('<span class="timeline-connector svelte-1usms3k"></span>');function lc(i,e){let t=O(e,"style",3,null);var n=Ob();Ye(()=>ei(n,"style",t())),Z(i,n)}var Nb=Ce("<div><!></div>");function cc(i,e){Rt(e,!0);let t=O(e,"style",3,null);const n=St("TimelineConfig"),r=St("ParentPosition"),s=r||n.rootPosition;var a=Nb();ts(a,`${`timeline-content ${s}`??""} svelte-ov1kt8`);var o=De(a);ut(o,()=>e.children??rt),Ye(()=>ei(a,"style",t())),Z(i,a),Lt()}var Fb=Ce("<div><!></div>");function uc(i,e){Rt(e,!0);let t=O(e,"style",3,null);const n=St("TimelineConfig"),r=St("ParentPosition"),s=r||n.rootPosition;var a=Fb();ts(a,`${`timeline-opposite-content ${s}`??""} svelte-r6jwvl`);var o=De(a);ut(o,()=>e.children??rt),Ye(()=>ei(a,"style",t())),Z(i,a),Lt()}var Bb=Ce("<!> <!>",1),kb=Ce('<h3 class="m-0 p-0 text-[1.5rem] tracking-[1.5px]"> </h3>'),Hb=Ce("<!> <!>",1),Vb=Ce('<p class="m-0 text-gray-500 text-[1.2rem] tracking-[1.5px] leading-4 md:leading-6"> </p>'),zb=Ce("<!> <!>",1),Gb=Ce('<h3 class="m-0 p-0 text-[1.5rem] tracking-[1.5px]">Сейчас</h3>'),Wb=Ce("<!> <!>",1),Xb=Ce('<p class="m-0 text-gray-500 text-[1.2rem] tracking-[1.5px] leading-4 md:leading-6">Учусь и становлюсь лучше :3</p>'),jb=Ce("<!> <!>",1),qb=Ce("<!> <!>",1),Kb=Ce('<h3 class="m-0 p-0 text-[1rem] tracking-[1px]"> </h3>'),Yb=Ce("<!> <!>",1),Zb=Ce('<p class="m-0 text-gray-500 text-[0.8rem] tracking-[1px] leading-4"> </p>'),Jb=Ce('<div class="hidden md:block"><!></div> <div class="block md:hidden"><!></div>',1);function Qb(i){const e=[{title:"Июнь 2022",tip:"Выпуск из Физтех-лицея"},{title:"Август 2022",tip:"Начало обучения в ИТМО"},{title:"Октябрь 2023",tip:"Коммерческий проект по разработке интернет-магазина"},{title:"Декабрь 2023",tip:"Начало работы в составе Pawlin Technologies"}];var t=Jb(),n=Ae(t),r=De(n);nh(r,{position:"alternate",style:"padding: 20px 0 200px 0; transform-origin: top center;",children:(o,l)=>{var c=jb(),u=Ae(c);Gs(u,1,()=>e,zs,(f,h)=>{sc(f,{children:(g,_)=>{var m=Hb(),p=Ae(m);ac(p,{style:"height: 100px;",children:(S,v)=>{var w=Bb(),T=Ae(w);oc(T,{style:"background-color: #6200eeaa; width: 6px; height: 6px; border: none;"});var I=_e(T,2);lc(I,{}),Z(S,w)},$$slots:{default:!0}});var y=_e(p,2);cc(y,{children:(S,v)=>{var w=kb(),T=De(w);Ye(()=>wn(T,E(h).title)),Z(S,w)},$$slots:{default:!0}}),Z(g,m)},$$slots:{default:!0,"opposite-content":(g,_)=>{uc(g,{slot:"opposite-content",children:(m,p)=>{var y=Vb(),S=De(y);Ye(()=>wn(S,E(h).tip)),Z(m,y)},$$slots:{default:!0}})}}})});var d=_e(u,2);sc(d,{children:(f,h)=>{var g=Wb(),_=Ae(g);ac(_,{style:"height: 100px;",children:(p,y)=>{var S=zb(),v=Ae(S);oc(v,{style:"background-color: transparent; width: 4px; height: 4px; border: 2px solid #00000080;"});var w=_e(v,2);lc(w,{}),Z(p,S)},$$slots:{default:!0}});var m=_e(_,2);cc(m,{children:(p,y)=>{var S=Gb();Z(p,S)},$$slots:{default:!0}}),Z(f,g)},$$slots:{default:!0,"opposite-content":(f,h)=>{uc(f,{slot:"opposite-content",children:(g,_)=>{var m=Xb();Z(g,m)},$$slots:{default:!0}})}}}),Z(o,c)},$$slots:{default:!0}});var s=_e(n,2),a=De(s);nh(a,{position:"right",style:"padding: 40px 0 200px 0; transform-origin: top center;",children:(o,l)=>{var c=We(),u=Ae(c);Gs(u,1,()=>e,zs,(d,f)=>{sc(d,{children:(h,g)=>{var _=Yb(),m=Ae(_);ac(m,{style:"height: 150px;",children:(y,S)=>{var v=qb(),w=Ae(v);oc(w,{style:"background-color: #6200eeaa; width: 3px; height: 3px; border: none;"});var T=_e(w,2);lc(T,{}),Z(y,v)},$$slots:{default:!0}});var p=_e(m,2);cc(p,{children:(y,S)=>{var v=Kb(),w=De(v);Ye(()=>wn(w,E(f).title)),Z(y,v)},$$slots:{default:!0}}),Z(h,_)},$$slots:{default:!0,"opposite-content":(h,g)=>{uc(h,{slot:"opposite-content",children:(_,m)=>{var p=Zb(),y=De(p);Ye(()=>wn(y,E(f).tip)),Z(_,p)},$$slots:{default:!0}})}}})}),Z(o,c)},$$slots:{default:!0}}),Z(i,t)}const rm=/^[a-z0-9]+(-[a-z0-9]+)*$/,_l=(i,e,t,n="")=>{const r=i.split(":");if(i.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;n=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const o=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:n,prefix:l,name:o};return e&&!zo(c)?null:c}const s=r[0],a=s.split("-");if(a.length>1){const o={provider:n,prefix:a.shift(),name:a.join("-")};return e&&!zo(o)?null:o}if(t&&n===""){const o={provider:n,prefix:"",name:s};return e&&!zo(o,t)?null:o}return null},zo=(i,e)=>i?!!((e&&i.prefix===""||i.prefix)&&i.name):!1,sm=Object.freeze({left:0,top:0,width:16,height:16}),tl=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),vl=Object.freeze({...sm,...tl}),yu=Object.freeze({...vl,body:"",hidden:!1});function $b(i,e){const t={};!i.hFlip!=!e.hFlip&&(t.hFlip=!0),!i.vFlip!=!e.vFlip&&(t.vFlip=!0);const n=((i.rotate||0)+(e.rotate||0))%4;return n&&(t.rotate=n),t}function ih(i,e){const t=$b(i,e);for(const n in yu)n in tl?n in i&&!(n in t)&&(t[n]=tl[n]):n in e?t[n]=e[n]:n in i&&(t[n]=i[n]);return t}function eT(i,e){const t=i.icons,n=i.aliases||Object.create(null),r=Object.create(null);function s(a){if(t[a])return r[a]=[];if(!(a in r)){r[a]=null;const o=n[a]&&n[a].parent,l=o&&s(o);l&&(r[a]=[o].concat(l))}return r[a]}return Object.keys(t).concat(Object.keys(n)).forEach(s),r}function tT(i,e,t){const n=i.icons,r=i.aliases||Object.create(null);let s={};function a(o){s=ih(n[o]||r[o],s)}return a(e),t.forEach(a),ih(i,s)}function am(i,e){const t=[];if(typeof i!="object"||typeof i.icons!="object")return t;i.not_found instanceof Array&&i.not_found.forEach(r=>{e(r,null),t.push(r)});const n=eT(i);for(const r in n){const s=n[r];s&&(e(r,tT(i,r,s)),t.push(r))}return t}const nT={provider:"",aliases:{},not_found:{},...sm};function dc(i,e){for(const t in e)if(t in i&&typeof i[t]!=typeof e[t])return!1;return!0}function om(i){if(typeof i!="object"||i===null)return null;const e=i;if(typeof e.prefix!="string"||!i.icons||typeof i.icons!="object"||!dc(i,nT))return null;const t=e.icons;for(const r in t){const s=t[r];if(!r||typeof s.body!="string"||!dc(s,yu))return null}const n=e.aliases||Object.create(null);for(const r in n){const s=n[r],a=s.parent;if(!r||typeof a!="string"||!t[a]&&!n[a]||!dc(s,yu))return null}return e}const rh=Object.create(null);function iT(i,e){return{provider:i,prefix:e,icons:Object.create(null),missing:new Set}}function ta(i,e){const t=rh[i]||(rh[i]=Object.create(null));return t[e]||(t[e]=iT(i,e))}function lm(i,e){return om(e)?am(e,(t,n)=>{n?i.icons[t]=n:i.missing.add(t)}):[]}function rT(i,e,t){try{if(typeof t.body=="string")return i.icons[e]={...t},!0}catch{}return!1}let Ga=!1;function cm(i){return typeof i=="boolean"&&(Ga=i),Ga}function sT(i){const e=typeof i=="string"?_l(i,!0,Ga):i;if(e){const t=ta(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function aT(i,e){const t=_l(i,!0,Ga);if(!t)return!1;const n=ta(t.provider,t.prefix);return e?rT(n,t.name,e):(n.missing.add(t.name),!0)}function oT(i,e){if(typeof i!="object")return!1;if(typeof e!="string"&&(e=i.provider||""),Ga&&!e&&!i.prefix){let r=!1;return om(i)&&(i.prefix="",am(i,(s,a)=>{aT(s,a)&&(r=!0)})),r}const t=i.prefix;if(!zo({provider:e,prefix:t,name:"a"}))return!1;const n=ta(e,t);return!!lm(n,i)}const um=Object.freeze({width:null,height:null}),dm=Object.freeze({...um,...tl}),lT=/(-?[0-9.]*[0-9]+[0-9.]*)/g,cT=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function sh(i,e,t){if(e===1)return i;if(t=t||100,typeof i=="number")return Math.ceil(i*e*t)/t;if(typeof i!="string")return i;const n=i.split(lT);if(n===null||!n.length)return i;const r=[];let s=n.shift(),a=cT.test(s);for(;;){if(a){const o=parseFloat(s);isNaN(o)?r.push(s):r.push(Math.ceil(o*e*t)/t)}else r.push(s);if(s=n.shift(),s===void 0)return r.join("");a=!a}}function uT(i,e="defs"){let t="";const n=i.indexOf("<"+e);for(;n>=0;){const r=i.indexOf(">",n),s=i.indexOf("</"+e);if(r===-1||s===-1)break;const a=i.indexOf(">",s);if(a===-1)break;t+=i.slice(r+1,s).trim(),i=i.slice(0,n).trim()+i.slice(a+1)}return{defs:t,content:i}}function dT(i,e){return i?"<defs>"+i+"</defs>"+e:e}function fT(i,e,t){const n=uT(i);return dT(n.defs,e+n.content+t)}const hT=i=>i==="unset"||i==="undefined"||i==="none";function pT(i,e){const t={...vl,...i},n={...dm,...e},r={left:t.left,top:t.top,width:t.width,height:t.height};let s=t.body;[t,n].forEach(_=>{const m=[],p=_.hFlip,y=_.vFlip;let S=_.rotate;p?y?S+=2:(m.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),m.push("scale(-1 1)"),r.top=r.left=0):y&&(m.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),m.push("scale(1 -1)"),r.top=r.left=0);let v;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:v=r.height/2+r.top,m.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:m.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:v=r.width/2+r.left,m.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}S%2===1&&(r.left!==r.top&&(v=r.left,r.left=r.top,r.top=v),r.width!==r.height&&(v=r.width,r.width=r.height,r.height=v)),m.length&&(s=fT(s,'<g transform="'+m.join(" ")+'">',"</g>"))});const a=n.width,o=n.height,l=r.width,c=r.height;let u,d;a===null?(d=o===null?"1em":o==="auto"?c:o,u=sh(d,l/c)):(u=a==="auto"?l:a,d=o===null?sh(u,c/l):o==="auto"?c:o);const f={},h=(_,m)=>{hT(m)||(f[_]=m.toString())};h("width",u),h("height",d);const g=[r.left,r.top,l,c];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:s}}const mT=/\sid="(\S+)"/g,gT="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let _T=0;function vT(i,e=gT){const t=[];let n;for(;n=mT.exec(i);)t.push(n[1]);if(!t.length)return i;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return t.forEach(s=>{const a=typeof e=="function"?e(s):e+(_T++).toString(),o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");i=i.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+a+r+"$3")}),i=i.replace(new RegExp(r,"g"),""),i}const Su=Object.create(null);function xT(i,e){Su[i]=e}function Eu(i){return Su[i]||Su[""]}function ld(i){let e;if(typeof i.resources=="string")e=[i.resources];else if(e=i.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const cd=Object.create(null),Ta=["https://api.simplesvg.com","https://api.unisvg.com"],Go=[];for(;Ta.length>0;)Ta.length===1||Math.random()>.5?Go.push(Ta.shift()):Go.push(Ta.pop());cd[""]=ld({resources:["https://api.iconify.design"].concat(Go)});function yT(i,e){const t=ld(e);return t===null?!1:(cd[i]=t,!0)}function ud(i){return cd[i]}const ST=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ah=ST();function ET(i,e){const t=ud(i);if(!t)return 0;let n;if(!t.maxURL)n=0;else{let r=0;t.resources.forEach(a=>{r=Math.max(r,a.length)});const s=e+".json?icons=";n=t.maxURL-r-t.path.length-s.length}return n}function MT(i){return i===404}const bT=(i,e,t)=>{const n=[],r=ET(i,e),s="icons";let a={type:s,provider:i,prefix:e,icons:[]},o=0;return t.forEach((l,c)=>{o+=l.length+1,o>=r&&c>0&&(n.push(a),a={type:s,provider:i,prefix:e,icons:[]},o=l.length),a.icons.push(l)}),n.push(a),n};function TT(i){if(typeof i=="string"){const e=ud(i);if(e)return e.path}return"/"}const AT=(i,e,t)=>{if(!ah){t("abort",424);return}let n=TT(e.provider);switch(e.type){case"icons":{const s=e.prefix,o=e.icons.join(","),l=new URLSearchParams({icons:o});n+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:t("abort",400);return}let r=503;ah(i+n).then(s=>{const a=s.status;if(a!==200){setTimeout(()=>{t(MT(a)?"abort":"next",a)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?t("abort",s):t("next",r)});return}setTimeout(()=>{t("success",s)})}).catch(()=>{t("next",r)})},wT={prepare:bT,send:AT};function IT(i){const e={loaded:[],missing:[],pending:[]},t=Object.create(null);i.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return i.forEach(r=>{if(n.name===r.name&&n.prefix===r.prefix&&n.provider===r.provider)return;n=r;const s=r.provider,a=r.prefix,o=r.name,l=t[s]||(t[s]=Object.create(null)),c=l[a]||(l[a]=ta(s,a));let u;o in c.icons?u=e.loaded:a===""||c.missing.has(o)?u=e.missing:u=e.pending;const d={provider:s,prefix:a,name:o};u.push(d)}),e}function fm(i,e){i.forEach(t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter(r=>r.id!==e))})}function CT(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const e=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!e.length)return;let t=!1;const n=i.provider,r=i.prefix;e.forEach(s=>{const a=s.icons,o=a.pending.length;a.pending=a.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(i.icons[c])a.loaded.push({provider:n,prefix:r,name:c});else if(i.missing.has(c))a.missing.push({provider:n,prefix:r,name:c});else return t=!0,!0;return!1}),a.pending.length!==o&&(t||fm([i],s.id),s.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),s.abort))})}))}let RT=0;function LT(i,e,t){const n=RT++,r=fm.bind(null,t,n);if(!e.pending.length)return r;const s={id:n,icons:e,callback:i,abort:r};return t.forEach(a=>{(a.loaderCallbacks||(a.loaderCallbacks=[])).push(s)}),r}function PT(i,e=!0,t=!1){const n=[];return i.forEach(r=>{const s=typeof r=="string"?_l(r,e,t):r;s&&n.push(s)}),n}var DT={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function UT(i,e,t,n){const r=i.resources.length,s=i.random?Math.floor(Math.random()*r):i.index;let a;if(i.random){let T=i.resources.slice(0);for(a=[];T.length>1;){const I=Math.floor(Math.random()*T.length);a.push(T[I]),T=T.slice(0,I).concat(T.slice(I+1))}a=a.concat(T)}else a=i.resources.slice(s).concat(i.resources.slice(0,s));const o=Date.now();let l="pending",c=0,u,d=null,f=[],h=[];typeof n=="function"&&h.push(n);function g(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),g(),f.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),f=[]}function m(T,I){I&&(h=[]),typeof T=="function"&&h.push(T)}function p(){return{startTime:o,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:m,abort:_}}function y(){l="failed",h.forEach(T=>{T(void 0,u)})}function S(){f.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),f=[]}function v(T,I,b){const x=I!=="success";switch(f=f.filter(M=>M!==T),l){case"pending":break;case"failed":if(x||!i.dataAfterTimeout)return;break;default:return}if(I==="abort"){u=b,y();return}if(x){u=b,f.length||(a.length?w():y());return}if(g(),S(),!i.random){const M=i.resources.indexOf(T.resource);M!==-1&&M!==i.index&&(i.index=M)}l="completed",h.forEach(M=>{M(b)})}function w(){if(l!=="pending")return;g();const T=a.shift();if(T===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(S(),y())},i.timeout);return}y();return}const I={status:"pending",resource:T,callback:(b,x)=>{v(I,b,x)}};f.push(I),c++,d=setTimeout(w,i.rotate),t(T,e,I.callback)}return setTimeout(w),p}function hm(i){const e={...DT,...i};let t=[];function n(){t=t.filter(o=>o().status==="pending")}function r(o,l,c){const u=UT(e,o,l,(d,f)=>{n(),c&&c(d,f)});return t.push(u),u}function s(o){return t.find(l=>o(l))||null}return{query:r,find:s,setIndex:o=>{e.index=o},getIndex:()=>e.index,cleanup:n}}function oh(){}const fc=Object.create(null);function OT(i){if(!fc[i]){const e=ud(i);if(!e)return;const t=hm(e),n={config:e,redundancy:t};fc[i]=n}return fc[i]}function NT(i,e,t){let n,r;if(typeof i=="string"){const s=Eu(i);if(!s)return t(void 0,424),oh;r=s.send;const a=OT(i);a&&(n=a.redundancy)}else{const s=ld(i);if(s){n=hm(s);const a=i.resources?i.resources[0]:"",o=Eu(a);o&&(r=o.send)}}return!n||!r?(t(void 0,424),oh):n.query(e,r,t)().abort}function lh(){}function FT(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,CT(i)}))}function BT(i){const e=[],t=[];return i.forEach(n=>{(n.match(rm)?e:t).push(n)}),{valid:e,invalid:t}}function Aa(i,e,t){function n(){const r=i.pendingIcons;e.forEach(s=>{r&&r.delete(s),i.icons[s]||i.missing.add(s)})}if(t&&typeof t=="object")try{if(!lm(i,t).length){n();return}}catch(r){console.error(r)}n(),FT(i)}function ch(i,e){i instanceof Promise?i.then(t=>{e(t)}).catch(()=>{e(null)}):e(i)}function kT(i,e){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(e).sort():i.iconsToLoad=e,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:t,prefix:n}=i,r=i.iconsToLoad;if(delete i.iconsToLoad,!r||!r.length)return;const s=i.loadIcon;if(i.loadIcons&&(r.length>1||!s)){ch(i.loadIcons(r,n,t),u=>{Aa(i,r,u)});return}if(s){r.forEach(u=>{const d=s(u,n,t);ch(d,f=>{const h=f?{prefix:n,icons:{[u]:f}}:null;Aa(i,[u],h)})});return}const{valid:a,invalid:o}=BT(r);if(o.length&&Aa(i,o,null),!a.length)return;const l=n.match(rm)?Eu(t):null;if(!l){Aa(i,a,null);return}l.prepare(t,n,a).forEach(u=>{NT(t,u,d=>{Aa(i,u.icons,d)})})}))}const HT=(i,e)=>{const t=PT(i,!0,cm()),n=IT(t);if(!n.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(n.loaded,n.missing,n.pending,lh)}),()=>{l=!1}}const r=Object.create(null),s=[];let a,o;return n.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===o&&c===a)return;a=c,o=u,s.push(ta(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),n.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=ta(c,u),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(d)||(h.add(d),r[c][u].push(d))}),s.forEach(l=>{const c=r[l.provider][l.prefix];c.length&&kT(l,c)}),e?LT(e,n,s):lh};function VT(i,e){const t={...i};for(const n in e){const r=e[n],s=typeof r;n in um?(r===null||r&&(s==="string"||s==="number"))&&(t[n]=r):s===typeof t[n]&&(t[n]=n==="rotate"?r%4:r)}return t}const zT=/[\s,]+/;function GT(i,e){e.split(zT).forEach(t=>{switch(t.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}function WT(i,e=0){const t=i.replace(/^-?[0-9.]*/,"");function n(r){for(;r<0;)r+=4;return r%4}if(t===""){const r=parseInt(i);return isNaN(r)?0:n(r)}else if(t!==i){let r=0;switch(t){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(i.slice(0,i.length-t.length));return isNaN(s)?0:(s=s/r,s%1===0?n(s):0)}}return e}function XT(i,e){let t=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in e)t+=" "+n+'="'+e[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+i+"</svg>"}function jT(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function qT(i){return"data:image/svg+xml,"+jT(i)}function KT(i){return'url("'+qT(i)+'")'}const uh={...dm,inline:!1},YT={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ZT={display:"inline-block"},Mu={"background-color":"currentColor"},pm={"background-color":"transparent"},dh={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},fh={"-webkit-mask":Mu,mask:Mu,background:pm};for(const i in fh){const e=fh[i];for(const t in dh)e[i+"-"+t]=dh[t]}function JT(i){return i+(i.match(/^[-0-9.]+$/)?"px":"")}function QT(i,e){const t=VT(uh,e),n=e.mode||"svg",r=n==="svg"?{...YT}:{};i.body.indexOf("xlink:")===-1&&delete r["xmlns:xlink"];let s=typeof e.style=="string"?e.style:"";for(let p in e){const y=e[p];if(y!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":t[p]=y===!0||y==="true"||y===1;break;case"flip":typeof y=="string"&&GT(t,y);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+y+"; ";break;case"rotate":typeof y=="string"?t[p]=WT(y):typeof y=="number"&&(t[p]=y);break;case"ariaHidden":case"aria-hidden":y!==!0&&y!=="true"&&delete r["aria-hidden"];break;default:if(p.slice(0,3)==="on:")break;uh[p]===void 0&&(r[p]=y)}}const a=pT(i,t),o=a.attributes;if(t.inline&&(s="vertical-align: -0.125em; "+s),n==="svg"){Object.assign(r,o),s!==""&&(r.style=s);let p=0,y=e.id;return typeof y=="string"&&(y=y.replace(/-/g,"_")),{svg:!0,attributes:r,body:vT(a.body,y?()=>y+"ID"+p++:"iconifySvelte")}}const{body:l,width:c,height:u}=i,d=n==="mask"||(n==="bg"?!1:l.indexOf("currentColor")!==-1),f=XT(l,{...o,width:c+"",height:u+""}),g={"--svg":KT(f)},_=p=>{const y=o[p];y&&(g[p]=JT(y))};_("width"),_("height"),Object.assign(g,ZT,d?Mu:pm);let m="";for(const p in g)m+=p+": "+g[p]+";";return r.style=m+s,{svg:!1,attributes:r}}cm(!0);xT("",wT);if(typeof document<"u"&&typeof window<"u"){const i=window;if(i.IconifyPreload!==void 0){const e=i.IconifyPreload,t="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!oT(n))&&console.error(t)}catch{console.error(t)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const r=e[t];if(typeof r!="object"||!r||r.resources===void 0)continue;yT(t,r)||console.error(n)}catch{console.error(n)}}}}function $T(i,e,t,n,r){function s(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof i=="object"&&i!==null&&typeof i.body=="string")return e.name="",s(),{data:{...vl,...i}};let a;if(typeof i!="string"||(a=_l(i,!1,!0))===null)return s(),null;const o=sT(a);if(!o)return t&&(!e.loading||e.loading.name!==i)&&(s(),e.name="",e.loading={name:i,abort:HT([a],n)}),null;s(),e.name!==i&&(e.name=i,r&&!e.destroyed&&r(i));const l=["iconify"];return a.prefix!==""&&l.push("iconify--"+a.prefix),a.provider!==""&&l.push("iconify--"+a.provider),{data:o,classes:l}}function hh(i,e){return i?QT({...vl,...i},e):null}var eA=Ur("<svg><!></svg>"),tA=Ce("<span></span>");function hc(i,e){const t=Ba(e,["children","$$slots","$$events","$$legacy"]);Rt(e,!1);const n=$n({name:"",loading:null,destroyed:!1});let r=$n(!1),s=$n(0),a=$n();const o=f=>{typeof t.onLoad=="function"&&t.onLoad(f),qg()("load",{icon:f})};function l(){Ec(s)}Cn(()=>{Pe(r,!0)}),dr(()=>{xl(n,E(n).destroyed=!0),E(n).loading&&(E(n).loading.abort(),xl(n,E(n).loading=null))}),ng(()=>(E(s),Nu(t),E(r),E(n),E(a),hh),()=>{E(s);const f=!!t.ssr||E(r),h=$T(t.icon,E(n),f,l,o);Pe(a,h?hh(h.data,t):null),E(a)&&h.classes&&xl(a,E(a).attributes.class=(typeof t.class=="string"?t.class+" ":"")+h.classes.join(" "))}),ig(),ca();var c=We(),u=Ae(c);{var d=f=>{var h=We(),g=Ae(h);{var _=p=>{var y=eA();let S;var v=De(y);op(v,()=>E(a).body,!0,!1),Ye(()=>S=Zt(y,S,{...E(a).attributes},void 0,!0)),Z(p,y)},m=p=>{var y=tA();let S;Ye(()=>S=Zt(y,S,{...E(a).attributes})),Z(p,y)};Ke(g,p=>{E(a).svg?p(_):p(m,!1)})}Z(f,h)};Ke(u,f=>{E(a)&&f(d)})}Z(i,c),Lt()}var nA=Ce(`<section class="min-h-[100vh] flex flex-col items-center md:pl-20% md:pr-20% md:w-60%"><div class="flex items-center text-center p-4 md:p-15 flex-col gap-15"><article><h1 class="text-6 md:text-7 leading-9 font-500 mb-3">Немного обо мне</h1> <p class="leading-6 text-4 md:leading-7 md:text-5 font-350">Я студент 3 курса кафедры <span class="color-#6200ee">ВТ</span> университета <span class="color-#6200ee">ИТМО</span>. В свободное время
        я часто занимаюсь написанием кода и изучением новых технологий. Мне
        нравится работать с различными технологиями, особенно в сфере системного
        программирования и информационной безопасности.</p> <div class="flex flex-col md:flex-row gap-3 md:gap-15 items-center justify-center mt-14"><a href="https://t.me/armemius" target="_blank" class="flex flex-row items-center gap-2 font-150 color-black no-underline"><!> <p class="text-5 md:text-6 leading-5 md:leading-6">Telegram</p></a> <a href="https://github.com/Armemius" target="_blank" class="flex flex-row items-center gap-2 font-150 color-black no-underline"><!> <p class="text-5 md:text-6 leading-5 md:leading-6">Github</p></a> <a href="mailto:rusgy@yandex.ru" target="_blank" class="flex flex-row items-center gap-2 font-150 color-black no-underline"><!> <p class="text-5 md:text-6 leading-5 md:leading-6">E-Mail</p></a></div></article> <article class="md:w-[80%] flex flex-col gap-3"><h2 class="text-6 md:text-7 leading-9 font-500">Навыки</h2> <div class="flex flex-col gap-7"><!> <!> <!> <!></div></article></div> <div class="flex p-4 md:p-15 flex-col"><h1 class="md:ml-auto md:mr-auto text-6 md:text-7 leading-9 font-500">Опыт</h1> <!></div></section>`);function iA(i,e){let t=O(e,"element",12);const n=[{tip:"C",icon:"devicon-c-plain",href:"https://en.wikipedia.org/wiki/C_(programming_language)"},{tip:"C++",icon:"devicon-cplusplus-plain",href:"https://isocpp.org/"},{tip:"Rust",icon:"devicon-rust-plain",href:"https://www.rust-lang.org/"},{tip:"Assembly",icon:"devicon-embeddedc-plain",href:"https://en.wikipedia.org/wiki/Assembly_language"},{tip:"Python",icon:"devicon-python-plain",href:"https://www.python.org/"},{tip:"Bash",icon:"devicon-bash-plain",href:"https://www.gnu.org/software/bash/"},{tip:"JavaScript",icon:"devicon-javascript-plain",href:"https://developer.mozilla.org/docs/Web/JavaScript"},{tip:"TypeScript",icon:"devicon-typescript-plain",href:"https://www.typescriptlang.org/"},{tip:"Java",icon:"devicon-java-plain",href:"https://www.oracle.com/java/"},{tip:"Kotlin",icon:"devicon-kotlin-plain",href:"https://kotlinlang.org/"},{tip:"MATLAB",icon:"devicon-matlab-plain",href:"https://www.mathworks.com/products/matlab.html"}],r=[{tip:"React",icon:"devicon-react-original",href:"https://reactjs.org/"},{tip:"Svelte",icon:"devicon-svelte-plain",href:"https://svelte.dev/"},{tip:"Three.js",icon:"devicon-threejs-original",href:"https://threejs.org/"},{tip:"Spring",icon:"devicon-spring-plain",href:"https://spring.io/"},{tip:"OpenCV",icon:"devicon-opencv-plain",href:"https://opencv.org/"},{tip:"TensorFlow",icon:"devicon-tensorflow-original",href:"https://www.tensorflow.org/"}],s=[{tip:"PostgreSQL",icon:"devicon-postgresql-plain",href:"https://www.postgresql.org/"},{tip:"SQLite",icon:"devicon-sqlite-plain",href:"https://www.sqlite.org/"},{tip:"MongoDB",icon:"devicon-mongodb-plain",href:"https://www.mongodb.com/"}],a=[{tip:"Git",icon:"devicon-git-plain",href:"https://git-scm.com/"},{tip:"SVN",icon:"devicon-subversion-plain",href:"https://subversion.apache.org/"},{tip:"CMake",icon:"devicon-cmake-plain",href:"https://cmake.org/"},{tip:"Gradle",icon:"devicon-gradle-plain",href:"https://gradle.org/"},{tip:"Maven",icon:"devicon-maven-plain",href:"https://maven.apache.org/"},{tip:"Docker",icon:"devicon-docker-plain",href:"https://www.docker.com/"},{tip:"Nginx",icon:"devicon-nginx-plain",href:"https://www.nginx.com/"},{tip:"Linux",icon:"devicon-linux-plain",href:"https://www.kernel.org/"},{tip:"GitHub Actions",icon:"devicon-githubactions-plain",href:"https://github.com/features/actions"}];var o=nA(),l=De(o),c=De(l),u=_e(De(c),4),d=De(u),f=De(d);hc(f,{icon:"mdi:telegram",class:"text-6 md:text-7"});var h=_e(d,2),g=De(h);hc(g,{icon:"mdi:github",class:"text-6 md:text-7"});var _=_e(h,2),m=De(_);hc(m,{icon:"material-symbols:mail",class:"text-6 md:text-7"}),kt(c,x=>Un==null?void 0:Un(x));var p=_e(c,2),y=_e(De(p),2),S=De(y);Po(S,{title:"Языки программирования",data:n});var v=_e(S,2);Po(v,{title:"Фреймворки и библиотеки",data:r});var w=_e(v,2);Po(w,{title:"Базы данных",data:s});var T=_e(w,2);Po(T,{title:"Другие технологии",data:a});var I=_e(l,2),b=_e(De(I),2);Qb(b),kt(I,(x,M)=>Un==null?void 0:Un(x,M),()=>({threshold:.5})),xt(o,x=>t(x),()=>t()),Z(i,o)}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rA={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var sA=function(i){Hi(e,i);function e(t){var n=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return rA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,r=n.LABEL_FLOAT_ABOVE,s=n.LABEL_SHAKE;t?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(s))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(Vi);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wr={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var aA=function(i){Hi(e,i);function e(t){var n=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return n.transitionEndHandler=function(r){n.handleTransitionEnd(r)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Wr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Wr.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Wr.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Wr.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(Wr.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(Wr.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Wr.LINE_RIPPLE_DEACTIVATING))},e}(Vi);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oA={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},ph={NOTCH_ELEMENT_PADDING:8},lA={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cA=function(i){Hi(e,i);function e(t){return i.call(this,Qt(Qt({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return oA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return lA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ph},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=ph.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(Vi);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pc={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},uA={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},mh={LABEL_SCALE:.75},dA=["pattern","min","max","required","step","minlength","maxlength"],fA=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var gh=["mousedown","touchstart"],_h=["click","keydown"],hA=function(i){Hi(e,i);function e(t,n){n===void 0&&(n={});var r=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=n.helperText,r.characterCounter=n.characterCounter,r.leadingIcon=n.leadingIcon,r.trailingIcon=n.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(s){r.setTransformOrigin(s)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(s){r.handleValidationAttributeChange(s)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return uA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pc},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return mh},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return fA.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n,r,s;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var a=rr(gh),o=a.next();!o.done;o=a.next()){var l=o.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){t={error:d}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var c=rr(_h),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(d){r={error:d}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,n,r,s;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var a=rr(gh),o=a.next();!o.done;o=a.next()){var l=o.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){t={error:d}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var c=rr(_h),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(d){r={error:d}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(r){return dA.indexOf(r)>-1?(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*mh.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,r=n?n[0]:t,s=r.target.getBoundingClientRect(),a=r.clientX-s.left;this.adapter.setLineRippleTransformOrigin(a)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var n=this.getNativeInput().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var r=this.helperText.isValidation();if(!r)return;var s=this.helperText.isVisible(),a=this.helperText.getId();s&&a?this.adapter.setInputAttr(pc.ARIA_DESCRIBEDBY,a):this.adapter.removeInputAttr(pc.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,r=n.DISABLED,s=n.INVALID;t?(this.adapter.addClass(r),this.adapter.removeClass(s)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Vi),pA=Ce("<span><!></span>"),mA=Ce("<label><!></label>");function nl(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"style",3,""),s=O(e,"floatAbove",15,!1),a=O(e,"required",15,!1),o=O(e,"wrapped",3,!1),l=hn(e,["$$slots","$$events","$$legacy","use","class","style","for","floatAbove","required","wrapped","children"]),c,u=Wt(void 0),d=new ml,f=Ne({}),h=Ne({}),g=St("SMUI:generic:input:props")??{},_=s();bt(()=>{E(u)&&_!==s()&&(_=s(),E(u).float(s()))});let m=a();bt(()=>{E(u)&&m!==a()&&(m=a(),E(u).setRequired(a()))});const p=St("SMUI:floating-label:mount"),y=St("SMUI:floating-label:unmount");Cn(()=>{Pe(u,Ne(new sA({addClass:S,removeClass:v,getWidth:()=>{var ee,ge;const V=P(),z=V.cloneNode(!0);(ee=V.parentNode)==null||ee.appendChild(z),z.classList.add("smui-floating-label--remove-transition"),z.classList.add("smui-floating-label--force-size"),z.classList.remove("mdc-floating-label--float-above");const oe=z.scrollWidth;return(ge=V.parentNode)==null||ge.removeChild(z),oe},registerInteractionHandler:(V,z)=>d.on(P(),V,z),deregisterInteractionHandler:(V,z)=>d.off(P(),V,z)})));const F={get element(){return P()},addStyle:w,removeStyle:T};return p&&p(F),E(u).init(),()=>{var V;y&&y(F),(V=E(u))==null||V.destroy(),d.clear()}});function S(F){f[F]||(f[F]=!0)}function v(F){(!(F in f)||f[F])&&(f[F]=!1)}function w(F,V){h[F]!=V&&(V===""||V==null?delete h[F]:h[F]=V)}function T(F){F in h&&delete h[F]}function I(F){var V;(V=E(u))==null||V.shake(F)}function b(F){s(F)}function x(F){a(F)}function M(){if(E(u)==null)throw new Error("Instance is undefined.");return E(u).getWidth()}function P(){return c}var U=We(),L=Ae(U);{var Y=F=>{var V=pA();let z;var oe=De(V);ut(oe,()=>e.children??rt),xt(V,ee=>c=ee,()=>c),kt(V,(ee,ge)=>je==null?void 0:je(ee,ge),t),Ye(()=>z=Zt(V,z,{class:tn({[n()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":s(),"mdc-floating-label--required":a(),...f}),style:Object.entries(h).map(([ee,ge])=>`${ee}: ${ge};`).concat([r()]).join(" "),...l})),Z(F,V)},H=F=>{var V=mA();let z;var oe=De(V);ut(oe,()=>e.children??rt),xt(V,ee=>c=ee,()=>c),kt(V,(ee,ge)=>je==null?void 0:je(ee,ge),t),Ye(()=>z=Zt(V,z,{class:tn({[n()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":s(),"mdc-floating-label--required":a(),...f}),style:Object.entries(h).map(([ee,ge])=>`${ee}: ${ge};`).concat([r()]).join(" "),for:e.for||(g?g.id:void 0),...l})),Z(F,V)};Ke(L,F=>{o()?F(Y):F(H,!1)})}return Z(i,U),Lt({shake:I,float:b,setRequired:x,getWidth:M,getElement:P})}var gA=Ce("<div></div>");function mm(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"style",3,""),s=O(e,"active",3,!1),a=hn(e,["$$slots","$$events","$$legacy","use","class","style","active"]),o,l=Wt(void 0),c=new ml,u=Ne({}),d=Ne({});Cn(()=>(Pe(l,Ne(new aA({addClass:h,removeClass:g,hasClass:f,setStyle:_,registerEventHandler:(T,I)=>c.on(S(),T,I),deregisterEventHandler:(T,I)=>c.off(S(),T,I)}))),E(l).init(),()=>{var T;(T=E(l))==null||T.destroy(),c.clear()}));function f(T){return T in u?u[T]:S().classList.contains(T)}function h(T){u[T]||(u[T]=!0)}function g(T){(!(T in u)||u[T])&&(u[T]=!1)}function _(T,I){d[T]!=I&&(I===""||I==null?delete d[T]:d[T]=I)}function m(){var T;(T=E(l))==null||T.activate()}function p(){var T;(T=E(l))==null||T.deactivate()}function y(T){var I;(I=E(l))==null||I.setRippleCenter(T)}function S(){return o}var v=gA();let w;return xt(v,T=>o=T,()=>o),kt(v,(T,I)=>je==null?void 0:je(T,I),t),Ye(()=>w=Zt(v,w,{class:tn({[n()]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":s(),...u}),style:Object.entries(d).map(([T,I])=>`${T}: ${I};`).concat([r()]).join(" "),...a})),Z(i,v),Lt({activate:m,deactivate:p,setRippleCenter:y,getElement:S})}var _A=Ce('<div class="mdc-notched-outline__notch"><!></div>'),vA=Ce('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');function gm(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"notched",3,!1),s=O(e,"noLabel",3,!1),a=hn(e,["$$slots","$$events","$$legacy","use","class","notched","noLabel","children"]),o,l=Wt(void 0),c=Wt(void 0),u=Ne({}),d=Ne({}),f;bt(()=>{E(c)!==f&&(E(c)?(E(c).addStyle("transition-duration","0s"),h("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{E(c)&&E(c).removeStyle("transition-duration")})):g("mdc-notched-outline--upgraded"),f=E(c))}),Qe("SMUI:floating-label:mount",b=>{Pe(c,Ne(b))}),Qe("SMUI:floating-label:unmount",()=>{Pe(c,void 0)}),Cn(()=>(Pe(l,Ne(new cA({addClass:h,removeClass:g,setNotchWidthProperty:b=>_("width",b+"px"),removeNotchWidthProperty:()=>m("width")}))),E(l).init(),()=>{var b;(b=E(l))==null||b.destroy()}));function h(b){u[b]||(u[b]=!0)}function g(b){(!(b in u)||u[b])&&(u[b]=!1)}function _(b,x){d[b]!=x&&(x===""||x==null?delete d[b]:d[b]=x)}function m(b){b in d&&delete d[b]}function p(b){var x;(x=E(l))==null||x.notch(b)}function y(){var b;(b=E(l))==null||b.closeNotch()}function S(){return o}var v=vA();let w;var T=_e(De(v),2);{var I=b=>{var x=_A();const M=Ve(()=>Object.entries(d).map(([U,L])=>`${U}: ${L};`).join(" "));var P=De(x);ut(P,()=>e.children??rt),Ye(()=>ei(x,"style",E(M))),Z(b,x)};Ke(T,b=>{s()||b(I)})}return xt(v,b=>o=b,()=>o),kt(v,(b,x)=>je==null?void 0:je(b,x),t),Ye(()=>w=Zt(v,w,{class:tn({[n()]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":r(),"mdc-notched-outline--no-label":s(),...u}),...a})),Z(i,v),Lt({notch:p,closeNotch:y,getElement:S})}function dd(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"component",3,gl),s=O(e,"tag",3,"div"),a=O(e,"_smuiClass",3,""),o=O(e,"_smuiClassMap",23,()=>({})),l=O(e,"_smuiContexts",19,()=>({})),c=O(e,"_smuiProps",19,()=>({})),u=hn(e,["$$slots","$$events","$$legacy","use","class","component","tag","_smuiClass","_smuiClassMap","_smuiContexts","_smuiProps","children"]),d;const f=[];Object.entries(o()).forEach(([p,y])=>{const S=St(y);S&&"subscribe"in S&&f.push(S.subscribe(v=>{o()[p]=v}))});for(let p in l())l().hasOwnProperty(p)&&Qe(p,l()[p]);dr(()=>{for(const p of f)p()});function h(){return d.getElement()}var g=We(),_=Ae(g),m=Ve(()=>tn({[n()]:!0,[a()]:!0,...o()}));return ul(_,r,(p,y)=>{xt(y(p,qt({get tag(){return s()},get use(){return t()},get class(){return E(m)}},c,()=>u,{children:(S,v)=>{var w=We(),T=Ae(w);ut(T,()=>e.children??rt),Z(S,w)},$$slots:{default:!0}})),S=>d=S,()=>d)}),Z(i,g),Lt({getElement:h})}function xA(i,e){Rt(e,!0);let t=hn(e,["$$slots","$$events","$$legacy","children"]),n;function r(){return n.getElement()}return xt(dd(i,qt({_smuiClass:"mdc-text-field-helper-line",tag:"div"},()=>t,{children:(s,a)=>{var o=We(),l=Ae(o);ut(l,()=>e.children??rt),Z(s,o)},$$slots:{default:!0}})),s=>n=s,()=>n),Lt({getElement:r})}function yA(i,e){Rt(e,!0);let t=hn(e,["$$slots","$$events","$$legacy","children"]),n;function r(){return n.getElement()}return xt(dd(i,qt({_smuiClass:"mdc-text-field__affix mdc-text-field__affix--prefix",tag:"span"},()=>t,{children:(s,a)=>{var o=We(),l=Ae(o);ut(l,()=>e.children??rt),Z(s,o)},$$slots:{default:!0}})),s=>n=s,()=>n),Lt({getElement:r})}function SA(i,e){Rt(e,!0);let t=hn(e,["$$slots","$$events","$$legacy","children"]),n;function r(){return n.getElement()}return xt(dd(i,qt({_smuiClass:"mdc-text-field__affix mdc-text-field__affix--suffix",tag:"span"},()=>t,{children:(s,a)=>{var o=We(),l=Ae(o);ut(l,()=>e.children??rt),Z(s,o)},$$slots:{default:!0}})),s=>n=s,()=>n),Lt({getElement:r})}var EA=Ce("<input>");function MA(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"type",3,"text"),s=O(e,"placeholder",3," "),a=O(e,"value",15),o=O(e,"files",15,null),l=O(e,"dirty",15,!1),c=O(e,"invalid",15,!1),u=O(e,"updateInvalid",3,!0),d=O(e,"initialInvalid",3,!1),f=O(e,"emptyValueNull",19,()=>a()===null),h=O(e,"emptyValueUndefined",19,()=>a()===void 0),g=hn(e,["$$slots","$$events","$$legacy","use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","initialInvalid","emptyValueNull","emptyValueUndefined"]),_,m=Ne({}),p=Ne({});bt(()=>{r()==="file"?delete p.value:p.value=a()==null?"":a()}),Cn(()=>{u()&&d()&&c(M().matches(":invalid"))});function y(H){return H===""?Number.NaN:+H}function S(H){if(r()==="file"){o(H.currentTarget.files);return}if(H.currentTarget.value===""&&f()){a(null);return}if(H.currentTarget.value===""&&h()){a(void 0);return}switch(r()){case"number":case"range":a(y(H.currentTarget.value));break;default:a(H.currentTarget.value);break}}function v(H){(r()==="file"||r()==="range")&&S(H),l(!0),u()&&c(M().matches(":invalid"))}function w(H){return H in m?m[H]??null:M().getAttribute(H)}function T(H,F){m[H]!==F&&(m[H]=F)}function I(H){(!(H in m)||m[H]!=null)&&(m[H]=void 0)}function b(){M().focus()}function x(){M().blur()}function M(){return _}var P=EA(),U=H=>{var F;r()!=="file"&&S(H),(F=e.oninput)==null||F.call(e,H)},L=H=>{var F;v(H),(F=e.onchange)==null||F.call(e,H)};let Y;return xt(P,H=>_=H,()=>_),kt(P,(H,F)=>je==null?void 0:je(H,F),t),Ye(()=>Y=Zt(P,Y,{class:tn({[n()]:!0,"mdc-text-field__input":!0}),type:r(),placeholder:s(),...p,...m,...g,oninput:U,onchange:L})),Z(i,P),Lt({getAttr:w,addAttr:T,removeAttr:I,focus:b,blur:x,getElement:M})}var bA=Ce("<textarea></textarea>");function TA(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"style",3,""),s=O(e,"value",15,""),a=O(e,"dirty",15,!1),o=O(e,"invalid",15,!1),l=O(e,"updateInvalid",3,!0),c=O(e,"initialInvalid",3,!1),u=O(e,"resizable",3,!0),d=hn(e,["$$slots","$$events","$$legacy","use","class","style","value","dirty","invalid","updateInvalid","initialInvalid","resizable"]),f,h=Ne({});Cn(()=>{l()&&c()&&o(v().matches(":invalid"))});function g(){a(!0),l()&&o(v().matches(":invalid"))}function _(b){return b in h?h[b]??null:v().getAttribute(b)}function m(b,x){h[b]!==x&&(h[b]=x)}function p(b){(!(b in h)||h[b]!=null)&&(h[b]=void 0)}function y(){v().focus()}function S(){v().blur()}function v(){return f}var w=bA(),T=b=>{var x;g(),(x=e.onchange)==null||x.call(e,b)};let I;return xt(w,b=>f=b,()=>f),kt(w,(b,x)=>je==null?void 0:je(b,x),t),qa(()=>Hg(w,s)),Ye(()=>I=Zt(w,I,{class:tn({[n()]:!0,"mdc-text-field__input":!0}),style:`${u()?"":"resize: none; "}${r()}`,...h,...d,onchange:T})),Z(i,w),Lt({getAttr:_,addAttr:m,removeAttr:p,focus:y,blur:S,getElement:v})}var AA=Ce('<span class="mdc-text-field__ripple"></span>'),wA=Ce("<!> <!>",1),IA=Ce("<span><!> <!></span>"),CA=Ce("<!> <!> <!>",1),RA=Ce("<label><!> <!> <!> <!> <!> <!> <!></label>"),LA=Ce("<div><!> <!> <!> <!> <!></div>"),PA=Ce("<!> <!>",1);function DA(i,e){Rt(e,!0);const{applyPassive:t}=nm;let n=()=>{};function r(q){return q===n}let s=O(e,"use",19,()=>[]),a=O(e,"class",3,""),o=O(e,"style",3,""),l=O(e,"ripple",3,!0),c=O(e,"disabled",3,!1),u=O(e,"required",3,!1),d=O(e,"textarea",3,!1),f=O(e,"variant",19,()=>d()?"outlined":"standard"),h=O(e,"noLabel",3,!1),g=O(e,"type",3,"text"),_=O(e,"value",15),m=O(e,"files",15,n),p=O(e,"invalid",15,n),y=O(e,"updateInvalid",19,()=>r(p())),S=O(e,"initialInvalid",3,!1),v=O(e,"dirty",15,!1),w=O(e,"validateOnValueChange",19,y),T=O(e,"useNativeValidation",19,y),I=O(e,"withLeadingIcon",3,n),b=O(e,"withTrailingIcon",3,n),x=O(e,"input",7),M=O(e,"floatingLabel",7),P=O(e,"lineRipple",7),U=O(e,"notchedOutline",7),L=hn(e,["$$slots","$$events","$$legacy","use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","initialInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","children","leadingIcon","trailingIcon","internalCounter","line","helper"]);const Y=_()!==void 0||_()===void 0&&e.input$emptyValueUndefined||!r(m());r(m())&&m(null),r(p())&&p(!1);let H,F=Wt(void 0),V=new ml,z=Ne({}),oe=Ne({}),ee=Wt(void 0),ge=Wt(!1),be=Wt(Ne(S())),qe=St("SMUI:addLayoutListener"),ne,re,Me=new Promise(q=>re=q),$,pe,Fe,ze;const _t=Ve(()=>x()&&x().getElement());bt(()=>{(v()||E(be)||!y())&&E(F)&&E(F).isValid()!==!p()&&(y()?p(!E(F).isValid()):E(F).setValid(!p()))}),bt(()=>{E(F)&&E(F).getValidateOnValueChange()!==w()&&E(F).setValidateOnValueChange(r(w())?!1:w())}),bt(()=>{E(F)&&E(F).setUseNativeValidation(r(T())?!0:T())}),bt(()=>{E(F)&&E(F).setDisabled(c())});let fe=_();bt(()=>{if(E(F)&&Y&&fe!==_()){fe=_();const q=`${_()==null?"":_()}`;E(F).getValue()!==q&&E(F).setValue(q)}}),qe&&(ne=qe(tt)),Qe("SMUI:textfield:leading-icon:mount",q=>{$=q}),Qe("SMUI:textfield:leading-icon:unmount",()=>{$=void 0}),Qe("SMUI:textfield:trailing-icon:mount",q=>{pe=q}),Qe("SMUI:textfield:trailing-icon:unmount",()=>{pe=void 0}),Qe("SMUI:textfield:helper-text:id",q=>{Pe(ee,Ne(q))}),Qe("SMUI:textfield:helper-text:mount",q=>{Fe=q}),Qe("SMUI:textfield:helper-text:unmount",()=>{Pe(ee,void 0),Fe=void 0}),Qe("SMUI:textfield:character-counter:mount",q=>{ze=q}),Qe("SMUI:textfield:character-counter:unmount",()=>{ze=void 0}),Cn(()=>{var q;if(Pe(F,Ne(new hA({addClass:D,removeClass:vt,hasClass:ke,registerTextFieldInteractionHandler:(N,se)=>V.on(ye(),N,se),deregisterTextFieldInteractionHandler:(N,se)=>V.off(ye(),N,se),registerValidationAttributeChangeHandler:N=>{const se=xe=>xe.map(Ue=>Ue.attributeName).filter(Ue=>Ue),He=new MutationObserver(xe=>{T()&&N(se(xe))}),le={attributes:!0};return x()&&He.observe(x().getElement(),le),He},deregisterValidationAttributeChangeHandler:N=>{N.disconnect()},getNativeInput:()=>{var N;return((N=x())==null?void 0:N.getElement())??null},setInputAttr:(N,se)=>{var He;(He=x())==null||He.addAttr(N,se)},removeInputAttr:N=>{var se;(se=x())==null||se.removeAttr(N)},isFocused:()=>{var N;return document.activeElement===((N=x())==null?void 0:N.getElement())},registerInputInteractionHandler:(N,se)=>{var le;const He=(le=x())==null?void 0:le.getElement();if(He){const xe=t();V.on(He,N,se,typeof xe=="boolean"?{capture:xe}:xe)}},deregisterInputInteractionHandler:(N,se)=>{var le;const He=(le=x())==null?void 0:le.getElement();He&&V.off(He,N,se)},floatLabel:N=>M()&&M().float(N),getLabelWidth:()=>M()?M().getWidth():0,hasLabel:()=>!!M(),shakeLabel:N=>M()&&M().shake(N),setLabelRequired:N=>M()&&M().setRequired(N),activateLineRipple:()=>P()&&P().activate(),deactivateLineRipple:()=>P()&&P().deactivate(),setLineRippleTransformOrigin:N=>P()&&P().setRippleCenter(N),closeOutline:()=>U()&&U().closeNotch(),hasOutline:()=>!!U(),notchOutline:N=>U()&&U().notch(N)},{get helperText(){return Fe},get characterCounter(){return ze},get leadingIcon(){return $},get trailingIcon(){return pe}}))),Y){if(x()==null)throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");(q=E(F))==null||q.init()}else pg().then(()=>{var N;if(x()==null)throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");(N=E(F))==null||N.init()});return re(),()=>{var N;(N=E(F))==null||N.destroy(),V.clear()}}),dr(()=>{ne&&ne()});function ke(q){return q in z?z[q]??null:ye().classList.contains(q)}function D(q){z[q]||(z[q]=!0)}function vt(q){(!(q in z)||z[q])&&(z[q]=!1)}function $e(q,N){oe[q]!=N&&(N===""||N==null?delete oe[q]:oe[q]=N)}function et(){var q;(q=x())==null||q.focus()}function Re(){var q;(q=x())==null||q.blur()}function tt(){if(E(F)){const q=E(F).shouldFloat;E(F).notchOutline(q)}}function ye(){return H}var R=PA(),A=Ae(R);{var K=q=>{var N=RA();const se=Ve(()=>_u(L,["input$","label$","ripple$","outline$","helperLine$"]));let He;var le=De(N);{var xe=ce=>{var he=wA(),Le=Ae(he);{var ht=mt=>{var Gt=AA();Z(mt,Gt)};Ke(Le,mt=>{f()==="filled"&&mt(ht)})}var Vt=_e(Le,2);{var it=mt=>{var Gt=Ve(()=>E(ge)||_()!=null&&_()!==""&&(typeof _()!="number"||!isNaN(_()))),Tt=Ve(()=>un(L,"label$"));xt(nl(mt,qt({get floatAbove(){return E(Gt)},get required(){return u()},wrapped:!0},()=>E(Tt),{children:($t,bn)=>{var vn=We(),ri=Ae(vn);{var Kt=pn=>{},nn=pn=>{var mn=We(),si=Ae(mn);{var Mi=ai=>{var oi=zt();Ye(()=>wn(oi,e.label)),Z(ai,oi)},bi=ai=>{var oi=We(),Hn=Ae(oi);ut(Hn,()=>e.label),Z(ai,oi)};Ke(si,ai=>{typeof e.label=="string"?ai(Mi):ai(bi,!1)},!0)}Z(pn,mn)};Ke(ri,pn=>{e.label==null?pn(Kt):pn(nn,!1)})}Z($t,vn)},$$slots:{default:!0}})),$t=>M($t),()=>M())};Ke(Vt,mt=>{!h()&&e.label!=null&&mt(it)})}Z(ce,he)};Ke(le,ce=>{!d()&&f()!=="outlined"&&ce(xe)})}var Ue=_e(le,2);{var Ge=ce=>{var he=Ve(()=>h()||e.label==null),Le=Ve(()=>un(L,"outline$"));xt(gm(ce,qt({get noLabel(){return E(he)}},()=>E(Le),{children:(ht,Vt)=>{var it=We(),mt=Ae(it);{var Gt=Tt=>{var $t=Ve(()=>E(ge)||_()!=null&&_()!==""&&(typeof _()!="number"||!isNaN(_()))),bn=Ve(()=>un(L,"label$"));xt(nl(Tt,qt({get floatAbove(){return E($t)},get required(){return u()},wrapped:!0},()=>E(bn),{children:(vn,ri)=>{var Kt=We(),nn=Ae(Kt);{var pn=si=>{},mn=si=>{var Mi=We(),bi=Ae(Mi);{var ai=Hn=>{var zi=zt();Ye(()=>wn(zi,e.label)),Z(Hn,zi)},oi=Hn=>{var zi=We(),ls=Ae(zi);ut(ls,()=>e.label),Z(Hn,zi)};Ke(bi,Hn=>{typeof e.label=="string"?Hn(ai):Hn(oi,!1)},!0)}Z(si,Mi)};Ke(nn,si=>{e.label==null?si(pn):si(mn,!1)})}Z(vn,Kt)},$$slots:{default:!0}})),vn=>M(vn),()=>M())};Ke(mt,Tt=>{!h()&&e.label!=null&&Tt(Gt)})}Z(ht,it)},$$slots:{default:!0}})),ht=>U(ht),()=>U())};Ke(Ue,ce=>{(d()||f()==="outlined")&&ce(Ge)})}var Te=_e(Ue,2);Lo(Te,{key:"SMUI:textfield:icon:leading",value:!0,children:(ce,he)=>{var Le=We(),ht=Ae(Le);ut(ht,()=>e.leadingIcon??rt),Z(ce,Le)},$$slots:{default:!0}});var ot=_e(Te,2);ut(ot,()=>e.children??rt);var Oe=_e(ot,2);{var at=ce=>{var he=IA();const Le=Ve(()=>cp(tn({"mdc-text-field__resizer":!("input$resizable"in L)||e.input$resizable})));var ht=De(he),Vt=Ve(()=>un(L,"input$"));xt(TA(ht,qt({get disabled(){return c()},get required(){return u()},get updateInvalid(){return y()},get initialInvalid(){return E(be)},get"aria-controls"(){return E(ee)},get"aria-describedby"(){return E(ee)}},()=>E(Vt),{onblur:mt=>{var Gt;Pe(ge,!1),Pe(be,!0),Mn(ye(),"blur",mt),(Gt=e.input$onblur)==null||Gt.call(e,mt)},onfocus:mt=>{var Gt;Pe(ge,!0),Mn(ye(),"focus",mt),(Gt=e.input$onfocus)==null||Gt.call(e,mt)},get value(){return _()},set value(mt){_(mt)},get dirty(){return v()},set dirty(mt){v(mt)},get invalid(){return p()},set invalid(mt){p(mt)}})),mt=>x(mt),()=>x());var it=_e(ht,2);ut(it,()=>e.internalCounter??rt),Ye(()=>ts(he,E(Le))),Z(ce,he)},B=ce=>{var he=CA(),Le=Ae(he);{var ht=Tt=>{var $t=We(),bn=Ae($t);{var vn=Kt=>{yA(Kt,{children:(nn,pn)=>{var mn=zt();Ye(()=>wn(mn,e.prefix)),Z(nn,mn)},$$slots:{default:!0}})},ri=Kt=>{var nn=We(),pn=Ae(nn);ut(pn,()=>e.prefix??rt),Z(Kt,nn)};Ke(bn,Kt=>{typeof e.prefix=="string"?Kt(vn):Kt(ri,!1)})}Z(Tt,$t)};Ke(Le,Tt=>{e.prefix!=null&&Tt(ht)})}var Vt=_e(Le,2),it=Ve(()=>un(L,"input$"));xt(MA(Vt,qt({get type(){return g()},get disabled(){return c()},get required(){return u()},get updateInvalid(){return y()},get initialInvalid(){return E(be)},get"aria-controls"(){return E(ee)},get"aria-describedby"(){return E(ee)}},()=>h()&&e.label!=null&&typeof e.label=="string"?{placeholder:e.label}:{},()=>E(it),{onblur:Tt=>{var $t;Pe(ge,!1),Pe(be,!0),Mn(ye(),"blur",Tt),($t=e.input$onblur)==null||$t.call(e,Tt)},onfocus:Tt=>{var $t;Pe(ge,!0),Mn(ye(),"focus",Tt),($t=e.input$onfocus)==null||$t.call(e,Tt)},get value(){return _()},set value(Tt){_(Tt)},get files(){return m()},set files(Tt){m(Tt)},get dirty(){return v()},set dirty(Tt){v(Tt)},get invalid(){return p()},set invalid(Tt){p(Tt)}})),Tt=>x(Tt),()=>x());var mt=_e(Vt,2);{var Gt=Tt=>{var $t=We(),bn=Ae($t);{var vn=Kt=>{SA(Kt,{children:(nn,pn)=>{var mn=zt();Ye(()=>wn(mn,e.suffix)),Z(nn,mn)},$$slots:{default:!0}})},ri=Kt=>{var nn=We(),pn=Ae(nn);ut(pn,()=>e.suffix??rt),Z(Kt,nn)};Ke(bn,Kt=>{typeof e.suffix=="string"?Kt(vn):Kt(ri,!1)})}Z(Tt,$t)};Ke(mt,Tt=>{e.suffix!=null&&Tt(Gt)})}Z(ce,he)};Ke(Oe,ce=>{d()&&typeof _()=="string"?ce(at):ce(B,!1)})}var ve=_e(Oe,2);Lo(ve,{key:"SMUI:textfield:icon:leading",value:!1,children:(ce,he)=>{var Le=We(),ht=Ae(Le);ut(ht,()=>e.trailingIcon??rt),Z(ce,Le)},$$slots:{default:!0}});var te=_e(ve,2);{var ae=ce=>{var he=Ve(()=>un(L,"ripple$"));xt(mm(ce,qt(()=>E(he))),Le=>P(Le),()=>P())};Ke(te,ce=>{!d()&&f()!=="outlined"&&l()&&ce(ae)})}xt(N,ce=>H=ce,()=>H),kt(N,(ce,he)=>gi==null?void 0:gi(ce,he),()=>({ripple:!d()&&f()==="filled",unbounded:!1,addClass:D,removeClass:vt,addStyle:$e,eventTarget:E(_t),activeTarget:E(_t),initPromise:Me})),kt(N,(ce,he)=>je==null?void 0:je(ce,he),s),Ye(()=>He=Zt(N,He,{class:tn({[a()]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":c(),"mdc-text-field--textarea":d(),"mdc-text-field--filled":f()==="filled","mdc-text-field--outlined":f()==="outlined","smui-text-field--standard":f()==="standard"&&!d(),"mdc-text-field--no-label":h()||e.label==null,"mdc-text-field--label-floating":E(ge)||_()!=null&&_()!=="","mdc-text-field--with-leading-icon":r(I())?e.leadingIcon:I(),"mdc-text-field--with-trailing-icon":r(b())?e.trailingIcon:b(),"mdc-text-field--with-internal-counter":d()&&e.internalCounter,"mdc-text-field--invalid":p(),...z}),style:Object.entries(oe).map(([ce,he])=>`${ce}: ${he};`).concat([o()]).join(" "),for:void 0,...E(se)})),Z(q,N)},ie=q=>{var N=LA();const se=Ve(()=>_u(L,["input$","label$","ripple$","outline$","helperLine$"]));let He;var le=De(N);{var xe=Oe=>{var at=We(),B=Ae(at);ut(B,()=>e.label??rt),Z(Oe,at)};Ke(le,Oe=>{typeof e.label!="string"&&Oe(xe)})}var Ue=_e(le,2);Lo(Ue,{key:"SMUI:textfield:icon:leading",value:!0,children:(Oe,at)=>{var B=We(),ve=Ae(B);ut(ve,()=>e.leadingIcon??rt),Z(Oe,B)},$$slots:{default:!0}});var Ge=_e(Ue,2);ut(Ge,()=>e.children??rt);var Te=_e(Ge,2);Lo(Te,{key:"SMUI:textfield:icon:leading",value:!1,children:(Oe,at)=>{var B=We(),ve=Ae(B);ut(ve,()=>e.trailingIcon??rt),Z(Oe,B)},$$slots:{default:!0}});var ot=_e(Te,2);ut(ot,()=>e.line??rt),xt(N,Oe=>H=Oe,()=>H),kt(N,(Oe,at)=>gi==null?void 0:gi(Oe,at),()=>({ripple:l(),unbounded:!1,addClass:D,removeClass:vt,addStyle:$e})),kt(N,(Oe,at)=>je==null?void 0:je(Oe,at),s),Ye(()=>He=Zt(N,He,{class:tn({[a()]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":c(),"mdc-text-field--textarea":d(),"mdc-text-field--filled":f()==="filled","mdc-text-field--outlined":f()==="outlined","smui-text-field--standard":f()==="standard"&&!d(),"mdc-text-field--no-label":h()||e.label==null,"mdc-text-field--with-leading-icon":e.leadingIcon,"mdc-text-field--with-trailing-icon":e.trailingIcon,"mdc-text-field--invalid":p(),...z}),style:Object.entries(oe).map(([Oe,at])=>`${Oe}: ${at};`).concat([o()]).join(" "),...E(se)})),Z(q,N)};Ke(A,q=>{Y?q(K):q(ie,!1)})}var ue=_e(A,2);{var X=q=>{var N=Ve(()=>un(L,"helperLine$"));xA(q,qt(()=>E(N),{children:(se,He)=>{var le=We(),xe=Ae(le);ut(xe,()=>e.helper??rt),Z(se,le)},$$slots:{default:!0}}))};Ke(ue,q=>{e.helper&&q(X)})}return Z(i,R),Lt({focus:et,blur:Re,layout:tt,getElement:ye})}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var UA={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},OA={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},wa={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},an;(function(i){i[i.BOTTOM=1]="BOTTOM",i[i.CENTER=2]="CENTER",i[i.RIGHT=4]="RIGHT",i[i.FLIP_RTL=8]="FLIP_RTL"})(an||(an={}));var es;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=4]="TOP_RIGHT",i[i.BOTTOM_LEFT=1]="BOTTOM_LEFT",i[i.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",i[i.TOP_START=8]="TOP_START",i[i.TOP_END=12]="TOP_END",i[i.BOTTOM_START=9]="BOTTOM_START",i[i.BOTTOM_END=13]="BOTTOM_END"})(es||(es={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yr,Zi,Mt={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};yr={},yr[""+Mt.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",yr[""+Mt.LIST_ITEM_CLASS]="mdc-list-item",yr[""+Mt.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",yr[""+Mt.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",yr[""+Mt.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",yr[""+Mt.ROOT]="mdc-list";var ws=(Zi={},Zi[""+Mt.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",Zi[""+Mt.LIST_ITEM_CLASS]="mdc-deprecated-list-item",Zi[""+Mt.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",Zi[""+Mt.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",Zi[""+Mt.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",Zi[""+Mt.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",Zi[""+Mt.ROOT]="mdc-deprecated-list",Zi),Sr={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+Mt.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Mt.LIST_ITEM_CLASS+` a,
    .`+ws[Mt.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+ws[Mt.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+Mt.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Mt.LIST_ITEM_CLASS+` a,
    .`+Mt.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+Mt.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+ws[Mt.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+ws[Mt.LIST_ITEM_CLASS]+` a,
    .`+ws[Mt.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+ws[Mt.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},sn={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var NA=["input","button","textarea","select"],ci=function(i){var e=i.target;if(e){var t=(""+e.tagName).toLowerCase();NA.indexOf(t)===-1&&i.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function FA(){var i={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return i}function BA(i,e){for(var t=new Map,n=0;n<i;n++){var r=e(n).trim();if(r){var s=r[0].toLowerCase();t.has(s)||t.set(s,[]),t.get(s).push({text:r.toLowerCase(),index:n})}}return t.forEach(function(a){a.sort(function(o,l){return o.index-l.index})}),t}function bu(i,e){var t=i.nextChar,n=i.focusItemAtIndex,r=i.sortedIndexByFirstChar,s=i.focusedItemIndex,a=i.skipFocus,o=i.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){vm(e)},sn.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var l;return e.typeaheadBuffer.length===1?l=kA(r,s,o,e):l=HA(r,o,e),l!==-1&&!a&&n(l),l}function kA(i,e,t,n){var r=n.typeaheadBuffer[0],s=i.get(r);if(!s)return-1;if(r===n.currentFirstChar&&s[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%s.length;var a=s[n.sortedIndexCursor].index;if(!t(a))return a}n.currentFirstChar=r;var o=-1,l;for(l=0;l<s.length;l++)if(!t(s[l].index)){o=l;break}for(;l<s.length;l++)if(s[l].index>e&&!t(s[l].index)){o=l;break}return o!==-1?(n.sortedIndexCursor=o,s[n.sortedIndexCursor].index):-1}function HA(i,e,t){var n=t.typeaheadBuffer[0],r=i.get(n);if(!r)return-1;var s=r[t.sortedIndexCursor];if(s.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(s.index))return s.index;for(var a=(t.sortedIndexCursor+1)%r.length,o=-1;a!==t.sortedIndexCursor;){var l=r[a],c=l.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){o=a;break}a=(a+1)%r.length}return o!==-1?(t.sortedIndexCursor=o,r[t.sortedIndexCursor].index):-1}function _m(i){return i.typeaheadBuffer.length>0}function vm(i){i.typeaheadBuffer=""}function vh(i,e){var t=i.event,n=i.isTargetListItem,r=i.focusedItemIndex,s=i.focusItemAtIndex,a=i.sortedIndexByFirstChar,o=i.isItemAtIndexDisabled,l=ln(t)==="ArrowLeft",c=ln(t)==="ArrowUp",u=ln(t)==="ArrowRight",d=ln(t)==="ArrowDown",f=ln(t)==="Home",h=ln(t)==="End",g=ln(t)==="Enter",_=ln(t)==="Spacebar";if(t.altKey||t.ctrlKey||t.metaKey||l||c||u||d||f||h||g)return-1;var m=!_&&t.key.length===1;if(m){ci(t);var p={focusItemAtIndex:s,focusedItemIndex:r,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return bu(p,e)}if(!_)return-1;n&&ci(t);var y=n&&_m(e);if(y){var p={focusItemAtIndex:s,focusedItemIndex:r,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return bu(p,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function VA(i){return i instanceof Array}var zA=["Alt","Control","Meta","Shift"];function xh(i){var e=new Set(i?zA.filter(function(t){return i.getModifierState(t)}):[]);return function(t){return t.every(function(n){return e.has(n)})&&t.length===e.size}}var GA=function(i){Hi(e,i);function e(t){var n=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!0,n.selectedIndex=sn.UNSET_INDEX,n.focusedItemIndex=sn.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=FA(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return Sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.setDisabledItemsFocusable=function(t){this.areDisabledItemsFocusable=t},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==sn.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,Mt.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=sn.UNSET_INDEX,n=this.adapter.getListItemCount(),r=0;r<n;r++){var s=this.adapter.listItemAtIndexHasClass(r,Mt.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(r,Mt.LIST_ITEM_ACTIVATED_CLASS);if(s||a){t=r;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&_m(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n={}),this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t,n):this.isRadioList?this.setRadioAtIndex(t,n):this.setSingleSelectionAtIndex(t,n))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.isIndexDisabled=function(t){return this.adapter.listItemAtIndexHasClass(t,Mt.LIST_ITEM_DISABLED_CLASS)},e.prototype.handleKeydown=function(t,n,r){var s=this,a,o=ln(t)==="ArrowLeft",l=ln(t)==="ArrowUp",c=ln(t)==="ArrowRight",u=ln(t)==="ArrowDown",d=ln(t)==="Home",f=ln(t)==="End",h=ln(t)==="Enter",g=ln(t)==="Spacebar",_=this.isVertical&&u||!this.isVertical&&c,m=this.isVertical&&l||!this.isVertical&&o,p=t.key==="A"||t.key==="a",y=xh(t);if(this.adapter.isRootFocused()){if((m||f)&&y([]))t.preventDefault(),this.focusLastElement();else if((_||d)&&y([]))t.preventDefault(),this.focusFirstElement();else if(m&&y(["Shift"])&&this.isCheckboxList){t.preventDefault();var S=this.focusLastElement();S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(_&&y(["Shift"])&&this.isCheckboxList){t.preventDefault();var S=this.focusFirstElement();S!==-1&&this.setSelectedIndexOnAction(S,!1)}if(this.hasTypeahead){var v={event:t,focusItemAtIndex:function(I){s.focusItemAtIndex(I)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(I){return s.isIndexDisabled(I)}};vh(v,this.typeaheadState)}return}var w=this.adapter.getFocusedElementIndex();if(!(w===-1&&(w=r,w<0))){if(_&&y([]))ci(t),this.focusNextElement(w);else if(m&&y([]))ci(t),this.focusPrevElement(w);else if(_&&y(["Shift"])&&this.isCheckboxList){ci(t);var S=this.focusNextElement(w);S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(m&&y(["Shift"])&&this.isCheckboxList){ci(t);var S=this.focusPrevElement(w);S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(d&&y([]))ci(t),this.focusFirstElement();else if(f&&y([]))ci(t),this.focusLastElement();else if(d&&y(["Control","Shift"])&&this.isCheckboxList){if(ci(t),this.isIndexDisabled(w))return;this.focusFirstElement(),this.toggleCheckboxRange(0,w,w)}else if(f&&y(["Control","Shift"])&&this.isCheckboxList){if(ci(t),this.isIndexDisabled(w))return;this.focusLastElement(),this.toggleCheckboxRange(w,this.adapter.getListItemCount()-1,w)}else if(p&&y(["Control"])&&this.isCheckboxList)t.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===sn.UNSET_INDEX?[]:this.selectedIndex,!0);else if((h||g)&&y([])){if(n){var T=t.target;if(T&&T.tagName==="A"&&h||(ci(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(w,!1),this.adapter.notifyAction(w))}}else if((h||g)&&y(["Shift"])&&this.isCheckboxList){var T=t.target;if(T&&T.tagName==="A"&&h||(ci(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((a=this.lastSelectedIndex)!==null&&a!==void 0?a:w,w,w),this.adapter.notifyAction(w))}if(this.hasTypeahead){var v={event:t,focusItemAtIndex:function(b){s.focusItemAtIndex(b)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(b){return s.isIndexDisabled(b)}};vh(v,this.typeaheadState)}}},e.prototype.handleClick=function(t,n,r){var s,a=xh(r);t!==sn.UNSET_INDEX&&(this.isIndexDisabled(t)||(a([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)):this.isCheckboxList&&a(["Shift"])&&(this.toggleCheckboxRange((s=this.lastSelectedIndex)!==null&&s!==void 0?s:t,t,t),this.adapter.notifyAction(t))))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),r=t,s=null;do{if(r++,r>=n)if(this.wrapFocus)r=0;else return t;if(r===s)return-1;s=s??r}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(r));return this.focusItemAtIndex(r),r},e.prototype.focusPrevElement=function(t){var n=this.adapter.getListItemCount(),r=t,s=null;do{if(r--,r<0)if(this.wrapFocus)r=n-1;else return t;if(r===s)return-1;s=s??r}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(r));return this.focusItemAtIndex(r),r},e.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},e.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){this.isIndexValid(t,!1)&&(n?(this.adapter.removeClassForElementIndex(t,Mt.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,Sr.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,Mt.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,Sr.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){if(n===void 0&&(n={}),!(this.selectedIndex===t&&!n.forceUpdate)){var r=Mt.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(r=Mt.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==sn.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,r),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==sn.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,r),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t])}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===sn.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,Sr.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,r=n?Sr.ARIA_CURRENT:Sr.ARIA_SELECTED;if(this.selectedIndex!==sn.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,r,"false"),t!==sn.UNSET_INDEX){var s=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,r,s)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Sr.ARIA_SELECTED:Sr.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t,n){n===void 0&&(n={});var r=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),!(this.selectedIndex===t&&!n.forceUpdate)&&(this.selectedIndex!==sn.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,r,"false"),this.adapter.setAttributeForElementIndex(t,r,"true"),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t]))},e.prototype.setCheckboxAtIndex=function(t,n){n===void 0&&(n={});for(var r=this.selectedIndex,s=n.isUserInteraction?new Set(r===sn.UNSET_INDEX?[]:r):null,a=this.getSelectionAttribute(),o=[],l=0;l<this.adapter.getListItemCount();l++){var c=s==null?void 0:s.has(l),u=t.indexOf(l)>=0;u!==c&&o.push(l),this.adapter.setCheckedCheckboxOrRadioAtIndex(l,u),this.adapter.setAttributeForElementIndex(l,a,u?"true":"false")}this.selectedIndex=t,n.isUserInteraction&&o.length&&this.adapter.notifySelectionChange(o)},e.prototype.toggleCheckboxRange=function(t,n,r){this.lastSelectedIndex=r;for(var s=new Set(this.selectedIndex===sn.UNSET_INDEX?[]:this.selectedIndex),a=!(s!=null&&s.has(r)),o=Zf([t,n].sort(),2),l=o[0],c=o[1],u=this.getSelectionAttribute(),d=[],f=l;f<=c;f++)if(!this.isIndexDisabled(f)){var h=s.has(f);a!==h&&(d.push(f),this.adapter.setCheckedCheckboxOrRadioAtIndex(f,a),this.adapter.setAttributeForElementIndex(f,u,""+a),a?s.add(f):s.delete(f))}d.length&&(this.selectedIndex=cb([],Zf(s)),this.adapter.notifySelectionChange(d))},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===sn.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==sn.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==sn.UNSET_INDEX?this.selectedIndex:VA(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,n){return Math.min(t,n)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t,n){var r=this;if(n===void 0&&(n=!0),t instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(s){return r.isIndexInRange(s)})}else if(typeof t=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===sn.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){this.lastSelectedIndex=t,this.isCheckboxList?(this.toggleCheckboxAtIndex(t,n),this.adapter.notifySelectionChange([t])):this.setSelectedIndex(t,{isUserInteraction:!0})},e.prototype.toggleCheckboxAtIndex=function(t,n){var r=this.getSelectionAttribute(),s=this.adapter.isCheckboxCheckedAtIndex(t),a;n?a=s:(a=!s,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,a)),this.adapter.setAttributeForElementIndex(t,r,a?"true":"false");var o=this.selectedIndex===sn.UNSET_INDEX?[]:this.selectedIndex.slice();a?o.push(t):o=o.filter(function(l){return l!==t}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.checkboxListToggleAll=function(t,n){var r=this.adapter.getListItemCount();if(t.length===r)this.setCheckboxAtIndex([],{isUserInteraction:n});else{for(var s=[],a=0;a<r;a++)(!this.isIndexDisabled(a)||t.indexOf(a)>-1)&&s.push(a);this.setCheckboxAtIndex(s,{isUserInteraction:n})}},e.prototype.typeaheadMatchItem=function(t,n,r){var s=this;r===void 0&&(r=!1);var a={focusItemAtIndex:function(o){s.focusItemAtIndex(o)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:r,isItemAtIndexDisabled:function(o){return s.isIndexDisabled(o)}};return bu(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return BA(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){vm(this.typeaheadState)},e}(Vi);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xm=function(i){Hi(e,i);function e(t){var n=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openBottomBias=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=es.TOP_START,n.originCorner=es.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return Object.defineProperty(e,"cssClasses",{get:function(){return UA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return OA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return wa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return es},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,r=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(r)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^an.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,n){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(n)?n:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},wa.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout(function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()},wa.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var n=t.target;this.adapter.isElementInContainer(n)||this.close()},e.prototype.handleKeydown=function(t){var n=t.keyCode,r=t.key,s=r==="Escape"||n===27;s&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),r=this.getMenuSurfaceMaxHeight(n),s=this.hasBit(n,an.BOTTOM)?"bottom":"top",a=this.hasBit(n,an.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(n),l=this.getVerticalOriginOffset(n),c=this.measurements,u=c.anchorSize,d=c.surfaceSize,f=(t={},t[a]=o,t[s]=l,t);u.width/d.width>wa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(f),this.adapter.setTransformOrigin(a+" "+s),this.adapter.setPosition(f),this.adapter.setMaxHeight(r?r+"px":""),this.hasBit(n,an.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),n=this.adapter.getBodyDimensions(),r=this.adapter.getWindowDimensions(),s=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:n,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:r.width-t.right,bottom:r.height-t.bottom,left:t.left},viewportSize:r,windowScroll:s}},e.prototype.getoriginCorner=function(){var t=this.originCorner,n=this.measurements,r=n.viewportDistance,s=n.anchorSize,a=n.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,an.BOTTOM),c,u;l?(c=r.top-o+this.anchorMargin.bottom,u=r.bottom-o-this.anchorMargin.bottom):(c=r.top-o+this.anchorMargin.top,u=r.bottom-o+s.height-this.anchorMargin.top);var d=u-a.height>0;!d&&c>u+this.openBottomBias&&(t=this.setBit(t,an.BOTTOM));var f=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,an.FLIP_RTL),g=this.hasBit(this.anchorCorner,an.RIGHT)||this.hasBit(t,an.RIGHT),_=!1;f&&h?_=!g:_=g;var m,p;_?(m=r.left+s.width+this.anchorMargin.right,p=r.right-this.anchorMargin.right):(m=r.left+this.anchorMargin.left,p=r.right+s.width-this.anchorMargin.left);var y=m-a.width>0,S=p-a.width>0,v=this.hasBit(t,an.FLIP_RTL)&&this.hasBit(t,an.RIGHT);return S&&v&&f||!y&&v?t=this.unsetBit(t,an.RIGHT):(y&&_&&f||y&&!_&&g||!S&&m>=p)&&(t=this.setBit(t,an.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,r=0,s=this.hasBit(t,an.BOTTOM),a=this.hasBit(this.anchorCorner,an.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return s?(r=n.top+this.anchorMargin.top-o,a||(r+=this.measurements.anchorSize.height)):(r=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,a&&(r-=this.measurements.anchorSize.height)),r},e.prototype.getHorizontalOriginOffset=function(t){var n=this.measurements.anchorSize,r=this.hasBit(t,an.RIGHT),s=this.hasBit(this.anchorCorner,an.RIGHT);if(r){var a=s?n.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?a-(this.measurements.viewportSize.width-this.measurements.bodySize.width):a}return s?n.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var n=this.measurements.anchorSize,r=this.hasBit(t,an.BOTTOM),s=this.hasBit(this.anchorCorner,an.BOTTOM),a=0;return r?a=s?n.height-this.anchorMargin.top:-this.anchorMargin.bottom:a=s?n.height+this.anchorMargin.bottom:this.anchorMargin.top,a},e.prototype.adjustPositionForHoistedElement=function(t){var n,r,s=this.measurements,a=s.windowScroll,o=s.viewportDistance,l=s.surfaceSize,c=s.viewportSize,u=Object.keys(t);try{for(var d=rr(u),f=d.next();!f.done;f=d.next()){var h=f.value,g=t[h]||0;if(this.isHorizontallyCenteredOnViewport&&(h==="left"||h==="right")){t[h]=(c.width-l.width)/2;continue}g+=o[h],this.isFixedPosition||(h==="top"?g+=a.y:h==="bottom"?g-=a.y:h==="left"?g+=a.x:g-=a.x),t[h]=g}}catch(_){n={error:_}}finally{try{f&&!f.done&&(r=d.return)&&r.call(d)}finally{if(n)throw n.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,n=this.adapter.isFocused(),r=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,s=r.activeElement&&this.adapter.isElementInContainer(r.activeElement);(n||s)&&setTimeout(function(){t.adapter.restoreFocus()},wa.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,n){return!!(t&n)},e.prototype.setBit=function(t,n){return t|n},e.prototype.unsetBit=function(t,n){return t^n},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(Vi);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Hs={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Is={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},WA={FOCUS_ROOT_INDEX:-1},Ps;(function(i){i[i.NONE=0]="NONE",i[i.LIST_ROOT=1]="LIST_ROOT",i[i.FIRST_ITEM=2]="FIRST_ITEM",i[i.LAST_ITEM=3]="LAST_ITEM"})(Ps||(Ps={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var XA=function(i){Hi(e,i);function e(t){var n=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return n.closeAnimationEndTimerId=0,n.defaultFocusState=Ps.LIST_ROOT,n.selectedIndex=-1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Hs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Is},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return WA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var n=t.key,r=t.keyCode,s=n==="Tab"||r===9;s&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var n=this,r=this.adapter.getElementIndex(t);if(!(r<0)){this.adapter.notifySelected({index:r});var s=this.adapter.getAttributeFromElementAtIndex(r,Is.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(s),this.closeAnimationEndTimerId=setTimeout(function(){var a=n.adapter.getElementIndex(t);a>=0&&n.adapter.isSelectableItemAtIndex(a)&&n.setSelectedIndex(a)},xm.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ps.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ps.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ps.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var n=this.adapter.getSelectedSiblingOfItemAtIndex(t);n>=0&&(this.adapter.removeAttributeFromElementAtIndex(n,Is.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(n,Hs.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,Hs.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Is.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,n){this.validatedIndex(t),n?(this.adapter.removeClassFromElementAtIndex(t,Mt.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Is.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,Mt.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Is.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var n=this.adapter.getMenuItemCount(),r=t>=0&&t<n;if(!r)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Vi);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Yt={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},mc={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},Xr={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jA=function(i){Hi(e,i);function e(t,n){n===void 0&&(n={});var r=i.call(this,Qt(Qt({},e.defaultAdapter),t))||this;return r.disabled=!1,r.isMenuOpen=!1,r.useDefaultValidation=!0,r.customValidity=!0,r.lastSelectedIndex=Xr.UNSET_INDEX,r.clickDebounceTimeout=0,r.recentlyClicked=!1,r.leadingIcon=n.leadingIcon,r.helperText=n.helperText,r}return Object.defineProperty(e,"cssClasses",{get:function(){return Yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Xr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return mc},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,n,r){n===void 0&&(n=!1),r===void 0&&(r=!1),!(t>=this.adapter.getMenuItemCount())&&(t===Xr.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),n&&this.adapter.closeMenu(),!r&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,n){n===void 0&&(n=!1);var r=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(r,!1,n)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),n=this.adapter.getMenuItemValues();return t!==Xr.UNSET_INDEX?n[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(Yt.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(Yt.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(Yt.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,n=this.adapter.hasClass(Yt.FOCUSED),r=t||n,s=this.adapter.hasClass(Yt.REQUIRED);this.notchOutline(r),this.adapter.floatLabel(r),this.adapter.setLabelRequired(s)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),n=t.indexOf(this.getValue());this.setSelectedIndex(n,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),n=t>=0?t:0;this.adapter.focusMenuItemAtIndex(n)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(Yt.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(Yt.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(Yt.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},e.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(Yt.FOCUSED))){var n=ln(t)===dt.ENTER,r=ln(t)===dt.SPACEBAR,s=ln(t)===dt.ARROW_UP,a=ln(t)===dt.ARROW_DOWN,o=t.ctrlKey||t.metaKey;if(!o&&(!r&&t.key&&t.key.length===1||r&&this.adapter.isTypeaheadInProgress())){var l=r?" ":t.key,c=this.adapter.typeaheadMatchItem(l,this.getSelectedIndex());c>=0&&this.setSelectedIndex(c),t.preventDefault();return}!n&&!r&&!s&&!a||(this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var n=this.adapter.hasClass(Yt.FOCUSED);if(t){var r=Xr.LABEL_SCALE,s=this.adapter.getLabelWidth()*r;this.adapter.notchOutline(s)}else n||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(Yt.INVALID),this.adapter.removeMenuClass(Yt.MENU_INVALID)):(this.adapter.addClass(Yt.INVALID),this.adapter.addMenuClass(Yt.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(Yt.REQUIRED)&&!this.adapter.hasClass(Yt.DISABLED)?this.getSelectedIndex()!==Xr.UNSET_INDEX&&(this.getSelectedIndex()!==0||!!this.getValue()):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(Yt.REQUIRED):this.adapter.removeClass(Yt.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(es.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(Yt.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(Yt.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(Yt.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(Yt.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var n=this.helperText.isVisible(),r=this.helperText.getId();n&&r?this.adapter.setSelectAnchorAttr(mc.ARIA_DESCRIBEDBY,r):this.adapter.removeSelectAnchorAttr(mc.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},Xr.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(Vi);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jr={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Ji={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qA=function(i){Hi(e,i);function e(t){return i.call(this,Qt(Qt({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ji},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return jr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(jr.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.setValidation=function(t){t?this.adapter.addClass(Ji.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Ji.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(t){t?this.adapter.addClass(Ji.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(Ji.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.getIsValidation=function(){return this.adapter.hasClass(Ji.HELPER_TEXT_VALIDATION_MSG)},e.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(Ji.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(Ji.HELPER_TEXT_VALIDATION_MSG);if(n){var r=this.adapter.hasClass(Ji.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),s=!t||r;if(s){this.showToScreenReader(),t?this.adapter.removeAttr(jr.ROLE):this.adapter.setAttr(jr.ROLE,"alert");return}this.adapter.removeAttr(jr.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(jr.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(jr.ARIA_HIDDEN,"true")},e}(Vi),KA=Ce("<div><!></div>");function YA(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"style",3,""),s=O(e,"static",3,!1),a=O(e,"anchor",3,!0),o=O(e,"fixed",3,!1),l=O(e,"open",31,()=>Ne(s())),c=O(e,"managed",3,!1),u=O(e,"fullWidth",3,!1),d=O(e,"quickOpen",3,!1),f=O(e,"anchorElement",15),h=O(e,"anchorMargin",19,()=>({top:0,right:0,bottom:0,left:0})),g=O(e,"maxHeight",3,0),_=O(e,"horizontallyCenteredOnViewport",3,!1),m=O(e,"openBottomBias",3,0),p=O(e,"neverRestoreFocus",3,!1),y=hn(e,["$$slots","$$events","$$legacy","use","class","style","static","anchor","fixed","open","managed","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","openBottomBias","neverRestoreFocus","children"]),S,v=Wt(void 0),w=Ne({}),T=Ne({}),I=Wt(void 0);Qe("SMUI:list:role","menu"),Qe("SMUI:list:item:role","menuitem"),bt(()=>{var $,pe;S&&a()&&!(($=S.parentElement)!=null&&$.classList.contains("mdc-menu-surface--anchor"))&&((pe=S.parentElement)==null||pe.classList.add("mdc-menu-surface--anchor"),f(S.parentElement??void 0))}),bt(()=>{E(v)&&E(v).isOpen()!==l()&&(l()?E(v).open():E(v).close())}),bt(()=>{E(v)&&E(v).setQuickOpen(d())}),bt(()=>{E(v)&&E(v).setFixedPosition(o())}),bt(()=>{E(v)&&E(v).setMaxHeight(g())}),bt(()=>{E(v)&&E(v).setIsHorizontallyCenteredOnViewport(_())});const b=es;bt(()=>{E(v)&&e.anchorCorner!=null&&(typeof e.anchorCorner=="string"?E(v).setAnchorCorner(b[e.anchorCorner]):E(v).setAnchorCorner(e.anchorCorner))}),bt(()=>{E(v)&&E(v).setAnchorMargin(h())}),bt(()=>{E(v)&&E(v).setOpenBottomBias(m())});const x=St("SMUI:menu-surface:mount"),M=St("SMUI:menu-surface:unmount");Cn(()=>{Pe(v,Ne(new xm({addClass:U,removeClass:L,hasClass:P,hasAnchor:()=>!!f(),notifyClose:()=>{c()||l(s()),l()||Mn(be(),"SMUIMenuSurfaceClosed")},notifyClosing:()=>{c()||l(s()),l()||Mn(be(),"SMUIMenuSurfaceClosing")},notifyOpen:()=>{c()||l(!0),l()&&Mn(be(),"SMUIMenuSurfaceOpened")},notifyOpening:()=>{l()||Mn(be(),"SMUIMenuSurfaceOpening")},isElementInContainer:pe=>be().contains(pe),isRtl:()=>getComputedStyle(be()).getPropertyValue("direction")==="rtl",setTransformOrigin:pe=>{T["transform-origin"]=pe},isFocused:()=>document.activeElement===be(),saveFocus:()=>{Pe(I,Ne(document.activeElement??void 0))},restoreFocus:()=>{!p()&&(!S||be().contains(document.activeElement))&&E(I)&&document.contains(E(I))&&"focus"in E(I)&&E(I).focus()},getInnerDimensions:()=>({width:be().offsetWidth,height:be().offsetHeight}),getAnchorDimensions:()=>f()?f().getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:pe=>{T.left="left"in pe?`${pe.left}px`:"",T.right="right"in pe?`${pe.right}px`:"",T.top="top"in pe?`${pe.top}px`:"",T.bottom="bottom"in pe?`${pe.bottom}px`:""},setMaxHeight:pe=>{T["max-height"]=pe}})));const $={get open(){return l()},set open(pe){l(pe)},closeProgrammatic:Y};return x&&x($),E(v).init(),()=>{var Fe,ze;M&&M($);const pe=E(v).isHoistedElement;(Fe=E(v))==null||Fe.destroy(),pe&&((ze=be().parentNode)==null||ze.removeChild(be()))}}),dr(()=>{var $;a()&&be()&&(($=be().parentElement)==null||$.classList.remove("mdc-menu-surface--anchor"))});function P($){return $ in w?w[$]:be().classList.contains($)}function U($){w[$]||(w[$]=!0)}function L($){(!($ in w)||w[$])&&(w[$]=!1)}function Y($){var pe;(pe=E(v))==null||pe.close($),l(!1)}function H($){E(v)&&l()&&!c()&&E(v).handleBodyClick($)}function F(){return l()}function V($){l($)}function z($,pe){if(E(v)==null)throw new Error("Instance is not defined.");return E(v).setAbsolutePosition($,pe)}function oe($){if(E(v)==null)throw new Error("Instance is not defined.");return E(v).setIsHoisted($)}function ee(){if(E(v)==null)throw new Error("Instance is not defined.");return E(v).isFixed()}function ge(){if(E(v)==null)throw new Error("Instance is not defined.");return E(v).flipCornerHorizontally()}function be(){return S}var qe=KA();Gn("click",Uh.body,H,!0);var ne=$=>{var pe;E(v)&&!c()&&E(v).handleKeydown($),(pe=e.onkeydown)==null||pe.call(e,$)};let re;var Me=De(qe);return ut(Me,()=>e.children??rt),xt(qe,$=>S=$,()=>S),kt(qe,($,pe)=>je==null?void 0:je($,pe),t),Ye(()=>re=Zt(qe,re,{class:tn({[n()]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":o(),"mdc-menu-surface--open":s(),"smui-menu-surface--static":s(),"mdc-menu-surface--fullwidth":u(),...w}),style:Object.entries(T).map(([$,pe])=>`${$}: ${pe};`).concat([r()]).join(" "),role:"dialog",...y,onkeydown:ne})),Z(i,qe),Lt({isOpen:F,setOpen:V,setAbsolutePosition:z,setIsHoisted:oe,isFixed:ee,flipCornerHorizontally:ge,getElement:be})}function gc(i,{addClass:e=n=>i.classList.add(n),removeClass:t=n=>i.classList.remove(n)}={}){return e("mdc-menu-surface--anchor"),{destroy(){t("mdc-menu-surface--anchor")}}}function ZA(i,e){Rt(e,!0);const{closest:t}=od;let n=O(e,"use",19,()=>[]),r=O(e,"class",3,""),s=O(e,"open",15,!1),a=O(e,"anchorElement",15),o=O(e,"managed",3,!1),l=hn(e,["$$slots","$$events","$$legacy","use","class","open","anchorElement","managed","children"]),c,u=Wt(void 0),d=Wt(void 0),f=Wt(void 0);Qe("SMUI:menu-surface:mount",b=>{E(d)||Pe(d,Ne(b))});const h=St("SMUI:list:mount");Qe("SMUI:list:mount",b=>{E(f)||Pe(f,Ne(b)),h&&h(b)});const g=St("SMUI:menu:mount"),_=St("SMUI:menu:unmount");Cn(()=>(Pe(u,Ne(new XA({addClassToElementAtIndex:(b,x)=>{if(E(f)==null)throw new Error("List accessor is undefined.");E(f).addClassForElementIndex(b,x)},removeClassFromElementAtIndex:(b,x)=>{if(E(f)==null)throw new Error("List accessor is undefined.");E(f).removeClassForElementIndex(b,x)},addAttributeToElementAtIndex:(b,x,M)=>{if(E(f)==null)throw new Error("List accessor is undefined.");E(f).setAttributeForElementIndex(b,x,M)},removeAttributeFromElementAtIndex:(b,x)=>{if(E(f)==null)throw new Error("List accessor is undefined.");E(f).removeAttributeForElementIndex(b,x)},getAttributeFromElementAtIndex:(b,x)=>{if(E(f)==null)throw new Error("List accessor is undefined.");return E(f).getAttributeFromElementIndex(b,x)},elementContainsClass:(b,x)=>b.classList.contains(x),closeSurface:b=>{var x;o()||((x=E(d))==null||x.closeProgrammatic(b),Mn(T(),"SMUIMenuClosedProgrammatically"))},getElementIndex:b=>{if(E(f)==null)throw new Error("List accessor is undefined.");return E(f).getOrderedList().map(x=>x.element).indexOf(b)},notifySelected:b=>{if(E(f)==null)throw new Error("List accessor is undefined.");Mn(T(),"SMUIMenuSelected",{index:b.index,item:E(f).getOrderedList()[b.index].element})},getMenuItemCount:()=>{if(E(f)==null)throw new Error("List accessor is undefined.");return E(f).items.length},focusItemAtIndex:b=>{if(E(f)==null)throw new Error("List accessor is undefined.");E(f).focusItemAtIndex(b)},focusListRoot:()=>{if(E(f)==null)throw new Error("List accessor is undefined.");"focus"in E(f).element&&E(f).element.focus()},isSelectableItemAtIndex:b=>{if(E(f)==null)throw new Error("List accessor is undefined.");return!!t(E(f).getOrderedList()[b].element,`.${Hs.MENU_SELECTION_GROUP}`)},getSelectedSiblingOfItemAtIndex:b=>{if(E(f)==null)throw new Error("List accessor is undefined.");const x=E(f).getOrderedList(),M=t(x[b].element,`.${Hs.MENU_SELECTION_GROUP}`),P=M==null?void 0:M.querySelector(`.${Hs.MENU_SELECTED_LIST_ITEM}`);return P?x.map(U=>U.element).indexOf(P):-1}}))),g&&g(E(u)),E(u).init(),()=>{var b;_&&E(u)&&_(E(u)),(b=E(u))==null||b.destroy()}));function m(b){E(u)&&E(u).handleKeydown(b)}function p(){return s()}function y(b){s(b)}function S(b){if(E(u)==null)throw new Error("Instance is undefined.");E(u).setDefaultFocusState(b)}function v(){if(E(u)==null)throw new Error("Instance is undefined.");return E(u).getSelectedIndex()}function w(){return c}function T(){return c.getElement()}var I=Ve(()=>tn({[r()]:!0,"mdc-menu":!0}));return xt(YA(i,qt({get use(){return n()},get class(){return E(I)},get managed(){return o()}},()=>l,{onkeydown:b=>{var x;m(b),(x=e.onkeydown)==null||x.call(e,b)},onSMUIMenuSurfaceOpened:b=>{var x;E(u)&&E(u).handleMenuSurfaceOpened(),(x=e.onSMUIMenuSurfaceOpened)==null||x.call(e,b)},onSMUIListAction:b=>{var x;E(u)&&E(f)&&E(u).handleItemAction(E(f).getOrderedList()[b.detail.index].element),(x=e.onSMUIListAction)==null||x.call(e,b)},get open(){return s()},set open(b){s(b)},get anchorElement(){return a()},set anchorElement(b){a(b)},children:(b,x)=>{var M=We(),P=Ae(M);ut(P,()=>e.children??rt),Z(b,M)},$$slots:{default:!0}})),b=>c=b,()=>c),Lt({isOpen:p,setOpen:y,setDefaultFocusState:S,getSelectedIndex:v,getMenuSurface:w,getElement:T})}function JA(i,e){Rt(e,!0);const{closest:t,matches:n}=od;let r=St("SMUI:list:nav"),s=O(e,"use",19,()=>[]),a=O(e,"class",3,""),o=O(e,"nonInteractive",3,!1),l=O(e,"dense",3,!1),c=O(e,"textualList",3,!1),u=O(e,"avatarList",3,!1),d=O(e,"iconList",3,!1),f=O(e,"imageList",3,!1),h=O(e,"thumbnailList",3,!1),g=O(e,"videoList",3,!1),_=O(e,"twoLine",3,!1),m=O(e,"threeLine",3,!1),p=O(e,"vertical",3,!0),y=O(e,"wrapFocus",19,()=>St("SMUI:list:wrapFocus")??!1),S=O(e,"singleSelection",3,!1),v=O(e,"disabledItemsFocusable",3,!1),w=O(e,"selectedIndex",31,()=>-1),T=O(e,"radioList",3,!1),I=O(e,"checkList",3,!1),b=O(e,"hasTypeahead",3,!1),x=O(e,"component",3,gl),M=O(e,"tag",3,r?"nav":"ul"),P=hn(e,["$$slots","$$events","$$legacy","use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","disabledItemsFocusable","selectedIndex","radioList","checkList","hasTypeahead","component","tag","children"]),U,L=Wt(void 0),Y=[],H=St("SMUI:list:role");const F=new WeakMap;let V=St("SMUI:dialog:selection"),z=St("SMUI:addLayoutListener"),oe;Qe("SMUI:list:nonInteractive",o()),Qe("SMUI:separator:context","list"),H||(S()?(H="listbox",Qe("SMUI:list:item:role","option")):T()?(H="radiogroup",Qe("SMUI:list:item:role","radio")):I()?(H="group",Qe("SMUI:list:item:role","checkbox")):(H="list",Qe("SMUI:list:item:role",void 0))),bt(()=>{E(L)&&E(L).setVerticalOrientation(p())}),bt(()=>{E(L)&&E(L).setWrapFocus(y())}),bt(()=>{E(L)&&E(L).setHasTypeahead(b())}),bt(()=>{E(L)&&E(L).setSingleSelection(S())}),bt(()=>{E(L)&&E(L).setDisabledItemsFocusable(v())}),bt(()=>{E(L)&&S()&&tt()!==w()&&E(L).setSelectedIndex(w())}),z&&(oe=z($e)),Qe("SMUI:list:item:mount",X=>{Y.push(X),F.set(X.element,X),S()&&X.selected&&w(vt(X.element))}),Qe("SMUI:list:item:unmount",X=>{const q=(X&&Y.findIndex(N=>N===X))??-1;q!==-1&&(Y.splice(q,1),F.delete(X.element))});const ee=St("SMUI:list:mount"),ge=St("SMUI:list:unmount");Cn(()=>{Pe(L,Ne(new GA({addClassForElementIndex:Fe,focusItemAtIndex:R,getAttributeForElementIndex:(q,N)=>{var se;return((se=$()[q])==null?void 0:se.getAttr(N))??null},getFocusedElementIndex:()=>document.activeElement?$().map(q=>q.element).indexOf(document.activeElement):-1,getListItemCount:()=>Y.length,getPrimaryTextAtIndex:D,hasCheckboxAtIndex:q=>{var N;return((N=$()[q])==null?void 0:N.hasCheckbox)??!1},hasRadioAtIndex:q=>{var N;return((N=$()[q])==null?void 0:N.hasRadio)??!1},isCheckboxCheckedAtIndex:q=>{const N=$()[q];return((N==null?void 0:N.hasCheckbox)&&N.checked)??!1},isFocusInsideList:()=>U!=null&&A()!==document.activeElement&&A().contains(document.activeElement),isRootFocused:()=>U!=null&&document.activeElement===A(),listItemAtIndexHasClass:pe,notifyAction:q=>{w(q),U!=null&&Mn(A(),"SMUIListAction",{index:q})},notifySelectionChange:q=>{U!=null&&Mn(A(),"SMUIListSelectionChange",{changedIndices:q})},removeClassForElementIndex:ze,setAttributeForElementIndex:_t,setCheckedCheckboxOrRadioAtIndex:(q,N)=>{$()[q].checked=N},setTabIndexForListItemChildren:(q,N)=>{const se=$()[q];Array.prototype.forEach.call(se.element.querySelectorAll("button:not(:disabled), a"),le=>{le.setAttribute("tabindex",N)})}})));const X={get element(){return A()},get items(){return Y},get typeaheadInProgress(){if(!E(L))throw new Error("Instance is undefined.");return E(L).isTypeaheadInProgress()},typeaheadMatchItem(q,N){if(!E(L))throw new Error("Instance is undefined.");return E(L).typeaheadMatchItem(q,N,!0)},getOrderedList:$,focusItemAtIndex:R,addClassForElementIndex:Fe,removeClassForElementIndex:ze,setAttributeForElementIndex:_t,removeAttributeForElementIndex:fe,getAttributeFromElementIndex:ke,getPrimaryTextAtIndex:D};return ee&&ee(X),E(L).init(),E(L).layout(),()=>{var q;ge&&ge(X),(q=E(L))==null||q.destroy()}}),dr(()=>{oe&&oe()});function be(X){E(L)&&X.target&&E(L).handleKeydown(X,X.target.classList.contains("mdc-deprecated-list-item"),vt(X.target))}function qe(X){E(L)&&X.target&&E(L).handleFocusIn(vt(X.target))}function ne(X){E(L)&&X.target&&E(L).handleFocusOut(vt(X.target))}function re(X){E(L)&&X.target&&E(L).handleClick(vt(X.target),!n(X.target,'input[type="checkbox"], input[type="radio"]'),X)}function Me(X){if(T()||I()){const q=vt(X.target);if(q!==-1){const N=$()[q];N&&(T()&&!N.checked||I())&&(n(X.detail.target,'input[type="checkbox"], input[type="radio"]')||(N.checked=!N.checked),N.activateRipple(),window.requestAnimationFrame(()=>{N.deactivateRipple()}))}}}function $(){return U==null?[]:[...A().children].map(X=>F.get(X)).filter(X=>X&&X._smui_list_item_accessor)}function pe(X,q){const N=$()[X];return(N&&N.hasClass(q))??!1}function Fe(X,q){const N=$()[X];N&&N.addClass(q)}function ze(X,q){const N=$()[X];N&&N.removeClass(q)}function _t(X,q,N){const se=$()[X];se&&se.addAttr(q,N)}function fe(X,q){const N=$()[X];N&&N.removeAttr(q)}function ke(X,q){const N=$()[X];return N?N.getAttr(q):null}function D(X){const q=$()[X];return(q&&q.getPrimaryText())??""}function vt(X){const q=t(X,".mdc-deprecated-list-item, .mdc-deprecated-list");return q&&n(q,".mdc-deprecated-list-item")?$().map(N=>N==null?void 0:N.element).indexOf(q):-1}function $e(){if(!E(L))throw new Error("Instance is undefined.");return E(L).layout()}function et(X,q){if(!E(L))throw new Error("Instance is undefined.");return E(L).setEnabled(X,q)}function Re(){if(!E(L))throw new Error("Instance is undefined.");return E(L).isTypeaheadInProgress()}function tt(){if(!E(L))throw new Error("Instance is undefined.");return E(L).getSelectedIndex()}function ye(){if(!E(L))throw new Error("Instance is undefined.");return E(L).getFocusedItemIndex()}function R(X){const q=$()[X];q&&"focus"in q.element&&q.element.focus()}function A(){return U.getElement()}var K=We(),ie=Ae(K),ue=Ve(()=>tn({[a()]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":o(),"mdc-deprecated-list--dense":l(),"mdc-deprecated-list--textual-list":c(),"mdc-deprecated-list--avatar-list":u()||V,"mdc-deprecated-list--icon-list":d(),"mdc-deprecated-list--image-list":f(),"mdc-deprecated-list--thumbnail-list":h(),"mdc-deprecated-list--video-list":g(),"mdc-deprecated-list--two-line":_(),"smui-list--three-line":m()&&!_()}));return ul(ie,x,(X,q)=>{xt(q(X,qt({get tag(){return M()},get use(){return s()},get class(){return E(ue)},role:H},()=>P,{onkeydown:N=>{var se;be(N),(se=e.onkeydown)==null||se.call(e,N)},onfocusin:N=>{var se;qe(N),(se=e.onfocusin)==null||se.call(e,N)},onfocusout:N=>{var se;ne(N),(se=e.onfocusout)==null||se.call(e,N)},onclick:N=>{var se;re(N),(se=e.onclick)==null||se.call(e,N)},onSMUIAction:N=>{var se;Me(N),(se=e.onSMUIAction)==null||se.call(e,N)},children:(N,se)=>{var He=We(),le=Ae(He);ut(le,()=>e.children??rt),Z(N,He)},$$slots:{default:!0}})),N=>U=N,()=>U)}),Z(i,K),Lt({layout:$e,setEnabled:et,getTypeaheadInProgress:Re,getSelectedIndex:tt,getFocusedItemIndex:ye,focusItemAtIndex:R,getElement:A})}let QA=0;var $A=Ce('<span class="mdc-deprecated-list-item__ripple"></span>'),ew=Ce("<!><!>",1);function tw(i,e){Rt(e,!0);let t=()=>{};function n(fe){return fe===t}let r=St("SMUI:list:item:nav"),s=O(e,"use",19,()=>[]),a=O(e,"class",3,""),o=O(e,"style",3,""),l=O(e,"nonInteractive",19,()=>St("SMUI:list:nonInteractive")??!1),c=O(e,"ripple",19,()=>!l()),u=O(e,"wrapper",3,!1),d=O(e,"activated",15,!1),f=O(e,"role",19,()=>u()?"presentation":St("SMUI:list:item:role")),h=O(e,"selected",15,!1),g=O(e,"disabled",3,!1),_=O(e,"skipRestoreFocus",3,!1),m=O(e,"tabindex",15,t),p=O(e,"inputId",19,()=>"SMUI-form-field-list-"+QA++),y=O(e,"component",3,gl),S=O(e,"tag",19,()=>r?e.href?"a":"span":"li"),v=hn(e,["$$slots","$$events","$$legacy","use","class","style","color","nonInteractive","ripple","wrapper","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","tag","children"]);Qe("SMUI:list:nonInteractive",void 0),Qe("SMUI:list:item:role",void 0);let w,T=Ne({}),I=Ne({}),b=Ne({}),x=Wt(void 0),M=Wt(void 0);const P=Ve(()=>n(m())?!l()&&!g()&&(h()||E(x)&&E(x).checked)?0:-1:m());Qe("SMUI:generic:input:props",{id:p()}),Qe("SMUI:separator:context",void 0),Qe("SMUI:generic:input:mount",fe=>{("_smui_checkbox_accessor"in fe||"_smui_radio_accessor"in fe)&&Pe(x,Ne(fe))}),Qe("SMUI:generic:input:unmount",()=>{Pe(x,void 0)});const U=St("SMUI:list:item:mount"),L=St("SMUI:list:item:unmount");Cn(()=>{if(!h()&&!l()){let ke=!0,D=w.getElement();for(;D.previousElementSibling;)if(D=D.previousElementSibling,D.nodeType===1&&D.classList.contains("mdc-deprecated-list-item")&&!D.classList.contains("mdc-deprecated-list-item--disabled")){ke=!1;break}ke&&Pe(M,Ne(window.requestAnimationFrame(()=>ge(D))))}const fe={_smui_list_item_accessor:!0,get element(){return re()},get selected(){return h()},set selected(ke){h(ke)},hasClass:Y,addClass:H,removeClass:F,getAttr:z,addAttr:oe,removeAttr:ee,getPrimaryText:ne,get checked(){return(E(x)&&E(x).checked)??!1},set checked(ke){E(x)&&(E(x).checked=!!ke)},get hasCheckbox(){return!!(E(x)&&"_smui_checkbox_accessor"in E(x))},get hasRadio(){return!!(E(x)&&"_smui_radio_accessor"in E(x))},activateRipple(){E(x)&&E(x).activateRipple()},deactivateRipple(){E(x)&&E(x).deactivateRipple()},getValue(){return e.value},action:qe,get tabindex(){return E(P)},set tabindex(ke){m(ke)},get disabled(){return g()},get activated(){return d()},set activated(ke){d(ke)}};return U&&U(fe),()=>{L&&L(fe)}}),dr(()=>{E(M)&&window.cancelAnimationFrame(E(M))});function Y(fe){return fe in T?T[fe]:re().classList.contains(fe)}function H(fe){T[fe]||(T[fe]=!0)}function F(fe){(!(fe in T)||T[fe])&&(T[fe]=!1)}function V(fe,ke){I[fe]!=ke&&(ke===""||ke==null?delete I[fe]:I[fe]=ke)}function z(fe){return fe in b?b[fe]??null:re().getAttribute(fe)}function oe(fe,ke){b[fe]!==ke&&(b[fe]=ke)}function ee(fe){(!(fe in b)||b[fe]!=null)&&(b[fe]=void 0)}function ge(fe){let ke=!0;for(;fe.nextElementSibling;)if(fe=fe.nextElementSibling,fe.nodeType===1&&fe.classList.contains("mdc-deprecated-list-item")){const D=fe.attributes.getNamedItem("tabindex");if(D&&D.value==="0"){ke=!1;break}}ke&&m(0)}function be(fe){const ke=fe.key==="Enter",D=fe.key==="Space";(ke||D)&&qe(fe)}function qe(fe){g()||Mn(re(),"SMUIAction",fe)}function ne(){const fe=re(),ke=fe.querySelector(".mdc-deprecated-list-item__primary-text");if(ke)return ke.textContent??"";const D=fe.querySelector(".mdc-deprecated-list-item__text");return D?D.textContent??"":fe.textContent??""}function re(){return w.getElement()}var Me=We(),$=Ae(Me),pe=Ve(()=>[...l()?[]:[[gi,{ripple:!E(x),unbounded:!1,color:(d()||h())&&e.color==null?"primary":e.color,disabled:g(),addClass:H,removeClass:F,addStyle:V}]],...s()]),Fe=Ve(()=>tn({[a()]:!0,"mdc-deprecated-list-item":!u(),"mdc-deprecated-list-item__wrapper":u(),"mdc-deprecated-list-item--activated":d(),"mdc-deprecated-list-item--selected":h(),"mdc-deprecated-list-item--disabled":g(),"mdc-menu-item--selected":!r&&f()==="menuitem"&&h(),"smui-menu-item--non-interactive":l(),...T})),ze=Ve(()=>Object.entries(I).map(([fe,ke])=>`${fe}: ${ke};`).concat([o()]).join(" ")),_t=Ve(()=>_()||void 0);return ul($,y,(fe,ke)=>{xt(ke(fe,qt({get tag(){return S()},get use(){return E(pe)},get class(){return E(Fe)},get style(){return E(ze)}},()=>r&&d()?{"aria-current":"page"}:{},()=>!r||u()?{role:f()}:{},()=>!r&&f()==="option"?{"aria-selected":h()?"true":"false"}:{},()=>!r&&(f()==="radio"||f()==="checkbox")?{"aria-checked":E(x)&&E(x).checked?"true":"false"}:{},()=>r?{}:{"aria-disabled":g()?"true":"false"},{get"data-menu-item-skip-restore-focus"(){return E(_t)},get tabindex(){return E(P)},get href(){return e.href}},()=>b,()=>v,{onclick:D=>{var vt;qe(D),(vt=e.onclick)==null||vt.call(e,D)},onkeydown:D=>{var vt;be(D),(vt=e.onkeydown)==null||vt.call(e,D)},children:(D,vt)=>{var $e=ew(),et=Ae($e);{var Re=ye=>{var R=$A();Z(ye,R)};Ke(et,ye=>{c()&&ye(Re)})}var tt=_e(et);ut(tt,()=>e.children??rt),Z(D,$e)},$$slots:{default:!0}})),D=>w=D,()=>w)}),Z(i,Me),Lt({action:qe,getPrimaryText:ne,getElement:re})}let nw=0;var iw=Ce("<div><!></div>");function rw(i,e){Rt(e,!0);let t=O(e,"use",19,()=>[]),n=O(e,"class",3,""),r=O(e,"id",19,()=>"SMUI-select-helper-text-"+nw++),s=O(e,"persistent",3,!1),a=O(e,"validationMsg",3,!1),o=hn(e,["$$slots","$$events","$$legacy","use","class","id","persistent","validationMsg","children"]),l,c=Wt(void 0),u=Ne({}),d=Ne({}),f=Wt(void 0);const h=St("SMUI:select:helper-text:id"),g=St("SMUI:select:helper-text:mount"),_=St("SMUI:select:helper-text:unmount");Cn(()=>(Pe(c,Ne(new qA({addClass:p,removeClass:y,hasClass:m,getAttr:S,setAttr:v,removeAttr:w,setContent:U=>{Pe(f,Ne(U))}}))),h&&h(r()),g&&g(E(c)),E(c).init(),()=>{var U;_&&E(c)&&_(E(c)),(U=E(c))==null||U.destroy()}));function m(U){return U in u?u[U]:T().classList.contains(U)}function p(U){u[U]||(u[U]=!0)}function y(U){(!(U in u)||u[U])&&(u[U]=!1)}function S(U){return U in d?d[U]??null:T().getAttribute(U)}function v(U,L){d[U]!==L&&(d[U]=L)}function w(U){(!(U in d)||d[U]!=null)&&(d[U]=void 0)}function T(){return l}var I=iw();let b;var x=De(I);{var M=U=>{var L=We(),Y=Ae(L);ut(Y,()=>e.children??rt),Z(U,L)},P=U=>{var L=zt();Ye(()=>wn(L,E(f))),Z(U,L)};Ke(x,U=>{E(f)==null?U(M):U(P,!1)})}return xt(I,U=>l=U,()=>l),kt(I,(U,L)=>je==null?void 0:je(U,L),t),Ye(()=>b=Zt(I,b,{class:tn({[n()]:!0,"mdc-select-helper-text":!0,"mdc-select-helper-text--validation-msg":a(),"mdc-select-helper-text--validation-msg-persistent":s(),...u}),"aria-hidden":s()?void 0:"true",id:r(),...d,...o})),Z(i,I),Lt({getElement:T})}let sw=0;var aw=Ce("<input>"),ow=Ce('<span class="mdc-select__ripple"></span>'),lw=Ce('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>',1);function yh(i,e){Rt(e,!0);const[t,n]=ku(),r=()=>fp(A,"$selectedTextStore",t);let s=()=>{};function a(k){return k===s}let o=O(e,"use",19,()=>[]),l=O(e,"class",3,""),c=O(e,"style",3,""),u=O(e,"ripple",3,!0),d=O(e,"disabled",3,!1),f=O(e,"variant",3,"standard"),h=O(e,"noLabel",3,!1),g=O(e,"label",3,void 0),_=O(e,"value",15),m=O(e,"key",3,k=>k),p=O(e,"dirty",15,!1),y=O(e,"invalid",15,s),S=O(e,"updateInvalid",19,()=>a(y())),v=O(e,"required",3,!1),w=O(e,"inputId",19,()=>"SMUI-select-"+sw++),T=O(e,"hiddenInput",3,!1),I=O(e,"withLeadingIcon",3,s),b=O(e,"anchor$use",19,()=>[]),x=O(e,"anchor$class",3,""),M=O(e,"selectedTextContainer$use",19,()=>[]),P=O(e,"selectedTextContainer$class",3,""),U=O(e,"selectedText$use",19,()=>[]),L=O(e,"selectedText$class",3,""),Y=O(e,"dropdownIcon$use",19,()=>[]),H=O(e,"dropdownIcon$class",3,""),F=O(e,"menu$class",3,""),V=hn(e,["$$slots","$$events","$$legacy","use","class","style","ripple","disabled","variant","noLabel","label","value","key","dirty","invalid","updateInvalid","required","inputId","hiddenInput","withLeadingIcon","anchor$use","anchor$class","selectedTextContainer$use","selectedTextContainer$class","selectedText$use","selectedText$class","dropdownIcon$use","dropdownIcon$class","menu$class","children","leadingIcon","helperText"]);const z=a(y());a(y())&&y(!1);let oe,ee=Wt(void 0),ge=Ne({}),be=Ne({}),qe,ne=Ne({}),re=Wt(-1);const Me=Ve(()=>V.menu$id??w()+"-menu");let $=Wt(void 0),pe=St("SMUI:addLayoutListener"),Fe,ze=Wt(!1),_t=Ne({}),fe=Wt(void 0),ke=Wt(void 0),D=Wt(!1),vt,$e=St("SMUI:select:context"),et,Re,tt,ye,R;Qe("SMUI:list:role",""),Qe("SMUI:list:nav",!1);const A=Tc("");Qe("SMUI:select:selectedText",A);const K=Tc(_());bt(()=>{Yo(K,Ne(_()))}),Qe("SMUI:select:value",K),bt(()=>{E(ee)&&E(ee).getValue()!==m()(_())&&E(ee).setValue(m()(_()))});let ie=E(re);bt(()=>{if(ie!==E(re))if(ie=E(re),E(ee))E(ee).setSelectedIndex(E(re),!1,!0);else{const k=Ge();_()!==k[E(re)]&&_(k[E(re)])}}),bt(()=>{E(ee)&&E(ee).getDisabled()!==d()&&E(ee).setDisabled(d())}),bt(()=>{E(ee)&&p()&&E(ee).isValid()!==!y()&&(S()?y(!E(ee).isValid()):E(ee).setValid(!y()))}),bt(()=>{E(ee)&&E(ee).getRequired()!==v()&&E(ee).setRequired(v())}),pe&&(Fe=pe(ve)),Qe("SMUI:select:leading-icon:mount",k=>{et=k}),Qe("SMUI:select:leading-icon:unmount",()=>{et=void 0}),Qe("SMUI:list:mount",k=>{vt=k}),Qe("SMUI:select:helper-text:id",k=>{Pe($,Ne(k))}),Qe("SMUI:select:helper-text:mount",k=>{Re=k}),Qe("SMUI:select:helper-text:unmount",()=>{Pe($,void 0),Re=void 0}),Cn(()=>(Pe(ee,Ne(new jA({setSelectedText:k=>{Yo(A,Ne(k))},isSelectAnchorFocused:()=>document.activeElement===qe,getSelectAnchorAttr:le,setSelectAnchorAttr:xe,removeSelectAnchorAttr:Ue,addMenuClass:se,removeMenuClass:He,openMenu:()=>{Pe(ze,!0)},closeMenu:()=>{Pe(ze,!1)},getAnchorElement:()=>qe,setMenuAnchorElement:k=>{Pe(fe,Ne(k))},setMenuAnchorCorner:k=>{Pe(ke,Ne(k))},setMenuWrapFocus:k=>{Pe(D,Ne(k))},getSelectedIndex:()=>E(re),setSelectedIndex:k=>{ie=k,Pe(re,Ne(k)),_(Ge()[E(re)])},focusMenuItemAtIndex:k=>{vt.focusItemAtIndex(k)},getMenuItemCount:()=>vt.items.length,getMenuItemValues:()=>Ge().map(m()),getMenuItemTextAtIndex:k=>vt.getPrimaryTextAtIndex(k),isTypeaheadInProgress:()=>vt.typeaheadInProgress,typeaheadMatchItem:(k,de)=>vt.typeaheadMatchItem(k,de),addClass:X,removeClass:q,hasClass:ue,setRippleCenter:k=>ye&&ye.setRippleCenter(k),activateBottomLine:()=>ye&&ye.activate(),deactivateBottomLine:()=>ye&&ye.deactivate(),notifyChange:k=>{var de;p(!0),S()&&y(!((de=E(ee))!=null&&de.isValid())),Mn(te(),"SMUISelectChange",{value:_(),index:E(re)})},hasOutline:()=>!!R,notchOutline:k=>R&&R.notch(k),closeOutline:()=>R&&R.closeNotch(),hasLabel:()=>!!tt,floatLabel:k=>tt&&tt.float(k),getLabelWidth:()=>tt?tt.getWidth():0,setLabelRequired:k=>tt&&tt.setRequired(k)},{get helperText(){return Re},get leadingIcon(){return et}}))),Pe(re,Ne(Ge().indexOf(_()))),E(ee).init(),at(z),()=>{var k;(k=E(ee))==null||k.destroy()})),dr(()=>{Fe&&Fe()});function ue(k){return k in ge?ge[k]:te().classList.contains(k)}function X(k){ge[k]||(ge[k]=!0)}function q(k){(!(k in ge)||ge[k])&&(ge[k]=!1)}function N(k,de){be[k]!=de&&(de===""||de==null?delete be[k]:be[k]=de)}function se(k){_t[k]||(_t[k]=!0)}function He(k){(!(k in _t)||_t[k])&&(_t[k]=!1)}function le(k){return k in ne?ne[k]??null:te().getAttribute(k)}function xe(k,de){ne[k]!==de&&(ne[k]=de)}function Ue(k){(!(k in ne)||ne[k]!=null)&&(ne[k]=void 0)}function Ge(){return vt.getOrderedList().map(k=>k.getValue())}function Te(k){const de=k.currentTarget.getBoundingClientRect();return(ot(k)?k.touches[0].clientX:k.clientX)-de.left}function ot(k){return"touches"in k}function Oe(){if(E(ee)==null)throw new Error("Instance is undefined.");return E(ee).getUseDefaultValidation()}function at(k){var de;(de=E(ee))==null||de.setUseDefaultValidation(k)}function B(){qe.focus()}function ve(){var k;(k=E(ee))==null||k.layout()}function te(){return oe}var ae=lw(),ce=Ae(ae);const he=Ve(()=>_u(V,["input$","anchor$","label$","outline$","selectedTextContainer$","selectedText$","dropdownIcon$","ripple$","menu$","list$","helperText$"]));let Le;var ht=De(ce);{var Vt=k=>{var de=aw();const It=Ve(()=>un(V,"input$"));let Et;Ye(()=>Et=Zt(de,Et,{type:"hidden",required:v(),disabled:d(),value:_(),...E(It)})),Z(k,de)};Ke(ht,k=>{T()&&k(Vt)})}var it=_e(ht,2);const mt=Ve(()=>un(V,"anchor$"));var Gt=k=>{var de;qe.focus(),E(ee)&&E(ee).handleClick(Te(k)),(de=e.anchor$onclick)==null||de.call(e,k)},Tt=k=>{var de;E(ee)&&E(ee).handleKeydown(k),(de=e.onkeydown)==null||de.call(e,k)},$t=k=>{var de;E(ee)&&E(ee).handleBlur(),Mn(te(),"blur",k),(de=e.anchor$onblur)==null||de.call(e,k)},bn=k=>{var de;E(ee)&&E(ee).handleFocus(),Mn(te(),"focus",k),(de=e.anchor$onfocus)==null||de.call(e,k)};let vn;var ri=De(it);{var Kt=k=>{var de=ow();Z(k,de)};Ke(ri,k=>{f()==="filled"&&k(Kt)})}var nn=_e(ri,2);{var pn=k=>{var de=Ve(()=>w()+"-smui-label"),It=Ve(()=>r()!==""),Et=Ve(()=>un(V,"label$"));xt(nl(k,qt({get id(){return E(de)},get floatAbove(){return E(It)},get required(){return v()}},()=>E(Et),{children:(lt,Be)=>{var Xt=We(),At=Ae(Xt);{var xn=rn=>{},Ti=rn=>{var Ai=We(),Dt=Ae(Ai);{var Rn=jt=>{var en=zt();Ye(()=>wn(en,g())),Z(jt,en)},yn=jt=>{var en=We(),Nr=Ae(en);ut(Nr,g),Z(jt,en)};Ke(Dt,jt=>{typeof g()=="string"?jt(Rn):jt(yn,!1)},!0)}Z(rn,Ai)};Ke(At,rn=>{g()==null?rn(xn):rn(Ti,!1)})}Z(lt,Xt)},$$slots:{default:!0}})),lt=>tt=lt,()=>tt)};Ke(nn,k=>{f()!=="outlined"&&!h()&&g()!=null&&k(pn)})}var mn=_e(nn,2);{var si=k=>{var de=Ve(()=>h()||g()==null),It=Ve(()=>un(V,"outline$"));xt(gm(k,qt({get noLabel(){return E(de)}},()=>E(It),{children:(Et,lt)=>{var Be=We(),Xt=Ae(Be);{var At=xn=>{var Ti=Ve(()=>w()+"-smui-label"),rn=Ve(()=>r()!==""),Ai=Ve(()=>un(V,"label$"));xt(nl(xn,qt({get id(){return E(Ti)},get floatAbove(){return E(rn)},get required(){return v()}},()=>E(Ai),{children:(Dt,Rn)=>{var yn=We(),jt=Ae(yn);{var en=Kn=>{},Nr=Kn=>{var fd=We(),ym=Ae(fd);{var Sm=cs=>{var pa=zt();Ye(()=>wn(pa,g())),Z(cs,pa)},Em=cs=>{var pa=We(),Mm=Ae(pa);ut(Mm,g),Z(cs,pa)};Ke(ym,cs=>{typeof g()=="string"?cs(Sm):cs(Em,!1)},!0)}Z(Kn,fd)};Ke(jt,Kn=>{g()==null?Kn(en):Kn(Nr,!1)})}Z(Dt,yn)},$$slots:{default:!0}})),Dt=>tt=Dt,()=>tt)};Ke(Xt,xn=>{!h()&&g()!=null&&xn(At)})}Z(Et,Be)},$$slots:{default:!0}})),Et=>R=Et,()=>R)};Ke(mn,k=>{f()==="outlined"&&k(si)})}var Mi=_e(mn,2);ut(Mi,()=>e.leadingIcon??rt);var bi=_e(Mi,2);const ai=Ve(()=>un(V,"selectedTextContainer$"));let oi;var Hn=De(bi);const zi=Ve(()=>un(V,"selectedText$"));let ls;var C=De(Hn);kt(Hn,(k,de)=>je==null?void 0:je(k,de),U),kt(bi,(k,de)=>je==null?void 0:je(k,de),M);var G=_e(bi,2);const J=Ve(()=>un(V,"dropdownIcon$"));let Q;kt(G,(k,de)=>je==null?void 0:je(k,de),Y);var j=_e(G,2);{var me=k=>{var de=Ve(()=>un(V,"ripple$"));xt(mm(k,qt(()=>E(de))),It=>ye=It,()=>ye)};Ke(j,k=>{f()!=="outlined"&&u()&&k(me)})}xt(it,k=>qe=k,()=>qe),kt(it,(k,de)=>je==null?void 0:je(k,de),b);var Ee=_e(it,2),we=Ve(()=>tn({[F()]:!0,"mdc-select__menu":!0,..._t})),Ie=Ve(()=>un(V,"menu$"));ZA(Ee,qt({get class(){return E(we)},get id(){return E(Me)},fullWidth:!0,anchor:!1,get anchorElement(){return E(fe)},get anchorCorner(){return E(ke)}},()=>E(Ie),{onSMUIMenuSelected:k=>{var de;E(ee)&&E(ee).handleMenuItemAction(k.detail.index),(de=e.onSMUIMenuSelected)==null||de.call(e,k)},onSMUIMenuSurfaceClosing:k=>{var de;E(ee)&&E(ee).handleMenuClosing(),(de=e.onSMUIMenuSurfaceClosing)==null||de.call(e,k)},onSMUIMenuSurfaceClosed:k=>{var de;E(ee)&&E(ee).handleMenuClosed(),(de=e.onSMUIMenuSurfaceClosed)==null||de.call(e,k)},onSMUIMenuSurfaceOpened:k=>{var de;E(ee)&&E(ee).handleMenuOpened(),(de=e.onSMUIMenuSurfaceOpened)==null||de.call(e,k)},get open(){return E(ze)},set open(k){Pe(ze,Ne(k))},children:(k,de)=>{var It=Ve(()=>un(V,"list$"));JA(k,qt({role:"listbox",get wrapFocus(){return E(D)}},()=>E(It),{get selectedIndex(){return E(re)},set selectedIndex(Et){Pe(re,Ne(Et))},children:(Et,lt)=>{var Be=We(),Xt=Ae(Be);ut(Xt,()=>e.children??rt),Z(Et,Be)},$$slots:{default:!0}}))},$$slots:{default:!0}})),xt(ce,k=>oe=k,()=>oe),kt(ce,(k,de)=>gi==null?void 0:gi(k,de),()=>({ripple:f()==="filled",unbounded:!1,addClass:X,removeClass:q,addStyle:N})),kt(ce,(k,de)=>gc==null?void 0:gc(k,de),()=>({addClass:X,removeClass:q})),kt(ce,(k,de)=>je==null?void 0:je(k,de),o);var Ze=_e(ce,2);{var Je=k=>{var de=Ve(()=>un(V,"helperText$"));rw(k,qt(()=>E(de),{children:(It,Et)=>{var lt=We(),Be=Ae(lt);ut(Be,()=>e.helperText??rt),Z(It,lt)},$$slots:{default:!0}}))};Ke(Ze,k=>{e.helperText&&k(Je)})}Ye(()=>{Le=Zt(ce,Le,{class:tn({[l()]:!0,"mdc-select":!0,"mdc-select--required":v(),"mdc-select--disabled":d(),"mdc-select--filled":f()==="filled","mdc-select--outlined":f()==="outlined","smui-select--standard":f()==="standard","mdc-select--with-leading-icon":a(I())?e.leadingIcon:I(),"mdc-select--no-label":h()||g()==null,"mdc-select--invalid":y(),"mdc-select--activated":E(ze),"mdc-data-table__pagination-rows-per-page-select":$e==="data-table:pagination",...ge}),style:Object.entries(be).map(([k,de])=>`${k}: ${de};`).concat([c()]).join(" "),...E(he)}),vn=Zt(it,vn,{class:tn({[x()]:!0,"mdc-select__anchor":!0}),"aria-required":v()?"true":void 0,"aria-disabled":d()?"true":void 0,"aria-controls":E(Me),"aria-expanded":E(ze)?"true":"false","aria-describedby":E($),role:"combobox",tabindex:"0",...ne,...E(mt),onclick:Gt,onkeydown:Tt,onblur:$t,onfocus:bn}),oi=Zt(bi,oi,{class:tn({[P()]:!0,"mdc-select__selected-text-container":!0}),...E(ai)}),ls=Zt(Hn,ls,{id:w()+"-smui-selected-text",class:tn({[L()]:!0,"mdc-select__selected-text":!0}),role:"button","aria-haspopup":"listbox","aria-labelledby":w()+"-smui-label",...E(zi)}),wn(C,r()),Q=Zt(G,Q,{class:tn({[H()]:!0,"mdc-select__dropdown-icon":!0}),...E(J)})}),Z(i,ae);var Xe=Lt({getUseDefaultValidation:Oe,setUseDefaultValidation:at,focus:B,layout:ve,getElement:te});return n(),Xe}function Sn(i,e){Rt(e,!0);const[t,n]=ku(),r=()=>fp(u,"$selectedValue",t);let s=O(e,"use",19,()=>[]);O(e,"class",3,"");let a=O(e,"value",3,""),o=hn(e,["$$slots","$$events","$$legacy","use","class","value","children"]),l;const c=St("SMUI:select:selectedText"),u=St("SMUI:select:value");Qe("SMUI:list:item:role","option");const d=Ve(()=>a()!=null&&a()!==""&&r()===a());Cn(f),dr(f);function f(){E(d)&&l&&Yo(c,Ne(l.getPrimaryText()))}function h(){return l.getElement()}xt(tw(i,qt({get use(){return s()},get"data-value"(){return a()},get value(){return a()},get selected(){return E(d)}},()=>o,{children:(_,m)=>{var p=We(),y=Ae(p);ut(y,()=>e.children??rt),Z(_,p)},$$slots:{default:!0}})),_=>l=_,()=>l);var g=Lt({getElement:h});return n(),g}var cw=Ce("<i></i>"),uw=Ce("<i></i>"),dw=Ce('<a target="_blank" class="text-4 font-350 no-underline color-black"><i class="devicon-github-original text-5"></i> Ссылка на GitHub</a>'),fw=Ce('<a target="_blank" class="text-4 font-350 no-underline color-black"><i class="devicon-ros-original text-5 inline-block"></i> Веб-страница</a>'),hw=Ce('<section class="w-[100%] md:w-100 bg-white hover:bg-WhiteSmoke rounded-lg shadow-md p-5 flex flex-col gap-5 md:m-5 justify-between"><img class="w-full h-40 object-cover rounded-lg"> <h2 class="text-5 font-500"> </h2> <p class="text-4 leading-7 font-350"> </p> <div class="flex gap-2"><!> <!></div> <div class="flex flex-col gap-2 justify-self-end"><!> <!></div></section>');function pw(i,e){let t=O(e,"title",8),n=O(e,"description",8),r=O(e,"image",8),s=O(e,"github",8,void 0),a=O(e,"page",8,void 0),o=O(e,"libs",24,()=>[]),l=O(e,"languages",8);const c={any:"hidden",c:"devicon-c-plain",cpp:"devicon-cplusplus-plain",rust:"devicon-rust-plain",asm:"devicon-assembly-plain",python:"devicon-python-plain",js:"devicon-javascript-plain",ts:"devicon-typescript-plain",java:"devicon-java-plain",kotlin:"devicon-kotlin-plain",matlab:"devicon-matlab-plain"},u={any:"Не указан",c:"C",cpp:"C++",rust:"Rust",asm:"Ассемблер",python:"Python",js:"JavaScript",ts:"TypeScript",java:"Java",kotlin:"Kotlin",matlab:"MATLAB"},d={undefined:"hidden",sdl:"devicon-sdl-plain",glfw:"devicon-glfw-plain",qt:"devicon-qt-plain",gtk:"devicon-gtk-plain",ncurses:"devicon-ncurses-plain",opengl:"devicon-opengl-plain",webgl:"devicon-opengl-plain",vulkan:"devicon-vulkan-plain",directx:"devicon-directx-plain",winapi:"devicon-windows8-original",xlib:"devicon-x11-plain",react:"devicon-react-original",svelte:"devicon-svelte-plain",wasm:"devicon-wasm-original"},f={sdl:"SDL",glfw:"GLFW",qt:"Qt",gtk:"GTK",ncurses:"ncurses",opengl:"OpenGL",webgl:"WebGL",vulkan:"Vulkan",directx:"DirectX",winapi:"WinAPI",xlib:"Xlib",react:"React",svelte:"Svelte",wasm:"WebAssembly"};var h=hw(),g=De(h),_=_e(g,2),m=De(_),p=_e(_,2),y=De(p),S=_e(p,2),v=De(S);Gs(v,1,l,zs,(U,L)=>{xu(U,{get tip(){return u[E(L)]},bottom:!0,children:(Y,H)=>{var F=cw();Ye(()=>ts(F,`${c[E(L)]} text-6`)),Z(Y,F)},$$slots:{default:!0}})});var w=_e(v,2);{var T=U=>{var L=We(),Y=Ae(L);Gs(Y,1,o,zs,(H,F)=>{xu(H,{get tip(){return f[E(F)]},bottom:!0,children:(V,z)=>{var oe=uw();Ye(()=>ts(oe,`${d[E(F)]} text-6`)),Z(V,oe)},$$slots:{default:!0}})}),Z(U,L)};Ke(w,U=>{o()&&U(T)})}var I=_e(S,2),b=De(I);{var x=U=>{var L=dw();Ye(()=>ei(L,"href",s())),Z(U,L)};Ke(b,U=>{s()&&U(x)})}var M=_e(b,2);{var P=U=>{var L=fw();Ye(()=>ei(L,"href",a())),Z(U,L)};Ke(M,U=>{a()&&U(P)})}Ye(()=>{ei(g,"src",r()),ei(g,"alt",t()),wn(m,t()),wn(y,n())}),Z(i,h)}const mw="/assets/fractals-BiygqQFs.jpg",gw="/assets/tesseractus-Dob3R6Wr.jpg",_w="/assets/processor-DHESff-g.jpg",vw="/assets/computer-D5_s0B4N.jpg",xw="/assets/interpolator-Dbdp7xD5.jpg",Sh=[{title:"Fractals",description:"Рендер фракталов на GPU с использованием WebGL и WebAssembly",image:mw,github:"https://github.com/Armemius/fractals",page:"https://armemius.github.io/fractals/",languages:["js","ts","rust"],libs:["react","webgl","wasm"],target:"web"},{title:"Tesseractus",description:"Рендер тессеракта на чистом WebGL",image:gw,github:"https://github.com/Armemius/tesseractus",languages:["js","ts"],libs:["react","webgl"],target:"web",page:"https://armemius.github.io/tesseractus/"},{title:"Processor Emulator",description:"Эмулятор стекового процессора с компиллятором ассемблера в машинные коды",image:_w,languages:["python"],target:"cli",github:"https://github.com/Armemius/ProcessorEmulator"},{title:"Primitive Windows Shell",description:"Примитивная оболочка для Windows с использованием WinAPI",image:vw,languages:["c"],libs:["winapi"],target:"cli",github:"https://github.com/Armemius/WindowsPrimitiveShell"},{title:"Interpolator",description:"Интерполятор функций с использованием различных методов",image:xw,languages:["js","ts","rust"],libs:["svelte","wasm"],target:"web",github:"https://armemius.github.io/FunctionalProgramming/",page:"https://armemius.github.io/FunctionalProgramming/"}];var yw=Ce("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Sw=Ce("<!> <!> <!> <!> <!> <!>",1),Ew=Ce('<p class="text-4 font-350">Ничего не найдено :(</p>'),Mw=Ce('<section class="min-h-[100vh] flex flex-col items-center p-15"><section class="center pb-10"><h1 class="text-6 md:text-7 leading-9 font-500 mb-3 text-center">Мои проекты</h1> <p class="leading-6 text-4 md:leading-7 md:text-5 font-350">Здесь представлены мои проекты, над которыми я работал в свободное время</p></section> <div class="flex flex-col md:flex-row gap-6 mb-8"><!> <!> <!></div> <div class="flex flex-wrap gap-7 justify-center"><!> <!></div></section>');function bw(i,e){Rt(e,!1);let t=$n(""),n=$n("any"),r=$n("any"),s=O(e,"element",12);ca();var a=Mw(),o=_e(De(a),2),l=De(o);DA(l,{class:"w-80",label:"Поиск по названию",get value(){return E(t)},set value(_){Pe(t,_)},$$legacy:!0});var c=_e(l,2);yh(c,{label:"Язык",get value(){return E(n)},set value(_){Pe(n,_)},children:(_,m)=>{var p=yw(),y=Ae(p);Sn(y,{value:"any",default:!0,children:(L,Y)=>{var H=zt("Любой");Z(L,H)},$$slots:{default:!0}});var S=_e(y,2);Sn(S,{value:"c",children:(L,Y)=>{var H=zt("C");Z(L,H)},$$slots:{default:!0}});var v=_e(S,2);Sn(v,{value:"cpp",children:(L,Y)=>{var H=zt("C++");Z(L,H)},$$slots:{default:!0}});var w=_e(v,2);Sn(w,{value:"rust",children:(L,Y)=>{var H=zt("Rust");Z(L,H)},$$slots:{default:!0}});var T=_e(w,2);Sn(T,{value:"asm",children:(L,Y)=>{var H=zt("Ассемблер");Z(L,H)},$$slots:{default:!0}});var I=_e(T,2);Sn(I,{value:"python",children:(L,Y)=>{var H=zt("Python");Z(L,H)},$$slots:{default:!0}});var b=_e(I,2);Sn(b,{value:"js",children:(L,Y)=>{var H=zt("JavaScript");Z(L,H)},$$slots:{default:!0}});var x=_e(b,2);Sn(x,{value:"ts",children:(L,Y)=>{var H=zt("TypeScript");Z(L,H)},$$slots:{default:!0}});var M=_e(x,2);Sn(M,{value:"java",children:(L,Y)=>{var H=zt("Java");Z(L,H)},$$slots:{default:!0}});var P=_e(M,2);Sn(P,{value:"kotlin",children:(L,Y)=>{var H=zt("Kotlin");Z(L,H)},$$slots:{default:!0}});var U=_e(P,2);Sn(U,{value:"matlab",children:(L,Y)=>{var H=zt("MATLAB");Z(L,H)},$$slots:{default:!0}}),Z(_,p)},$$slots:{default:!0},$$legacy:!0});var u=_e(c,2);yh(u,{label:"Тип",get value(){return E(r)},set value(_){Pe(r,_)},children:(_,m)=>{var p=Sw(),y=Ae(p);Sn(y,{value:"any",default:!0,children:(b,x)=>{var M=zt("Любой");Z(b,M)},$$slots:{default:!0}});var S=_e(y,2);Sn(S,{value:"lib",children:(b,x)=>{var M=zt("Библиотека");Z(b,M)},$$slots:{default:!0}});var v=_e(S,2);Sn(v,{value:"cli",children:(b,x)=>{var M=zt("Консольное приложение");Z(b,M)},$$slots:{default:!0}});var w=_e(v,2);Sn(w,{value:"web",children:(b,x)=>{var M=zt("Веб-приложение");Z(b,M)},$$slots:{default:!0}});var T=_e(w,2);Sn(T,{value:"desktop",children:(b,x)=>{var M=zt("Десктопное приложение");Z(b,M)},$$slots:{default:!0}});var I=_e(T,2);Sn(I,{value:"embedded",children:(b,x)=>{var M=zt("Встроенные системы");Z(b,M)},$$slots:{default:!0}}),Z(_,p)},$$slots:{default:!0},$$legacy:!0});var d=_e(o,2),f=De(d);Gs(f,1,()=>Sh.filter(_=>E(t)===""||_.title.toLowerCase().includes(E(t).toLowerCase())).filter(_=>E(n)==="any"||_.languages.includes(E(n))).filter(_=>E(r)==="any"||_.target===E(r)),zs,(_,m)=>{pw(_,qt(()=>E(m)))});var h=_e(f,2);{var g=_=>{var m=Ew();Z(_,m)};Ke(h,_=>{Sh.filter(m=>E(t)===""||m.title.toLowerCase().includes(E(t).toLowerCase())).filter(m=>E(n)==="any"||m.languages.includes(E(n))).filter(m=>E(r)==="any"||m.target===E(r)).length||_(g)})}xt(a,_=>s(_),()=>s()),Z(i,a),Lt()}var Tw=Ce("<main><!> <!> <!></main>");function Aw(i){let e=$n(),t=$n(),n=$n();var r=Tw(),s=De(r);bb(s,{get aboutSection(){return E(t)},get projectsSection(){return E(n)},get element(){return E(e)},set element(l){Pe(e,l)},$$legacy:!0});var a=_e(s,2);iA(a,{get element(){return E(t)},set element(l){Pe(t,l)},$$legacy:!0});var o=_e(a,2);bw(o,{get element(){return E(n)},set element(l){Pe(n,l)},$$legacy:!0}),Z(i,r)}Cg(Aw,{target:document.getElementById("app")});
