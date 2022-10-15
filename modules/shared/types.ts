export interface Weather {
  city: string
  country: string
  // Temp is in Celsius
  temperature: string
  maxTemperature: string
  minTemperature: string
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
  weather: Array<{
    main: string
  }>
}
