// Data file - no React imports needed

export type OtherProductItem = {
  id: string;
  title: string;
  href: string;
};

/**
 * Other Products data
 * List of 7 other Sol products that can be displayed in the PageOtherProduct component
 */
export const OTHER_PRODUCTS: readonly OtherProductItem[] = [
  {
    id: "1",
    title: "نرم افزار مدیریت رستوران ویندوزی",
    href: "/restaurant-software/windows-restaurant",
  },
  {
    id: "2",
    title: "نرم افزار حسابداری رستوران",
    href: "/restaurant-software/accounting",
  },
  {
    id: "3",
    title: "نرم افزار صندوق رستوران",
    href: "/restaurant-software/pos",
  },
  {
    id: "4",
    title: "نرم افزار سفارش‌ گیر گارسون",
    href: "/restaurant-software/waiter-ordering",
  },
  {
    id: "5",
    title: "نرم افزار کیوسک سفارش‌ گیر رستوران",
    href: "/restaurant-software/kiosk",
  },
  {
    id: "6",
    title: "اپلیکیشن مدیریت رستوران اندروید",
    href: "/restaurant-software/android-app",
  },
  {
    id: "7",
    title: "نرم افزار اتوماسیون تغذیه",
    href: "/food-automation-software",
  },
] as const;

