const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class AuthAPI extends RESTDataSource {
constructor() {
super();
this.baseURL = serverConfig.auth_api_url;
}
async createUser(user) {
user = new Object(JSON.parse(JSON.stringify(user)));
return await this.post(`/user/`, user);
}
async getUser(userId) { 
    let id= userId;
    console.log(id);
    return await this.get(`/user/${userId}/`);
}
async authRequest(credentials) {
credentials = new Object(JSON.parse(JSON.stringify(credentials)));
return await this.post(`/login/`, credentials);
}
async refreshToken(token) {
token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
return await this.post(`/refresh/`, token);
}
async usAll(){
    return await this.get(`user/all`);
}

}
module.exports = AuthAPI;