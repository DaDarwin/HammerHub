<template>
  <div class="about text-center" v-if="account.id">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <!-- TODO why isn't this working?  -->
    <section class="row">
      <div class="col-12 m-3 radley-title text-center ">
        Edit Your Account
      </div>
    </section>
    <form class=" row d-flex form-control" @submit.prevent="updateAccount()">
      <div class="col-6">
        <label for="name">Business Name</label>
        <input class="form-control  " v-model="accountData.businessName" id="name" type="text">
      </div>
      <div class="col-6">
        <label for="location">City, State</label>
        <input v-model="accountData.location" class="form-control " type="text">
      </div>
      <div class="col-6">
        <label for="instagram">Instagram</label>
        <input v-model="accountData.instagram" type="url" class="form-control">
      </div>
      <div class="col-6">
        <label for="facebook">Facebook</label>
        <input v-model="accountData.facebook" type="url" class="form-control">
      </div>
      <div>
        <button class="btn btn-light text-dark border" type="submit">Edit Profile</button>
        <!-- <button v-if="accountData" class="btn" type="button">Edit Profile</button> -->
      </div>

    </form>
    <p>{{ account }}</p>
    <p>{{ account.businessName }}</p>
    <p>{{ account.location }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { ref, watch } from 'vue';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';

export default {
  setup() {
    const accountData = ref({})
    const account = computed(() => AppState.account)
    async function resetForm() {
      accountData.value = ''
    }
    // watch(account, () => {
    //   accountData.value = { ...AppState.account };
    // }, { immediate: true });

    return {
      accountData,
      account,
      resetForm,
      async updateAccount() {
        try {
          await accountService.updateAccount(accountData.value)
          console.log('getting account data', accountData.value)
          //REVIEW accountData.value has correct info but the accountData in the service is not passing it all correctly
          Pop.success('Account updated successfully')
          resetForm()
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
