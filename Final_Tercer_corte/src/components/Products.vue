<template>
  <div class="products-container">
    <h2>Lista de Productos</h2>
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" alt="Imagen del producto" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <button @click="addToCart(product)">Agregar al Carrito</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('http://127.0.0.1:5000/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Error al cargar los productos:', error);
        });
    },
    ...mapMutations(['addToCart'])
  }
};
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 200px;
}

.product img {
  width: 100%;
  height: auto;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
