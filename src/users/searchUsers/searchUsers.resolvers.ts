import { Resolvers } from "./../../types.d";
import client from "../../client";

const resolvers: Resolvers = {
  Query: {
    searchUsers: async (_, { keyword }) =>
      client.user.findMany({
        where: {
          username: {
            startsWith: keyword.toLowerCase(),
          },
        },
      }),
  },
};

export default resolvers;
