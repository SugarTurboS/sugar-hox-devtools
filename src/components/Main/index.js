import React from 'react'
import DevTools from '../DevTools'

class Main extends React.Component {
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
    return <DevTools />
  }
}

export default Main
