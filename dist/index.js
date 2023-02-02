"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _titleCard = _interopRequireDefault(require("./titleCard"));
var _titleCard2 = require("./titleCard.schema");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  component: _titleCard.default,
  schema: _titleCard2.schema,
  ui: _titleCard2.ui
};
exports.default = _default;
module.exports = exports.default;