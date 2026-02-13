'use client'

import { processes } from '@/data/process'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const Process = () => {
    return (

        <section className="py-32 bg-gray-dark/20 relative overflow-hidden">

            <div className="container w-[92%] md:max-w-[77%] mx-auto">

                <div className="mb-20">
                    <span className="text-sm uppercase tracking-widest text-gray-light/50 mb-4 block">How I Work</span>
                    <h2 className="text-5xl md:text-7xl font-bold">My Process</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {processes.map((step, index) => (
                        <CustomTransition
                            type='div'
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-8 border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-500 bg-white/2" >

                            <span className="text-4xl font-black opacity-10 block mb-6">{step.number}</span>
                            <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                            <p className="text-gray-light text-sm leading-relaxed"> {step.description} </p>
                            {index < processes.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />
                            )}
                        </CustomTransition>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Process