<template>

<div class="card informacion" >
  <div class="card-header">
    
  </div>
  
  <div class="card-body card-box">
    <h5 class="card-title bg-dark text-white"><strong>Bienvenido {{ userDetailById.name }}</strong></h5>
    
  <div class="card-text bg-secondary">
    <div >
    <div class="details">
    

    
      

      <h2>
        Nombre de usuario:
        <span>{{ userDetailById.username }}</span>
      </h2>

      <h2>
        Correo electrónico:
        <span>{{ userDetailById.email }}</span>
      </h2>

       <h2>
        Su Rol es:
        <span>{{ userDetailById.rol }}</span>
      </h2>
        <button class="btn btn-primary" @click="pasarAlocal"> Validar </button>
        </div>
      </div>
  </div>
  
    
  
</div>

</div> 



  

</template>


<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";


export default {
  name: "Home",

  methods:{
    
    pasarAlocal: function(){
      let rol = this.userDetailById.rol;
      localStorage.setItem("rol",rol);
    }
    

  },

  data: function () {
    
    return {
      userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      userDetailById: {
        username: "",
        name: "",
        email: "",
        rol:""
      },
    };
    
  },

  apollo: {
    userDetailById: {
      query: gql`
        query ($userId: Int!) {
          userDetailById(userId: $userId) {
            username
            name
            email
            rol
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      }
    },
  }
};
</script>


<style>
.information {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;

  display: inline-flexbox;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end; 
}

.information h1 {
  font-size: 60px;
  color: #0f0f0f;
  font-weight: normal;
}

.information h2 {
  font-size: 40px;
  color: #050505;
  margin-top: 4px;
  text-align: center;
  font-weight: normal;
}

.details span {
  color: rgb(32, 218, 103);
  font-weight: inherit;
}



.details h2 {
  font-size: 35px;
  color: #fffcfc;
}
.details {
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 30px 80px;
  margin: 0 0 0 0;
  height: 100%;
}

.card-box{
  height: 25vh;
  margin: 0%;
  padding: 0%;

  background: #FDFEFE ;

}

</style>
