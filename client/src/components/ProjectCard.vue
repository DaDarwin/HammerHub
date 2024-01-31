<template>
  <div class="ProjectCard card border-dark m-3">
    <div>
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
      projects: computed(() => AppState.accountProjects)
    }
  }
};
</script>


<style lang="scss" scoped></style>