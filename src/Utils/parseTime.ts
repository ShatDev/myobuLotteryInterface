interface timeLeft {
  minutes: number
  hours: number
  days: number
  seconds: number
}
export default function UNIXTimestampToTimeLeft(date: number): timeLeft {
  let now = Date.now()
  let difference = date * 1000 - now
  if (0 > difference) {
    return {
      minutes: 0,
      hours: 0,
      days: 0,
      seconds: 0,
    }
  }
  let Minutes = Math.floor((difference / 1000 / 60) % 60)
  let Hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  let Days = Math.floor(difference / (1000 * 60 * 60 * 24))
  let Seconds = Math.floor((difference / 1000) % 60)
  return {
    minutes: Minutes,
    hours: Hours,
    days: Days,
    seconds: Seconds,
  }
}
