<template>
  <div class="ProjectCard card border-dark m-3">
    <div>
      <img :src="project.creator.picture" alt="profile-picture">
    </div>
    <div class="text-center fs-3">
      {{ project.title }}
    </div>
    <img :src="project.coverImg" :alt="coverImg">

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Project } from '../models/Project';
export default {
  props: { project: { type: Project, required: true } },
  setup() {
    return {
      account: computed(() => AppState.account)

    }
  }
};
</script>



<style lang="scss" scoped>
img {
  height: 30vh;
  object-fit: cover;
  object-position: center;
}
</style>