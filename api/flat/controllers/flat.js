'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
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
