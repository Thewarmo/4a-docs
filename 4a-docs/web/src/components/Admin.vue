<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Menu Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" @click="llenartabla">Listado de usuarios</a>
        </li>
      </ul>  
    </div>
  </div>
</nav>

<ul v-for="usuario in usTodos" :key="usuario.id">
  <li>{{usuario.id}}</li>
</ul>

<!-- inicio tabla -->
<div class="container">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
<!-- fin tabla -->

</template>
<script>
import gql from "graphql-tag";


export default {
  name: 'Admin',

  methods:{
    llenartabla: function(){
      this.consultarAsyncTodos();
      this.usTodos.push(this.consultarAsyncTodos());
      console.log(this.usTodos);
      
    },
    consultarAsyncTodos: async function(){
      await this.$apollo
      .query({
        query: gql`
            query Query {
                  userAll {
                            id
                            username
                            name
                            email
                            rol
        }
      }
        `
      }).then((result)=>{
        return result.data.userAll;
        
      })
    }
  },

  data: function () {
    return{
              userAll: {
                      id:"",
                      username:"",
                      password:"",
                      name:"",
                      email:"",
                      rol:""
             },usTodos:[]
          
          
    }
        
    
  },
  apollo:{
      userAll:{
        query: gql`
            query Query {
                  userAll {
                          id
                          username
                          password
                          name
                          email
                          rol
                }
            }
        `
      }
  }
};


</script>
<style>

</style>
