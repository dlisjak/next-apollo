const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const typeDefs = `
type Collection {
  id: ID!
  title: String!
  items: [Item!]!
}
type Item {
  id: ID!
  name: String!
  price: Float!
  imageUrl: String!
  collection: Collection
}
type Query {
  items: [Item!]!
  collections: [Collection!]!
  collection(id: ID!): Collection
  getCollectionsByTitle(title: String): Collection
}
`;

const resolvers = {
  Query: {
    items: (root, args, ctx, info) => ctx.prisma.items({}, info),
    collections: (root, args, ctx, info) => ctx.prisma.collections({}, info),
    collection: (root, { id }, ctx) => ctx.prisma.collection({ id }),
    getCollectionsByTitle: (root, { title }, ctx) =>
      ctx.prisma.collection({ title })
  },
  Item: {
    collection: ({ id }, args, context) => {
      return context.prisma.item({ id }).collection();
    }
  },
  Collection: {
    items: ({ id }, args, context) => {
      return context.prisma.collection({ id }).items();
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
});

const options = {
  cors: {
    origin: ['http://localhost:3000']
  },
  endpoint: '/graphql',
}

server.start(options, ({ port, endpoint }) => console.log(`running on http://localhost:${port}${endpoint}`));
