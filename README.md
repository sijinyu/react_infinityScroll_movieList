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

**@craco/craco**
절대경로를 사용하기 위해 cra을 풀지않고 webpack config에 접근할 수 있는 craco를 사용하였습니다.
