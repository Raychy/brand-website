<template>
     <div>

          <Head>
               <Title>Porfolio</Title>
          </Head>

          <GeneralBanner :title="title" :desc="desc" :img="img" />
          <div class="container py-20 px-4 md:px-0">
               <GeneralProject />
          </div>
          

     </div>
</template>
<script setup>
let title = 'Our Project'
let desc = 'Some of our finest work.'
let img = 'https://res.cloudinary.com/dvwrc5o8d/image/upload/v1673529753/template-website/port_iob6kw.svg'
</script>
