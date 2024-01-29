<template>
  <div class="PrivateProfilePage container-fluid bg">
    <section class="row">
      <div class="pt-2 col-12 d-flex justify-content-end">

        <Login />
      </div>
    </section>
    <section class="row">
      <div class="col-12 m-3 radley-title text-center ">
        Create a Trade
      </div>
      <div class="col-12">
        <form class="form-control">
          <label for="trade">What are your trades?</label>
          <select v-model="tradeData.trade" name="trade" id="trade" class="form-control" required>
            <option value="" selected disabled>please select a trade</option>
            <option class="" v-for="trade in tradeType" :value="trade">{{ trade }}</option>
          </select>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Yes
            </label>
          </div>
        </form>
      </div>
    </section>
    <section class="row">
      <div class="col-12 m-3 radley-title text-center ">
        Create a Project
      </div>
      <form class="form-control" @submit.prevent="createProject()">
        <div>
          <label for="">What is the trade?</label>
          v-model="TradeData.tradeId"
          :value='tradeId'
          v-for="trade in accountTrades" -- add to appstate
          option: {trade.trade}
        </div>
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
    <!-- populate projects here -->
    <!-- <ProjectCard :project="project" /> -->

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

export default {
  setup() {
    const projectData = ref({})
    const tradeData = ref({ trade: '' })
    async function resetTradeForm() {
      tradeData.value = { trade: '' }
    }
    async function resetProjectForm() {
      projectData.value = ''
    }
    return {
      tradeType: ['planning', 'foundation', 'framing', 'electrical', 'plumbing', 'siding', 'roofing', 'drywall', 'landscaping', 'concrete work', 'tile work', 'cabinetry', 'HVAC', 'windows', 'other'],
      projectData,
      tradeData,
      resetProjectForm,
      resetTradeForm,
      projects: computed(() => AppState.projects),
      trades: computed(() => AppState.trades),
      async createTrade() {
        try {
          await tradeService.createTrade(tradeData.value)
        } catch (error) {
          Pop.error(error)
        }
      },

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
  height: 100vh;
  background-color: #F4FDFF;
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 40px;
  color: #214E34
}
</style>