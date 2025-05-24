"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setQuery, toggleMissari } from "@/store/chatSlice";
import { Input } from "@/components/ui/input";
import { Search, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionSearchBarProps {
  onSearchClick: (label: string) => void;
}

export default function ActionSearchBar({ onSearchClick }: ActionSearchBarProps) {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.chat.query);
  const isProcessing = useSelector((state: RootState) => state.chat.isProcessing);
  const missariEnabled = useSelector((state: RootState) => state.chat.missariEnabled);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing || !query.trim()) return;
    onSearchClick(query);
  };

  return (
    <motion.div className="w-full max-w-xl mx-auto">
      <div className="relative flex justify-between items-center gap-2">
        {/* Missari Toggle Button with Tooltip */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                onClick={() => dispatch(toggleMissari())}
                variant={missariEnabled ? "default" : "outline"}
                className={`h-9 px-4 py-2 text-sm ${
                  missariEnabled ? "bg-blue-800 text-white hover:bg-blue-700" : ""
                }`}
              >
                Messari
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs max-w-xs text-center">
              Turn on Messari-powered AI chat
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="relative flex-1">
          <Input
            type="text"
            id="search"
            placeholder="What's up?"
            value={query}
            onChange={handleInputChange}
            disabled={isProcessing}
            className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-lg focus-visible:ring-offset-0"
          />
          <button
            type="submit"
            disabled={isProcessing || !query.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 disabled:opacity-50"
          >
            <AnimatePresence mode="popLayout">
              {query.length > 0 ? (
                <motion.div
                  key="send"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="search"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Search className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </motion.div>
  );
}
