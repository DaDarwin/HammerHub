<template>
  <div class="BusinessPage bg">
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
    this is the business page

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
.hammer {
  height: 100px;
  width: 100px
}

.bg {
  height: 100vh;
  background-color: #F4FDFF;
}
</style>