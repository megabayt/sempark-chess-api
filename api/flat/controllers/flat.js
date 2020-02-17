'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findFilled: async (obj, options, ctx) => {
    const result = await strapi.controllers.flats.findAll(ctx);

    strapi.log.info(result);

    return ctx.body.flats;
  }
};
