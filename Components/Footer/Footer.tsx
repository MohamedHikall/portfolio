'use client'

import { contactData } from "@/data/contactData"
import CustomField from "@/shared/CustomField/CustomField"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
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

          </div>

          {/* Info & Newsletter */}
          <div className="col lg:row-between-center items-start border-b border-gray-light/30 pb-10 md:pb-16 mt-10 md:mt-16 gap-10 lg:gap-0">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:row lg:gap-20">

              <div className="col">
                <h4 className='font-bold text-xl md:text-2xl mb-4'>Resume</h4>
                <a
                  href={contactData.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-gray-light max-w-xs text-base md:text-lg hover:text-white transition-all cursor-pointer block' >
                  Download CV
                </a>
              </div>

              <div className="col space-y-1">
                <h4 className='font-bold text-xl md:text-2xl mb-4' >Contact</h4>
                <a
                  href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                  className='block text-gray-light text-base md:text-lg hover:text-white transition-all cursor-pointer' >
                  {contactData.phone}
                </a>
                <a
                  href={`mailto:${contactData.email}`}
                  className='block text-gray-light text-base md:text-lg hover:text-white transition-all cursor-pointer' >
                  {contactData.email}
                </a>
              </div>

            </div>

            {/* divider */}
            <div className="hidden lg:block w-px h-24 bg-gray-light/30"></div>

            <div className="row-items-center gap-3">
              <a href={contactData.github} target="_blank" className='w-10 h-10 rounded-full border border-gray-light flex items-center justify-center hover:bg-white hover:text-black transition-all group'>
                <Github className='w-5 h-5' />
              </a>
              <a href={contactData.linkedin} target="_blank" className='w-10 h-10 rounded-full border border-gray-light flex items-center justify-center hover:bg-white hover:text-black transition-all group'>
                <Linkedin className='w-5 h-5' />
              </a>
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