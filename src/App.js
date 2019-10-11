import React from 'react';
// import Button from './component/common/button';
// import Input from './component/common/input';
// import Checkbox from './component/common/checkbox';
// import Dropdown from './component/common/dropdown';
// import Label from './component/common/Label';
import RestaurantListings from './component/RestaurantListing';


function App() {
    return(
        <div className="App container">
            <div className="row">
                <div className="col">
                    <RestaurantListings />
                </div>
            </div>
        </div>
	);
}

export default App;
