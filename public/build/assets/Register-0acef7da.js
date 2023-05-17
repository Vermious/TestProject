import{v as p,e as f,b as e,u as o,w as d,F as _,o as c,X as w,a as l,g as u,f as V,j as v,n as b,i as h}from"./app-e9cefe16.js";import{A as k}from"./AuthenticationCard-2f628644.js";import{_ as y}from"./AuthenticationCardLogo-54c52bef.js";import{_ as x}from"./Checkbox-0443fb60.js";import{_ as m,a as r}from"./TextInput-1b0dadb9.js";import{_ as n}from"./InputLabel-49c6d44f.js";import{_ as q}from"./PrimaryButton-35a6ead9.js";import"./_plugin-vue_export-helper-c27b6911.js";const U=["onSubmit"],$={class:"mt-4"},P={class:"mt-4"},A={class:"mt-4"},C={class:"mt-4"},F={class:"mt-4"},N={class:"mt-4"},R={class:"mt-4"},j={key:0,class:"mt-4"},B={class:"flex items-center"},S={class:"ml-2"},T=["href"],E=["href"],z={class:"flex items-center justify-end mt-4"},O={__name:"Register",setup(G){const s=p({name:"",last_name:"",email:"",ranking:0,date_of_birth:"",gender:"",password:"",password_confirmation:"",terms:!1}),g=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(i,a)=>(c(),f(_,null,[e(o(w),{title:"Register"}),e(k,null,{logo:d(()=>[e(y)]),default:d(()=>[l("form",{onSubmit:h(g,["prevent"])},[l("div",null,[e(n,{for:"name",value:"Voornaam"}),e(m,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),l("div",$,[e(n,{for:"last_name",value:"Achternaam"}),e(m,{id:"last_name",modelValue:o(s).last_name,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).last_name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"last_name"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.last_name},null,8,["message"])]),l("div",P,[e(n,{for:"email",value:"Email"}),e(m,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),l("div",A,[e(n,{for:"ranking",value:"Ranking"}),e(m,{id:"ranking",modelValue:o(s).ranking,"onUpdate:modelValue":a[3]||(a[3]=t=>o(s).ranking=t),type:"number",step:"0.0001",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"ranking"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.ranking},null,8,["message"])]),l("div",C,[e(n,{for:"date_of_birth",value:"geboorte datum"}),e(m,{id:"date_of_birth",modelValue:o(s).date_of_birth,"onUpdate:modelValue":a[4]||(a[4]=t=>o(s).date_of_birth=t),type:"date",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"date_of_birth"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.date_of_birth},null,8,["message"])]),l("div",F,[e(n,{for:"gender",value:"Gender"}),e(m,{id:"gender",modelValue:o(s).gender,"onUpdate:modelValue":a[5]||(a[5]=t=>o(s).gender=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"gender"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.gender},null,8,["message"])]),l("div",N,[e(n,{for:"password",value:"Password"}),e(m,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[6]||(a[6]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),l("div",R,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[7]||(a[7]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(r,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),i.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",j,[e(n,{for:"terms"},{default:d(()=>[l("div",B,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":a[8]||(a[8]=t=>o(s).terms=t),name:"terms",required:""},null,8,["checked"]),l("div",S,[u(" I agree to the "),l("a",{target:"_blank",href:i.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,T),u(" and "),l("a",{target:"_blank",href:i.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,E)])]),e(r,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):V("",!0),l("div",z,[e(o(v),{href:i.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[u(" Already registered? ")]),_:1},8,["href"]),e(q,{class:b(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:d(()=>[u(" Register ")]),_:1},8,["class","disabled"])])],40,U)]),_:1})],64))}};export{O as default};