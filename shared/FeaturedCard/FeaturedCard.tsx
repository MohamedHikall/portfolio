import Image from 'next/image'
import Link from 'next/link'
import { FeaturedCardProps } from '@/types/featuredCard'

const FeaturedCard = ({ id, image, title, year, type }: FeaturedCardProps) => {
    return (

        <Link href={`/projects/${id}`} className="col cursor-pointer w-full lg:max-w-[708px] group">

            <div className="relative w-full aspect-square overflow-hidden rounded-2xl">

                <Image
                    className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 708px" />

                <div className='absolute w-full top-1/2 left-1/2 -translate-1/2 bg-black/80 backdrop-blur-sm h-12 row-center-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-center z-10'>
                    <span className='text-white text-xl font-black uppercase tracking-widest'>{type}</span>
                </div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

            </div>

            <div className="row-between-center mt-6">
                <span className='text-xl md:text-2xl font-black text-white uppercase tracking-tighter truncate transition-colors'>{title}</span>
                <span className='text-lg text-gray-light font-medium'>/{year}</span>
            </div>

        </Link>

    )
}

export default FeaturedCard