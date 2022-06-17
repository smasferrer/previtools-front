<script setup>
import projectLogo from '../../assets/images/general/logo.png'
</script>
<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="col-2 divImageLogo">
        <img :src="projectLogo" />
      </div>
      <div class="col-10">
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar.navbar-inverse {
  .container-fluid {
    padding-left: 1px;
    padding-right: 1px;
    border-bottom-style: solid;

    .divImageLogo {
      background-color: $primary-color-frame;
      text-align: center;
    }
  }
}
</style>