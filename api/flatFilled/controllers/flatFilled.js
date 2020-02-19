'use strict';

/**
 * A set of functions called "actions" for `FlatFilled`
 */

module.exports = {
  findFilled: async ctx => {
    let result;

    try {
      result = await strapi.controllers.flat.find(ctx);
    } catch (err) {
      strapi.log.error(err);
      result = [];
    }

    result = result.map(({ residents, ...flat }) => ({
      ...flat,
      hasResident: residents.length > 0,
    }));

    ctx.send(result)
  }
};
