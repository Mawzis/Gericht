import { Link } from "react-router-dom";



function TeamHero() {
    return(
        <>
            <section>
                <div className=" bg-black">
                    <div style={{fontFamily: 'Alkatra'}} className=" text-center py-40 md:py-48">
                        <p className="text-3xl md:text-5xl text-[#DCCA87] py-5">
                            Team 
                        </p>
                        <p className="">
                            <Link to="/" className=" text-xl pr-3 hover:text-[#DCCA87]">Home</Link>
                            <span className="">Team</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamHero;