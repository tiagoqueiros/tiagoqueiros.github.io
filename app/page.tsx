import { content } from '@/config/content';
import Hero from '@/components/hero';
import Wave from "@/components/wave";

export default function HomePage() {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-[#1e40af] via-[#193783] to-[#152f6e] flex items-center justify-center p-4 overflow-hidden">
            <div className="relative z-10 w-full max-w-3xl">
                <Hero
                    profile={content.profile}
                    hero={content.hero}
                />
            </div>
            <Wave />
        </main>
    );
}

