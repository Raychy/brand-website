<script setup>
import { storeToRefs } from 'pinia';
import { useGalleryStore } from '~~/stores/index';

const galleryStore = useGalleryStore()
galleryStore.getAllGalleries()
galleryStore.searchedwebsitenologyGalleries()
galleryStore.searcheddesignGalleries()
galleryStore.searchedmobileAppGalleries()
galleryStore.searchedwebAppGalleries()
galleryStore.searchedecommerceGalleries()
const { galleries } = storeToRefs(galleryStore)
let isShowWork = ref(true),
    isShowWebsite = ref(false),
    isShowDesign = ref(false),
    isShowWebApp = ref(false),
    isShowMobile = ref(false),
    isShowEcommerce = ref(false)
function showWebsite() {
    isShowWebsite.value = true
    isShowWork.value = false
    isShowDesign.value = false
    isShowWebApp.value = false
    isShowEcommerce.value = false
    isShowMobile.value = false
}
function showDesign() {
    isShowDesign.value = true
    isShowWebsite.value = false
    isShowWork.value = false
    isShowWebApp.value = false
    isShowEcommerce.value = false
    isShowMobile.value = false
}
function showWebApp() {
    isShowWebApp.value = true
    isShowWebsite.value = false
    isShowWork.value = false
    isShowDesign.value = false
    isShowMobile.value = false
    isShowEcommerce.value = false
}

function showMobile() {
    isShowMobile.value = true
    isShowWebApp.value = false
    isShowWebsite.value = false
    isShowWork.value = false
    isShowDesign.value = false
    isShowEcommerce.value = false
}
function showEcommerce() {
    isShowEcommerce.value = true
    isShowMobile.value = false
    isShowWebApp.value = false
    isShowWebsite.value = false
    isShowWork.value = false
    isShowDesign.value = false
}
function showAllwork() {
    isShowWork.value = true
    isShowEcommerce.value = false
    isShowMobile.value = false
    isShowWebApp.value = false
    isShowWebsite.value = false
    isShowDesign.value = false
}
</script>
<template>
    <div>
        <div class="overflow-x-auto">
            <ul class="filters home-filter mb-10 mt-10 flex w-[700px] gap-8 font-bold md:w-auto lg:mt-0 lg:gap-10">

                <li class=" filter" :class="isShowWork ? 'active' : ''" data-filter="all"> <button
                        @click.prevent="showAllwork()" type="button"
                        class="rounded-[10px] bg-gray-dark py-4 px-5 leading-5 transition hover:bg-purple hover:text-white">
                        All Work
                    </button></li>
                <li class="filter" :class="isShowDesign ? 'active' : ''" data-filter="design"><button type="button"
                        class="rounded-[10px] bg-gray-dark py-4 px-5 leading-5 transition text-white hover:bg-purple hover:text-white"
                        @click.prevent="showDesign()">Design</button></li>
                <li class="filter" :class="isShowWebsite ? 'active' : ''" data-filter="website"><button type="button"
                        class="rounded-[10px] bg-gray-dark py-4 px-5 leading-5 transition text-white hover:bg-purple hover:text-white"
                        @click.prevent="showWebsite()">Website</button></li>
                <li class="filter" :class="isShowMobile ? 'active' : ''" data-filter="app"><button type="button"
                        class="rounded-[10px] bg-gray-dark py-4 px-5 leading-5 transition text-white hover:bg-purple hover:text-white"
                        @click.prevent="showMobile()">Mobile App</button></li>
                <li class="filter" :class="isShowWebApp ? 'active' : ''" data-filter="web"><button type="button"
                        class="rounded-[10px] bg-gray-dark py-4 px-5 leading-5 transition text-white hover:bg-purple hover:text-white"
                        @click.prevent="showWebApp()">Web
                        Application</button></li>
                <li class="filter" :class="isShowEcommerce ? 'active' : ''" data-filter="ecommerce"><button type="button"
                        class="rounded-[10px] bg-gray-dark py-4 px-5 leading-5 transition text-white hover:bg-purple hover:text-white"
                        @click.prevent="showEcommerce()">Ecommerce</button>
                </li>
            </ul>
        </div>
        <AllWork v-if="isShowWork" />
        <!-- <h1>Design</h1> -->
        <Design v-if="isShowDesign" />
        <!-- <h1>Webite</h1> -->
        <Webite v-if="isShowWebsite" />
        <!-- <h1>MobileApp</h1> -->
        <MobileApp v-if="isShowMobile" />
        <!-- <h1>WebApp</h1> -->
        <WebApp v-if="isShowWebApp" />
        <!-- <h1>Ecommerce</h1> -->
        <Ecommerce v-if="isShowEcommerce" />
    </div>
</template>
<style>
.filter.active button {
    --tw-bg-opacity: 1;
    background-color: rgb(180 118 229/var(--tw-bg-opacity));
    color: rgb(255 255 255/var(--tw-text-opacity))
}
</style>