"use client";
import { useEffect, useRef, useState, React } from "react";
import AssuredBadge from "./AssuredBadge";
import GrowInsights from "./GrowInsights";
import AdvertiseYourProducts from "./AdvertiseYourProducts";
import ShoppingFestival from "./ShoppingFestival";
import Image from "next/image";
import LearnGeneral from "./LearnGeneralComponent";
import LearnFeesAndCharges from "./LearnFeesAndCharges";
import Link from "next/link";

const sections = [
  { id: "general", label: "General " },
  { id: "feesAndCharges", label: "Fees And Charges" },
//   { id: "advertiseProducts", label: "Advertise Your Products" },
//   { id: "shoppingFestival", label: "Bharat Agrolink Shopping Festival" },
 
];

export default function LearnStickySection() {
  
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
                <Link
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
                      <Image
                        src="/activeItem.png"
                        className="mr-2"
                        alt="activeItem"
                        width={15}
                  height={15}
                      />
                    </>
                  ) : (
                    ""
                  )}
                  {sec.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="learnStickyImage sm:h-1/3 sm:w-1/3 md:h-1/4 md:w-1/4  lg:h-2/3 lg:w-2/3 mx-auto flex justify-center items-center p-2 ">
        <Image
         src={"/iphone.png"}
        alt="Learn Sticky Image"
        width={400}
        height={400}
        className="mt-10"
        />

        </div>
      </aside>

      {/* Right Scrollable Content */}
      <main className="lg:w-7/10 pt-10 pb-10">
        <section ref={(el) => (sectionRefs.current.general = el)} className="scroll-mt-25  scroll-smooth" id="general">
            <LearnGeneral/>
        </section>
        <section ref={(el) => (sectionRefs.current.feesAndCharges = el)} className="scroll-mt-25  scroll-smooth" id="feesAndCharges">
            <LearnFeesAndCharges/>
        </section>
        
       
      </main>
    </div>
  );
}
