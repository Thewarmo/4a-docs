const prodResolver ={
    Query:{
        prodById:(_,{ idProducto }, { dataSources } )=>{         
           return dataSources.ProdAPI.getProducto(idProducto);
          
        },
        accountByUsername: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
            return await dataSources.ProdAPI.accountByUsername(username)
            else
            return null
            
        },
      
        
    },
    Mutation: {
        registrarProducto: async(_, { prodInput }, {dataSources})=>{
            const producto ={
                idProducto: prodInput.idProducto,
                nombre_producto: prodInput.nombre_producto,
                precio: prodInput.precio,
                cantidad: prodInput.cantidad,
                imagen: prodInput.imagen
            }
            await dataSources.ProdAPI.createProduct(producto);
        },
        borrarProducto: async(_, { idProducto }, {dataSources})=>{
            await dataSources.ProdAPI.delProducto(idProducto);
        },
        actualizarProd: async(_, { idProducto },  { dataSources})=>{
            await dataSources.ProdAPI.putProducto(idProducto);
            
        }
    }

};

module.exports = prodResolver;
