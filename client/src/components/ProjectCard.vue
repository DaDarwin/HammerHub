<template>
  <div class=" project-card  mb-2 selectable ">

    <img class="profile-picture p-2 image-fluid" :src="project.creator.picture" alt="">

    {{ project.creator.name }}

    <div class=" fs-4 ms-2 mb-2">
      {{ project.title }}
    </div>
    <img class="image-fluid img" :src="project.coverImg" :alt="project.coverImg">

  </div>
</template>


<script>

import { Project } from '../models/Project';





export default {
  props: { project: { type: Project, required: true } },
  setup() {
    return {


    };
  },

};
</script>



<style lang="scss" scoped>
.profile-picture {
  border-radius: 50%;
  max-height: 75px;
  max-width: 75px;
}

.project-card {
  border-radius: 15px;
  overflow: hidden;
  border: solid .1em;
  border-color: #214E34;

}

.img {
  min-width: 100%;
  max-height: 30vh;
  object-fit: cover;
  object-position: center;
}
</style>