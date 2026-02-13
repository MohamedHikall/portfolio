'use client'

import { contactData } from "@/data/contactData"
import CustomField from "@/shared/CustomField/CustomField"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const Footer = () => {

  const [email, setEmail] = useState<string>('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-gray w-full pt-10 md:pt-20 pb-10 mt-auto'>

      <div className='container mx-auto px-4 md:px-10'>

        <div className='col gap-4'>

          <div className="col lg:row-between-start lg:items-center gap-8">

            <h2 className='font-bold text-4xl md:text-6xl max-w-full md:max-w-2/3 leading-tight md:leading-15' >
              Let’s create <span className='text-gray-light/70' >something</span> together special
            </h2>

            <div className="row-items-center gap-3">
              <a href="#" target="_blank" className='w-10 h-10 rounded-full border border-gray-light flex items-center justify-center hover:bg-white hover:text-black transition-all group'>
                <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg>
              </a>
              <a href="#" target="_blank" className='w-10 h-10 rounded-full border border-gray-light flex items-center justify-center hover:bg-white hover:text-black transition-all'>
                <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect x="2" y="9" width="4" height="12"></rect> <circle cx="4" cy="4" r="2"></circle> </svg>
              </a>
              <a href="#" target="_blank" className='w-10 h-10 rounded-full border border-gray-light flex items-center justify-center hover:bg-white hover:text-black transition-all'>
                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M9 12h2a2.5 2.5 0 0 0 0-5H9v5z" /> <path d="M9 17h2.5a3 3 0 0 0 0-6H9v6z" /> <line x1="16" y1="8" x2="20" y2="8" /> <path d="M15 13c0 1.5 1 3 3 3s3-1.5 3-3-1.5-3-3-3-3 1.5-3 3z" /> </svg>
              </a>
            </div>

          </div>

          {/* Info & Newsletter */}
          <div className="col lg:row-between-center items-start border-b border-gray-light/30 pb-10 md:pb-16 mt-10 md:mt-16 gap-10 lg:gap-0">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:row lg:gap-20">

              <div className="col">
                <h4 className='font-bold text-xl md:text-2xl mb-4' >Location</h4>
                <p className='text-gray-light max-w-xs text-base md:text-lg hover:text-white transition-all cursor-pointer' >{contactData.location}</p>
              </div>

              <div className="col space-y-1">
                <h4 className='font-bold text-xl md:text-2xl mb-4' >Contact</h4>
                <p className='text-gray-light text-base md:text-lg hover:text-white transition-all cursor-pointer' >{contactData.phone}</p>
                <p className='text-gray-light text-base md:text-lg hover:text-white transition-all cursor-pointer' >{contactData.email}</p>
              </div>

            </div>

            {/* divider */}
            <div className="hidden lg:block w-px h-24 bg-gray-light/30"></div>

            <div className="relative w-full lg:w-2/5 group">
              <CustomField
                label={""}
                placeholder={"Enter your email"}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 ps-6 pe-20 outline-none border border-white/10 bg-white/5 text-white placeholder:text-gray-light/30 rounded-full focus:border-white/30 transition-all duration-300" />

              <button type="submit" className="absolute top-1/2 -translate-y-1/2 end-2 w-12 h-12 rounded-full bg-white text-black row-center-center hover:scale-105 transition-all cursor-pointer shadow-lg shadow-black/20">
                <ArrowRight className="w-6 h-6" />
              </button>

            </div>

          </div>

          {/* Copyright */}
          <div className="col md:row-between-center mt-6 gap-4 text-gray-light text-sm text-center">
            <p>© 2026 <span className="text-white cursor-pointer font-medium">Mohamed Haikal.</span> All rights reserved.</p>
            <button onClick={scrollToTop} className='hover:text-white transition-all cursor-pointer' > Scroll to top </button>
          </div>

        </div>
      </div>
    </footer>
  )

}

export default Footer