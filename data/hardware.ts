// Data file - no React imports needed

export type HardwareItem = {
  title: string;
  image: string;
};

/**
 * Hardware Items data
 * List of hardware items that can be displayed in the PageHardware component
 */
export const HARDWARE_ITEMS: readonly HardwareItem[] = [
  { title: "کیوسک سفارشگیر", image: "/hardwares/kiosk.jpg" },
  { title: "صندوق فروشگاهی", image: "/hardwares/sandogh.png" },
  {
    title: "کالر آی دی رستورانی",
    image: "/hardwares/callerid.png",
  },
  { title: "فیش پرینتر", image: "/hardwares/fish-printer.png" },
  {
    title: "آل این وان (کامپیوتر بدون کیس)",
    image: "/hardwares/allinone.png",
  },
  {
    title: "میز سفارشگیر لمسی",
    image: "/hardwares/order-table.png",
  },
  {
    title: "استند بارکد و منوی دیجیتال(NFC و QR)",
    image: "/hardwares/stand-barcode.jpg",
  },
  { title: "تبلت سفارشگیر", image: "/hardwares/tablet.jpg" },
] as const;

