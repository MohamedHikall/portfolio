'use client'

import { faqData } from '@/data/about'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import { AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-32">

            <div className="container w-[92%] md:max-w-[50%] mx-auto">

                <div className="text-center mb-20">
                    <span className="text-sm uppercase tracking-widest text-gray-light/50 mb-4 block">Transparency</span>
                    <h2 className="text-5xl md:text-7xl font-bold">Common Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-white/1" >

                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 md:p-8 row-between-center text-left hover:bg-white/2 transition-colors" >

                                <span className="text-xl md:text-2xl font-bold pr-8">{item.question}</span>

                                <div className="p-2 border border-white/10 rounded-full">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>

                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <CustomTransition
                                        type='div'
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }} >

                                        <div className="px-6 md:px-8 pb-8 pt-2">
                                            <p className="text-gray-light text-lg leading-relaxed border-l-2 border-white/20 pl-6">
                                                {item.answer}
                                            </p>
                                        </div>

                                    </CustomTransition>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
