import{v as d,e as r,b as e,u as t,w as o,F as c,o as m,X as f,t as _,f as p,a,n as w,g,i as b}from"./app-4da84cef.js";import{A as y}from"./AuthenticationCard-2963c53c.js";import{_ as x}from"./AuthenticationCardLogo-b4096f80.js";import{_ as h}from"./InputError-aa2370fc.js";import{_ as k}from"./InputLabel-a46f3266.js";import{_ as v}from"./PrimaryButton-068af569.js";import{_ as V}from"./TextInput-538f17ac.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},J={__name:"ForgotPassword",props:{status:String},setup(i){const s=d({email:""}),n=()=>{s.post(route("password.email"))};return(S,l)=>(m(),r(c,null,[e(t(f),{title:"Forgot Password"}),e(y,null,{logo:o(()=>[e(x)]),default:o(()=>[F,i.status?(m(),r("div",N,_(i.status),1)):p("",!0),a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[e(k,{for:"email",value:"Email"}),e(V,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":l[0]||(l[0]=u=>t(s).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(h,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",C,[e(v,{class:w({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{J as default};
