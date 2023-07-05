<script setup>
    import { Head, Link } from '@inertiajs/vue3';
    import AppLogo from '@/CustomComponents/Logo.vue';
    import AppLandingsPage from '@/Layouts/AppLandingsPage.vue';
    import LandingListItem from '@/customComponents/LandingListItem.vue';
    import FAQ from '@/customComponents/FAQ.vue';
</script>

<template>
    <Head title="PadelBuddies" />

    <AppLandingsPage>
        <div class="relative sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            <div class="pt-10 relative max-w-screen-xl px-8 mx-auto grid grid-cols-1 gap-x-1">

                <div class="md:flex md:items-center">
                    <div class="flex items-center justify-center h-auto max-w-sm">
                        <AppLogo />
                    </div>

                    <div>
                        <div class="text-5xl">PadelBuddies</div>
                    </div>
                </div>
                            
                <p class="mt-6 text-gray-500 leading-relaxed space-y-8 sm:space-y-4">
                    Zie jij overdag ook nooit mensen op de padelbaan? Wij gaan hier verandering in brengen! Ons bedrijf heet Padelbuddies 
                    en neemt het pijnpunt lege padelbanen en het niet kunnen vinden van padelbuddies weg. Het vullen van banen in 
                    combinatie met het vinden van je padelmaatjes doen wij via een all-in-one app. Padelspelers vinden op deze manier 
                    medespelers om samen te padellen. Daarnaast worden de banen gevuld door het organiseren van evenementen. Deze evenementen 
                    zijn voor zowel maatschappelijke organisaties als particulieren. Word jij ook gek van de lege padelbanen, gebruik dan 
                    nu onze onze website! 
                </p>
            </div>
        </div>

        <!-- Uitleg over wat we doen -->
        <section class="w-full my-36">
            <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
                <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
                    <div class="w-full">
                        <img src="/assets/images/padelracket.jpeg" class="w-full" alt="" />
                    </div>
                </div>
                <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
                    <h2 class="text-4xl font-semibold">De groot opkomende sport padel, kent u het al?</h2>
                    <ul class="space-y-8 sm:space-y-4">
                        <LandingListItem title="Lege padel banen">
                            <p class="text-sm text-gray-700 leading-relaxed">
                                Padel is in de laatste jaren een groot opkomende sport in de sportwereld. Steeds meer padelbanen 
                                komen er in Nederland bij en veel verenigingen zien toekomst hierin. Zelfs door de groei van 
                                padel blijkt ook de publieke padelsport tegen problemen aan te lopen. In de middagen zijn er 
                                altijd veel padelbanen die leeg staan.
                            </p>
                        </LandingListItem>
                        <LandingListItem title="Het probleem">
                            <p class="text-sm text-gray-700 leading-relaxed">
                                Omdat padel met vier personen gespeeld wordt is het voor sommige lastig om een volledig team te 
                                vormen. Dit is een tegenvaller voor de omzet van publieke padelbanen waardoor het streefdoel is 
                                het vinden van oplossingen voor deze problemen.  
                            </p>
                        </LandingListItem>
                        <LandingListItem title="Onze oplossing">
                            <p class="text-sm text-gray-700 leading-relaxed">
                                Met de ‘PadelBuddies’ web-app wordt de focus gelegd op op een methode om deze banen te vullen. Er gaat 
                                vooral gefocust worden om andere padelbuddies te vinden met de web-app. Wanneer iemand in de middag 
                                wil padellen maar geen medespelers heeft om dit mee te doen, kan hij/zij in de web-app aangeven hoe 
                                laat hij/zij wil gaan padellen waarbij andere personen zich aan kunnen sluiten. Hiermee kunnen 
                                personen elkaar vinden waardoor het ’s middags ook drukker wordt.
                            </p>
                        </LandingListItem>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Video -->
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Kom gezellig padellen</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Deze 4 vrienden hebben door middel van onze service elkaar gevonden. Wil jij dit ook?<a class=" hover:text-gray-900" :href="route('register')"> Meld je dan nu aan!</a></p>
                </div> 
                <iframe class="w-full aspect-video" width="469" height="833" src="https://www.youtube.com/embed/0WIvtw56onM" title="PadelBuddies, medespelers vinden voor een potje padel!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>

        <!-- Review section -->
        <section class="w-full pt-8 px-4">
            <div class="mx-auto max-w-3xl text-center">
                <h3 class="mb-6 text-3xl font-bold">Reviews</h3>
                <p class="pb-2 text-neutral-500 dark:text-neutral-300 ">
                    Deze mensen maken al gebruik van onze service. Ben jij de volgende?
                </p>
            </div>

            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 mb-8">
                <figure class="max-w-screen-md mx-auto">
                    <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p class="text-2xl font-medium text-gray-900 dark:text-white">
                            "Super overzichtelijke website, alles was makkelijk te vinden onder de duidelijke kopjes! Op 
                            deze manier wil ik wel vaker een activiteit boeken."
                        </p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <!-- HERE -->
                        <img class="rounded-full object-cover h-6 w-6" src="/assets/images/Danny.jpg" alt="profile picture">
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div class="pr-3 font-medium text-gray-900 dark:text-white">Danny Wout</div>
                            <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Student</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>

        <!-- Blog -->
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Onze Blogs</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Blijft op de hoogte via onze blogs. Daar vertellen we je graag meer over de sport padel.</p>
                </div> 
                <div class="grid gap-8 lg:grid-cols-2">
                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                Article
                            </span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a :href="route('blog.show')">PADELBUDDIES, de ultieme app om medespelers te vinden!</a></h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">In de wereld van racketsporten heeft padel de laatste jaren enorme populariteit gewonnen. Het is een dynamische sport die elementen van tennis en squash vervangt, en het is een geweldige manier om actief te blijven en nieuwe mensen te ontmoeten.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <div class="h-8 w-8">
                                    <img src="/assets/images/Mark.jpg" alt="" class="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                                <span class="font-medium dark:text-white">
                                    Mark Scheurs
                                </span>
                            </div>
                            <a :href="route('blog.show')" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Lees meer
                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </article> 
                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Coming Soon!</a></h2>
                        <div class="flex justify-between items-center">
                        </div>
                    </article>                  
                </div>  
            </div>
        </section>

        <!-- Potential partners section -->

        <!-- FAQ section -->
        <FAQ/>
       
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
