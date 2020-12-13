<template>
  <div class="border border-gray-200 shadow rounded p-4 w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-gray-300 rounded w-3/4" />
        <div class="space-y-2">
          <div class="h-4 bg-gray-300 rounded" />
          <div class="h-4 bg-gray-300 rounded w-5/6" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
}
</script>
