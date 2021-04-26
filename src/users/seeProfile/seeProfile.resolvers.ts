import { Resolvers } from "./../../types.d";

const resolvers: Resolvers = {
  Query: {
    seeProfile: (_, { username }, { client }) =>
      client.user.findUnique({
        where: {
          username,
        },
      }),
  },
};

export default resolvers;
