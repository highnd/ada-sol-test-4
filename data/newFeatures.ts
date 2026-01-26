// Data file - no React imports needed

/**
 * Type definition for a new feature item with icon support
 */
export type NewFeatureItem = {
  id: string;
  title: string;
  description: string;
  iconName: string; // Icon identifier for icon mapping
};

/**
 * New features data for PageNewFeatures component
 * Ordered as displayed in the design: 6 features with icons
 */
export const NEW_FEATURES: readonly NewFeatureItem[] = [
  {
    id: "1",
    title: "اضافه شدن انبار مرکزی شعب برای فودکورت",
    description:
      "یکی دیگر از امکانات نرم افزار مدیریت رستوران سول این است که تمامی رستوران‌ها می‌توانند از موجودی انبار مرکزی فودکورت آگاه باشند و به جای اینکه هزینه اضافی برای اجاره و تهیه یک انبار بدهند از یک انبار مرکزی واحد استفاده نمایند.",
    iconName: "FaWarehouse",
  },
  {
    id: "2",
    title: "کنترل بر اضافه شدن آیتم‌های رستوران‌ها",
    description:
      "مدیر فودکورت می‌تواند بر اضافه شدن آیتم‌های غذایی رستوران‌های موجود در فودکورت نظارت داشته باشد و در صورت تایید این آیتم‌ها به منو اضافه شوند",
    iconName: "FaClipboardList",
  },
  {
    id: "3",
    title: "تعریف نظرسنجی",
    description:
      "مدیر فودکورت می‌تواند برای بررسی سطح رضایت مشتریان، فرم‌های نظرسنجی تعریف کرده و برای آن‌ها ارسال کند.",
    iconName: "FaStickyNote",
  },
  {
    id: "4",
    title: "اضافه شدن فیلد محاسبه مالیات محصولات کارخانه‌ای",
    description:
      "رستوران داران می‌توانند با فعال کردن این قابلیت مالیات بر ارزش افزوده محصولات کارخانه‌ای خود را از مجموع فاکتور مشتری کم کنند و آن را محاسبه ننمایند و یا اینکه به صورت جداگانه محاسبه کنند.",
    iconName: "FaFileInvoiceDollar",
  },
  {
    id: "5",
    title: "تایید مدیر فودکورت برای تغییر قیمت آیتم‌های رستوران‌ها",
    description:
      "مدیر فودکورت دسترسی کامل به لیست قیمت رستوران‌ها دارد و می‌تواند درصورت لزوم قیمت آیتم‌های مختلف را افزایش یا کاهش دهد.",
    iconName: "FaDollarSign",
  },
  {
    id: "6",
    title: "امکان تعریف ظرفیت غذایی برای هر رستوران",
    description:
      "مشتریان می‌توانند موجودی غذاهای روز را با تعداد دقیق آن‌ها مشاهده نموده و قبل از ثبت سفارش تصمیم‌گیری نمایند.",
    iconName: "FaBatteryFull",
  },
] as const;

