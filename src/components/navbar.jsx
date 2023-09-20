import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import Logo from '../assets/images/logo.png'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Button from './button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navbarLinks = [
    { linkName: "Timeline", path: "#timeline" },
    { linkName: "Overview", path: "#overview" },
    { linkName: "FAQs", path: "#faqs" },
    { linkName: "Contact", path: "#contact" },
  ]

  return (
    <header className="bg-transparent z-50 border-b fixed top-0 left-0 right-0">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between py-3" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h1 className='nav_brand text-[36px] leading-[36px] text-white font-bold'>get<span className='text-primary'>linked</span></h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden ml-auto mr-[100px] lg:flex lg:gap-x-12">
          {navbarLinks.map((links, index) => {
            const { linkName, path } = links;

            return (
              <Link key={index} to={path} className='text-[16px] duration-300 font-[500] leading-[16px] nav-links text-white'>
                {linkName}
              </Link>
            )
          })}
        </Popover.Group>
        <div className="hidden lg:flex lg:justify-end">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            <Button
              text={'Register'}
            />
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">getlinked</span>
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="get linked logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
