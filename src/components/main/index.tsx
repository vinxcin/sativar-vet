import Hero from "./Hero";
import MediaBackground from "./MediaBackground";
import NavBar from "./NavBar";
import StarsBackground from "./StarsBackground";

export default function LandingPage() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <MediaBackground/>

            <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-0" />

            <StarsBackground length={120} />

            <NavBar />

            <main className="relative z-10 pt-[65px]">
                <Hero />
            </main>
        </div>
    );
}
