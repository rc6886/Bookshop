import * as React from "react";
import * as ReactDOM from "react-dom";
export var Hello = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "Hello from ",
            props.compiler,
            " and ",
            props.framework,
            "!")));
};
ReactDOM.render(React.createElement(Hello, { compiler: "Typescript", framework: "React" }), document.getElementById("app"));
//# sourceMappingURL=index.js.map