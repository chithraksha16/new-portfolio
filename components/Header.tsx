import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'



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
        <div className=' w-full h-18 px-5 flex justify-between'>
        <Image
        width={70} 
        height={70}
        className='rounded-full size-10'
        src="/chithraksha logo.webp"
         alt=""/>
            <div className='flex gap-10 font-sans font-normal text-[15px]'>
                <div className='flex gap-10'>
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
