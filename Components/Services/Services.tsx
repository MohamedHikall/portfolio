'use client'

import { services } from '@/data/services'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'
import { ArrowUpRight } from 'lucide-react'

const Services = () => {
  return (
    
      <section className="py-20 border-t border-white/10">

          <div className="container w-[92%] md:max-w-[77%] mx-auto">

              <div className="col">

                  {services.map((service, index) => (

                      <CustomTransition
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group col md:row py-16 border-b border-white/10 hover:bg-white/2 transition-all duration-500 px-4" >

                          <div className="row-items-center gap-8 md:w-1/4 mb-8 md:mb-0">
                              <span className="text-2xl font-light text-gray-light/30">{service.id}</span>

                              <div className="p-4 border border-white/10 rounded-full group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                                  {service.icon}
                              </div>

                          </div>

                          <div className="md:w-2/4">
                              <h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-300">
                                  {service.title}
                              </h3>
                              <p className="text-gray-light text-xl leading-relaxed mb-8">
                                  {service.description}
                              </p>

                              <div className="row flex-wrap gap-3">
                                  {service.tags.map(tag => (
                                      <span key={tag} className="py-2 px-5 border border-white/10 rounded-full text-sm font-medium text-gray-light/80 hover:border-white/40 transition-colors">
                                          {tag}
                                      </span>
                                  ))}
                              </div>

                          </div>

                          <div className="md:w-1/4 row-center-end mt-12 md:mt-0 ">

                              <div className="w-16 h-16 rounded-full border border-white/10 row-center-center group-hover:scale-115 group-hover:bg-white group-hover:text-black transition-all duration-500 rotate-0 group-hover:rotate-45 cursor-pointer">
                                  <ArrowUpRight size={30} />
                              </div>

                          </div>
                      </CustomTransition>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Services