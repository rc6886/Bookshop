import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BookCard from './components/bookcard';
import BookDetail from './components/bookdetail';
var Navbar = function () {
    return (React.createElement("nav", { className: "navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top" },
        React.createElement(Link, { to: "/", className: "navbar-brand" }, "Bookshop")));
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