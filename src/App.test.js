import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Store from "./component/Store";

const Index = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

export default Index;
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
