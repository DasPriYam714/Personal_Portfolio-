const AcademicResults = ({ title, subTitle, result, year }: any) => {
    return (
      <div className="w-full group flex">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
            <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-[#02bcd9] duration-300"></span>
          </span>
        </div>
        <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
            <div className=" space-y-4">
              <h3 className="text-2xl md:text-2xl font-semibold group-hover:text-white duration-300">
                {title}
              </h3>
              <p className="text-xl text-gray-400 group-hover:text-white duration-300">
                {subTitle}
              </p>
              <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                {year}
              </p>
            </div>
  
            <div>
              <p className="px-4 py-2 text-[#02bcd9] bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-base font-medium ">
                {result}
              </p>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default AcademicResults;
  