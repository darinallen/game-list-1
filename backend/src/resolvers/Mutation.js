const Mutations = {
  async createGame(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const game = await ctx.db.mutation.createGame(
      {
        data: {
          ...args
        }
      },
      info
    );
    return game;
  }
};

module.exports = Mutations;
