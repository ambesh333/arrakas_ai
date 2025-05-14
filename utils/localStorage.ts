const CHAT_STORAGE_KEY = 'user-chat-history';
const THREAD_ID_KEY = 'user-thread-id';

export const saveChatToStorage = (messages: any[], threadId: string | null) => {
    try {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
        if (threadId) {
            localStorage.setItem(THREAD_ID_KEY, threadId);
        }
    } catch (error) {
        console.error('Failed to save chat to localStorage:', error);
    }
};

export const loadChatFromStorage = () => {
    try {
        const storedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
        const threadId = localStorage.getItem(THREAD_ID_KEY);
        return {
            messages: storedMessages ? JSON.parse(storedMessages) : [],
            threadId: threadId || null
        };
    } catch (error) {
        console.error('Failed to load chat from localStorage:', error);
        return { messages: [], threadId: null };
    }
};

export const clearChatStorage = () => {
    try {
        localStorage.removeItem(CHAT_STORAGE_KEY);
        localStorage.removeItem(THREAD_ID_KEY);
    } catch (error) {
        console.error('Failed to clear chat storage:', error);
    }
};