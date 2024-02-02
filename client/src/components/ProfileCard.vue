<template>
    <router-link to="">

        <span class="d-flex flex-column align-items-baseline rounded-pill">

            <img :src="profile.picture" alt="" class="profile-picture">

            <div class="m-2 text-light">{{ profile.name }}</div>


        </span>

    </router-link>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Account } from '../models/Account';
export default {
    props: { profile: {required: true } },

    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.profile-picture {
    border-radius: 50%;
    height: 7vh;
    width: 7vh;
}

span {
    width: fit-content;
}
</style>