import React, { useEffect, useState } from 'react'
import Stick from './Stick'
import s from './Stick.module.scss'

const StickLine = ({
    max,
    min,
    majorGap,
    minorGap,
    value,
    textFormatter,
    knobClassName,
    stickMaxWidth,
    tickerClassName = '',
    tickClassName,
    tickLabelClassName,
    largeTickClassName
}) => {

    const [stickData, setStickData] = useState([])
    useEffect(() => {
        const elementCreator = (tag) => {
            return {
                text: typeof textFormatter === 'function' ? textFormatter(tag) : tag,
                large: tag % majorGap === 0,
                myValue: tag
            }
        }
            
        const buildElements = () => {
            const range = max - min
            const count = range / minorGap
            const array = Array(count).fill(null).map((_, index) => {
                return elementCreator(min + (index * minorGap))
            })
            array.push(elementCreator(max))
            setStickData(array)
        }
        buildElements()
    }, [max, min, minorGap, majorGap])

    return <div 
        className={[s.line, tickerClassName].join(' ')}
        style={{ width: `${((max - min) / minorGap) * stickMaxWidth}vw` }}
    >
        {stickData.map((data, index) => <Stick 
            key={index} 
            {...data} 
            value={value} 
            stickMaxWidth={stickMaxWidth}
            knobClassName={knobClassName} 
            tickClassName={tickClassName}
            largeTickClassName={largeTickClassName}
            tickLabelClassName={tickLabelClassName}
        />)}
    </div>
}

export default StickLine