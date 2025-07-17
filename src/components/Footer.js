import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black font-medium text-lg max-sm:text-base'>
        <Layout className='py-8 flex items-center justify-between max-lg:flex-col max-lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
           <div className='flex items-center max-lg:py-2'>
           Build With <span className='text-fuchsia-500 text-2xl px-1'>&#9825;</span> by&nbsp;<Link href='/' className='underline underline-offset-2'>SabhyasachiSahoo</Link>
           </div>
            <Link href='mailto:sabhyasachisahoo16@gmail.com' className='underline underline-offset-2' target={'_blank'}>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
