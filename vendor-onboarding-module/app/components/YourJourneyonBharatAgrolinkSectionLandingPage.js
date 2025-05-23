import Image from "next/image";

const steps = [
  {
    title: "Create",
    desc: "Register in just 10 mins with valid GST, address, & bank details",
    img: "/create svg.svg",
  },
  {
    title: "List",
    desc: "List your products (min 1 no.) that you want to sell on Bharat Agrolink",
    img: "/list svg.svg",
  },
  {
    title: "Orders",
    desc: "Receive orders from a growing community of farmers and agri-buyers across India",
    img: "/orders-icon 1.svg",
  },
  {
    title: "Shipment",
    desc: "Bharat Agrolink ensures stress free delivery of your products",
    img: "/shipment-icon 1.svg",
  },
  {
    title: "Payment",
    desc: "We do not credit the payment to the vendor after dispatch, we proceed with the payment after complete return policy",
    img: "/payment-icon 1.svg",
  },
];

export default function YourJourneySection() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className=" mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-appGreen">
          Your Journey <span className="text-appRed">on Bharat Agrolink</span>
        </h2>
        <p className="text-appText mt-2 max-w-2xl ">
          Starting your online business with Bharat Agrolink is easy. Join thousands of {" "}
          <br />
          sellers building their success with us every day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-[100%] h-80 mb-2">
              <Image
                src={step.img}
                alt={step.title}
                fill
                className="object-contain"
                // width={500}
                  // height={500}
              />
            </div>
            <h3 className="font-semibold text-lg text-appText">{step.title}</h3>
            <p className="text-appText text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
