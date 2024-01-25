<template>
  <!-- TODO change CSS properties to look good on mobile- v-if's? -->
  <!-- TODO add hammer to home page -->
  <div class="container-fluid">
    <div class="row text-end bg-top p-2">
      <div class="d-flex">
        <div class="col-11">
          <img class=" justify-content-center img-fluid" src="client / src / assets / img / hammer.png"
            alt="cartoon hammer">
        </div>
        <div class="col-1">
          <Login />
        </div>

      </div>

    </div>
    <div class="row bg align-items-center text-center">
      <div class="col-12">
        <h1 class="radley mb-4">
          Welcome to HammerHub
        </h1>
        <p class="fs-3 carlito">
          A place for all your construction projects to be displayed <br> so the right people can find you for hire.
        </p>
        <Login />
        <!-- TODO see if we can make the login and the sign up different components that do different things  -->
      </div>

    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue';

export default {
  setup() {
    return {};
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
  font-size: 80px;
  color: #214E34
}

.carlito {
  font-family: 'Carlito', sans-serif;
  color: #214E34
}
</style>
