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
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
    };
  },
});
