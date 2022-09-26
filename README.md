# React Ticker Input

**A minimal reactjs package to render a number input with ticker selectors. 🔥🔥**

![react ticker input](https://i.ibb.co/brxF6B6/ezgif-2-51a939519c.gif)

# Live Playground
To see the react number input in action, click [here.](https://codesandbox.io/p/github/arnavozil/react-ticker-input/draft/goofy-ardinghelli?file=%2FREADME.md)

OR

To run that demo on your computer:
- Clone [this](https://github.com/arnavozil/react-ticker-input) repository
-       npm install
-       npm start
- Visit [http://localhost:3000/](http://localhost:3000/)

# Getting Started
#### Import Component
        import Ticker from 'react-ticker-input'
#### Usage
This is the minimum code required to get started with react-ticker-input.
Other required and non-required props are documented below.

        import React, { useState } from 'react'
        import Ticker from 'react-ticker-input'

        const App = () => {
        
            const [value, setValue] = useState(10)
            return <Ticker 
                value={value}
                setValue={setValue}
            />
        }

        export default App

#### Supported Props
| **name**           | **description**                                                             | **default** | **required** | **type**             |
|--------------------|-----------------------------------------------------------------------------|-------------|--------------|----------------------|
| value              | value of the controlled input (should be a component state)                 | 0           | true         | number               |
| setValue           | function called when value changes with updated value                       | undefined   | true         | function ⎮ undefined |
| min                | minimum value of the input                                                  | 0           | false        | number               |
| max                | maximum value of the input                                                  | 100         | false        | number               |
| majorGap           | gap between taller (prominent) ticks                                        | 10          | false        | number               |
| minorGap           | gap between smaller ticks                                                   | 2           | false        | number               |
| hideText           | if true, hides the value text                                               | false       | false        | boolean              |
| textFormatter      | function that takes in the value and can be used to format it               | undefined   | false        | function ⎮ undefined |
| throttleScroll     | if true, applies throttling while scroll improves performance, decreases UX | false       | false        | boolean              |
| throttleTimeout    | delay for scroll throttle                                                   | 250         | false        | number               |
| stickMaxWidth      | max width between two sticks in vw                                          | 4           | false        | number               |
| knobClassName      | className for the knob pointer                                              | ''          | false        | string               |
| containerClassName | className for the outermost container                                       | ''          | false        | string               |
| textClassName      | className for the top text                                                  | ''          | false        | string               |
| tickerClassName    | className for the container that contains all the sticks                    | ''          | false        | string               |
| tickClassName      | className for all the sticks (tall and small both)                          | ''          | false        | string               |
| largeTickClassName | className for the taller sticks                                             | ''          | false        | string               |
| tickLabelClassName | className for the label text displayed beneath taller sticks                | ''          | false        | string               |

Other thing that should be taken care of is that majorGap, the difference between max and min, both should be a multiple of the minGap.
