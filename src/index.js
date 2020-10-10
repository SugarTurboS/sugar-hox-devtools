/**
 * @desc hox dev tools 组件
 * @author {pengdaokuan}
 * @createTime 2020-10-10
 */
import React from 'react'
import './index.css'
import Tree from 'antd/lib/tree'
// import 'antd/lib/tree/style/index.css'
import mock from './mock'

class HoxTool extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Tree
          showLine
          defaultExpandedKeys={['0-0-0']}
          // onSelect={this.onSelect}
          treeData={[
            {
              title: 'parent 1',
              key: '0-0',
              children: [
                {
                  title: 'parent 1-0',
                  key: '0-0-0',
                  children: [
                    {
                      title: 'leaf',
                      key: '0-0-0-0',
                    },
                    {
                      title: 'leaf',
                      key: '0-0-0-1',
                    },
                    {
                      title: 'leaf',
                      key: '0-0-0-2',
                    },
                  ],
                },
                {
                  title: 'parent 1-1',
                  key: '0-0-1',
                  children: [
                    {
                      title: 'leaf',
                      key: '0-0-1-0',
                    },
                  ],
                },
                {
                  title: 'parent 1-2',
                  key: '0-0-2',
                  children: [
                    {
                      title: 'leaf',
                      key: '0-0-2-0',
                    },
                    {
                      title: 'leaf',
                      key: '0-0-2-1',
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    )
  }
}

export default HoxTool
