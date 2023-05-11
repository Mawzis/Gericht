import manLetus from '../assets/images/backgroundImages/manLetus.png'



function ChefWordHome() {
    return(
        <>
           <div className="md:max-w-[1080px] py-40 m-auto">
                <div className="md:flex items-center justify-between">
                    <div className=" md:max-w-md">
                        < img src={manLetus} alt="" />
                    </div>



                    <div className="md:max-w-[500px] mt-10">
                        <p style={{fontFamily: 'Alkatra'}} className=" text-center text-3xl">
                            Chef Word
                        </p>
                        <p style={{fontFamily: 'Alkatra'}} className=" text-[#DCCA87] text-2xl text-center">
                            What We Believe In
                        </p>
                        <p className=" mx-5">
                            <span className=" text-8xl">&#8220;</span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iure cum hic deserunt mollitia, porro neque perspiciatis iste cupiditate excepturi culpa, enim eius aliquam consectetur fugiat suscipit incidunt error rerum?
                        </p>
                        <p style={{fontFamily: 'Alkatra'}} className=" text-[#DCCA87] mx-5  my-5">
                            Kevin Luo
                        </p>
                        <p className=" text-gray-400  mx-5 pb-5">
                            Chef & Founder
                        </p>
                    </div>
                </div>
           </div>
        </>
    )
}

export default ChefWordHome;