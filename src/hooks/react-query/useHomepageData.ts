import { useQuery } from '@tanstack/react-query'

// Simple fetch function for homepage data
const fetchHomepageData = async () => {
  const response = await fetch(`api/homepage`)
  if (!response.ok) {
    throw new Error('Failed to fetch homepage data')
  }
  const data = await response.json()
  return data // Return the actual data from the API response
}

export const useHomepageData = () => {
  return useQuery({
    queryKey: ['homepage'],
    queryFn: fetchHomepageData,
  })
} 