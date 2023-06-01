import{_ as b}from"./AppLayout-562e2416.js";import{j as f,y as h,o as t,e as s,a as e,F as d,h as p,c as u,n as g,f as y,w,b as v,t as i}from"./app-9a7aa142.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./HeaderImage-d568e731.js";const G={components:{Link:f},props:{links:Array}},L={key:0},$={class:"flex flex-wrap -mb-1"},B=["innerHTML"];function D(l,m,o,n,r,R){const _=h("Link");return o.links.length>3?(t(),s("div",L,[e("div",$,[(t(!0),s(d,null,p(o.links,(a,c)=>(t(),s(d,null,[a.url===null?(t(),s("div",{key:c,class:"mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded",innerHTML:a.label},null,8,B)):(t(),u(_,{key:`link-${c}`,class:g(["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded",{"bg-white":a.active}]),href:a.url,innerHTML:a.label},null,8,["class","href","innerHTML"]))],64))),256))])])):y("",!0)}const x=k(G,[["render",D]]),C={class:"w-full mb-12 xl:mb-0 mx-auto mt-2"},H={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},M=e("div",{class:"rounded-t mb-0 px-4 py-3 border-0"},[e("div",{class:"mb-4 font-medium text-sm text-green-600 text-center"}),e("div",{class:"flex flex-wrap items-center"},[e("div",{class:"relative w-full pl-1 pr-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Buddies")]),e("div",{class:"relative w-full pl-4 pr-1 max-w-full flex-grow flex-1 text-right"})])],-1),N={class:"block w-full overflow-x-auto"},T=["v-if"],j=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Naam "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Achternaam "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Rank ")])],-1),A={class:"bg-white divide-y divide-gray-300"},O={class:"px-6 py-4"},V={class:"text-sm text-gray-900"},F={class:"px-6 py-4"},q={class:"text-sm text-gray-900"},z={class:"px-6 py-4"},E={class:"text-sm text-gray-900"},P={components:{AppLayout:b,Pagination:x},props:{pageData:{type:Object,required:!0}}},Q=Object.assign(P,{__name:"Overview",setup(l){return(m,o)=>(t(),u(b,null,{default:w(()=>{var n;return[e("div",C,[e("div",H,[M,e("div",N,[e("table",{"v-if":((n=l.pageData.users)==null?void 0:n.length)>0,class:"items-center bg-transparent w-full border-collapse"},[j,e("tbody",A,[(t(!0),s(d,null,p(l.pageData.users.data,r=>(t(),s("tr",{key:r.id,class:"whitespace-nowrap"},[e("td",O,[e("div",V,i(r.name),1)]),e("td",F,[e("div",q,i(r.last_name),1)]),e("td",z,[e("div",E,i(r.ranking),1)])]))),128))])],8,T)])])]),v(x,{links:l.pageData.users.links},null,8,["links"])]}),_:1}))}});export{Q as default};
