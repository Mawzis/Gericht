import {Link} from 'react-router-dom'



function ContactContactUs() {
    return(
        <>
            <section>
                <div className="bg-black">
                    <div style={{fontFamily: 'Alkatra'}} className=" text-center  py-52">
                        <p className=" text-[#DCCA87] text-4xl my-5">
                            Contact Us 
                        </p>
                            <div className="text-2xl">
                                <Link to='/' className="text-2xl">HOME </Link>
                                <span className=""> Contact Us</span>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactContactUs;