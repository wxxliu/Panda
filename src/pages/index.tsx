import React, { PureComponent } from 'react';
import { Card } from 'antd';
import styles from './index.less'

const { Meta } = Card;

class Index extends PureComponent {
  render () {
    return (
      <div className='flow'>
        <div className={styles.water_flow}>
          <div className={styles.box}>
            <Card
             hoverable
             style={{ width: 240 }}
             cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            >
              <Meta title="《咱们裸熊》" description="www.douban.com" />
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
