import * as React from 'react';
import { Link } from "react-router-dom";
var BookCard = function (_a) {
    var cardTitle = _a.cardTitle, cardText = _a.cardText;
    return (React.createElement("div", { className: "card", style: { maxWidth: "300px" } },
        React.createElement("img", { className: "card-img-top", src: "...", alt: "Card image cap", style: { maxWidth: "100%" } }),
        React.createElement("div", { className: "card-block" },
            React.createElement("h4", { className: "card-title" }, cardTitle),
            React.createElement("p", { className: "card-text" }, cardText),
            React.createElement(Link, { to: "/book/1", className: "btn btn-primary" }, "Go to Book"))));
};
export default BookCard;
//# sourceMappingURL=bookcard.js.map