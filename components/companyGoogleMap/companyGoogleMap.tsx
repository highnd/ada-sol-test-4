import React from "react";

const SECTION_CLASSES = "w-full bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20";

const MAP_WRAPPER_CLASSES =
  "w-full h-[200px] sm:h-[100px] md:h-[250px] lg:h-[300px] overflow-hidden";

const MAP_IFRAME_CLASSES = "w-full h-full border-0";

interface CompanyGoogleMapProps {
  mapUrl?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

const CompanyGoogleMap: React.FC<CompanyGoogleMapProps> = ({
  mapUrl,
  address,
  latitude,
  longitude,
}) => {
  // Default embed URL from Google Maps
  const defaultMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.126435784084!2d51.326108700000006!3d35.7231089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd00095703a1%3A0x6980b4a85e8a11fa!2z2LTYsdqp2Kog2YbYsdmFINin2YHYstin2LHbjCDYotiv2Kc!5e0!3m2!1sen!2sde!4v1767446217128!5m2!1sen!2sde";

  // Generate Google Maps embed URL
  const getMapUrl = () => {
    if (mapUrl) {
      return mapUrl;
    }

    // Return the default embed URL
    return defaultMapUrl;
  };

  return (
    <section id="company-map" dir="rtl" className={SECTION_CLASSES}>
      <div className={MAP_WRAPPER_CLASSES}>
        <iframe
          src={getMapUrl()}
          className={MAP_IFRAME_CLASSES}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="نقشه موقعیت شرکت"
          aria-label="نقشه موقعیت شرکت"
        />
      </div>
    </section>
  );
};

export default CompanyGoogleMap;
