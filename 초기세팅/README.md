# postcss 접두사 문제 해결하는 방법

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
