<template>
  <div id="app">
    <header class="top-bar spread">
      <nav class="top-bar-nav">
        <router-link to="/" class="top-bar-link">
          <i class="icofont-spoon-and-fork"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/Products" class="top-bar-link">
          <span>Products</span>
        </router-link>
        <router-link to="/past-orders" class="top-bar-link">
          <span>Past Orders </span>
        </router-link>
      </nav>
      <div @click.prevent="toggle" class="top-bar-cart-link">
        <i class="icofont-cart-alt icofont-1x"></i>
        <span>Cart </span>
      </div>
    </header>
    <router-view />
    <SideBar v-if="visible" :toggle="toggle" />
  </div>
</template>
<script>
import SideBar from "./components/SideBar.vue";
// import food from "../food.json";
export default {
  data() {
    return {
      visible: true,
    };
  },
  name: "APPView",
  components: {
    SideBar,
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style></style>
