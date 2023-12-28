import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <div className="theme-switch mt-[-1.1em] pl-4">
      <div className={`tdnn ${theme === 'light' ? 'day' : ''}`} onClick={toggleTheme}>
        <div className={theme === 'light' ? 'sun' : 'moon'}></div>
      </div>
      <style jsx global>{`
        .theme-switch {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 9em;
          font-size: 30%;
        }
        .tdnn {
          margin: 0 auto;
          margin-top: 1.5em;
          position: relative;
          height: 4.8em;
          width: 9em;
          border-radius: 4.8em;
          transition: all 500ms ease-in-out;
          background: #423966;
        }
        .day {
          background: #ffbf71;
        }
        .moon,
        .sun {
          position: absolute;
          border-radius: 50%;
          transition: all 400ms ease-in-out;
          width: 3em;
          height: 3em;
        }
        .moon {
          top: 0.9em;
          left: 0.9em;
          transform: rotate(-75deg);
          background: #423966;
          box-shadow: 0.9em 0.75em 0 0em #d9fbff inset,
            rgba(255, 255, 255, 0.1) 0em -2.1em 0 -1.35em,
            rgba(255, 255, 255, 0.1) 0.9em 2.1em 0 -1.35em,
            rgba(255, 255, 255, 0.1) 0.6em 3.9em 0 -1.2em,
            rgba(255, 255, 255, 0.1) 1.8em 0.6em 0 -1.23em,
            rgba(255, 255, 255, 0.1) 2.4em 2.4em 0 -1.35em,
            rgba(255, 255, 255, 0.1) 1.8em 3.9em 0 -1.35em,
            rgba(255, 255, 255, 0.1) -1.2em 2.1em 0 -1.35em,
            rgba(255, 255, 255, 0.1) -0.3em 3em 0 -1.35em;
        }
        .sun {
          top: 1.35em;
          left: 5.4em;
          transform: rotate(0deg);
          width: 2.1em;
          height: 2.1em;
          background: #fff;
          box-shadow: 0.9em 0.9em 0 1.5em #fff inset, 0 -1.5em 0 -0.81em #fff,
            1.05em -1.05em 0 -0.9em #fff, 1.5em 0 0 -0.81em #fff, 1.05em 1.05em 0 -0.9em #fff,
            0 1.5em 0 -0.81em #fff, -1.05em 1.05em 0 -0.9em #fff, -1.5em 0 0 -0.81em #fff,
            -1.05em -1.05em 0 -0.9em #fff;
        }
      `}</style>
    </div>
  )
}

export default ThemeSwitch
