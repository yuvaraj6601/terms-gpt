import { useState } from 'react';



export const useSetState = (initialState: any) => {
  const [state, setState] = useState(initialState)

  const newSetState = (newState: any) => {
    setState((state: any) => ({ ...state, ...newState }))
  }
  return [state, newSetState]
}