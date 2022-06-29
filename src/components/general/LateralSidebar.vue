<template>
  <div class="col-sm-2 sidenav">
    <ul class="list-unstyled">
      <li v-for="(menuItem, index) in sidebarLinks" :key="menuItem.name + index">
        <button class="btn btn-toggle rounded" aria-expanded="false" @click="chagePathPage(menuItem.path)"> 
          <font-awesome-icon :icon="menuItem.icon" />
          <a :class="[(itemA == '/') ? 'active' : '']">{{ menuItem.name }}</a>
        </button>
        <!-- <div class="sublinks">
          <ul class="btn-toggle-nav list-unstyled2">
            <li :id="subLink.name + index" v-for="(subLink, index) in menuItem.children" :key="subLink.name + index">
              <router-link :to="subLink.path"><span>{{ subLink.name }}</span></router-link>
            </li>
          </ul>
        </div> -->
      </li>

      <!--
        SEPARADOR
      <li class="border-top my-3"></li>
      -->
    </ul>
  </div>
</template>

<script>
import sidebarLinks from '@/menu-items'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const chagePathPage = (path) => {
      if (path) {
        router.push({
          path: path
        })
      }
    }
    return {
      chagePathPage
    }
  },
  data() {
    return {
      sidebarLinks: sidebarLinks
    }
  },
  methods: {
    handleClose(key, keyPath) {
      console.log(key, keyPath)
      return null
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
  }
}
</script>

<style lang="scss" scoped>
.sidenav {
  width: 280px;
  background-color: inherit;
  padding: 15px;

  .btn.btn-toggle {
    width: 100%;
    text-align: left;
    padding: 12px;
    margin: 5px 0;
    font-size: 14px;
    &:hover{
      background: #efefef;
    }

    svg {
      padding: 4px;
      display: inline-flex;
      width: 18px;
      height: 18px;
      background-color: #fff;
      box-shadow: 0 4px 6px rgb(0 0 0 / 12%);
      border-radius: 6px;
      justify-content: center;
      align-items: center;
      margin-right: 11px;
      vertical-align: middle;
    }

    a {
      padding: 10px 16px 10px 0;
      color: #141414;
      border-radius: 8px;
      text-decoration: none;
    }
  }

  .list-unstyled li {
    color: #141414;
    &:first-child{
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
      a {
        font-weight: 600;
      }
      .btn:hover{
        background-color: $fondo;
      }
    }
  }

  .sublinks {
    li {
      text-align: left;
      padding-left: 60px;

      a {
        text-decoration: initial;
        color: #696969;
      }
    }
  }

  .active {
    background-color: #fff;
    box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
  }
}
</style>