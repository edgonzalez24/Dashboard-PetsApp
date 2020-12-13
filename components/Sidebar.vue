<template>
  <transition name="slide">
    <div
      id="sidebar"
      v-show="toggle"
      class="h-screen md:h-full bg-blue-fitu-100 fixed md:w-1/6 w-4/6 z-30"
    >
      <div @click.prevent="hideMenu()">
        <n-link
          to="/"
          class="bg-blue-fitu-200 flex flex-col items-center justify-center h-20">
          <img src="/images/logo.png" alt="logo" class="w-24 lg:w-32">
          <p class="text-center text-white text-sm">Pets</p>
        </n-link>
      </div>
      <div class="md:h-64 flex items-center ">
        <div class="w-full">
          <div
            v-for="(item, index) in mainMenu"
            :key="index"
            class="border-l-4 flex h-12 items-center transition-height transition duration-1000 ease-in-out"
            :class="$route.path === item.slug ? 'border-green-100' : 'border-transparent'"
          >
          <div @click="hideMenu()">
            <n-link
              :to="item.slug"
              class="w-auto flex lg:ml-8 ml-4  hover:opacity-50 transition duration-500 ease-in-out">
              <img :src="item.icon" :alt="item.name" class="w-6 h-6 mr-3">
              <p class="text-white font-bold text-sm"> {{item.name}}</p>
            </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { EventBus } from '@/plugins/EventBus';

export default {
  name: 'Sidebar',
  data: () => ({
    mainMenu: [
      {
        icon: '/icons/paw.svg',
        name: 'Pets',
        slug: '/',
      },
      {
        icon: '/icons/dog.svg',
        name: 'Add pets',
        slug: '/add-pet',
      },
    ],
    toggle: true,
    window: {
        width: 0,
    },
  }),
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    EventBus.$on('showMenu', () => {
        this.toggle = !this.toggle;
    });
  },
  methods: {
    hideMenu(value) {
      EventBus.$emit('hideMenu');
      this.handleResize();
    },
    handleResize() {
      this.window.width = window.innerWidth;
      if (this.window.width < 768) {
        this.toggle = false;
      } else {
        this.toggle = true;
      }
    }
  }
}
</script>
