const { gql } = require('apollo-server');

const prodTypeDefs = gql `

type Producto{
    idProducto: Int!
    nombre_producto: String!
    precio: Float
    cantidad: Int
    imagen: String
}


input ProductoInput{
    idProducto: Int!
    nombre_producto: String!
    precio: Float
    cantidad: Int
    imagen: String
}


input ActualizarProducto{
    idProducto: Int!
    nombre_producto: String
    precio: Float
    cantidad: Int
    imagen: String
}


type Mutation{
    crearProducto(productInput: ProductoInput): Producto
    borrarProducto(idProducto: Int!): String
    actualizarProducto(productUpdate: ActualizarProducto): Producto
}

type Query{
    prodById(idProducto: Int!): Producto!
    prodAll: [Producto]
    prodName(nombre_producto: String!): [Producto]
}

`;

module.exports = prodTypeDefs;