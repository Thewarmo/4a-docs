//Se llama al typedef (esquema) de cada submodulo
//const accountTypeDefs = require('./account_type_defs');
//const transactionTypeDefs = require('./transacction_type_defs');
const authTypeDefs = require('./auth_type_defs');
const productTypeDefs = require('./product_type_def')
//Se unen
const schemasArrays = [authTypeDefs,productTypeDefs];
//Se exportan
module.exports = schemasArrays;