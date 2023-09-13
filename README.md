
## 개요

- 원티드 프리온보딩 4주차 개인 과제

## 프로젝트 목표

시계열 데이터를 차트로 보여주기.

## 개발 환경 및 배포 URL

[🔗 배포링크](https://fabulous-griffin-dd0b4f.netlify.app)

## 프로젝트 구조

```
...
├─ src
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ components
│  │  └─ chart
│  │     ├─ chart.css
│  │     ├─ ChartApp.tsx
│  │     ├─ lib
│  │     │  └─ options.ts
│  │     └─ RegionsCheckBox.tsx
│  ├─ data
│  │  ├─ data.json
│  │  └─ index.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  └─ setupTests.ts
└─ tsconfig.json

```

## 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=black"/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Chart.js-white?style=flat-square&logo=chart.js&logoColor=FF6384">

## chart.js 선택 이유

npm trends 에서 차트 라이브러리중 제일 많이 다운로드 하였기에, 

추후 에러나 문제발생시 해결하기 수월하기 때문에 chart.js를 선택.

## UI

#### 필터링 전 차트 이미지

<img width="831" alt="필터전 차트 이미지 " src="https://github.com/devshinn/mock-task_chart/assets/73675549/53451586-4bec-4b43-8287-fad87318616b">

#### 필터링 후 차트 이미지

<img width="831" alt="필터링 후 차트 이미지" src="https://github.com/devshinn/mock-task_chart/assets/73675549/2d6a7ffb-6a43-437d-9e40-a19f7abae798">
