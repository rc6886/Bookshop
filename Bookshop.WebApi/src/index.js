import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BookDetail from './components/book/bookdetail';
import BookshopHome from './components/book/bookshophome';
import Cart from './components/cart/cart';
var Navbar = function () {
    return (React.createElement("nav", { className: "navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top" },
        React.createElement(Link, { to: "/", className: "navbar-brand" }, "Bookshop")));
};
var BookshopRouter = function () {
    return (React.createElement(Router, null,
        React.createElement("div", null,
            React.createElement(Navbar, null),
            React.createElement("div", { className: "container" },
                React.createElement(Route, { exact: true, path: "/", component: BookshopHome }),
                React.createElement(Route, { path: "/book/:id", component: BookDetail }),
                React.createElement(Route, { path: "/cart", component: Cart })))));
};
ReactDOM.render(React.createElement(BookshopRouter, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map