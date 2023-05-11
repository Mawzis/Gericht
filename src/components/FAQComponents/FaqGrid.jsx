import FaqImage from "../../assets/images/FAQ Image/FaqImage.png"

import React, {useState} from 'react';




function FaqGrid() {
    const [activeDesc, setActiveDesc] = useState(1);

    const toggleDesc = (descNumber) => {
        if (activeDesc === descNumber) {
            setActiveDesc(null); // If the clicked description is already active, deactivate it
        } else {
            setActiveDesc(descNumber); // Activate the clicked description
        }
    };

    const getDescription = (descNumber, description) => {
        if (activeDesc === descNumber) {
            return (
                <div className="">
                    <p className="">{description}</p>
                </div>
            );
        }
        return null;
    };

    return(
        <>
            <section>
                <div className=" max-w-[1080px] m-auto">
                    <div className="mx-5 md:flex justify-between mt-14">
                        <div className=" max-w-[400px]">
                            <img src={FaqImage} alt="" />
                        </div>

                        <div className=" max-w-xl">
                            <div className="">
                                <p onClick={()=> toggleDesc(1)} className=" bg-[#e4d7ab] p-2 cursor-pointer text-[#DCCA87] md:text-4xl">
                                    How Do I Reach To The Restaurant?
                                </p>

                                <div className="px-3">
                                    {
                                        getDescription(1, "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.")
                                    }
                                </div>
                            </div>

                            <div className="">
                                <p onClick={()=> toggleDesc(2)} className=" bg-[#e4d7ab] p-2 cursor-pointer text-[#DCCA87] md:text-4xl">
                                    Is There A Reservation Required?
                                </p>

                                <div className="px-3">
                                    {
                                        getDescription(2, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic illo deserunt corporis quis tempore non! Tempore beatae corrupti exercitationem eligendi omnis, sunt perspiciatis cumque animi incidunt, eaque unde facilis.")
                                    }
                                </div>
                            </div>

                            <div className="">
                                <p onClick={()=> toggleDesc(3)} className=" bg-[#e4d7ab] p-2 cursor-pointer text-[#DCCA87] md:text-4xl">
                                    Can I Host An Event At The Restaurant?
                                </p>

                                <div className="px-3">
                                    {
                                        getDescription(3, "Accusamus dolor quod odio at voluptatibus beatae vitae, recusandae explicabo natus eligendi, veniam, totam provident enim iste quia. Sequi quidem quas tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.")
                                    }
                                </div>
                            </div>

                            <div className="">
                                <p onClick={()=> toggleDesc(4)} className=" bg-[#e4d7ab] p-2 cursor-pointer text-[#DCCA87] md:text-4xl">
                                    Is Valet Parking Available At The Restaurant?
                                </p>

                                <div className="px-3">
                                    {
                                        getDescription(4, "Numquam necessitatibus repudiandae quod illum, porro cum recusandae ipsa. Delectus, dolore quas incidunt aliquid dolorem id corrupti nostrum impedit vel dolorum quam.")
                                    }
                                </div>
                            </div>

                            <div className="">
                                <p onClick={()=> toggleDesc(5)} className=" bg-[#e4d7ab] p-2 cursor-pointer text-[#DCCA87] md:text-4xl">
                                    When Are The Happy Hours Of Your Bar?
                                </p>

                                <div className="px-3">
                                    {
                                        getDescription(5, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi, minima facilis nemo repudiandae debitis suscipit in tempora saepe obcaecati harum. Ipsa, et quisquam! Ad quasi ducimus neque. Neque, saepe!")
                                    }
                                </div>
                            </div>

                            <div className="">
                                <p onClick={()=> toggleDesc(6)} className=" bg-[#e4d7ab] p-2 cursor-pointer text-[#DCCA87] md:text-4xl">
                                    Is Seafood Available At The Restaurant?
                                </p>

                                <div className="px-3 border-b-2">
                                    {
                                        getDescription(6, "Voluptatibus recusandae corrupti nobis doloribus sunt fugit illum in culpa nostrum praesentium cum esse, dolorum labore nemo vero quae natus ut quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.")
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqGrid;