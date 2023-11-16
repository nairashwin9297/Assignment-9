// Jobs.js

import React from 'react';
import PageCard from '../PageCard/PageCard';
import image2 from '../../images/image2.webp'
import image3 from '../../images/image3.webp'
import image4 from '../../images/image4.png'

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Join our team as a frontend developer and contribute to creating stunning user interfaces.',
      image:image2
    },
    {
      id: 2,
      title: 'Backend Developer',
      description: 'Explore opportunities as a backend developer and work on building robust and scalable systems.',
      image:image3
    },
    {
      id: 3,
      title: 'UX Designer',
      description: 'Shape the user experience as a UX designer and bring creativity to our product designs.',
      image:image4
    },
  ];

  return (
    <div>
      <h2 className="text-center mb-4">Job Opportunities</h2>
      {jobs.map((job) => (
        <PageCard key={job.id} title={job.title} content={job.description} image={job.image}/>
      ))}
    </div>
  );
};

export default Jobs;
