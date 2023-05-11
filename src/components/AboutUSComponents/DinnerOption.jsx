import React, { useEffect, useState, useRef } from 'react';



function DinnerOption() {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && count < 50) {
            const interval = setInterval(() => {
              setCount((prevCount) => {
                if (prevCount < 50) {
                  return prevCount + 1;
                } else {
                  clearInterval(interval);
                  return prevCount;
                }
              });
            }, 200);
  
            return () => {
              clearInterval(interval);
            };
          }
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );
  
      if (countRef.current) {
        observer.observe(countRef.current);
      }
  
      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, [count]);





    return(
        <>
            <section>
                <div style={{fontFamily: 'Alkatra'}} className="">
                    <p  ref={countRef} className="text-[#DCCA87] text-3xl md:text-5xl py-2 ">
                        {count}+
                    </p>
                    <p className="text-xl">
                        Dinner Options
                    </p>
                </div>
            </section>
        </>
    )
}

export default DinnerOption;