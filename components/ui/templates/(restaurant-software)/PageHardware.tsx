import React from "react";
import Image from "next/image";
import { HardwareItem } from "@/data/hardware";
import Container from "../../container";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

type PageHardwareProps = {
    title: string;
    hardwareItems: readonly HardwareItem[];
    containerClassName?: string;
    buttonHref?: string; // Optional - if provided, shows a button below the grid
    buttonText?: string; // Optional - button text, defaults to "خرید تجهیزات"
};

/**
 * PageHardware Component
 *
 * A reusable component for displaying hardware items in a grid layout.
 * Features circular image containers with orange borders and hover effects.
 *
 * @param title - Section title (displayed at the top, centered)
 * @param hardwareItems - Array of hardware items (required - pass data through props for reusability)
 * @param containerClassName - Optional custom className for container
 * @param buttonHref - Optional href for the button (if provided, button will be shown)
 * @param buttonText - Optional button text (defaults to "خرید تجهیزات")
 */

const BUTTON_SOLID_HERO_CLASSES =
    "inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-10 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200  w-auto cursor-pointer";

const PageHardware: React.FC<PageHardwareProps> = ({
    title,
    hardwareItems,
    containerClassName,
    buttonHref,
    buttonText = "خرید تجهیزات",
}) => {
    return (
        <section id="hardware" className={`mt-24 ${containerClassName || ""}`}>
            <h2 className="mx-auto lg:mt-52 mt-24 mb-16 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl text-[#0A2745]">
                {title}
            </h2>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 place-items-center">
                    {hardwareItems.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center cursor-pointer transition-all duration-300"
                        >
                            {/* CIRCLE CONTAINER - Image and Text inside using flexbox */}
                            <div className="relative w-72 h-72 rounded-full border-4 border-[#FF4C00] bg-white flex flex-col items-center justify-between overflow-hidden shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 p-2 md:p-3 lg:p-4">
                                {/* soft glow */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 bg-[#FF4C00]/20" />

                                {/* IMAGE CONTAINER - Takes most of the space */}
                                <div className="relative flex-1 w-full flex items-center justify-center min-h-0 p-8">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        className="  transition-transform duration-300"
                                    />
                                </div>

                                {/* TEXT - At bottom inside circle */}
                                <div className="relative w-full shrink-0 pb-4 md:pb-3 lg:pb-4 px-8 md:px-4 lg:px-6">
                                    <p className="text-center text-[#0A2745] bold-fanum-font  text-base font-medium leading-tight">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Button - Only shown if buttonHref is provided */}
                {buttonHref && (
                    <div className="w-full flex justify-center mt-8 md:mt-10 lg:mt-20">
                        <Link href={buttonHref} className={BUTTON_SOLID_HERO_CLASSES}>
                            {buttonText}
                            <IoIosArrowBack className="text-white text-sm sm:text-xl" />
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default PageHardware;
