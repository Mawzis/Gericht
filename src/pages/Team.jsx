import TeamGrid from "../components/TeamComponents/TeamGrid";
import TeamHero from "../components/TeamComponents/TeamHero";
import VideoHome from "../components/VideoHome";
import AwardRecordHome from "../components/AwardRecordHome";
import NewsLetterHome from "../components/NewsLetterHome";

function Team() {
    return(
        <>
            <TeamHero/>
            <TeamGrid/>
            <div className=" bg-black pb-20">
                <VideoHome/>
                <AwardRecordHome/>
                <NewsLetterHome/>
            </div>
        </>
    )
}

export default Team;