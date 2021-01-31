import Image from 'next/image'
import { IconContainer, Caption, BigText, Paragraph, Link } from '@/components/home/common'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/mobile-first.svg'

const Posts = [
  {
    title: "The new way",
    thumb: "",
    author: "Tatenda Chris",
    blog: "BUSINESS BLOG",
    extract: "How do I succeed with my internal communication efforts? And more importantly, how do I make sure..."
  }
]

export function Blog() {

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
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {Posts.map((post, key) => <BlogPost key={key} {...post} />)}
          </div>
        </section>
        <Link href="/docs/responsive-design" className="text-violet-600 hover:text-violet-800 shadow-link">
          Read more -&gt;
        </Link>
      </div>
    </section>
  )
}

const BlogPost = ({title, author, blog, extract, thumb}) => {
  return (
    <div className="space-y-4">
      <div className="mb-2 w-full h-48" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5860964/pexels-photo-5860964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}/>
      <div className="flex text-md">
        <p className="mr-2 font-medium text-indigo-600">{blog}</p>
        <p className="font-medium text-gray-700">&bull; {author}</p>
      </div>
      <div className="mt-2">
        <h3 className="text-2xl font-medium text-gray-700">{title}</h3>
      </div>
      <div>
        <p>{extract}</p>
      </div>
    </div>
  )
}
