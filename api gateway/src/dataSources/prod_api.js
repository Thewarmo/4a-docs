const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server')
class ProdAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.productos_api_url;
    }
    async createProduct(producto){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.post(`/productos/`, producto);
    }
    async getProducto(idProducto){
        return await this.get(`/productos/${idProducto}`);
    }
    async putProducto(idProducto){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.put(`/prodAdd/${idProducto}`,producto)
    }
    async delProducto(idProducto){
        return await this.delete(`/eliminar/${idProducto}`);
    }

}
module.exports = ProdAPI;