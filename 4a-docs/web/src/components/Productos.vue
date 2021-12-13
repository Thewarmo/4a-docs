<template>
    <!-- nav bar de crud -->
 <ul class="nav nav-tabs" v-if="rol=='admin'">
  <li class="nav-item">
    <a class="nav-link" href="#" @click="activo='listar'">Lista de productos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" @click="crear">Crear</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" @click="modificar">Modificar</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " @click="eliminar">Eliminar</a>
  </li>
</ul>
    <!-- fin nav bar crud -->

    <button class="btn btn-dark mt-2" @click="validarUsuario" v-if="rol!='admin'">Ingreso Admins</button>

    <!-- card de usuarios -->
    <div class="container box">
        <div class="card-group " v-if="rol!='admin'">
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
  <div class="card" v-for="prod in ProdAll" :key="prod">
    <div class="card-body">
      <h5 class="card-title"><Strong>{{prod.nombre_producto}}</Strong></h5>
      <p class="card-text"><strong>PLU:</strong> {{prod.idProducto}} ||<strong> Stock :</strong> {{prod.cantidad}}</p>
      <p class="card-text"><small class="text-muted"><strong> Precio:</strong> {{prod.precio}}</small></p>
      <a href="#" class="btn btn-primary" @click="botones">Comprar</a>
    </div>
  </div>
    </div>
    </div>
</div>
    <!-- fin de usuarios -->

    <!-- inicio card de productos -->
    <div class="container">
        <div class="card-group " v-if="activo=='listar'">
            <h3 class="mt-2"><strong>  Productos disponibles </strong></h3>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
            
        <div class="card " v-for="prod in ProdAll" :key="prod">
            <div class="col">
                
        <div class="card-body ">
            <h5 class="card-title"><Strong>{{prod.nombre_producto}}</Strong></h5>
            <p class="card-text"><strong>PLU:</strong> {{prod.idProducto}} ||<strong> Stock :</strong> {{prod.cantidad}} ||<strong> Precio:</strong> {{prod.precio}} </p>
        <a href="#" class="btn btn-primary" @click="botones">Comprar</a>
        </div>
    </div>
     </div>
  </div>
</div>
</div>
    <!-- fin card productos -->

    <!-- formulario crear -->
    <div class="container mt-4" v-if="activo=='crear'">
        <h3 class="mt-2"><strong>Creacion de productos</strong></h3>
    <div class="mb-3" >
        <label for="exampleFormControlInput1" class="form-label">id Producto</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="PLU" v-model="producto.idProducto">
    </div>
    <div class="mb-3" >
        <label for="exampleFormControlInput1" class="form-label">Nombre Producto</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nombre" v-model="producto.nombre_producto">
        </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Precio</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="precio" v-model="producto.precio">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Cantidad</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="cantidad" v-model="producto.cantidad">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Imagen</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="imagen" v-model="producto.imagen">
    </div>
    <button class="btn btn-primary" @click="validarProducto">Crear</button>
    </div>
    <!-- fin de formulario -->

    <!-- formulario modificar -->
    <div class="container mt-4" v-if="activo=='modificar'">
        <h3 class="mt-2"><strong>Modificacion de productos</strong></h3>
    <div class="mb-3" >
        <label for="exampleFormControlInput1" class="form-label">id Producto</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="PLU" v-model="producto.idProducto">
    </div>
    <div class="mb-3" >
        <label for="exampleFormControlInput1" class="form-label">Nombre Producto</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nombre" v-model="producto.nombre_producto">
        </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Precio</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="precio" v-model="producto.precio">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Cantidad</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="cantidad" v-model="producto.cantidad">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Imagen</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="imagen" v-model="producto.imagen">
    </div>
    <button class="btn btn-primary" @click="updateProducto" >Modificar</button>
    </div>
    <!-- fin de formulario -->

    <!-- inicio formulario eliminar -->
    <div class="container mt-4" v-if="activo=='eliminar'">
        <h3 class="mt-2"><strong>Eliminacion de productos</strong></h3>
    <div class="mb-3" >
        <label for="exampleFormControlInput1" class="form-label">Id producto</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nombre" v-model="producto.idProducto">
        </div>
        <button class="btn btn-primary" @click="eliminarProducto">Eliminar</button>
    </div>
     
</template>
<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";



export default{
    name: "Productos",
    computed:{
        
    },
    methods: {
        botones: function(){
            alert("se agrego el producto al carrito de compras")
        },
        listar: function(){
            this.activo="listar"
        },
        crear: function(){
            this.activo='crear'
        },
        modificar: function(){
            this.activo="modificar"
        },
        eliminar: function(){
            this.activo="eliminar"
        },
            validarProducto(){
                this.producto.idProducto=parseInt(this.producto.idProducto);
                this.producto.precio=parseFloat(this.producto.precio);
                this.producto.cantidad=parseInt(this.producto.cantidad);
                this.crearAsyncProducto(this.producto);
            },
            updateProducto(){
                this.producto.idProducto=parseInt(this.producto.idProducto);
                this.producto.precio=parseFloat(this.producto.precio);
                this.producto.cantidad=parseInt(this.producto.cantidad);
                console.log(this.producto);
                this.modificarAsyncProducto(this.producto);
                this.consultarAsyncProducto(this.producto.idProducto);
            },eliminarProducto(){
                this.producto.idProducto=parseInt(this.producto.idProducto);
                try {
                    this.eliminarAsyncProducto(this.producto.idProducto)
                } catch (error) {
                    alert(error)
                }
                
            },
            validarUsuario(){
                 this.rol=localStorage.getItem("rol");
                 if(this.rol!='admin'){
                     alert("el usuario no es admin");
                 }
                 
            }

        ,crearAsyncProducto: async function(producto){
            await this.$apollo
            .mutate({
                mutation:gql`
                    mutation Mutation($productInput: ProductoInput) {
                            crearProducto(productInput: $productInput) {
                            idProducto
                            nombre_producto
                            precio
                            cantidad
                            imagen
                    }
                }
                `,
                    variables:{
                        productInput:producto,
                    },
            }).then((result)=>{
                alert("Producto creado");
            })
        },
        modificarAsyncProducto: async function(producto){
            await this.$apollo
            .mutate({
                mutation: gql`
                    mutation ActualizarProducto($productUpdate: ActualizarProducto) {
                        actualizarProducto(productUpdate: $productUpdate) {
                            nombre_producto
                            precio
                            cantidad
                            imagen
                        }
                    }
                `,
                    variables:{
                        productUpdate : producto
                    },
            }).then((result)=>{
                alert("producto modificado")
            })

        },
        consultarAsyncProducto: async function(idprod){
            await this.$apollo
                .query({
                    query: gql`
                        query Query($idProducto: Int!) {
                            prodById(idProducto: $idProducto) {
                                            idProducto
                                            nombre_producto
                                            precio
                                            cantidad
                                            imagen
                    }
                }
                    `, variables:{
                        idProducto:idprod
                    },
                }).then((result)=>{
                    alert(`
                           id_producto : ${result.data.prodById.idProducto},
                           nombre Producto :  ${result.data.prodById.nombre_producto},
                           precio :   ${result.data.prodById.precio},
                           cantidad :  ${result.data.prodById.cantidad}
                    `)
                }) 

        },
        eliminarAsyncProducto: async function(idprod){
            await this.$apollo
            .mutate({
                mutation: gql`
                    mutation Mutation($idProducto: Int!) {
                            borrarProducto(idProducto: $idProducto)
                        }
                `,
                    variables:{idProducto:idprod},
            }).then((result)=>{
                alert(`se elimino el producto ${idprod}`)
            }).catch((e)=>{
                alert("el producto no existe");
            })



        },
        validarAsyncUsuario: async function(idUsuario){
            await this.$apollo
            .query({
                query : gql`
                    query Query($userId: Int!) {
                        userDetailById(userId: $userId) {
                                        rol
                            }
                        }
                `,
                    variables:{userId:idUsuario}
            }).then((result)=>{
                 return result.data.userDetailById.rol
                 
            })
        }

    },
    
    data: function(){
        return{
            ProdAll:{
                prodAll : {
                       idProducto:"",
                        nombre_producto:"",
                        precio:"",
                        cantidad:"",
                        imagen:""
            }

            },activo : "",
            producto:{
                        idProducto:0,
                        nombre_producto:"",
                        precio:0,
                        cantidad:0,
                        imagen:""
            },
              idUsuario: jwt_decode(localStorage.getItem("token_refresh")).user_id,
              rol:""
              
                
            
        }      
            
        
    },
    apollo: {
        ProdAll: {
        query: gql`
            query ProdAll {
            prodAll {
                idProducto
                nombre_producto
                precio
                cantidad
                imagen
                }
            }
        `,
        update : data => data.prodAll,
    },
    },
    
}
    
</script>

<style>
    .box {
            
            display: flex;
            flex-flow: row wrap;
          }
</style>
