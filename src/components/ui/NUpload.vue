<template>
  <label for="photo" class="block text-sm font-medium text-blue-gray-900">
    Photo
  </label>
  <div class="mt-1 flex items-center">
    <img v-if="!!image" class="inline-block h-12 w-12 rounded-full" :src="image" alt="" />
    <n-icon v-else icon="user-circle" type="outline" />
    <div class="ml-4 flex space-x-4">
      <div class="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
        <label for="user-photo" class="relative text-sm font-medium text-blue-gray-900 pointer-events-none">
          <span>Change</span>
          <span class="sr-only"> user photo</span>
        </label>
        <input @change="onChange" id="user-photo" name="user-photo" type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md" accept="image/*" />
      </div>
      <n-button icon="trash" label="Supprimer" @click="onDelete" />
    </div>
  </div>
</template>

<script>
  import NButton from "./NButton.vue";
  import NIcon from "./NIcon.vue";

  import { computed } from "vue"
  export default {
    name: 'NUpload',
    emits: ['delete', 'change'],
    components: {NIcon, NButton },
    props: {
      src: {
        type: String
      }
    },
    setup({ src }, { emit }) {
      const onChange = (e) => {
        emit('change', e)
      }
      const onDelete = () => {
        emit('delete')
      }
      const image = computed(() => {
        return src
      })

      return {
        onDelete,
        onChange,
        image
      }
    }
  }
</script>
