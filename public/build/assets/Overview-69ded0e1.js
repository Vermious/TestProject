import{_ as n}from"./AppLayout-4f3c810a.js";import{e as t,a as e,t as r,f as c,b,w as p,F as d,o as s,h as u}from"./app-e1668e1d.js";import"./HeaderImage-1a1f4192.js";import"./_plugin-vue_export-helper-c27b6911.js";const _={key:0,class:"bg-lime-100 border border-lime-400 text-lime-700 px-4 py-3 rounded relative",role:"alert"},x=e("strong",{class:"font-bold"},"Success ",-1),m={class:"block sm:inline"},f={class:"w-full mb-12 xl:mb-0 mx-auto mt-2"},h={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},g={class:"rounded-t mb-0 px-4 py-3 border-0"},w=e("div",{class:"mb-4 font-medium text-sm text-green-600 text-center"},null,-1),y={class:"flex flex-wrap items-center"},v=e("div",{class:"relative w-full pl-1 pr-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Organization overview")],-1),G={class:"relative w-full pl-4 pr-1 max-w-full flex-grow flex-1 text-right"},k=["href"],O={class:"block w-full overflow-x-auto"},z=["v-if"],D=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Organization name "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Padel court "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Actions ")])],-1),B={class:"bg-white divide-y divide-gray-300"},N={class:"px-6 py-4"},V={class:"text-sm text-gray-900"},$={class:"px-6 py-4"},j={class:"text-sm text-gray-900"},A=e("td",{class:"px-6 py-4 text-center"},null,-1),C={props:{pageData:{type:Object,required:!0}}},P=Object.assign(C,{__name:"Overview",setup(l){return(a,F)=>(s(),t(d,null,[a.$page.props.flash.message?(s(),t("div",_,[x,e("span",m,r(a.$page.props.flash.message),1)])):c("",!0),b(n,null,{default:p(()=>{var i;return[e("div",f,[e("div",h,[e("div",g,[w,e("div",y,[v,e("div",G,[e("a",{href:a.route("organization.create"),class:"bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"},"Add Organization",8,k)])])]),e("div",O,[e("table",{"v-if":((i=l.pageData.organization)==null?void 0:i.length)>0,class:"items-center bg-transparent w-full border-collapse"},[D,e("tbody",B,[(s(!0),t(d,null,u(l.pageData.organizations,o=>(s(),t("tr",{key:o.id,class:"whitespace-nowrap"},[e("td",N,[e("div",V,r(o.organization_name),1)]),e("td",$,[e("div",j,r(o.padel_court),1)]),A]))),128))])],8,z)])])])]}),_:1})],64))}});export{P as default};