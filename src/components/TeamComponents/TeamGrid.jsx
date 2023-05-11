import manLetus from "../../assets/images/backgroundImages/manLetus.png"
import patrick from "../../assets/images/TeamImages/patrick.jpg"
import jack from "../../assets/images/TeamImages/jack.jpg"
import stacy from "../../assets/images/TeamImages/stacy.jpg"
import aren from "../../assets/images/TeamImages/aren.jpg"
import javier from "../../assets/images/TeamImages/javier.jpg"




function TeamGrid() {
    return(
        <>
            <section className="bg-black ">
                <div style={{fontFamily: 'Alkatra'}} className=" px-3 max-w-[1080px] m-auto text-[#DCCA87] text-3xl">
                    <div className=" md:flex justify-between pt-12 space-y-8 md:space-y-0">
                        <div className="">
                            <img src={manLetus} alt="" className=" border border-[#DCCA87] md:max-w-[300px]"/>
                            <p className="">
                                Kevin Luo<br />
                                <span className="text-white text-xl">
                                    Head Chef
                                </span>
                            </p>
                        </div>

                        <div className="">
                            <img src={patrick} alt="" className=" border border-[#DCCA87] md:max-w-[300px]"/>
                            <p className="">
                                Patrck Choi<br />
                                <span className="text-white text-xl">
                                    Deputy Chef
                                </span>
                            </p>
                        </div>

                        <div className="">
                            <img src={jack} alt="" className=" border border-[#DCCA87] md:max-w-[300px]"/>
                            <p className="">
                                Jack Biscoff<br />
                                <span className="text-white text-xl">
                                    Station Chef
                                </span>
                            </p>
                        </div>
                    </div>



                    <div className="">
                        <div className="space-y-8 md:space-y-0 md:flex justify-between py-20 ">
                            <div className="">
                                <img src={stacy} alt="" className=" border border-[#DCCA87] md:max-w-[300px]"/>
                                <p className="">
                                    Stacy Lee<br />
                                    <span className="text-white text-xl">
                                        Station Chef
                                    </span>
                                </p>
                            </div>

                            <div className="">
                                <img src={aren} alt="" className=" border border-[#DCCA87] md:max-w-[300px]"/>
                                <p className="">
                                    Aren Goodman<br />
                                    <span className="text-white text-xl">
                                        Junior Chef
                                    </span>
                                </p>
                            </div>


                            <div className="">
                                <img src={javier} alt="" className=" border border-[#DCCA87] md:max-w-[300px]"/>
                                <p className="">
                                    Javier Dowsing<br />
                                    <span className="text-white text-xl">
                                        Junior Chef
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamGrid;