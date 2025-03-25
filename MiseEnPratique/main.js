const app = Vue.createApp({
  data() {
    return {
      title: "Vue Gadget Shop",
      desc: "Decourvez les derniers gadgets electroniques de haute technologie",
      cart: [],
      gadgets: [
        {
          nom: "Smartphone XZ",
          prix: 799,
          image: "Assets/phone.jpg",
          inStock: true,
        },
        {
          nom: "Laptop Pro",
          prix: 1299,
          image: "Assets/laptop.jpg",
          inStock: false,
        },
        {
          nom: "Ecouteurs Bluetooth",
          prix: 199,
          image: "Assets/earbuds.jpg",
          inStock: true,
        },
      ],
    };
  },
  methods: {
    addToCart(gadget) {
      this.cart.push(gadget);
    },
    removeFromCart(gadget) {
      const index = this.cart.indexOf(gadget);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
  computed: {
    total() {
      const total = this.cart.reduce((acc, gadget) => acc + gadget.prix, 0);
      if (total > 1000) {
        const discountedTotal = total * 0.9;
        const finalString = `${total} => ${discountedTotal} (10% off!)`;
        return finalString;
      }
      return total;
    },
  },
});
