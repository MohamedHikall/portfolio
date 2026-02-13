'use client'

import { useParams } from 'next/navigation'
import { featuredProjects } from '@/data/mock/featuredProjectsData'
import ProjectAnalysis from '../../../Components/ProjectDetails/ProjectAnalysis'
import ProjectGallery from '../../../Components/ProjectDetails/ProjectGallery'
import ProjectFooter from '../../../Components/ProjectDetails/ProjectFooter'
import ProjectHero from '../../../Components/ProjectDetails/ProjectHero'

const ProjectDetails = () => {
    const params = useParams()
    const id = params.id as string
    const project = featuredProjects.find(p => p.id.toString() === id)

    if (!project) return null;

    return (
        <div className="selection:text-white">
            <ProjectHero project={project} />
            <ProjectAnalysis project={project} />
            <ProjectGallery project={project} />
            <ProjectFooter />
        </div>
    )
}

export default ProjectDetails


