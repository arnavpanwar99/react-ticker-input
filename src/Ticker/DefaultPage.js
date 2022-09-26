import React from 'react';

const DefaultPage = ({
    min,
    max,
    majorGap,
    minorGap,
    value,
    setValue
}) => {
    if (max <= min) {
        return <>max must be greater than min</>
    }
    if (majorGap % minorGap !== 0) {
        return <>majorGap must be a multiple of minorGap</>
    }
    if ((max - min) % majorGap !== 0) {
        return <>range must be a multiple of majorGap</>
    }
    if (majorGap > max) {
        return <>majorGap must be smaller than max</>
    }
    if (max % majorGap !== 0) {
        return <>max must be a multiple of majorGap</>
    }
    if((typeof value !== 'number' || typeof setValue !== 'function')) {
        return <>value and setValue props are required</>
    }
}

export default DefaultPage