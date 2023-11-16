// About.js

import React from 'react';
import PageCard from '../PageCard/PageCard';

const About = () => {
  return (
    <div>
      <PageCard
        title="About Our Company"
        content="At Our Company, we strive for excellence in everything we do. Learn more about our mission, vision, and the dedicated team driving our success."
      />
      <div className="mt-4 text-center">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide cutting-edge solutions that empower businesses and individuals to achieve their goals.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a future where technology seamlessly integrates with daily life, enhancing experiences and driving
          positive change.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default About;
