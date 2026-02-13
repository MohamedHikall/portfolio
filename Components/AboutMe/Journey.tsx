'use client'

import { journeyData } from '@/data/about'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const Journey = () => {
    return (
        <section className="py-32 bg-white/2">

            <div className="container w-[92%] md:max-w-[77%] mx-auto">

                <div className="mb-20">
                    <span className="text-sm uppercase tracking-widest text-gray-light/50 mb-4 block">Evolution</span>
                    <h2 className="text-5xl md:text-7xl font-bold">My Learning Path</h2>
                </div>

                <div className="relative">

                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-20 md:space-y-32">
                        {journeyData.map((item, index) => (

                            <CustomTransition
                                type='div'
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative col md:row-items-center gap-8 ${index % 2 === 0 ? 'md:row' : 'md:flex-row-reverse'}`} >

                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-white border-4 border-black -translate-x-1/2 hidden md:block z-10" />

                                <div className="w-full md:w-1/2">

                                    <div className={`p-8 rounded-3xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                        <span className="text-sm text-gray-light/40 block mb-4 italic">{item.year}</span>
                                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-gray-light leading-relaxed"> {item.description} </p>
                                    </div>

                                </div>

                                <div className="hidden md:block w-1/2" />

                            </CustomTransition>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey


