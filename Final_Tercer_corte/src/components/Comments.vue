<template>
    <div>
      <h2>Comentarios</h2>
      <form>
        <div class="form-group">
          <label for="comment">Comentario:</label>
          <textarea id="comment" class="form-control" v-model="comment"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
      <div v-if="submittedComment">
        <h4>Comentario enviado:</h4>
        <p>{{ submittedComment }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Comments',
    data() {
      return {
        comment: '',
        submittedComment: ''
      };
    },
    methods: {
      submitComment() {
        this.submittedComment = this.comment;
        this.comment = '';
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #2c3e50;
  }
  </style>
  