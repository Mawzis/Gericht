import {Link} from 'react-router-dom'


function BlogDropDown() {
    return(
        <>
            <div className=" md:absolute bg-black text-xs md:text-sm text-white md:pt-[20px] px-3 md:w-48 ">
                <ul>
                    <li className=' py-3'>
                        <Link>Two Column Blog</Link>
                    </li>

                    <li className='py-3'>
                        <Link>Three Column Blog</Link>
                    </li>

                    <li className='py-3'>
                        <Link>Left Sidebar Grid 1</Link>
                    </li>

                    <li className=' py-3'>
                        <Link>Left Sidebar Grid 2</Link>
                    </li>

                    <li className='py-3'>
                        <Link>Right Sidebar Grid 1</Link>
                    </li>

                    <li className='py-3'>
                        <Link>Right Sidebar Grid 2</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default BlogDropDown;