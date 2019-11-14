import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Store from "./Store";

const Index = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

export default Index;
describe('', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((...args) => {
      if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
        console.error(...args);
      }
    });
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Index />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
