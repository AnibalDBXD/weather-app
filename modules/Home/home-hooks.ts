import { useLocalStorage } from '../shared/useLocalStorage'

const FAVORITE_CITIES_KEY = 'favoriteCities'

export const useFavoriteCities = (): [string[], {
  addFavoriteCity: (city: string) => void
  removeFavoriteCity: (city: string) => void
}] => {
  const [favoriteCities, setFavoriteCities] = useLocalStorage<string[]>(FAVORITE_CITIES_KEY, [])

  const addFavoriteCity = (city: string): void => {
    if (!favoriteCities.includes(city)) {
      setFavoriteCities([...favoriteCities, city])
    }
  }

  const removeFavoriteCity = (city: string): void => {
    setFavoriteCities(favoriteCities.filter((c) => c !== city))
  }

  return [favoriteCities, { addFavoriteCity, removeFavoriteCity }]
}
