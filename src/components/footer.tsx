export default function Footer() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 h-24 flex items-center justify-center rounded-lg">
      <div className="text-sm text-zinc-900 dark:text-white ">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </div>
  )
}
