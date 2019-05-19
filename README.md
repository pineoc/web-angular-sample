# AngularJS 데모 웹 어플리케이션

## 라이브러리 버전

| libs         | version |
|--------------|---------|
| angularjs    | 1.2.32  |
| ui-bootstrap | 0.8.0   |
| Bootstrap    | 2.3.2   |
| jQuery       | 2.1.1   |

## Getting Started

node.js가 설치되어 있으면 다음 명령어를 콘솔에 입력하여 해당 어플리케이션에 필요로 하는 node 모듈을 설치한다.

```sh
$ npm install
```

bower를 사용하여 자바스크립트 라이브러리들을 설치하지 않고 필요한 라이브러리들을 libs폴더에 직접 넣어두었다.  
본 프로젝트는 gulpfile.js를 이용하여 테스트용 웹 서버를 실행할 수 있다. 다음 명령어를 콘솔에 입력하여 gulp를 설치한다.

```sh
npm install -g gulp-cli
```

간단히 개발 웹 서버를 띄우기 위해서 gulp를 실행한다. 콘솔창에 다음과 같이 입력한다.  
index.html, app.js로 만들어진 사용자관리 페이지를 볼 수 있다.

```sh
$ gulp
```

## 데모 웹페이지 리스트

| File                 | Description        |
|----------------------|--------------------|
| index.html           | 사용자 관리 페이지 |
| router.html          | 라우터 샘플 페이지 |
| hello.html           | hello 출력 페이지  |
| scope-chat.html      | 채팅 예제 페이지   |
| form-validation.html | Form 체크 페이지   |
| mobile.html          | 모바일 페이지      |
