<template>
  <div class="container-fluid bg">
    <div class="row   p-2">


      <div class="col-7 d-flex justify-content-start">
        <img class=" hammer mb-2 img-fluid" src="../assets/img/hammer.png" alt="cartoon hammer">
      </div>
      <div class="col-5 d-flex justify-content-end">

        <Login />
      </div>

    </div>
    <!-- Top text -->
    <section class="row ">
      <div class="col-12">
        <h1 class="radley mb-4 text-center">
          Welcome to HammerHub
        </h1>
        <p class="fs-3 text-center carlito">
          A place for all your construction projects to be displayed so the right people can find you for hire.
        </p>
      </div>
    </section>
    <section class="row text-center p-3">
      <div class="col-12">
        <h1 class="radley-title">
          What is your purpose?
        </h1>
      </div>
    </section>
    <section class="row justify-content-center ">

      <RouterLink :to="{ name: 'Purpose Page' }" class="d-flex justify-content-center col-12 col-md-4 mb-2 ">
        <div class=" selectable card ">
          <h2 class="text-center radley-card mt-5 ">I'm a worker</h2>
          <hr class="m-3 green">
          <p class=" text-center carlito">Someone looking to make a profile of <br> projects for others to see</p>
        </div>
      </RouterLink>

      <RouterLink :to="{ name: 'Search Page' }" class="col-12 col-md-4 d-flex justify-content-center mb-2">
        <div class=" selectable card  ">
          <h2 class="text-center radley-card mt-5 ">I'm a looker</h2>
          <hr class="m-3 green">
          <p class=" text-center carlito">Someone looking for projects that <br>match my desire for hire</p>
        </div>
      </RouterLink>

    </section>
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
      router.push({ name: 'Purpose Page' })
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
  background-color: #F4FDFF;
}

.bg {
  height: 100vh;
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

.green {
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
