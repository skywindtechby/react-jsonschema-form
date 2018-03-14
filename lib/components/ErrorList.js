"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorList;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorList(props) {
  var errors = props.errors;

  return _react2.default.createElement(
    "div",
    { className: "card bg-danger text-white errors" },
    _react2.default.createElement(
      "div",
      { className: "card-header" },
      _react2.default.createElement(
        "h3",
        { className: "card-title" },
        "Errors"
      )
    ),
    _react2.default.createElement(
      "ul",
      { className: "list-group" },
      errors.map(function (error, i) {
        return _react2.default.createElement(
          "li",
          { key: i, className: "list-group-item text-danger" },
          error.stack
        );
      })
    )
  );
}