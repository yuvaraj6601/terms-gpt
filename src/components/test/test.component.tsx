import React, { useEffect } from 'react';
import { Assets, Models, Constants } from "utils/imports.utils"
import * as Types from "interfaces/common.interface"
import { testDispatch } from 'utils/redux.utils';
import { useSelector } from 'react-redux'

export default function Test() {
  const test: any = useSelector((state: Types.reducers) => state.test)

  useEffect(() => {
    testFunction()
  }, [])

  const testFunction = async () => {
    try{
      let response:any = await Models.test.testRequest("kishore")
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  const handleTest = () => {
    testDispatch({ username: "test"})
  }
  console.log(test)
  return (
    <h1 onClick={handleTest}>
      {test.username}
      {Constants.sampleConstant}
      <img src={Assets.testPic} />
    </h1>
  )
}
