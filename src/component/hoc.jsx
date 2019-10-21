import React, { useContext } from "react";
import { GlobalStoreContext } from "../Store";

function HigherOrderComponent(Component) {
  // useEffect(() => {
  //   console.log('here')
  //   return () => {
  //     console.log('cleaned')
  //   };
  // }, [])\
  // return class extends PureComponent{
  //   static contextType = GlobalStoreContext;

  //   render(){
  //     return <Component {...this.props} {...this.context[0]} setGlobalStore={this.context[1]} />
  //   }
  // }

  function Page(props){
    const [store, setGlobalStore] = useContext(GlobalStoreContext);

      return <Component {...props} {...store} setGlobalStore={setGlobalStore} />
  }

  return Page;
};

export default HigherOrderComponent;
