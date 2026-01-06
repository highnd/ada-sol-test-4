/**
 * Converts English digits to Persian digits
 * @param str - String containing English digits
 * @returns String with Persian digits
 * @example
 * toPersianDigits("021 9100 0327") // returns "۰۲۱ ۹۱۰۰ ۰۳۲۷"
 * toPersianDigits("123") // returns "۱۲۳"
 */
export const toPersianDigits = (str: string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

/**
 * Converts Persian digits to English digits
 * @param str - String containing Persian digits
 * @returns String with English digits
 * @example
 * toEnglishDigits("۰۲۱ ۹۱۰۰ ۰۳۲۷") // returns "021 9100 0327"
 * toEnglishDigits("۱۲۳") // returns "123"
 */
export const toEnglishDigits = (str: string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  return str.replace(/[۰-۹]/g, (char) => {
    const index = persianDigits.indexOf(char);
    return index !== -1 ? englishDigits[index] : char;
  });
};

