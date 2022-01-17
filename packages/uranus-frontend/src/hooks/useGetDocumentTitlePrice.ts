import { useEffect } from 'react'
import { useTanUsdcPrice } from 'hooks/useUsdcPrice'

const useGetDocumentTitlePrice = () => {
  const tanPriceUsdc = useTanUsdcPrice()
  useEffect(() => {
    const tanPriceUsdcString = tanPriceUsdc ? tanPriceUsdc.toFixed(2) : ''
    document.title = `TAN Swap - ${tanPriceUsdcString}`
  }, [tanPriceUsdc])
}
export default useGetDocumentTitlePrice
