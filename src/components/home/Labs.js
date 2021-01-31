import { IconContainer, Caption, BigText, Paragraph } from '@/components/home/common'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/performance.svg'
import styles from '../../pages/docs/index.module.css'
import { ReactComponent as ScreencastsImage } from '@/img/screencasts.svg'
import { ReactComponent as GuidesImage } from '@/img/guides.svg'
import { ReactComponent as PlayImage } from '@/img/play.svg'
import { ReactComponent as TuiLogo } from '@/img/tailwind-ui-logo-on-dark.svg'
import { Widont } from '@/components/Widont'
import { ReactComponent as TuiBundleLogo } from '@/img/tailwind-ui-bundle-logo.svg'
import { ReactComponent as RefactoringUiCompleteLogo } from '@/img/refactoring-ui-complete-logo.svg'
import Link from 'next/link'
export function Labs() {

  return (
    <section id="performance">
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.teal[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <Caption as="h2" className="text-teal-500 mb-3">
          Our Labs
        </Caption>
        <BigText className="mb-8">Forever pioneering.</BigText>
        <Paragraph className="mb-6">
          Tachom Developer Group automatically removes all unused CSS when building for production, which means
          your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind
          projects ship less than 10KB of CSS to the client.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.violet[0]}`}>
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Read the docs</h2>
                  <p className="font-medium text-violet-100 text-shadow mb-4">
                    Learn how to get Tachom Developer Groupset up in your project.
                  </p>
                  <Link href="/docs/installation">
                    <a className="mt-auto bg-violet-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">
                      Start learning
                    </a>
                  </Link>
                </div>
                <div className={`${styles.image} relative md:pl-6 xl:pl-8 hidden sm:block`}>
                  <GuidesImage className="absolute top-6 left-6 md:static overflow-visible" />
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-20 hidden sm:block"
                style={{
                  background: 'linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0))',
                }}
              />
            </div>
          </section>
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.pink[0]}`}>
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Try it in the browser</h2>
                  <p className="font-medium text-rose-100 text-shadow mb-4">
                    Build something with Tachom Developer Groupin our online playground.
                  </p>
                  <a
                    href="https://play.tailwindcss.com/"
                    className="mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
                  >
                    Start building
                  </a>
                </div>
                <div className={`${styles.image} relative md:pl-6 xl:pl-8 hidden sm:block`}>
                  <PlayImage className="absolute top-6 left-6 md:static overflow-visible" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block" />
            </div>
          </section>
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.amber[0]}`}>
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">We share knowledge</h2>
                  <p className="font-medium text-amber-100 text-shadow mb-4">
                    Learn more about Tachom Developer Groupdirectly from the team on our channel.
                  </p>
                  <Link href="https://www.youtube.com/tailwindlabs">
                    <a className="mt-auto bg-amber-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">
                      Start learning
                    </a>
                  </Link>
                </div>
                <div className={`${styles.image} relative hidden sm:block`}>
                  <div className="absolute left-2 bottom-3 xl:bottom-5">
                    <ScreencastsImage className="overflow-visible" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-500 hidden sm:block" />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
