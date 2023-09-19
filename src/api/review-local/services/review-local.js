'use strict';

/**
 * review-local service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review-local.review-local');
