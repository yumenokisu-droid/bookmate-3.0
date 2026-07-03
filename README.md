# BOOKMATE v3.7

책을 읽는 사람들을 연결하는 AI 독서공동체 데모입니다.

## 이번 버전의 정리 방향

- 첫 접속은 항상 **게스트 모드**로 시작합니다.
- `currentUser` 같은 대표 계정 설정은 데이터 파일에서 직접 수정하지 않아도 됩니다.
- 가계정별로 **내서재 / 아카이브 / 북라운지 / 가입 독서모임**을 따로 관리할 수 있습니다.
- 개발자가 아니어도 `data/bookmate-data.js`만 보고 데이터를 조정할 수 있게 정리했습니다.

## 가장 많이 수정할 파일

```txt
data/bookmate-data.js
```

## 데이터 구조

```txt
guestMode        게스트 상태 데이터
accounts         가계정 목록 + 계정별 내서재/아카이브/북라운지
gatherings       전체 독서모임 목록
socialPosts      토론방 예시 글
notifications    알림 예시
```

## 수정 가이드

자세한 설명은 아래 파일에 있습니다.

```txt
data/README_EDITING.md
```

## 배포

GitHub에 업로드하면 Netlify가 루트 `index.html`을 기준으로 배포합니다.
