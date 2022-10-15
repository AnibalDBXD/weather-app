import Image from 'next/future/image'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  position: 'absolute',
  top: '-10px',
  right: '60%'
}

const ICONS = {
  Thunderstorm: '/icons/thunderstorm.svg',
  Drizzle: '/icons/drizzle.svg',
  Rain: '/icons/rain.svg',
  Snow: '/icons/snow.svg',
  Clear: '/icons/clear.svg',
  Clouds: '/icons/clouds.svg'
}

export const WeatherIcon: React.FC<{ src?: string }> = ({ src }) => {
  const icon = ICONS[src ?? ''] || ICONS.Clouds
  return (
    <Image src={icon} height={90} width={90} alt="Weather Day" style={style} priority quality={100} />
  )
}
