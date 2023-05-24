<template>
    <div v-if="$page.props.flash.message" class="bg-lime-100 border border-lime-400 text-lime-700 px-4 py-3 rounded relative"  role="alert">
      <strong class="font-bold">Success </strong>
      <span class="block sm:inline"> {{ $page.props.flash.message }} </span>
    </div>
    
    <AppLayout>
        <div class="w-full mb-12 xl:mb-0 mx-auto mt-2">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="mb-4 font-medium text-sm text-green-600 text-center"></div>
            <div class="flex flex-wrap items-center">
              <div class="relative w-full pl-1 pr-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">Organization overview</h3>
              </div>
              <div class="relative w-full pl-4 pr-1 max-w-full flex-grow flex-1 text-right">
                <a
                  :href="route('organization.create')"
                  class="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >Add Organization</a
                >
              </div>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <table :v-if="pageData.organization?.length > 0" class="items-center bg-transparent w-full border-collapse">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Organization name
                  </th>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Padel court
                  </th>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-300">
                <tr v-for="organization in pageData.organizations" :key="organization.id" class="whitespace-nowrap">
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                        {{ organization.organization_name }}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                        {{ organization.padel_court }}
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <!-- <a :href="route('booking.edit', { id: booking.uuid })" class="pl-3"> Edit </a> -->
  
                    <!-- <a :href="route('article.destroy', { id: article.id })" class="pl-3"> Delete </a> -->
  
                    <!-- <a :href="route('show-project-briefing', { id: project.id })" class="pl-3"> view </a> -->
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
</template>

<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue'
</script>

<script>
    export default{
        props: {
            pageData: {
                type: Object,
                required: true,
            }
        }
    }
</script>