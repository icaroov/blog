import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<Parameter> = [Parameter, Dispatch<SetStateAction<Parameter>>]

function usePersistedState<Parameter>(
  key: string,
  initialState: Parameter,
): Response<Parameter> {
  const [state, setState] = useState(() => {
    const isSsr = typeof window === 'undefined'

    const storageValue = isSsr ? null : localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    }
    return initialState
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
