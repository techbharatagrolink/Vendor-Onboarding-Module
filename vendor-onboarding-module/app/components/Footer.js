import Image from "next/image";
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
            <p>Sell Seed Online</p>
            <p>Sell Fertilizer Online</p>
            <p>Sell Equipments Online</p>
            <p>Sell Organic Products Online</p>
            <p>Sell Oil Seeds Online</p>
          </div>
          <div className="space-y-1">
            <p>Sell Crop Protection Products</p>
            <p>Sell Farm Tools Online</p>
            <p>Sell Irrigation Equipment</p>
            <p>Sell Soil Health Products</p>
            <p>Sell Oil Seeds Online</p>
          </div>
          <div className="space-y-1">
            <p>Sell Gardening Supplies</p>
            <p>Sell Fertilizer Online</p>
            <p>Sell Farming Kits</p>
            <p>Sell Equipments Online</p>
            <p>Sell Oil Seeds Online</p>
          </div>
          <div className="space-y-1">
            <p>Sell Seed Online</p>
            <p>Sell Tractor Implements</p>
            <p>Sell Fertilizer Online</p>
            <p>Sell Agri-Tech Tools</p>
            <p>Sell Oil Seeds Online</p>
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
            <h3 className="font-semibold mb-2">Download Mobile App</h3>
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
            </div>
            <h3 className="font-semibold mb-2">Stay Connected</h3>
            <div className="flex gap-3 mt-2">
              <Image
                src="/facebook.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              />
              <Image
                src="/instagram.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              />
              <Image
                src="/linkedin.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              />
              <Image
                src="/youtube.svg"
                alt="Logo"
                width={30}
                height={30}
                // className="mr-1"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
