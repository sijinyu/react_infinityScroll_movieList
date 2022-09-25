## **폴더 구조**

- router
- common - 공통적으로 사용되는 util, hook 등을 모아놓은 폴더 입니다.
- components - 공통적으로 사용되는 컴포넌트들을 모아놓은 폴더 입니다. (ex Button , SerachBar, Container .. )
- lib — 사용중인 라이브러리 Facade Pattern으로 관리하기 위한 폴더 입니다.

- features - 기능적인 부분을 담당하는 컴포넌트들입니다.

  - movie - 페이지 내에서 기능하는 컴포넌트로 폴더 구분을 했습니다.
    - hooks
    - model
    - modals

- pages - 페이지를 나타내는 컴포넌트 입니다.

## **사용한 라이브러리 | 선정 이유**

**@mui/material, @emotion **
정해진 디자인 시스템이 없기 때문에 자주 사용하는 MUI를 사용하였고 Styled 기능을 제공하기에 theme default value를 사용 가능하다는 장점이 있습니다.
사용하기에 앞서 MUI 구성 요소에 대한 CSS 스타일을 생성하는 데 사용되는 기본 스타일 라이브러리로 채택된 emotion도 설치했습니다.
이를 통해 디자인을 입히고 사용 하였습니다.

**@craco/craco**
절대경로를 사용하기 위해 cra을 풀지않고 webpack config에 접근할 수 있는 craco를 사용하였습니다.

**recoil , recoil-persist**
즐겨찾기 리스트를 저장하고 새로고침 후에도 호출하기 위헤 사용한 라이브러리 입니다.
persist를 즐겨찾기 리스트에 적용하였습니다.
atom을 제공받고 있는 컴포넌트는 상태 변경시 자동 리렌더링 되기에 즐겨찾기 추가 삭제 이벤트 후 리렌더링되어 즉시 뷰 변경 요구사항을 해결하였습니다.

이번에 처음 recoil를 사용해봤는데 redux보다 훨씬 간결하고 hook 형태로 사용할 수 있어 편했습니다.

**@tanstack/react-query**
이 프로젝트내에선 무한스크롤를 구현시 UseInfinity 기능을 사용하였습니다.(+Observer)

## **이슈**

- 영화 API 첫 호출시 파라미터 s에 빈값을 보낼시 Incorrect IMDb ID 메세지를 호출 합니다.
  아무 값이나 넘겨 보낸 이후, Response - False 일시 Movie not found! 또는 Too many results 메세지를 Api에서 제공합니다.
