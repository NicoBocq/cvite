<template>
  <transition
    name="fade"
    appear
  >
    <div class="fixed inset-0 w-screen h-screen bg-gradient-to-b from-brand-500 to-brand-800 bg-opacity-75 z-10 overflow-hidden">
      <div class="relative top-1/2 left-1/2 right-1/2 z-20">
        <n-icon
          icon="refresh"
          class="animate-spin text-white"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
import NIcon from './NIcon.vue'
</script>
