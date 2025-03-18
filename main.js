const product = "Socks";
const description = "Des chaussettes super cool";
const app = Vue.createApp({
  data() {
    return {
      product: product,
      description: description,
      image: "./assets/images/socks_green.jpg",
      url: "https://www.etml.ch/",
      //inStock: true,
      inventory: 0,
      selectedVariant: 0,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 1,
          quantity: 0,
          color: "Green",
          image: "./assets/images/socks_green.jpg",
        },
        {
          id: 2,
          quantity: 50,
          color: "Blue",
          image: "./assets/images/socks_blue.jpg",
        },
      ],
      sizes: [
        { id: 3, size: "S" },
        { id: 4, size: "M" },
        { id: 5, size: "L" },
        { id: 6, size: "XL" },
      ],
      cart: 0,
      brand: "Vue Mastery",
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeToCart() {
      this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return ??
    },
    inStock() {
      return ??
    }

  },
});
