<template>
  <div>
    <h2>Registro</h2>
    <form>
      <div class="form-group">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" class="form-control" v-model="username">
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" class="form-control" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  }
};
</script>

<style scoped>
h2 {
  color: #ffffff;
}
input {
  margin-left: 100px;
  width: 300px;
}
label {
  margin-left: 100px;
  margin-bottom: 10px;
  margin-top: 30px;
}
button {
  margin-left: 100px;
  margin-top: 40px;
  
}
</style>