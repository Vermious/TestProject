import{c as f,w as n,o as r,b as _,a as t,k as a,x as d,l as c,e as i,h as m,F as u,y as b,t as p}from"./app-4ba7d537.js";import{_ as y}from"./AppLayout-2e430a60.js";import"./HeaderImage-cbc18ccc.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={class:"ml-5 space-y-12 px-5"},x={class:"border-b border-gray-900/10 pb-12"},v=t("h1",{class:"text-base text-2xl font-semibold leading-7 text-gray-900 text-center"},"Reserveer padelbaan",-1),w={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},k={class:"sm:col-span-2"},C=t("label",{for:"location",class:"block text-sm font-medium leading-6 text-gray-900"},"Locatie",-1),j={class:"mt-2"},B={class:"sm:col-span-2"},S=t("label",{for:"date",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer datum",-1),V={class:"mt-2"},P={class:"sm:col-span-2"},T=t("label",{for:"time",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer speeltijd",-1),U={class:"mt-2"},$=t("h1",{class:"mt-10 mb-10 text-1xl font-semibold leading-7 text-gray-900 text-center"},"Tijdstip",-1),D={class:"mt-10 mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},L={class:"sm:col-span-2"},A=t("label",{for:"time",class:"block text-sm font-medium leading-6 text-gray-900"},"Selecteer tijdstip",-1),E={class:"sm:col-span-2"},F=t("label",{for:"court",class:"block text-sm font-medium leading-6 text-gray-900"},"Kies padelbaan",-1),M={class:"mt-2"},N={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},O={class:"w-full text-sm text-left text-gray-500"},K=t("thead",{class:"text-xs text-gray-700 uppercase"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 bg-gray-50"}," Datum - Tijd "),t("th",{scope:"col",class:"px-6 py-3"}," Padel baan "),t("th",{scope:"col",class:"px-6 py-3 bg-gray-50"}," Prijs "),t("th",{scope:"col",class:"px-6 py-3"})])],-1),R={class:"border-b border-gray-200"},q=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"}," 23 April 2023 18:00 - 19:00 ",-1),z=t("td",{class:"px-6 py-4"}," Padel baan 1 ",-1),G=t("td",{class:"px-6 py-4 bg-gray-50"}," 19,99 ",-1),H={class:"px-6 py-4"},I={props:{},data(){return{form:this.$inertia.form({_method:"POST",location:null,selected:this.selected,time_from:null,reservation_date:null,padel_court:this.selectedPadelCourt,price:19.99}),selected:"01:00",playTimes:[{time:"01:00"},{time:"01:30"},{time:"02:00"}],selectedPadelCourt:"1",padelCourts:[{court:"1"},{court:"2"},{court:"3"},{court:"4"},{court:"5"}]}},methods:{createBooking(){this.form.post(route("booking.store"),{onSucces:l=>{this.form.selected=l.selected,this.form.time_from=l.time_from,this.form.reservation_date=l.reservation_date,this.form.padel_court=l.padel_court,this.form.price=l.price,this.form.location=l.location}})}}},Y=Object.assign(I,{__name:"Create",setup(l){return(o,s)=>{const g=b("jet-form-section");return r(),f(y,{title:"AttributeEntryCreate"},{default:n(()=>[_(g,{onSubmitted:s[6]||(s[6]=e=>o.createBooking())},{default:n(()=>[t("div",h,[t("div",x,[v,t("div",w,[t("div",k,[C,t("div",j,[a(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>o.form.location=e),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Location"},null,512),[[d,o.form.location]])])]),t("div",B,[S,t("div",V,[a(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>o.form.reservation_date=e),type:"date",id:"date",name:"reservation date",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[d,o.form.reservation_date]])])]),t("div",P,[T,t("div",U,[a(t("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>o.form.selected=e),id:"time",name:"time",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},[(r(!0),i(u,null,m(o.playTimes,e=>(r(),i("option",null,p(e.time),1))),256))],512),[[c,o.form.selected]])])])]),$,t("div",D,[t("div",L,[A,a(t("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>o.form.time_from=e),type:"time",class:"peer block min-h-[auto] w-full rounded border-0"},null,512),[[d,o.form.time_from]])]),t("div",E,[F,t("div",M,[a(t("select",{"onUpdate:modelValue":s[4]||(s[4]=e=>o.form.padel_court=e),id:"padelcourt",name:"padelcourt",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},[(r(!0),i(u,null,m(o.padelCourts,e=>(r(),i("option",null,p(e.court),1))),256))],512),[[c,o.form.padel_court]])])])]),t("div",N,[t("table",O,[K,t("tbody",null,[t("tr",R,[q,z,G,t("td",H,[t("button",{onClick:s[5]||(s[5]=e=>o.createBooking()),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Boeken")])])])])])])])]),_:1})]),_:1})}}});export{Y as default};
