import laurelsImg from "../../assets/images/backgroundImages/laurelsImg.png"





function SubscribeContactUs() {
    const imgs = laurelsImg

    return(
        <>
            <section>
                <div className=" max-w-[1080px] m-auto md:flex justify-between">
                    <form className=" w-[80%] m-auto md:w-full max-w-[400px] space-y-10">
                        <input type="text" placeholder="Full Name" required className="w-full p-2 bg-black" />
                        <input type="email" placeholder="Email Address" required className=" w-full p-2 bg-black"/>
                        <textarea name="comment" placeholder="Message" required className=" w-full p-2 bg-black"></textarea>

                        <button style={{fontFamily: 'Alkatra'}} className=" text-black bg-[#DCCA87] hover:bg-black hover:text-[#DCCA87] py-2 px-5 ">
                            Subsribe
                        </button>
                    </form>

                    <div className=" w-[90%] my-10 max-w-[400px] ">
                        <img src={imgs} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubscribeContactUs;