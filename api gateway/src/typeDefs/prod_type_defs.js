const { gql } = require('apollo-server');

const prodTypeDefs = gql `

type Producto{
    idProducto: Int!
    nombre_producto: String!
    precio: Float
    cantidad: Int
    imagen: String
}

type Account {
    username: String!
    balance: Int!
    lastChange: String!
    }

input RegistrarProd{
    idProducto: Int!
    nombre_producto: String!
    precio: Float
    cantidad: Int
    imagen: String
}

input BorrarProducto{
    idProducto: Int!
}

input ActualizarProducto{
    idProducto: Int
    nombre_producto: String
    precio: String
    cantidad: Float
    imagen: String
}


type Mutation{
    registrarProducto(productInput: RegistrarProd): Producto!
    borrarProducto(borrarProd: BorrarProducto): String!
    actualizarProd(producto: ActualizarProducto,idProducto: Int):Producto
}

type Query{
    prodById(idProducto: Int!): Producto!
    prodAll: [Producto]!
    accountByUsername(username: String!): Account
}

`;

module.exports = prodTypeDefs;