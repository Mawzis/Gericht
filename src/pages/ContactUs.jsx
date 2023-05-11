import ContactContactUs from "../components/ContactUs Components/ContactContactUs";
import MapContactUs from "../components/ContactUs Components/MapContactUs";
import SubscribeContactUs from "../components/ContactUs Components/SubscribeContactUs";
import NewsLetterHome from "../components/NewsLetterHome"


 function ContactUs() {
    return(
        <>
            <div className="">
                <ContactContactUs/>
                <MapContactUs/>
                <SubscribeContactUs/>
                <NewsLetterHome/>
            </div>
        </>
    )
}

export default ContactUs;