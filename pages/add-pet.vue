<template>
  <main class="w-full relative md:h-screen fadeIn md:px-5 px-3 bg-white-smoke-200 ">
    <div class="lg:w-2/3 sm:w-4/5 w-full pt-10">
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
