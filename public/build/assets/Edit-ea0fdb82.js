<<<<<<<< HEAD:public/build/assets/Edit-ea0fdb82.js
import{c as p,w as n,q as f,o as a,b as _,a as t,k as r,s as d,l as b,e as l,h as m,t as c,F as u}from"./app-ed013a11.js";import{_ as h}from"./AppLayout-1d8851b0.js";import"./HeaderImage-a2fc9099.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"ml-5 space-y-12 px-5"},v={class:"border-b border-gray-900/10 pb-12"},x=t("h1",{class:"text-base text-2xl font-semibold leading-7 text-gray-900 text-center"},"Reserveer padelbaan",-1),k={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},w={class:"sm:col-span-2"},D=t("label",{for:"location",class:"block text-sm font-medium leading-6 text-gray-900"},"Locatie",-1),B={class:"mt-2"},S={class:"sm:col-span-2"},C=t("label",{for:"date",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer datum",-1),j={class:"mt-2"},V={class:"sm:col-span-2"},T=t("label",{for:"time",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer speeltijd",-1),U={class:"mt-2"},E=t("h1",{class:"mt-10 mb-10 text-1xl font-semibold leading-7 text-gray-900 text-center"},"Tijdstip",-1),L={class:"mt-10 mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},$={class:"sm:col-span-2"},q=t("label",{for:"time",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer tijdstip",-1),A={class:"sm:col-span-2"},F=t("label",{for:"court",class:"block text-sm font-medium leading-6 text-gray-900"},"Kies padelbaan",-1),M={class:"mt-2"},N=["v-model"],O={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},P={class:"sm:col-span-2"},K={props:{pageData:{type:Array,required:!0}},data(){return{form:this.$inertia.form({_method:"POST",location:this.pageData.booking.location,play_time:this.selected,time_from:this.pageData.booking.time_form,reservation_date:this.pageData.booking.reservation_date,padel_court:this.pageData.booking.padel_court,price:19.99}),selected:"01:00",playTimes:[{time:"01:00"},{time:"01:30"},{time:"02:00"}],selectedPadelCourt:this.pageData.booking.padel_court,padelCourts:[{court:"1"},{court:"2"},{court:"3"},{court:"4"},{court:"5"}]}},methods:{updateBooking(){this.form.post(route("booking.update",{uuid:this.pageData.booking.uuid}),{onSucces:i=>{this.form.play_time=i.play_time,this.form.time_from=i.time_from,this.form.reservation_date=i.reservation_date,this.form.padel_court=i.padel_court,this.form.price=i.price,this.form.location=i.location}})}}},I=Object.assign(K,{__name:"Edit",setup(i){return(e,s)=>{const g=f("jet-form-section");return a(),p(h,{title:"AttributeEntryCreate"},{default:n(()=>[_(g,{onSubmitted:s[5]||(s[5]=o=>e.createBooking())},{default:n(()=>[t("div",y,[t("div",v,[x,t("div",k,[t("div",w,[D,t("div",B,[r(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.location=o),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Location"},null,512),[[d,e.form.location]])])]),t("div",S,[C,t("div",j,[r(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.reservation_date=o),type:"date",id:"date",name:"reservation date",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[d,e.form.reservation_date]])])]),t("div",V,[T,t("div",U,[r(t("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.play_time=o),id:"time",name:"time",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},[(a(!0),l(u,null,m(e.playTimes,o=>(a(),l("option",null,c(o.time),1))),256))],512),[[b,e.form.play_time]])])])]),E,t("div",L,[t("div",$,[q,r(t("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>e.form.time_from=o),type:"time",class:"peer block min-h-[auto] w-full rounded border-0"},null,512),[[d,e.form.time_from]])]),t("div",A,[F,t("div",M,[t("select",{"v-model":e.form.padel_court,id:"padelcourt",name:"padelcourt",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},[(a(!0),l(u,null,m(e.padelCourts,o=>(a(),l("option",null,c(o.court),1))),256))],8,N)])])]),t("div",O,[t("div",P,[t("button",{onClick:s[4]||(s[4]=(...o)=>e.updateBooking&&e.updateBooking(...o)),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"}," Update ")])])])])]),_:1})]),_:1})}}});export{I as default};
========
import{c as p,w as n,q as f,o as a,b as _,a as t,k as r,s as d,l as b,e as l,h as m,t as c,F as u}from"./app-03a676d1.js";import{_ as h}from"./AppLayout-cd6bfbfa.js";import"./HeaderImage-7132df92.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"ml-5 space-y-12 px-5"},v={class:"border-b border-gray-900/10 pb-12"},x=t("h1",{class:"text-base text-2xl font-semibold leading-7 text-gray-900 text-center"},"Reserveer padelbaan",-1),k={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},w={class:"sm:col-span-2"},D=t("label",{for:"location",class:"block text-sm font-medium leading-6 text-gray-900"},"Locatie",-1),B={class:"mt-2"},S={class:"sm:col-span-2"},C=t("label",{for:"date",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer datum",-1),j={class:"mt-2"},V={class:"sm:col-span-2"},T=t("label",{for:"time",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer speeltijd",-1),U={class:"mt-2"},E=t("h1",{class:"mt-10 mb-10 text-1xl font-semibold leading-7 text-gray-900 text-center"},"Tijdstip",-1),L={class:"mt-10 mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},$={class:"sm:col-span-2"},q=t("label",{for:"time",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer tijdstip",-1),A={class:"sm:col-span-2"},F=t("label",{for:"court",class:"block text-sm font-medium leading-6 text-gray-900"},"Kies padelbaan",-1),M={class:"mt-2"},N=["v-model"],O={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},P={class:"sm:col-span-2"},K={props:{pageData:{type:Array,required:!0}},data(){return{form:this.$inertia.form({_method:"POST",location:this.pageData.booking.location,play_time:this.selected,time_from:this.pageData.booking.time_form,reservation_date:this.pageData.booking.reservation_date,padel_court:this.pageData.booking.padel_court,price:19.99}),selected:"01:00",playTimes:[{time:"01:00"},{time:"01:30"},{time:"02:00"}],selectedPadelCourt:this.pageData.booking.padel_court,padelCourts:[{court:"1"},{court:"2"},{court:"3"},{court:"4"},{court:"5"}]}},methods:{updateBooking(){this.form.post(route("booking.update",{uuid:this.pageData.booking.uuid}),{onSucces:i=>{this.form.play_time=i.play_time,this.form.time_from=i.time_from,this.form.reservation_date=i.reservation_date,this.form.padel_court=i.padel_court,this.form.price=i.price,this.form.location=i.location}})}}},I=Object.assign(K,{__name:"Edit",setup(i){return(e,s)=>{const g=f("jet-form-section");return a(),p(h,{title:"AttributeEntryCreate"},{default:n(()=>[_(g,{onSubmitted:s[5]||(s[5]=o=>e.createBooking())},{default:n(()=>[t("div",y,[t("div",v,[x,t("div",k,[t("div",w,[D,t("div",B,[r(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.location=o),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Location"},null,512),[[d,e.form.location]])])]),t("div",S,[C,t("div",j,[r(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.reservation_date=o),type:"date",id:"date",name:"reservation date",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[d,e.form.reservation_date]])])]),t("div",V,[T,t("div",U,[r(t("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.play_time=o),id:"time",name:"time",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},[(a(!0),l(u,null,m(e.playTimes,o=>(a(),l("option",null,c(o.time),1))),256))],512),[[b,e.form.play_time]])])])]),E,t("div",L,[t("div",$,[q,r(t("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>e.form.time_from=o),type:"time",class:"peer block min-h-[auto] w-full rounded border-0"},null,512),[[d,e.form.time_from]])]),t("div",A,[F,t("div",M,[t("select",{"v-model":e.form.padel_court,id:"padelcourt",name:"padelcourt",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},[(a(!0),l(u,null,m(e.padelCourts,o=>(a(),l("option",null,c(o.court),1))),256))],8,N)])])]),t("div",O,[t("div",P,[t("button",{onClick:s[4]||(s[4]=(...o)=>e.updateBooking&&e.updateBooking(...o)),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"}," Update ")])])])])]),_:1})]),_:1})}}});export{I as default};
>>>>>>>> main:public/build/assets/Edit-b25619d4.js
