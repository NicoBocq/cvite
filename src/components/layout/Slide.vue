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
          <div class="w-screen max-w-3xl">
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
              <div class="px-4 py-3 space-y-8">
              <n-box-form>
                <n-input id="firstName" v-model="resume.firstName" placeholder="First Name" />
                <n-input id="lastName" v-model="resume.lastName" placeholder="Last Name" />
                <n-input id="description" type="textarea" v-model="resume.summary" />
              </n-box-form>
              <n-box-form>
                <n-disclosure>
                  <template #title>
                    Links
                  </template>
                  <template #body>
                    <div v-for="(link, idx) in resume.links" :key="idx" class="flex flex-col space-y-1">
                      <div>
                        {{ link.label }}
                      </div>
                      <div class="flex flex-col space-y-1">
                        <n-input :id="'link-label-' + idx" v-model="link.label" placeholder="Label" />
                        <n-input :id="'link-url-' + idx" v-model="link.url" placeholder="URL" />
                      </div>
                    </div>
                    <n-button @click="addItem('links')" icon="plus" small>
                      Ajouter un nouveau lien
                    </n-button>
                  </template>
                </n-disclosure>
              </n-box-form>
                <n-box-form>
                  <n-disclosure>
                    <template #title>
                      Experiences
                    </template>
                    <template #body>
                      <div
                        class="space-y-4"
                      >
                        <transition-group name="list" tag="div" class="space-y-4">
                          <div
                            v-for="(experience, idx) in sortedList('experiences')"
                            :key="experience.id"
                            class="flex flex-col space-y-3 cursor-move focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            draggable="true"
                            @dragenter.prevent
                            @dragover.prevent
                            @dragstart="startDrag($event, experience)"
                            @drop="onDrop($event, experience)"
                          >
                             <div class="flex space-x-2 justify-between items-center">
                               <div class="uppercase font-semibold">
                                 {{ experience.order }} - {{ experience.title }}
                               </div>
                               <n-button @click="removeItem(idx, 'experiences')" small icon="trash" />
                             </div>
                            <div class="flex flex-col space-y-2">
                              <n-input :id="'title-' + idx" v-model="experience.title" placeholder="Title" />
                              <n-input :id="'year-' + idx" v-model="experience.year" placeholder="Begin Date " />
                              <n-input :id="'company-' + idx" v-model="experience.company" placeholder="Company" />
                              <n-input type="textarea" :id="'description-' + idx" v-model="experience.description" />
                            </div>
                          </div>
                        </transition-group>
                        <n-button @click="addItem('experiences')">
                          Ajouter une nouvelle expérience professionnelle
                        </n-button>
                      </div>
                    </template>
                  </n-disclosure>
                </n-box-form>
                <n-box-form>
                  <n-disclosure>
                    <template #title>
                      Education
                    </template>
                    <template #body>
                      <div v-for="(item, idx) in sortedList('education')" :key="item.id" class="flex flex-col space-y-1">
                        <div class="flex justify-between items-center space-x-2">
                          <span>{{ item.order }} - {{ item.degree }}</span>
                          <n-button small icon="trash" @click="removeItem(idx, 'education')"/>
                        </div>
                        <div class="flex flex-col space-y-1">
                          <n-input :id="'item-degree-' + idx" v-model="item.degree" placeholder="degree" />
                          <n-input :id="'item-school-' + idx" v-model="item.school" placeholder="school" />
                        </div>
                      </div>
                      <n-button @click="addItem('education')" icon="plus">Ajouter</n-button>
                    </template>
                  </n-disclosure>
                </n-box-form>
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
import {
  isSlideOpen,
  toggleSlide,
  resume,
  addItem,
  removeItem,
  sortedList,
  startDrag,
  onDrop
} from '/src/store'
import NButton from "../ui/NButton.vue";
import NDisclosure from "../ui/NDisclosure.vue";
import NBoxForm from "../ui/NBoxForm.vue";

export default {
  name: "Slide",
  components: {
    NBoxForm,
    NDisclosure,
    NButton,
    NInput
  },
  setup() {
    return {
      isSlideOpen,
      toggleSlide,
      resume,
      addItem,
      removeItem,
      sortedList,
      startDrag,
      onDrop
    }
  }
}
</script>
