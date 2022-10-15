import { Box, Text, Tooltip } from '@chakra-ui/react'
import Image from 'next/future/image'

export interface InfoRowProps {
  src: string
  label: string
  children: React.ReactNode
}

export const InfoRow: React.FC<InfoRowProps> = ({ children, label, src }) => {
  return (
    <Tooltip label={label} placement='bottom' hasArrow>
        <Box display="flex" alignItems="center" justifyContent="center" gap="0.5rem">
            <Image src={src} alt={label} width={30} height={30} />
            <Text>{children}</Text>
        </Box>
    </Tooltip>
  )
}
