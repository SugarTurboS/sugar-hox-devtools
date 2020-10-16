import React from 'react'
import HoxTool from './HoxTool'

class Index extends React.Component {
  componentDidMount() {
    new Proxy(window, {
      get(target, propKey, receiver) {
        return Reflect.get(target, propKey, receiver)
      },
      set(target, propKey, value, receiver) {
        Reflect.set(target, propKey, value, receiver)
      },
    })
  }

  render() {
    return <HoxTool />
  }
}

export default Index
