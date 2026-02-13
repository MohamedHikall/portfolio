'use client'
import { useScroll } from 'framer-motion';
import { useRef } from 'react'
import ProjectCard from '../../../shared/ProjectCard/ProjectCard';
import { featuredProjects } from '@/data/mock/featuredProjectsData';

const ProjectsCards = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const projects = featuredProjects.map(p => ({
    id: p.id,
    src: p.image,
    title: p.title,
    tags: p.technologies
  }));

  return (

    <>

      <h1 className="text-white text-4xl md:text-9xl pt-30 md:pt-50 font-extrabold uppercase tracking-tighter text-center">
        <span className="text-white">Selected </span>
        <span className="bg-linear-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"> work© </span>
      </h1>

      <div ref={containerRef}>
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <ProjectCard key={i} i={i} project={project} tags={project.tags} progress={scrollYProgress} range={[i * (1 / projects.length), (i + 1) * (1 / projects.length)]} targetScale={targetScale} />
          )
        })}
      </div>

    </>
  );
};

export default ProjectsCards;