<template>
  <div class="w-full flex flex-wrap h-full">
    <div class="md:w-1/6 w-full relative">
      <Sidebar/>
    </div>
    <div class="md:w-5/6 w-full relative">
      <Navbar />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>
<style>
</style>
