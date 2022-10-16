import { IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react'

export const IconButton: React.FC<IconButtonProps> = (props) => (
    <ChakraIconButton
    size="sm"
    position="absolute"
    bottom="10px"
      {...props}
    />
)
