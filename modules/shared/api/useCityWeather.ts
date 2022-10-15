import { useToast } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { BASE_URL, API_KEY } from '../constants'
import { Weather, WeatherResponse } from '../types'
import { kelvinToCelsius } from '../utils'

const fetchApi = async (path: string): Promise<any> => {
  if (!API_KEY) throw new Error('API_KEY is not defined')
  const url = `${BASE_URL}${path}&appid=${API_KEY}`
  const response = await fetch(url.toString())

  return await response.json()
}

const WEATHER_KEY = 'weather'

export const useCityWeather = (city: string): { data: Weather | undefined, isLoading: boolean } => {
  const toast = useToast()
  const { data: response, isLoading } = useQuery([WEATHER_KEY, city], async (): Promise<WeatherResponse> => await fetchApi('/weather?q=' + city), {
    onError: (error) => {
      toast({
        title: `Error: ${(error as Error).message}`,
        status: 'error'
      })
    }
  })

  const data: Weather | undefined = response && {
    city: response.name,
    country: response.sys.country,
    temperature: kelvinToCelsius(response.main.temp),
    maxTemperature: kelvinToCelsius(response.main.temp_max),
    minTemperature: kelvinToCelsius(response.main.temp_min),
    date: new Date(),
    weather: response.weather[0].main
  }

  return { data, isLoading }
}
