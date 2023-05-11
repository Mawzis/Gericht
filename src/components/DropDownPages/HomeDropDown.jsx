import {Link} from 'react-router-dom'


function HomeDropDown() {
    return(
        <>
            <div className=" md:absolute text-xs sm:text-sm bg-black text-white pt-[20px] px-3 w-48">
                <ul>
                    <li className=' py-3'>
                        <Link to='/'>Home1</Link>
                    </li>

                    <li className='py-3'>
                        <Link>Home2</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HomeDropDown;