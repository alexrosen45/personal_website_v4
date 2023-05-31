import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const Hero = () => {
  return (
    <section className="min-w-screen flex flex-col-reverse items-center justify-between pt-1 pb-2 sm:flex-row sm:py-4">
      <div className="order-2 mb-2 flex h-full w-full flex-col justify-center sm:order-1 sm:mb-10 sm:w-1/3 xl:mb-0">
        <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>
      <div className="order-1 grid w-full grid-cols-1 gap-8 pb-1 sm:order-2 sm:w-2/3 sm:py-8">
        <div className="my-2 grid items-start gap-8">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Link href="/projects">
              <a className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -rotate-6 text-red-600"
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
                  <span className="pr-6 text-gray-700 dark:text-gray-100">
                    projects and open source contributions
                  </span>
                </span>
                <span className="pl-6 text-amber-500 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
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
