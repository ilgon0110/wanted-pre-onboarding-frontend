### 1. 회원가입

- [ ] 1-1) 이메일 유효성 검사
  - @포함
- [ ] 1-2) 비밀번호 유효성 검사

  - 8자 이상

- [ ] 1-3) 유효성 검사 실패했을 경우

  - button에 disabled 속성 부여

- [ ] 1-4) 유효성 검사 성공했을 경우
  - signIn 경로로 이동

### 2. 로그인

- [ ] 2-1) 로그인이 실패했을 경우

  - ERROR 문구 출력.

- [ ] 2-2) 로그인이 성공했을 경우

  - 응답받은 JWT를 local storage에 저장

- [ ] 2-3) 로그인 여부에 따른 redirect 처리

  - local storage에 토큰이 있는 경우

    - [ ] signIn, signUp 페이지 접속 시 todo 경로로 redirect

  - local storage에 토큰이 없는 경우
    - [ ] todo 페이지에 접속 시 signIn 경로로 redirect

### 3. TODO-LIST

- [ ] 3-1) 투두 리스트 목록보기

  - 내용과 완료 여부 checkbox로 표현하기
  - &lt;li>태그를 이용해 감싸주기

- [ ] 3-2) 새로운 TODO를 입력할 수 있는 input과 추가 button 만들기

  - TODO 입력 input에 data-testid="new-todo-input" 속성 부여
  - TODO 추가 button에 data-testid="new-todo-add-button" 속성 부여
  - 추가 button을 클릭하면 input에 내용이 새로운 TODO로 추가

- [ ] 3-3) TODO 체크박스를 통해 완료 여부 수정할 수 있게하기

- [ ] 3-4) TODO 우측에 수정버튼과 삭제 버튼 만들기

  - 수정 button에는 data-testid="modify-button" 속성 부여
  - 삭제 button에는 data-testid="delete-button" 속성 부여

- [ ] 3-5) TODO LIST의 삭제 기능 구현

  - 삭제 button을 누르면 해당 아이템이 삭제

- [ ] 3-6) TODO LIST의 수정 기능 구현

  - 수정 버튼을 누르면 수정모드가 활성화
  - TODO의 내용이 input창에 입력된 형태로 변경
  - data-testid="modify-input"속성 부여
  - 우측에 제출과 취소버튼 구현
  - 제출 button에는 data-testid="submit-button" 속성 부여
  - 취소 button에는 data-testid="cancel-button" 속성 부여
  - 제출 버튼을 누르면 수정한 내용으로 update
  - 취소 버튼을 누르면 수정한 내용을 초기화하고, 수정 모드 비활성화
