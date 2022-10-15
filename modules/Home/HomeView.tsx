import { Box, SimpleGrid } from '@chakra-ui/react'
import { SearchCityInput } from './components/SearchCityInput'
import { CityWeatherCard } from './components/CityWeatherCard'
import { useState } from 'react'

export const HomeView: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <Box padding="1.5rem" as="main" width="100vw" display="flex" flexDirection="column" alignItems="center">
      <Box as="nav" width="400px" display="flex" justifyContent="center">
        <SearchCityInput value={search} onChange={setSearch} />
      </Box>
      <SimpleGrid marginTop="4rem" spacing='40px' minChildWidth="340px" width="60%" justifyItems="center">
        <CityWeatherCard />
      </SimpleGrid>
    </Box>
  )
}
