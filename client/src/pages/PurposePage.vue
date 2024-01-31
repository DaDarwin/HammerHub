<template>
  <div class="PurposePage container-fluid bg ">
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
    <div class="row py-4 align-items-center ">
      <div class="col-12 ">
        <h1 class=" text-center radley-title">
          What would you like to get done today?
        </h1>
      </div>
    </div>
    <section class="row bg-bottom justify-content-center ">

      <RouterLink class="col-12 col-md-4  " :to="{ name: 'Business Page' }">
        <div class="selectable card mb-2">
          <h2 class="text-center radley-card mt-3 ">Learn about business</h2>
          <hr class="m-3 green">
          <p class="m-3 text-center carlito">Learn the steps you need to take to start and keep a successful business
          </p>
        </div>
      </RouterLink>

      <RouterLink class="col-12 col-md-4 justify-content-center d-flex " :to="{ name: 'Private Profile Page' }">
        <div class="selectable card mb-2">
          <h2 class="text-center radley-card mt-5">Edit my profile</h2>
          <hr class="m-3 green">
          <p class="m-2 text-center carlito">Add to your profile description, link your social media profiles and add
            your projects</p>
        </div>
      </RouterLink>
    </section>


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { accountService } from '../services/AccountService';
import Login from '../components/Login.vue';
import { RouterLink } from 'vue-router';


export default {
  setup() {
    return {
    };
  },
  components: { Login }
};
</script>


<style lang="scss" scoped>
.bg-header {
  height: 5vh;
  background-color: #F4FDFF;
}

.bg {
  height: 100vh;
  background-color: #F4FDFF;
}


.bg-bottom {
  height: 55vh;
  background-color: #F4FDFF;
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 40px;
  color: #214E34
}

.radley-card {
  font-family: 'Radley', serif;
  font-size: 40px;
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