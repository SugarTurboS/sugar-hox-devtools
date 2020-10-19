/**
 * @desc hox dev tools 组件
 * @author {pengdaokuan}
 * @createTime 2020-10-15
 */
import React from 'react'
import 'antd/dist/antd.css'
import styles from './index.css'
import Tree from 'antd/lib/tree'
import { THEME } from './theme'
import {
  checkObjectOrArray,
  isNull,
  isString,
  isNumber,
  isUndefined,
  isArray,
  isObject,
} from './utils'

function DevTools({ title, closeIcon, onClose = () => {} }) {
  const currentTheme = THEME.DEFAULT

  function renderTitle(value, key) {
    const typeNull = isNull(value)
    const typeString = isString(value)
    const typeNumber = isNumber(value)
    const typeUndefined = isUndefined(value)
    const typeArray = isArray(value)
    const typeObject = isObject(value)
    const str = '{}'

    if (!checkObjectOrArray(value)) {
      return (
        <div>
          <span style={{ color: currentTheme.mainColor || '' }}>{key} : </span>
          {typeNull && (
            <span style={{ color: currentTheme.nullValueColor || '' }}>
              null
            </span>
          )}
          {typeString && (
            <span style={{ color: currentTheme.stringValueColor || '' }}>
              {value}
            </span>
          )}
          {typeNumber && (
            <span style={{ color: currentTheme.numberValueColor || '' }}>
              {value}
            </span>
          )}
          {typeUndefined && (
            <span style={{ color: currentTheme.undefinedValueColor || '' }}>
              undefined
            </span>
          )}
          {typeArray && (
            <span style={{ color: currentTheme.arrayValueColor || '' }}>
              {value.length}
            </span>
          )}
          {typeObject && <span>''</span>}
        </div>
      )
    } else if (typeArray) {
      return (
        <div>
          <span style={{ color: currentTheme.mainColor || '' }}>{key}: </span>
          {typeArray && (
            <span style={{ color: currentTheme.arrayValueColor || '' }}>
              Array[{value.length}]
            </span>
          )}
        </div>
      )
    } else {
      return (
        <div>
          <span style={{ color: currentTheme.mainColor || '' }}>
            {`${key}`}
            {Object.keys(value).length === 0 && (
              <span style={{ color: currentTheme.arrayValueColor || '' }}>
                {`: ${str}`}
              </span>
            )}
          </span>
        </div>
      )
    }
  }

  function format(model) {
    let result = []
    if (isObject(model)) {
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
    }
    return result
  }

  return (
    <div
      className={styles.sugarHoxDevTools}
      style={{ backgroundColor: currentTheme.background || '' }}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title || 'sugar-hox-devtools'}</div>
        <div className={styles.close} onClick={onClose}>
          {closeIcon || 'X'}
        </div>
      </div>
      <Tree treeData={format(window.sugarHox)} blockNode={true} />
    </div>
  )
}
export default DevTools
