<template>
  <div class="print-container" id="print">
    <Summary print />
  </div>
</template>

<script>
import { printToPdf } from "../../pdf";
import Summary from "../layout/Summary.vue";
import { useRouter } from 'vue-router';
import {onMounted} from "vue";
export default {
  name: "Export",
  components: {Summary},
  setup() {
    const router = useRouter();

    onMounted(async () => {
      await printToPdf()
      await router.push({ name: 'Main' })
    })
  }
}
</script>
