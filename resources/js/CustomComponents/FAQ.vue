<script setup>
    import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
    import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css';
</script>

<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Title -->
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meest gestelde vragen.</h2>
                <p class="mt-1 text-gray-600 dark:text-gray-400">Hier worden de meest gestelde vragen beantwoord.</p>
            </div>
            <!-- End Title -->

            <div class="max-w-2xl mx-auto">
                <!-- Accordion -->
                <div class="hs-accordion-group">
                    <vue-collapsible-panel class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-2 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one" :expanded="false">
                        <template #title>
                            <b class="text-xl">Wat is padel?</b>
                        </template>
                        <template #content>
                            Padel kan het best worden omschreven als een mix van squash en tennis. De sport wordt gespeeld met vier personen 
                            (2 tegen 2) in een omsloten kooi, de padelbaan genoemd. Qua techniek en spelregels lijkt het spel vooral op tennis, 
                            maar het gebruik van de wanden heeft meer weg van squash. Beide teams spelen op hun eigen speelhelft, 
                            daartussen bevindt zich het net. Met een padelracket sla je de bal over het net bij de tegenstander op het veld.
                            De bal mag maar één keer op de grond stuiteren en moet dan worden teruggeslagen. Echter mag daarbij ook gebruik worden gemaakt van de wanden.
                            Het speelveld is stukken kleiner dan een tennisbaan waardoor de dynamiek en snelheid bij padel stukken hoger is.
                        </template>
                    </vue-collapsible-panel>

                    <vue-collapsible-panel class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-2 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one" :expanded="false">
                        <template #title>
                            <b class="text-xl">Wat zijn de spelregels van padel?</b>
                        </template>
                        <template #content>
                            Padel speel je altijd met zijn vieren. Dat levert vaak genoeg nog verrassende nieuwe vriendschappen op. De spelregels van padel 
                            lijken veel op die van tennis, zo moet de bal ook over het net en in het vak van de tegenstanders worden geslagen. Opslaan
                            doe je echter onderhands, waarbij de bal eerst moet stuiteren achter de servicelijn voordat je serveert. Een groot verschil 
                            is dat je de bal na de stuit tegen de wand of muur mag laten komen en hem dan pas terug hoeft te slaan. Dit mag ook weer via de
                            muur en levert vaak verrassende rally’s op.
                        </template>
                    </vue-collapsible-panel>

                    <vue-collapsible-panel class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-2 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one" :expanded="false">
                        <template #title>
                            <b class="text-xl">Is padel een moeilijke sport?</b>
                        </template>
                        <template #content>
                            Iedereen kan padellen en dat maakt de sport zo ontzettend leuk. Op de padelbaan kom je mensen van alle leeftijden tegen.Zelfs voor 
                            degenen met weinig balgevoel of een matige conditie is een potje padel een leuke bezigheid. Als je voor het eerst gaat padellen 
                            kan je ervan uitgaan dat je binnen een halfuur de basis van het spel wel onder de knie hebt.
                        </template>
                    </vue-collapsible-panel>

                    <vue-collapsible-panel class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-2 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one" :expanded="false">
                        <template #title>
                            <b class="text-xl">Hoe zoek ik mijn padelmaatje?</b>
                        </template>
                        <template #content>
                            Heel simpel zodra je, je hebt aangemeld op onze website krijg je een overzicht te zien van alle spelers die zich bij ons hebben 
                            aangesloten. Vanuit dit overzicht kun je zoeken op naam, achternaam, locatie en rank om ze dan uit te nodigen voor je padel groep.
                            Als de groep dan compleet is kun je een boeking plaatsen via onze website.  
                        </template>
                    </vue-collapsible-panel>

                    <vue-collapsible-panel class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-2 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one" :expanded="false">
                        <template #title>
                            <b class="text-xl">Hoe boek ik een baan?</b>
                        </template>
                        <template #content>
                            Je boekt bij ons makkelijk een baan door je aan te melden via onze website. 
                            <p class="text-black hover:text-blue-600"><a :href="route('register')" class="text-blue"> Meld je daarom ook snel aan! </a></p>
                        </template>
                    </vue-collapsible-panel>
                </div>
                <!-- End Accordion -->
            </div>
        </div>
</template>