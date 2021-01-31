import Link from 'next/link'
import { documentationNav } from '@/navs/documentation'
import clsx from 'clsx'
import styles from './Footer.module.css'
import { Logo } from '@/components/Logo'
import { Community } from '../Community'

const footerNav = {
  'Getting started': {
    className: 'row-span-2',
    items: documentationNav['Getting started'],
  },
  'Core concepts': {
    className: 'row-span-2',
    items: documentationNav['Core Concepts'],
  },
  Customization: {
    className: 'row-span-2',
    items: documentationNav['Customization'],
  },
  Community: {
    items: [
      { title: 'GitHub', href: 'https://github.com/Tachom' },
      { title: 'Discord', href: '/discord' },
      { title: 'Twitter', href: 'https://twitter.com/tailwindcss' },
      { title: 'YouTube', href: 'https://www.youtube.com/tailwindlabs' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 sm:pt-12 md:pt-24 xl:pt-20 sm:pb-20">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y space-y-12 divide-gray-200 px-4 sm:px-6 md:px-8">
        <section>
            <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
              Get involved
            </h2>
            <Community />
        </section>
        <div className="pt-6 sm:pt-8">
          <h3>
            Tachom Developer Group 2021 © • Tachom Developer Group is a corporate division of Varisync (Private) Limited
          </h3>
        </div>
      </div>
    </footer>
  )
}
