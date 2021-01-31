import { request } from "src/lib/dato";
import { Image } from "react-datocms";
import Head from "next/head";
import { BigText, Paragraph } from "@/components/home/common";
import Link from "next/link";

export default function Blog({data}) {
    return (
        <div className="px-4 mt-20 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <Head>
            <title>Tachom Developer Blog</title>
          </Head>
          <div className="py-8">
            <BigText>
              <h1>Tachom Developer Blog</h1>
            </BigText>
            <Paragraph>Where we jot down our thoughts and imaginations</Paragraph>
          </div>

          <div className="w-full flex flex-wrap lg:flex-nowrap space-x-8 space-y-4">
            <div className="w-full lg:w-3/4">
              <Link href={`/blog/${data.allArticles[0].id}`}>
                <a>
                  <Image data={data.allArticles[0].thumbnail.responsiveImage} className="w-full h-px-700 max-h-96 object-contain mb-4"/>
                  <p className="text-2xl font-bold text-gray-800">
                    {data.allArticles[0].title}
                  </p>
                  <p className="font-bold">
                    {data.allArticles[0].subtitle}
                  </p>
                </a>
              </Link>
            </div>
            <div className="w-full lg:w-1/4 ">
            {data.allArticles.slice(1, 3).map(blogPost => (
              <Link key={blogPost.id} href={`/blog/${blogPost.id}`}>
                <a key={blogPost.id}>
                  <div className="w-full flex rounded space-x-4 mb-8">
                    <div className="w-20">
                      <Image className="w-max-xl h-auto w-20" data={blogPost.thumbnail.responsiveImage} />
                    </div>
                    <div className="w-auto">
                      <h3 className="text-md text-gray-800 font-medium">{blogPost.title}</h3>
                      <p className="text-sm text-gray-600">{blogPost.subtitle}</p>
                    </div>
                  </div>
                </a>
              </Link>
          ))}
            </div>
          </div>

          {
            data.allArticles.length > 4 ?
            <div className="py-8 mt-8">
              <BigText>
                <h3>All blog posts</h3>
              </BigText>
            </div>
          : null
          }


          <div className="space-y-8 flex">
            {data.allArticles.slice(4, data.allArticles.length).map(blogPost => (
                <Link href={"/blog/" + blogPost.id}>
                  <a className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 py-4">
                    <article key={blogPost.id}>
                        <div className="w-full">
                          <Image className="w-max-xl h-auto w-full" data={blogPost.thumbnail.responsiveImage} />
                        <div>
                          <h3 className="text-lg text-gray-800 font-bold">{blogPost.title}</h3>
                          <p className="text-md">{blogPost.subtitle}</p>
                        </div>
                      </div>
                    </article>
                  </a>
                </Link>
            ))}
          </div>
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
        variables: { limit: 20 }
      });
      return {
        props: { data }
      };
}
