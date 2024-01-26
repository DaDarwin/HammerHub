<template>
  <div class="PurposePage container-fluid">
    <div class="row bg  ">
      <div class="col-12 d-flex justify-content-center align-items-end mb-3">
        <h1 class=" text-center radley-title">
          What would you like to get done today?
        </h1>
      </div>
      <div class="d-flex justify-content-center align-items-start mt-3">
        <!-- REVIEW why are these not adjusting to col-12 on mobile? -->
        <!-- REVIEW why is there a double hover on the first box? -->
        <RouterLink class="col-12 col-md-4 selectable card  mx-3 mb-2" :to="{ name: 'Business Page' }">
          <div class="col-12 col-md-4 selectable card  mx-3 mb-2">
            <h2 class="text-center radley-card mt-3 mb-0">Learn about business</h2>
            <hr class="m-3">
            <p class="m-3 text-center carlito">Learn the steps you need to take to start and keep a successful business
            </p>
          </div>
        </RouterLink>

        <RouterLink :to="{ name: 'Profile Page' }">
          <div class="col-12 col-md-4 selectable card mx-3 mb-2">
            <h2 class="text-center radley-card mt-5 mb-0">Edit my profile</h2>
            <hr class="m-3">
            <p class="m-3 text-center carlito">Add to your profile description, link your social media profiles and add
              your projects</p>
          </div>
        </RouterLink>
      </div>
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
.bg {
  height: 100vh;
  background-color: #F4FDFF;
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 50px;
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