import React from 'react';
import s from './Ticker.module.scss'

const InvisibleInput = ({
    min,
    max,
    value,
    minorGap,
    inputRef,
    scrollRef,
    boxRef,
    stickMaxWidth
}) => {

    const changeHandler = (event) => {
        const amount = Number(event.target.value)
        
        const maxWidth = event.target.getBoundingClientRect().width
        const totalSteps = ( max - min ) / minorGap
        const unitScroll = maxWidth / totalSteps
        const distance = amount - min
        const steps = distance / minorGap
        const shift = Math.floor(unitScroll * steps)
    
        scrollRef.current = true
        boxRef.current.scrollTo({
            left: shift,
            behavior: 'smooth'
        })
    }

    return <input 
        type='range'
        min={min}
        max={max}
        value={value}
        style={{ width: `${((max - min) / minorGap) * stickMaxWidth}vw` }}
        onChange={changeHandler}
        step={minorGap}
        ref={inputRef}
        className={s.box_input}
    />
}

export default InvisibleInput