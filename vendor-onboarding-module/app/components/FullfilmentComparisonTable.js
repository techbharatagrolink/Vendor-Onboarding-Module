import React from "react";
export default function FulfillmentComparison() {
  const data = [
    {
      category: "Packaging",
      fulfillment: "Bharat Agrolink will pack your products",
      nonFulfillment: "Seller will pack their products before pick up",
    },
    {
      category: "Storage",
      fulfillment: "Bharat Agrolink will store your products at the nearest Bharat Agrolink warehouse",
      nonFulfillment: "Seller will store products at their premise or community warehouse",
    },
    {
      category: "Shipping",
      fulfillment: "Bharat Agrolink will pick and deliver your products to the customer",
      nonFulfillment: "Seller will schedule a pick-up & a Bharat Agrolink agent will pick your order",
    },
    {
      category: "Fees",
      fulfillment: "Relevant fees will be applicable",
      nonFulfillment: "A standard shipping fee, determined by the delivery location (local, zonal, or national), will be paid by the customer to facilitate delivery of the product.",
    },
    {
      category: "Returns",
      fulfillment: "Managed by Bharat Agrolink",
      nonFulfillment: "Managed by Bharat Agrolink",
    },
    {
      category: "Customer Service",
      fulfillment: "Managed by Bharat Agrolink",
      nonFulfillment: "Managed by Bharat Agrolink",
    },
    {
      category: "Assured",
      fulfillment: "Yes",
      nonFulfillment: "Assured badge to be provided basis reliability score",
    },
  ];

  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="min-w-full  overflow-hidden ">
        <thead className="bg-[#D2EEDF]">
          <tr className="bg-green-100 text-appTextDark text-left text-sm md:text-base">
            <th className="p-3 w-4/10 "> </th>
            <th className="p-3 w-3/10   font-semibold">Fulfilment by Bharat Agrolink</th>
            <th className="p-3 w/3-10 font-semibold">Non Fulfilment by Bharat Agrolink</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`text-sm md:text-base ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <td className="p-3  font-medium">{row.category}</td>
              <td className="p-3 ">{row.fulfillment}</td>
              <td className="p-3 ">{row.nonFulfillment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
