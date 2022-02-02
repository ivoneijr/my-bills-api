import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { resolvers } from "./prisma/generated/type-graphql";
import { context } from "./context";

const app = async () => {
  const schema = await buildSchema({
    resolvers: [...resolvers],
  });

  const server = new ApolloServer({ schema, context });

  server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  });
};

app();
