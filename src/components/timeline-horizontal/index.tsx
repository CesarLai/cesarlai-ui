import React, { FC, useMemo, useState } from 'react'
import classNames from 'classnames'
import {
  LoadingOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'

import './index.less'

export interface TimelineItem {
  title: string
  color?: string
  loading?: boolean
}

export interface TimelineHorizontalProps {
  steps: TimelineItem[]
}

/**
 * 水平时间线组件
 */
const TimelineHorizontal: FC<TimelineHorizontalProps> = (props) => {
  return (
    <div className="timeline-horizontal">
      <div className="timeline-horizontal-inner">
        {props.steps.map((item, index) => {
          return (
            <div key={`item-${index + 1}`} className="timeline-horizontal-item">
              <div className="timeline-horizontal-item-body">
                {item.loading ? (
                  <LoadingOutlined
                    className={classNames(
                      'timeline-horizontal-item-point',
                      'timeline-horizontal-item-point-loading'
                    )}
                  />
                ) : (
                  <div
                    className={classNames(
                      'timeline-horizontal-item-point',
                      'timeline-horizontal-item-point-success'
                    )}
                  />
                )}
              </div>
              <span className="timeline-horizontal-item-title">
                {item.title}
              </span>
            </div>
          )
        })}
        <div className="timeline-horizontal-line"></div>
      </div>
    </div>
  )
}

TimelineHorizontal.defaultProps = {}

export default TimelineHorizontal
