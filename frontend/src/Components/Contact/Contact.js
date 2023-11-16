// Contact.js

import React from 'react';
import PageCard from '../PageCard/PageCard';

const Contact = () => {
  return (
    <div>
      <PageCard
        title="Get in Touch"
        content="We value your feedback and inquiries. Reach out to us through the contact details below, and our team will be happy to assist you."
      />
      <div className="mt-4 text-center">
        <h2>Contact Details</h2>
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
        {/* Add a contact form or map if necessary */}
      </div>
    </div>
  );
};

export default Contact;
