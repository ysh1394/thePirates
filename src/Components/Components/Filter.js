import React, { useState } from 'react';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';
import * as demo_data from '../../data/demo_data.js';

const etc = [
  {
    code: 1,
    label: '기본 순',
  },
  {
    code: 2,
    label: '인기 순',
  },
  {
    code: 3,
    label: '최근 본 가게',
  },
];

const Filter = () => {
  const [isZoneData, setIsZoneData] = useState(false);
  const [isItemData, setIsItemData] = useState(false);
  const [isEtc, setIsEtc] = useState(false);

  const isZoneDataEvent = () => {
    setIsZoneData(!isZoneData);
    setIsItemData(false);
    setIsEtc(false);
  };

  const isItemDataEvent = () => {
    setIsItemData(!isItemData);
    setIsZoneData(false);
    setIsEtc(false);
  };

  const isEtcEvent = () => {
    setIsEtc(!isEtc);
    setIsItemData(false);
    setIsZoneData(false);
  };

  console.log(demo_data);

  return (
    <>
      <FilterLayout>
        <FilterName onClick={isZoneDataEvent}>
          모든 지역
          <DownIcon />
        </FilterName>
        <FilterName onClick={isItemDataEvent}>
          모든 품목
          <DownIcon />
        </FilterName>
        <FilterName onClick={isEtcEvent}>
          기본 순
          <DownIcon />
        </FilterName>
      </FilterLayout>
      {isZoneData && (
        <FilterSection>
          {demo_data.zoneData.map((item) => {
            return (
              <>
                <ZoneList key={item.code}>{item.label}</ZoneList>
              </>
            );
          })}
        </FilterSection>
      )}
      {isItemData && (
        <FilterSection>
          {demo_data.itemData.map((item) => {
            return (
              <>
                <ZoneList key={item.code}>{item.label}</ZoneList>
              </>
            );
          })}
        </FilterSection>
      )}
      {isEtc && (
        <FilterSection>
          {etc.map((item) => {
            return (
              <>
                <ZoneList key={item.code}>{item.label}</ZoneList>
              </>
            );
          })}
        </FilterSection>
      )}
    </>
  );
};

export default Filter;

const FilterLayout = styled.section`
  display: flex;
  height: 41px;
  margin: auto;
  border: 1px solid lightgray;
  font-family: 'Noto Sans KR', '맑은 고딕', 'Arial', 'Gulim';
`;

const FilterName = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 41px;
  margin: auto;
  color: #1c79bc;
  cursor: pointer;
`;

const DownIcon = styled(CaretDownOutlined)`
  margin-left: 2px;
  font-size: 12px;
`;

const FilterSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: solid 0.5px lightgray;
`;

const ZoneList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 41px;
  /* border-collapse: collapse;
  border: solid 0.5px lightgray; */
`;
