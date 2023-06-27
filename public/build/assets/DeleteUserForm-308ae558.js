import{d as i,v as _,c as y,w as e,o as w,g as s,a as c,b as t,u as a,E as h,n as v}from"./app-4da84cef.js";import{a as g,b as k}from"./DialogModal-646b7eef.js";import{_ as m}from"./DangerButton-afe63c9c.js";import{_ as x}from"./InputError-aa2370fc.js";import{_ as b}from"./SecondaryButton-f474304d.js";import{_ as C}from"./TextInput-538f17ac.js";import"./SectionTitle-53f62d38.js";import"./_plugin-vue_export-helper-c27b6911.js";const D=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),V={class:"mt-5"},$={class:"mt-4"},S={__name:"DeleteUserForm",setup(A){const r=i(!1),l=i(null),o=_({password:""}),p=()=>{r.value=!0,setTimeout(()=>l.value.focus(),250)},u=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>l.value.focus(),onFinish:()=>o.reset()})},n=()=>{r.value=!1,o.reset()};return(U,d)=>(w(),y(g,null,{title:e(()=>[s(" Delete Account ")]),description:e(()=>[s(" Permanently delete your account. ")]),content:e(()=>[D,c("div",V,[t(m,{onClick:p},{default:e(()=>[s(" Delete Account ")]),_:1})]),t(k,{show:r.value,onClose:n},{title:e(()=>[s(" Delete Account ")]),content:e(()=>[s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),c("div",$,[t(C,{ref_key:"passwordInput",ref:l,modelValue:a(o).password,"onUpdate:modelValue":d[0]||(d[0]=f=>a(o).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:h(u,["enter"])},null,8,["modelValue","onKeyup"]),t(x,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(b,{onClick:n},{default:e(()=>[s(" Cancel ")]),_:1}),t(m,{class:v(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:u},{default:e(()=>[s(" Delete Account ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{S as default};
