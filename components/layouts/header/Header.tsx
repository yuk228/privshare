import React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import HeaderBlogList from './HeaderBlogList'
import Theme from './Theme'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full px-5 py-3 md:px-30 lg:px-60 flex items-center justify-between dark:bg-black bg-white bg-opacity-90">
      <div className="font-bold transition-transform duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-105">
        <Link href="/">PrivShare</Link>
      </div>
      <div className="mr-auto pl-5 text-gray-500">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <HeaderBlogList />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Theme />
    </header>
  )
}

export default Header