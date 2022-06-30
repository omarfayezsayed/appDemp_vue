<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <div class="card" v-for="product in store" :key="product.id">
        <div class="card-title">{{ product.name }}</div>
        <div class="card-body">
          <i class="icofont-10x icofont-raddish"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>{{ product.type }}</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">${{ product.price.USD }}</div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" value="0" />
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <button class="btn btn-light">Add to cart</button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import products from "../../food.json";
export default {
  data() {
    return {
      store: products,
    };
  },
  name: "productsView",
};
</script>
