const prodResolver ={
    Query:{
        prodById: async (_,{ idProducto }, { dataSources } )=>{         
           return await dataSources.productAPI.traerProducto(idProducto);
          
        },

        prodAll: async(_,{  },{ dataSources })=>{
            return await dataSources.productAPI.productsAll();
        },
        prodName: async(_,{ nombre_producto }, { dataSources })=>{
            console.log(nombre_producto + " en el resolver");
            return await dataSources.productAPI.prodByName(nombre_producto);
        }
       
    },
    Mutation: {
        crearProducto: async(_, { productInput }, {dataSources})=>{
            const producto ={
                idProducto: productInput.idProducto,
                nombre_producto: productInput.nombre_producto,
                precio: productInput.precio,
                cantidad: productInput.cantidad,
                imagen: productInput.imagen
            }
            return await dataSources.productAPI.createProduct(producto);

        },
        borrarProducto: async(_, { idProducto }, {dataSources})=>{

            return await dataSources.productAPI.delProducto(idProducto);
        },
        actualizarProducto: async(_, { productUpdate },  { dataSources})=>{
            
            const acproducto ={
                idProducto: productUpdate.idProducto,
                nombre_producto: productUpdate.nombre_producto,
                precio: productUpdate.precio,
                cantidad: productUpdate.cantidad,
                imagen: productUpdate.imagen
            }
            console.log(acproducto);
            return await dataSources.productAPI.updateProducto(acproducto);
            
        }
    }

};

module.exports = prodResolver;
