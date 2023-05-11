import {Link} from 'react-router-dom'






function Categorized() {
    return(
        <>
            <section>
                <div className=" text-center bg-black py-40">
                    <div className="">
                        <p style={{fontFamily: 'Alkatra'}}  className="text-[#DCCA87] text-2xl md:text-6xl my-3">
                            Category: Uncategorized
                        </p>
                    </div>

                    <div className=" md:hidden text-xl">
                        <Link to='/'>Home</Link> <br />
                        <span className=""> Archive by category: "Uncategorized</span>
                    </div>
                    <div className=" hidden md:block">
                        <Link to='/' className="hover:text-[#DCCA87] text-2xl">Home</Link> 
                        <span className=""> Archive by category: "Uncategorized</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categorized;