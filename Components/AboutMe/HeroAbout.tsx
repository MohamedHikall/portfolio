'use client'

import { socialLinks } from '@/data/contactData'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import Image from 'next/image'

const HeroAbout = () => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="container w-[92%] md:max-w-[77%] mx-auto">
                <div className="col lg:row items-center gap-16">

                    <CustomTransition
                        type='div'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 aspect-square relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 group" >

                        <div className="absolute inset-0 flex items-center justify-center text-gray-light/20 text-xl italic group-hover:text-gray-light/40 transition-colors">
                            <Image src="/images/personal-placeholder.png" alt="Mohamed Haikal" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  className="object-cover opacity-0 group-hover:opacity-10 transition-opacity" />
                            <span>Your Image Here</span>
                        </div>

                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                    </CustomTransition>

                    <div className="w-full lg:w-1/2">
                        <CustomTransition
                            type='div'
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}

                            transition={{ duration: 0.8, delay: 0.2 }} >
                            <h5 className="text-xl md:text-2xl text-gray-light mb-6">About Me</h5>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                Transforming Code into <br />
                                <span className="bg-linear-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent italic">Digital Art.</span>
                            </h1>

                            <p className="text-xl text-gray-light leading-relaxed mb-10">
                                I am an independent creative developer focused on crafting high-end digital experiences. I specialize in building pixel-perfect, smooth, and high-performance web applications using modern technologies.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">

                                {socialLinks.map((link) => (
                                    <a key={link.id} href={link.href} target='_blank' className="row-items-center gap-4 text-gray-light hover:text-white transition-colors cursor-pointer">
                                        <link.icon className="w-5 h-5" />
                                        <span>{link.label}</span>
                                    </a>
                                ))}

                            </div>
                        </CustomTransition>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroAbout
