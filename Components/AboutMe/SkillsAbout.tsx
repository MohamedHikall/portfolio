'use client'

import { skillCategories } from '@/data/about'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const SkillsAbout = () => {
    return (
        <section className="py-32">
            <div className="container w-[92%] md:max-w-[77%] mx-auto">
                <div className="text-center mb-20">
                    <span className="text-sm uppercase tracking-widest text-gray-light/50 mb-4 block">Abilities</span>
                    <h2 className="text-5xl md:text-7xl font-bold">The Technical Arsenal</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {skillCategories.map((cat, catIndex) => (

                        <CustomTransition
                            type='div'
                            key={cat.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="p-10 rounded-3xl border border-white/5 bg-white/1 hover:bg-white/3 transition-all duration-500" >

                            <h3 className="text-2xl font-bold mb-10 text-center md:text-left border-b border-white/10 pb-4"> {cat.category} </h3>

                            <div className="col gap-6">

                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className="row-items-center gap-6 group">
                                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300"> {skill.icon} </div>
                                        <span className="text-lg text-gray-light group-hover:text-white transition-colors"> {skill.name} </span>
                                    </div>
                                ))}
                            </div>

                        </CustomTransition>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsAbout