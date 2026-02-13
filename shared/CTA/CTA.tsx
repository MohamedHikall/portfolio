'use client'

import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import Link from 'next/link'

const CTA = () => {
    return (

        <section className="py-32 border-t border-white/10">

            <div className="container w-[92%] md:max-w-[77%] mx-auto text-center">

                <CustomTransition
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} >

                    <h2 className="text-5xl lg:text-[8rem] font-black tracking-tighter uppercase mb-12 leading-none">
                        LET&apos;S <span className="italic text-gray-light opacity-50">CREATE</span> <br /> TOGETHER
                    </h2>

                    <Link
                        href="/contact-me"
                        className="inline-block py-4 px-8 lg:py-8 lg:px-16 bg-white text-black hover:bg-gray-light rounded-full font-bold text-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                        START A PROJECT
                    </Link>

                </CustomTransition>
            </div>
        </section>


    )
}

export default CTA