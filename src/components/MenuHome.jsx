import cupDrinkImage from '../assets/images/backgroundImages/cupDrinkImage.jpg'



function MenuHome() {
    return(
        <>
            <section className="">
                <div  style={{backgroundImage: `url(${cupDrinkImage})`}} className=" bg-center bg-auto h-[700px] relative">
                    <div style={{fontFamily: 'Alkatra'}} className=" mx-5 md:mx-40 absolute top-[35%] text-3xl space-y-14">
                        <p className=" cursor-pointer hover:underline">
                            Bar Menu
                        </p>

                        <p className="cursor-pointer hover:underline">
                            Food Menu
                        </p>
                        
                        <p className="cursor-pointer hover:underline">
                            Desserts Menu
                        </p>
                    </div>
                </div>

                
            </section>
        </>
    )
}

export default MenuHome;