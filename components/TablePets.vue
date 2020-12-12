<template>
  <div class="flex flex-col">
    <div
      v-if="loading"
    >
      <Loading />
    </div>
    <div
      v-else
      class="-my-2 overflow-x-auto"
    >
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
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.id}}
                </td>
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-gray-500">
                  {{pet.name}}
                </td>
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.kind}}
                </td>
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div
                    :style="{background:pet.color}"
                    class="rounded-full h-4 w-4"/>
                </td>
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.breed}}
                </td>
                <td class="md:px-6 px-2 whitespace-nowrap text-sm text-gray-500">
                  {{pet.gender}}
                </td>
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{pet.age}}
                </td>
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{customFormatter(pet.created_at)}}
                </td>
                <td class="md:px-6 px-2 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-between">
                  <div class="cursor-pointer" @click="edit(pet)">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" class="h-5 w-5 fill-current text-black hover:text-blue-fitu-200 transition duration-500 ease-in-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
                  </div>
                  <div @click="confirmDelete(pet.id)" class="cursor-pointer">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="h-5 w-5 fill-current text-black hover:text-red-700 transition duration-500 ease-in-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ModalEditPet
          v-if="showModal"
          @close="showModal = false"
          :petSelected="petSelected"
          edit
        />
      </div>
    </div>
  </div>
</template>
<script>
import Loading from '@/components/Loading';
import Swal from 'sweetalert2';
import ModalEditPet from '@/components/ModalEditPet'
import { EventBus } from '@/plugins/EventBus';

export default {
  name: 'TablePets',
  components: {
    Loading,
    ModalEditPet,
  },
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
  },
  data:() => ({
    showModal: false,
    petSelected: {},
  }),
  mounted() {
    EventBus.$on('hideModal', () => {
        this.showModal = !this.showModal;
        this.$emit('getPets');
    });
  },
  methods: {
    edit(pet) {
      this.showModal = !this.showModal;
      this.petSelected = pet;
    },
    confirmDelete(id) {
      Swal.fire({
        text: 'Do you want to delete this pet?',
        type: "question",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#006ecd',
      }).then((result) => {
        if (result.value) {
          this.deletePet(id);
        }
      })
    },
    async deletePet(id){
      try {
        await this.$axios.post(`/api/services/deletepet` , {
          id
        })
        Swal.fire(
          'Deleted!',
          'Your register has been deleted.',
          'success'
          )
          this.$emit('getPets')
        } catch (error) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
          console.log(error)
        }
    },
    customFormatter(date){
      return this.$moment(date).format('lll');
    }
  }
}
</script>
