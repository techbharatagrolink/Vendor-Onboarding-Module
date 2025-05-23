"use client";
import { useEffect, useRef, useState, React } from "react";
import AssuredBadge from "./AssuredBadge";
import GrowInsights from "./GrowInsights";
import AdvertiseYourProducts from "./AdvertiseYourProducts";
import ShoppingFestival from "./ShoppingFestival";

const sections = [
  { id: "assuredBadge", label: "Assured Badge" },
  { id: "insights", label: "Insights And Tools" },
//   { id: "advertiseProducts", label: "Advertise Your Products" },
  { id: "shoppingFestival", label: "Bharat Agrolink Shopping Festival" },
 
];

export default function GrowStickySection() {
  
  const [activeId, setActiveId] = useState(sections[0].id);
   const sectionRefs = useRef({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3 ;

      for (let i = sections.length -1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop ;
          if (scrollPosition >= offsetTop) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call in case page is already scrolled

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  
  
 



  return (
    <div className="flex flex-col lg:flex-row  px-6 md:px-16 ">
      {/* Left Sticky Sidebar */}
      <aside className="lg:w-3/10 h-full  lg:sticky lg:top-20 p-2 mb-12 ">
        <nav className="w-full mt-10 p-2">
          <ul className="space-y-3 w-full ">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className="flex justify-center lg:justify-start itmes-center w-full"
              >
                <a
                  href={`#${sec.id}`}
                  onClick = {()=>setActiveId(sec.id)}
                  className={` nav-link py-2 px-4 flex justify-between text-center sm:text-left items-center font-bold hover:bg-gray-200 rounded-md font-medium${
                    activeId === sec.id
                      ? "font-bold text-appGreen border border-appGreen "
                      : "text-appTextDark"
                  }`}
                >
                  {activeId === sec.id ? (
                    <>
                      <img
                        src="/activeItem.png"
                        className="mr-2"
                        alt="activeItem"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Right Scrollable Content */}
      <main className="lg:w-7/10   pt-10">
        <section ref={(el) => (sectionRefs.current.assuredBadge = el)} className="scroll-mt-25  scroll-smooth" id="assuredBadge">
          <AssuredBadge />
        </section>
        <section ref={(el) => (sectionRefs.current.insights = el)} className="scroll-mt-25  scroll-smooth" id="insights">
          <GrowInsights />
        </section>
        {/* <section ref={(el) => (sectionRefs.current.advertiseProducts = el)} className="scroll-mt-25  scroll-smooth" id="advertiseProducts">
          <AdvertiseYourProducts />
        </section> */}
        <section ref={(el) => (sectionRefs.current.shoppingFestival = el)} className="scroll-mt-25  scroll-smooth" id="shoppingFestival">
          <ShoppingFestival />
        </section >
       
      </main>
    </div>
  );
}
