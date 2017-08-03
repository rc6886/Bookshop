import * as React from "react";
import * as ReactDOM from "react-dom";
export var Hello = function () {
    return (React.createElement("div", null,
        React.createElement("nav", { className: "navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top" },
            React.createElement("a", { className: "navbar-brand", href: "#" }, "Bookshop")),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "bookshop" },
                React.createElement("h1", null, "Bookshop"),
                React.createElement("div", { className: "row" })))));
};
ReactDOM.render(React.createElement(Hello, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map