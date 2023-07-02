import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import clsx from 'clsx'

const TypingText = ({ text }) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    let i = 0

    const typing = () => {
      if (i < text.length) {
        setContent((prevContent) => prevContent + text.charAt(i))
        i++
        setTimeout(typing, 75)
      }
    }

    typing()
  }, []) // Empty dependency array to ensure this effect runs only once on mount

  return <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{content}</p>
}

const Greeting = () => {
  let className = clsx(
    'mb-8 text-4xl font-extrabold leading-[40px] tracking-tight pb-1 md:text-6xl md:leading-[50px]' // Increase text size to 4xl and decrease padding-bottom to pb-1 for mobile
  )

  let gradientStyle = clsx(
    'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:bg-gradient-to-l dark:from-blue-600 to-purple-600'
  )

  return (
    <div className={className}>
      <span className={gradientStyle}>Hi, I'm Alex</span>
      <span> 👋</span>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="min-w-screen flex flex-col-reverse items-center justify-between pt-1 pb-2 sm:flex-row sm:py-4">
      <div className="order-2 mb-2 flex h-full w-full flex-col justify-center sm:order-1 sm:mb-10 sm:w-1/2 xl:mb-0">
        <Greeting />
        <TypingText text={siteMetadata.description} />
      </div>
      <div className="order-1 grid w-full grid-cols-1 gap-8 pb-1 sm:order-2 sm:w-1/2 sm:py-8">
        <div className="my-2 grid items-start gap-8">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Link href="/projects">
              <a className="relative hidden items-center divide-x divide-gray-900 rounded-lg bg-white px-7 py-4 leading-none shadow-md dark:divide-white dark:bg-gray-800 sm:flex">
                {' '}
                {/* Change here */}
                <span className="flex items-center justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4 h-6 w-6 -rotate-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <span className="pr-6 text-gray-700 dark:text-white">
                    Some Curated Recent Projects
                  </span>
                </span>
                <span className="pl-6 text-black transition duration-200 dark:text-white">
                  Discover &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
