import HeroAbout from '@/Components/AboutMe/HeroAbout'
import Journey from '@/Components/AboutMe/Journey'
import SkillsAbout from '@/Components/AboutMe/SkillsAbout'
import Philosophy from '@/Components/AboutMe/Philosophy'
import FAQ from '@/Components/AboutMe/FAQ'
import CTA from '@/shared/CTA/CTA'
import CustomTransition from '@/shared/CustomTransition/CustomTransition'

const AboutMe = () => {

    return (

        <CustomTransition
            type='div'
            className="min-h-screen bg-black text-white">
            <HeroAbout />
            <Journey />
            <SkillsAbout />
            <Philosophy />
            <FAQ />
            <div className="pb-20"> <CTA /> </div>
        </CustomTransition>

    )
}

export default AboutMe
