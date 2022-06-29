<script setup>
import projectLogo from '../../assets/images/general/logonew.svg'
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
  background: inherit;
  .container-fluid {
    height:70px;

    .divImageLogo {
      padding: 14px 14px 14px 20px;
      text-align: left;
      img{
        width: 150px;;
      }
    }
  }
}
</style>