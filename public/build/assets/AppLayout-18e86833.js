import{d as S,k as _,J as T,A as N,o,e as n,u as i,n as p,a as e,f as g,t as w,i as k,B as D,C as O,r as f,p as C,l as B,D as L,b as d,w as r,T as V,c as b,j,X as E,g as l,F as $,h as A,z as I,O as P}from"./app-e9cefe16.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const R={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},G={class:"flex items-center justify-between flex-wrap"},J={class:"w-0 flex-1 flex items-center min-w-0"},U={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),q=[X],K={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),W=[Q],Y={class:"ml-3 font-medium text-sm text-white truncate"},Z={class:"shrink-0 sm:ml-3"},ee=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),te=[ee],se={__name:"Banner",setup(c){const a=S(!0),s=_(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=_(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.banner)||""});return N(h,async()=>{a.value=!0}),(t,y)=>(o(),n("div",null,[a.value&&i(h)?(o(),n("div",{key:0,class:p({"bg-indigo-500":i(s)=="success","bg-red-700":i(s)=="danger"})},[e("div",R,[e("div",G,[e("div",J,[e("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":i(s)=="success","bg-red-600":i(s)=="danger"}])},[i(s)=="success"?(o(),n("svg",U,q)):g("",!0),i(s)=="danger"?(o(),n("svg",K,W)):g("",!0)],2),e("p",Y,w(i(h)),1)]),e("div",Z,[e("button",{type:"button",class:p(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(s)=="success","hover:bg-red-600 focus:bg-red-600":i(s)=="danger"}]),"aria-label":"Dismiss",onClick:y[0]||(y[0]=k(u=>a.value=!1,["prevent"]))},te,2)])])])],2)):g("",!0)]))}},oe={class:"relative"},F={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(c){const a=c;let s=S(!1);const h=u=>{s.value&&u.key==="Escape"&&(s.value=!1)};D(()=>document.addEventListener("keydown",h)),O(()=>document.removeEventListener("keydown",h));const t=_(()=>({48:"w-48"})[a.width.toString()]),y=_(()=>a.align==="left"?"origin-top-left left-0":a.align==="right"?"origin-top-right right-0":"origin-top");return(u,v)=>(o(),n("div",oe,[e("div",{onClick:v[0]||(v[0]=M=>C(s)?s.value=!i(s):s=!i(s))},[f(u.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:v[1]||(v[1]=M=>C(s)?s.value=!1:s=!1)},null,512),[[L,i(s)]]),d(V,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[B(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[i(t),i(y)]]),style:{display:"none"},onClick:v[2]||(v[2]=M=>C(s)?s.value=!1:s=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",c.contentClasses])},[f(u.$slots,"content")],2)],2),[[L,i(s)]])]),_:3})]))}},re={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},ae=["href"],x={__name:"DropdownLink",props:{href:String,as:String},setup(c){return(a,s)=>(o(),n("div",null,[c.as=="button"?(o(),n("button",re,[f(a.$slots,"default")])):c.as=="a"?(o(),n("a",{key:1,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[f(a.$slots,"default")],8,ae)):(o(),b(i(j),{key:2,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:r(()=>[f(a.$slots,"default")]),_:3},8,["href"]))]))}},z={__name:"NavLink",props:{href:String,active:Boolean},setup(c){const a=c,s=_(()=>a.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(h,t)=>(o(),b(i(j),{href:c.href,class:p(i(s))},{default:r(()=>[f(h.$slots,"default")]),_:3},8,["href","class"]))}},m={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(c){const a=c,s=_(()=>a.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(h,t)=>(o(),n("div",null,[c.as=="button"?(o(),n("button",{key:0,class:p([i(s),"w-full text-left"])},[f(h.$slots,"default")],2)):(o(),b(i(j),{key:1,href:c.href,class:p(i(s))},{default:r(()=>[f(h.$slots,"default")]),_:3},8,["href","class"]))]))}},ne={},ie={class:"absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center",src:"http://localhost:82/assets/images/groupPadel.jpeg",alt:""};function le(c,a){return o(),n("img",ie)}const de=H(ne,[["render",le]]),ce={class:"min-h-screen bg-gray-100"},ue={class:"bg-white border-b border-gray-100"},he={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ge={class:"flex justify-between h-16"},pe={class:"flex"},me={class:"shrink-0 flex items-center"},fe=e("img",{class:"block h-12 w-auto",src:"http://localhost:82/assets/images/logo.jpeg"},null,-1),ve={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"ml-3 relative"},we={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},_e=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),ke={class:"w-60"},$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),je=e("div",{class:"border-t border-gray-200"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ze=["onSubmit"],Se={class:"flex items-center"},Me={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Be=[Te],Le={class:"ml-3 relative"},Ae={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Pe=["src","alt"],Fe={key:1,class:"inline-flex rounded-md"},Ne={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},De=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Oe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200"},null,-1),Ee=["onSubmit"],Ie={class:"-mr-2 flex items-center sm:hidden"},He={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Re={class:"pt-2 pb-3 space-y-1"},Ge={class:"pt-4 pb-1 border-t border-gray-200"},Je={class:"flex items-center px-4"},Ue={key:0,class:"shrink-0 mr-3"},Xe=["src","alt"],qe={class:"font-medium text-base text-gray-800"},Ke={class:"font-medium text-sm text-gray-500"},Qe={class:"mt-3 space-y-1"},We=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200"},null,-1),Ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),et=e("div",{class:"border-t border-gray-200"},null,-1),tt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),st=["onSubmit"],ot={class:"flex items-center"},rt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},at=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),nt=[at],it={class:"relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"},lt=I('<div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true"><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path:polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div></div><div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true"><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path:polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0"><h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Padelbuddies</h2><p class="mt-6 text-lg leading-8 text-gray-300">Heb jij geen mede padelspelers en wil jij samen padel spelen? Gebruik onze webapp voor het vinden van medespelers of registreer voor een lokaal evenement!</p></div><div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"><div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"></div><dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"></dl></div></div>',3),dt=e("footer",{class:"bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800"},[e("p",{class:"mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0"},[l(" © 2023 "),e("a",{href:"http://localhost:82/dashboard",class:"hover:underline",target:"_blank"},"padelbuddies"),l(". All rights reserved. ")]),e("ul",{class:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"},[e("li",null,[e("a",{href:"#",class:"mr-4 hover:underline md:mr-6"},"About")]),e("li",null,[e("a",{href:"#",class:"mr-4 hover:underline md:mr-6"},"Privacy Policy")]),e("li",null,[e("a",{href:"#",class:"hover:underline"},"Contact")])]),e("div",{class:"flex justify-center items-center space-x-1"},[e("a",{href:"#","data-tooltip-target":"tooltip-facebook",class:"inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})]),e("span",{class:"sr-only"},"Facebook")]),e("div",{id:"tooltip-facebook",role:"tooltip",class:"inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"},[l(" Like us on Facebook "),e("div",{class:"tooltip-arrow","data-popper-arrow":""})]),e("a",{href:"#","data-tooltip-target":"tooltip-twitter",class:"inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})]),e("span",{class:"sr-only"},"Twitter")]),e("div",{id:"tooltip-twitter",role:"tooltip",class:"inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"},[l(" Follow us on Twitter "),e("div",{class:"tooltip-arrow","data-popper-arrow":""})]),e("a",{href:"#","data-tooltip-target":"tooltip-instagram",class:"inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})]),e("span",{class:"sr-only"},"Instagram")]),e("a",{href:"https://www.linkedin.com/company/93779572","data-tooltip-target":"tooltip-instagram",class:"inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})]),e("span",{class:"sr-only"},"Linkedin")])])],-1),ht={__name:"AppLayout",props:{title:String},setup(c){const a=S(!1),s=t=>{P.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{P.post(route("logout"))};return(t,y)=>(o(),n("div",null,[d(i(E),{title:c.title},null,8,["title"]),d(se),e("div",ce,[e("nav",ue,[e("div",he,[e("div",ge,[e("div",pe,[e("div",me,[d(i(j),{href:t.route("dashboard")},{default:r(()=>[fe]),_:1},8,["href"])]),e("div",ve,[d(z,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[l(" Dashboard ")]),_:1},8,["href","active"]),d(z,{href:t.route("booking.view"),active:t.route().current("booking.view")},{default:r(()=>[l(" Bookings ")]),_:1},8,["href","active"]),d(z,{href:t.route("organization.view"),active:t.route().current("organization.view")},{default:r(()=>[l(" Organizations ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(o(),b(F,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",we,[e("button",xe,[l(w(t.$page.props.auth.user.current_team.name)+" ",1),_e])])]),content:r(()=>[e("div",ke,[t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:0},[$e,d(x,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:r(()=>[l(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),b(x,{key:0,href:t.route("teams.create")},{default:r(()=>[l(" Create New Team ")]),_:1},8,["href"])):g("",!0),je,Ce,(o(!0),n($,null,A(t.$page.props.auth.user.all_teams,u=>(o(),n("form",{key:u.id,onSubmit:k(v=>s(u),["prevent"])},[d(x,{as:"button"},{default:r(()=>[e("div",Se,[u.id==t.$page.props.auth.user.current_team_id?(o(),n("svg",Me,Be)):g("",!0),e("div",null,w(u.name),1)])]),_:2},1024)],40,ze))),128))],64)):g("",!0)])]),_:1})):g("",!0)]),e("div",Le,[d(F,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),n("button",Ae,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Pe)])):(o(),n("span",Fe,[e("button",Ne,[l(w(t.$page.props.auth.user.name)+" ",1),De])]))]),content:r(()=>[Oe,d(x,{href:t.route("profile.show")},{default:r(()=>[l(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),b(x,{key:0,href:t.route("api-tokens.index")},{default:r(()=>[l(" API Tokens ")]),_:1},8,["href"])):g("",!0),Ve,e("form",{onSubmit:k(h,["prevent"])},[d(x,{as:"button"},{default:r(()=>[l(" Log Out ")]),_:1})],40,Ee)]),_:1})])]),e("div",Ie,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:y[0]||(y[0]=u=>a.value=!a.value)},[(o(),n("svg",He,[e("path",{class:p({hidden:a.value,"inline-flex":!a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!a.value,"inline-flex":a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:a.value,hidden:!a.value},"sm:hidden"])},[e("div",Re,[d(m,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[l(" Dashboard ")]),_:1},8,["href","active"]),d(m,{href:t.route("booking.view"),active:t.route().current("booking.view")},{default:r(()=>[l(" Bookings ")]),_:1},8,["href","active"]),d(m,{href:t.route("organization.view"),active:t.route().current("organization.view")},{default:r(()=>[l(" Organizations ")]),_:1},8,["href","active"])]),e("div",Ge,[e("div",Je,[t.$page.props.jetstream.managesProfilePhotos?(o(),n("div",Ue,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Xe)])):g("",!0),e("div",null,[e("div",qe,w(t.$page.props.auth.user.name),1),e("div",Ke,w(t.$page.props.auth.user.email),1)])]),e("div",Qe,[d(m,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[l(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),b(m,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[l(" API Tokens ")]),_:1},8,["href","active"])):g("",!0),e("form",{method:"POST",onSubmit:k(h,["prevent"])},[d(m,{as:"button"},{default:r(()=>[l(" Log Out ")]),_:1})],40,We),t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:1},[Ye,Ze,d(m,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[l(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),b(m,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[l(" Create New Team ")]),_:1},8,["href","active"])):g("",!0),et,tt,(o(!0),n($,null,A(t.$page.props.auth.user.all_teams,u=>(o(),n("form",{key:u.id,onSubmit:k(v=>s(u),["prevent"])},[d(m,{as:"button"},{default:r(()=>[e("div",ot,[u.id==t.$page.props.auth.user.current_team_id?(o(),n("svg",rt,nt)):g("",!0),e("div",null,w(u.name),1)])]),_:2},1024)],40,st))),128))],64)):g("",!0)])])],2)]),e("div",it,[d(de),lt]),e("main",null,[f(t.$slots,"default")])]),dt]))}};export{ht as _};