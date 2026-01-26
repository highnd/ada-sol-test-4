export const AngleLineToTop = () => {
  return (
    <section className="w-[380px] h-20  relative">
      <span className="w-52 h-[4px] bg-[#FFF6F2] absolute top-12 left-0 rounded-full"></span>
      <span className="w-[68px] h-[4px] bg-[#FFF6F2] absolute top-6 left-[197px] -rotate-45 rounded-full"></span>
      <span className="w-40 h-[4px] bg-[#FFF6F2] absolute top-0 left-64 rounded-full"></span>
      <span className="angle-pulse-top" />
    </section>
  );
};

export const AngleLineToBottom = () => {
  return (
    <section className="w-[380px] h-20  relative">
      <span className="w-52 h-[4px] bg-[#FFF6F2] absolute bottom-12 left-0 rounded-full"></span>
      <span className="w-[68px] h-[4px] bg-[#FFF6F2] absolute bottom-6 left-[197px] rotate-45 rounded-full"></span>
      <span className="w-40 h-[4px] bg-[#FFF6F2] absolute bottom-0 left-64 rounded-full"></span>
      <span className="angle-pulse-bottom" />
    </section>
  );
};

// export const AmgleLineMiddle = () => {
//   return (
//     <section className="w-[380px] h-24 bg-red-300 relative">
//       <span className="w-full h-[2px] bg-blue-500 absolute bottom-12 left-0"></span>
//     </section>
//   );
// };
