<template>
  <nav class="w-full flex items-center h-20 border-b-2 shadow-md sticky top-0 z-20 bg-white">
    <div class="w-full px-5 flex justify-end">
      <div class="relative h-16 w-32 flex justify-between md:justify-end items-center">
        <p class="text-lg text-blue-fitu-300 font-sans font-bold">Admin</p>
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
