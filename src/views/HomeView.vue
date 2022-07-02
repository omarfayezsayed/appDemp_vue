<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>
      <div class="recommended">
        <div v-for="pro in inventory.slice(0, 3)" :key="pro.id" class="card">
          <div class="card-title">{{ pro.name }}</div>
          <div class="card-body">
            <i class="icofont-10x icofont-carrot"></i>
            <form>
              <div class="row">
                <div class="cell">
                  <label>Type:</label>
                </div>
                <div class="cell">
                  <em>Vegetable</em>
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Price:</label>
                </div>
                <div class="cell">$4.82</div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Quantity:</label>
                </div>
                <div class="cell">
                  <input type="number" v-model.number="pro.quntity" />
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button @click="addToCart(pro.name)" class="btn btn-light">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import { fromByteArray } from 'ipaddr.js';

export default {
  props: ["addToCart", "getname"],
  name: "HomeView",
  computed: {
    inventory() {
      return this.$store.state.invetory;
    },
  },
};
</script>
