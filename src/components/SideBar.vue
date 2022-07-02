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
            <tr v-for="(quantity, key, i) in cart" :key="i">
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>{{ key }}</td>
              <td>{{ getPrice(key) }}</td>
              <td class="center">{{ quantity }}</td>
              <td>{{ (quantity * getPrice(key)).toFixed(2) }}</td>
              <td class="center">
                <button
                  @click="RemoveCart(key)"
                  class="btn btn-light cart-remove"
                >
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="!Object.keys(cart).length">
          <em>No items in cart</em>
        </p>
        <div class="spread">
          <span><strong>Total:</strong> {{ calcTotal() }}</span>
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
    getPrice(name) {
      for (let i = 0; i < this.inventory.length; i++) {
        if (this.inventory[i].name == name) {
          return this.inventory[i].price.USD.toFixed(2);
        }
      }
    },
    RemoveCart(name) {
      delete this.cart[name];
    },
    calcTotal() {
      let all = 0;
      for (const property in this.cart) {
        all += this.getPrice(property) * this.cart[property];
      }
      return all.toFixed(2);
    },
  },
};
</script>
