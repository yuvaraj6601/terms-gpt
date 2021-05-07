import { useState } from 'react';

export const getBaseURL = () => {
  let baseURL = 'https://api.hellaviews.com'
  if(process.env.REACT_APP_NODE_ENV === "development"){
    baseURL = 'http://localhost:8001'
  }else if(process.env.REACT_APP_NODE_ENV === "stage"){
    baseURL = 'https://stage.hellaviews.com'
  }
  return baseURL
}

export const useSetState = (initialState: any) => {
  const [state, setState] = useState(initialState)

  const newSetState = (newState: any) => {
    setState((prevState: any) => ({ ...prevState, ...newState }))
  }
  return [state, newSetState]
}

const Functions = {
  useSetState,
  getBaseURL
}

export default Functions