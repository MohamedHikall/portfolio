import CustomTransition from "@/shared/CustomTransition/CustomTransition"

const HomeHero = () => {
    return (
        <section className='col md:relative w-full lg:w-[90%] xl:w-[75%] container mx-auto pt-24 md:pt-40 lg:pt-50 px-4 md:px-0'>

            <CustomTransition
                type='h2'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl w-full md:w-[70%] lg:w-[65%] text-white font-semibold leading-tight md:leading-snug lg:leading-tight md:ms-6 text-center md:text-left' >
                <span className="text-white/40">Creating bold visual</span> narratives that inspire and engage.
            </CustomTransition>

            <div className="row mt-12 md:mt-24 overflow-hidden py-4 md:py-6 px-4 md:px-10 w-full bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-full">

                <div className="row animate-ticker whitespace-nowrap gap-12 md:gap-20 text-white/30 font-medium tracking-widest text-sm md:text-xs uppercase">
                    <span>Next.js Development</span>
                    <span>UI Implementation</span>
                    <span>Tailwind CSS</span>
                    <span>Responsive Design</span>
                    <span>Frontend Architecture</span>
                    <span>Modern Web Apps</span>
                    <span>User Experience</span>
                    <span>Clean Code</span>
                    <span>Performance Optimization</span>
                </div>

            </div>

            <CustomTransition
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative mt-12 md:mt-0 md:absolute md:top-1/2 md:end-0 lg:end-10 md:-translate-y-1/2 w-full md:w-[320px] lg:w-[450px] aspect-video rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/10" >
                <video className="w-full h-full object-cover" loop muted autoPlay playsInline preload="metadata" poster="/images/video-placeholder.webp" >
                    <source src="https://html.aqlova.com/videos/bfolio/video.mp4" type="video/mp4" />
                </video>
            </CustomTransition>

        </section>
    )
}

export default HomeHero