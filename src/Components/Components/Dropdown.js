import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
//   ZoomInOutlined,
// } from '@ant-design/icons';
import styled from 'styled-components';
import zoneData from '../../data/zoneData.json';

const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  };

  render() {
    return (
      <MenuLayout
        onClick={this.handleClick}
        // style={{ width: '420px' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline">
        <SubMenu key="sub1" title="모든 지역">
          {zoneData.map((item, idx) => {
            return (
              <Menu.ItemGroup key={idx} title={item.label}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            );
          })}

          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title="모든 품목">
          <Menu.Item key="9">Option 9</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="기본 순">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </MenuLayout>
    );
  }
}

// ReactDOM.render(<Sider />, document.getElementById('container'));

export default Sider;

const MenuLayout = styled(Menu)`
  width: 420px;
  height: 41px;
  /* background-color: #1c79bc; */
  background-color: white;
  color: #1c79bc;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
