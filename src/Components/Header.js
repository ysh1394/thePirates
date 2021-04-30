import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import EventBanner from './Components/EventBanner';
import Filter from './Components/Filter';

const MenuTab = [
  '홈',
  '시장',
  '쇼핑',
  '콘텐츠',
  '시세',
  '도매',
  '후기',
  '문의',
];

const Header = () => {
  return (
    <>
      <HeaderLayout>
        <Logo
          src="https://www.tpirates.com/static/media/ci.47cd6a30.png"
          alt="logo"
        />
        <LoginLink to="#">로그인/가입</LoginLink>
      </HeaderLayout>
      <MenuLayout>
        {MenuTab.map((menu, idx) => {
          return (
            <Menus to="#" key={idx}>
              {menu}
            </Menus>
          );
        })}
      </MenuLayout>
      <EventBanner />
      <Filter />
    </>
  );
};

export default Header;

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  height: 50px;
  background-color: white;
`;

const Logo = styled.img`
  width: 162px;
  height: 36px;
  margin: 7px 10px;
`;

const LoginLink = styled(Link)`
  margin-right: 10px;
  color: #999999;
  text-decoration: none;
  font-family: 'Noto Sans KR', '맑은 고딕', 'Arial', 'Gulim';
  font-size: 13px;
`;

const MenuLayout = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 420px;
  height: 40px;
  padding: 0px 10px;
  background-color: white;
`;

const Menus = styled(Link)`
  background-color: white;
  color: #777777;
  font-weight: bold;
  &:focus {
    color: #1c79bc;
  }
`;
