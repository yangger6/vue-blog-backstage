'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.select = exports.remove = exports.add = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _modelBlog = require('../mongo/model/modelBlog');

var _modelBlog2 = _interopRequireDefault(_modelBlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param ctx 传入的参数
 * @param next 下一个函数
 */
var add = exports.add = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var blog, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              blog = new _modelBlog2.default(ctx.parameters);

              blog.save();
              result = {
                msg: 'success',
                data: blog
              };

              ctx.body = result;
            } catch (e) {
              console.log(e);
              ctx.body = 'mongo server is Error occurred';
            }
            _context.next = 3;
            return next();

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function add(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); /**
      * Created by yangger on 2017/6/7.
      */
var remove = exports.remove = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
    var removeIds;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            removeIds = ctx.parameters._id;
            _context2.next = 4;
            return _modelBlog2.default.remove({ _id: { $in: removeIds } });

          case 4:
            ctx.body = 'success';
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            ctx.body = 'mongo server is Error occurred';

          case 11:
            _context2.next = 13;
            return next();

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 7]]);
  }));

  return function remove(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var select = exports.select = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {
    var query, fields, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            query = ctx.parameters.key; //  需要查询的键名

            fields = ctx.parameters.value; //  需要查询的内容

            if (!(query === 'BlogAll')) {
              _context3.next = 9;
              break;
            }

            _context3.next = 6;
            return _modelBlog2.default.find({}, fields);

          case 6:
            data = _context3.sent;
            _context3.next = 18;
            break;

          case 9:
            if (!(query === 'id')) {
              _context3.next = 15;
              break;
            }

            _context3.next = 12;
            return _modelBlog2.default.findById(fields);

          case 12:
            data = _context3.sent;
            _context3.next = 18;
            break;

          case 15:
            _context3.next = 17;
            return _modelBlog2.default.findByKey(query, fields);

          case 17:
            data = _context3.sent;

          case 18:
            ctx.body = data;
            _context3.next = 25;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3['catch'](0);

            console.log(_context3.t0);
            ctx.body = 'mongo server is Error occurred';

          case 25:
            _context3.next = 27;
            return next();

          case 27:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 21]]);
  }));

  return function select(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var update = exports.update = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, next) {
    var updateId, newData, blog;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            updateId = ctx.parameters._id;

            delete ctx.parameters._id;
            // 这里的写法很蠢  但是接直接把ctx.parameters 丢进去的话 mongo的utils会报错 return v instanceof Document || RangeError: Maximum call stack size exceeded
            newData = {
              'title': ctx.parameters.title,
              'author': ctx.parameters.author,
              'body': ctx.parameters.body,
              'markdown': ctx.parameters.markdown,
              'comments': ctx.parameters.comments,
              'hidden': ctx.parameters.hidden,
              'tags': ctx.parameters.tags,
              'meta': ctx.parameters.meta
            };
            _context4.next = 6;
            return _modelBlog2.default.findByIdAndUpdate(updateId, { $set: newData });

          case 6:
            blog = {
              msg: 'success'
            };
            _context4.next = 9;
            return _modelBlog2.default.findById(updateId);

          case 9:
            blog.data = _context4.sent;

            ctx.body = blog;
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4['catch'](0);

            console.log(_context4.t0);
            ctx.body = 'mongo server is Error occurred';

          case 17:
            _context4.next = 19;
            return next();

          case 19:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 13]]);
  }));

  return function update(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();