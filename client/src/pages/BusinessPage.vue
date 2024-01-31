<template>
  <div class="BusinessPage bg">
    <section class="row">
      <div class="col-7 d-flex justify-content-start">
        <RouterLink :to="{ name: 'Home' }">
          <img class="hammer mb-2 img-fluid" src="../assets/img/hammer.png" alt="cartoon hammer">
        </RouterLink>
      </div>
      <div class="col-5 d-flex justify-content-end">
        <Login />
      </div>
    </section>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center radley-title">How to Become an Independent Contractor</h1>
          <div class="card mb-2">
            <h2 class="text-center radley-card mt-3 ">Although many freelance workers relish the freedom associated with
              working as independent contractors, some
              struggle to handle the extra responsibilities</h2>
            <hr class="m-3 green">
            <ul class="list-unstyled">

              <li class="toggle-item" data-toggle="collapse" data-target="#businessLicensing">
                How does business licensing work?
              </li>
              <div id="businessLicensing" class="collapse">
                <p>Business licensing involves obtaining the necessary permits and licenses to legally operate your
                  business. The specific requirements vary depending on your location and the nature of your business.</p>

              </div>


              <li class="toggle-item" data-toggle="collapse" data-target="#handlingTaxes">
                How do you handle your taxes?
              </li>
              <div id="handlingTaxes" class="collapse">
                <p>Handling taxes as an independent contractor involves keeping track of your income, expenses, and
                  deductions. You may need to pay estimated taxes quarterly and report your income on your tax return.</p>

              </div>


              <li class="toggle-item" data-toggle="collapse" data-target="#businessEntity">
                What’s a business entity, and why does the bank keep asking you if you’ve registered one?
              </li>
              <div id="businessEntity" class="collapse">
                <p>A business entity is a legal structure that determines how your business is organized and taxed. Common
                  types include sole proprietorships, LLCs, and corporations. Banks may ask if you've registered one to
                  understand your business's legal status.</p>

              </div>
            </ul>>
          </div>



        </div>
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
  max-height: 550px;
  min-width: 750px;
  max-width: 350px;
  border-radius: 10%;
  border: none;
  background-color: #f0efec;
}
</style>