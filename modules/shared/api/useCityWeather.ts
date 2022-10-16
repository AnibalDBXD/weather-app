import { useToast } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { DEFAULT_CITY } from '../constants'
import { Weather, WeatherResponse } from '../types'
import { fetchApi } from '../utils'

const WEATHER_KEY = 'weather'

export const useCityWeather = (city = DEFAULT_CITY): { data: Weather | undefined, isLoading: boolean } => {
  const toast = useToast()
  const { data: response, isLoading } = useQuery([WEATHER_KEY, city || DEFAULT_CITY],
    async ({ queryKey }): Promise<WeatherResponse> => await fetchApi(`/weather?q=${queryKey[1]}&units=metric`), {
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
    temperature: response.main.temp,
    maxTemperature: response.main.temp_max,
    minTemperature: response.main.temp_min,
    date: new Date(),
    weatherIcon: response.weather[0].main,
    humidity: response.main.humidity
  }

  return { data, isLoading }
}
