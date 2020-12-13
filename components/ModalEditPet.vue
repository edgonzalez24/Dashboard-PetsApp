<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container lg:w-6/12 sm:w-4/5 w-11/12">
          <div class="mx-auto container">
            <div class="w-full">
              <h4 class="font-bold text-2xl text-blue-fitu-300 mb-2">Update Pet</h4>
              <Form
                :petSelected="petSelected"
                edit
              />
            </div>
          </div>
          <div class="modal-footer flex items-end h-16 justify-end">
            <slot name="footer">
              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none  transition duration-500 ease-in-out font-bold w-24" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Form from '@/components/Form';

export default {
  name:'ModalEditPet',
  components: {
    Form,
  },
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
}
</script>
