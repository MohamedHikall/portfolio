
import ExperienceCard from '@/shared/ExperienceCard/ExperienceCard';
import RotatingText from '@/shared/RotatingText/RotatingText';
import experiences from '@/data/mock/experienceCardData';
import CustomButton from '@/shared/CustomButton/CustomButton';

const Experience = () => {

    return (

        <div className="container mx-auto px-6 pt-24 md:pt-40 lg:pt-60">

            <div className="col md:row md:justify-between items-center gap-10">

                <div className="row justify-center scale-90 md:scale-100">
                    <RotatingText
                        text={'UI/UX SPECIALIST • PIXEL PERFECT DESIGN • '}
                        size='w-32 h-32 md:w-40 md:h-40'
                        imgSize='w-12 h-12 md:w-24 md:h-24'
                        radius={50}
                        fontSize='text-[7px]'
                        image={<svg className='w-full h-full p-4' viewBox="0 0 38 54" fill="none" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M0 36.0005H18.9001V53.9999L0 36.0005Z" fill="currentColor"></path> <path d="M18.9001 18H0V35.9994H37.8003L18.9001 18Z" fill="currentColor" fillOpacity="0.6"></path> <path d="M0 0L18.9001 17.9994H37.8003V0H0Z" fill="currentColor" fillOpacity="0.4"></path> </svg>}
                    />
                </div>

                <h2 className="w-full md:w-[65%] lg:w-[55%] text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight font-bold tracking-tight text-white">
                    Helping brands achieve <span className="text-gray-light italic">digital mastery</span> through innovation and strategic planning.
                </h2>

            </div>

            <div className="col sm:row justify-center items-center mt-12 md:mt-20 gap-4 sm:gap-6">
                <CustomButton href='/about-me' variant='primary' title='About me' />
                <CustomButton href='/projects' variant='outline' title='View all works' />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-32">
                {experiences.map((item) => (
                    <ExperienceCard key={item.id} experience={item} />
                ))}
            </div>

        </div>

    );
}

export default Experience


