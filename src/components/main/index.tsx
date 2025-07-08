import Hero from "./Hero";
import NavBar from "./NavBar";
import StarsBackground from "./StarsBackground";

export default function LandingPage() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="fixed rotate-180 top-0 left-0 w-full h-full object-cover z-[-1]  translate-y-[-38vh] lg:translate-y-[-40vh]"
            >
                <source src="/videos/blackhole.webm" type="video/webm" />
                Seu navegador não suporta vídeos em background.
            </video>

            <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-0" />

            <StarsBackground length={120} />

            <NavBar />

            <main className="relative z-10 pt-[65px]">
                <Hero />
            </main>
        </div>
    );
}
