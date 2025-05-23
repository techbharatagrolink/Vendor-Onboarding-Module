"use client";
import { useEffect, useRef, useState, React } from "react";
import CreateAccount from "./CreateAccount";
import ListProducts from "./ListProducts";
import StorageAndShipping from "./StorageAndShipping";
import RecievePayments from "./RecievePayments";
import GrowFaster from "./GrowFaster";
import SellerApp from "./SellerApp";
import HelpAndSupport from "./HelpAndSupport";
import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: "createAccount", label: "Create Account" },
  { id: "listProducts", label: "List Products" },
  { id: "storage", label: "Storage and Shipping" },
  { id: "recievePayments", label: "Recieve Payments" },
  { id: "growFaster", label: "Grow Faster" },
  { id: "sellerApp", label: "Seller App" },
  { id: "help", label: "Help and Support" },
];

export default function SellOnlineSticky() {
  
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
                  className={` nav-link py-2 px-4 flex justify-between items-center font-bold hover:bg-gray-200 rounded-md font-medium${
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
      </aside>

      {/* Right Scrollable Content */}
      <main className="lg:w-7/10   py-10">
        <section ref={(el) => (sectionRefs.current.CreateAccount = el)} className="scroll-mt-25  scroll-smooth" id="createAccount">
          <CreateAccount />
        </section>
        <section ref={(el) => (sectionRefs.current.listProducts = el)} className="scroll-mt-25  scroll-smooth" id="listProducts">
          <ListProducts />
        </section>
        <section ref={(el) => (sectionRefs.current.storage = el)} className="scroll-mt-25  scroll-smooth" id="storage">
          <StorageAndShipping />
        </section>
        <section ref={(el) => (sectionRefs.current.recievePayments = el)} className="scroll-mt-25  scroll-smooth" id="recievePayments">
          <RecievePayments />
        </section >
        <section ref={(el) => (sectionRefs.current.growFaster = el)} className="scroll-mt-25  scroll-smooth" id="growFaster">
          <GrowFaster />
        </section>
        <section ref={(el) => (sectionRefs.current.sellerApp = el)} className="scroll-mt-25  scroll-smooth" id="sellerApp">
          <SellerApp />
        </section>
        <section ref={(el) => (sectionRefs.current.help = el)} className="scroll-mt-25  scroll-smooth" id="help">
          <HelpAndSupport />
        </section>
      </main>
    </div>
  );
}
