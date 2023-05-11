import Hero from "../components/Hero";
import AboutHome from '../components/AboutHome'
import ReservationsHome from "../components/ReservationsHome";
import MenuHome from "../components/MenuHome";
import SpecialHome from "../components/SpecialHome";
import ChefWordHome from "../components/ChefwordHome";
import TestimonyHome from "../components/TestimonyHome";
import VideoHome from "../components/VideoHome";
import AwardRecordHome from "../components/AwardRecordHome";
import GerichtUpdate from "../components/GerichtUpdate";
import IgGallerHome from "../components/IgGalleryHome";
import IgGalleryHome2 from "../components/IgGalleryHome2";
import NewsLetterHome from "../components/NewsLetterHome";


function HomePage() {
    return(
        <>
            <div>
                <Hero/>
                <AboutHome/>
                <ReservationsHome/>
                <MenuHome/>
                <SpecialHome/>
                <ChefWordHome/>
                <TestimonyHome/>
                <VideoHome/>
                <AwardRecordHome/>
                <GerichtUpdate/>
                <IgGallerHome/>
                <IgGalleryHome2/>
                <NewsLetterHome/>
            </div>
        </>
    )
}

export default HomePage;