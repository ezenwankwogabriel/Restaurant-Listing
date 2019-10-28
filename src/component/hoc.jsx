import React, { useContext } from "react";
import { GlobalStoreContext } from "../Store";

function HigherOrderComponent(Component) {
    function Page(props){
        const context = useContext(GlobalStoreContext);
        // console.log(context)
        return <Component {...props} {...context} />
    }
    return Page;
};

export default HigherOrderComponent;
