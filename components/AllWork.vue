<script setup>
import { storeToRefs } from 'pinia';
import { useGalleryStore } from '~~/stores/index';
const galleryStore = useGalleryStore()
galleryStore.getAllGalleries()
const { galleries } = storeToRefs(galleryStore)
</script>
<template>
     <div class="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3" >
          <div class="project" data-filter="web" v-for="(gallery, index) in galleries" :key="index">
               <div
                    class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] dark:border-none transition duration-500 hover:border-purple hover:bg-purple/20 dark:bg-gray-dark dark:drop-shadow-none">
                    <NuxtLink :to="gallery.links.download" target="_blank" class="absolute top-0 left-0 h-full w-full">
                    </NuxtLink>
                    <img :src="gallery.urls.regular" :alt="gallery.description"
                         class="h-52 w-full rounded-t-3xl object-cover">
                    <div class="p-5 text-sm font-bold">
                         <h6 class="mb-1 text-black dark:text-white">{{ gallery.user.name }}</h6>
                         <p>{{ gallery.user.username }}</p>
                    </div>
               </div>
          </div>
     </div>
</template>
<!-- data-aos="fade-in" 
     data-aos-duration="200"
     data-aos-easing="ease-in-out-cubic" -->