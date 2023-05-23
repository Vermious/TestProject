<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AppLogo from '@/CustomComponents/Logo.vue';
import HeaderImage from '@/CustomComponents/HeaderImage.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
        <Head title="Welcome" />

        <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                        <HeaderImage />
                    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                        aria-hidden="true">
                        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                        aria-hidden="true">
                        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl lg:mx-0">
                            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Padelbuddies</h2>
                            <p class="mt-6 text-lg leading-8 text-neutral-100">Heb jij geen mede padelspelers en wil jij 
                                samen padel spelen? Gebruik onze webapp voor het vinden van medespelers of registreer voor een lokaal evenement!</p>
                            <p class="mt-6 text-xl leading-8 text-neutral-100 hover:text-gray-900"><a :href="route('register')"> Meld je dan nu aan!</a></p>
                        </div>
                        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                            <div
                                class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            </div>
                            <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            </dl>
                        </div>
                    </div>
        </div>

        <div class="relative sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="font-semibold text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>

                <template v-else>
                    <Link :href="route('login')" class="font-semibold text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</Link>

                    <Link v-if="canRegister" :href="route('register')" class="ml-4 font-semibold text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link>
                </template>
            </div>
            
            <div>
                <div class="p-6 lg:p-8 bg-white border-b border-gray-200">

                    <div class="md:flex md:items-center">
                        <div class="flex items-center justify-center h-auto max-w-sm">
                            <AppLogo />
                        </div>
                        <div>
                            <div class="text-5xl">Padelbuddies</div>
                        </div>
                    </div>
                    
                    <p class="mt-6 text-gray-500 leading-relaxed">
                        Zie jij overdag ook nooit mensen op de padelbaan? Wij gaan hier verandering in brengen! Ons bedrijf heet Padelbuddies 
                        en neemt het pijnpunt lege padelbanen en het niet kunnen vinden van padelbuddies weg. Het vullen van banen in 
                        combinatie met het vinden van je padelmaatjes doen wij via een all-in-one app. Padelspelers vinden op deze manier 
                        medespelers om samen te padellen. Daarnaast worden de banen gevuld door het organiseren van evenementen. Deze evenementen 
                        zijn voor zowel maatschappelijke organisaties als particulieren. Word jij ook gek van de lege padelbanen, download dan 
                        nu onze app of bezoek onze website! 
                    </p>
                </div>
                <!-- INSERT EXTRA CONTENT -->
            </div>
        </div> 
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
