
import AboutKnife from "../assets/images/backgroundImages/AboutKnife.png"


function AboutHome() {
    return(
        <>
            <section className=" md:h-[800px] md:max-w-[1080px] m-auto mb-20">
                <div className=" md:flex justify-between items-center">
                    <div className=" mt-10 py-10 px-5 text-center md:max-w-[40%]">
                        <h2 style={{fontFamily: 'Alkatra'}}  className=" text-center text-2xl md:text-6xl text-amber-600">About Us</h2>

                        <p className=" text-sm md:text-lg">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere repellat sit cum? Facilis exercitationem assumenda saepe est dignissimos fugiat at pariatur. Corrupti, fugit. Laborum, provident quis quae cupiditate quasi eos.
                        </p>
                        <button style={{fontFamily: 'Alkatra'}} className="my-3 bg-[#DCCA87] text-xs font-bold text-black hover:bg-[#0C0C0C] hover:text-[#DCCA87] p-3"> Know More</button>
                    </div>

                    <div className="">
                        <div className="">
                            <img className=" m-auto md:py-32 md:h-[900px]" src={AboutKnife} alt="" />
                        </div>
                    </div>

                    <div className=" md:max-w-[40%] text-center">
                        <p style={{fontFamily: 'Alkatra'}} className="text-2xl text-amber-600 md:text-6xl  mt-10">Our History</p>

                        <p className=" px-5 text-sm md:text-lg">
                            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
                        </p>

                        <button style={{fontFamily: 'Alkatra'}} className="my-3 bg-[#DCCA87] text-xs font-bold text-black hover:bg-[#0C0C0C] hover:text-[#DCCA87] p-3"> Know More</button>

                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutHome;