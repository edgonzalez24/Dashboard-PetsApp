<template>
  <main class="w-full relative md:h-screen fadeIn">
    <div class="border-b-2 shadow-md h-20">
      <div class="container h-full">
        <div class="w-32 relative flex items-center justify-center h-full">
          <p class="text-blue-fitu-200 font-bold text-lg">All</p>
          <div class="absolute bottom-0 w-full h-1 bg-blue-fitu-200 rounded-lg"/>
        </div>
      </div>
    </div>
    <div class="bg-white-smoke-200 h-full p-5">
      <h4 class="font-bold text-2xl text-blue-fitu-300">Pets</h4>
      <Table
        :loading="loading"
        :pets="pets"
        @getPets="getPets"
      />
    </div>
  </main>
</template>

<script>
import Table from '@/components/Pets/Table';

export default {
  components: {
    Table
  },
  data:() => ({
    pets: [],
    loading: false,
  }),
  async mounted() {
    await this.getPets();
  },
  methods: {
    async getPets () {
      this.loading = !this.loading;
      try {
        const { data }= await this.$axios.get('/api/services/getpets');
        this.pets = data;
      } catch(err) {
        console.log(err);
      } finally {
        this.loading = !this.loading;
      }
    }
  }
}
</script>
