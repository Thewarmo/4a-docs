<template>
<!-- nav bar -->
<div>
  <nav class="navbar is-transparent is-primary">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <img src="https://i.pinimg.com/originals/6f/f5/42/6ff542d576e86d21af43d6cf3f3b89a1.jpg" alt="Bulma: a modern CSS framework based on Flexbox">
    </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="">
        Inicio
      </a>
      
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="">
          Productos
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="">
            Frutas
          </a>
          <a class="navbar-item" href="">
            Verduras
          </a>
          <a class="navbar-item" href="">
            Carnes
          </a>
          <a class="navbar-item" href="">
            Lacteos
          </a>
          <a class="navbar-item" href="">
            Vinos y licores
          </a>
        </div>
      </div>
       <a class="navbar-item" href="">
                <input class="input" type="search" placeholder="Buscar..."/>
                <span class="icon is-small is-right ml-2"><i class="fas fa-search"></i></span>
          </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
              <span>
                Iniciar Sesion
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
              <span class="icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
              <span>Pagar</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
<!-- fin nav bar -->

<!-- carousel -->

<!-- fin carousel -->
  
</template>
<script>


</script>

<style>
   
</style>