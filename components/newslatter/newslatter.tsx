import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Container from "../ui/container";
// Form Card Styles

// Form Card Styles
const FORM_CARD_CLASSES =
  "w-full xl:w-1/2 bg-[#FF4C00] rounded-2xl sm:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-4 sm:gap-5 md:gap-6";

const FORM_FIELD_CONTAINER_CLASSES =
  "flex lg:flex-row flex-col items-center  w-full";

const FORM_LABEL_CLASSES =
  "text-white regular-fanum-font text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 min-w-full sm:min-w-[80px] py-2 md:py-0   text-right";

const FORM_INPUT_CLASSES =
  "md:flex-1 w-full bg-[#FF7033] text-[#0A2745] rounded-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base regular-fanum-font placeholder:text-white text-right border-1 border-white focus:outline-none focus:bg-[#FF4C00] text-white";

const SUBMIT_BUTTON_CLASSES =
  "inline-flex cursor-pointer items-center justify-center gap-2 bg-white text-[#0A2745] rounded-full p-1 pl-6 text-sm sm:text-base md:text-lg font-bold transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00] self-end mt-2";

const SUBMIT_BUTTON_ICON_CLASSES =
  "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#0A2745] flex items-center justify-center";

// Text Content Styles
const TEXT_CONTENT_CLASSES = "w-full xl:w-1/2 flex flex-col md:gap-8 gap-4";

const HEADING_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl leading-tight";

const DESCRIPTION_CLASSES =
  "regular-fanum-font text-[#0A2745] text-base md:text-lg   2xl:text-2xl leading-relaxed ";

const Newslatter = () => {
  return (
    <Container>
      <div className="w-full   flex flex-col xl:flex-row items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16  xl:py-28 py-8">
        <div className={TEXT_CONTENT_CLASSES}>
          <h2 className={HEADING_CLASSES}>
            عضویت در خبرنامه <span className="text-[#FF4C00]">سول</span>
            <br />
          </h2>
          <p className={`${DESCRIPTION_CLASSES} md:text-justify`}>
            برای اطلاع از اخرین اخبار و اطلاع رسانی از نرم افزار سول و امکانات و
            تازه های ما, در خبر نامه ما عضو شوید تا همیشه بروز ترین اخبار و
            امکانات را در اختیار داشته باشید.
          </p>
          {/* <div className={CONTACT_ITEMS_CONTAINER_CLASSES}>
          <div className={CONTACT_ITEM_CLASSES}>
            <div className={CONTACT_ICON_CLASSES}>
              <BsHeadset className={CONTACT_ICON_ICON_CLASSES} />
            </div>
            <span>مشاوره</span>
          </div>

          <div className={CONTACT_ITEM_CLASSES}>
            <div className={CONTACT_ICON_CLASSES}>
              <BsFillEnvelopeFill className={CONTACT_ICON_ICON_CLASSES} />
            </div>
            <span>info@sol.ir</span>
          </div>
          <div className={CONTACT_ITEM_CLASSES}>
            <div className={CONTACT_ICON_CLASSES}>
              <BsTelephoneFill className={CONTACT_ICON_ICON_CLASSES} />
            </div>
            <span dir="ltr">۰۲۱ ۹۱۰۰ ۲۰۳۷</span>
          </div>
        </div> */}
        </div>
        <form className={FORM_CARD_CLASSES}>
          {/* Name Input */}
          <div className={FORM_FIELD_CONTAINER_CLASSES}>
            <label htmlFor="name" className={FORM_LABEL_CLASSES}>
              ایمیل*
            </label>
            <input
              type="email"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleInputChange}
              placeholder="ایمیل خود را وارد کنید"
              className={FORM_INPUT_CLASSES}
              required
              aria-required="true"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={SUBMIT_BUTTON_CLASSES}>
            <div className={SUBMIT_BUTTON_ICON_CLASSES}>
              <BsFillEnvelopeFill className="text-white text-base sm:text-lg md:text-xl" />
            </div>
            <span>عضویت</span>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Newslatter;
