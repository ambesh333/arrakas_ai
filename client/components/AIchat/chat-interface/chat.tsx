"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setQuery, setChatMode, setInput } from "@/store/chatSlice";
import ActionSearchBar from "./search";
import ChatBox from "./ChatBox";

/* -------------------------------------------------------------------------
   ChatSection Component
   - Renders the chat UI along with a bottom search bar.
   - Includes a “Back” button to exit chat mode.
   - Uses Redux to read/update the query and input.
------------------------------------------------------------------------- */
function ChatSection() {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.chat.query);

  const handleSearchClick = () => {
    dispatch(setChatMode(true));
    dispatch(setInput(query));
    dispatch(setQuery(""));
  };


  return (
    <motion.div
      key="chat"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="relative w-full max-w-3xl mx-auto min-h-[calc(100vh-13.5rem)] flex flex-col max-h-[calc(100vh-13.5rem)]"
    >
         <div className="flex-1 overflow-y-auto px-4 no-scrollbar">
    <ChatBox />
  </div>
      <div className="sticky bottom-0 left-0 right-0 px-4 py-2 ">
        <Card className="w-full rounded-lg shadow-md ">
          <ActionSearchBar
            onSearchClick={handleSearchClick}
          />
        </Card>
      </div>
    </motion.div>
  );
}

export default ChatSection;