/**
 * @desc hox dev tools 组件
 * @author {pengdaokuan}
 * @createTime 2020-10-10
 */
import React from 'react'
import styles from './index.css'
import Tree from 'antd/lib/tree'
import mock from './mock'

function HoxTool() {
  function checkObjectOrArray(value) {
    return (
      Object.prototype.toString.call(value) === '[object Object]' ||
      Object.prototype.toString.call(value) === '[object Array]'
    )
  }

  function renderTitle(value, key) {
    if (!checkObjectOrArray(value)) {
      return `${key}: ${value}`
    }
    return key
  }
  function format(model) {
    let result = []
    const deep = (children, value, idx) => {
      Object.keys(value).map((key, index) => {
        let temp = {}
        temp.key = `${idx}-${index}`
        temp.title = renderTitle(value[key], key)
        temp.children = []
        if (checkObjectOrArray(value[key])) {
          deep(temp.children, value[key], temp.key)
        }
        children.push(temp)
      })
    }
    Object.keys(model).map((key, index) => {
      let temp = {}
      temp.key = index
      temp.title = renderTitle(model[key], key)
      temp.children = []
      if (checkObjectOrArray(model[key])) {
        deep(temp.children, model[key], index)
      }
      result.push(temp)
    })
    return result
  }

  return (
    <div className={styles.wrapper}>
      <Tree treeData={format(mock)} blockNode={true} className="demo" />
    </div>
  )
}
export default HoxTool
