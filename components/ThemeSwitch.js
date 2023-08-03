import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light') // Inverted logic here
  }

  if (!mounted) return null

  return (
    <div className="theme-switch">
      <div className={`tdnn ${theme === 'light' ? 'day' : ''}`} onClick={toggleTheme}>
        <div className={theme === 'dark' ? 'moon' : 'sun'}></div>
      </div>
      <style jsx global>{`
        .theme-switch {
          display: flex;
          align-items: center; // Vertically aligns the child elements
          justify-content: center; // Horizontally aligns the child elements
          height: 9em; // 10% less than before
          font-size: 30%; // 10% less than before
        }
        .tdnn {
          margin: 0 auto;
          margin-top: 1.5em; // 10% less than before
          position: relative;
          height: 4.8em; // 10% less than before
          width: 9em; // 10% less than before
          border-radius: 4.8em; // 10% less than before
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
          width: 3em; // 10% less than before
          height: 3em; // 10% less than before
        }
        .moon {
          top: 0.9em; // 10% less than before
          left: 0.9em; // 10% less than before
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
          top: 1.35em; // 10% less than before
          left: 5.4em; // 10% less than before
          transform: rotate(0deg);
          width: 2.1em; // 10% less than before
          height: 2.1em; // 10% less than before
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
