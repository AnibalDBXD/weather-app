import { API_KEY, BASE_URL } from './constants'

export const fetchApi = async (path: string): Promise<any> => {
  if (!API_KEY) throw new Error('API_KEY is not defined')
  const url = `${BASE_URL}${path}&appid=${API_KEY}`
  const response = await fetch(url.toString())

  if (response.status >= 400) throw new Error(response.statusText)
  return await response.json()
}
