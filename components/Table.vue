<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto">
      <div class="py-2 align-middle inline-block min-w-full">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  ID
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  Type
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  Color
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  Breed
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  Age
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                  Created at
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs md:text-base font-bold text-blue-fitu-300 tracking-wider">
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="(pet, index) in pets"
                :key="index"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.id}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{pet.name}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.kind}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div
                    :style="{background:pet.color}"
                    class="rounded-full h-4 w-4"/>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.breed}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.gender}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.age}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.created_at}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-between">
                  <div>
                    <img src="/icons/edit.svg" alt="icon-edit" class="h-5 w-5">
                  </div>
                  <div>
                    <img src="/icons/trash.svg" alt="icon-trash" class="h-5 w-5">
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pets: {
      immediate: true,
      default: () => ([]),
      type: Array,
    },
    loading: {
      immediate: true,
      default: false,
      type: Boolean,
    }
  }
}
</script>
