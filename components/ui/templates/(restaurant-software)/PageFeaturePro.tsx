"use client";

import React from "react";
import Container from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/cards";
import { ProFeatureCard, PRO_FEATURES } from "@/data/proFeatures";
import { getIcon } from "@/utils/iconMapper";

type PageFeatureProProps = {
    title: string;
    cards?: ProFeatureCard[]; // Optional - if not provided, uses default PRO_FEATURES
    containerClassName?: string;
};

/**
 * PageFeaturePro Component
 *
 * A reusable component for displaying pro features with images and bullet lists.
 * Uses the FeatureCard component to render each feature card.
 *
 * @param title - Main section title
 * @param cards - Array of pro feature cards (optional, defaults to PRO_FEATURES)
 * @param containerClassName - Optional custom className for container
 */
const PageFeaturePro: React.FC<PageFeatureProProps> = ({
    title,
    cards,
    containerClassName,
}) => {
    // Use provided cards or default to PRO_FEATURES
    const featureCards = cards || PRO_FEATURES;

    return (
        <div>
            {/* <Container className={containerClassName}> */}
            <h2 className="mx-auto lg:mt-52 mt-24 mb-8 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl text-[#0A2745]">
                {title}
            </h2>
            <div className="w-full h-full bg-white gap-12">
                {featureCards.map((card, index) => {
                    // Convert ProFeatureCard to FeatureCard format
                    const bullets = card.bullets.map((bullet) => {
                        const IconComponent = getIcon(bullet.iconName);
                        return {
                            icon: IconComponent ? (
                                <IconComponent className="w-4 h-4 text-[#FF4C00] shrink-0 mt-1" />
                            ) : null,
                            text: bullet.text,
                        };
                    });

                    return (
                        <FeatureCard
                            key={index}
                            title={card.title}
                            bullets={bullets}
                            imageSrc={card.imageSrc}
                            imageAlt={card.imageAlt}
                            reverse={card.reverse}
                            customHeight={card.customHeight}
                        />
                    );
                })}
            </div>
            {/* </Container> */}
        </div>
    );
};

export default PageFeaturePro;
