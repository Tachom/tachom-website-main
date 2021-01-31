import {useState} from 'react'
import { IconContainer, Caption, BigText, Paragraph, Link, Widont } from '@/components/home/common'
import { Tabs } from '@/components/Tabs'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/customization.svg'
import tailwindColors from 'tailwindcss/colors'
import { AnimatePresence, motion } from 'framer-motion'
import { font as poppinsRegular } from '../../fonts/generated/Poppins-Regular.module.css'
import { font as poppinsExtraBold } from '../../fonts/generated/Poppins-ExtraBold.module.css'
import { font as tenorSansRegular } from '../../fonts/generated/TenorSans-Regular.module.css'
import { font as robotoMonoRegular } from '../../fonts/generated/RobotoMono-Regular.module.css'
import styles from './Customization.module.css'


const themes = {
  simple: {
    font: 'Inter',
    fontStacks: [
      ['Inter', 'system-ui', 'sans-serif'],
      ['Inter', 'system-ui', 'sans-serif'],
    ],
    classNameDisplay: 'font-semibold',
    primaryColor: 'indigo',
    secondaryColorName: 'gray',
    secondaryColor: 'gray',
  },
  playful: {
    font: 'Poppins',
    fontStacks: [
      ['Poppins', 'system-ui', 'sans-serif'],
      ['Poppins', 'system-ui', 'sans-serif'],
    ],
    classNameDisplay: poppinsExtraBold,
    classNameBody: `${poppinsRegular} text-sm`,
    primaryColor: 'purple',
    secondaryColorName: 'secondary',
    secondaryColor: 'pink',
  },
  elegant: {
    font: 'Tenor Sans',
    fontStacks: [
      ['Tenor Sans', 'Georgia', 'serif'],
      ['Inter', 'system-ui', 'sans-serif'],
    ],
    classNameDisplay: tenorSansRegular,
    primaryColor: 'gray',
    secondaryColorName: 'accent',
    secondaryColor: 'amber',
  },
  brutalist: {
    font: 'Roboto Mono',
    fontStacks: [
      ['Roboto Mono', 'Menlo', 'monospace'],
      ['Roboto Mono', 'Menlo', 'monospace'],
    ],
    classNameDisplay: robotoMonoRegular,
    classNameBody: `${robotoMonoRegular} text-xs leading-5`,
    primaryColor: 'lime',
    secondaryColorName: 'gray',
    secondaryColor: 'gray',
  },
}


export function HowWeHelp() {
  const [theme, setTheme] = useState('simple')

  return (
    <section id="customization">
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.pink[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <Caption as="h2" className="text-rose-600 mb-3">
          How we can help
        </Caption>
        <BigText className="mb-8">
          <Widont>Make technology a competitive advantage in your business.</Widont>
        </BigText>
        <Paragraph as="div" className="mb-6">
          <p>
            Our developers are trained and certified in building software solutions using
            diverse tools. From Static Sites, Machine Learning tasks, Wordpress Blogs to
            Database Management and Data Migration, we have you covered on every step of
            the implementation of your project.
          </p>
        </Paragraph>
        <Link href="/docs/configuration" className="text-rose-600 hover:text-rose-800">
          Learn more -&gt;
        </Link>
      </div>
    </section>
  )
}
