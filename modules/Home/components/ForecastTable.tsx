import { TableContainer, Table, Tbody, Tr, Td, Box, Th, Thead, Text } from '@chakra-ui/react'
import { Weather } from '../../shared/types'
import { InfoRow } from './InfoRow'
import { WeatherIcon } from './WeatherIcon'
import dayjs from 'dayjs'

export const ForecastTable: React.FC<{ data: Weather[] }> = ({ data }) => {
  return (
    <TableContainer>
        <Table variant='simple' size='lg'>
            <Thead>
                <Tr>
                    <Th>Hour</Th>
                    <Th>Weather</Th>
                    <Th>Temperature</Th>
                    <Th>Max. Temperature</Th>
                    <Th>Min. Temperature</Th>
                    <Th>Humidity</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((weather) => (
                    <Tr key={weather.date.getTime()}>
                        <Td textTransform="uppercase">{dayjs(weather.date).format('HH:mm a')}</Td>
                        <Td>
                            <Box display="flex" alignItems="center">
                                <WeatherIcon src={weather.weatherIcon} style={{ marginLeft: '-30px' }} />
                                {weather.weatherIcon}
                            </Box>
                        </Td>
                        <Td>
                            <Text>{weather.temperature}°C</Text>
                        </Td>
                        <Td>
                            <InfoRow src="/icons/max-temperature.svg">{weather.maxTemperature}°C</InfoRow>
                        </Td>
                        <Td>
                            <InfoRow src="/icons/min-temperature.svg">{weather.minTemperature}°C</InfoRow>
                        </Td>
                        <Td>
                            <InfoRow src="/icons/humidity.svg">{weather.humidity}%</InfoRow>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContainer>
  )
}
