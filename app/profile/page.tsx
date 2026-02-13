import PortfolioHero from '@/Components/Portfolio/PortfolioHero';
import ProjectGrid from '@/Components/Portfolio/ProjectGrid';
import CustomTransition from '@/shared/CustomTransition/CustomTransition';

const Profile = () => {

    return (

        <CustomTransition
            type='div'
            className='min-h-screen overflow-hidden'
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}>

            <section className="pt-30 md:pt-40">

                <PortfolioHero />

                <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">

                    <ProjectGrid />

                    <div className="mt-32 text-center border-t border-white/5 pt-20">
                        <p className="text-gray-light/30 text-2xl italic">More projects in development...</p>
                    </div>
                </div>

            </section>

        </CustomTransition>

    );
};

export default Profile;