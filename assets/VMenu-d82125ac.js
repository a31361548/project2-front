import{p as X,b5 as K,m as ie,aO as re,a as ce,bc as ve,g as J,n as fe,aj as de,M as me,s as k,o as x,Z as L,bo as pe,z as Q,u as Z,c as S,bI as $,aL as N,bJ as A,y as ye,_ as ge,bK as he,bt as Se,D as be,aQ as xe,aW as we,x as ze,S as Pe,bL as U,N as Ve,G as W,aC as Y,r as ke,a1 as Ee,bM as Te,bN as Ce,bO as j,Y as Me}from"./index-2e906d0c.js";function q(l){const i=Math.abs(l);return Math.sign(l)*(i/((1/.501-2)*(1-i)+1))}function B(l){let{selectedElement:y,containerSize:i,contentSize:o,isRtl:P,currentScrollOffset:f,isHorizontal:u}=l;const a=u?y.clientWidth:y.clientHeight,e=u?y.offsetLeft:y.offsetTop,r=P&&u?o-e-a:e,v=i+f,c=a+r,z=a*.4;return r<=f?f=Math.max(r-z,0):v<=c&&(f=Math.min(f-(v-c-z),o-i)),f}function Oe(l){let{selectedElement:y,containerSize:i,contentSize:o,isRtl:P,isHorizontal:f}=l;const u=f?y.clientWidth:y.clientHeight,a=f?y.offsetLeft:y.offsetTop,e=P&&f?o-a-u/2-i/2:a+u/2-i/2;return Math.min(o-i,Math.max(0,e))}const Re=Symbol.for("vuetify:v-slide-group"),Ae=X({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Re},nextIcon:{type:K,default:"$next"},prevIcon:{type:K,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...ie(),...re(),...ce(),...ve({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Fe=J()({name:"VSlideGroup",props:Ae(),emits:{"update:modelValue":l=>!0},setup(l,y){let{slots:i}=y;const{isRtl:o}=fe(),{displayClasses:P,mobile:f}=de(l),u=me(l,l.symbol),a=k(!1),e=k(0),r=k(0),v=k(0),c=x(()=>l.direction==="horizontal"),{resizeRef:z,contentRect:E}=L(),{resizeRef:m,contentRect:n}=L(),d=x(()=>u.selected.value.length?u.items.value.findIndex(t=>t.id===u.selected.value[0]):-1),g=x(()=>u.selected.value.length?u.items.value.findIndex(t=>t.id===u.selected.value[u.selected.value.length-1]):-1);if(pe){let t=-1;Q(()=>[u.selected.value,E.value,n.value,c.value],()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{if(E.value&&n.value){const s=c.value?"width":"height";r.value=E.value[s],v.value=n.value[s],a.value=r.value+1<v.value}if(d.value>=0&&m.value){const s=m.value.children[g.value];d.value===0||!a.value?e.value=0:l.centerActive?e.value=Oe({selectedElement:s,containerSize:r.value,contentSize:v.value,isRtl:o.value,isHorizontal:c.value}):a.value&&(e.value=B({selectedElement:s,containerSize:r.value,contentSize:v.value,isRtl:o.value,currentScrollOffset:e.value,isHorizontal:c.value}))}})})}const p=k(!1);let w=0,V=0;function I(t){const s=c.value?"clientX":"clientY";V=(o.value&&c.value?-1:1)*e.value,w=t.touches[0][s],p.value=!0}function ee(t){if(!a.value)return;const s=c.value?"clientX":"clientY",h=o.value&&c.value?-1:1;e.value=h*(V+w-t.touches[0][s])}function te(t){const s=v.value-r.value;e.value<0||!a.value?e.value=0:e.value>=s&&(e.value=s),p.value=!1}function le(){z.value&&(z.value[c.value?"scrollLeft":"scrollTop"]=0)}const C=k(!1);function ae(t){if(C.value=!0,!(!a.value||!m.value)){for(const s of t.composedPath())for(const h of m.value.children)if(h===s){e.value=B({selectedElement:h,containerSize:r.value,contentSize:v.value,isRtl:o.value,currentScrollOffset:e.value,isHorizontal:c.value});return}}}function ne(t){C.value=!1}function se(t){var s;!C.value&&!(t.relatedTarget&&((s=m.value)!=null&&s.contains(t.relatedTarget)))&&b()}function oe(t){m.value&&(c.value?t.key==="ArrowRight"?b(o.value?"prev":"next"):t.key==="ArrowLeft"&&b(o.value?"next":"prev"):t.key==="ArrowDown"?b("next"):t.key==="ArrowUp"&&b("prev"),t.key==="Home"?b("first"):t.key==="End"&&b("last"))}function b(t){var s,h,_,G,H;if(m.value)if(!t)(s=A(m.value)[0])==null||s.focus();else if(t==="next"){const T=(h=m.value.querySelector(":focus"))==null?void 0:h.nextElementSibling;T?T.focus():b("first")}else if(t==="prev"){const T=(_=m.value.querySelector(":focus"))==null?void 0:_.previousElementSibling;T?T.focus():b("last")}else t==="first"?(G=m.value.firstElementChild)==null||G.focus():t==="last"&&((H=m.value.lastElementChild)==null||H.focus())}function M(t){const s=e.value+(t==="prev"?-1:1)*r.value;e.value=ye(s,0,v.value-r.value)}const ue=x(()=>{let t=e.value>v.value-r.value?-(v.value-r.value)+q(v.value-r.value-e.value):-e.value;e.value<=0&&(t=q(-e.value));const s=o.value&&c.value?-1:1;return{transform:`translate${c.value?"X":"Y"}(${s*t}px)`,transition:p.value?"none":"",willChange:p.value?"transform":""}}),O=x(()=>({next:u.next,prev:u.prev,select:u.select,isSelected:u.isSelected})),R=x(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!f.value;case!0:return a.value||Math.abs(e.value)>0;case"mobile":return f.value||a.value||Math.abs(e.value)>0;default:return!f.value&&(a.value||Math.abs(e.value)>0)}}),D=x(()=>Math.abs(e.value)>0),F=x(()=>v.value>Math.abs(e.value)+r.value);return Z(()=>S(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!c.value,"v-slide-group--has-affixes":R.value,"v-slide-group--is-overflowing":a.value},P.value,l.class],style:l.style,tabindex:C.value||u.selected.value.length?-1:0,onFocus:se},{default:()=>{var t,s,h;return[R.value&&S("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!D.value}],onClick:()=>D.value&&M("prev")},[((t=i.prev)==null?void 0:t.call(i,O.value))??S($,null,{default:()=>[S(N,{icon:o.value?l.nextIcon:l.prevIcon},null)]})]),S("div",{key:"container",ref:z,class:"v-slide-group__container",onScroll:le},[S("div",{ref:m,class:"v-slide-group__content",style:ue.value,onTouchstartPassive:I,onTouchmovePassive:ee,onTouchendPassive:te,onFocusin:ae,onFocusout:ne,onKeydown:oe},[(s=i.default)==null?void 0:s.call(i,O.value)])]),R.value&&S("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!F.value}],onClick:()=>F.value&&M("next")},[((h=i.next)==null?void 0:h.call(i,O.value))??S($,null,{default:()=>[S(N,{icon:o.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:u.selected,scrollTo:M,scrollOffset:e,focus:b}}});const Ie=X({id:String,...ge(he({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Se}}),["absolute"])},"VMenu"),_e=J()({name:"VMenu",props:Ie(),emits:{"update:modelValue":l=>!0},setup(l,y){let{slots:i}=y;const o=be(l,"modelValue"),{scopeId:P}=xe(),f=we(),u=x(()=>l.id||`v-menu-${f}`),a=ze(),e=Pe(U,null),r=k(0);Ve(U,{register(){++r.value},unregister(){--r.value},closeParents(n){setTimeout(()=>{!r.value&&(n==null||n&&!Te(n,a.value.contentEl))&&(o.value=!1,e==null||e.closeParents())},40)}});async function v(n){var p,w,V;const d=n.relatedTarget,g=n.target;await Me(),o.value&&d!==g&&((p=a.value)!=null&&p.contentEl)&&((w=a.value)!=null&&w.globalTop)&&![document,a.value.contentEl].includes(g)&&!a.value.contentEl.contains(g)&&((V=A(a.value.contentEl)[0])==null||V.focus())}Q(o,n=>{n?(e==null||e.register(),document.addEventListener("focusin",v,{once:!0})):(e==null||e.unregister(),document.removeEventListener("focusin",v))});function c(n){e==null||e.closeParents(n)}function z(n){var d,g,p;l.disabled||n.key==="Tab"&&(Ce(A((d=a.value)==null?void 0:d.contentEl,!1),n.shiftKey?"prev":"next",V=>V.tabIndex>=0)||(o.value=!1,(p=(g=a.value)==null?void 0:g.activatorEl)==null||p.focus()))}function E(n){var g;if(l.disabled)return;const d=(g=a.value)==null?void 0:g.contentEl;d&&o.value?n.key==="ArrowDown"?(n.preventDefault(),j(d,"next")):n.key==="ArrowUp"&&(n.preventDefault(),j(d,"prev")):["ArrowDown","ArrowUp"].includes(n.key)&&(o.value=!0,n.preventDefault(),setTimeout(()=>setTimeout(()=>E(n))))}const m=x(()=>W({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":u.value,onKeydown:E},l.activatorProps));return Z(()=>{const n=Y.filterProps(l);return S(Y,W({ref:a,id:u.value,class:["v-menu",l.class],style:l.style},n,{modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,absolute:!0,activatorProps:m.value,"onClick:outside":c,onKeydown:z},P),{activator:i.activator,default:function(){for(var d=arguments.length,g=new Array(d),p=0;p<d;p++)g[p]=arguments[p];return S(ke,{root:"VMenu"},{default:()=>{var w;return[(w=i.default)==null?void 0:w.call(i,...g)]}})}})}),Ee({id:u,ΨopenChildren:r},a)}});export{Fe as V,_e as a,Ae as m};