import videoImage from "../assets/images/backgroundImages/videoImage.png"


function VideoHome() {
    const imgURL = videoImage
    return(
        <>
            <section>
                <div className="relative">
                    <a href="https://www.youtube.com/watch?v=-A6C6AlTE1I" target="_blank" rel="noopener noreferrer">
                        <img className="w-full" src={imgURL} alt="Thumbnail" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 rounded-full bg-black opacity-50"></div>
                            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

export default VideoHome;