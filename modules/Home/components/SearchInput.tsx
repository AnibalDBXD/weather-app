import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputProps, InputGroup, InputLeftElement } from '@chakra-ui/react'

export const SearchInput: React.FC<InputProps> = (props) => {
  return (
    <InputGroup>
        <InputLeftElement pointerEvents='none'><SearchIcon color='gray.300' /></InputLeftElement>
        <Input placeholder='Search a city' {...props} />
    </InputGroup>
  )
}
