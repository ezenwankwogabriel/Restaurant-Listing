import React, { PureComponent } from "react";
import { GlobalStoreContext } from "./Store";

const HigherOrderComponent = (Component) => {
  return class extends PureComponent{
    static contextType = GlobalStoreContext;

    render(){
      return <Component {...this.props} {...this.context[0]} setGlobalStore={this.context[1]} />
    }
  }
};

export default HigherOrderComponent;
