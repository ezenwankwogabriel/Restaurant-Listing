import React, { useContext } from "react";
import { GlobalStoreContext } from "../Store";

function HigherOrderComponent(Component) {
  function Page(props){
    const [store, setGlobalStore] = useContext(GlobalStoreContext);
      return <Component {...props} {...store} setGlobalStore={setGlobalStore} />
  }
  return Page;
};

export default HigherOrderComponent;
