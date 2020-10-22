import React from 'react'
import styles from './index.css'

function MyScrollBox({ children, maxHeight = 200, style = null }) {
  let _style = {}
  if (style) {
    _style = { ...style }
  }
  if (maxHeight) {
    _style = { ..._style, maxHeight: `${maxHeight - 60}px` }
  }
  return (
    <div className={styles.MyScrollBox_outer} style={_style}>
      <div
        className={styles.MyScrollBox_hidden_scroll}
        style={{ maxHeight: `${maxHeight - 60}px` }}
      >
        <div className={styles.MyScrollBox_inner}>{children}</div>
      </div>
    </div>
  )
}

export default MyScrollBox
