import React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Footer = () => {
  return (
    <footer className="px-5 text-center items-center block md:px-30 lg:px-60">
      <div className="flex justify-center pb-2">
        <NavigationMenu>
          <Link href="/privacy-policy" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Privacy Policy
            </NavigationMenuLink>
          </Link>
        </NavigationMenu>
      </div>

      <p>Copyright © 2025 PrivShare. All rights reserved.</p>
    </footer>
  )
}

export default Footer