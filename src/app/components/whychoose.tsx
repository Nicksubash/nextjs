import React from "react";
import Icon from "./ui/icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHandshake, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { serialize } from "v8";

 // Import the specific icons you need


const Whychoose: React.FC = () => {
  return (
    <div className="bg-blue-300 py-10 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Why Choose Us?</h2>
        <p className="text-lg text-black">We are committed to delivering high-quality construction services tailored to meet our clients' needs. Here are some reasons why you should choose us:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <Icon/>
           
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-gray-700">Our team consists of skilled professionals with years of experience in the construction industry.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faHandshake} className="text-blue-500 mb-4 " />
            <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            <p className="text-gray-700">We prioritize reliability and ensure timely completion of projects within budget.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-700">Quality is our top priority, and we use the best materials and techniques to deliver outstanding results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
