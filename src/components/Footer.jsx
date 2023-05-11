
import {Link} from 'react-router-dom'

function Footer () {
    return(
        <>
            <footer className="">
                <div className="">
                    <div className="">
                        <div className="md:flex justify-between items-center md:max-w-[1080px] m-auto py-10 md:py-32 px-2 text-center">
                            <div className="space-y-3">
                                <p style={{fontFamily: 'Alkatra'}} className=" text-2xl md:text-4xl font-bold ">
                                    Contact Us
                                </p>
                                <p className="text-slate-400 text-sm">
                                    9 W 53rd St, New York, NY 10019, USA
                                </p>
                                <p className="text-slate-400 text-sm">
                                    +1 212-344-1230
                                </p>
                                <p className="text-slate-400 text-sm">
                                    +1 212-344-0
                                </p>
                            </div>

                            <div className="">
                                <h1 style={{fontFamily: 'Alkatra'}} className="text-6xl md:text-8xl text-amber-600 my-5 md:my-0">
                                    <Link to='/'>GERICHT</Link>
                                </h1>

                                <p className="text-slate-400 text-sm md:text-xl max-w-xs m-auto my-6">
                                    “The best way to find yourself is to lose yourself in the service of others.”
                                </p>
                            </div>

                            <div className="my-10 md:my-0 space-y-4 ">
                                <p className="">
                                    Working Hours
                                </p>
                                <p className="text-slate-400 text-sm">
                                    Monday-Friday:
                                </p>
                                <p className="text-slate-400 text-sm">
                                    08:00 am -12:00 am
                                </p>

                                <p className="text-slate-400 text-sm">
                                    Saturday-Sunday:
                                </p>
                                <p className="text-slate-400 text-sm">
                                    07:00am -11:00 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;