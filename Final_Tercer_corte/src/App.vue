<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
      <a class="navbar-brand" href="#" @click="currentView = 'Home'">Inicio</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#" @click="currentView = 'Register'">Registrarse</a></li>
          <li class="nav-item"><a class="nav-link" href="#" @click="currentView = 'Login'">Ingresar</a></li>
          <li class="nav-item"><a class="nav-link" href="#" @click="currentView = 'Comments'">Comentarios</a></li>
          <li class="nav-item"><a class="nav-link" href="#" @click="currentView = 'Products'">Productos</a></li>
        </ul>
      </div>
    </nav>

    <main class="flex-fill">
      <component :is="currentView"></component>
    </main>

    <div class="cart-container">
      <h4>Carrito</h4>
      <ul v-if="cart.length">
        <li v-for="product in cart" :key="product.id">
          {{ product.name }} - ${{ product.price }} 
          <button @click="removeFromCart(product.id)">Eliminar</button>
        </li>
      </ul>
      <p v-else>Tu carrito está vacío.</p>
      <p>Total: ${{ cartTotal }}</p>
    </div>

    <footer class="footer bg-dark text-white py-4 mt-auto">
      <div class="container text-center">
        <h5>Dragon PC's</h5>
        <p>&copy; 2024 Dragon PC's. Todos los derechos reservados.</p>
        <p>1234 Calle de la Tecnología, Ciudad, País</p>
        <p>Email: <a href="mailto:contacto@dragonpcs.com" class="text-white">contacto@dragonpcs.com</a></p>
        <p>Teléfono: +123 456 7890</p>
        <div class="social-media">
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Comments from './components/Comments.vue';
import Products from './components/Products.vue';

export default {
  name: 'App',
  components: {
    Home,
    Register,
    Login,
    Comments,
    Products
  },
  computed: {
    ...mapState({
      cart: state => state.cart,
      cartTotal: state => state.cartTotal
    })
  },
  methods: {
    ...mapMutations(['removeFromCart'])
  },
  data() {
    return {
      currentView: 'Home'
    };
  }
};
</script>

<style scoped>
  .cart-container {
    position: fixed;
    bottom: 1%;
    right: 1%;
    background-color: #fff;
    width: 300px;
    padding: 15px;
    border-radius: 15px;
    max-height: 300px;
    overflow-y: auto;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }

  .cart-container h4 {
    margin-top: 0;
  }

  .cart-container ul {
    list-style-type: none;
    padding: 0;
  }

  .cart-container ul li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .cart-container button {
    background-color: #ff4444;
    border: none;
    color: white;
    cursor: pointer;
  }

  .cart-container button:hover {
    background-color: #ff2222;
  }

  .cart-container p {
    font-weight: bold;
  }

  .custom-navbar {
    background-color: rgb(128, 9, 0);
    border-radius: 8px;
  }

  footer {
    background-color: #343a40;
  }

  body {
    background-color: rgb(82, 82, 82);
  }
</style>
