import React from 'react'
import s from './Stick.module.scss'

const Stick = ({
    large = false,
    text,
    value,
    myValue,
    stickMaxWidth,
    knobClassName = '',
    tickClassName = '',
    largeTickClassName = '',
    tickLabelClassName = ''
}) => {

    return <div className={s.line_stick} style={{
        width: `${stickMaxWidth}vw`,
        maxWidth: `${stickMaxWidth}vw`
    }}>
        <div className={[
            s.line_stick_hair,
            large ? [s.line_stick_hair_long, largeTickClassName].join(' ') : '',
            tickClassName
        ].join(' ')} />
        {value === myValue ? <div className={[
            s.line_stick_knob,
            knobClassName
        ].join(' ')} /> : <></>}
        {large ? <span className={[
            s.line_stick_text,
            tickLabelClassName
        ].join(' ')}>
            {text}
        </span> : <></>}
    </div>
}

export default Stick