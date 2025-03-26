app.component("gadget-display", {
  props: ["gadget"],
  template:
    /*html*/
    `
              <div class="gadget">
                <img src />
                <h2>{{ gadget.nom }}</h2>
                <p>{{ gadget.prix }}</p>
                <img v-bind:src="gadget.image" alt="" />
                <p v-if="gadget.inStock">En stock</p>
                <p v-else>Pas en stock</p>
                <button @click="addToCart(gadget)" v-if="gadget.inStock">
                    Ajouter au panier
                </button>
                </div>
            `,
  methods: {
    addToCart(gadget) {
      this.$emit("addToCart", gadget);
    },
  },
});
