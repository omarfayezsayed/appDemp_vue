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
        <span>Cart {{ calData }} </span>
      </div>
    </header>
    <router-view :addToCart="addToCart" :getname="getname" />

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
  computed: {
    calData: function () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    },
    inventory() {
      return this.$store.state.invetory;
    },
    cart() {
      return this.$store.state.cartStore;
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    addToCart(type) {
      if (!this.cart[type]) this.cart[type] = 0;
      this.cart[type] += this.inventory[this.getname(type)].quntity;
      this.inventory[this.getname(type)].quntity = 0;
    },
    getname(type) {
      for (let index = 0; index < this.inventory.length; index++) {
        if (this.inventory[index].name === type) {
          return index;
        }
      }
    },
  },
};
</script>
<style></style>
