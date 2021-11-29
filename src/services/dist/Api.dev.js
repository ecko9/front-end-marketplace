"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var API = _axios.default.create({
  baseURL: 'http://localhost:3000'
});

API.interceptors.request.use(function (_ref) {
  var headers = _ref.headers,
      config = _objectWithoutProperties(_ref, ["headers"]);

  return _objectSpread({}, config, {
    headers: _objectSpread({}, headers, {
      'Content-Type': 'application/json',
      'Authorization': "Bearer   ".concat(headers.Authorization || _jsCookie.default.get('token'))
    })
  });
}); // eslint-disable-next-line no-unused-vars

var handleCatchError = function handleCatchError(error) {
  if (error.response) {
    console.log(error); // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }

  console.log(error.config);
};

var handleJwt = function handleJwt(response) {
  if (response.headers.authorization) {
    var jwt = response.headers.authorization.split(" ")[1];

    _jsCookie.default.set('token', jwt);
  }
};

var APIManager =
/*#__PURE__*/
function () {
  function APIManager() {
    _classCallCheck(this, APIManager);
  }

  _createClass(APIManager, null, [{
    key: "registerUser",
    value: function registerUser(email, password, passwordConfirmation, username) {
      var response;
      return regeneratorRuntime.async(function registerUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(API.post('/users', {
                user: {
                  email: email,
                  password: password,
                  password_confirmation: passwordConfirmation,
                  username: username,
                  admin: true
                }
              }));

            case 2:
              response = _context.sent;
              handleJwt(response);
              return _context.abrupt("return", _objectSpread({}, response.data, {
                status: response.status
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "signInUser",
    value: function signInUser(email, password) {
      var response;
      return regeneratorRuntime.async(function signInUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(API.post('/users/sign_in', {
                user: {
                  email: email,
                  password: password
                }
              }));

            case 2:
              response = _context2.sent;
              handleJwt(response);
              return _context2.abrupt("return", _objectSpread({}, response.data, {
                status: response.status
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "signOutUser",
    value: function signOutUser() {
      var response;
      return regeneratorRuntime.async(function signOutUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(API.delete('/users/sign_out'));

            case 2:
              response = _context3.sent;

              _jsCookie.default.remove("token");

              return _context3.abrupt("return", _objectSpread({}, response.data, {
                status: response.status
              }));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return APIManager;
}();

exports.default = APIManager;