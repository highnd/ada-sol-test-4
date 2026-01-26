import React from "react";
import {
  FaTabletAlt,
  FaPhone,
  FaChartLine,
  FaImage,
  FaUsers,
  FaUserFriends,
  FaCreditCard,
  FaClipboardList,
  FaPrint,
  FaSms,
  FaPaperPlane,
  FaTag,
  FaCrown,
  FaUserCheck,
  FaChartPie,
  FaStickyNote,
  FaMotorcycle,
  FaBoxOpen,
  FaNetworkWired,
  FaChair,
  FaWarehouse,
  FaEye,
  FaFileInvoice,
  FaFlask,
  FaMoneyBillWave,
  FaLayerGroup,
  FaExchangeAlt,
  FaTrashAlt,
  FaBatteryFull,
  FaReceipt,
  FaWallet,
  FaFileInvoiceDollar,
  FaCashRegister,
  FaBell,
  FaPhoneAlt,
  FaMobileAlt,
  FaWifi,
  FaDesktop,
  FaDollarSign,
  FaRegClock,
  FaSyncAlt,
} from "react-icons/fa";

/**
 * Icon mapping for pro features section
 * Maps icon name strings to React icon components
 */
const iconMap: Record<string, React.ComponentType<any>> = {
  FaTabletAlt,
  FaPhone,
  FaChartLine,
  FaImage,
  FaUsers,
  FaUserFriends,
  FaCreditCard,
  FaClipboardList,
  FaPrint,
  FaSms,
  FaPaperPlane,
  FaTag,
  FaCrown,
  FaUserCheck,
  FaChartPie,
  FaStickyNote,
  FaMotorcycle,
  FaBoxOpen,
  FaNetworkWired,
  FaChair,
  FaWarehouse,
  FaEye,
  FaFileInvoice,
  FaFlask,
  FaMoneyBillWave,
  FaLayerGroup,
  FaExchangeAlt,
  FaTrashAlt,
  FaBatteryFull,
  FaReceipt,
  FaWallet,
  FaFileInvoiceDollar,
  FaCashRegister,
  FaBell,
  FaPhoneAlt,
  FaMobileAlt,
  FaWifi,
  FaDesktop,
  FaDollarSign,
  FaRegClock,
  FaSyncAlt,
};

/**
 * Get icon component by name
 * @param iconName - Name of the icon (e.g., "FaTabletAlt")
 * @returns React component or null if not found
 */
export function getIcon(
  iconName: string
): React.ComponentType<any> | null {
  return iconMap[iconName] || null;
}

