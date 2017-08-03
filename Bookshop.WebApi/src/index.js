import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var Navbar = function () {
    return (React.createElement("nav", { className: "navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top" },
        React.createElement("a", { className: "navbar-brand", href: "#" }, "Bookshop")));
};
var BookCard = function (_a) {
    var cardTitle = _a.cardTitle, cardText = _a.cardText;
    return (React.createElement("div", { className: "card", style: { maxWidth: "300px" } },
        React.createElement("img", { className: "card-img-top", src: "...", alt: "Card image cap", style: { maxWidth: "100%" } }),
        React.createElement("div", { className: "card-block" },
            React.createElement("h4", { className: "card-title" }, cardTitle),
            React.createElement("p", { className: "card-text" }, cardText),
            React.createElement(Link, { to: "/books", className: "btn btn-primary" }, "Go to Book"))));
};
var BookDetail = function () {
    return (React.createElement("div", null, "This is the book detai page."));
};
export var BookshopApp = function () {
    return (React.createElement("div", null,
        React.createElement(Navbar, null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "bookshop" },
                React.createElement("h1", null, "Bookshop"),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-4 mt-3" },
                        React.createElement(BookCard, { cardTitle: "Test", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
                    React.createElement("div", { className: "col-md-4 mt-3" },
                        React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
                    React.createElement("div", { className: "col-md-4 mt-3" },
                        React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
                    React.createElement("div", { className: "col-md-4 mt-3" },
                        React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })))))));
};
export var BookshopRouter = function () {
    return (React.createElement(Router, null,
        React.createElement("div", null,
            React.createElement(Route, { exact: true, path: "/", component: BookshopApp }),
            React.createElement(Route, { path: "/book/:id", component: BookDetail }))));
};
ReactDOM.render(React.createElement(BookshopRouter, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map