'use client'

import { testimonialsData } from '@/data/mock/testimonialsData'
import RotatingText from '@/shared/RotatingText/RotatingText'
import { AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useSlider } from '@/hooks/useSlider'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const Testimonials = () => {

  const { currentIndex, handleNext, handlePrev } = useSlider(testimonialsData.length);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (

    <section className='py-24 md:py-40 lg:py-60 overflow-hidden'>

      <div className='row-center-center gap-4 md:gap-10 lg:gap-20 mb-12 md:mb-20'>

        <hr className='flex-1 h-px border-white/5' />

        <RotatingText
          text={testimonialsData[currentIndex].title + " • "}
          size='w-32 h-32 sm:w-40 h-40 md:w-56 md:h-56'
          imgSize='w-20 h-20 sm:w-24 h-24 md:w-36 md:h-36'
          radius={70}
          fontSize='text-[8px] md:text-[10px]'
          image={testimonialsData[currentIndex].image}
        />

        <hr className='flex-1 h-px border-white/5' />

      </div>

      <div className="container mx-auto relative min-h-[400px] col-center-center">

        <AnimatePresence mode='wait' >

          <CustomTransition
            type='div'
            key={testimonialsData[currentIndex].id}
            className={cn("w-full col items-center px-6 md:px-12", isMobile ? 'touch-auto' : '')}

            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}

            onDragEnd={(e, { offset }) => {
              if (!isMobile) return;
              const swipe = offset.x;
              if (swipe < -50) {
                handleNext();
              } else if (swipe > 50) {
                handlePrev();
              }
            }}

            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }} >

            <div className="mb-8 opacity-10">
              <svg width="60" height="48" viewBox="0 0 45 36" fill="white" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 0C6.045 0 0 6.045 0 13.5C0 20.955 6.045 27 13.5 27V36L22.5 27V13.5C22.5 6.045 16.455 0 13.5 0ZM36 0C28.545 0 22.5 6.045 22.5 13.5C22.5 20.955 28.545 27 36 27V36L45 27V13.5C45 6.045 38.955 0 36 0Z" /> </svg>
            </div>

            <q className='text-center w-full max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-4xl font-light italic leading-snug md:leading-relaxed tracking-tight text-white/80'>
              {testimonialsData[currentIndex].description}
            </q>

            <div className="w-16 h-0.5 bg-red/30 my-10 md:my-16"></div>

            <div className='col items-center'>

              <span className='text-center text-lg md:text-2xl font-bold tracking-tight text-white uppercase'>
                {testimonialsData[currentIndex].name}
              </span>

              <p className='text-center text-sm md:text-xs text-red font-black uppercase tracking-widest mt-2'>
                {testimonialsData[currentIndex].position}
              </p>

              <div className="hidden lg:block">

                <button type='button' onClick={handlePrev} className='absolute top-1/2 left-0 -translate-y-1/2 row-center-center rounded-full w-20 h-20 border border-white/10 hover:bg-white/5 transition-colors cursor-pointer group'>
                  <ArrowLeft className='w-8 h-8 group-hover:-translate-x-1 transition-transform' />
                </button>

                <button type='button' onClick={handleNext} className='absolute top-1/2 right-0 -translate-y-1/2 row-center-center rounded-full w-20 h-20 border border-white/10 hover:bg-white/5 transition-colors cursor-pointer group'>
                  <ArrowRight className='w-8 h-8 group-hover:translate-x-1 transition-transform' />
                </button>
              </div>

            </div>
          </CustomTransition>

        </AnimatePresence>

      </div>

    </section>

  )
}

export default Testimonials