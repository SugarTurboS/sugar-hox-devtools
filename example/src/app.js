import React from 'react'
import { render } from 'react-dom'
import hoxConfig from '../../dist' // 引入组件
import countModel from './model'

const SugarHoxDevTools = hoxConfig.SugarHoxDevTools

const App = () => {
  const { count } = countModel()
  return <SugarHoxDevTools />
}
render(<App />, document.getElementById('root'))
