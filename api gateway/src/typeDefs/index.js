//Se llama al typedef (esquema) de cada submodulo
//const accountTypeDefs = require('./account_type_defs');
//const transactionTypeDefs = require('./transacction_type_defs');
const authTypeDefs = require('./auth_type_defs');
const prodTypeDefs = require('./prod_type_defs')
//Se unen
const schemasArrays = [authTypeDefs, prodTypeDefs];
//Se exportan
module.exports = schemasArrays;