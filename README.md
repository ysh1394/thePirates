## 더 파이러츠 과제 전형

## 담당자 : 유승현

### 프로젝트 목표

> 1. 롤링 배너 구현 -> 완료
> 2. 필터 UI 구현 -> 완료
> 3. 메인페이지 무한스크롤 -> 완료
> 4. 상세페이지 이동 -> 미완료

### 적용 기술


> `React.js`, `Styled-Components`, `antd `, `React-router-dom`
> `react-infinite-scroll-component`, `axios`는 패키지 설치는 하였으나, 사용하지 않았습니다.

## 구현 상세

### Header : 롤링배너, 필터 UI 구현 완료

`1. EventBanner Component`
- styled-components의 keyframes를 활용하여 롤링 배너 구현
  -> translateY 초기값에서 데이터의 length를 계산하여 애니메이션 속도 및 변할 값을 계산하였습니다.
`2. Filter Component`
- map 함수를 활용하여 3개 필터 UI 구현
  -> 각 필터들의 상태값을 토글형태로 관리하여 클릭된 필터를 제외하고는 조건부 렌더링으로 보이지 않도록 하였습니다.

### Main : 메인페이지 무한스크롤 구현 완료
`1. Main Component`
- Scroll Event로 무한 스크롤 기능 구현 완료
  -> 데이터를 최초에 10개만 받은 뒤, 스크롤변화를 감지하여 10개씩 추가로 받아 질 수 있도록 하였습니다.
  > 이슈사항 : 스크롤이벤트가 계속 발생되어 과부하 현상이 있습니다. 더 좋은 방법을 써서 보완해야할 것 같습니다.
