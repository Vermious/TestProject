import{_ as d}from"./AppLayout-5ecce031.js";import{c as i,w as c,o as s,a as e,e as o,h as n,F as b,t as a}from"./app-7f5435f9.js";import"./HeaderImage-4bc44d3c.js";import"./_plugin-vue_export-helper-c27b6911.js";const p={class:"w-full mb-12 xl:mb-0 mx-auto mt-2"},x={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},m=e("div",{class:"rounded-t mb-0 px-4 py-3 border-0"},[e("div",{class:"mb-4 font-medium text-sm text-green-600 text-center"}),e("div",{class:"flex flex-wrap items-center"},[e("div",{class:"relative w-full pl-1 pr-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Buddies")]),e("div",{class:"relative w-full pl-4 pr-1 max-w-full flex-grow flex-1 text-right"})])],-1),u={class:"block w-full overflow-x-auto"},_=["v-if"],f=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Naam "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Achternaam "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Rank ")])],-1),h={class:"bg-white divide-y divide-gray-300"},g={class:"px-6 py-4"},w={class:"text-sm text-gray-900"},y={class:"px-6 py-4"},v={class:"text-sm text-gray-900"},G={class:"px-6 py-4"},k={class:"text-sm text-gray-900"},B={props:{pageData:{type:Object,required:!0}}},A=Object.assign(B,{__name:"Overview",setup(r){return(D,O)=>(s(),i(d,null,{default:c(()=>{var l;return[e("div",p,[e("div",x,[m,e("div",u,[e("table",{"v-if":((l=r.pageData.users)==null?void 0:l.length)>0,class:"items-center bg-transparent w-full border-collapse"},[f,e("tbody",h,[(s(!0),o(b,null,n(r.pageData.users.data,t=>(s(),o("tr",{key:t.id,class:"whitespace-nowrap"},[e("td",g,[e("div",w,a(t.name),1)]),e("td",y,[e("div",v,a(t.last_name),1)]),e("td",G,[e("div",k,a(t.ranking),1)])]))),128))])],8,_)])])])]}),_:1}))}});export{A as default};
