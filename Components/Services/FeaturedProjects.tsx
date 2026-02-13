'use client'

import { featuredProjects } from '@/data/mock/featuredProjectsData'
import CustomButton from '@/shared/CustomButton/CustomButton'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import FeaturedCard from '@/shared/FeaturedCard/FeaturedCard'

const FeaturedProjects = () => {
    return (

        <section className="py-32">

            <div className="container w-[92%] md:max-w-[77%] mx-auto">

                <div className="col lg:row-between-end mb-16">

                    <div>
                        <span className="text-sm uppercase tracking-widest text-gray-light/50 mb-4 block">Portfolio</span>
                        <h2 className="text-5xl md:text-7xl mb-10 lg:mb-0 font-bold">Featured Projects</h2>
                    </div>

                    <div className="hidden md:block">
                        <CustomButton href='/profile' title="View All Projects" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredProjects.map((project, index) => (
                        <CustomTransition
                            type='div'
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }} >
                            <FeaturedCard {...project} />
                        </CustomTransition>
                    ))}
                </div>

                <div className="md:hidden mt-12 text-center">
                    <CustomButton type='button' title="View All Projects" />
                </div>

            </div>
        </section>

    )
}

export default FeaturedProjects