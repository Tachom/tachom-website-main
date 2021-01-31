import { Services } from '@/components/home/Services'
import { BuildAnything } from '@/components/home/BuildAnything'
import { Blog } from '@/components/home/Blog'
import { BigText, InlineCode, Link, Paragraph, Widont } from '@/components/home/common'
import { Footer } from '@/components/home/Footer'
import NextLink from 'next/link'
import Head from 'next/head'
import { Logo } from '@/components/Logo'
import { request } from 'src/lib/dato'
import { Header } from '@/components/Header'

export default function Home({data}) {
  

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
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <Header />
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
        <Blog posts={data.allArticles} />
      </div>

      <Footer />
    </div>
  )
}

const BLOG_POSTS_QUERY = `query HomePage($limit: IntType) {
  allArticles(first: $limit) {
      id
      title
      subtitle
      body
      category {
        id
        name
      }
      author {
        id
        name
        profilePicture{
          id
          responsiveImage(imgixParams: { fit: crop, w: 100, h: 100, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }  
        }
      }
      thumbnail {
        id
        responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
  }
}`;


export async function getStaticProps(context) {
  const data = await request({
      query: BLOG_POSTS_QUERY,
      variables: { limit: 4 },
      preview: context.preview 
    });
    return {
      props: { data }
    };
}