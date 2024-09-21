import { PropsWithChildren } from "react"

export default function ActionButton({children}: PropsWithChildren) {
  return (
    <button 
      className="flex gap-2 items-center bg-zinc-900 dark:bg-zinc-100 hover:bg-white hover:dark:bg-zinc-900 text-white dark:text-zinc-900 hover:text-zinc-900 hover:dark:text-white text-sm h-10 px-4 rounded-full border border-zinc-900 dark:border-white"
    >
      {children}
    </button>
  )
}
