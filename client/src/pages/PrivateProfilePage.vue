<template>
  <div class="PrivateProfilePage container-fluid bg">
    <section class="row">
      <div class="col-7 d-flex justify-content-start">
        <RouterLink :to="{ name: 'Home' }">
          <img class=" hammer mb-2 img-fluid" src="../assets/img/hammer.png" alt="cartoon hammer">
        </RouterLink>
      </div>
      <div class="col-5 d-flex justify-content-end">

        <Login />
      </div>
    </section>


    <section class="row">
      <div class="col-12 m-3 radley-title  ">
        Create a Project
      </div>

      <form class="form-control" @submit.prevent="createProject()">
        <label for="car-engine">What trade does this project fall under?</label>
        <select v-model="projectData.trade" name="car-engine" id="car-engine" class="form-control" required>

          <option value="" disabled selected>please select a trade</option>
          <option class="" v-for="tradeType in tradeTypes" :value="tradeType">{{ tradeType }}</option>
        </select>
        <div>
          <label for="title">Title</label>
          <input v-model="projectData.title" class="w-100 form-control" type="text" required maxlength="30">
        </div>

        <div>
          <label for="coverImg">Cover Image</label>
          <input v-model="projectData.coverImg" class="w-100 form-control" type="text" required maxlength="500">
        </div>
        <div>
          <label for="description">Describe your project</label>
          <textarea v-model="projectData.description" name="description" id="description" class="w-100 form-control"
            cols="30" rows="10" minlength="20" maxlength="1000"></textarea>
        </div>
        <div class="text-end m-2">
          <button class="btn btn-light border-dark" type="submit">Create</button>
        </div>
      </form>
    </section>

    <!-- projects go here -->
    <div class="col-12 m-3 radley-title">
      My Projects
    </div>
    <div class="row">
      <div class="col-12 col-md-4 " v-for="project in projects">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch } from 'vue';
import Login from '../components/Login.vue';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
import { projectsService } from '../services/ProjectsService'
import ProjectCard from '../components/ProjectCard.vue'
import { RouterLink } from 'vue-router';


export default {
  setup() {
    async function getAccountProjects() {
      try {
        await projectsService.getAccountProjects()
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getAccountProjects()
    })
    const projectData = ref({ trade: '' })


    async function resetProjectForm() {
      projectData.value = { trade: '' }
    }
    return {
      getAccountProjects,
      tradeTypes: ['planning', 'foundation', 'framing', 'electrical', 'plumbing', 'siding', 'roofing', 'drywall', 'landscaping', 'concrete work', 'tile work', 'cabinetry', 'HVAC', 'windows', 'other'],
      projectData,
      resetProjectForm,
      projects: computed(() => AppState.projects),

      async createProject() {
        try {
          console.log('trying to create project', projectData.value)
          await projectsService.createProject(projectData.value)

          Pop.success('project created')
          resetProjectForm()
          console.log('creating project from page')
        } catch (error) {
          Pop.error(error)
        }
      }


    }
  },
  components: { Login, ProjectCard }
};
</script>


<style lang="scss" scoped>
.bg {
  // height: 100vh;
  background-color: #F4FDFF;
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 40px;
  color: #214E34
}

.hammer {
  height: 100px;
  width: 100px
}
</style>