import { Link, NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  return (
    <button
      className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}

export default function Layout() {
  const navLink = ({ isActive }: { isActive: boolean }) =>
    clsx(
      'px-3 py-2 rounded-lg text-sm',
      isActive ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    )
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/75 dark:bg-brand-dark/75 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-brand-red"></span>
            <span className="font-bold">Biztopia</span>
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink to="/" className={navLink} end>
              Inicio
            </NavLink>
            <NavLink to="/topics" className={navLink}>
              Temas
            </NavLink>
            <NavLink to="/about" className={navLink}>
              Acerca
            </NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
      <footer className="border-t py-8 text-sm text-gray-500 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Biztopia — “serio pero con chispa”.</p>
          <p>
            <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">
              Código abierto (MIT)
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
