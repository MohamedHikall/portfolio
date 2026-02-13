"use client";
import { NavigationData } from "@/data/navigationData";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Zap } from "lucide-react";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavigationMobile from './NavigationMobile';
import CustomTransition from "@/shared/CustomTransition/CustomTransition";

const Header = () => {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const desktopWidth = useTransform(scrollY, [0, 100], ["70%", "100%"]);
    const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(33, 33, 36, 0.0)", "rgba(33, 33, 36, 0.8)"]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (

        <CustomTransition
            type='header'
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            style={{ backgroundColor, width: isMobile ? "100%" : desktopWidth, x: "-50%" }}
            className="fixed left-1/2 top-0 py-3 md:py-4 backdrop-blur-lg z-50 transition-all w-full md:w-auto" >

            <div className="container mx-auto px-4 md:px-10">

                <div className="row-between-center">

                    <CustomTransition type='div' whileHover={{ scale: 1.02 }} >

                        <Link href='/' className='row-items-center gap-2 md:gap-3 group cursor-pointer'>
                            <div className="bg-red p-1.5 md:p-2 rounded-lg md:rounded-xl row-center-center shadow-lg transition-transform duration-300 group-hover:rotate-6">
                                <Rocket size={18} strokeWidth={2.5} className="text-white" />
                            </div>

                            <div className="row-items-center text-lg md:text-2xl text-white uppercase font-black tracking-tighter">
                                <span>M</span>
                                <span className="text-red">O</span>
                                <span>HAMED</span>
                            </div>
                        </Link>

                    </CustomTransition>

                    <nav className="hidden lg:row-items-center gap-8">
                        {NavigationData.map((item) => (
                            <Link
                                key={item.id}
                                href={`${item.href}`}
                                className="font-medium text-white hover:text-gray-400 transition-colors relative group" >
                                {item.title}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    <NavigationMobile isOpen={isOpen} setIsOpen={setIsOpen} />

                    <div className="row-items-center gap-3">

                        <Link href='/contact-me'>
                            <CustomTransition
                                type='button'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="row-items-center gap-2 bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm shadow-xl cursor-pointer" >
                                <Zap size={14} strokeWidth={3} className='text-red fill-red' />
                                <span className="block">Let&apos;s talk</span>
                            </CustomTransition>
                        </Link>

                        <div className="lg:hidden text-white cursor-pointer" onClick={toggleMenu} >

                            <div className="w-10 h-10 bg-white/10 rounded-full row-center-center">

                                <div className="col-center-center gap-1.5 relative h-full w-full">

                                    <motion.span
                                        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-5 h-0.5 bg-white block"
                                    ></motion.span>

                                    <motion.span
                                        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-5 h-0.5 bg-white block"
                                    ></motion.span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </CustomTransition>
    );
};

export default Header;