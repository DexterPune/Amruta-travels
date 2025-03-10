import React from "react";

const ForceUrbaniaPricing = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-gradient-to-r from-indigo-50 via-blue-50 to-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
        What is the price of Force Urbania per km in Pune?
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        
        {/* Left Section - Price List */}
        <div className="space-y-6">
          {[ 
            { seats: "17 Seater", price: "₹33 Per KM" },
            { seats: "13 Seater", price: "₹33 Per KM" },
            { seats: "10 Seater", price: "₹33 Per KM" },
          ].map((item, index) => (
            <div
              key={index}
              className="pricing-card"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.seats} Force Urbania
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Amruta Travels provides the luxury {item.seats} Force Urbania on rent in Pune.
                </p>
              </div>
              <span className="text-2xl font-bold text-red-600">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional section for added visual appeal */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Prices are subject to change based on distance and availability.
        </p>
      </div>
    </div>
  );
};

export default ForceUrbaniaPricing;
