<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="400" src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/7c76e809d82a4a3aa0fd78a86be25427">
</p>

### 🎯 step1 요구사항

- [ ] 자동차를 이름과 함께 등록할 수 있다.
  - 이름은은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  - 각 이름의 양끝 공백을 제거한다.
- [ ] 몇 번의 이동을 할 것인지를 입력할 수 있다.
  - 1이상 자연수만 받는다.
- [ ] 자동차 경주를 수행한다.
  - 이동 횟수를 입력하자 마자 경주를 수행한다.
  - 자동차가 한대도 등록되지 않은 상태에서는 경주를 수행할 수 없다.
  - 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
  - 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [ ] 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
  - 우승자가 여러명일 경우 ,를 이용하여 구분한다.
- [ ] 게임을 재시작할 수 있다.

<br>

### 🚘 경주 진행 프로세스
1. 자동차 이름 등록  
    - **사용자** : 자동차의 이름을 등록한다.  
    - **프로그램** : 쉼표로 구분된 자동차 이름을 저장하고 화면에 보여준다.
2. 이동 횟수 입력 및 경주 시작
    - **사용자** : 이동 횟수를 입력한다.
    - **프로그램** : 이동 횟수 한도 내에서 랜덤으로 각 자동차를 이동시킨다.
3. 경주 결과 출력
    - **프로그램** : 각 자동차의 이동 횟수만큼 화살표 아이콘을 출력하고 우승자를 보여준다.
4. 경주 재시작
    - **사용자** : 재시작 버튼을 누른다.
    - **프로그램** : 모든 입력과 결과화면을 초기화한다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-racingcar/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
