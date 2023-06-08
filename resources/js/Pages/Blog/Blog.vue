<script setup>
    import AppLandingsPage from '@/Layouts/AppLandingsPage.vue';
</script>

<template>
    <AppLandingsPage>
        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header class="mb-4 lg:mb-6 not-format">
                        <address class="flex items-center mb-6 not-italic">
                            <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                <div class="h-24 w-24">
                                    <img src="/assets/team/Michiel.jpeg" alt="" class="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                                <div class="pl-3">
                                    <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Naam schrijven</a>
                                    <p class="text-base font-light text-gray-500 dark:text-gray-400">Functie</p>
                                    <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Datum</time></p>
                                </div>
                            </div>
                        </address>
                        <!-- Ttile subsection -->
                        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Title van de blog</h1>
                    </header>
                    <!-- Ttile subsection -->
                    <p class="pb-6"> Inleiding blog </p>
                    <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="">
                        <figcaption class="text-left pt-3 pb-3">Afbeelding beschrijving</figcaption>
                    </figure>
                    <h1 class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">Tussen kopje title</h1>
                    <p> hier komt de rest van de blog </p>
                </article>
            </div>
        </main>
    </AppLandingsPage>
</template>