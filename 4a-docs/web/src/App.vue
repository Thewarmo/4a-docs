<template>
  
  <div id="app" class="app">

    <div class="header">
      <img src="https://t3.ftcdn.net/jpg/02/19/11/50/360_F_219115016_dfjaHTX1T5NfuYpdnpAKX0wG1haMMxVp.jpg" class="img-thumbnail" alt="..." id="image">
      <h1 class="text-dark"> MerkaTic </h1>
      <nav>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <!-- <button v-if="is_auth" v-on:click="admin"> Administrar </button> -->
        <button v-if="is_auth" v-on:click="tienda"> Tienda </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button>
        </div>
      </nav>
    </div>

    
  
    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
    
  
    <!-- footer -->
    <footer class="mainfooter " role="contentinfo">
  <div class="footer-middle">
  <div class="container container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Contacto</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Telefono : 3480000</a></li>
            <li><a href="#">Direccion : Calle falsa 123</a></li>
            <li><a href="#">Email: farmaciaapp@mail.com</a></li>
           
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Redes Sociales</h4>
          <ul class="list-unstyled">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Links relacionados</h4>
          <ul class="list-unstyled">
            <li><a href="#">Wikipedia</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Whatssap</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2018 - Company Name.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
<!-- /footer -->

  </div>

</template>


<script>
export default {
  name: 'App',

  computed: {
    is_auth: {
      get: function() {
        return this.$route.meta.requiresAuth;
      },
      set: function() { }
    }
    
  },

  methods:{
    

    admin: function(){
      
      this.$router.push({name: "admin"})
    },

    tienda: function(){ 
      console.log(this.$router.push({name: "productos"}))
      this.$router.push({name: "productos"})
      
    },

    loadLogIn: function(){
      
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
      localStorage.setItem("rol",null);
      alert("Autenticación Exitosa");
			this.loadHome();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadAccount: function () {
			this.$router.push({ name: "account" });
		},

    loadTransaction: function(){
      this.$router.push({ name: "transaction" });
    },

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
      this.loadLogIn();
		},
  }
}
</script>


<style>

  body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0;
    background-image: url("https://i.imgur.com/Keu077d.jpeg");
    border : 4px solid #4a9c76;
    /* width: 100%;
    height: 10vh; 
    min-height: 100px; */

    background-color: #4a9c76 ;
    color:#E5E7E9  ;

     display: flex;
    justify-content: space-between;
    /*align-items: center; */
  }

  #image{
    width: 100px;
    height: 100px;
    margin-left: 5px;
  }

  .header h1{
    margin: 6px;
    width: 20%;
    text-align: center;
  }

  .header nav {
    height: 100%;
    width: 30%;
    border: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }

  .header nav button{
    margin-top: 8px;
    color: #E5E7E9;
    background: #4a9c76;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  
  .main-component{
    height: 75vh;
    
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }

 
  footer {
  background: #4a9c76;
  background: -webkit-linear-gradient(59deg, #7ed8ae, #013f22);
  background: linear-gradient(59deg, #5eb18a, #035a31);
  color: rgb(252, 248, 248);
   
}

footer a {
  color: rgb(255, 254, 254);
  font-size: 14px;
  transition-duration: 0.2s;
}

footer a:hover {
  color: #FA944B;
  text-decoration: none;
}

.copy {
  font-size: 12px;
  padding: 10px;
  border-top: 1px solid #fdfbfb;
}

.footer-middle {
  padding-top: 2em;
  color: #fcfcfc;
}


/*SOCİAL İCONS*/

/* footer social icons */

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}


/* footer social icons */

.social-network a.icoFacebook:hover {
  background-color: #4a9c76;
}

.social-network a.icoLinkedin:hover {
  background-color: #4a9c76;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoLinkedin:hover i {
  color: #fff;
}

.social-network a.socialIcon:hover,
.socialHoverClass {
  color: #4a9c76;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 15px;
}

.social-circle li i {
  margin: 0;
  line-height: 30px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

.social-circle i {
  color: #595959;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}

.social-network a {
  background-color: #F9F9F9;
}




</style>
