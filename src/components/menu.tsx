import React, { PureComponent, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import { Menu } from 'antd';
import { menuList } from 'config/system';

class MainMenu extends PureComponent<RouteComponentProps> {
  render () {
    const {
      location: { pathname }
    } = this.props
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[pathname]}
        style={{ lineHeight: '64px' }}
      >
        {
          menuList.map((item) => {
            return <Menu.Item key={item.link}><Link to={item.link}>{item.name}</Link></Menu.Item>
          })
        }
      </Menu>
    )
  }
}

export default withRouter(MainMenu);
