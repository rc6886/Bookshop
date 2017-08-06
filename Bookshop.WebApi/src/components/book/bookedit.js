var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var BookInputField = function () {
    return (React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-md-2 col-form-label" }, "Title"),
        React.createElement("div", { className: "col-md-6" },
            React.createElement("input", { className: "form-control", type: "text" }))));
};
var BookEdit = (function (_super) {
    __extends(BookEdit, _super);
    function BookEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookEdit.prototype.render = function () {
        return (React.createElement(BookInputField, null));
    };
    return BookEdit;
}(React.Component));
//# sourceMappingURL=bookedit.js.map