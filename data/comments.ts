// Data file - no React imports needed

export type CommentItem = {
  id: string;
  name: string;
  role: string;
  date: string; // Persian date format
  comment: string;
  avatarSrc?: string; // Optional avatar image
};

/**
 * Example comments data
 * This can be replaced with actual data from an API or database
 */
export const EXAMPLE_COMMENTS: readonly CommentItem[] = [
  {
    id: "1",
    name: "علی عباسی خوشرودی",
    role: "مدیر فناوری اطلاعات",
    date: "۱۴۰۴/۰۸/۲۱",
    comment: "بسیار راضی هستم",
  },
  {
    id: "2",
    name: "زهرا مرادی",
    role: "مدیر اداری شرکت بازرگانی",
    date: "۱۴۰۴/۰۸/۲۱",
    comment:
      "بعد از استفاده از اتوماسیون اداری آدا، روند مکاتبات داخلی شرکت ما کاملاً منظم شد. پیگیری نامه ها خیلی سریع تر و شفاف تر انجام میشه.",
  },
  {
    id: "3",
    name: "گیتی ابوالقاسمی",
    role: "مسئول منابع انسانی",
    date: "۱۴۰۴/۰۸/۲۱",
    comment:
      "رابط کاربری ساده و در عین حال امکانات کامل آدا باعث شد بدون آموزش پیچیده کل تیم خیلی سریع باهاش کار کنن.",
  },
] as const;

