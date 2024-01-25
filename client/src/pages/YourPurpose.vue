<template>
  <div class="YourPurpose container-fluid">
    <div class="row justify-content-center align-items-center bg">
      <div class="col-12">
        <h1 class="text-center radley-title">
          What is your purpose?
        </h1>
      </div>
      <!-- TODO on desktop make these closer together? More center to page? -->
      <RouterLink class="col-12 col-md-4 selectable card m-3" :to="{ name: 'Profile Page' }">

        <h2 class="text-center radley mt-5 mb-0">I'm a worker</h2>
        <hr class="m-3">
        <p class="m-3 text-center carlito">Someone looking to make a profile of projects for others to see</p>
      </RouterLink>

      <RouterLink class="col-12 col-md-4 selectable card m-3" :to="{ name: 'Search Page' }">
        <h2 class="text-center radley mt-5 mb-0">I'm a looker</h2>
        <hr class="m-3">
        <p class="m-3 text-center carlito">Someone looking for projects that match my desire for hire</p>
      </RouterLink>





    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';

export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
.card {
  min-height: 250px;
  max-height: 250px;
  min-width: 350px;
  max-width: 350px;
  border-radius: 10%;
  border: none;
  background-color: #f0efec;
}

.bg {
  height: 100vh;
  // max-width: 100vw;
  background-color: #F4FDFF;
}

.radley {
  font-family: 'Radley', serif;
  font-size: 30px;
  color: #214E34
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 60px;
  color: #214E34
}

.carlito {
  font-family: 'Carlito', sans-serif;
  color: #214E34
}
</style>