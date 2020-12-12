<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container md:w-1/2">

          <div class="mx-auto container">
            <div class="w-full">
              <Form
                :petSelected="petSelected"
                @getPets="getPets"
                edit
              />
            </div>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
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
