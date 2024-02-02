<template>
  <div class="container-fluid">

      <div class="row m-2">



      </div>




      <div class="bg-secondary rounded mb-2 mx-2 p-1 row border border-dark">

        <div class="col-12 col-md-8 d-flex justify-content-between">

          <form class="row justify-content-center rounded border border-dark">

            <span v-for="worktype in worktypes" class="col-3 col-md-2 m-1">

              <button class="btn btn-outline-primary border-2" :id="worktype" @click="this.applyFilter(worktype)">{{worktype}}</button>

            </span>
            
          </form>
        </div>

        <div class="col-12 col-md-4  my-2 rounded-pill">
          
          <form @submit.prevent="getSearch()" class="d-flex border border-dark rounded-pill overflow-hidden p-0 searchbar bg-white">
            
            <input class="w-90 form-control border-0 rounded-0 p-0 searchbar ps-1" v-model="query.search" type="text" placeholder="Search">
            
            <button class="btn btn-outline-dark border-top-0 border-bottom-0 border-end-0 rounded-0 w-10 bg-primary magnify"><i class="mdi mdi-magnify text-light"></i></button>
            
          </form>
        </div>

      </div>

      <div v-if="projects.length" class="row mx-2">

        <div v-for="project in projects" class="col-12 col-md-4">
              
          <ProjectCard :project="project" :key="project.id"/>            
                      
        </div>

      </div>




    </div>
  </template>
  
  
  <script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch, watchEffect } from 'vue';
import { searchService } from '../services/SearchService.js'
import ProjectCard from '../components/ProjectCard.vue';
import ProfileCard from '../components/ProfileCard.vue'
import Pop from '../utils/Pop';
export default {
  setup() {
    onMounted(() => {
      getProfiles();
    });
    const filter = ref([])
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
            filter,
            projects: computed(()=> {
              if(filter.value.length){
                return AppState.projects.filter(project => filter.value.includes(project.trade))
              }
              else return AppState.projects
            }),
            query,
            worktypes:['planning', 'foundation', 'framing', 'electrical', 'plumbing', 'siding', 'roofing', 'drywall', 'landscaping', 'concrete work', 'tile work', 'cabinetry', 'HVAC', 'windows', 'other'],

            async getSearch(){
              try {
                await searchService.getSearch(query.value.search)
              } catch (error) {
                Pop.error(error)
              }
            },
            applyFilter(type){
              const index = this.filter.findIndex(string=> string == type)
              if(index == -1){
                this.filter.push(type)
                computed()
              }
              else this.filter.splice(index, 1)
              
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
  width: 85%;
}

.w-10{
  width: 15%;
}

.searchbar :focus{
  box-shadow: none !important;
}

.magnify:hover{
  i{
    text-shadow: 5px, #F4FDFF !important;
    color: black !important;
  }
}

</style>