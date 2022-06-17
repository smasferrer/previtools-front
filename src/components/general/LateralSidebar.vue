<template>
  <div class="col-sm-2 sidenav">
    <ul class="list-unstyled">
      <li v-for="(menuItem, index) in sidebarLinks" :key="menuItem.name + index">
        <button class="btn btn-toggle rounded" aria-expanded="false" @click="chagePathPage(menuItem.path)">
          <font-awesome-icon :icon="menuItem.icon" />
          <strong>{{ menuItem.name }}</strong>
        </button>
        <div class="sublinks">
          <ul class="btn-toggle-nav list-unstyled">
            <li :id="subLink.name + index" v-for="(subLink, index) in menuItem.children" :key="subLink.name + index">
              <router-link :to="subLink.path"><span>{{ subLink.name }}</span></router-link>
            </li>
          </ul>
        </div>
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
    }
  },

}
</script>

<style lang="scss" scoped>
.col-sm-2.sidenav {
  background-color: $gradiant-prered-primary;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 5px;

  .btn.btn-toggle {
    width: 100%;
    text-align: left;
    padding-left: 12px;

    svg {
      color: #1ed3a9;
      padding-right: 5px;
      width: 27px;
    }

    strong {
      color: #e2e2e2;
    }
  }

  .sublinks {
    li {
      text-align: left;
      padding-left: 15%;

      a {
        text-decoration: initial;
        color: #e2e2e2;
      }
    }
  }
}
</style>