const product = "Socks";
const description = "Des chaussettes super cool";
const app = Vue.createApp({
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
