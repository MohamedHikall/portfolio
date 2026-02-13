'use client'

import { skillsData } from '@/data/mock/skillsData'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const Skills = () => {
  return (
   
      <section className="py-32">

          <div className="container w-[92%] md:max-w-[77%] mx-auto">

              <div className="text-center mb-20">
                  <span className="text-sm uppercase tracking-[0.3em] text-gray-light/50 mb-4 block">Arsenal</span>
                  <h2 className="text-5xl md:text-7xl font-bold">Tech Stack</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {skillsData.map((tech, index) => (
                      <CustomTransition
                          type='div'
                          key={tech.id}
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group col-center-center p-8 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/10 hover:border-white/20 transition-all duration-300" >
                          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"> {tech.icon} </div>
                          <span className="text-sm font-medium text-gray-light">{tech.name}</span>
                      </CustomTransition>
                  ))}
              </div>

          </div>
      </section>

  )
}

export default Skills