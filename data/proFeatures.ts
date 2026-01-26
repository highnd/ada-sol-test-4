// Data file - no React imports needed

/**
 * Type definition for a bullet item in a pro feature card
 */
export type ProFeatureBullet = {
  iconName: string;
  text: string;
};

/**
 * Type definition for a pro feature card
 */
export type ProFeatureCard = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
  bullets: ProFeatureBullet[];
  customHeight?: string; // Optional custom height (e.g., "xl:h-[70vh]")
};

/**
 * Pro features data for web restaurant management software
 * Each card represents a major feature category with detailed bullet points
 */
export const PRO_FEATURES: ProFeatureCard[] = [
  {
    title:
      "ثبت سریع سفارشات و صدور فاکتور – پراستفاده ترین بخش نرم افزار رستوران",
    imageSrc: "/software-sol-images/pos-banner-EN.webp",
    imageAlt: "ثبت سریع سفارش",
    reverse: false,
    bullets: [
      {
        iconName: "FaTabletAlt",
        text: "امکان ثبت سفارش به روش های مختلف (چند صندوق، تبلت، استند، QR Code و پنل مشتری)",
      },
      {
        iconName: "FaPhone",
        text: "قابلیت ثبت اتوماتیک سفارش هنگام داشتن مشتری تلفنی که از پر استفاده ترین ماژول‌های سیستم‌های نرم افزار رستوران می باشد.",
      },
      {
        iconName: "FaChartLine",
        text: "ثبت سفارشات پیشرفته",
      },
      {
        iconName: "FaImage",
        text: "قابلیت ثبت سفارشات به همراه تصویر اقلام سفارش و سیستم کدینگ سفارش برای بالا بردن سرعت در ثبت سفارشات",
      },
      {
        iconName: "FaUsers",
        text: "قابلیت ثبت سفارشات انبوه",
      },
      {
        iconName: "FaUserFriends",
        text: "قابلیت ثبت سفارش برای مهمان‌ها و پرسنل",
      },
      {
        iconName: "FaCreditCard",
        text: "قابلیت ثبت سفارش به صورت اعتباری (نسیه)",
      },
      {
        iconName: "FaClipboardList",
        text: "مدیریت جامع فاکتورهای خرید",
      },
      {
        iconName: "FaPrint",
        text: "پرداخت نسیه‌ها همراه با پرینت برای افراد و اعلام باقیمانده بدهکاری مشتریان به رستوران",
      },
    ],
  },
  {
    title:
      "تعریف باشگاه مشتریان و اعمال تخفیفات متنوع – تبدیل نرم افزار رستورانی به مدیر مشتری‌ها",
    imageSrc: "/software-sol-images/laptop.webp",
    imageAlt: "باشگاه مشتریان رستوران",
    reverse: true,
    bullets: [
      {
        iconName: "FaSms",
        text: "قابلیت ارسال پیامک اتومات به مشتری از قبیل پیامک خوشامدگویی، پیامک تبریک تولد، لیست سفارشات، ثبت و نهایی شدن سفارش مشتری",
      },
      {
        iconName: "FaPaperPlane",
        text: "قابلیت ارسال لیست سفارش مشتری از طریق پیامک به صورت اتومات – ماژول پرطرفدار نرم افزار رستوران سول",
      },
      {
        iconName: "FaTag",
        text: "قابلیت تعریف پیشنهادها و تخفیفات و ارسال کد تخفیف و اطلاع رسانی به مشتری از طریق پیامک",
      },
      {
        iconName: "FaCrown",
        text: "عضویت‌های ویژه باشگاه مشتریان (نقره‌ای ، طلایی، یک ستاره ، دو ستاره، … ) – این پنل نرم افزار حسابداری رستوران را به یک ماژول باشگاه مشتریان قوی تبدیل می کند.",
      },
    ],
  },
  {
    title: "قابلیت‌های کاربردی مدیریت مجموعه",
    imageSrc: "/software-sol-images/sol-software-pannel.jpg",
    imageAlt: "قابلیت‌های کاربردی مدیریت مجموعه",
    reverse: false,
    bullets: [
      {
        iconName: "FaUserCheck",
        text: "کاربری راحت و ساده",
      },
      {
        iconName: "FaChartPie",
        text: "قابلیت مدیریت سود و زیان آنلاین",
      },
      {
        iconName: "FaStickyNote",
        text: "قابلیت یادداشت گذاری و یادآوری در هنگام شروع برنامه",
      },
      {
        iconName: "FaMotorcycle",
        text: "قابلیت ارسال پیک",
      },
      {
        iconName: "FaBoxOpen",
        text: "کنترل موجودی مواد اولیه در هر لحظه",
      },
      {
        iconName: "FaNetworkWired",
        text: "قابلیت اتصال چند کامپیوتر برای ثبت سفارشات مشتریان بطور همزمان",
      },
      {
        iconName: "FaChair",
        text: "قابلیت رزرو میز",
      },
    ],
  },
  {
    title:
      "مدیریت انبار، فرمول تولید و فاکتور خرید – لزوم تعریف انبار در نرم افزار رستوران",
    imageSrc: "/software-sol-images/poss-slider1.avif",
    imageAlt: "مدیریت انبار رستوران",
    reverse: true,
    bullets: [
      {
        iconName: "FaWarehouse",
        text: "قابلیت تعریف نامحدود انبار",
      },
      {
        iconName: "FaEye",
        text: "کنترل موجودی غذاها در آشپزخانه در هر لحظه",
      },
      {
        iconName: "FaFileInvoice",
        text: "مدیریت جامع فاکتورهای خرید برای کسانی که از نرم افزار رستوران برای ثبت انبار و شارژ کردن آن می خواهند استفاده کنند.",
      },
      {
        iconName: "FaFlask",
        text: "قابلیت تعریف فرمول تولید برای کالا های درون انبار",
      },
      {
        iconName: "FaMoneyBillWave",
        text: "قابلیت ثبت مبالغ پرداختی روی فاکتور های خرید به صورت نقدی ، کارتی ، چک",
      },
      {
        iconName: "FaLayerGroup",
        text: "قابلیت تعریف نامحدود گروه بندی غذاها",
      },
      {
        iconName: "FaExchangeAlt",
        text: "قابلیت انتقال کالاها بین انبار ها",
      },
      {
        iconName: "FaTrashAlt",
        text: "مدیریت کالاهای دور ریز",
      },
      {
        iconName: "FaBatteryFull",
        text: "شارژ انبار و لیست فروش",
      },
    ],
  },
  {
    title: "مدیریت حسابداری و مالی مجموعه",
    imageSrc: "/software-sol-images/free-sol-software.png",
    imageAlt: "مدیریت حسابداری و مالی مجموعه",
    reverse: false,
    bullets: [
      {
        iconName: "FaChartLine",
        text: "گزارش مالی از فاکتورهای فروش و خرید از مهمترین قسمت‌های یک نرم افزار رستوران می باشد.",
      },
      {
        iconName: "FaReceipt",
        text: "مدیریت جامع فاکتورهای خرید",
      },
      {
        iconName: "FaUsers",
        text: "قابلیت حقوق و دستمزد کارمندان (پاداش، کسورات، مساعده، حقوق) به همراه گزارشات",
      },
      {
        iconName: "FaWallet",
        text: "امکان کنترل حساب اشخاص اعم از تامین کنندگان و مشتریان",
      },
      {
        iconName: "FaFileInvoiceDollar",
        text: "قابلیت مدیریت هزینه‌های جاری مجموعه",
      },
      {
        iconName: "FaCashRegister",
        text: "حسابرسی صندوق‌ها به تفکیک نقدی و کارتی",
      },
      {
        iconName: "FaBell",
        text: "قابلیت تعریف نامحدود صندوق",
      },
      {
        iconName: "FaBell",
        text: "مدیریت چک همراه با سیستم هشدار دهی برای چک‌ها",
      },
    ],
  },
  {
    title: "قابلیت نصب روی انواع سخت افزارها",
    imageSrc: "/software-sol-images/sol-hardware.jpg",
    imageAlt: "قابلیت نصب روی انواع سخت افزارها",
    reverse: true,
    bullets: [
      {
        iconName: "FaPhoneAlt",
        text: "امکان اتصال کالر آیدی (نمایشگر اعلام شماره تلفن تماس گیرنده)",
      },
      {
        iconName: "FaPrint",
        text: "قابلیت نصب پرینتر نامحدود برای آشپزخانه و سیستم دلیوری برای چاپ همزمان فیش و سفارش",
      },
      {
        iconName: "FaMobileAlt",
        text: "اپلیکیشن اندروید ثبت سفارشات و مدیریت گزارشات",
      },
      {
        iconName: "FaTabletAlt",
        text: "دستگاه تبلت پوز (تجمیع سه دستگاه تبلت، فیش پرینتر، کارت خوان)",
      },
      {
        iconName: "FaCreditCard",
        text: "قابلیت اتصال همزمان به سه دستگاه POS (کارت خوان)",
      },
      {
        iconName: "FaWifi",
        text: "قابلیت اتصال به پرینترهای وایرلس",
      },
      {
        iconName: "FaDesktop",
        text: "قابلیت نصب مانیتور در آشپزخانه (ویژگی مشترک اکثر نرم افزارهای رستوران)",
      },
      {
        iconName: "FaReceipt",
        text: "قابلیت اتصال به انواع فیش پرینترها",
      },
      {
        iconName: "FaSms",
        text: "قابلیت ارسال پیامک با مودم GSM",
      },
    ],
  },
  {
    title: "گزارشگیری پیشرفته و لحظه ای – اصلی ترین نیاز نرم افزار رستوران",
    imageSrc: "/software-sol-images/sol-software-pannel2.webp",
    imageAlt: "گزارشگیری پیشرفته و لحظه‌ای",
    reverse: false,
    customHeight: "xl:h-[70vh]",
    bullets: [
      {
        iconName: "FaChartLine",
        text: "امکان ثبت سفارش به روش های مختلف (چند صندوق، تبلت، استند، QR Code و پنل مشتری)",
      },
      {
        iconName: "FaClipboardList",
        text: "گزارش گیری از بیشترین غذای فروخته شده (ماژول پرکاربرد)",
      },
      {
        iconName: "FaMobileAlt",
        text: "گزارش جامع از پیامک‌های ارسال شده",
      },
      {
        iconName: "FaUsers",
        text: "گزارش از باشگاه مشتریان و تخفیفات اعمال شده",
      },
      {
        iconName: "FaDollarSign",
        text: "گزارش از نسیه‌ها",
      },
      {
        iconName: "FaReceipt",
        text: "گزارش از چک‌ها",
      },
      {
        iconName: "FaRegClock",
        text: "گزارش از میز های رزرو شده",
      },
      {
        iconName: "FaSyncAlt",
        text: "گزارش از غذاها و مواد اولیه آنها",
      },
      {
        iconName: "FaFileInvoiceDollar",
        text: "گزارش از مشتریان با جمع آنها",
      },
      {
        iconName: "FaClipboardList",
        text: "گزارش از معین ها و کالاها",
      },
      {
        iconName: "FaDollarSign",
        text: "گزارش از انتقال وجه بین صندوق‌ها",
      },
      {
        iconName: "FaReceipt",
        text: "گزارش کلی از سفارشات",
      },
      {
        iconName: "FaFileInvoiceDollar",
        text: "گزارش دریافت وجه از صندوق ها و حسابهای بانکی با جزییات و جمع",
      },
      {
        iconName: "FaClipboardList",
        text: "گزارش از واریز به صندوق‌ها و حسابهای بانکی",
      },
      {
        iconName: "FaChartLine",
        text: "گزارش از خریدهای انجام شده",
      },
      {
        iconName: "FaReceipt",
        text: "گزارش از صندوق‌ها بصورت کامل با جزئیات و جمع نقدی و کارتی",
      },
      {
        iconName: "FaMobileAlt",
        text: "گزارش از تماس‌های بی‌پاسخ (Missed call)",
      },
      {
        iconName: "FaClipboardList",
        text: "گزارشات کامل کنترل فعالیت‌های فروش (حذف شده، ویرایش شده، تخفیف خورده و چاپ مجدد)",
      },
      {
        iconName: "FaChartLine",
        text: "گزارشات فروش براساس ریز کالا و مشتریان به تفکیک روز، ماه، سال",
      },
    ],
  },
];


