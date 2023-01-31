<template>
     <div>

          <Head>
               <Title>Career</Title>
          </Head>

          <GeneralBanner :title="title" :desc="desc" :img="img" />
          <div class="container py-20 px-4 md:px-0"><Project /></div>

     </div>
</template>
<script setup>
let title = 'Career'
let desc = 'Join our team at Plurk'
let img = 'https://res.cloudinary.com/dvwrc5o8d/image/upload/v1673531387/template-website/carr_f1zoun.svg'
</script>
