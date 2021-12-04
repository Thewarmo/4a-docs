//const accountResolver = require('./account_resolver');
//const transactionResolver = require('./transaction_resolver');
const authResolver = require('./auth_resolver');
const prodResolver = require('./prod_resolvers')
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,prodResolver);
module.exports = resolvers;