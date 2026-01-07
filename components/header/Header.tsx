import React from "react";
import Topbar from "./topbar/topbar";
import Navbar from "./navbar/navbar";

const Header = () => {
  return (
    <div className="h-[72px] bg-white lg:h-[132px] xl:h-[142px] w-full max-w-full regular-fanum-font fixed top-0 inset-x-0 z-1000 overflow-visible">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;
