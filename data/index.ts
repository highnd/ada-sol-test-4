// -----------------------------
// Types
// -----------------------------
export type SubmenuItem = {
  label: string;
  href: string;
  previewSrc?: string;
  icon?: string; // Icon name from react-icons (e.g., "FaLaptop", "FaDesktop")
  submenu?: SubmenuItem[]; // Nested submenu support
};

type TopbarItem = {
  label: string;
  href: string;
  submenu?: SubmenuItem[]; // optional fixes TS error
};

export const TOPBAR_ITEMS: readonly TopbarItem[] = [
  {
    label: "مرکز دانلودها",
    href: "/downloads",
    submenu: [
      { label: "راهنماها", href: "/downloads/guides" },
      { label: "فایل‌ها", href: "/downloads/files" },
    ],
  },
  { label: "تماس با ما", href: "/contact" },
  { label: "درباره سول", href: "/about" },
  { label: "مرکز راهنما", href: "/help" },
  { label: "داستان موفقیت مشتریان", href: "/success-stories" },
  { label: "پادکست رستوران", href: "/podcast" },
  { label: "اخبار و رویدادها", href: "/news" },
  { label: "نمایشگاه‌ها", href: "/exhibitions" },
  { label: "بلاگ", href: "/blog" },
];

// -----------------------------
// Types
// -----------------------------

export type MenuItem = {
  label: string;
  href: string;
  submenu: SubmenuItem[];
  defaultPreviewSrc?: string;
  showMoreButton?: boolean;
};

// -----------------------------
// Data
// -----------------------------
export const PRODUCTS_MENU_ITEMS: readonly MenuItem[] = [
  {
    label: "نرم افزار رستوران",
    href: "/restaurant-software",
    defaultPreviewSrc: "/hero/Rectangle.svg",
    showMoreButton: false,
    submenu: [
      {
        label: "نرم افزار مدیریت رستوران تحت وب",
        href: "/web-restaurant-management-software",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaLaptop",
      },
      {
        label: "نرم افزار مدیریت رستوران ویندوزی",
        href: "/restaurant-software/windows-restaurant",
        previewSrc: "/window.svg",
        icon: "FaDesktop",
      },
      {
        label: "نرم افزار حسابداری رستوران",
        href: "/restaurant-software/accounting",
        previewSrc: "/file.svg",
        icon: "FaCalculator",
      },
      {
        label: "نرم افزار صندوق رستوران",
        href: "/restaurant-software/pos",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaCashRegister",
      },
      {
        label: "نرم افزار سفارش‌ گیر گارسون",
        href: "/restaurant-software/waiter-ordering",
        previewSrc: "/hero/tablet.svg",
        icon: "FaUserTie",
      },
      {
        label: "نرم افزار کیوسک سفارش‌ گیر رستوران",
        href: "/restaurant-software/kiosk",
        previewSrc: "/hero/tablet.svg",
        icon: "FaTabletAlt",
      },
      {
        label: "اپلیکیشن مدیریت رستوران اندرویدی ( گزارش مدیریتی)",
        href: "/restaurant-software/android-app",
        previewSrc: "/hero/iPhone.svg",
        icon: "FaMobileAlt",
      },
    ],
  },
  {
    label: "نرم افزار مدیریت کسب و کار",
    href: "/business-management-software",
    defaultPreviewSrc: "/window.svg",
    showMoreButton: false,
    submenu: [
      {
        label: "نرم افزار مدیریت فست فود",
        href: "/business-management-software/fastfood",
        previewSrc: "/window.svg",
        icon: "FaHamburger",
      },
      {
        label: "نرم افزار مدیریت کافی‌شاپ",
        href: "/business-management-software/cafe",
        previewSrc: "/hero/tablet.svg",
        icon: "FaCoffee",
      },
      {
        label: "نرم افزار مدیریت فودکورت",
        href: "/business-management-software/foodcourt",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaStore",
      },
      {
        label: "نرم افزار مدیریت کیترینگ",
        href: "/business-management-software/catering",
        previewSrc: "/window.svg",
        icon: "FaUtensils",
      },
      {
        label: "نرم افزار مدیریت کافه رستوران",
        href: "/business-management-software/cafe-restaurant",
        previewSrc: "/hero/tablet.svg",
        icon: "FaCoffee",
      },
      {
        label: "نرم افزار مدیریت کافه سنتی",
        href: "/business-management-software/traditional-cafe",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaCoffee",
      },
      {
        label: "نرم افزار مدیریت کبابی و جگرکی",
        href: "/business-management-software/kababi",
        previewSrc: "/window.svg",
        icon: "FaFire",
      },
      {
        label: "نرم افزار مدیریت آبمیوه و بستنی فروشی",
        href: "/business-management-software/juice-icecream",
        previewSrc: "/hero/tablet.svg",
        icon: "FaGlassWhiskey",
      },
      {
        label: "نرم افزار مدیریت طباخی و کله پزی",
        href: "/business-management-software/cooking",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaUtensils",
      },
      {
        label: "نرم افزار مدیریت قنادی",
        href: "/business-management-software/pastry",
        previewSrc: "/window.svg",
        icon: "FaBirthdayCake",
      },
      {
        label: "نرم افزار مدیریت آش و حلیم فروشی",
        href: "/business-management-software/ash-halim",
        previewSrc: "/hero/tablet.svg",
        icon: "FaUtensils",
      },
      {
        label: "نرم افزار مدیریت ساندویچی",
        href: "/business-management-software/sandwich",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaHamburger",
      },
    ],
  },
  {
    label: "نرم افزار اتوماسیون تغذیه",
    href: "/food-automation-software",
    defaultPreviewSrc: "/hero/Rectangle.svg",
    showMoreButton: false,
    submenu: [
      {
        label: "نرم افزار اتوماسیون تغذیه سلف و غذاخوری",
        href: "/food-automation-software/cafeteria",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaUtensils",
      },
      {
        label: "نرم افزار اتوماسیون تغذیه کارخانجات و شرکت‌های بزرگ",
        href: "/food-automation-software/factories",
        previewSrc: "/hero/tablet.svg",
        icon: "FaIndustry",
      },
      {
        label: "نرم افزار اتوماسیون تغذیه سازمانی (دولتی و خصوصی)",
        href: "/food-automation-software/organizational",
        previewSrc: "/window.svg",
        icon: "FaBuilding",
      },
      {
        label: "نرم افزار اتوماسیون تغذیه دانشگاه و مراکز عالی",
        href: "/food-automation-software/universities",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaGraduationCap",
      },
      {
        label: "نرم افزار اتوماسیون تغذیه بیمارستان و مراکز خدماتی",
        href: "/food-automation-software/hospitals",
        previewSrc: "/hero/tablet.svg",
        icon: "FaHospital",
      },
      {
        label: "نرم افزار اتوماسیون تغذیه مجموعه‌های خدماتی و پیمانکاری",
        href: "/food-automation-software/service-companies",
        previewSrc: "/window.svg",
        icon: "FaHardHat",
      },
      {
        label: "نرم افزار اتوماسیون تغذیه سازمان‌های نظامی",
        href: "/food-automation-software/military",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaShieldAlt",
      },
      {
        label: "نرم افزار اتوماسیون تغذیه شرکت های خدمات تهیه غذا",
        href: "/food-automation-software/food-service",
        previewSrc: "/hero/tablet.svg",
        icon: "FaTruck",
      },
    ],
  },
  {
    label: "سخت افزارها",
    href: "/hardware",
    defaultPreviewSrc: "/window.svg",
    showMoreButton: true,
    submenu: [
      {
        label: "کیوسک سفارش‌گیر هوشمند",
        href: "/hardware/kiosk",
        previewSrc: "/hero/tablet.svg",
        icon: "FaTabletAlt",
      },
      {
        label: "فیش پرینتر رستورانی/ پرینتر حرارتی",
        href: "/hardware/receipt-printer",
        previewSrc: "/window.svg",
        icon: "FaPrint",
      },
      {
        label: "صندوق فروشگاهی رستوران",
        href: "/hardware/pos-cash-register",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaCashRegister",
      },
      {
        label: "کالر آیدی (Caller ID)",
        href: "/hardware/caller-id",
        previewSrc: "/window.svg",
        icon: "FaPhone",
      },
      {
        label: "تبلت سفارشگیر رستوران",
        href: "/hardware/tablet-ordering",
        previewSrc: "/hero/tablet.svg",
        icon: "FaTabletAlt",
      },
      {
        label: "آل این وان ( کامپیوتر بدون کیس)",
        href: "/hardware/all-in-one",
        previewSrc: "/window.svg",
        icon: "FaDesktop",
      },
      {
        label: "میز سفارشگیر لمسی",
        href: "/hardware/touch-table",
        previewSrc: "/hero/tablet.svg",
        icon: "FaTabletAlt",
      },
      {
        label: "استند بارکد و منو دیجیتال (NFC و QR)",
        href: "/hardware/barcode-stand-menu",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaQrcode",
      },
      {
        label: "پیجر رستورانی (فراخوان مشتری)",
        href: "/hardware/pager",
        previewSrc: "/window.svg",
        icon: "FaBell",
      },
    ],
  },
  {
    label: "ماژول ها",
    href: "/modules",
    defaultPreviewSrc: "/file.svg",
    showMoreButton: true,
    submenu: [
      {
        label: "ماژول مالی و حسابداری",
        href: "/modules/financial-accounting",
        previewSrc: "/window.svg",
        icon: "FaMoneyBillWave",
        submenu: [
          {
            label:
              "حسابداری و مدیریت فاکتورهای خرید و فروش به صورت نقدی، کارتی، چک",
            href: "/modules/financial-accounting/invoice-management",
            previewSrc: "/window.svg",
            icon: "FaFileAlt",
          },
          {
            label: "محاسبه حقوق و دستمزد کارکنان",
            href: "/modules/financial-accounting/payroll",
            previewSrc: "/window.svg",
            icon: "FaMoneyBillWave",
          },
          {
            label: "محاسبه سود و زیان آنلاین",
            href: "/modules/financial-accounting/profit-loss",
            previewSrc: "/window.svg",
            icon: "FaChartLine",
          },
          {
            label: "گزارشات جامع مالی و حسابداری",
            href: "/modules/financial-accounting/reports",
            previewSrc: "/window.svg",
            icon: "FaChartBar",
          },
          {
            label: "کیف پول اعتباری",
            href: "/modules/financial-accounting/credit-wallet",
            previewSrc: "/window.svg",
            icon: "FaWallet",
          },
          {
            label: "ثبت سفارش به صورت اعتباری / نسیه (ویندوزی)",
            href: "/modules/financial-accounting/credit-order",
            previewSrc: "/window.svg",
            icon: "FaCreditCard",
          },
          {
            label: "امکان کنترل حساب اعتباری تامین کنندگان و مشتریان",
            href: "/modules/financial-accounting/credit-accounts",
            previewSrc: "/window.svg",
            icon: "FaUsers",
          },
          {
            label: "قابلیت مدیریت هزینه‌های جاری مجموعه",
            href: "/modules/financial-accounting/operating-costs",
            previewSrc: "/window.svg",
            icon: "FaCalculator",
          },
          {
            label: "حسابرسی صندوق‌ها به تفکیک نقدی و کارتی",
            href: "/modules/financial-accounting/cash-audit",
            previewSrc: "/window.svg",
            icon: "FaCashRegister",
          },
          {
            label: "قابلیت تعریف نامحدود صندوق و حساب",
            href: "/modules/financial-accounting/unlimited-accounts",
            previewSrc: "/window.svg",
            icon: "FaSitemap",
          },
          {
            label: "مدیریت چک همراه با سیستم هشدار دهی برای چک‌ها",
            href: "/modules/financial-accounting/check-management",
            previewSrc: "/window.svg",
            icon: "FaBell",
          },
        ],
      },
      {
        label: "ماژول انبارداری و کنترل موجودی",
        href: "/modules/inventory",
        previewSrc: "/hero/tablet.svg",
        icon: "FaWarehouse",
        submenu: [
          {
            label: "تعریف فرمول تولید غذا و مدیریت موجودی انبار",
            href: "/modules/inventory/production-formula",
            previewSrc: "/hero/tablet.svg",
            icon: "FaWarehouse",
          },
          {
            label: "قیمت تمام شده غذا (کاست کنترل)",
            href: "/modules/inventory/cost-control",
            previewSrc: "/hero/tablet.svg",
            icon: "FaCalculator",
          },
          {
            label: "تعریف نامحدود انبار",
            href: "/modules/inventory/unlimited-warehouse",
            previewSrc: "/hero/tablet.svg",
            icon: "FaSitemap",
          },
          {
            label: "قابلیت انتقال کالا ها بین انبارها (انبار اصلی و آشپزخانه)",
            href: "/modules/inventory/warehouse-transfer",
            previewSrc: "/hero/tablet.svg",
            icon: "FaExchangeAlt",
          },
          {
            label: "کنترل موجودی انبار در هر لحظه",
            href: "/modules/inventory/realtime-stock",
            previewSrc: "/hero/tablet.svg",
            icon: "FaClipboard",
          },
          {
            label: "گزارشات انبارداری",
            href: "/modules/inventory/reports",
            previewSrc: "/hero/tablet.svg",
            icon: "FaChartBar",
          },
          {
            label: "مدیریت کالاهای دورریز",
            href: "/modules/inventory/waste-management",
            previewSrc: "/hero/tablet.svg",
            icon: "FaBox",
          },
          {
            label: "شارژ انبار و لیست فروش",
            href: "/modules/inventory/charging-sales",
            previewSrc: "/hero/tablet.svg",
            icon: "FaWallet",
          },
        ],
      },
      {
        label: "ماژول باشگاه مشتریان رستورانی هوشمند",
        href: "/modules/loyalty-club",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaUsers",
        submenu: [
          {
            label: "ایجاد تخفیف های متنوع و ارسال از طریق پیامک",
            href: "/modules/loyalty-club/discounts-sms",
            previewSrc: "/hero/Rectangle.svg",
            icon: "FaTicketAlt",
          },
          {
            label: "ایجاد انواع کمپین ها",
            href: "/modules/loyalty-club/campaigns",
            previewSrc: "/hero/Rectangle.svg",
            icon: "FaGift",
          },
          {
            label: "تفکیک مشتریان به نسبت تعداد و مبلغ سفارش (عضویت های ویژه)",
            href: "/modules/loyalty-club/vip-membership",
            previewSrc: "/hero/Rectangle.svg",
            icon: "FaStar",
          },
          {
            label: "پنل پیامک و ارسال پیامکی دستی",
            href: "/modules/loyalty-club/sms-panel",
            previewSrc: "/hero/Rectangle.svg",
            icon: "FaSms",
          },
          {
            label: "گزارشات دقیق و کامل باشگاه مشتریان",
            href: "/modules/loyalty-club/reports",
            previewSrc: "/hero/Rectangle.svg",
            icon: "FaChartBar",
          },
        ],
      },
      {
        label: "منو دیجیتال رستوران و کافی شاپ (QR Code)",
        href: "/modules/digital-menu",
        previewSrc: "/window.svg",
        icon: "FaQrcode",
      },
      {
        label: "نرم افزار مدیریت شعب (چند سازمانی)",
        href: "/modules/multi-branch",
        previewSrc: "/hero/tablet.svg",
        icon: "FaSitemap",
      },
      {
        label: "ماژول پیام کوتاه رستوران",
        href: "/modules/sms-module",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaSms",
      },
      {
        label: "نرم افزار نظرسنجی هوشمند",
        href: "/modules/survey",
        previewSrc: "/window.svg",
        icon: "FaPoll",
      },
      {
        label: "رزرو و نوبت دهی هوشمند رستوران و کافه",
        href: "/modules/reservation",
        previewSrc: "/hero/tablet.svg",
        icon: "FaCalendarCheck",
      },
      {
        label: "ماژول درگاه پرداخت",
        href: "/modules/payment-gateway",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaCreditCard",
      },
      {
        label:
          "اتصال به سخت افزارها (ترازو دیجیتال، کالر آیدی، POS، استند، مانیتور آشپزخانه، فیش پرینتر و ...)",
        href: "/modules/hardware-connection",
        previewSrc: "/window.svg",
        icon: "FaPlug",
      },
      {
        label: "پنل مدیریتی لحظه ای و گزارش لحظه ای عملکرد رستوران",
        href: "/modules/realtime-panel",
        previewSrc: "/hero/tablet.svg",
        icon: "FaChartLine",
      },
      {
        label: "مدیریت پیک و سفارش‌های بیرون‌بر با GPS",
        href: "/modules/delivery-gps",
        previewSrc: "/hero/Rectangle.svg",
        icon: "FaMapMarkerAlt",
      },
      {
        label: "سایت اختصاصی",
        href: "/modules/custom-website",
        previewSrc: "/window.svg",
        icon: "FaGlobe",
      },
      {
        label: "نرم افزار آشپزخانه هوشمند / سیستم نمایشگر تولید (KDS)",
        href: "/modules/kds",
        previewSrc: "/hero/tablet.svg",
        icon: "FaUtensils",
      },
    ],
  },
];

// Mock search suggestions data
export const MOCK_SEARCH_SUGGESTIONS = [
  {
    id: "1",
    title: "نرم افزار رستوران",
    category: "محصولات",
    href: "/restaurant-software",
  },
  {
    id: "2",
    title: "صندوق فروش رستوران",
    category: "محصولات",
    href: "/restaurant-software/pos",
  },
  {
    id: "3",
    title: "سیستم مدیریت سفارش",
    category: "محصولات",
    href: "/restaurant-software/order",
  },
  {
    id: "4",
    title: "نرم افزار کافه",
    category: "محصولات",
    href: "/cafe-software",
  },
  {
    id: "5",
    title: "اتوماسیون تغذیه",
    category: "محصولات",
    href: "/nutrition-automation",
  },
  {
    id: "6",
    title: "رزرو میز",
    category: "امکانات",
    href: "/features/table-reservation",
  },
  {
    id: "7",
    title: "گزارش‌گیری",
    category: "امکانات",
    href: "/features/reports",
  },
  {
    id: "8",
    title: "مدیریت چند شعبه",
    category: "امکانات",
    href: "/features/multi-branch",
  },
  { id: "9", title: "پشتیبانی", category: "سایر", href: "/support" },
  { id: "10", title: "درخواست دمو", category: "سایر", href: "/demo" },
];
