<template>
  <div class="PrivateProfilePage container-fluid bg">
    <section class="row">
      <div class="pt-2 col-12 d-flex justify-content-end">

        <Login />
      </div>
    </section>
    <section class="row">
      <div class="col-12 m-3 radley-title text-center ">
        Edit Your Profile
      </div>
    </section>
    <form class=" row d-flex">
      <div class="col-6">
        <label for="name">Business Name</label>
        <input class="form-control  " v-model="account.name" id="name" type="text">
      </div>
      <div class="col-6">
        <label for="location">City, State</label>
        <input v-model="account.location" class="form-control " type="text">
      </div>
      <div class="col-6">
        <label for="instagram">Instagram</label>
        <input v-model="account.instagram" type="url" class="form-control">
      </div>
      <div class="col-6">
        <label for="facebook">Facebook</label>
        <input v-model="facebook" type="url" class="form-control">
      </div>
    </form>
    <section class="row">
      <div class="col-12 m-3 radley-title text-center ">
        Create a Project
      </div>
      <form class="form-control">

      </form>
    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Login from '../components/Login.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  },
  components: { Login }
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