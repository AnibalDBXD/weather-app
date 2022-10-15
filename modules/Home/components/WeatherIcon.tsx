import Image from 'next/future/image'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  position: 'absolute',
  top: '-30px',
  right: '50%'
}

export const WeatherIcon: React.FC = () => {
  return (
    <Image src="/icons/day.svg" height={128} width={128} alt="Weather Day" style={style} />
  )
}
