import { defineStore } from "pinia";
import { accessKey } from "~~/services/AccessKey";
import { apiClient } from "~~/services/PhotoApi";

export const useGalleryStore = defineStore(
     'GalleryStore',
     {
          state: () => {
               return {
                    galleries: [],
                    websiteGalleries:[],
                    designGalleries:[],
                    mobileAppGalleries:[],
                    webAppGalleries:[],
                    ecommerceGalleries:[]
               };
          },
          getters: {},
          actions: {
               getAllGalleries() {
                    apiClient.get(
                         `/photos?client_id=${accessKey}&per_page=15`
                    ).then((res) => {
                         // console.log(res.data);
                         this.galleries = res.data
                    }).catch((err) => {
                         // console.log(err);
                    })

               },
               searchedwebsitenologyGalleries() {
                    apiClient.get(
                         `/search/photos?client_id=${accessKey}&query=website&per_page=9`
                    ).then((res) => {
                         // console.log(res.data);
                         this.websiteGalleries = res.data?.results
                    }).catch((err) => {
                         console.log(err);
                    })
               },
               searcheddesignGalleries() {
                    apiClient.get(
                         `/search/photos?client_id=${accessKey}&query=website-design&per_page=9`
                    ).then((res) => {
                         // console.log(res.data);
                         this.designGalleries = res.data?.results
                    }).catch((err) => {
                         console.log(err);
                    })
               },
               searchedmobileAppGalleries() {
                    apiClient.get(
                         `/search/photos?client_id=${accessKey}&query=mobile-app&per_page=9`
                    ).then((res) => {
                         // console.log(res.data);
                         this.mobileAppGalleries = res.data?.results
                    }).catch((err) => {
                         console.log(err);
                    })
               },
               searchedwebAppGalleries() {
                    apiClient.get(
                         `/search/photos?client_id=${accessKey}&query=web-apps&per_page=9`
                    ).then((res) => {
                         // console.log(res.data);
                         this.webAppGalleries = res.data?.results
                    }).catch((err) => {
                         console.log(err);
                    })
               },
               searchedecommerceGalleries() {
                    apiClient.get(
                         `/search/photos?client_id=${accessKey}&query=ecommerce&per_page=9`
                    ).then((res) => {
                         // console.log(res.data);
                         this.ecommerceGalleries = res.data?.results
                    }).catch((err) => {
                         console.log(err);
                    })
               },

             
          },
     });
