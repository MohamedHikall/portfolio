import Experience from '@/Components/Experience/Experience'
import FeaturedWork from '@/Components/FeaturedWork/FeaturedWork'
import HomeHero from '@/Components/Home/HomeHero/HomeHero'
import ProjectsCards from '@/Components/Home/ProjectsCards/ProjectsCards'
import Testimonials from '@/Components/Home/Testimonials/Testimonials'

const Home = () => {

  return (

    <div className="w-full">
      <HomeHero />
      <ProjectsCards />
      <Experience />
      <FeaturedWork />
      <Testimonials />
    </div>

  )
}

export default Home