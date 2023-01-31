<template>
     <div>

          <Head>
               <Title>About Us</Title>
          </Head>

          <GeneralBanner :title="title" :desc="desc" :img="img" />
          <div class="container py-20 px-4 md:px-0"><Project /></div>

     </div>
</template>
<script setup>
let title = 'About Us'
let desc = 'About Plurk Technologies'
let img = 'https://res.cloudinary.com/dvwrc5o8d/image/upload/v1673531393/template-website/us_xvandl.svg'
</script>
