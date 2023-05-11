import {Link} from 'react-router-dom'


function PagesDropDown() {
    return(
        <>
            <div className=" md:absolute bg-black text-xs md:text-sm  text-white pt-[20px] px-3 w-48">
                <ul>
                    <li className=' py-3'>
                        <Link to="ABoutUs">About Us</Link>
                    </li>

                    <li className='py-3'>
                        <Link to="Services">Services</Link>
                    </li>

                    <li className='py-3'>
                        <Link to="Team">Team</Link>
                    </li>

                    <li className='py-3'>
                        <Link to="Faq">FAQ</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PagesDropDown;