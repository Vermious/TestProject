<template>
  <AppLayout title="AttributeEntryCreate">
    <jet-form-section @submitted="createBooking()">
      <div class="ml-5 space-y-12 px-5">
        <div class="border-b border-gray-900/10 pb-12">
          <h1 class="text-base text-2xl font-semibold leading-7 text-gray-900 text-center">Reserveer padelbaan</h1>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div class="sm:col-span-2">
              <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Locatie</label>
              <div class="mt-2">
                <input
                    v-model="form.location"
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Location"
                  >
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Selecteer datum</label>
              <div class="mt-2">
                <input v-model="form.reservation_date" type="date" id="date" name="reservation date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Selecteer speeltijd</label>
              <div class="mt-2">
                <select v-model="form.play_time" id="time" name="time" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option v-for="playTime in playTimes">{{ playTime.time }} </option>
                </select>
              </div>
            </div>
          </div>
          
          <h1 class="mt-10 mb-10 text-1xl font-semibold leading-7 text-gray-900 text-center">Tijdstip</h1>
          <!-- INSERT TIJD FILTER SYSTEEM  (Temp oplossing)-->
          <div class="mt-10 mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div class="sm:col-span-2">
                <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Selecteer tijdstip</label>
                  <input
                    v-model="form.time_from"
                    type="time"
                    class="peer block min-h-[auto] w-full rounded border-0"
                  />
            </div>

            <div class="sm:col-span-2">
              <label for="court" class="block text-sm font-medium leading-6 text-gray-900">Kies padelbaan</label>
              <div class="mt-2">
                <select :v-model="form.padel_court" id="padelcourt" name="padelcourt" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option v-for="padelCourt in padelCourts">{{ padelCourt.court }} </option>
                </select>
              </div>
            </div>
          </div>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <button @click="updateBooking" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Update
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
          }
        },
        data() {
            return {
                form: this.$inertia.form({
                    _method: "POST",
                    location: this.pageData.booking.location,
                    play_time: this.selected,
                    time_from: this.pageData.booking.time_form,
                    reservation_date: this.pageData.booking.reservation_date,
                    padel_court: this.pageData.booking.padel_court,
                    price: 19.99,
                }),
                selected: '01:00',
                playTimes: [
                  {time: '01:00'},
                  {time: '01:30'},
                  {time: '02:00'},
                ],
                selectedPadelCourt: this.pageData.booking.padel_court,
                padelCourts: [
                  {court: '1'},
                  {court: '2'},
                  {court: '3'},
                  {court: '4'},
                  {court: '5'},
                ],
            }
        },
        methods:{
            updateBooking(){
              this.form.post(route('booking.update', {uuid: this.pageData.booking.uuid}), {
                    onSucces: (response) => {
                        this.form.play_time = response.play_time;
                        this.form.time_from = response.time_from; 
                        this.form.reservation_date = response.reservation_date;
                        this.form.padel_court = response.padel_court;
                        this.form.price = response.price;
                        this.form.location = response.location;
                    },
                })
            }
        },
    }
</script>