// Data file - no React imports needed
import type { FaqItem } from "@/components/ui/faq";

/**
 * FAQ items data
 * Each item contains an id, question, and answer
 */
export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "1",
    question: "سوال اول",
    answer: "پاسخ سوال اول ...",
  },
  {
    id: "2",
    question: "سوال دوم",
    answer: "پاسخ سوال دوم ...",
  },
  {
    id: "3",
    question: "سوال سوم",
    answer: "پاسخ سوال سوم ...",
  },
  {
    id: "4",
    question: "سوال سوم",
    answer: "پاسخ سوال سوم ...",
  },
  {
    id: "5",
    question: "سوال سوم",
    answer: "پاسخ سوال سوم ...",
  },
  {
    id: "6",
    question: "سوال سوم",
    answer: "پاسخ سوال سوم ...",
  },
] as const;

