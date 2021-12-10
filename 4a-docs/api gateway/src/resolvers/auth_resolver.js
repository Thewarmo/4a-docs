const { throwHttpGraphQLError } = require("apollo-server-core/dist/runHttpQuery");
const { formatApolloErrors } = require("apollo-server-errors");

const usersResolver = {
    Query: {
    userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
        if (userId == userIdToken)
            return dataSources.authAPI.getUser(userId)
        else
            return dataSources.authAPI.getUser(userId)
    
    },userAll: async (_,{ },{ dataSources})=>{
        return await dataSources.authAPI.usAll()
    }
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => { 

            if(userInput.rol=="admin"){
                return throwHttpGraphQLError({
                    "errors": [
                      {
                        "message": "no se pueden crear usuarios de tipo admin"
                      }
                    ]
                  });
            }else{
                const authInput = {
                    username: userInput.username,
                    password: userInput.password,
                    name: userInput.name,
                    email: userInput.email,
                    rol: userInput.rol
                
                  
            }
            return await dataSources.authAPI.createUser(authInput);  
    }
    },
    logIn: (_, { credentials }, { dataSources }) =>dataSources.authAPI.authRequest(credentials),
    refreshToken: (_, { refresh }, { dataSources }) =>
    dataSources.authAPI.refreshToken(refresh),
    
    }
    };
    module.exports = usersResolver;