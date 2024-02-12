import { TestResolver } from "./src/resolver/resolver";
import typedefs from "./src/typeDefs/typeDefs";
import { ApolloServer } from "apollo-server";
import { ApolloServer as ApolloServerLamda, gql } from "apollo-server-lambda";

const createLambdaServer = () =>
  new ApolloServerLamda({
    typeDefs: typedefs,
    resolvers: TestResolver,
    introspection: true,
  });

const createLocalServer = () =>
  new ApolloServer({
    typeDefs: typedefs,
    resolvers: TestResolver,
    introspection: true,
  });

const server = createLocalServer();
const lambdaServer = createLambdaServer();

lambdaServer.createHandler({ cors: { origin: "*" } } as Parameters<
  typeof ApolloServerLamda.prototype.createHandler
>[0]);

server.listen().then(({ url }) => console.log("The url is ", url));
