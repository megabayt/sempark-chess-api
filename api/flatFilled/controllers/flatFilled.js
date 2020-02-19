'use strict';

/**
 * A set of functions called "actions" for `FlatFilled`
 */

module.exports = {
  findFilled: async ctx => {
    let result;

    try {
      result = await strapi
        .query('flat')
        .model
        .fetchAll();
      result = result.serialize();
    } catch (err) {
      strapi.log.error(err);
      result = [];
    }

    result = result.map(({ users, ...flat }) => ({
      ...flat,
      hasUser: users.length > 0,
    }));

    ctx.send(result)
  }
};
