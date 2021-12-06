//const accountResolver = require('./account_resolver');
//const transactionResolver = require('./transaction_resolver');
const authResolver = require('./auth_resolver');
const produResolver = require('./product_resolver')
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,produResolver);
module.exports = resolvers;