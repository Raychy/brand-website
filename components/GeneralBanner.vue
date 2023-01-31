<template>

     <div
          class="relative overflow-hidden bg-[url(@/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat">
          <div class="">
               <div class=" pt-4 pb-0 lg:pt-4 lg:pb-12 xl:pt-20 px-4 md:px-0">
                    <div class=" container mx-auto   md:flex reverse items-center justify-between gap-10">
                         <div class="">
                              <div class="heading text-center lg:text-left ">
                                   <h6>{{ title }} </h6>
                                   <h4 class="text-white">{{ desc }} </h4>
                              </div>

                         </div>
                         <div  data-aos="fade-left" data-aos-duration="1000" class="aos-init">
                             <img :src="img" alt="port-img" >
                             
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script setup>

defineProps(['title', 'desc', 'img'])
</script>