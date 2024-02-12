import { ApolloServer, gql } from "apollo-server-lambda";
import typedefs from "../src/typeDefs/typeDefs";
import { TestResolver } from "../src/resolver/resolver";

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: TestResolver,
  introspection: true,
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
  },
} as Parameters<
typeof ApolloServer.prototype.createHandler
>[0]);
;
