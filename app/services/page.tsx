import CTA from '@/shared/CTA/CTA';
import Skills from '@/Components/Services/Skills';
import Services from '@/Components/Services/Services';
import Process from '@/Components/Services/Process';
import FeaturedProjects from '@/Components/Services/FeaturedProjects';
import Features from '@/Components/Services/Features';
import HeroServices from '@/Components/Services/HeroServices';

const ServicesPage = () => {

    return (
        <div className="min-h-screen pb-32">
            <HeroServices />
            <Services />
            <Process />
            <Skills />
            <Features />
            <FeaturedProjects />
            <CTA />
        </div>
    );
};

export default ServicesPage;