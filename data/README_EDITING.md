# BOOKMATE 데이터 수정 가이드 v3.7

이 버전의 목표는 **로그인/관리자 개념을 복잡하게 보지 않고, 데이터만 쉽게 고치는 것**입니다.

주로 수정할 파일은 하나입니다.

```txt
data/bookmate-data.js
```

## 핵심 구조

### 1. `guestMode`
첫 접속 때 보이는 게스트 상태입니다.

```js
guestMode: {
  recentBooks: [],
  recentArchives: [],
  joinedGatheringIds: [],
  loungeBookmates: []
}
```

게스트는 기본적으로 비워두는 것을 추천합니다.

### 2. `accounts`
가계정 목록입니다. 각 계정 안에서 **내서재, 아카이브, 북라운지**를 따로 수정합니다.

```js
{
  id: "moa01",
  password: "1234",
  nickname: "달빛독서가",

  recentBooks: [ ... ],      // 이 계정의 내서재
  recentArchives: [ ... ],   // 이 계정의 아카이브
  joinedGatheringIds: [1, 2],// 이 계정이 가입한 독서모임 id
  loungeBookmates: [ ... ]   // 이 계정의 북라운지 북메이트
}
```

### 3. `gatherings`
전체 독서모임 목록입니다.

계정별 가입 여부는 `gatherings` 안에 쓰지 않고, 각 계정의 `joinedGatheringIds`에서 관리합니다.

```js
joinedGatheringIds: [1, 2]
leadingGatheringIds: [1]
```

이렇게 쓰면 `id: 1`, `id: 2` 독서모임에 가입한 것으로 표시됩니다.

## 질문에 대한 답

### 아카이브는 계정별로 수정 가능한가요?
네. 각 계정 안의 `recentArchives`를 수정하면 됩니다.

### 현재 로그인 사용자를 따로 수정해야 하나요?
아니요. 첫 접속은 항상 `guestMode`로 시작합니다. 로그인 테스트를 할 때만 `accounts` 중 하나를 선택하면 됩니다.

### 내서재도 계정별인가요?
네. 각 계정 안의 `recentBooks`가 내서재입니다.

### 북라운지도 계정별인가요?
네. 각 계정 안의 `loungeBookmates`, `loungeProgress`가 북라운지 데이터입니다.

---

## v3.8 저장 방식

- `data/bookmate-data.js`는 기본 상태입니다. GitHub에서 이 파일을 수정하면 가계정, 기본 독서모임, 기본 내서재/아카이브/북라운지가 반영됩니다.
- 브라우저 `localStorage`는 사용자가 앱 안에서 이후에 추가하거나 수정한 활동만 계정별로 저장합니다.
- 로그인 첫 화면에는 가계정 안내가 보이지 않습니다. 계정 아이디/비밀번호는 이 데이터 파일에서만 확인하면 됩니다.
- `clearAppState()` 또는 초기화 버튼을 쓰면 현재 계정의 추가 활동만 지워지고, `bookmate-data.js`의 기본 상태로 돌아갑니다.
