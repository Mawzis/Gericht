import map from "../../assets/images/Contact Us page images/map.jpg"




function MapContactUs() {
    const imgMap = map
    return(
        <>
            <section>
                <div className=" w-[85%] max-w-[1055px] md:w-full my-20 md:my-40 border border-[#DCCA87] m-auto">
                    <img src={imgMap} alt="" />
                </div>
            </section>
        </>
    )
}

export default MapContactUs;