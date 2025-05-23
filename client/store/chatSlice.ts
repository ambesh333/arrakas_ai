import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text?: string;
  uiType?: string;
  payload?: any;
  timestamp: number;
}

interface ChatState {
  query: string;
  chatMode: boolean;
  input: string;
  messages: ChatMessage[];
  isProcessing: boolean;
  threadId: string | null;
  missariEnabled: boolean;
}

const initialState: ChatState = {
  query: "",
  chatMode: false,
  input: "",
  messages: [],
  isProcessing: false, // Initialize processing state
  threadId: null,
  missariEnabled: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setChatMode(state, action: PayloadAction<boolean>) {
      state.chatMode = action.payload;
    },
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    addMessage(state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload);
    },
    updateMessage(
      state,
      action: PayloadAction<{ id: string; text?: string; uiType?: string; payload?: any }>
    ) {
      const msg = state.messages.find((m) => m.id === action.payload.id);
      if (msg) {
        if (action.payload.text !== undefined) msg.text = action.payload.text;
        if (action.payload.uiType !== undefined) msg.uiType = action.payload.uiType;
        if (action.payload.payload !== undefined) msg.payload = action.payload.payload;
      }
    },
    clearMessages(state) {
      state.messages = [];
    },
    setIsProcessing(state, action: PayloadAction<boolean>) {
      state.isProcessing = action.payload;
    },
    setThreadId(state, action: PayloadAction<string | null>) {
      state.threadId = action.payload;
    },
    toggleMissari(state) {
      state.missariEnabled = !state.missariEnabled;
    },
    initializeMessages(state, action: PayloadAction<ChatMessage[]>) {
      state.messages = action.payload;
    },
  },
});

export const {
  setQuery,
  setChatMode,
  setInput,
  addMessage,
  updateMessage,
  clearMessages,
  setIsProcessing,
  setThreadId,
  toggleMissari,
  initializeMessages
} = chatSlice.actions;

export default chatSlice.reducer;