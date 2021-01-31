import { BigText, Paragraph } from "../../components/home/common";
import Head from "next/head";
import { Image, useQuerySubscription } from "react-datocms";
import { request } from "../../lib/dato"

export async function getStaticPaths() {
  const data = await request({ query: `{ allArticles { id } }` });

  return {
    paths: data.allArticles.map((article) => `/blog/${article.id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `query PostBySlug($id: ItemId) {
        article(filter: {id: {eq: $id}}) {
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
      }
    `,
    variables: {
      id: params.post_id,
    },
  };


  return {
    props: {
      data: await request(graphqlRequest)
    },
  };
}

export default function Article({ data, preview }) {
  const {article} = data;

  return (
    <div className="px-4 mt-20 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20 relative max-w-screen-md xl:max-w-screen-md mx-auto">
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className="pt-10">
        <BigText>
          <h1 className="font-bold text-gray-900">{article.title}</h1>
        </BigText>
        <Paragraph>{article.subtitle}</Paragraph>
        <div className="pt-8 flex">
          <div className="w-12 flex">
            <Image data={article.author.profilePicture.responsiveImage} className="rounded-full m-auto" />
          </div>
          <div className="ml-2">
            <p className="text-xl text-gray-700 font-medium">{article.author.name}</p>
            <p>{article.id}</p>
          </div>
        </div>
      </div>

      <div className="prose mt-12" dangerouslySetInnerHTML={{__html: article.body}} />
    </div>
  );
}
