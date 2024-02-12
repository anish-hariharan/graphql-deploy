import { TestResolver } from "./src/resolver/resolver";
import typedefs from "./src/typeDefs/typeDefs";
import { ApolloServer } from "apollo-server";

const createLocalServer = () =>
  new ApolloServer({
    typeDefs: typedefs,
    resolvers: TestResolver,
    introspection: true,
  });

const server = createLocalServer();

server.listen().then(({ url }) => console.log("The url is ", url));
