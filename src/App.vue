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
          <span>Past Orders</span>
        </router-link>
      </nav>
      <a href="#" @click.prevent="toggle" class="top-bar-cart-link">
        <i class="icofont-cart-alt icofont-1x"></i>
        <span>Cart (0)</span>
      </a>
    </header>
    <router-view />
    <SideBar v-if="omar" :toggle="toggle" />
  </div>
</template>
<script>
import SideBar from "./components/SideBar.vue";
export default {
  data() {
    return {
      omar: false,
    };
  },
  name: "APPView",
  components: {
    SideBar,
  },
  methods: {
    toggle() {
      this.omar = !this.omar;
    },
  },
  mounted() {
    console.log("home page mounted");
  },
};
</script>
<style></style>
