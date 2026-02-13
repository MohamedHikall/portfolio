import { ExperienceCardProps } from '@/types/experienceCard'

const ExperienceCard = ({ experience }: { experience: ExperienceCardProps }) => {
    return (

        <div className="bg-gray rounded-3xl py-8 px-6 md:py-10 md:px-12 text-white h-full border border-white/10">

            <div className="col h-full">

                <div className="grow">
                    <span className="text-gray-light text-sm md:text-base block mb-2 font-light"> {experience.year} </span>
                    <h3 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4 leading-tight"> {experience.title} </h3>
                </div>

                <div className="mt-10 md:mt-12 row-between-end w-full">

                    <div className="row flex-wrap gap-2 md:gap-3">
                        {experience.tags.map((tag) => (
                            <span
                                key={tag.id}
                                className="px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs uppercase tracking-wider rounded-full border border-white/10 text-gray-light">
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <span className="text-lg md:text-xl font-light text-white/30"> {experience.index} </span>

                </div>

            </div>
        </div>
    )
}
export default ExperienceCard
