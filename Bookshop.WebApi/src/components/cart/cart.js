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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
var cartImageStyle = {
    textAlign: "Center",
    paddingTop: "30px",
    height: "80px",
    width: "80px",
    backgroundColor: "grey",
};
var CartItemRow = function (item) {
    return (React.createElement("tr", null,
        React.createElement("td", { style: { width: "90px" } },
            React.createElement("div", { style: cartImageStyle })),
        React.createElement("td", { className: "desc" },
            React.createElement("h3", null, item.title),
            React.createElement("p", null, item.description)),
        React.createElement("td", { className: "small", style: { width: "65px" } },
            "$",
            item.price),
        React.createElement("td", null,
            React.createElement("input", { style: { width: "65px" }, type: "text", name: "price", value: "1" })),
        React.createElement("td", null, "$100.00")));
};
var Cart = (function (_super) {
    __extends(Cart, _super);
    function Cart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cart.prototype.render = function () {
        var itemRow1 = {
            title: "Product 1",
            description: "This is a description for Product 1.",
            price: 100.00,
        };
        var itemRow2 = {
            title: "Product 2",
            description: "This is a description for Product 2.",
            price: 110.00,
        };
        return (React.createElement("div", { className: "row" },
            React.createElement("table", { className: "table table-md" },
                React.createElement("tbody", null,
                    React.createElement(CartItemRow, __assign({}, itemRow1)),
                    React.createElement(CartItemRow, __assign({}, itemRow2))))));
    };
    return Cart;
}(React.Component));
export default Cart;
//# sourceMappingURL=cart.js.map