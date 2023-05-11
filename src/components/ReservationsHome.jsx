function ReservationsHome() {
    return(
        <>
            <div className=" bg-black py-20">
                <div className=" border md:max-w-[1080px] m-auto border-[#DCCA87] mt-10">
                    <div style={{fontFamily: 'Alkatra'}} className=" text-center space-y-5 my-10">
                        <p className="">Reservations</p>
                        <p className=" text-[#DCCA87] text-3xl">Book A Table</p>
                    </div>

                    <div className=" space-y-8 md:space-y-0 my-5 md:flex justify-between md:w-1/2 m-auto">
                        <div className="">
                            <select name="" id="" className="bg-black w-[90%] ml-[5%] border border-[#DCCA87]">
                                <option value="one-person">One Person</option>
                                <option value="two-person">Two Persons</option>
                                <option value="three-person">Three Persons</option>
                                <option value="three-person">Four Persons (MAX)</option>
                            </select>
                        </div>

            
                        <div >
                            <input type="date"  className=" ml-[5%] w-[90%] bg-black border border-[#DCCA87]"/>
                        </div>


                        <div >
                            <input type="time"  className=" ml-[5%] w-[90%] bg-black border border-[#DCCA87]"/>
                        </div>
                    </div>

                    <div className=" flex justify-center">
                    <button style={{fontFamily: 'Alkatra'}} className="mb-7 bg-[#DCCA87] text-xs font-bold text-black hover:bg-[#0C0C0C] hover:text-[#DCCA87] p-3"> Book Now</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReservationsHome;
 