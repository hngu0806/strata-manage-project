import React, { useState } from 'react';

function ForRent() {
  const [formData, setFormData] = useState({
    landlord_name: '',
    email: '',
    unit_number: '',
    rent_amount: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/for_rent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit rental unit');
      setSuccessMessage('Your rental unit has been successfully listed!');
      setFormData({
        landlord_name: '',
        email: '',
        unit_number: '',
        rent_amount: ''
      });
    } catch (error) {
      setErrorMessage('Failed to submit rental unit. Please try again.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#0D0D0D',
      color: '#f5f5f5',
      padding: '40px'
    }}>
      <div style={{ 
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '32px',
          marginBottom: '24px',
          color: '#f5f5f5',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 600,
          letterSpacing: '0.02em',
          textAlign: 'center'
        }}>List Your Unit For Rent</h1>

        {successMessage && (
          <div style={{
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            border: '1px solid #28a745',
            color: '#28a745',
            textAlign: 'center'
          }}>
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div style={{
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            backgroundColor: 'rgba(220, 53, 69, 0.2)',
            border: '1px solid #dc3545',
            color: '#dc3545',
            textAlign: 'center'
          }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="landlord_name" style={{ color: '#B0B0B0', fontSize: '14px' }}>Your Name</label>
            <input
              type="text"
              id="landlord_name"
              name="landlord_name"
              value={formData.landlord_name}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#0D0D0D',
                color: '#f5f5f5',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ color: '#B0B0B0', fontSize: '14px' }}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#0D0D0D',
                color: '#f5f5f5',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="unit_number" style={{ color: '#B0B0B0', fontSize: '14px' }}>Unit Number</label>
            <input
              type="text"
              id="unit_number"
              name="unit_number"
              value={formData.unit_number}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#0D0D0D',
                color: '#f5f5f5',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="rent_amount" style={{ color: '#B0B0B0', fontSize: '14px' }}>Monthly Rent ($)</label>
            <input
              type="number"
              id="rent_amount"
              name="rent_amount"
              value={formData.rent_amount}
              onChange={handleInputChange}
              min="0"
              step="0.01"
              required
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#0D0D0D',
                color: '#f5f5f5',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#D4AF37',
              color: '#0D0D0D',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '16px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            List Unit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForRent; 