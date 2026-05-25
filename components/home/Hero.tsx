import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[700px] overflow-hidden bg-[#1a1a1a]">

            {/* ── Background machine image ── */}
            <div className="absolute inset-0 w-full">
                <Image
                    src="/hero-banner.png"
                    alt="High-speed sublimation printing machine"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                    style={{ filter: "brightness(0.82) contrast(1.05)" }}
                />
                {/* bottom fog so the card reads cleanly against the photo */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#efefed]/65 to-transparent" />
            </div>

            {/* ── Floating content card ── */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center px-4 pb-8 sm:pb-10 md:pb-12">
                <div
                    className="
                w-full max-w-5xl
                flex flex-col gap-6
                sm:flex-row sm:items-center sm:justify-between sm:gap-8
                bg-gray-100 backdrop-blur-sm
                rounded-2xl
                px-6 py-7 sm:px-10 sm:py-9
                shadow-[0_8px_48px_rgba(0,0,0,0.13)]
                border border-white/50
                animate-fade-up
              "
                >
                    {/* Left — headline + sub-copy */}
                    <div className="flex-1 min-w-0">
                        <h1
                            className="
                    font-extrabold leading-[1.1] tracking-tight text-[#111]
                    text-[clamp(1.7rem,4.5vw,2.85rem)]
                    uppercase
                  "
                            style={{ fontFamily: "'Barlow Condensed', 'DIN Condensed', ui-sans-serif, sans-serif" }}
                        >
                            Built with Precision.
                            <br />
                            Proven in Performance.
                        </h1>
                        <p className="mt-3 text-[clamp(0.82rem,1.4vw,0.95rem)] text-[#555] leading-relaxed max-w-sm">
                            End-to-end digital textile printing solutions from high-speed
                            sublimation to direct-to-fabric systems.
                        </p>
                    </div>

                    {/* Right — CTA buttons */}
                    <div className="flex flex-row sm:flex-col md:flex-row items-center gap-3 shrink-0">
                        <Link
                            href="/machines"
                            className="
                    inline-flex items-center justify-center
                    bg-[#111] hover:bg-[#2a2a2a] active:bg-[#000]
                    text-white text-sm font-semibold tracking-wide
                    px-6 py-[0.72rem] rounded-full
                    transition-colors duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]
                    whitespace-nowrap
                  "
                        >
                            Explore Machines
                        </Link>

                        <Link
                            href="/quote"
                            className="
                    inline-flex items-center justify-center
                    border border-[#c8c8c8] hover:border-[#888] hover:bg-[#f5f5f3]
                    text-[#111] text-sm font-semibold tracking-wide
                    px-6 py-[0.72rem] rounded-full
                    transition-colors duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]
                    whitespace-nowrap
                  "
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}