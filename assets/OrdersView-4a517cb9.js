import{a9 as f,x as V,A as h,ab as l,ac as k,ad as t,ai as y,c as s,ah as b,ao as c,av as d,al as i,an as w,a0 as x}from"./index-2e906d0c.js";import{V as A}from"./VContainer-451776cb.js";import{V as u}from"./VCol-dc2434c8.js";import{V as g}from"./VDataTable-8815a807.js";import{V as B}from"./VRow-ad76bf31.js";import"./VList-5a36ea62.js";import"./VDivider-bdd82a0d.js";import"./VMenu-d82125ac.js";const v=d("h1",null,"訂單",-1),M={__name:"OrdersView",setup(C){const{apiAuth:m}=y(),p=f(),n=V([]),_=[{title:"訂單編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt"},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((r,e)=>r+e.quantity*e.product.price,0)}];return h(async()=>{var a,r;try{const{data:e}=await m.get("/orders/all");n.value.push(...e.result)}catch(e){const o=((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";p({text:o,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,r)=>(l(),k(A,null,{default:t(()=>[s(B,null,{default:t(()=>[s(u,{cols:"12"},{default:t(()=>[v]),_:1}),s(u,{cols:"12"},{default:t(()=>[s(g,{items:n.value,headers:_},{"item.createdAt":t(({item:e})=>[b(c(new Date(e.createdAt).toLocaleString()),1)]),"item.cart":t(({item:e})=>[d("ul",null,[(l(!0),i(x,null,w(e.cart,o=>(l(),i("li",{key:o._id},c(o.product.name)+" * "+c(o.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{M as default};
