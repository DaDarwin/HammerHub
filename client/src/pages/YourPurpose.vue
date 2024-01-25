<template>
  <div class="YourPurpose container-fluid">
    <div class="row justify-content-center">
      <div class="col-6 selectable card">

      </div>
      <div class="col-6">

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
.card {
  min-height: 100px;
  max-height: 100px;
  min-width: 100px;
  max-width: 100px;
  background-color: #f0efec;
}
</style>