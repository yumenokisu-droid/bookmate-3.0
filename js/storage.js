        // v3.8 저장 원칙
        // - data/bookmate-data.js: 기본 가계정/독서모임/아카이브/내서재/북라운지 데이터
        // - localStorage: 로그인한 계정 또는 게스트가 이후에 추가·수정한 활동만 저장
        const BOOKMATE_ACTIVITY_KEY = 'bookmate_v3_8_account_activity';
        const BOOKMATE_LEGACY_STORAGE_KEY = 'bookmate_v1_2_state';
        const BOOKMATE_AVATAR_MIGRATION_KEY = 'bookmate_v1_9_avatar_moa1_migration_done';

        function getActiveAccountId() {
            try {
                if (state && state.currentUser && state.currentUser.id) return state.currentUser.id;
            } catch(e) {}
            return 'guest';
        }

        function loadAllAccountActivities() {
            try {
                const raw = localStorage.getItem(BOOKMATE_ACTIVITY_KEY);
                const parsed = raw ? JSON.parse(raw) : {};
                return (parsed && typeof parsed === 'object') ? parsed : {};
            } catch(e) {
                console.warn('BOOKMATE 활동 데이터 불러오기 실패:', e);
                return {};
            }
        }

        function loadAccountActivity(accountId) {
            const all = loadAllAccountActivities();
            return all[accountId || 'guest'] || null;
        }

        function saveAccountActivity(accountId, activity) {
            try {
                const all = loadAllAccountActivities();
                all[accountId || 'guest'] = activity || {};
                localStorage.setItem(BOOKMATE_ACTIVITY_KEY, JSON.stringify(all));
            } catch(e) {
                console.warn('BOOKMATE 활동 데이터 저장 실패:', e);
            }
        }

        function saveAppState() {
            try {
                const accountId = getActiveAccountId();
                const snapshot = {
                    recentBooks: state.recentBooks,
                    recentArchives: state.recentArchives,
                    gatherings: state.gatherings,
                    notifications: state.notifications,
                    socialPosts: state.socialPosts,
                    aiChatHistory: state.aiChatHistory,
                    currentAIBook: state.currentAIBook,
                    loungeBookmates: (typeof loungeBookmates !== 'undefined') ? loungeBookmates : undefined,
                    savedAt: new Date().toISOString()
                };
                saveAccountActivity(accountId, snapshot);
            } catch (e) {
                console.warn('BOOKMATE 저장 실패:', e);
            }
        }

        function loadAppState() {
            // v3.8부터 기본 데이터는 localStorage로 덮어쓰지 않습니다.
            // 계정별 활동은 로그인/게스트 적용 시 loadAccountActivity()로 합쳐집니다.
            try { localStorage.removeItem(BOOKMATE_LEGACY_STORAGE_KEY); } catch(e) {}
        }

        function clearAppState() {
            const accountId = getActiveAccountId();
            const all = loadAllAccountActivities();
            delete all[accountId];
            localStorage.setItem(BOOKMATE_ACTIVITY_KEY, JSON.stringify(all));
            showToast('이 계정의 추가 활동만 초기화했습니다. 기본 데이터는 유지됩니다.');
        }

        function rememberSelectedBook(targetId, book) {
            const el = document.getElementById(targetId);
            if (!el || !book) return;
            el.dataset.bookTitle = book.title || '';
            el.dataset.bookAuthor = book.author || '';
            el.dataset.bookCover = book.thumbnail || '';
            el.dataset.bookPublisher = book.publisher || '';
            el.dataset.bookPublishedDate = book.publishedDate || '';
            el.dataset.bookIsbn = book.isbn || '';
        }

        function getSelectedBookMeta(targetId) {
            const el = document.getElementById(targetId);
            if (!el) return {};
            const typedTitle = (el.value || '').trim();
            const selectedTitle = (el.dataset.bookTitle || '').trim();
            // 사용자가 선택 후 제목을 직접 바꾼 경우, 이전 표지가 잘못 저장되지 않도록 메타데이터를 무시합니다.
            const isSameSelectedBook = selectedTitle && selectedTitle === typedTitle;
            return {
                title: typedTitle || selectedTitle || '',
                author: isSameSelectedBook ? (el.dataset.bookAuthor || '') : '',
                coverUrl: isSameSelectedBook ? (el.dataset.bookCover || '') : '',
                publisher: isSameSelectedBook ? (el.dataset.bookPublisher || '') : '',
                publishedDate: isSameSelectedBook ? (el.dataset.bookPublishedDate || '') : '',
                isbn: isSameSelectedBook ? (el.dataset.bookIsbn || '') : ''
            };
        }
