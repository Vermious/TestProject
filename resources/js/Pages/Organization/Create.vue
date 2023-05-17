<template>
    <AppLayout>
        <jet-form-section @submitted="createBooking()">
            <div class="ml-5 space-y-12 px-5">
                <div class="border-b border-gray-900/10 pb-12">
                    <h1 class="text-base text-2xl font-semibold leading-7 text-gray-900 text-center">Voeg je organizsatie toe</h1>

                    <!-- TODO: implement a multiform for organization and the address  -->

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div class="sm:col-span-1">
                            <label for="organization_name" class="block text-sm font-medium leading-6 text-gray-900">Organisatie naam</label>
                            <div class="mt-2">
                                <input
                                    v-model="form.organization_name"
                                    type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Organisatie naam"
                                >
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="padel_court" class="block text-sm font-medium leading-6 text-gray-900">Aantal padelbanen</label>
                            <div class="mt-2">
                                <input 
                                    v-model="form.padel_court" 
                                    type="number" 
                                    id="padel_court" 
                                    name="padel court" 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Temp address form -->

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div class="sm:col-span-1">
                            <label for="city_name" class="block text-sm font-medium leading-6 text-gray-900">Plaats naam</label>
                            <div class="mt-2">
                                <input
                                    v-model="form.city_name"
                                    type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Plaats naam"
                                >
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="postal_code" class="block text-sm font-medium leading-6 text-gray-900">Postcode</label>
                            <div class="mt-2">
                                <input
                                    v-model="form.postal_code"
                                    type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Postcode"
                                >
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="street_name" class="block text-sm font-medium leading-6 text-gray-900">Straat name</label>
                            <div class="mt-2">
                                <input
                                    v-model="form.street_name"
                                    type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Straat naam"
                                >
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div class="sm:col-span-1">
                            <label for="house_number" class="block text-sm font-medium leading-6 text-gray-900">Huis nr.</label>
                            <div class="mt-2">
                                <input 
                                    v-model="form.house_number" 
                                    type="number" 
                                    id="padel_court" 
                                    name="padel court" 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="province" class="block text-sm font-medium leading-6 text-gray-900">Provincie</label>
                            <div class="mt-2">
                                <input
                                    v-model="form.province"
                                    type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Provincie"
                                >
                            </div>
                        </div>

                    </div>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-2">
                            <button @click="createOrganization" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Voeg organisatie toe 
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </jet-form-section>
    </AppLayout>
</template>

<script setup>
     import AppLayout from '@/Layouts/AppLayout.vue'
</script>

<script>
 export default{
        props:{
        },
        data() {
            return {
                // orgForm: this.$inertia.form({
                //     _method: "POST",
                //     organization_name: "",
                //     padel_court: 0,
                // }),

                // addrForm: this.$inertia.form({
                //     _method: "POST",
                //     // Temp ID
                //     //addressable_id: 1,
                //     city_name: "",
                //     postal_code: "",
                //     street_name: "",
                //     house_number: 0,
                //     province: "",
                // }),

                form: this.$inertia.form({
                    _method: "POST",
                    organization_name: "",
                    padel_court: 0,

                    city_name: "",
                    postal_code: "",
                    street_name: "",
                    house_number: 0,
                    province: "",
                }),
            }
        },
        methods:{
            createOrganization(){
              this.form.post(route('organization.store'), {
                    onSucces: (response) => {
                        this.orgForm.organization_name = response.organization_name;
                        this.orgForm.padel_court = response.padel_court; 

                        this.orgForm.addressable_id = response.addressable_id;
                        this.orgForm.city_name = response.city_name; 
                        this.orgForm.postal_code = response.postal_code; 
                        this.orgForm.street_name = response.street_name; 
                        this.orgForm.house_number = response.house_number; 
                        this.orgForm.province = response.province; 
                    },
                })
            },
            // createAddress(){
            //   this.addrForm.post(route('address.store'), {
            //         onSucces: (response) => {
            //             this.orgForm.addressable_id = response.addressable_id;
            //             this.orgForm.city_name = response.city_name; 
            //             this.orgForm.postal_code = response.postal_code; 
            //             this.orgForm.street_name = response.street_name; 
            //             this.orgForm.house_number = response.house_number; 
            //             this.orgForm.province = response.province; 
            //         },
            //     })
            // }
        },
    }
</script>

