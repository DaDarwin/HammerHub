<template>
  <div class="container-fluid">


    <section class="row m-2">

      <div class="card rounded mb-2 col-12">

        <div class="col-12 col-md-4  my-2 rounded-pill">
          
          <form @submit.prevent="getSearch()" class="d-flex border border-dark rounded-pill overflow-hidden p-0 searchbar">
            
            <input class="w-90 form-control border-0 rounded-0 p-0 searchbar ps-1" v-model="query.search" type="text" placeholder="Search">
            
            <button class="btn btn-outline-dark border-top-0 border-bottom-0 border-end-0 rounded-0 w-10"><i class="mdi mdi-magnify"></i></button>
            
          </form>
        </div>
      </div>

      <div v-if="projects.length" class="row">

        <div v-for="project in profile.projects" class="col-12 col-md-4">
              
          <ProjectCard :project="project"/>
          
        </div>

      </div>

      <div v-if="!projects.length" v-for="profile in profiles" class="p-0">
        
        <div v-if="profile.projects.length" class="col-12 mb-4 p-2 card rounded">
          
          <ProfileCard :profile="profile"/>
          
          <div class="row">
            
            <div v-for="project in profile.projects" class="col-12 col-md-4">
              
              <ProjectCard :project="project"/>
              
            </div>
            
          </div>
        
        </div>

      </div>

    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { searchService } from '../services/SearchService.js'
import ProjectCard from '../components/ProjectCard.vue';
import ProfileCard from '../components/ProfileCard.vue'
import Pop from '../utils/Pop';
export default {
    setup() {
        onMounted(() => {
            getProfiles();
        });
        const query = ref({})
        async function getProfiles() {
            try {
                await searchService.getProfiles();
            }
            catch (error) {
            Pop.error(error)

            }

          }
          return {
            profiles: computed(() => AppState.profiles),
            projects: computed(()=> AppState.projects),
            query,

            async getSearch(){
              try {
                await searchService.getSearch(query.value.search)
              } catch (error) {
                Pop.error(error)
              }
            }
        };
    },
    components: { ProjectCard, ProfileCard}
};
</script>


<style lang="scss" scoped>
.hammer {
  height: 100px;
  width: 100px
}

.bg {
  height: 100vh;
  background-color: #F4FDFF;
}

.card{
  background-color: #F4FDFF;
}

.w-90{
  width: 90%;
}

.w-10{
  width: 10%;
}

.searchbar :focus{
  box-shadow: none !important;
}

</style>