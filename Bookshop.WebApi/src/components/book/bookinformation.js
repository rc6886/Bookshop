import * as React from 'react';
import { Link } from 'react-router-dom';
var BookInformation = function (_a) {
    var id = _a.id, title = _a.title, description = _a.description, price = _a.price;
    return (React.createElement("div", null,
        React.createElement("div", { className: "row" },
            React.createElement("h2", null, title)),
        React.createElement("div", { className: "row" },
            React.createElement("p", null, description)),
        React.createElement("div", { className: "row" },
            React.createElement("p", null,
                "$",
                price)),
        React.createElement("div", { className: "row" },
            React.createElement(Link, { to: "/cart", className: "btn btn-primary" }, "Add to Cart"))));
};
export default BookInformation;
//# sourceMappingURL=bookinformation.js.map