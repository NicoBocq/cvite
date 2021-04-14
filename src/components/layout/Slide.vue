<template>
  <section class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" v-if="isSlideOpen">
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay, show/hide based on slide-over state. -->
      <div class="absolute inset-0 bg-gray-800 bg-opacity-25 cursor-pointer" aria-hidden="true" @click="toggleSlide"></div>

      <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
        <transition
          enter-active-class="transition ease-in-out duration-500 sm:duration-700"
          enter-from-class="transform translate-x-full"
          enter-to-class="transform translate-x-0"
          leave-active-class="transition ease-in-out duration-500 sm:duration-700"
          leave-from-class="transform translate-x-0"
          leave-to-class="transform translate-x-full"
        >
          <div class="w-screen max-w-md">
            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div class="p-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                    Team
                  </h2>
                  <div class="ml-3 h-7 flex items-center">
                    <button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500" @click="toggleSlide">
                      <span class="sr-only">Close panel</span>
                      <!-- Heroicon name: outline/x -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-200">
                <div class="px-6">
                  <nav class="-mb-px flex space-x-6">
                    <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                    <a href="#" class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                      Content
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Design</a>

                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Offline</a>
                  </nav>
                </div>
              </div>
              <div class="flex flex-col space-y-2 p-2">
                <n-input id="firstName" v-model="identity.firstName" placeholder="First Name" />
                <n-input id="lastName" v-model="identity.lastName" placeholder="Last Name" />
                <n-input id="description" type="textarea" v-model="identity.description" />
                <n-input :id="'experience-' + idx" v-for="(experience, idx) in identity.experiences" :key="idx" v-model="identity.experiences[idx].title" />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import NInput from "../ui/NInput.vue";
import { isSlideOpen, toggleSlide, identity } from '/src/store'

export default {
  name: "Slide",
  components: {
    NInput
  },
  setup() {
    return {
      isSlideOpen,
      toggleSlide,
      identity
    }
  }
}
</script>
