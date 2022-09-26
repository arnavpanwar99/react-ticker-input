import React, { useState } from 'react';
import Ticker from './Ticker/Ticker';

const App = () => {

    const [value, setValue] = useState(25)

    return <Ticker 
        min={25}
        max={225}
        majorGap={25}
        minorGap={5}
        value={value}
        setValue={setValue}
    />
}

export default App