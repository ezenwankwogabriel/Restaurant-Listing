import React from 'react';
import Button from './component/common/Button';
import Input from './component/common/Input';
import Checkbox from './component/common/Checkbox';
import Dropdown from './component/common/Dropdown';
import Label from './component/common/Label';

function App() {
    return(
        <div className="App container">
            Hello world
            <Button/>
            <Label />
            <Input/>
            <Checkbox />
            <Dropdown />
        </div>
	);
}

export default App;
