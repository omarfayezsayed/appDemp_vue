<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toggle" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, i) in cart" :key="i">
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>{{ product.name }}</td>
              <td>2</td>
              <td class="center">{{ product.quntity }}</td>
              <td>1</td>
              <td class="center">
                <button
                  @click="RemoveCart(product, i)"
                  class="btn btn-light cart-remove"
                >
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="!cart.length">
          <em>No items in cart</em>
        </p>
        <div class="spread">
          <span><strong>Total:</strong> 1</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  name: "SideBar",
  props: ["toggle"],
  computed: {
    inventory() {
      return this.$store.state.invetory;
    },
    cart() {
      return this.$store.state.cartStore;
    },
  },
  methods: {
    RemoveCart(product, index) {
      this.$store.commit("deleteFromCart", { product, index });
    },
  },
};
</script>
