'use client'

import React, { useState } from 'react'

interface Article {
  title: string
  publishTime: number
  source: string
  assets?: string[]
  url: string
}

interface NewsFeedTableProps {
  articles: Article[]
}

export function NewsFeedTable({ articles }: NewsFeedTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 3

  const totalPages = Math.ceil(articles.length / rowsPerPage)
  const paginatedArticles = articles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  const handlePageChange = (page: number) => setCurrentPage(page)
  const handlePrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1)
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1)

  const formatDate = (timestamp: number) =>
    new Date(timestamp).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "numeric",
      month: "short",
      year: "numeric",
    })

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {paginatedArticles.map((article, index) => (
          <div
            key={article.url}
            onClick={() => window.open(article.url, '_blank')}
            className="cursor-pointer bg-slate-900/50 hover:bg-slate-800/60 p-3 rounded-md border border-slate-700/40 transition-all duration-150"
          >
            <div className="text-sm text-slate-200 font-medium whitespace-normal break-words">
              {article.title}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {article.source} • {formatDate(article.publishTime)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
        <div className="text-xs text-slate-500">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 disabled:opacity-30"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
