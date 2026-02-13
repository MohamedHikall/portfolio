'use client'

import Image from 'next/image'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import { FeaturedProjects } from '@/types/featuredProjects'

interface ProjectHeroProps {
    project: FeaturedProjects
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
    return (
        <CustomTransition type='div'>
            <section className="relative min-h-screen w-full row-items-center overflow-hidden pt-20">
                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <CustomTransition
                        type='div'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="space-y-8" >

                        <div className="space-y-4">
                            <CustomTransition
                                type='div'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="row-items-center gap-3 text-red font-black uppercase tracking-widest text-xs" >

                                <span className="w-10 h-0.5 bg-red"></span>
                                {project?.type}
                            </CustomTransition>

                            <CustomTransition
                                type='h1'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-5xl md:text-8xl font-black uppercase leading-16 md:leading-24 tracking-tighter">
                                {project?.title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}

                            </CustomTransition>

                        </div>
                    </CustomTransition>

                    <CustomTransition
                        type='div'
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="relative" >

                        <div className="relative aspect-4/5 md:aspect-square w-full rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)] group">
                            <Image src={project?.image} alt={project?.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" priority />

                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 row items-end p-8">
                                <span className="text-xs uppercase tracking-widest font-bold">Main Visual // 01</span>
                            </div>

                        </div>

                        <div className="hidden md:absolute -bottom-10 -right-10 w-40 h-40 bg-red/20 blur-[80px] -z-10 rounded-full" />
                        <div className="hidden md:absolute -top-10 -left-10 w-40 h-40 bg-blue-500/40 blur-[80px] -z-10 rounded-full" />
                    </CustomTransition>
                </div>

                <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:col items-center gap-8">
                    <span className="[writing-mode:vertical-lr] text-xs uppercase tracking-widest text-gray-light font-bold text-nowrap">Scroll to Explore</span>
                    <div className="w-0.5 h-32 bg-linear-to-b from-white/20 to-transparent"></div>
                </div>
            </section>
        </CustomTransition>
    )
}

export default ProjectHero
