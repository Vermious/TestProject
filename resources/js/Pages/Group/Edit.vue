<template>
    <AppLayout title="AttributeEntryCreate">
      <jet-form-section @submitted="editGroupName()">
        <div class="ml-5 space-y-12 px-5">
          <div class="border-b border-gray-900/10 pb-12">
            <h1 class="text-base text-2xl font-semibold leading-7 text-gray-900 text-center">Groeps naam</h1>
  
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              
              <div class="sm:col-span-2">
                <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Groep naam</label>
                <div class="mt-2">
                  <input
                      v-model="form.group_name"
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Groep naam"
                    >
                </div>
              </div>
            </div>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-2">
                        <button @click="editGroupName" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Edit groeps naam
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
            pageData: {
                type: Array,
                required: true,
            },
          },
          data() {
              return {
                  form: this.$inertia.form({
                      _method: "POST",
                      group_name: this.pageData.group.group_name,
                  }),
              }
          },
          methods:{
              editGroupName(){
                  this.form.post(route('group.update', {uuid: this.pageData.group.uuid}), {
                      onSucces: (response) => {
                          this.form.group_name = response.group_name;
                      },
                  })
              }
          },
      }
  </script>