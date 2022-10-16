import { CalendarIcon, CloseIcon, StarIcon } from '@chakra-ui/icons'
import { Box, CircularProgress, Text, ScaleFade, useDisclosure } from '@chakra-ui/react'
import { CSSProperties, useEffect } from 'react'
import { useCityWeather } from '../../shared/api/useCityWeather'
import { IconButton } from './IconButton'
import { InfoRow } from './InfoRow'
import { WeatherIcon } from './WeatherIcon'
export interface CityWeatherCardProps {
  city: string
  onRemove?: (city: string) => void
  onAdd?: (city: string) => void
  isFavorite?: boolean
  hideOnRemove?: boolean
  onForecastClick?: (city: string) => void
}

interface IconButtonProps {
  isFavorite?: boolean
  onClick: () => void
}

const FavoriteButton: React.FC<IconButtonProps> = ({ isFavorite, onClick }) => (
  <IconButton
    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    icon={isFavorite ? <CloseIcon color="red.400" /> : <StarIcon color="yellow.400" />}
    onClick={onClick}
    right="10px"
  />
)

const ForecastButton: React.FC<IconButtonProps> = ({ onClick }) => (
  <IconButton
    aria-label='Show forecast'
    icon={<CalendarIcon />}
    onClick={onClick}
    right="60px"
  />
)

const weatherIconStyle: CSSProperties = {
  position: 'absolute',
  top: '-10px',
  right: '60%'
}

export const CityWeatherCard: React.FC<CityWeatherCardProps> = ({ city, isFavorite = false, hideOnRemove = true, onAdd, onRemove, onForecastClick }) => {
  const { data, isLoading } = useCityWeather(city)
  const { isOpen, onClose, onOpen } = useDisclosure({
    defaultIsOpen: true,
    onClose: () => {
      // Remove te city 100ms after the animation is done
      setTimeout(() => {
        onRemove?.(city)
      }, 100)
    }
  })

  useEffect(() => {
    onOpen()
  }, [city, onOpen])

  const { city: weatherCity, country, date, humidity, maxTemperature, minTemperature, temperature, weatherIcon } = data ?? {}
  return (
    <ScaleFade initialScale={0.9} in={hideOnRemove ? isOpen : true}>
      <Box
        as="article"
        display="flex"
        boxShadow="lg"
        backgroundColor="whiteAlpha.300"
        padding="2rem"
        borderRadius="md"
        position="relative"
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
                <WeatherIcon src={weatherIcon} style={weatherIconStyle} />
              </Box>
            </Box>
            <Box marginLeft="2rem" display="flex" flexDirection="column" gap="1rem" position="relative">
              <InfoRow src="/icons/humidity.svg" label="Humidity">{humidity}%</InfoRow>
              <InfoRow src="/icons/max-temperature.svg" label="Max. temperature">{maxTemperature}°C</InfoRow>
              <InfoRow src="/icons/min-temperature.svg" label="Min. temperature">{minTemperature}°C</InfoRow>
            </Box>
            <FavoriteButton isFavorite={isFavorite} onClick={() => {
              if (isFavorite) {
                onClose()
              } else {
                onAdd?.(city)
              }
            }} />
            <ForecastButton onClick={() => {
              onForecastClick?.(city)
            }} />
          </>
        )}
      </Box>
    </ScaleFade>
  )
}
