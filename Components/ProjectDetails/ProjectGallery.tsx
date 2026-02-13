'use client'

import Image from 'next/image'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import { FeaturedProjects } from '@/types/featuredProjects'

interface ProjectGalleryProps {
    project: FeaturedProjects
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
    if (!project.gallery || project.gallery.length === 0) return null

    return (
        <section className="md:pb-60">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-6xl mb-20 font-black uppercase tracking-tighter text-center"> Visual <span className="text-red italic">Showcase</span> </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.gallery.map((img, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <CustomTransition
                                type='div'
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`relative group ${isEven ? 'md:mt-0' : 'md:mt-40'}`} >

                                <div className="relative aspect-16/10 md:aspect-4/3 w-full rounded-2xl overflow-hidden border border-white/5 bg-gray/20">
                                    <Image src={img} alt={`Gallery ${index}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </CustomTransition>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectGallery
