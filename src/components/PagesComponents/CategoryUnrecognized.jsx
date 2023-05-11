



function CategoryUnrecognized() {
    return(
        <>
            <section>
                <div className=" bg-black">
                    <div className=" py-20 p-5 md:flex justify-between max-w-[1080px] m-auto">
                        <div className="max-w-[550px]">
                            <h2 style={{fontFamily: 'Alkatra'}}  className="text-[#DCCA87] text-center text-3xl md:text-7xl px-5">
                                Category: Uncategorized
                            </h2>
                            <p className=" text-center">
                                It seems we can’t find what you’re looking for. Perhaps searching can help.
                            </p>
                        </div>

                                {/* SEARCH PAGE */}
                        <div className="">
                            <div className=" px-2 py-5 my-10 md:my-0 bg-gray-700 space-y-8">
                                <p style={{fontFamily: 'Alkatra'}} className="text-[#DCCA87] ">
                                    Search Page 
                                </p>
                                <input type="search" placeholder="Search Website" className=" p-2 bg-gray-700 border-collapse w-full border-white border-b-2"/>
                            </div>



                                    {/* ALL CATEGORIES */}
                            <div className=" px-2 py-5 my-10 bg-gray-700 space-y-8">
                                <p style={{fontFamily: 'Alkatra'}} className="text-[#DCCA87] ">
                                    All Categories 
                                </p>
                                <div className=" bg-gray-700 w-full flex justify-between">
                                    <p className=" cursor-pointer">Chef</p>
                                    <p className="text-[#DCCA87]">(1)</p>
                                </div>
                                <div className=" bg-gray-700 w-full flex justify-between">
                                    <p className=" cursor-pointer">Food</p>
                                    <p className="text-[#DCCA87]">(3)</p>
                                </div>
                                <div className=" bg-gray-700 w-full flex justify-between">
                                    <p className=" cursor-pointer">politician</p>
                                    <p className="text-[#DCCA87]">(1)</p>
                                </div>
                                <div className=" bg-gray-700 w-full flex justify-between">
                                    <p className=" cursor-pointer">Restaurant</p>
                                    <p className="text-[#DCCA87]">(4)</p>  
                                </div>
                                <div className=" bg-gray-700 w-full flex justify-between">
                                    <p className=" cursor-pointer">Trending</p>
                                    <p className="text-[#DCCA87]">(2)</p>
                                </div>
                                <div className=" bg-gray-700 w-full flex justify-between">
                                    <p className=" cursor-pointer">World</p>
                                    <p className="text-[#DCCA87]">(1)</p>
                                </div>
                            </div>




                                        {/* OUR LATEST POST */}

                            <div className=" px-2 py-5 my-10 bg-gray-700 space-y-8">
                                <p style={{fontFamily: 'Alkatra'}} className="text-[#DCCA87] ">
                                    Our Latest Posts 
                                </p>
                                <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                    Tips for prepping and caring for your grill
                                </p>
                            </div>


                                        {/* RELATED TAGS */}
                            <div className=" px-2 py-5 my-10 bg-gray-700 space-y-8">
                                <p style={{fontFamily: 'Alkatra'}} className="text-[#DCCA87] ">
                                    Related Tags 
                                </p>
                                <div className=" flex justify-between">
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Caring
                                    </p>
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Easy
                                    </p>
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Expert
                                    </p>
                                </div>


                                <div className=" flex justify-between">
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Food 
                                    </p>
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Help
                                    </p>
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> learn
                                    </p>
                                </div>


                                <div className=" flex justify-between">
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Mocktails 
                                    </p>
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Photograph
                                    </p>
                                </div>



                                <div className=" flex justify-between">
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Politician  
                                    </p>
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Rule 
                                    </p>
                                </div>



                                <div className=" flex justify-between">
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Team   
                                    </p>
                                    <p className=" cursor-pointer hover:text-[#DCCA87] bg-gray-700 w-full">
                                        <span className=" text-2xl font-bold text-[#DCCA87]">-</span> Things 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryUnrecognized;