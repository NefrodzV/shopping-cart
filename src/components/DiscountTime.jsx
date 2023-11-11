import { useEffect, useState } from 'react'

export default function DiscountTime() {
  useEffect(() => {
    const now = new Date()
    const futureDate = new Date('Nov 14,2023 00:00:00')
    const countDown = futureDate.getTime() - now.getTime()
    const MILLI_IN_A_SECOND = 1000
    const MILLI_IN_A_MINUTE = MILLI_IN_A_SECOND * 60
    const MILLI_IN_A_HOUR = MILLI_IN_A_MINUTE * 60
    const MILLI_IN_A_DAY = MILLI_IN_A_HOUR * 24

    let days = Math.floor(countDown / MILLI_IN_A_DAY)
    let hours = Math.floor((countDown / MILLI_IN_A_HOUR) % 24)
    let minutes = Math.floor((countDown / MILLI_IN_A_MINUTE) % 60)
    let seconds = Math.floor((countDown / MILLI_IN_A_SECOND) % 60)

    console.log('days :' + days)
    console.log('hours :' + hours)
    console.log('minutes: ' + minutes)
    console.log('seconds: ' + seconds)
  }, [])

  return <p className="discount-time"></p>
}
