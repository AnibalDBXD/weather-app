import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement } from '@chakra-ui/react'
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from '@choc-ui/chakra-autocomplete'
import cities from '../../shared/static/countries.json'

const citiesItem = cities.map((city) => (
  <AutoCompleteItem
    key={city}
    value={city}
    textTransform="capitalize"
  >
    {city}
  </AutoCompleteItem>
))

export const SearchCityInput: React.FC = () => {
  return (
    <AutoComplete openOnFocus>
      <InputGroup>
        <InputLeftElement pointerEvents='none'><SearchIcon color='gray.300' /></InputLeftElement>
        <AutoCompleteInput placeholder='Search a city' />
      </InputGroup>
      <AutoCompleteList>
        {citiesItem}
      </AutoCompleteList>
    </AutoComplete>
  )
}
