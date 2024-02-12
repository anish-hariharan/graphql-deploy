"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_1 = require("./src/resolver/resolver");
var typeDefs_1 = __importDefault(require("./src/typeDefs/typeDefs"));
var apollo_server_1 = require("apollo-server");
var apollo_server_lambda_1 = require("apollo-server-lambda");
var createLambdaServer = function () {
    return new apollo_server_lambda_1.ApolloServer({
        typeDefs: typeDefs_1.default,
        resolvers: resolver_1.TestResolver,
        introspection: true,
    });
};
var createLocalServer = function () {
    return new apollo_server_1.ApolloServer({
        typeDefs: typeDefs_1.default,
        resolvers: resolver_1.TestResolver,
        introspection: true,
    });
};
var server = createLocalServer();
var lambdaServer = createLambdaServer();
lambdaServer.createHandler({ cors: { origin: "*" } });
server.listen().then(function (_a) {
    var url = _a.url;
    return console.log("The url is ", url);
});
