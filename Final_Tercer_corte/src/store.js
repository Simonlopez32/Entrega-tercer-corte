import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
      cartTotal: 0
    };
  },
  mutations: {
    addToCart(state, product) {
      const productIndex = state.cart.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        state.cart[productIndex].quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      this.commit('calculateCartTotal');
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
      this.commit('calculateCartTotal');
    },
    calculateCartTotal(state) {
      state.cartTotal = state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }
  },
  actions: {
    initializeStore({ commit }) {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const storedCartTotal = JSON.parse(localStorage.getItem('cartTotal')) || 0;
      storedCart.forEach(product => commit('addToCart', product));
      commit('calculateCartTotal');
      localStorage.setItem('cart', JSON.stringify(storedCart));
      localStorage.setItem('cartTotal', JSON.stringify(storedCartTotal));
    }
  }
});

store.subscribe((mutation, state) => {
  localStorage.setItem('cart', JSON.stringify(state.cart));
  localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
});

export default store;
