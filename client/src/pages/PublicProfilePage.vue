<template>
  <div class="ProfilePage container-fluid bg">
    <section class="row">
      <div class="col-12 col-md-8">
        <h1 class="radley-title m-3">
          Reach out if you want to create impactful projects together.
        </h1>
        <hr class="m-3 tan">
        <h4 class="tan carlito m-2"> TO SEE MORE OF MY WORK, VISIT MY SOCIALS:</h4>
        <p class="fs-2 tan carlito "><i><i class=" m-2 tan fs-1 mdi mdi-instagram"></i></i><i><i
              class="m-2 tan fs-1 mdi mdi-facebook"></i></i><i><i
              class="m-2 tan fs-1 mdi mdi-twitter"></i></i>@reallygreatsite</p>

        <!-- REVIEW We could make these all in a component but the images would then have to be the same? -->
        <div class="d-flex tan">
          <p class="mx-3 ">SEE PROJECTS</p>
          <p class="mx-3 ">EMAIL</p>
        </div>
        <div class="d-flex tan">
          <p class="mx-3">TESTIMONIALS</p>
          <p class="mx-3">PHONE</p>
        </div>
        <div class="d-flex tan">
          <p class="mx-3">RESUME</p>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <img src="" alt="">
        <p>DESCRIPTION Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium cum placeat quidem iusto
          repellendus, nisi eius ab omnis neque amet tempora facilis soluta veritatis ipsum doloribus alias sit aliquid.
        </p>
      </div>

    </section>

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
  background-color: #857E7B;
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 60px;
  color: #f0efec
}

.carlito {
  font-family: 'Carlito', sans-serif;
  color: #f0efec;
  font-size: 20px
}

.tan {
  color: #f0efec
}
</style>