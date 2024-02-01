<template>
  <div class="ProjectCard card border-dark m-3">
    <div class="text-center fs-3">
      {{ project.title }}
    </div>
    <img :src="project.coverImg" :alt="coverImg">
    <p class="p-2 text-center">{{project.description}}</p>
    <slot>
      
    </slot>
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
    }
  }
};
</script>



<style lang="scss" scoped>

  img{
    height: 30vh;
    object-fit: cover;
    object-position: center;
  }

</style>