import{v as j,d as h,c as P,w as r,o as v,g as i,e as S,a,b as o,k as g,D as b,I as B,i as k,f as V,u as s,j as A,n as E,O as D}from"./app-bb7adaca.js";import{_ as F}from"./ActionMessage-2051ca53.js";import{_ as O}from"./FormSection-ca0e0538.js";import{a as u,_}from"./TextInput-3484f506.js";import{_ as c}from"./InputLabel-b043a2e4.js";import{_ as R}from"./PrimaryButton-34ed4d95.js";import{_ as C}from"./SecondaryButton-b25e352f.js";import"./SectionTitle-4e72692a.js";import"./_plugin-vue_export-helper-c27b6911.js";const z={key:0,class:"col-span-6 sm:col-span-4"},G={class:"mt-2"},L=["src","alt"],T={class:"mt-2"},M={class:"col-span-6 sm:col-span-4"},Y={class:"col-span-6 sm:col-span-4"},q={class:"col-span-6 sm:col-span-4"},H={key:0},J={class:"text-sm mt-2"},K={class:"mt-2 font-medium text-sm text-green-600"},Q={class:"col-span-6 sm:col-span-4"},W={class:"col-span-6 sm:col-span-4"},re={__name:"UpdateProfileInformationForm",props:{user:Object},setup(d){const f=d,e=j({_method:"PUT",name:f.user.name,last_name:f.user.last_name,email:f.user.email,gender:f.user.gender,date_of_birth:f.user.date_of_birth,photo:null}),y=h(null),p=h(null),m=h(null),x=()=>{m.value&&(e.photo=m.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>w()})},U=()=>{y.value=!0},$=()=>{m.value.click()},I=()=>{const n=m.value.files[0];if(!n)return;const t=new FileReader;t.onload=l=>{p.value=l.target.result},t.readAsDataURL(n)},N=()=>{D.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{p.value=null,w()}})},w=()=>{var n;(n=m.value)!=null&&n.value&&(m.value.value=null)};return(n,t)=>(v(),P(O,{onSubmitted:x},{title:r(()=>[i(" Profile Information ")]),description:r(()=>[i(" Update your account's profile information and email address. ")]),form:r(()=>[n.$page.props.jetstream.managesProfilePhotos?(v(),S("div",z,[a("input",{ref_key:"photoInput",ref:m,type:"file",class:"hidden",onChange:I},null,544),o(c,{for:"photo",value:"Photo"}),g(a("div",G,[a("img",{src:d.user.profile_photo_url,alt:d.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,L)],512),[[b,!p.value]]),g(a("div",T,[a("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:B("background-image: url('"+p.value+"');")},null,4)],512),[[b,p.value]]),o(C,{class:"mt-2 mr-2",type:"button",onClick:k($,["prevent"])},{default:r(()=>[i(" Select A New Photo ")]),_:1},8,["onClick"]),d.user.profile_photo_path?(v(),P(C,{key:0,type:"button",class:"mt-2",onClick:k(N,["prevent"])},{default:r(()=>[i(" Remove Photo ")]),_:1},8,["onClick"])):V("",!0),o(u,{message:s(e).errors.photo,class:"mt-2"},null,8,["message"])])):V("",!0),a("div",M,[o(c,{for:"name",value:"Voornaam"}),o(_,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":t[0]||(t[0]=l=>s(e).name=l),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),o(u,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),a("div",Y,[o(c,{for:"last_name",value:"Achternaam"}),o(_,{id:"last_name",modelValue:s(e).last_name,"onUpdate:modelValue":t[1]||(t[1]=l=>s(e).last_name=l),type:"text",class:"mt-1 block w-full",autocomplete:"last_name"},null,8,["modelValue"]),o(u,{message:s(e).errors.last_name,class:"mt-2"},null,8,["message"])]),a("div",q,[o(c,{for:"email",value:"Email"}),o(_,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":t[2]||(t[2]=l=>s(e).email=l),type:"email",class:"mt-1 block w-full",autocomplete:"username"},null,8,["modelValue"]),o(u,{message:s(e).errors.email,class:"mt-2"},null,8,["message"]),n.$page.props.jetstream.hasEmailVerification&&d.user.email_verified_at===null?(v(),S("div",H,[a("p",J,[i(" Your email address is unverified. "),o(s(A),{href:n.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:k(U,["prevent"])},{default:r(()=>[i(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),g(a("div",K," A new verification link has been sent to your email address. ",512),[[b,y.value]])])):V("",!0)]),a("div",Q,[o(c,{for:"date_of_birth",value:"Geboorte datum"}),o(_,{id:"date_of_birth",modelValue:s(e).date_of_birth,"onUpdate:modelValue":t[3]||(t[3]=l=>s(e).date_of_birth=l),type:"date",class:"mt-1 block w-full",autocomplete:"date_of_birth"},null,8,["modelValue"]),o(u,{message:s(e).errors.date_of_birth,class:"mt-2"},null,8,["message"])]),a("div",W,[o(c,{for:"gender",value:"Gender"}),o(_,{id:"gender",modelValue:s(e).gender,"onUpdate:modelValue":t[4]||(t[4]=l=>s(e).gender=l),type:"text",class:"mt-1 block w-full",autocomplete:"gender"},null,8,["modelValue"]),o(u,{message:s(e).errors.gender,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[o(F,{on:s(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[i(" Saved. ")]),_:1},8,["on"]),o(R,{class:E({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[i(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{re as default};