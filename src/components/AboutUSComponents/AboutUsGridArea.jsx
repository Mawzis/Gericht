import abtImg1 from "../../assets/images/aboutUsImgs/abtImg1.png"
import abtImg2 from "../../assets/images/aboutUsImgs/abtImg2.png"

import OverTheYears from "./OverTheYears";
import DinnerOption from "./DinnerOption";
import LocationOption from "./LocationOption";
import BreakfastOption from "./BreakfastOption";




function AboutUsGridArea() {
  return(
    <>
      <section>
        <div className=" max-w-[1080px] m-auto sm:flex justify-between">
          <div className="sm:w-[300px] md:w-[450px]">
            <div className="">
              <p className=" text-sm md:text-xl mb-5 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
              </p>
            </div>

            <div className="">
              <img src={abtImg1} alt="" />
            </div>
          </div>

          <div style={{fontFamily: 'Alkatra'}} className="sm:w-[300px] md:w-[450px] ">
            <div className=" mt-1">
              <img src={abtImg2} alt="" />
            </div>
            <div className="">
              <OverTheYears/>
              <div className="sm:flex justify-between space-y-8 sm:space-y-0">
                <BreakfastOption/>
                <DinnerOption/>
                <LocationOption/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsGridArea;