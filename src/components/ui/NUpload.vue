<template>
  <h3 class="block text-xl font-bold">
    {{ t('resume.section.title.photo') }}
  </h3>
  <div class="mt-1 flex items-center space-x-2">
    <img
      v-if="!!image"
      class="inline-block h-16 w-16 shadow-sm rounded-full"
      :src="image"
      alt=""
    >
    <n-icon
      v-else
      icon="user-circle-outline"
      size="h-12 w-12"
      color="text-gray-300"
    />
    <div class="flex space-x-2">
      <n-button
        icon="upload"
        small
        :label="!!image ? t('ui.edit') : t('ui.add')"
        @click="setIsOpen(true)"
      />
      <n-button
        v-if="!!image"
        icon="trash-outline"
        small
        theme="transparent"
        @click="deleteImage"
      />
    </div>
  </div>
  <n-dialog v-model:open="open">
    <template #body>
      <div
        class="flex justify-center items-center p-6"
        :class="!tempImage && 'h-72 border border-dashed rounded-lg border-gray-200'"
      >
        <div class="relative">
          <n-button
            :label="tempImage ? t('ui.replace') : t('ui.add')"
            icon="upload"
            small
          />
          <input
            id="user-photo"
            name="user-photo"
            type="file"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
            accept="image/*"
            @change="uploadImage"
          >
        </div>
      </div>
      <cropper
        v-if="!!tempImage"
        ref="cropperRef"
        class="h-60 w-full"
        :src="tempImage"
        :stencil-component="$options.components.Stencil"
      />
    </template>
    <template #footer>
      <n-button
        :label="t('ui.close')"
        theme="transparent"
        icon="x"
        small
        @click="abort"
      />
      <n-button
        :label="t('ui.save')"
        icon="check"
        small
        @click="save"
      />
    </template>
  </n-dialog>
</template>

<script>
import NButton from './NButton.vue'
import NIcon from './NIcon.vue'
import { ref, watchEffect } from 'vue'
import NDialog from './NDialog.vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { useModelWrapper } from '../../composables/modelWrapper'
import { useI18n } from 'vue-i18n'
import Stencil from './Stencil.vue'

export default {
  name: 'NUpload',
  components: { NDialog, NIcon, NButton, Cropper, Stencil },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const image = useModelWrapper(props, emit)
    const tempImage = ref(null)
    const cropperRef = ref(null)
    const { t } = useI18n()

    const deleteImage = () => {
      image.value = null
      tempImage.value = null
    }

    const uploadImage = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          tempImage.value = reader.result
        },
        false
      )
      reader.readAsDataURL(file)
    }

    const resizeImage = () => {
      const { canvas } = cropperRef.value.getResult()
      image.value = canvas.toDataURL()
    }

    const open = ref(false)
    const setIsOpen = (value) => {
      open.value = value
    }

    const save = () => {
      setIsOpen(false)
      resizeImage()
    }

    const abort = () => {
      setIsOpen(false)
      deleteImage()
    }

    watchEffect(() => {
      if (!!image.value && !tempImage.value) tempImage.value = image.value
    })

    return {
      deleteImage,
      image,
      tempImage,
      open,
      setIsOpen,
      save,
      abort,
      uploadImage,
      resizeImage,
      cropperRef,
      t
    }
  }
}
</script>
