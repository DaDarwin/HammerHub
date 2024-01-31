<template class="container-fluid">
  <div class="about m-3" v-if="account.id">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>

    <section class="row">
      <div class="col-12 m-3 radley-title ">
        Edit Your Account
      </div>
    </section>
    <!-- TODO add min/max/required fields here to the form -->
    <form class=" p-2 row d-flex form-control" @submit.prevent="updateAccount()">
      <div class="col-12 col-md-6">
        <label for="name">Business Name</label>
        <input class="form-control  " v-model="editable.businessName" id="name" type="text">
      </div>
      <div class="col-12 col-md-6">
        <label for="location">City, State</label>
        <input v-model="editable.location" class="form-control " type="text">
      </div>
      <div class="col-12 col-md-6">
        <label for="instagram">Instagram</label>
        <input v-model="editable.instagram" type="url" class="form-control">
      </div>
      <div class="col-12 col-md-6">
        <label for="facebook">Facebook</label>
        <input v-model="editable.facebook" type="url" class="form-control">
      </div>
      <div class="col-12 col-md-6">
        <label for="instagram">Twitter</label>
        <input v-model="editable.twitter" type="url" class="form-control">
      </div>
      <div class="col-12 col-md-6">
        <label for="Linkedin">Linkedin</label>
        <input type="url" v-model="editable.linkedin" class="form-control">
      </div>
      <!-- upload profile picture -->
      <div class="col-12">
        <label for="aboutMe">About Me</label>
        <textarea class="w-100" name="aboutMe" id="aboutMe" cols="30" rows="10"></textarea>
      </div>
      <!-- upload resume -->
      <!-- upload any licenses/certificates -->
      <div>
        <button class="btn btn-light text-dark border-dark" type="submit">Edit Profile</button>
        <!-- <button v-if="accountData" class="btn" type="button">Edit Profile</button> -->
      </div>

    </form>
    <!-- <p>{{ account }}</p>
    <p>{{ account.businessName }}</p>
    <p>{{ account.location }}</p> -->
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { ref, watch } from 'vue';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
import { logger } from '../utils/Logger';

export default {
  setup() {
    const editable = ref({})
    const account = computed(() => AppState.account)
    // async function resetForm() {
    //   editable.value = ''
    // }
    watch(account, () => {
      editable.value = { ...AppState.account };
    }, { immediate: true });

    return {
      editable,
      account,
      // resetForm,
      async updateAccount() {
        try {
          const accountData = editable.value;
          logger.log('Before Service:', accountData)
          await accountService.updateAccount(accountData)
          console.log('getting account data', accountData)
          Pop.success('Account updated successfully')
          // resetForm()
        } catch (error) {
          Pop.error(error)
        }
      },

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.radley-title {
  font-family: 'Radley', serif;
  font-size: 40px;
  color: #214E34
}
</style>
