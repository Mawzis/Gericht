import React, {useState} from 'react';



import ig1 from "../assets/images/igGallery/ig1.jpg"
import ig2 from "../assets/images/igGallery/ig2.jpg"
import ig3 from "../assets/images/igGallery/ig3.jpg"
import ig4 from "../assets/images/igGallery/ig4.jpg"
import ig5 from "../assets/images/igGallery/ig5.jpg"
import ig6 from "../assets/images/igGallery/ig6.jpg"
import ig7 from "../assets/images/igGallery/ig7.jpg"



function IgGallerHome() {

    const slides = [
        {
            image: ig1
        },

        {
            image: ig2
        },

        {
            image: ig3
        },

        {
            image: ig4
        },

        {
            image: ig5
        },

        {
            image: ig6
        },

        {
            image: ig7
        },
    ]
      



    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(false);


    const intervalRef = React.useRef(null);
    const delay = 2500;

    React.useEffect(() => {
    intervalRef.current = setInterval(() => {
        next();
    }, delay);

    return () => clearInterval(intervalRef.current);
    }, [currentIndex]);


    const next = () => {
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
        next();
        }, delay);

        setShouldAnimate(true);
        setTimeout(() => {
        setShouldAnimate(false);
        }, 1000);
    };
 




    return(
        <>
            <section>
                <div className=" items-center md:max-w-[1080px] md:hidden m-auto">
                    <div className=" mt-20 mx-5">
                        <p style={{fontFamily: 'Alkatra'}} className=" my-3 text-xl">
                            Instagram
                        </p>
                        <p style={{fontFamily: 'Alkatra'}} className=" text-3xl text-[#DCCA87]">
                            Photo Gallery
                        </p>
                        <p className="text-sm my-5 text-gray-400 max-w-[250px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, corrupti sit deserunt ratione cupiditate repellendus maxime. Quas eos quaerat temporibus modi. Tempore quis, dicta quam ratione et at. Quod, harum.
                        </p>
                        <button style={{fontFamily: 'Alkatra'}} className="bg-[#DCCA87] border border-[#DCCA87] text-black text-sm p-2 hover:bg-black hover:text-[#DCCA87]">
                            view More
                        </button>
                    </div>

                    

                    <div className={`${shouldAnimate ? 'animate-slide-in' : ''}`}>
                        <div className='max-w-[250px] m-5 border border-[#DCCA87] md:mt-20'>
                                <img src={slides[currentIndex].image} alt="TrayOil" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IgGallerHome;