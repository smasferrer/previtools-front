<template>
  <b-card class="boxCardDashboar">
    <font-awesome-icon :icon="atribute" />
    <br />
    <b-card-text>
      <strong>{{ text }}</strong>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    text: null,
    iconName: null,
  },
  data() {
    return {
      atribute: `fa-solid ${this.iconName}`,
    }
  },
}
</script>

<style lang="scss">
.boxCardDashboar {
  .svg-inline--fa {
    font-size: 47px;
    color: #a200ff;
  }
}

b-card-text {
  height: 30px;
  padding: 13px;
  background-color: #1ed3a9;
  padding-top: 0px;
  border-radius: 5px;
  vertical-align: middle;

  strong {
    color: #160055
  }
}
</style>