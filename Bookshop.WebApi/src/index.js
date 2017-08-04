var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var Navbar = function () {
    return (React.createElement("nav", { className: "navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top" },
        React.createElement(Link, { to: "/", className: "navbar-brand" }, "Bookshop")));
};
var BookCard = function (_a) {
    var cardTitle = _a.cardTitle, cardText = _a.cardText;
    return (React.createElement("div", { className: "card", style: { maxWidth: "300px" } },
        React.createElement("img", { className: "card-img-top", src: "...", alt: "Card image cap", style: { maxWidth: "100%" } }),
        React.createElement("div", { className: "card-block" },
            React.createElement("h4", { className: "card-title" }, cardTitle),
            React.createElement("p", { className: "card-text" }, cardText),
            React.createElement(Link, { to: "/book/1", className: "btn btn-primary" }, "Go to Book"))));
};
var BookImage = function (_a) {
    var imageUrl = _a.imageUrl;
    return (React.createElement("div", null, "This is the book image section."));
};
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
            React.createElement("a", { href: "#", className: "btn btn-primary" }, "Buy Now"))));
};
var BookDetail = function () {
    var bookimage = {
        imageUrl: "Test Url",
    };
    var bookInfo = {
        id: "some_guid",
        title: "Test Title",
        description: "Test Description",
        price: 12
    };
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-md-6" },
            React.createElement(BookImage, __assign({}, bookimage))),
        React.createElement("div", { className: "col-md-6" },
            React.createElement(BookInformation, __assign({}, bookInfo)))));
};
export var BookshopHome = function () {
    return (React.createElement("div", { className: "bookshop" },
        React.createElement("h1", null, "Bookshop"),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })))));
};
export var BookshopRouter = function () {
    return (React.createElement(Router, null,
        React.createElement("div", null,
            React.createElement(Navbar, null),
            React.createElement("div", { className: "container" },
                React.createElement(Route, { exact: true, path: "/", component: BookshopHome }),
                React.createElement(Route, { path: "/book/:id", component: BookDetail })))));
};
ReactDOM.render(React.createElement(BookshopRouter, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map