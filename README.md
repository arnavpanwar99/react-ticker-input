# React Ticker Input

**A minimal reactjs package to render a number input with ticker selectors. 🔥🔥**

IMAGE:
![react ticker input](https://mail-attachment.googleusercontent.com/attachment/u/1/s/?view=att&th=18379678b101b39e&attid=0.1&disp=emb&realattid=18379676e158dfd975d1&zw&atsh=1&saddbat=ANGjdJ9ALO0KkYXBDwl8WD0v8Q0yRoGj8wDHP4eudTc7EFQ2iyxPrbCJOb8m0f5AlW1XaAaTir43mVCsUiwQIYuMQZjUfxjxJwswKhM31eJy1JgmIi3duzI6_hmQv_-cyENkQhlzsBZ1colp281Y5b3MFQr1D6oy_LV8lTCCcCzTZWl4GeVQn2yWipVNOcMTx1MlI1SvjqHP72kdXsUM7E6OYGSUu7FKgJnejXN6X9uid2QjEw8OIKEd4JebndNg4bwRBX9MHQjzr0in_kcbp9cxnWG8Yr3hkqyeQVVJR4S8-s_Yzvh70rpokd9Asv3zU_6EJvhWir_Dx8M-kR-tluRN6Af5N0WK1UBX5KXuuhucvQtj1LGR0MHCZh8OpNMmuvsnAVkkAu-sHSRZW2EdhhTmJ4AGTIFrx9JElwT2lxkUw4oqlSsrmKKLTFIItDFc000XOv7sz5C0GRJwZQ1x9ICL0P3zUNBG32XnDZQ9unr8C8Q8L0rIbZPmJkx-IBN7L99xW0ebgG7TS0T9T4m2l8Xq56Rni7z_GDamHILj2_gBSo8_OHAHaEBPAUcJ1pJGkzjxSgCMxCZowKnLL538GkSGRS-XfqmrOZk3Ig_cTlXr_BdUHbszKxrCHiEjS1DRFx8LoMkfXOKjqvMXhupS_HzNmo7uE2z0DM8izURjUOaK5G3h_bgJDjU9j8CPOXtkszbPlLbxSPaR9k9Hw47GXtyqxnTHzA_5q-5yxZ2a2398ZPLwQPTwOBFcUGcqf5fhQIJJFyoffIykR2pqgAdnWMl3P_v52TwWXYGJPiMWiA)

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
        import { Ticker } from 'react-ticker-input'
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
