export interface Weather {
  city: string
  country: string
  // Temp is in Celsius
  temperature: number
  maxTemperature: number
  minTemperature: number
  date: Date
  weatherIcon: string
  humidity: number
}

export interface WeatherResponse {
  name: string
  sys: {
    country: string
  }
  main: {
    // Temp is in Celsius
    temp: number
    temp_max: number
    temp_min: number
    humidity: number
  }
  timezone: number
  dt_txt: string
  weather: Array<{
    main: string
  }>
}

export interface ForecastWeatherResponse {
  list: WeatherResponse[]
  city: {
    name: string
    country: string
  }
}
