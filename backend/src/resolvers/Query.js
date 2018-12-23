const { forwardTo } = require('prisma-binding');

const Query = {
  games: forwardTo('db')
  // async games(parent, args, ctx, info) {
  //   const games = await ctx.db.query.games();
  //   return games;
  // }
};

module.exports = Query;
