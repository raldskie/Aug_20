'use strict';
var Handlers = require('./handlers'), internals = {};

internals.endpoints = [

    {
        method: ['GET'],
        path: '/',
        handler: Handlers.log_in,
        config: {
            auth: {
                strategy: 'standard',
                mode: 'try'
            }
        }
    },

    {
        method: ['GET', 'POST'],
        path: '/{any*}',
        handler: Handlers.error404,
        config: {
            description: '404',
            tags: ['api'],
        }
    },

    {
        method: ['POST'],
        path: '/authenticate',
        handler: Handlers.authenticate,
        config: {
            auth: false
        }
    },

    {
        method: ['GET'],
        path: '/sign-up',
        handler: Handlers.sign_up,
        config: {
            auth: false
        }
    },

    {
        method: ['POST'],
        path: '/save-user',
        handler: Handlers.save_user,
        config: {
            auth: false
        }
    },


    {
        method: ['GET'],
        path: '/sign-out',
        handler: Handlers.sign_out,
        config: {
            auth: false
        }
    },


];

module.exports = internals;