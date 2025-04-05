app.component("cart-display", {
  props: ["cart"],
  template:
    /*html*/
    `
    <h2>🛒 Mon Panier {{ cart.length }}</h2>
        <ul>
          <li v-for="gadget in cart">
            {{gadget.nom}} - {{gadget.prix}}
            <button class="remove-btn" @click="removeFromCart(gadget)">
              ❌
            </button>
          </li>
          <p>Total: {{ total }}</p>
        </ul>
        <p v-if="cart.length <= 0">Votre panier est vide.</p>`,
  methods: {
    removeFromCart(gadget) {
      this.$emit("removeFromCart", gadget);
    },
  },
});
