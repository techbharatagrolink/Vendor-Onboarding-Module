import Image from "next/image";

export default function AccesstoourToolsSectionLandingPage() {
  const tools = [
    {
      title: "Fulfilment by Bharat Agrolink",
      description:
        "Worried about storing, packing, shipping, and delivering your products? Let Bharat Agrolink do it all for you.",
      icon: "/access1.svg",
    },
    {
      title: "Bharat Agrolink Ads",
      description:
        "Curious how your products will stand out from your competitors and gain maximum visibility?",
      icon: "/access2.svg",
    },
    {
      title: "Shopping Festivals",
      description:
        "Get access to India’s biggest shopping festivals, The Agro Billion Day, Big Dhamaka Sale, and more.",
      icon: "/access3.svg",
    },
    {
      title: "Learning Center",
      description:
        "Personalized learning modules, exclusive webinars, tutorial videos, and more to help sell better faster.",
      icon: "/access4.svg",
    },
    {
      title: "Account Management",
      description:
        "Improve product selection, product pricing, business insights, & more with our expert in-house account managers.",
      icon: "/access5.svg",
    },
    {
      title: "Mobile App",
      description:
        "Manage your online seller account 24x7 with Bharat Agrolink seller app. Compatible with all Android & iOS devices.",
      icon: "/access6.svg",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      <div className="mx -auto ">
        <h2 className="text-2xl text-appGreen md:text-4xl font-bold mb-4">
          Access our tools to grow faster on{" "}
          <span className="text-appRed">Bharat Agrolink</span>
        </h2>
        <p className="text-appText mb-8">
          We understand that your online business may require additional support
          from time to time, and we’ve got you covered.
          <br />
          With your Bharat Agrolink account, you gain access to a range of tools
          designed to help grow your online business.
        </p>

        <h3 className="text-6xl font-extrabold text-left text-appGreen mb-10 opacity-34">
          <span className="text-appRed">5x</span> Growth
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-card p-6 text-left"
            >
              <div className="flex items-start gap-4 ">
                <Image src={tool.icon} alt={tool.title} width={500} height={500} className="h-8 w-8" />
                <div>
                  <h4 className="font-semibold text-appText mb-2">
                    {tool.title}
                  </h4>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-appText text-sm ">{tool.description}</p>
                <button className="mt-3 text-appRed font-medium text-sm hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
