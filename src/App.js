import React from 'react';
import Button from './component/common/button';
import Input from './component/common/input';
import Checkbox from './component/common/checkbox';
import Dropdown from './component/common/dropdown';

function App() {
    return(
        <div className="App container">
            Hello world
            <Button/>
            <Input/>
            <Checkbox />
            <Dropdown />
        </div>
	);
}

export default App;
