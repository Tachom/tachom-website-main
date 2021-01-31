import { Services } from '@/components/home/Services'
import { BuildAnything } from '@/components/home/BuildAnything'
import { Blog } from '@/components/home/Blog'
import { BigText, InlineCode, Link, Paragraph, Widont } from '@/components/home/common'
import { Footer } from '@/components/home/Footer'
import NextLink from 'next/link'
import Head from 'next/head'
import { Logo } from '@/components/Logo'

export default function Home() {
  

  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Tachom Developer Group  - We design and build highly scalable software solutions."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Tachom Developer Group  - We design and build highly scalable software solutions."
        />
        <title>Tachom Developer Group  - We design and build highly scalable software solutions.</title>
      </Head>

      <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">0
          <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 py-4 flex items-center justify-end mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-10 px-4">
              <NextLink href="/blog" target="_blank">
                <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
                  <span className="sm:hidden">Blog</span>
                  <span className="hidden sm:inline">Blog</span>
                </a>
              </NextLink>
              <NextLink href="/services">
                <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
                  <span className="sm:hidden">Services</span>
                  <span className="hidden sm:inline">Services</span>
                </a>
              </NextLink>
              <NextLink href="/hire">
                <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
                  <span className="sm:hidden">Hire</span>
                  <span className="hidden sm:inline">Hire</span>
                </a>
              </NextLink>
              <a
                href="https://github.com/Tachom"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <span className="sr-only">Tachom Developer Group on GitHub</span>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="pt-16 typewriter">
            
            <div className="my-4">
              <Logo />
            </div>

            <h1 className="text-4xl mt-8 sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-8 sm:mb-10">
              We design and build highly scalable software solutions.
            </h1>
            <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
              In all our years of building awesome <InlineCode>brands</InlineCode>, <InlineCode>designing websites </InlineCode>
              and <InlineCode>deploying apps</InlineCode>. It was never personal. And we tell you now. What we are about to do,
              to your brilliant, <InlineCode>disruptive idea</InlineCode>. You are going to love it very very much.
            </p>
            <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
              <NextLink href="#">
                <a className="w-full sm:w-auto flex-none bg-red-600 hover:bg-red-500 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                  Tell us your idea
                </a>
              </NextLink>
            </div>
          </div>

          </div>
      </header>

      <section className="text-lg relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8">
          <BigText as="h2" className="mb-8">
            <Widont>We’re a full-service agency for disruptive companies and startups</Widont>
          </BigText>
          <div className="flex flex-wrap lg:flex-nowrap justify-between lg:space-x-8">
            <figure className="max-w-4xl mb-6 lg:w-1/2 space-y-8">
                <p>
                  We’re a team of designers and developers who spend our time solving
                  problems and telling the stories of great companies. We help you
                  think more deeply about what you’re offering people through your
                  brand, products and services.
                </p>
                <p>
                  Our mission is to work with companies who want to change the game. We
                  want to help amazing tech startups get from zero to one and create
                  beautiful things that make life better.
                </p>
                <p>
                  <Link href="/docs/utility-first" className="text-gray-700 hover:text-gray-800 font-medium shadow-link">
                    Get to know us -&gt;
                  </Link>
                </p>
            </figure>
            <figure className="max-w-4xl mb-6 lg:w-1/2 lg:px-4 space-y-4">
                <p>
                Once you have a brilliant idea, we can work with you on a gameplan (strategy),
                create a gorgeous logo and styleguide (branding), design a beautiful, functional app (product design),
                turn it into high-performance code (development) and then help people find out about it (motion design).
                </p>
                <Paragraph>

                </Paragraph>
            </figure>

          </div>
        </div>
      </section>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <Services />
        <BuildAnything />
        <Blog />
      </div>

      <Footer />
    </div>
  )
}
