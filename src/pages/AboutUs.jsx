import AboutUsHero from "../components/AboutUSComponents/AboutHero";
import AboutHistory from "../components/AboutUSComponents/AboutHistory";
import AboutUsGridArea from "../components/AboutUSComponents/AboutUsGridArea";
import HappyHours from "../components/AboutUSComponents/HappyHours";
import VideoHome from "../components/VideoHome";
import ChefWordHome from "../components/ChefwordHome";
import TestimonyHome from "../components/TestimonyHome";
import IgGallerHome from "../components/IgGalleryHome";
import NewsLetterHome from "../components/NewsLetterHome";



function AboutUs() {
    return(
        <>
            <div className="bg-black px-2 pb-10 md:pb-40">
                <AboutUsHero/>
                <AboutHistory/>
                <AboutUsGridArea/>
                <HappyHours />
                <VideoHome />
            </div>
            <ChefWordHome/>
            <TestimonyHome />
            <IgGallerHome/>
            <NewsLetterHome/>
        </>
    )
}

export default AboutUs;