<template>
  <div>
    <img class="profile-picture p-2" :src="project.creator.picture" alt="">
    {{ project.creator.name }}

    <div class="text-center fs-4">
      {{ project.title }}
    </div>
    <img class="img" :src="project.coverImg" :alt="project.coverImg">

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
  height: 7vh;
  width: 7vh;
}

.img {
  overflow: hidden;
  height: 23vh;
  object-fit: cover;
  object-position: center;
}
</style>