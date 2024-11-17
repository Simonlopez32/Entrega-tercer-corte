<template>
  <div>
    <h2>Ingresar</h2>
    <form>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" class="form-control" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>