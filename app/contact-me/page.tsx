'use client'

import ContactHero from '@/Components/ContactMe/ContactHero'
import Form from '@/Components/ContactMe/Form'
import Interests from '@/Components/ContactMe/Interests/Interests'
import { useState } from 'react'

const ContactMe = () => {

  const [selectedInterests, setSelectedInterests] = useState<number[]>([])

  const toggleInterest = (id: number) => {
    setSelectedInterests(prev => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
  }

  return (

    <div className='py-30 md:py-50' >

      <div className='container w-[92%] md:max-w-[77%] mx-auto'>

        <ContactHero />

        {/* Interests */}
        <div className="pt-30 md:pt-40">
          <h5 className='text-3xl font-semibold' >I&apos;m interested in...</h5>
          <div className="row-start-center md:row-items-center gap-4 md:gap-6 flex-wrap w-full lg:max-w-[80%] mt-6 md:mt-12">
            <Interests selectedIds={selectedInterests} onToggle={toggleInterest} />
          </div>
        </div>

        <Form selectedInterests={selectedInterests} resetInterests={() => setSelectedInterests([])} />

      </div>

    </div>

  )
}

export default ContactMe