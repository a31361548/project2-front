import{aa as W,a9 as X,x as n,ak as Y,ab as R,al as Z,c as t,ad as o,ap as ee,a0 as ae,ai as te,J as g,ah as p,ag as z,aJ as le,V as oe,ao as M,ac as se,am as re,ae as r,af as ne,aq as ue,aw as J,ar as ie,as as de,av as ce,aL as me}from"./index-2e906d0c.js";import{c as pe,a as I,e as ve,V as ge}from"./index.esm-de8aadb6.js";import{u as fe,a as B}from"./vee-validate.esm-018bef8b.js";import{V as Ve}from"./VContainer-451776cb.js";import{V as be}from"./VRow-ad76bf31.js";import{V as T}from"./VCol-dc2434c8.js";import{V as ye}from"./VDivider-bdd82a0d.js";import{V as ke}from"./VDataTableServer-947aec2b.js";import{V as we,a as xe}from"./VTextarea-89071b05.js";import{a as Ce}from"./VDataTable-8815a807.js";import"./VList-5a36ea62.js";import"./VMenu-d82125ac.js";const Ae=ce("h1",{class:"text-center"},"文章管理",-1),qe={__name:"ArticleView",setup(Be){const K=W(),{apiAuth:f}=te(),v=X(),_=n(null),V=n(!1),i=n(""),$=s=>{s?(i.value=s._id,b.value.value=s.title,y.value.value=s.content,k.value.value=s.type,w.value.value=s.post):i.value="",V.value=!0},L=()=>{V.value=!1,j(),_.value.deleteFileRecord()},E=async s=>{var a,u;try{await f.delete("/articles/"+s._id),v({text:"刪除成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),c()}catch(e){console.log(e);const l=((u=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:u.message)||"發生錯誤，請稍後再試";v({text:l,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},q=["經典調酒","超商酒單"],H=pe({title:I().required("標題為必填"),content:I().required("內文為必填"),type:I().required("分類為必填").test("isType","商品分類錯誤",s=>q.includes(s)),post:ve()}),{handleSubmit:O,isSubmitting:S,resetForm:j}=fe({validationSchema:H,initialValues:{title:"",content:"",type:"",post:!1}}),b=B("title"),y=B("content"),k=B("type"),w=B("post"),d=n([]),N=n([]),G=O(async s=>{var a,u,e;if(!((a=d.value[0])!=null&&a.error)&&!(i.value===""&&d.value.length===0))try{const l=new FormData;for(const m in s)l.append(m,s[m]);d.value.length>0&&l.append("image",d.value[0].file),i.value===""?(console.log("新增"),await f.post("/articles",l)):await f.patch("/articles/"+i.value,l),v({text:i.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),L(),D()}catch(l){console.log(l);const m=((e=(u=l==null?void 0:l.response)==null?void 0:u.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";v({text:m,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),h=n(10),x=n([{key:"createdAt",order:"desc"}]),C=n(1),P=n([]),Q=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"標題",align:"center",sortable:!0,key:"title"},{title:"分類",align:"center",sortable:!0,key:"type"},{title:"新增時間",align:"center",sortable:!0,key:"createdAt"},{title:"貼文",align:"center",sortable:!0,key:"post"},{title:"編輯",align:"center",sortable:!1,key:"edit"},{title:"刪除",align:"center",sortable:!1,key:"delete"}],U=n(!0),F=n(0),A=n(""),c=async()=>{var s,a,u,e;U.value=!0;try{const{data:l}=await f.get("/articles",{params:{page:C.value,itemsPerPage:h.value,sortBy:((s=x.value[0])==null?void 0:s.key)||"createdAt",sortOrder:((a=x.value[0])==null?void 0:a.order)==="asc"?1:-1,search:A.value}});P.value.splice(0,P.value.length,...l.result.data),F.value=l.result.total,console.log("嗨"),console.log(F),console.log(l.result.data)}catch(l){console.log(l);const m=((e=(u=l==null?void 0:l.response)==null?void 0:u.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";v({text:m,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}U.value=!1};c();const D=()=>{C.value=1,c()};return(s,a)=>{const u=Y("VueFileAgent");return R(),Z(ae,null,[t(Ve,null,{default:o(()=>[t(be,null,{default:o(()=>[t(T,{cols:"12"},{default:o(()=>[Ae]),_:1}),t(ye),t(T,{cols:"12"},{default:o(()=>[t(g,{color:"green",onClick:a[0]||(a[0]=e=>$())},{default:o(()=>[p(" 新增文章 ")]),_:1})]),_:1}),t(T,{cols:"12"},{default:o(()=>[t(ke,{"items-per-page":h.value,"onUpdate:itemsPerPage":[a[2]||(a[2]=e=>h.value=e),c],"sort-by":x.value,"onUpdate:sortBy":[a[3]||(a[3]=e=>x.value=e),c],page:C.value,"onUpdate:page":[a[4]||(a[4]=e=>C.value=e),c],items:P.value,headers:Q,loading:U.value,"items-length":F.value,search:A.value,hover:""},{top:o(()=>[t(z,{label:"搜尋","append-icon":"mdi-magnify",modelValue:A.value,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e),"onClick:append":D,onKeydown:le(D,["enter"])},null,8,["modelValue"])]),"item.image":o(({item:e})=>[t(oe,{src:e.image},null,8,["src"])]),"item.createdAt":o(({item:e})=>[p(M(new Date(e.createdAt).toLocaleString()),1)]),"item.post":o(({item:e})=>[e.post?(R(),se(me,{key:0,icon:"mdi-check"})):re("",!0)]),"item.edit":o(({item:e})=>[t(g,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:l=>$(e)},null,8,["onClick"])]),"item.delete":o(({item:e})=>[t(g,{icon:"mdi-delete",variant:"text",color:"red",onClick:l=>E(e)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(ee,{modelValue:V.value,"onUpdate:modelValue":a[11]||(a[11]=e=>V.value=e),persistent:"",width:"500px"},{default:o(()=>[t(ge,{disabled:r(S),onSubmit:ne(r(G),["prevent"])},{default:o(()=>[t(ue,null,{default:o(()=>[t(J,null,{default:o(()=>[p(M("新增文章"))]),_:1}),t(ie,null,{default:o(()=>[t(J,null,{default:o(()=>[p(M(r(K).account),1)]),_:1}),t(z,{label:"標題",modelValue:r(b).value.value,"onUpdate:modelValue":a[5]||(a[5]=e=>r(b).value.value=e),"error-messages":r(b).errorMessage.value},null,8,["modelValue","error-messages"]),t(we,{label:"內文",modelValue:r(y).value.value,"onUpdate:modelValue":a[6]||(a[6]=e=>r(y).value.value=e),"error-messages":r(y).errorMessage.value},null,8,["modelValue","error-messages"]),t(Ce,{label:"分類",items:q,modelValue:r(k).value.value,"onUpdate:modelValue":a[7]||(a[7]=e=>r(k).value.value=e),"error-messages":r(k).errorMessage.value},null,8,["modelValue","error-messages"]),t(xe,{label:"貼文",modelValue:r(w).value.value,"onUpdate:modelValue":a[8]||(a[8]=e=>r(w).value.value=e),"error-messages":r(w).errorMessage.value},null,8,["modelValue","error-messages"]),t(u,{modelValue:d.value,"onUpdate:modelValue":a[9]||(a[9]=e=>d.value=e),"raw-model-value":N.value,"onUpdate:rawModelValue":a[10]||(a[10]=e=>N.value=e),accept:"image/*",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:_},null,8,["modelValue","raw-model-value"])]),_:1}),t(de,null,{default:o(()=>[t(g,{color:"blue",disabled:r(S),onClick:L},{default:o(()=>[p("取消")]),_:1},8,["disabled"]),t(g,{color:"green",type:"submit",loading:r(S)},{default:o(()=>[p("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{qe as default};
