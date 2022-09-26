export const canRenderDefault = (min, max, minorGap, majorGap, value, setValue) => {
    if (
        (max <= min) ||
        (majorGap % minorGap !== 0) ||
        (max - min) % majorGap !== 0 ||
        (majorGap > max) || 
        (max % majorGap !== 0) ||
        (!value || typeof setValue !== 'function')
    ) return true
    return false
}

let timerId
export const throttle = (func, delay = 250) => {
    if (timerId) {
		return
	}

	timerId  =  setTimeout(() => {
		func()		
		timerId  =  undefined;
	}, delay)
}