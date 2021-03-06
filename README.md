# Univ_commity

0. 프로젝트 주제<br>
- COVID-19로 학우간 유대감을 형성하기 어려웠던 이들을 위한 매칭 프로그램
- 진행과정<br>
[1] 주제 선정 과정에서 카드소팅으로 주제를 하나씩 소거<br>
[2] 추가등록이 필요한 기능 목록 작성<br>
[3] 기능 별로 분류<br>
[4] 최종 기능 정리<br>


1. 구현 목표<br>
- 로그인 
- 회원가입
- 
- 

<br/><br/>

2. 기술 스택<br>
- Front-End : HTML/CSS , Javascript<br>
- Back-End : Firebase<br>
- Wire-Frame : Figma<br>

<br/><br/>

3. 세부사항<br>
- 구현의 최소화를 위해 방마다 입력정보를 달리하지 않고, 회원가입시 최초 1회 사용자 정보를 입력받음
- 기능 구현을 구체적으로 설계
- 개발 환경 설정
- Github Collaborator
- 역할 부여





4. 추가고려사항
- 기능 구현을 구체적으로 설계
- 개발 환경 설정
- Github Collaborator
- 역할 부여

[ 추가로 UI 생각할 것들 ]
- 미션 리스트가 일반참가자 기준 어떻게 보이는지
- 미션 업로드 입력창이 어떻게 보이는지
- 다른 사람이 올린 미션 열람시 어떻게 보이는지
- 미션글에 댓글/추천/수정/삭제 등등 기능 넣을 것인지

[ 설계 고려사항 ]
- 프로젝트 제목 정하기

- 회원 정보에 대한 DB 설계
    - User id (고유값)
    - 정보 입력 상태 (0 : 가입만 한 상태, 1 : 가입 후 정보 입력 완료 상태)
    - 사용자 정보 (이메일, 이름, 전화번호, 프로필사진 등등)
    - 참가하고 있는 방 리스트 (room id)
    - 등등

- 로그인/회원가입/비밀번호찾기/가입폼입력
    - 로그인/회원가입 (파이어베이스_google 로그인)
    - 비밀번호 찾기 (파이어베이스_이메일 전송기능)
    - 가입폼 입력 (로그인 후, 정보입력을 하지 않은 상태이면 가입폼 페이지로 이동 -> 다 입력 후 사용자 상태 및 입력정보 DB에 갱신)

- 방 정보에 대한 DB 설계
    - Room id (고유값)
    - 이 방의 관리자 리스트 (user id)
    - 방 이름
    - 방 코드 (고유값)
    - 방 비밀번호
    - 등등

- 방 만들기 / 방 접속
	- 방 코드는 6자리 자동생성 랜덤코드(a-zA-Z0-9)
	- 비밀번호 필수 입력
	- 방에 대한 접근은 url로 하되, 사용자 상태에 따라 접근 제한을 둠(로그인 O, 방 참가 중 O 인 사람만 해당 방에대한 URL 접속을 허용)

- 미션 DB 설계
    - Mission id (고유값)
    - 미션 이름
    - 미션 완료 상태 (0 : 미완, 1: 완료)
    - 미션 등록일
    - 등등

- 게시글 DB 설계
    - Board  id (고유값)
    - 어느 미션에 해당하는 게시글인지 (mission id)
    - 누가 업로드 했는지 (user id)
    - 텍스트
    - 사진
    - 게시글 등록일
    - 게시글 수정일
    - 등등

- 라이어 게임은 초기에는 구현을 고려하지 않음
<br><br><br><br>

## 문제점&해결책

### postcss 접두사 문제 해결하는 방법

0. 터미널 환경에서 작업해야하므로 터미널을 연다
1. 깃헙상 postcss.config.js를 git pull    OR    루트 디렉토리에 postcss.config.js 파일 생성 (에러 표시는 무시해도 좋음)
2. npm install 입력 (패키지 다운로드)
3. postcss.config.js의 내용은 다음과 같다.
```javascript
module.exports = {
  plugins: [require('autoprefixer')],
};
```
4. npm run build 입력
5. npm run dev 입력
6. dist 폴더 내 index.html 파일을 연다. -> 마우스 오른쪽 버튼 클릭 -> Open With Live Server 클릭
7. 개발자 도구 창에서 다음의 결과화면이 나오면 성공
![KakaoTalk_20220214_155359162](https://user-images.githubusercontent.com/68424403/153816100-b3b060ab-3b8c-4afa-afe6-ae120ff42c2f.png)







지속적으로 수정 예정
