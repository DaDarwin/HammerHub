<template>
  <nav class="navbar navbar-expand-sm px-3">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">

      </ul>
      <!-- LOGIN COMPONENT HERE -->

      <Login />
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
export default {
  setup() {



    onMounted(() => {

    })

    return {

    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

/* .nav-link {
  text-transform: uppercase;
} */

/* .navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
} */

@media screen and (min-width: 576px) {
  /* nav {
    height: 64px;
  } */
}
</style>
