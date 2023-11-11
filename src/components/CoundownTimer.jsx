import { useEffect, useState } from 'react'

export default function CoundownTimer() {
  console.log('render')
  const [time, setTime] = useState('')
  const now = new Date()
  const futureDate = new Date('Nov 14,2023 00:00:00')
  const countDown = futureDate.getTime() - now.getTime()
  const MILLI_IN_A_SECOND = 1000
  const MILLI_IN_A_MINUTE = MILLI_IN_A_SECOND * 60
  const MILLI_IN_A_HOUR = MILLI_IN_A_MINUTE * 60
  const MILLI_IN_A_DAY = MILLI_IN_A_HOUR * 24

  const formatTime = () => {
    console.log('running format time')
    const days = Math.floor(countDown / MILLI_IN_A_DAY)
    const hours = Math.floor((countDown / MILLI_IN_A_HOUR) % 24)
    const minutes = Math.floor((countDown / MILLI_IN_A_MINUTE) % 60)
    const seconds = Math.floor((countDown / MILLI_IN_A_SECOND) % 60)
    const format = `${days}d ${hours}h ${minutes}m ${seconds}s`
    setTime(format)
  }

  useEffect(() => {
    const id = setInterval(() => {
      formatTime()
    }, 1000)
    return function clean() {
      clearInterval(id)
    }
  })

  return <p className="discount-time">{time}</p>
}
