<script setup>
    import { Head, Link } from '@inertiajs/vue3';
    import AppLogo from '@/CustomComponents/Logo.vue';
    import AppLandingsPage from '@/Layouts/AppLandingsPage.vue';
</script>

<template>
    <Head title="PadelBuddies" />
 
    <AppLandingsPage>
        <div class="relative sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            <div class="p-6 lg:p-8 bg-white border-b border-gray-200">

                <div class="md:flex md:items-center">
                    <div class="flex items-center justify-center h-auto max-w-sm">
                        <AppLogo />
                    </div>

                    <div>
                        <div class="text-5xl">PadelBuddies</div>
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
        </div>
    </AppLandingsPage> 
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
