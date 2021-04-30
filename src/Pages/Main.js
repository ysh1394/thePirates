import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import * as demo_data from '../data/demo_data';
import { LoadingOutlined } from '@ant-design/icons';

const Main = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(demo_data.storeData.slice(0, 10));
  const [loading, setLoading] = useState(false);

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
    let clientHeight = document.documentElement.clientHeight;

    // setLoading(true);
    if (
      scrollTop + clientHeight >= scrollHeight &&
      result.length < demo_data.storeData.length
    ) {
      setTimeout(() => {
        setItemIndex(itemIndex + 10);
        setResult(
          result.concat(
            demo_data.storeData.slice(itemIndex + 10, itemIndex + 20),
          ),
        );
        // setLoading(false);
      }, 2000);
    }
  }, [itemIndex, result]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => window.removeEventListener('scroll', infiniteScroll, true);
  }, [infiniteScroll]);

  return (
    <>
      <MainLayout>
        <TitleName>프리미엄 가게</TitleName>
        {result.map((list) => {
          return (
            <>
              <StoreList>
                <StoreImg src={list.thumbnail} alt={list.uri} />
                <StoreInfo>
                  <StoreNameinfo>
                    <StoreName>{list.label}</StoreName>
                    <StoreMarket>{list.market}</StoreMarket>
                  </StoreNameinfo>
                  <StoreDetail>
                    {list.description.length > 25
                      ? `${list.description.slice(0, 25)}...`
                      : list.description}
                  </StoreDetail>
                </StoreInfo>
              </StoreList>
            </>
          );
        })}
        {loading && <Loading style={{ fontSize: 24 }} spin />}
      </MainLayout>
    </>
  );
};

export default Main;

const MainLayout = styled.section`
  background-color: #eeeeee;
`;

const TitleName = styled.h1`
  margin-top: 10px;
  padding: 7px 15px;
  color: #1c79bc;
  font-family: 'Noto Sans KR', '맑은 고딕', 'Arial', 'Gulim';
  font-size: 15px;
`;

const StoreList = styled.div`
  display: flex;
  width: 420px;
  height: 130px;
  margin-bottom: 10px;
`;

const StoreImg = styled.img`
  width: 130px;
  height: 130px;
`;

const StoreInfo = styled.div`
  width: 290px;
  height: 130px;
  box-sizing: border-box;
  padding: 15px 15px 10px;
  background-color: white;
`;

const StoreNameinfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StoreName = styled.h3`
  color: #555555;
  font-family: 'Noto Sans KR', '맑은 고딕', 'Arial', 'Gulim';
  font-size: 14px;
  font-weight: bold;
`;

const StoreMarket = styled.h3`
  margin-left: 5px;
  color: #999999;
  font-family: 'Noto Sans KR', '맑은 고딕', 'Arial', 'Gulim';
  font-size: 13px;
`;

const StoreDetail = styled.h5`
  margin-top: 1px;

  color: #999999;
  font-family: 'Noto Sans KR', '맑은 고딕', 'Arial', 'Gulim';
  font-size: 13px;
`;

const Loading = styled(LoadingOutlined)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;
