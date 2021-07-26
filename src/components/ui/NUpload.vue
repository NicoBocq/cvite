<template>
  <label for="photo" class="block text-sm font-medium text-gray-800">
    Photo
  </label>
  <div class="mt-1 flex items-center">
    <img v-if="!!src" class="inline-block h-16 w-16 rounded-full shadow-sm" :src="src" alt="" :key="refreshId" />
    <n-icon v-else icon="user-circle" size="h-16 w-16" type="outline" color="text-gray-300" />
    <div class="ml-4 flex space-x-4">
      <div class="relative">
        <n-button :label="src ? 'Remplacer' : 'Ajouter'" icon="upload" />
        <input id="user-photo" name="user-photo" type="file" @change="onChange" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md" accept="image/*" />
      </div>
      <n-button icon="trash" label="Supprimer" @click="onDelete" />
    </div>
  </div>
</template>

<script>
  import NButton from "./NButton.vue";
  import NIcon from "./NIcon.vue";
  import {ref, watch} from "vue"
  export default {
    name: 'NUpload',
    emits: ['delete', 'change'],
    components: { NIcon, NButton },
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
      const refreshId = ref(0)

      watch(() => src, (val) => {
        refreshId.value += 1
      })

      return {
        onDelete,
        onChange,
        refreshId
      }
    }
  }
</script>
