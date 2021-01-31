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
        <Link href="/docs/utility-first" className="text-purple-600 hover:text-purple-800">
          See how we can help -&gt;
        </Link>
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-8 my-8 sm:my-12">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">Learn UI Design</h2>
          <a
            href="https://refactoringui.com/book"
            className="h-40 sm:h-56 xl:h-64 bg-gray-900 bg-cover rounded-3xl mb-6 flex items-center justify-center"
            style={{
              backgroundImage: `url(${require('@/img/resources/refactoring-ui-bg.png').default})`,
            }}
          >
            <Logo title="Refactoring UI" component={RefactoringUi} />
          </a>
          <div className="space-y-5">
            <p>
              Refactoring UI is a design-for-developers book + video series put together by Adam
              Wathan and Steve Schoger. It covers literally everything we know about making things
              look awesome.
            </p>
            <p>
              Almost 10,000 people have picked it up so far and have all sorts of awesome things to
              say about how it helped them improve their work.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">Official Tachom Developer Group  Components</h2>
          <a
            href="https://tailwindui.com/"
            className="h-40 sm:h-56 xl:h-64 bg-gray-300 rounded-3xl mb-6 overflow-hidden flex"
          >
            <div className="relative flex-none flex items-center justify-center px-6 xl:px-10">
              <div className="bg-gray-900 absolute inset-0 -left-64 transform -skew-x-20" />
              <Logo title="Tachom Developer GroupUI" component={TailwindUi} />
            </div>
            <div
              className="flex-auto bg-cover -ml-12"
              style={{
                backgroundImage: `url(${require('@/img/resources/tailwind-ui.jpg').default})`,
              }}
            />
          </a>
          <div className="space-y-5">
            <p>
              Tachom Developer GroupUI is a collection of professionally designed, pre-built, fully responsive
              HTML snippets you can drop into your Tachom Developer Groupprojects.
            </p>
            <p>
              There are currently over 350 components available in two different categories
              (Marketing and Application UI) and we’re always adding more.
            </p>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 xl:gap-8 pb-10 border-b border-gray-200">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            JavaScript<span className="sr-only">: Headless UI</span>
          </h2>
          <a
            href="https://headlessui.dev/"
            className="h-40 xl:h-48 rounded-3xl bg-gray-900 mb-6 flex items-center justify-center p-6"
          >
            <Logo title="Headless UI" component={HeadlessUi} />
          </a>
          <p>
            Completely unstyled, fully accessible UI components, designed to integrate beautifully
            with Tachom Developer Group .
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Icons<span className="sr-only">: Heroicons</span>
          </h2>
          <a
            href="https://heroicons.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-contain"
              style={{
                backgroundImage: `url(${require('@/img/resources/heroicons-bg.svg').default})`,
              }}
            >
              <Logo title="Heroicons" component={Heroicons} />
            </div>
          </a>
          <p>
            A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Patterns<span className="sr-only">: Heropatterns</span>
          </h2>
          <a
            href="https://www.heropatterns.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-cyan-600 to-teal-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-cover"
              style={{
                backgroundImage: `url(${require('@/img/resources/heropatterns-bg.svg').default})`,
              }}
            >
              <Logo title="Heropatterns" component={Heropatterns} />
            </div>
          </a>
          <p>
            A set of free MIT-licensed high-quality SVG patterns for you to use in your web
            projects.
          </p>
        </section>
      </div>
      </div>
    </section>
  )
}
