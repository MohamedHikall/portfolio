'use client'

import { philosophyData } from '@/data/about'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const Philosophy = () => {
    return (
        <section className="py-32 border-y border-white/10">

            <div className="container w-[92%] md:max-w-[77%] mx-auto">

                <div className="col md:row items-center gap-20">

                    <div className="md:w-1/2">
                        <span className="text-sm uppercase tracking-widest text-gray-light/50 mb-4 block">Values</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">Development Philosophy</h2>
                        <p className="text-xl text-gray-light leading-relaxed"> I believe in building for the long term. My approach combines technical durability with aesthetic elegance. </p>
                    </div>

                    <div className="md:w-1/2 grid gap-8">
                        {philosophyData.map((item, index) => (
                            <CustomTransition
                                type='div'
                                key={item.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="row-items-start gap-6 p-8 rounded-3xl bg-white/3 border border-white/5 hover:border-white/10 transition-all duration-300" >

                                <div className="p-4 bg-white/5 rounded-2xl text-white"> {item.icon} </div>

                                <div>
                                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                    <p className="text-gray-light leading-relaxed">{item.description}</p>
                                </div>

                            </CustomTransition>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
