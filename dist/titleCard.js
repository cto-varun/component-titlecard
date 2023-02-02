"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TitleCard;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _reactRouterDom = require("react-router-dom");
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Title
} = _antd.Typography;
function TitleCard(props) {
  const {
    breadcrumbs,
    title
  } = props.component ? props.component.params : props;
  const getBreadcrumb = () => {
    return breadcrumbs ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb, null, breadcrumbs.map(path => /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb.Item, {
      key: path.link
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: path.link
    }, path.name))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  };
  const getTitle = () => {
    return title ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Title, {
      level: title.level
    }, title.text)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Card, null, getTitle));
}
module.exports = exports.default;