import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement } from '@chakra-ui/react'
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from '@choc-ui/chakra-autocomplete'
import cities from '../../shared/static/cities.json'

interface SearchCityInputProps {
  value: string
  onChange: (value: string) => void
}

const citiesItem = cities.map((city) => (
  <AutoCompleteItem
    key={city}
    value={city}
    textTransform="capitalize"
  >
    {city}
  </AutoCompleteItem>
))

export const SearchCityInput: React.FC<SearchCityInputProps> = ({ onChange, value }) => {
  return (
    <AutoComplete openOnFocus defaultValue={value} value={value} onChange={onChange} maxSuggestions={5}>
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
