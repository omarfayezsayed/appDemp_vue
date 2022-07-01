<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <div v-for="pro in inventory" :key="pro.id" class="card">
        <div class="card-title">{{ pro.name }}</div>
        <div class="card-body">
          <!-- <i class="icofont-10x icofont-pro.icon"+"Ad"></i> -->
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
</template>
<script>
export default {
  props: ["inventory", "cart", "addToCart", "getname"],
  name: "productsView",
};
</script>
