import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const problemDetails = {
  finance: { title: 'Finance Consultation', price: '$100' },
  career: { title: 'Career Consultation', price: '$120' },
  relationship: { title: 'Relationship Consultation', price: '$90' },
  health: { title: 'Health Consultation', price: '$110' },
  marriage: { title: 'Marriage Consultation', price: '$130' },
};

const timeSlots = [
  '10:00 AM - 10:30 AM',
  '11:00 AM - 11:30 AM',
  '2:00 PM - 2:30 PM',
  '3:00 PM - 3:30 PM',
  '4:00 PM - 4:30 PM',
];

const AppointmentPage = () => {
  const { problemId } = useParams();
  const problem = problemDetails[problemId];

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (!selectedDate) {
      alert('Please select a date for your appointment.');
      return;
    }

    if (!selectedSlot) {
      alert('Please select a time slot before proceeding.');
      return;
    }

    setPaymentSuccess(true);
  };

  if (!problem) {
    return <p>Problem not found.</p>;
  }

  return (
    <div className="appointment-page">
      <h2>{problem.title}</h2>
      <p>Price: {problem.price}</p>

      {/* Date Picker */}
      <h3>Select a Date</h3>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="date-picker"
      />

      {/* Time Slot Picker */}
      <h3>Select a Time Slot</h3>
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`time-slot ${selectedSlot === slot ? 'active' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      {/* Payment Button */}
      <button onClick={handlePayment} className="payment-button">
        Proceed to Payment
      </button>

      {/* Confirmation Message */}
      {paymentSuccess && (
        <p className="success-message">
          Payment Successful! Your appointment is confirmed for {selectedDate} at {selectedSlot}.
        </p>
      )}
    </div>
  );
};

export default AppointmentPage;
