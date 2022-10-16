import { useToast } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { DEFAULT_CITY } from '../constants'
import { ForecastWeatherResponse, Weather } from '../types'
import { fetchApi, kelvinToCelsius } from '../utils'

const FORECAST_CITY_KEY = 'forecastCity'

export const useForecastCity = (city = DEFAULT_CITY): { data: Weather[] | undefined, isLoading: boolean } => {
  const toast = useToast()
  const { data: response, isLoading } = useQuery([FORECAST_CITY_KEY, city || DEFAULT_CITY],
    async ({ queryKey }): Promise<ForecastWeatherResponse> => await fetchApi(`/forecast?q=${queryKey[1]}`), {
      onError: (error) => {
        toast({
          title: `Error: ${(error as Error).message}`,
          status: 'error'
        })
      }
    })

  const data: Weather[] | undefined = response?.list.map((item) => ({
    city: response.city.name,
    country: response.city.country,
    temperature: kelvinToCelsius(item.main.temp),
    maxTemperature: kelvinToCelsius(item.main.temp_max),
    minTemperature: kelvinToCelsius(item.main.temp_min),
    date: new Date(item.dt_txt),
    weatherIcon: item.weather[0].main,
    humidity: item.main.humidity
  }))

  return { data, isLoading }
}
