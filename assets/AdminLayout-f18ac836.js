import{aa as p,o as d,ak as _,ab as n,al as r,c as t,ad as a,a0 as s,ae as i,an as f}from"./index-2e906d0c.js";import{V as x,a as V}from"./VNavigationDrawer-9b98cb0d.js";import{b as c,V as l}from"./VList-5a36ea62.js";import"./VDivider-bdd82a0d.js";const k={__name:"AdminLayout",setup(v){const o=p(),u=[{to:"/admin/poster",text:"貼文管理",icon:"mdi-note"},{to:"/admin/products",text:"商品管理",icon:"mdi-list-box"},{to:"/admin/orders",text:"訂單管理",icon:"mdi-shopping"},{to:"/admin/users",text:"會員管理",icon:"mdi-account"},{to:"/",text:"回首頁",icon:"mdi-home"}];return d(()=>`https://source.boringavatars.com/beam/120/${o.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`),(C,b)=>{const m=_("RouterView");return n(),r(s,null,[t(x,{permanent:""},{default:a(()=>[t(c,null,{default:a(()=>[t(l,{"prepend-avatar":i(o).avatar,title:i(o).account},null,8,["prepend-avatar","title"])]),_:1}),t(c,null,{default:a(()=>[(n(),r(s,null,f(u,e=>t(l,{key:e.to,to:e.to,title:e.text,"prepend-icon":e.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),t(V,null,{default:a(()=>[t(m)]),_:1})],64)}}};export{k as default};