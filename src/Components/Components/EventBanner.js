/* eslint-disable no-undef */
import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import bannerData from '../../data/bannerData.json';
import { DownOutlined } from '@ant-design/icons';

const EventBanner = () => {
  const [isDropdown, setIsDropdown] = useState(true);

  const isDropdownEvent = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <>
      <Banner dropdown={isDropdown} onClick={isDropdownEvent}>
        {isDropdown ? <DownIcon /> : <RotateIcon />}
        {isDropdown
          ? bannerData.map((item) => {
              return (
                <>
                  <ContentAnimation key={item.id}>
                    {item.label} {item.price} {item.comment}
                  </ContentAnimation>
                </>
              );
            })
          : bannerData.map((item) => {
              return (
                <>
                  <ContentWrapper key={item.id}>
                    {item.label} {item.price} {item.comment}
                  </ContentWrapper>
                </>
              );
            })}
      </Banner>
    </>
  );
};

export default EventBanner;

const Banner = styled.section`
  position: relative;
  height: 40px;
  margin: auto;
  ${(props) => (props.dropdown === true ? Hidden : Visible)};
  background-color: #1c79bc;
`;

const rotate = keyframes`
  from {
    transform: translateY(100%)
  }

  to {
    transform: translateY(${-(bannerData.length - 1) * 100 - 50}%)
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-family: 'Noto Sans KR', '맑은 고딕', 'Arial', 'Gulim';
  font-size: 13px;
  color: #ffffff;
`;

const ContentAnimation = styled(ContentWrapper)`
  position: relative;
  animation: ${rotate} ${bannerData.length}s linear infinite;

  /* &:hover {
    animation-play-state: paused;
  } */
`;

const DownIcon = styled(DownOutlined)`
  position: absolute;
  left: 390px;
  top: 14px;
  font-size: 12px;
  text-align: center;
  color: white;
  transform: rotate(0deg);
`;

const RotateIcon = styled(DownIcon)`
  transform: rotate(180deg);
`;

const Hidden = css`
  overflow: hidden;
`;

const Visible = css`
  overflow: visible;
  height: max-content;
`;
