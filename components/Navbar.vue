<template>
  <nav class="w-full flex items-center h-20 border-b-2 shadow-md sticky top-0 z-20 bg-white">
    <div class="w-full md:px-10 px-5 flex justify-end">
      <div class="relative h-16 w-32 flex justify-between md:justify-end items-center">
        <div class="flex flex-col">
          <p class="md:text-lg text-sm text-blue-fitu-300 font-sans font-bold text-center">Admin</p>
          <div class="bg-turquoise-100 text-white text-xs md:px-4 px-2 md:py-2 py-1 rounded-md ">Fitu Pets</div>
        </div>
        <div
          id="hamburger-icon"
          class="md:hidden block"
          :class="toggle ? 'open' : null "
          @click.prevent="showMenu"
          >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { EventBus } from '@/plugins/EventBus';

export default {
  name: 'Navbar',
  data: () => ({
    toggle: false,
  }),
  mounted(){
    EventBus.$on('hideMenu', () => {
        this.toggle = !this.toggle;
    });
  },
  methods: {
    showMenu() {
      this.toggle = !this.toggle;
      EventBus.$emit('showMenu');
    }
  }
}
</script>
