export function convertTimezoneDate(dateObj) {
    if (!dateObj || !(dateObj instanceof Date)) {
      return { date: 'Invalid', time: 'Invalid' }
    }

    const offset = dateObj.getTimezoneOffset()
    const adjustedTime = new Date(dateObj.getTime() - offset * 60 * 1000)

    const isoString = adjustedTime.toISOString()
    const [date, timeWithMs] = isoString.split('T')
    const time = timeWithMs.slice(0, 5)

    return { date, time }
}

export default convertTimezoneDate