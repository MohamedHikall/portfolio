import { featuredCardData } from '@/data/mock/featuredCardData';
import CustomButton from '@/shared/CustomButton/CustomButton';
import CustomTransition from '@/shared/CustomTransition/CustomTransition';
import FeaturedCard from '@/shared/FeaturedCard/FeaturedCard';

const FeaturedWork = () => {

    return (

        <section className="pt-24 md:pt-40 lg:pt-60">

            <div className="border-y border-white/5 bg-zinc-900/10 backdrop-blur-3xl py-8 md:py-16">

                <div className="container mx-auto px-4 md:px-6">

                    <CustomTransition
                        type='div'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="col md:row md:justify-between items-center w-full max-w-5xl mx-auto text-white/40 uppercase text-xs tracking-widest gap-4 mb-8 md:mb-12">
                        <span className="font-bold">Featured work©</span>
                        <div className="hidden md:block h-px flex-1 bg-white/5 mx-10"></div>
                        <span className="font-bold">Creative Development</span>
                    </CustomTransition>

                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[140px] font-black leading-snug tracking-tighter uppercase wrap-break-word">
                            <span className="text-white block md:inline">Featured </span>
                            <span className="bg-linear-to-r from-white via-white/80 to-gray bg-clip-text text-transparent italic"> work© </span>
                        </h1>
                    </div>

                </div>

            </div>

            <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-32">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20">

                    {featuredCardData.map((card) => (
                        <FeaturedCard key={card.id} {...card} />
                    ))}

                </div>

                <div className="w-fit mx-auto mt-16 md:mt-24">
                    <CustomButton href='/projects' variant='primary' title='Explore all projects' />
                </div>

            </div>

        </section>
    );
};

export default FeaturedWork;