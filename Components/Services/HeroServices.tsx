'use client'

import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const HeroServices = () => {
    return (

        <section className="pt-30 md:pt-40 pb-20 px-6">
            <div className="container w-[92%] md:max-w-[77%] mx-auto">
                <CustomTransition
                    type='div'
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} >
                    <h5 className="text-xl md:text-2xl text-gray-light mb-6">Expertise & Services</h5>
                    <h1 className="text-5xl md:text-8xl font-bold leading-14 md:leading-24">
                        Crafting digital <br />
                        <span className="bg-linear-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"> experiences. </span>
                    </h1>
                </CustomTransition>
            </div>
        </section>

    )
}

export default HeroServices