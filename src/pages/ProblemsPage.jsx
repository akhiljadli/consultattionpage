import React from 'react';
import { useNavigate } from 'react-router-dom';

const consultancyServices = [
  { id: 'finance', title: 'Finance Consultation', description: 'Expert guidance on financial decisions.', price: '$100' },
  { id: 'career', title: 'Career Consultation', description: 'Plan your career with astrological insights.', price: '$120' },
  { id: 'relationship', title: 'Relationship Consultation', description: 'Find solutions for your relationship concerns.', price: '$90' },
  { id: 'health', title: 'Health Consultation', description: 'Improve your health with astrological advice.', price: '$110' },
  { id: 'marriage', title: 'Marriage Consultation', description: 'Prepare for a happy married life.', price: '$130' },
];

const ProblemsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    navigate(`/appointment/${serviceId}`);
  };

  return (
    <div className="problems-page">
      <h2>Consultancy Services</h2>
      <div className="problems-list">
        {consultancyServices.map((service) => (
          <div
            key={service.id}
            className="problem-card"
            onClick={() => handleCardClick(service.id)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>Price: {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsPage;
