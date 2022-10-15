export interface Weather {
  city: string
  country: string
  temperature: string
  maxTemperature: string
  minTemperature: string
  date: Date
  weather: string
}

export interface WeatherResponse {
  name: string
  sys: {
    country: string
  }
  main: {
    temp: string
    temp_max: string
    temp_min: string
  }
  timezone: number
  weather: Array<{
    main: string
  }>
}
