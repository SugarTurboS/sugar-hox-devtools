import { MyWindow, ModelHook } from './types'
import { ReactElement } from 'react'

declare const window: MyWindow

export function Executor<T>(props: {
  hook: () => ReturnType<ModelHook<T>>
  onUpdate: (data: T) => void
  namespace: string
}) {
  const data = props.hook()
  props.onUpdate(data)
  if (!(window as any).sugarHox) {
    window.sugarHox = {}
  }
  // 过滤 function 类型
  let maps = {}
  const keys = Object.keys(data)

  for (let key of keys) {
    if (typeof data[key] !== 'function') {
      maps[key] = data[key]
    }
  }

  window.sugarHox = {
    ...window.sugarHox,
    [props.namespace]: { ...maps },
  }

  return null as ReactElement
}
