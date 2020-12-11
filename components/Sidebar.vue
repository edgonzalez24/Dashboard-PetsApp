<template>
  <div
    id="sidebar"
    v-show="toggle"
    class="h-screen md:h-full bg-blue-fitu-100 fixed lg:w-1/6 w-4/6 z-30 animation"
    :class="toggle ? 'animation-open' : 'animation-close' "
  >
    <div class="bg-blue-fitu-200 flex flex-col items-center justify-center h-20">
      <div class="w-32">
        <img src="/images/logo.png" alt="logo">
      </div>
      <p class="text-center text-white text-sm">Pets</p>
    </div>
    <div class="lg:h-64 flex items-center ">
      <div class="w-full">
        <div
          v-for="(item, index) in mainMenu"
          :key="index"
          class="border-l-4 border-green-100  flex w-full h-12 items-center"
        >
        <div class="w-auto flex ml-8">
          <img :src="item.icon" :alt="item.name" class="w-6 h-6 mr-3">
          <p class="text-white font-bold text-sm"> {{item.name}}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from '@/plugins/EventBus';

export default {
  data: () => ({
    mainMenu: [
      {
        icon: '/icons/paw.svg',
        name: 'Pets',
        slug: '/'
      },
      {
        icon: '/icons/dog.svg',
        name: 'Add pets',
        slug: '/add-pet'
      },
    ],
    toggle: false,
  }),
  mounted() {
    EventBus.$on('showMenu', () => {
        this.toggle = !this.toggle;
    });
  },
}
</script>
