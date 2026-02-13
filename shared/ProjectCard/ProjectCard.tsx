import { useTransform } from 'framer-motion';
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectCardProps } from '@/types/projectCard';
import CustomTransition from '../CustomTransition/CustomTransition';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, i, tags, progress, range, targetScale }: ProjectCardProps) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    const isEven = i % 2 === 0;

    return (
        <div ref={container} className="h-[90vh] md:h-screen row-center-center sticky top-0 px-4 md:px-10">

            <CustomTransition
                type='div'
                style={{ scale, top: `calc(-5% + ${i * 25}px)` }}
                className="relative h-[80vh] md:h-[75vh] w-full max-w-7xl rounded-3xl overflow-hidden bg-zinc-900 border border-white/5" >

                <div className={`h-full col ${isEven ? 'md:row' : 'md:flex-row-reverse'} items-stretch`}>

                    {/* Text Content */}
                    <div className={`flex-1 p-8 md:p-16 lg:p-20 z-20 col justify-center ${isEven ? 'items-start text-left' : 'items-start md:items-end md:text-right'}`}>

                        <span className="text-red text-xs md:text-xs font-black uppercase tracking-widest mb-4 block"> Project 0{i + 1} </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tighter mb-6 md:mb-8 group-hover:italic transition-all">
                            {project.title}
                        </h2>

                        <div className={`row flex-wrap gap-2 md:gap-3 mb-8 ${!isEven && 'md:flex-row-reverse'}`}>
                            {tags && tags.map((tag, index) => (
                                <span key={index} className="text-[9px] md:text-xs text-nowrap border border-white/10 px-3 py-1 rounded-full text-white/40 uppercase tracking-widest bg-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={`/projects/${project.id}`}
                            className={`inline-flex items-center gap-4 text-white hover:text-red transition-all group/link ${!isEven && 'md:flex-row-reverse'}`}>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">View Project</span>
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 row-center-center group-hover/link:bg-red group-hover/link:border-red group-hover/link:translate-x-1 transition-all">
                                <ArrowRight size={16} className={`${!isEven ? 'md:rotate-180' : ''} text-white`} />
                            </div>
                        </Link>

                    </div>

                    {/* Image Section */}
                    <div className="flex-1 relative order-first md:order-0 h-[40%] md:h-auto overflow-hidden">

                        <div className={`absolute inset-0 m-4 md:m-8 lg:m-12 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105`}>
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:bg-linear-to-tr" />
                        </div>

                    </div>

                </div>
            </CustomTransition>
        </div>
    );
};
export default ProjectCard