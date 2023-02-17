import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useHover = <T extends object>() => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => [
    isHover,
    {
      onMouseEnter,
      onMouseLeave
    }
  ], [isHover, onMouseEnter, onMouseLeave])
}
