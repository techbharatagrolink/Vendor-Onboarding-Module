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
            <p><Link target="_blank" href="https://bharatagrolink.com/search?search=seeds">Seeds</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/fertilizers">Fertilizers</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/growth-promoterregulator">Growth Promoters</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/micronutrients">Micronutrients</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/insecticides">Insecticides</Link></p>
          </div>
          <div className="space-y-1">
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/fungicides">Fungicides</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/herbicides">Herbicides</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/bio-pesticides">Bio Pesticides</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/traps-and-lures">Traps and Lures</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/machines">Agricutural Machinery</Link></p>
          </div>
          <div className="space-y-1">
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/drip-and-pipe">Drip Irrigation</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/sprinkler-set">Sprinklers</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/garden-tools">Garden Tools</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/garden-accessories">Pots and Planters</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/services">Services</Link></p>
          </div>
          <div className="space-y-1">
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/hydroponic-kit">Hydroponic Kits</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/soil-testing-kit">Soil Testing Kits</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/indoor-growing-kit">Indoor Growing Kits</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/drones">Agricultural Drones</Link></p>
            <p><Link target="_blank" href="https://bharatagrolink.com/shop/smart-farming">Smart Farming Solutions</Link></p>
          </div>
        </div>

        <hr className="border-white/30" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-white/90">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-2"><Link  href="/SellOnline">Sell Online</Link></h3>
            <ul className="space-y-1">
              <li><Link  href="/SellOnline#createAccount">Create Account</Link></li>
              <li><Link  href="/SellOnline#listProducts">List Products</Link></li>
              <li><Link href="/SellOnline#storage">Shipping</Link></li>
              <li><Link  href="/SellOnline#help">Help And Support</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-2"><Link href="/Grow">Grow Your Business</Link></h3>
            <ul className="space-y-1">
              <li><Link  href="/Grow#insights">Insights & Tools</Link></li>
              {/* <li>Bharat Agrolink Ads</li> */}
              <li><Link  href="/Grow#assuredBadge">Bharat Agrolink Value Services</Link>s</li>
              <li><Link href="/Grow#shoppingFestival">Shopping Festival</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-2"><Link  href="/Learn">Learn More</Link></h3>
            <ul className="space-y-1">
              <li><Link  href="/Learn#general">FAQs</Link></li>
              {/* <li>Seller Success Stories</li> */}
              <li><Link  href="/Learn#general">Seller Blogs</Link></li>
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
              <Link target="_blank" href="https://www.facebook.com/share/199Zdh62pe/?mibextid=qi2Omg" ><Image
                src="/facebook.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              /></Link>
              <Link target="_blank" href="https://www.instagram.com/bharat_agrolink?igsh=MW1tenRqZzQwcmt0Yw==" ><Image
                src="/instagram.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              /></Link>
              <Link target="_blank" href="https://www.linkedin.com/company/bharatagrolink/" ><Image
                src="/linkedin.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              /></Link>
              <Link target="_blank" href="https://youtube.com/@bharatagrolink?si=bMR94epkTXlKwnCM" className="my-auto"><Image
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
