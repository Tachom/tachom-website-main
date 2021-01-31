import { request } from "src/lib/dato";
import { Image } from "react-datocms";

export default function Blog({data}) {
    return (
        <div>
        {data.allArticles.map(blogPost => (
            <article key={blogPost.id}>
            <Image className="w-max-xl h-96 w-96" data={blogPost.thumbnail.responsiveImage} />
            <h6>{blogPost.title}</h6>
            </article>
        ))}
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
        variables: { limit: 10 }
      });
      return {
        props: { data }
      };
}
