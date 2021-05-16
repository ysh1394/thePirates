import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import * as demo_data from '../data/demo_data';

const Total = demo_data.storeDataTotal;

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [listLength, setListLength] = useState(0);
  const [list, setList] = useState([]);

  const fetchList = useCallback((listLength) => {
    const res = demo_data.storeData.slice(listLength, listLength + 10);
    setList((prev) => [...prev, ...res]);
    setLoading(true);
  }, []);

  useEffect(() => {
    fetchList(listLength);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLength]);

  const loadMore = useCallback(() => {
    if (listLength !== list.length) {
      setListLength((prev) => prev + 10);
    }
  }, [list.length, listLength]);

  const pageEnd = useRef();
  const infiniteScroll = useCallback(() => {
    if (loading && listLength <= list.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              loadMore();
              observer.unobserve(pageEnd.current);
            }, 1000);
          }
        },
        { threshold: 1 },
      );
      observer.observe(pageEnd.current);
    }
    if (listLength === Total) {
      setLoading(false);
    }
  }, [list.length, listLength, loadMore, loading]);

  useEffect(() => {
    infiniteScroll();
  }, [infiniteScroll]);

  // const infiniteScroll = useCallback(() => {
  //   let scrollHeight = Math.max(
  //     document.documentElement.scrollHeight,
  //     document.body.scrollHeight,
  //   );
  //   let scrollTop = Math.max(
  //     document.documentElement.scrollTop,
  //     document.body.scrollTop,
  //   );
  //   let clientHeight = document.documentElement.clientHeight;

  //   // setLoading(true);
  //   if (
  //     scrollTop + clientHeight >= scrollHeight &&
  //     list.length < demo_data.storeData.length
  //   ) {
  //     setTimeout(() => {
  //       setListLength(listLength + 10);
  //       setResult(
  //         list.concat(
  //           demo_data.storeData.slice(listLength + 10, listLength + 20),
  //         ),
  //       );
  //       // setLoading(false);
  //     }, 2000);
  //   }
  // }, [listLength, list]);

  // useEffect(() => {
  //   window.addEventListener('scroll', infiniteScroll, true);
  //   return () => window.removeEventListener('scroll', infiniteScroll, true);
  // }, [infiniteScroll]);

  return (
    <>
      <MainLayout>
        <TitleName>프리미엄 가게</TitleName>
        {list.map((list) => {
          return (
            <>
              <StoreList key={list.id}>
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
        {loading && <Loading ref={pageEnd} />}
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

const Loading = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  margin: 50px 0px;
  border-radius: 50%;
  border: 5px solid #eeeeee;
  opacity: 0.7;
  border-top: 5px solid #1c79bc;
  animation: animate 1.5s infinite linear;

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
