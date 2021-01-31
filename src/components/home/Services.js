import { IconContainer, Caption, BigText, Paragraph, Link, Widont } from '@/components/home/common'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/constraint-based.svg'
import { ReactComponent as RefactoringUi } from '@/img/resources/refactoring-ui.svg'
import { ReactComponent as TailwindUi } from '@/img/resources/tailwind-ui.svg'
import { ReactComponent as HeadlessUi } from '@/img/resources/headless-ui.svg'
import { ReactComponent as Heroicons } from '@/img/resources/heroicons.svg'
import { ReactComponent as Heropatterns } from '@/img/resources/heropatterns.svg'

function Logo({ title, component: Component }) {
  return (
    <div className="w-60 max-w-full">
      <div className="relative" style={{ paddingTop: `${(60 / 240) * 100}%` }}>
        <span className="sr-only">{title}</span>
        <Component className="absolute inset-0 w-full h-full" />
      </div>
    </div>
  )
}


export function Services() {

  return (
    <section id="constraint-based">
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.purple[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <Caption as="h2" className="text-purple-600 mb-3">
          Our Services
        </Caption>
        <BigText className="mb-8">
          <Widont>Things we do for Disruptive Brands.</Widont>
        </BigText>
        <Paragraph className="mb-6">
          Our team of designers, strategists, thinkers and doers are here to help you and your 
          teams navigate through these uncertain times. Our approaches might have changed, but 
          our outcomes remain the same.


        </Paragraph>
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-8 my-8 sm:my-12">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">Custom Enterprise Software</h2>
          <a
            href="/services/enterprise"
            className="h-40 sm:h-56 xl:h-64 bg-gray-50 bg-cover rounded-3xl mb-6 flex items-center justify-center"
            style={{
              backgroundImage: `url("https://deepsource.io/images/logos/analyzers/desktop-logos.svg")`,
            }}
          >
          </a>
          <div className="space-y-5">
            <p>
              We design and develop high performance software and design systems according to your specifications.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">Website Development</h2>
          <a
            href="/services/web"
            className="h-40 sm:h-56 xl:h-64 bg-gray-100 rounded-3xl mb-6 overflow-hidden flex"
          >
            <div className="w-1/3 relative flex-none flex items-center justify-center px-6 xl:px-10">
              <div className="absolute inset-0 -left-64 transform -skew-x-20" />
            </div>
            <div
              className="flex-auto bg-cover -ml-12"
              style={{
                backgroundImage: `url("https://github.githubassets.com/images/modules/site/open-source-ill-watch.png?sn1")`,
              }}
            />
          </a>
          <div className="space-y-5">
            <p>
              Secure, beautiful and accessible websites using industries best practices.
            </p>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 xl:gap-8 py-10 ">
        <section>
            <div className="p-4 space-x-4 relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 mb-6">
              <Link className="w-full relative" href="/services/mobile">
                <div className="w-36 md:w-48 mt-2">
                  <img 
                    src="https://devimages-cdn.apple.com/wwdc-services/articles/images/65934949-67DA-47BB-A590-E5C84FA26FB8/256.png"
                    className="w-36 md:w-48"
                    />
                </div>
                <div className="w-auto my-4">
                  <h2 className="text-xl text-gray-900 font-bold">
                    Mobile Application Development
                  </h2>
                  <p className="text-sm">
                    Cross platform native and hybrid mobile apps with for Android & iOS.
                  </p>
                </div>
              </Link>
            </div>
        </section>
        <section>
          <div className="p-4 space-x-4 relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 mb-6">
            <Link
              className="w-full relative"
              href="/services/digital">
              <div className="w-36 md:w-48">
                <img 
                  src="https://devimages-cdn.apple.com/wwdc-services/articles/images/96092488-E883-4776-85A2-CFB20AB2F730/256.png"
                  className="w-36 md:w-48"
                  />
              </div>
              
              <div className="w-auto mt-4">
                <h2 className="text-xl text-gray-900 font-bold">
                  Digital Product Design
                </h2>
                <p className="text-sm">
                  Wireframing, prototyping and design systems.
                </p>
              </div>
            </Link>
          </div>
          
        </section>
        <section>
        <div className="p-4 space-x-4 relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 mb-6">
            <Link href="/services/data" className="w-full relative">
              <div className="w-36 md:w-48 mt-2">
                <img 
                  src="https://devimages-cdn.apple.com/wwdc-services/articles/images/CB3E431C-C0C6-4AE2-9967-31C0476829DA/256.png"
                  className="w-36 md:w-48"
                  />
              </div>
              <div className="w-auto my-4">
                <h2 className="text-xl text-gray-900 font-bold">
                  Data Science & Machine Learning
                </h2>
                <p className="text-sm">
                  Intelligent systems, data mining, chat-bots and data driven solutions.
                </p>
              </div>
            </Link>
          </div>
          
        </section>
      </div>
      </div>
    </section>
  )
}
