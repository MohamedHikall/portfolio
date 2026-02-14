import RotatingText from '@/shared/RotatingText/RotatingText'
import Image from 'next/image'

const ContactHero = () => {

    return (

        <div className="col space-y-4 md:space-y-0">

            <h5 className='text-center md:text-start text-xl mb-20 lg:mb-0 md:text-3xl' >Contact me</h5>

            <div className="col lg:row items-center gap-6 md:gap-12">
                <h2 className='text-6xl md:text-8xl font-bold text-center md:text-start leading-12 md:leading-8' >Let`s talk</h2>
                <Image className='hidden md:block rounded-full object-cover w-62 h-32' src="/avatar/avatar-5.jpg" width={200} height={200} alt="arrow" />
            </div>

            <div className="col-center-center lg:row-between-center gap-4 md:mt-12 lg:-mt-6">
                <h2 className='text-5xl lg:text-8xl text-center md:text-start leading-12 md:leading-8 font-bold' >about your project</h2>

                <div className="row-center-center scale-95 md:scale-100">
                    <RotatingText text={'Applications • Website • Mobile •'} size='w-36 h-36' imgSize='w-22 h-22' radius={40} fontSize='text-[9px]' image={<svg className='text-gray' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> <line x1="7.05" y1="7.05" x2="16.95" y2="16.95"></line> <line x1="7.05" y1="16.95" x2="16.95" y2="7.05"></line> </svg>} />
                </div>

            </div>

            <div className="col-between-start lg:row-between-center gap-3 mt-10 w-full lg:max-w-[80%]">

                <div className="col">
                    <label className='text-gray-light font-medium text-lg md:text-2xl'>Email Me:</label>
                    <span className='text-2xl md:text-5xl font-medium text-start' >id.mohamed.dev@gmail.com</span>
                </div>

                <span className='text-white/80 text-start text-lg md:text-xl leading-relaxed lg:max-w-[35%]' >Interested in working with me? Submit your project inquiry using the form below.</span>

            </div>

        </div>

    )
}

export default ContactHero