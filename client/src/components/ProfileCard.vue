<template>
    <router-link to="">

        <span class="d-flex align-items-center rounded-pill border border-dark">
            
            <img :src="profile.picture" alt="" class="profile-picture border border-start-0 border-dark ">
            
            <span class="m-2 text-dark">{{profile.name}}</span>
            
            
        </span>

    </router-link>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Account } from '../models/Account';
export default {
  props: { profile: { type: Account, required: true } },

    setup(){
    return { }
    }
};
</script>


<style lang="scss" scoped>

    .profile-picture{
        border-radius: 50%;
        height: 7vh;
        width: 7vh;
    }

    span{
        width: fit-content;
    }

</style>