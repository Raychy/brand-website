<template>
     <div>

          <Head>
               <Title>Team</Title>
          </Head>

          <GeneralBanner :title="title" :desc="desc" :img="img" />
          <div class="container py-20 px-4 md:px-0"><Project /></div>
     </div>
</template>
<script setup>
let title = 'Meet Our Team'
let desc = 'Creative Minds'
let img = 'https://res.cloudinary.com/dvwrc5o8d/image/upload/v1673531396/template-website/te_pj8uxn.svg'
</script>
