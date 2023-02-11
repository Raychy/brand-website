<template>
     <div>

          <Head>
               <Title>Service</Title>
          </Head>
          <GeneralBanner :title="title" :desc="desc" :img="img" />

          <div class="max-w-6xl mx-auto  pt-10 px-4 md:px-0 ">
               <Services />

          </div>
          <section class="py-14 dark:!bg-none lg:py-[100px] mt-20"
               style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 54.69%) ">
               <div class="container mx-auto px-4 md:px-0">
                    <div class="heading text-center">

                         <h4 class="text-white">We are proud of our team</h4>
                    </div>
                    <ProudTeam />
               </div>


          </section>
         <ServicesGallery/>
          <ServicesHowWeDoIt />
          <section class="relative mt-20  h-full mb-[30rem]">
               <img src="@/assets/images/how-we-do-it_.png" alt="" class="relative -top-20">
               <div
                    class="absolute top-0 bg-no-repeat h-[100vh] w-full bg-[url(@/assets/images/service-video-bg.png)] bg-cover py-52 ">
                    <h2 class="my-52 absolute text-white  left-20 bottom-0 text-5xl w-[50vw] font-bold">
                         Find out everything you need to know about creating a business process model.
                         <div class="rounded-full w-20 h-20  border-light-black border-4 mt-4">
                              <button
                                   class="play-btn rounded-full w-[72px] h-[72px] bg-white text-center hover:bg-purple ">
                                   <img src="@/assets/images/play-icon.svg" alt="" class="">
                              </button>
                         </div>
                    </h2>
               </div>

          </section>
          <ServicesTechUsed />
         
     </div>
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