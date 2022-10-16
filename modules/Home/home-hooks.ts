import { useCallback } from 'react'
import { useLocalStorage } from '../shared/useLocalStorage'

const FAVORITE_CITIES_KEY = 'favoriteCities'
const DEFAULT_VALUE = []

export const useFavoriteCities = (): [string[], {
  addFavoriteCity: (city: string) => void
  removeFavoriteCity: (city: string) => void
}] => {
  const [favoriteCities, setFavoriteCities] = useLocalStorage<string[]>(FAVORITE_CITIES_KEY, DEFAULT_VALUE)

  const addFavoriteCity = useCallback(
    (city: string): void => {
      if (!favoriteCities.includes(city)) {
        setFavoriteCities([...favoriteCities, city])
      }
    },
    [favoriteCities, setFavoriteCities]
  )

  const removeFavoriteCity = useCallback(
    (city: string): void => {
      setFavoriteCities(favoriteCities.filter((c) => c !== city))
    },
    [favoriteCities, setFavoriteCities]
  )

  return [favoriteCities, { addFavoriteCity, removeFavoriteCity }]
}
