import { Box, Text } from '@chakra-ui/react'
import { Weather } from '../../shared/types'
import { InfoRow } from './InfoRow'
import { WeatherIcon } from './WeatherIcon'

export const CityWeatherCard: React.FC<Weather> = ({ city, country, date, humidity, maxTemperature, minTemperature, temperature, weatherIcon }) => {
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
      <Box>
        <Text fontSize="sm" as="h3">{date.toLocaleString('default', { month: 'long' })} {date.getDate()}</Text>
        <Text fontSize="md" as="h2">{city}, {country}</Text>
        <Box display="flex" gap="1rem" position="relative" marginTop="1.5rem">
          <Text fontSize="5xl" as="h1" marginLeft="50px">{temperature}°C</Text>
          <WeatherIcon src={weatherIcon} />
        </Box>
      </Box>
      <Box marginLeft="2rem" display="flex" flexDirection="column" gap="1rem">
        <InfoRow src="/icons/humidity.svg" label="Humidity">{humidity}%</InfoRow>
        <InfoRow src="/icons/max-temperature.svg" label="Max. temperature">{maxTemperature}°C</InfoRow>
        <InfoRow src="/icons/min-temperature.svg" label="Min. temperature">{minTemperature}°C</InfoRow>
      </Box>
    </Box>
  )
}
