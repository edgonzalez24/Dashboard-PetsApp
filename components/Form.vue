<template>
  <div class="mt-5 md:mt-0 w-full">
      <form @submit.prevent="submit">
        <div class="shadow-lg overflow-hidden sm:rounded-md">
          <div class="md:px-4 px-3 md:py-5 py-2 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-3">
              <div class="col-span-3">
                <label for="name" class="block text-sm font-bold text-blue-fitu-300">Name</label>
                <input
                  v-model="pet.name"
                  v-validate="'required'"
                  data-vv-as="Name"
                  type="text"
                  name="name"
                  autocomplete="given-name"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm text-sm rounded-md h-12 focus:bg-white bg-white-smoke-100 px-3 transition duration-500 ease-in-out ">
                  <span class="text-red-600 lg:text-right text-center mb-2 text-xs">{{ errors.first('name') }}</span>
              </div>

              <div class="col-span-3">
                <label for="kind" class="block text-sm font-bold text-gray-700">Kind</label>
                  <v-select
                    v-model="pet.kind"
                    name="kind"
                    v-validate="'required'"
                    data-vv-as="Kind"
                    :options="kinds.length ? kinds : []"
                    class="mt-1 focus:outline-none border border-blue-fitu-300 shadow-sm text-sm rounded-md h-12 focus:bg-white bg-white-smoke-100 px-2 transition duration-500 ease-in-out text-black appearance-none"
                    :reduce="option => option"
                    :clearable="false" >
                  </v-select>
                  <span class="text-red-600 lg:text-right text-center mb-2 text-xs">{{ errors.first('kind') }}</span>
              </div>

              <div class="col-span-3">
                <label for="bread" class="block text-sm font-bold text-blue-fitu-300">Breed</label>
                <input
                  v-model="pet.breed"
                  type="text"
                  data-vv-as="Breed"
                  v-validate="'required'"
                  name="breed"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm text-sm rounded-md h-12 focus:bg-white bg-white-smoke-100 px-3 transition duration-500 ease-in-out ">
                  <span class="text-red-600 lg:text-right text-center mb-2 text-xs">{{ errors.first('breed') }}</span>
              </div>

              <div class="col-span-3">
                <label for="name" class="block text-sm font-bold text-blue-fitu-300">Age</label>
                <input
                  v-model="pet.age"
                  type="text"
                  name="age"
                  data-vv-as="Age"
                  v-validate="'required'"
                  @keydown="onlyNumb"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm text-sm rounded-md h-12 focus:bg-white bg-white-smoke-100 px-3 transition duration-500 ease-in-out ">
                  <span class="text-red-600 lg:text-right text-center mb-2 text-xs">{{ errors.first('age') }}</span>
              </div>

              <div class="col-span-3">
                <label for="name" class="block text-sm font-bold text-blue-fitu-300">Color</label>
                <input
                  v-model="pet.color"
                  type="text"
                  name="color"
                  data-vv-as="Color"
                  v-validate="'required'"
                  class="mt-1 focus:outline-none border border-blue-fitu-300 block w-full shadow-sm text-sm rounded-md h-12 focus:bg-white bg-white-smoke-100 px-3 transition duration-500 ease-in-out ">
                  <span class="text-red-600 lg:text-right text-center mb-2 text-xs">{{ errors.first('color') }}</span>
              </div>

              <div class="col-span-3">
                <label for="kind" class="block text-sm font-bold text-gray-700">Gender</label>
                  <v-select
                    v-model="pet.gender"
                    name="gender"
                    v-validate="'required'"
                    :options="genders.length ? genders : []"
                    class="mt-1 focus:outline-none border border-blue-fitu-300 shadow-sm text-sm rounded-md h-12 focus:bg-white bg-white-smoke-100 px-2 transition duration-500 ease-in-out text-black appearance-none"
                    :reduce="option => option"
                    :clearable="false" >
                  </v-select>
                  <span class="text-red-600 lg:text-right text-center mb-2 text-xs">{{ errors.first('gender') }}</span>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base rounded-md text-white bg-blue-fitu-100  hover:bg-blue-fitu-200 focus:outline-none  transition duration-500 ease-in-out font-bold w-24 items-center">
              <svg
                v-if="loading"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Send
            </button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import { EventBus } from '@/plugins/EventBus';

export default {
  name:'Form',
  props: {
    petSelected: {
      immediate: false,
      default: () => ({}),
      type: Object,
    },
    edit: {
      immediate: true,
      default: false,
      type: Boolean,
    }
  },
  data() {
    return {
      kinds: ["cat", "dog", "hamster", "bird", "fish", "turtle", "rabbit"],
      genders: ["male" , "female"],
      pet:{
        name: '',
        kind: '',
        breed: '',
        age: '',
        gender: '',
        color: '',
      },
      loading: false,
    }
  },
  async mounted() {
    await this.valEdit();
  },
  methods: {
    async valEdit() {
      if(this.edit) {
        await this.getSelected(this.petSelected);
      }
    },
    getSelected (data) {
      this.pet = data;
    },
    arrowToggle() {
    this.isToggled = !this.isToggled;
    },
    async submit() {
      const isValid = await this.$validator.validateAll();
      if(isValid){
        if(this.edit) {
          await this.updatePet()
        } else {
          await this.createPet();
        }
      }
    },
    onlyNumb(e) {
      e = (e) ? e : window.event;
      let charCode = (e.which) ? e.which : e.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        e.preventDefault();;
      } else {666
        return true;
      }
    },
    async createPet(){
      this.loading = !this.loading;
      try {
      const {data} = await this.$axios.post('/api/services/addpet', {
        name: this.pet.name,
        kind: this.pet.kind,
        breed: this.pet.breed,
        age: Number(this.pet.age),
        gender: this.pet.gender,
        color: this.pet.color,
      });
      Swal.fire({
        title: 'Added!',
        text: 'Your register has been added.',
        type: 'success'
        });
      } catch (error) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        });
      } finally {
        this.loading = !this.loading;
        this.pet.name = '',
        this.pet.kind = '',
        this.pet.breed = '',
        this.pet.age = '',
        this.pet.gender = '',
        this.pet.color = '',
        this.$validator.reset();
      }
    },
    async updatePet() {
      this.loading = !this.loading;
      try {
      const {data} = await this.$axios.post(`/api/services/updatepet?id=${this.pet.id}`, {
        name: this.pet.name,
        kind: this.pet.kind,
        breed: this.pet.breed,
        age: Number(this.pet.age),
        gender: this.pet.gender,
        color: this.pet.color,
      });
      EventBus.$emit('hideModal');
      Swal.fire({
        title: 'Updated!',
        text: 'Your register has been updated.',
        type: 'success'
        });

      } catch (error) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        });
      } finally {
        this.loading = !this.loading;
        this.pet.name = '',
        this.pet.kind = '',
        this.pet.breed = '',
        this.pet.age = '',
        this.pet.gender = '',
        this.pet.color = '',
        this.$validator.reset();
      }
    }
  }
}
</script>
