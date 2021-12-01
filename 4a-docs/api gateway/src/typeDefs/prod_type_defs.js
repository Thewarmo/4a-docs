const { gql } = require('apollo-server');

const authTypeDefs = gql `

type Producto{
    idProducto: Int!
    nombre_producto: String!
    precio: String
    cantidad: Float
    imagen: String
}

input RegistrarProd{
    idProducto: Int!
    nombre_producto: String!
    precio: String
    cantidad: Float
    imagen: String
}

input BorrarProducto{
    idProducto: Int!
}


type Mutation{
    registrarProducto(productInput: RegistrarProd): Producto!
    borrarProducto(borrarProd: BorrarProducto): String!
    actualizarProd(producto: ActualizarProducto,idProducto: Int):Producto
}

type Query{
    prodById(idProducto: Int!): Producto!
    prodAll:[Producto]
}

`