'use client'

import * as React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export default function Component() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative h-8 w-[66px] rounded-full border-[0.5px] border-zinc-200 bg-white px-0.5 dark:bg-zinc-800 dark:border-zinc-800"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="flex w-full items-center justify-between gap-2 px-1">
        <Sun className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-400" />
        <Moon className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
      </div>
      <div
        className={`absolute left-0.5 top-0.5 h-7 w-7 rounded-full bg-zinc-50 shadow-sm transition-transform duration-200 ease-in-out dark:bg-zinc-700 ${
          theme === 'dark' ? 'translate-x-[30px]' : 'translate-x-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}