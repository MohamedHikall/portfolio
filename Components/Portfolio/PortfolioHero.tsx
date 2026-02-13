'use client'

import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const PortfolioHero = () => {
    return (

        <div className="border-y border-white/10 py-10 md:py-16">

            <div className="container mx-auto px-4">

                <div className="row-between-center w-full md:w-[75%] mx-auto text-gray-light uppercase text-[10px] md:text-sm tracking-widest gap-4 text-center">
                    <span>Featured work©</span>
                    <span>Selected Projects</span>
                </div>

                <div className="mt-8 md:mt-12">

                    <CustomTransition
                        type='h1'
                        className='text-5xl sm:text-7xl md:text-[100px] lg:text-[130px] text-center font-medium leading-none tracking-tighter uppercase wrap-break-word'
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}>
                        <span className="text-white">Featured </span>
                        <span className="bg-linear-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"> work© </span>
                    </CustomTransition>

                </div>

            </div>
        </div>
    )
}

export default PortfolioHero