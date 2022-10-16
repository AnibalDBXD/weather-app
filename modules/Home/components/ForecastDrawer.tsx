import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, CircularProgress, Select } from '@chakra-ui/react'
import { useForecastCity } from '../../shared/api/useForecastCity'
import { ForecastTable } from './ForecastTable'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import { Weather } from '../../shared/types'

interface ForecastDrawerProps {
  city: string
  isOpen: boolean
  onClose: () => void
}

export const ForecastDrawer: React.FC<ForecastDrawerProps> = ({ city, isOpen, onClose }) => {
  const { data, isLoading } = useForecastCity(city)

  const options = useMemo(() => {
    const initialValue: Record<string, Weather[]> = {}
    return (
      data?.reduce((acc, weather) => {
        const date = dayjs(weather.date).format('DD/MM ')
        if (!acc[date]) {
          acc[date] = []
        }
        acc[date].push(weather)
        return acc
      }, initialValue) ?? {}
    )
  }, [data])

  const [forecastDay, setForecastDay] = useState<typeof data>(() => {
    return Object.values(options)[0]
  })

  return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size="full"
        >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Forecast</DrawerHeader>
                    <DrawerBody>
                        {isLoading && <CircularProgress isIndeterminate marginLeft="50%" />}
                        {data && (
                          <Select
                              maxWidth={200}
                                placeholder="Select forecast day"
                                onChange={(e) => setForecastDay(options[e.target.value])}
                                defaultValue={Object.keys(options)[0]}>
                                {Object.keys(options).map((key) => (
                                    <option key={key} value={key}>
                                        {key}
                                    </option>
                                ))}
                            </Select>
                        )}
                        {forecastDay && (
                            <ForecastTable data={forecastDay || []} />
                        )}
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
  )
}
