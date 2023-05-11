import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight}from 'react-icons/bs';



import ig1 from "../assets/images/igGallery/ig1.jpg"
import ig2 from "../assets/images/igGallery/ig2.jpg"
import ig3 from "../assets/images/igGallery/ig3.jpg"
import ig4 from "../assets/images/igGallery/ig4.jpg"
import ig5 from "../assets/images/igGallery/ig5.jpg"
import ig6 from "../assets/images/igGallery/ig6.jpg"
import ig7 from "../assets/images/igGallery/ig7.jpg"



function IgGalleryHome2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [ig1, ig2, ig3, ig4, ig5, ig6, ig7];
 
        const prevSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 1));
        };
      
        const nextSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 3 ? 0 : prevIndex + 1));
        };

        return(
            <>
                <section>
                    <div className="hidden md:flex max-w-[1080px] m-auto my-20">
                        <div className=" flex justify-between items-center">
                            <div className=" mt-20 mx-5 max-w-[200px]">
                                <p style={{fontFamily: 'Alkatra'}} className=" mb-5 text-3xl">
                                    Instagram
                                </p>
                                <p style={{fontFamily: 'Alkatra'}} className=" text-6xl text-[#DCCA87]">
                                    Photo Gallery
                                </p>
                                <p className=" my-5 text-gray-400 max-w-[250px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, corrupti sit deserunt ratione cupiditate repellendus maxime. Quas eos quaerat temporibus modi. Tempore quis, dicta quam ratione et at. Quod, harum.
                                </p>
                                <button style={{fontFamily: 'Alkatra'}} className="bg-[#DCCA87] border border-[#DCCA87] text-black text-sm p-2 hover:bg-black hover:text-[#DCCA87]">
                                    view More
                                </button>
                            </div>


                            <div>
                                <div className=" flex justify-between  max-w-[250px] m-5 border">
                                    {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                                    <img key={index} src={image} alt={`Slide ${index}`} className="flex-none  mr-4  border-[#DCCA87]" />
                                     ))}
                                </div>
                                <div className=" w-[100px] m-auto flex justify-between mt-20">
                                    <div className=" bg-[#DCCA87] text-black hover:bg-black hover:text-[#DCCA87] cursor-pointer rounded-3xl">
                                        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                                    </div>
                                    <div className=" bg-[#DCCA87] text-black hover:bg-black hover:text-[#DCCA87] cursor-pointer rounded-3xl">
                                        <BsChevronCompactRight onClick={nextSlide} size={30}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    };

export default IgGalleryHome2;

