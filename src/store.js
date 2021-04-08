
import { reactive, computed } from 'vue'

const state = reactive({
  isSlideOpen: false
})

const isSlideOpen = computed(() => state.isSlideOpen)

const toggleSlide = () => {
  state.isSlideOpen = !state.isSlideOpen
}

export {
  isSlideOpen,
  toggleSlide
}
