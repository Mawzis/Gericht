import {Link} from 'react-router-dom'



function FAQHero() {
    return(
        <>
            <section>
                <div className=" bg-black text-center py-40 md:py-48">
                    <div className=" md:text-6xl mb-5">
                        <h2 className='text-[#DCCA87]'>FAQ</h2>
                    </div>

                    <div className="text-xl">
                        <Link to="/" className=' hover:text-[#DCCA87] '>Home</Link> 
                        <span className=" ml-4">FAQ</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQHero;