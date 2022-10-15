import { Box, Text } from '@chakra-ui/react'
import { InfoRow } from './InfoRow'
import { WeatherIcon } from './WeatherIcon'

export const CityWeatherCard: React.FC = () => {
  return (
        <Box as="article" display="flex" boxShadow="lg" backgroundColor="whiteAlpha.300" padding="2rem" borderRadius="md">
        <Box>
          <Text fontSize="sm" as="h3">October 14</Text>
          <Text fontSize="md" as="h2">Valencia, VE</Text>
          <Box display="flex" gap="1rem" position="relative" marginTop="1.5rem">
            <Text fontSize="5xl" as="h1" marginLeft="50px">28°C</Text>
            <WeatherIcon />
          </Box>
        </Box>
          <Box marginLeft="2rem" display="flex" flexDirection="column" gap="1rem">
            <InfoRow src="/icons/humidity.svg" label="Humidity">70%</InfoRow>
            <InfoRow src="/icons/max-temperature.svg" label="Max. temperature">36 °C</InfoRow>
            <InfoRow src="/icons/min-temperature.svg" label="Min. temperature">12 °C</InfoRow>
        </Box>
      </Box>
  )
}
