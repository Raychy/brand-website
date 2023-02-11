<template>
     <section>
          <div class="container px-4 md:px-0 ">
               <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                    <div class="heading text-center lg:text-left mt-20">
                         <h6>Our Project</h6>
                         <h4 class="text-white">Some of our finest work.</h4>

                    </div>
                    <div
                         class="bottom-0 z-[1] mt-5 flex items-center justify-center gap-4 right-1/3 left-1/3 sm:mt-0 sm:justify-end">
                         <NuxtLink to="/"
                              class="text-sm font-extrabold text-white transition hover:text-secondary dark:hover:text-secondary">
                              View All</NuxtLink>
                         <button type="button" @click="next()"
                              class="swiper-button-prev static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:text-[0px] hover:bg-secondary rotate-180"
                              tabindex="0" aria-label="Previous slide"
                              aria-controls="swiper-wrapper-335b64babc6c9fb4">
                              <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                        stroke="white" stroke-width="2" stroke-linecap="round"></path>
                              </svg>
                         </button>
                         <button type="button" @click="prev()"
                              class="swiper-button-next static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:text-[0px] hover:bg-secondary rotate-180"
                              tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-335b64babc6c9fb4">
                              <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                        stroke="white" stroke-width="2" stroke-linecap="round"></path>
                              </svg>
                         </button>
                    </div>

               </div>
          </div>
          <Carousel ref="carousel" :breakpoints="breakpoints" :settings="settings" data-swiper-slide-index="0"
               role="group" aria-label="1 / 2" class="pb-20">
               <slide v-for="(gallery, index) in galleries" :key="index" class=" ">
                    <div
                         class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] dark:border-none transition duration-500 hover:border-purple hover:bg-purple/20 dark:bg-gray-dark dark:drop-shadow-none">
                         <NuxtLink :to="gallery.links.download" target="_blank"
                              class="absolute top-0 left-0 h-full w-full">
                         </NuxtLink>
                         <img :src="gallery.urls.regular" :alt="gallery.description"
                              class="h-52 w-full sm:w-[250px]  rounded-t-3xl object-cover">
                         <div class="p-5 text-sm font-bold">
                              <h6 class="mb-1 text-black dark:text-white">{{ gallery.user.name }}</h6>
                              <p>{{ gallery.user.username }}</p>
                         </div>
                    </div>
               </slide>
          </Carousel>
     </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useGalleryStore } from '~~/stores/index';
const galleryStore = useGalleryStore()
galleryStore.getAllGalleries()
const { galleries } = storeToRefs(galleryStore)
let title = 'Services'
let desc = 'High - Impact Services'
let img = 'https://res.cloudinary.com/dvwrc5o8d/image/upload/v1673531398/template-website/sev_kqgghy.svg'
</script>
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
     name: 'Service',
     components: {
          Carousel,
          Slide,
          Navigation,
          Pagination,
     },
     data: () => ({
          // carousel settings
          settings: {
               snapAlign: 'center',
               autoplay: '2000',
               wrapAround: true,
               transition: 500
          },

          breakpoints: {
               300: {
                    itemsToShow: 1,
                    // snapAlign: 'center',
               },
               // 700px and up

               700: {
                    itemsToShow: 3,
                    // snapAlign: 'center',
               },
               // 1024 and up
               1024: {
                    itemsToShow: 5,
                    // snapAlign: 'start',
               },
          },
     }),
     methods: {
          next() {
               this.$refs.carousel.next()
          },
          prev() {
               this.$refs.carousel.prev()
          },
     },
})
</script>
<style lang="css" scoped>
.play-btn img {
     margin-left: 30%;
}
</style>