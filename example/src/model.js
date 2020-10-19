import { useState } from 'react'
import hoxConfig from '../../dist'

function useCounter() {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)
  return {
    count,
    decrement,
    increment,
  }
}

useCounter.namespace = 'useCounter' // 这里需要给每一个 model 都添加命名空间标识

export default hoxConfig.createModel(useCounter)
