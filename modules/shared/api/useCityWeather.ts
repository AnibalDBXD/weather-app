import { useToast } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { BASE_URL, API_KEY, DEFAULT_CITY } from '../constants'
import { Weather, WeatherResponse } from '../types'
import { kelvinToCelsius } from '../utils'

const fetchApi = async (path: string): Promise<any> => {
  if (!API_KEY) throw new Error('API_KEY is not defined')
  const url = `${BASE_URL}${path}&appid=${API_KEY}`
  const response = await fetch(url.toString())

  if (response.status >= 400) throw new Error(response.statusText)
  return await response.json()
}

const WEATHER_KEY = 'weather'

export const useCityWeather = (city = DEFAULT_CITY): { data: Weather | undefined, isLoading: boolean } => {
  const toast = useToast()
  const { data: response, isLoading } = useQuery([WEATHER_KEY, city || DEFAULT_CITY],
    async ({ queryKey }): Promise<WeatherResponse> => await fetchApi(`/weather?q=${queryKey[1]}`), {
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
    weather: response.weather[0].main,
    humidity: response.main.humidity
  }

  return { data, isLoading }
}
