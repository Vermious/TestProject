<template>
    <AppLayout>
      <div class="w-full mb-12 xl:mb-0 mx-auto mt-2">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="mb-4 font-medium text-sm text-green-600 text-center"></div>
            <div class="flex flex-wrap items-center">
              <div class="relative w-full pl-1 pr-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">Your groups</h3>
              </div>
              <div class="relative w-full pl-4 pr-1 max-w-full flex-grow flex-1 text-right">
                <a
                  :href="route('group.create')"
                  class="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                  Maak een niewe groep aan
                </a>
              </div>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <table v-if="pageData.group?.length > 0" class="items-center bg-transparent w-full border-collapse">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Naam
                  </th>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    aantal spelers in lobby 
                  </th>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-300">
                <tr v-for="group in pageData.group" :key="group.id" class="whitespace-nowrap">
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                        {{ group.group_name }}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                        1 / 4
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                        Niet vol
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <a :href="route('group.edit', { uuid: group.uuid })" class="pl-3"> Edit </a>

                    <a :href="route('group.show', { uuid: group.uuid })" class="pl-3"> view </a>
  
                    <a :href="route('group.destroy', { uuid: group.uuid })" class="pl-3"> Delete </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table v-else class="items-center bg-transparent w-full border-collapse">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
                  >
                    Groepen
                  </th>
                </tr>
              </thead>
              <tbody class="text-center bg-white divide-y divide-gray-300">
                <tr class="whitespace-nowrap">
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                        Je hebt nog geen groep, maak er snel eentje aan!
                    </div>
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
    import AppLayout from '@/Layouts/AppLayout.vue';
</script>

<script>
    export default{
        components: {
            AppLayout,
        },
        props: {
            pageData: {
                type: Object,
                required: true,
            }
        }
    }
</script>