'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {content} from '@/config/content';

interface HeroProps {
    profile: typeof content.profile;
    hero: typeof content.hero;
}

export default function Hero({profile, hero}: HeroProps) {
    return (
        <motion.section
            initial={{opacity: 0, y: 8}}
            animate={{opacity: 1, y: 0}}
            transition={{
                duration: 0.9,
                y: {
                    duration: 0.8,
                    ease: [0.1, 0.45, 0.2, 1],
                },
                opacity: {duration: 0.4},
            }}
        >
            <div className="relative max-w-[800px] rounded-3xl bg-[#1B2542] p-8 sm:p-12 backdrop-blur-xl">
                <div className="flex flex-col gap-8">
                    {/* Header */}
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-8 sm:gap-x-8 items-start">
                        <div className="flex flex-col gap-5">
                        <span className="text-xs sm:text-sm font-medium text-blue-400 uppercase tracking-wide">
                            {profile.role}
                        </span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white">
                                {hero.greeting}{" "}
                                <span className="text-[#4E89E8]">{profile.name}</span>
                            </h1>
                            <p className="text-[#94A3B8] text-base">
                                {profile.location} • {hero.tagline}
                            </p>
                        </div>

                        <div className="h-40 w-40 sm:h-36 sm:w-36 overflow-hidden rounded-2xl mx-auto sm:mx-0">
                            <Image
                                src={profile.image.url}
                                alt={profile.image.alt}
                                width={160}
                                height={160}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <p className="text-white text-base leading-relaxed">
                            {profile.bio}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3 sm:flex-row pt-2">
                        <Link
                            href={hero.links.linkedin.url}
                            target="_blank"
                            className="flex h-20 sm:h-14 p-3 flex-1 items-center justify-center gap-3 rounded-xl bg-[#2A3655] hover:bg-[#2F3C5F] text-white text-base font-medium transition-colors"
                        >
                            <FaLinkedin className="h-5 w-5"/>
                            <span>{hero.links.linkedin.label}</span>
                        </Link>
                        <Link
                            href={hero.links.github.url}
                            target="_blank"
                            className="flex h-20 sm:h-14 p-3 flex-1 items-center justify-center gap-3 rounded-xl bg-[#2A3655] hover:bg-[#2F3C5F] text-white text-base font-medium transition-colors"
                        >
                            <FaGithub className="h-5 w-5"/>
                            <span>{hero.links.github.label}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
} 