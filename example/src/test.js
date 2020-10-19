import { useState } from 'react'
import hoxConfig from '../../dist'

function useBaseModel() {
  const [baseInfo, setCount] = useState({
    version: 'v1.0.3',
    name: 'sugar-hox-devtools',
    keywords: ['dva', 'react', 'redux', 'model', 'hox'],
  })
  return {
    baseInfo,
  }
}

useBaseModel.namespace = 'useBaseModel' // 这里需要给每一个 model 都添加命名空间标识

function useMoreType() {
  const [moreType, setCount] = useState({
    name: '更多类型',
    string: '我是string类型',
    array: [
      {
        name: '1-0',
        key: '1-0',
        children: [
          {
            name: '1-0-0',
            key: '1-0-0',
            children: [
              {
                name: '1-0-0-0',
                key: '1-0-0-0',
              },
              {
                name: '1-0-0-1',
                key: '1-0-0-1',
              },
              {
                name: '1-0-0-2',
                key: '1-0-0-2',
              },
            ],
          },
        ],
      },
      {
        name: '1-1',
        key: '1-1',
        children: [
          {
            name: '1-1-0',
            key: '1-1-0',
            children: [
              {
                name: '1-1-0-0',
                key: '1-1-0-0',
              },
              {
                name: '1-1-0-1',
                key: '1-1-0-1',
              },
              {
                name: '1-1-0-2',
                key: '1-1-0-2',
              },
            ],
          },
        ],
      },
    ],
  })
  return {
    moreType,
  }
}

useMoreType.namespace = 'useMoreType' // 这里需要给每一个 model 都添加命名空间标识

function useOtherType() {
  const [other, setCount] = useState({
    appId: 'sugar-hox-devtools',
    link: 'https://github.com/PDKSophia/sugar-hox-devtools',
    author: '彭道宽',
    api: undefined,
    other: null,
  })
  return {
    other,
  }
}

useOtherType.namespace = 'useOtherType' // 这里需要给每一个 model 都添加命名空间标识

export default {
  useBaseModel: hoxConfig.createModel(useBaseModel),
  useMoreType: hoxConfig.createModel(useMoreType),
  useOtherType: hoxConfig.createModel(useOtherType),
}
