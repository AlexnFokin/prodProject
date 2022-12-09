import { MutableRefObject, useCallback, useRef } from 'react'

export function useDebounce (callback: (...args: any[]) => void, delay: number) {
  const timer = useRef()

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    // @ts-expect-error
    timer.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}
