// Data file - no React imports needed
import type { FaqItem } from "@/components/ui/faq";

/**
 * FAQ items data
 * Each item contains an id, question, and answer
 */
export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "1",
    question: "سول تمامی نیازهای شما را برطرف می‌کند؟",
    answer: "پاسخ سوال اول ...",
  },
  {
    id: "2",
    question: "هر کدام از این راهکارها برای نیازهای مشخص طراحی شده‌اند؟",
    answer: "پاسخ سوال دوم ...",
  },
  {
    id: "3",
    question: "مشاوران ما در کوتاه‌ترین زمان با شما تماس می‌گیرند و راهنمایی تخصصی ارائه می‌دهند؟",
    answer: "پاسخ سوال سوم ...",
  },
  {
    id: "4",
    question: "این نرم‌افزار امکان پیاده‌سازی به‌دو شکل تحت وب و ویندوزی را دارد؟",
    answer: "پاسخ سوال سوم ...",
  },
  {
    id: "5",
    question: "با استفاده از این نرم‌افزار، می‌توانید بهره‌وری کسب‌وکار خود را افزایش داده؟",
    answer: "پاسخ سوال سوم ...",
  },
  {
    id: "6",
    question: "یه یک انبار بدهند از یک انبار مرکزی واحد استفاده نمایند؟",
    answer: "پاسخ سوال سوم ...",
  },
] as const;

