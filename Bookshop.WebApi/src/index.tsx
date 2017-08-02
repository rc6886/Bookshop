import * as React from "react";
import * as ReactDOM from "react-dom";

export interface HelloProps {
  compiler: string,
  framework: string
}

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1>
        Hello from {props.compiler} and {props.framework}!
      </h1>
    </div>
  );
}

ReactDOM.render(<Hello compiler="Typescript" framework="React"/>, document.getElementById("app"));