import React, {useState} from 'react';



import blog1 from "../assets/images/blogImages/blog1.png"
import blog2 from "../assets/images/blogImages/blog2.png"
import blog3 from "../assets/images/blogImages/blog3.png"
import blog4 from "../assets/images/blogImages/blog4.png"
import blog5 from "../assets/images/blogImages/blog5.png"
import blog6 from "../assets/images/blogImages/blog6.png"
import blog7 from "../assets/images/blogImages/blog7.png"
import blog8 from "../assets/images/blogImages/blog8.png"
import blog9 from "../assets/images/blogImages/blog9.png"

function GerichtUpdate() {

    const slides = [
        {
            image: blog1,
            head:'Restaurant / Admin',
            description: 'The Guide on Food Restaurant to Help You get Rich',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        }, 

        {
            image: blog2,
            head:'Restaurant / Admin',
            description: '15 Things You need To Know about Food Restaurant',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },

        {
            image: blog3,
            head:'Restaurant / Admin',
            description: "5 Secretes of the Expert of Food Restaurant You Don't know ",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },

        {
            image: blog4,
            head:'Restaurant / Admin',
            description: 'Five Easy Ways To Facilitate Food Related Restaurant',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },

        {
            image: blog5,
            head:'Restaurant / Admin',
            description: 'Will Food Restaurant Ever Rule The World',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },

        {
            image: blog6,
            head:'Restaurant / Admin',
            description: 'Five Easy ways to facilitate Food Related Restaurant',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },

        {
            image: blog7,
            head:'Restaurant / Admin',
            description: 'How to Make your Food Photograph Look Aesthetic',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },

        {
            image: blog8,
            head:'Restaurant / Admin',
            description: 'Tips For Prepping and Caring For Your Grill',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },

        {
            image: blog9,
            head:'Restaurant / Admin',
            description: 'Summer Cocktail And Mocktail',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam nisi delectus hic totam illo tempora? Debitis inventore eos ab earum consectetur molestiae veniam ducimus, ex asperiores tenetur repellendus! Distinctio.',
        },
    ]

    const [currentIndex, SetCurrentIndex] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(false);




    
    const intervalRef = React.useRef(null);
    const delay = 4000;

    React.useEffect(() => {
    intervalRef.current = setInterval(() => {
        next();
    }, delay);

    return () => clearInterval(intervalRef.current);
    }, [currentIndex]);



    
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
            <section className={`py-20 md:py-40 bg-black`}>
                <div className="">
                    <div style={{fontFamily: 'Alkatra'}} className=" text-center py-10">
                        <p className="text-xl">
                            Blogs
                        </p>
                        <p className="text-[#DCCA87] text-3xl">
                            Gericht Updates
                        </p>
                    </div>



                    <div className={`${shouldAnimate ? 'animate-slide-in' : '' } max-w-[350px] m-auto`}>
                        <div>
                            <div className=' m-5'>
                                <img src={slides[currentIndex].image} alt="TrayOil" />
                            </div>
                        </div>
                        <div className="">
                            <div className='px-5 w-full md:max-w-[1080px] m-auto group items-center md:flex justify-between'>
                            <div className="max-w-[370px]">
                                <div className='my-3 text-xs'>{slides[currentIndex].head}</div>
                                <div style={{fontFamily: 'Alkatra'}} className='my-2 text-xl text-[#DCCA87]'>{slides[currentIndex].description}</div>
                                <div className='text-xs text-slate-400 my-3'>{slides[currentIndex].text}</div>
                            </div>
                            </div>
                        </div>
                        <div style={{ fontFamily: 'Alkatra' }} className=" m-5 text-[#DCCA87] cursor-pointer">
                            Read More
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GerichtUpdate;  
