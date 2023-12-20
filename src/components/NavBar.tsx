import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
      <div className="hidden lg:block">
          <div className="container">
              <div className="flex gap-4 text-blackish font-medium w-fit py-4 mx-auto">
                  <Link className='relative hover:text-accent' href='#'>
                        Home
                  </Link>
                  <Link className='relative hover:text-accent' href='#'>
                        About Us
                  </Link>
                  <Link className='relative hover:text-accent' href='#'>
                        Service
                  </Link>
                  <Link className='relative hover:text-accent' href='#'>
                        Contact Us
                  </Link>
              </div>
          </div>
    </div>
  )
}

export default NavBar