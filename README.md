# BOOKMATE

독서공동체 플랫폼 BOOKMATE의 Netlify + Gemini 배포용 정리본입니다.

## 이번 버전 핵심

이번 버전은 “관리자 기능”보다 **개발자가 직접 보기 편한 데이터 구조**에 초점을 맞췄습니다.

- 가계정, 독서모임, 내서재, 아카이브, 북라운지 데이터를 `data/bookmate-data.js`에 모았습니다.
- 자주 수정하는 데모 데이터는 `js/app.js`나 `js/state.js`를 건드리지 않아도 됩니다.
- `/admin.html`은 보조 도구로 남겨두었지만, 기본 수정은 `data/bookmate-data.js`에서 하는 방식을 권장합니다.
- AI 독서파트너 연결 구조와 기존 Netlify Functions는 유지했습니다.

## 폴더 구조

```text
BOOKMATE/
├─ index.html
├─ style.css
├─ manifest.json
├─ data/
│  ├─ bookmate-data.js          ← 가장 먼저 볼 파일: 데모 데이터 수정
│  ├─ bookmate-admin-data.js    ← 데이터 연결용 파일
│  └─ README_EDITING.md         ← 데이터 수정 가이드
├─ js/
│  ├─ app.js
│  ├─ book-api.js
│  ├─ state.js
│  └─ storage.js
├─ assets/
├─ netlify/
│  └─ functions/
│     ├─ chat.js
│     └─ share.js
├─ netlify.toml
├─ package.json
└─ README.md
```

## 내가 데이터를 바꾸고 싶을 때

`data/bookmate-data.js`만 열어서 수정하면 됩니다.

수정 가능한 주요 항목:

- `users`: 가계정
- `currentUser`: 처음 보이는 대표 계정
- `recentBooks`: 내서재/완독 도서
- `gatherings`: 독서모임
- `recentArchives`: 아카이브
- `socialPosts`: 토론방/피드 예시 글
- `notifications`: 알림
- `loungeBookmates`: 북라운지 북메이트

더 자세한 설명은 `data/README_EDITING.md`를 참고하세요.

## Netlify 환경변수

Netlify Site configuration > Environment variables에 아래 값을 추가하세요.

```text
GEMINI_API_KEY
```

## GitHub에 올리면 안 되는 것

- `.env`
- `node_modules/`
