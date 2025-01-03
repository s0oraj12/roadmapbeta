// src/components/stellar/controls/ControlPanel.tsx
import React from 'react'

interface ControlPanelProps {
  isLocked: boolean
  onToggleLock: () => void
  onZoomIn: () => void
  onZoomOut: () => void
  onReset: () => void
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  isLocked,
  onToggleLock,
  onZoomIn,
  onZoomOut,
  onReset
}) => {
  return (
    <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2 bg-gray-800/80 p-2 rounded-lg border border-gray-700">
      <button
        onClick={onToggleLock}
        className="p-2 hover:bg-gray-700 rounded text-white"
        title={isLocked ? "Unlock group drag" : "Lock for group drag"}
      >
        {isLocked ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
          </svg>
        )}
      </button>
      <button
        onClick={onZoomIn}
        className="p-2 hover:bg-gray-700 rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 hover:bg-gray-700 rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      </button>
      <button
        onClick={onReset}
        className="p-2 hover:bg-gray-700 rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </button>
    </div>
  )
}
