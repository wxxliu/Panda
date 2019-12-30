import React, { PureComponent } from 'react';
import styles from './index.less';
import { mission, logoName } from 'config/system'
import { Row, Col } from 'antd';
import Logo from 'components/logo'

class About extends PureComponent {
  render () {
    return (
      <div className='container'>
        <div className={styles.about_container}>
          <div className='row'><Logo className={styles.big_logo} /></div>
          <div className='row'><span className={styles.logo_txt}>{logoName}</span></div>
          <div className={styles.copy_content}>
            <div className={styles.mission}>{mission}</div>
          </div>
          <div className={styles.contact_content}>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">加入我们: </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">私密留言: </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">商务合作: </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">媒体报道: </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">hr@panda.com</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">hi@panda.com</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">business@panda.com</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">media@panda.com</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
