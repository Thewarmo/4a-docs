const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ProdAPI = require('./dataSources/prod_api');
const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');
const server = new ApolloServer({
context: authentication,
typeDefs,resolvers,
dataSources: () => ({
prodAPI: new ProdAPI(),
authAPI: new AuthAPI(),
}),
introspection: true,
playground: true
});
server.listen(process.env.PORT || 1234).then(({ url }) => {
console.log(`🚀 Server ready at ${url}`);
});