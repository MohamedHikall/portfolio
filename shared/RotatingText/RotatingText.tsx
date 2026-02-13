'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

interface RotatingTextProps {
    text: string;
    image: string | React.ReactNode;
    size?: string;
    imgSize?: string;
    radius?: number;
    fontSize?: string;
}

const RotatingText = ({ text, image, size = "w-64 h-64", imgSize = "w-40 h-40", radius = 45, fontSize = "text-[7px]" }: RotatingTextProps) => {

    return (
        <div className={`relative flex items-center justify-center ${size}`}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className='absolute inset-0' >
                <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible"> <defs> <path id="circlePath" d={`M 60, 60 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} /> </defs>
                    <text fill="gray" className={`${fontSize} uppercase tracking-[4px] font-medium`}>
                        <textPath xlinkHref="#circlePath">{text}</textPath>
                    </text>
                </svg>
            </motion.div>

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${imgSize} row-center-center`}>
                {typeof image === 'string' ? (
                    <Image className='w-full h-full object-cover rounded-full' src={image} alt='user' width={200} height={200} />
                ) : (
                    image
                )}
            </div>
        </div>
    );
}

export default RotatingText