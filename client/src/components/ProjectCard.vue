<template>
  <div class="ProjectCard card border-dark m-3">
    <!-- <div>
      <img :src="project.creator.picture" alt="profile-picture">
    </div> -->
    <img :src="project.coverImg" :alt="coverImg">
    <span class="fs-3 text-center">
      {{ project.title }}
    </span>
      <div class="p-3 d-flex justify-content-between">
        <p>{{project.description}}</p>

        <ProfileCard :profile="project.creator"/>
      </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Project } from '../models/Project';
import ProfileCard from './ProfileCard.vue';
import { Account } from '../models/Account';
export default {
    props: { project: { type: Project, required: true } },
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { ProfileCard }
};
</script>



<style lang="scss" scoped>
img {
  height: 30vh;
  object-fit: cover;
  object-position: center;
}
</style>