<template>
  <main class="w-full relative md:h-screen fadeIn px-5 bg-white-smoke-200 ">
    <div class="md:w-2/3 pt-10">
      <h4 class="font-bold text-2xl text-blue-fitu-300">Add Pet</h4>
      <Form />
    </div>
  </main>
</template>
<script>
import Form from '@/components/Form';

export default {
  components: {
    Form,
  }
}
</script>
