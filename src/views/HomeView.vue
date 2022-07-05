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
        <div
          v-for="product in inventory.slice(0, 3)"
          :key="product.id"
          class="card"
        >
          <div class="card-title">{{ product.name }}</div>
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
                  <input type="number" v-model.number="product.quntity" />
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button
              @click="addTo(product.name, product.quntity)"
              class="btn btn-light"
            >
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
  name: "HomeView",
  computed: {
    inventory() {
      return this.$store.state.invetory;
    },
  },
  methods: {
    addTo(name, quntity) {
      console.log(name, quntity);
      this.$store.commit("addToCart", { name, quntity });
    },
  },
};
</script>
