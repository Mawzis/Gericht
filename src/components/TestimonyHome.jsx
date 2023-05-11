import blackSmile from "../assets/images/testimonyImages/blackSmile.png"
import jeanSmile from "../assets/images/testimonyImages/jeanSmile.png"
import redSmile from "../assets/images/testimonyImages/redsmile.png"
import whiteSmile from "../assets/images/testimonyImages/whiteSmile.png"


function TestimonyHome() {
    return(
        <>
            <section className="bg-black ">
                <div className=" py-20 px-5 md:max-w-[1080px] m-auto">
                    <div style={{fontFamily: 'Alkatra'}} className="text-center">
                        <p className=" text-xl">Testimony</p>
                        <p className="text-3xl md:text-6xl text-[#DCCA87] my-5">Happy Customers</p>
                    </div>

                    <div className=" ">
                        <div className=" md:flex justify-between">
                            <div className="">
                                <div className="md:flex justify-between items-center">
                                    <div className=" w-[30%] mt-10 md:mb-10">
                                        <img src={redSmile} alt="" />
                                    </div>

                                    <div className="my-3">
                                        <p className=" max-w-[300px] italic text-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos odio, dolores quidem, saepe voluptas eum totam sunt mollitia et exercitationem odit minus aliquam! Reiciendis in cupiditate repellendus! Fuga, autem.
                                        </p>
                                        <p className=" text-[#DCCA87] text-2xl">
                                            Wade Warren
                                        </p>
                                        <p className="">
                                            Sommelier
                                        </p>
                                    </div>
                                </div>



                                <div className=" md:flex justify-between items-center">
                                    <div className=" w-[30%] mt-10 md:mb-10">
                                        <img src={blackSmile} alt="" />
                                    </div>

                                    <div className="my-3">
                                        <p className=" max-w-[300px] italic text-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos odio, dolores quidem, saepe voluptas eum totam sunt mollitia et exercitationem odit minus aliquam! Reiciendis in cupiditate repellendus! Fuga, autem.
                                        </p>
                                        <p className="text-[#DCCA87] text-2xl">
                                            Robert Fox
                                        </p>
                                        <p className="">
                                            Chef
                                        </p>
                                    </div>
                                </div>
                            </div>




                            <div className="">
                                <div className=" md:flex justify-between items-center">
                                    <div className=" w-[30%] mt-10 md:mb-10">
                                        <img src={jeanSmile} alt="" />
                                    </div>

                                    <div className="my-3">
                                        <p className=" max-w-[300px] italic text-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos odio, dolores quidem, saepe voluptas eum totam sunt mollitia et exercitationem odit minus aliquam! Reiciendis in cupiditate repellendus! Fuga, autem.
                                        </p>
                                        <p className="text-[#DCCA87] text-2xl">
                                            Jane Cooper
                                        </p>
                                        <p className="">
                                            Chef
                                        </p>
                                    </div>
                                </div>



                                <div className=" md:flex justify-between items-center">
                                    <div className=" w-[30%] mt-10  md:mb-10 ">
                                        <img src={whiteSmile} alt="" />
                                    </div>

                                    <div className="my-3">
                                        <p className=" max-w-[300px] italic text-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos odio, dolores quidem, saepe voluptas eum totam sunt mollitia et exercitationem odit minus aliquam! Reiciendis in cupiditate repellendus! Fuga, autem.
                                        </p>
                                        <p className="text-[#DCCA87] text-2xl">
                                            Brooklyn Simmons
                                        </p>
                                        <p className="">
                                            Caterer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonyHome;