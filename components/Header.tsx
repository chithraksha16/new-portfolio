import React from 'react'
import Container from './Container'
import Link from 'next/link'



const Header = () => {
    const navItems=[
        {
            title:"Home",
            href:"/"
        },
        {
            title:"Services",
            href:"/services"
        },
        {
            title:"Contact",
            href:"/contact"
        }
    ]
  return (
    
    <Container>
        <div className=' w-full h-18 px-5'>
        <h1>Logo</h1>
            <div className='flex'>
                <div>
                {navItems.map((items,idx)=>(
                <Link key={idx} href={items.href}> <span>{items.title}</span></Link>
                ))}
                </div>

                <div>
                    Search
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Header
