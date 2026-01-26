export type ModuleItem = {
  id: number;
  title: string;
  href: string;
  imageSrc: string;
};

export const modulesList: ModuleItem[] = [
  {
    id: 1,
    title: "ماژول مالی و حسابداری",
    href: "/modules/financial-accounting",
    imageSrc: "/window.svg",
  },
  {
    id: 2,
    title: "ماژول انبارداری و کنترل موجودی",
    href: "/modules/inventory",
    imageSrc: "/hero/tablet.svg",
  },
  {
    id: 3,
    title: "ماژول باشگاه مشتریان رستورانی هوشمند",
    href: "/modules/loyalty-club",
    imageSrc: "/hero/Rectangle.svg",
  },
  {
    id: 4,
    title: "منو دیجیتال رستوران و کافی شاپ (QR Code)",
    href: "/modules/digital-menu",
    imageSrc: "/window.svg",
  },
  {
    id: 5,
    title: "نرم افزار مدیریت شعب (چند سازمانی)",
    href: "/modules/multi-branch",
    imageSrc: "/hero/tablet.svg",
  },
  {
    id: 6,
    title: "ماژول پیام کوتاه رستوران",
    href: "/modules/sms-module",
    imageSrc: "/hero/Rectangle.svg",
  },
  {
    id: 7,
    title: "نرم افزار نظرسنجی هوشمند",
    href: "/modules/survey",
    imageSrc: "/window.svg",
  },
  {
    id: 8,
    title: "رزرو و نوبت دهی هوشمند رستوران و کافه",
    href: "/modules/reservation",
    imageSrc: "/hero/tablet.svg",
  },
  {
    id: 9,
    title: "ماژول درگاه پرداخت",
    href: "/modules/payment-gateway",
    imageSrc: "/hero/Rectangle.svg",
  },
  {
    id: 10,
    title: "اتصال به سخت افزارها ",
    href: "/modules/hardware-connection",
    imageSrc: "/window.svg",
  },
  {
    id: 11,
    title: "پنل مدیریتی لحظه ای و گزارش لحظه ای عملکرد رستوران",
    href: "/modules/realtime-panel",
    imageSrc: "/hero/tablet.svg",
  },
  {
    id: 12,
    title: "مدیریت پیک و سفارش‌های بیرون‌بر با GPS",
    href: "/modules/delivery-gps",
    imageSrc: "/hero/Rectangle.svg",
  },
  {
    id: 13,
    title: "سایت اختصاصی",
    href: "/modules/custom-website",
    imageSrc: "/window.svg",
  },
  {
    id: 14,
    title: "نرم افزار آشپزخانه هوشمند / سیستم نمایشگر تولید (KDS)",
    href: "/modules/kds",
    imageSrc: "/hero/tablet.svg",
  },
];

export const OTHER_PRODUCTS = [
  { id: 1, title: "نرم افزار مدیریت رستوران تحت وب" },
  { id: 2, title: "نرم افزار مدیریت رستوران ویندوزی" },
  { id: 3, title: "نرم افزار حسابداری رستوران" },
  { id: 4, title: "نرم افزار صندوق رستوران" },
  { id: 5, title: "نرم افزار سفارش‌ گیر گارسون" },
  { id: 6, title: "نرم افزار کیوسک سفارش‌ گیر رستوران" },
  {
    id: 7,
    title: "اپلیکیشن مدیریت رستوران اندرویدی (گزارش مدیریتی)",
  },
];

export interface TrustBadge {
  id: number;
  title: string;
  image: string;
}

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 1,
    title: "گواهی برنامه توسعه زیست بوم واحدهای خلاق",
    image: "/trust-badges/mojavez-6.svg",
  },
  {
    id: 2,
    title: "نماد ساماندهی از وزارت فرهنگ و ارشاد اسلامی",
    image: "/trust-badges/mojavez-2.svg",
  },
  {
    id: 3,
    title: "نماد اعتماد الکترونیک از وزارت صمت",
    image: "/trust-badges/mojavez-3.svg",
  },
  {
    id: 4,
    title: "گواهی‌نامه افتا از دانشگاه شریف",
    image: "/trust-badges/mojavez-1.svg",
  },
  {
    id: 5,
    title: "نماد سازمان نظام صنفی رایانه‌ای تهران",
    image: "/trust-badges/mojavez-4.svg",
  },
  {
    id: 6,
    title: "مجوز از اتحادیه کشوری کسب‌وکارهای مجازی",
    image: "/trust-badges/mojavez-5.svg",
  },
];
