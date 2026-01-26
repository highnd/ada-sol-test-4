"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import { OtherProductItem } from "@/data/otherProducts";
import { BsArrowDownLeft } from "react-icons/bs";

type PageOtherProductProps = {
    title: string;
    description: string;
    products: readonly OtherProductItem[];
    ctaButtonText?: string; // Optional, default: "دریافت مشاوره رایگان"
    ctaButtonHref?: string; // Optional, default: "/demo"
    containerClassName?: string;
};

/**
 * PageOtherProduct Component
 *
 * A reusable component for displaying other products in an orange background section.
 * Features a two-column layout: left side (title, description, CTA button) and right side (vertical list of product buttons).
 *
 * @param title - Section title (displayed on left side)
 * @param description - Description text (displayed on left side)
 * @param products - Array of product items (required - pass data through props for reusability)
 * @param ctaButtonText - CTA button text (optional, default: "دریافت مشاوره رایگان")
 * @param ctaButtonHref - CTA button href (optional, default: "/demo")
 * @param containerClassName - Optional custom className for container
 */
const PageOtherProduct: React.FC<PageOtherProductProps> = ({
    title,
    description,
    products,
    ctaButtonText = "دریافت مشاوره رایگان",
    ctaButtonHref = "/demo",
    containerClassName,
}) => {
    return (
        <div className="w-full bg-[#FF4C00] py-12 lg:py-16">
            <Container className={containerClassName}>
                <div className="w-full flex flex-col lg:flex-row-reverse gap-8 xl:gap-32">
                    {/* Left side: Title, Description, CTA Button */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 lg:space-y-12 text-white 2xl:px-12">
                        <h2 className="extrabold-fanum-font text-xl sm:text-2xl lg:text-4xl 2xl:text-5xl text-white leading-snug">
                            {title}
                        </h2>
                        <p className="fanum-font text-sm sm:text-base 2xl:text-xl text-white/90 leading-loose">
                            {description}
                        </p>
                        <Link
                            href={ctaButtonHref}
                            className="inline-flex w-fit items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm 2xl:text-base bold-fanum-font rounded-[50px] bg-accent text-secondary hover:bg-white/80 transition-colors duration-200  cursor-pointer"
                        >
                            {ctaButtonText}
                        </Link>
                    </div>

                    {/* Right side: Vertical list of product buttons */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-3 sm:space-y-4">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={product.href}
                                className="flex flex-col rounded-full group cursor-pointer border-2 border-white p-3 text-white hover:text-[#0A2745] transition-colors duration-100"
                            >
                                <div className="flex flex-row-reverse items-center justify-between gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center text-white group-hover:text-[#0A2745] text-lg leading-none transition-colors duration-100">
                                        <BsArrowDownLeft />
                                    </span>
                                    <p className="bold-fanum-font text-xs sm:text-sm 2xl:text-lg text-white group-hover:text-[#0A2745] transition-colors duration-100 leading-relaxed text-right flex-1">
                                        {product.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageOtherProduct;
