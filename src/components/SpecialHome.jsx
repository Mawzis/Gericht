import cupJuice from "../assets/images/backgroundImages/cupJuice.png"



function SpecialHome() {
    return(
        <>
            <div className=" w-full bg-black">
                <div className="  py-32 md:max-w-[1080px] m-auto">
                    <div className=" text-center">
                        <p style={{fontFamily: 'Alkatra'}}  className=" text-xl md:text-3xl">
                            Menu That Fits You Palatte
                        </p>
                        <p style={{fontFamily: 'Alkatra'}} className=" text-[#DCCA87] text-2xl md:text-6xl">
                            Today’s Special
                        </p>
                    </div>


                    <div style={{fontFamily: 'Alkatra'}} className=" mx-5 mt-10 md:flex justify-between items-center">
                        <div className=" space-y-10 text-[#DCCA87] lg:min-w-[30%]">



                                {/* WINE AND BEER DESCRIPTION */}
                            <p className=" text-white text-center text-4xl">
                                Wine & Beer
                            </p>
                            <div className="">
                                <div className="flex">
                                    <p className=" min-w-[120px]">
                                        Chapel Hill Shiraz
                                    </p>
                                    <div className="w-full border-b"></div>
                                    <span className="text-white"> $56</span> <br /> 
                                </div>
                                <p className=" text-gray-400 text-sm ">AU | Bottle</p>
                            </div>


                            <div className="">
                                <div className="flex">
                                    <p className="min-w-[100px]">
                                        Catena Malbec
                                    </p>
                                    <p className="w-full border-b"></p>
                                    <p className="text-white"> $59</p>
                                </div>
                                <p className=" text-gray-400 text-sm ">AR | Bottle</p>
                            </div>



                            <div className="">
                                <div className="flex">
                                    <p className=" min-w-[105px]">
                                        La Vieille Rosé
                                    </p>
                                    <p className="w-full border-b"></p>
                                    <p className="text-white"> $44</p>
                                </div>
                                <p className=" text-gray-400 text-sm ">FR | 750 ml</p>
                            </div>


                            <div className="">
                                <div className="flex">
                                    <p className="min-w-[100px]">
                                        Irish Guinness
                                    </p>
                                    <p className="w-full border-b"></p>
                                    <p className="text-white"> $26</p>
                                </div>
                                <p className=" text-gray-400 text-sm ">IE | 750 ml</p>
                            </div>
                        </div>



                            {/* CENTER IMAGE */}

                        <div className=" flex justify-center md:h-[600px]">
                            <img src={cupJuice} alt="" className='' />
                        </div>



                            {/* COCKTAILS DESCRIPTIONS */}

                        <div className="">
                            <p className=" my-10 text-4xl text-center">
                                Cocktails
                            </p>



                            <div className="text-[#DCCA87] space-y-10">

                                <div className="">
                                    <div className="flex">
                                        <p className=" min-w-[90px]">
                                            Aperol Spritz
                                        </p>
                                        <p className="w-[100%] border-b"></p>
                                        <p className="text-white"> $26</p>
                                    </div>
                                    <p className=" text-gray-400 text-sm ">Aperol | Villa Marchesi prosecco | soda | 30ml</p>
                            </div>
                            

                            <div className="">
                                <div className="flex">
                                    <p className=" min-w-[110px]">
                                        Dark 'N' Stormy
                                    </p>
                                    <p className="w-[100%] border-b"></p>
                                    <p className="text-white"> $16</p>
                                </div>
                                    <p className=" text-gray-400 text-sm ">Dark rum | Ginger beer | Slice of lime.l</p>
                                </div>

                                <div className="">
                                    <div className="flex">
                                        <p className=" min-w-[60px]">
                                            Daiquiri
                                        </p>
                                        <p className="w-full border-b"></p>
                                        <p className="text-white"> $10</p>
                                    </div>
                                    <p className=" text-gray-400 text-sm ">Rum | Citrus juice | Sugar</p>
                                </div>


                                <div className="">
                                    <div className="flex">
                                        <p className=" min-w-[100px]">
                                            Old Fashioned
                                        </p>
                                        <p className="w-full border-b"></p>
                                        <p className="text-white"> $10</p>
                                    </div>
                                    <p className=" text-gray-400 text-sm ">Bourbon | Brown sugar | Angostura Bitters</p>
                                </div>


                                <div className="">
                                    <div className="flex">
                                        <p className=" min-w-[55px]">
                                            Negroni
                                        </p>
                                        <p className="w-full border-b"></p>
                                        <p className="text-white"> $26</p>
                                    </div>
                                    <p className=" text-gray-400 text-sm ">Gin | Sweet Vermouth | Campari | Orange garnish</p>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div className=" flex justify-center">
                        <button style={{fontFamily: 'Alkatra'}} className="my-7 bg-[#DCCA87] text-xs font-bold text-black hover:bg-[#0C0C0C] hover:transition hover:text-[#DCCA87] p-3">
                                View More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialHome;