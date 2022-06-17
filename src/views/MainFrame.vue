<script setup>
import { RouterView } from 'vue-router';
import TopNavbar from '../components/general/TopNavbar.vue';
import LateralSidebar from '../components/general/LateralSidebar.vue';
</script>

<template>
  <TopNavbar></TopNavbar>
  <div class="container-fluid text-center h-100">
    <div class="row content h-100">
      <LateralSidebar></LateralSidebar>
      <div class="mainFrame col-sm-10">
        <RouterView />
      </div>
    </div>
  </div>

  <footer class="container-fluid text-center">
    <p>Footer Text</p>
  </footer>
</template>

<style lang="scss">
.mainFrame {
  background-color: #e9e9e9;
  border-radius: 2px;
  padding: 12px;

  div {
    background-color: white;
  }
}
</style>