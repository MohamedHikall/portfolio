'use client'

import { featuredProjects } from '@/data/mock/featuredProjectsData'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import FeaturedCard from '@/shared/FeaturedCard/FeaturedCard'

const ProjectGrid = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-20">

            {featuredProjects.map((project, index) => (

                <CustomTransition
                    type='div'
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }} >
                    <FeaturedCard {...project} />
                </CustomTransition>

            ))}
        </div>
    )
}

export default ProjectGrid