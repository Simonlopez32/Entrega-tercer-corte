import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
      cartTotal: 0,
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
      state.cartTotal += product.price;
      // Guarda el estado del carrito en el localStorage
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(product => product.id === productId);
      if (index !== -1) {
        state.cartTotal -= state.cart[index].price;
        state.cart.splice(index, 1);
        // Actualiza el localStorage
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    loadCart(state) {
      const cart = localStorage.getItem('cart');
      if (cart) {
        state.cart = JSON.parse(cart);
        state.cartTotal = state.cart.reduce((total, product) => total + product.price, 0);
      }
    },
  },
  actions: {
    initializeStore({ commit }) {
      commit('loadCart');
    }
  }
});

export default store;


