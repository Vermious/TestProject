<script setup>
    import { Head, Link } from '@inertiajs/vue3';
    import AppLogo from '@/CustomComponents/Logo.vue';
    import AppLandingsPage from '@/Layouts/AppLandingsPage.vue';
    import LandingListItem from '@/customComponents/LandingListItem.vue';
    import BaseSection from '@/customComponents/BaseSection.vue';
    import BaseAccordion from '@/customComponents/Accordion.vue';
</script>

<script>
 export default{
    data() {
        return {
            accordions: [
                {
                title: 'Wat is padel?',
                description:
                    "Padel kan het best worden omschreven als een mix van squash en tennis. De sport wordt gespeeld met vier personen (2 tegen 2) in een omsloten kooi, de padelbaan genoemd. Qua techniek en spelregels lijkt het spel vooral op tennis, "
                    + "maar het gebruik van de wanden heeft meer weg van squash. Beide teams spelen op hun eigen speelhelft, " 
                    + "daartussen bevindt zich het net. Met een padelracket sla je de bal over het net bij de tegenstander op het veld."
                    + "De bal mag maar één keer op de grond stuiteren en moet dan worden teruggeslagen. Echter mag daarbij ook gebruik worden gemaakt van de wanden."
                    + "Het speelveld is stukken kleiner dan een tennisbaan waardoor de dynamiek en snelheid bij padel stukken hoger is.",
                },
                {
                title: 'Wat zijn de spelregels van padel',
                description:
                    "Temp text",
                },
                {
                title: 'Hoe zoek ik mijn padelmaatje?',
                description:
                    "Temp text",
                },
                {
                title: 'Hoe boek ik een baan?',
                description:
                    "Temp text",
                },
            ],
        }
    }
 }
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

        <!-- Industry-leading security section -->
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

        <!-- Review section -->

        <!-- potential partners section -->

        <!-- About team -->

        <!-- FAQ section -->
        <section class="w-full my-24">
            <BaseSection>
                <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
                    <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
                    <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

                    <ul class="shadow-box">
                        <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
                    </ul>
                </div>
                <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
                    <div class="w-full">
                        <!-- <img :src="require('~/assets/img/faq.webp')" class="w-full" alt="" /> -->
                    </div>
                </div>
            </BaseSection>
        </section>

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
