import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight}from 'react-icons/bs';
import TrayOil from '../assets/images/slideImages/TrayOil.png';
import lemonTurkey from '../assets/images/slideImages/lemonTurkey.png';
import chickenOil from '../assets/images/slideImages/chickenOil.png';
import windowLight from '../assets/images/slideImages/windowLight.png';

function Hero() {
    const slides = [
        {
            head:'Chase The New Flavour',
            description: 'Love The Original Taste',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
            image: TrayOil
        }, 

        {
            head:'Chase The New Flavour',
            description: 'The Key To Fine Dining',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus eius dolorem odit? Ut ipsa possimus accusamus vero unde nesciunt sint adipisci, inventore commodi, excepturi et doloremque placeat quisquam hic!',
            image: lemonTurkey
        },

        {
            head:'Chase The New Flavour',
            description: 'Reserve Your Table Today',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis amet inventore voluptates reprehenderit ipsam praesentium omnis repudiandae. Doloremque, quod, magni doloribus nobis quia nihil officiis aspernatur esse sit qui earum?',
            image: chickenOil
        },

        {
            head:'Chase The New Flavour',
            description: 'Food That Suprise You',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quas nesciunt facere a unde. Obcaecati unde fugit totam maiores est dignissimos, incidunt consequuntur quasi autem magnam recusandae harum a aut.',
            image: windowLight
        },


    ];

    const [currentIndex, SetCurrentIndex] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const intervalRef = React.useRef(null);
    const delay = 5000;

    React.useEffect(() => {
    intervalRef.current = setInterval(() => {
        next();
    }, delay);

    return () => clearInterval(intervalRef.current);
    }, [currentIndex]);
    

            //  THE PREVIOUS BUTTON SLIDER
    const prev = () =>{
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        SetCurrentIndex(newIndex);


        // FOR THE ANIMATION
        setShouldAnimate(true);
        setTimeout(() => {
        setShouldAnimate(false);
        }, 1000);
    };

            // THE NEXT BUTTON SLIDER
    
    

    const next = () => {
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        SetCurrentIndex(newIndex);
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
            <div className={` ${shouldAnimate ? 'animate-slide-in' : ''} pb-40 bg-black`}>
                <div className="px-5 w-full animate-slide-in md:max-w-[1080px] m-auto group items-center md:flex justify-between">
                    <div className="max-w-[370px]">
                        <div style={{fontFamily: 'Alkatra'}} className='my-3 text-lg md:text-3xl'>{slides[currentIndex].head}</div>
                        <div style={{fontFamily: 'Alkatra'}} className='my-2 text-4xl md:text-6xl text-amber-600'>{slides[currentIndex].description}</div>
                        <div className='text-xs text-slate-400 my-3'>{slides[currentIndex].text}</div>
                        <button className='bg-amber-700 border border-amber-700 p-2 rounded-md my-3 hover:bg-black'>
                            Explore More
                        </button>
                    </div>
                    

                    <div className="relative">
                        <div className=' max-w-[550px]'>
                            <img src={slides[currentIndex].image} alt="TrayOil" />
                        </div>

                        {/* previous arrow */}
                        <div className="hidden group-hover:block absolute top-[80%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  rounded-full bg-white hover:text-white hover:bg-black text-black cursor-pointer ">
                            <BsChevronCompactLeft onClick={prev} size={30}/>
                        </div>

                        {/* next arrow */}
                        <div className="hidden group-hover:block absolute top-[80%] -translate-x-0 translate-y-[-50%] right-5 text-2xl  rounded-full bg-white hover:text-white hover:bg-black text-black cursor-pointer">
                            <BsChevronCompactRight onClick={next} size={30}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Hero;
  