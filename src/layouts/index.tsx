import React, { PureComponent, Fragment } from 'react';
import { footerInfo } from 'config/system';
import { Layout } from 'antd';
import Logo from 'components/logo';
import MainMenu from 'components/menu';
import styles from './index.less';

const { Header, Content, Footer } = Layout

class App extends PureComponent {
  render () {
    const {
      children
    } = this.props
    return (
      <Layout>
        <Header className={'header'}>
          <Logo className={styles.small_logo} />
          <MainMenu />
        </Header>
        <Layout>
          <Content className='content'>
            <Fragment>{ children }</Fragment>
          </Content>
        </Layout>
        <Footer className={styles.footer}>{ footerInfo }</Footer>
      </Layout>
    )
  }
}

export default App;
