"use client";

import React, { useCallback, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { EmblaCarousel } from "../ui/emblaCarousel";
import Container from "../ui/container";
import Image from "next/image";
import type { NewsBlogSectionProps } from "./types";
import { ARTICLES } from "@/data/articles";

const SECTION_CLASSES = "w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20";

const LEFT_SIDE_CLASSES = "w-full xl:w-1/2 flex flex-col gap-6 h-full";

const RIGHT_SIDE_CLASSES = "w-full xl:w-1/2 flex flex-col gap-6 h-full ";

const HEADER_ROW_CLASSES =
  "flex w-full items-center justify-between mb-4 sm:mb-6";

const BLOG_LINK_CLASSES =
  "text-[#FF4C00] hover:text-[#FF4C00]/80 transition-colors duration-200 font-bold text-base sm:text-lg flex items-center gap-2";

const LATEST_ARTICLES_TITLE_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-xl sm:text-2xl md:text-3xl";

const ARTICLE_LIST_CLASSES = "flex flex-col  flex-1";

const ARTICLE_LIST_ITEM_CLASSES =
  "flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-[#FFF6F2] transition-colors duration-200 cursor-pointer group";

const ARTICLE_THUMBNAIL_CLASSES =
  "w-16 h-16  rounded-full object-cover flex-shrink-0";

const ARTICLE_TITLE_CLASSES =
  "text-[#0A2745] regular-fanum-font text-sm sm:text-base md:text-xl group-hover:text-[#FF4C00] transition-colors duration-200 text-right flex-1 px-4";

const CAROUSEL_HEADER_CLASSES =
  "flex items-center justify-between mb-4 sm:mb-6";

const CAROUSEL_TITLE_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-xl sm:text-2xl md:text-3xl";

const CAROUSEL_SUBTITLE_CLASSES =
  "text-[#FF4C00] font-bold text-base sm:text-lg flex items-center gap-2";

const CAROUSEL_WRAPPER_CLASSES = "relative";

const SLIDE_CLASSES = "flex-[0_0_100%] sm:flex-[0_0_50%] px-2 sm:px-3";

const CARD_CLASSES =
  "w-full  bg-[#FFF6F2] rounded-[24px] hover:shadow-lg p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 h-full  cursor-pointer transition-shadow duration-300";

const CARD_IMAGE_CLASSES =
  " w-46 h-46 xl:w-44 xl:h-44 2xl:w-64 2xl:h-64 rounded-full object-cover absolute 2xl:top-0 top-12 2xl:left-[calc(50%-120px)] left-[calc(50%-90px)] ";

const CARD_TITLE_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-lg sm:text-xl  2xl:text-2xl leading-tight pt-36";

const CARD_DESCRIPTION_CLASSES =
  "text-[#0A2745] regular-fanum-font text-sm sm:text-base leading-relaxed line-clamp-3";

const READING_TIME_CLASSES =
  "text-[#8A8E8F] text-xs sm:text-sm regular-fanum-font flex items-center justify-between ";

const READ_MORE_BUTTON_CLASSES =
  "text-[#FF4C00] hover:text-[#FF4C00]/80 transition-colors duration-200 font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 mt-2";

const ARROWS_CONTAINER_CLASSES =
  "flex items-center justify-center gap-4 sm:gap-6 ";

const ARROW_BUTTON_CLASSES =
  "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#FF4C00] hover:bg-[#FF4C00] hover:border-[#FF4C00] text-[#FF4C00] hover:text-white transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const DOTS_CONTAINER_CLASSES =
  "flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8";

const DOT_CLASSES =
  "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-300 transition-all duration-300 cursor-pointer hover:bg-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2";

const DOT_ACTIVE_CLASSES = "bg-[#FF4C00] w-6 sm:w-8";

export const NewsBlogSection: React.FC<NewsBlogSectionProps> = ({
  articles = ARTICLES,
  featuredArticles,
}) => {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const displayArticles = featuredArticles || articles.slice(0, 3);
  const listArticles = articles.slice(0, 7);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setEmblaApi(api);
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section dir="rtl" className={SECTION_CLASSES}>
      <Container>
        <div className="flex flex-col xl:flex-row gap-8 2xl:gap-32 items-stretch">
          {/* Right Side: Carousel */}
          <div className={RIGHT_SIDE_CLASSES}>
            <div className={CAROUSEL_HEADER_CLASSES}>
              <div className={HEADER_ROW_CLASSES}>
                <h2 className={CAROUSEL_TITLE_CLASSES}>اخبار و تازه های سول</h2>
                <a href="/blog" className={CAROUSEL_SUBTITLE_CLASSES}>
                  اخبار بیشتر
                  <IoIosArrowBack className="text-lg sm:text-xl" />
                </a>
              </div>
            </div>

            <div className={CAROUSEL_WRAPPER_CLASSES}>
              <div role="region" aria-label="مقالات برتر" aria-live="polite">
                <EmblaCarousel onSelect={onSelect}>
                  {displayArticles.map((article) => (
                    <div key={article.id} className={SLIDE_CLASSES}>
                      <div className="relative pt-28">
                        <article className={CARD_CLASSES}>
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={400}
                            className={CARD_IMAGE_CLASSES}
                          />
                          <h3 className={CARD_TITLE_CLASSES}>
                            {article.title}
                          </h3>
                          <p className={CARD_DESCRIPTION_CLASSES}>
                            {article.description}
                          </p>
                          <div className={READING_TIME_CLASSES}>
                            <span>زمان مطالعه:</span>
                            <span>{article.readingTime} دقیقه</span>
                          </div>
                          <a
                            href={article.href || "#"}
                            className={READ_MORE_BUTTON_CLASSES}
                          >
                            ادامه مطلب
                            <IoIosArrowBack className="text-lg sm:text-xl" />
                          </a>
                        </article>
                      </div>
                    </div>
                  ))}
                </EmblaCarousel>
              </div>

              <div className="flex flex-col items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className={ARROWS_CONTAINER_CLASSES}>
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className={ARROW_BUTTON_CLASSES}
                    aria-label="مقاله قبلی"
                  >
                    <IoIosArrowForward className="text-xl sm:text-2xl" />
                  </button>

                  <button
                    type="button"
                    onClick={scrollNext}
                    className={ARROW_BUTTON_CLASSES}
                    aria-label="مقاله بعدی"
                  >
                    <IoIosArrowBack className="text-xl sm:text-2xl" />
                  </button>
                </div>

                <div
                  className={DOTS_CONTAINER_CLASSES}
                  role="tablist"
                  aria-label="مقالات برتر"
                >
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => scrollTo(index)}
                      className={`${DOT_CLASSES} ${
                        index === selectedIndex ? DOT_ACTIVE_CLASSES : ""
                      }`}
                      aria-label={`رفتن به مقاله ${index + 1}`}
                      aria-current={index === selectedIndex ? "true" : "false"}
                      role="tab"
                      aria-selected={index === selectedIndex}
                      tabIndex={index === selectedIndex ? 0 : -1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Left Side: Static Article List */}
          <aside className={LEFT_SIDE_CLASSES}>
            <div className={HEADER_ROW_CLASSES}>
              <h2 className={LATEST_ARTICLES_TITLE_CLASSES}>جدیدترین مقالات</h2>
              <a href="/blog" className={BLOG_LINK_CLASSES}>
                وبلاگ سول
                <IoIosArrowBack className="text-lg sm:text-xl" />
              </a>
            </div>

            <ul className={ARTICLE_LIST_CLASSES}>
              {listArticles.map((article) => (
                <li key={article.id}>
                  <a
                    href={article.href || "#"}
                    className={ARTICLE_LIST_ITEM_CLASSES}
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={80}
                      height={80}
                      className={ARTICLE_THUMBNAIL_CLASSES}
                    />
                    <h3 className={ARTICLE_TITLE_CLASSES}>{article.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
};
