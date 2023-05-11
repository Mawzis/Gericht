
import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import PagesDropDown from "./DropDownPages/PagesDropDown"
import HomeDropDown from "./DropDownPages/HomeDropDown"
import BlogDropDown from "./DropDownPages/BlogDropDown"

function NavBar() {

    const [showMenu, setShowMenu] = useState (false)
    const [showHomeMenu, setShowHomeMenu] = useState(false);
    const [showPagesMenu, setShowPagesMenu] = useState(false);
    const [showBlogMenu, setShowBlogMenu] = useState(false);
    let menu 

                    // THIS NAV MENU WILL SHOW WHEN THE MOBILE TOGGLE BUTTON IS CLICKED

    if (showMenu) {
       menu=<div className="fixed top-12 left-0 bg-black w-full text-4xl flex-col justify-center  ">
                <nav style={{fontFamily: 'Alkatra'}} className='flex flex-col min-h-[5000px] items-center py-32 '>
                    <ul className='  space-y-20 text-center '>
                        <li onMouseEnter={() => setShowHomeMenu(true)} onMouseLeave={() => setShowHomeMenu(false)} className='hover:text-[#DCCA87] '>
                            <Link to='/'>
                                HOME <span>&#8744;</span>
                                {showHomeMenu && <HomeDropDown />}
                            </Link>
                        </li>
                        <li onMouseEnter={() => setShowPagesMenu(true)} onMouseLeave={() => setShowPagesMenu(false)} className='hover:text-[#DCCA87] '>
                            <Link to='/Pages'>
                                PAGES <span>&#8744;</span>
                                {showPagesMenu && <PagesDropDown />}
                            </Link>
                        </li>
                        <li className='hover:text-[#DCCA87] '>
                            <Link to='/ContactUs'>
                                CONTACT US
                            </Link>
                        </li>
                        <li onMouseEnter={() => setShowBlogMenu(true)} onMouseLeave={() => setShowBlogMenu(false)} className='hover:text-[#DCCA87] '>
                            <Link to='/Blog'>
                                BLOG <span>&#8744;</span>
                                {showBlogMenu && <BlogDropDown />}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
    }




                            // THE DESKTOP VIEW NAV BAR

    return(
        <>
            <header className='sticky top-0 z-10 mb-3 bg-black border-b-2  pt-3 '>    
                <div className='flex justify-between items-center px-3 md:py-5  max-w-[1300px] m-auto relative'>
                    <div style={{fontFamily: 'Alkatra'}} className="text-3xl">
                        <Link to='/'>GERíCHT</Link>
                    </div>



                            {/* 
                                ---THE MOUSE HOVER ARE USED IN THE NAV BAR SO THERE CAN BE A DROP DOWN MENU 
                                WHENEVER WE HOVER OVER THE THE NAV OPTIONS WITHE THE ARROW DOWN SIGNS

                                ---THE DROPDOWN COMPONENTS ARE CALLED FROM A CREATED COMPONENT
                                WHERE EACH OF THE DROP DOWN HAVE THEIR OWN COMPONENT CREATED FOR THEM
                             */}
                    <div>
                        <ul className='hidden md:inline-flex space-x-8 text-[#DCCA87] text '>
                            <li onMouseEnter={() => setShowHomeMenu(true)} onMouseLeave={() => setShowHomeMenu(false)}>
                                <Link to='/'>
                                    HOME <span>&#8744;</span>
                                    {showHomeMenu && <HomeDropDown />}
                                </Link>
                            </li>

                            <li onMouseEnter={() => setShowPagesMenu(true)} onMouseLeave={() => setShowPagesMenu(false)}>
                                <Link to='/Pages'>
                                    PAGES <span>&#8744;</span>
                                    {showPagesMenu && <PagesDropDown />}
                                </Link>
                            </li>

                            <li>
                                <Link to='/ContactUs'>CONTACT US</Link>
                            </li>

                            <li onMouseEnter={() => setShowBlogMenu(true)} onMouseLeave={() => setShowBlogMenu(false)}>
                                <Link to='/Blog'>
                                    BLOG <span>&#8744;</span>
                                    {showBlogMenu && <BlogDropDown />}
                                </Link>
                            </li>
                        </ul>
                    </div>


                                {/* THE  SEARCH MENU AT THE NAV BAR */}

                    <div className=" hidden md:block">
                        <input type="search" placeholder='Search Website' className='bg-black text-xl border-collapse border-b-2 p-2' />
                    </div>


                            {/* THE HAMBUGER MENU ICON */}
                    <div onClick={()=> setShowMenu(!showMenu)} className="text-3xl cursor-pointer font-extrabold md:hidden ">
                        &#x2630;

                        <div className="">
                            {menu}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;