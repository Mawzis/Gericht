function NewsLetterHome() {
    return(
        <>
            <section className="md:max-w-[1080px] m-auto">
                <div className=" bg-black px-2 py-10 mt-20 mx-5 border border-[#DCCA87] text-center animate-slide-in md:py-36 ">
                    <div className=" space-y-5">
                        <p style={{fontFamily: 'Alkatra'}} className=" md:text-3xl">
                            News Letter
                        </p>
                        <p style={{fontFamily: 'Alkatra'}} className="text-[#DCCA87] text-2xl md:text-6xl">
                            Subscribe To Our NewsLetter
                        </p>
                        <p className=" text-gray-400 text-sm pb-10">
                            And Never Miss Latest Updates!
                        </p>
                    </div>

                    <div className=" space-y-4 md:space-y-0 md:flex justify-between md:w-[80%] m-auto">
                        <div className="  md:w-[80%]">
                            <input type="mail" placeholder="Email Address" className="bg-black w-full p-2 border border-[#DCCA87] md:p-4"/>
                        </div>

                        <div className="">
                            <button style={{fontFamily: 'Alkatra'}} className=" border border-[#DCCA87] bg-[#DCCA87] text-black text-sm p-2 md:p-4 hover:bg-black hover:text-[#DCCA87]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetterHome;