import { useEffect, useState } from 'react'
import 'axios'

function Weather() {
  const [temp, setTemp] = useState(null)

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=44.30&longitude=15.09&hourly=temperature_2m&forecast_days=1'
    )
      .then((response) => response.json())
      .then((result) => {
        setTemp(result)
      })
  }, [])

  return (
    temp && (
      <p>
        The weather in Vir, Croatia today at 12am:
        {temp.hourly.temperature_2m[12]} {temp.hourly_units.temperature_2m}
      </p>
    )
  )
}

export default Weather
