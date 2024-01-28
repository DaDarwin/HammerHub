<template>
  <div class="ProjectCard">

    this is the project card
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Project } from '../models/Project';
export default {
  props: { project: { type: Project, required: true } },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped></style>