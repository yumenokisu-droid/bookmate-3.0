/*
  BOOKMATE 데모 데이터 편집 파일
  ------------------------------------------------------------
  이 파일만 수정하면 공모전 데모용 가계정/독서모임/내서재/아카이브/북라운지 데이터를 바꿀 수 있습니다.

  수정 순서
  1) users: 로그인 계정과 프로필을 수정합니다.
  2) currentUser: 처음 접속했을 때 보이는 대표 계정을 고릅니다.
  3) gatherings: 독서모임 목록을 수정합니다.
  4) recentBooks: 내서재/완독 기록을 수정합니다.
  5) recentArchives: 아카이브 기록을 수정합니다.
  6) loungeBookmates: 북라운지에 보이는 북메이트를 수정합니다.

  주의
  - id는 중복되면 안 됩니다.
  - 문자열은 반드시 따옴표로 감싸 주세요. 예: "달빛독서가"
  - 배열 마지막 항목 뒤에는 쉼표를 붙이지 않는 편이 안전합니다.
*/

window.BOOKMATE_DATA = {
  // 1. 가계정 목록
  // 로그인 아이디: id / 비밀번호: password
  users: [
    {
      id: "moa01",
      password: "1234",
      name: "김도윤",
      nickname: "달빛독서가",
      library: "익산시립도서관",
      libraryVerified: true,
      avatarType: "moa",
      avatarId: 1,
      tastes: ["소설", "에세이", "인문"],
      readingType: "인물의 심리와 관계를 따라 읽는 독자",
      readingTypeIcon: "📚",
      role: "대표 계정",
      readBooksCount: 68,
      gatheringCount: 3,
      chatMessagesCount: 1540
    },
    {
      id: "moa02",
      password: "1234",
      name: "이서윤",
      nickname: "사유올빼미",
      library: "전북대표도서관",
      libraryVerified: true,
      avatarType: "moa",
      avatarId: 2,
      tastes: ["철학", "심리", "인문"],
      readingType: "질문을 통해 생각을 확장하는 독자",
      readingTypeIcon: "🧠",
      role: "깊은 댓글 · 사유형 독자",
      readBooksCount: 91,
      gatheringCount: 2,
      chatMessagesCount: 2120
    },
    {
      id: "moa03",
      password: "1234",
      name: "박민준",
      nickname: "책읽는고양이",
      library: "소속도서관 없음",
      libraryVerified: false,
      avatarType: "moa",
      avatarId: 3,
      tastes: ["판타지", "SF", "추리"],
      readingType: "세계관과 사건의 구조를 탐색하는 독자",
      readingTypeIcon: "🚀",
      role: "장르 독서 · 신간 추천",
      readBooksCount: 52,
      gatheringCount: 1,
      chatMessagesCount: 820
    },
    {
      id: "moa04",
      password: "1234",
      name: "최유진",
      nickname: "지혜의등대",
      library: "서울시립도서관",
      libraryVerified: true,
      avatarType: "moa",
      avatarId: 4,
      tastes: ["사회", "경제", "자기계발"],
      readingType: "책의 주제를 현실 문제와 연결하는 독자",
      readingTypeIcon: "💼",
      role: "토론 리더 · 질문글 작성",
      readBooksCount: 74,
      gatheringCount: 4,
      chatMessagesCount: 1760
    }
  ],

  // 2. 첫 화면에서 로그인된 것처럼 보이는 대표 계정
  // users 안에 있는 계정 정보와 맞춰 주세요.
  currentUser: {
    id: "moa01",
    nickname: "달빛독서가",
    library: "익산시립도서관",
    avatarType: "moa",
    avatarId: 1,
    readBooksCount: 68,
    gatheringCount: 3,
    chatMessagesCount: 1540
  },

  // 3. 내서재 / 최근 완독 도서
  recentBooks: [
    {
      id: 1,
      title: "불편한 편의점",
      author: "김호연",
      date: "2026.06.20 완독",
      review: "따뜻한 연대와 위로가 느껴지는 책. 골목길 편의점이 주는 일상의 기적.",
      color: "bg-[#2A4365]"
    },
    {
      id: 2,
      title: "데미안",
      author: "헤르만 헤세",
      date: "2026.05.10 완독",
      review: "알을 깨고 나오는 고통. 내 안의 목소리를 듣는 과정에 대하여.",
      color: "bg-[#285E61]"
    },
    {
      id: 3,
      title: "아몬드",
      author: "손원평",
      date: "2026.04.28 완독",
      review: "감정을 배워가는 소년의 이야기를 통해 공감의 의미를 다시 생각하게 하는 책.",
      color: "bg-[#7C2D12]"
    }
  ],

  // 4. 독서모임 목록
  gatherings: [
    {
      id: 1,
      title: "달러구트 꿈 백화점 사색 소모임",
      book: "달러구트 꿈 백화점",
      author: "이미예",
      membersCount: 6,
      maxMembers: 10,
      scope: "공개",
      type: "정기모임",
      method: "온라인",
      schedule: "매주 목요일 21:00",
      suitability: 94,
      desc: "현실의 노곤함을 내려놓고 포근한 꿈 백화점 속 단골손님들의 이야기를 나눕니다.",
      keywords: ["힐링/에세이", "소설/문학"],
      joined: true,
      isLeader: true
    },
    {
      id: 2,
      title: "데미안 자아 탐구 독서모임",
      book: "데미안",
      author: "헤르만 헤세",
      membersCount: 7,
      maxMembers: 10,
      scope: "공개",
      type: "정기모임",
      method: "오프라인",
      schedule: "매월 첫째주 일요일 15:00",
      suitability: 95,
      desc: "자기 내면의 목소리와 성장의 의미를 함께 읽고 나누는 고전 문학 독서모임입니다.",
      keywords: ["소설/문학", "인문학"],
      joined: true,
      isLeader: false
    },
    {
      id: 3,
      title: "아몬드: 공감 감각을 깨우는 모임",
      book: "아몬드",
      author: "손원평",
      membersCount: 9,
      maxMembers: 12,
      scope: "공개",
      type: "1회성",
      method: "온라인",
      schedule: "7월 20일(월) 20:00",
      suitability: 91,
      desc: "감정을 느끼고 표현하는 방식, 공감의 언어를 함께 나누는 소설 독서모임입니다.",
      keywords: ["소설/문학", "힐링/에세이"],
      joined: false,
      isLeader: false
    }
  ],

  // 5. 아카이브 기록
  recentArchives: [
    {
      id: 1,
      title: "데미안 자아 탐구 모임",
      role: "참여자",
      date: "2026.05.10 종료",
      comments: 42
    },
    {
      id: 2,
      title: "AI 모아와 나눈 어린 왕자 대화",
      role: "대화 저장",
      date: "2026.07.03 저장",
      comments: 0
    }
  ],

  // 6. 토론방/피드 예시 글
  socialPosts: [
    {
      id: 101,
      author: "사유올빼미",
      authorInitial: "사",
      time: "3분 전",
      category: "추천",
      book: "달러구트 꿈 백화점",
      text: "지친 하루의 끝에 이 소설을 읽으며 나만의 꿈 보관함을 채우는 상상을 했어요.",
      likes: 12,
      liked: false,
      showComments: false,
      comments: []
    },
    {
      id: 102,
      author: "지혜의등대",
      authorInitial: "지",
      time: "1시간 전",
      category: "질문",
      book: "데미안",
      text: "싱클레어가 자기 안의 목소리를 따라가는 과정이 여러분에게는 어떻게 느껴졌나요?",
      likes: 8,
      liked: false,
      showComments: false,
      comments: []
    }
  ],

  // 7. 알림 예시
  notifications: [
    {
      id: 1,
      type: "hello",
      from: "사유올빼미",
      initial: "사",
      message: "데미안 모임에서 좋은 말씀 감사했어요!",
      time: "10분 전",
      isRead: false
    }
  ],

  // 8. 북라운지에 보이는 북메이트
  loungeBookmates: [
    {
      name: "사유올빼미",
      status: "active",
      since: "2026.05.13",
      gathering: "데미안 자아 탐구 모임",
      avatarType: "moa",
      avatarId: 2
    },
    {
      name: "지혜의등대",
      status: "active",
      since: "2026.06.01",
      gathering: "달러구트 꿈 백화점 사색 소모임",
      avatarType: "moa",
      avatarId: 4
    },
    {
      name: "책읽는고양이",
      status: "active",
      since: "2026.06.14",
      gathering: "아몬드 공감 감각 모임",
      avatarType: "moa",
      avatarId: 3
    }
  ],

  // 9. AI 독서파트너 시작 상태
  currentAIBook: "",
  aiChatHistory: []
};
