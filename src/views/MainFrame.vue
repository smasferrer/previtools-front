<script setup>
import { RouterView } from 'vue-router';
import TopNavbar from '../components/general/TopNavbar.vue';
import LateralSidebar from '../components/general/LateralSidebar.vue';
</script>

<template>
  <div class="container text-center h-100">
    <TopNavbar></TopNavbar>
    <div class="row content contenidos">
      <div style="display: flex;">
        <LateralSidebar></LateralSidebar>
        <div class="mainFrame">
          <RouterView />
        </div>
      </div>
    </div>
  </div>

  <footer class="container-fluid text-center">
    <p>Footer Text</p>
  </footer>
</template>

<style lang="scss">
.mainFrame {
  width: 100%;
  background-color: inherit;
  border-radius: 2px;
  padding: 12px;
}

.contenidos {
  box-sizing: border-box;
}
</style>