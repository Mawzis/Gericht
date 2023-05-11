import MenuHome from "../components/MenuHome";
import ReservationsHome from "../components/ReservationsHome";
import HappyHoursService from "../components/ServicesComponents/HappyHours";
import ServicesHero from "../components/ServicesComponents/ServicesHero";
import ServingQuality from "../components/ServicesComponents/ServingQuality";
import NewsLetterHome from "../components/NewsLetterHome"

function Services() {
    return(
        <>
            <ServicesHero/>
            <ServingQuality/>
            <MenuHome/>
            <ReservationsHome/>
            <HappyHoursService/>
            <NewsLetterHome/>
        </>
    )
}

export default Services;