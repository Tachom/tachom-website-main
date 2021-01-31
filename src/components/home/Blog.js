import Image from 'next/image'
import { IconContainer, Caption, BigText, Paragraph, Link } from '@/components/home/common'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/mobile-first.svg'
import { useEffect, useState } from 'react'
import Axios from 'axios'

export function Blog() {
  const [posts, setPosts] = useState([])
  const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tachom"
  useEffect(() => {
    Axios.get(url)
      .then(response => {
        setPosts(response.data.items)
        console.log(response.data.items[0])
      })
  }, [])
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

const BlogPost = ({title, author, link, pubDate, thumbnail}) => {
  return (
    <div className="space-y-4">
      <Link href={link}>
          <div className="space-y-2 flex justify-between w-full md:p-0 space-x-2">
            <div className="">
              <div className="text-sm">
                <p>
                  <span className="text-sm font-medium text-gray-500">{new Date(pubDate).toDateString()}</span> 
                </p>
              </div>
              <div className="">
                <p className="text-lg font-bold text-gray-800">{title}</p>
              </div>
            </div>
          
            <img className="w-32 h-auto md:rounded-none mx-auto order-last" 
              src={thumbnail} 
              alt="" 
              width="384" 
              height="512"
            />

            </div>
      </Link>
    </div>
  )
}
