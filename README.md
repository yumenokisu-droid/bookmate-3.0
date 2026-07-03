# BOOKMATE 3.2

AI 독서파트너 모아 개편 버전입니다.

## 주요 변경
- AI 모드 선택 UI 제거
- AI 모아 프로필을 기본 프로필로 통일
- Gemini 시스템 프롬프트를 독서파트너형 대화 프롬프트로 개선
- 오른쪽 패널을 `AI 독서 인사이트`와 `대화 기반 추천도서`로 개편
- 추천도서는 충분한 대화 이후 표시되도록 변경

## 배포
Netlify 루트 배포 기준입니다.
- `index.html`
- `style.css`
- `js/app.js`
- `netlify/functions/chat.js`
# BOOKMATE

독서공동체 플랫폼 BOOKMATE의 Netlify + Gemini 배포용 정리본입니다.

## 이번 정리 내용

- `public/` 중복본 제거: 실제 배포 기준은 루트 `index.html`입니다.
- 루트 기준으로 `index.html`, `style.css`, `js/`, `assets/`, `netlify/` 구조를 단순화했습니다.
- 새 UI 기준으로 CSS 섹션과 주석을 정리했습니다.
- 사용하지 않는 옛 북라운지 호환 CSS 일부를 제거했습니다.
- Netlify Functions 구조를 정리했습니다.
- `/api/chat` Gemini 호출 경로를 유지했습니다.
- `/share/:id` 공유 페이지 리다이렉트를 추가했습니다.
- `share.js`를 Netlify 기본 CommonJS 방식으로 수정했습니다.

## 폴더 구조

```text
BOOKMATE/
├─ index.html
├─ style.css
├─ manifest.json
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

## GitHub에 올릴 것

이 폴더 안의 내용 전체를 올리면 됩니다.

## GitHub에 올리면 안 되는 것

- `.env`
- `node_modules/`

## Netlify 환경변수

Netlify Site configuration > Environment variables에 아래 값을 추가하세요.

```text
GEMINI_API_KEY
```
