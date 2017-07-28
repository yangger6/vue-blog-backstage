/**
 * Created by yangger on 2017/7/29.
 */
global.Promise = require('bluebird')
require('mongoose').Promise = global.Promise
require('./lib/app')
