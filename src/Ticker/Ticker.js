import React, { useEffect, useRef } from 'react'
import DefaultPage from './DefaultPage'
import { canRenderDefault, throttle } from './functions'
import InvisibleInput from './InvisibleInput'
import StickLine from './Stick/StickLine'
import s from './Ticker.module.scss'

const Ticker = ({
    max = 100,
    min = 0,
    majorGap = 10,
    minorGap = 2,
    throttleScroll = false,
    throttleTimeout = 250,
    value,
    setValue,
    textFormatter,
    hideText,
    stickMaxWidth = 4,
    knobClassName,
    containerClassName = '',
    textClassName = '',
    tickerClassName = '',
    tickClassName = '',
    largeTickClassName = '',
    tickLabelClassName = ''
}) => {

    const boxRef = useRef(null)
    const inputRef = useRef(null)
    const scrollRef = useRef(false)
    const commonProps = { max, min, majorGap, minorGap, value, stickMaxWidth }
    
    useEffect(() => {
        const ref = boxRef.current
        if (boxRef.current) {      
            const handleScroll = (e) => {
                
                if (scrollRef.current && throttleScroll) {
                    scrollRef.current = false
                    return
                }

                const maxWidth = inputRef.current.getBoundingClientRect().width
                const currentScroll = e.target.scrollLeft
                const portion = currentScroll / maxWidth
                let amount = min + ((max - min) * portion)
                const remainder = amount % minorGap
                if (remainder !== 0) amount = Math.floor(amount - remainder) + minorGap
                if (amount < min) amount = min
                if (amount > max) amount = max
                setValue(amount)
            }      

            const scroller = throttleScroll 
                ? e => throttle(() => handleScroll(e), throttleTimeout) 
                : handleScroll
            ref.addEventListener('scroll', scroller)

            return () => ref.removeEventListener('scroll', scroller)
        }
    }, [boxRef, min, max, minorGap, majorGap, throttleScroll, throttleTimeout, setValue])

    if (canRenderDefault(min, max, minorGap, majorGap, value, setValue)) 
        return <DefaultPage {...commonProps} setValue={setValue} />

    return <section className={[ s.container, containerClassName ].join(' ')}>
        {!hideText ? <div className={[ s.container_text, textClassName ].join(' ')}>
            {typeof textFormatter === 'function' ? textFormatter(value) : value}
        </div> : <></>}
        <div className={s.box} ref={boxRef}>
            <StickLine 
                {...commonProps}
                textFormatter={textFormatter}
                knobClassName={knobClassName}
                tickerClassName={tickerClassName}
                tickClassName={tickClassName}
                largeTickClassName={largeTickClassName}
                tickLabelClassName={tickLabelClassName}
            />
            <InvisibleInput 
                {...commonProps}
                inputRef={inputRef}
                scrollRef={scrollRef}
                boxRef={boxRef}
            />
        </div>
    </section>
}

export default Ticker