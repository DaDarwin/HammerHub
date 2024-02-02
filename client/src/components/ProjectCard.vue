<template>
  <div class="row border border-primary m-3 rounded bg-primary text-light p-1">
    <!-- <div>
      <img :src="project.creator.picture" alt="profile-picture">
    </div> -->
    <div class="p-1 d-flex justify-content-between">
      <ProfileCard class="" :profile="project.creator"/>
      
      <h1 class="fs-2 text-center pt-3 pe-4">
        {{ project.title }}
      </h1>
    </div>
    <img class="p-0 rounded" :src="project.coverImg" alt="coverImg">

  </div>
</template>


<script>

import { Project } from '../models/Project';
import ProfileCard from './ProfileCard.vue';
import { Account } from '../models/Account';
export default {
    props: { project: { type: Project, required: true } },
    setup() {
        return {
        };
    },
    components: { ProfileCard }
};
</script>



<style lang="scss" scoped>




img {
  max-height: 30vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>