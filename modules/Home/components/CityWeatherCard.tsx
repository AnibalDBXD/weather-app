import { Box, CircularProgress, Text } from '@chakra-ui/react'
import { useCityWeather } from '../../shared/api/useCityWeather'
import { InfoRow } from './InfoRow'
import { WeatherIcon } from './WeatherIcon'

export interface CityWeatherCardProps {
  city: string
}

export const CityWeatherCard: React.FC<CityWeatherCardProps> = ({ city }) => {
  const { data, isLoading } = useCityWeather(city)
  const { city: weatherCity, country, date, humidity, maxTemperature, minTemperature, temperature, weatherIcon } = data ?? {}
  return (
    <Box
      as="article"
      display="flex"
      boxShadow="lg"
      backgroundColor="whiteAlpha.300"
      padding="2rem"
      borderRadius="md"
      width="340px"
      height="205px">
      {isLoading && <CircularProgress isIndeterminate margin="auto" />}
      {data && (
        <>
          <Box>
            {date && <Text fontSize="sm" as="h3">{date.toLocaleString('default', { month: 'long' })} {date.getDate()}</Text>}
            <Text fontSize="md" as="h2">{weatherCity}, {country}</Text>
            <Box display="flex" gap="1rem" position="relative" marginTop="1.5rem">
              <Text fontSize="5xl" as="h1" marginLeft="50px">{temperature}°C</Text>
              <WeatherIcon src={weatherIcon} />
            </Box>
          </Box>
          <Box marginLeft="2rem" display="flex" flexDirection="column" gap="1rem">
            <InfoRow src="/icons/humidity.svg" label="Humidity">{humidity}%</InfoRow>
            <InfoRow src="/icons/max-temperature.svg" label="Max. temperature">{maxTemperature}°C</InfoRow>
            <InfoRow src="/icons/min-temperature.svg" label="Min. temperature">{minTemperature}°C</InfoRow>
          </Box></>
      )}
    </Box>
  )
}
