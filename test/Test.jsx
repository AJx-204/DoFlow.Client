import React from 'react'
import { NotifierList, NotifierProvider } from '../src/global/index'
import TestButtons from './Notifier/Notifier'

const Test = () => {
  return (
     <NotifierProvider>
      <TestButtons/>
      <NotifierList/>
    </NotifierProvider>
  )
}

export default Test