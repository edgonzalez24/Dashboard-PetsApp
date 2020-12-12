<template>
  <div class="mt-5 md:mt-0 w-full">
      <form>
        <div class="shadow-lg overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="name" class="block text-sm font-bold text-blue-fitu-300">Name</label>
                <input
                  id="first_name"
                  v-model="pet.name"
                  type="text"
                  name="first_name"
                  autocomplete="given-name"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm sm:text-sm rounded-md h-10 focus:bg-white bg-blue-100 px-3 transition duration-500 ease-in-out ">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="kind" class="block text-sm font-bold text-gray-700">Kind</label>
                  <v-select
                    id="kind"
                    v-model="pet.kind"
                    name="kind"
                    :options="kinds.length ? kinds : []"
                    class="mt-1 focus:outline-none border border-blue-fitu-300 shadow-sm sm:text-sm rounded-md h-10 focus:bg-white bg-blue-100 px-2 transition duration-500 ease-in-out text-black appearance-none"
                    :reduce="option => option"
                    :clearable="false" >
                  </v-select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="name" class="block text-sm font-bold text-blue-fitu-300">Bread</label>
                <input
                  id="bread"
                  v-model="pet.bread"
                  type="text"
                  name="bread"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm sm:text-sm rounded-md h-10 focus:bg-white bg-blue-100 px-3 transition duration-500 ease-in-out ">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="name" class="block text-sm font-bold text-blue-fitu-300">Age</label>
                <input
                  id="age"
                  v-model="pet.age"
                  type="text"
                  name="age"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm sm:text-sm rounded-md h-10 focus:bg-white bg-blue-100 px-3 transition duration-500 ease-in-out ">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="name" class="block text-sm font-bold text-blue-fitu-300">Color</label>
                <input
                  id="color"
                  v-model="pet.color"
                  type="text"
                  name="color"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm sm:text-sm rounded-md h-10 focus:bg-white bg-blue-100 px-3 transition duration-500 ease-in-out ">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="kind" class="block text-sm font-bold text-gray-700">Gender</label>
                  <v-select
                    id="gender"
                    v-model="pet.gender"
                    name=gender
                    :options="genders.length ? genders : []"
                    class="mt-1 focus:outline-none border border-blue-fitu-300 shadow-sm sm:text-sm rounded-md h-10 focus:bg-white bg-blue-100 px-2 transition duration-500 ease-in-out text-black appearance-none"
                    :reduce="option => option"
                    :clearable="false" >
                  </v-select>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kinds: ["cat", "dog", "hamster", "bird", "fish", "turtle", "rabbit"],
      genders: ["male" , "female"],
      pet:{
        name: '',
        kind: '',
        bread: '',
        age: '',
        gender: '',
        color: '',
      }
    }
  },
  methods: {
    arrowToggle() {
    this.isToggled = !this.isToggled;
    }
  }
}
</script>
