'use client'

import { features } from "@/data/features"
import CustomTransition from "@/shared/CustomTransition/CustomTransition"

const Features = () => {
    return (

        <section className="py-32 border-y border-white/10">

            <div className="container w-[92%] lg:max-w-[77%] mx-auto">

                <div className="col lg:row items-center gap-20">

                    <div className="lg:w-1/2">
                        <span className="text-sm uppercase tracking-widest text-gray-light/50 mb-4 block">Value</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">Why Work <br /> With Me?</h2>
                        <p className="text-xl text-gray-light leading-relaxed">
                            I combine technical excellence with creative vision to deliver digital products that don&apos;t just work—they excel.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid gap-6">

                        {features.map((item, index) => (
                            <CustomTransition
                                type='div'
                                key={item.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="row-items-start gap-6 p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 transition-colors" >
                                <div className="p-3 bg-white/5 rounded-xl text-white"> {item.icon} </div>

                                <div>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-light text-sm">{item.description}</p>
                                </div>

                            </CustomTransition>
                        ))}
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Features