"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import { NewFeatureItem } from "@/data/newFeatures";
import { getIcon } from "@/utils/iconMapper";

type PageNewFeaturesProps = {
    title?: string; // Optional section title
    features: readonly NewFeatureItem[]; // Required - features array
    containerClassName?: string;
};

/**
 * PageNewFeatures Component
 *
 * A redesigned component displaying new features with:
 * - Left side: iPhone image showing SOL app interface
 * - Right side: Vertical list of features with brown icons, titles, and descriptions
 *
 * @param title - Optional section title
 * @param features - Array of new feature items (required - pass data through props for reusability)
 * @param containerClassName - Optional custom className for container
 */
const PageNewFeatures: React.FC<PageNewFeaturesProps> = ({
    title,
    features,
    containerClassName,
}) => {
    return (
        <div>
            <Container className={containerClassName}>
                {title && (
                    <h2 className="mx-auto lg:mt-52 mt-24 mb-8 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl text-[#0A2745]">
                        {title}
                    </h2>
                )}

                <div className="w-full h-full flex flex-col-reverse xl:flex-row justify-end gap-12 xl:gap-24">
                    {/* Features List (2 columns) */}
                    <div className="w-full xl:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 xl:pt-16" dir="rtl">
                        {features.map((feature) => {
                            const IconComponent = getIcon(feature.iconName);

                            return (
                                <div
                                    key={feature.id}
                                    className="flex items-start gap-4 lg:gap-6"
                                >
                                    {/* Icon */}
                                    {IconComponent && (
                                        <div className="shrink-0 flex items-center justify-center">
                                            <IconComponent className="text-[#8B4513] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                                        </div>
                                    )}

                                    {/* Text Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="bold-fanum-font text-[#0A2745] text-base sm:text-lg lg:text-xl mb-2 leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="fanum-font text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* iPhone Image */}
                    <div className="w-full xl:w-[30%] h-72 sm:h-96 xl:h-auto relative flex items-center justify-center">
                        <Image
                            src="/Banner/3d-iphone.svg"
                            alt="نرم افزار مدیریت رستوران سول - رابط کاربری"
                            fill
                            className="object-contain"
                            priority={false}
                            loading="lazy"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageNewFeatures;
