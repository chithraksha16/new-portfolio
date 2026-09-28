import React from 'react'
import Link from 'next/link'
import { FaLinkedin,FaGithub,FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialLinks = () => {
  return (
    <div>
      <div className="flex flex-col py-5" >
            <div className="flex">
          <div>
            <Link href=''>
           <FaLinkedin className="text-[#0A66C2] size-6" />
            </Link>
          </div>
          <div>
            <Link href=''>
            <FaGithub className="text-[#181717] size-6" />
            </Link>
          </div>
          </div>
          <div className="flex">
          <div>
            <Link href=''>
           <FaSquareXTwitter className="text-[#181717] size-6" />
            </Link>
          </div>
          <div>
            <Link href=''>
            <FaDiscord className="text-[#5865F2] size-6" />
            </Link>
          </div>
          </div>
          </div>
    </div>
  )
}

export default SocialLinks
