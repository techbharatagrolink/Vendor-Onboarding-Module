import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-appGreen text-white w-full px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold">
          Popular categories to sell across India
        </h2>

        {/* Top 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/90">
          <div className="space-y-1">
            <p>Seeds</p>
            <p>Fertilizers</p>
            <p>Growth Promoters</p>
            <p>Micronutrients</p>
            <p>SInsecticides</p>
          </div>
          <div className="space-y-1">
            <p>Fungicides</p>
            <p>Herbicides</p>
            <p>Bio Pesticides</p>
            <p>Traps & Lures</p>
            <p>Agriculture Machinery</p>
          </div>
          <div className="space-y-1">
            <p>Drip Irrigation</p>
            <p>Sprinklers</p>
            <p>Garden Tools</p>
            <p>Pots & Planters</p>
            <p>Organic Farming Services</p>
          </div>
          <div className="space-y-1">
            <p>Hydroponics Kits</p>
            <p>Soil Testing Kits</p>
            <p>Indoor Farming Kits</p>
            <p>Agricultural Drones</p>
            <p>Smart Farming Solutions</p>
          </div>
        </div>

        <hr className="border-white/30" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-white/90">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-2">Sell Online</h3>
            <ul className="space-y-1">
              <li>Create Account</li>
              <li>List Products</li>
              <li>Storage & Shipping</li>
              <li>Fees & Commission</li>
              <li>Help & Support</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-2">Grow Your Business</h3>
            <ul className="space-y-1">
              <li>Insights & Tools</li>
              <li>Bharat Agrolink Ads</li>
              <li>Bharat Agrolink Value Services</li>
              <li>Shopping Festivals</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-2">Learn More</h3>
            <ul className="space-y-1">
              <li>FAQs</li>
              <li>Seller Success Stories</li>
              <li>Seller Blogs</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            {/* <h3 className="font-semibold mb-2">Download Mobile App</h3>
            <div className="space-y-2 mb-2">
              <Image
                src="/googleplay.png"
                alt="Logo"
                width={140}
                height={40}
                className="mr-3"
              />

              <Image
                src="/appstore.svg"
                alt="Logo"
                width={140}
                height={40}
                className="mr-3"
              />
            </div> */}
            <h3 className="font-semibold mb-2">Stay Connected</h3>
            <div className="flex gap-3 mt-2">
              <Link href="https://www.facebook.com/share/199Zdh62pe/?mibextid=qi2Omg" target="_blank"><Image
                src="/facebook.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              /></Link>
              <Link href="https://www.instagram.com/bharat_agrolink?igsh=MW1tenRqZzQwcmt0Yw==" target="_blank"><Image
                src="/instagram.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              /></Link>
              <Link href="https://www.linkedin.com/company/bharatagrolink/" target="_blank"><Image
                src="/linkedin.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              /></Link>
              <Link href="https://youtube.com/@bharatagrolink?si=bMR94epkTXlKwnCM" target="_blank" className="my-auto"><Image
                src="/youtube.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
