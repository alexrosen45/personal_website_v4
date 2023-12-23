import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>{/* ... (previous head content) */}</Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <style jsx global>{`
            ::-webkit-scrollbar {
              width: 8px; /* Width of the scrollbar */
            }

            ::-webkit-scrollbar-track {
              background: #f1f1f1; /* Color of the track */
            }

            ::-webkit-scrollbar-thumb {
              background: #888; /* Color of the scroll thumb */
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #555; /* Color of the scroll thumb on hover */
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
