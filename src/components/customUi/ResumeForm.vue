<template>
  <div class="w-full space-y-6">
    <n-box-form>
      <n-input id="firstName" v-model="resume.firstName" placeholder="First Name" />
      <n-input id="lastName" v-model="resume.lastName" placeholder="Last Name" />
      <n-input id="title" v-model="resume.title" placeholder="Un titre" />
      <n-input id="description" type="textarea" v-model="resume.summary" placeholder="En bref..." />
      <n-upload @change="handleImage" @delete="clearState('avatar')" :src="resume.avatar" />
      <n-input id="email" v-model="resume.email" placeholder="Email" />
      <n-input id="phone" v-model="resume.phone" placeholder="Téléphone" />
      <n-input id="address" v-model="resume.address" placeholder="Adresse" />
      <n-input id="more" v-model="resume.more" type="textarea" placeholder="Infos complémentaires" />
    </n-box-form>
    <context-form-list-item state-key="experience" title-key="title" />
    <context-form-list-item state-key="education" title-key="degree" />
    <context-form-list-item state-key="link" />
    <context-form-list-item state-key="skill" />
    <context-form-list-item state-key="hobby" />
  </div>
</template>

<script>
import NBoxForm from "../ui/NBoxForm.vue";
import NInput from "../ui/NInput.vue";
import NUpload from "../ui/NUpload.vue";
import ContextFormListItem from "./ContextFormListItem.vue";
import { resume, handleImage, clearState } from "../../store";

export default {
  name: "ResumeForm",
  components: { ContextFormListItem, NUpload, NInput, NBoxForm },
  setup() {
    return {
      resume,
      handleImage,
      clearState
    }
  }
}
</script>
