import React from "react";
import { Tooltip } from "react-tooltip"; // Ensure you've installed react-tooltip

const countries = [
  {
    name: "United States",
    flag: "https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "5-10 business days", cost: "$160" },
      { type: "Business Visa", processingTime: "7-15 business days", cost: "$190" },
    ],
  },
  {
    name: "Canada",
    flag: "https://img.icons8.com/?size=100&id=cYRU7TBWwNVs&format=png&color=000000",
    visas: [
      { type: "Student Visa", processingTime: "10-20 business days", cost: "$150" },
      { type: "Work Visa", processingTime: "15-30 business days", cost: "$155" },
    ],
  },
  {
    name: "United Kingdom",
    flag: "https://img.icons8.com/?size=100&id=t3NE3BsOAQwq&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "5-10 business days", cost: "$135" },
      { type: "Transit Visa", processingTime: "2-5 business days", cost: "$85" },
    ],
  },
  {
    name: "Australia",
    flag: "https://img.icons8.com/?size=100&id=P94rwJyovccu&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "15-20 business days", cost: "$145" },
      { type: "Work Visa", processingTime: "20-40 business days", cost: "$420" },
    ],
  },
  {
    name: "India",
    flag: "https://img.icons8.com/?size=100&id=esGVrxg9VCJ1&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "3-7 business days", cost: "$50" },
      { type: "Business Visa", processingTime: "5-10 business days", cost: "$100" },
    ],
  },
  {
    name: "Germany",
    flag: "https://img.icons8.com/?size=100&id=hTMPE6ntTofO&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "10-15 business days", cost: "$90" },
      { type: "Student Visa", processingTime: "15-20 business days", cost: "$75" },
    ],
  },
  {
    name: "France",
    flag: "https://img.icons8.com/?size=100&id=3muzEmi4dpD5&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "5-10 business days", cost: "$90" },
      { type: "Work Visa", processingTime: "15-30 business days", cost: "$125" },
    ],
  },
  {
    name: "Japan",
    flag: "https://img.icons8.com/?size=100&id=McQbrq9qaQye&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "5-7 business days", cost: "$30" },
      { type: "Business Visa", processingTime: "7-15 business days", cost: "$40" },
    ],
  },
  {
    name: "Brazil",
    flag: "https://img.icons8.com/?size=100&id=zHmH8HpOmM90&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "7-10 business days", cost: "$44" },
      { type: "Work Visa", processingTime: "15-25 business days", cost: "$100" },
    ],
  },
  {
    name: "Mexico",
    flag: "https://img.icons8.com/?size=100&id=UFGk2vu5rEkt&format=png&color=000000",
    visas: [
      { type: "Tourist Visa", processingTime: "10-15 business days", cost: "$36" },
      { type: "Student Visa", processingTime: "15-20 business days", cost: "$50" },
    ],
  },
  
];

const CountryToolTip = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {countries.map((country, index) => (
        <div key={index} className="text-center">
          <a data-tooltip-id={`tooltip-${index}`}>
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-20 h-20 mx-auto border rounded-full"
            />
            <p className="mt-2 font-medium">{country.name}</p>
          </a>
          <Tooltip
            id={`tooltip-${index}`}
            place="top"
            effect="solid"
            className="bg-gray-800 text-white p-4 rounded-md shadow-lg max-w-[90vw] sm:max-w-xs"
          >
            <div>
              <h3 className="font-bold text-lg mb-2">{country.name}</h3>
              <p className="text-sm font-medium mb-2">Visa Types and Costs:</p>
              <ul className="text-sm list-disc ml-4">
                {country.visas.map((visa, visaIndex) => (
                  <li key={visaIndex}>
                    <strong>{visa.type}:</strong> {visa.processingTime}, Cost: {visa.cost}
                  </li>
                ))}
              </ul>
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default CountryToolTip;
