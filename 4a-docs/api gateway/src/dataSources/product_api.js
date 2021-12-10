const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

let lista = {};

class ProduAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.productos_api_url;
    }
    async createProduct(producto){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
            return await this.post(`/productos/`, producto);  
    }
    async traerProducto(idProducto){
        return await this.get(`/productos/${idProducto}/`);
    }
    async updateProducto(producto){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        let idProducto = producto.idProducto;
        return await this.put(`/prodAdd/${idProducto}`,producto)
    }
    async delProducto(idProducto){
        let id = idProducto;
        return await this.delete(`/eliminar/${id}/`);
    }
    async productsAll(){
       return await this.get(`/productos/all`);
    }

    async prodByName(nombre_producto){
        return await this.get(`/productosName/${nombre_producto}/`);
    }
    

}
module.exports = ProduAPI;