import { useQuery } from '@tanstack/react-query'

// Simple fetch function for bestseller data
const fetchBestSellerData = async () => {
  const response = await fetch(`api/bestseller`)
  if (!response.ok) {
    throw new Error('Failed to fetch bestseller data')
  }
  const data = await response.json()
  return data
}

export const useBestSellerData = () => {
  return useQuery({
    queryKey: ['bestseller'],
    queryFn: fetchBestSellerData,
  })
} 