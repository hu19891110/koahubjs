"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.httpMiddleware = httpMiddleware;

var _url = require("url");

var _pathToRegexp = require("path-to-regexp");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _skip = require("./skip.middleware");

var _skip2 = _interopRequireDefault(_skip);

var _log = require("./../util/log.util");

var _http = require("./../util/http.util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// run http
function httpMiddleware() {

    var http = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
            var routers, regexp, regres, key, url, path, method, params, keys, kk, k, router, routerMethod;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            routers = koahub.configs.router;
                            regexp = void 0, regres = void 0, key = void 0, url = void 0, path = void 0, method = ctx.method, params = [], keys = [];

                            if (!(routers && routers.length)) {
                                _context.next = 25;
                                break;
                            }

                            _context.t0 = _regenerator2.default.keys(routers);

                        case 4:
                            if ((_context.t1 = _context.t0()).done) {
                                _context.next = 14;
                                break;
                            }

                            kk = _context.t1.value;

                            regexp = (0, _pathToRegexp2.default)(routers[0], keys);
                            regres = regexp.exec(ctx.path);

                            if (!regres) {
                                _context.next = 12;
                                break;
                            }

                            for (k in keys) {
                                params[keys[k].name] = regres[parseInt(k) + 1];
                            }
                            key = kk;
                            return _context.abrupt("break", 14);

                        case 12:
                            _context.next = 4;
                            break;

                        case 14:
                            if (!key) {
                                _context.next = 21;
                                break;
                            }

                            router = routers[key][1];

                            if (_lodash2.default.isString(router)) {
                                path = router;
                                url = router + (0, _http.urlObjToParam)((0, _url.parse)(ctx.url).query, params);
                            } else {
                                routerMethod = router[method.toLowerCase()];

                                if (routerMethod) {
                                    path = routerMethod;
                                    url = routerMethod + (0, _http.urlObjToParam)((0, _url.parse)(ctx.url).query, params);
                                } else {
                                    (0, _log.http)('Not Found Router');
                                }
                            }

                            _context.next = 19;
                            return (0, _http.runAction)((0, _assign2.default)(ctx, { path: path, url: url }), next);

                        case 19:
                            _context.next = 23;
                            break;

                        case 21:
                            _context.next = 23;
                            return (0, _http.runAction)(ctx, next);

                        case 23:
                            _context.next = 27;
                            break;

                        case 25:
                            _context.next = 27;
                            return (0, _http.runAction)(ctx, next);

                        case 27:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function http(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();

    http.skip = _skip2.default;

    return http;
}
//# sourceMappingURL=http.middleware.js.map