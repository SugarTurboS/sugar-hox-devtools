import React from 'react'
import styles from './app.css'
import { render } from 'react-dom'
import hoxConfig from '../../dist' // 引入组件
import countModel from './model'
import testModel from './test'

const SugarHoxDevTools = hoxConfig.SugarHoxDevTools

const App = () => {
  const { count, decrement, increment } = countModel()
  const { baseInfo } = testModel.useBaseModel()
  const { moreType } = testModel.useMoreType()
  return (
    <>
      <div className={styles.box}>
        <p className={styles.tips}>
          提示 : 点击按钮之后，注意看 sugar-hox-devtools 中对应 model 的变化哦～
        </p>
        <p className={styles.count}>当前 count = {count}</p>
        <div className={styles.btn}>
          <div className={styles.decrement} onClick={decrement}>
            -1
          </div>
          <div className={styles.increment} onClick={increment}>
            +1
          </div>
        </div>
      </div>
      <div className={styles['dev-tools']}>
        <SugarHoxDevTools
          onClose={() => {
            console.log(123)
          }}
        />
      </div>
    </>
  )
}
render(<App />, document.getElementById('root'))
