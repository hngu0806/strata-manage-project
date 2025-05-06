import React, { useState, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';

interface RentalUnit {
  id: number;
  landlord_name: string;
  email: string;
  unit_number: string;
  rent_amount: number;
  created_at: string;
  status: string;
}

function ForRent() {
  const [formData, setFormData] = useState({
    landlord_name: '',
    email: '',
    unit_number: '',
    rent_amount: ''
  });
  const [rentalUnits, setRentalUnits] = useState<RentalUnit[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useAuth();

  useEffect(() => {
    fetchRentalUnits();
  }, []);

  const fetchRentalUnits = async () => {
    try {
      const response = await fetch('https://your-backend-domain.com/api/rental_units.php');
      if (!response.ok) throw new Error('Failed to fetch rental units');
      const data = await response.json();
      setRentalUnits(data);
    } catch (error) {
      setErrorMessage('Failed to load rental units');
    }
  };

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
      const response = await fetch('https://your-backend-domain.com/api/rental_units.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      fetchRentalUnits(); // Refresh the list
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
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '32px',
          marginBottom: '24px',
          color: '#f5f5f5',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>For Rent - Available Units</h1>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '40px',
          marginTop: '40px'
        }}>
          {/* Form Section */}
          <div style={{ 
            background: '#1A1A1A',
            padding: '30px',
            borderRadius: '16px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{ color: '#D4AF37', marginTop: 0 }}>List Your Unit</h2>

            {successMessage && (
              <div style={{
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                border: '1px solid #28a745',
                color: '#28a745'
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
                color: '#dc3545'
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

          {/* Table Section */}
          <div style={{ 
            background: '#1A1A1A',
            padding: '30px',
            borderRadius: '16px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{ color: '#D4AF37', marginTop: 0 }}>Available Units</h2>

            {rentalUnits.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#B0B0B0', padding: '20px' }}>
                No units available at the moment.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333', color: '#D4AF37', fontWeight: 600 }}>Unit</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333', color: '#D4AF37', fontWeight: 600 }}>Landlord</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333', color: '#D4AF37', fontWeight: 600 }}>Contact</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333', color: '#D4AF37', fontWeight: 600 }}>Monthly Rent</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333', color: '#D4AF37', fontWeight: 600 }}>Listed On</th>
                  </tr>
                </thead>
                <tbody>
                  {rentalUnits.map((unit) => (
                    <tr 
                      key={unit.id} 
                      style={{ 
                        padding: '12px',
                        textAlign: 'left',
                        borderBottom: '1px solid #333',
                        transition: 'background-color 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#262626'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333' }}>{unit.unit_number}</td>
                      <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333' }}>{unit.landlord_name}</td>
                      <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333' }}>{unit.email}</td>
                      <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333' }}>${unit.rent_amount.toFixed(2)}</td>
                      <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #333' }}>
                        {new Date(unit.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForRent; 