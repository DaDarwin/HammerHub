<template>
  <!-- TODO change CSS properties to look good on mobile- v-if's? -->

  <div class="container-fluid">
    <div class="row text-end bg-top p-2">


      <div class="col-7 d-flex justify-content-start">
        <img class=" hammer mb-2 img-fluid" src="../assets/img/hammer.png" alt="cartoon hammer">
      </div>
      <div class="col-5 d-flex justify-content-end">

        <Login />
      </div>

      <!-- TODO on desktop make these closer together? More center to page? -->
    </div>
    <div class="container-fluid">
      <div class="row bg align-items-center text-center">
        <div class="col-12">
          <h1 class="radley mb-4">
            Welcome to HammerHub
          </h1>
          <p class="fs-3 carlito">
            A place for all your construction projects to be displayed <br> so the right people can find you for hire.
          </p>
        </div>

        <div class="col-12">
          <h1 class="text-center radley-title">
            What is your purpose?
          </h1>
        </div>
        <div class="d-flex justify-content-center">
          <!-- REVIEW why are these not adjusting to col-12 on mobile? -->
          <RouterLink class="col-12 col-md-4 selectable card  mx-3 mb-2" :to="{ name: 'Profile Page' }">
            <div class="col-12 col-md-4 selectable card  mx-3 mb-2">
              <h2 class="text-center radley-card mt-5 mb-0">I'm a worker</h2>
              <hr class="m-3">
              <p class="m-3 text-center carlito">Someone looking to make a profile of <br> projects for others to see</p>
            </div>
          </RouterLink>

          <RouterLink :to="{ name: 'Search Page' }">
            <div class="col-12 col-md-4 selectable card mx-3 mb-2">
              <h2 class="text-center radley-card mt-5 mb-0">I'm a looker</h2>
              <hr class="m-3">
              <p class="m-3 text-center carlito">Someone looking for projects that <br>match my desire for hire</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';
import Login from '../components/Login.vue';
import { AppState } from '../AppState';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter()
    watch(() => AppState.account, () => {
      router.push({ name: 'Profile Page' })
    })
    return {

    };
  },
  components: { Login }
}
</script>

<style scoped lang="scss">
.bg-top {
  height: 5vh;
  // max-width: 100vw;
  background-color: #F4FDFF;
}

.bg {
  height: 95vh;
  // max-width: 100vw;
  background-color: #F4FDFF;
}

.radley {
  font-family: 'Radley', serif;
  font-size: 60px;
  color: #214E34
}

.radley-card {
  font-family: 'Radley', serif;
  font-size: 40px;
  color: #214E34
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 30px;
  color: #214E34
}

.carlito {
  font-family: 'Carlito', sans-serif;
  color: #214E34
}

.hammer {
  height: 100px;
  width: 100px
}

.card {
  min-height: 250px;
  max-height: 250px;
  min-width: 350px;
  max-width: 350px;
  border-radius: 10%;
  border: none;
  background-color: #f0efec;
}
</style>
