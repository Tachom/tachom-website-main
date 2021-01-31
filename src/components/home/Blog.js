import { IconContainer, Caption, BigText, Paragraph, Link } from '@/components/home/common'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/mobile-first.svg'
import { Image } from "react-datocms";

export function Blog({posts}) {
  
  return (
    <section id="mobile-first">
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.violet[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <Caption as="h2" className="text-violet-600 mb-3">
          Latest Blogs
        </Caption>
        <BigText className="mb-8">
          Our team also loves to write.
        </BigText>
        <section className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {posts.map((post, key) => <BlogPost key={key} {...post} />)}
          </div>
        </section>
        <Link href="/docs/responsive-design" className="text-violet-600 hover:text-violet-800 shadow-link">
          Read more -&gt;
        </Link>
      </div>
    </section>
  )
}

const BlogPost = ({title, author, category, thumbnail, subtitle, id}) => {
  return (
    <div className="space-y-4">
      <Link href={`/blog/${id}`}>
          <div className="space-y-2 justify-between w-full md:p-0 space-x-2">
            <Image className="w-full h-auto md:rounded-none" data={thumbnail.responsiveImage} />
            <div className="space-y-4">
              <div>
                <p className="text-lg font-bold text-gray-800">{title}</p>
                <p className="text-sm">{subtitle}</p>
              </div>
              <div className="flex flex-wrap space-y-2">
                <div className="flex space-x-2">
                  <Image className="h-auto w-6 my-auto rounded" data={author.profilePicture.responsiveImage} />
                  <p className="text-bold text-gray-800 text-sm space-x-1 my-auto">
                    {` ${author.name}`}
                    <span className="text-gray-500 font-normal"> in </span>
                    {` ${category.name}`}
                  </p>
                </div>
              </div>
            </div>

            </div>
      </Link>
    </div>
  )
}
