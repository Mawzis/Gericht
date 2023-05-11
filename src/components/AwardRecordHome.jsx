import laurelsImg from "../assets/images/backgroundImages/laurelsImg.png"



function AwardRecordHome() {
    return(
        <>
            <section>
                <div className="mt-28 md:flex reverse flex-row-reverse justify-between items-center max-w-[1080px] m-auto">
                    <div className="pr-6">
                        <img src={laurelsImg} alt="" />
                    </div>


                    <div style={{fontFamily: 'Alkatra'}} className="mx-5 text-[#DCCA87] mt-10 ">
                        <div className=" ">
                            <p  className=" text-xl md:text-3xl text-white">
                                Awards & Recognition
                            </p>
                            <p className=" text-4xl md:text-6xl my-5">
                                Our Laurels
                            </p>
                        </div>


                        <div className="">
                            <p className="text-xl py-4">
                                Bib Gourmond <br />
                                <span className=" text-gray-400 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                </span>
                            </p>
                            <p className="text-xl py-4">
                                Rising Star<br />
                                <span className=" text-gray-400 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur.
                                </span>
                            </p>
                            <p className="text-xl py-4">
                                AA Hospitality<br />
                                <span className=" text-gray-400 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                </span>
                            </p>
                            <p className="text-xl py-4">
                                Outstanding Chef<br />
                                <span className=" text-gray-400 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AwardRecordHome;