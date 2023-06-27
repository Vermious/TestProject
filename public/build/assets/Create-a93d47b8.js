import{c as d,w as i,q as m,o as c,b as u,a as o,k as a,s as n}from"./app-4da84cef.js";import{_ as g}from"./AppLayout-e3ebac75.js";import"./HeaderImage-09128bdf.js";import"./_plugin-vue_export-helper-c27b6911.js";const p={class:"ml-5 space-y-12 px-5"},b={class:"border-b border-gray-900/10 pb-12"},f=o("h1",{class:"text-base text-2xl font-semibold leading-7 text-gray-900 text-center"},"Voeg je organizsatie toe",-1),_={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3"},y={class:"sm:col-span-1"},h=o("label",{for:"organization_name",class:"block text-sm font-medium leading-6 text-gray-900"},"Organisatie naam",-1),x={class:"mt-2"},v={class:"sm:col-span-1"},w=o("label",{for:"padel_court",class:"block text-sm font-medium leading-6 text-gray-900"},"Aantal padelbanen",-1),k={class:"mt-2"},z={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3"},V={class:"sm:col-span-1"},F=o("label",{for:"city_name",class:"block text-sm font-medium leading-6 text-gray-900"},"Plaats naam",-1),O={class:"mt-2"},P={class:"sm:col-span-1"},U=o("label",{for:"postal_code",class:"block text-sm font-medium leading-6 text-gray-900"},"Postcode",-1),S={class:"mt-2"},j={class:"sm:col-span-1"},B=o("label",{for:"street_name",class:"block text-sm font-medium leading-6 text-gray-900"},"Straat name",-1),C={class:"mt-2"},$={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3"},N={class:"sm:col-span-1"},T=o("label",{for:"house_number",class:"block text-sm font-medium leading-6 text-gray-900"},"Huis nr.",-1),q={class:"mt-2"},A={class:"sm:col-span-1"},D=o("label",{for:"province",class:"block text-sm font-medium leading-6 text-gray-900"},"Provincie",-1),H={class:"mt-2"},M={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},E={class:"sm:col-span-2"},G={props:{},data(){return{form:this.$inertia.form({_method:"POST",organization_name:"",padel_court:0,city_name:"",postal_code:"",street_name:"",house_number:0,province:""})}},methods:{createOrganization(){this.form.post(route("organization.store"),{onSucces:r=>{this.orgForm.organization_name=r.organization_name,this.orgForm.padel_court=r.padel_court,this.orgForm.addressable_id=r.addressable_id,this.orgForm.city_name=r.city_name,this.orgForm.postal_code=r.postal_code,this.orgForm.street_name=r.street_name,this.orgForm.house_number=r.house_number,this.orgForm.province=r.province}})}}},Q=Object.assign(G,{__name:"Create",setup(r){return(t,e)=>{const l=m("jet-form-section");return c(),d(g,null,{default:i(()=>[u(l,{onSubmitted:e[8]||(e[8]=s=>t.createBooking())},{default:i(()=>[o("div",p,[o("div",b,[f,o("div",_,[o("div",y,[h,o("div",x,[a(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.form.organization_name=s),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Organisatie naam"},null,512),[[n,t.form.organization_name]])])]),o("div",v,[w,o("div",k,[a(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.form.padel_court=s),type:"number",id:"padel_court",name:"padel court",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[n,t.form.padel_court]])])])]),o("div",z,[o("div",V,[F,o("div",O,[a(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.form.city_name=s),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Plaats naam"},null,512),[[n,t.form.city_name]])])]),o("div",P,[U,o("div",S,[a(o("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>t.form.postal_code=s),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Postcode"},null,512),[[n,t.form.postal_code]])])]),o("div",j,[B,o("div",C,[a(o("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>t.form.street_name=s),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Straat naam"},null,512),[[n,t.form.street_name]])])])]),o("div",$,[o("div",N,[T,o("div",q,[a(o("input",{"onUpdate:modelValue":e[5]||(e[5]=s=>t.form.house_number=s),type:"number",id:"padel_court",name:"padel court",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[n,t.form.house_number]])])]),o("div",A,[D,o("div",H,[a(o("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>t.form.province=s),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Provincie"},null,512),[[n,t.form.province]])])])]),o("div",M,[o("div",E,[o("button",{onClick:e[7]||(e[7]=(...s)=>t.createOrganization&&t.createOrganization(...s)),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"}," Voeg organisatie toe ")])])])])]),_:1})]),_:1})}}});export{Q as default};
