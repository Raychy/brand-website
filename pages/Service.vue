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
          <section class=" how_we_do_it py-14 dark:!bg-none lg:py-[100px] mt-20"
               style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 54.69%) ">
               <div class="container mx-auto px-4 md:px-0 grid sm:grid-cols-2 justify-between gap-4">
                    <div class="heading text-left ">
                         <h6>How We Do It?</h6>
                         <h4 class="text-white">We make your spending stress-free for you to have the perfect control.
                         </h4>
                         <p class="py-4">Find out everything you need to know and more about how we create our business
                              process models. There are many variations of passages of Lorem Ipsum available, but the
                              majority have suffered alteration in some form, by injected humour, or randomised words
                              which don't look even slightly believable. </p>
                    </div>
                    <div class="grid gap-4 rounded-[32px] sm:grid-cols-2 sm:gap-0">
                         <div class="flex h-[200px] gap-4 py-7 px-4 text-white rounded-tl-[32px]  aos-init aos-animate"
                              style="background: linear-gradient(130.61deg, #ff416c 0%, #ff4b2b 100%)"
                              data-aos="fade-up" data-aos-duration="1000">
                              <div class="pt-1">
                                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_290_1513)">
                                             <path opacity="0.5"
                                                  d="M4.2104 20.0002H1.0526C0.773432 20.0002 0.5057 19.8893 0.308299 19.6919C0.110898 19.4945 0 19.2268 0 18.9476V10.5268C0 10.2476 0.110898 9.9799 0.308299 9.7825C0.5057 9.5851 0.773432 9.4742 1.0526 9.4742H4.2104C4.48956 9.4742 4.7573 9.5851 4.9547 9.7825C5.1521 9.9799 5.263 10.2476 5.263 10.5268V18.9476C5.263 19.2268 5.1521 19.4945 4.9547 19.6919C4.7573 19.8893 4.48956 20.0002 4.2104 20.0002ZM18.9468 20.0002H15.789C15.5098 20.0002 15.2421 19.8893 15.0447 19.6919C14.8473 19.4945 14.7364 19.2268 14.7364 18.9476V7.36901C14.7364 7.08984 14.8473 6.82211 15.0447 6.62471C15.2421 6.42731 15.5098 6.31641 15.789 6.31641H18.9468C19.226 6.31641 19.4937 6.42731 19.6911 6.62471C19.8885 6.82211 19.9994 7.08984 19.9994 7.36901V18.9476C19.9994 19.2268 19.8885 19.4945 19.6911 19.6919C19.4937 19.8893 19.226 20.0002 18.9468 20.0002Z"
                                                  fill="white"></path>
                                             <path d="M11.5787 19.9994H8.42089C8.14172 19.9994 7.87399 19.8885 7.67659 19.6911C7.47918 19.4937 7.36829 19.226 7.36829 18.9468V1.0526C7.36829 0.773432 7.47918 0.5057 7.67659 0.308299C7.87399 0.110898 8.14172 0 8.42089 0H11.5787C11.8579 0 12.1256 0.110898 12.323 0.308299C12.5204 0.5057 12.6313 0.773432 12.6313 1.0526V18.9468C12.6313 19.226 12.5204 19.4937 12.323 19.6911C12.1256 19.8885 11.8579 19.9994 11.5787 19.9994Z"
                                                  fill="white"></path>
                                        </g>
                                        <defs>
                                             <clipPath id="clip0_290_1513">
                                                  <rect width="20" height="20" fill="white"></rect>
                                             </clipPath>
                                        </defs>
                                   </svg>
                              </div>
                              <div>
                                   <h3 class="pb-2 text-lg font-extrabold">Analysis &amp; Planning</h3>
                                   <p class="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        The very first step that we follow while developing apps or working on any
                                        project, begins with analysis.
                                   </p>
                              </div>
                         </div>
                         <div class="flex h-[200px] gap-4 py-7 px-4 text-white rounded-tr-[32px]  aos-init aos-animate"
                              style="background: linear-gradient(130.61deg, #ffbd11 0%, #ff8e00 100%)"
                              data-aos="fade-up" data-aos-duration="1000">
                              <div class="pt-1">
                                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_290_1534)">
                                             <path opacity="0.5"
                                                  d="M12.2371 16.7087L16.7103 12.2366L19.4893 15.0156V19.4888H15.0172L12.2371 16.7087ZM3.2917 7.76334L0.3092 4.7819C0.211179 4.68399 0.133418 4.56771 0.080363 4.43973C0.0273081 4.31174 0 4.17455 0 4.03601C0 3.89746 0.0273081 3.76027 0.080363 3.63229C0.133418 3.5043 0.211179 3.38803 0.3092 3.29012L3.2917 0.308673C3.4894 0.11103 3.75751 0 4.03706 0C4.31662 0 4.58472 0.11103 4.78242 0.308673L7.76598 3.29012L3.2917 7.76334Z"
                                                  fill="white"></path>
                                             <path d="M3.29183 10.7457L5.21902 12.6739L6.71185 11.1811L4.78255 9.25497L6.27327 7.76424L8.20152 9.69143L9.69224 8.20071L7.76611 6.27246L9.25683 4.78174L11.1819 6.71104L12.6737 5.21926L10.7454 3.29207L13.7279 0.310626C13.9256 0.112983 14.1938 0.00195312 14.4733 0.00195312C14.7529 0.00195312 15.021 0.112983 15.2187 0.310626L19.6908 4.7828C19.8885 4.9805 19.9995 5.24861 19.9995 5.52816C19.9995 5.80771 19.8885 6.07582 19.6908 6.27352L6.27327 19.6911C6.07557 19.8887 5.80747 19.9998 5.52791 19.9998C5.24836 19.9998 4.98026 19.8887 4.78255 19.6911L0.310382 15.2189C0.112739 15.0212 0.00170898 14.7531 0.00170898 14.4735C0.00170898 14.194 0.112739 13.9259 0.310382 13.7282L3.29183 10.7457Z"
                                                  fill="white"></path>
                                        </g>
                                        <defs>
                                             <clipPath id="clip0_290_1534">
                                                  <rect width="20" height="20" fill="white"></rect>
                                             </clipPath>
                                        </defs>
                                   </svg>
                              </div>
                              <div>
                                   <h3 class="pb-2 text-lg font-extrabold">Design</h3>
                                   <p class="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        Designing helps us understand the engagement of users if the product is
                                        user-friendly, intuitive, and reciprocal.
                                   </p>
                              </div>
                         </div>
                         <div class="flex h-[200px] gap-4 py-7 px-4 text-white rounded-tl-[32px]  sm:rounded-tl-none sm:rounded-bl-[32px] rtl:sm:rounded-tr-none rtl:sm:rounded-br-[32px] aos-init aos-animate"
                              style="background: linear-gradient(130.61deg, #38ef7d 0%, #11998e 100%)"
                              data-aos="fade-up" data-aos-duration="1000">
                              <div class="pt-1">
                                   <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5"
                                             d="M9.26036 16.75C9.68075 16.75 10.0563 16.4871 10.2 16.092L14.477 4.34204C14.7145 3.68981 14.2315 3 13.5374 3H12.7397C12.3193 3 11.9438 3.26292 11.8 3.65796L7.52305 15.408C7.28564 16.0602 7.76863 16.75 8.46273 16.75H9.26036Z"
                                             fill="white"></path>
                                        <path d="M16.4309 14.0301C16.8214 14.4208 17.4547 14.4209 17.8454 14.0303L21.2929 10.5828C21.6834 10.1923 21.6834 9.55909 21.2929 9.16857L17.8456 5.72128C17.4549 5.33056 16.8213 5.33078 16.4309 5.72178L15.9002 6.25323C15.51 6.64397 15.5104 7.277 15.901 7.66728L17.4036 9.1684C17.7945 9.55893 17.7945 10.1925 17.4037 10.5831L15.9009 12.0852C15.5104 12.4756 15.5102 13.1087 15.9005 13.4993L16.4309 14.0301ZM4.59644 10.5829C4.20554 10.1924 4.20546 9.55886 4.59627 9.16823L6.09906 7.66615C6.48964 7.27575 6.48983 6.64265 6.09948 6.25202L5.56911 5.72128C5.17862 5.33052 4.54527 5.33041 4.15464 5.72103L0.707107 9.16856C0.316583 9.55909 0.316582 10.1923 0.707107 10.5828L4.15439 14.0301C4.54511 14.4208 5.17866 14.4206 5.56911 14.0296L6.09981 13.4981C6.48999 13.1074 6.48962 12.4743 6.09898 12.0841L4.59644 10.5829Z"
                                             fill="white"></path>
                                   </svg>
                              </div>
                              <div>
                                   <h3 class="pb-2 text-lg font-extrabold">Development</h3>
                                   <p class="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        This is the main part of our process beca-use the product that we deliver
                                        depends on the efforts made during this
                                        stage.
                                   </p>
                              </div>
                         </div>
                         <div class="flex h-[200px] gap-4 py-7 px-4 text-white rounded-tr-[32px]  sm:rounded-tr-none sm:rounded-br-[32px] rtl:sm:rounded-tl-none rtl:sm:rounded-bl-[32px] aos-init aos-animate"
                              style="background: linear-gradient(130.61deg, #56ccf2 0%, #2f80ed 100%)"
                              data-aos="fade-up" data-aos-duration="1000">
                              <div class="pt-1">
                                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3"
                                             d="M9.96489 0.0482068C10.1078 0.0164562 10.2559 0.0164562 10.3987 0.0482068L17.6518 1.66C18.0673 1.75273 18.3636 2.12091 18.3636 2.54727V11.6264C18.3636 13.45 17.4518 15.1536 15.9345 16.1645L10.7365 19.6301C10.4006 19.8541 9.963 19.8541 9.62709 19.6301L4.42909 16.1645C2.91091 15.1527 2 13.45 2 11.6273V2.54727C2 2.12091 2.29636 1.75273 2.71182 1.66L9.96489 0.0482068Z"
                                             fill="white"></path>
                                        <path d="M14.872 7.20887C14.5168 6.854 13.9413 6.85407 13.5863 7.20904L10.4362 10.3585C10.0456 10.749 9.4125 10.749 9.02201 10.3585L7.80086 9.13732C7.44589 8.78235 6.87038 8.78235 6.51541 9.13732C6.16044 9.49228 6.16044 10.0678 6.51541 10.4228L9.02285 12.9302C9.41337 13.3207 10.0465 13.3207 10.4371 12.9302L14.8722 8.49508C15.2274 8.13988 15.2273 7.56395 14.872 7.20887Z"
                                             fill="white"></path>
                                   </svg>
                              </div>
                              <div>
                                   <h3 class="pb-2 text-lg font-extrabold">Testing</h3>
                                   <p class="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        Testing is obligatory to an app’s future success; it surrounds a significant
                                        section of our overall mobile app
                                        development process.
                                   </p>
                              </div>
                         </div>
                    </div>

               </div>


          </section>
          <section class="relative mt-20  h-full mb-[25rem]">
               <img src="@/assets/images/how-we-do-it_.png" alt="" class="relative -top-20">
               <div
                    class="absolute top-0 bg-no-repeat h-[100vh] w-full bg-[url(@/assets/images/service-video-bg.png)] bg-cover py-52 ">
                    <h2 class="my-52 absolute text-white  left-20 bottom-0 text-5xl w-[50vw] font-bold">
                         Find out everything you need to know about creating a business process model.
                        <div class="rounded-full w-20 h-20  border-light-black border-4 ">
                         <button class=" rounded-full w-[72px] h-[72px] bg-white text-center hover:bg-purple">
                              <img src="@/assets/images/play-icon.svg" alt="" >
                         </button>
                        </div>
                    </h2>
               </div>

          </section>
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