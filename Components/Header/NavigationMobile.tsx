"use client";
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Facebook, Instagram, Linkedin, Rocket, X } from 'lucide-react';
import Link from 'next/link';
import { NavigationData } from '@/data/navigationData';
import CustomTransition from '@/shared/CustomTransition/CustomTransition';

interface NavigationMobileProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const NavigationMobile = ({ isOpen, setIsOpen }: NavigationMobileProps) => {
    return (

        <AnimatePresence>
            {isOpen && (
                <>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60 lg:hidden" />

                    <CustomTransition
                        type='div'
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-gray z-70 lg:hidden col p-8 pt-6" >

                        <div className="row-between-center mb-12">

                            <div className="row-items-center gap-2 text-2xl font-black text-white">

                                <div className="bg-red p-1.5 md:p-2 rounded-lg md:rounded-xl row-center-center shadow-lg transition-transform duration-300 group-hover:rotate-6">
                                    <Rocket size={18} strokeWidth={2.5} className="text-white" />
                                </div>

                                <div className="row-items-center text-lg md:text-2xl text-white uppercase font-black tracking-tighter">
                                    <span>M</span>
                                    <span className="text-red">O</span>
                                    <span>HAMED</span>
                                </div>

                            </div>

                            <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer"> <X size={32} /> </button>
                        </div>

                        <nav className="col">
                            {NavigationData.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="row-between-center py-5 border-b last:border-0 border-white/10 text-xl font-medium text-white group" >
                                    <span>{item.title}</span>

                                    <div className="w-8 h-8 rounded border border-white/20 row-center-center group-hover:bg-white group-hover:text-black transition-all">
                                        <ChevronRight size={18} />
                                    </div>

                                </Link>
                            ))}
                        </nav>

                        <div className="mt-10">
                            <h4 className="text-white/70 text-sm font-bold uppercase tracking-tighter mb-4">Information</h4>

                            <div className="col gap-2 text-gray-light">
                                <a href="tel:+201068692087" className="hover:text-white transition-colors">+10 686 92087</a>
                                <a href="mailto:id.mohamed.dev@gmail.com" className="hover:text-white transition-colors">id.mohamed.dev@gmail.com</a>
                                <p className="leading-relaxed">Avenue de Roma 158b, Lisboa</p>
                            </div>

                        </div>

                        <div className="mt-auto pb-6">
                            <h4 className="text-white/70 text-sm font-bold uppercase tracking-tighter mb-4">Follow Us</h4>

                            <div className="row gap-4">
                                {[Instagram, Linkedin, Facebook].map((Icon, index) => (
                                    <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 row-center-center text-white hover:bg-white hover:text-black transition-all">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>

                        </div>
                    </CustomTransition>
                </>
            )}
        </AnimatePresence>

    )
}

export default NavigationMobile