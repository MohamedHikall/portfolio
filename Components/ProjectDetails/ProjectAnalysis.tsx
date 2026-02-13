'use client'

import { FeaturedProjects } from '@/types/featuredProjects'

interface ProjectAnalysisProps {
    project: FeaturedProjects
}

const ProjectAnalysis = ({ project }: ProjectAnalysisProps) => {
    return (
        <section className="py-30 md:py-48 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="col lg:row items-start gap-12">
                        <div className="col">
                            <h2 className="text-red text-sm uppercase tracking-widest font-black italic mb-2">Introduction</h2>
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight"> Crafting the <br /> Digital Experience. </h3>
                        </div>
                        <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light"> {project.description} </p>
                    </div>

                    <div className="pt-20 border-t border-white/5">
                        <div className="row-items-center flex-wrap gap-x-12 gap-y-8">
                            <span className="text-xs uppercase tracking-widest text-white/20 font-bold w-full lg:w-auto mb-4 lg:mb-0">Core Technologies</span>
                            {project.technologies.map((tech, index) => (
                                <div key={index} className="row-items-center gap-3">
                                    <span className="text-red text-xs font-black">0{index + 1}</span>
                                    <span className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-white/80">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectAnalysis
