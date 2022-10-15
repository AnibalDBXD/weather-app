import { Box, SimpleGrid } from '@chakra-ui/react'
import { SearchCityInput } from './components/SearchCityInput'
import { CityWeatherCard } from './components/CityWeatherCard'
import { useState } from 'react'
import { useFavoriteCities } from './home-hooks'
import { DEFAULT_CITY } from '../shared/constants'

export const HomeView: React.FC = () => {
  const [search, setSearch] = useState(DEFAULT_CITY)
  const [favoriteCities, { addFavoriteCity, removeFavoriteCity }] = useFavoriteCities()

  return (
    <Box padding="1.5rem" as="main" width="100vw" display="flex" flexDirection="column" alignItems="center">
      <Box as="nav" width="400px" display="flex" justifyContent="center">
        <SearchCityInput value={search} onChange={setSearch} />
      </Box>
      <SimpleGrid marginTop="4rem" spacing='40px' minChildWidth="340px" width="60%" justifyItems="center">
        <CityWeatherCard
          city={search}
          isFavorite={favoriteCities.includes(search)}
          onAdd={addFavoriteCity}
          onRemove={removeFavoriteCity}
          hideOnRemove={false}
        />
        {favoriteCities.map(city => {
          if (city === search) return null
          return <CityWeatherCard key={city} city={city} isFavorite onRemove={removeFavoriteCity} />
        })}
      </SimpleGrid>
    </Box>
  )
}
