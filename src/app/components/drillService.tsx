import React from 'react';

const DrillService = () => {
  return (
    <section className="container mx-auto mt-10">
      <h2 id="animatedTag" className="text-base md:text-2xl font-bold text-center mb-8 p-8">What we are Providing</h2>
      
      {/* Drilling Services */}
      <div className="service">
        <h3>Bore Hole Drilling for Groundwater</h3>
        <p>Water well drilling is a crucial service for accessing underground water sources. At our company, we specialize in various methods to suit diverse geological (underground) conditions and project requirements.</p>
      </div>
      
      <div className="service">
        <h3>Core Drilling for Geotechnical analysis</h3>
        <p>Core drilling is crucial in geotechnical work for evaluating soil and rock properties, and construction site feasibility. It aids engineers and geologists in making informed decisions regarding foundation design, site suitability, and environmental assessments. Widely utilized across industries like construction, mining, environmental science, and geological exploration, core drilling plays a fundamental role in subsurface investigation and analysis.</p>
      </div>
      
      {/* Construction Services */}
      <div className="service">
        <h3>Pipeline Works</h3>
        <p>Efficient installation of pipelines for water supply, ensuring seamless flow and distribution. Applied in urban and rural settings, our pipeline solutions cater to municipalities, industries, and agricultural needs. From design to implementation, we ensure reliability and longevity in water conveyance systems.</p>
      </div>
      
      <div className="service">
        <h3>Overhead Tank Construction</h3>
        <p>Expert construction of overhead tanks for water storage and supply, optimizing space and accessibility. Ideal for residential, commercial, and institutional projects, our tanks guarantee uninterrupted water availability, even in areas with irregular water access. We prioritize durability and sustainability in every tank design and installation.</p>
      </div>
      
      {/* Geophysical Survey */}
      <div className="service">
        <h3>Geophysical Survey</h3>
        <p>Exploring the depths with our geophysical survey methods like for groundwater investigation. Utilizing advanced techniques, we assess subsurface characteristics to pinpoint water sources.</p>
      </div>
    </section>
  );
};

export default DrillService;
